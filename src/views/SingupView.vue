

<script setup>
import Header from '../components/MainHeader.vue'
import Footer from '../components/MainFooter.vue'
import { useDisplay } from 'vuetify';
import { computed, reactive } from 'vue';
import MemPsn from '../views/MemPsn.vue'
const { name } = useDisplay();
let BasePupConfirmInfo = reactive({
    toggle: true,
    text: '가상 텍스트',
    code: null
})

const movePage = (code) => {
}
</script>

<template>
  <v-app>
  <Header />
    <v-main class="container">
      <div class="ly-inner">
        <MemPsn />
      </div>
    </v-main>
<Footer />
  </v-app>
</template>

<style scoped>

</style>