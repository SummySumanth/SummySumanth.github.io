module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['styleName'],
      },
    ],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
  },
};
