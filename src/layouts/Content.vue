<template>
  <section class="content">
    <slot></slot>
  </section>
</template>
<style lang="scss" scoped>
  $footer-height: 83px;
  $header-height: 52px;

  .content {
    box-sizing: border-box;
    max-width: 1200px;
    width: 100%;
    padding: 30px;
    margin: 0 auto;
    min-height: calc(100vh - #{$header-height + $footer-height});
  }
</style>