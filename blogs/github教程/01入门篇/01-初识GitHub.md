---
published: true
title: 01 · 初识GitHub
tags:
  - 入门
  - GitHub教程
categories:
  - GitHub教程
---
# 01 · 初识GitHub

> **这篇的目标**：注册好账号、看懂界面每一个按钮是干什么的、知道 GitHub 上的核心名词是什么意思。

---

## 1. GitHub 到底是什么？

用一句话说清楚：

> **GitHub 是一个"代码托管平台"**——你可以在上面存代码，别人可以看你的代码、下载你的代码、帮你改你的代码。

它本质上做了三件事：

| 功能 | 大白话解释 |
|------|-----------|
| **版本控制** | 每次修改都留记录，随时可以"回到过去"，不怕改坏 |
| **远程存储** | 代码存在云端服务器上，电脑坏了也不会丢 |
| **协作平台** | 可以方便地和别人一起开发一个项目 |

打个比方：就像 **Google Docs 写文档能随时回退版本**，但 GitHub 是做给代码用的，而且功能强大得多。

---



![GitHub 首页注册界面](https://img.luhg.cn/2026/06/github-homepage.svg)
*GitHub 首页布局：左侧"Let's build from here"标语，右侧注册表单*

---

## 2. 注册 GitHub 账号

### 步骤

**① 打开 github.com**

在浏览器输入 https://github.com 会看到 GitHub 的首页，右上角有注册区域。

**② 填写注册信息**

在首页的注册表单里填：

| 字段 | 说明 | 建议 |
|------|------|------|
| **Email** | 你的邮箱 | 最好用 Gmail 或 Outlook |
| **Password** | 密码 | 至少 8 位，包含字母和数字 |
| **Username** | 用户名 | 以后别人通过这个名字找到你（如 zhangsan-dev）|
| **Verify** | 验证码 | 按提示做一道简单的拼图验证 |

> ⚠️ **风险提示**：密码不要和其他平台用一样的，建议用密码管理器（如 Bitwarden）生成。

**③ 选择计划**

注册后会问你是 Free 还是 Team/Enterprise。**选 Free 就行**——免费版已足够学完整套教程，99% 的个人开发者都用免费版。

**④ 验证邮箱**

GitHub 会发一封确认邮件到你的邮箱，点里面的 **Verify email address** 按钮。

✅ **成功标志**：登录后能看到个人 Dashboard 页面。

---

## 3. 顶部导航栏全解

登录后，页面上方有一条导航栏，从左到右依次是：

| 区域 | 名称 | 作用 |
|------|------|------|
| ☰ | **Open menu** | 打开左侧边栏导航，所有主要功能入口在这里 |
| 🏠 | **Homepage（按 g 然后 d 回首页）** | 点一下回到 Dashboard |
| 📋 | **Breadcrumbs（面包屑导航）** | 显示当前所在页面位置，如 Dashboard |
| 🔍 | **Search or jump to…（快捷键 /）** | 搜索仓库、代码、用户、Issues|
| ➕ | **Create new...** | 新建仓库、Import 仓库、Gist、组织、项目 |
| 👤 | **Open user navigation menu** | 头像下拉菜单，包含账号所有入口 |


> 💡 **小技巧**：按键盘的 `/` 键可以快速跳转到搜索框；按 `g` 然后 `d` 快速回首页。

### 3.1 左侧边栏（汉堡菜单）

点击左上角的 ☰ **Open menu** 按钮，会打开左侧边栏，这里才是所有核心功能的入口：

**第一组：工作区**

| 入口 | 链接 | 作用 |
|------|------|------|
| **Home** | `/dashboard` | 回到 Dashboard 首页 |
| **All issues** | `/issues` | 查看所有你参与或创建的 Issue |
| **All pull requests** | `/pulls` | 查看所有你参与或创建的 PR |
| **All repositories** | `/repos` | 查看你所有的仓库列表 |
| **Projects** | `/projects` | 项目管理看板 |
| **Discussions** | `/discussions` | 讨论区 |
| **Codespaces** | `/codespaces` | 在线开发环境 |
| **Copilot** | `/copilot` | GitHub Copilot 设置 |

**第二组：发现**

| 入口 | 链接 | 作用 |
|------|------|------|
| **Explore** | `/explore` | 发现热门项目和主题 |
| **Marketplace** | `/marketplace` | Actions、Apps 等第三方工具市场 |
| **MCP registry** | `/mcp` | MCP（Model Context Protocol）注册表 |

**第三组：常用仓库**

显示你最常访问的仓库列表，每个仓库名点击即可进入。底部有 **Show more** 展开更多仓库，上方有搜索框可以快速筛选。

> 💡 **小技巧**：从左侧边栏可以直接管理你参与的 Issues 和 Pull Requests，不用一个个仓库去翻。

### 3.2 头像下拉菜单详解

点击右上角头像，展开的菜单包含：

| 选项                      | 作用                  |
| ----------------------- | ------------------- |
| **Set status**          | 设置当前状态（如"工作中""度假中"） |
| **Profile**             | 进入你的个人主页            |
| **Repositories**        | 查看你所有的仓库            |
| **Stars**               | 你 Star（收藏）过的所有仓库    |
| **Gists**               | 管理你的代码片段            |
| **Organizations**       | 你加入的组织              |
| **Enterprises**         | 企业版入口               |
| **Sponsors**            | GitHub 赞助管理         |
| **Settings**            | 个人设置（账号、安全、外观等）     |
| **Copilot settings**    | Copilot 相关设置        |
| **Feature preview**     | 尝鲜新功能               |
| **Appearance**          | 快速切换主题（亮色/暗色）       |
| **Accessibility**       | 无障碍设置               |
| **Try Enterprise Free** | 免费试用企业版             |
| **Sign out**            | 退出登录                |

> 💡 **小技巧**：最常用的几个入口是 **Settings**（设置账号和外观）、**Your repositories**（看所有仓库）、**Your stars**（找收藏过的项目）。

### 3.3 搜索框

搜索框是 GitHub 最强大的工具之一，不仅可以搜仓库，还可以搜代码、Issue、用户等。

- 直接输入关键词回车，进入搜索结果页
- 左侧可以筛选搜索类型：Repositories / Code / Issues / Pull Requests / Users / Topics
- 高级语法（后续文章会详细讲）：`stars:>1000`、`language:python`、`pushed:>2025-01-01`

> 💡 **搜索快捷键**：在任意页面按 `/` 键，光标自动跳转到搜索框。

### 3.4 新建按钮（+）

点击 ➕ 按钮，可以快速：
- **New repository**：创建新仓库
- **Import repository**：从其他平台导入仓库
- **New gist**：创建代码片段
- **New organization**：新建组织
- **New project**：新建项目

## 4. Dashboard（仪表盘）

登录后第一眼看到的页面就是 **Dashboard（仪表盘）**，它是 GitHub 的"首页"，集中展示你所有仓库的最新动态、快捷入口和推荐内容。

### 4.1 页面布局总览

登录后的 Dashboard 分为四个区域：

| 区域 | 内容 |
|------|------|
| **顶栏（全局导航）** | GitHub Logo · Search or jump to… · Create (+) · 头像 |
| **左侧栏** | Top Repositories 列表（带搜索过滤）+ Show more |
| **中央区顶部** | Copilot Chat 输入框和快捷命令按钮 |
| **主 Feed 区** | 活动时间线（Star / Fork / Push / PR / Issue 等事件）|

### 4.2 左侧栏：Top Repositories

- 显示你最近操作过的仓库列表
- 点击 **Show more** 展开全部仓库
- 顶部有搜索框 **Find a repository…**，可以快速筛选
- 点击 **Show more** 展开全部仓库

### 4.4 主 Feed 区：活动时间线

这是 Dashboard 的核心区域，顶部有 **Filter** 和 **Explore** 按钮：

- **Filter**：按事件类型筛选（仅看 Star / Fork / Push / PR / Issue / Release 等）
- **Explore**：跳转到 Explore 发现页

Feed 中的事件类型包括：

- **Release** — 仓库发布了新版本
- **Starred** — 你关注的人给某个仓库点了 Star
- **Forked** — 有人 Fork 了你的仓库
- **Push** — 有人推送了代码
- **Pull Request** — 有人创建或合并了 PR
- **Issue** — 有人创建或关闭了 Issue

> **小技巧**：在 Feed 中点击任意事件可以直接跳到对应仓库的详情页，是发现新项目和了解同行动态的好方式。

### 4.3 Copilot Chat（如已开启）

如果开启了 GitHub Copilot，Dashboard 中央区顶部会显示 Copilot Chat 输入框和快捷命令按钮：

| 快捷命令按钮 | 作用 |
|------|------|
| **Agent** | 让 Copilot 代理执行复杂任务 |
| **Create issue** | 快速创建 Issue |
| **Write code** | 让 Copilot 帮你写代码 |
| **Git** | Git 相关操作帮助 |
| **Pull requests** | PR 相关操作帮助 |

输入框支持 @ 引用上下文（如 @file、@repo），也可以上传文件。

---

## 5. 个人 Settings

点右上角头像 → **Settings**，进入个人设置页面。

左侧导航栏包含 25+ 个设置项，按功能分组排列。以下是当前 GitHub 左侧导航的完整结构（按实际顺序）：

![image.png](https://img.luhg.cn/2026/06/20260610133802188.png)
*左侧导航栏：从上到下分为多个功能组*

### ① Public profile（个人资料）

| 字段 | 作用 | 建议 |
|------|------|------|
| **Profile photo** | 头像 | 上传一张你的照片或喜欢的头像 |
| **Name** | 显示名称 | 真实姓名或昵称 |
| **Bio** | 个人简介 | 一句话介绍（如"后端开发，正在学 GitHub"）|
| **URL** | 个人网站 | 如果有博客填这里 |
| **Company** | 公司 | 可选 |
| **Location** | 位置 | 可选 |

### ② Account（账号）

> ⚠️ **风险提示**：这部分涉及账号安全，请仔细阅读。

| 设置 | 说明 |
|------|------|
| **Change username** | 修改用户名，改名后旧的仓库 URL 会自动重定向 |
| **Export account data** | 下载你的所有 GitHub 数据（仓库、Issue、PR 等）|
| **Delete account** | **不可逆操作**。永久删除账号，所有仓库、Star、Fork 全部消失 |

### ③ Appearance（外观设置）

| 选项 | 效果 |
|------|------|
| **Light** | 亮色主题（默认）|
| **Dark** | 暗色主题（护眼）|
| **Auto** | 跟随系统设置 |

### ④ Accessibility（无障碍设置）

控制 GitHub 界面的可访问性偏好：

| 设置 | 说明 |
|------|------|
| **Keyboard shortcuts** | 全局键盘快捷键开关，关闭后需用修饰键的快捷键仍可用 |
| **Character keys** | 单键快捷键（如 `g` `n` `?`），关闭后可防止误触 |
| **Motion（动画）** | 控制动图是否自动播放：跟随系统 / 启用 / 禁用 |
| **Link underlines** | 链接下划线显示/隐藏 |
| **Hovercards** | 悬停预览卡片开关 |
| **URL paste behavior** | 粘贴 URL 时自动格式化为 Markdown 链接 |
| **Assistive technology hints** | 辅助技术提示（含屏幕阅读器声控提示开关）|

### ⑤ Notifications（通知设置）

控制 GitHub 什么时候给你发邮件/推送。默认会被通知轰炸的话，可以把 **Email notification preference** 改成 **Only on participating**。

---

### ⑥ Access（访问与安全）

> 这一组包含账号安全和访问相关的所有设置。

**Emails（邮箱管理）**

> 💡 勾上 **Block command line pushes that expose my email** 可以防止命令行推送时泄露你的私人邮箱。

| 设置 | 说明 |
|------|------|
| **Add email address** | 添加备用邮箱 |
| **Primary email address** | 设置主邮箱（用于接收通知和找回密码）|
| **Backup email address** | 设置备用邮箱，用于账号恢复 |

**Password and authentication（密码与身份验证）**

这是账号安全的**核心区域**，所有登录相关的设置都在这里：

| 设置 | 说明 |
|------|------|
| **Current/New password** | 修改密码 |
| **Two-factor authentication（2FA）** | **强烈建议开启**。开启后除了密码还要输入验证码 |
| **Passkeys** | 用指纹/面容登录，比密码更安全便捷 |
| **Signed sessions** | 查看当前登录的设备，可远程注销 |

**Sessions（会话管理）**

查看所有已登录的设备，可以远程注销不需要的会话。

**SSH and GPG keys（密钥管理）**

- **SSH keys**：配置后可以通过 SSH 协议推送代码，不用每次输密码
- **GPG keys**：用于给 commit 签名，验证身份真实性

**Organizations（组织管理）**

查看和管理你加入或创建的组织。

**Billing and licensing（账单与许可）**

账单信息、付费计划、许可证管理。免费用户基本用不到。

**Enterprises（企业版）**

企业级账号入口，普通用户用不到。

**Moderation（审核与举报）**

管理被举报的内容、已屏蔽的用户列表等。普通用户很少用到。

---

### ⑦ Code, planning, and automation（代码与自动化）

| 设置 | 说明 |
|------|------|
| **Repositories** | 仓库默认设置（默认分支名、合并策略、仓库模板等）|
| **Codespaces** | 在线开发环境设置 |
| **Models** | GitHub Models 预览功能 |
| **Packages** | 包管理设置 |
| **Copilot** | GitHub Copilot 订阅与配置 |
| **Pages** | GitHub Pages 站点设置 |
| **Saved replies** | 预设回复模板，在 Issue/PR 评论中快速复用 |

---

### ⑧ 其他重要设置速查

| 导航分组 | 设置项 | 作用 |
|---------|--------|------|
| **Security** | Code security | 代码安全与分析设置（Dependabot、Secret scanning 等）|
| **Integrations** | Applications | 已授权的 OAuth App 和 GitHub App |
| **Integrations** | Scheduled reminders | 定期提醒（如 PR 待审）|
| **Archives** | Security log | 所有安全相关操作日志 |
| **Archives** | Sponsorship log | 赞助相关记录 |
| **底部** | Developer settings | OAuth Apps、Personal access tokens 等开发者工具 |

> 💡 新手不需要全部记住。先知道这些设置在哪儿就行，用到哪项时再回来翻。

---


## 6. Profile 页面

点右上角头像 → **profile**，进入你的个人主页。

| 区域       | 名字                    | 说明                         |
| -------- | --------------------- | -------------------------- |
| **热门仓库** | Popular repos         | 你 Star 最多或 Pinned 的仓库      |
| **贡献图**  | Contribution graph    | 每天提交代码会变绿                  |
| **活跃概览** | Contribution activity | 最近的 Commit / PR / Issue 事件 |


---


## 小结

这第一篇学了：

- [x] GitHub 是什么（代码托管 + 版本控制 + 协作平台）
- [x] 注册了一个免费账号
- [x] 认识顶部导航栏的每一个按钮
- [x] 知道 Settings 在哪，重要设置项的位置
- [x] 看过 Profile 页面的各个区域
- [x] 能说出导航栏上每个按钮的名字

**下一篇**带你学会如何探索 GitHub 上的好项目——用 Explore 发现趋势、用高级搜索精准定位代码，再也不用担心找不到想要的开源项目。

---

## 快速自查清单

- [ ] 我已经注册了 GitHub 账号并验证了邮箱
- [ ] 我能说出导航栏上每个按钮的名字
- [ ] 我知道 Settings 在哪
- [ ] 我能说出 GitHub 用来做什么的


