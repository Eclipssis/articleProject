<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "/assets/styles/main.scss";
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap&subset=cyrillic");

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  display: inline-block;
  width: 118px;
  height: 18px;
  &.logo-light {
    background: url('assets/images/logo-ligth.png') no-repeat;
  }

  &.logo-dark {
    background: url('assets/images/logo-dark.png') no-repeat;
  }
}

</style>
