<template>
    <section id="register-form" class="kiv-block">
        <div>
            <h2 v-if="userType === 'patient'">Inscription</h2>
            <h2 v-if="userType === 'doctor'">Inscription praticien <span v-if="registerType === 'ffmkr'">FFMKR</span></h2>

            <div v-if="!formLoadingRegister">
                <div v-if="registerType === 'ffmkr'" class="ffmkr-check-register-form">
                    <p>Veuillez entrer l'email utilisé sur votre compte FFMKR</p>
                    <vs-input
                        :danger="validationMessage.email != null"
                        v-model="registerDetails.email"
                        @keyup="validationEmail"
                        label-placeholder="Email"
                        autocomplete="email"
                        type="email"
                        icon-after
                        :class="{
                            error:
                                (validationMessage.email &&
                                    registerDetails.email) ||
                                (emptyMessage.email && !registerDetails.email),
                        }"
                    >
                        <template
                            v-if="validationMessage.email && registerDetails.email"
                            #icon
                        >
                            <i class="kiv-error error icon-24"></i>
                        </template>

                        <template
                            v-if="
                                (validationMessage.email &&
                                    registerDetails.email) ||
                                (emptyMessage.email && !registerDetails.email)
                            "
                            #message-danger
                        >
                            <span
                                v-if="
                                    validationMessage.email && registerDetails.email
                                "
                                >{{ validationMessage.email }}</span
                            >
                            <span
                                v-if="emptyMessage.email && !registerDetails.email"
                                >{{ emptyMessage.email }}</span
                            >
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
                        :class="{
                            empty: !registerDetails.plainPassword,
                            error:
                                emptyMessage.plainPassword &&
                                !registerDetails.plainPassword,
                        }"
                    >
                        <template #icon>
                            <i v-if="!hasVisiblePassword" class="fas fa-eye"></i>
                            <i v-else class="fas fa-eye-slash"></i>
                        </template>

                        <template
                            v-if="
                                emptyMessage.plainPassword &&
                                !registerDetails.plainPassword
                            "
                            #message-danger
                        >
                            {{ emptyMessage.plainPassword }}
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
                                (validationMessage.password &&
                                    registerDetails.plainPassword &&
                                    passwordConfirm) ||
                                (emptyMessage.passwordConfirm && !passwordConfirm),
                            empty: !passwordConfirm,
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
                                (validationMessage.password &&
                                    registerDetails.plainPassword &&
                                    passwordConfirm) ||
                                (emptyMessage.passwordConfirm && !passwordConfirm)
                            "
                            #message-danger
                        >
                            <span
                                v-if="
                                    validationMessage.password &&
                                    registerDetails.plainPassword &&
                                    passwordConfirm
                                "
                                >{{ validationMessage.password }}</span
                            >
                            <span
                                v-if="
                                    emptyMessage.passwordConfirm && !passwordConfirm
                                "
                                >{{ emptyMessage.passwordConfirm }}</span
                            >
                        </template>
                    </vs-input>

                    <div
                        class="btn-container"
                        :class="{ disabled: btnLoadingRegister }"
                    >
                        <vs-button
                            :loading="btnLoadingRegister"
                            class="w-100"
                            type="submit"
                            @click="validRegistration"
                        >
                            <span>S'inscrire avec <img class="logo-ffmkr" src="/img/logo-kivid-FFMKR-white.svg" alt="Logo FFMKR"></span>
                        </vs-button>
                    </div>
                </div>
                <div v-else class="register-form">
                    <div class="btn-container social-register">
                        <transition name="fade">
                            <div>
                                <vs-button
                                    class="w-100"
                                    @click="registerOauth('facebook')"
                                >
                                    S'inscrire avec <i class="fab fa-facebook-f"></i
                                ></vs-button>

                                <vs-button
                                    class="w-100"
                                    @click="registerOauth('google')"
                                    >S'inscrire avec <i class="fab fa-google"></i
                                ></vs-button>
                            </div>
                        </transition>
                    </div>

                    <div class="divider">
                        <div class="divider-text">ou</div>
                    </div>

                    <vs-input
                        v-model="registerDetails.lastname"
                        label-placeholder="Nom"
                        autocomplete="family-name"
                        icon-after
                        :class="{
                            error:
                                emptyMessage.lastname && !registerDetails.lastname,
                        }"
                    >
                        <template
                            v-if="
                                emptyMessage.lastname && !registerDetails.lastname
                            "
                            #message-danger
                        >
                            {{ emptyMessage.lastname }}
                        </template>
                    </vs-input>

                    <vs-input
                        v-model="registerDetails.firstname"
                        label-placeholder="Prénom"
                        autocomplete="given-name"
                        icon-after
                        :class="{
                            error:
                                emptyMessage.firstname &&
                                !registerDetails.firstname,
                        }"
                    >
                        <template
                            v-if="
                                emptyMessage.firstname && !registerDetails.firstname
                            "
                            #message-danger
                        >
                            {{ emptyMessage.firstname }}
                        </template>
                    </vs-input>

                    <vs-input
                        :danger="validationMessage.email != null"
                        v-model="registerDetails.email"
                        @keyup="validationEmail"
                        label-placeholder="Email"
                        autocomplete="email"
                        type="email"
                        icon-after
                        :class="{
                            error:
                                (validationMessage.email &&
                                    registerDetails.email) ||
                                (emptyMessage.email && !registerDetails.email),
                        }"
                    >
                        <template
                            v-if="validationMessage.email && registerDetails.email"
                            #icon
                        >
                            <i class="kiv-error error icon-24"></i>
                        </template>

                        <template
                            v-if="
                                (validationMessage.email &&
                                    registerDetails.email) ||
                                (emptyMessage.email && !registerDetails.email)
                            "
                            #message-danger
                        >
                            <span
                                v-if="
                                    validationMessage.email && registerDetails.email
                                "
                                >{{ validationMessage.email }}</span
                            >
                            <span
                                v-if="emptyMessage.email && !registerDetails.email"
                                >{{ emptyMessage.email }}</span
                            >
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
                        :class="{
                            empty: !registerDetails.plainPassword,
                            error:
                                emptyMessage.plainPassword &&
                                !registerDetails.plainPassword,
                        }"
                    >
                        <template #icon>
                            <i v-if="!hasVisiblePassword" class="fas fa-eye"></i>
                            <i v-else class="fas fa-eye-slash"></i>
                        </template>

                        <template
                            v-if="
                                emptyMessage.plainPassword &&
                                !registerDetails.plainPassword
                            "
                            #message-danger
                        >
                            {{ emptyMessage.plainPassword }}
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
                                (validationMessage.password &&
                                    registerDetails.plainPassword &&
                                    passwordConfirm) ||
                                (emptyMessage.passwordConfirm && !passwordConfirm),
                            empty: !passwordConfirm,
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
                                (validationMessage.password &&
                                    registerDetails.plainPassword &&
                                    passwordConfirm) ||
                                (emptyMessage.passwordConfirm && !passwordConfirm)
                            "
                            #message-danger
                        >
                            <span
                                v-if="
                                    validationMessage.password &&
                                    registerDetails.plainPassword &&
                                    passwordConfirm
                                "
                                >{{ validationMessage.password }}</span
                            >
                            <span
                                v-if="
                                    emptyMessage.passwordConfirm && !passwordConfirm
                                "
                                >{{ emptyMessage.passwordConfirm }}</span
                            >
                        </template>
                    </vs-input>

                    <div
                        id="accept-CG-block"
                        :class="{
                            error: emptyMessage.acceptCG && !acceptCG,
                        }"
                    >
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
                        <div
                            class="empty-error-mess pt-0"
                            v-if="emptyMessage.acceptCG && !acceptCG"
                        >
                            {{ emptyMessage.acceptCG }}
                        </div>
                    </div>

                    <div
                        class="btn-container"
                        :class="{ disabled: btnLoadingRegister }"
                    >
                        <vs-button
                            :loading="btnLoadingRegister"
                            class="w-100"
                            type="submit"
                            @click="validRegistration"
                            >
                            <span>S'inscrire</span>
                        </vs-button>
                    </div>
                </div>
            </div>
            <div v-else class="loading-form-block">
                <div
                    v-for="(loading, i) in 9"
                    :key="i"
                    class="loading loading-block"
                >
                </div>
            </div>
            
        </div>
        <vs-dialog width="450px" v-model="modalCG">
            <h2>Conditions Générales</h2>
            <CG />
            <div class="btn-container">
                <vs-button class="w-100" @click="validAcceptCG()"
                    >J'ai lu et j'accepte</vs-button
                >
            </div>
        </vs-dialog>
    </section>
