        var tab=getUrlParam("tab");
        if(tab=='cart'){
            $('.weui-tab__bd .weui-tab__bd-item:eq(0)').removeClass('weui-tab__bd-item--active')
            $('.weui-tabbar__item:eq(0)').removeClass('weui-bar__item_on')
            $('.weui-tabbar__item:eq(0)').find('img').eq(0).attr('src', './images/tab0.png');
            $('.weui-tab__bd .weui-tab__bd-item:eq(1)').addClass('weui-tab__bd-item--active')
            $('.weui-tabbar__item:eq(1)').addClass('weui-bar__item_on')
            $('.weui-tabbar__item:eq(1)').find('img').eq(0).attr('src', './images/tab1_p.png');
        }

        function getUrlParam(name) {
             var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
             var r = window.location.search.substr(1).match(reg);  //匹配目标参数
             if (r != null) return unescape(r[2]); return null; //返回参数值
        }