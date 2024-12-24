

<script setup>
import Header from './MainHeader.vue'
import Footer from './MainFooter.vue'
import Main from './Main.vue'
import Login from './Login.vue'
import GoTopBtn from './GoTopBtn.vue'
import { useDisplay } from 'vuetify';
import { computed } from 'vue';
import MemType from './MemType.vue'
const { name } = useDisplay();
const displaySize = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'xs';
    case 'sm':
      return 'sm';
    case 'md':
      return 'md';
    case 'lg':
      return 'lg';
    case 'xl':
      return 'xl';
  }
  return undefined;
});
</script>

<template>
  <v-app>
    <Header />
    <v-main class="container">
      <div class="ly-inner">
        <MemType />
        </div>
      </v-main>
      <Footer />
      <GoTopBtn />
  </v-app>
</template>

<style scoped>

</style>