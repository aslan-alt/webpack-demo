const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',//设置入口，不写文件名，默认为./src/index.js
    output: {
        filename: 'index.[contenthash].js',//设置出口文件名，
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title: 'My App',
            template: 'assets/index.html'//新建目录文件assets/admin.html
        })
    ],//设置生成的html内容
    module: {
        rules: []
    }
}
