function returnlevel(){
	var score=document.getElementById("stu_score").value;//获取用户输入的分数
	var result=document.getElementById("stu_level");

	if(!score.trim()) //如果用户没有输入，提示用户(包括输入空格的情况)
	{
		result.innerText = "请输入学员分数";
	}
	else{
		/*if(isNaN(score)) //用户有输入，需要判断是否为数字
		{
			result.innerText = "分数应该为数字";
		}
		else 
		{*/
			if(score>=0 && score<10){ //如果得分在0-10都为等级10
				//alert("该学员等级为10");
				result.innerText = "该学员为10等生";
			}
			else if(score>=10 && score<20){
				result.innerText = "该学员为9等生";
			}
			else if(score>=20 && score<30){
				result.innerText = "该学员为8等生";
			}
			else if(score>=30 && score<40){
				result.innerText = "该学员为7等生";
			}
			else if(score>=40 && score<50){
				result.innerText = "该学员为6等生";
			}
			else if(score>=50 && score<60){
				result.innerText = "该学员为5等生";
			}
			else if(score>=60 && score<70){
				result.innerText = "该学员为4等生";
			}
			else if(score>=70 && score<80){
				result.innerText = "该学员为3等生";
			}
			else if(score>=80 && score<90){
				result.innerText = "该学员为2等生";
			}
			else if(score>=90 && score<=100){
				result.innerText = "该学员为1等生";
			}
			else { 
				result.innerText = "请输入正确的分数（0-100的数字）";
			}
		/*}*/
	}
}