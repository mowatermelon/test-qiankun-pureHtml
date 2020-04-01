(global => {
  global.__POWERED_BY_QIANKUN__ || (__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);
  global['purehtml-a'] = {
    bootstrap: () => {
      console.log('purehtml-a bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml-a mount');
      return Promise.resolve();
    },
    unmount: () => {
      console.log('purehtml-a unmount');
      return Promise.resolve();
    },
  };
})(window);
