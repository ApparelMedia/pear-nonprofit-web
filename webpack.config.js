var webpack = require('webpack');
var path = require('path');
var env = require('./.env');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src/js');
var CSS_DIR = path.resolve(__dirname, 'src/styles');

var config = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './src/js/index.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                include : APP_DIR + '/',
                loader: 'react-hot!babel'
            },
            {
                test: /\.css$/,
                include: CSS_DIR + '/',
                loader: "style!css?modules"
            },
            {
                test: /\.scss$/,
                include: CSS_DIR + '/',
                loader: "style!css?modules!sass"
            },
            {
                test: /\.svg$/,
                include: CSS_DIR + '/',
                loader: "file"
            },
            {
                test: /\.jpg$/,
                include: CSS_DIR + '/',
                loader: "file"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            'API_URL': env.API_URL
        }),
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        })
    ]
};

module.exports = config;
