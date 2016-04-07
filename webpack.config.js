/**
 * Created by slashhuang on 16/4/7.
 */
var path = require("path");
var webpack =require('webpack');
module.exports = {
    entry: {
        index: "./src/entries/index"
    },
    output: {
        path: path.join(__dirname, 'js'),//必须是绝对路径
        filename: '[name].js',
        publicPath: "/static/",//调试地址为相对路径,它会观察所有bundle的文件，从此publicPath更新内存中的js文件获取
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        loaders: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader','babel-loader']
            }
        ],
        resolve: {
            extensions: ['.js']
        }
    }
};