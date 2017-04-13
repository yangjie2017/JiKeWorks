var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var conn=require('./db');

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var newstype=req.query.newstype;//前端发送的请求

  var connection=mysql.createConnection(conn);

  	connection.connect();//创建连接

  	//第一个sql，第二个查询tioajian，第三个回调函数（1.err发生错误的返回信息 2.rows 3.列 集合）
  	connection.query('SELECT * FROM `news` WHERE `newstype`=?',[newstype],function(err,rows,fields){
  		//console.log(rows);
  		res.json(rows);
  	});

    connection.end(); //关闭连接
});

module.exports = router;
