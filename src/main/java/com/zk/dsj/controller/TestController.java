package com.zk.dsj.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zk.dsj.Iservice.impl.DsjDBExecuter;
import com.zk.dsj.util.CodeEnum;
import com.zk.dsj.util.WebResult;

@Controller
@RequestMapping("test")
public class TestController {
	
	@Autowired
	private DsjDBExecuter dsjDBExecuter;
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home() {
		return "home";
	}
	
	@RequestMapping(value = "/testDb", method = RequestMethod.GET)
	public @ResponseBody
	WebResult<List<Map<String,Object>>> testHx() throws Exception {
		WebResult<List<Map<String,Object>>> result = new WebResult<List<Map<String,Object>>>();
		
		result.setResultObj(dsjDBExecuter.queryForList("select t.* from t_tyjs_dzfpyyqktjb_swjg  t limit 10"));
		result.setResultCode(CodeEnum.SUCCESS.getCode());
		return result;
	}

}
