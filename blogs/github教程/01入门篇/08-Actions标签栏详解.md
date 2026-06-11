---
date: 2026-06-11
is_published: true
title: 08 · Actions 标签栏详解
tags:
  - Actions
  - GitHub教程
categories:
  - 01入门篇
---

# 08 · Actions 标签栏详解

> **这篇的目标**：理解 GitHub Actions 的基本概念——学会创建自动化工作流、查看构建状态、管理 Secrets。

---

## 1. Actions 是什么

GitHub Actions 是 GitHub 内置的 CI/CD（持续集成/持续部署）工具。可在代码推送、PR 创建时触发自动执行任务。

> 一句话：**Actions 让 GitHub 帮你自动跑脚本**。

### 常见用途

- 自动运行测试
- 自动构建和发布
- 自动部署到服务器
- 自动检查代码规范

---

## 2. Actions 标签页布局

进入仓库后点击 **Actions** 标签：

| 区域 | 说明 |
|------|------|
| **左侧面板** | 筛选分类：Workflows 列表、Event（事件）、Status（状态）、Branch（分支）|
| **中间区域** | 运行历史列表（状态图标、工作流名、分支、Commit、触发事件、持续时长、时间）|
| **顶部筛选栏** | 搜索工作流、按 Event / Status / Branch 筛选、自定义视图 |

---

## 3. Workflow 基础

Workflow 定义在仓库 .github/workflows/ 目录下的 YAML 文件中。

### 示例

```yaml
name: CI
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npm test
```

### 核心概念

| 概念 | 说明 |
|------|------|
| **Workflow** | 自动化流程，由一个或多个 Job 组成 |
| **Job** | 一组在同一个 Runner 上执行的 Step |
| **Step** | 一个具体的操作 |
| **Action** | 可复用的步骤模块 |
| **Runner** | 执行工作流的虚拟机环境 |
| **Event** | 触发工作流的事件（push、PR 等）|

---

## 4. 创建 Workflow

### 方法一：使用模板

1. 进入 Actions 标签页
2. 点击 **New workflow**
3. 选择模板（Node.js、Python、Docker 等）
4. 编辑并提交

### 方法二：手动创建

1. 创建 .github/workflows/ 文件夹
2. 创建 .yml 文件（如 ci.yml）
3. 写入工作流定义
4. Push 到远程仓库

---

## 5. 查看运行详情

点击任意一次运行进入详情页：

| 区域 | 说明 |
|------|------|
| **运行概览** | 触发事件、Job 列表、Annotations、Artifacts |
| **Job 日志** | 每个 Step 的实时日志 |
| **重新运行** | 可选择失败的 Job 重新运行 |

---

## 6. Secrets 和变量

仓库 Settings → **Secrets and variables** → **Actions** 中管理：

| 类型 | 说明 |
|------|------|
| **Secrets** | 加密存储敏感信息（API Key、Token）|
| **Variables** | 普通变量 |

> ⚠️ **安全提示**：不要在 YAML 中直接写密码。用 Secrets 加密存储。

---

## 7. Marketplace

Actions 页面顶部可进入 **Marketplace** 浏览社区 Action。推荐：
- actions/checkout：检出代码
- actions/setup-node：配置 Node.js
- actions/cache：缓存依赖

---

## 小结

- [x] 理解 Actions 的概念和用途
- [x] 会创建工作流（模板或手动）
- [x] 会查看构建日志和状态
- [x] 知道如何管理 Secrets

**下一篇**：学习 Projects、Wiki、Discussions 三个标签栏。

---

## 快速自查清单

- [ ] 我知道 Actions 是什么
- [ ] 我创建过一个 Workflow
- [ ] 我看过构建日志
- [ ] 我知道 Secrets 怎么用
