'use strict';

module.exports = {
  extends: '@istanbuljs/nyc-config-typescript',
  reporter: ['lcov', 'text', 'text-summary'],
  all: true,
  exclude: ['**/*.spec.ts', 'dist/*', 'coverage/*', '*.js', 'scripts/*', 'eslintrc/*', 'spec/helpers/*', '**/spec/*'],
  statements: 95,
  branches: 95,
  functions: 90,
  lines: 95,
};
