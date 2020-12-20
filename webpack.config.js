// dependencies
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackCli = require('webpack-cli'); // added to clear dependency check
const VueTemplateCompiler = require('vue-template-compiler'); // added to clear dependency check

const ThemeOverrides = {
  //'primary-color': '#d8412f',
};

// webpack method
module.exports = {
  mode: 'development',
  //mode: 'production',
  
  devtool: 'source-map',

  entry: [
    require('regenerator-runtime/path').path,
    './client/src/components/App/webpack-entry.ts',
    //'./client/src/style/index.less',
  ],

  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.html', '.js', '.ts', '.css', '.less', '.vue'],
    // alias: {
    //   'vue': '@vue/runtime-dom'
    // }
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'wwwroot'),
    writeToDisk: true,
  },

  module: {
    rules: [{
      test: /\.html$/,
      use: ['html-loader'],
    }, {
      test: /\.(c|le)ss$/,
      use: [
        MiniCssExtractPlugin.loader, // creates style nodes from JS strings
        'css-loader',
        { // transforms CSS into CommonJS
          loader: 'less-loader', // transforms LESS into CSS
          options: {
            modifyVars: ThemeOverrides, // override the default antd theme
            javascriptEnabled: true,
          },
        },
      ],
    }, {
      test: /\.(j|t)s$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        // use eslint-loader to enforce an eslint code style as a build requirement
      ],
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }],
  },

  plugins: [
    // creates style nodes from JS strings
    new MiniCssExtractPlugin({
      // filename: '[name].css',
      // chunkFilename: '[id].css',
    }),

    // adds a .html file as an entry point
    // and automatically attaches optimized outputs
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      favicon: path.resolve(__dirname, 'client/favicon.ico'),
    }),

    // removes the build directory before rebuild
    new CleanWebpackPlugin(),

    // enables support for .vue files
    new VueLoaderPlugin()

    // use stylelint-webpack-plugin to enforce an stylelint code style as a build requirement
  ],

  optimization: {
    minimize: true,
    minimizer: [
      // minify javascript using terser
      new TerserPlugin(),

      // minify css assets using cssnano
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
      }),
    ],
  },
};
