/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')

console.log(__dirname)

module.exports = {
  resolve: {
    alias: {
      '@modules': resolve(
        __dirname,
        '..',
        'src',
        'modules'
      ),
      '@common': resolve(__dirname, '..', 'src', 'common'),
      '@main': resolve(__dirname, '..', 'src', 'main'),
      '@renderer': resolve(
        __dirname,
        '..',
        'src',
        'renderer'
      )
    }
  }
}
