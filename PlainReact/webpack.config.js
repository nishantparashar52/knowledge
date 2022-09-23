const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"] 
            },
            {
                test: /\.scss$/,
                use: [
                    "scss-loader",
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: "index.html"
        })
    ]
}