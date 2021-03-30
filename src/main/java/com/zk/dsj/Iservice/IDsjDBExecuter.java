package com.zk.dsj.Iservice;

import java.util.List;
import java.util.Map;

public interface IDsjDBExecuter {
	
	public Map<String,Object> queryForMap(String sql,String... args);
	public List<Map<String,Object>> queryForList(String sql,String... args);
	public int update(String sql,String... args);
	public int queryForInt(String sql, String... args);


}
