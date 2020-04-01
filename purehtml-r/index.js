'use strict';

require(['lodash'],
function (_) {
  require(['domReady!', 'css!./styles/index'], function () {
    console.log(_);
    console.log(11111);
  })
});