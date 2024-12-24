

<script setup>
import Header from './MainHeader.vue'
import Footer from './MainFooter.vue'
import Login from './Login.vue'
import GoTopBtn from './GoTopBtn.vue'
</script>

<template>
  <v-app>
    <Header />
    <v-main class="container">
      <div class="ly-inner">
        <Login />
        </div>
      </v-main>
      <Footer />
      <GoTopBtn />
  </v-app>
</template>

<style scoped>

</style>