# Reactrolysis

[![Greenkeeper badge](https://badges.greenkeeper.io/walleXD/reactrolysis.svg)](https://greenkeeper.io/)

> A opinionated project structure to get started developing with [`electron-webpack`](https://github.com/electron-userland/electron-webpack), [`typescript`](https://www.typescriptlang.org/) & [`react`](https://reactjs.org/).

![alt text](resources/gifs/1.gif 'Dark mode support')

This template comes packed:

- Use of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) for development
- HMR for both `renderer` and `main` processes
- Use of [`babel-preset-env`](https://github.com/babel/babel-preset-env) that is automatically configured based on your `electron` version
- Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application
- [`electron-window-state`](https://github.com/mawie81/electron-window-state) to manage window location
- React Devtools integration with [`electron-devtools-installer`](https://github.com/MarshallOfSound/electron-devtools-installer)
- [`redux`](https://github.com/reduxjs/redux) as the ultimate source of truth
- [`electron-redux`](https://github.com/hardchor/electron-redux) integrating both main and renderer processes
- [`redux-persist`](https://github.com/rt2zz/redux-persist) with [`electron-store`](https://github.com/sindresorhus/electron-store) to use
- [`typesafe-actions`](https://github.com/piotrwitek/typesafe-actions) to avoid redux boilerplate
- [`material-ui`](https://github.com/mui-org/material-ui) as the component library of choice as the material design spec is very malleable
- [`storybook`](https://storybook.js.org/docs/guides/guide-react/) to develop components in isolation and much much more
- Vscode debugging integration
- Github CI integration, which runs on push

![alt text](resources/gifs/2.gif 'Dynamic dark mode macos')

Make sure to check out all the docs:

- [`react`](https://reactjs.org/) for UI
- [`electron`](https://electronjs.org/) docs for all kinds of features
- [`electron-webpack`'s documentation](https://webpack.electron.build/) for build pipeline

## Getting Started

Simply clone down this repository, install dependencies, and get started on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

```bash
# copy template using git clone
git clone https://github.com/wallexd/reactrolysis.git
cd simple-electron-webpack-starterkit
rm -rf .git

# install dependencies
yarn
```

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```

### Project structure

- `@main`: maps to `src/modules` - all the code runs in the `main` process. Entry for the main process is `src/main/index.ts`
- `@renderer`: maps to `src/renderer` - all the code runs in the `renderer` process. Entry for the main process is `src/renderer/index.tsx`
- `@common`: maps to `src/common` - code that runs in both `renderer` & `main` process like `redux` store
- `@modules`: maps to `src/modules` - to be used for modularly separating the features from app code. Features will contain reducers, action as well as associated components & tests

### ToDo

- [x] Add `redux-observables` to handle side effects
- [ ] Settings page
  - [ ] with option to toggle theme handling between `auto` & `user`
  - [x] Cleaner way to handle storybook window creation
- [ ] Add tests for reducers
- [ ] Add tests for epics
