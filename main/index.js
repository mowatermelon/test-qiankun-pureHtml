import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import './index.less';

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
import render from './render/VueRender'

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

/**
 * Step1 初始化应用（可选）
 */
render({ appContent: '', loading: true });

/**
 * Step2 注册子应用
 */
registerMicroApps(
  [
    {
      name: 'vue',
      entry: '//localhost:7101',
      render,
      activeRule: genActiveRule('/vue'),
    },
    {
      name: 'purehtml',
      entry: '//localhost:7105',
      render,
      activeRule: genActiveRule('/purehtml'),
    },
    {
      name: 'r-purehtml',
      entry: '//localhost:7105',
      render,
      activeRule: genActiveRule('/r-purehtml'),
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/vue');

/**
 * Step4 启动应用
 */
start({
  prefetch: true,
  jsSandbox: true,
  singular: true,
  fetch: window.fetch,
});

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
