const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'assets/[name].[hash][ext][query]'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html')
		}),
		new MiniCssExtractPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'public/favicon.png'),
					to: path.resolve(__dirname, 'dist')
				},
				{
					from: path.resolve(__dirname, 'src/assets/sounds'),
					to: path.resolve(__dirname, 'dist/sounds')
				},
				{
					from: path.resolve(__dirname, 'src/assets/icons'),
					to: path.resolve(__dirname, 'dist/icons')
				}
			]
		})
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')]
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			},
		]
	},
	
};
