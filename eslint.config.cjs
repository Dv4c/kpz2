const js = require('@eslint/js');
const ts = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-config-prettier');

module.exports = [
  { ignores: ['**/*.cjs'] },

  js.configs.recommended,
  prettier,

  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        console: 'readonly', // додали Node глобальну змінну console
        process: 'readonly', // якщо потрібен process
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-unused-vars': 'warn',
    },
  },
];
