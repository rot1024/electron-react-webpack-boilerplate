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
    "babel/no-invalid-this": 2,
    "babel/new-cap": 2,
    "babel/object-curly-spacing": [1, "always"],
    "node/no-unsupported-features": 0,
    "new-cap": 0,
    "object-curly-spacing": 0
  }
};
