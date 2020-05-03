module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  testMatch: ['<rootDir>/__tests__/*.test.ts'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/testUtils/jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/__tests__/tsconfig.json'
    }
  }
};
