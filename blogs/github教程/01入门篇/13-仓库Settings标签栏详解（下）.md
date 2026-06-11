---
date: 2026-06-11
is_published: true
title: 13 · 仓库 Settings（下）
tags:
  - Settings
  - GitHub教程
categories:
  - 01入门篇
---

# 13 · 仓库 Settings（下）

> **这篇的目标**：深入仓库 Settings 的高级功能——Secrets、Webhooks、Pages、Actions、Security 等。

---

## 1. Secrets and variables

### 1.1 Actions secrets

用于存储工作流中使用的敏感信息，如 API Key、Token、密码。

**添加步骤**：
1. 进入 Settings → **Secrets and variables** → **Actions**
2. 点击 **New repository secret**
3. 输入名称（如 DEPLOY_TOKEN）
4. 输入值
5. 点击 **Add secret**

### 1.2 Variables

存储普通变量（如版本号、配置值），和工作流中的 ars.XXX 对应。

### 1.3 Dependabot secrets

专门给 Dependabot 使用的密钥，用于访问私有注册表等。

### 1.4 Codespaces secrets

给 Codespaces 在线开发环境使用的密钥。

### 1.5 Environments（环境）

可以为不同的部署环境（production、staging）设置独立的变量和密钥。

---

## 2. Webhooks

Webhooks 是 GitHub 的**事件通知机制**。当仓库发生特定事件时（如 push、PR 合并），GitHub 会向指定的 URL 发送 HTTP 请求。

### 用途

- 自动触发 CI/CD 流水线
- 同步代码到其他平台
- 发送通知到聊天工具（Slack、Discord）

### 添加步骤

1. 进入 Settings → **Webhooks**
2. 点击 **Add webhook**
3. 填写 Payload URL（接收通知的地址）
4. 选择 Content type（pplication/json 或 pplication/x-www-form-urlencoded）
5. 选择触发事件：
   - **Just the push event**：仅推送事件
   - **Send me everything**：所有事件
   - **Let me select individual events**：自定义
6. 点击 **Add webhook**

### 验证

- 绿色 ✅ 标记表示 Webhook 配置成功
- 红色 ❌ 标记表示发送失败，可查看最近的投递记录

---

## 3. Pages（GitHub Pages）

GitHub Pages 可以把你的仓库直接发布为静态网站。

### 启用步骤

1. 进入 Settings → **Pages**
2. Source 选择部署来源：
   - **Deploy from a branch**：从指定分支发布
   - **GitHub Actions**：通过工作流发布
3. 选择分支（通常为 main 或 gh-pages）
4. 选择目录（/ 根目录或 /docs）
5. 点击 **Save**

### 自定义域名

- 在 Pages 设置中可以绑定自定义域名
- 勾选 **Enforce HTTPS** 开启强制 HTTPS

---

## 4. Actions（Actions 设置）

| 设置 | 说明 |
|------|------|
| **Actions permissions** | 允许/禁止 Actions 运行 |
| **Allow all actions** | 允许所有 Action |
| **Allow local actions only** | 仅允许本仓库的 Action |
| **Allow select actions** | 只允许特定的 Action |
| **Fork pull request workflows** | 控制从 Fork 发起的 PR 是否运行工作流 |

---

## 5. Rules（规则设置）

### 5.1 Rulesets（规则集）

Rulesets 是比分支保护规则更灵活的新版规则系统：

- 可以设置多条规则
- 支持按文件路径、分支模式等条件匹配
- 支持强制签名、限制文件大小等

### 5.2 Push rules

限制 push 操作：
- 禁止特定文件类型
- 限制文件大小
- 限制提交信息格式

---

## 6. Security（安全设置）

| 区域 | 说明 |
|------|------|
| **Code security and analysis** | 代码安全分析设置 |
| **Dependabot security updates** | 自动创建安全更新的 PR |
| **Secret scanning** | 启用密钥扫描 |
| **Code scanning** | 启用代码扫描 |
| **Private vulnerability reporting** | 允许私下报告漏洞 |

---

## 7. 其他设置

| 设置 | 说明 |
|------|------|
| **Stale branches** | 查看和管理长期未更新的分支 |
| **Notifications** | 通知偏好设置 |
| **Integrations** | 查看已安装的 GitHub Apps |
| **Deploy keys** | 部署密钥，只读访问仓库的 SSH 密钥 |
| **About** | 仓库基本属性 |

---

## 小结

- [x] 知道 Secrets 和 Variables 的用途
- [x] 了解 Webhooks 的配置方法
- [x] 会启用 GitHub Pages
- [x] 了解 Actions 权限控制和 Rulesets

**下一篇**：进入进阶篇——学习分支的详细操作与管理。

---

## 快速自查清单

- [ ] 我配置过 Actions secret
- [ ] 我了解 Webhooks 的用途
- [ ] 我开启了 GitHub Pages
- [ ] 我知道 Rulesets 和分支保护规则的区别
