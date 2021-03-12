module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      },
      node: {
        paths: ['src']
      }
    }
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'arrow-body-styled': 0,
    'consistent-return': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/aria-role': [
      1,
      {
        ignoreNonDOM: true
      }
    ],
    'no-console': 1,
    'no-param-reassign': 0,
    'import/no-unused-modules': [1, { unusedExports: true, missingExports: true }],
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0
  },
  overrides: [
    {
      files: ['./src/pages/**/*.tsx'],
      rules: {
        'import/no-unused-modules': 0,
        'import/prefer-default-export': 2,
      }
    }
  ]
};
