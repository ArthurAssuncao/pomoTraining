module.exports = {
  plugins: [
    'prettier',
    '@typescript-eslint',
    'eslint-comments',
    'jest',
    'promise',
  ],
  extends: [
    'airbnb-typescript/base',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      // "jsx": true,
      modules: true,
    },
    project: './tsconfig.json',
  },
  env: {
    // "browser": true,
    node: true,
    es6: true,
    es2020: true,
    // "mongo": true,
    jest: true,
    commonjs: true,
  },
  rules: {
    // enable additional rules
    'prettier/prettier': 'error',
    'comma-dangle': 'off',
    'no-underscore-dangle': ['error', {allow: ['_id']}],
    indent: ['error', 2],
    'no-spaced-func': 2,
    'linebreak-style': ['error', 'unix'],
    curly: ['error'],
    'no-else-return': ['error'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: [
      2,
      'always',
      {
        omitLastInOneLineBlock: true,
      },
    ],
    'no-extra-semi': 2,
    'no-cond-assign': ['error', 'always'],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    'react/jsx-filename-extension': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': [
      'error',
      {functions: false, classes: true, variables: true},
    ],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {allowExpressions: true, allowTypedFunctionExpressions: true},
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {functions: false, classes: true, variables: true, typedefs: true},
    ],
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],
    // disable rules from base configurations
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
          '.tsx',
          '.test.ts',
          '.test.tsx',
          '.js',
          '.android.js',
          '.ios.js',
          '.ts',
          '.android.ts',
          '.ios.ts',
        ],
      },
    },
  },
  ignorePatterns: [
    '/node_modules/**',
    '/.git/**',
    '/.vscode/**',
    '/build/**',
    '/coverage/**',
    '/docs/**',
    '/jsdoc/**',
    '/templates/**',
    '/tests/bench/**',
    '/tests/fixtures/**',
    '/tests/performance/**',
    '/tmp/**',
    '/tools/internal-rules/node_modules/**',
    '!.eslintrc.js',
    'prettier.config.js',
    '*.js',
  ],
};