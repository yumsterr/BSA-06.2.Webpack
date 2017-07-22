var webpack = require("webpack");

module.exports = {
    context: __dirname,
    devtool: "eval-source-map",
    entry: "./src/js/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 versions', 'sass-loader']
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    globals: [
                        'document', 'window', '$'
                    ]
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [

                    {
                        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
                    },
                    {
                        loader: 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
                        options:{
                            limit: 10000
                        }
                    }
                ],
            },

        ]
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    })],
    devServer: {
        inline: true,
        port: 8081
    }
};
//