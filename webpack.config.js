const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "public/assets"),
		filename: "bundle.js",
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
				use: ["vue-style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["vue-style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin(),
	],
};
