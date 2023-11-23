module.exports = {
  root: true,

  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended'
  ],

  plugins: [
    '@typescript-eslint',
    'eslint-plugin-html',
    'vue',
    'html'
  ],

  ignorePatterns: ["jest.config.ts", "database/**/*"],

  globals: {
    ga: 'readonly',
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },

  rules: {
    indent: ['error', 2],
    'vue/html-indent': 'error',
    'vue/html-quotes': ['error', 'single', { avoidEscape: true }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 10
      },
      multiline: {
        max: 10
      }
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below'
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-useless-template-attributes': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/prop-name-casing': ['error', 'snake_case'],
    'prefer-promise-reject-errors': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'space-before-function-paren': 'error',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    'no-undef': 'off',
    'array-bracket-spacing': 'error',
    'comma-dangle': 'error',
    'space-before-blocks': 'error',
    '@typescript-eslint/prefer-as-const': 'error'
  }
}
