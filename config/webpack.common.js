const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const helpers = require("./helpers");

module.exports = {
    entry: {
        vendor: "./config/vendor.ts",
        polyfills: "./config/polyfills.ts",
        themes: "./config/themes.ts",
        "icon-set": "./config/icon-set.ts",
        main: "./src/main.ts"
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, // Images and Fonts
                loader: "file-loader?name=assets/[name].[ext]"
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    "to-string-loader",
                    { loader: "style-loader", options: { sourceMap: true } },
                    { loader: "css-loader", options: { sourceMap: true } },
                    { loader: "sass-loader", options: { sourceMap: true } }
                ],
                // include: helpers.root("src", "app")
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(
            helpers.root("dist"), { root: helpers.root(), verbose: true }),

        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
};
