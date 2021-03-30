/**
 * Project Name:CMBMPay
 * File Name:ReturnCodeEnum.java
 * Package Name:com.zk.yn.cmbm.tax.util
 * Date:2018-6-1下午5:06:43
 * Copyright (c) 2018, chenzhou1025@126.com All Rights Reserved.
 *
*/

package com.zk.dsj.util;
/**
 * ClassName:ReturnCodeEnum <br/>
 * Function: TODO ADD FUNCTION. <br/>
 * Reason:	 TODO ADD REASON. <br/>
 * Date:     2018-6-1 下午5:06:43 <br/>
 * @author   Administrator
 * @version  
 * @since    JDK 1.6
 * @see 	 
 */
public enum CodeEnum {
     ERROR("999999"),  SUCCESS("000000");
     private String code;
     private CodeEnum(String code){
    	 this.code=code;
     }
     public String getCode(){
    	 return this.code;
     }
}

