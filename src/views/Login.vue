<template>
  <div class="login">
    <div class="login-body">
      <div class="text-left">
        <span class="logo"></span>
      </div>

      <div class="form-group">
        <label for="login">Login</label>
        <Input id="login" />
      </div>

      <div class="form-group">
        <label for="password">Passwod</label>
          <Input :type="'password'" toogle-password id="password" />
      </div>

      <div class="text-left">
        <Button class="btn-login" @click="login">Login</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  methods: {
    login() {
      console.log("LOGIN");

    }
  }
};
</script>
<style lang="scss" scoped>

.logo {
  display: inline-block;
  width: 118px;
  height: 18px;
  margin-bottom: 60px;
  margin-left: 120px;
  background: url('../assets/logo-ligth.png') no-repeat;
}

.login {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow: hidden;
  background: #222d32;
  justify-content: center;
  align-items: center;
}

label {
  color: #ffffff;
}

.btn-login {
  margin-left: 120px;
}

</style>
