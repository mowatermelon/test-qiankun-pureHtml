'use strict';

// require([],
//   function () {
//     console.log(11111);
// });

// require(['lodash'],
// function (_) {
//   require([], function () {
//     console.log(_);
//     console.log(11111);
//   })
// });

require(['lodash'],
function (_) {
  require(['css!./styles/index'], function () {
    console.log(_);
    console.log(11111);
  })
});

// require(['lodash'],
// function (_) {
//   require(['domReady!', 'css!./styles/index'], function () {
//     console.log(_);
//     console.log(11111);
//   })
// });