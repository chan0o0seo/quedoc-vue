
<script setup>

import { reactive, ref } from 'vue'
import router from '../router'
import MainRcmSch from './MainRcmSch.vue'
import MainCard from './MainCard.vue'
const searchTerms = ref(null)
const selectTerms = (terms) => {
    searchTerms.value = terms
}   
const searchService = () => {
        //서비스 검색 호출
        router.push({ name: 'search' })
}
</script>
<template>
    <div class="main-wrap">
        <div class="main-search-wrap">
            <div class="main-search-inner">
                <div class="input-wrap">
                    <v-text-field
                        v-model="searchTerms"
                        clearable
                        color="primary"
                        hide-details="auto"
                        placeholder="병원 이름 검색"
                        variant="outlined"
                        @keypress.enter="searchService"
                    ></v-text-field>
                    <v-btn block class="btn-search" @click="searchService">
                        <span class="sr-only">검색</span>
                    </v-btn>
                </div>
                <div class="hashtags">
                    <!-- 추천 검색어 -->
                    <MainRcmSch @select-event="selectTerms" />
                </div>
            </div>
        </div>
        <div class="main-card-wrap">
            <MainCard />
        </div>
    </div>
</template>
<style scoped>  

</style>