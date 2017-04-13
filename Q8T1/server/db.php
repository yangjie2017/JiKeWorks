<?php 
	header("Content-type:application/json;charset=utf-8");  //设置响应头

	//参数1：服务器地址 参数2：用户名 参数3：用户名密码 参数4：数据库名 参数5：端口号
	$link=mysqli_connect('localhost','root','','baidunews',3306);
?>