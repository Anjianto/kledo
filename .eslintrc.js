module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-no-bind": [0, "never"],
    "no-nested-ternary": [0, "never"],
    "jsx-a11y/label-has-associated-control": [0, "never"],
    "react/jsx-props-no-spreading": [0, "never"],
    "react/function-component-definition": [0, "never"],
    "react/react-in-jsx-scope": [0, "never"],
    "import/prefer-default-export": [0, "never"],
    "import/extensions": [0, "never"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", "tsx"] }],
    "global-require": "off",
  },
};
