$(document).ready(function(){
	var deviceWidth=$('body').width(); //设备宽度=body页面宽度，动态整除设置导航li宽度

	$('nav li').each(function(index,item){  //遍历所有li。index索引项，item具体索引的是哪个li标签
		if($(this).find('a').html().split('').length>2){  //当前li下的a标签的字数，长度>2 li占两格，长度<=2 li占一格
			$(this).width(deviceWidth/3);   
		}else{
			$(this).width(deviceWidth/6);
		}
	});

	var type='精选'; //打开时默认加载精选
	refreshNews(type);
	
	//切换导航
	$('nav a').click(function(e){
		e.preventDefault();
		type=$(this).text();
		refreshNews(type);
	})


});

function refreshNews(type){
	$(".nodata").hide();  //初始时 隐藏提示

	var $lists=$('article ul');
	$lists.empty();

	$.ajax({
		url:'./news',
		type:'get',
		datatype:'json',
		data:{newstype:type},
		success:function(data){
			data.forEach(function(item,index,array){   //循环josn数据
				var $list=$('<li></li>').addClass('news-list').prependTo($lists);
				var $newsImg=$('<div></div>').addClass('newsimg').appendTo($list);
				var $img=$('<img>').attr('src',item.newimg).appendTo($newsImg);
				var $newsContent=$('<div></div>').addClass('newscontent').appendTo($list);
				var $h1=$('<span></span>').addClass('newstitle').html(item.newstitle).appendTo($newsContent);
				var $p=$('<p></p>').appendTo($newsContent);

				var dt = new Date(item.newstime);//UTC时间处理
				var date = [
				  [dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('-')
				].join(' ').replace(/(?=\b\d\b)/g, '0'); // 正则补零
				console.log(dt+'  '+date);

				var $newstime=$('<span></span>').addClass('newstime').html(date).appendTo($p);
			})

			console.log(data);
		}
	})
}
