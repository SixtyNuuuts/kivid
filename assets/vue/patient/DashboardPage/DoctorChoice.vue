<template>
    <section id="doctor-choice">
        <h1>Bienvenue sur Kivid !</h1>
        <h4>
            Vous n’avez pas encore de praticien attritré. <br />
            Recherchez-en dans la liste ci-dessous.
        </h4>
        <div
            v-click-outside="hideSelectBox"
            class="select-filter"
            :class="{ loading: loading }"
        >
            <div v-if="!loading">
                <div
                    v-if="doctorSelected"
                    class="doctor-selected doctor"
                    @click="resetSelect"
                >
                    <vs-avatar class="avatar" circle size="35">
                        <img
                            :src="
                                doctorSelected.avatarUrl
                                    ? doctorSelected.avatarUrl
                                    : '/img/avatar-default.svg'
                            "
                            :alt="`Avatar de ${doctorSelected.firstname} ${doctorSelected.lastname}`"
                        />
                    </vs-avatar>
                    <div class="name">
                        {{
                            doctorSelected.gender
                                ? getCivility(doctorSelected.gender)
                                : ""
                        }}
                        {{ doctorSelected.lastname }}
                        {{ doctorSelected.firstname }}
                    </div>
                </div>
                <input
                    v-else
                    v-model="filter"
                    @click="selectBox = true"
                    @keyup="selectBoxWithThrottle"
                    id="doctor-choice-select"
                    :class="{
                        'b-r-b-zero': selectBox,
                        'placeholder-gray': selectBox,
                    }"
                    :placeholder="
                        !selectBox
                            ? 'Sélectionnez un praticien'
                            : 'Recherchez un praticien'
                    "
                    autocomplete="off"
                />
                <div
                    class="arrow-toggle-box"
                    :class="{ active: selectBox }"
                    @click="toggleSelectBox"
                >
                    <i class="kiv-chevron-down icon-3"></i>
                </div>
                <transition name="height">
                    <div
                        v-if="selectBox"
                        class="select-box"
                        @click="focusInputSelect"
                    >
                        <ul v-if="getDoctors.length">
                            <li v-for="(doctor, i) in getDoctors" :key="i">
                                <div
                                    class="doctor"
                                    @click="selectDoctor(doctor)"
                                >
                                    <vs-avatar class="avatar" circle size="35">
                                        <img
                                            :src="
                                                doctor.avatarUrl
                                                    ? doctor.avatarUrl
                                                    : '/img/avatar-default.svg'
                                            "
                                            :alt="`Avatar de ${doctor.firstname} ${doctor.lastname}`"
                                        />
                                    </vs-avatar>
                                    <div class="name">
                                        {{
                                            doctor.gender
                                                ? getCivility(doctor.gender)
                                                : ""
                                        }}
                                        {{ doctor.lastname }}
                                        {{ doctor.firstname }}
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div v-else>
                            <p class="not-found">
                                <i class="fas fa-users-slash"></i>
                                <span>
                                    Aucun praticien n'a été trouvé avec "<strong
                                        >{{ filter }}</strong
                                    >"</span
                                >
                            </p>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <a class="contact" @click="modalContact = true"
            >Vous n'avez pas de praticien ?</a
        >
        <div class="btn-container">
            <vs-button :disabled="!doctorSelected" @click="valideDoctorChoice"
                >Valider et accéder à mon dashboard</vs-button
            >
        </div>
        <vs-dialog width="450px" v-model="modalContact">
            <h2>Je n'ai pas de praticien</h2>

            <div class="contact-form">
                <vs-input
                    v-model="patient.firstname"
                    label-placeholder="Prénom"
                    type="text"
                >
                </vs-input>

                <vs-input
                    v-model="patient.lastname"
                    label-placeholder="Nom"
                    type="text"
                >
                </vs-input>

                <vs-input
                    :danger="validationMessage.email != null"
                    v-model="patient.email"
                    @keyup="validationEmail"
                    label-placeholder="Email"
                    autocomplete="email"
                    type="email"
                    icon-after
                    :class="{
                        error: validationMessage.email && patient.email,
                    }"
                >
                    <template
                        v-if="validationMessage.email && patient.email"
                        #icon
                    >
                        <i class="kiv-error error icon-24"></i>
                    </template>

                    <template
                        v-if="validationMessage.email && patient.email"
                        #message-danger
                    >
                        {{ validationMessage.email }}
                    </template>
                </vs-input>

                <VuePhoneNumberInput
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

                <div class="message-block">
                    <textarea
                        v-model="contactMessage"
                        id="contact-message"
                        cols="30"
                        rows="6"
                        :class="{ filled: contactMessage != '' }"
                    >
                    </textarea>
                    <label for="contact-message">Message</label>
                </div>
            </div>
            <div
                class="btn-container"
                :class="{ disabled: btnLoadingValidContact }"
            >
                <vs-button
                    :disabled="
                        validationMessage.email ||
                        !patient.email ||
                        btnLoadingValidContact
                    "
                    :loading="btnLoadingValidContact"
                    class="w-100"
                    @click="validContact"
                    >Me contacter</vs-button
                >
            </div>
        </vs-dialog>
    </section>
