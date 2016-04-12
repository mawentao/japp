define(function(require){
    var ErAction=require("er/Action");
    var frame = require("frame");
    var o = new ErAction();
    o.on("enter",function(){
        //1. 解析UrlPath
        var erurl = this.context.url;
        var path  = erurl.getPath();

        var plugin = 'index';
        var controller = 'index';
        var action = 'index';
        var arr = path.split("/");
        if (arr.length>1 && arr[1]!="") plugin = arr[1];
        if (arr.length>2 && arr[2]!="") controller = arr[2];
        if (arr.length>3 && arr[3]!="") action = arr[3];

        G.path = path;
        G.plugin = plugin;
        G.controller = controller;
        G.action = action;
        G.query = erurl.getQuery();
        
        //2. 初始化frame
        if (!G.frameInited) {
            frame.init();
            G.frameInited = true;
            require("log").debug("init frame");
        }
        frame.active(plugin, controller, action);

        //3. 执行action
        var cm = 'plugin/'+plugin+'/controller/'+controller;
        require([cm], function(c){
            c[action+"Action"]();
        });
    });

    return o;
});
