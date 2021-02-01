module.exports = {
  env: {
    jasmine: true,
  },
  plugins: ['jasmine'],
  extends: ['plugin:jasmine/recommended'],
  rules: {
    // recommended
    'jasmine/expect-matcher': 'error',
    'jasmine/expect-single-argument': 'error',
    'jasmine/new-line-before-expect': 'error',
    'jasmine/new-line-between-declarations': 'error',
    'jasmine/no-expect-in-setup-teardown': 'error',
    'jasmine/no-promise-without-done-fail': 'error',
    'jasmine/no-spec-dupes': ['error', 'branch'],
    'jasmine/no-suite-dupes': ['error', 'branch'],
    'jasmine/no-unsafe-spy': 'error',
    'jasmine/prefer-jasmine-matcher': 'error',
    'jasmine/prefer-toHaveBeenCalledWith': 'error',

    // Not recommended
    'jasmine/missing-expect': 'error',
    'jasmine/named-spy': 'error',
    'jasmine/no-assign-spyon': 'error',
    'jasmine/no-describe-variables': 'error',
    // Bug: https://github.com/tlvince/eslint-plugin-jasmine/issues/300
    // 'jasmine/prefer-toBeUndefined': 'error',
  },
};
