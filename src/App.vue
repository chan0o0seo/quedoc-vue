
<script setup>
import mypage from './components/mypage.vue'
import mypage2 from './components/mypage2.vue'
import myinpo from './components/myinpo.vue'
import { useDisplay } from 'vuetify';
import { computed, reactive } from 'vue';
import myinpoChange from './components/myinpoChange.vue';
import mypageMemberDel from './components/mypageMemberDel.vue';
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
  <router-view />
</template>

<style scoped></style>