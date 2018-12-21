<template>
  <div id="app">
    <Layout>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/layout/layout.vue';

export default {
  name: 'App',
  components: { Layout },
};
</script>

<style lang="scss">

  @import "assets/scss/main.scss";
  #nav {
  }
</style>
