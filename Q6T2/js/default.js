function chSetIndexColor(fontColor) {
	//设为首页
	//document.getElementById("SetIndex").className=skinColor; 
	var se=document.getElementById("SetIndex");
	se.style.backgroundColor=fontColor;

	//头部最右边的文字  
	document.getElementById("rightnew").style.color=fontColor;  
	//页面主体中的文字
	var a=document.getElementsByClassName("tcgreen");  
	for(var i=0;i<a.length;i++){
		a[i].style.color=fontColor;
	}
	//首页
	var sy_index=document.getElementsByClassName("first");
	sy_index[0].style.backgroundColor=fontColor;

	var sy_index2=document.getElementsByClassName("active");
	sy_index2[0].style.backgroundColor=fontColor;
	//首页上面的绿色边框
	var sy_index=document.getElementsByClassName("main-menus");
	sy_index[0].style.borderTop='2px solid '+fontColor;
	//权威推荐 qw_intr
	var se=document.getElementById("qw_intr");
	se.style.color=fontColor;

	//保存cookie
	//关闭浏览器后cookie失效，需要设置时间
	/*var oDate=new Date();
    oDate.setDate(oDate.getDate()+1);
    document.cookie='loadStyle='+fontColor+';expires='+oDate;*/

	//document.cookie=fontColor;

	removeCookie("loadStyle");
	//setCookie("loadStyle", fontColor, 1);  //chrome不适用
	
	if (window.localStorage) {
	    localStorage.setItem("loadStyle", fontColor);	
	} else {
	    setCookie("loadStyle", fontColor, 1);
	}
}

function loadSkinColor() {
	//var strCookie=document.cookie; 
	//alert(strCookie);
	/*if(strCookie.length>0)
	{
		chSetIndexColor(strCookie);
	}*/

	//var selColor=getCookie("loadStyle");
	//chSetIndexColor(selColor);


	var selColor = window.localStorage?localStorage.getItem("loadStyle"): getCookie("loadStyle");	
	chSetIndexColor(selColor);
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



