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
    'plugin:i18n-json/recommended',
    'plugin:storybook/recommended',
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

    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint', 'react', 'i18next', 'react-hooks'],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'no-multiple-empty-lines': ['error'],
    indent: ['error', 2],
    'no-unused-vars': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'i18n-json/valid-json': 2,
    'i18n-json/identical-keys': 0,

    'i18n-json/valid-message-syntax': [
      2,
      {
        syntax: 'icu',
      },
    ],

    'i18n-json/sorted-keys': [
      2,
      {
        order: 'asc',
        indentSpaces: 2,
      },
    ],

    'i18next/no-literal-string': 2,

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
}