</template>

<script>
import f from "../../services/function";
import CG from "./ConditionGenerale.vue";

export default {
    components: {
        CG,
    },
    props: {
        userType: String,
        csrfTokenRegister: String,
        registerType: String,
    },
    data() {
        return {
            registerDetails: {
                lastname: "",
                firstname: "",
                email: "",
                plainPassword: "",
            },
            validationMessage: {
                email: null,
                password: null,
            },
            emptyMessage: {
                lastname: null,
                firstname: null,
                email: null,
                plainPassword: null,
                passwordConfirm: null,
                acceptCG: null,
            },
            passwordConfirm: "",
            hasVisiblePassword: false,
            hasVisiblePasswordConfirm: false,
            btnLoadingRegister: false,
            formLoadingRegister: false,
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
            if (
                !this.validationMessage.password &&
                !this.validationMessage.email &&
                ((!this.registerType && this.checkIfFieldsAreNotEmpty()) 
                || (this.registerType === 'ffmkr' && this.checkIfFFMKRFieldsAreNotEmpty()))
            ) {
                this.btnLoadingRegister = true;
                this.formLoadingRegister = true;

                this.axios
                    .post(`/inscription`, {
                        _token: this.csrfTokenRegister,
                        lastname: this.registerDetails.lastname,
                        firstname: this.registerDetails.firstname,
                        email: this.registerDetails.email.toLowerCase(),
                        plainPassword: this.registerDetails.plainPassword,
                        userType: this.userType,
                        registerType: this.registerType,
                    })
                    .then((response) => {
                        if(response.data === 'ffmkr-adhesion-not-found') {
                            this.btnLoadingRegister = false;
                            this.formLoadingRegister = false;
                            this.registerType = null;
                        }
                        else 
                        {
                            this.validUserIsRegisteredChoice(true);
                        }
                    })
                    .catch((error) => {
                        const errorMess =
                            "object" === typeof error.response.data
                                ? error.response.data.detail
                                : error.response.data;
                        f.openErrorNotificationStay("Erreur", errorMess);
                        this.btnLoadingRegister = false;
                        this.formLoadingRegister = false;
                    });
            }
        },
        validationEmail() {
            this.validationMessage.email = null;

            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(this.registerDetails.email).toLowerCase())) {
                this.contactChoice = this.contactTel ? 2 : null;

                this.validationMessage.email =
                    "Merci d'entrer un email valide.";
            } else {
                this.contactChoice = 1;
            }
        },
        validationPassword() {
            this.validationMessage.password = null;

            if (this.registerDetails.plainPassword !== this.passwordConfirm) {
                this.validationMessage.password =
                    "Les mots de passe ne correspondent pas.";
            }
        },
        ucwords(str) {
            return str.toLowerCase().replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
                function(s){
                    return s.toUpperCase();
                });
        },
        registerOauth(social) {
            document.location.href = `/oauth/connect/${this.userType}/${social}`;
        },
        checkIfFieldsAreNotEmpty() {
            if (
                !this.registerDetails.lastname
                || !this.registerDetails.firstname
                || !this.registerDetails.email 
                || !this.registerDetails.plainPassword 
                || !this.passwordConfirm
                || !this.acceptCG
            ) {
                if (!this.registerDetails.lastname) {
                    this.emptyMessage.lastname =
                        "Vous devez renseigner votre nom";
                }

                if (!this.registerDetails.firstname) {
                    this.emptyMessage.firstname =
                        "Vous devez renseigner votre prénom";
                }

                if (!this.registerDetails.email) {
                    this.emptyMessage.email = "Vous devez renseigner un email";
                }

                if (!this.registerDetails.plainPassword) {
                    this.emptyMessage.plainPassword =
                        "Vous devez renseigner un mot de passe";
                }

                if (!this.passwordConfirm) {
                    this.emptyMessage.passwordConfirm =
                        "Vous devez confirmer votre mot de passe";
                }

                if (!this.acceptCG) {
                    this.emptyMessage.acceptCG =
                        "Vous devez accepter les conditions générales";
                }

                return false;
            }

            return true;
        },
        checkIfFFMKRFieldsAreNotEmpty() {
            if (!this.registerDetails.plainPassword || !this.passwordConfirm) {
                if (!this.registerDetails.email) {
                    this.emptyMessage.email = "Vous devez renseigner un email";
                }

                if (!this.registerDetails.plainPassword) {
                    this.emptyMessage.plainPassword =
                        "Vous devez renseigner un mot de passe";
                }

                if (!this.passwordConfirm) {
                    this.emptyMessage.passwordConfirm =
                        "Vous devez confirmer votre mot de passe";
                }

                return false;
            }

            return true;
        },
        validUserIsRegisteredChoice(userIsRegistered) {
            this.$emit("userIsRegisteredChoice", {type: 'userIsRegistered', value: userIsRegistered});
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
};
</script>

