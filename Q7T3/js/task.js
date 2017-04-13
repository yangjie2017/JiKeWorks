/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
$(document).ready(function(){
	$(window).on("load",function(){
		imgLocation();
	
		var dataImg={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"6.jpg"}]};
		window.onscroll=function(){
			if(scrollside()){
				$.each(dataImg.data,function(index,value){
					var box=$("<div>").addClass("box").appendTo($("#container"));
					var content=$("<div>").addClass("content").appendTo(box);
					$("<img>").attr("src","./image/"+$(value).attr("src")).appendTo(content);

					var p1=$("<p></p>").text("人像写真").appendTo(content);  
					var p2=$("<p></p>").text("标签：摄影").appendTo(content); 
				});
				imgLocation();
			}
		};
		window.resize=function(){   //监听窗口缩放  当调整浏览器窗口的大小时，发生 resize 事件
			imgLocation();
		};
	});
});

function scrollside(){
	var box=$(".box");
	var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHight=$(document).width();
	var scrollHight=$(document).scrollTop();
	return(lastboxHeight<scrollHight+documentHight)?true:false;
}

function imgLocation(){
	var box=$(".box");
	var boxWidth=box.eq(0).width();
	var num=Math.floor($(window).width()/boxWidth); //计算一排摆放个数
	var boxArr=[];
	box.each(function(index,value){ 
		var boxHeight=box.eq(index).height();
		if(index<num){
			boxArr[index]=boxHeight;
		}else
		{
			var minBoxHeight=Math.min.apply(null,boxArr);
			var minBoxIndex=$.inArray(minBoxHeight,boxArr);
			$(value).css({
				"position":"absolute",
				"top":minBoxHeight,
				"left":box.eq(minBoxIndex).position().left
			});
			boxArr[minBoxIndex]+=box.eq(index).height();
		}
	})
}