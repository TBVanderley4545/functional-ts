module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: './tsconfig.json',
    extraFileExtensions: ['.cjs'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [0],
    'prettier/prettier': ['error'],
    'import/prefer-default-export': [0],
  },
};
