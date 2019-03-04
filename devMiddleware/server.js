var express = require('express');
var app = express();
var path = require('path');

// sample
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var compiler = webpack(webpackConfig);

app.use(express.static(__dirname));

// view engine setup
// __dirname : root folder
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.send('index');
});

// sample1
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  // 로그 값에 색상을 입히는 방법
  stats: {colors: true},
  // lazy같은 경우 js 등의 저장 시점이 아닌 화면에서의 요청이 있을 때에만 빌드 되는 형태의 옵션이다.
  lazy : true
}));

app.listen(3000);
console.log("Server running on port 3000");