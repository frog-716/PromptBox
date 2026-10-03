/** Chrome 侧边栏入口，只负责挂载共享界面。 */

import { createApp } from 'vue';

import '@/ui/styles/global.css';
import App from '@/ui/sidepanel/App.vue';

createApp(App).mount('#app');
