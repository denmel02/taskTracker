const path = require('path');
const packageFile = require('./package.json');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'js', 'index.js')
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'app', packageFile.version),
        publicPath: `app/${packageFile.version}`
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true
                }
            }
        },  {
            test: /\.css$/,
            include: path.join(__dirname, 'node_modules'),
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[local]---[name]---[hash:base64:5]'
                    }
                }, {
                    loader: 'postcss-loader'
                },{
                    loader: 'sass-loader'
                }]
            })
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        localIdentName: '[local]---[name]---[hash:base64:5]'
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader'
                }]
            })
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            exclude: path.join(__dirname, 'src/img/svg'),
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 60000
                }
            }]
        }]
    },
    resolve: {
        alias: {
            css: path.join(__dirname, 'src/css'),
            img: path.join(__dirname, 'src/img')
        },
        extensions: ['.js', '.jsx', '.css','.scss'],
        unsafeCache: true
    },
    plugins: [
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            title: 'app',
            filename: path.join(__dirname, 'app', 'index.html'),
            template: path.join(__dirname, 'src', 'html', 'index.html'),
        }),
        new ExtractTextPlugin({
            filename: 'styles/app.css'
        }),
    ],
    devServer: {
        host: 'localhost',
        port: 2006,
        historyApiFallback: {
            index: '/app/index.html'
        },
        stats: {
            assets: false,
            children: false,
            chunks: false,
            modules: false,
        }
    }
}