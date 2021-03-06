/* webapp.js, (c) 2016 mawentao */
var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}
var device = "pc";
if (browser.versions.mobile||browser.versions.android||browser.versions.ios) {
    device = "mobile";
}
var baseUrl = 'src/';
var G = {
    location: window.location,
    browser: browser,
    device: device,
    path: '',
    urlmapping: {},
    plugin: '',
    controller: '',
    action: '',
    query: {},
    getParameter: function(key,defaultValue) {
        return (G.query[key]) ? G.query[key] : defaultValue;
    }
};
require.config({
    baseUrl: baseUrl,
    packages: [
        {name:'plugin', location:'plugin', main:'main'},
        {name:'frame', location:'frame', main:'main'},
        {name:'jquery', location:'../libs/jquery/1.11.2', main:'jquery.min'},
        {name:'qrcode', location:'../libs/qrcode', main:'qrcode'},
        {name:'mwt', location:'../libs/mwt/3.0.0', main:'mwt.min'},
        {name:'er', location:'../libs/er/3.0.3', main:'main'}
    ]
});

var JApp=function()
{
    this.init = function() {
        require(['core/urlmap','plugin','conf'], function(urlmap,plugin,conf){
            urlmap.start();
            plugin.loadall(conf.plugins);
        });
    };
};
