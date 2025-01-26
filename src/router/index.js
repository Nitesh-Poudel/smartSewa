import { createRouter, createWebHistory } from 'vue-router'; // Import Vue Router methods
import LoginComponent from '../components/loginComponent.vue'; // Import the Login Component
import SigninComponent from '../components/signinComponent.vue'; // Import the Signin Component
import ForgetPasswordComponent from '../components/forgetPasswordComponent.vue'; 
import homeComponent from '../components/homeComponent.vue'; 



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
    {
      path: '/forget-password',   // Define the path for the forgot-password route
      name: 'ForgotPassword',      // Give it a name if needed
      component: ForgetPasswordComponent,  // Correctly use the imported component
    },

    {
      path: '/home',   // Define the path for the forgot-password route
      name: 'home',      // Give it a name if needed
      component: homeComponent,  // Correctly use the imported component
    },

  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // Set up history mode for routing
    routes, // Define the routes
  });
  
  export default router; // Export the router