var bz = "";
$(function(){
    $('.login-btn').click(function (e) {
        e.stopPropagation();
        $('.login').removeClass('layui-hide');
    });
    /*$('.func-list-item').click(function (e) {
        e.stopPropagation();
        $('.login').removeClass('layui-hide');
    });*/
    
    
    $('#jcdn').click(function (e) {
        e.stopPropagation();
        $('.login').removeClass('layui-hide');
        bz = "jcdn";
    });
    
    $('#gyl').click(function (e) {
        e.stopPropagation();
        $('.login').removeClass('layui-hide');
        bz = "gyl";
    });
    
    $('#cyfw').click(function (e) {
        e.stopPropagation();
        $('.login').removeClass('layui-hide');
        bz = "cyfw";
    });
    
    
    $('.login').click(function (e) {
        e.stopPropagation();
    });
    $('body').click(function (e) {
        $('.login').addClass('layui-hide');
    });



    layui.use('layer', function(){
        var layer = layui.layer;
        
        $('.dlzc-list-item').click(function (e) {
        	if(document.forms[0].username.value == ''){
                layer.msg('请输入用户名', {icon: 2});
                return;
            }
            if(document.forms[0].password.value == ''){
                layer.msg('请输入密码', {icon: 2});
                return;
            }
            
            location.href = './index.html?bz='+bz
        });

        /*$('.loginin').click(function(){
            if(document.forms[0].username.value == ''){
                layer.msg('请输入用户名', {icon: 2});
                return;
            }
            if(document.forms[0].password.value == ''){
                layer.msg('请输入密码', {icon: 2});
                return;
            }
            
            location.href = './index.html?bz='+bz
        })*/

        
    });              
            
   


  
   
    
})