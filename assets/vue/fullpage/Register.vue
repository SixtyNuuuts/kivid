<template>
    <div class="container fullpage">
        <div class="logo">
            <img
                v-if="userType === 'patient'"
                src="../../img/logo-kivid.svg"
                alt="Logo Kivid"
            />
            <img v-else src="../../img/logo-kivid-white.svg" alt="Logo Kivid" />
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
                    autocomplete="new-password"
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
                    autocomplete="new-password"
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

                <div>
                    <vs-checkbox
                        v-model="acceptCG"
                        :class="{ active: acceptCG }"
                    >
                        <span
                            >j'ai lu et j'accepte les
                            <a @click="modalCG = true"
                                >conditions générales</a
                            ></span
                        >
                    </vs-checkbox>
                </div>

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
                            !passwordConfirm ||
                            !acceptCG
                        "
                        :loading="btnLoadingRegister"
                        class="w-100"
                        type="submit"
                        @click="validRegistration"
                        ><span v-if="userType === 'patient'">S'inscrire</span
                        ><span v-else>S'inscrire</span></vs-button
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

            <div class="btn-container" v-if="userType === 'patient'">
                <vs-button
                    class="w-100 secondary btn-register-switch"
                    @click="switchUserType('doctor')"
                >
                    S'inscrire en tant que professionnel
                    <i class="fas fa-user-nurse"></i>
                </vs-button>
            </div>
            <div class="btn-container" v-if="userType === 'doctor'">
                <vs-button
                    class="w-100 secondary btn-register-switch"
                    @click="switchUserType('patient')"
                >
                    S'inscrire en tant que particulier
                    <i class="fas fa-user"></i>
                </vs-button>
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
        <vs-dialog width="450px" v-model="modalCG">
            <h2>Conditions Générales</h2>
            <CG />
            <div class="btn-container">
                <vs-button class="w-100" @click="validAcceptCG()"
                    >J'ai lu et j'accepte</vs-button
                >
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import f from "../services/function";
import Vue from "vue";
import CG from "./register/cg.vue";

export default {
    components: {
        CG,
    },
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
            modalCG: false,
            acceptCG: false,
        };
    },
    methods: {
        validAcceptCG() {
            this.acceptCG = true;
            this.modalCG = false;
        },
        validRegistration() {
            this.btnLoadingRegister = true;

            this.axios
                .post(`/inscription`, {
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
                        document.location.href = `/connexion`;
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
                document.location.href = `/connexion/praticien`;
            } else {
                document.location.href = `/connexion`;
            }
        },
        switchUserType(userType) {
            this.userType = userType;

            if (userType === "doctor") {
                document.body.classList.add("praticien");
            } else {
                document.body.classList.remove("praticien");
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

            // more than 9 digits
            if (this.registerDetails.plainPassword.length >= 9) {
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

        if (this.userType === "doctor") {
            document.body.classList.add("praticien");
        }

        // if (this.error) {
        //     f.openErrorNotificationStay("Erreur", this.error);
        // }
    },
};
</script>

<style lang="scss">
@import "../../scss/variables";

.vs-button.btn-register-switch {
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: transparent;
    color: #c1b79d;
    border: 0.1rem solid #e7dfcd;

    &:hover {
        background: transparent;
        color: #bbb196;
        border: 0.1rem solid #bbb196;
        box-shadow: none;
        transform: none;
    }

    i {
        font-size: 1.1rem;
        position: relative;
        top: -0.15rem;
        margin-left: 0.65rem;
    }

    .vs-button__content {
        padding: 0.9rem 1.8rem;
        padding-top: 1rem;
    }
}

body.praticien {
    .vs-button.btn-register-switch {
        i {
            font-size: 1rem;
        }
    }
}

.vs-dialog .vs-dialog__content h2 {
    margin-bottom: 1rem;
}

#register {
    .vs-checkbox-label {
        font-size: 1.3rem;
        color: #b5ac94;
        font-size: 1.2rem;
    }

    .vs-checkbox-content.active {
        .vs-checkbox-label {
            color: #222e54;
        }
    }

    .vs-checkbox-con {
        width: 19px;
        top: -0.1rem;
        height: 19px;
    }

    .vs-icon-check span .line2 {
        height: 9px;
        bottom: 2px;
    }

    .vs-icon-check span .line1 {
        height: 1px;
        bottom: 1px;
    }

    a {
        font-weight: 700;
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>