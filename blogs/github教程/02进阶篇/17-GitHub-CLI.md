---
is_published: true
title: 17 · GitHub CLI 入门
tags:
  - CLI
  - GitHub教程
categories:
  - GitHub教程
---

# 17 · GitHub CLI 入门

> **这篇的目标**：安装和使用 GitHub CLI（gh），在终端中完成 GitHub 操作，不用打开浏览器。

---

## 1. 什么是 GitHub CLI

GitHub CLI（命令行工具 `gh`）让你在终端中直接操作 GitHub：创建 Issue、PR、查看仓库、管理 Release 等。

---

## 2. 安装

### macOS

```bash
brew install gh
```

### Windows

```bash
# 使用 winget（Windows 11 自带）
winget install --id GitHub.cli

# 或从 https://cli.github.com 下载安装包
```

### Linux

```bash
sudo apt install gh
```

### 验证安装

```bash
gh --version
```

---

## 3. 登录认证

```bash
gh auth login
```

按照提示选择：
1. 登录方式：GitHub.com
2. 协议：HTTPS 或 SSH
3. 认证方式：浏览器登录（推荐）或 Token
4. 是否添加 Git 凭据助手：推荐 Yes

完成后：

```bash
gh auth status
```

✅ 看到 `Logged in to github.com account` 说明成功。

---

## 4. 常用命令

### 仓库操作

```bash
# 克隆仓库
gh repo clone 用户名/仓库名

# 创建新仓库
gh repo create 仓库名 --public --source=. --remote=origin --push

# 在浏览器中打开仓库
gh repo view 用户名/仓库名 --web

# 查看仓库信息
gh repo view 用户名/仓库名
```

### Issue 操作

```bash
# 创建 Issue
gh issue create --title "标题" --body "描述"

# 查看 Issue 列表
gh issue list

# 查看 Issue 详情
gh issue view 编号

# 关闭 Issue
gh issue close 编号
```

### Pull Request 操作

```bash
# 创建 PR
gh pr create --title "标题" --body "描述"

# 创建草稿 PR
gh pr create --draft

# 查看 PR 列表
gh pr list

# 审查 PR
gh pr review 编号 --approve

# 合并 PR
gh pr merge 编号
```

### 其他操作

```bash
# 查看仓库 Release
gh release list

# 创建 Release
gh release create v1.0.0 --title "v1.0.0" --notes "发布说明"

# 查看 Actions 工作流
gh workflow list

# 查看 Actions 运行状态
gh run list

# 查看 GitHub 通知
gh notification list

# 搜索
gh search repos "关键词"
```

---

## 5. 高级用法

### 配置别名

```bash
gh alias set prc 'pr create --title "$1" --body "$2"'
```

### 使用 JSON 输出

```bash
gh issue list --json number,title,state
gh pr view 123 --json title,body,additions,deletions
```

---

## 6. 和 Git 配合

```bash
# 创建分支 + 推送到远程 + 创建 PR（一条命令）
git checkout -b feature-login
git commit -m "新增登录"
git push -u origin feature-login
gh pr create --fill
```

---

## 小结

- [x] 安装并登录 gh CLI
- [x] 学会常用的仓库、Issue、PR 命令
- [x] 知道怎么配合 Git 使用

**下一篇**：完整实战——用 GitHub 管理你的博客。
