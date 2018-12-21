module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended",
  ],
  rules: {
    "semi": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "indent": ["error", 2],
    "vue/html-indent": ["error", 2],
    "vue/attribute-hyphenation": ["error", "never"],
  },
  parserOptions: {
    parser: "babel-eslint",
  }
};
