<template>
    <div>
        <h2>Ajout d'un patient</h2>
        <div
            v-click-outside="hideSelectBox"
            class="select-filter"
            :class="{ loading: loadingAllPatients }"
        >
            <div v-if="!loadingAllPatients">
                <div
                    v-show="userSelected.email"
                    class="user-selected user"
                    @click="resetSelect"
                >
                    <vs-avatar class="avatar" circle size="35">
                        <img
                            :src="
                                userSelected.avatarUrl
                                    ? userSelected.avatarUrl
                                    : '/img/avatar-default.svg'
                            "
                            :alt="`Avatar de ${userSelected.firstname} ${userSelected.lastname}`"
                        />
                    </vs-avatar>
                    <div class="text">
                        <div class="name">
                            {{ getUserName(userSelected) }}
                            <span
                                class="birthdate"
                                v-show="userSelected.birthdate"
                            >
                                {{ getAge(userSelected.birthdate) }}
                                ans</span
                            >
                        </div>
                        <div class="email">
                            {{ userSelected.email }}
                        </div>
                    </div>
                </div>
                <input
                    v-show="!userSelected.email"
                    v-model="filter"
                    @click="selectBox = true"
                    @keyup="selectBoxWithThrottle"
                    id="user-choice-select"
                    :class="{
                        'b-r-b-zero': selectBox,
                        'placeholder-gray': selectBox,
                    }"
                    :placeholder="
                        !selectBox
                            ? 'Sélectionnez un patient kivid'
                            : 'Recherchez un patient kivid'
                    "
                    autocomplete="off"
                />
                <div
                    class="arrow-toggle-box"
                    :class="{ active: selectBox }"
                    @click="toggleSelectBox"
                >
                    <!-- <i class="kiv-chevron-down icon-3"></i> -->
                    <i class="vs-icon-arrow"></i>
                </div>
                <transition name="height">
                    <div
                        v-show="selectBox"
                        class="select-box"
                        @click="focusInputSelect"
                    >
                        <ul v-if="allPatientsFiltered.length">
                            <li
                                v-for="(patient, i) in allPatientsFiltered"
                                :key="i"
                            >
                                <div class="user" @click="selectUser(patient)">
                                    <vs-avatar class="avatar" circle size="35">
                                        <img
                                            :src="
                                                patient.avatarUrl
                                                    ? patient.avatarUrl
                                                    : '/img/avatar-default.svg'
                                            "
                                            :alt="`Avatar de ${patient.firstname} ${patient.lastname}`"
                                        />
                                    </vs-avatar>
                                    <div class="text">
                                        <div class="name">
                                            {{ getUserName(patient) }}
                                            <span
                                                class="birthdate"
                                                v-show="patient.birthdate"
                                            >
                                                {{ getAge(patient.birthdate) }}
                                                ans</span
                                            >
                                        </div>
                                        <div class="email">
                                            {{ patient.email }}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div v-if="!allPatientsFiltered.length && filter">
                            <p class="not-found">
                                <i class="fas fa-users-slash"></i>
                                <span>
                                    Aucun patient n'a été trouvé avec "<strong
                                        >{{ filter }}</strong
                                    >"
                                </span>
                            </p>
                        </div>
                        <div v-if="!allPatientsFiltered.length && !filter">
                            <p class="not-found">
                                <i class="fas fa-users-slash"></i>
                                Aucun patient n'a été trouvé
                            </p>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

        <div
            class="btn-container"
            :class="{ disabled: btnLoadingValidAddPatient }"
        >
            <vs-button
                :loading="btnLoadingValidAddPatient"
                :disabled="!userSelected.email || btnLoadingValidAddPatient"
                class="w-100"
                @click="validAddPatient"
                >Valider la sélection</vs-button
            >
        </div>

        <div class="divider">
            <div class="divider-text">ou</div>
        </div>

        <div class="create-patient-form">
            <vs-select
                v-model="createPatientDetails.gender"
                placeholder="Civilité"
            >
                <vs-option label="Inconnu" value="0">Inconnu</vs-option>
                <vs-option label="M." value="1">M.</vs-option>
                <vs-option label="Mme" value="2">Mme</vs-option>
            </vs-select>

            <vs-input
                v-model="createPatientDetails.firstname"
                label-placeholder="Prénom"
                type="text"
            >
            </vs-input>

            <vs-input
                v-model="createPatientDetails.lastname"
                label-placeholder="Nom"
                type="text"
            >
            </vs-input>

            <vs-input
                :danger="validationMessage.email != null"
                v-model="createPatientDetails.email"
                @keyup="validationEmail"
                label-placeholder="Email"
                autocomplete="email"
                type="email"
                icon-after
                :class="{
                    error:
                        validationMessage.email && createPatientDetails.email,
                }"
            >
                <template
                    v-if="validationMessage.email && createPatientDetails.email"
                    #icon
                >
                    <i class="kiv-error error icon-24"></i>
                </template>

                <template
                    v-if="validationMessage.email && createPatientDetails.email"
                    #message-danger
                >
                    {{ validationMessage.email }}
                </template>
            </vs-input>
        </div>

        <div
            class="btn-container"
            :class="{ disabled: btnLoadingValidCreatePatient }"
        >
            <vs-button
                :disabled="
                    validationMessage.email ||
                    !createPatientDetails.email ||
                    btnLoadingValidCreatePatient
                "
                :loading="btnLoadingValidCreatePatient"
                class="w-100"
                @click="validCreatePatient"
                >Valider la création</vs-button
            >
        </div>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import f from "../../../services/function";

