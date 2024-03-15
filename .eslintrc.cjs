module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "import",
    "sort-destructure-keys",
    "typescript-sort-keys",
    "sort-keys-fix",
  ],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "import/order": [
      2,
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
          },
          {
            pattern: "react-dom/*",
            group: "builtin",
          },
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": [
      "warn",
      {
        caseSensitive: true,
      },
    ],
    "typescript-sort-keys/interface": [
      "warn",
      "asc",
      {
        caseSensitive: true,
        natural: true,
        requiredFirst: true,
      },
    ],
    "typescript-sort-keys/string-enum": [
      "warn",
      "asc",
      {
        caseSensitive: true,
        natural: true,
      },
    ],
    "sort-keys-fix/sort-keys-fix": [
      1,
      "asc",
      {
        caseSensitive: true,
        natural: true,
      },
    ],
  },
};
