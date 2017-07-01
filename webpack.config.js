/**
 * Created by Linh Nguyen on 6/29/2017.
 */
var webpack = require('webpack');
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
    ]
};