export default {
    name: "PatientAdd",
    props: {
        doctor: Object,
        allPatients: Array,
        loadingAllPatients: Boolean,
        csrfTokenAddPatient: String,
        csrfTokenCreatePatient: String,
    },
    directives: {
        ClickOutside,
    },
    data() {
        return {
            btnLoadingValidAddPatient: false,
            btnLoadingValidCreatePatient: false,
            createPatientDetails: {
                firstname: "",
                lastname: "",
                email: "",
                gender: "",
            },
            validationMessage: {
                email: null,
            },
            userSelected: {
                email: null,
                avatarUrl: null,
                firstname: null,
                lastname: null,
                gender: null,
                birthdate: null,
            },
            filter: "",
            selectBox: false,
            selectInput: null,
        };
    },
    computed: {
        allPatientsFiltered() {
            return f.getSearch(
                this.allPatients.filter((p) => !p.doctor),
                this.filter
            );
        },
    },
    methods: {
        validAddPatient() {
            this.btnLoadingValidAddPatient = true;

            this.axios
                .post(`/doctor/${this.doctor.id}/add/patient`, {
                    _token: this.csrfTokenAddPatient,
                    patientId: this.userSelected.id,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Ajout du patient",
                        response.data
                    );

                    this.userSelected.addRequestDoctor = false;
                    this.userSelected.doctor = this.doctor;
                    this.$emit("addPatient", this.userSelected);
                    this.btnLoadingValidAddPatient = false;
                    this.$emit("closeModalAddPatient", true);
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingValidAddPatient = false;
                    this.$emit("closeModalAddPatient", true);
                });
        },
        validCreatePatient() {
            this.btnLoadingValidCreatePatient = true;

            this.axios
                .post(`/doctor/${this.doctor.id}/create/patient`, {
                    _token: this.csrfTokenCreatePatient,
                    firstname: this.createPatientDetails.firstname,
                    lastname: this.createPatientDetails.lastname,
                    gender:
                        this.createPatientDetails.gender &&
                        this.createPatientDetails.gender != "0"
                            ? "1" == this.createPatientDetails.gender
                                ? "male"
                                : "female"
                            : "",
                    email: this.createPatientDetails.email.toLowerCase(),
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Création du patient",
                        response.data.message
                    );
                    this.$emit("addPatient", response.data.patient);

                    this.createPatientDetails = {
                        firstname: "",
                        lastname: "",
                        email: "",
                        gender: "",
                    };
                    this.btnLoadingValidCreatePatient = false;
                    this.$emit("closeModalAddPatient", true);
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingValidCreatePatient = false;
                    this.$emit("closeModalAddPatient", true);
                });
        },
        validationEmail() {
            this.validationMessage.email = null;

            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (
                !re.test(String(this.createPatientDetails.email).toLowerCase())
            ) {
                this.validationMessage.email =
                    "Merci d'entrer un email valide.";
            }
        },
        getAge(dateString) {
            return f.generateAgeFromDateOfBirth(dateString);
        },
        toggleSelectBox() {
            this.selectBox = !this.selectBox;
            if (this.userSelected) {
                this.resetSelect();
            }
            if (this.selectBox) {
                this.focusInputSelect();
            }
        },
        hideSelectBox() {
            this.selectBox = false;
        },
        selectUser(user) {
            this.userSelected = user;
            this.hideSelectBox();
        },
        resetSelect() {
            this.userSelected = {
                email: null,
                avatarUrl: null,
                firstname: null,
                lastname: null,
                gender: null,
                birthdate: null,
            };

            setTimeout(() => {
                this.selectInput =
                    document.getElementById("user-choice-select");
                this.selectBox = true;
                this.focusInputSelect();
            }, 100);
        },
        focusInputSelect() {
            this.selectInput.focus();
        },
        getUserName(user) {
            return f.getUserName(user);
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
        this.selectInput = document.getElementById("user-choice-select");
    },
};
</script>

<style lang="scss" scoped>
@import "../../../../scss/variables";

