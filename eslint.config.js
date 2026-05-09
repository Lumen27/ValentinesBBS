import js from "@eslint/js";
import hooks from "eslint-plugin-react-hooks";
import refresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
  { ignores: ["dist"] },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": hooks,
      "react-refresh": refresh,
    },
    rules: {
      ...hooks.configs.recommended.rules,
      "react-refresh/only-export-components": "warn",
    },
  },

  prettier,
];
