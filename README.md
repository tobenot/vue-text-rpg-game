# Forest of Mysteries

A text-based adventure RPG web game built with Vue 3. Explore a mysterious forest, solve ancient puzzles, and embark on a magical journey.

## Features

- Single-page application built with Vue 3 and Vuex
- Rich storyline with multiple endings
- Clean and intuitive user interface
- Item collection and usage system
- Responsive design for various devices

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/tobenot/vue-text-rpg-game.git
   ```

2. Install dependencies:
   ```
   cd vue-text-rpg-game
   npm ci
   ```

3. Run the development server:
   ```
   npm run serve
   ```

4. Open `http://localhost:8080` in your browser to start playing

## Recovery status

The package and lockfile are tracked (Vue CLI 5.0.8, Vue 3 / Vuex 4), but this checkout is not established as a complete working cold start. The conventional `public/index.html` template is absent from both Git and disk, and no custom HTML template is configured. `src/store/index.js` also retains a default `Vue` import despite the Vue 3 dependency; this inspection records the compatibility candidate without claiming a reproduced compiler error. No dependencies were installed or build/browser tests run.

Executing the actual `vue.config.js` in a VM with an explicitly synthetic `defineConfig` helper shows production `publicPath` is still `/<repository-name>/`. Changing `DEPLOY_PATH` through `build:local` or `deploy:local` has no effect because the config does not read it. The VM confirms the configuration branch only, not Vue CLI build behavior.

`npm run deploy` executes a historical script that initializes Git in `dist/` and force-pushes to a placeholder remote. Do not use it as a build, local preview or repository synchronization command. A local root deployment needs a real path configuration and restored template first. This audit changes documentation only, not the app, lockfile or deployment script.

## Building for Production

Run the following command to build the production version:
```
npm run build
```
The built files will be in the `dist` directory.

## Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

# 神秘森林冒险

这是一个使用Vue 3开发的文字冒险RPG网页游戏。玩家将探索一片神秘的森林,解开古老的谜题,体验一段奇妙的冒险。

## 项目特点

- 使用Vue 3和Vuex构建的单页面应用
- 丰富的游戏剧情和多重结局
- 简洁直观的用户界面
- 物品收集和使用系统
- 响应式设计,适配多种设备

## 如何开始

1. 克隆仓库:
   ```
   git clone https://github.com/tobenot/vue-text-rpg-game.git
   ```

2. 安装依赖:
   ```
   cd vue-text-rpg-game
   npm ci
   ```

3. 运行开发服务器:
   ```
   npm run serve
   ```

4. 在浏览器中打开 `http://localhost:8080` 开始游戏

## 当前恢复边界

源码与锁文件已跟踪，但 checkout 没有 `public/index.html`，也没有配置其他 HTML 模板。store 中 Vue 3 的 default import 是待验证兼容候选，本轮不把源码观察当编译失败复现。未安装依赖、构建或启动浏览器，不能照旧 README 宣称拉取后直接可玩。

当前生产 `publicPath` 仍为 `/<repository-name>/`。实际配置的 VM 执行表明 `DEPLOY_PATH=/` 不生效，因为 `vue.config.js` 未读取它，故 `build:local` 不能据名称视为根路径构建。真实 CLI 不在此次执行链中。

`deploy.sh` 会在 `dist` 初始化仓库，并向 placeholder 目标 force push，不是普通构建或本次 Git 同步入口。本轮只澄清文书，不补造丢失模板、不改玩法或执行发布脚本。

## 构建生产版本

运行以下命令构建生产版本:
```
npm run build
```
构建后的文件将位于 `dist` 目录中。

## 贡献

欢迎提交问题和拉取请求。对于重大更改,请先开issue讨论您想要更改的内容。

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)

