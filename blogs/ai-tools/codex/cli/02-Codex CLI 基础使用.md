---
date: 2026-06-09
is_published: true
title: Codex 基础使用：交互模式与核心命令
tags:
  - Codex CLI
  - AI工具
categories:
  - Codex CLI
---

# Codex 基础使用：交互模式与核心命令

> 本文是 Codex 系列博客第 2 篇，介绍 Codex CLI 的交互模式、核心命令及日常使用技巧。

## 启动方式

### 交互模式

```bash
codex
```

启动交互式终端界面，可连续对话。

### 非交互模式

```bash
codex "写一个Python函数计算斐波那契数列"
```

直接执行任务，适合脚本化操作。

```bash
codex exec "在当前目录创建README.md"
```

### 恢复会话

```bash
codex resume
```

恢复上一次对话会话。

## 核心命令详解

### 会话管理

| 命令 | 功能 |
|------|------|
| `/new` | 开始新对话 |
| `/resume` | 恢复上一会话 |
| `/fork` | 克隆当前线程 |
| `/compact` | 压缩上下文释放令牌 |
| `/status` | 查看模型、策略、令牌用量 |
| `/quit` | 退出 |

### 配置调整

| 命令 | 功能 |
|------|------|
| `/model` | 切换模型 |
| `/permissions` | 调整审批模式 |
| `/plan` | 进入规划模式 |
| `/personality` | 改变沟通风格 |

### 开发工具

| 命令 | 功能 |
|------|------|
| `/review` | 分析代码改动 |
| `/diff` | 显示 Git 变更 |
| `/mention` | 附加文件到对话 |
| `/init` | 生成 AGENTS.md 脚手架 |
| `/mcp` | 列出 MCP 工具 |

### 全局参数

```bash
codex -m gpt-5.3-codex          # 指定模型
codex -s read-only              # 只读模式
codex -a on-request             # 请求审批
codex --full-auto               # 完全自动执行
codex -C /path/to/project       # 指定工作目录
```

## 规划模式详解

`/plan` 是 Codex 最强大的功能之一，执行前先规划任务步骤。

```
/plan 创建用户认证系统
```

Codex 会先列出步骤计划：

1. 创建用户模型
2. 实现注册/登录 API
3. 添加密码哈希
4. 编写测试用例

确认后才会执行，适合复杂任务。

## 代码审查

### /review 命令

```bash
/review
```

分析当前工作目录的代码改动，给出优化建议。

### /diff 命令

```bash
/diff
```

显示所有 Git 变更，包括未跟踪文件。

## AGENTS.md 脚手架

```bash
/init
```

在项目根目录生成 `AGENTS.md`，定义 Codex 行为规范：

- 项目架构说明
- 编码规范
- 常用命令
- 注意事项

## 实用技巧

### 快速文件引用

```bash
/mention src/utils.ts
```

将文件附加到对话，上下文共享。

### 临时查询

```bash
/side 什么是MCP协议？
```

独立小窗口，不打断主任务。

### Web 搜索

```bash
codex --search "React 19 新特性"
```

启用实时网络搜索。

## 模式对比

| 启动方式 | 适用场景 |
|---------|---------|
| `codex` | 深度开发、多轮迭代 |
| `codex "task"` | 快速单任务 |
| `codex exec` | 脚本自动化 |
| `/plan` | 复杂任务规划 |

## 下一步

掌握基础命令后，推荐继续阅读：

- **第3篇[Codex 进阶 - 权限控制与配置](03-Codex%20CLI%20进阶.md))))
- **第4篇[Codex 实战 - 项目应用案例](04-Codex%20CLI%20%20实战.md))))

---

*本文更新于 2026 年 6 月。*
