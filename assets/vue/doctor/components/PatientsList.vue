<template>
    <div>
        <PatientAdd
            :doctor="doctor"
            :triggerAddPatient="triggerAddPatient"
            :allPatientsList="allPatientsExceptDoctor"
            :csrfTokenAddPatient="csrfTokenAddPatient"
            :csrfTokenCreatePatient="csrfTokenCreatePatient"
        />
        <vs-table>
            <template #header>
                <vs-input
                    v-model="filter"
                    primary
                    placeholder="Filtrer par le nom et/ou prénom"
                    @keyup="page = 1"
                >
                    <template #icon>
                        <i class="fe fe-search"></i>
                    </template>
                </vs-input>
            </template>
            <template #thead>
                <vs-tr>
                    <vs-th
                        class="sm-dnone"
                        sort
                        @click="
                            doctorPatientsListArray = sortData(
                                $event,
                                doctorPatientsListArray,
                                'isVerified'
                            )
                        "
                    >
                        Statut
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorPatientsListArray = sortData(
                                $event,
                                doctorPatientsListArray,
                                'lastname'
                            )
                        "
                    >
                        Nom
                    </vs-th>
                    <vs-th
                        class="sm-dnone md-dnone"
                        sort
                        @click="
                            doctorPatientsListArray = sortData(
                                $event,
                                doctorPatientsListArray,
                                'email'
                            )
                        "
                    >
                        Email
                    </vs-th>
                    <vs-th
                        class="sm-dnone"
                        sort
                        @click="
                            doctorPatientsListArray = sortData(
                                $event,
                                doctorPatientsListArray,
                                'birthdate'
                            )
                        "
                    >
                        Age
                    </vs-th>
                    <vs-th>Fiche(s)</vs-th>
                    <vs-th
                        class="sm-dnone"
                        sort
                        @click="
                            doctorPatientsListArray = sortData(
                                $event,
                                doctorPatientsListArray,
                                'lastLoginAt'
                            )
                        "
                    >
                        Dernière connexion
                    </vs-th>
                    <vs-th></vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr
                    :key="i"
                    v-for="(patient, i) in getPage(
                        getSearch(doctorPatientsListArray, filter),
                        page,
                        max
                    )"
                    :class="{
                        'inactive-status': false === patient.isVerified,
                    }"
                >
                    <vs-td class="sm-dnone">
                        <div v-if="patient.isVerified" class="status">
                            <div class="icon-active-status"></div>
                            <p class="text-status">Actif</p>
                        </div>
                        <div v-else class="status">
                            <div class="icon-inactive-status"></div>
                            <p class="text-status">Inactif</p>
                        </div>
                    </vs-td>
                    <vs-td>
                        <div class="user">
                            <vs-avatar circle size="25">
                                <img
                                    :src="
                                        patient.avatarUrl
                                            ? patient.avatarUrl
                                            : '/img/avatar-default.svg'
                                    "
                                    alt="avatar du patient"
                                />
                            </vs-avatar>
                            <p>
                                {{ patient.lastname }}
                                {{ patient.firstname }}
                            </p>
                        </div>
                    </vs-td>
                    <vs-td class="sm-dnone md-dnone">
                        {{ patient.email }}
                    </vs-td>
                    <vs-td class="sm-dnone">
                        <span v-if="patient.birthdate">
                            {{ getAge(patient.birthdate) }} ans
                        </span>
                    </vs-td>
                    <vs-td>
                        <div
                            v-if="patient.prescriptions.length"
                            class="worksheets"
                        >
                            <div
                                class="worksheet"
                                v-for="(
                                    prescription, pi
                                ) in patient.prescriptions"
                                :key="pi"
                            >
                                {{ prescription.worksheet.title }}
                            </div>
                        </div>
                        <div v-else class="no-worksheet">
                            Aucune fiche pour ce patient
                        </div>
                    </vs-td>
                    <vs-td class="sm-dnone">
                        <div v-if="patient.lastLoginAt">
                            {{ formatDate(patient.lastLoginAt) }}
                        </div>
                    </vs-td>
                    <vs-td>
                        <div>
                            <vs-button
                                circle
                                size="small"
                                @click="prescription(patient)"
                                :loading="btnLoadingPrescription === patient.id"
                            >
                                <i class="fe fe-file-plus"></i>
                                Prescrire
                            </vs-button>
                            <vs-tooltip class="sm-dnone">
                                <vs-button
                                    class="btn-remove"
                                    @click="removePatient(patient)"
                                >
                                    <i class="fe fe-user-minus"></i>
                                </vs-button>
                                <template #tooltip>
                                    Retirer de mes patients
                                </template>
                            </vs-tooltip>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination
                    v-model="page"
                    :length="
                        getLength(
                            getSearch(doctorPatientsListArray, filter),
                            max
                        )
                    "
                />
            </template>
            <template #notFound>
                <div v-if="!$parent.loadingDoctorPatientsList">
                    <div v-if="filter">
                        <i class="fe fe-user-minus"></i>
                        Aucun patient n'a été trouvé avec "<strong>{{
                            filter
                        }}</strong
                        >".
                    </div>
                    <div v-else>
                        <i class="fe fe-user-minus"></i>
                        Vous n'avez aucun patient.
                    </div>
                </div>
                <div v-else>...</div>
            </template>
        </vs-table>
        <vs-dialog class="modal-confirm" v-model="modalConfirmRemovePatient">
            <p class="modal-confirm-text">Confirmer la suppression de</p>

            <div class="modal-confirm-detail remove-item">
                <div class="modal-confirm-icon remove-item">
                    <i class="fe fe-user-minus"></i>
                </div>
                <p>
                    <span>
                        {{
                            removePatientDetails.gender
                                ? "male" === removePatientDetails.gender
                                    ? "M."
                                    : "Mme"
                                : ""
                        }}
                        {{ removePatientDetails.lastname }}
                        {{ removePatientDetails.firstname }}
                    </span>
                </p>
            </div>

            <p class="modal-confirm-text">de votre liste.</p>

            <div class="modal-confirm-buttons">
                <vs-button
                    @click="modalConfirmRemovePatient = false"
                    dark
                    transparent
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validRemovePatient"
                    :loading="btnLoadingValidRemovePatient"
                    danger
                    transparent
                    :class="{ disabled: btnLoadingValidRemovePatient }"
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import PatientAdd from "./PatientAdd.vue";
import f from "../../services/function";

