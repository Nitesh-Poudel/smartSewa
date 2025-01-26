<template>
<div class="container ">

    <div class="container-child w-100 flex-wrap  d-flex align-item-center justify-content-center">
        <div class="border w-50  auth-message d-flex align-items-center justify-content-center border">
            <div class="p-3  fw-bold text-light">
                <div class="p-2" style="background-color: aliceblue; opacity: 0.7; filter:blur(1px) box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);">
                  <img src="../assets/images/logo.png" alt="" width="30%">
                </div>
                <h3>Welcome To Smart Sewa</h3>
                <p>"Join Skill Sewa today and connect with expert service providers or seeker across all fields—all in one convenient platform. Your solution is just a sign-in away!"</p>
            </div>

            <div class="relative-section">
              <p>Already have an Account? <router-link to="/">Login</router-link></p>
              <label for="fullName">
                <div class="signin-focus border px-4 py-2 cursor-pointer ">
                 Sign-in

                </div>
              </label>
             
            </div>
            

        </div>
        <div class="signup-container  w-50 form-container border auth-form">
            <h2 class="signup-header border-bottom">Sign in Now</h2>

            <form @submit.prevent="submitForm" class="signup-form">
              
                <div class="input-sections ">
                    <!-- Full Name -->
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" v-model="form.fullName" placeholder="Enter your full name" />
                        <p v-if="errors.includes('fullName')" class="error-message">
                            Full Name is required.
                        </p>
                    </div>

                    <!-- Phone Number -->
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" id="phone" v-model="form.phone" placeholder="Enter your phone number" />
                        <p v-if="errors.includes('phone')" class="error-message">
                            Phone is required.
                        </p>
                    </div>

                    <!-- Address -->
                    <!-- Province Selection -->
                    <div class="form-group">
                        <label for="province">Province</label>
                        <select id="province" v-model="form.selectedProvince" @change="updateDistricts">
                            <option value="" disabled>Select Province</option>
                            <option v-for="province in provinces" :key="province.name" :value="province.name">
                                {{ province.name }}
                            </option>
                        </select>
                        <p v-if="errors.includes('selectedProvince')" class="error-message">
                            Province is required.
                        </p>
                    </div>

                    <!-- District Selection -->
                    <div v-if="districts.length > 0" class="form-group">
                        <label for="district">District</label>
                        <select id="district" v-model="form.selectedDistrict" @change="updateMunicipalities">
                            <option value="" disabled>Select District</option>
                            <option v-for="district in districts" :key="district.name" :value="district.name">
                                {{ district.name }}
                            </option>
                        </select>
                        <p v-if="errors.includes('selectedDistrict')" class="error-message">
                            District is required.
                        </p>
                    </div>

                    <!-- Municipality Selection -->
                    <div v-if="municipalities.length > 0" class="form-group">
                        <label for="municipality">Municipality</label>
                        <select id="municipality" v-model="form.selectedMunicipality">
                            <option value="" disabled>Select Municipality</option>
                            <option v-for="municipality in municipalities" :key="municipality" :value="municipality">
                                {{ municipality }}
                            </option>
                        </select>
                        <p v-if="errors.includes('selectedMunicipality')" class="error-message">
                            Municipality is required.
                        </p>
                    </div>
                    <!-- Ward Selection -->
                    <div v-if="municipalities.length > 0" class="form-group">
                        <label for="ward">Ward</label>
                        <input type="number" max="35" v-model="form.selectedWard">

                        <p v-if="errors.includes('ward')" class="error-message">
                            Ward is required.
                        </p>

                    </div>

                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="form.password" placeholder="Enter your password" />
                        <p v-if="errors.includes('password')" class="error-message">
                            password is required.
                        </p>
                    </div>

                    <!-- Confirm Password -->
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" v-model="form.confirmPassword" placeholder="Confirm your password" />
                        <span v-if="password && confirmPassword && password !== confirmPassword" class="error">
                            Passwords do not match.
                        </span>

                    </div>

                    <!-- Agree to Terms and Conditions -->
                    <div class="py-3 border d-flex">
                        <input type="checkbox" value=true v-model="form.agreeToTerms" id="term" class="mx-3" />
                        <label for="term">
                            I agree to the <a href="#">Terms and Conditions</a>
                        </label>
                        <p v-if="errors.includes('agreeToTerm')" class="error-message">
                            You should agree out term to continue.
                        </p>
                    </div>

                    <!-- Register as User or Service Provider -->
                    <div class="form-group">
                        <label for="accountType">Register as</label>
                        <select id="accountType" v-model="form.accountType">
                            <option value="user">User</option>
                            <option value="serviceProvider">Service Provider</option>
                        </select>
                        <p v-if="errors.includes('accountType')" class="error-message">
                            Account type is required.
                        </p>
                    </div>

                    <!-- OTP Field (Hidden initially) -->
                    <div v-if="showOtpField" class="form-group">
                        <label for="otp">Enter OTP</label>
                        <input type="text" id="otp" v-model="form.otp" placeholder="Enter the OTP sent to your phone" />
                        <p v-if="errors.includes('otp')" class="error-message">
                            Please Enter Correct Otp
                        </p>
                    </div>
                </div>

                <!-- Submit Button -->
                <div class="form-group">
                    <button type="button" class="otp-btn" @click="sendOtp" :disabled="isOtpSent">
                        Send OTP
                    </button>
                    <button type="submit" class="submit-btn">
                        Sign Up
                    </button>
                </div>
            </form>

        </div>
    </div>

