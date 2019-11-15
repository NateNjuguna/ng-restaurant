var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: ['@babel/proposal-class-properties'],
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(html)$/,
        use: [{
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'md-icon:md-svg-src'],
            minimize: true,
          },
        }],
      },
    ]
  },
  output: {
    filename: 'assets/js/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, '../build'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[chunkhash:8].css',
    }),
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      cache: true,
      favicon: 'public/favicon.ico',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      showErrors: true,
      template: 'public/index.html',
    }),
  ],
};
