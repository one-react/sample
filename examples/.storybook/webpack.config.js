const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
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
  }, {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  })

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
