# webpack-mode

[![Build Status](https://travis-ci.org/mckomo/webpack-mode.svg?branch=master)](https://travis-ci.org/mckomo/webpack-mode)

Get easily environment mode of Webpack build. **Works only with Webpack 4**.

### Install

Simply run in terminal:

```sh
npm add --save-dev webpack-mode
```

or (if you use Yarn)

```sh
yarn add --dev webpack-mode
```

### Usage

When you run `webpack --mode=production` or `NODE_ENV=production webpack`

```js
// webpack.config.js
const { isProduction } = require("webpack-mode");

console.log(isProduction); // => true

// ... rest of the config
```

### API

When you run `webpack --mode=development`

```js
const webpackMode = require("webpack-mode");

webpackMode.isProduction; // false
webpackMode.isDevelopment; // true

webpackMode == "development"; // true
webpackMode === "development"; // false - webpackMode is not a string

console.log(`${webpackMode}`); // 'development'
```
