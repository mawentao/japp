/* conf.js, (c) 2016 mawentao */
define(function(require){
return {
    pluginId: 'japp',
    pluginName: 'JApp使用说明',
    icon: '<i class="fa fa-qq"></i>',
    menu: [
        {name:'JApp简介',path:'#/japp/index/index'},
        {name:'JApp模块',submenu:[
            {name:'JApp首次加载过程',path:'#/japp/doc/startup'},
            {name:'JApp的插件机制',path:'#/japp/doc/plugin'},
            {name:'JApp的URL映射机制',path:'#/japp/doc/urlmap'}
        ]}
    ]
};
});
