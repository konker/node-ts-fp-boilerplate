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
  roots: ['YOUR_SRC_DIR_COULD_BE_DOT'],
  collectCoverage: true,
  collectCoverageFrom: ['YOUR_SRC_DIR_COULD_BE_DOT/**/*.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
} satisfies Config;
