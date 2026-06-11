---
published: true
title: 09 · Projects、Wiki、Discussions 详解
tags:
  - Projects
  - Wiki
  - Discussions
  - GitHub教程
categories:
  - GitHub教程
---

# 09 · Projects、Wiki、Discussions 详解

> **这篇的目标**：学会用 Projects 做项目管理、用 Wiki 写文档、用 Discussions 组织社区讨论。

---

## 1. Projects（项目看板）

### 1.1 是什么

Projects 是 GitHub 内置的项目管理工具，采用**看板（Kanban）**的方式管理任务。它可以把仓库的 Issues 和 PR 组织成可视化的卡片面板。

### 1.2 进入方式

在仓库的 **More** → **Projects**，或访问 /projects。也可以在左侧边栏直接点击 **Projects**。

### 1.3 Projects 视图

GitHub Projects 支持两种视图：

| 视图 | 说明 |
|------|------|
| **Table**（表格视图） | 类似电子表格，展示所有项目项及其字段 |
| **Board**（看板视图） | 按状态分列，卡片可拖拽 |

### 1.4 创建 Project

**① 点击 Create project 或 New project**

**② 选择模板**

| 模板 | 用途 |
|------|------|
| **Basic Kanban** | 通用看板：Todo / In Progress / Done |
| **Bug triage** | 缺陷管理：Needs triage / High priority / Low priority |
| **Feature planning** | 功能规划：Backlog / Ready / In progress / Done |
| **Blank** | 空白模板，自定义 |

**③ 设置项目名称和描述**

**④ 添加项目项**

- 点击 ➕ **Add item**
- 输入 Issue 或 PR 的 # 编号关联
- 或新建草稿卡片

**⑤ 自定义字段**

| 字段类型 | 说明 |
|---------|------|
| Text | 文本 |
| Number | 数字 |
| Date | 日期 |
| Single select | 单选（如 High / Medium / Low）|
| Iteration | 迭代周期 |
| Status | 状态（Todo / In Progress / Done）|

---

## 2. Wiki（维基文档）

### 2.1 是什么

Wiki 是仓库的文档区，适合存放项目的详细文档、使用手册、FAQ 等。和 README 的区别：README 是"门面"，Wiki 是"手册"。

### 2.2 进入方式

如果仓库启用了 Wiki，它会在仓库导航栏中直接显示（或通过 **More** 下拉菜单访问），也可以直接访问 /wiki 页面。

### 2.3 创建和编辑

**创建首页**

首次进入 Wiki 页面，点击 **Create the first page**。

**编辑页面**

| 按钮 | 说明 |
|------|------|
| **Edit** | 编辑页面内容 |
| **New page** | 新建页面 |
| **Page list** | 页面列表（侧边栏）|
| **Page footer** | 定制侧边栏和页脚 |

**格式**

Wiki 支持 Markdown 语法，和 README 写法一致。

### 2.4 Wiki 特性

| 特性 | 说明 |
|------|------|
| 版本历史 | 每次修改都有记录，可查看和回滚 |
| 侧边栏 | 可自定义导航目录 |
| 页脚 | 可自定义全局页脚 |
| 附件 | 可上传图片等附件 |

> 💡 Wiki 适合放：安装指南、API 文档、开发规范、常见问题（FAQ）。

---

## 3. Discussions（讨论区）

### 3.1 是什么

Discussions 是 GitHub 的社区讨论功能，适合开放式的问答、想法讨论、公告发布等。和 Issues 的区别：

| 对比 | Issues | Discussions |
|------|--------|-------------|
| 用途 | 报告 Bug、提需求 | 开放式讨论、问答 |
| 状态 | Open / Closed | 无关闭状态 |
| 分类 | Labels | Categories（Q&A、Ideas、General 等）|
| 答案 | 无 | 可标记为回答（仅 Q&A 分类）|

### 3.2 进入方式

仓库启用 Discussions 后，会在仓库导航栏中直接显示 **Discussions** 标签（或通过 **More** 下拉菜单访问）。进入后分类列表显示在页面左侧。

### 3.3 分类

| 分类 | 说明 |
|------|------|
| **General** | 一般讨论 |
| **Q&A** | 问答，可标记最佳答案 |
| **Ideas** | 想法和建议 |
| **Show and tell** | 展示你的作品 |
| **Announcements** | 官方公告（仅仓库维护者可发布）|
| **Polls** | 投票调查 |

### 3.4 创建讨论

1. 点击搜索栏右侧的 **New discussion**
2. 选择分类
3. 填写标题和内容
4. 点击 **Start discussion**

### 3.5 讨论管理

- 可置顶重要讨论
- 可收藏（Pin）
- 可锁定讨论（Lock）
- 转换讨论为 Issue（如果需要进一步追踪）
- 管理员可编辑或删除

---

## 小结

- [x] 学会用 Projects 做项目管理看板
- [x] 知道 Wiki 怎么创建和编辑
- [x] 理解 Discussions 和 Issues 的区别
- [x] 会创建和管理讨论

**下一篇**：学习 Security 标签栏——了解代码安全分析和 Dependabot。

---

## 快速自查清单

- [ ] 我创建过一个 Project 看板
- [ ] 我在 Wiki 中写过文档
- [ ] 我知道 Discussions 和 Issues 的区别
- [ ] 我发过一条讨论
