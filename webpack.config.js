var path = require('path');

module.exports = {
 // entry 는 번들링 할 대상 파일
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
