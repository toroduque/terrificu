const path = require("path");

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
        port: 9000
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
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
