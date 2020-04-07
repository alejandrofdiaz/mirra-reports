const path = require('path');

module.exports = {
  rootDir: path.resolve('./'),
  setupFilesAfterEnv: ['<rootDir>/test/setupEnzyme.ts'],
  testMatch: ['**/(src|pages)/**/*.(spec).(ts|tsx)'],
  // testEnvironment: 'node',
  testEnvironment: 'jest-environment-jsdom-global',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src', 'pages'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    pages: '<rootDir>/pages',
  },
};
