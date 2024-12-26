

<script setup>
import Header from '../components/MainHeader.vue'
import Footer from '../components/MainFooter.vue'
import GoTopBtn from '../components/GoTopBtn.vue'
</script>

<template>
  <v-app>
    <Header />
    <v-main class="main">
        <router-view></router-view>
      </v-main>
      <Footer />
      <GoTopBtn />
  </v-app>
</template>

<style scoped>

</style>