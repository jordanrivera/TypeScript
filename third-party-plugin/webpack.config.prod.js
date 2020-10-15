const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
            }
        ]
    },
    resolve:{
        extensions: ['.wasm','.tsx','.ts', '.js','.mjs','.cjs','.json'],
        modules: ['src', 'node_modules']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};