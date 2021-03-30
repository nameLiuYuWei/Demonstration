function get_options(da){
	
	var kg="<option value=''></option>";
	var str=kg;
	for ( var k = 0; k < da.length; k++) {
	  var dm="",mc="";
	  if(da[k].dm!=undefined )
		  dm=da[k].dm;
	  else
		  dm=da[k].DM;
	  if(da[k].mc!=undefined )
		  mc=da[k].mc;
	  else
		  mc=da[k].MC
	  str=str+"<option value='"+dm+"'' >"+mc+"</option>" 
	}
	return str;
}




function getParameter(param)
{
 var query = window.location.search;
 var iLen = param.length;
 var iStart = query.indexOf("?"+param+"=");
 if (iStart == -1)
 {
	 iStart = query.indexOf("&"+param+"=");
	 if (iStart == -1)
	  return "";
 }
 
 iStart += iLen +2;
 var iEnd = query.indexOf("&", iStart);
 try{
	 if(iEnd == -1)
	  return gjzcl(decodeURI(query.substring(iStart)));
 }catch(e){
	 return gjzcl(query.substring(iStart));
 }
 try{
	 return gjzcl(decodeURI(query.substring(iStart, iEnd)));
 }catch(e){
	 return gjzcl(query.substring(iStart, iEnd));
 }
}


function isreal(thestr) {
	if ((thestr=="0.00")||(thestr=="0")||(thestr=='')) {
		return 0;
	}
	var dotlst=thestr.indexOf(".");
	var dotend=thestr.length;
	if ((dotlst==-1)||(dotend - dotlst<=3)) {
		return thestr;
	}
	else {
		var dot2nd=thestr.indexOf(".");
		var intpart=thestr.substring(0, dot2nd+3);
		var decpart=thestr.substring(dot2nd+3,dot2nd+4);
		if(parseInt(decpart)>=5) {
			decpart="0.01";
			var thestr1=parseFloat(intpart);
			if(thestr1>0) {
				thestr1=thestr1+parseFloat(decpart);
			}
			else {
				thestr1=thestr1-parseFloat(decpart);
			}
			thestr=String(thestr1).substring(0,dot2nd+3);
		}
		else {
			thestr=intpart;
		}
		return thestr;
	}
}



function IsNumber(string) { 
	var number; 
	var i_blank=string.indexOf(" ");
	if(string==null) {
		return false;
	}
	if(string.length==0) {
		return false;
	}
	if(i_blank!=-1) {
		return false;
	}
	number = new Number(string); 
	if(isNaN(number)) {
		return false; 
	}
	else {
		return true; 
	}
}
function IsDate(string)
{
 var b_rtn=true;
 var i_ln;
 var sub_rq;  
 var str_rq;
  if(string.length!=8)
 {
   return false;
 }
 for(var i=0;i<8;i++)
 {
   sub_rq=string.substring(i,i+1);
   str_rq=String(sub_rq);
   if(!IsNumber(str_rq))
   {
    b_rtn=false;
    return b_rtn;
   }
 }
 var sub_mm1=string.substring(4,6);
 var sub_day1=string.substring(6,8);
 
 var sub_mm=parseInt(sub_mm1,10);
 var sub_day=parseInt(sub_day1,10);
 if(sub_mm<1||sub_mm>12)
  {
    b_rtn=false;
    return b_rtn;
   }
 if(sub_day<1||sub_day>31)
  {
    b_rtn=false;
    return b_rtn;
  }

  return b_rtn;
}
function IsInt(string) { 
	var number; 
	var i_blank=string.indexOf(" ");
	if (string==null) {
		return false;
	}
	if(string.length==0) {
		return false; 
	}
	if(i_blank==0) {
		return false; 
	}
	number = new Number(string); 
	if(isNaN(number)) {
		return false;
	}
	else {
		if(number>=0) {
			var dotlst=string.indexOf(".");
			if(dotlst==-1) {
				return true;
			}
		}
		else {
			return false;
		}
	}
}

function enterdown (column) {
	try{
		var columnobject =column;
		var obj = document.form1.elements[columnobject];
		if (event.keyCode==13 && (obj!=null)) {
			if ((obj.type=="text") && (!obj.disabled)) {
				obj.focus();
				obj.select();
			}
		}
	}catch(e){
	}
}

function changSE (JEcol,SEcol) {
	
	var JE=parseFloat(JEcol.value);
	var SE=parseFloat(SEcol.value);
	if (JE<0) JE = 0 - JE;
	if (SE<0) SE = 0 - SE;
	if( (JE*0.18)<SE )
	{
	  alert("税额不能超过金额的17%，请重新输入!");
	  SEcol.value="0.00";
	}	
}

