const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        // loaders: [
        //     {
        //         test: /\.(scss|sass)$/i,
        //         include: [
        //             path.resolve(__dirname, 'node_modules'),
        //             path.resolve(__dirname, 'path/to/imported/file/dir'),
        //         ],
        //         loaders: ["css", "sass"]
        //     },
        // ],
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },

};