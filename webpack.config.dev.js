var webpack = require('webpack');
var path = require('path');

var debug = process.env.NODE_ENV !== "production";

module.exports = {
    devtool: debug
        ? "inline-sourcemap"
        : null,

    entry: "./client/client.jsx",

    output: {
        path: __dirname,
        filename: 'client.bundle.js',
        publicPath: 'http://0.0.0.0:8000/js/'
    },

    resolve: {
        extensions: [
            '', '.js', '.jsx'
        ],
        modules: ['client', 'node_modules']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: [
                        'react', 'es2015', 'stage-0'
                    ],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
                }
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                CLIENT: JSON.stringify(true),
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
};
