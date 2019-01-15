var webpack = require('webpack');
var path = require('path');

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
  }
}
