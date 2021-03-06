module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false
  },
  plugins: ["babel", "react", "compat"],
  rules: {
    "babel/new-cap": 2,
    "babel/no-invalid-this": 2,
    "babel/object-curly-spacing": [1, "always"],
    "babel/semi": 0,
    "compat/compat": 2,
    "node/no-unsupported-features": 0,
    "node/shebang": 0,
    "react/default-props-match-prop-types": 1,
    "react/display-name": 1,
    "react/forbid-component-props": 0,
    "react/forbid-prop-types": 0,
    "react/no-array-index-key": 1,
    "react/no-children-prop": 1,
    "react/no-danger": 2,
    "react/no-danger-with-children": 2,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": 1,
    "react/no-redundant-should-component-update": 1,
    "react/no-render-return-value": 2,
    "react/no-set-state": 0,
    "react/no-string-refs": 2,
    "react/no-unescaped-entities": 2,
    "react/no-unknown-property": 2,
    "react/no-unused-prop-types": 1,
    "react/prefer-es6-class": [1, "always"],
    "react/prefer-stateless-function": [1, { ignorePureComponents: true }],
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-default-props": 0,
    "react/require-render-return": 2,
    "react/require-optimization": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/sort-prop-types": 1,
    "react/style-prop-object": 2,
    "react/void-dom-elements-no-children": 2,
    "react/jsx-boolean-value": [1, "never"],
    "react/jsx-closing-bracket-location": [1, "after-props"],
    "react/jsx-closing-tag-location": 1,
    "react/jsx-curly-brace-presence": [1, { "props": "never", "children": "never" }],
    "react/jsx-curly-spacing": [1, "never"],
    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-handler-names": 1,
    "react/jsx-indent-props": [1, 2],
    "react/jsx-indent": [1, 2],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [1, { "maximum": 5 }],
    "react/jsx-no-bind": 0,
    "react/jsx-no-literals": 0,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-props": 0,
    "react/jsx-tag-spacing": [1, {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never"
    }],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": [1, { assignment: true, declaration: true, return: true }],
    "class-methods-use-this": [1, {
      exceptMethods: [
        "shouldComponentUpdate",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "render"
      ]
    }],
    "new-cap": 0,
    "object-curly-spacing": 0
  },
  overrides: [
    {
      files: [
        "**/*.test.js",
        "test/**/*.js"
      ],
      env: {
        "jest/globals": true
      },
      plugins: ["jest"],
      rules: {
        "import/unambiguous": 0,
        "jest/no-disabled-tests": 1,
        "jest/no-focused-tests": 2,
        "jest/no-identical-title": 2,
        "jest/valid-expect": 2
      }
    }
  ]
};
