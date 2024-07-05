---
title: Rust环境安装
author: MaxCosmos
createTime: 2024/07/05 00:00:00
permalink: /study-beginner/1/
---

## Win 安装

### 下载安装程序

> [Rust安装程序下载地址](https://www.rust-lang.org/learn/get-started)

![image-20240705002258093](http://maximg.maxcosmos.top/blog-img/image-20240705002258093.png)

### 更改安装目录（ 可选 ）

> 如果你的系统只有一个盘，或者你没有更改盘的需求，就不需要这一步。

1. 创建Rust安装的目录。

   ```cmd
   mkdir D:\rust\.rustup
   mkdir D:\rust\.cargo
   ```

2. 打开系统环境变量进行配置。

   ```
   RUSTUP_HOME=D:\rust\.rustup
   CARGO_HOME=D:\rust\.cargo
   ```

   ![image-20240705002841193](http://maximg.maxcosmos.top/blog-img/image-20240705002841193.png)

   ![image-20240705002901810](http://maximg.maxcosmos.top/blog-img/image-20240705002901810.png)

3. 管理员运行下载好的安装包，查看控制台，安装位置是否已经更改成功。

   ![image-20240705114513774](https://maximg.maxcosmos.top/knowledge/202407051145968.png)

### 配置镜像（ 可选 ）

1. 打开清华源，找到 `rustup`

   > [清华源](https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/)
   
   ![image-20240705115034808](https://maximg.maxcosmos.top/knowledge/202407051150920.png)
   
2. 配置环境变量

   ![image-20240705115146044](https://maximg.maxcosmos.top/knowledge/202407051151100.png)

   ```cmd
   RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup
   ```

   ![image-20240705115231783](https://maximg.maxcosmos.top/knowledge/202407051152814.png)

### 配置代理 （ 可选 ）

> 如果你有魔法，可以配置代理哦！

1. 打开系统环境变量进行配置。

   ```cmd
   set HTTP_PROXY=http://127.0.0.1:7890 
   set HTTPS_PROXY=http://127.0.0.1:7890
   ```

   ![image-20240705004749962](http://maximg.maxcosmos.top/blog-img/image-20240705004749962.png)

   ![image-20240705004808002](http://maximg.maxcosmos.top/blog-img/image-20240705004808002.png)

### 安装Rust

1. 管理员运行下载好的安装包。

   ```
   The Cargo home directory is located at:
   
     D:\rust\.cargo
   
   This can be modified with the CARGO_HOME environment variable.
   
   The cargo, rustc, rustup and other commands will be added to
   Cargo's bin directory, located at:
   
     D:\rust\.cargo\bin
   
   This path will then be added to your PATH environment variable by
   modifying the HKEY_CURRENT_USER/Environment/PATH registry key.
   
   You can uninstall at any time with rustup self uninstall and
   these changes will be reverted.
   
   Current installation options:
   
   
      default host triple: x86_64-pc-windows-msvc
        default toolchain: stable (default)
                  profile: default
     modify PATH variable: yes
   
   1) Proceed with standard installation (default - just press enter)
   2) Customize installation
   3) Cancel installation
   >
   ```

   ```
   Cargo 主目录位于：
   
     D:\rust\.cargo
   
   可以使用 CARGO_HOME 环境变量修改该位置。
   
   cargo、rustc、rustup 以及其他命令将被添加到 Cargo 的 bin 目录中，该目录位于：
   
     D:\rust\.cargo\bin
   
   这个路径将通过修改 HKEY_CURRENT_USER/Environment/PATH 注册表键被添加到你的 PATH 环境变量中。
   
   你可以随时使用 rustup self uninstall 卸载，并且这些更改将被还原。
   
   当前的安装选项：
   
      默认主机三元组：x86_64-pc-windows-msvc
      默认工具链：stable（默认）
      配置文件：default
      修改 PATH 变量：是
   
   1) 继续标准安装（默认 - 只需按 Enter）
   2) 自定义安装
   3) 取消安装
   >
   
   ```

2. 直接按回车，选择标准安装。

   ![image-20240705120142097](https://maximg.maxcosmos.top/knowledge/202407051201167.png)
   
3. 控制台中输入 `rustup -V` 查看是否安装成功。

   ![image-20240705120350904](https://maximg.maxcosmos.top/knowledge/202407051203937.png)

### 配置 crates 镜像（ 可选 ）

1. 在 `.cargo/` 目录下创建 `config` 文件。（ 不需要后缀哦！ ）

   ![image-20240705121054759](https://maximg.maxcosmos.top/knowledge/202407051210786.png)

2. 打开清华源，找到 `crates.io-index.git`

   > [清华源](https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/)

   ![image-20240705120859651](https://maximg.maxcosmos.top/knowledge/202407051208718.png)

3. 写入配置，到 `config` 文件中。

   ![](https://maximg.maxcosmos.top/knowledge/202407051210923.png)

   ```
   [source.crates-io]
   replace-with = 'mirror'
   
   [source.mirror]
   registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"
   ```

   ![image-20240705121202306](https://maximg.maxcosmos.top/knowledge/202407051212336.png)

## Linux 安装

