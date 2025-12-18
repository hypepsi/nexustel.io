#!/bin/bash

###########################################
# Nexus Telecom - Zero Touch Deployment
# Domain: nexustel.io
# Tech: Next.js + PM2 + Nginx + Let's Encrypt
###########################################

set -e  # Exit on any error

echo "========================================="
echo "🚀 Nexus Telecom Deployment Script"
echo "========================================="

# Configuration
DOMAIN="nexustel.io"
WWW_DOMAIN="www.nexustel.io"
EMAIL="admin@nexustel.io"
# 自动检测脚本所在目录（支持从任何位置运行）
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_NAME="nexus-telecom"
PORT=3000

echo ""
echo "📋 Configuration:"
echo "   Domain: $DOMAIN"
echo "   WWW Domain: $WWW_DOMAIN"
echo "   Email: $EMAIL"
echo "   Port: $PORT"
echo ""

###########################################
# Step 1: System Prep
###########################################
echo "📦 Step 1/6: Updating system packages..."
apt-get update -y
apt-get upgrade -y

echo "📦 Installing required packages..."
apt-get install -y curl git nginx certbot python3-certbot-nginx ufw

echo "✅ System packages installed"
echo ""

###########################################
# Step 2: Node.js Environment
###########################################
echo "📦 Step 2/6: Setting up Node.js environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js not found. Installing Node.js LTS..."
    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
    apt-get install -y nodejs
else
    echo "Node.js already installed: $(node --version)"
fi

echo "✅ Node.js ready: $(node --version)"
echo "✅ npm ready: $(npm --version)"
echo ""

###########################################
# Step 3: Project Build
###########################################
echo "🔨 Step 3/6: Building Next.js project..."

cd "$APP_DIR"

echo "Installing dependencies..."
npm install

echo "Building production bundle..."
npm run build

echo "✅ Project built successfully"
echo ""

###########################################
# Step 4: PM2 Persistence (Critical)
###########################################
echo "🔄 Step 4/6: Setting up PM2 process manager..."

# Install PM2 globally if not present
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2 globally..."
    npm install -g pm2
else
    echo "PM2 already installed: $(pm2 --version)"
fi

# Stop any existing PM2 process
echo "Stopping any existing PM2 processes..."
pm2 delete $APP_NAME 2>/dev/null || true

# Start the Next.js app with PM2
echo "Starting Next.js app with PM2..."
cd "$APP_DIR"
pm2 start npm --name "$APP_NAME" -- start

# CRITICAL: Automate PM2 startup
echo "Configuring PM2 to start on system boot..."

# Generate startup script and capture the command
STARTUP_CMD=$(pm2 startup | grep "sudo env" | tail -1)

if [ -n "$STARTUP_CMD" ]; then
    echo "Executing PM2 startup command..."
    eval "$STARTUP_CMD"
else
    echo "⚠️  Warning: Could not auto-detect PM2 startup command"
    echo "Run manually: pm2 startup"
fi

# Save PM2 process list
echo "Saving PM2 process list..."
pm2 save

echo "✅ PM2 configured and persistent across reboots"
pm2 list
echo ""

###########################################
# Step 5: Nginx Configuration
###########################################
echo "🌐 Step 5/6: Configuring Nginx..."

# Remove default Nginx config
echo "Removing default Nginx configuration..."
rm -f /etc/nginx/sites-enabled/default

# Create new Nginx configuration for nexustel.io
echo "Writing Nginx configuration for $DOMAIN..."
cat > /etc/nginx/sites-available/$DOMAIN <<'EOF'
server {
    listen 80;
    listen [::]:80;
    
    server_name nexustel.io www.nexustel.io;
    
    # Proxy to Next.js app on port 3000
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Static files optimization
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, max-age=3600, immutable";
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/

# Test Nginx configuration
echo "Testing Nginx configuration..."
nginx -t

# Reload Nginx
echo "Reloading Nginx..."
systemctl reload nginx

echo "✅ Nginx configured and running"
echo ""

###########################################
# Step 6: SSL with Let's Encrypt (Non-Interactive)
###########################################
echo "🔒 Step 6/6: Obtaining SSL certificate..."

# Check if certificate already exists
if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    echo "SSL certificate already exists. Renewing if needed..."
    certbot renew --quiet --nginx
else
    echo "Obtaining new SSL certificate for $DOMAIN and $WWW_DOMAIN..."
    
    # Run Certbot in non-interactive mode
    certbot --nginx \
        --non-interactive \
        --agree-tos \
        --redirect \
        --email "$EMAIL" \
        -d "$DOMAIN" \
        -d "$WWW_DOMAIN"
fi

echo "✅ SSL certificate installed and HTTPS redirect enabled"
echo ""

###########################################
# Step 7: Firewall Configuration
###########################################
echo "🔥 Configuring UFW firewall..."

# Allow SSH (important!)
ufw allow 22/tcp

# Allow HTTP and HTTPS
ufw allow 80/tcp
ufw allow 443/tcp

# Enable firewall (with auto-confirm)
ufw --force enable

echo "✅ Firewall configured"
echo ""

###########################################
# Final Status Check
###########################################
echo "========================================="
echo "✅ DEPLOYMENT COMPLETE!"
echo "========================================="
echo ""
echo "📊 Service Status:"
echo "   ├─ Next.js App: $(pm2 describe $APP_NAME > /dev/null 2>&1 && echo '✅ Running' || echo '❌ Not Running')"
echo "   ├─ Nginx: $(systemctl is-active nginx > /dev/null 2>&1 && echo '✅ Active' || echo '❌ Inactive')"
echo "   └─ SSL: $([ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ] && echo '✅ Installed' || echo '⚠️  Not Found')"
echo ""
echo "🌐 Your site is now live at:"
echo "   https://$DOMAIN"
echo "   https://$WWW_DOMAIN"
echo ""
echo "📝 Useful Commands:"
echo "   ├─ View logs: pm2 logs $APP_NAME"
echo "   ├─ Restart app: pm2 restart $APP_NAME"
echo "   ├─ Check status: pm2 status"
echo "   └─ Nginx logs: tail -f /var/log/nginx/error.log"
echo ""
echo "🔄 PM2 Auto-Startup: Configured (survives reboot)"
echo "🔒 SSL Auto-Renewal: Configured (certbot timer)"
echo ""
echo "========================================="
echo "🎉 Nexus Telecom is LIVE!"
echo "========================================="






