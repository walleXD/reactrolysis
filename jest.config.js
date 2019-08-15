/* eslint-disable @typescript-eslint/no-var-requires */
const { defaults: tsjPreset } = require('ts-jest/presets')

const common = {
  transform: {
    ...tsjPreset.transform
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  coveragePathIgnorePatterns: [
    '(tests/.*.mock).(jsx?|tsx?)$'
  ],
  verbose: true
}

module.exports = {
  projects: [
    {
      ...common,
      roots: ['<rootDir>/src/main'],
      runner: '@jest-runner/electron/main',
      testEnvironment: 'node',
      testMatch: ['**/__tests__/**/*.(spec|test).ts']
    },
    {
      ...common,
      roots: ['<rootDir>/src/renderer'],
      runner: '@jest-runner/electron',
      testEnvironment: '@jest-runner/electron/environment',
      testMatch: ['**/__tests__/**/*.(spec|test).tsx']
    }
  ]
}
