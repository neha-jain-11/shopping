module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-console": 2,
    "max-len": [2, { code: 60 }],
    "no-multiple-empty-lines": 2,
    curly: 2,
    quotes: [2, "single"],
    "no-var": 2,
  },
};
