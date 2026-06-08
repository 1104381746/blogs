# Codex 进阶：权限控制与配置

> 本文是 Codex CLI 系列博客的第 3 篇，将深入讲解 Codex 的权限控制系统、运行模式配置以及个性化定制方法。掌握这些内容能让你在安全性和便利性之间找到最佳平衡。

## 1 权限控制概述

Codex 的权限系统是其安全架构的核心，它决定 AI 在执行操作时需要获得何种程度的授权。理解这套系统对于在生产环境中安全使用 Codex 至关重要。

### 1.1 权限层次简介

Codex 采用双层权限控制机制：第一层是**审批策略（Approval Policy）**，决定是否需要用户确认；第二层是**沙箱模式（Sandbox Mode）**，限制 AI 可以访问的文件系统范围。这两层机制相互配合，形成了完整的安全防护体系。

审批策略控制的是"能不能做"的问题，而沙箱模式控制的是"在哪里做"的问题。例如，你可能设置了"仅在请求时确认"的审批策略，同时将沙箱限制在项目目录内，这样 AI 就能在受控范围内自主工作。

## 2 审批策略详解

### 2.1 四种策略模式

Codex 提供了四种审批策略，通过 `approval_policy` 参数设置：

| 策略名称 | 中文描述 | 适用场景 |
|---------|---------|---------|
| `untrusted` | 完全信任，自动执行 | 本地开发、快速原型 |
| `on-request` | 请求时确认 | 日常开发（默认） |
| `never` | 从不确认 | 自动化脚本 |
| `reject` | 拒绝执行 | 高安全环境 |

`on-request` 是安装后的默认策略，它要求 Codex 在执行任何修改前征得用户同意。这种模式提供了良好的安全性与便利性平衡，是大多数开发场景的最佳选择。

### 2.2 交互模式下的权限管理

在交互式会话中，你可以随时使用 `/permissions` 命令查看和修改当前会话的权限设置。这个命令会显示当前的审批策略和沙箱模式，并允许你即时调整。

```bash
codex
# 进入交互式会话后
> /permissions
```

执行后会显示类似以下的输出：

```
当前权限设置：
审批策略：on-request
沙箱模式：workspace-write

可用的审批策略：
  untrusted  - 完全信任，自动执行所有操作
  on-request - 请求时确认（默认）
  never      - 从不请求确认
  reject     - 拒绝执行任何修改

可用的沙箱模式：
  read-only       - 只读模式，无法修改文件
  workspace-write - 允许修改工作区文件
  danger-full-access - 完全访问（危险）
```

### 2.3 运行时参数控制

除了通过 `/permissions` 命令交互式调整，你还可以通过命令行参数快速设置权限。这些参数对于一次性任务或脚本化使用特别有用。

**`--ask-for-approval` 参数**

```bash
# 每次操作前都询问
codex --ask-for-approval

# 完全信任，不询问
codex --no-ask-for-approval

# 简写形式
codex -a=never
```

`--ask-for-approval` 参数接受三种值：`always`（每次都询问）、`never`（从不询问）和 `diff`（仅在文件修改前询问）。使用简写 `-a` 时，默认值是 `always`。

**`--full-auto` 参数**

```bash
# 开启完全自动模式，等同于 --ask-for-approval=never
codex --full-auto

# 关闭完全自动模式
codex --no-full-auto
```

`--full-auto` 是一个便捷参数，它将审批策略设为 `never`，让 AI 可以完全自主地执行操作。这在需要 AI 独立完成复杂任务时非常有用，但请确保你完全信任 Codex 能够正确执行任务。

### 2.4 审批策略的最佳实践

在实际项目中，建议根据任务的风险程度选择合适的策略。对于简单的代码修改或文档编写，可以使用 `untrusted` 模式提高效率；对于涉及删除文件、修改配置等高风险操作，最好使用 `on-request` 模式。

你可以在命令行中灵活切换策略，而不必更改默认配置。例如：

```bash
# 高风险操作时使用确认模式
codex -a=always "删除所有未使用的变量"

# 低风险操作时使用自动模式
codex -a=never "为这个函数添加类型注释"
```

