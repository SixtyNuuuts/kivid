<template>
    <section id="user-type-choice">
        <h1>Dites-nous en plus à&nbsp;propos&nbsp;de&nbsp;vous</h1>
        <div class="btn-container">
            <vs-button
                class="w-100"
                @click="validUserTypeChoice('patient')"
                :class="{ secondary: $parent.userType == 'doctor' }"
            >
                Je suis un particulier
            </vs-button>
            <vs-button
                class="w-100"
                @click="validUserTypeChoice('doctor')"
                :class="{ secondary: $parent.userType == 'patient' }"
            >
                Je suis un professionnel
            </vs-button>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        validUserTypeChoice(userType) {
            this.$emit("userTypeChoice", userType);
        },
    },
};
</script>

<style lang="scss">
// @import "../../scss/variables";

#user-type-choice {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    max-height: 25rem;

    h1 {
        font-size: 2rem;
        text-align: center;

        @media (max-width: 400px) {
            font-size: 1.8rem;
        }
    }

    .btn-container {
        width: 100%;
        max-width: 24rem;

        .vs-button {
            &:not(:first-child) {
                margin-top: 2.5rem;
            }
        }
    }
}
</style>