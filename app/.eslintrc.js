module.exports = {
  env: {
    commonjs: true
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false
  },
  plugins: ["babel"],
  rules: {
    "babel/array-bracket-spacing": [1, "never"],
    "babel/arrow-parens": [1, "as-needed"],
    "babel/flow-object-type": 0,
    "babel/func-params-comma-dangle": 0,
    "babel/generator-star-spacing": [1, "before"],
    "babel/new-cap": 2,
    "babel/no-await-in-loop": 2,
    "babel/object-curly-spacing": [1, "always"],
    "babel/object-shorthand": 1,
    "node/no-unsupported-features": 0,
    "array-bracket-spacing": 0,
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "new-cap": 0,
    "object-curly-spacing": 0,
    "object-shorthand": 0
  }
};
