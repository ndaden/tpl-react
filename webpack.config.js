/* eslint-disable */
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

let config = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./public"),
		filename: "./bundle.js"
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
				resolve: { extensions: [".js", ".jsx"] },
				options: {
					failOnError: true
				}
			},
			{
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