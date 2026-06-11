---
date: 2026-06-11
is_published: true
title: 16 · Git 进阶
tags:
  - Git
  - Git进阶
  - GitHub教程
categories:
  - 02进阶篇
---

# 16 · Git 进阶

> **这篇的目标**：掌握 Git 的高级操作——Rebase、Stash、Cherry-pick、Tag、日志搜索、撤销修改。

---

## 1. Rebase（变基）

Rebase 会把当前分支的 commit 重新应用到目标分支上，形成一条线性历史。

```bash
# 当前在 feature-login 分支
git rebase main
```

### Merge vs Rebase

| 对比 | Merge | Rebase |
|------|-------|--------|
| 历史 | 保留分支结构，有合并节点 | 线性历史，没有分叉 |
| 冲突 | 一次解决 | 每个 commit 都可能冲突 |
| 安全 | 不改动已有 commit | 不要对已推送的 commit 变基 |

### 交互式 Rebase

```bash
git rebase -i HEAD~3
```

常用命令：pick（保留）/ reword（改提交信息）/ squash（合并）/ drop（删除）。

---

## 2. Stash（暂存）

临时保存当前未提交的修改，切换到其他分支工作。

```bash
git stash
git stash push -m "说明"
git stash list
git stash pop
git stash drop
```

---

## 3. Cherry-pick（精选提交）

把其他分支的某个 commit 应用到当前分支。

```bash
git cherry-pick abc123
git cherry-pick abc123 def456
```

---

## 4. Tag（标签）

```bash
git tag v1.0.0
git tag -a v1.0.0 -m "发布说明"
git push origin v1.0.0
git push origin --tags
git tag -d v1.0.0
```

---

## 5. 日志和搜索

```bash
git log --oneline
git log --graph --oneline --all
git log --grep="关键词"
git blame 文件名
```

---

## 6. 撤销修改

| 场景 | 命令 |
|------|------|
| 未 add | git restore 文件名 |
| 已 add 未 commit | git restore --staged 文件名 |
| 已 commit 未 push | git commit --amend |
| 已 push | git revert HEAD |

> ⚠️ `git reset --hard` 会丢失未提交的修改，慎用。

---

## 7. 配置别名

```bash
git config --global alias.co checkout
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all"
```

之后可以用 `git co` 代替 `git checkout`。

---

## 小结

- [x] 理解 Rebase 和 Merge 的区别
- [x] 会用 Stash 暂存修改
- [x] 会用 Cherry-pick 和 Tag
- [x] 掌握撤销修改的方法

**下一篇**：学习 GitHub CLI——用命令行操作 GitHub。
