<template>
    <div class="inner-wrapper">
        <div class="sub-group">
            <div class="sub-title-area">
                <h4 class="sub-title">검색결과</h4>
            </div>

            <SearchSetting />
            <!-- search -->
            <div class="search-wrap">
                <div class="search-box">
                    <div class="inp">
                        <v-text-field
                            append-inner-icon="btn-search-blue"
                            clearable
                            color="primary"
                            hide-details
                            placeholder="검색어 입력"
                            variant="outlined"
                             @click:append-inner="$router.push({ name: 'main' })"
                        />
                    </div>
                    <div class="hashtag-area">
                        <!-- 추천 검색어 -->
                        <MainRcmSch />
                    </div>
                </div>
            </div>
            <!--// search -->

                                <ServPdCtg  />
                                
                <!--// 검색결과 - 있음 -->
            <template style="display: block;">
                <!-- 검색결과  - 없음 -->
                <div class="search-result">
                    <div class="text">검색 결과</div>
                    <div class="desc">검색된 결과가 없습니다.</div>
                </div>
                <div class="btn-list">
                    <v-btn
                        color="primary"
                        rounded="lg"
                        size="x-large"
                        variant="flat"
                        @click="$router.push({ name: 'home' })"
                        >메인
                    </v-btn>
                </div>
                <!--// 검색결과  - 없음 -->
            </template>
            
        </div>
    </div>
    <!-- 팝업 -->
    <BasePupAlert :dialog-info="srhPupAlertInfo" />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import MainRcmSch from './MainRcmSch.vue'
import BasePupAlert from '../base/BasePupAlert.vue'
import ServPdCtg from './serv/ServPdCtg.vue'
import SearchSetting from './SearchSetting.vue'
//메인 팝업 정보 객체
let srhPupAlertInfo = reactive({
    toggle: false,
    text: '검색어를 입력해 주세요.',
    url: ''
})


//로딩상태(토글)
const loading = ref(false)

//초기 로딩시
const initLoding = ref(true)

//이전 검색어
const tempWord = ref('')


</script>
<style scoped>
@import '../styles/searchView.css';
@import '../styles/ServPdCtg.css';
</style>