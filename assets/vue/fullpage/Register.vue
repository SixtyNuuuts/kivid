<template>
    <div class="container fullpage">
        <div class="register-steps">
            <div class="step">1</div>
            <div class="step">2</div>
            <div class="step">3</div>
        </div>
        <div class="logo">
            <img src="../../img/logo-kivid-gradient.svg" alt="Logo Kivid" />
            <h1>Kivid</h1>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    data() {
        return {
            userType: null,
            csrfTokenRegister: null,
        };
    },
    methods: {
        validUserTypeChoice(userType) {
            this.userType = userType;
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");
        document.body.classList.add("animated");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.userType = data.userType;
        this.csrfTokenRegister = data.csrfTokenRegister;
    },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.container.fullpage {
    .register-steps {
        max-width: 20rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 7rem;
        position: relative;

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
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            border: 1px solid $orange;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4rem;
            font-weight: 600;
            color: $orange;
            background-color: #faf8f4;
        }
    }

    .logo {
        h1 {
            color: $orange;
            font-weight: 400;
            font-size: 5.8rem;
            margin-top: 0.9rem;
            text-align: center;
            letter-spacing: 0.1rem;
        }
    }
}
</style>
