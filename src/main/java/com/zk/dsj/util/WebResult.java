/**
 * Project Name:CMBMPay
 * File Name:WebResult.java
 * Package Name:com.zk.yn.cmbm.tax.util
 * Date:2018-6-1下午5:04:21
 * Copyright (c) 2018, chenzhou1025@126.com All Rights Reserved.
 *
*/

package com.zk.dsj.util;

import java.io.Serializable;

/**
 * ClassName:WebResult <br/>
 * Function: TODO ADD FUNCTION. <br/>
 * Reason:	 TODO ADD REASON. <br/>
 * Date:     2018-6-1 下午5:04:21 <br/>
 * @author   Administrator
 * @version  
 * @since    JDK 1.6
 * @see 	 
 */
public class WebResult<T> implements Serializable{
	/**
	 * serialVersionUID:TODO(用一句话描述这个变量表示什么).
	 * @since JDK 1.6
	 */
	private static final long serialVersionUID = 1L;
	private String resultCode;
	private String resultMsg;
	private T resultObj;
	
	
	

	public String getResultMsg() {
		return resultMsg;
	}
	public void setResultMsg(String resultMsg) {
		this.resultMsg = resultMsg;
	}
	public WebResult() {
		this.resultCode= CodeEnum.ERROR.getCode();
	}
	public String getResultCode() {
		return resultCode;
	}
	public void setResultCode(String resultCode) {
		this.resultCode = resultCode;
	}
	public T getResultObj() {
		return resultObj;
	}
	public void setResultObj(T resultObj) {
		this.resultObj = resultObj;
	}
	
	

}

