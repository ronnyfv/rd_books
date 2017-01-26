const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const _ = require('lodash');

// modulos que serão adicionados ao arquivo 'vendor.js'
const vendor = [
    'lodash',
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router',
    'react-router-redux',
    'reselect',
];

function createConfig(isDebug) {
    // caso desenvolvimento, adiciona source map para debug
    const devtool = isDebug ? 'cheap-module-source-map' : null;

    let outputPath = path.join(__dirname, 'build');
    let publicPath = '/';

    const plugins = [
        // concatena todos os modules no arquivo vendor.js
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        // define variáveis a serem usadas durante o build
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${process.env.NODE_ENV || 'development'}"`,
            },
            IS_PRODUCTION: !isDebug,
            IS_DEVELOPMENT: isDebug,
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
        }),
    ];
    const loaders = {
        js: { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
        // mostrar erros lint no navegador
        eslint: { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ },
        json: { test: /\.json$/, loader: 'json' },
        css: { test: /\.css$/, loader: 'style!css?sourceMap' },
        sass: { test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap' },
        files: { test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)/, loader: 'url-loader?limit=5000' },
        html: { test: /\.html$/, loader: 'html-loader' },
    };

    const clientEntry = [
        'babel-polyfill',
        './src/main.js',
    ];

    if (isDebug) {
        plugins.push(new webpack.HotModuleReplacementPlugin());

        clientEntry.unshift(
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000/',
            'webpack/hot/only-dev-server'
        );

        publicPath = 'http://localhost:3000/';
        outputPath = path.join(__dirname, 'dev');
    } else {
        plugins.push(
            new webpack.optimize.DedupePlugin(),
            new ExtractTextPlugin('[name].css'),
            new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        );

        loaders.css.loader = ExtractTextPlugin.extract('style', 'css');
        loaders.sass.loader = ExtractTextPlugin.extract('style', 'css!sass');
    }

    return {
        name: 'client',
        devtool,
        entry: {
            app: clientEntry,
            vendor,
        },
        output: {
            path: outputPath,
            filename: '[name].js',
            publicPath,
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
        },
        module: {
            loaders: _.values(loaders),
        },
        plugins,
    };
}

module.exports = createConfig(process.env.NODE_ENV !== 'production');
module.exports.create = createConfig;
