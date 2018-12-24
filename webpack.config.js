var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/cssTest.js',
  output: {
    filename: 'cssTest.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     //.css 파일이 아닌 js로 넣는 방법
    // rules: [{
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader']
    // }]
    // .css 파일로 만드는 방법
    rules: [{
      test: /\.css$/,
      // Comment this out to load ExtractTextPlugin
      // use: ['style-loader', 'css-loader']
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
