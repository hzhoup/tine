const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.jsx'] }
    }
  },
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser'
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'private',
              'packageManager',
              'description',
              'type',
              'keywords',
              'homepage',
              'bugs',
              'license',
              'author',
              'contributors',
              'funding',
              'files',
              'main',
              'module',
              'exports',
              'unpkg',
              'jsdelivr',
              'browser',
              'bin',
              'man',
              'directories',
              'repository',
              'publishConfig',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'optionalDependencies',
              'dependencies',
              'devDependencies',
              'engines',
              'config',
              'overrides',
              'pnpm',
              'husky',
              'lint-staged',
              'eslintConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          }
        ]
      }
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }
      }
    }
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ]
  }
})
