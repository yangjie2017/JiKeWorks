$(document).ready(function(){
	//console.log('ready');

	//头部导航
	//职业学院
	$('.coll-1').mouseover(function(e) {
         $(".page_1").css('display','block');
    });
    $('.coll-1').mouseout(function(e) {
         $(".page_1").css('display','none');
    });
    //会员课程
    $('.coll-2').mouseover(function(e) {
         $(".page_2").css('display','block');
    });
    $('.coll-2').mouseout(function(e) {
         $(".page_2").css('display','none');
    });
    //极客社区
    $('.coll-3').mouseover(function(e) {
         $(".page_3").css('display','block');
    });
    $('.coll-3').mouseout(function(e) {
         $(".page_3").css('display','none');
    });


	//搜索
	$("#searchicon").click(function(){
		$("#searchbox").addClass("scale");
	});

	//关闭搜索
	$("#close-btn").click(function() { 
    	//$("#searchbox").hide();  
    	$("#searchbox").removeClass("scale");
	});

	//左边导航菜单
	 $('.cList li').mouseover(function(e) {
	 	//console.log('2222');
         $(this).find(".list-show").css('display','block');
    });
    $('.cList li').mouseout(function(e) {
         $(this).find(".list-show").css('display','none');
    });




	//筛选条件部分 **************
	$(".sort .sortMode dl dd").hide();  
    	$(".sort .sortMode dl dt").mouseover(function(){  
    		console.log("1111");

			$(".sort .sortMode dl dd").css('display','block');
    });  


	//课程列表显示模式切换
	$("#kuaiicon").click(function(){
		$(".lesson-list").css('display','block');
		$(".lesson-list2").css('display','none');
	});

	$("#listicon").click(function(){
		$(".lesson-list").css('display','none');
		$(".lesson-list2").css('display','block');
	});

	//鼠标悬浮出现遮罩效果及播放按钮图片
	 $('li').mouseover(function(e) {
         $(this).find(".lessonplay").css('opacity','1');
    });
    $('li').mouseout(function(e) {
         $(this).find(".lessonplay").css('opacity','0');
    });


    showAndHide();  //初始时隐藏向上按钮
	//返回顶部
    $('#totop').click(function(){
        $("html,body").animate({scrollTop:0},200);
        return false;
    });
    $(window).scroll(function(){
		showAndHide();
    });
});

function showAndHide(){
	var TopBtn=$("#totop");
	if($("body").scrollTop()>50){  //scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置
		TopBtn.show();
	}else{
		TopBtn.hide();
	}
}
