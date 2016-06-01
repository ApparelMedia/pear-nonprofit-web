var webpack = require('webpack');
var path = require('path');
var env = require('./.env');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src/js');
var CSS_DIR = path.resolve(__dirname, 'src/css');

var config = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        APP_DIR + '/index.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                include : APP_DIR + '/',
                loaders: ['react-hot', 'babel']
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
