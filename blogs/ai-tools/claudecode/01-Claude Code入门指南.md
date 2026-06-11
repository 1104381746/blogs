---
date: 2026-06-11
is_published: true

title: Claude Code 入门指南：安装与环境配置
tags:
  - Claude Code
  - AI工具
  - Node.js
categories:
  - Claude Code

---

# Claude Code 入门指南：安装与环境配置

> Claude Code 是 Anthropic 推出的终端编程助手，直接在终端运行，提供代码生成、文件编辑、命令执行等功能。本文是系列博客第一篇，带你快速上手 Claude Code。

## 什么是 Claude Code？

Claude Code 是 Anthropic 开发的终端编程助手，依托 Claude 系列模型（Opus、Sonnet）提供智能编程支持。它能够：

- 理解自然语言指令，完成代码编写和修改
- 执行终端命令，运行测试和构建
- 读写文件，自动完成项目任务
- 支持多模型切换（Claude Opus、Sonnet 等）
- 内置 Git 操作和代码审查功能

> **最新动态**：Claude Code 持续更新中，最新版本支持 MCP 协议集成和自定义指令功能。

## 环境准备

### 前置要求

| 操作系统 | 要求 |
|---------|------|
| macOS | 10.15+ |
| Linux | Ubuntu 20.04+ |
| Windows | WSL2 |

**必须安装：**

- Node.js 18+
- Git
- Anthropic API Key 或 Claude Pro 订阅

### 检查环境

```bash
node --version    # 应为 18.x 或更高
npm --version
git --version
```

## 安装步骤

### 1. 通过 npm 安装

```bash
npm install -g @anthropic/claude-code
```

> 如果遇到权限问题，使用 `sudo npm install -g @anthropic/claude-code`

### 2. 验证安装

```bash
claude --version
```

成功后会显示版本号，如 `claude-code version 0.x.x`

### 3. 认证配置

Claude Code 支持两种认证方式：

**方式一：使用 API Key**

```bash
export ANTHROPIC_API_KEY="your-api-key-here"
```

建议将密钥添加到 `~/.bashrc` 或 `~/.zshrc`：

```bash
echo 'export ANTHROPIC_API_KEY="your-api-key"' >> ~/.bashrc
source ~/.bashrc
```

**方式二：通过 Claude Pro 订阅登录**

```bash
claude
```

首次启动会提示通过浏览器登录 Claude 账号，按照指引完成授权即可。这种方式使用 Pro 订阅的额度。

### 4. Mac 用户额外步骤

macOS 用户首次运行时，系统可能会提示需要安装命令行开发者工具：

```bash
xcode-select --install
```

这是 Claude Code 执行某些命令时的必要依赖。

## 快速验证

安装完成后，运行一个简单测试：

```bash
claude "用 Python 写一个计算斐波那契数列的函数"
```

Claude Code 会生成代码并询问是否要保存到文件。

✅ **成功标志**：看到 Claude 生成的代码回复。

## 首次启动体验

```bash
claude
```

进入交互模式后，你会看到命令行提示符。输入你的第一个任务：

```
请帮我创建一个 hello.py 文件，输出 "Hello, Claude Code!"
```

你会看到 Claude Code 生成代码，然后询问是否执行写入操作。确认后文件就会被创建。

## 常用配置

### 首次配置建议

Claude Code 的配置文件位于 `~/.claude/claude.json`，首次运行后会自动生成。

常用配置项：

```json
{
  "model": "claude-sonnet-4-20250514",
  "permission": "default",
  "vision": true
}
```

### 配置项说明

| 配置项 | 说明 | 可选值 |
|--------|------|--------|
| `model` | 默认使用模型 | `claude-sonnet-4-20250514`, `claude-opus-4-20250514` |
| `permission` | 权限模式 | `default`, `bypass`, `restricted` |
| `vision` | 图像识别 | `true`, `false` |

## 常见问题

### Q1: 安装报错 EACCES？

```bash
# 使用 npx 直接运行
npx @anthropic/claude-code

# 或修复 npm 权限
mkdir ~/.npm-global
npm config set prefix "~/.npm-global"
export PATH="$PATH:$HOME/.npm-global/bin"
```

### Q2: 提示 API Key 无效？

1. 确认 key 已在 [Anthropic Console](https://console.anthropic.com/) 生成
2. 检查环境变量：`echo $ANTHROPIC_API_KEY`
3. 尝试重新设置：`export ANTHROPIC_API_KEY="your-key"`

### Q3: Windows 用户安装失败？

Claude Code 需要在 WSL2 中运行。确保 WSL2 已正确安装并更新到最新版本。在 WSL2 终端中执行上述安装步骤即可。

### Q4: 费用问题？

- 使用 API Key：按 token 用量付费，具体价格见 Anthropic 官网
- 使用 Pro 订阅：包含在 Pro 套餐内，有使用限额

## 下一步

安装完成后，推荐继续阅读：

- **第2篇*[Claude Code 基础使用 - 交互模式与核心命令](02-Claude%20Code%20基础使用.md)))
- **第3篇*[Claude Code 进阶 - 权限控制与配置](03-Claude%20Code%20进阶.md)))

---

*本文更新于 2026 年 6 月，基于 Claude Code 最新版本编写。*