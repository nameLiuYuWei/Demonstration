/**
 * Created by soso on 2018/6/22.
 */
// 百度地图API功能  Baidu maps API features
var map = new BMap.Map("allMap");
var point = new BMap.Point(120.53,28.78);
map.centerAndZoom(point,15);
map.enableScrollWheelZoom(true);

// setTimeout(function(){
//     map.setZoom(14);
// }, 1000);//2秒后放大到14级

//查找我的位置 Find my place
function myPosition(){
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            startOper(map,r);
        } else {
            alert('failed'+this.getStatus());
        }
    },{enableHighAccuracy: true});
}

//启动定位操作  Boot location operation
function startOper(map,r){
    var mk = new BMap.Marker(r.point);
    map.addOverlay(mk);
    map.panTo(r.point);
    addressAnalysis(r.point);
}

//寻找  Shop looking
function search(Info){
    var lng=point.lng;
    var lat=point.lat;
    var allOverlay = map.getOverlays();
    for (var i = 0; i < allOverlay.length -1; i++){
        try{
            if(allOverlay[i].getLabel().content  == "搜索到这里"||allOverlay[i].getLabel().content  == "我在这"){} else{
                map.removeOverlay(allOverlay[i]);
            }
        }catch(e){
            map.removeOverlay(allOverlay[i]);
        }
    }
    map.centerAndZoom(new BMap.Point(lng, lat), 15);
    var local = new BMap.LocalSearch(map, {
        renderOptions:{map: map, autoViewport:true}
    });
    local.searchNearby(Info, "附近");
}

//寻找点位  传入坐标点 Find point
function searchPosition(lng,lat,name){
    var searchPoint = new BMap.Point(lng,lat);
    var marker = new BMap.Marker(searchPoint);
    // var label = new BMap.Label("搜索到这里",{offset:new BMap.Size(0,0)});
    map.addOverlay(marker);
    // marker.setLabel(label);
    map.panTo(searchPoint);
    addressAnalysis(searchPoint,marker,name);
}

//地址解析器  Address parser
function addressAnalysis(point,marker,name){
    var gc = new BMap.Geocoder();
    gc.getLocation(point, function(rs){
        var opts = {
            width : 250,     // 信息窗口宽度
            height: 50,   // 信息窗口高度
            offset: new BMap.Size(0, -20)//设置文本偏移量
        };
        var addComp = rs.addressComponents;
        var adr = addComp.city + "," + addComp.district + "," + addComp.street + "<br/>虫情测报灯编号：<br/>" +name;
        //创建信息窗口，点击标注时显示标注对应的车牌号码以及当前地址
        var infoWindow1 = new BMap.InfoWindow(adr,opts);
        // marker.addEventListener("click", function(){map.openInfoWindow(infoWindow1,point);});
        map.openInfoWindow(infoWindow1,point);
    });
}

function getXzbj(cityName,dataArr) {
    map.enableScrollWheelZoom(false);
    map.centerAndZoom(cityName, 15);// 初始化地图,设置中心点坐标和地图级别。
    var bdary = new BMap.Boundary();
    bdary.get(cityName, function (rs) {//获取行政区域
        map.clearOverlays();//清除地图覆盖物

        //网上查了下，东西经南北纬的范围
        var EN_JW = "180, 90;";         //东北角
        var NW_JW = "-180,  90;";       //西北角
        var WS_JW = "-180, -90;";       //西南角
        var SE_JW = "180, -90;";        //东南角
        //4.添加环形遮罩层
        var ply1 = new BMap.Polygon(rs.boundaries[0] + SE_JW + SE_JW + WS_JW + NW_JW + EN_JW + SE_JW, { strokeColor: "none", fillColor: "#536B7B", fillOpacity:1, strokeOpacity: 0.5 }); //建立多边形覆盖物
        map.addOverlay(ply1);
        var ply2 = new BMap.Polygon(rs.boundaries[0], { strokeColor: "none", fillColor: "#536B7B", fillOpacity:1, strokeOpacity: 0.5 }); //建立多边形覆盖物
        map.addOverlay(ply2); //添加覆盖物
        //5. 给目标行政区划添加边框，其实就是给目标行政区划添加一个没有填充物的遮罩层
        var ply = new BMap.Polygon(rs.boundaries[0], { strokeWeight: 2, strokeColor: "#95C2DE",fillColor: "" });
        map.addOverlay(ply);
        map.setViewport(ply.getPath());    //调整视野
        getRegion(dataArr);
    });
}

function getRegion(dataArr) {
    for(var i=0;i<dataArr.length;i++){
        var bdary = new BMap.Boundary();
        bdary.get(dataArr[i].name, function (rs) {
            var count = rs.boundaries.length;
            for (var j = 0; j < count; j++) {
                var ply = new BMap.Polygon(rs.boundaries[j], {
                    strokeWeight: 0.5, strokeColor: '#fff', fillOpacity: 0.6, fillColor: '#a9dbf7'});
                map.addOverlay(ply);
            }
        });
        citySetLabel(new BMap.Point(dataArr[i]['cp'][0], dataArr[i]['cp'][1]) , dataArr[i]['name']);
    }
}

function citySetLabel(cityCenter, cityName) {
    var label = new BMap.Label(cityName, {
        offset: new BMap.Size(-20, -10),
        position: cityCenter
    });
    label.setStyle({
        border: 'none',
        background: 'transparent',
        'font-size': '0.25rem',
        color: '#fff'
    });
    map.addOverlay(label);
}