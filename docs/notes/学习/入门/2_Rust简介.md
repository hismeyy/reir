---
title: Rust简介
author: MaxCosmos
createTime: 2024/07/05 00:00:00
permalink: /study-beginner/2/
---

## Rust

Rust 语言是一种高效、可靠的通用高级语言。其高效不仅限于开发效率，它的执行效率也是令人称赞的，是一种少有的兼顾开发效率和执行效率的语言。Rust 语言由 Mozilla 开发，最早发布于 2014 年 9 月。Rust 的编译器是在 MIT License 和 Apache License 2.0 双重协议声明下的免费开源软件。

### Rust特点

- **高性能**：Rust 速度惊人且内存利用率极高。由于没有运行时和垃圾回收，它能够胜任对性能要求特别高的服务，可以在嵌入式设备上运行，还能轻松和其他语言集成；
- **可靠性**：Rust 丰富的类型系统和所有权模型保证了内存安全和线程安全，所以我们可以在编译期就能够消除各种各样的错误；
- **生产力**：Rust 拥有出色的文档、友好的编译器和清晰的错误提示信息， 还集成了一流的包管理器和构建工具， 智能地自动补全和类型检验的多编辑器支持， 以及自动格式化代码等等。

### Rust应用

- **系统编程**：Rust 非常适合编写操作系统、驱动程序和嵌入式系统等需要直接操作硬件的程序。它的内存安全特性使其成为系统编程的理想选择；
- **WebAssembly**：Rust 可以编译成 WebAssembly（ Wasm ），使其成为在浏览器中运行高性能代码的理想选择。Rust 社区也为此提供了丰富的工具和库；
- **网络服务器**：Rust 用极低的资源消耗做到安全高效，且具备很强的大规模并发处理能力，十分适合开发普通或极端的服务器程序；
- **并发编程**：Rust 的所有权系统和线程安全特性使其在并发编程中非常强大，适合编写需要处理并行任务的应用程序；
- **游戏开发**：虽然 C++ 仍然是游戏开发的主流语言，但 Rust 正在成为开发高性能游戏和游戏引擎的热门选择，尤其是那些对安全性和性能有高要求的项目；
- **区块链**：Rust 在区块链领域也有广泛应用，许多区块链项目和协议都是用 Rust 编写的，例如 Polkadot 和 Substrate。

## rustup

```
The Rust toolchain installer

Usage: rustup [OPTIONS] [+toolchain] [COMMAND]

Commands:
  show         Show the active and installed toolchains or profiles
  update       Update Rust toolchains and rustup
  check        Check for updates to Rust toolchains and rustup
  default      Set the default toolchain
  toolchain    Modify or query the installed toolchains
  target       Modify a toolchain's supported targets
  component    Modify a toolchain's installed components
  override     Modify toolchain overrides for directories
  run          Run a command with an environment configured for a given toolchain
  which        Display which binary will be run for a given command
  doc          Open the documentation for the current toolchain
  self         Modify the rustup installation
  set          Alter rustup settings
  completions  Generate tab-completion scripts for your shell
  help         Print this message or the help of the given subcommand(s)

Arguments:
  [+toolchain]  release channel (e.g. +stable) or custom toolchain to set override

Options:
  -v, --verbose  Enable verbose output
  -q, --quiet    Disable progress output
  -h, --help     Print help
  -V, --version  Print version

Discussion:
    Rustup installs The Rust Programming Language from the official
    release channels, enabling you to easily switch between stable,
    beta, and nightly compilers and keep them updated. It makes
    cross-compiling simpler with binary builds of the standard library
    for common platforms.

    If you are new to Rust consider running `rustup doc --book` to
    learn Rust.
```

```
Rust 工具链安装程序

使用方法: rustup [选项] [+工具链] [命令]

命令列表:
  show         显示当前激活和已安装的工具链或配置文件
  update       更新 Rust 工具链和 rustup
  check        检查 Rust 工具链和 rustup 的更新
  default      设置默认工具链
  toolchain    修改或查询已安装的工具链
  target       修改工具链支持的目标平台
  component    修改工具链已安装的组件
  override     修改目录的工具链覆盖
  run          在配置了指定工具链的环境中运行命令
  which        显示运行指定命令的二进制文件
  doc          打开当前工具链的文档
  self         修改 rustup 安装
  set          更改 rustup 设置
  completions  为你的 shell 生成自动补全脚本
  help         打印此消息或指定子命令的帮助信息

参数:
  [+工具链]  发布频道（例如 +stable）或自定义工具链来设置覆盖

选项:
  -v, --verbose  启用详细输出
  -q, --quiet    禁用进度输出
  -h, --help     打印帮助信息
  -V, --version  打印版本信息

讨论:
	Rustup 从官方发布渠道安装 Rust 编程语言，允许你轻松地在稳定版、测试版
	和每夜编译版之间切换并保持更新。它使交叉编译更简单，提供常见平台的标准库
	二进制构建。

    如果你是 Rust 新手，可以运行 `rustup doc --book` 来学习 Rust。
```


## cargo

cargo 提供了一系列的工具，从项目的建立、构建到测试、运行直至部署，为 Rust 项目的管理提供尽可能完整的手段。同时，与 Rust 语言及其编译器 `rustc` 紧密结合。

### cargo使用

- 创建一个被 cargo 管理的项目

  ```
  cargo new <project_name>
  ```

  ```
  $ tree
  .
  ├── .git
  ├── .gitignore
  ├── Cargo.toml
  └── src
      └── main.rs
  ```

- 运行项目（ 可以直接 `run` 也可以先 `build` 然后再 `run` ）

  ```
  cargo run
  ```

- 构建项目

  ```
  cargo build
  ```

  进入 `target` 可以看到有 `debug` 文件，说明现在是 `debug` 模式，`debug` 模式下编译器不做任何的优化，只为了快快的运行，所以运行速度就会下降。如果不想使用 `debug` 模式。可以在后面加 `--release`

  ```
  cargo run --release
  cargo build --release
  ```

- 快速检查是否可以通过编译（ 经常要使用的命令 ）

  ```
  cargo check
  ```

### Cargo.toml 和 Cargo.lock

`Cargo.toml` 和 `Cargo.lock` 是 `cargo` 的核心文件。

- `Cargo.toml` 是 `cargo` 特有的**项目数据描述文件**。它存储了项目的所有元配置信息；

  ```
  [package]
  name = "hello_world"
  version = "0.1.0"
  edition = "2021"
  
  [dependencies]
  ```

  `name` 是项目名称，`version` 是项目版本，`edition` 字段定义了使用的 Rust 大版本，`[dependencies]` 下可以写项目的依赖。

- `Cargo.lock` 文件是 `cargo` 工具根据同一项目的 `toml` 文件生成的**项目依赖详细清单**，我们一般不用修改它，只需要修改 `Cargo.toml` 文件就可以了。

## crates