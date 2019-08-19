const { resolve } = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      // Optional
      {
        loader: require.resolve(
          'react-docgen-typescript-loader'
        )
      }
    ]
  })

  config.resolve.alias = {
    '@modules': resolve(__dirname, '..', 'src', 'modules'),
    '@common': resolve(__dirname, '..', 'src', 'common'),
    '@main': resolve(__dirname, '..', 'src', 'main'),
    '@renderer': resolve(__dirname, '..', 'src', 'renderer')
  }

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
