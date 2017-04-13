$(document).ready(function(){
	//头部导航
	$('.coll-1').mouseover(function(e) {
         $(".page_1").css('display','block');
    });
    $('.coll-1').mouseout(function(e) {
         $(".page_1").css('display','none');
    });
    $('.coll-2').mouseover(function(e) {
         $(".page_2").css('display','block');
    });
    $('.coll-2').mouseout(function(e) {
         $(".page_2").css('display','none');
    });
    $('.coll-3').mouseover(function(e) {
         $(".page_3").css('display','block');
    });
    $('.coll-3').mouseout(function(e) {
         $(".page_3").css('display','none');
    });
});