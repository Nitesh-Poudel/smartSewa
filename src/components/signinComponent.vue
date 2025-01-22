<template>
    <div class="signup-container">
      <h2 class="signup-header">Sign Up</h2>
  
      <form @submit.prevent="submitForm" class="signup-form">
        <!-- Full Name -->
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            v-model="fullName"
            placeholder="Enter your full name"
            required
          />
        </div>
  
        <!-- Phone Number -->
        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="text"
            id="phone"
            v-model="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
  
        <!-- Address -->
        <div class="form-group">
          <label for="address">Address</label>
          <textarea
            id="address"
            v-model="address"
            placeholder="Enter your address"
            required
          ></textarea>
        </div>
  
        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
  
        <!-- Confirm Password -->
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirm your password"
            required
          />
          <span v-if="password && confirmPassword && password !== confirmPassword" class="error">
            Passwords do not match.
          </span>
        </div>
  
        <!-- Agree to Terms and Conditions -->
        <div class="form-group">
          <label>
            <input
              type="checkbox"
              v-model="agreeToTerms"
              required
            />
            I agree to the <a href="#">Terms and Conditions</a>
          </label>
        </div>
  
        <!-- Register as User or Service Provider -->
        <div class="form-group">
          <label for="accountType">Register as</label>
          <select id="accountType" v-model="accountType" required>
            <option value="user">User</option>
            <option value="serviceProvider">Service Provider</option>
          </select>
        </div>
  
        <!-- OTP Field (Hidden initially) -->
        <div v-if="showOtpField" class="form-group">
          <label for="otp">Enter OTP</label>
          <input
            type="text"
            id="otp"
            v-model="otp"
            placeholder="Enter the OTP sent to your phone"
            required
          />
        </div>
  
        <!-- Submit Button -->
        <div class="form-group">
          <button type="button" class="otp-btn" @click="sendOtp" :disabled="isOtpSent">
            Send OTP
          </button>
          <button
            type="submit"
            class="submit-btn"
            :disabled="!isFormValid"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SigninComponent',
    data() {
      return {
        fullName: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
        accountType: "user",
        otp: "",
        isOtpSent: false,
        showOtpField: false,
      };
    },
    computed: {
      isFormValid() {
        return (
          this.fullName &&
          this.phone &&
          this.address &&
          this.password &&
          this.confirmPassword &&
          this.password === this.confirmPassword &&
          this.agreeToTerms &&
          (this.isOtpSent ? this.otp : true)
        );
      },
    },
    methods: {
    //   sendOtp() {
    //     if (this.phone) {
    //       // Simulating OTP sending
    //       this.isOtpSent = true;
    //       this.showOtpField = true;
    //       alert("OTP sent to your phone!");
    //     } else {
    //       alert("Please enter a valid phone number.");
    //     }
    //   },
      submitForm() {
        if (this.isFormValid) {
          // Handle the final sign-up logic here, such as sending data to the server
          alert("Form Submitted Successfully!");
        } else {
          alert("Please fill all the required fields correctly.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    width: 100%;
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .signup-header {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .signup-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    transition: border-color 0.3s;
  }
  
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: #42b983;
    outline: none;
  }
  
  .form-group textarea {
    height: 80px;
    resize: vertical;
  }
  
  .error {
    color: red;
    font-size: 12px;
  }
  
  .otp-btn,
  .submit-btn {
    padding: 12px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .otp-btn:hover,
  .submit-btn:hover {
    background-color: #379c6e;
  }
  
  .otp-btn:disabled,
  .submit-btn:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
  </style>
  