function changJE (JEcol,SEcol) {
	
	var JE=parseFloat(JEcol.value);
	var SE=parseFloat(SEcol.value);
	if (JE<0) JE = 0 - JE;
	if (SE<0) SE = 0 - SE;
	if( (JE*0.18)<SE )
	{
	  alert("税额不能超过金额的17%，请重新输入!");
	  SEcol.value="0.00";
	  JEcol.value="0.00";
	}	
}
//验证String中不能含有特殊字符
function checkString(str)
{
	var reStr = /[＜＞《》〈〉<<>>&＆]/;
	var str1=str.value
	if(str1.match(reStr))
	{
		alert('字符串中不能含有<,>,&等特殊字符！');
		str.value="";
		return false;
	}
	else
	{
		//alert('字符串符合要求！');
		return true;
	}
}

String.prototype.trim = function() { 
return this.replace(/(^\s*)|(\s*$)/g, ""); 
} 
 
String.prototype.ltrim = function() { 
return this.replace(/(^\s*)/g, ""); 
} 
 
String.prototype.rtrim = function() { 
return this.replace(/(\s*$)/g, ""); 
} 

//大于等于0
function DyDyZero(obj){
	if(obj.value<0){
		alert("本项数值>=0");
		obj.value=0.00;
	};

}



//除法     百分比显示
function _div(v1,v2){
	if(v2==0)
		return 0;
	else 
		return round2(v1*100/v2,4)
}

//是否为正整数
function isPositiveInteger(s){
  var re = /^[0-9]*[0-9][0-9]*$/ ;
  if(!re.test(s)){

	       return false;
	   }return true;
 
} 

//判断年
function validateYear(obj){
	var year = new Number(obj); 
	   if(!/^\d{4}$/.test(year)){

	       return false;
	   }return true;
	}

