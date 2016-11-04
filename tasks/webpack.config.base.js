"use strict";

const path = require("path");
/* eslint-disable node/no-unpublished-require */
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssimport = require("postcss-smart-import");
const cssnext = require("postcss-cssnext");
/* eslint-enable node/no-unpublished-require */

const PORT = 3000;

module.exports = type => {

  const electron = type === "electron";
  const prod = type === "production";
  const dev = !prod && !electron;

  const cssLoader = [
    "css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]",
    "postcss"
  ].join("!");

  return {
    port: PORT,
    debug: dev,
    devtool: "source-map",
    entry: electron ? [
      "./app"
    ] : [
      ...dev ? [
        "react-hot-loader/patch",
        `webpack-dev-server/client?http://localhost:${PORT}`,
        "webpack/hot/only-dev-server",
      ] : [],
      "./app/renderer"
    ],
    externals: electron ? [
      "source-map-support"
    ] : [],
    module: {
      loaders: [{
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: "json",
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: prod ? ExtractTextPlugin.extract("style", cssLoader) : `style!${cssLoader}`,
        exclude: /node_modules/
      }]
    },
    node: electron ? {
      __dirname: false,
      __filename: false
    } : {},
    output: {
      path: path.resolve(__dirname, "..", "build"),
      publicPath: dev ? `http://localhost:${PORT}/build/` : void 0,
      filename: electron ? "index.js" : "bundle.js",
      libraryTarget: "commonjs2"
    },
    resolve: {
      extensions: ["", ".js", ".json"]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(dev ? "development" : "production")
      }),
      ...electron ? [
        // UglifyJS is not still compatible with ES2015
        // new webpack.optimize.UglifyJsPlugin({
        //   compressor: { screw_ie8: true, warnings: false }
        // }),
        new webpack.BannerPlugin(
          'require("source-map-support").install();',
          { raw: true, entryOnly: false }
        )
      ] : [],
      ...prod ? [
        new webpack.optimize.OccurrenceOrderPlugin(),
        // UglifyJS is not still compatible with ES2015
        // new webpack.optimize.UglifyJsPlugin({
        //   compressor: { screw_ie8: true, warnings: false }
        // }),
        new ExtractTextPlugin("style.css", { allChucks: true })
      ] : [],
      ...dev ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      ] : []
    ],
    target: electron ? "electron-main" : "electron-renderer",
    postcss(wp) {
      return [
        cssimport({
          path: ["node_modules", "./app"],
          addDependencyTo: wp
        }),
        cssnext({
          autoprefixer: ["Chrome >= 53"]
        })
      ];
    }
  };

};
