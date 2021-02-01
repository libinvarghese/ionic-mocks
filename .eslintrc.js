module.exports = {
  overrides: [
    {
      files: ['*.js', '*.json'],
      extends: ['./eslintrc/javascript.js', '.eslintrc.rules.js'],
    },
    {
      files: ['*.ts'],
      extends: ['./eslintrc/javascript.js', './eslintrc/typescript.js', '.eslintrc.rules.js'],
    },
    {
      files: ['scripts/**/*.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
