module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-parsing-error': 'warning'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
