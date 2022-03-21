<template>
    <div class="container fullpage">
        <vs-button
            v-if="activeStep != 1"
            @click="
                activeStep != previousStep
                    ? (activeStep = previousStep)
                    : activeStep == 3
                    ? (activeStep = 2)
                    : (activeStep = 1)
            "
            class="btn-prev"
            circle
            floating
        >
            <i class="kiv-arrow-left icon-31"></i>
        </vs-button>
        <div id="register-steps">
            <div
                class="step"
                :class="{ active: activeStep == 1 }"
                @click="setActiveStep(1)"
            >
                1
            </div>
            <div
                class="step"
                :class="{
                    active: activeStep == 2,
                    desactive: activeStep == 3 && userType == 'doctor',
                }"
                @click="setActiveStep(2)"
                :disabled="!userType"
            >
                2
            </div>
            <div
                class="step"
                :class="{ active: activeStep == 3 }"
                @click="setActiveStep(3)"
                :disabled="userHasDoctor === null"
            >
                3
            </div>
        </div>
        <div id="logo">
            <img src="../../img/logo-kivid-gradient.svg" alt="Logo Kivid" />
            <h1>Kivid</h1>
        </div>
        <transition name="fade" mode="out-in">
            <UserTypeChoice
                v-if="activeStep == 1"
                @userTypeChoice="setUserTypeChoice"
            />
            <UserHasDoctorChoice
                v-if="activeStep == 2"
                @userHasDoctorChoice="setUserHasDoctorChoice"
            />
            <RegisterForm
                v-if="activeStep == 3"
                :userType="userType"
                :userHasDoctor="userHasDoctor"
                :csrfTokenRegister="csrfTokenRegister"
            />
        </transition>
    </div>
</template>

<script>
import Vue from "vue";
import UserTypeChoice from "./register/steps/UserTypeChoice.vue";
import UserHasDoctorChoice from "./register/steps/UserHasDoctorChoice.vue";
import RegisterForm from "./register/RegisterForm.vue";

export default {
    data() {
        return {
            csrfTokenRegister: null,
            activeStep: 1,
            previousStep: 1,
            userType: null,
            userHasDoctor: null,
        };
    },
    components: {
        UserTypeChoice,
        UserHasDoctorChoice,
        RegisterForm,
    },
    methods: {
        setUserTypeChoice(userType) {
            this.userType = userType;
            this.previousStep = this.activeStep;
            this.activeStep = userType == "patient" ? 2 : 3;
        },
        setUserHasDoctorChoice(userHasDoctor) {
            this.userHasDoctor = userHasDoctor;
            this.previousStep = this.activeStep;
            this.activeStep = 3;
        },
        setActiveStep(num) {
            if (num == 2 && !this.userType) {
                return false;
            }
            if (num == 3 && this.userHasDoctor === null) {
                return false;
            }
            this.activeStep = num;
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");
        document.body.classList.add("animated");
        document.body.classList.add("disable-scrollbar");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.csrfTokenRegister = data.csrfTokenRegister;
    },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.container.fullpage {
    justify-content: flex-start;

    .vs-button.btn-prev {
        opacity: 0;
        animation: 0.5s ease 0.2s forwards fadeEnter;
    }

    #register-steps {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 5rem;
        position: relative;
        max-width: 17rem;
        margin-bottom: 4.5rem;

        @media (min-width: 1250px) {
            margin-top: 3rem;
        }

        &::after {
            content: "";
            display: block;
            height: 1px;
            width: 100%;
            background-color: $orange;
            position: absolute;
            top: 50%;
            z-index: -1;
        }

        .step {
            border-radius: 50%;
            border: 1px solid $orange;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            color: $orange;
            background-color: #faf8f4;
            width: 3.2rem;
            height: 3.2rem;
            font-size: 1.1rem;
            transition: all 0.5s;
            cursor: pointer;
            user-select: none;

            &.active {
                color: #faf8f4;
                background-color: $orange;
            }

            &.desactive {
                border: 1px solid rgba(255, 104, 56, 0.25);
                color: rgba(255, 104, 56, 0.25);
                pointer-events: none;
            }

            &[disabled] {
                opacity: 1 !important;
                cursor: initial;
            }
        }
    }

    #logo {
        height: 19.8rem;
        width: 14rem;
        margin-left: 0.2rem;
        margin-bottom: 5.4rem;

        h1 {
            color: $orange;
            font-weight: 400;
            margin-top: 0.9rem;
            text-align: center;
            margin-bottom: 0;
            font-size: 4.3rem;
            letter-spacing: 0.25rem;
        }
    }
}
</style>
