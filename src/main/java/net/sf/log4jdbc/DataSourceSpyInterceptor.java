package net.sf.log4jdbc;

import java.sql.Connection;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DataSourceSpyInterceptor implements MethodInterceptor {  
	
	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	  
    private RdbmsSpecifics rdbmsSpecifics = null;  
      
    private RdbmsSpecifics getRdbmsSpecifics(Connection conn) {  
        if(rdbmsSpecifics == null) {  
            rdbmsSpecifics = DriverSpy.getRdbmsSpecifics(conn);  
        }  
        return rdbmsSpecifics;  
    }  
      
    public Object invoke(MethodInvocation invocation) throws Throwable {  
        Object result = invocation.proceed();  
        if(SpyLogFactory.getSpyLogDelegator().isJdbcLoggingEnabled()) {  
            if(result instanceof Connection) {  
                Connection conn = (Connection)result;  
               /* DatabaseMetaData dbm = conn.getMetaData();
                
                logger.info("数据库URL:{}",dbm.getURL());*/
                return new ConnectionSpy(conn,getRdbmsSpecifics(conn));  
            }  
        }  
        return result;  
    }  
  
}  
