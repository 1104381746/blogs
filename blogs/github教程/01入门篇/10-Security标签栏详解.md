---
is_published: true
title: 10 · Security 标签栏详解
tags:
  - Security
  - GitHub教程
categories:
  - 01入门篇
---

# 10 · Security 标签栏详解

> **这篇的目标**：了解 GitHub 的安全相关功能——Dependabot、Secret scanning、Code scanning、安全策略等。

---

## 1. Security 标签页布局

进入仓库的 **More** → **Security**（或访问 /security），页面包含以下主要区域：

| 区域 | 说明 |
|------|------|
| **Overview** | 安全概览，显示所有安全功能的状态 |
| **Dependabot alerts** | 依赖漏洞警报 |
| **Dependabot security updates** | 自动安全更新 |
| **Code scanning** | 代码漏洞扫描 |
| **Secret scanning** | 密钥泄露检测 |
| **Security advisories** | 安全公告 |
| **Policy** | 安全策略设置 |

---

## 2. Dependabot

Dependabot 是 GitHub 内置的**自动依赖更新工具**。当你的项目依赖的第三方库有安全漏洞时，Dependabot 会自动：

1. 检测到漏洞
2. 创建警报（Dependabot alert）
3. 自动创建 PR 来升级依赖

### Dependabot alerts

在 /security/dependabot 查看所有依赖漏洞警报：

| 信息 | 说明 |
|------|------|
| **漏洞严重程度** | Critical / High / Moderate / Low |
| **受影响的包名** | 哪个依赖有问题 |
| **受影响的版本范围** | 哪些版本受影响 |
| **修复版本** | 升级到哪个版本可以修复 |
| **CVE 编号** | 漏洞编号（通用漏洞披露）|

点击警报可查看详情：漏洞描述、影响范围、修复建议、相关的 PR。

### 配置 Dependabot

在仓库根目录创建 .github/dependabot.yml：

```yaml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: weekly
```

---

## 3. Secret scanning

Secret scanning（密钥扫描）会自动检测仓库中是否有泄露的密钥（如 API Key、Token、密码等）。

- **GitHub 检测到**：会通知仓库管理员和密钥提供商
- **防止方式**：使用 Secrets（Settings → Secrets and variables）存储敏感信息

---

## 4. Code scanning

Code scanning（代码扫描）通过 CodeQL 分析代码中的安全漏洞。

### 启用方式

1. 进入 Security → **Code scanning**
2. 点击 **Set up code scanning**
3. 选择 CodeQL 分析或第三方工具
4. 配置并提交

### 扫描结果

扫描完成后会生成警报列表，每条包含：

- 漏洞类型（如 SQL 注入、XSS）
- 文件和行号
- 严重程度
- 修复建议

---

## 5. Security advisories

Security advisory（安全公告）是仓库管理员发布的**安全漏洞公告**。仓库维护者可以通过它：

- 描述漏洞详情
- 讨论修复方案
- 发布安全版本
- 申请 CVE 编号

### 查看

在 Security → **Advisories** 可查看已发布的安全公告。点击 **New advisory** 创建新公告。

---

## 6. Security policy

Security policy（安全策略）告诉贡献者如何报告安全漏洞。通常在仓库根目录创建 SECURITY.md 文件。

或通过 Security → **Policy** 设置。

推荐内容：

```markdown
# 安全策略

## 报告漏洞

如果发现安全漏洞，请发送邮件到 security@example.com，
不要公开提交 Issue。

## 响应时间

我们会在 48 小时内确认收到报告，并在修复后公开致谢。
```

---

## 小结

- [x] 了解 Security 标签页的各功能区域
- [x] 知道 Dependabot 如何自动更新依赖
- [x] 了解 Secret scanning 和 Code scanning
- [x] 知道如何设置安全策略

**下一篇**：学习 Insights 标签栏——分析仓库数据和贡献统计。

---

## 快速自查清单

- [ ] 我查看过仓库的 Dependabot alerts
- [ ] 我知道怎么配置自动依赖更新
- [ ] 我知道 Secret scanning 是什么
- [ ] 我设置了安全策略
