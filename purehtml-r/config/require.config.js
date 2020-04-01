'use strict';

(function (require) {
    var methods = {
        getNowDate: function() {
            var NOW = new Date();
            // 获取当前年
            var YEAR = NOW.getFullYear();
            // 获取当前月
            var MONTH = NOW.getMonth() + 1;
            // 获取当前日
            var DAY = NOW.getDate();
            return String(YEAR) + String(methods.converDate(MONTH)) + String(methods.converDate(DAY))
        },
        converDate: function(s) {
            return s < 10 ? '0' + s : s;
        }
    }
    require.config({
        // 模块引用添加版本参数
        urlArgs: 'v=1.0.1.' + methods.getNowDate() + '0002',
        // 申明文件路径的别名（PS：路径不需要写*.js后缀）
        paths: {
            // 定义路径别名（统一以@开头标识表明为相对路径）

            '@plugins': '/plugins',
            // Require插件
            'domReady': '/plugins/requirejs/require.domReady'
        },
        // 配置加载css解析器
        map: {
            '*': {
                'css': '/plugins/requirejs/require.css.min.js'
            }
        },
        deps: ['css!@styles/index'],
        waitSeconds: 30
    });
})(require);
