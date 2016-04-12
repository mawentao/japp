/* conf.js, (c) 2016 mawentao */
define(function(require){
return {
    // 日志级别 0:关闭;>=1:WARN;>=2:INFO;>=3DEBUG;
    loglevel: 3,
    // ajax根路径
    ajaxRoot: 'http://localhost:8080/',
    // 插件列表（配置）
    plugins: [
        require('plugin/japp/conf'),
        require('plugin/hello/conf')
    ]
};
});
