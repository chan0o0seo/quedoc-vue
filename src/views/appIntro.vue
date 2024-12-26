

<script setup>
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';
import intro from '../components/intro/intro.vue';
import GoTopBtn from '../components/GoTopBtn.vue';
</script>

<template>
  <v-app>
    <MainHeader />
    <v-main class="main">
        <intro></intro>
      </v-main>
      <MainFooter />
      <GoTopBtn />
  </v-app>
</template>

<style scoped>

</style>