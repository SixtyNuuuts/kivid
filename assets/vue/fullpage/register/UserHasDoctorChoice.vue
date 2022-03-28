<template>
    <section id="user-has-doctor-choice">
        <h1>Avez-vous&nbsp;un&nbsp;praticien ?</h1>
        <div class="btn-container">
            <vs-button
                class="w-100"
                @click="validUserHasDoctorChoice(false)"
                :class="{ secondary: $parent.userHasDoctor == true }"
            >
                Non, je n'en ai pas
            </vs-button>
            <vs-button
                class="w-100"
                @click="validUserHasDoctorChoice(true)"
                :class="{ secondary: $parent.userHasDoctor == false }"
            >
                Oui, j'ai un praticien
            </vs-button>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        validUserHasDoctorChoice(userHasDoctor) {
            this.$emit("userHasDoctorChoice", userHasDoctor);
        },
    },
};
</script>

<style lang="scss">
// @import "../../scss/variables";

#user-has-doctor-choice {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    max-height: 25rem;

    h1 {
        font-size: 2.1rem;
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