package com.zk.dsj.Iservice.impl;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.support.JdbcDaoSupport;

import com.zk.dsj.Iservice.IDsjDBExecuter;


public class DsjDBExecuter extends JdbcDaoSupport implements IDsjDBExecuter {

	@Override
	public Map<String,Object> queryForMap(String sql,String... args){
		
		return this.getJdbcTemplate().queryForMap(sql, args);
	}
	
	@Override
	public List<Map<String,Object>> queryForList(String sql,String... args){
		return this.getJdbcTemplate().queryForList(sql, args);
	}
	
	@Override
	public int update(String sql,String... args){
		return this.getJdbcTemplate().update(sql, args);
	}
	
	
	@Override
	public int queryForInt(String sql, String... args){
		return  this.getJdbcTemplate().queryForInt(sql, args);
	}
}
