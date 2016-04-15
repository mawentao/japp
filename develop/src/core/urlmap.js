// URL映射
define(function(require){
    var log=require('log');
    var o={};
    // 启动ER
    o.start = function() {
        require("er").start();
        this.addmap("/index/index/index");
    };
    // 添加URL映射
    o.addmap = function(path) {
        var pathList = [];
        var plugin = 'index';
        var controller = 'index';
        var action = 'index';
        var arr = path.split("/");
        if (arr.length>1 && arr[1]!="") plugin = arr[1];
        if (arr.length>2 && arr[2]!="") controller = arr[2];
        if (arr.length>3 && arr[3]!="") action = arr[3];
        pathList.push('/');
        pathList.push('/'+plugin);
        pathList.push('/'+plugin+'/'+controller);
        pathList.push('/'+plugin+'/'+controller+'/'+action);
        for (var i=0; i<pathList.length; ++i) {
            var p = pathList[i];
            if (!G.urlmapping[p]) {
                var item = {path:pathList[i], type:'core/eraction'};
                require("er/controller").registerAction(item);
                var c = item.path=='/'+plugin ? 'index' : controller;
                var a = item.path=='/'+plugin+'/'+controller+'/'+action ? action : 'index';
				log.debug("map url path [#"+pathList[i]+"] onto javascript plugin/"+plugin+"/controller/"+c+".js#"+a+"Action");
                G.urlmapping[p] = true;
            }
        }
    };
    return o;
});
