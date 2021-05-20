const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  modulePaths: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'node',
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/cssMock.js',
    'src/(.*)': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: ['node_modules/[^/]+?/(?!(es|node_modules)/)']
};
