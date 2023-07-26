/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest'

const config: Config = {
  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.(spec|test).[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/'],

  // The root directory that Jest should scan for tests and modules within
  rootDir: '../',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>'],

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', '<rootDir>/src'],

  modulePaths: ['<rootDir>/src'],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}

export default config
