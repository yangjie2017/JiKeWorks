var btnSaveNum=document.getElementById("btnSaveNum");//存储
var btnPickNum=document.getElementById("btnPickNum");//取存
var btnTotalNum=document.getElementById("btnTotalNum");//累存
var btnTimesNum=document.getElementById("btnTimesNum");//积存
var btnClearNum=document.getElementById("btnClearNum");//清存
var btnDel=document.getElementById("btnDel");//回退
var btnClearAll=document.getElementById("btnClearAll");//全清
var btnClearInput=document.getElementById("btnClearInput");//清屏
var btnChangeNum=document.getElementById("btnChangeNum");//正负数
var btnReciprocalNum=document.getElementById("btnReciprocalNum");//倒数

var btnDivide=document.getElementById("btnDivide");//除
var btnPersent=document.getElementById("btnPersent");//取余
var btnTimes=document.getElementById("btnTimes");//乘
var btnSqrtNum=document.getElementById("btnSqrtNum");//根号 开方
var btnMinus=document.getElementById("btnMinus");//减
var btnEqual=document.getElementById("btnEqual");//等于
var btnDot=document.getElementById("btnDot");//小数点
var btnPlus=document.getElementById("btnPlus");//加
	
function addHandler(btn,checkfun){
	if(btn.addEventListener){
		btn.addEventListener("click",checkfun,false);
	}else if(btn.attachEvent){
		btn.attachEvent("onclick",checkfun);
	}else{
		btn.onclick=checkfun;
	}
}

addHandler(btnSaveNum,saveNum);
addHandler(btnPickNum,pickNum);
addHandler(btnTotalNum,totalNum);
addHandler(btnTimesNum,timesNum);
addHandler(btnClearNum,clearNum);
addHandler(btnDel,del);
addHandler(btnClearAll,clearAll);
addHandler(btnClearInput,clearInput);
addHandler(btnChangeNum,changeNum);
addHandler(btnReciprocalNum,reciprocalNum);
addHandler(btnDivide,divide);
addHandler(btnPersent,persent);
addHandler(btnTimes,times);
addHandler(btnSqrtNum,sqrtNum);
addHandler(btnMinus,minus);
addHandler(btnEqual,equal);
addHandler(btnDot,dot);
addHandler(btnPlus,plus);

/*function addHandler(btn,checkfun(n)){
	if(btn.addEventListener){
		btn.addEventListener("click",checkfun(n),false);
	}else if(btn.attachEvent){
		btn.attachEvent("onclick",checkfun(n));
	}else{
		btn.onclick=checkfun(n);
	}
}

var btnZero=document.getElementById("btnZero");//0
addHandler(btnZero,inputnum(0));*/

var saveInputNum=0; //全局变量 用来保存存储按钮的操作
//存储
function saveNum() {
	var inputtxt=document.getElementById("showinpput").value;
	if(Number(inputtxt)!=0)
	{
		saveInputNum=inputtxt;
		operate=1;
		document.getElementById("showM").style.display="block";  
		//document.getElementById("showM").style.visibility="visible"; 
	}
}
//取存
function pickNum(){
	if(saveInputNum!=0)
	{
		document.getElementById("showinpput").value=saveInputNum;
		operate=1;
	}else
	{
		document.getElementById("showinpput").value="0";
		operate=1;
	}
}
//累存
function totalNum(){
	var inputtxt=document.getElementById("showinpput").value;
	if(!isNaN(inputtxt)){
	 	if(Number(inputtxt)!=0) {
	 		saveInputNum=Number(saveInputNum)+Number(inputtxt);
	 		operate=1;
	 	}
	}
}
//积存
function timesNum(){
	var inputtxt=document.getElementById("showinpput").value;
	if(!isNaN(inputtxt)){
	 	if(Number(inputtxt)!=0 && Number(saveInputNum)!=0) {
	 		saveInputNum=Number(saveInputNum)*Number(inputtxt);
	 		operate=1;
	 	}else
	 	{
	 		saveInputNum=Number(inputtxt); //如果saveInputNum为0 （未保存数字），则将当前数字保存到内存中
	 		operate=1;
	 	}
 	}
}
//清存
function clearNum(){
	saveInputNum=0; 
	document.getElementById("showM").style.display="none"; 
}

//全清
function clearAll(){
	saveInputNum=0; 
	document.getElementById("showinpput").value=0;
	document.getElementById("showM").style.display="none"; 
}



var num=0; //存放运算的第一个数（包括将计算结果作为第一个数运算的情况）
var result=0;  //运算结果
var numshow="0";  //运算结果，显示在显示屏（文本框）的结果
var operate=0; //存放输入的状态，区分是操作符之前输入还是之后输入
var calcul=0; //存放运算符 
var quit=0; //判断是否重复按钮的标识

