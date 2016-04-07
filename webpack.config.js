/**
 * Created by slashhuang on 16/4/7.
 */
var path = require("path");
module.exports = {
    entry: {
        pageA: "./src/entries/index"
    },
    output: {
        path: path.join(__dirname, "js"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    loaders: [
        {
            test: /\.js||.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
    ],
    plugins: []
};