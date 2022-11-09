const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    // webpack dev server
    devServer: {
        static: './dist',
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        // HtmlWebpackPlugin
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    {
                        // Translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        // Compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    // webpack dev server
    optimization: {
        runtimeChunk: 'single',
    },
};