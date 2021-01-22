module.exports = {
  overrides: [
    {
      files: ['*.js', '*.json'],
      extends: ['./eslintrc/javascript.js'],
    },
    {
      files: ['*.ts'],
      extends: ['./eslintrc/javascript.js', './eslintrc/typescript.js'],
    },
  ],
};
