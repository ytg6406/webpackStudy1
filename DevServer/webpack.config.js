var path = require('path');
console.log(__dirname);
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devtool: "cheap-eval-source-map", 
  devServer: {
    publicPath: "/dist/",
    port: 9000
  }
};