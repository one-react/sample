# One React Component: sample


<p align="center"><img width="150" src="https://cdn.jsdelivr.net/gh/one-react/assets/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/sample.svg)](https://travis-ci.org/one-react/sample)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/sample.svg)](https://circleci.com/gh/one-react/sample)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/sample.svg)](https://codecov.io/gh/one-react/sample) 
[![Version](https://img.shields.io/npm/v/or-sample.svg)](https://www.npmjs.com/package/or-sample)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/sample.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-sample

// with yarn
yarn add or-sample

```

## Usage
- Config webpack `sass-loader` if you are using webpack.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Basic Example

## API
```ts
interface Props {
  
}
```

## Customize Theme
**Customize in webpack**

The following variables in or-sample can be overridden:

```scss
$or-btn-primary-color: $or-primary-color !default;
...
```
For more variables, see [here](https://github.com/one-react/sample/blob/master/src/styles.scss).

Alternatively, you can override variables from [or-theme](https://github.com/one-react/theme/blob/master/src/variables.scss) to keep all or-components in a unified theme style.

First you should create a `theme.scss` file to declare the variables you want to override.

Then use the [data](https://github.com/webpack-contrib/sass-loader#environment-variables)  option provided by `sass-loader` to override the default values of the variables.

We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'theme.scss')) // pass theme.scss to sass-loader
      }
    }
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://one-react.github.io/sample)

## License

MIT &copy; foryuki
