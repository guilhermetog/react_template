const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/scripts/index.js',
    output:{
        path: path.join(__dirname, '/dist/js'),
        filename: 'index_bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                loader: 'url-loader'
            },
            {
                test: /\.sass$/,
                use: [
                    {
                       loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    }
                ],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'src/index.html'})
    ]
}