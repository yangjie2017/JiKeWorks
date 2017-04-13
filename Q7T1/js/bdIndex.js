$(document).ready(function(){
	//换肤的显示隐藏
	$("#a-change").click(function() { 
    	$("#skin-list").show();  
		 });
	
	$("#top-right a").click(function() { 
    	$("#skin-list").hide();  
		 });

	//个人账号
	$("#s_username_top,#s_user_name_menu").hover(function(){
		$("#s_user_name_menu").css('display','block');
	},function(){
		$("#s_user_name_menu").css('display','none');
	});
	

	//设置
	$("#s_usersetting_top,#s_user_setting_menu").hover(function(){
		$("#s_user_setting_menu").css('display','block');
	},function(){
		$("#s_user_setting_menu").css('display','none');
	});

	//更多产品的显示隐藏
	$(".more").hover(function(){
		$(".more ul").css('display','block');
		$(".bri").css({background:"#f9f9f9",color:"#555",borderLeft:"1px solid #ebebeb"})

			var h1 = $(window).height();
			$("body").css({"height": "200px" });
			console.log($("body").css("height"));
			$(document).css({"overflow":"hidden"});

	},function(){
		$(".more ul").css('display','none');
		$(".bri").css({background:"#398bfb",color:"white",borderLeft:"1px solid white"})
	});

	//选项卡切换
	$("#s_menu_mine").click(function(){
		moveAllCss();

	  	$("#bd-guanzhu").css('display','block'); //显示"我的关注"内容部分
	  	$("#s_menu_mine").addClass("current"); //给"我的关注"追加样式

	  	/*$("#s-tuijian").removeClass("current"); //移除"推荐"的样式
	    $("#bd-tuijian").css('display','none'); //隐藏"推荐"内容
	    $("#s-daohang").removeClass("current"); //移除
	    $("#bd-nav").css('display','none'); //隐藏
	    $("#s-shipin").removeClass("current"); //移除
	    $("#bd-video").css('display','none'); //隐藏
	    $("#s-gouwu").removeClass("current"); //移除
	    $("#bd-buy").css('display','none'); //隐藏*/
	});
	//删除所有样式 再对要显示的内容追加样式
	function moveAllCss() {
		$("#s_menu_mine").removeClass("current"); //移除
	    $("#bd-guanzhu").css('display','none'); //隐藏
		$("#s-tuijian").removeClass("current"); //移除"推荐"的样式
	    $("#bd-tuijian").css('display','none'); //隐藏"推荐"内容
	    $("#s-daohang").removeClass("current"); //移除
	    $("#bd-nav").css('display','none'); //隐藏
	    $("#s-shipin").removeClass("current"); //移除
	    $("#bd-video").css('display','none'); //隐藏
	    $("#s-gouwu").removeClass("current"); //移除
	    $("#bd-buy").css('display','none'); //隐藏
	}
	//推荐
	$("#s-tuijian").click(function(){
		moveAllCss();

	  	$("#bd-tuijian").css('display','block'); 
	  	$("#s-tuijian").addClass("current"); 
	});
	//导航
	$("#s-daohang").click(function(){
		moveAllCss();

	  	$("#bd-nav").css('display','block');
	  	$("#s-daohang").addClass("current");
	});
	//视频
	$("#s-shipin").click(function(){
		moveAllCss();

	  	$("#bd-video").css('display','block'); 
	  	$("#s-shipin").addClass("current"); 
	});

	//购物
	$("#s-gouwu").click(function(){
		moveAllCss();

	  	$("#bd-buy").css('display','block'); 
	  	$("#s-gouwu").addClass("current"); 
	});

	//切换背景
	$(".dpic img").click(function() {
		var src=$(this).attr("src");
		$("body").css({ 
			"background-image": "url(" + src + ")",
			"background-repeat":"repeat-y",
			"background-size":"100%" });

		$("#s_lg_img").attr('src','./image/logo_white.png');  //替换百度logo

		if (window.localStorage) {
		    localStorage.setItem("loadStyle", src);	
		} else {
		    setCookie("loadStyle", src, 1);
		}
	});


	showAndHide();  //初始时隐藏向上按钮
	//返回顶部
    $('.top-feed').click(function(){
        $("html,body").animate({scrollTop:0},200);
        return false;
    });
    $(window).scroll(function(){
		showAndHide();
    });
});

function showAndHide(){
	/*var wheight=window.innerHeight;
	var obj=$('.top-feed');
	//alert(obj.offset().top);
	
	//var aa=obj.offset().top;
	//var topfeedHeight=aa+53;
	//alert(topfeedHeight);
    if(obj.offset().top>wheight){ //距离顶部的高度大于窗口文档显示区的高度时 显示，反之 隐藏。
         obj.show();
    }else{
         obj.hide();
    }*/
	
	var TopBtn=$(".top-feed");
	if($("body").scrollTop()>50){  //scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置
		TopBtn.show();
	}else{
		TopBtn.hide();
	}
}

//加载背景皮肤
function loadSkinColor() {
	var selColor = window.localStorage?localStorage.getItem("loadStyle"): getCookie("loadStyle");	 
    if (selColor == null) {  
        $("body").css({ "background-image": "url(./image/1.jpeg)", "background-size": "cover" ,"background-repeat":"repeat-y"});  
        $("#s_lg_img").attr('src','../image/bd_logo1_31bdc765.png');
    }  
    else {  
        $("body").css({ "background-image": "url(" + selColor + ")", "background-size": "cover" ,"background-repeat":"repeat-y"});  
        $("#s_lg_img").attr('src','./image/logo_white.png');
    }  
  

    //根据窗口文档内容高度加载更多产品下拉列表高度
  	var sheight=window.innerHeight;
  	var iNum = parseInt(sheight)-34;
  	$(".more ul").css('height',iNum); 
}


/*cookie设置 使用 及删除*/
function setCookie(name, value, iDay) 
{
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);  
    document.cookie=name+'='+encodeURIComponent(value)+';expires='+oDate;
}
 
function getCookie(name)
{
    var arr=document.cookie.split(';');
    var i=0;
    for(i=0;i<arr.length;i++)
    {
        var arr2=arr[i].split('=');
         
        if(arr2[0]==name)
        {  
            var getC = decodeURIComponent(arr2[1]);
            return getC;
        }
    }
    return '';
}
 
function removeCookie(name)
{
    setCookie(name, '1', -1);
} 


	
