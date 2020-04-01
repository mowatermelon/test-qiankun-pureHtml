(global => {
  global.__POWERED_BY_QIANKUN__ || (__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);
  global['purehtml-about'] = {
    bootstrap: () => {
      console.log('purehtml-about bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml-about mount');
      return Promise.resolve();
    },
    unmount: () => {
      console.log('purehtml-about unmount');
      return Promise.resolve();
    },
  };
})(window);
