<template>
    <div class="main-wrap">
        <div class="visual-layout-area mobile-wrap">
            <div class="my-login-wrap">
                <div class="outlogin-box login-box">
                    <span class="main-login-photo">
                        <img alt=""
                            src="data:image/png;base64,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" />
                    </span>
                    <p class="login-txt">로그인 후<br>나만의 맞춤 정보를 이용하세요.</p>
                    <v-btn :to="{ name: 'login' }" color="primary" size="large" rounded>
                        로그인
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const handleLogin = () => {
    // 로그인 로직 처리
    console.log('로그인 버튼 클릭됨');
};
</script>

<style scoped>
@import '../../styles/login_box.css';
</style>
