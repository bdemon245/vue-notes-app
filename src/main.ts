import { createApp } from 'vue';
import { createPinia } from 'pinia'
import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'
import './style.css';
import App from './App.vue';
import router from './router';
const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
    .use(router)
    .mount('#app');
