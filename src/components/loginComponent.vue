<template>
    <div class="container w-100 h-100 border d-flex  align-itmes-center justify-content-center" style="height:100vh">
      <div class="login-container border form-container auth-form">
        <div class="p-3  fw-bold text-dark"><h3><u>Welcome To Smart Sewa</u></h3></div>
      <h2 class="login-header">Login</h2>
      
      <form @submit.prevent="submitLogin" class="login-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="form.username"
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
              v-model="form.password"
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
    </div>
  </template>



<script>
import '@/assets/authentication.css'; 
export default {
  name: 'LoginComponent',
    data() {
        return {
          form:{
            username: "",
            password: "",
          },
          
          showPassword: false,
        };
    },
    methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },

    
    submitLogin() {
      console.log("Form data - ",this.form);
     
      // You can handle login logic here
    }
  }

};
</script>




<style scoped>
body{display:flex;align-items: center; justify-content: center;}
</style>