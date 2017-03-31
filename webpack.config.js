"use strict";

const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PORT = 3000;

const extractCSS = new ExtractTextPlugin("style.css");

module.exports = ({ type } = { type: "development" }) => {

  const electron = type === "electron";
  const prod = type === "production";
  const dev = !prod && !electron;

  const cssLoaders = [
    {
      loader: "css-loader",
      options: {
        camelCase: true,
        importLoaders: 1,
        localIdentName: "[local]_[hash:base64:5]",
        modules: true,
        sourceMap: true
      }
    },
    "postcss-loader"
  ];

  return {
    devServer: {
      hot: true,
      port: PORT
    },
    devtool: "inline-source-map",
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
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: prod ? extractCSS({
            fallback: "style-loader",
            use: cssLoaders
          }) : ["style-loader", ...cssLoaders],
          exclude: /node_modules/
        }
      ]
    },
    node: electron ? {
      __dirname: false,
      __filename: false
    } : {},
    output: {
      filename: electron ? "index.js" : "bundle.js",
      libraryTarget: "commonjs2",
      path: path.resolve(__dirname, "..", "build"),
      publicPath: dev ? `http://localhost:${PORT}/build/` : undefined
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(dev ? "development" : "production")
      }),
      ...electron ? [
        new webpack.BannerPlugin({
          banner: 'require("source-map-support").install();',
          entryOnly: false,
          raw: true
        })
      ] : [],
      ...prod ? [
        extractCSS
      ] : [],
      ...dev ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ] : []
    ],
    target: electron ? "electron-main" : "electron-renderer"
  };

};
