module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'dev-dist'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",   
          "external",  
          "internal",  
          ["parent", "sibling"], 
          "index",     
          "object",    
          "type"      
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        printWidth: 80,
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        tabWidth: 2,
        useTabs: false,
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {}
    },
  },
}
