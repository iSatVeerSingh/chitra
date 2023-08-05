import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

// for type intellisense for webpack file
/** @type {import("webpack").Configuration} */
const config = {
  entry: "./src/ts/index.ts",
  output: {
    path: path.resolve("dist"),
    filename: "chitra.bundle.js",
    clean: true
  },
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    static: "./public"
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};

export default config;
