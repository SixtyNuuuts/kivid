<template>
    <div class="container fullpage">
        <vs-button
            v-if="activeStep != userChoice[firstStepName].step && !this.registerType"
            @click="previousStep != activeStep ? activeStep = previousStep : userChoice[firstStepName].step"
            class="btn-prev"
            circle
            floating
        >
            <i class="kiv-arrow-left icon-31"></i>
        </vs-button>
        <div id="logo">
            <img src="../../img/logo-kivid-gradient.svg" alt="Logo Kivid" />
            <h1>Kivid</h1>
        </div>
        <transition name="fade" mode="out-in">
            <UserTypeChoice
                v-if="activeStep == userChoice.userType.step"
                @userTypeChoice="setUserChoice"
            />
            <RegisterForm
                v-if="activeStep == userChoice.userIsRegistered.step"
                :userType="userChoice.userType.value"
                :csrfTokenRegister="csrfTokenRegister"
                :registerType="registerType"
                @userIsRegisteredChoice="setUserChoice"
            />
        </transition>
    </div>
</template>

<script>
import Vue from "vue";
import UserTypeChoice from "./register/UserTypeChoice.vue";
import RegisterForm from "./register/RegisterForm.vue";

export default {
    data() {
        return {
            csrfTokenRegister: null,
            registerType: null,
            firstStepName: 'userType',
            lastStepName: 'userIsRegistered',
            activeStep: 1,
            previousStep: 1,
            userChoice: {
                userType : { step: 1, value: null },
                userIsRegistered : { step: 2, value: null },
            },
        };
    },
    components: {
        UserTypeChoice,
        RegisterForm,
    },
    methods: {
        setUserChoice(choice) {
            this.userChoice[choice.type].value = choice.value;
            this.previousStep = this.activeStep;
            if(this.activeStep == this.userChoice[this.lastStepName].step && this.userChoice[this.lastStepName].value)
                document.location.href = `/connexion`;
            else
                this.activeStep = this.activeStep+1;
        },
        setActiveStep(num) {
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
        this.registerType = data.registerType;

        if(this.registerType === 'ffmkr') {
            this.setUserChoice({type: 'userType', value: 'doctor'});
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.container.fullpage {
    justify-content: center;

    .vs-button.btn-prev {
        opacity: 0;
        animation: 0.5s ease 0.2s forwards fadeEnter;
        color: $orange;
        box-shadow: 0rem 0.4rem 1.4rem 0rem rgba(251, 139, 104, 0.3);
        background: #fffdfc00;

        &:hover {
            box-shadow: 0rem 0.4rem 1.4rem 0rem rgba(251, 139, 104, 0.8);
        }
    }

    #logo {
        height: 19.8rem;
        width: 14rem;
        margin-left: 0.2rem;
        margin-bottom: 4.3rem;
        margin-top: 0.3rem;

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
