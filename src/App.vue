

<script setup>
import Header from './components/MainHeader.vue'
import Footer from './components/MainFooter.vue'
import GoTopBtn from './components/GoTopBtn.vue'
import AppMain from './components/appMain.vue'
import appLogin from './components/appLogin.vue'
import { useDisplay } from 'vuetify';
import { computed, reactive } from 'vue';
import SingupView from './views/SingupView.vue'
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
  <SingupView />
</template>

<style scoped>

</style>