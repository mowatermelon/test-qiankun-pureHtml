/**
 * 返回正则测试结果的方法
 * @param {RegExp} reg  用来检测变量的正则，必选
 * @param {Any} variable  需要检测的变量值，必选
 */
window.testReg = function testReg(reg, variable) {
  let res = false;
  if (reg instanceof Array) {
      res = RegExp(reg[0]).test(reg[1]);
  } else {
      res = reg.test(variable);
  }
  return res;
}
/**
 * 判断变量长度是否小于某个长度的方法
 * @param {Any} variable  需要检测的变量值，必选
 * @param {Number} num  用来检测变量的长度值，必选
 */
window.testLowLength = function testLowLength(variable, num) {
  if (typeof num !== 'number' || num < 0) {
      num = 0;
  }
  return variable.length < num;
}