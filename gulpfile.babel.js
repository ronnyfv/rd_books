import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import chalk from 'chalk';
import rimraf from 'rimraf';

import { create as createConfig } from './webpack.babel';


const $ = require('gulp-load-plugins')();

const config = {
    buildFolder: './public/build/',
};

gulp.task('clean', (cb) => rimraf(config.buildFolder, cb));

gulp.task('dev', gulp.series('clean', devServer));

gulp.task('prod', gulp.series('clean', prodBuild));


const prodWebpack = webpack(createConfig(false));
const devWebpack = webpack(createConfig(true));

function prodBuild(cb) {
    prodWebpack.run((error, stats) => {
        outputWebpack('prod', error, stats);
        cb();
    });
}

function devServer() {
    const server = new WebpackDevServer(devWebpack, {
        // webpack-dev-server options
        contentBase: 'dev/',
        // or: contentBase: "http://localhost/",
        publicPath: '/',

        hot: true,

        historyApiFallback: true,

        stats: {
            colors: true,
            exclude: ['node_modules'],
            chunks: false,
            assets: false,
            timings: false,
            modules: false,
            hash: false,
            version: false,
        },
    });

    server.listen(3000, 'localhost', () => {
        $.util.log(chalk.bgGreen('Servidor iniciado na porta 3000'));
    });
}

// helpers
function outputWebpack(label, error, stats) {
    if (error) {
        throw new Error(error);
    }

    if (stats.hasErrors()) {
        $.util.log(stats.toString({ colors: true }));
    } else {
        const time = stats.endTime - stats.startTime;
        $.util.log(chalk.bgGreen(`Build ${label} in ${time} ms`));
    }
}
