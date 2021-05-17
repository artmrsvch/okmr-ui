const { defaults } = require('jest-config');
//const { defaults as tsjPreset } = require('ts-jest/presets')
//const { defaults: tsjPreset } = require('ts-jest/presets')
// onst { jsWithTs: tsjPreset } = require('ts-jest/presets')
const { jsWithBabel: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  transform: {
    ...tsjPreset.transform,
    '^.+\\.tsx?$': 'babel-jest'
  },
  testEnvironment: 'node',
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/cssMock.js'
  },
  transformIgnorePatterns: ['node_modules/[^/]+?/(?!(es|node_modules)/)']
};
