/* global module, __dirname */
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./react/index.html",
  filename: "./index.html"
});

module.exports = function(env, argv) {
  /* eslint-disable-next-line */
  console.log("Webpack build env:", env);

  /* eslint-disable-next-line */
  console.log("Webpack build argv:", argv);

  return {
    entry: "./index.js",
    mode: "development",
    output: {
      filename: "./main.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
      watchContentBase: true,
      progress: true
    },
    plugins: [htmlPlugin],
    module: {
      rules: [
        // JS
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
};
