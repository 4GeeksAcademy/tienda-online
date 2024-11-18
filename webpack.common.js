const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    './src/front/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/, 
        use: [
          "style-loader",  // Inserta CSS en el DOM
          "css-loader",    // Interpreta los archivos CSS como módulos
          "postcss-loader" // Procesa el CSS con PostCSS (incluyendo Tailwind)
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/, 
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      }, 
      { 
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, 
        use: ['file-loader'] 
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
        favicon: '4geeks.ico',
        template: 'template.html'
    }),
    new Dotenv({ safe: true, systemvars: true })
  ]
};