h4 {
    font-size: 1.5rem;
    color: #222e54;
    font-weight: 400;
    margin-left: 2.4rem;
}

.divider {
    text-align: center;
    margin: 3rem 0;
    display: block;
    overflow: hidden;
    white-space: nowrap;

    .divider-text {
        padding: 0 1rem;
        position: relative;
        display: inline-block;
        font-size: 1.3rem;
        color: #e0dbce;
        font-weight: 300;

        &::before {
            right: 100%;
            border-top: 1px solid #eae4d4;
            content: "";
            position: absolute;
            top: 50%;
            width: 9999px;
        }

        &::after {
            left: 100%;
            border-top: 1px solid #eae4d4;
            content: "";
            position: absolute;
            top: 50%;
            width: 9999px;
        }
    }
}

.select-filter {
    width: 100%;
    position: relative;
    transition: all 0.25s;
    min-height: 5.9rem;
    border-radius: 0.5rem;
    margin-bottom: 1.6rem;

    &:hover {
        input {
            box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.1);
            border: 0.1rem solid $gray-middle;
        }
    }

    input {
        &.b-r-b-zero {
            border-radius: 0.5rem 0.5rem 0 0;
        }
        min-height: 5.7rem;
        width: 100%;
        color: $black;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        padding: 1.4rem 1.7rem;
        padding-right: 4.5rem;
        cursor: pointer;
        border: 1px solid $white;
        transition: all 0.25s;
        border: 0.1rem solid $gray-middle;

        &:focus {
            border: 1px solid $white;
            transform: none;
            border-radius: 0.5rem 0.5rem 0 0;
            border: 0.1rem solid $gray-middle;
        }

        &::placeholder {
            color: $black;
            position: relative;
            top: 0.1rem;
        }

        &.placeholder-gray {
            &::placeholder {
                color: #d2ccbd;
            }
        }
    }

    .arrow-toggle-box {
        position: absolute;
        top: 1rem;
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

            &.vs-icon-arrow {
                width: 1rem;
                height: 1rem;
                color: #222e54;
                margin-top: -0.5rem;
                right: 1.6rem;
                z-index: 600;
                position: absolute;
                right: 15px;
                margin-top: -2px;
                transition: all 0.25s ease;
                pointer-events: auto;
                cursor: pointer;

                &::before {
                    top: 0px;
                    content: "";
                    width: 1px;
                    height: 100%;
                    background: rgba(var(--vs-text), 1);
                    position: absolute;
                    display: block;
                }

                &::after {
                    content: "";
                    width: 100%;
                    height: 1px;
                    background: rgba(var(--vs-text), 1);
                    position: absolute;
                    display: block;
                    top: 0px;
                }
            }
        }

        &.active {
            i {
                top: 1.9rem;
                transform: rotate(45deg);
            }
        }
    }

    .select-box {
        position: absolute;
        top: 5.7rem;
        left: 0;
        width: 100%;
        z-index: 777;
        background: $white;
        border-radius: 0 0 0.5rem 0.5rem;
        overflow: hidden;
        box-shadow: 0px 10px 20px -5px rgba(44, 11, 11, 0.15);
        transition: all 0.3s cubic-bezier(0.19, 1.03, 0.79, 1.02);
        max-height: 26rem;
        overflow-y: auto;
        min-height: 6.7rem;
    }

    .user-selected {
        font-size: 1.5rem;
        border-radius: 0.5rem;
        padding: 1rem 2.2rem !important;
        padding-right: 4.6rem !important;
        cursor: pointer;
        border: 1px solid $white;
        background: $white;
        display: flex;
        align-items: center;
        transition: all 0.25s;
        border: 0.1rem solid $gray-middle;

        &:hover {
            border: 0.1rem solid $gray-middle;
            // transform: translate(0, -0.4rem);
            box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.1);
            background: $white !important;
        }
    }

    .user {
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

        .text {
            flex: 1;
            overflow: hidden;

            .name {
                font-size: 1.4rem;
                flex-grow: 1;
                text-align: left;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-weight: 600;
                margin-bottom: 0.2rem;

                .birthdate {
                    background: #fff8ee;
                    color: #f5b85d;
                    font-size: 1.1rem;
                    padding: 0.2em 0.4em;
                    border-radius: 0.4em;
                    position: relative;
                    top: 0;
                    white-space: nowrap;
                    margin-left: 0.4rem;
                }
            }

            .email {
                font-size: 1.2rem;
                color: #91a3bd;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .not-found {
        font-size: 1.35rem;
        margin: 0;
        animation: fadeEnter 0.5s;
        min-height: initial;

        i {
            font-size: 1.4rem;
            margin-right: 1.1rem;
            width: 3.8rem;
            height: 3.8rem;
            position: relative;
            top: 0;
        }
    }
}

.create-patient-form {
    > * {
        margin: 2em 0;
    }
}
</style>
