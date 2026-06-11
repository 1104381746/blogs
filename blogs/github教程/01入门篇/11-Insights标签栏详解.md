---
published: true
title: 11 · Insights 标签栏详解
tags:
  - Insights
  - GitHub教程
categories:
  - GitHub教程
---

# 11 · Insights 标签栏详解

> **这篇的目标**：学会使用 Insights 分析仓库数据——贡献图、流量统计、依赖图、社区活跃度。

---

## 1. Insights 标签页布局

进入仓库的 **More** → **Insights**（或访问 /pulse），页面包含：

| 子页面 | 说明 |
|--------|------|
| **Pulse** | 活跃度概览，显示最近一段时间的活动汇总 |
| **Contributors** | 贡献者统计 |
| **Community** | 社区标准检查 |
| **Traffic** | 流量统计（访客、克隆数）|
| **Commits** | 提交活动图表 |
| **Code frequency** | 代码增减频率 |
| **Dependency graph** | 依赖关系图 |
| **Network** | 分支网络图 |
| **Forks** | Fork 列表 |

---

## 2. Pulse（活跃概览）

Pulse 是 Insights 的首页，默认显示最近一周的活动汇总：

| 区域 | 内容 |
|------|------|
| **Pull Requests** | 合并/关闭的 PR 数量 |
| **Issues** | 新建/关闭的 Issue 数量 |
| **Commits** | 提交次数和提交者列表 |
| **Contributors** | 活跃贡献者排行 |
| **Releases** | 发布的版本 |

可以通过右上角的时间选择器切换查看周期（1 天到 1 个月）。

---

## 3. Contributors（贡献者统计）

查看所有贡献者的统计数据：

- **添加/删除行数**图表
- **按贡献者分组**的提交统计
- **首次贡献者**标记
- 每个贡献者的 commit 次数、增删行数

点击某个贡献者可以查看其所有 commit 记录。

---

## 4. Traffic（流量统计）

Traffic 页面显示仓库的访问数据：

| 指标 | 说明 |
|------|------|
| **Visitors** | 独立访客数（每日/每周/每两周）|
| **Clones** | 克隆次数（每日/每周）|
| **Top referrers** | 来源引用网站（如 Google、其他 GitHub 仓库）|
| **Popular content** | 最受欢迎的页面路径 |

> 💡 Traffic 数据只显示最近 14 天。Fork 和直接通过 git clone 的统计也会记录。

---

## 5. Commits（提交活动图）

Commit 活动图显示某个时间段的提交频率：

- **X 轴**：时间（可按日/周/月切换）
- **Y 轴**：提交次数
- 点击图表中的某一天可查看当天的所有 commit

---

## 6. Code frequency（代码频率）

显示仓库中代码的**新增和删除行数**随时间的变化：

- 绿色柱状：新增代码
- 红色柱状：删除代码
- 可直观看出项目的活跃周期

---

## 7. Dependency graph（依赖图）

依赖图显示项目所使用的第三方依赖：

- **Dependencies**：所有直接和间接依赖列表
- **Dependents**：哪些其他仓库依赖了这个项目
- 每个依赖都会显示版本号和许可证信息
- 如果有已知漏洞会标记警告

---

## 8. Network（分支网络图）

Network 以图形化的方式展示仓库的所有分支和 commit 关系：

- 不同颜色的线条代表不同分支
- 节点代表 commit
- 可以直观看到分支从哪里创建、在哪里合并

---

## 9. Community（社区标准）

Community 页面检查仓库是否遵循开源社区最佳实践：

| 检查项 | 说明 |
|--------|------|
| README | 是否有 README 文件 |
| Code of conduct | 是否有行为准则 |
| Contributing | 是否有贡献指南 |
| License | 是否有许可证 |
| Issue templates | 是否有 Issue 模板 |
| Pull request template | 是否有 PR 模板 |
| Description | 是否有仓库描述 |
| Topics | 是否有主题标签 |

每项达标会显示 ✅，未达标会提示如何改进。

---

## 小结

- [x] 知道 Insights 的总览页面 Pulse
- [x] 会查看贡献者统计和流量数据
- [x] 了解依赖图和分支网络图
- [x] 知道社区标准检查是什么

**下一篇**：学习仓库 Settings（上）——仓库基本设置、分支保护、协作管理。

---

## 快速自查清单

- [ ] 我看过 Pulse 活跃概览
- [ ] 我知道仓库的访客和克隆数据
- [ ] 我查看过依赖图
- [ ] 我知道社区标准检查有哪些
