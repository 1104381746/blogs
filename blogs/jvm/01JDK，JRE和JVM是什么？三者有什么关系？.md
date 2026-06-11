---
date: 2026-06-09
is_published: true
title: 01-JDK，JRE和JVM是什么？三者有什么关系？
tags:
  - Java
  - JVM
  - JDK
  - JRE
categories:
  - JVM
---

* **JDK** ：英文全称 Java Development Kit，是Java的开发工具包 JDK是提供给Java开发人员使用的，其中包含了`Java的开发工具`和`JRE`。其中的开发工具包括：编译工具（javac.exe）打包工具（jar.exe）等。通俗的说就是**开发用的** 。

  * **JRE** ：英文全称 Java Runtime Environment，是Java运行环境 JRE包括`Java虚拟机 (JVM Java Virtual Machine)`和Java程序所需的`核心类库`等，如果想要运行一个开发好的Java程序，计算机中只需要安装JRE即可。通俗的说就是**运行用的** 。

  * **JVM** ：英文全称 Java Virtual Machine），是java虚拟机。 它只认识`.class`为后缀的文件，它能将class文件中的字节码指令进行识别并调用操作系统向上的API完成动作。JVM是java能够跨平台的核心机制。通俗的说就是**跨平台用的** ，就是把我们写的代码，转换成class文件用的。  
  
  
**JDK** = JRE + 开发工具集（例如Javac编译工具等）

**JRE** = JVM + Java SE 标准类库


![](https://img.luhg.cn/2026/06/image-pCae.png)