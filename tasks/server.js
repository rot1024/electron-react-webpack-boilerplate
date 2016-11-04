"use strict";

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.base")("development");

new WebpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  stats: { colors: true }
}).listen(config.port, "localhost", err => {
  if (err) {
    console.log(err);
    return;
  }
  console.info(`=> Listening at http://localhost:${config.port}`);
});
