var express = require('express');
var router = express.Router();

var conn=require('./db');

var mysql=require('mysql');
 var connection=mysql.createPool(conn);


/* 后台管理页面处理 */

//获取所有新闻列表
router.get('/getnews', function(req, res, next) {
  connection.query('SELECT * FROM `news` order by `id` desc',function(err,rows){
  		res.json(rows);
  	});
});

//更新
router.post('/udpate', function(req, res, next) {
	var newsid=req.body.id,
		newstype=req.body.newstype,
		newstitle=req.body.newstitle,
		newimg=req.body.newimg,
		newstime=req.body.newstime;

	connection.query('UPDATE `news` SET `newstype`=?,`newstitle`=?,`newimg`=?,`newstime`=? WHERE `id`=?',[newstype,newstitle,newimg,newstime,newsid],function(err,rows){
  		console.log(rows.changedRows);

  		res.redirect('/admin/getnews');  //重定向：刷新列表
  	});
});

//更新前加载数据
router.get('/bindnews', function(req, res, next) {
	var newsid=req.query.newsid;
  	connection.query('SELECT * FROM `news` WHERE `id`=?',[newsid],function(err,rows){
  		res.json(rows);
  	});
});

//删除 deletenews
router.post('/deletenews', function(req, res, next) {
	var newsid=req.body.newsid;

	connection.query('DELETE FROM `news` WHERE `id`=?',[newsid],function(err,result){
  		console.log(result.affectRows);

  		res.redirect('/admin/getnews');  //重定向：刷新列表
  	});
});

//增加数据 insertnews
router.post('/insertnews', function(req, res, next) {		
	var newstype=req.body.newstype,
		newstitle=req.body.newstitle,
		newsimg=req.body.newsimg,
		newstime=req.body.newstime;

		connection.query('INSERT INTO `news`(`newstype`, `newstitle`, `newimg`, `newstime`) VALUES (?,?,?,?)',[newstype,newstitle,newsimg,newstime],function(err,result){
  			if(!err){
  				console.log(result.insertId);
  				res.redirect('/admin/getnews');  //重定向：刷新列表

  			}
  		});
});

module.exports = router;
