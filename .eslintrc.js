module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true, // ✅ Ensure Node.js compatibility (for build tools)
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser', // ✅ Updated parser
  parserOptions: {
    requireConfigFile: false, // ✅ Prevents Babel config issues
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021, // ✅ Updated to latest ES version
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y'], // ✅ Ensure accessibility best practices
  rules: {
    indent: 'off',
    'template-curly-spacing': 'off',
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': [2, 250],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'],
      },
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }], // ✅ Allow JSX in both .jsx and .js files
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    // ✅ Allow arrow functions for functional components
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 0, // ✅ No need to import React in Next.js
  },
  settings: {
    react: {
      version: 'detect', // ✅ Automatically detect React version
    },
  },
};

