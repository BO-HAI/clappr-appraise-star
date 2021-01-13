const PATH = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const es3ifyWebpackPlugin = require('es3ify-webpack-plugin-v2');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        // 星级评价
        'clappr-appraise-star': './src/js/appraiseStar/main.js'
    },
    externals: {
      clappr: {
        amd: 'clappr',
        commonjs: 'clappr',
        commonjs2: 'clappr',
        root: 'Clappr'
      }
    },
    output: {
        filename: './js/[name].js',
        path: PATH.resolve(__dirname, 'dist'),
        library: 'AppraiseStar',
        libraryTarget: 'umd',
    },
    resolve: {
        alias: {
            '@images': './src/images'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  compact: true,
                }
              },
              {
                test: /\.scss$/,
                loaders: ['style-loader?singleton=true', 'css-loader', 'postcss-loader', 'sass-loader?includePaths[]='
                  + PATH.resolve(__dirname, './node_modules/compass-mixins/lib')
                  + '&includePaths[]='
                  + PATH.resolve(__dirname, './node_modules/clappr/src/base/scss')
                  + '&includePaths[]='
                  + PATH.resolve(__dirname, './src/base/scss')
                ],
                include: PATH.resolve(__dirname, 'src'),
              },
              {
                test: /\.html/, loader: 'html-loader?minimize=false'
              },
              {
                test: /\.(png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 15000,
                            name: '[name].[ext]',
                            outputPath: './images'
                        }
                    }
                ]
            },
        ]
    },
    devServer: {
        contentBase: [PATH.join(__dirname, "dist"), "plugin"],
        compress: true,
        port: 9011
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: '',
            filename: 'clappr-our-first-plugin.html',
            chunks: ['page'],
            template: 'src/html/index.html',
            chunksSortMode: 'manual'
        }),
        // new ExtractTextPlugin('./css/screen.css'),
        // new es3ifyWebpackPlugin()
    ]
};
