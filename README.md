# Nexus Telecom - nexustel.io

现代化的电信运营商网站，使用 Next.js 16 + TypeScript + Tailwind CSS 构建。

## 🚀 快速开始

### 前置要求

- Node.js 18+ 
- npm 或 yarn
- Linux 服务器（Ubuntu/Debian 推荐）

### 本地开发

```bash
# 克隆仓库
git clone git@github.com:hypepsi/nexustel.io.git
cd nexustel.io

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 📦 生产部署（一键部署）

### 方法一：使用自动化部署脚本（推荐）

在全新的 Linux 服务器上，只需运行一个命令：

```bash
# 克隆项目
git clone git@github.com:hypepsi/nexustel.io.git
cd nexustel.io

# 运行部署脚本（需要 root 权限）
sudo bash install.sh
```

部署脚本会自动完成：
- ✅ 系统更新和依赖安装
- ✅ Node.js 环境配置
- ✅ 项目构建
- ✅ PM2 进程管理（自动启动、持久化）
- ✅ Nginx 反向代理配置
- ✅ SSL 证书申请（Let's Encrypt）
- ✅ 防火墙配置

### 方法二：手动部署

#### 1. 系统准备

```bash
# 更新系统
sudo apt-get update && sudo apt-get upgrade -y

# 安装必要工具
sudo apt-get install -y curl git nginx certbot python3-certbot-nginx
```

#### 2. 安装 Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -
sudo apt-get install -y nodejs
```

#### 3. 克隆并构建项目

```bash
git clone git@github.com:hypepsi/nexustel.io.git
cd nexustel.io
npm install
npm run build
```

#### 4. 使用 PM2 启动应用

```bash
# 安装 PM2
sudo npm install -g pm2

# 启动应用
pm2 start ecosystem.config.js

# 设置开机自启
pm2 startup
pm2 save
```

#### 5. 配置 Nginx

创建 `/etc/nginx/sites-available/nexustel.io`：

```nginx
server {
    listen 80;
    server_name nexustel.io www.nexustel.io;
    
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
}
```

启用配置：

```bash
sudo ln -s /etc/nginx/sites-available/nexustel.io /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 6. 申请 SSL 证书

```bash
sudo certbot --nginx -d nexustel.io -d www.nexustel.io
```

## 🛠️ 常用命令

### 开发

```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run lint         # 代码检查
```

### PM2 管理

```bash
pm2 list             # 查看运行状态
pm2 logs nexus-telecom    # 查看日志
pm2 restart nexus-telecom # 重启应用
pm2 stop nexus-telecom    # 停止应用
pm2 delete nexus-telecom # 删除应用
```

### 更新代码

```bash
# 拉取最新代码
git pull origin main

# 重新构建
npm run build

# 重启应用
pm2 restart nexus-telecom
```

## 📁 项目结构

```
nexustel.io/
├── app/                    # Next.js App Router
│   ├── components/         # React 组件
│   │   ├── Navbar.tsx     # 导航栏
│   │   ├── Footer.tsx     # 页脚
│   │   ├── PricingCard.tsx # 价格卡片
│   │   └── CoverageMap.tsx # 覆盖地图
│   ├── mobile/            # 移动套餐页面
│   ├── business/          # 企业解决方案页面
│   ├── coverage/          # 覆盖范围页面
│   └── page.tsx           # 首页
├── lib/
│   └── constants.ts       # 统一数据源（套餐、联系方式等）
├── public/                # 静态资源
├── ecosystem.config.js    # PM2 配置
├── install.sh            # 一键部署脚本
├── next.config.ts         # Next.js 配置
└── package.json           # 项目依赖
```

## 🎨 技术栈

- **Next.js 16** - React 全栈框架（App Router）
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 实用优先的 CSS 框架
- **Lucide React** - 图标库
- **React Leaflet** - 交互式地图
- **PM2** - 进程管理
- **Nginx** - 反向代理
- **Let's Encrypt** - SSL 证书

## 🔧 配置说明

### PM2 配置 (`ecosystem.config.js`)

- 应用名称：`nexus-telecom`
- 端口：`3000`
- 内存限制：`800MB`（适合 2核4GB 服务器）
- 自动重启：启用
- 生产模式：`NODE_ENV=production`

### Next.js 配置 (`next.config.ts`)

- 图片优化：支持 Unsplash
- React 严格模式：启用
- 移除 `X-Powered-By` 头：提升安全性

### 数据源 (`lib/constants.ts`)

所有套餐数据和联系方式统一管理，确保全站数据一致性。

## 🌐 域名配置

部署前确保：

1. **DNS 记录**已配置：
   - `A` 记录：`nexustel.io` → 服务器 IP
   - `A` 记录：`www.nexustel.io` → 服务器 IP

2. **防火墙**已开放：
   - 端口 `80` (HTTP)
   - 端口 `443` (HTTPS)
   - 端口 `22` (SSH)

## 📝 环境变量

如需配置环境变量，创建 `.env.local` 文件：

```env
NODE_ENV=production
PORT=3000
NEXT_TELEMETRY_DISABLED=1
```

**注意**：`.env.local` 已在 `.gitignore` 中，不会被提交到仓库。

## 🐛 故障排查

### 应用无法启动

```bash
# 检查端口占用
lsof -ti:3000

# 检查 PM2 日志
pm2 logs nexus-telecom --lines 50

# 检查 Node.js 版本
node --version  # 需要 18+
```

### Nginx 502 错误

```bash
# 检查应用是否运行
pm2 list

# 检查 Nginx 配置
sudo nginx -t

# 查看 Nginx 错误日志
sudo tail -f /var/log/nginx/error.log
```

### SSL 证书问题

```bash
# 手动续期证书
sudo certbot renew

# 测试自动续期
sudo certbot renew --dry-run
```

## 🔄 更新部署流程

1. **拉取最新代码**
   ```bash
   git pull origin main
   ```

2. **安装新依赖**（如有）
   ```bash
   npm install
   ```

3. **重新构建**
   ```bash
   npm run build
   ```

4. **重启应用**
   ```bash
   pm2 restart nexus-telecom
   ```

5. **验证**
   ```bash
   curl -I http://localhost:3000
   ```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**部署问题？** 查看 [部署文档](./DEPLOYMENT.md) 或提交 Issue。
