---
published: true
title: Claude Code 进阶：权限控制与配置
tags:
  - Claude Code
  - AI工具
categories:
  - AI工具
---

# Claude Code 进阶：权限控制与配置

> 本文是 Claude Code 系列博客的第 3 篇，深入讲解 Claude Code 的权限控制系统、运行模式配置以及个性化定制方法。掌握这些内容能帮你安全高效地使用 Claude Code。

## 1 权限控制概述

Claude Code 的权限系统保护你的文件系统和数据安全。它决定了 AI 在什么情况下可以执行文件修改、命令运行等操作。理解这套机制是在生产环境中安全使用的关键。

Claude Code 采用**审批策略**来控制操作权限。每次 Claude Code 要执行修改文件、运行命令等操作时，都会根据当前策略决定是否需要你的确认。

### 权限级别

Claude Code 支持三种权限模式：

| 模式 | 行为 | 适用场景 |
|------|------|---------|
| `default` | 写文件和执行命令前询问 | 日常开发（推荐） |
| `bypass` | 跳过审批，直接执行 | 你完全信任 Claude Code 时 |
| `restricted` | 限制某些高风险操作 | 高安全环境 |

**`default` 模式**是安装后的默认设置，在每次文件写入或命令执行前都会征求你的同意。这是最适合新手的模式。

## 2 审批策略详解

### 2.1 运行时设置

在交互式会话中，你可以随时调整权限模式：

```bash
# 进入交互模式
claude

# 修改权限模式
> /permission bypass
```

> ⚠️ **风险提醒**：切换到 `bypass` 模式后，Claude Code 可以在不询问的情况下修改文件。建议只在处理简单、可逆的任务时临时使用，完成后立即切回 `default`。

### 2.2 命令行参数控制

```bash
# 完全信任模式
claude --permission bypass

# 默认审批模式
claude --permission default

# 限制模式
claude --permission restricted
```

### 2.3 审批流程实操

当你使用 `default` 模式时，Claude Code 要修改文件时会出现类似这样的交互：

```
Claude Code: 我想将以下内容写入 src/hello.py

[代码预览]

是否允许此操作？(y/N/详细查看)
```

你有三个选项：

- **y（允许）**：确认执行
- **N（拒绝）**：跳过此操作
- **详细查看**：查看更详细的变更对比

养成每次操作前阅读变更内容的习惯，这是防止意外修改的最佳方法。

### 2.4 审批策略的最佳实践

| 任务类型 | 推荐策略 | 理由 |
|---------|---------|------|
| 阅读分析代码 | `default` | 不需要写入，默认即可 |
| 编写新文件 | `default` | 每次写入前确认 |
| 批量重构 | `bypass`（临时） | 操作多时可提效，但先测试 |
| 自动化脚本 | `bypass` | 全自动场景 |
| 系统配置修改 | `restricted` | 高敏感操作 |

## 3 配置文件深度定制

Claude Code 的配置文件位于 `~/.claude/claude.json`。首次运行后自动生成，你可以手动编辑。

### 3.1 完整配置示例

```json
{
  "model": "claude-sonnet-4-20250514",
  "permission": "default",
  "vision": true,
  "contextSize": 100000,
  "theme": {
    "colorScheme": "dark",
    "fontSize": 14
  },
  "mcpServers": {}
}
```

### 3.2 配置项详解

| 配置项 | 说明 | 可选值 |
|--------|------|--------|
| `model` | 默认模型 | `claude-sonnet-4-20250514`, `claude-opus-4-20250514` |
| `permission` | 权限模式 | `default`, `bypass`, `restricted` |
| `vision` | 图片识别 | `true`, `false` |
| `contextSize` | 上下文窗口 | 数值（token 数） |
| `theme` | 终端主题 | 自定义颜色和字体 |

### 3.3 模型配置

不同模型适合不同场景：

| 模型 | 能力 | 适合任务 |
|------|------|---------|
| Claude Opus 4 | 最强推理 | 复杂架构设计、代码审查 |
| Claude Sonnet 4 | 均衡能力 | 日常编码、文档编写 |
| Claude Haiku | 快速轻量 | 简单任务、快速原型 |

在配置中切换默认模型：

```json
{
  "model": "claude-opus-4-20250514"
}
```

也可以在启动时临时指定：

```bash
claude --model claude-opus-4-20250514
```

### 3.4 项目级配置：CLAUDE.md

Claude Code 支持在项目根目录放置 `CLAUDE.md` 文件，定义该项目特有的规则和行为。

```markdown
# CLAUDE.md — 项目规范

## 项目概述
这是一个 Node.js + React 的全栈项目。

## 编码规范
- 使用 TypeScript
- 使用 React 函数组件 + Hooks
- 使用 Tailwind CSS 样式
- 测试使用 Vitest

## 常用命令
- 开发：npm run dev
- 测试：npm test
- 构建：npm run build

## 注意事项
- Node.js 版本要求 18+
- 不要修改 src/api 目录的接口定义
```

> 💡 使用 `/init` 命令可以自动生成 `CLAUDE.md` 模板。

## 4 MCP 集成

Claude Code 支持 MCP（Model Context Protocol），允许连接外部工具和服务。

### 4.1 配置 MCP 服务器

在 `~/.claude/claude.json` 中添加 MCP 配置：

```json
{
  "mcpServers": {
    "database": {
      "command": "node",
      "args": ["mcp-server.js"],
      "env": {
        "DB_URL": "postgresql://localhost/mydb"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-filesystem"]
    }
  }
}
```

### 4.2 安全提醒

> ⚠️ **高风险操作**：MCP 连接可能给 Claude Code 访问数据库或外部 API 的能力。配置时注意：
> 1. 尽量给只读权限
> 2. 不要连接生产环境的数据库
> 3. 定期检查 MCP 配置，移除不再需要的连接

## 5 上下文管理

Claude Code 的上下文窗口有限，合理管理上下文能提高对话质量。

### 5.1 压缩上下文

当对话变长时，使用 `/compact` 命令压缩之前的对话内容，释放空间给新的对话。

```
> /compact
```

### 5.2 开始新会话

切换话题时，使用 `/new` 开启新会话，避免旧上下文混淆。

### 5.3 查看用量

```bash
> /cost
```

查看当前会话的 token 消耗和预估费用。

---

*本文更新于 2026 年 6 月。*
