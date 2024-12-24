<template>
  <div class="login">
      <div class="login-header">
          <h3 class="h-title">로그인</h3>
      </div>
      <v-form
          ref="loginUserForm"
          autocomplete="off"
          class="form-wrap"
          fast-fail
          validate-on="blur lazy"
          @keypress.enter.prevent
      >
          <div class="form-group">
              <v-label>아이디</v-label>
              <v-text-field
                  v-model="loginUserInfo.acc"
                  :rules="accRules"
                  aria-label="아이디"
                  autocomplete="nope"
                  clearable
                  color="primary"
                  density="comfortable"
                  hide-details="auto"
                  maxlength="60"
                  name="acc"
                  placeholder="이메일 아이디 입력"
                  required
                  variant="outlined"
              ></v-text-field>
          </div>
          <div class="form-group">
                  <v-label>비밀번호</v-label>
                  <v-text-field
                      v-model="loginUserInfo.pin"
                      :rules="pinRules"
                      aria-label="비밀번호"
                      autocomplete="nope"
                      clearable
                      color="primary"
                      density="comfortable"
                      hide-details="auto"
                      maxlength="20"
                      name="pin"
                      placeholder="비밀번호 입력"
                      required
                      type="password"
                      variant="outlined"
                  ></v-text-field>
          </div>
          <div class="form-checkbox">
              <v-checkbox
                  v-model="loginUserInfo.recycle"
                  class="check-all"
                  hide-details="none"
                  label="아이디 저장"
              ></v-checkbox>
          </div>
          <v-btn block color="primary" rounded="lg" size="large" type="submit" variant="flat" to="/memtype"> 로그인</v-btn>
      </v-form>
      <div class="link-wrap">
        <RouterLink  class="txt-link">회원가입</RouterLink>
        <RouterLink  class="txt-link">아이디 찾기·비밀번호 변경</RouterLink>
      </div>
  </div>
  <!-- 잉카인터넷 NOS 모듈 -->
  <NOSComponent ref="NOS_COMPONENT" :keypad="true" vendor="" />
</template>
<script setup>
import { ref, reactive } from 'vue'

const NOS_COMPONENT = ref(null);
const state = reactive({
    dynamicFields: false,
    modelValues: {},
    decryptDebug: '',
    NOS_SERIALIZED: '',
    NOS_INSTANCE: {}
})
const loginUserInfo = reactive({
    acc: '', //이메일주소
    pin: '', //비밀번호
    ecrPin: '', //암호화비밀번호
    recycle: false, //아이디 저장
    keypad: false //보안키패드
})
const pinRules = [(v) => !!v || '비밀번호를 입력해주세요.'] //비밀번호 룰
const accRules = [
    (v) => !!v || '아이디는 필수 입력입니다.',
    (v) => /.+@.+\..+/.test(v) || '이메일 형식으로 입력해주세요.'
]
</script>
<style scoped>
@import '../styles/login.css'
</style>