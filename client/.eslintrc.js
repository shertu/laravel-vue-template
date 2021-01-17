module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],

  // https://github.com/google/eslint-config-google/blob/master/index.js
  'rules': {
    'max-len': ['error', {
      // code: 80,
      // tabWidth: 2,
      // ignoreUrls: true,
      ignorePattern: 'import .*',
    }],
  },
};
