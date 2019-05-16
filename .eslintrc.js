module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    "vue"
  ],
  extends: [
    'plugin:vue/strongly-recommended',
    'airbnb-base',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'global-require': 'warn',
    'no-undef': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
