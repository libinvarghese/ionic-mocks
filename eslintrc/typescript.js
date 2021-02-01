const booleanVarPrefix = ['is', 'should', 'has', 'can', 'did', 'will'];

const booleanVariable = {
  types: ['boolean'],
  format: ['PascalCase'],
  prefix: booleanVarPrefix,
};

const booleanConst = {
  types: ['boolean'],
  prefix: booleanVarPrefix.map(prefix => `${prefix.toUpperCase()}_`),
};

module.exports = {
  extends: [
    './rxjs.js',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['scripts/tsconfig.json', 'spec/tsconfig.json', 'tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'default', format: ['camelCase'] },
      {
        selector: 'variableLike',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        ...booleanVariable,
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        ...booleanVariable,
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'memberLike',
        modifiers: ['static', 'readonly'],
        format: ['UPPER_CASE'],
      },
      {
        selector: 'property',
        modifiers: ['static', 'readonly'],
        format: ['UPPER_CASE'],
        ...booleanConst,
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
};
