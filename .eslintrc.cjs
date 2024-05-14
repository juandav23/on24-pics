/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],

  globals: {
    ref: 'readonly',
    computed: 'readonly'
  },

  plugins: ['import'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': 'warn',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'error',
    'import/no-unresolved': ['error', { module: true }],
    'vue/order-in-components': ['error'],
    'vue/mustache-interpolation-spacing': ['error', 'always']
  }
}
