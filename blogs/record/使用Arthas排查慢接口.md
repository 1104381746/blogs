---
title: "使用Arthas排查慢接口"
aliases:
slug: "shi-yong-arthaspai-cha-man-jie-kou"
source: https://blogs.luhg.cn/archives/shi-yong-arthaspai-cha-man-jie-kou
tags:
categories:
  - 记录
---

### 📝 场景描述

线上环境出现慢接口，日志记录不详细，无法通过代码级别的 Debug 定位。需要一种**无需重启、无需改代码** 的方法实时监控 Java 方法的执行耗时。

## 🔧 核心方案：Arthas + Trace

Arthas 是一款强大的线上监控诊断工具。它可以让你从全局视角实时查看应用的**Load、内存、GC、线程** 状态，并能通过`trace`命令精准定位业务方法的执行耗时。

### 1\. 环境准备

**步骤 1：获取 Java PID**

确定目标进程

打开终端，执行： 

```
    netstat -tulnp | grep java

```

此命令将列出所有监听端口的 Java 进程及其 PID，便于后续选择监控对象。

![](https://img.luhg.cn/2026/06/image-IDZe.png)

**步骤 2：启动 Arthas**

连接到目标进程

```
    # 假设 Arthas 启动包名为 arthas-boot.jar
    java -jar arthas-boot.jar

```

如果服务器上运行了多个 Java 应用，系统将提示你输入序号选择目标进程。

出现以下图标，说明启动成功。

![](https://img.luhg.cn/2026/06/image-JtfI.png)

## ⚡ Trace 命令详解与实战

`trace`命令是定位慢接口的关键。它可以搜索特定类/方法的调用路径，并输出每个节点的耗时。

trace命令只能跟踪一级方法的调用链路，若方法套用，可以逐层跟踪分析。

### 2\. 常用参数说明

参数名称| 参数说明  
---|---  
 _class-pattern_|  类名表达式匹配  
 _method-pattern_|  方法名表达式匹配  
 _condition-express_|  条件表达式  
[E]| 开启正则表达式匹配，默认为通配符匹配  

`[n:]`| 命令执行次数，默认值为 100。  
`#cost`| 方法执行耗时  
`[m <arg>]`| 指定 Class 最大匹配数量，默认值为 50。长格式为`[maxMatch <arg>]`。  
  
### 3\. 实战案例：定位耗时 2.5s 的方法

我们发现 `GoodsSkuInfoListServiceImpl.execute` 方法执行过慢。通过以下命令追踪：

``` 
    $ trace com.sbp.goods.service.bs.sku.GoodsSkuInfoListServiceImpl execute
    Press Q or Ctrl+C to abort.
    Affect(class count: 1 , method count: 2) cost in 639 ms, listenerId: 1
    `---ts=2026-01-14 14:44:41.134;thread_name=DubboServerHandler-192.168.200.23:20806-thread-10;id=329;is_daemon=true;priority=5;TCCL=sun.misc.Launcher$AppClassLoader@18b4aac2
        `---[2505.844771ms] com.sbp.goods.service.bs.sku.GoodsSkuInfoListServiceImpl:execute()
            `---[99.98% 2505.428426ms ] com.sbp.goods.service.bs.sku.GoodsSkuInfoListServiceImpl:execute() #43
                `---[98.70% 2472.97293ms ] com.sbp.goods.service.bs.sku.GoodsSkuInfoListServiceImpl:execute()
                    +---[2.42% 59.72526ms ] com.dap.param.StringInput:parseObject() #56
                    +---[0.00% 0.037091ms ] com.sbp.goods.service.po.bean.SkuBean:addOrderBy() #91
                    +---[19.50% 482.298016ms ] com.sbp.goods.service.cs.SkuCSImpl:getSkuListByBean() #92
                    +---[14.74% 364.552234ms ] com.dap.utils.DeepFieldCopy:transformList() #92        
                    +---[0.19% min=7.85E-4ms,max=0.022121ms,total=4.807707ms,count=2570] com.sbp.goods.service.vo.SkuVO:getBaseUnitCode() #103
                    +---[24.99% min=0.13585ms,max=11.649155ms,total=617.923204ms,count=2570] com.sbp.goods.common.CacheRequestsGoods:getUnitInfoByCode() #103
                    +---[0.24% min=8.96E-4ms,max=0.036149ms,total=5.876124ms,count=2570] com.sbp.goods.service.po.SpuPackageUnitsPo:getUnit() #104
                    +---[0.23% min=8.3E-4ms,max=0.044053ms,total=5.617666ms,count=2570] com.sbp.goods.service.vo.SkuVO:setBaseUnitName() #104
                    +---[0.20% min=7.85E-4ms,max=0.174345ms,total=4.872009ms,count=2570] com.sbp.goods.service.vo.SkuVO:getPackageUnitCode() #106
                    +---[26.40% min=0.139082ms,max=11.916437ms,total=652.944706ms,count=2570] com.sbp.goods.common.CacheRequestsGoods:getUnitInfoByCode() #106
                    +---[0.24% min=8.89E-4ms,max=0.023415ms,total=5.84583ms,count=2570] com.sbp.goods.service.po.SpuPackageUnitsPo:getUnit() #107
                    `---[0.22% min=8.28E-4ms,max=0.024173ms,total=5.52951ms,count=2570] com.sbp.goods.service.vo.SkuVO:setPackageUnitName() #107

```

#### 运行结果解析

[2505.844771ms] = [耗时]

[99.98% 2505.428426ms ] = [百分比 耗时]

[0.19% min=7.85E-4ms,max=0.022121ms,total=4.807707ms,count=2570] = [百分比 最小耗时 最大耗时 总耗时 总调用次数]

### 🛠️ 解决方案

代码中定位到该方法涉及**多次查询单位信息** ，导致耗时。通过优化查询逻辑，成功解决慢接口问题。

## 📚 参考资料

> https://arthas.aliyun.com/doc/