const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const dotenv = require("dotenv");
const { DefinePlugin } = require('webpack');
const app_env = dotenv.config({ path: ".env" }).parsed;

module.exports = {
	entry: "./src/index.js",
	mode: app_env.CI_ENVIRONMENT,
	output: {
		path: path.resolve(__dirname, "public/assets"),
		filename: "[name].bundle.js",
	},
	resolve: {
		extensions: ["*", ".js", ".vue", ".json"],
		fallback: {
			fs: false,
			os: false,
			path: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.vue$/i,
				loader: "vue-loader",
				options: {
					reactivityTransform: true,
				},
			},
			// this will apply to both plain `.js` files
			// AND `<script>` blocks in `.vue` files
			{
				test: /\.m?js$/i,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			// this will apply to both plain `.css` files
			// AND `<style>` blocks in `.vue` files
			{
				test: /\.css$/i,
				use: [
					"vue-style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"vue-style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
							additionalData: `@import "./src/variable.scss";
                            `,
						},
					},
				],
			},
		],
	},
	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin(),
		new DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: true,
		}),
	],
};
