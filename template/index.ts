/*
 * @FilePath: /human-ui/template/index.ts
 * @Description: 出口文件
 * @Author: humandetail
 * @Date: 2021-01-24 15:49:37
 * @LastEditors: humandetail
 * @LastEditTime: 2021-01-24 17:35:13
 */

import { createApp } from 'vue';
import App from './App.vue';
import '../src';

import TestVue from './test.vue';

const app = createApp(App);

app.component('g-test', TestVue);

app.mount('#app');
