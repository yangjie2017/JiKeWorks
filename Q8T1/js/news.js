$(document).ready(function(){
	var deviceWidth=$('body').width(); //设备宽度=body页面宽度，动态整除设置导航li宽度

	$('nav li').each(function(index,item){  //遍历所有li。index索引项，item具体索引的是哪个li标签
		if($(this).find('a').html().split('').length>2){  //当前li下的a标签的字数，长度>2 li占两格，长度<=2 li占一格
			$(this).width(deviceWidth/3);   
		}else{
			$(this).width(deviceWidth/6);
		}
	});

	/*var $lists=$('article ul');
	var $list=$('<li></li>').addClass('news-list').prependTo($lists);
	var $newsImg=$('<div></div>').addClass('newsimg').appendTo($list);
	var $img=$('<img>').attr('src','./image/1.jpeg').appendTo($newsImg);
	var $newsContent=$('<div></div>').addClass('newscontent').appendTo($list);
	var $h1=$('<span></span>').addClass('newstitle').html('新闻标题').appendTo($newsContent);
	var $p=$('<p></p>').appendTo($newsContent);
	var $newstime=$('<span></span>').addClass('newstime').html('新闻事件').appendTo($p);*/

	var type='精选'; //打开时默认加载精选
	refreshNews(type);
	

	var i = 2; //设置当前页数 从第二页开始

	$('nav a').click(function(e){
		e.preventDefault();
		type=$(this).text();
		refreshNews(type);
		i=2;  //切换导航之后重置页数
	})


    var winH = $(window).height(); //页面可视区域高度     
    $(window).scroll(function(){
    	var $lists=$('article ul');
    	if($(window).scrollTop()==($(document).height()-$(window).height())){ //判断右边滑动条是否滑到最下
    		$.getJSON("./server/result.php",{page:i,newstype:type},function(json){
    			if(json.length>0){
    				console.log(json);
    				var str = ""; 
					$.each(json,function(index,array){

						var $list=$('<li></li>').addClass('news-list').prependTo($lists);
						var $newsImg=$('<div></div>').addClass('newsimg').appendTo($list);
						var $img=$('<img>').attr('src',array['newimg']).appendTo($newsImg);
						var $newsContent=$('<div></div>').addClass('newscontent').appendTo($list);
						var $h1=$('<span></span>').addClass('newstitle').html(array['newstitle']).appendTo($newsContent);
						var $p=$('<p></p>').appendTo($newsContent);
						var $newstime=$('<span></span>').addClass('newstime').html(array['newstime']).appendTo($p);

					});
					i++;	
    			}
    			else
    			{
					$(".nodata").show().html("别滚动了，已经到底了。。。"); 
					return false; 
    			}
    		});
    	}

    });

});

function refreshNews(type){
	$(".nodata").hide();  //初始时 隐藏提示

	var $lists=$('article ul');
	$lists.empty();

	$.ajax({
		url:'./server/getnews.php',
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
				var $newstime=$('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
			})

			console.log(data);
		}
	})
}