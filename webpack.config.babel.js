import path from "path";
import WriteFilePlugin from "write-file-webpack-plugin";

export default {
  entry: [
    "./src/index.js"
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/, 
      loaders: ["babel"],
      exclude: /node_modules/ 
    }]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    outputPath: __dirname
  },
  plugins: [
      new WriteFilePlugin()
  ]
};
