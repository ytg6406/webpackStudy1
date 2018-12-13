var path = require('path');

module.exports = {
  entry: './app/cssTest.js',
  output: {
    filename: 'cssTest.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
}
