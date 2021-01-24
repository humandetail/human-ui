/*
 * @FilePath: /human-ui/.eslintrc.js
 * @Description: eslint 配置
 * @Author: humandetail
 * @Date: 2021-01-24 17:09:40
 * @LastEditors: humandetail
 * @LastEditTime: 2021-01-24 17:38:33
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'always']
  },
};
