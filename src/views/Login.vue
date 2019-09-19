<template>
  <div class="login">
    <span class="logo logo-light"></span>

    <form class="login-body">
      <div>
        <div class="login-hint">go to <router-link to="/articles" class="auth-link">main page</router-link> or</div>
        <h2 class="text-right display-inline-block">Login</h2>
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

      <div class="auth-buttons">
        <router-link to="/registration" class="auth-link">Register</router-link>
        <span> or</span>
        <Button class="btn-login" type="submit" :loading="loading" @click.prevent="onSingIn">Login</Button>
      </div>
    </form>
  </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      loading: false
    }
  },

  methods: {
    ...mapActions({
      singIn: 'auth/signIn'
    }),

    async onSingIn() {
      try {
        await this.singIn({ email: this.email, password: this.password })
        this.$router.push({name: 'ArticlesEdit'})
      } catch (error) {
        this.errorMessage = error
      } finally {
        this.loading = false
      }
    }
  }
};
</script>
