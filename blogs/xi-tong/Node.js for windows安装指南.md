---
share: true
title: Node.js for windows安装指南
tags:
  - Node.js
categories:
  - 系统
---

### 一、下载 Node.js 安装包（Windows MSI）

  1. **访问官网**  
打开 [Node.js 官网](<https://nodejs.org/>)

     * **LTS 版本** ：稳定版（推荐生产环境）

     * **Current 版本** ：最新版（含实验特性）

  2. **选择 Windows 安装包**

     * 点击对应版本的 `.msi` 按钮（自动匹配 64/32 位系统）

     * 若需手动选择版本，进入 [下载页](<https://nodejs.org/en/download/>)[面](<https://nodejs.org/zh-cn/download>)


  
![](https://img.luhg.cn/2026/06/image-CgJb.png)

### 二、安装步骤详解（图文关键配置）

  1. **运行安装向导**

     * 双击下载的 `node-vXX.msi` 文件 → 点击 **Next**

  2. **关键配置选项（重点注意）**

**步骤**| **选项**| **推荐选择**| **说明**  
---|---|---|---  
许可协议| `I accept...`| ✅| 必须勾选  
安装路径| `C:\Program Files\nodejs\`| 默认| 可修改为其他路径（**不要有空格或中文** ）  
**选择组件**| `Add to PATH`| ✅ **必选**|  自动配置环境变量  
工具依赖| `Automatically install...`| ✅| 自动安装编译工具（Python、Visual Studio Build Tools）  
| `Git`| 根据需求勾选| 非必需  
| `Chocolatey`| ✅| 推荐（Windows 包管理器）  
  
  3. **完成安装**

     * 点击 `Install` → 等待进度条完成 → `Finish`


### 三、验证安装与环境配置

  1. **检查版本和 PATH**

     * **Win + R** → 输入 `cmd` → 运行：

```node --version  # 应显示 vXX.X.X
           npm --version   # npm 版本
           

```

     * **若提示“不是内部命令”** ：

       * 手动添加环境变量：  

`控制面板 → 系统和安全 → 系统 → 高级系统设置 → 环境变量`

         * 在 `Path` 中添加：

```D:\Program Files\nodejs\
               %USERPROFILE%\AppData\Roaming\npm
               

```

  2. **测试终端调用**

     * 新开 CMD/PowerShell，输入：

```node -e "console.log('Success!')"
```


  
  
### 四、配置国内镜像加速（解决安装慢、报错问题）

#### 1\. 临时使用淘宝镜像（单次有效）

**bash**

复制

```
    npm install -g npm@latest --registry=https://registry.npmmirror.com
    

```

#### 2\. 永久修改镜像源

**bash**

复制

```
    # 配置淘宝镜像
    npm config set registry https://registry.npmmirror.com
    
    # 验证配置
    npm config get registry
    

```

#### 3\. 清理缓存（建议）

**bash**

复制

```
    npm cache clean --force
    

```

#### 4\. 使用 nrm 快速切换镜像源

**bash**

复制

```
    # 安装 nrm（镜像管理工具）
    npm install -g nrm
    
    # 添加并切换镜像
    nrm add taobao https://registry.npmmirror.com
    nrm use taobao
    
    # 列出可用源
    nrm ls
    

```

* * *

### 五、常见问题解决

**问题**| **解决方案**  
---|---  

`npm`**命令报错**|  卸载重装，或运行：`npm install -g npm@latest`  
**权限不足**|  以管理员身份运行 CMD，或配置用户级 `npm` 前缀：  

`npm config set prefix "~/.npm-global"`  
**中文路径乱码**|  修改 Git Bash 配置：  

`git config --global core.quotepath false`  
**安全软件拦截**|  临时关闭防火墙/杀毒软件