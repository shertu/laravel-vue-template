const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    optimization: {
        minimizer: [
            // https://webpack.js.org/plugins/terser-webpack-plugin/
            new TerserPlugin(),

            // https://github.com/NMFR/optimize-css-assets-webpack-plugin
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
            }),
        ],
    },

    plugins: [
        // https://github.com/webpack-contrib/stylelint-webpack-plugin
        new StylelintPlugin({
            files: 'src/**/*.(css|less|vue)',
            fix: true,
        }),

        // https://github.com/webpack-contrib/eslint-webpack-plugin
        new ESLintPlugin({
            files: 'src/**/*.(js|ts|vue)',
            fix: true,
        }),
    ],
});