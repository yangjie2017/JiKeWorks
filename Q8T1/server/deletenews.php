<?php 
	header("Content-type:application/json;charset=utf-8");  //设置响应头

	require_once('db.php');

	if($link){
		$newsid=$_POST['newsid'];
		mysqli_query($link,"SET NAMES utf8");  //设置格式
		$sql="DELETE FROM `news` WHERE `id`={$newsid}";

		mysqli_query($link,$sql);
		echo json_encode(array('删除状态' => '成功'));

	}else{
		//die('Could not connect',mysql_error());
		echo json_encode(array('连接信息' => '连接失败'));
	}

	mysqli_close($link);//关闭连接
?>