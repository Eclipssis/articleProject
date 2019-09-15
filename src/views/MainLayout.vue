<template>
  <div class="main-page wraper">
    <Header></Header>

    <Content>
      CONTENT
    </Content>

    <Footer></Footer>
  </div>
</template>
<script>

import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Content from "@/layouts/Content";

export default {
  name: 'MainLayout',
  components: {
    Footer,
    Header,
    Content
  }
}
</script>
