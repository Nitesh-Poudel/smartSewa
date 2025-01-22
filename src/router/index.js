import { createRouter, createWebHistory } from 'vue-router'; // Import Vue Router methods
import LoginComponent from '../components/loginComponent.vue'; // Import the Login Component
import SigninComponent from '../components/signinComponent.vue'; // Import the Signin Component


const routes = [
    {
      path: '/',
      name: 'Login',
      component: LoginComponent, // Route for the Login Component
    },
    {
      path: '/signin',
      name: 'Signin',
      component: SigninComponent, // Route for the Signin Component
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // Set up history mode for routing
    routes, // Define the routes
  });
  
  export default router; // Export the router