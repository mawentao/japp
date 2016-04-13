/**
 * 默认框架, (c) 2016 mawentao 
 *
 * 框架必须提供以下接口：
 *     addPlugin(pluginConf) : 添加插件配置
 *     init()                : 框架初始化
 *     active()              : 选中菜单/导航
 *     showPage()            : 显示主页区域
 *
 **/
define(function(require){
    require('mwt');
    var o={};
    var log = require("log");
    var pluginConfList = [];

    // 添加插件配置
    o.addPlugin = function(conf) {
        pluginConfList.push(conf);
    };

    // 框架初始化函数
    o.init = function() {
        var code = '<div id="frame-head">'+
              '<div id="frame-logo"><a href="#/"><span>租车BI平台</span></a></div>'+
              '<div id="frame-menu"></div>'+
            '</div>'+
            '<div id="frame-body">'+
              '<div id="frame-west"></div>'+
              '<div id="frame-center"></div>'+
            '</div>';
        jQuery("body").html(code);
        init_header();
        init_nav();
    };
    
    // 选中菜单
    o.active = function(plugin,controller,action) {
        // 选中plugin菜单
        jQuery(".menu-item").removeClass('active');
        jQuery("#menu-"+plugin).addClass('active');

        // 显示plugin导航
        jQuery('.leftmenu').hide();
        jQuery('#nav-'+plugin).show();
        //jQuery('.leftmenu').show();

        // 选中导航项
        var paths = ["#/"+plugin+"/"+controller+"/"+action];
        if (action=='index') paths.push("#/"+plugin+"/"+controller);
        if (controller=='index') paths.push("#/"+plugin);
        jQuery('[name="navitem"]').removeClass('active');
        for (var i=0; i<paths.length; ++i) {
            var sel= '[href="'+paths[i]+'"]';
            jQuery(sel).addClass('active');
        }
    };

    // 显示页面
    o.showPage = function(code) {
        jQuery("#frame-center").html(code);
    };

    ///////////////////////////////////////////////////////

    function topsearch() {
        var key = get_text_value("topsokey");
        alert(key);
    }

    // 头部
    function init_header() {
        var code = '<ul class="menuul">';
        for (var i=0; i<pluginConfList.length; ++i) {
            var p = pluginConfList[i];
            var icon = p.icon;
            code += '<li><a id="menu-'+p.pluginId+'" class="menu-item" href="#/'+p.pluginId+'">'+icon+p.pluginName+'</a></li>';
        }
        code += '</ul>';
        code += '<div class="comdiv">'+
            '<div class="sobar"><input id="topsokey" type="text"/><i id="topsobtn" class="fa fa-search"></i></div>'+
            '<a href="javascript:;"><i class="fa fa-user"></i>user</a>'+
          '</div>';
        jQuery('#frame-menu').html(code);
        jQuery('#topsobtn').click(topsearch);
        jQuery('#topsokey').change(topsearch);
    };

    // 左部导航
    function init_nav() {
        var code = "";
        for (var i=0; i<pluginConfList.length; ++i) {
            var navitems = pluginConfList[i].menu;
            code += '<ul class="leftmenu" id="nav-'+pluginConfList[i].pluginId+'">';
            for (var j=0; j<navitems.length; ++j) {
                var item = navitems[j];
				var href = item.path ? item.path : "javascript:;";
				code += "<li class='menu-open'>"+
					"<a name='navitem' class='lm-menu' href='"+href+"'>"+item.name+"</a>";
				if (item.submenu && item.submenu.length>0) {
					code += "<ul class='submenu'>";
					for (var k=0; k<item.submenu.length; ++k) {
						var im = item.submenu[k];
						var href = im.path ? im.path : "javascript:;";
						code += "<li><a name='navitem' class='lm-item' href='"+href+"'>"+im.name+"</a></li>";
					}   
					code += "</ul>";
				}   
				code += "</li>";
            }
            code += '</ul>';
        }
        jQuery("#frame-west").html(code);
        jQuery(".lm-menu").click(function(){
            var child = jQuery(this).parent().children(".submenu");
            if (child) {
                var dsp = child.css("display");
                if (!dsp) {
                    //alert(dsp);
                } else if ("none" == dsp) {
                    jQuery(this).parent().removeClass("menu-close");
                    jQuery(this).parent().addClass("menu-open");
                } else {
                    jQuery(this).parent().removeClass("menu-open");
                    jQuery(this).parent().addClass("menu-close");
                }   
            }
        });
    }

    return o;
});
