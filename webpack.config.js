const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  entry: {
    index: path.join(__dirname, "src/index.ts"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      { test: /\.ts/, exclude: /(node_modules)/, use: ["ts-loader"] },
      {
        test: /\.(css|scss|sass)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devtool: "source-map",
  mode: "development",
  stats: "minimal",
};
module.exports = () => {
  if (config.mode === "development") {
    config.devServer = {
      open: true,
      port: 4000,
      static: path.resolve(__dirname, "dist"),
    };
  }
  return config;
};
