"use strict";
/* eslint-disable node/no-unpublished-require */
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
/* eslint-enable node/no-unpublished-require */
const config = require("./webpack.config.base")("development");

new WebpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  stats: { colors: true }
}).listen(config._port, "localhost", err => {
  if (err) {
    console.log(err);
  }
  console.info(`=> Listening at http://localhost:${config._port}`);
});
