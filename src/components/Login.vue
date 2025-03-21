<template>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" lg="4">
          <v-card class="pa-5" elevation="10">
            <v-card-title class="text-h5 text-center">Welcome back!</v-card-title>
            <v-card-subtitle class="text-center">Log into your account</v-card-subtitle>
            
            <v-divider class="my-4"></v-divider>

            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
                :rules="emailRules"
              ></v-text-field>
              
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                :type="showPassword? 'text' : 'password'"
                :rules="passwordRules"
              ></v-text-field>
              
              <v-btn block color="primary" type="submit">Log In</v-btn>
              
              <div class="text-center mt-2">
               <a href="#" class="text-blue" @click.prevent="forgotPassword">Forgot password?</a>
              </div>
            </v-form>

            <div class="text-center mt-4">
              <span>Don't have an account?</span>
              <a href="#" class="text-blue" @click.prevent="register"> Sign up</a>
            </div>
            
            <v-divider class="my-4"></v-divider>
            
            <div class="text-center">Or continue with</div>
            <v-row justify="center" class="mt-3">
              <v-btn icon class="mx-2" color="red"><v-icon>mdi-google</v-icon></v-btn>
              <v-btn icon class="mx-2" color="blue"><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn icon class="mx-2" color="black"><v-icon>mdi-github</v-icon></v-btn>
            </v-row>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6" class="hidden-md-and-down">
          <div class="v-responsive v-img flex-1-1" style="height: 800px;">
            <div class="v-responsive__sizer" style="padding-bottom: 133.333%;"></div>
            <img class="v-img__img v-img__img--cover" 
              src="https://images.unsplash.com/photo-1596003903067-bf5762ad5c19?q=80&amp;w=1470&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Login Image">
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'LoginPage',
    setup() {
      const email = ref('');
      const password = ref('');
      const showPassword = ref(false);
      const valid = ref(false);
      const users = ref([]);

      const emailRules = [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'Password must be at least 6 characters'
      ];

      const passwordRules = [
        (v: string) => !!v || 'Password is required',
        (v: string) => v.length >= 6 || 'Password must be at least 6 characters'
      ];

      const login = async () => {
        if (valid.value) {
          try {
            const response = await axios.post('login', {email: email.value, password: password.value});
            console.log('Login successful: ', response.data);
          } catch (error) {
            console.error('Login failed: ', error);
          }
        }
      }
  
      const fetchUsers = async () => {
        try {
          const response = await axios.get('users');
          users.value = response.data;
          console.log('Users fetched: ', users.value);
        } catch (error) {
          console.error('Error fetching users: ', error);
        }
      };

      onMounted(fetchUsers);

      const forgotPassword = () => {
        console.log('Redirecting to password recovery');
      };

      const register = () => {
        console.log('Redirecting to registration page')
      }
  
      return { email, password, showPassword, 
        valid, emailRules, passwordRules, 
        login, forgotPassword, register, users };
    },
  });
  </script>
  
  <style scoped>
  v-container {
    background: linear-gradient(to right, #000, #222);
    min-height: 100vh;
  }
  
  v-card {
    background: #121212;
    color: white;
    border-radius: 12px;
  }
  
  .v-img {
    border-radius: 12px;
    overflow: hidden;
  }
  </style>
  