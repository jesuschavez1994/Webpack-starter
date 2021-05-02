const HtmlWebPackPlugin       = require('html-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const CopyPlugin              = require('copy-webpack-plugin');
const MinifyPlugin            = require("babel-minify-webpack-plugin");

module.exports = {
    mode: 'production',
    output: {
        filename: 'main.[contenthash].js',
        clean: true, // Clean the output directory before emit.
    },
    module: {
        rules: [

        {
            test: /\.css$/,
            exclude: /styles\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },
        {
            test: /styles\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                sources: false,
                minimize: false,
            },
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: 'assets/[name].[ext]'
                    }
                }
            ]
        },
        
    ]
    
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ]
        }),

        new MinifyPlugin()
    ] 
}