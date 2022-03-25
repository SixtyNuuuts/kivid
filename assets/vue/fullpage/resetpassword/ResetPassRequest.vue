<template>
    <div class="container fullpage">
        <div class="logo">
            <img src="../../../img/logo-kivid.svg" alt="Logo Kivid" />
        </div>

        <section id="request-reset-pass" class="kiv-block">
            <h2>Réinitialisez votre mot de passe</h2>
            <div class="register-form">
                <div class="text">
                    Entrez votre adresse mail et nous vous enverrons un lien
                    pour réinitialiser votre mot de passe.
                </div>

                <vs-input
                    :danger="validationMessage.email != null"
                    v-model="email"
                    @keyup="validationEmail"
                    label-placeholder="Email"
                    autocomplete="email"
                    type="email"
                    icon-after
                    :class="{
                        error: validationMessage.email && email,
                    }"
                >
                    <template v-if="validationMessage.email && email" #icon>
                        <i class="kiv-error error icon-24"></i>
                    </template>

                    <template
                        v-if="validationMessage.email && email"
                        #message-danger
                    >
                        {{ validationMessage.email }}
                    </template>
                </vs-input>

                <div
                    class="btn-container"
                    :class="{ disabled: btnLoadingResetPassRequest }"
                >
                    <vs-button
                        :disabled="
                            validationMessage.email ||
                            btnLoadingResetPassRequest ||
                            !email
                        "
                        :loading="btnLoadingResetPassRequest"
                        class="w-100"
                        type="submit"
                        @click="validResetPassRequest"
                        >Envoyer un e-mail de réinitialisation</vs-button
                    >
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import f from "../../services/function";
import Vue from "vue";

export default {
    data() {
        return {
            csrfTokenResetPassRequest: null,
            email: "",
            btnLoadingResetPassRequest: false,
            validationMessage: {
                email: null,
            },
        };
    },
    methods: {
        validResetPassRequest() {
            this.btnLoadingResetPassRequest = true;

            this.axios
                .post(`/reset-password`, {
                    _token: this.csrfTokenResetPassRequest,
                    email: this.email.toLowerCase(),
                })
                .then((response) => {
                    f.openSuccessNotificationStay(
                        "Email de réinitialisation envoyé",
                        response.data
                    );

                    this.btnLoadingResetPassRequest = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotificationStay("Erreur", errorMess);
                    this.btnLoadingResetPassRequest = false;
                });
        },
        validationEmail() {
            this.validationMessage.email = null;

            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(this.email).toLowerCase())) {
                this.validationMessage.email =
                    "Merci d'entrer un email valide.";
            }
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");
        document.body.classList.add("animated");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.csrfTokenResetPassRequest = data.csrfTokenResetPassRequest;
    },
};
</script>

<style lang="scss" scoped>
#request-reset-pass.kiv-block {
    max-width: 43rem;

    .text {
        font-size: 1.4rem;
        margin-bottom: 1.3rem;
        color: #c1b79d;
    }
}
</style>
