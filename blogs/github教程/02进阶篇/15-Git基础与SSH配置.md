---
is_published: true
title: 15 · Git 基础与 SSH 配置
tags:
  - Git
  - SSH
  - GitHub教程
categories:
  - 02进阶篇
---

# 15 · Git 基础与 SSH 配置

> **这篇的目标**：在本地安装并配置 Git、生成 SSH 密钥并绑定到 GitHub、学会基本的 Git 命令让本地和远程仓库同步。

---

## 1. Git 简介

Git 是一个**分布式版本控制系统**，它管理的是你代码的"版本历史"。GitHub 是托管 Git 仓库的网站，而 Git 是运行在你本地的工具。

**本地 vs 远程**：

| 概念 | 位置 | 说明 |
|------|------|------|
| 本地仓库（Local） | 你的电脑 | 用 Git 管理的项目文件夹 |
| 远程仓库（Remote） | GitHub 服务器 | 存在 GitHub 上的项目副本 |

---

## 2. 安装 Git

### Windows

1. 访问 https://git-scm.com/download/win
2. 下载安装程序并运行
3. 一路默认选项，**注意**选择 **Git from the command line and also from 3rd-party software**
4. 安装完成后打开命令提示符或 Git Bash，运行：

```bash
git --version
```

✅ 成功标志：显示 Git 版本号（如 git version 2.40.0）。

### macOS

```bash
brew install git
```

或从 https://git-scm.com/download/mac 下载安装程序。

### Linux（Ubuntu/Debian）

```bash
sudo apt update
sudo apt install git
```

---

## 3. 配置 Git

安装后第一件事是配置你的用户名和邮箱——这些信息会附在每次 commit 上。

```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱@example.com"
```

### 验证配置

```bash
git config --global --list
```

✅ 成功标志：看到 user.name 和 user.email 正确显示。

---

## 4. SSH 密钥配置

用 SSH 协议连接 GitHub 可以避免每次推送都输密码。

### 4.1 检查已有密钥

```bash
ls ~/.ssh/id_ed25519.pub
```

如果文件存在，可以跳过下一步。如果提示 No such file，继续生成。

### 4.2 生成新密钥

```bash
ssh-keygen -t ed25519 -C "你的邮箱@example.com"
```

一路回车即可。完成后会生成两个文件：

- ~/.ssh/id_ed25519：私钥（**不要泄露**）
- ~/.ssh/id_ed25519.pub：公钥（需要添加到 GitHub）

### 4.3 查看公钥内容

```bash
cat ~/.ssh/id_ed25519.pub
```

复制输出的全部内容。

### 4.4 添加到 GitHub

1. 打开 GitHub → 右上角头像 → **Settings**
2. 左侧菜单 → **SSH and GPG keys**（/settings/keys）
3. 点击 **New SSH key** 或 **Add SSH key**
4. Title 输入标识（如"我的笔记本电脑"）
5. Key type 选 **Authentication Key**
6. Key 粘贴刚刚复制的公钥内容
7. 点击 **Add SSH key**

### 4.5 测试连接

```bash
ssh -T git@github.com
```

看到 Hi 用户名! You've successfully authenticated... 说明配置成功。

---

## 5. 克隆仓库到本地

```bash
git clone <仓库地址>
```

### 获取仓库地址

进入仓库 Code 标签页 → 点击 **Code** 按钮 → 选择 **SSH** 标签 → 复制地址。

格式如：git@github.com:用户名/仓库名.git

### 示例

```bash
git clone git@github.com:facebook/react.git
cd react
```

✅ 成功标志：代码文件下载到本地文件夹。

---

## 6. 基本 Git 操作流程

### 6.1 查看状态

```bash
git status
```

显示当前仓库的变更状态：哪些文件被修改了、哪些未跟踪。

### 6.2 添加文件到暂存区

```bash
# 添加单个文件
git add 文件名

# 添加所有变更
git add .
```

### 6.3 提交变更

```bash
git commit -m "这里写提交说明"
```

### 6.4 推送到远程仓库

```bash
git push origin main
```

- origin：远程仓库的默认名称
- main：要推送到的分支名

### 6.5 拉取远程更新

```bash
git pull origin main
```

把远程仓库的最新修改拉到本地。

### 常见工作流

```bash
# 1. 拉取最新代码
git pull origin main

# 2. 修改文件...

# 3. 查看修改了什么
git status

# 4. 添加到暂存区
git add .

# 5. 提交
git commit -m "添加了登录功能"

# 6. 推送到 GitHub
git push origin main
```

---

## 小结

- [x] 安装了 Git 并配置了用户名和邮箱
- [x] 生成了 SSH 密钥并添加到 GitHub
- [x] 学会了克隆远程仓库
- [x] 掌握了 git add / commit / push / pull 基本操作

**下一篇**：学习 Git 进阶技巧——Rebase、Stash、Cherry-pick 等。

---

## 快速自查清单

- [ ] git --version 能显示版本号
- [ ] 我已经配置了 user.name 和 user.email
- [ ] 我用 SSH 连接到了 GitHub
- [ ] 我成功克隆了一个仓库到本地
- [ ] 我会使用 git add、commit、push