</template>

<script>
import f from "../../services/function";
import ClickOutside from "vue-click-outside";
import VuePhoneNumberInput from "vue-phone-number-input";

export default {
    props: {
        patient: Object,
        csrfTokenSelectDoctor: String,
        csrfTokenContact: String,
    },
    directives: {
        ClickOutside,
    },
    components: {
        VuePhoneNumberInput,
    },
    data() {
        return {
            doctors: [],
            doctorSelected: null,
            filter: "",
            selectBox: false,
            selectInput: null,
            loading: false,
            footer: null,
            modalContact: false,
            btnLoadingValidContact: false,
            validationMessage: {
                email: null,
            },
            contactTel: null,
            contactMessage: "",
        };
    },
    computed: {
        getDoctors() {
            return f.getSearch(this.doctors, this.filter);
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

            return error;
        },
    },
    methods: {
        valideDoctorChoice() {
            this.axios
                .post(`/patient/${this.patient.id}/select/doctor`, {
                    _token: this.csrfTokenSelectDoctor,
                    doctorId: this.doctorSelected.id,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Choix du praticien enregistré",
                        response.data
                    );

                    this.patient.addRequestDoctor = true;

                    this.patient.doctor = this.doctorSelected;

                    this.footer.classList.remove("hidden");
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                });
        },
        toggleSelectBox() {
            this.selectBox = !this.selectBox;
            if (this.doctorSelected) {
                this.resetSelect();
            }
            if (this.selectBox) {
                this.focusInputSelect();
            }
        },
        hideSelectBox() {
            this.selectBox = false;
        },
        selectDoctor(doctor) {
            this.doctorSelected = doctor;
            this.hideSelectBox();
        },
        resetSelect() {
            this.doctorSelected = null;

            setTimeout(() => {
                this.selectInput = document.getElementById(
                    "doctor-choice-select"
                );
                this.selectBox = true;
                this.focusInputSelect();
            }, 100);
        },
        focusInputSelect() {
            this.selectInput.focus();
        },
        getCivility(gender) {
            return f.getCivility(gender);
        },
        validContact() {
            this.btnLoadingValidContact = true;

            this.axios
                .post(`/contact`, {
                    _token: this.csrfTokenContact,
                    firstname: this.patient.firstname,
                    lastname: this.patient.lastname,
                    email: this.patient.email,
                    contactTel: this.contactTel,
                    contactMessage: this.contactMessage,
                })
                .then((response) => {
                    f.openSuccessNotification("Message envoyé", response.data);

                    this.contactMessage = "";
                    this.modalContact = false;
                    this.btnLoadingValidContact = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    this.modalContact = false;
                    this.btnLoadingValidContact = false;
                    f.openErrorNotification("Erreur", errorMess);
                });
        },
        validationEmail() {
            this.validationMessage.email = null;

            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(this.patient.email).toLowerCase())) {
                this.validationMessage.email =
                    "Merci d'entrer un email valide.";
            }
        },
        selectBoxWithThrottle() {
            if (!this.selectBoxThrottle) {
                this.selectBoxThrottle = true;
                this.selectBox = true;
                console.log("selectBox");

                setTimeout(() => {
                    this.selectBoxThrottle = false;
                }, 1000);
            }
        },
    },
    mounted() {
        this.footer = document.querySelector(".footer");
        this.footer.classList.add("hidden");

        if (this.patient.firstname === null) {
            this.patient.firstname = "";
        }

        if (this.patient.lastname === null) {
            this.patient.lastname = "";
        }

        this.loading = true;

        this.axios
            .get(`/get/doctors`)
            .then((response) => {
                this.doctors = response.data;
                this.loading = false;
            })
            .catch((error) => {
                if (error.response) {
                    console.log(
                        error.response.data.detail
                            ? error.response.data.detail
                            : error.response.data
                    );
                }
            });

        this.selectInput = document.getElementById("doctor-choice-select");
    },
};
</script>

