
<script setup>
import mypage from './components/mypage.vue'
import mypage2 from './components/mypage2.vue'
import myinpo from './components/myinpo.vue'
import { useDisplay } from 'vuetify';
import { computed, reactive } from 'vue';
import myinpoChange from './components/myinpoChange.vue';
import mypageMemberDel from './components/mypageMemberDel.vue';
import ServPdCtg from './components/serv/ServPdCtg.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <RouterView />
</template>

<style scoped></style>