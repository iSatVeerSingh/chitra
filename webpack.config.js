import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

// for type intellisense for webpack file
/** @type {import("webpack").Configuration} */
const config = {
  entry: "./src/ts/index.ts",
  output: {
    path: path.resolve('dist'),
    filename: 'chitra.bundle.js'
  },
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

export default config;