export default {
    name: "PatientsList",
    components: {
        PatientAdd,
    },
    props: {
        doctor: Object,
        triggerAddPatient: Boolean,
        doctorPatients: Array,
        csrfTokenAddPatient: String,
        csrfTokenRemovePatient: String,
        csrfTokenCreatePatient: String,
    },
    data() {
        return {
            filter: "",
            page: 1,
            max: 10,
            doctorPatientsList: [],
            allPatientsList: [],
            loadingAllPatientsList: false,
            modalConfirmRemovePatient: false,
            removePatientDetails: {},
            btnLoadingValidRemovePatient: false,
            btnLoadingPrescription: false,
        };
    },
    computed: {
        doctorPatientsListArray: {
            get() {
                let doctorPatientsList;
                if (!this.doctorPatientsList.length) {
                    doctorPatientsList = this.doctorPatients;
                } else {
                    doctorPatientsList = this.doctorPatientsList;
                }

                return doctorPatientsList;
            },
            set(newDoctorPatientsList) {
                this.doctorPatientsList = newDoctorPatientsList;
            },
        },
        allPatientsExceptDoctor() {
            return this.allPatientsList.filter((patient) => {
                return (
                    !patient.doctor ||
                    (patient.doctor ? this.doctor.id !== patient.doctor.id : "")
                );
            });
        },
    },
    methods: {
        prescription(patient) {
            this.btnLoadingPrescription = patient.id;

            document.location.href = `/kine/${this.doctor.id}/fiches/modeles/${patient.id}`;
        },
        removePatient(patient) {
            this.removePatientDetails = patient;

            return (this.modalConfirmRemovePatient =
                !this.modalConfirmRemovePatient);
        },
        validRemovePatient() {
            this.btnLoadingValidRemovePatient = true;

            this.axios
                .post(`/kine/${this.doctor.id}/remove/patient`, {
                    _token: this.csrfTokenRemovePatient,
                    patient_id: this.removePatientDetails.id,
                })
                .then((response) => {
                    this.openNotification(
                        `<strong>Suppression du patient</strong>`,
                        `${response.data}`,
                        "top-right",
                        "success",
                        "<i class='fe fe-check-circle'></i>"
                    );
                    this.doctorPatientsListArray.splice(
                        this.doctorPatientsListArray.indexOf(
                            this.removePatientDetails
                        ),
                        1
                    );
                    if (this.allPatientsList.length) {
                        this.allPatientsList.find(
                            (p) => p.id === this.removePatientDetails.id
                        ).doctor = null;
                    }
                    this.btnLoadingValidRemovePatient = false;
                    this.modalConfirmRemovePatient = false;
                })
                .catch((error) => {
                    this.openNotification(
                        `<strong>Suppression du patient : Erreur</strong>`,
                        `${error.response.data}`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                    this.btnLoadingValidRemovePatient = false;
                    this.modalConfirmRemovePatient = false;
                });
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
        getPage(data, page, maxItems) {
            return f.getPage(data, page, maxItems);
        },
        getLength(data, maxItems) {
            return f.getLength(data, maxItems);
        },
        getSearch(data, filter) {
            return f.getSearch(data, filter);
        },
        sortData(evt, data, sortKey, type) {
            return f.sortData(evt, data, sortKey, type);
        },
        getAge(dateString) {
            return f.generateAgeFromDateOfBirth(dateString);
        },
        formatDate(datetime) {
            return f.formatDate(datetime);
        },
    },
    created() {
        this.loadingAllPatientsList = true;

        this.axios
            .get(`/get/patients`)
            .then((response) => {
                this.allPatientsList = response.data;
                this.loadingAllPatientsList = false;
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data.detail);
                }

                this.loadingAllPatientsList = false;
            });
    },
};
</script>

