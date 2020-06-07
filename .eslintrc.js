module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/strongly-recommended', 'eslint:recommended', 'plugin:prettier-vue/recommended', '@vue/airbnb'],
  settings: {
    'prettier-vue': {
      // ignoring template tag
      SFCBlocks: {
        template: false,
      },
    },
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/require-default-prop': 0,
    'vue/require-prop-types': 0,
    'vue/no-v-html': 0,
    'max-len': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'any',
        },
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'object-curly-newline': 0,
    'prettier-vue/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
      },
    ],
  },
};
