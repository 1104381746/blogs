---
date: 2026-06-09
is_published: true
title: 01-Codex CLI 入门指南
tags:
  - Codex CLI
  - AI工具
categories:
  - Codex CLI
---

# OpenAI Codex 入门指南：安装与环境配置

> OpenAI Codex 是 OpenAI 推出的轻量级编程助手，直接在终端运行，支持代码补全、文件编辑、命令执行等功能。本文是系列博客第一篇，带你快速上手 Codex。

## 什么是 Codex？

Codex 是 OpenAI 推出的终端编程助手，被称为"Claude Code 的竞争对手"。它能够：

- 理解自然语言指令，完成代码编写和修改
- 执行终端命令，运行测试和构建
- 读写文件，自动完成项目任务
- 支持多模型切换（GPT-5.1 Codex、Claude 等）

> **最新动态**：2025 年 Codex 已支持 Sites 预览版，可直接创建和部署网站；Amazon Bedrock 集成也已上线。

## 环境准备

### 前置要求

| 操作系统 | 要求 |
|---------|------|
| macOS | 10.15+ |
| Linux | Ubuntu 20.04+ |
| Windows | WSL2 或原生 PowerShell |

**必须安装：**

- Node.js 18+
- Git
- API Key（OpenAI 账号）

### 检查环境

```bash
node --version    # 应为 18.x 或更高
npm --version
git --version
```

## 安装步骤

### 1. 安装 Codex CLI

```bash
npm install -g @openai/codex
```

> 如果遇到权限问题，使用 `sudo npm install -g @openai/codex`

### 2. 验证安装

```bash
codex --version
```

成功后会显示版本号，如 `codex version 1.0.0`

### 3. 认证配置

**方式一：使用 API Key**

```bash
export OPENAI_API_KEY="your-api-key-here"
```

建议将密钥添加到 `~/.bashrc` 或 `~/.zshrc`：

```bash
echo 'export OPENAI_API_KEY="your-api-key"' >> ~/.bashrc
source ~/.bashrc
```

**方式二：首次运行时登录**

```bash
codex
```

首次启动会提示通过 ChatGPT OAuth 登录，按照指引完成授权即可。

## 快速验证

安装完成后，运行一个简单测试：

```bash
codex "Hello, write a simple Python function that adds two numbers"
```

Codex 会生成代码并询问是否执行。

## 配置优化

### 首次配置建议

创建 `~/.codex/config.toml`：

```toml
model = "gpt-5.3-codex"
approval_policy = "on-request"
sandbox_mode = "workspace-write"

[features]
multi_agent = true
```

### 常用配置项

| 配置项 | 说明 | 可选值 |
|--------|------|--------|
| `model` | 默认使用模型 | `gpt-5.3-codex`, `claude-sonnet-4-20250514` |
| `approval_policy` | 审批策略 | `untrusted`, `on-request`, `never`, `reject` |
| `sandbox_mode` | 沙箱模式 | `read-only`, `workspace-write`, `danger-full-access` |

## 常见问题

### Q1: 安装报错 EACCES？

```bash
# 方案1: 使用 npx 直接运行
npx @openai/codex

# 方案2: 修复 npm 权限
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH="$PATH:$HOME/.npm-global/bin"
```

### Q2: 提示 API Key 无效？

1. 确认 key 已在 [OpenAI Platform](https://platform.openai.com/api-keys) 生成
2. 检查是否已设置环境变量：`echo $OPENAI_API_KEY`
3. 尝试重新设置：`export OPENAI_API_KEY="your-key"`

### Q3: Windows WSL2 安装失败？

确保 WSL2 已更新到最新版本，然后重试安装命令。

## 下一步

安装完成后，推荐继续阅读：

- **第2篇[Codex 基础使用 - 交互模式与核心命令](02-Codex%20CLI%20基础使用.md))))
- **第3篇[Codex 进阶 - 权限控制与配置](03-Codex%20CLI%20进阶.md))))

---

*本文更新于 2026 年 6 月，基于 Codex 最新版本编写。*