import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import 'bootstrap/dist/css/bootstrap.min.css'; 



const app = createApp(App); // Create the app instance
app.use(router); // Tell Vue to use the router
app.mount('#app'); // Mount the app to the DOM