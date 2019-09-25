/* eslint-disable */
require("@babel/polyfill");
const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const envKeys = Object.keys(process.env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(process.env[next]);
    return prev;
  }, {});

let config = {
	entry: ["@babel/polyfill","./src/index.js"],
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
					failOnError: false
				}
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				resolve: { extensions: [".js", ".jsx"] }
			},
			{
				test: /\.(ttf|woff|woff2|eot|svg)$/,
				loader: "file-loader",
				options: {
					name: '[name].[ext]',
					outputPath: "/assets/fonts"
				}
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: "file-loader",
				options: {
					name: '[name].[ext]',
					outputPath: "/assets/images"
				}
			},
			{
				// Apply rule for .sass, .scss or .css files
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							// options...
						}
					}
				]
			}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '/assets/css/style.css',
		}),
		new webpack.DefinePlugin(envKeys),
	],
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
