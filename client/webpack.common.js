const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/webpack-entry.ts'),

  plugins: [
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(),

    // https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      title: 'Production',
      template: path.resolve(__dirname, 'src/index.html'),
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
    }),

    // https://webpack.js.org/plugins/mini-css-extract-plugin/
    new MiniCssExtractPlugin(),

    // https://github.com/vuejs/vue-loader
    new VueLoaderPlugin(),
  ],

  output: {
    path: path.resolve(__dirname, '../laravel/public/wwwroot'),
    publicPath: '/wwwroot',
  },

  module: {
    rules: [{
      test: /\.html$/i,
      // https://webpack.js.org/loaders/html-loader/
      loader: 'html-loader',
    }, {
      test: /\.less$/,
      // https://webpack.js.org/loaders/less-loader/
      loader: "less-loader",
    }, {
      test: /\.css$/i,
      use: [
        // https://webpack.js.org/plugins/mini-css-extract-plugin/
        MiniCssExtractPlugin.loader,

        // https://webpack.js.org/loaders/css-loader/
        'css-loader',
      ],
    }, {
      test: /\.(j|t)s$/,
      exclude: /node_modules/,
      use: [
        // https://webpack.js.org/loaders/babel-loader/
        'babel-loader',
      ],
    }, {
      test: /\.vue$/,
      // https://github.com/vuejs/vue-loader
      loader: 'vue-loader',
    }],
  },
};