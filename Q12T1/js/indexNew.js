/*使用单例模式
作用：在系统中保存一个实例
好处：将整个js当成一个对象，外部调用时通过这个对象进行调用；只声明一个变量，减少内存占用*/

var index={
	init:function(){
		var me=this;
		me.render();
		me.bind();
		me.loadSkinColor();
		me.showAndHide(); //初始隐藏
	},
	render:function(){
		var me=this;
		me.aChange=$("#a-change");//换肤的显示隐藏
		me.topRightA=$("#top-right a");
		me.s_username=$("#s_username_top,#s_user_name_menu"); //个人账号
		me.setting=$("#s_usersetting_top,#s_user_setting_menu");//设置
		me.moreProduct=$(".more");//更多产品
		me.selectTab=$("#s_menu_mine");//选项卡
		me.tuijian=$("#s-tuijian"); //选项卡-推荐
		me.daohang=$("#s-daohang"); //选项卡-导航
		me.shipin=$("#s-shipin"); //选项卡-视频
		me.gouwu=$("#s-gouwu");//选项卡-购物
		me.dpic=$(".dpic img"); //背景
		me.topFeed =$('.top-feed');//返回顶部

	},
	bind:function(){
		var me=this;
		me.aChange.click(function() { 
    		$("#skin-list").show();  
		});

		me.topRightA.click(function() { 
    		$("#skin-list").hide();  
		});

		me.s_username.hover(function(){
			$("#s_user_name_menu").css('display','block');
		},function(){
			$("#s_user_name_menu").css('display','none');
		});

		me.setting.hover(function(){
			$("#s_user_setting_menu").css('display','block');
		},function(){
			$("#s_user_setting_menu").css('display','none');
		});

		me.moreProduct.hover(function(){
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

		me.selectTab.click(function(){
			me.moveAllCss();
		  	$("#bd-guanzhu").css('display','block'); //显示"我的关注"内容部分
		  	$("#s_menu_mine").addClass("current"); //给"我的关注"追加样式
		});

		me.tuijian.click(function(){
			me.moveAllCss();
		  	$("#bd-tuijian").css('display','block'); 
		  	$("#s-tuijian").addClass("current"); 
		});

		me.daohang.click(function(){
			me.moveAllCss();
		  	$("#bd-nav").css('display','block');
		  	$("#s-daohang").addClass("current");
		});

		me.shipin.click(function(){
			me.moveAllCss();
		  	$("#bd-video").css('display','block'); 
		  	$("#s-shipin").addClass("current"); 
		});

		me.gouwu.click(function(){
			me.moveAllCss();
		  	$("#bd-buy").css('display','block'); 
		  	$("#s-gouwu").addClass("current"); 
		});

		me.dpic.click(function() {
			var src=$(this).attr("src");
			$("body").css({ 
				"background-image": "url(" + src + ")",
				"background-repeat":"repeat-y",
				"background-size":"100%" });

			$("#s_lg_img").attr('src','./image/logo_white.png');  //替换百度logo

			if (window.localStorage) {
			    localStorage.setItem("loadStyle", src);	
			} else {
			    me.setCookie("loadStyle", src, 1);
			}
		});
		me.topFeed.click(function(){
	        $("html,body").animate({scrollTop:0},200);
	        return false;
	    });
	},


	//删除所有样式 再对要显示的内容追加样式
	moveAllCss:function(){
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
	},
	
	loadSkinColor:function(){
		var selColor = window.localStorage?localStorage.getItem("loadStyle"): me.getCookie("loadStyle");	 
	    if (selColor == null) {  
	        $("body").css({ "background-image": "url(./image/1.jpg)", "background-size": "cover" ,"background-repeat":"repeat-y"});  
	        $("#s_lg_img").attr('src','./image/bd_logo1_31bdc765.png');
	    }  
	    else {  
	        $("body").css({ "background-image": "url(" + selColor + ")", "background-size": "cover" ,"background-repeat":"repeat-y"});  
	        $("#s_lg_img").attr('src','./image/logo_white.png');
	    }  
	 
	    //根据窗口文档内容高度加载更多产品下拉列表高度
	  	var sheight=window.innerHeight;
	  	var iNum = parseInt(sheight)-34;
	  	$(".more ul").css('height',iNum); 
	},
	setCookie:function(name, value, iDay){
		var oDate=new Date();
	    oDate.setDate(oDate.getDate()+iDay);  
	    document.cookie=name+'='+encodeURIComponent(value)+';expires='+oDate;
	},
	getCookie:function(name){
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
	},
	removeCookie:function(name){
		me.setCookie(name, '1', -1);
	},

	showAndHide:function(){
		var TopBtn=$(".top-feed");
		if($("body").scrollTop()>50){  //scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置
			TopBtn.show();
		}else{
			TopBtn.hide();
		}
	}
};



$(document).ready(function(){
 	index.init();

    $(window).scroll(function(){
		index.showAndHide();
    });
})
