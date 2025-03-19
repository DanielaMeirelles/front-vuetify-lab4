<template>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" lg="4">
          <v-card class="pa-5" elevation="10">
            <v-card-title class="text-h5 text-center">Welcome back!</v-card-title>
            <v-card-subtitle class="text-center">Log into your account</v-card-subtitle>
            
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'"
              ></v-text-field>
              
              <v-btn block color="primary" type="submit">Log In</v-btn>
              
              <div class="text-center mt-2">
               <a href="#" class="text-blue" @click.prevent="forgotPassword">Forgot password?</a>
              </div>
            </v-form>
            
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
          <div class="v-responsive v-img flex-1-1" style="height: 900px;">
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
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'LoginPage',
    setup() {
      const email = ref('');
      const password = ref('');
      const showPassword = ref(false);
  
      const login = () => {
        console.log('Logging in with:', email.value, password.value);
      };
  
      const forgotPassword = () => {
        console.log('Redirecting to password recovery');
      };
  
      return { email, password, showPassword, login, forgotPassword };
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
  