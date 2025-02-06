import globals from "globals";
import pluginJs from "@eslint/js";
import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  someConfig,
  {
    rules: {
      indent: "error",
    },
  },
  eslintConfigPrettier, // eslint-config-prettier last
];