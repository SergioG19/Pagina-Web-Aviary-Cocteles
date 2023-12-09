const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader,
      'css-loader'
    ],
    }
  ]
},
  plugins: [
    new HtmlWebpackPlugin ({
      inject: true,
      template: './public/index.html', 
      filename: './index.html', 
    }),
    new HtmlWebpackPlugin({
        inject: true,
        template: './public/sobrenosotros.html',
        filename: './sobrenosotros.html',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/cocteles.html',
        filename: './cocteles.html',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/contactanos.html',
        filename: './contactanos.html',
      }),
    new MiniCssExtractPlugin(),
  ]
}