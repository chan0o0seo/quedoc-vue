
<script setup>

import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const searchTerms = ref(null)
const selectTerms = (terms) => {
    searchTerms.value = terms
}   
const searchService = () => {
    if (!searchTerms.value) {
        //검색어 미입력
        mainPupAlertInfo.toggle = true
    } else {
        //서비스 검색 호출
        router.push({ name: 'search', state: { searchParams: { q: searchTerms.value } } })
    }
}
</script>
<template>
    <div class="main-wrap">
        <div class="visual-layout-area">
            <!-- PC전용 로그인 -->
            <div class="my-login-wrap pc-wrap">
            </div>
        </div>
        <div class="main-search-wrap">
            <div class="main-search-inner">
                <div class="input-wrap">
                    <v-text-field
                        v-model="searchTerms"
                        clearable
                        color="primary"
                        hide-details="auto"
                        placeholder="상품명, 해시태그"
                        variant="outlined"
                        @keypress.enter="searchService"
                    ></v-text-field>
                    <v-btn block class="btn-search" @click="searchService">
                        <span class="sr-only">검색</span>
                    </v-btn>
                </div>
                <div class="hashtags">
                    <!-- 추천 검색어 -
                    <MainRcmSch @select-event="selectTerms" />-->
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '../styles/Main.css';
</style>