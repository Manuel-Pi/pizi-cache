var path = require('path');

// Paths
const PATH = {
    SRC: path.resolve(__dirname, 'src'),
    DIST: path.resolve(__dirname, 'dist'),
};

const LIB = 'pizi-cache';

module.exports = {
    entry: './src/pizi-cache.js',
    output: {
        filename: LIB + '.js',
        path: PATH.DIST,
        library: LIB,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["es2015", { "modules": false }]
                    ]
                }
            }
        }]
    }
};