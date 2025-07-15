/* eslint-env node */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Main JS file
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleans /dist before build
  },
  devtool: "eval-source-map", // Good for development debugging
  devServer: {
    static: "./dist", // Serve from /dist
    watchFiles: ["./src/**/*"], // Watch all files in src
    open: true, // Automatically open browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use your actual template file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Loads CSS from JS
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // Allows importing HTML fragments if needed
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Handles images
      },
    ],
  },
};