<style lang="scss" scoped>
.vs-table__th:nth-child(1) {
    width: 8% !important;
    @media (max-width: 515px) {
        width: 0% !important;
    }
}

.vs-table__th:nth-child(2) {
    width: 22% !important;
    @media (max-width: 515px) {
        width: 0% !important;
    }
}

.vs-table__th:nth-child(3) {
    width: 22% !important;
    @media (max-width: 515px) {
        width: 0% !important;
    }
}

.vs-table__th:nth-child(4) {
    width: 7% !important;
    @media (max-width: 515px) {
        width: 0% !important;
    }
}

.vs-table__th:nth-child(5) {
    width: 25% !important;
    @media (max-width: 515px) {
        width: 5% !important;
    }
}

.vs-table__th:nth-child(6) {
    width: 10% !important;
    @media (max-width: 515px) {
        width: 0% !important;
    }
}

.vs-table__th:nth-child(7) {
    width: 0% !important;
}

.status {
    .icon-active-status,
    .icon-inactive-status {
        border-radius: 50%;
    }

    .icon-active-status {
        width: 1em;
        height: 1em;
        border: 2px solid #d9e2ef;
        background-color: #42ba96;
    }

    .icon-inactive-status {
        width: 0.85em;
        height: 0.85em;
        border: 2px solid #d9e2ef;
        background-color: #d9e2ef9e;
    }

    p.text-status {
        text-transform: uppercase;
        margin: 0;
        margin-left: 0.4em;
        color: #abbcd5;
        font-size: 0.8em;
    }
}

.user {
    flex-direction: column;

    p {
        margin-top: 0.5em;
        margin-left: 0;
        margin-bottom: 0;
        flex: 1;
        font-size: 0.8em;
        text-align: center;
    }

    @media (min-width: 515px) {
        flex-direction: row;

        p {
            margin-left: 0.6em;
            margin-top: 0;
            font-size: 1em;
            text-align: left;
        }
    }
}

.worksheets {
    flex-wrap: wrap;
}

.worksheet,
.no-worksheet {
    display: inline-block !important;
    padding: 0.5em 0.7em;
    font-size: 0.65em;
    line-height: 1.3;
    margin: 0.3em;
    text-align: center;
    width: 100%;
}

.worksheet {
    background: #f9fbfd;
    color: #36486a;
    box-shadow: 0 0.1rem 0.3rem rgb(22 28 45 / 20%) !important;
    border-radius: 0.2em;
}

.no-worksheet {
    background: #f2f5f9;
    color: #8a9ebf;
    border-radius: 1.5em;
}
</style>
