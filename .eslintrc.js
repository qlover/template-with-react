const eslintrc = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended' // 这里先配置下，后面有安装
  ],
  plugins: ['@typescript-eslint', 'react'],

  // settings: {
  //   'import/resolver': {
  //     alias: [['@', './src/']]
  //   }
  // },

  rules: {
    // 允许使用 any 类型
    '@typescript-eslint/no-explicit-any': 0,
    // 允许导出匿名对象
    'import/no-anonymous-default-export': 0,

    '@typescript-eslint/no-var-requires': 0,

    // 分类型导包
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          ['internal', 'parent', 'sibling', 'index'],
          'unknown'
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  }
}

module.exports = eslintrc
