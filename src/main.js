import { createApp } from 'vue';
import App from './App.vue';

// Import CSS
import './assets/css/app.css';

// Import Routes
import router from './router';


const app = createApp(App)
    app.use(router)
    app.mount('#app')
