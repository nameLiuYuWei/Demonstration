/**
 * Created by soso on 2021/3/6.
 */

function openTab(title,url,id) {
    //删除指定Tab项
    window.parent.layui.element.tabDelete('wenav_tab', id);
    window.parent.layui.element.tabAdd('wenav_tab',{
            id: id,
            href: url,
            title: title,
            content: '<iframe tab-id="' + id + '" frameborder="0" src="' + url + '" scrolling="yes" class="weIframe"></iframe>'
        }
    );
    window.parent.layui.element.tabChange('wenav_tab', id);
}

function openmx(x) {
    if("1"==x){
        openTab("杨梅卷叶蛾","pestmonitor/ymchpages/ymjye.html","290");
    }else if("2"==x){
        openTab("杨梅果蝇","pestmonitor/ymchpages/ymgy.html","290");
    }else if("3"==x){
        openTab("杨梅蚧类","pestmonitor/ymchpages/ymmlj.html","290");
    }else if("4"==x){
        openTab("杨梅蚧类","pestmonitor/ymchpages/ymmlj.html","290");
        // window.open("http://www.1988.tv/bch/show-2997.html");
    }else if("5"==x){
        openTab("杨梅蚧类","pestmonitor/ymchpages/ymmlj.html","290");
        // window.open("http://yangmei.huamupu.com/news/show-6736.html");
    }else if("6"==x){
        openTab("杨梅蚧类","pestmonitor/ymchpages/ymmlj.html","290");
        // window.open("https://baike.baidu.com/item/%E5%A4%A9%E7%89%9B/1321893?fr=aladdin");
    }
}

