const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    devtool: "cheap-eval-source-map",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 9000
    },
    plugins: [
        new Dotenv()
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        modules: [path.resolve(__dirname, 'src'), "node_modules"]
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    }
};
