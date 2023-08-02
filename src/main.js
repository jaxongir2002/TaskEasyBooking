import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from '../src/router/router.js'
import PrimeVue from 'primevue/config';
import naive from 'naive-ui'
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css';




const app = createApp(App);
// app.use(PrimeVue, { unstyled: true });
app.use(ToastService);
app.use(naive)
app.use(PrimeVue);
app.use(router)

app.mount('#app')
