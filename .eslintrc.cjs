// eslintrc.cjs
module.exports = {
  root: true,
  env: { node: true, browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TS rules
    'plugin:vue/vue3-recommended', // Vue 3 rules
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier + displays Prettier errors as ESLint
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // Use TS parser inside Vue files
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Prettier integration
    'prettier/prettier': 'error',

    // Example stricter rules (tweak to taste)
    'vue/multi-word-component-names': 'off', // Allow single-word component names
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
