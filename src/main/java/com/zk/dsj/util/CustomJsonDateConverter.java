/**
 * Project Name:ZkxxPayWeb
 * File Name:CustomJsonDateConverter.java
 * Package Name:com.zk.dzswj.pay.util
 * Date:2019-1-2上午10:50:09
 * Copyright (c) 2019, chenzhou1025@126.com All Rights Reserved.
 *
*/

package com.zk.dsj.util;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializerProvider;
import org.codehaus.jackson.map.ser.CustomSerializerFactory;

/**
 * ClassName:CustomJsonDateConverter <br/>
 * Function: TODO ADD FUNCTION. <br/>
 * Reason:	 TODO ADD REASON. <br/>
 * Date:     2019-1-2 上午10:50:09 <br/>
 * @author   Administrator
 * @version  
 * @since    JDK 1.6
 * @see 	 
 */
public class CustomJsonDateConverter extends ObjectMapper {
    private final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	public CustomJsonDateConverter(){
		final CustomSerializerFactory factory = new CustomSerializerFactory();
		   factory.addGenericMapping(Date.class, new JsonSerializer<Date>(){
	            @Override
	            public void serialize(Date value,
	                                  JsonGenerator jsonGenerator,
	                                  SerializerProvider provider)
	                    throws IOException {
	                jsonGenerator.writeString(sdf.format(value));
	            }
	        });
		   factory.addGenericMapping(BigDecimal.class, new JsonSerializer<BigDecimal>(){
	            @Override
	            public void serialize(BigDecimal value,
	                                  JsonGenerator jsonGenerator,
	                                  SerializerProvider provider)
	                    throws IOException {
	            	
	                jsonGenerator.writeString(value.toPlainString());
	            }
	        });
	        this.setSerializerFactory(factory);
	}

}

