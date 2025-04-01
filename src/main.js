import { createApp } from 'vue';
import App from './App.vue';
import { VirtualList } from 'vueuc';
const app = createApp(App);
app.component('VirtualList', VirtualList);
app.mount('#app');
