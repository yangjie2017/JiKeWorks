function returnResult(){
	var Num1=document.getElementById("Num1").value.trim();//获取用户输入，请清除空格
	var Num2=document.getElementById("Num2").value.trim();
	var Symbol=document.getElementById("Symbol").value.trim();
	
	var a=null; //用来装计算结果的变量
	var b=true; //用来判断是否正常运算，如果最后为true，表示正常运算返回结果；如果为false，则表示不能正常运算，返回对应的提示信息
	var result=document.getElementById("c_result"); //用来显示结果或者提示信息

	if(!Num1 || !Num2) //如果用户没有输入，提示用户(包括输入空格的情况)
	{
		b=false;
		result.innerText = "请输入计算需要的两个数值!";
	}
	else if(Symbol=="0")
	{
		b=false;
		result.innerText = "请选择运算符！";
	}
	else
	{
		if(isNaN(Num1) || isNaN(Num2)) //用户有输入，需要判断是否为数字
		{
			b=false;
			result.innerText = "进行运算的两个数必须为数字！";
		}
		else
		{
			if(Symbol=="+")
			{
				a=parseFloat(Number(Number(Num1)+Number(Num2)).toFixed(5)); 
			}
			else if(Symbol=="-")
			{
				//a=Number(Num1-Num2);
				a=parseFloat(Number(Num1)-Number(Num2)); 
			}
			else if(Symbol=="*")
			{
				//a=Number(Num1*Num2);
				a=parseFloat(Number(Num1)*Number(Num2)); 
			}
			else if(Symbol=="/")
			{
				if(Number(Num2)==0){
					b=false;
					result.innerText = "被除数不能为0，请重新输入！";
				}
				else{
					//a=Number(Num1/Num2);
					a=parseFloat(Number(Num1)/Number(Num2)); 
				}
			}
			else if(Symbol=="%")
			{
				if(Number(Num2)==0){
					b=false;
					result.innerText = "进行取余运算时，第二个数不能为0，请重新输入！";
				}
				else{
					//a=Number(Num1%Num2);
					a=parseFloat(Number(Num1)%Number(Num2)); 
				}
			}
		}
	}

	if(b)
	{
		result.innerText = "运算结果为："+a;
	}
}























/*function returnResult(){
	var Num1=document.getElementById("Num1").value.trim();//获取用户输入，请清除空格
	var Num2=document.getElementById("Num2").value.trim();
	var Symbol=document.getElementById("Symbol").value.trim();
	
	var a=null; //用来装计算结果的变量
	var b=true; //用来判断是否正常运算，如果最后为true，表示正常运算返回结果；如果为false，则表示不能正常运算，返回对应的提示信息
	var result=document.getElementById("c_result"); //用来显示结果或者提示信息

	if(!Num1 || !Num2 ||!Symbol) //如果用户没有输入，提示用户(包括输入空格的情况)
	{
		b=false;
		result.innerText = "请正确输入计算需要的三个数值！";
	}
	else
	{
		if(isNaN(Num1) || isNaN(Num2)) //用户有输入，需要判断是否为数字
		{
			b=false;
			result.innerText = "进行运算的两个数必须为数字！";
		}
		else
		{
			if(Symbol=="+" || Symbol=="加")
			{
				a=parseFloat(Num1)+parseFloat(Num2);
				//result.innerText = "运算结果为："+a;
			}
			else if(Symbol=="-" || Symbol=="减")
			{
				a=parseFloat(Num1)-parseFloat(Num2);
				//result.innerText = "运算结果为："+a;
			}
			else if(Symbol=="*" || Symbol=="乘")
			{
				a=parseFloat(Num1)*parseFloat(Num2);
				//result.innerText = "运算结果为："+a;
			}
			else if(Symbol=="/" || Symbol=="除")
			{
				if(parseFloat(Num2)==0){
					b=false;
					result.innerText = "被除数不能为0，请重新输入！";
				}
				else{
					a=parseFloat(Num1)/parseFloat(Num2);
					//result.innerText = "运算结果为："+a;
				}
			}
			else if(Symbol=="%" || Symbol=="余")
			{
				if(parseFloat(Num2)==0){
					b=false;
					result.innerText = "执行取余运算时，第二个数不能为0，请重新输入！";
				}
				else{
					a=parseFloat(Num1)%parseFloat(Num2);
					//result.innerText = "运算结果为："+a;
				}
			}
			else
			{
				b=false;
				result.innerText = "请输入正确的运算符(\'+ - * / % \'或者加\' 减 乘 除 余\')！";
			}
		}
	}

	if(b)
	{
		result.innerText = "运算结果为："+a;
	}
}*/