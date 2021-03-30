package com.zk.dsj.controller;

import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.Transformer;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.zk.dsj.Iservice.impl.DsjDBExecuter;
import com.zk.dsj.util.CodeEnum;
import com.zk.dsj.util.WebResult;

@Controller
@RequestMapping("sum")
public class IndexController {
	
	private final Logger logger = LoggerFactory.getLogger(getClass());	

	
	@Autowired
	private DsjDBExecuter dsjDBExecuter;
	
	@Value("classpath:line.json")
	private Resource lineDataFile;
	
	@Value("classpath:column.json")
	private Resource columnDataFile;
	
	@Autowired
	@javax.annotation.Resource(name="zbMap")
	private Map<String, String> zbMap;
	
	
	@Autowired
	@javax.annotation.Resource(name="fpMap")
	private Map<String, String> fpMap;
	
	

	
	@RequestMapping(value = "/testLineChartData", method = RequestMethod.GET)
	public @ResponseBody
	WebResult<JSONArray> testLineChartData() throws Exception {
		
		WebResult<JSONArray> result = new WebResult<JSONArray>();
		logger.info("zbMap=={}",JSONObject.toJSONString(zbMap));
		result.setResultObj(JSONObject.parseArray(IOUtils.toString(lineDataFile.getInputStream())));
		result.setResultCode(CodeEnum.SUCCESS.getCode());
		return result;
	}
	
	
	@RequestMapping(value = "/testColumnChartData", method = RequestMethod.GET)
	public @ResponseBody
	WebResult<JSONArray> testColumnChartData() throws Exception {
		WebResult<JSONArray> result = new WebResult<JSONArray>();
		result.setResultObj(JSONObject.parseArray(IOUtils.toString(columnDataFile.getInputStream())));
		result.setResultCode(CodeEnum.SUCCESS.getCode());
		return result;
	}
	
	
/*	@RequestMapping(value = "/getLineChartData", method = RequestMethod.GET)
	public @ResponseBody
	WebResult<List<Map<String,Object>>> getLineChartData() throws Exception {
		WebResult<List<Map<String,Object>>> result = new WebResult<List<Map<String,Object>>>();
		
		result.setResultObj(dsjDBExecuter.queryForList("select '开具' zbbm,ny, SUM( ZKJS)  zkjs  from t_tyjs_dzfpyyqktjb_swjg where zbbm='DZPJ002' group by ny "
				+ "UNION  select '报销' zbbm,ny, SUM( ZKJS)  zkjs  from t_tyjs_dzfpyyqktjb_swjg where zbbm='DZPJ003' group by ny "
				+ "UNION  select '归档' zbbm,ny, SUM( ZKJS)  zkjs from t_tyjs_dzfpyyqktjb_swjg where zbbm='DZPJ004' group by ny"));
		result.setResultCode(CodeEnum.SUCCESS.getCode());
		return result;
	}*/
	
	
	@RequestMapping(value = "/getLineChartData", method = RequestMethod.GET)
	public @ResponseBody
	WebResult<List<Map<String,Object>>> getLineChartData() throws Exception {
		WebResult<List<Map<String,Object>>> result = new WebResult<List<Map<String,Object>>>();
		
		List<Map<String,Object>> list =dsjDBExecuter.queryForList("select * FROM ( select  pzlx, ny,SUM(fs_dz) dz,SUM((fs_zz+fs_dz)) zl,round(100*SUM(fs_dz) /SUM((fs_zz+fs_dz)) ,2) wcl  from t_tyjs_dzfpyyqktjb_swjg where zbbm='DZPJ002'   GROUP BY pzlx,ny"
				+ " ) a order by pzlx,ny");
		Transformer bm2mcFormer = new Transformer() {
			@Override
			public Object transform(Object input) {
				Map<String,Object> obj = (Map<String,Object>)input;
				obj.put("pzlx_mc", fpMap.get(obj.get("pzlx")));
				return obj;
			}
		};
		CollectionUtils.transform(list, bm2mcFormer);
		
		result.setResultObj(list);
		result.setResultCode(CodeEnum.SUCCESS.getCode());
		return result;
	}
	
	
@RequestMapping(value = "/getColumnChartData", method = RequestMethod.GET)
	public @ResponseBody
	WebResult<List<Map<String,Object>>> getColumnChartData()  {
		WebResult<List<Map<String,Object>>> result = new WebResult<List<Map<String,Object>>>();
		List<Map<String,Object>> list=	dsjDBExecuter.queryForList("SELECT '大企业' mc,  sum(case when substr(djzclx_dm,1,1) in('1','2','3') then hs_dz else 0 end)  hs "
				+ " FROM   t_tyjs_dzfpyyqktjb_swjg  a where zbbm in('DZPJ003')  "
				+ "and NY>=concat(DATE_FORMAT(CURDATE(),'%Y'),'01') and  ny<=DATE_FORMAT(CURDATE(),'%Y%m') "
				+ "UNION select '小企业' mc,  sum(case when substr(djzclx_dm,1,1) in('4') then hs_dz else 0 end)  hs  "
				+ "FROM   t_tyjs_dzfpyyqktjb_swjg  a where zbbm in('DZPJ003')  "
				+ "and NY>=concat(DATE_FORMAT(CURDATE(),'%Y'),'01') and  ny<=DATE_FORMAT(CURDATE(),'%Y%m') "
				+ "UNION   SELECT '机关单位' mc,  sum(case when substr(djzclx_dm,1,1) in('5','9') then hs_dz else 0 end)  hs "
				+ "FROM   t_tyjs_dzfpyyqktjb_swjg  a where zbbm in('DZPJ003')  "
				+ "and NY>=concat(DATE_FORMAT(CURDATE(),'%Y'),'01') and  ny<=DATE_FORMAT(CURDATE(),'%Y%m')");
/*		Transformer bm2mcFormer = new Transformer() {
			@Override
			public Object transform(Object input) {
				Map<String,Object> obj = (Map<String,Object>)input;
				obj.put("zbmc", zbMap.get(obj.get("zbbm")));
				return obj;
			}
		};
		CollectionUtils.transform(list, bm2mcFormer);*/
		result.setResultObj(list);
		result.setResultCode(CodeEnum.SUCCESS.getCode());
		return result;
	}
	
/*@RequestMapping(value = "/getPieChartData", method = RequestMethod.GET)
	public @ResponseBody
	WebResult<List<Map<String,Object>>> getPieChartData() throws Exception {
		WebResult<List<Map<String,Object>>> result = new WebResult<List<Map<String,Object>>>();
		List<Map<String,Object>> list=	dsjDBExecuter.queryForList("select SUM(ZKJS)  kjhs,zbbm from t_tyjs_dzfpyyqktjb_swjg  GROUP BY zbbm");
		Transformer bm2mcFormer = new Transformer() {
			@Override
			public Object transform(Object input) {
				Map<String,Object> obj = (Map<String,Object>)input;
				obj.put("zbmc", zbMap.get(obj.get("zbbm")));
				return obj;
			}
		};
		CollectionUtils.transform(list, bm2mcFormer);
		result.setResultObj(list);
		result.setResultCode(CodeEnum.SUCCESS.getCode());
		return result;
	}*/

}
