<template>
  <div class="registration">
    <span class="logo logo-light"></span>
    
    <div class="registration-body">
      <div>
        <div class="login-hint">go to <router-link to="/articles" class="auth-link">main page</router-link> or</div>
        <h2 class="text-right display-inline-block">Registration</h2>
      </div>

      <div v-if="errorMessage" class="badge badge-danger">
        {{errorMessage}}
      </div>

      <div class="form-group">
        <label for="login">Email</label>
        <Input id="login" v-model="email"/>
      </div>

      <div class="form-group">
        <label for="password">Passwod</label>
          <Input :type="'password'" id="password" v-model="password"/>
      </div>

      <!-- TODO: add field repeat password-->
			<!-- <div class="form-group">
        <label for="password">Repeat password</label>
          <Input :type="'password'" toogle-password id="password" v-model="repeatPassword"/>
      </div> -->

      <div class="auth-buttons">
        <router-link to="/login" class="auth-link">Log in</router-link>
        <span> or</span>
        <Button class="btn-login" type="submit" :loading="loading" @click.prevent="register">Register</Button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: "Registration",

  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
      loading: false
    }
  },

  methods: {
    ...mapActions({
      createUser: 'auth/createUser'
    }),

    async register() {
      try {
        this.loading = true 
        await this.createUser({ email: this.email, password: this.password })
        this.$router.push({name: 'Main'})
      } catch (error) {
        this.errorMessage = error
      } finally {
        this.loading = false
      }
    }
  }
};
</script>
