<template>
    <v-form
        ref="memPsnIdentVerfForm"
        autocomplete="off"
        class="form-wrap"
        fast-fail
        validate-on="blur lazy"
        @keypress.enter.prevent
        @submit.prevent="submitForm"
    >
        <div :class="mode === 'pup' ? 'form-type' : ''" class="form-box">
           
            <div class="form-group">
                <div class="ele-tit">
                    <v-label>이름</v-label>
                </div>
                <div class="input-wrap">
                    <v-text-field
                        v-model="memPsnIdentVerfInfo.nm"
                        :maxlength="10"
                        :readonly="formCntrObj['noSendLock'].disabled"
                        :rules="validateNm"
                        aria-label="이름"
                        color="primary"
                        density="comfortable"
                        hide-details="auto"
                        name="nm"
                        placeholder="이름 입력"
                        required
                        title="이름 입력"
                        variant="outlined"
                        @input="onlyString(memPsnIdentVerfInfo.nm)"
                    ></v-text-field>
                </div>
            </div>
            <div class="form-group">
                <div class="ele-tit">
                    <v-label>닉네임</v-label>
                </div>
                <div class="input-wrap">
                    <v-text-field
                        v-model="memPsnIdentVerfInfo.nick"
                        :maxlength="10"
                        :rules="validateNick"
                        aria-label="닉네임"
                        color="primary"
                        density="comfortable"
                        hide-details="auto"
                        name="nick"
                        placeholder="닉네임 입력"
                        required
                        title="닉네임 입력"
                        variant="outlined"
                        @input="onlyString(memPsnIdentVerfInfo.nm)"
                    ></v-text-field>
                </div>
            </div>
            <div class="form-group">
                <div class="ele-tit">
                    <v-label>주민등록번호</v-label>
                </div>
                <div class="jumin-wrap">
                    <div class="first">
                        <div class="input-wrap">
                            <v-text-field
                                v-model="memPsnIdentVerfInfo.bdy"
                                :maxlength="6"
                                :readonly="formCntrObj['noSendLock'].disabled"
                                :rules="validateBdy"
                                aria-label="주민등록번호 숫자 앞 6자리"
                                color="primary"
                                density="comfortable"
                                hide-details="auto"
                                name="bdy"
                                placeholder="앞 6자리"
                                required
                                title="주민등록번호 숫자 앞 6자리 입력"
                                variant="outlined"
                                @input="onlyNum(memPsnIdentVerfInfo.bdy)"
                            ></v-text-field>
                        </div>
                    </div>
                    <span class="space">-</span>
                    <div class="last">
                        <div class="input-wrap">
                            <v-text-field
                                v-model="memPsnIdentVerfInfo.sex"
                                :readonly="formCntrObj['noSendLock'].disabled"
                                :rules="validateSex"
                                aria-label="주민등록번호 숫자 뒤 1자리"
                                color="primary"
                                density="comfortable"
                                hide-details="none"
                                maxlength="1"
                                name="sex"
                                placeholder="뒤 1자리"
                                required
                                title="주민등록번호 숫자 뒤 1자리 입력"
                                variant="outlined"
                                @input="onlyNum2(memPsnIdentVerfInfo.sex)"
                                @blur="validate('sex')"
                            ></v-text-field>
                        </div>
                        <div class="masking">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="ele-tit">
                    <v-label>휴대폰번호</v-label>
                </div>
                <div class="input-wrap side-btn">
                    <div class="input-wrap">
                        <v-text-field
                            v-model="memPsnIdentVerfInfo.hon"
                            :maxlength="11"
                            :readonly="formCntrObj['noSendLock'].disabled"
                            :rules="validateHon"
                            aria-label="휴대폰번호"
                            color="primary"
                            density="comfortable"
                            hide-details="auto"
                            name="hon"
                            placeholder="[-] 없이 숫자만 입력"
                            required
                            title="휴대폰번호 숫자 최대 11자리 입력"
                            variant="outlined"
                            @input="[onlyNum3(memPsnIdentVerfInfo.hon), verificationNumberBtn()]"
                        ></v-text-field>
                    </div>
                </div>
            </div>
        </div>
        <template v-if="mode !== 'pup'">
            <div class="btn-wrap">
                <v-btn
                    class="default"
                    color="primary"
                    rounded="lg"
                    size="x-large"
                    type="submit"
                    variant="flat"
                >
                    다음
                </v-btn>
            </div>
        </template>
    </v-form>

    <BasePupAlert :dialog-info="BasePupAlertInfo" @confirm-event="closeAgreePop" />
    <BasePupConfirm :dialog-info="BasePupConfirmInfo" @confirm-event="movePage" @cancel-event="cnclProc" />

