const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    contentBase: "."
  },
  output: {
    filename: "bundle.js",
    path: __dirname
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  plugins: [new UglifyJSPlugin()]
};
