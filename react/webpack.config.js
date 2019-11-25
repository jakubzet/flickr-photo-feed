/* global module, __dirname */
const path = require("path");
const DotenvPlugin = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const envFilePath = path.resolve(__dirname, "../.env");

const dotenv = require("dotenv").config({
  path: envFilePath
});

const envPlugin = new DotenvPlugin({
  path: envFilePath
});

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./react/index.html",
  filename: "./index.html"
});

module.exports = function(env, argv) {
  const ENV = env.NODE_ENV || "development";
  const PORT = env.CLIENT_PORT || 3000;

  /* eslint-disable-next-line */
  console.log("> Project env variables:", dotenv.parsed);

  /* eslint-disable-next-line */
  console.log("> Webpack build env:", env);

  /* eslint-disable-next-line */
  console.log("> Webpack build argv:", argv);

  const isDev = ENV === "development";

  return {
    entry: "./index.js",
    mode: isDev ? "development" : "production",
    output: {
      path: path.resolve("dist"),
      filename: "bundle.js"
    },
    devServer: {
      compress: true,
      port: PORT,
      watchContentBase: true,
      publicPath: "/",
      historyApiFallback: true,
      progress: true,
      open: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization"
      }
    },
    plugins: [envPlugin, htmlPlugin],
    module: {
      rules: [
        // JS
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader"
          }
        },
        // Fonts
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/"
              }
            }
          ]
        }
      ]
    }
  };
};
