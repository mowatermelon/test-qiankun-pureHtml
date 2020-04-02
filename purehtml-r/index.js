'use strict';

require(['lodash','ztree.core', 'ztree.exhide', 'ztree.exedit', 'ztree.excheck', 'common','regularHelper'],
function (_,ztreeCore, ztreeExhide, ztreeExedit, ztreeExcheck, common, regularHelper) {
  require(['domReady!', 'css!./styles/index'], function () {
    const { warn: log } = console;

    log(_);
    log(11111);
    // log('getBaseReqUrl', getBaseReqUrl);
    // log('guidGenerator', guidGenerator);

    // log('testReg', testReg);
    // log('testLowLength', testLowLength);

    log('ztreeCore', $.fn.zTree);
    // ztreeCore {consts: {…}, _z: {…}, getZTreeObj: ƒ, destroy: ƒ, init: ƒ}
  })
});