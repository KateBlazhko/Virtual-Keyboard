const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';


const config = {
    entry: {
        'main/index': './src/main/index.js',
        'pets/pets': './src/pets/pets.js',
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/main/index.html',
            favicon: './src/assets/icons/fav.ico',
            filename: 'index.html',
            inject:'body',
            minify: false,
            chunks: ['main/index']
        }),

        new HtmlWebpackPlugin({
            template: './src/pets/pets.html',
            favicon: './src/assets/icons/fav.ico',
            filename: 'pets.html',
            inject:'body',
            minify: false,
            chunks: ['pets/pets'],
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),

        new CopyPlugin({
            patterns: [
                { from: './src/assets/img',
                  to: path.resolve(__dirname, 'dist/assets/img')},
            ],
            options: {
              concurrency: 100,
            },
          }),

    
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]',
                  }
            },
            {
                test: /\.(svg|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/icons/[name][ext]',
                  }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/fonts/[name][ext]',
                },
              },

        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
        config.target = 'web';
    }
    return config;
};