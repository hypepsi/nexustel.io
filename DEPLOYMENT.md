# 部署指南

## 📤 首次推送到 GitHub

代码已准备好，但需要你手动完成推送（需要 GitHub 认证）。

### 方法一：使用 SSH（推荐）

1. **配置 SSH 密钥**（如果还没有）：
   ```bash
   ssh-keygen -t ed25519 -C "admin@nexustel.io"
   cat ~/.ssh/id_ed25519.pub
   ```
   将公钥添加到 GitHub：Settings → SSH and GPG keys → New SSH key

2. **添加 GitHub 主机密钥**：
   ```bash
   ssh-keyscan github.com >> ~/.ssh/known_hosts
   ```

3. **推送代码**：
   ```bash
   cd /root/my-next-app
   git remote set-url origin git@github.com:hypepsi/nexustel.io.git
   git push -u origin main
   ```

### 方法二：使用 HTTPS + Personal Access Token

1. **创建 Personal Access Token**：
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 选择权限：`repo`（完整仓库权限）
   - 复制生成的 token

2. **推送代码**：
   ```bash
   cd /root/my-next-app
   git remote set-url origin https://github.com/hypepsi/nexustel.io.git
   git push -u origin main
   # 用户名：你的 GitHub 用户名
   # 密码：粘贴刚才生成的 token
   ```

## 🚀 在新服务器上部署

### 快速部署（一键）

```bash
# 克隆仓库
git clone https://github.com/hypepsi/nexustel.io.git
cd nexustel.io

# 运行部署脚本
sudo bash install.sh
```

### 手动部署步骤

详见 [README.md](./README.md) 中的"生产部署"部分。

## 🔄 更新部署

```bash
# 进入项目目录
cd /root/my-next-app  # 或你的项目路径

# 拉取最新代码
git pull origin main

# 安装新依赖（如有）
npm install

# 重新构建
npm run build

# 重启应用
pm2 restart nexus-telecom

# 验证
curl -I http://localhost:3000
```

## 📝 注意事项

1. **首次部署**：确保 DNS 记录已配置（A 记录指向服务器 IP）
2. **SSL 证书**：Let's Encrypt 会自动续期，无需手动操作
3. **PM2 持久化**：已配置开机自启，服务器重启后应用会自动启动
4. **内存限制**：PM2 配置为 800MB，适合 2核4GB 服务器
