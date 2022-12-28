const eslintrc = {
  extends: [require.resolve("@yueqing/lint/lib/ts-eslint")],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  rules: {
    "no-console": 0,
    "no-shadow": 0,
    "no-unused-vars": 0,
    "no-return-await": "off",
    "@typescript-eslint/return-await": "warn",
    "comma-dangle": [0, "always-multiline"],
    "padded-blocks": [
      0,
      { blocks: "always", classes: "always", switches: "always" },
      { allowSingleLineBlocks: true },
    ],
    "max-len": [2, { code: 160, ignoreUrls: true }],
    "prettier/prettier": [
      "off",
      {
        endOfLine: "auto",
        tabWidth: 2,
        semi: false,
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 145,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          ["internal", "parent", "sibling", "index"],
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "@app/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          // acseInsensitive: true,
        },
      },
    ],

    // 允许 函数组件
    "react/function-component-definition": [
      2,
      { namedComponents: ["function-declaration", "function-expression"] },
    ],
  },
};

module.exports = eslintrc;
