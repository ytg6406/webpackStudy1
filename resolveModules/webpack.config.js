var path = require('path');
var webpack = require('webpack');

module.exports = {
        entry: './app/index.js',
        output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist')
        },
        // #2 - Using alias
        // index.js


        // webpack.config.js
        // resolve: {
        //         alias: {
        //                 Vendor: path.resolve(__dirname, './app/vendor/')
        //         }
        // }
        // #3 - Using Provide Plugin
        // index.js
        // console.log("loaded jQuery version is " + $.fn.jquery);
        //
        // // webpack.config.js
        plugins: [
                new webpack.ProvidePlugin({
                        $: 'jquery'
                })
        ]
};
