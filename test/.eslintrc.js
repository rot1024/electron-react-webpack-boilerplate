module.exports = {
  env: {
    mocha: true
  },
  parser: "babel-eslint",
  plugins: ["babel"],
  rules: {
    "babel/array-bracket-spacing": [1, "never"],
    "babel/arrow-parens": [1, "as-needed"],
    "babel/generator-star-spacing": [1, "before"],
    "babel/new-cap": 2,
    "babel/no-await-in-loop": 2,
    "babel/object-curly-spacing": [1, "always"],
    "babel/object-shorthand": 1,
    "node/no-unsupported-features": 0,
    "node/shebang": 0,
    "array-bracket-spacing": 0,
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "new-cap": 0,
    "object-curly-spacing": 0,
    "object-shorthand": 0
  }
};
