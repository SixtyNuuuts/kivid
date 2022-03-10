<template>
    <div class="btn-container">
        <vs-button class="w-100" @click="validUserTypeChoice('patient')">
            Je suis un particulier
        </vs-button>
        <vs-button class="w-100" @click="validUserTypeChoice('doctor')">
            Je suis un professionnel
        </vs-button>
    </div>
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
</style>