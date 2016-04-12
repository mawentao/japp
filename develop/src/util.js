/* 常用工具包, (c) 2016 mawentao */
define(function(require){
require('qrcode');
return {
    // 显示二维码
    showQrCode: function(domid, url, size) {
        var qrcode = new QRCode(document.getElementById(domid), {
            width  : 150,
            height : 150
        });
        qrcode.makeCode(url);
    }
};
});

