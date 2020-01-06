const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')
const WorkboxPlugin = require('workbox-webpack-plugin') // 引入 PWA 插件

module.exports = {
    entry: {
        app: [
            '@babel/polyfill',
            path.join(__dirname, '../src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: './js/'
    },

    /*入口*/
    //entry: path.join(__dirname, '../src/index.js'),

    /*输出到dist目录，输出文件名字为bundle.js*/
    // output: {
    //     path: path.join(__dirname, '../dist'),
    //     filename: 'bundle.js'
    // },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
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
    // devtool:"cheap-module-eval-source-map",// 开发环境配置
    // devtool:"cheap-module-source-map",   // 线上生成配置
    devtool: 'source-map',
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
            filename: '../index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
           'process.env': {
               'http_env': JSON.stringify(process.env.http_env)
           }
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery', // npm
        //     jQuery: 'jQuery' // 本地Js文件
        // }),
        // 清除无用 css
        new PurifyCSS({
            paths: glob.sync([
                // 要做 CSS Tree Shaking 的路径文件
                //path.resolve(__dirname, './src/*.html'), // 请注意，我们同样需要对 html 文件进行 tree shaking
                path.resolve(__dirname, '../src/*.js')
            ])
        }),
        // 配置 PWA
        // new WorkboxPlugin.GenerateSW({
        //     clientsClaim: true,
        //     skipWaiting: true
        // }),
        // new AddAssetHtmlWebpackPlugin({
        //     filepath: path.resolve(__dirname, '../dll/jquery.dll.js') // 对应的 dll 文件路径
        // }),
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname, '..', 'dll/jquery-manifest.json')
        // })   
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        usedExports:true,
    },
    performance: {
        // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
        hints: "warning",
        // 开发环境设置较大防止警告
        // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
        maxEntrypointSize: 5000000, 
        // 最大单个资源体积，默认250000 (bytes)
        maxAssetSize: 3000000
    },
}
