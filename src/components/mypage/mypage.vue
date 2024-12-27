<template>
    <div class ="sub-group my-page">
    <div class="sub-title-area">
        <h4 class="sub-title">MY</h4>
    </div>
    <div class="my-case-info">
        <div class="case-member">
            <p class="member-title">
                <span>테스트</span
                >님 안녕하세요!
            </p>

        </div>
        <div class="case-btn">
            <!-- 승인 대기중 상태에서 정보 변경 불가 -->
            <v-btn variant="text" @click="moveInfoUpd">
                정보변경
                <v-icon class="btn-arrow" />
            </v-btn>
        </div>
    </div>
    <div class="submenu-list">
        <v-row>
            <!-- MY타겟마케팅 모바일에서 비노출 -->
            <v-col
                v-for="(item, i) in items"
                cols="12"
                md="3"
                :class="item.link.name === 'mypgTarmkt' ? 'mo-customer' : ''"
            >
                <v-list :class="item.select" density="compact">
                    <v-list-item :value="item" link @click="movePage(item)">
                        <template v-slot:append>
                            <v-avatar>
                                <v-icon :class="item.alarm" :icon="item.icon" />
                            </v-avatar>
                        </template>
                        <v-list-item-title v-text="item.text" />
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </div>
    <div class="total-area">
        <div class="total">
            총&nbsp; <span>{??}건</span>
        </div>
        
        
    </div></div>
    <v-divider class="svc-divide" />
    
    
</template>

<script setup>
import { inject, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

//라우터 정보 객체
const router = useRouter()

//회원 정보
const memInfo = ref({})

//메뉴 설정
const items = ref([
    {
        link: { name: 'mypgAre' },
        icon: 'my-contract',
        text: 'MY예약',
        select: ''
    },
    {
        link: { name: 'mypgTarmkt' },
        icon: 'my-target',
        text: 'MY리뷰',
        select: ''
    },
    {
        link: { name: 'mypgProd' },
        icon: 'my-wishlist',
        text: '관심병원',
        select: ''
    },
    {
        link: { name: 'mypgQna' },
        icon: 'my-qa',
        text: 'MY문의',
        select: ''
    },
])

/**
 * 메뉴 선택 처리
 */
const handelMenuSelection = (ele) => {
    items.value.forEach((item) => {
        if (item.link.name === ele.name) {
            item.select = 'selected'
        } else {
            item.select = ''
        }
    })

    //MY타겟마케팅 상세일 경우 MY타겟마케팅 선택처리
    if (ele.name === 'mypgTarmktDetl') {
        const index = items.value.findIndex((item) => item.link.name === 'mypgTarmkt')
        items.value[index].select = 'selected'
    }
}

/**
 * 페이지 이동
 *
 * 1. 선택된 메뉴는 클래스를 지정하고 다른 메뉴는 클래스를 초기화한다.
 * 2. 선택된 메뉴 페이지로 이동한다.
 */
const movePage = (ele) => {
    //메뉴 선택 처리
    handelMenuSelection(ele.link)
    //페이지 이동
    router.push(ele.link)
}

/**
}

/**
 * 정보변경 페이지 이동
 *
 * 승인된 사용자('A')는 정보변경 페이지로 이동하고
 * 승인대기중인 사용자('R')는 알림 메시지를 출력한다.
 * - 추가: 반려(거절)된 사용자('D')도 정보변경으로 이동할 수 있다.
 *         반려사용자는 개인회원과 동일하게 처리한다.
 */
const moveInfoUpd = () => {
    if (memInfo.value.dbsnCusApvScd !== 'R') {
        //승인
        router.push({ name: 'mypgInfo' })
    } else {
        //그 외 상태
        basePupAlertInfo.text = '운영자의 승인이 대기중인 상태에서는 개인정보를 변경하실 수 없습니다.'
        basePupAlertInfo.toggle = true
    }
}



/**
 * 컴포넌트 마운트
 *
 * 컴포넌트가 마운트된 후 호출될 콜백을 등록한다.
 * 1. 회원정보 조회
 * 2. 마이페이지 레이아웃 최초 진입 시 현재 메뉴를 선택 처리한다.
 */


/**
 * 글로벌 리졸브 가드
 *
 * beforeEach와 유사하나 모든 컴포넌트 가드와 비동기 라우트 컴포넌트를
 * 불러온 후 네비게이션 가드를 확인하기 전에 호출된다는 차이가 있다.
 */
router.beforeResolve((to, from) => {
    //메뉴 선택 처리
    handelMenuSelection(to)
})
</script>

<style scoped>
@import '../../styles/mypage.css'
</style>

