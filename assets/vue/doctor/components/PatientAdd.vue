<template>
    <div>
        <vs-button
            @click="modalAddPatient = !modalAddPatient"
            circle
            class="btn-top-absolute"
        >
            <i class="fe fe-user-plus"></i>
            Ajouter un patient
        </vs-button>
        <vs-dialog
            width="450px"
            v-model="modalAddPatient"
            :loading="!allPatientsList.length"
        >
            <h2><i class="fe fe-search"></i>Rechercher un patient</h2>

            <div v-click-outside="resetSearch" class="search">
                <vs-input
                    v-model="search"
                    type="search"
                    placeholder="Nom - Prénom - Email"
                    :class="{ 'without-border-radius-bottom': search }"
                >
                    <template #icon>
                        <i class="fe fe-search"></i>
                    </template>
                </vs-input>
                <div v-if="search" class="search-active">
                    <span v-if="allPatientsListArrayFiltered.length > 1">
                        {{ allPatientsListArrayFiltered.length }} Patients
                    </span>
                    <span v-else>
                        {{ allPatientsListArrayFiltered.length }} Patient
                    </span>
                </div>
                <transition name="height">
                    <div
                        v-if="search"
                        class="filtered-items-box vs-alert--shadow"
                    >
                        <div v-if="allPatientsListArrayFiltered.length">
                            <div
                                v-for="(
                                    patient, i
                                ) in allPatientsListArrayFiltered"
                                :key="i"
                                class="patient"
                            >
                                <div class="details">
                                    <vs-avatar class="avatar" circle size="35">
                                        <img
                                            :src="
                                                patient.avatarUrl
                                                    ? patient.avatarUrl
                                                    : '/img/avatar-default.svg'
                                            "
                                            alt="avatar du patient"
                                        />
                                    </vs-avatar>
                                    <div class="text">
                                        <div class="name">
                                            {{ patient.lastname }}
                                            {{ patient.firstname }}
                                            <span
                                                class="birthdate"
                                                v-if="patient.birthdate"
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
                                <div class="actions">
                                    <div
                                        v-if="patient.doctor"
                                        class="current-doctor"
                                    >
                                        <vs-button size="small" flat>
                                            <span
                                                >suivi par
                                                <em>
                                                    {{
                                                        patient.doctor.gender
                                                            ? "male" ===
                                                              patient.doctor
                                                                  .gender
                                                                ? "M."
                                                                : "Mme"
                                                            : ""
                                                    }}
                                                    {{
                                                        patient.doctor.lastname
                                                    }}
                                                    {{
                                                        patient.doctor.firstname
                                                    }}
                                                </em>
                                            </span>
                                            <vs-avatar circle size="23">
                                                <img
                                                    :src="
                                                        patient.doctor.avatarUrl
                                                            ? patient.doctor
                                                                  .avatarUrl
                                                            : '/img/avatar-default.svg'
                                                    "
                                                    alt="avatar du kiné"
                                                />
                                            </vs-avatar>
                                        </vs-button>
                                    </div>
                                    <div v-else>
                                        <vs-tooltip>
                                            <vs-button
                                                circle
                                                icon
                                                size="small"
                                                @click="addPatient(patient)"
                                                class="btn-add"
                                            >
                                                <i class="fe fe-user-plus"></i>
                                            </vs-button>
                                            <template #tooltip>
                                                Ajouter à mes patients
                                            </template>
                                        </vs-tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <p class="no-found">
                                <i class="fe fe-user-minus"></i>
                                Aucun patient n'a été trouvé avec "<strong>{{
                                    search
                                }}</strong
                                >", <br />
                                <em>Créer un patient ci-dessous.</em>
                            </p>
                        </div>
                    </div>
                </transition>
            </div>

            <h2><i class="fe fe-user-plus"></i>Créer un patient</h2>

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
                    placeholder="Prénom"
                    type="text"
                >
                    <template #icon>
                        <i class="fe fe-user"></i>
                    </template>
                </vs-input>

                <vs-input
                    v-model="createPatientDetails.lastname"
                    placeholder="Nom"
                    type="text"
                >
                    <template #icon>
                        <i class="fe fe-user"></i>
                    </template>
                </vs-input>

                <vs-input
                    :danger="validationMessage.email != null"
                    v-model="createPatientDetails.email"
                    @keyup="validationEmail"
                    placeholder="Email"
                    autocomplete="email"
                    type="email"
                >
                    <template #icon>@</template>
                    <template #message-danger>
                        {{ validationMessage.email }}
                    </template>
                </vs-input>
            </div>
            <div class="buttons">
                <vs-button
                    @click="createPatient(false)"
                    flat
                    :class="{
                        disabled:
                            validationMessage.email ||
                            !createPatientDetails.email,
                    }"
                    ><i class="fe fe-file-minus"></i>Créer sans
                    prescription</vs-button
                >
                <vs-button
                    @click="createPatient(true)"
                    :class="{
                        disabled:
                            validationMessage.email ||
                            !createPatientDetails.email,
                    }"
                    ><i class="fe fe-user-plus"></i>Créer</vs-button
                >
            </div>
        </vs-dialog>
        <vs-dialog class="modal-confirm" v-model="modalConfirmAddPatient">
            <p class="modal-confirm-text">Confirmer l'ajout de</p>

            <div class="modal-confirm-detail">
                <div class="modal-confirm-icon">
                    <i class="fe fe-user-plus"></i>
                </div>
                <p>
                    <span>
                        {{
                            addPatientDetails.gender
                                ? "male" === addPatientDetails.gender
                                    ? "M."
                                    : "Mme"
                                : ""
                        }}
                        {{ addPatientDetails.lastname }}
                        {{ addPatientDetails.firstname }}
                    </span>
                </p>
            </div>

            <div class="modal-confirm-buttons">
                <vs-button
                    @click="modalConfirmAddPatient = false"
                    dark
                    transparent
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validAddPatient"
                    :loading="btnLoadingValidAddPatient"
                    primary
                    transparent
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
        <vs-dialog class="modal-confirm" v-model="modalConfirmCreatePatient">
            <p class="modal-confirm-text">Confirmer la création de</p>

            <div class="modal-confirm-detail">
                <div class="modal-confirm-icon">
                    <i class="fe fe-user-plus"></i>
                </div>
                <p>
                    <span>
                        {{
                            createPatientDetails.gender &&
                            createPatientDetails.gender != "0"
                                ? "1" === createPatientDetails.gender
                                    ? "M."
                                    : "Mme"
                                : ""
                        }}
                        {{ createPatientDetails.lastname }}
                        {{ createPatientDetails.firstname }}
                    </span>
                </p>
            </div>

            <div class="modal-confirm-buttons">
                <vs-button
                    @click="modalConfirmCreatePatient = false"
                    dark
                    transparent
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validCreatePatient"
                    :loading="btnLoadingValidCreatePatient"
                    primary
                    transparent
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import f from "../../services/function";

