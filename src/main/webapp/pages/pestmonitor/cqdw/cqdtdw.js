/**
 * Created by soso on 2021/3/6.
 */

var name = getParameter("name");
var dwzb_x = getParameter("dwzb_x");
var dwzb_y = getParameter("dwzb_y");
$(function () {
    // myPosition();//定位自己的位置
    // search("昌地火炬大厦");//查询附近的位置
    searchPosition(dwzb_x,dwzb_y,name);
});