</div>
</template>

<script>
import locationData from '@/assets/location.json';
// import { required, numeric, confirmed, min, max_value, min_value } from 'vee-validate/dist/rules';
// import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
    name: 'SigninComponent',
    data() {
        return {
            form: {
                fullName: null,
                phone: null,
                selectedProvince: null,
                selectedDistrict: null,
                selectedMunicipality: null,
                selectedWard: null,
                password: null,
                confirmPassword: null,
                accountType: null,
                otp: null,
            },

            provinces: locationData.provinces, // Initialized as an empty array
            districts: [], //locationData.this.province.districts, // Initialized as an empty array
            municipalities: [], // Initialized as an empty array
            wards: [], // Initialized as an empty array
            showOtpField: false,
            errors: [],
            isOtpSent: false

        };
    },

    computed: {

    },
    methods: {
        selectedProvience() {
            return this.selectedProvince;
        },
        sendOtp() {
            if (this.form.phone) {
                // Simulating OTP sending
                this.isOtpSent = true;
                this.showOtpField = true;
                alert("OTP sent to your phone!");
            } else {
                alert("Please enter a valid phone number.");
            }
        },

        validateForm() {
            // Clear errors
            this.errors = [];

            // Check for empty fields and collect their names
            for (const [key, value] of Object.entries(this.form)) {
                if (value === null || value === '') {
                    this.errors.push(key); // Add field name to errors array
                }
            }

            // Return true if no errors
            return this.errors.length === 0;
        },
        submitForm() {

            if (this.validateForm()) {
                // Handle the final sign-up logic here, such as sending data to the server
                alert("Form Submitted Successfully!");
                console.log("form-data", this.form)
            } else {

                alert("Please fill all the required fields correctly.");
                console.log("errors in ", this.errors)
            }

        },

        // Update the districts when a province is selected
        updateDistricts() {
            const province = this.provinces.find(
                (prov) => prov.name === this.form.selectedProvince
            );
            if (province) {
                this.districts = province.districts; // Load districts of selected province
                this.selectedDistrict = null; // Reset selected district
            } else {
                this.districts = []; // Clear districts if no province is selected
            }
        },

        updateMunicipalities() {
            const district = this.districts.find((d) => d.name === this.form.selectedDistrict);
            if (district) {
                this.municipalities = district.localGovernments;
                this.selectedMunicipality = null; // Reset municipality
            } else {
                this.municipalities = [];
            }
        },

    },
};
</script>

<style scoped>
div {
    /* border: 1px solid red !important; */
    /* margin:0px !important;
    padding: 0px !important; */

}
.input-sections{max-height: 550px; overflow-y: scroll;}

.auth-message {
    position: relative
}

.auth-message p {
    line-height: 2;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
}

.container-child {
    margin: 0px;
    padding: 0px;
}

.relative-section{
  position: absolute;
    bottom: 20px;
    right: 10px;
    color:white;
    
}

.relative-section a{
  color:white;
}
.signin-focus {
   
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    border-radius: 28px;
    font-weight: 700;
}

.error-message {
    color: red;
    font-family: 12px;
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
    padding: 10px;
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
