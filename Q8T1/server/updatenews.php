<?php 
	header("Content-type:application/json;charset=utf-8");  //设置响应头

	require_once('db.php');

	if($link){
		$newstitle=$_POST['newstitle'];
		$newsimg=$_POST['newimg'];
		$newstime=$_POST['newstime'];
		$newstype=$_POST['newstype'];
		$newsid=$_POST['id'];

		$sql="UPDATE `news` SET `newstype`='{$newstype}',`newstitle`='{$newstitle}',`newimg`='{$newsimg}',`newstime`='{$newstime}' WHERE `id`='{$newsid}'";
		mysqli_query($link,"SET NAMES utf8");  //设置格式
		$result=mysqli_query($link,$sql);

		echo json_encode(array('success'=>'OK'));


	}else{
		//die('Could not connect',mysql_error());
		echo json_encode(array('连接信息' => '连接失败'));
	}

	mysqli_close($link);//关闭连接
?>