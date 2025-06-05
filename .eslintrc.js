module.exports = {
  extends: [
    'plugin:react/recommended', // React rules
    'plugin:@typescript-eslint/recommended', // TS rules
    'plugin:prettier/recommended' // Prettier plugin
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'no-plusplus': 0,
    'react/forbid-prop-types': 0,
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    semi: 0,
    'import/prefer-default-export': 0,
    'space-infix-ops': 0,
    'no-unused-vars': ['warn', { args: 'none' }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'prettier/prettier': [
      'error',
      { singleQuote: true, jsxSingleQuote: true, trailingComma: 'none' }
    ]
  }
};
