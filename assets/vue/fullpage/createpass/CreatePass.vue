<template>
    <div class="container fullpage">
        <div class="logo">
            <img src="../../../img/logo-kivid.svg" alt="Logo Kivid" />
        </div>

        <section id="create-pass" class="kiv-block">
            <h2>Créer votre mot de passe</h2>
            <div class="register-form">
                <vs-input
                    type="password"
                    v-model="plainPassword"
                    label-placeholder="Mot de passe"
                    :visiblePassword="hasVisiblePassword"
                    icon-after
                    @keyup="validationPassword"
                    required
                    @click-icon="hasVisiblePassword = !hasVisiblePassword"
                    :progress="getSecurePassProgress"
                >
                    <template #icon>
                        <i v-if="!hasVisiblePassword" class="fas fa-eye"></i>
                        <i v-else class="fas fa-eye-slash"></i>
                    </template>

                    <template
                        v-if="getSecurePassProgress >= 100"
                        #message-success
                    >
                        Mot de passe sécurisé
                    </template>
                </vs-input>

                <vs-input
                    type="password"
                    v-model="passwordConfirm"
                    label-placeholder="Confirmation du mot de passe"
                    :visiblePassword="hasVisiblePasswordConfirm"
                    icon-after
                    @keyup="validationPassword"
                    required
                    @click-icon="
                        hasVisiblePasswordConfirm = !hasVisiblePasswordConfirm
                    "
                    :class="{
                        error:
                            validationMessage.password &&
                            plainPassword &&
                            passwordConfirm,
                    }"
                >
                    <template #icon>
                        <i
                            v-if="!hasVisiblePasswordConfirm"
                            class="fas fa-eye"
                        ></i>
                        <i v-else class="fas fa-eye-slash"></i>
                    </template>

                    <template
                        v-if="
                            validationMessage.password &&
                            plainPassword &&
                            passwordConfirm
                        "
                        #message-danger
                    >
                        {{ validationMessage.password }}
                    </template>
                </vs-input>

                <div
                    class="btn-container"
                    :class="{ disabled: btnLoadingCreatePass }"
                >
                    <vs-button
                        :disabled="
                            btnLoadingCreatePass ||
                            validationMessage.password ||
                            !plainPassword ||
                            !passwordConfirm
                        "
                        :loading="btnLoadingCreatePass"
                        class="w-100"
                        type="submit"
                        @click="validCreatePass"
                        >Valider</vs-button
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
            plainPassword: "",
            passwordConfirm: "",
            hasVisiblePassword: false,
            hasVisiblePasswordConfirm: false,
            csrfTokenCreatePass: null,
            btnLoadingCreatePass: false,
            validationMessage: {
                password: null,
            },
        };
    },
    methods: {
        validCreatePass() {
            this.btnLoadingCreatePass = true;

            this.axios
                .post(`/create-password`, {
                    _token: this.csrfTokenCreatePass,
                    plainPassword: this.plainPassword,
                })
                .then((response) => {
                    f.openSuccessNotificationStay(
                        "Mot de passe créé",
                        response.data
                    );

                    this.btnLoadingCreatePass = false;

                    setTimeout(() => {
                        document.location.href = `/connexion`;
                    }, 1000);
                })
                .catch((error) => {
                    console.log(error.response.data.detail);
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotificationStay("Erreur", errorMess);
                    this.btnLoadingCreatePass = false;
                });
        },
        validationPassword() {
            this.validationMessage.password = null;

            if (this.plainPassword !== this.passwordConfirm) {
                this.validationMessage.password =
                    "Les mots de passe ne correspondent pas.";
            }
        },
    },
    computed: {
        getSecurePassProgress() {
            let progress = 0;

            // at least one number
            if (/\d/.test(this.plainPassword)) {
                progress += 20;
            }

            // at least one capital letter
            if (/(.*[A-Z].*)/.test(this.plainPassword)) {
                progress += 20;
            }

            // at menons a lowercase
            if (/(.*[a-z].*)/.test(this.plainPassword)) {
                progress += 20;
            }

            // more than 9 digits
            if (this.plainPassword.length >= 9) {
                progress += 20;
            }

            // at least one special character
            if (/[^A-Za-z0-9]/.test(this.plainPassword)) {
                progress += 20;
            }

            return progress;
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");
        document.body.classList.add("animated");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.csrfTokenCreatePass = data.csrfTokenCreatePass;
    },
};
</script>

<style lang="scss" scoped>
#create-pass.kiv-block {
    max-width: 43rem;

    .vs-input-parent {
        margin-bottom: 1.8rem;
    }
}
</style>
