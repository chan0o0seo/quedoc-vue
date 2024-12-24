<template>
    <div class="main-wrap">
        <div class="main-search-wrap">
            <div class="main-search-inner">
                <div class="input-wrap">
                    <v-text-field v-model="searchTerms" clearable color="primary" hide-details="auto"
                        placeholder="상품명, 해시태그" variant="outlined"></v-text-field>
                    <v-btn block class="btn-search">
                        <span class="sr-only"></span>
                    </v-btn>
                </div>
                <div class="hashtags">
                    <!-- 추천 검색어 -->
                    <MainRcmSch @select-event="selectTerms" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

</script>

<style scoped>
@import '../../styles/search.css';

</style>