module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],

  overrides: [
    {
      env: {
        node: true,
      },

      files: ['.eslintrc.{js,cjs}'],

      parserOptions: {
        sourceType: 'script',
      },
    },
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint', 'react'],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'no-multiple-empty-lines': ['error'],
    indent: ['error', 2],
    "no-unused-vars": ["warn"]
  },
}
