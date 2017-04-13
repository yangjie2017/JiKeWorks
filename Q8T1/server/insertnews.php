<?php 
	header("Content-type:application/json;charset=utf-8");

	require_once('db.php');

	if($link){
		//连接成功 插入数据
		$newstitle=$_POST['newstitle'];
		$newsimg=$_POST['newsimg'];
		$newstime=$_POST['newstime'];
		$newstype=$_POST['newstype'];

		$sql="INSERT INTO `news`(`newstype`, `newstitle`, `newimg`, `newstime`) VALUES ('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}')";
		mysqli_query($link,"SET NAMES utf8");  //设置格式
		$result=mysqli_query($link,$sql);

		echo json_encode(array('success'=>'OK'));
	}else{
		echo json_encode(array('连接信息' => '连接失败'));
	}
	mysqli_close($link);//关闭连接
?>