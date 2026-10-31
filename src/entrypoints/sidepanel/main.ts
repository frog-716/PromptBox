/**
 * Chrome 侧边栏入口，只负责挂载共享界面。
 *
 * 与 library 入口共用同一份 App.vue，区别仅在于挂到侧边栏还是独立标签页。
 */

import { createApp } from 'vue';

import '@/ui/styles/global.css';
import App from '@/ui/app/App.vue';

createApp(App).mount('#app');
