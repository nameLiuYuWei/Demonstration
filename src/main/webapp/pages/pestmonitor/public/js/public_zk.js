/**
 * Created by soso on 2021/3/11.
 */
//获取链接参数
function getParameter(param) {
    var query = window.location.search;
    var iLen = param.length;
    var iStart = query.indexOf(param);
    if (iStart == -1) return "";
    iStart += iLen + 1;var iEnd = query.indexOf("&", iStart);
    try {
        if (iEnd == -1)
            return decodeURI(query.substring(iStart));
    } catch (e) {
        return query.substring(iStart);
    }
    try {
        return decodeURI(query.substring(iStart, iEnd));
    } catch (e) {
        return query.substring(iStart, iEnd);
    }
}