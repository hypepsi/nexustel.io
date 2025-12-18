module.exports = {
  apps: [{
    name: 'nexus-telecom',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: process.cwd(), // 使用当前工作目录，适配任何部署路径
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '800M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_TELEMETRY_DISABLED: '1'
    }
  }]
};
