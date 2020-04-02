function getBaseReqUrl(){
  return 'xxxxxxx';
}

/**
 * 生成唯一ID
 * @param {String} name 需要加载随机生成的字符串前面，非必传
 */
function guidGenerator(name) {
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

/**
 * 判断当前是否支持localStorage
 */
function supportLSStorage() {
  let res = false;
  if (typeof window.localStorage === 'object') {
      res = true;
  }
  return res;
}
/**
 * 存储数值----localStorage
 * @param {String} name  该存储的标识名，请注意唯一性
 * @param {String,JSON} value  该存储的具体值
 * @param {Boolean} type  该存储具体值的类型，设置为true则是说明具体值是非字符串格式，反正则不是
 * @returns 无返回值
 *
 */
function setLSItem(name, value, type) {
  if (supportLSStorage()) {
      if (type) {
          value = JSON.stringify(value);
      }
      window.localStorage.setItem(name, value);
  }
}

/**
* 获取数值----localStorage
* @param {String} name  该存储的标识名，请注意唯一性
* @param {Boolean} type  该存储具体值的类型，设置为true则是说明具体值是非字符串格式，反正则不是
* @returns 无返回值
*
*/
function getLSItem(name, type) {
  let value = '';
  if (supportLSStorage()) {
      value = window.localStorage.getItem(name);
      if (type && value !== null && value !== '') {
          value = JSON.parse(value);
      }
  }
  return value;
}

/**
* 移除数值----localStorage
* @param {String} name  该存储的标识名，请注意唯一性
* @returns 无返回值
*/
function removeLSItem(name) {
  if (supportLSStorage()) {
      window.localStorage.removeItem(name);
  }
}

/**
* 对于存储在本地存储中的数据做一定检测保证取到的数据格式正确性----localStorage
* @param {String} key 存储的键名
* @param {String} type 需要加载的数据类型
*/
function getCheckLSStorageData(key, type) {
  const ISRIGHT = false;
  const defaultTypeArr = ['string', 'array', 'object'];
  let res = null;
  switch (type) {
      case defaultTypeArr[0]:
      {
          res = getLSItem(key, ISRIGHT);
          break;
      }
      case defaultTypeArr[1]:
      {
          res = getLSItem(key, !ISRIGHT);
          if (!isArr(res) || res.length === 0) {
              res = [];
          }
          break;
      }
      case defaultTypeArr[2]:
      {
          res = getLSItem(key, !ISRIGHT);
          if (!res || $.isEmptyObject(res)) {
              res = {};
          }
          break;
      }
  }
  return res;
}

function setCookie(name, value, options) {
  if (typeof value !== 'undefined') {
      options = options || {};
      if (value === null) {
          value = '';
          options.expires = -1;
      }
      let expires = '';
      if (options.expires && (typeof options.expires === 'number' || options.expires.toUTCString)) {
          let date;
          if (typeof options.expires === 'number') {
              date = new Date();
              date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
          } else {
              date = options.expires;
          }
          expires = '; expires=' + date.toUTCString();
      }
      const path = options.path ? '; path=' + (options.path) : '';
      const domain = options.domain ? '; domain=' + (options.domain) : '';
      const secure = options.secure ? '; secure' : '';
      document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  }
}

/**
* @Params {string} cookie名称
* @Params {string} cookie值
* @Params {Object} cookie其他参数
* @returns {string}
*/
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = jQuery.trim(cookies[i]);
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

/**
* 存储数值----sessionStorage
* @param {String} name  该存储的标识名，请注意唯一性
* @param {String,JSON} value  该存储的具体值
* @param {Boolean} type  该存储具体值的类型，设置为true则是说明具体值是非字符串格式，反正则不是
* @returns 无返回值
*
*/
function setItem(name, value, type) {
  if (supportStorage()) {
      if (type) {
          value = JSON.stringify(value);
      }
      window.sessionStorage.setItem(name, value);
  }
}

/**
* 获取数值----sessionStorage
* @param {String} name  该存储的标识名，请注意唯一性
* @param {Boolean} type  该存储具体值的类型，设置为true则是说明具体值是非字符串格式，反正则不是
* @returns 无返回值
*
*/
function getItem(name, type) {
  let value = '';
  if (supportStorage()) {
      value = window.sessionStorage.getItem(name);
      if (type && value !== null && value !== '') {
          value = JSON.parse(value);
      }
  }
  return value;
}

/**
* 移除数值----sessionStorage
* @param {String} name  该存储的标识名，请注意唯一性
* @returns 无返回值
*/
function removeItem(name) {
  if (supportStorage()) {
      window.sessionStorage.removeItem(name);
  }
}

/**
 * 对于存储在本地存储中的数据做一定检测保证取到的数据格式正确性----sessionStorage
 * @param {String} key 存储的键名
 * @param {String} type 需要加载的数据类型
 */
function getCheckStorageData(key, type) {
  const ISRIGHT = false;
  const defaultTypeArr = ['string', 'array', 'object'];
  let res = null;
  switch (type) {
      case defaultTypeArr[0]:
      {
          res = getItem(key, ISRIGHT);
          break;
      }
      case defaultTypeArr[1]:
      {
          res = getItem(key, !ISRIGHT);
          if (!isArr(res) || res.length === 0) {
              res = [];
          }
          break;
      }
      case defaultTypeArr[2]:
      {
          res = getItem(key, !ISRIGHT);
          if (!res || $.isEmptyObject(res)) {
              res = {};
          }
          break;
      }
  }
  return res;
}