<style lang="scss">
@import "../../../scss/variables";

.vs-dialog .vs-dialog__content h2 {
    margin-bottom: 1rem;
}

#register-form {
    .ffmkr-check-register-form {
        > p {
            font-size: 1.45rem;
            line-height: 1.2;
            color: #c2b9a2;
        }

        .logo-ffmkr {
            width: 5.7rem;
            position: relative;
            top: 0.1rem;
            margin-left: 0.1rem;
        }

        .vs-input-parent {
            margin-bottom: 1.5rem;
        }

        .btn-container {
            margin-top: 2.1rem;
        }
    }

    .loading-form-block {
        > .loading {
            height: 5.2rem;
            margin-bottom: 1.5rem;
            border-radius: 0.5rem;
        }
    }

    .select-filter {
        margin-bottom: -0.9rem;

        &.error {
            input {
                border: 0.1rem solid #ff564b;
            }
        }
    }
    .empty-error-mess {
        height: 0;
        opacity: 0;
        overflow: hidden;
        color: #ff564b;
        padding-top: 0.7rem;
        font-size: 1.3rem;
        padding-bottom: 0.4rem;
        animation: 0.25s ease 0s forwards heightEnter;

        &.pt-0 {
            padding-top: 0;
        }
    }

    .vs-checkbox-label {
        font-size: 1.3rem;
        color: #b5ac94;
        font-size: 1.31rem;
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

    .vue-phone-number-input {
        position: relative;

        textarea,
        input {
            width: 100%;
            padding: 1.6rem 1.7rem;
            background: $white;
            color: $black;
            border: 0.1rem solid #e7dfcd;
            font-size: 1.4rem;
            border-radius: 0.5rem;
            margin-bottom: 1.5rem;

            &:focus,
            &:hover,
            &:focus-visible {
                border: 0.1rem solid #c1b79d;
                outline: none;
                box-shadow: 0 0.5rem 2.5rem -0.4rem rgba(0, 0, 0, 0.05);
            }

            &:focus ~ label,
            &.filled ~ label {
                font-size: 1.4rem;
                top: -0.8rem;
                left: 1.3rem;
                text-shadow: 0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff;
            }
        }

        label {
            top: 1.6rem;
            left: 1.6rem;
            font-size: 1.4rem;
            color: #c1b79d;
            opacity: 1;
            padding: 0.05rem 0.5rem;
            border-radius: 0.4rem;
            position: absolute;
            transition: all 0.25s ease;
            cursor: text;
            user-select: none;
            pointer-events: none;
            width: initial;
            height: initial;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
    }

    .vue-phone-number-input {
        &.filled {
            label {
                font-size: 1.4rem;
                top: -0.8rem;
                left: 1.3rem;
                text-shadow: 0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff;
            }
        }

        input {
            &:focus {
                box-shadow: none !important;
                caret-color: initial !important;
            }

            &:focus ~ label {
                color: #c1b79d !important;
            }

            &::placeholder {
                color: transparent;
                font-size: 0.01rem;
            }
        }

        &.error {
            input:focus ~ label {
                color: rgb(255, 86, 75) !important;
            }
        }
    }

    #accept-CG-block {
        display: flex;
        flex-direction: column;
        align-items: center;

        &.error {
            .vs-checkbox-label {
                color: #ff564b;
            }
            .vs-checkbox-mask:before {
                border: 2px solid #ff564b;
            }
        }
    }
}
</style>