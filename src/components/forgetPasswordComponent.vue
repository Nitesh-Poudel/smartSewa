<template>
    <div class="form-container d-flex align-items-center justify-content-center w-100 vh-100">
      <div class="forgot-password">
        <div>
          <h3>Forgot Your Password?</h3>
          <form @submit.prevent="handleSubmit">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="email" required />
  
            <button type="submit">Send Reset Link</button>
          </form>
  
          <!-- Display entered email -->
          <p v-if="email">Entered Email: {{ showemail(email) }}</p>
  
          <!-- Message after form submission -->
          <p v-if="message" class="message">{{ message }}</p>
  
          <!-- Show OTP input field after email is submitted -->
          <div v-if="otpRequested">
            <h3>Enter OTP</h3>
            <input type="text" v-model="otp" placeholder="Enter OTP" required />
            <button @click="verifyOTP">Verify OTP</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "forgetPasswordComponent",
    data() {
      return {
        email: "",
        message: "",
        otp: "", // Store OTP input
        otpRequested: false, // To toggle OTP input visibility
      };
    },
    methods: {
      showemail(email) {
        return email;
      },
      handleSubmit() {
        // Simulate sending the reset link and requesting OTP
        this.message = `A password reset link has been sent to ${this.email}. Please enter the OTP.`;
        this.otpRequested = true; // Show OTP input field after submitting email
      },
      verifyOTP() {
        // You can implement OTP verification logic here
        console.log("OTP entered: " + this.otp);
        this.message = `OTP ${this.otp} verified successfully!`;
        // Reset OTP input for now
        this.otp = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .forgot-password {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    text-align: center;
    border: 1px solid rgb(216, 247, 216);
    border-radius: 8px;
    padding: 20px 50px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  }
  
  .forgot-password form {
    display: flex;
    flex-direction: column;
  }
  
  .forgot-password label {
    margin-bottom: 0.5em;
  }
  
  .forgot-password input {
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
  }
  
  .forgot-password button {
    padding: 0.7em;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .forgot-password button:hover {
    background-color: #45a049;
  }
  
  .message {
    margin-top: 1em;
    color: #007bff;
  }
  </style>
c  