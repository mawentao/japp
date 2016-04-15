/* doc.js, (c) 2016 mawentao */
define(function(require){
    var o = {};
    o.pluginAction = function() {
        var html = require("er/tpl!plugin/japp/view/plugin.html");
        require('frame').showPage(html);
    };

    o.startupAction = function() {
        var html = require("er/tpl!plugin/japp/view/startup.html");
        require('frame').showPage(html);
    };

    o.urlmapAction = function() {
        var html = require("er/tpl!plugin/japp/view/urlmap.html");
        require('frame').showPage(html);
    };

    return o;
});