//| 日期有效性验证 
//| 格式为：YYYY-MM-DD或YYYY/MM/DD  
function IsValidDate(DateStr){ 
  var sDate=DateStr.replace(/(^\s+|\s+$)/g,'');//去两边空格; 
  if(sDate==''){ 
    return true; 
  } 
  //如果格式满足YYYY-(/)MM-(/)DD或YYYY-(/)M-(/)DD或YYYY-(/)M-(/)D或YYYY-(/)MM-(/)D就替换为'' 
  //数据库中，合法日期可以是:YYYY-MM/DD(2003-3/21),数据库会自动转换为YYYY-MM-DD格式 
  var s=sDate.replace(/((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/g,''); 
  if(s==''){//说明格式满足YYYY-MM-DD或YYYY-M-DD或YYYY-M-D或YYYY-MM-D 
   /* var t=new Date(sDate.replace(/\-/g,'/')); 
    var ar=sDate.split(/[-/:]/); 
    if(ar[0]!=t.getYear()||ar[1]!=t.getMonth()+1||ar[2]!=t.getDate()){//alert('错误的日期格式！格式为：YYYY-MM-DD或YYYY/MM/DD。注意闰年。'); 
      return false; 
    } */
  }else{//alert('错误的日期格式！格式为：YYYY-MM-DD或YYYY/MM/DD。注意闰年。'); 
    return false; 
  } 
  return true; 
}  

function FormatDate (strTime) {
    var date = new Date(strTime);
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}

//自动解析传递过来的数学表达式,格式为number_1=number_2**** ,此函数不能自动识别括号和加减与乘除混合
function sum_result(str_exp,hz) 
{
   var str_tem="";
   var a=str_exp.indexOf("=");
   var str=str_exp.substr(a+1);
   var li_temp_v1=0;
   var li_temp_v2=0;
   var char_temp="=";
   for(var i=0;i<str.length;i++)
   {
     if(IsNumber(str.charAt(i)))
     {
       str_tem=str_tem+str.charAt(i);
     }else{
    	 
    	   if($("#xx_0"+str_tem+"_"+hz).size()>0)
    		   li_temp_v2=$("#xx_0"+str_tem+"_"+hz).val();
           if(char_temp=="=")
           {
              
               li_temp_v1=round2(li_temp_v1+li_temp_v2*1);

           }else if(char_temp=="+"){

               li_temp_v1=round2(li_temp_v1+li_temp_v2*1);
           }else if(char_temp=="-"){

               li_temp_v1=round2(li_temp_v1-li_temp_v2*1);
           }else if(char_temp=="*"){

               li_temp_v1=round2(li_temp_v1*li_temp_v2);
           }else if(char_temp=="/"){

               if(li_temp_v2==0)
            	   li_temp_v1=0;
               else
                  li_temp_v1=round2(li_temp_v1/li_temp_v2);
              
           }
           str_tem="";
            char_temp=str.charAt(i);
     }
     if(i==str.length-1)
     {
	  	   if($("#xx_0"+str_tem+"_"+hz).size()>0)
			   li_temp_v2=$("#xx_0"+str_tem+"_"+hz).val();
	       if(char_temp=="=")
	       {
	          
	           li_temp_v1=round2(li_temp_v1+li_temp_v2*1);
	
	       }else if(char_temp=="+"){
	
	           li_temp_v1=round2(li_temp_v1+li_temp_v2*1);
	       }else if(char_temp=="-"){
	
	           li_temp_v1=round2(li_temp_v1-li_temp_v2*1);
	       }else if(char_temp=="*"){
	
	           li_temp_v1=round2(li_temp_v1*li_temp_v2);
	       }else if(char_temp=="/"){
	
	           if(li_temp_v2==0)
	        	   li_temp_v1=0;
	           else
	              li_temp_v1=round2(li_temp_v1/li_temp_v2);
	          
	       }
     }
 
   }
   var columnobject="xx_0"+str_exp.substr(0,a)+"_"+hz;
   $("#"+columnobject).val(li_temp_v1)
}
function CA(obj){
	var nam=obj.name;
	var ss=document.getElementsByName(nam);
	var a=0;
	for(var i=0;i<ss.length;i++){
		if(ss[i]==obj)a=i;
	}
	return (a);
}



function getMapString(string){
	if(typeof(string)=="undefined"||string==null){
		return "";
	}
	return string;
}
function getRqFormat(str){
	var str2=str.toString();
	if((str2).indexOf("-")>0){
		str=str2.replace(/-/g, "/");
	}
	var date=new Date(str/1);
	var month='';
	var day='';
	if((date.getMonth()+"").length==1){
		 month="0"+(date.getMonth()+1);
		if(date.getMonth()==9){
			month=(date.getMonth()+1);
		}
	}else{
		 month=(date.getMonth()+1)+"";
	}
	if((date.getDate()+"").length==1){
		 day="0"+(date.getDate());
	}else{
		 day=date.getDate()+"";
	}
	
	return date.getFullYear()+"-"+month+"-"+day;
	
}


function IsNumber(string){
	var number;
	if(string==null){
		return false;
	}
	if(string.length==0){
		return false;
	}
	number = new Number(string);
	if(isNaN(number)){
		return false;
	}else{
		return true;
	}
}

//查询税务机关
function getSwjgTree(){
	var url = "/"+webserivesname+"/sbdm/querySwjgDmTree"+dostr;
	$.ajax({
		url : url,
		dataType : 'json',    
	    contentType:"application/json",
		type : 'get',
		async : false,
		success : function(response) {
			if(response.resultCode=="000000"){
				var optionobj = response.resultObj.resultObj;
				var options_swjg = {
					treeId:"swjgtree",
					async: {
						enable: false
					},
					tree_data:optionobj,
					callback:{  
		                onClick:function(event, treeId, treeNode) {//点击菜单时进行的处理  
		                    $("#swjgdm").val(treeNode.MC);
		                    $("#swjg_dm").val(treeNode.DM);
		                }  
		            },
					
				}
				$("#swjgdm").zkTree(options_swjg);
			}
			
		},
		error : function() {
			bootbox.alert("获取基础信息异常！");
		}
	});
}

//获取登录信息
function getdlxx(){
	var url = "/"+webserivesname+"/sbdm/queryDlxx"+dostr;
	$.ajax({
		url : url,
		dataType : 'json',    
        contentType:"application/json",
		type : 'get',
		async : false,
		success : function(response) {
			if (response.resultCode == '000000') {
				var optionobj = /*JSON.parse(*/response.resultObj/*)*/;

        		swjg_dm = optionobj.swjg_dm;
        		swjgmc = optionobj.swjgmc;
        		
        		$("#swjgdm").val(swjgmc);
                $("#swjg_dm").val(swjg_dm);
                
                getSwjgTree();
			}/*else{
				window.parent.location="/"+webserivesname+"/pages/"+response.resultObj;
			}*/
		}
	});
	
}




//获取当天时间
function getToday() {
	var date = new Date();
	
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

//获取当年第一天时间，格式YYYY-MM-DD
function getFirstDayOfYear() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = "01";
    var strDate = "01";
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}