import type { Config } from 'jest';

export default {
  globals: {},
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [6133, 6196],
        },
      },
    ],
  },
  roots: ['src'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
} satisfies Config;
