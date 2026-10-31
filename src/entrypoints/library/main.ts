/**
 * 主界面标签页入口（没有侧边栏 API 时的兜底）。
 *
 * 只做挂载，不含业务逻辑 —— 所有逻辑都在 ui / composables / domain 里。
 * 与 sidepanel 入口共用同一份 App.vue，区别仅在于挂到独立标签页还是侧边栏。
 */

import { createApp } from 'vue';

import '@/ui/styles/global.css';
import App from '@/ui/app/App.vue';

createApp(App).mount('#app');
