module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': 'off',
    "no-trailing-spaces": 'off',
    "padded-blocks": 'off',
    "eol-last": 'off',
    "space-before-function-paren": "off",
    "no-template-curly-in-string": "off",
    "no-tabs": "off",
    "indent": "off",
    "no-proto": "off",
    "no-unexpected-multiline": "off",
    "func-call-spacing": "off",
    "camelcase": "off"
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