export default {
    name: "PatientAdd",
    props: {
        doctor: Object,
        triggerAddPatient: Boolean,
        allPatientsList: Array,
        csrfTokenAddPatient: String,
        csrfTokenCreatePatient: String,
    },
    directives: {
        ClickOutside,
    },
    data() {
        return {
            search: "",
            modalAddPatient: false,
            modalConfirmAddPatient: false,
            modalConfirmCreatePatient: false,
            btnLoadingValidAddPatient: false,
            btnLoadingValidCreatePatient: false,
            addPatientDetails: {},
            createPatientDetails: {
                firstname: "",
                lastname: "",
                email: "",
                gender: "",
            },
            createPatientWithPrescri: false,
            validationMessage: {
                email: null,
            },
        };
    },
    mounted() {
        if (this.triggerAddPatient) {
            this.modalAddPatient = true;
        }
    },
    computed: {
        allPatientsListArrayFiltered() {
            return f.getSearch(this.allPatientsList, this.search);
        },
    },
    methods: {
        addPatient(patient) {
            this.addPatientDetails = patient;

            return (this.modalConfirmAddPatient = !this.modalConfirmAddPatient);
        },
        validAddPatient() {
            this.btnLoadingValidAddPatient = true;

            this.axios
                .post(`/kine/${this.doctor.id}/add/patient`, {
                    _token: this.csrfTokenAddPatient,
                    patient_id: this.addPatientDetails.id,
                })
                .then((response) => {
                    this.openNotification(
                        `<strong>Ajout du patient</strong>`,
                        `${response.data}`,
                        "top-right",
                        "success",
                        "<i class='fe fe-check-circle'></i>"
                    );
                    this.$parent.doctorPatientsListArray.push(
                        this.addPatientDetails
                    );
                    if (this.$parent.allPatientsList.length) {
                        this.$parent.allPatientsList.find(
                            (p) => p.id === this.addPatientDetails.id
                        ).doctor = this.doctor;
                    }
                    this.btnLoadingValidAddPatient = false;
                    this.modalConfirmAddPatient = false;
                    this.modalAddPatient = false;
                })
                .catch((error) => {
                    this.openNotification(
                        `<strong>Ajout du patient : Erreur</strong>`,
                        `${error.response.data}`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                    this.btnLoadingValidAddPatient = false;
                    this.modalConfirmAddPatient = false;
                    this.modalAddPatient = false;
                });
        },
        createPatient(bool) {
            this.createPatientWithPrescri = bool;

            return (this.modalConfirmCreatePatient =
                !this.modalConfirmCreatePatient);
        },
        validCreatePatient() {
            this.btnLoadingValidCreatePatient = true;

            this.axios
                .post(`/kine/${this.doctor.id}/create/patient`, {
                    _token: this.csrfTokenCreatePatient,
                    firstname: this.createPatientDetails.firstname,
                    lastname: this.createPatientDetails.lastname,
                    gender:
                        this.createPatientDetails.gender &&
                        this.createPatientDetails.gender != "0"
                            ? "1" === this.createPatientDetails.gender
                                ? "male"
                                : "female"
                            : "",
                    email: this.createPatientDetails.email,
                })
                .then((response) => {
                    this.openNotification(
                        `<strong>Création du patient</strong>`,
                        `${response.data.message}`,
                        "top-right",
                        "success",
                        "<i class='fe fe-check-circle'></i>"
                    );
                    this.$parent.doctorPatientsListArray.push(
                        response.data.patient
                    );
                    this.$parent.allPatientsList.push(response.data.patient);
                    if (
                        this.createPatientWithPrescri &&
                        response.data.patient
                    ) {
                        setTimeout(() => {
                            document.location.href = `/kine/${this.doctor.id}/fiches/modeles/${response.data.patient.id}`;
                        }, 1000);
                    }
                    this.btnLoadingValidCreatePatient = false;
                    this.createPatientDetails = {
                        firstname: "",
                        lastname: "",
                        email: "",
                        gender: "",
                    };
                    this.modalConfirmCreatePatient = false;
                    this.modalAddPatient = false;
                })
                .catch((error) => {
                    this.openNotification(
                        `<strong>Création du patient : Erreur</strong>`,
                        `${error.response.data}`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                    this.btnLoadingValidCreatePatient = false;
                    this.modalConfirmCreatePatient = false;
                    this.modalAddPatient = false;
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
        resetSearch() {
            this.search = "";
        },
        getAge(dateString) {
            return f.generateAgeFromDateOfBirth(dateString);
        },
        openNotification(title, text, position, color, icon) {
            this.$vs.notification({
                progress: "auto",
                flat: true,
                icon,
                color,
                position,
                title,
                text,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.patient {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
    padding: 0.4em 0;

    .details {
        display: flex;
        align-items: center;
        padding-left: 0.8em;
        flex: 2;
        max-width: 60%;

        @media (min-width: 576px) {
            padding-left: 1.3em;
            max-width: 65%;
        }

        .avatar {
            margin-right: 0.8em;
            min-width: 35px;
        }

        .text {
            flex: 1;
            overflow: hidden;

            .name {
                font-size: 0.8em;

                .birthdate {
                    background: #fff8ee;
                    color: #f5b85d;
                    font-size: 0.7em;
                    padding: 0.2em 0.4em;
                    border-radius: 0.4em;
                    position: relative;
                    top: -1px;
                    white-space: nowrap;
                }
            }

            .email {
                font-size: 0.7em;
                color: #91a3bd;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
    .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 1em;
        flex: 1;

        .current-doctor {
            button {
                cursor: unset;
                border-radius: 1em;
                width: 100%;
                font-size: 0.6rem !important;

                span {
                    flex: 1;
                    margin: 0.1em;
                }

                .vs-avatar-content {
                    margin-left: 0.6em;
                }
            }
        }

        .btn-add {
            width: 3em;
            height: 3em;

            i {
                font-size: 1.5em;
                margin-left: 0.2em;
            }
        }
    }
}

.create-patient-form {
    > * {
        margin: 0.5em 0;
    }
}

.buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 1em;

    > button {
        flex: 1;
        margin: 0;
        line-height: 1.2;
        font-size: 0.8em;
        padding: 0.4em 0;

        i {
            margin-right: 3px;
            margin-top: -3px;
            font-size: 0.95em;
        }

        &:first-child {
            margin-right: 0.7em;
        }

        &.disabled {
            pointer-events: none;
            opacity: 0.5;
        }
    }
}
</style>
