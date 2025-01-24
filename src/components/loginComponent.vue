<template>
    <div class="login-container form-container">
      <h2 class="login-header">Login</h2>
      
      <form @submit.prevent="submitLogin" class="login-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            required
          />
        </div>
        
        <div class="form-group ">
          <label for="password">Password</label>
          <div class="password-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
            <span class="toggle-password" @click="togglePasswordVisibility">
              👁️
            </span>
          </div>
        </div>
  
        <button type="submit" class="submit-btn">Login</button>
      </form>
  
      <p class="forgot-password">Forgot your password? <router-link to="/forget-password">Click here</router-link></p>
      <p><router-link to="/signin">Go to Sign Up</router-link></p> 
    </div>
  </template>



<script>
import '@/assets/authentication.css'; 
export default {
  name: 'LoginComponent',
    data() {
        return {
          username: "",
          password: "",
          showPassword: false,
        };
    },
    methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },

    
    submitLogin() {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // You can handle login logic here
    }
  }

};
</script>




<style scoped>

</style>