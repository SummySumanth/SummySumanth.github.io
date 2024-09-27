/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  // preset: '@shelf/jest-mongodb',
  transform: tsjPreset.transform,
  testEnvironment: 'node',
  collectCoverage: true,
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/src/**/test.ts'],
  collectCoverageFrom: [
    '**/*.{ts,js}',
    '!**/node_modules/**',
    '!**/build/**',
    '!**/coverage/**',
    '!**/jest.config.js',
    '!.eslintrc.js'
  ],
  // coveragePathIgnorePatterns: ["config", "typings", "logging.ts"],
  coverageThreshold: {
    global: {
      lines: 50,
      statements: 50,
      branches: 50,
      functions: 50
    }
  },
  coverageReporters: ['text', 'text-summary', 'json', 'html'],
  testTimeout: 30000
};
