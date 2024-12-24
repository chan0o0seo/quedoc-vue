<template>
    <div class="member">
        <div class="member-header">
            <h3 class="h-title">회원가입 (개인)</h3>
        </div>
        <div class="member-step">
            <div class="step-txt">서비스 이용약관</div>
            <div class="step-flow">
                <ul>
                    <li class="complete"><i>1단계 본인인증</i></li>
                    <li class="current"><i>2단계 서비스이용약관</i></li>
                    <li><i>3단계 정보입력</i></li>
                    <li><i>4단계 가입완료</i></li>
                </ul>
                <span class="blind">현재 2단계 진행중</span>
            </div>
        </div>
        <div class="member-text">
            <p class="text">서비스 이용약관에 동의해 주세요.</p>
        </div>
    </div>
</template>

<script setup>


//확인 버튼 이벤트
const submitForm = (v) => {
    //1단계 내용 pinia 저장
    //다음단계 버튼(다음 컴포넌트로 이동)
    emits('nextEvent', 2, v)
}
</script>
