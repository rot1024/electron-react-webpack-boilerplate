module.exports = {
  env: {
    commonjs: true
  },
  extends: "plugin:react/recommended",
  parser: "babel-eslint",
  plugins: ["babel", "react"],
  rules: {
    "babel/array-bracket-spacing": [1, "never"],
    "babel/arrow-parens": [1, "as-needed"],
    "babel/generator-star-spacing": [1, "before"],
    "babel/new-cap": 2,
    "babel/object-curly-spacing": [1, "always"],
    "babel/object-shorthand": 1,
    "babel/no-await-in-loop": 2,
    "babel/flow-object-type": [1, "comma"],
    "babel/func-params-comma-dangle": 0,
    "node/no-missing-require": [2, {
      allowModules: ["electron"]
    }],
    "node/no-missing-import": [2, {
      allowModules: ["electron"]
    }],
    "node/no-unpublished-require": 0,
    "node/no-unpublished-import": 0,
    "node/no-unsupported-features": 0,
    "node/shebang": 0,
    "react/forbid-prop-types": 0,
    "react/no-multi-comp": 1,
    "react/no-set-state": 2,
    "react/no-string-refs": 1,
    "react/prefer-es6-class": [1, "always"],
    "react/require-extension": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 0,
    "react/sort-prop-types": 0,
    "react/wrap-multilines": [1, { assignment: true, declaration: true, return: true }],
    "react/jsx-boolean-value": [1, "never"],
    "react/jsx-closing-bracket-location": [1, "after-props"],
    "react/jsx-curly-spacing": [1, "never"],
    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-handler-names": 0,
    "react/jsx-indent-props": [1, 2],
    "react/jsx-indent": [1, 2],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [1, { "maximum": 5 }],
    "react/jsx-no-bind": 0,
    "react/jsx-no-literals": 0,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-props": 0,
    "react/jsx-space-before-closing": [1, "always"],
    "array-bracket-spacing": 0,
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "new-cap": 0,
    "object-curly-spacing": 0,
    "object-shorthand": 0
  }
};
