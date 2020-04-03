window.getBaseReqUrl = function getBaseReqUrl(){
  return 'xxxxxxx';
}

/**
 * 生成唯一ID
 * @param {String} name 需要加载随机生成的字符串前面，非必传
 */
window.guidGenerator = function guidGenerator(name) {
  if (name === undefined) {
      name = '';
  }
  const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  const now = new Date();
  const nowStr = formatDate(now, 1);
  const newCreateStr = name + nowStr + S4() + S4();
  return newCreateStr.toUpperCase();
}