</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref, toRef } from 'vue'
import { useRouter } from 'vue-router'
import BasePupAlert from '../../../base/BasePupAlert.vue'
import BasePupConfirm from '../../../base/BasePupConfirm.vue'

import validateUtil from '../../../utils/validateUtil'


//라우터 정보 객체
const router = useRouter()

//props 설정
const props = defineProps({
    mode: { type: String, default: '' },
    code: { type: String, default: 'Y' }
})

//부모 컴포넌트 통신 객체
const emits = defineEmits(['nextEvent', 'activeEvent'])

//약관동의 팝업 정보 객체
let BasePupAlertInfo = reactive({
    toggle: false,
    text: ''
})

//BasePupConfirm 정보 객체
let BasePupConfirmInfo = reactive({
    toggle: false,
    text: '',
    code: null
})

//폼 정보 객체
const memPsnIdentVerfForm = ref()

//에러 객체 정보 객체
const memInfoErrorObject = reactive({})

//회원가입 본인확인 정보 객체
const memPsnIdentVerfInfo = reactive({
    wlGe: false, //휴대폰본인확인전체동의
    ueGe: false, //휴대폰본인확인이용동의
    psGe: false, //고유식별정보처리동의
    cmuGe: false, //통신사 이용약관 동의
    psnIfGe: false, //개인정보 수집 및 이용 동의
    ahGe: false, //개인정보 제3자 제공 동의
    nm: '', //이름
    nick: '', //닉네임
    bdy: '', //생년월일(주민등록번호 앞6자리)
    sex: '', //성별(주민등록번호 뒤1자리)
    hon: '', //휴대전화번호
    telType: '', //통신사선택
    savingTelType: '', //통신사선택 알뜰폰
    ctsn: '', //인증번호
    ctserverkeyhon: '', //인증KEY(서버)
    chk: 'Y' //회원가입 체크여부
})

/**
 * 폼 컨트롤 객체
 *
 * 버튼 활성화 및 텍스트를 제어한다.
 */
const formCntrObj = reactive({
    noSendLock: { disabled: false },
    noCertLock: { disabled: false },
    noStyl: { disabled: true, text: 'text-tip error' },
    submitBtn: { disabled: true }
})

/**
 * 이름 유효성 룰
 *
 * 이름 유효성 룰을 정의한다.
 */
const validateNm = [
    (value) => {
        if (value) {
            return true
        } else {
            return '이름은 필수입력입니다.'
        }
    }
]
/* 닉네임 유효성 룰 */
const validateNick = [
    (value) => {
        if (value) {
            return true
        } else {
            return '닉네임은 필수입력입니다.'
        }
    }
]

/**
 * 주민등록번호 앞자리 유효성 룰
 *
 * 주민등록번호 앞자리 유효성 룰을 정의한다.
 */
const validateBdy = [
    (value) => {
        if (value) {
            return true
        } else {
            return '주민등록번호는 필수 입력입니다.'
        }
    },
    (value) => {
        if (!validateUtil.uak(value)) {
            return '만 19세 미만은 회원가입이 불가합니다.'
        } else {
            return true
        }
    },
    (value) => {
        if (value.length < 6) {
            return '주민등록번호는 필수 입력입니다.'
        } else {
            return true
        }
    }
]

/**
 * 주민등록번호 뒷자리 유효성 룰
 *
 * 주민등록번호 뒷자리 유효성 룰을 정의한다.
 */
const validateSex = [
    (value) => {
        if (value) {
            return true
        } else {
            //주민등록번호 앞자리 객체를 찾는다.
            const validateObj = memPsnIdentVerfForm.value.items.find((element) => element.id === 'bdy')
            //에러메시지 값이 있을경우
            if (validateObj.errorMessages.length > 0) {
                //에러메시지 값 초기화
                validateObj.errorMessages.length = 0
                validateObj.errorMessages.push('주민등록번호는 필수 입력입니다.')
            } else {
                validateObj.errorMessages.push('주민등록번호는 필수 입력입니다.')
            }
            return false
        }
    }
]

