---
is_published: true
title: 07 · Pull Requests 标签栏详解
tags:
  - Pull Requests
  - GitHub教程
categories:
  - 01入门篇
---

# 07 · Pull Requests 标签栏详解

> **这篇的目标**：理解 Pull Request 的完整工作流——创建 PR、审查代码、合并分支、处理冲突。

---

## 1. Pull Request 是什么

Pull Request（简称 PR）是 GitHub 协作的核心机制。当你修改了仓库的某个分支后，通过 PR 请求仓库维护者把你的修改合入主分支。

> 一句话：**PR 是"我想把这段代码加进去，请审核"的请求**。

---

## 2. PR 列表页布局

进入仓库后点击 **Pull requests** 标签，页面结构和 Issues 类似：

| 区域 | 说明 |
|------|------|
| **搜索栏** | 搜索 PR，is:pr is:open |
| **Filters** | 快速过滤 |
| **Labels / Milestones** | 标签和里程碑 |
| **New** | 新建 PR 按钮 |
| **Open / Closed** | 切换查看开放/已关闭的 PR |

每条 PR 条目展示：

- **状态图标**：🟢 Open（开放）/ 🟣 Merged（已合并）/ ⬜ Closed（未合并关闭）
- **标题**和**#编号**
- **Checks 状态**：✅ 检查通过 / ❌ 失败 / 🟡 待检查
- **标签**（如 CLA Signed）
- **作者** 和 **创建时间**
- **审查请求**（Reviewers）
- **评论数**
- **Draft 标记**：草稿 PR 表示还未准备好

---

## 3. 创建 Pull Request

### 前提条件

你需要在某个分支上做了修改，并且已经 push 到远程仓库。

### 步骤

**① 点击 New pull request**

**② 选择分支**

| 字段 | 说明 |
|------|------|
| **base** | 目标分支（通常是 main） |
| **compare** | 你的修改所在的分支 |

选择后可以看到两个分支的**代码差异对比**。

**③ 填写 PR 信息**

| 字段 | 说明 |
|------|------|
| **Title** | 简明描述这次修改 |
| **Description** | 详细说明（支持 Markdown） |
| **Reviewers** | 请求特定的审查者 |
| **Assignees** | 指派给谁 |
| **Labels** | 打标签 |
| **Projects** | 关联项目看板 |
| **Development** | 关联 Issue（如 Closes #123）|

**④ 点击 Create pull request**

### 草稿 PR

点击 **Create draft pull request** 下拉箭头可以选择创建**草稿 PR**。草稿 PR 不会被合并，适合还没做完但想先给队友看看的情况。准备好后点击 **Ready for review**。

---

## 4. PR 详情页

创建后进入 PR 详情页，顶部导航包含：

| 标签 | 说明 |
|------|------|
| **Conversation** | 讨论区，所有评论和操作记录 |
| **Commits** | 这个 PR 包含的所有 commit 列表 |
| **Checks** | CI/CD 检查状态 |
| **Files changed** | 改了什么文件，逐行对比 |

### Conversation 区域

- PR 描述
- 所有评论和讨论
- 操作按钮（Merge / Close）

### Files changed 区域

- **绿色**：新增的代码行
- **红色**：删除的代码行
- 每一行可以点击 ➕ 发表审查意见
- **Review changes** 按钮：提交审查结论

---

## 5. 代码审查

### 提交审查

点击 **Review changes**，有三个选项：

| 选项 | 说明 |
|------|------|
| **Comment** | 一般评论，不阻止合并 |
| **Request changes** | 要求修改，阻止合并直到解决 |
| **Approve** | 批准通过，可以合并 |

每次审查提交时还可以写总结性评论。

### 审查建议

- 逐行检查代码逻辑
- 提建设性意见（不要说"这不对"，要说"建议改成 XXX"）
- 使用 Suggest changes 功能可以直接在评论中写建议代码

---

## 6. 合并与冲突处理

当审查通过后，有权限的维护者可以点击 **Merge pull request** 合并 PR。合并后可以删除原始分支。

如果代码有冲突，GitHub 会提示 **This branch has conflicts that must be resolved**。可点击 **Resolve conflicts** 在线解决，或在本地用 git merge 解决后重新推送。

> 合并方式（Merge commit / Squash and merge / Rebase and merge）和冲突处理的详细操作，将在进阶篇的分支详解中深入讲解。

---

## 小结

- [x] 理解 PR 的概念和工作流
- [x] 会创建 PR（包括草稿 PR）
- [x] 会审查代码和提交审查意见
- [x] 知道三种合并方式的区别
- [x] 了解如何解决冲突

**下一篇**：学习 Actions 标签栏——自动化你的工作流（CI/CD）。

---

## 快速自查清单

- [ ] 我创建过 Pull Request
- [ ] 我审查过其他人的 PR
- [ ] 我合并过 PR
- [ ] 我知道三种合并方式的区别
- [ ] 我了解如何解决冲突
