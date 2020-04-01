/* eslint-disable no-undef */
(global => {
    if (global.__POWERED_BY_QIANKUN__) {
        // eslint-disable-next-line no-undef
        __webpack_public_path__ = global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    }
    const { log } = console;
    debugger;
    global['purehtml-r'] = {
        bootstrap: () => {
            log('purehtml-r bootstrap');
            return Promise.resolve();
        },
        mount: () => {
            log('purehtml-r mount');
            return Promise.resolve();
        },
        unmount: () => {
            log('purehtml-r unmount');
            return Promise.resolve();
        }
    };
})(window)
