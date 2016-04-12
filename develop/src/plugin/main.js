/* main.js, (c) 2016 mawentao */
define(function(require){
    var log  = require('log');
    var frame = require('frame');
    var urlmap = require('core/urlmap');
    var o={};
    o.loadall = function(plugins) {
        require('jquery');
        for (var i=0; i<plugins.length; ++i) {
            var pc = plugins[i];
            for (var k=0; k<pc.menu.length; ++k) {
                var im = pc.menu[k];
                if (im.path) urlmap.addmap(im.path);
                if (im.submenu) {
                    for (var m=0; m<im.submenu.length; ++m) {
                        var sim = im.submenu[m];
                        if (sim.path) urlmap.addmap(sim.path);
                    }
                }
            }
            // add plugin conf to frame
            frame.addPlugin(pc);
        }
    };
    return o;
});
