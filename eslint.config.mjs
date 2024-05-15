import globals from "globals";
//akhanee import a error ashsee .eslintrc.json file nia asher por abr chole galo , kno?
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];