<style lang="scss">
@import "../../../scss/variables";

#doctor-choice {
    max-width: 53rem;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .select-filter {
        width: 100%;
        margin-bottom: 2.1rem;
        position: relative;
        transition: all 0.25s;
        min-height: 5.9rem;
        border-radius: 0.8rem;

        &:hover {
            input {
                border: 1px solid $white;
                box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.1);
            }
        }

        input {
            &.b-r-b-zero {
                border-radius: 0.8rem 0.8rem 0 0;
            }

            width: 100%;
            color: $black;
            font-size: 1.5rem;
            border-radius: 0.8rem;
            padding: 1.9rem 2rem;
            padding-right: 4.5rem;
            cursor: pointer;
            border: 1px solid $white;
            transition: all 0.25s;

            &:focus {
                border: 1px solid $white;
                transform: none;
                border-radius: 0.8rem 0.8rem 0 0;
            }

            &::placeholder {
                color: $black;
                position: relative;
                top: 0.1rem;
            }

            &.placeholder-gray {
                &::placeholder {
                    color: $gray-middle;
                }
            }
        }

        .arrow-toggle-box {
            position: absolute;
            top: 1.3rem;
            right: 0.7rem;
            width: 3.8rem;
            height: 3.4rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            transition: all 0.25s;

            i {
                transition: all 0.25s;
                position: relative;
            }

            &.active {
                i {
                    top: -0.2rem;
                    transform: rotate(180deg);
                }
            }
        }

        .select-box {
            position: absolute;
            top: 5.5rem;
            left: 0;
            width: 100%;
            z-index: 100;
            background: $white;
            border-radius: 0 0 1.2rem 1.2rem;
            overflow: hidden;
            box-shadow: 0px 10px 20px -5px rgba(44, 11, 11, 0.15);
            transition: all 0.3s cubic-bezier(0.19, 1.03, 0.79, 1.02);
            max-height: 26rem;
            overflow-y: auto;
        }

        .doctor-selected {
            font-size: 1.5rem;
            border-radius: 0.8rem;
            padding: 1rem 2.2rem !important;
            padding-right: 4.6rem !important;
            cursor: pointer;
            border: 1px solid $white;
            background: $white;
            display: flex;
            align-items: center;
            transition: all 0.25s;

            &:hover {
                border: 1px solid $white;
                // transform: translate(0, -0.4rem);
                box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.1);
                background: $white !important;
            }
        }

        .doctor {
            padding: 1.5rem 2.2rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            animation: fadeEnter 0.5s;

            &:hover {
                background: rgba($gray-middle, 0.15);
            }

            .avatar {
                margin-right: 1.5rem;
                max-height: 3.5rem;
                min-width: 3.5rem;
            }

            .name {
                font-size: 1.5rem;
                flex-grow: 1;
                text-align: left;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }

        .not-found {
            font-size: 1.35rem;
            margin: 0;
            padding: 3.3rem 2rem;
            min-height: initial;

            i {
                font-size: 1.4rem;
                margin-right: 1.1rem;
                position: relative;
                top: 0;
            }
        }
    }

    h1 {
        margin-bottom: 3rem;
    }

    h4 {
        margin-bottom: 3rem;
    }

    .select-container {
        width: 100%;
        margin-bottom: 3rem;
    }

    .contact {
        color: $gray-dark;
        font-size: 1.4rem;
        display: flex;
        justify-content: center;
        margin: 0;
        margin-bottom: 3rem;
        text-decoration: underline;
        cursor: pointer;
    }
}
.contact-form {
    .vs-input-parent {
        margin-bottom: 1.5rem;
    }

    .message-block,
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
}
</style>
