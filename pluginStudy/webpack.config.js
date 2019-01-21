var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
        entry: {
                main: './app/index.js',
                vendor: [
                        'moment',
                        'lodash'
                ]
        },
        output: {
                // entry 에서 설정한 이름으로 저장이 된다.
                filename: '[name].js',
                path: path.resolve(__dirname, 'dist')
        },
        // plugins: [
        //         new webpack.optimize.SplitChunksPlugin({
        //                 optimization: {
        //                         splitChunks: {
        //                                 cacheGroups: {
        //                                         vendor: {
        //                                                 chunks: 'initial',
        //                                                 name: 'vendor',
        //                                                 enforce: true,
        //                                         },
        //                                 },
        //                         },
        //                         runtimeChunk: {
        //                                 name: 'manifest',
        //                         }
        //                 },
        //         })
        // ]
        plugins: [
                new webpack.ProvidePlugin({
                        names: ["vendor", "manifest"]
                }),
                new ManifestPlugin({
                        fileName: "manifest.json",
                        basePath: ". / dist / "
                })
        ]

};
