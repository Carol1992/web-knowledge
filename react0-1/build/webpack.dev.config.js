const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            path.join(__dirname, '../src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    /*入口*/
    //entry: path.join(__dirname, '../src/index.js'),

    /*输出到dist目录，输出文件名字为bundle.js*/
    // output: {
    //     path: path.join(__dirname, '../dist'),
    //     filename: 'bundle.js'
    // },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        }, {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader //'style-loader'
            }, {
                loader: 'css-loader',
                // options: {
                //     modules: {
                //         localIdentName: '[local]--[hash:base64:5]'
                //     },
                // }
            }, {
                loader: 'postcss-loader'
            }], //'css-loader?modules'
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    //小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
                    limit: 8192
                }
            }]
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[local]--[hash:base64:5]'
                    },
                }
            }, {
                loader: 'sass-loader'
            }, {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: true,
              },
            },]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            use: [
                'file-loader',
            ]
        }]
    },
    // webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true, // gzip压缩
        host: '0.0.0.0', // 允许ip访问
        hot: true, // 热更新
        historyApiFallback: true, // 解决启动后刷新404
        port: 8080, // 端口
        // proxy: { // 配置服务代理
        //     '/api': {
        //          target: 'http://localhost:8000',
        //          pathRewrite: {'^/api' : ''},  //可转换
        //          changeOrigin:true
        //     }
        // }
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
            images: path.join(__dirname, '../src/images'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({ // 压缩css
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        }),
        new webpack.DefinePlugin({
           'process.env': {
               'http_env': JSON.stringify(process.env.http_env)
           }
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery', // npm
        //     jQuery: 'jQuery' // 本地Js文件
        // })
    ]
}