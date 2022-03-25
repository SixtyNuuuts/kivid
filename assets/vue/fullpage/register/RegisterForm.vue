<template>
    <section id="register-form" class="kiv-block">
        <div>
            <h2 v-if="userType === 'patient' && userHasDoctor">Inscription</h2>
            <h2 v-if="userType === 'doctor'">Inscription praticien</h2>
            <h2 v-if="userType === 'patient' && !userHasDoctor">
                Inscription +&nbsp;Prise&nbsp;de&nbsp;contact
            </h2>

            <div class="register-form">
                <DoctorSelectBox
                    v-if="userType === 'patient' && userHasDoctor"
                    :doctorSelected="registerDetails.doctorSelect"
                    @setDoctorSelected="setDoctorSelected"
                    :class="{
                        error:
                            emptyMessage.doctorSelect &&
                            !registerDetails.doctorSelect,
                    }"
                />

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

                <VuePhoneNumberInput
                    v-if="userType === 'patient' && !userHasDoctor"
                    default-country-code="FR"
                    :only-countries="['FR']"
                    :no-example="true"
                    :no-country-selector="true"
                    :translations="{
                        countrySelectorLabel: 'Code pays',
                        countrySelectorError: 'Choisir un pays',
                        phoneNumberLabel: 'Numéro de téléphone',
                        example: 'Exemple :',
                    }"
                    v-model="contactTel"
                    :class="{
                        filled: contactTel != null,
                        error: errorTel,
                    }"
                    color="#c1b79d"
                    valid-color="#c1b79d"
                    error-color="#ff564b"
                    :error="errorTel"
                />

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

                <vs-input
                    v-if="userType === 'doctor'"
                    v-model="registerDetails.numRppsAmeli"
                    label-placeholder="Numéro RPPS ou Ameli"
                    icon-after
                    :class="{
                        error:
                            emptyMessage.numRppsAmeli &&
                            !registerDetails.numRppsAmeli,
                    }"
                >
                    <template
                        v-if="
                            emptyMessage.numRppsAmeli &&
                            !registerDetails.numRppsAmeli
                        "
                        #message-danger
                    >
                        {{ emptyMessage.numRppsAmeli }}
                    </template>
                </vs-input>

                <div
                    id="contact-choice"
                    v-if="userType === 'patient' && !userHasDoctor"
                >
                    <p class="contact-info">
                        <img
                            src="../../../img/icons/information.svg"
                            alt="icon information"
                        />
                        Un de nos praticiens va prendre contact avec vous
                        pour&nbsp;élaborer le traitement approprié
                    </p>
                    <p
                        :class="{
                            desactive:
                                (!registerDetails.email ||
                                    validationMessage.email != null) &&
                                (!contactTel ||
                                    (contactTel && contactTel.length < 5) ||
                                    errorTel),
                        }"
                    >
                        Je souhaite que l'on me contacte par
                    </p>
                    <div>
                        <vs-radio
                            :disabled="
                                !registerDetails.email ||
                                validationMessage.email != null
                            "
                            v-model="contactChoice"
                            val="1"
                            style="margin-bottom: 5px"
                        >
                            e-mail
                            <span class="contact-help"
                                >(<span v-if="registerDetails.email">{{
                                    registerDetails.email
                                }}</span>
                                <span v-else
                                    >Veuillez entrer une adresse e-mail</span
                                >)
                            </span>
                        </vs-radio>
                        <vs-radio
                            :disabled="
                                !contactTel ||
                                (contactTel && contactTel.length < 5) ||
                                errorTel
                            "
                            v-model="contactChoice"
                            val="2"
                        >
                            téléphone
                            <span class="contact-help"
                                >(<span v-if="contactTel">{{
                                    contactTel
                                }}</span>
                                <span class="contact-help" v-else
                                    >Veuillez entrer un num. de tél.</span
                                >)</span
                            >
                        </vs-radio>
                    </div>
                </div>

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
                        ><span
                            v-if="
                                (userType === 'patient' && userHasDoctor) ||
                                userType === 'doctor'
                            "
                            >S'inscrire</span
                        ><span v-if="userType === 'patient' && !userHasDoctor"
                            >C'est parti !</span
                        ></vs-button
                    >
                </div>
            </div>

            <div
                class="divider"
                v-if="
                    (userType === 'patient' && userHasDoctor) ||
                    userType === 'doctor'
                "
            >
                <div class="divider-text">ou</div>
            </div>

            <div
                class="btn-container social-register"
                v-if="
                    (userType === 'patient' && userHasDoctor) ||
                    userType === 'doctor'
                "
            >
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
import Vue from "vue";
import CG from "./CG.vue";
import DoctorSelectBox from "./DoctorSelectBox.vue";
import VuePhoneNumberInput from "vue-phone-number-input";

