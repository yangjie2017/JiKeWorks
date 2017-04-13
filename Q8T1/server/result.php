<?php 
	header("Content-type:application/json;charset=utf-8");  //设置响应头

		require_once('db.php');
	if($link){
		$ntype=$_GET['newstype'];
		$page = intval($_GET['page']); //获取请求的页数 
		$start = ($page-1)*6; 
		$sql="SELECT * FROM `news` WHERE `newstype`='{$ntype}' limit $start,6";
			
		mysqli_query($link,"SET NAMES utf8");  //设置格式
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
		
		//echo json_encode(array('连接信息' =>'连接OK' ));

	}else{
		echo json_encode(array('连接信息' => '连接失败'));
	}

	mysqli_close($link);//关闭连接
?>