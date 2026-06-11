---
is_published: true
title: 18 · 完整实战：用 GitHub 管理博客
tags:
  - 实战
  - 博客
  - GitHub教程
categories:
  - GitHub教程
---

# 18 · 完整实战：用 GitHub 管理博客

> **这篇的目标**：综合运用前面学到的所有知识——从零开始创建一个博客仓库，用 GitHub Actions 自动部署。

---

## 1. 项目规划

我们将创建一个使用 Hugo/Hexo 的静态博客，托管在 GitHub Pages 上，用 Actions 自动构建和部署。

### 技术栈

| 工具 | 用途 |
|------|------|
| GitHub | 代码托管 + 协作 |
| Hugo/Hexo | 静态博客生成器 |
| GitHub Pages | 免费托管 |
| GitHub Actions | 自动构建和部署 |
| Git | 版本控制 |

---

## 2. 创建仓库

### 前提

- ✅ 已注册 GitHub 账号
- ✅ 已安装 Git 并配置 SSH
- ✅ 已安装 Node.js（Hexo）或 Go（Hugo）

### 步骤

**① 在 GitHub 上创建仓库**

1. 点击 ➕ → **New repository**
2. 仓库名：`my-blog`（或自己的博客名）
3. 设为 Public
4. 勾选 Add a README
5. 点击 Create repository

**② 克隆到本地**

```bash
git clone git@github.com:用户名/my-blog.git
cd my-blog
```

**③ 初始化博客项目**

以 Hexo 为例：

```bash
npm install -g hexo-cli
hexo init
npm install
hexo server  # 预览 http://localhost:4000
```

---

## 3. 内容管理

### 创建文章

```bash
hexo new "我的第一篇博客文章"
```

编辑 `source/_posts/我的第一篇博客文章.md`。

### 本地预览

```bash
hexo server
```

---

## 4. 配置 GitHub Pages

### 方式一：Deploy from a branch（手动部署）

1. 仓库 Settings → **Pages**
2. Source 选 **Deploy from a branch**
3. Branch 选 `main`，目录选 `/docs`
4. 每次构建后把输出文件放到 `/docs` 目录

### 方式二：GitHub Actions（推荐，自动部署）

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy Blog
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

---

## 5. 协作实践

### 使用 Issues 管理博客 TODO

创建 Issue：添加评论功能、优化 SEO、更换主题...

### 使用 PR 管理修改

1. 创建分支 `feature/添加新主题`
2. 修改代码
3. 提交并推送
4. 创建 PR 请求合并

---

## 6. 日常博客工作流

```bash
# 1. 拉取最新代码
git pull origin main

# 2. 创建新文章
hexo new "今日分享"

# 3. 本地预览
hexo server

# 4. 提交修改
git add .
git commit -m "新增文章：今日分享"
git push origin main
# Actions 会自动构建部署 ✅
```

---

## 7. 进阶优化

| 功能 | 实现方式 |
|------|----------|
| 自定义域名 | Settings → Pages → Custom domain |
| 评论系统 | 集成 Giscus 或 utterances |
| 自动备份 | 设置定期 Action 备份到其他平台 |
| 文章草稿 | hexo draft / hexo publish |
| SEO 优化 | 安装 hexo-generator-seo-friendly-sitemap |

---

## 总结

恭喜你完成了整套 GitHub 教程！现在你已经掌握了：

### 入门篇

- [x] 01 · 初识 GitHub：注册、导航栏、Dashboard、Settings
- [x] 02 · 探索与发现：Explore、Trending、高级搜索、创建仓库、核心概念
- [x] 03 · 仓库页面详解
- [x] 04 · 发布管理与个人主页：Release、Profile-README
- [x] 04 · Code 标签栏详解：浏览代码、分支、文件操作
- [x] 05 · Git 基础与 SSH 配置：Git 命令、SSH 连接
- [x] 06 · Issues 标签栏详解：报告 Bug、标签管理
- [x] 07 · Pull Requests 标签栏详解：PR 工作流、代码审查
- [x] 08 · Actions 标签栏详解：CI/CD、Workflow
- [x] 09 · Projects、Wiki、Discussions：看板、文档、讨论
- [x] 10 · Security 标签栏详解：Dependabot、安全扫描
- [x] 11 · Insights 标签栏详解：数据统计、依赖图
- [x] 12-13 · 仓库 Settings 详解：基础设置、高级功能

### 进阶篇

- [x] 14 · 分支详解：创建、合并、解决冲突
- [x] 15 · Git 进阶：Rebase、Stash、Cherry-pick
- [x] 17 · GitHub CLI 入门：命令行操作
- [x] 18 · 完整实战：用 GitHub 管理博客
