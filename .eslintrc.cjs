/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'next/core-web-vitals',
        'prettier'
      ],
      rules: {
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true
          }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@next/next/no-img-element': 'off',
        'react/no-unescaped-entities': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': 'off'
      }
    }
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Node.js 核心模块
          'external', // 第三方库，如 react, lodash
          'internal', // 内部模块（别名路径如 @/）
          ['parent', 'sibling'], // 父目录和同级目录
          'index', // 当前目录（index.js/ts）
          'object', // 对象导入（import log = console.log）
          'type' // TypeScript 的类型导入
        ],
        pathGroups: [
          {
            pattern: '@components/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@layouts/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@config/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@assets/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@plugins/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@store/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@generated/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@enums/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '/#/**',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
}
