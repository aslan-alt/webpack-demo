const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'production',//不写默认为production模式所有代码最小化，没有注释（发布用的），development给开发者用的，有注释。
    plugins: [
        ...base.plugins,
        new MinCssExtractPlugin({
            filename: 'reset.[contenthash].css',//生成hash缓存文件，开发时不需要生成文件，所以不需要加contenthash
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false,
        })
    ],//设置生成的html内容
    module: {
        rules: [
            {
                test: /\.css$/i,//正则表达式，如果发现任何以.css结尾的文件名
                use: [
                    {
                        loader: MinCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ]
            },
        ]
    }
}
