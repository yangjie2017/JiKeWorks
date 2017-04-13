//打开管理页面时显示最新的新闻列表内容
$(document).ready(function(){
	var $newstable=$('#newstable tbody');
	refreshNews();

	/***添加新闻****/
	$('#btnsubmit').click(function(e){
		e.preventDefault();  //阻止提交按钮的默认提交

		if($('#newstitle').val()===""||$('#newsimg').val()===""||$('#newstime').val()===""){
			if($('#newstitle').val()===""){
				$('#newstitle').parent().addClass('has-error');
			}else{
				$('#newstitle').parent().removeClass('has-error');
			}

			if($('#newsimg').val()===""){
				$('#newsimg').parent().addClass('has-error');
			}else{
				$('#newsimg').parent().removeClass('has-error');
			}

			if($('#newstime').val()===""){
				$('#newstime').parent().addClass('has-error');
			}else{
				$('#newstime').parent().removeClass('has-error');
			}
		}else{
			//不为空 提交数据
			var jsonNews={
				newstitle:$('#newstitle').val(),
				newsimg:$('#newsimg').val(),
				newstime:$('#newstime').val(),
				newstype:$('#newstype').val()
			}

			$.ajax({
				url:'./server/insertnews.php',
				type:'post',
				data:jsonNews,
				datatype:'json',
				success:function(data){
					console.log(data);
					refreshNews();
				}
			})
		}
	});

	/*$('button').click(function(){
		console.log('click');
	});*/

	/***删除新闻****/
	var deleteid=null;
	$newstable.on('click','.btn-danger',function(e){
		$('#deleteModal').modal('show');
		//console.log($(this).parent().prevAll().eq(4).html());
		deleteid=$(this).parent().prevAll().eq(4).html();
	});
	$('#deleteModal #confirmDelete').click(function(e){
		//console.log(deleteid);
		if(deleteid){
			$.ajax({
				url:'./server/deletenews.php',
				type:'post',
				datatype:'json',
				data:{newsid:deleteid},
				success:function(data){
					console.log('删除成功');
					$('#deleteModal').modal('hide');  //隐藏删除提示框
					refreshNews();
				}
			})
		}
	});

	/***修改新闻****/
	var updateid=null;
	$newstable.on('click','.btn-primary',function(e){
		$('#updateModal').modal('show');
		updateid=$(this).parent().prevAll().eq(4).html();

		$.ajax({
			url:'./server/bindnews.php',
			type:'get',
			datatype:'json',
			data:{newsid:updateid},
			success:function(data){
				console.log(data);
				$('#unewstitle').val(data[0].newstitle);
				$('#unewsimg').val(data[0].newimg);
				var utime=data[0].newstime.split(' ')[0]; //按空格截取，取年月日
				$('#unewstime').val(utime);
				$('#unewstype').val(data[0].newstype)
			}
		})
	});
	$('#updateModal #confirmUpdate').click(function(e){
		$.ajax({
			url:'./server/updatenews.php',
			type:'post',
			datatype:'json',
			data:{
				newstitle:$('#unewstitle').val(),
				newimg:$('#unewsimg').val(),
				newstime:$('#unewstime').val(),
				newstype:$('#unewstype').val(),
				id:updateid
			},
			success:function(data){
				$('#updateModal').modal('hide');
					refreshNews();
			}
		})
	});




function refreshNews(){
	/***查询新闻****/
	$newstable.empty();
	$.ajax({
		url:'./server/getnews.php',
		type:'get',
		datatype:'json',
		data:{newstype:'',page:''},
		success:function(data){
			//console.log(data);
			//forEach（原生js方法）Each（Jquery方法）
			data.forEach(function(item,index,array){  //循环data
				var $tdid=$('<td>').html(item.id);
				var $tdtype=$('<td>').html(item.newstype);
				var $tdtitle=$('<td>').html(item.newstitle);
				var $tdimg=$('<td>').html(item.newimg);
				var $tdtime=$('<td>').html(item.newstime);
				var $tdctrl=$('<td>');
				var $btnupdate=$('<button>').addClass('btn btn-primary btn-xs').html('修改');
				var $btndelete=$('<button>').addClass('btn btn-danger btn-xs').html('删除');

				$tdctrl.append($btnupdate,$btndelete);
				var $tRow=$('<tr>');
				$tRow.append($tdid,$tdtype,$tdtitle, $tdimg,$tdtime,$tdctrl);
				$newstable.append($tRow);
			})
		}
	});
}
	
});