---
published: true
title: Superpowers：给你的 AI 编程助手装上"方法论引擎"
tags:
  - Superpowers
  - MCP
  - AI工具
categories:
  - AI工具
---

# Superpowers：给你的 AI 编程助手装上"方法论引擎"

> 适用版本：Superpowers v5.1.0+ | 最后更新：2026-06-05 | 这是一个 218k stars 的开源项目

如果你已经在用 Claude Code 或 Codex，你大概经历过这种场面：跟 AI 说"帮我写个用户登录功能"，它唰唰唰就生成了几百行代码——但仔细一看，没测试、没错误处理、没考虑边界情况。你又得花更多时间修复它留下的烂摊子。

这不是 AI 的能力问题，是**缺少方法论**。Superpowers 就是来解决这个问题的。

---

## Superpowers 是什么

Superpowers 是一套完整的**软件开发方法论框架**（agentic skills framework），由 Jesse Vincent（Prime Radiant）开发，MIT 开源协议。它不是又一个 AI 编程工具，而是一套让你的 AI 编程助手**懂规矩、按流程办事**的技能包。

简单说：Superpowers 把你平时写代码应该做但经常偷懒省略的步骤——需求澄清、方案设计、任务拆解、TDD、代码审查——全都变成了 AI 的**强制性工作流**。

### 一句话总结

> 你的 AI 编程助手不再是上来就瞎写代码的"超级实习生"，而是一个有完整开发方法论的"资深工程师"。

---

## 支持的平台

Superpowers 几乎覆盖了市面上主流的 AI 编程工具：

| 平台 | 安装方式 |
|------|---------|
| **Claude Code** | 官方 marketplace 安装或 `/plugin install superpowers@claude-plugins-official` |
| **Codex CLI** | `/plugins` → 搜索 superpowers → Install Plugin |
| **Codex App** | 侧边栏 Plugins → Superpowers → `+` 按钮 |
| **Cursor** | 在 Agent chat 中 `/add-plugin superpowers` |
| **Gemini CLI** | `gemini extensions install https://github.com/obra/superpowers` |
| **Copilot CLI** | `copilot plugin install superpowers@superpowers-marketplace` |
| **OpenCode** | 告诉它去读 `.opencode/INSTALL.md` |
| **Factory Droid** | `droid plugin install superpowers@superpowers` |

> **成功标志**：装好后启动你的 AI 编程工具，它应该不再直接回答编码请求，而是先反问你的需求。如果它开始追问"你想做什么"，Superpowers 就生效了。

---

## 核心工作流（逐层拆解）

Superpowers 的核心是一套 **7 步工作流**，每一步由独立的 skill（技能）驱动。

### 第一步：Brainstorming — 先想清楚再动手

这是 Superpowers 启动后的第一件事。它不会直接写代码，而是化身苏格拉底，通过一系列问题来澄清你的需求：

- 你真正想解决什么问题？
- 有没有更简单的方案？
- 这个功能的核心边界在哪？
- 哪些场景需要处理异常？

你会发现这个过程很像一对一的架构评审。输出的是一份**设计文档**，而不是代码。

> 为什么这样设计？AI 编程最大的坑就是"需求不明确就开干"。Brainstorming 强迫你在写第一行代码前先锁定范围，避免做了半天才发现方向不对。

### 第二步：Using Git Worktrees — 隔离开发

设计通过后，Superpowers 会在新的 git worktree 上创建工作区，而不是直接在你当前分支上动手。

好处：
- 不污染主分支
- 可以同时并行研究多个方案
- 不满意可以直接丢弃 worktree，不留痕迹

### 第三步：Writing Plans — 把大象装进冰箱

有了设计，下一步是把它拆成可执行的实施计划。每个任务被切割成 **2-5 分钟**可以完成的小块。

每个任务卡片包含：
- **涉及的文件路径**（精确到哪个文件的哪几行）
- **完整的实现代码**（不是伪代码）
- **验证步骤**（怎么确认改对了）

### 第四步：Subagent-Driven Development — 派小弟干活

这是 Superpowers 的杀手锏。你点头同意计划后，它不会自己埋头写代码，而是**派全新的子 Agent** 去执行每个任务。

每个子 Agent 经历两轮审查：
1. **Spec Compliance Review** — 检查子 Agent 的实现是否完全符合设计规格
2. **Code Quality Review** — 审查代码质量

> 实测数据（来自 Superpowers 自己的集成测试）：一次典型的实现派了 7 个子 Agent，总费用约 $4.67，每次子 Agent 调用约 $0.05-$0.15。

这个过程可以让 AI 自主工作**几小时不偏离计划**。

### 第五步：Test-Driven Development — 红绿重构

Superpowers 强制 TDD：
1. **RED** — 先写一个会失败的测试
2. **GREEN** — 写最少的代码让测试通过
3. **REFACTOR** — 重构代码，保证测试依然通过

