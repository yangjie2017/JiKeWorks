<?php 
	header("Content-type:application/json;charset=utf-8");  //设置响应头

	require_once('db.php');

	if($link){
		$newsid=$_GET['newsid'];
		mysqli_query($link,"SET NAMES utf8");  //设置格式
		$sql="SELECT * FROM `news` WHERE `id`={$newsid}";

		//echo json_encode(array('连接信息' => $sql));

		$result=mysqli_query($link,$sql);
		$senddata=array();

		while ($row=mysqli_fetch_assoc($result)) {
			array_push($senddata, array(
					'id'=>$row['id'],
					'newstype'=>$row['newstype'],
					'newstitle'=>$row['newstitle'],
					'newimg'=>$row['newimg'],
					'newstime'=>$row['newstime']
				));
		}
		echo json_encode($senddata);

	}else{
		//die('Could not connect',mysql_error());
		echo json_encode(array('连接信息' => '连接失败'));
	}

	mysqli_close($link);//关闭连接
?>