/**
 * 휴대폰번호 유효성 룰
 *
 * 휴대폰번호 유효성 룰을 정의한다.
 */
const validateHon = [
    (value) => {
        if (value) {
            return true
        } else {
            return '휴대폰번호는 필수 입력입니다.'
        }
    }
]


/**
 * 이름 입력 이벤트
 *
 * 이름 입력 이벤트 리스너
 */
const onlyString = (value) => {
    //문자열 값 유효성 검증
    if (!validateUtil.nameChk(value) || memPsnIdentVerfInfo.nm.length > 10) {
        memPsnIdentVerfInfo.nm = value.replace(/[0-9~!@#$%^*()+\-=?;:`",.<>{|}[\]\\/_'&\s]/g, '')
        if (memPsnIdentVerfInfo.nm.length > 10) {
            memPsnIdentVerfInfo.nm = memPsnIdentVerfInfo.nm.slice(0, 10)
        }
        return false
    }
}

/**
 * 주민등록번호 앞자리 입력 이벤트
 *
 * 주민등록번호 앞자리 입력 이벤트 리스너
 */
const onlyNum = (value) => {
    //정수값 유효성 검증
    if (!validateUtil.numChk(value) || memPsnIdentVerfInfo.bdy.length > 6) {
        memPsnIdentVerfInfo.bdy = value.replace(/\D/g, '')
        return false
    }
}

/**
 * 주민등록번호 뒷자리 입력 이벤트
 *
 * 주민등록번호 뒷자리 입력 이벤트 리스너
 */
const onlyNum2 = (value) => {
    //정수값 유효성 검증
    if (!validateUtil.numChk(value) || memPsnIdentVerfInfo.sex.length > 1) {
        memPsnIdentVerfInfo.sex = value.replace(/\D/g, '')
        return false
    }
}

/**
 * 휴대폰번호 입력 이벤트
 *
 * 휴대폰번호 입력 이벤트 리스너
 */
const onlyNum3 = (value) => {
    //정수값 유효성 검증
    if (!validateUtil.numChk(value) || memPsnIdentVerfInfo.hon.length > 11) {
        memPsnIdentVerfInfo.hon = value.replace(/\D/g, '')
        return false
    }
}

/**
 * 인증번호 입력 이벤트
 *
 * 인증번호 입력 이벤트 리스너
 */
const onlyNum4 = (value) => {
    //정수값 유효성 검증
    if (!validateUtil.numChk(value) || memPsnIdentVerfInfo.ctsn.length > 6) {
        memPsnIdentVerfInfo.ctsn = value.replace(/\D/g, '')
        return false


    }
}

/**
 * 휴대폰번호 입력 이벤트
 *
 * 휴대폰번호 입력 이벤트 리스너
 * 인증번호전송 버튼 활성화를 제어한다.
 */
const verificationNumberBtn = () => {
    //휴대폰번호 입력값이 11자리일 경우 버튼을 활성화 한다.
    if (memPsnIdentVerfInfo.hon?.length == 11) {
        formCntrObj['noSend'].disabled = false
        return false
    } else {
        formCntrObj['noSend'].disabled = true
        return true
    }
}

/**
 * 페이지 이동
 *
 * 로그인 페이지로 이동한다.
 */
const movePage = (code) => {
    if (code === 'userCheck') {
        //로그인 페이지로 이동
        router.push({ name: 'login' })
    } else {
        //인증번호전송 필수 입력 readonly
        formCntrObj['noSendLock'].disabled = false
    }
}
const submitForm = async () => {
    const { valid } = await memPsnIdentVerfForm.value.validate()
    alert('hi');

    if (valid) {
        //emit 호출
        emits('nextEvent', memPsnIdentVerfInfo)
    }

    return false
}


</script>
<style scoped>
.rounded-lg {
    border-radius: 1.2rem !important;
}
.btn-wrap .default {
    width: 22.4rem;
}
@media only screen and (max-width: 960px) {
    .btn-wrap .default {
        width: 100%;
    }
}

</style>
