

<script setup>
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';
import MemType from '../components/MemType.vue';
import GoTopBtn from '../components/GoTopBtn.vue';
import Search from '../components/Search.vue';
</script>

<template>
  <v-app>
    <MainHeader />
    <v-main class="main">
        <Search />
      </v-main>
      <MainFooter />
      <GoTopBtn />
  </v-app>
</template>

<style scoped>

</style>