//输入数字
function inputnum(selnum)
{
	var inputtxt=document.getElementById("showinpput").value;
	inputtxt=(inputtxt!="0") ? ((operate==0) ? inputtxt : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 用于记录两次输入
	inputtxt=inputtxt+selnum;
	document.getElementById("showinpput").value=inputtxt;
	operate=0;
	quit=0; 
}

//加法
function plus(){
	calculate(); 
	operate=1; 
	calcul=1; 
}
//减法 
function minus(){ 
	calculate(); 
	operate=1; 
	calcul=2; 
} 
//乘法
function times(){  
	calculate(); 
	operate=1; 
	calcul=3; 
} 
//除法 
function divide(){ 
	calculate(); 
	operate=1; 
	calcul=4; 
} 
//求余 
function persent(){ 
	calculate(); 
	operate=1; 
	calcul=5; 
} 

//等于
function equal(){ 
	calculate();  
	operate=1; 
	num=0; 
	result=0; 
	numshow="0"; 
} 

//计算
function calculate(){ 
	numshow=Number(document.getElementById("showinpput").value);   
		if(num!=0 && quit!=1){ //判断前一个运算数是否为零以及重复按键的状态 
			switch(calcul){ 
				case 1:
					//result=num+numshow;
					result=FloatAdd(num,numshow);
					break; 
				case 2:
					//result=num-numshow;
					result=FloatSub(num,numshow);
					break; 
				case 3:
					//result=num*numshow;
					result=FloatMul(num,numshow)
					break; 
				case 4:
					if(numshow!=0){
						//result=num/numshow;
						result=FloatDiv(num,numshow);
					}
					else{
						document.getElementById("showinpput").value="被除数不能为零！"; 
						return;
					} 
					break; 
				case 5:
					if(numshow!=0){
						result=num%numshow;
					}
					else{
						document.getElementById("showinpput").value="被余数不能为零！"; 
						return;
					} 

					break; 
			} 
		quit=1;  //调用一次计算方法后 重复按键的状态设置为1
	} 
	else{ 
		result=numshow; 
		quit=1;  //调用一次计算方法后 重复按键的状态设置为1
	} 
	numshow=String(result); 
	document.getElementById("showinpput").value=numshow; 
	num=result; //存储当前值 
} 

//将当前数转为正数或者负数
function changeNum(){
	var inputtxt=document.getElementById("showinpput").value;
	if(Number(inputtxt)<0)
	{
		document.getElementById("showinpput").value=Math.abs(inputtxt);
		operate=1;
	}else
	{
		document.getElementById("showinpput").value=-(inputtxt);
		operate=1;
	}			
}

//计算倒数
function reciprocalNum(){
	var inputtxt=document.getElementById("showinpput").value;
	var reci=1/Number(inputtxt);
	if(reci=="Infinity"){
		document.getElementById("showinpput").value="正无穷";
		operate=1;
	}else{
		document.getElementById("showinpput").value=reci;
		operate=1;
	}
}

//计算输入字符的开方
function sqrtNum(){
	var inputtxt=document.getElementById("showinpput").value;
	if(Number(inputtxt)>0){
		var reci=Math.sqrt(inputtxt);
		document.getElementById("showinpput").value=reci;
		operate=1;
	}
	else
	{
		document.getElementById("showinpput").value="请输入正数";
		operate=1;
	}
}

//输入. 小数点
function dot(){ 
	var inputtxt=document.getElementById("showinpput").value;
	for(i=0; i<=inputtxt.length;i++){ 
		if(inputtxt.substr(i,1)==".")
		 	return false; 
	} 
	inputtxt=inputtxt + "."; 
	document.getElementById("showinpput").value=inputtxt; 
} 

//清屏 :讲文本框（显示屏）中的数值设为0
function clearInput(){
	var inputtxt=document.getElementById("showinpput");
	inputtxt.value=0;
}

//回退 删除最后一个输入
function del(){ 
	var str=String(document.getElementById("showinpput").value); 
	if(str!="0")
	{
		str=str.substr(0,str.length-1); 
		if(str.length==0){
			str="0";
		}
	}
	document.getElementById("showinpput").value=str; 
} 

//屏蔽非数字和非退格符,48-57是大键盘的数字键，96-105是小键盘的数字键，8是退格符←
function GetInput(){
    var k = event.keyCode;  
    if ((k <= 57 && k >= 48) || (k <= 105 && k >= 96) || (k== 8)){
     return true;
    } else {
     return false;
    }
}

/*加减乘除*/
function FloatAdd(arg1,arg2){
    var r1,r2,m;
    try{
    	r1=arg1.toString().split(".")[1].length;
    }catch(e){
    	r1=0;
    }
    try{
    	r2=arg2.toString().split(".")[1].length;
    }catch(e)
    {
    	r2=0;
    }
    m=Math.pow(10,Math.max(r1,r2));
    return (arg1*m+arg2*m)/m;
}

function FloatSub(arg1,arg2){
    var r1,r2,m,n;
    try{
    	r1=arg1.toString().split(".")[1].length;
    }catch(e){
    	r1=0;
    }
    try{
    	r2=arg2.toString().split(".")[1].length;
    }catch(e){
    	r2=0;
    }
    m=Math.pow(10,Math.max(r1,r2));
    n=(r1>=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(n);
}

function FloatMul(arg1,arg2)
{
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{
    	m+=s1.split(".")[1].length;
    }catch(e){

    }
    try{
    	m+=s2.split(".")[1].length;
    }catch(e){

    }
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}

function FloatDiv(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{
    	t1=arg1.toString().split(".")[1].length;
    }catch(e){

    }
    try{
    	t2=arg2.toString().split(".")[1].length;
    }catch(e){

    }
    with(Math){
        r1=Number(arg1.toString().replace(".",""));
        r2=Number(arg2.toString().replace(".",""));
        return (r1/r2)*pow(10,t2-t1);
    }
}