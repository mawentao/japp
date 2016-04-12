/* index.js, (c) 2016 mawentao */
define(function(require){
    var o = {};
    o.indexAction = function() {
        var html = require("er/tpl!plugin/japp/view/index.html");
        require('frame').showPage(html);
    };
    return o;
});
