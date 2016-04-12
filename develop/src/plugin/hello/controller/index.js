/* index.js, (c) 2016 mawentao */
define(function(require){
    var o = {};

    o.indexAction = function() {
        require('frame').showPage('Hello World!');
    };

    return o;
});
