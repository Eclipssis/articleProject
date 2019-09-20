<template>
  <div class="loader" :class="[size, color]">Loading...</div>
</template>

<script>
  export default {
    name: "Spiner",

    props: {
      size: {
        type: String,
        default: ''
      },
      
      color: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

$default-color: #d8d8d8;
$default-second-color: rgba(255, 255, 255, 0.2);

$primary-color: #025ce231;
$primary-second-color: #007bffb2;

$spiner-border: 0.8em;
$spiner-border-small: 0.4em;

$spiner-default-size: 25px;
$spiner-small-size: 10px;

.loader,
.loader:after {
  border-radius: 50%;
  width: $spiner-default-size;
  height: $spiner-default-size;
}

.loader.small,
.loader.small:after {
  width: $spiner-small-size;
  height: $spiner-small-size;
}

.loader {
  display: inline-block;
  margin: 10px;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: $spiner-border solid $default-second-color;
  border-right: $spiner-border solid $default-second-color;
  border-bottom: $spiner-border solid $default-second-color;
  border-left: $spiner-border solid $default-color;
  transform: translateZ(0);
  animation: spinerAnimation 1.1s infinite linear;
}

.loader.small {
  border-top: $spiner-border-small solid $default-second-color;
  border-right: $spiner-border-small solid $default-second-color;
  border-bottom: $spiner-border-small solid $default-second-color;
  border-left: $spiner-border-small solid $default-color;
}

.btn .loader {
  margin: 0 0 0 10px;
}

.loader.primary {
  border-color: $primary-color;
  border-left-color: $primary-second-color;
}

@-webkit-keyframes spinerAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spinerAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>