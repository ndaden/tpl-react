const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

let config = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./public"),
		filename: "./bundle.js"
	},
	module: {
		rules: [{
		  test: /\.(js|jsx)$/,
		  exclude: /node_modules/,
		  loader: "babel-loader",
		  resolve: { extensions: [".js", ".jsx"] }
		}]
	  },
	  devServer: {
		contentBase: path.resolve(__dirname, "./public"),
		historyApiFallback: true,
		inline: true,
		open: true,
		hot: true
	  },
	  devtool: "eval-source-map"
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
	module.exports.optimization = {
		  minimizer: [new UglifyJSPlugin()],
	  };
  }