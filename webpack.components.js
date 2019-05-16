const path = require("path");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const NodeExternals = require("webpack-node-externals");
const SizePlugin = require("size-plugin");

module.exports = {
  entry: path.resolve(__dirname, "components/index.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "components.js",
    library: "",
    libraryTarget: "commonjs"
  },
  externals: [NodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    symlinks: false
  },
  plugins: [new DuplicatePackageCheckerPlugin(), new SizePlugin()]
};
