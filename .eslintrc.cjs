module.exports = {
  root: true,
  env: { node: true, browser: true },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "prettier"],
  plugins: ["vue", "prettier"],
  parserOptions: { ecmaVersion: 2020, sourceType: "module" },
  rules: {
    "prettier/prettier": "error",
  },
};
