var path = require('path');

// Paths
const PATH = {
    SRC: path.resolve(__dirname, 'src'),
    DIST: path.resolve(__dirname, 'dist'),
};

module.exports = {
    entry: './src/pizi-cache.js',
    output: {
        filename: 'pizi-cache.js',
        path: PATH.DIST
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    }
};