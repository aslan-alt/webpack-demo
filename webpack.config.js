const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,//正则表达式，如果发现任何以.css结尾的文件名
                use: ['style-loader', 'css-loader'],//就用css-loader将css内容读到js文件里，style-loader将css-loader读到的内容变成一个标签插入到head里
            }
        ]
    }
}