export default {
    components: {
        CG,
        DoctorSelectBox,
        VuePhoneNumberInput,
    },
    props: {
        userType: String,
        userHasDoctor: Boolean,
        csrfTokenRegister: String,
        csrfTokenContact: String,
    },
    data() {
        return {
            registerDetails: {
                doctorSelect: null,
                lastname: "",
                firstname: "",
                email: "",
                plainPassword: "",
                numRppsAmeli: "",
            },
            validationMessage: {
                email: null,
                password: null,
            },
            emptyMessage: {
                doctorSelect: null,
                lastname: null,
                firstname: null,
                email: null,
                plainPassword: null,
                passwordConfirm: null,
                numRppsAmeli: null,
                acceptCG: null,
            },
            contactTel: null,
            contactChoice: null,
            passwordConfirm: "",
            hasVisiblePassword: false,
            hasVisiblePasswordConfirm: false,
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
            if (
                this.checkIfFieldsAreNotEmpty() &&
                !this.validationMessage.password &&
                !this.validationMessage.email
            ) {
                this.btnLoadingRegister = true;

                this.axios
                    .post(`/inscription`, {
                        _token: this.csrfTokenRegister,
                        doctorSelectId: this.registerDetails.doctorSelect
                            ? this.registerDetails.doctorSelect.id
                            : null,
                        lastname: this.registerDetails.lastname,
                        firstname: this.registerDetails.firstname,
                        email: this.registerDetails.email.toLowerCase(),
                        plainPassword: this.registerDetails.plainPassword,
                        numRppsAmeli: this.registerDetails.numRppsAmeli
                            ? this.registerDetails.numRppsAmeli
                            : null,
                        userType: this.userType,
                    })
                    .then((response) => {
                        f.openSuccessNotificationStay(
                            "Inscription validée",
                            response.data
                        );

                        if (
                            this.contactChoice &&
                            (this.contactTel || this.registerDetails.email)
                        ) {
                            this.axios
                                .post(`/contact`, {
                                    _token: this.csrfTokenContact,
                                    lastname: this.registerDetails.lastname,
                                    firstname: this.registerDetails.firstname,
                                    email: this.registerDetails.email.toLowerCase(),
                                    contactTel: this.contactTel,
                                    contactChoice:
                                        this.contactChoice == 1
                                            ? "email"
                                            : this.contactChoice == 2
                                            ? "téléphone"
                                            : "",
                                })
                                .then((response) => {
                                    f.openSuccessNotification(
                                        "Prise de contact",
                                        response.data
                                    );
                                    this.btnLoadingRegister = false;

                                    this.resetData();

                                    setTimeout(() => {
                                        document.location.href = `/connexion`;
                                    }, 2000);
                                })
                                .catch((error) => {
                                    const errorMess =
                                        "object" === typeof error.response.data
                                            ? error.response.data.detail
                                            : error.response.data;

                                    f.openErrorNotification(
                                        "Erreur",
                                        errorMess
                                    );
                                });
                        } else {
                            this.btnLoadingRegister = false;

                            this.resetData();

                            setTimeout(() => {
                                document.location.href = `/connexion`;
                            }, 2000);
                        }
                    })
                    .catch((error) => {
                        const errorMess =
                            "object" === typeof error.response.data
                                ? error.response.data.detail
                                : error.response.data;
                        f.openErrorNotificationStay("Erreur", errorMess);
                        this.btnLoadingRegister = false;
                    });
            }
        },
        validationEmail() {
            this.validationMessage.email = null;

            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(this.registerDetails.email).toLowerCase())) {
                this.contactChoice =
                    this.contactChoice == 1 ? null : this.contactChoice;

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
        resetData() {
            this.registerDetails = {
                doctorSelect: null,
                lastname: "",
                firstname: "",
                email: "",
                plainPassword: "",
                numRppsAmeli: "",
            };

            this.validationMessage = {
                email: null,
                password: null,
            };

            this.emptyMessage = {
                doctorSelect: null,
                lastname: null,
                firstname: null,
                email: null,
                plainPassword: null,
                passwordConfirm: null,
                numRppsAmeli: null,
                acceptCG: null,
            };

            this.passwordConfirm = "";
            this.acceptCG = false;
            this.contactTel = null;
            this.contactChoice = null;
        },
        registerOauth(social) {
            if (
                this.checkIfFieldsAreNotEmpty(true) &&
                !this.validationMessage.password &&
                !this.validationMessage.email
            ) {
                const doctorId =
                    this.registerDetails.doctorSelect && this.userHasDoctor
                        ? this.registerDetails.doctorSelect.id
                        : 0;

                const doctorNumRppsAmeli = this.registerDetails.numRppsAmeli
                    ? this.registerDetails.numRppsAmeli
                    : "nc";

                document.location.href = `/oauth/connect/${this.userType}/${social}/${doctorId}/${doctorNumRppsAmeli}`;
            }
        },
        setDoctorSelected(doctorSelected) {
            this.registerDetails.doctorSelect = doctorSelected;
        },
        checkIfFieldsAreNotEmpty(oauth = false) {
            if (
                (!oauth && !this.registerDetails.lastname) ||
                (!oauth && !this.registerDetails.firstname) ||
                (!oauth && !this.registerDetails.email) ||
                (!oauth &&
                    (!this.registerDetails.plainPassword ||
                        !this.passwordConfirm)) ||
                (this.userType === "patient" &&
                    this.userHasDoctor &&
                    !this.registerDetails.doctorSelect) ||
                (this.userType === "doctor" &&
                    !this.registerDetails.numRppsAmeli) ||
                !this.acceptCG
            ) {
                if (!oauth && !this.registerDetails.lastname) {
                    this.emptyMessage.lastname =
                        "Vous devez renseigner votre nom";
                }

                if (!oauth && !this.registerDetails.firstname) {
                    this.emptyMessage.firstname =
                        "Vous devez renseigner votre prénom";
                }

                if (!oauth && !this.registerDetails.email) {
                    this.emptyMessage.email = "Vous devez renseigner un email";
                }

                if (!oauth && !this.registerDetails.plainPassword) {
                    this.emptyMessage.plainPassword =
                        "Vous devez renseigner un mot de passe";
                }

                if (!oauth && !this.passwordConfirm) {
                    this.emptyMessage.passwordConfirm =
                        "Vous devez confirmer votre mot de passe";
                }

                if (
                    this.userType === "patient" &&
                    this.userHasDoctor &&
                    !this.registerDetails.doctorSelect
                ) {
                    this.emptyMessage.doctorSelect =
                        "Vous devez sélectionner votre praticien";
                }

                if (
                    this.userType === "doctor" &&
                    !this.registerDetails.numRppsAmeli
                ) {
                    this.emptyMessage.numRppsAmeli =
                        "Vous devez renseigner votre numéro RPPS ou Ameli";
                }

                if (!this.acceptCG) {
                    this.emptyMessage.acceptCG =
                        "Vous devez accepter les conditions générales";
                }

                return false;
            }

            return true;
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
        errorTel() {
            let error = false;

            if (this.contactTel && this.contactTel.length > 4) {
                let contactTelFormated = this.contactTel.replace(/ /g, "");

                const re = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

                if (!re.test(String(contactTelFormated))) {
                    error = true;
                }
            }

            if (this.contactTel && this.contactTel.length == 14) {
                if (this.contactTel.replace(/ /g, "").length == 10) {
                    this.contactChoice = 2;
                } else {
                    this.contactChoice = null;
                }
            } else {
                this.contactChoice = null;
            }

            return error;
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
    .select-filter {
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

    #contact-choice {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 600;
        margin-top: 1.8rem;
        margin-bottom: 1.8rem;
        padding: 2.5rem;
        white-space: nowrap;
        position: relative;
        padding-top: 6.5rem;
        border-radius: 0.5rem;

        &::after {
            content: "";
            border: 1px solid #e7dfcd;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            border-radius: 0.5rem;
        }

        .contact-info {
            white-space: initial;
            background: #f8f5f0;
            color: #bbb4a1;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.3;
            padding: 0.7rem;
            position: absolute;
            top: -0.01rem;
            left: 0;
            border-radius: 0.5rem 0.5rem 0rem 0rem;
            width: 100.3%;
            text-align: center;

            img {
                width: 1.15rem;
                margin-right: 0.15rem;
                position: relative;
                top: 0.1rem;
            }
        }

        > p {
            margin-top: 0;
            margin-bottom: 6px;
            font-weight: 700;

            &.desactive {
                color: #b6ada1;
            }
        }

        > div {
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 5;

            .contact-help {
                font-style: italic;
                font-size: 1.3rem;
            }

            .vs-radio {
                width: 12px;
                height: 12px;
                min-width: 12px;
                min-height: 12px;
            }
            .vs-radio-content {
                .vs-radio__effect::after {
                    width: 10px;
                    height: 10px;
                    min-width: 10px;
                    min-height: 10px;
                }

                &.active .vs-radio__effect::after {
                    border: 4px solid $orange;
                    width: 12px;
                    height: 12px;
                    min-width: 12px;
                    min-height: 12px;
                }

                &.disabled {
                    color: #d4cbb8;
                    font-weight: 400;
                    opacity: 1 !important;

                    .vs-radio {
                        opacity: 0.3;
                    }
                }
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