// Node js import.
var path = require('path');
var webpack = require('webpack');

// Plugin import.
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var NodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

// Import common module configuration.
var common = require('./webpack/common');
var cleanOptions = require('./webpack/plugin-dist/webpack-clean-option').get(__dirname);
var copyOptions = require('./webpack/plugin-dist/webpack-copy-option').get(__dirname);
var mergeOptions = require('./webpack/plugin-dist/merge-file.config').get(__dirname);

/*
* Module export.
* */
module.exports = {
    context: common.paths.getPluginDist(__dirname),
    entry: {
        'ng-viet-ban-do': path.resolve(common.paths.getPlugins(__dirname), 'index.d.js')
    },
    externals: [NodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                })
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
		// Clean distribution folder before publishing a new package.
        //new CleanWebpackPlugin(cleanOptions.paths, cleanOptions.options),
		
		// Compress distribution package.
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false}
        }),

        // Merge file
        new MergeIntoSingleFilePlugin(mergeOptions),

		// Extract css from definition file.
        new ExtractTextPlugin('css/[name].min.css'),
		
		// Merge common chunks together.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'ng-viet-ban-do',
            minChunks: Infinity
        }),

		// Copy raw files to distribution folder.
        new CopyWebpackPlugin(copyOptions)
    ],
    output: {
        path: common.paths.getPluginDist(__dirname),
        filename: '[name].d.min.js'
    }
};