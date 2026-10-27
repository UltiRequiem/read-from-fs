import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsdoc from "eslint-plugin-tsdoc";

export default [
  { ignores: ["node_modules/", "dist/", "lib/", "docs/"] },
  js.configs.recommended,
  ...tsPlugin.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser },
    },
  },
  {
    plugins: { tsdoc },
    rules: { "tsdoc/syntax": "warn" },
  },
];
