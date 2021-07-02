const path = require ('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { //leer archivos js
                test: /\.js$/,
                exclude: /node_modueles/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            "jsx-control-statements"
                        ]
                    }
                }

            },
            { //Regla para trabajar con CSS
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            { //Regla para trabajar con imágenes
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'image/[name].[ext]'
                        }
                    },
                ],
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: "./index.html",
            filename: "index.html"
        }
    )],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot:true
    },
};