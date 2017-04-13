<?php 
	header("Content-type:application/json;charset=utf-8");  //设置响应头

	/*$arr=array('newstype'=>'百家',
				'newsimg'=>'./image/1.jpeg',
				'newstitle'=>'测试新闻标题',
				'newstime'=>'测试新闻时间'
		);
		echo json_encode($arr);*/

	//参数1：服务器地址 参数2：用户名 参数3：用户名密码 参数4：数据库名 参数5：端口号
	//$link=mysqli_connect('localhost','root','','baidunews',3306);
		require_once('db.php');
	if($link){
		if($_GET['newstype']){

			$ntype=$_GET['newstype'];
			$sql="SELECT * FROM `news` WHERE `newstype`='{$ntype}' limit 6";  //默认加载6条数据
			

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

		}
		else
		{
			$sql='select * from news';
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
		}

		echo json_encode($senddata);
		
		//echo json_encode(array('连接信息' =>'连接OK' ));

	}else{
		echo json_encode(array('连接信息' => '连接失败'));
	}

	mysqli_close($link);//关闭连接
?>