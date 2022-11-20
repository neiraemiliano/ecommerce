module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/prop-types': 0,
    'no-unused-vars': 1,
    'no-case-declarations': 0,
    'no-prototype-builtins': 1,
    'react/no-deprecated': 0,
    'react/jsx-key': 1,
    'no-shadow': 2,
    'react-native/no-inline-styles': 0,
    'no-sequences': 1,
    'no-useless-escape': 1,
    'handle-callback-err': 1,
    'react/self-closing-comp': 1,
    'import/no-unresolved': 0,
  },
};
