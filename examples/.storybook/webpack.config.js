const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          ...require('../../.babelrc')
        }
      },
      require.resolve('react-docgen-typescript-loader')
    ]
  })

  if (env === 'production'.toUpperCase()) {
    defaultConfig.output.publicPath = process.env.GH_PAGES ? '/sample/' : '/'
  }

  defaultConfig.resolve.alias['or-sample'] = path.resolve(__dirname, '../../src')

  defaultConfig.resolve.extensions.push('.ts', '.tsx')

  defaultConfig.resolve.modules.push(
    path.resolve(__dirname, '../node_modules'),
    path.resolve(__dirname, '../../node_modules')
  )

  defaultConfig.devServer = {
    inline: true,
    hot: true
  }

  return defaultConfig
}
