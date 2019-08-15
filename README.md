# simple-electron-webpack-starterkit

> A bare minimum project structure to get started developing with [`electron-webpack`](https://github.com/electron-userland/electron-webpack), [`typescript`](https://www.typescriptlang.org/) & [`react`](https://reactjs.org/).

This template comes packed:

- Use of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) for development
- HMR for both `renderer` and `main` processes
- Use of [`babel-preset-env`](https://github.com/babel/babel-preset-env) that is automatically configured based on your `electron` version
- Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application
- [`electron-window-state`](https://github.com/mawie81/electron-window-state) to manage window location
- React Devtools integration with [`electron-devtools-installer`](https://github.com/MarshallOfSound/electron-devtools-installer)
- Vscode debugging integration

Make sure to check out all the docs:

- [`react`](https://reactjs.org/) for UI
- [`electron`](https://electronjs.org/) docs for all kinds of features
- [`electron-webpack`'s documentation](https://webpack.electron.build/) for build pipeline

## Getting Started

Simply clone down this repository, install dependencies, and get started on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

```bash
# copy template using git clone
git clone https://github.com/wallexd/simple-electron-webpack-starterkit.git
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
