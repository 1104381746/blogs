---
is_published: true
title: 06 · Issues 标签栏详解
tags:
  - Issues
  - GitHub教程
categories:
  - GitHub教程
---

# 06 · Issues 标签栏详解

> **这篇的目标**：学会使用 Issues——提交 Bug 报告、提需求、参与讨论、管理项目任务。

---

## 1. Issues 是什么

Issue（问题/议题）是 GitHub 上的讨论帖，用来报告 Bug、提功能需求、提问、任务跟踪等。

> 一句话：**Issue 就是项目的 TODO 和问题反馈区**。

---

## 2. Issues 列表页布局

进入仓库后点击 **Issues** 标签（或访问 /issues），页面结构如下：

### 2.1 顶部提示条

如果是首次贡献，会显示引导信息，教你如何阅读贡献指南和找适合新手的 Issue。

### 2.2 搜索栏

| 区域 | 说明 |
|------|------|
| **搜索框** | 搜索 Issue 标题和内容，支持高级语法 |
| **Filters** | 快速过滤按钮 |
| **Labels** | 标签管理（按颜色分类） |
| **Milestones** | 里程碑管理 |
| **New issue** | 新建 Issue 按钮 |

搜索框内置了快捷语法：is:issue is:open 表示"未打开的 Issue"。

### 2.3 列表区域

| 元素 | 说明 |
|------|------|
| **Open / Closed** 标签页 | 切换查看未解决/已关闭的 Issue |
| **Author** | 按作者筛选 |
| **Labels** | 按标签筛选 |
| **Actions** | 更多操作 |

每条 Issue 条目展示：

- **标题**（点击进入详情）
- **#编号**（唯一标识，如 #36722）
- **状态图标**（🟢 Open 绿色开放 / 🟣 Closed 紫色已关闭）
- **标签**（如 bug、enhancement、good first issue）
- **作者** 和 **打开时间**
- **评论数**
- **指派人**（Assignee）

---

## 3. 创建 Issue

点击 **New issue** 按钮：

### 步骤

**① 选择模板**（如果仓库配置了模板）

常见模板类型：
- Bug report：报告 Bug
- Feature request：提功能需求
- Blank issue：空白模板

**② 填写标题和内容**

| 字段 | 说明 |
|------|------|
| **Title** | 简明扼要描述问题 |
| **Write** | 详细描述（支持 Markdown） |
| **Preview** | 预览渲染效果 |

**③ 右侧设置选项**

| 选项 | 说明 |
|------|------|
| **Assignees** | 指派给特定的人处理 |
| **Labels** | 打标签分类 |
| **Projects** | 关联到项目看板 |
| **Milestone** | 关联到里程碑 |
| **Linked pull request** | 关联 PR |

**④ 点击 Submit new issue**

### 建议格式

对于 Bug 报告，建议包含：

- 问题描述
- 复现步骤
- 期望行为 vs 实际行为
- 运行环境（操作系统、版本等）
- 截图或错误日志

---

## 4. Issue 详情页

点击 Issue 标题进入详情页，包含：

| 区域 | 说明 |
|------|------|
| **标题和编号** | 可编辑修改 |
| **状态** | Open / Closed |
| **作者信息** | 头像 + 用户名 + 创建时间 |
| **正文内容** | Markdown 渲染后的描述 |
| **评论区** | 多人讨论区域 |
| **侧边栏** | Assignees、Labels、Projects、Milestone、Linked PR |

### 评论功能

- 每条评论支持 Markdown 格式
- 可以 @ 提及其他人
- 可添加图片（拖拽或粘贴）
- 支持代码块语法高亮
- 可用 emoji 反应

### 关闭 Issue

- 点击 **Close issue** 按钮
- 或通过 commit 消息自动关闭（如 Fixes #36722）

---

## 5. Labels 标签管理

标签用来给 Issue 分类。访问 /labels 可以查看所有标签，常见标签包括：

| 标签 | 颜色 | 含义 |
|------|------|------|
| bug | 🟥 | 程序 Bug |
| enhancement | 🟩 | 功能增强 |
| good first issue | 🟨 | 适合新手的 Issue |
| help wanted | 🟦 | 需要帮助 |
| documentation | 🟪 | 文档相关 |
| duplicate | ⬜ | 重复 Issue |
| invalid | ⬜ | 无效 |
| question | 🟧 | 提问 |

### 管理标签

- 点击 **Labels** 进入标签管理
- 可编辑颜色和名称
- 可删除标签
- 仓库管理员可创建自定义标签

---

## 6. Milestones 里程碑

Milestone 用来将 Issue 归组到某个版本或时间节点。点击 **Milestones** 进入管理页。

| 字段 | 说明 |
|------|------|
| **Title** | 里程碑名称（如 v1.0）|
| **Due date** | 截止日期 |
| **Description** | 描述 |
| **Progress** | 进度条（已完成 / 总数）|

---

## 7. 搜索和过滤 Issue

### 搜索语法

`	ext
is:issue is:open label:bug
is:issue is:closed author:用户名
is:issue is:open assignee:用户名
`

### 常用筛选

| 条件 | 说明 |
|------|------|
| is:issue is:open | 未解决的 Issue |
| label:bug | 标记为 Bug 的 |
| uthor:用户名 | 某个人创建的 |
| ssignee:用户名 | 分配给某人的 |
| comments:>5 | 评论数大于 5 的 |

---

## 小结

- [x] 理解 Issues 的概念和使用场景
- [x] 会创建和关闭 Issue
- [x] 知道 Labels 和 Milestones 的作用
- [x] 会用搜索语法过滤 Issue

**下一篇**：学习 Pull Requests 标签栏——提交代码审核请求、审查他人代码。

---

## 快速自查清单

- [ ] 我能找到一个仓库的 Issues 页面
- [ ] 我创建过 Issue
- [ ] 我知道 Labels 和 Milestones 的区别
- [ ] 我会使用搜索语法筛选 Issue
