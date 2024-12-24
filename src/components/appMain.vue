

<script setup>
import Header from './MainHeader.vue'
import Footer from './MainFooter.vue'
import Main from './Main.vue'
import GoTopBtn from './GoTopBtn.vue'
</script>

<template>
  <v-app>
    <Header />
    <v-main class="main">
        <Main />
        
      </v-main>
      <Footer />
      <GoTopBtn />
  </v-app>
</template>

<style scoped>

</style>