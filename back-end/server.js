// var MongoClient = require('mongodb').MongoClient;
// var async = require('async');

var express = require('express');
var app = express();

//引入路由模块；
var FilmRouter = require('./router/films.js');
var UserRouter = require('./router/user.js');
//使用引入的路由模块
app.use('/api/film',FilmRouter);
app.use('/api/user',UserRouter);

app.listen(3000);
console.log('启动成功');
