---
published: true
title: 12 · 仓库 Settings（上）
tags:
  - Settings
  - GitHub教程
categories:
  - GitHub教程
---

# 12 · 仓库 Settings（上）

> **这篇的目标**：熟练掌握仓库 Settings 页面的常用设置——基本设置、分支保护、协作管理。

---

## 1. 进入仓库 Settings

进入任意仓库后，点击顶部导航栏的 **Settings** 标签（在 More 中）。页面左侧有完整的设置分类导航。

---

## 2. General（通用设置）

### 2.1 仓库名称和描述

| 字段 | 说明 |
|------|------|
| **Repository name** | 修改仓库名（旧链接自动重定向）|
| **Description** | 仓库的简短描述 |
| **Website** | 项目官网链接 |
| **Topics** | 主题标签 |

### 2.2 可见性和功能

| 设置 | 说明 |
|------|------|
| **Template repository** | 设为模板仓库，别人可基于此创建 |
| **Sponsorship** | 开启赞助按钮 |
| **Wikis** | 启用/禁用 Wiki |
| **Issues** | 启用/禁用 Issue |
| **Pull Requests** | 启用 PR 功能 |
| **Discussions** | 启用/禁用讨论区 |
| **Projects** | 启用项目看板 |
| **Allow auto-merge** | 允许自动合并 |
| **Always suggest updating PR branches** | 总是建议更新 PR 分支 |
| **Allow merge commits** | 允许合并提交 |
| **Allow squash merging** | 允许压缩合并 |
| **Allow rebase merging** | 允许变基合并 |

### 2.3 存档和删除

| 操作 | 说明 | 风险 |
|------|------|------|
| **Archive this repository** | 设为只读，不可再修改 | 可恢复 |
| **Delete this repository** | 永久删除 | ⚠️ **不可逆** |

---

## 3. Branches（分支设置）

### 3.1 Default branch（默认分支）

设置仓库的默认分支（通常是 main）。修改后新建的 PR 和 Issue 默认指向该分支。

### 3.2 Branch protection rules（分支保护规则）

分支保护规则是仓库管理的重要功能，可以防止误操作。

**典型配置：保护 main 分支**

| 规则 | 说明 |
|------|------|
| **Require a pull request before merging** | 禁止直接 push 到该分支，必须通过 PR |
| **Require approvals** | 需要至少 N 个审查通过 |
| **Dismiss stale pull request approvals** | 新推送后之前的审批自动失效 |
| **Require review from Code Owners** | 需要 Code Owner 审查 |
| **Require status checks** | 需要 CI 检查通过 |
| **Require conversation resolution** | 必须解决所有评论 |
| **Require signed commits** | 需要 GPG 签名 |
| **Require linear history** | 禁止合并提交，只能用变基 |
| **Do not allow bypassing the above settings** | 管理员也不能绕过 |
| **Restrict deletions** | 禁止删除该分支 |

**添加规则步骤**：
1. 点击 **Add branch protection rule**
2. 在 Branch name pattern 输入 main
3. 勾选需要的规则
4. 点击 **Create**

---

## 4. Collaborators and teams（协作管理）

### 4.1 添加协作者

| 角色 | 权限 |
|------|------|
| **Read** | 只能查看和克隆代码 |
| **Triage** | 可以管理 Issue 和 PR |
| **Write** | 可以直接 push 代码 |
| **Maintain** | 可以管理仓库设置（除敏感操作）|
| **Admin** | 完全控制 |

**添加步骤**：
1. 点击 **Add people**
2. 输入用户名或邮箱
3. 选择权限角色
4. 点击 **Add**

### 4.2 Teams（团队管理）

针对组织（Organization）的仓库，可以通过 Teams 管理一组人的权限。

---

## 5. Moderation（审核设置）

| 功能 | 说明 |
|------|------|
| **Interaction limits** | 限制互动：可限制特定用户或未参与的用户的互动 |
| **Code review limits** | 限制代码审查 |
| **Blocked users** | 屏蔽用户列表 |

---

## 小结

- [x] 掌握 General 设置页面的各项功能
- [x] 学会配置分支保护规则
- [x] 知道如何添加协作者和设置权限
- [x] 了解存档和删除仓库的风险

**下一篇**：继续学习仓库 Settings（下）—— Secrets、Webhooks、Pages、Actions 设置等。

---

## 快速自查清单

- [ ] 我知道如何修改仓库名称
- [ ] 我配置过分支保护规则
- [ ] 我知道五种协作者角色的区别
- [ ] 我知道存档和删除的区别
