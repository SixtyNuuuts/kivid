<template>
    <div class="container fullpage">
        <div class="logo">
            <img src="../../img/logo-kivid.svg" alt="Logo Kivid" />
        </div>

        <section id="register" class="kiv-block">
            <h2 v-if="userType === 'patient'">Inscription</h2>
            <h2 v-if="userType === 'doctor'">Inscription praticien</h2>
            <div class="register-form">
                <vs-input
                    :danger="validationMessage.email != null"
                    v-model="registerDetails.email"
                    @keyup="validationEmail"
                    label-placeholder="Email"
                    autocomplete="email"
                    type="email"
                    icon-after
                    :class="{
                        error: validationMessage.email && registerDetails.email,
                    }"
                >
                    <template
                        v-if="validationMessage.email && registerDetails.email"
                        #icon
                    >
                        <i class="kiv-error error icon-24"></i>
                    </template>

                    <template
                        v-if="validationMessage.email && registerDetails.email"
                        #message-danger
                    >
                        {{ validationMessage.email }}
                    </template>
                </vs-input>

                <vs-input
                    type="password"
                    v-model="registerDetails.plainPassword"
                    label-placeholder="Mot de passe"
                    :visiblePassword="hasVisiblePassword"
                    icon-after
                    @keyup="validationPassword"
                    required
                    @click-icon="hasVisiblePassword = !hasVisiblePassword"
                    :progress="getSecurePassProgress"
                    autocomplete="off"
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
                            registerDetails.plainPassword &&
                            passwordConfirm,
                    }"
                    autocomplete="off"
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
                            registerDetails.plainPassword &&
                            passwordConfirm
                        "
                        #message-danger
                    >
                        {{ validationMessage.password }}
                    </template>
                </vs-input>

                <div
                    class="btn-container"
                    :class="{ disabled: btnLoadingRegister }"
                >
                    <vs-button
                        :disabled="
                            btnLoadingRegister ||
                            validationMessage.email ||
                            validationMessage.password ||
                            !registerDetails.email ||
                            !registerDetails.plainPassword ||
                            !passwordConfirm
                        "
                        :loading="btnLoadingRegister"
                        class="w-100"
                        type="submit"
                        @click="validRegistration"
                        >S'inscrire</vs-button
                    >
                </div>
                <div class="sign-up">
                    Vous avez déjà un compte ?
                    <a @click="login">Se connecter</a>
                </div>
            </div>

            <div class="divider">
                <div class="divider-text">ou</div>
            </div>

            <div class="btn-container social-register">
                <vs-button class="w-100" @click="registerOauth('facebook')">
                    S'inscrire avec <i class="fab fa-facebook-f"></i
                ></vs-button>

                <vs-button class="w-100" @click="registerOauth('google')"
                    >S'inscrire avec <i class="fab fa-google"></i
                ></vs-button>
            </div>
        </section>
    </div>
</template>

<script>
import f from "../services/function";
import Vue from "vue";

export default {
    data() {
        return {
            registerDetails: {
                email: "",
                plainPassword: "",
            },
            validationMessage: {
                email: null,
                password: null,
            },
            userType: null,
            passwordConfirm: "",
            hasVisiblePassword: false,
            hasVisiblePasswordConfirm: false,
            csrfTokenRegister: null,
            btnLoadingRegister: false,
        };
    },
    methods: {
        validRegistration() {
            this.btnLoadingRegister = true;

            this.axios
                .post(`/register`, {
                    _token: this.csrfTokenRegister,
                    email: this.registerDetails.email,
                    plainPassword: this.registerDetails.plainPassword,
                    userType: this.userType,
                })
                .then((response) => {
                    f.openSuccessNotificationStay(
                        "Inscription validée",
                        response.data
                    );

                    this.registerDetails = {
                        email: "",
                        plainPassword: "",
                    };

                    this.btnLoadingRegister = false;

                    setTimeout(() => {
                        document.location.href = `/login`;
                    }, 2000);
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotificationStay("Erreur", errorMess);
                    this.btnLoadingRegister = false;
                });
        },
        validationEmail() {
            this.validationMessage.email = null;

            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(this.registerDetails.email).toLowerCase())) {
                this.validationMessage.email =
                    "Merci d'entrer un email valide.";
            }
        },
        validationPassword() {
            this.validationMessage.password = null;

            if (this.registerDetails.plainPassword !== this.passwordConfirm) {
                this.validationMessage.password =
                    "Les mots de passe ne correspondent pas.";
            }
        },
        registerOauth(social) {
            document.location.href = `/oauth/connect/${this.userType}/${social}`;
        },
        login() {
            if ("doctor" === this.userType) {
                document.location.href = `/login/praticien`;
            } else {
                document.location.href = `/login`;
            }
        },
    },
    computed: {
        getSecurePassProgress() {
            let progress = 0;

            // at least one number
            if (/\d/.test(this.registerDetails.plainPassword)) {
                progress += 20;
            }

            // at least one capital letter
            if (/(.*[A-Z].*)/.test(this.registerDetails.plainPassword)) {
                progress += 20;
            }

            // at menons a lowercase
            if (/(.*[a-z].*)/.test(this.registerDetails.plainPassword)) {
                progress += 20;
            }

            // more than 5 digits
            if (this.registerDetails.plainPassword.length >= 6) {
                progress += 20;
            }

            // at least one special character
            if (/[^A-Za-z0-9]/.test(this.registerDetails.plainPassword)) {
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

        this.userType = data.userType;
        this.csrfTokenRegister = data.csrfTokenRegister;

        // if (this.error) {
        //     f.openErrorNotificationStay("Erreur", this.error);
        // }
    },
};
</script>

<style lang="scss">
@import "../../scss/variables";
</style>