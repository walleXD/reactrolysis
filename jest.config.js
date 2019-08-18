/* eslint-disable @typescript-eslint/no-var-requires */
const { defaults: tsjPreset } = require('ts-jest/presets')

const common = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@main': '<rootDir>/src/main',
    '@renderer': '<rootDir>/src/renderer',
    '@common': '<rootDir>/src/common',
    '@modules': '<rootDir>/src/modules'
  },
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
      runner: '@jest-runner/electron/main',
      testEnvironment: 'node',
      testMatch: ['**/__tests__/**/*.(spec|test).ts']
    },
    {
      ...common,
      runner: '@jest-runner/electron',
      testEnvironment: '@jest-runner/electron/environment',
      testMatch: ['**/__tests__/**/*.(spec|test).tsx']
    }
  ]
}
