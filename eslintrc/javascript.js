module.exports = {
  extends: [
    './env.js',
    'eslint:recommended',
    './import.js',
    './node.js',
    './no-secrets.js',
    './optimize-regex.js',
    './promise.js',
    './jasmine.js',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:json/recommended-with-comments',
    'prettier',
  ],
  plugins: [],
  rules: {
    semi: ['error', 'always'],
    'prefer-object-spread': 'error',
    'no-console': 'warn',
    'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
  },
};
