module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],
  overrides: [
    {
      customSyntax: "@stylelint/postcss-css-in-js",
      files: ["**/*.{tsx,ts}"]
    }
  ],
  rules: {
    "alpha-value-notation": "number",
    "at-rule-name-space-after": "always",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",
    "color-function-notation": "legacy",
    "color-hex-case": "upper",
    "color-hex-length": "long",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "declaration-empty-line-before": "never",
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["${"]
      }
    ],
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "indentation": 2,
    "max-empty-lines": 2,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-missing-end-of-source-newline": true,
    "property-no-unknown": true,
    "selector-attribute-quotes": "always",
    "string-no-newline": true,
    "unit-no-unknown": true,
    "value-no-vendor-prefix": true
  }
};