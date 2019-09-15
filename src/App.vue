<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap&subset=cyrillic");

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  label {
    min-width: 120px;
    font-size: 18px;
  }
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 20px;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-rigth {
  text-align: right;
}
</style>
