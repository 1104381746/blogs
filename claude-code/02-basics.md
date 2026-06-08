# Claude Code 基础使用：交互模式与核心命令

> 本文是 Claude Code 系列博客第 2 篇，介绍 Claude Code 的交互模式、核心命令及日常使用技巧。

## 启动方式

### 交互模式

```bash
claude
```

启动交互式终端界面，可以连续对话、逐步完成多个相关任务。

### 非交互模式（单次任务）

```bash
claude "写一个 Python 脚本读取 CSV 文件并统计行数"
```

直接执行一次性任务，生成结果后退出。

### 管道输入模式

Claude Code 支持通过管道传递上下文：

```bash
cat error.log | claude "分析这个日志文件中的错误模式"
```

这在处理已有文件输出时非常有用。

### 恢复会话

```bash
claude --resume
```

恢复上一次对话，继续之前的工作。

## 核心命令详解

### 会话管理

| 命令 | 功能 |
|------|------|
| `/new` | 开始新对话 |
| `/resume` | 恢复上一会话 |
| `/compact` | 压缩上下文，释放令牌 |
| `/cost` | 查看当前会话的 token 用量和费用 |
| `/status` | 查看当前模型、会话信息 |
| `/exit` | 退出当前会话 |

### 配置调整

| 命令 | 功能 |
|------|------|
| `/model` | 切换模型（Opus / Sonnet） |
| `/permission` | 调整审批模式 |
| `/plan` | 进入规划模式 |
| `/settings` | 查看或修改当前设置 |

### 开发工具

| 命令 | 功能 |
|------|------|
| `/review` | 审查代码变更，给出改进建议 |
| `/diff` | 显示工作区的 Git 变更 |
| `/commit` | 生成 Git 提交信息并提交 |
| `/pr` | 创建 Pull Request 描述 |
| `/init` | 生成项目配置文件 |
| `/help` | 查看所有可用命令 |

### 命令行参数

```bash
claude --model claude-opus-4-20250514  # 指定模型
claude --permission bypass             # 跳过审批（谨慎使用）
claude --resume                        # 恢复会话
claude -p "描述"                       # 直接执行（单次模式）
claude --verbose                       # 详细输出模式
```

## 规划模式详解

`/plan` 是 Claude Code 的核心功能之一，适合处理复杂多步骤任务。

```
/plan 为这个博客项目添加 RSS 订阅功能
```

Claude Code 会先列出实施步骤：

1. 安装 RSS 生成库
2. 创建 RSS Feed 生成模块
3. 添加路由支持
4. 更新模板
5. 编写测试用例

确认计划后，Claude Code 会逐步执行每一步，让你清晰了解整个过程。

## 代码审查与 Git 操作

### /review 命令

```bash
/review
```

分析当前工作目录的代码改动，给出优化建议，包括潜在 bug、性能问题和风格改进。

示例输出：

```
代码审查报告
============
整体评价：良好，有以下可改进之处

主要发现：
1. [建议] src/app.js:23 — 建议使用 const 替代 var
2. [警告] src/utils.js:45 — 缺少输入验证
3. [信息] src/routes.js:78 — 错误处理可统一提取
```

### /diff 命令

```bash
/diff
```

显示当前所有未暂存的 Git 变更，便于在提交前检查改动。

### /commit 命令

Claude Code 可以根据改动自动生成语义化的提交信息：

```bash
/commit
```

它会分析变更内容并生成如 `feat: 添加用户邮箱验证功能` 这样的提交信息，你可以确认或修改后再提交。

## 自定义指令

Claude Code 支持通过项目级的 `CLAUDE.md` 文件来定制行为，类似于 Codex 的 `AGENTS.md`。

```bash
/init
```

在项目根目录生成 `CLAUDE.md` 模板，你可以定义：

- 项目架构说明
- 编码规范
- 常用命令
- 关键的注意事项

Claude Code 在后续对话中会自动读取这个文件并遵循其中的规则。

## 实用技巧

### 引用文件

在对话中使用 `@` 符号引用文件：

```
请检查 @src/app.js 中的路由配置是否有问题
```

Claude Code 会自动读取文件内容。

### Web 搜索

```bash
claude --search "React Server Components 最佳实践"
```

启用网络搜索获取最新信息。

### 图片理解

```bash
claude "分析这个界面截图 @screenshot.png"
```

Claude Code 支持视觉识别（需在配置中开启 `vision: true`）。

## 模式对比

| 启动方式 | 适用场景 |
|---------|---------|
| `claude` | 深度开发、多轮迭代 |
| `claude "task"` | 快速单次任务 |
| `echo "..." | claude` | 管道处理已有输出 |
| `/plan` | 复杂任务规划 |

## 下一步

掌握基础命令后，推荐继续阅读：

- **第3篇**[Claude Code 进阶 - 权限控制与配置](claude-code/03-advanced.md))
- **第4篇**[Claude Code 实战 - 项目应用案例](04-practice.md))

---

*本文更新于 2026 年 6 月。*
