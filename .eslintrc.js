module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    extends: [
      'extend": airbnb',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:node/recommended',
      'plugin:promise/recommended',
      'prettier',
      'plugin:prettier/recommended'
    ],
    rules: {
      "max-len": [2, 100],
      "max-params": [2, 3],
      'prettier/prettier': 'error',
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external', 'internal']]
        }
      ]
    }
  };
  