在 TDD 开始前写的任何代码都会被**自动删除**。这不是 bug，是 feature。

### 第六步：Requesting Code Review — 相互把关

每个任务完成后，Superpowers 会对照计划进行审查，按严重程度报告问题：

- **Critical** — 阻塞，必须修复才能继续
- **Major** — 需要修复但不阻塞流程
- **Minor** — 建议改进

审查者是独立的，不会信任实现者的报告，**会自己读代码验证**。

### 第七步：Finishing a Development Branch — 收尾

所有任务完成后：
1. 运行所有测试，确保全部通过
2. 呈现选项给你：**合并 / 创建 PR / 保留 worktree / 丢弃**
3. 清理 worktree（如果选择合并或丢弃）

---

## 完整的技能库

除了核心工作流，Superpowers 还内置了 14 个独立技能：

**测试类：** `test-driven-development` — 红绿重构循环，含 TDD 反模式参考

**调试类：**
- `systematic-debugging` — 4 阶段根因追踪
- `verification-before-completion` — 确认 bug 真的修好了

**协作类：**
- `brainstorming` — 苏格拉底式的设计澄清
- `writing-plans` — 详细的实施计划
- `executing-plans` — 带检查点的批量执行
- `dispatching-parallel-agents` — 并发子 Agent 工作流
- `requesting-code-review` — 审查前自检清单
- `receiving-code-review` — 如何回应审查意见
- `using-git-worktrees` — 并行开发分支管理
- `finishing-a-development-branch` — 合并 / PR 决策流程
- `subagent-driven-development` — 子 Agent 驱动开发（两轮审查）

**元技能：**
- `writing-skills` — 教你如何编写新技能
- `using-superpowers` — Superpowers 本身的使用指南

---

## 为什么它有效？（深度分析）

### AI 编程的四大痛点 → Superpowers 的四个解法

| 痛点 | 解法 |
|------|------|
| 上下文窗口碎片化 | 子 Agent 每次获得干净上下文，只关注自己那个任务 |
| 缺乏验证 | TDD 强制先写测试 + 独立审查验证 |
| 需求漂移 | Brainstorming 先锁定设计，通过后才进入实现 |
| 代码质量不可控 | 两轮审查（规格合规 + 代码质量）把关 |

### 核心哲学

四条原则构成了 Superpowers 的底色：

1. **Test-Driven Development** — 先写测试，永远。没有测试你就不知道 AI 写的代码对不对。

2. **Systematic > Ad-hoc** — 流程胜过猜测。一套固定的流程能把结果方差降到最低。

3. **Complexity Reduction** — 简单是首要目标。每个任务 2-5 分钟，小任务出错的概率远小于大任务。

4. **Evidence over Claims** — "我写好了"不是结论，测试通过了才是。

### 子 Agent 架构的精妙之处

传统上让 AI 一次性处理整个 feature 的问题在于：上下文窗口是有限的，到后面 AI 就忘了前面的约定。Subagent-Driven Development 的巧妙在于：

- 主 Agent 只做协调和审查
- 子 Agent 每次只做一个任务，上下文高度聚焦
- 两轮审查相当于内部自动化验收测试
- 子 Agent 之间互不干扰

这和微服务架构的解耦思路如出一辙。

---

## 上手建议

### 1. 从一个小功能开始
找一个**边界清晰的小功能**（比如加一个 API 端点、加一个表单验证），观察它如何走完整套流程。

### 2. 观察但不干预
第一次使用时，建议完整看完 Brainstorming → Worktree → Plan → Subagents → TDD → Review → Finish 的过程。

### 3. 注意 TDD 的成本
TDD 会增加代码量，但换来的是对代码质量的信心。初期可以选择低风险的辅助功能来练习。

### 4. 如果它太啰嗦
如果你对需求已经非常清楚，可以直接告诉它"不需要 brainstorm，直接写计划"，它会跳过第一步。

### 5. 善用 Git Worktrees
每个 worktree 都是独立的沙盒，不满意就 `git worktree remove`，不会污染主仓库。

---

## 资源链接

- [GitHub 仓库](https://github.com/obra/superpowers) — 218k stars, MIT 协议
- [原始发布公告](https://blog.fsck.com/2025/10/09/superpowers/) — Jesse Vincent 的博客
- [Discord 社区](https://discord.gg/35wsABTejz) — 社区支持和交流
- [发布通知订阅](https://primeradiant.com/superpowers/)

---

> **写在最后**：Superpowers 不是银弹。如果你的项目本身没有测试、没有 CI/CD、没有代码规范，Superpowers 并不能自动变出这些。但它可以作为一个极好的引路人——当你不知道如何让 AI 编程变得更可控时，Superpowers 给你了一套现成的、经过 218k 人验证的路径。