## 3 沙箱模式详解

### 3.1 三种沙箱级别

沙箱模式决定 Codex 可以访问的文件系统范围，这对于保护敏感文件和企业数据至关重要。

**read-only（只读模式）**

这是最严格的沙箱模式，AI 只能读取文件内容，无法创建、修改或删除任何文件。当你想让 Codex 分析代码但不希望产生任何副作用时，这个模式是理想选择。

```bash
codex --sandbox=read-only "分析这个项目的架构"
```

在这种模式下，如果 Codex 尝试执行写入操作，会收到明确的错误提示，告知该操作在当前沙箱模式下不被允许。

**workspace-write（工作区写入模式）**

这是默认的沙箱模式，允许 Codex 修改工作区内的文件。工作区的定义通常是你的当前目录及子目录。这个模式适合大多数日常开发任务。

```bash
# 显式指定工作区写入模式
codex --sandbox=workspace-write

# 简写形式
codex -s=workspace-write
```

**danger-full-access（完全访问模式）**

这是一个危险但功能强大的模式，允许 Codex 访问系统上的任何文件。在使用此模式时必须格外小心，因为它可以读取和修改系统配置、密码文件等敏感资源。

```bash
codex --sandbox=danger-full-access
```

> 警告：不要轻易使用 `danger-full-access` 模式。除非你完全理解风险并有充分的理由，否则应该坚持使用默认的 `workspace-write` 模式。

### 3.2 工作区目录指定

默认情况下，Codex 将当前工作目录视为工作区。你可以通过 `-C` 或 `--cd` 参数显式指定工作区：

```bash
# 指定特定目录为工作区
codex -C /path/to/project "分析这个项目"

# 在指定目录下启动交互式会话
codex -C D:\projects\myapp
```

当你从不同目录启动 Codex 或需要在多个项目间切换时，这个参数特别有用。它确保沙箱始终限制在正确的项目范围内。

## 4 配置文件深度定制

### 4.1 配置文件位置与结构

Codex 的配置文件位于 `~/.codex/config.toml`（Linux/macOS）或 `C:\Users\<用户名>\.codex\config.toml`（Windows）。这个文件采用 TOML 格式，允许你设置各种默认行为。

首次运行 Codex 后，配置文件会自动创建，包含所有可用的配置项及注释说明。以下是几个关键配置部分的详解。

### 4.2 全局默认设置

```toml
[default]
# 默认审批策略：untrusted, on-request, never, reject
approval_policy = "on-request"

# 默认沙箱模式：read-only, workspace-write, danger-full-access
sandbox_mode = "workspace-write"

# 默认模型
model = "claude-sonnet-4-6"

# 上下文窗口大小（越大越耗资源）
context_window = 200000
```

这些设置将成为所有新会话的默认值。你可以根据自己的偏好进行修改，但请确保理解每个选项的含义。

### 4.3 模型配置

```toml
[models]
# 支持多个模型配置
available = ["claude-opus-4-7", "claude-sonnet-4-6", "claude-haiku-4-5"]

# 默认使用的模型
default = "claude-sonnet-4-6"

[models.claude-sonnet-4-6]
# 模型特定设置
temperature = 0.7
max_tokens = 4096
```

Codex 支持多个模型，你可以根据任务类型选择合适的模型。Opus 是最强大的模型，适合复杂推理；Sonnet 在能力和效率之间取得平衡；Haiku 是轻量级模型，适合简单任务。

### 4.4 项目级配置

你可以在项目根目录下创建 `.codex/config.toml` 来覆盖全局设置。这种方式允许你为不同项目设置不同的默认行为。

```toml
# 项目级配置示例
[default]
# 敏感项目使用更严格的审批策略
approval_policy = "on-request"

# 测试项目可以使用更宽松的策略
approval_policy = "untrusted"
```

项目级配置会与全局配置合并，项目级设置优先。这意味着你可以在全局设置宽松的默认策略，同时为特定敏感项目使用更严格的设置。

---

*本文更新于 2026 年 6 月。*
