

<script setup>
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';
import MemType from '../components/MemType.vue';
import GoTopBtn from '../components/GoTopBtn.vue';
</script>

<template>
  <v-app>
    <MainHeader />
    <v-main class="container">
      <div class="ly-inner">
        <MemType />
        </div>
      </v-main>
      <MainFooter />
      <GoTopBtn />
  </v-app>
</template>

<style scoped>

</style>