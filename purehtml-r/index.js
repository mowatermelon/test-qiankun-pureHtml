'use strict';

require(['lodash','common','regularHelper'],
function (_, common, regularHelper) {
  require(['domReady!', 'css!./styles/index'], function () {
    const { warn: log } = console;

    log(_);
    log(11111);
    log('getBaseReqUrl', getBaseReqUrl);
    log('guidGenerator', guidGenerator);

    log('testReg', testReg);
    log('testLowLength', testLowLength);
  })
});