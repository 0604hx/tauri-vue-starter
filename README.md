# Tauri Vue Starter

基于 Bun + Tauri2 + Vue3 + NaiveUI（组件库）快速启动模板，开箱即用，丝滑上手。

## 预览

![预览](about/home.png)


## 二次开发
> tauri 开发特别耗费硬盘空间，`src-tauri/target` 目录通常要占用6GB以上的空间😂

```shell
# 克隆项目
git clone https://github.com/0604hx/tauri-vue-starter.git

# 进入项目目录
cd tauri-vue-starter

# 安装依赖
bun i

# 启动开发服务器
bun tauri dev

# 打包
bun tauri build
```

### 打包优化

默认配置了 `profile.release` 优化选项，你可以根据需要调整。

启用优化后，打包体积为`3337kb`（构建耗时 2m49s），未优化则为 `3331kb`（构建耗时 2m56s）😄。

```toml
[profile.release]
# 减少代码生成单元以提高优化效果
codegen-units = 1
# 链接时优化（Link Time Optimization）
lto = true
# Prioritizes small binary size. Use `3` if you prefer speed,z to optimize for size, and s for something in-between.
opt-level = "s"
# 遇到 panic 直接终止，不包含回溯信息     
panic = "abort"
# 去除符号表和调试信息
strip = true
```

## 附录

### 图标

图标来自[iconfont/萌宠图标合集](https://www.iconfont.cn/collections/detail?spm=a313x.home_2025.i1.dfa9d9a29.58a33a81KoiDA0&cid=51002)，感谢作者`qiqilili`。
