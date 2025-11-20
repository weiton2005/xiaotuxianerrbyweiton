// eslint.config.js
import eslint from "@eslint/js";
import vuePlugin from "eslint-plugin-vue";

export default [
  // 1. 引入 ESLint 官方推荐规则（类似旧版 extends: "eslint:recommended"）
  eslint.configs.recommended,
  
  // 2. 配置 Vue 相关规则
  {
    // 声明要使用的插件
    plugins: {
      vue: vuePlugin,
    },
    // 自定义规则（这里把 vue/no-multiple-template-root 设为 off，允许多根模板）
    rules: {
      // 先继承 vue3-essential 规则集里的规则
      ...vuePlugin.configs.essential.rules,
      // 再覆盖个别规则（比如关闭多根模板检查）
      "vue/no-multiple-template-root": "off",
      // 你还可以添加其他自定义 Vue 规则，比如：
      // "vue/html-self-closing": ["error", { "html": { "void": "always" } }]
    },
    // 语言选项（指定解析器选项等）
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", // 支持最新的 ECMAScript 特性
        sourceType: "module",  // 因为是 Vue 项目，代码是 ES Module 形式
        // 配置 Vue 解析器（由 eslint-plugin-vue 提供）
        parser: vuePlugin.parse,
      },
    },
    // 指定要应用这些规则的文件 glob 匹配模式
    files: ["**/*.vue", "**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  },
];