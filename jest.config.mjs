// eslint-disable-next-line @typescript-eslint/require-await
export default async () => ({
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/testUtils/jest.setup.ts'],
  moduleNameMapper: {
    '^#arguments/(.*)$': '<rootDir>/src/arguments/$1',
    '^#assets/(.*)$': '<rootDir>/src/assets/$1',
    '^#jsonAssets/(.*)$': '<rootDir>/src/assets/$1',
    '^#dexdata/(.*)$': '<rootDir>/src/assets/pokedex-data/$1',
    '^#resolvers/(.*)$': '<rootDir>/src/resolvers/$1',
    '^#services/(.*)$': '<rootDir>/src/services/$1',
    '^#structures/(.*)$': '<rootDir>/src/structures/$1',
    '^#utils/(.*)$': '<rootDir>/src/utils/$1',
    '^#root/(.*)$': '<rootDir>/src/$1',
    '^#test-utils/(.*)$': '<rootDir>/__tests__/testUtils/$1'
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/__tests__/tsconfig.json'
    }
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/__tests__',
    '<rootDir>/src/index.ts',
    '<rootDir>/src/server.ts',
    '<rootDir>/src/defaultPlaygroundTabs.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 99,
      functions: 99,
      lines: 99,
      statements: 99
    },
    './src/resolvers/*.ts': {
      branches: 65,
      functions: 100,
      lines: 75,
      statements: 75
    },
    './src/utils/getRequestedFields.ts': {
      branches: 85,
      functions: 100,
      lines: 90,
      statements: 90
    }
  }
});
