'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'client/client.jsx')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'client/templates/index.html', inject: 'body', filename: 'index.html', 'favicon': 'client/templates/favicon.ico'}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    "presets": [
                        "react", "es2015", "stage-0", "react-hmre"
                    ],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
                }
            }, {
                test: /\.json?$/,
                loader: 'json'
            }, {
                test: /\.css$/,
                loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
            }
        ]
    }
};
