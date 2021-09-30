<template>
    <section
        id="my-patients"
        class="kiv-block"
        :class="{ reduced: !$parent.myPatientsContent }"
    >
        <button
            class="toggle-content"
            @click="$parent.myPatientsContent = !$parent.myPatientsContent"
        >
            <i class="kiv-chevron-down icon-3"></i>
        </button>
        <h2>Mes Patients</h2>
        <transition name="fade">
            <div v-if="prescriProcess" class="prescri-process-dialog">
                <span class="step-num"
                    ><i class="fas fa-folder-plus"></i>Etape
                    {{ !$parent.prescriProcessWorksheetSelected ? 1 : 2 }}
                </span>
                <p>Veuillez Sélectionner un patient</p>
            </div>
        </transition>
        <transition name="height">
            <div v-if="$parent.myPatientsContent">
                <div class="primary-actions">
                    <div class="search">
                        <vs-input
                            v-model="search"
                            @keyup="page = 1"
                            label-placeholder="Filtrer par nom ou email"
                        />
                    </div>
                    <div>
                        <div class="btn-primary-action add">
                            <vs-tooltip>
                                <vs-button
                                    @click="modalAddPatient = true"
                                    class="btn-action add"
                                    circle
                                    floating
                                >
                                    <plus-icon
                                        size="3x"
                                        class="custom-class"
                                    ></plus-icon>
                                </vs-button>
                                <template #tooltip>
                                    Ajouter un patient
                                </template>
                            </vs-tooltip>
                        </div>
                        <vs-dialog
                            width="450px"
                            v-model="modalAddPatient"
                            :loading="$parent.loadingAllPatients"
                        >
                            <PatientAdd
                                :doctor="doctor"
                                :allPatients="allPatients"
                                :loadingAllPatients="loadingAllPatients"
                                :csrfTokenAddPatient="csrfTokenAddPatient"
                                :csrfTokenCreatePatient="csrfTokenCreatePatient"
                                @addPatient="addPatient"
                                @closeModalAddPatient="modalAddPatient = false"
                            />
                        </vs-dialog>
                    </div>
                </div>
                <div class="patients-list">
                    <div v-if="!loadingDoctorPatients">
                        <div
                            v-for="(patient, i) in getDoctorPatients"
                            :key="i"
                            class="patient-block"
                        >
                            <button
                                class="remove-user"
                                @click="removePatient(patient)"
                            >
                                <i class="fas fa-user-minus"></i>
                            </button>
                            <div class="patient-details">
                                <div>
                                    <vs-avatar class="avatar" circle size="60">
                                        <img
                                            :src="
                                                patient.avatarUrl
                                                    ? patient.avatarUrl
                                                    : '/img/avatar-default.svg'
                                            "
                                            :alt="`Avatar de ${patient.firstname} ${patient.lastname}`"
                                        />

                                        <div
                                            v-if="patient.birthdate"
                                            class="age"
                                        >
                                            {{ getAge(patient.birthdate) }} ans
                                        </div>
                                    </vs-avatar>
                                    <div class="user-name">
                                        <div
                                            class="name"
                                            v-if="
                                                patient.firstname ||
                                                patient.lastname
                                            "
                                        >
                                            {{ patient.firstname }}
                                            {{ patient.lastname }}
                                        </div>
                                        <div class="mail">
                                            {{ patient.email }}
                                        </div>
                                        <div
                                            v-if="patient.worksheets.length"
                                            class="prescriptions"
                                        >
                                            <h4>
                                                Prescription<span
                                                    v-if="
                                                        patient.worksheets
                                                            .length > 1
                                                    "
                                                    >s</span
                                                >
                                                <span
                                                    class="
                                                        count-patient-prescri
                                                    "
                                                    >{{
                                                        patient.worksheets
                                                            .length
                                                    }}</span
                                                >
                                                :
                                            </h4>
                                            <div
                                                class="
                                                    prescriptions-patient-list
                                                "
                                            >
                                                <BtnChartWorksheetPartOfBody
                                                    class="prescription"
                                                    v-for="(
                                                        worksheet, i
                                                    ) in patient.worksheets"
                                                    :key="i"
                                                    :worksheet="worksheet"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="btn-prescription-action"
                                    :class="{
                                        active: prescriProcess,
                                        selected:
                                            $parent.prescriProcessPatientSelected &&
                                            $parent
                                                .prescriProcessPatientSelected
                                                .id === patient.id,
                                    }"
                                >
                                    <vs-button
                                        @click="
                                            prescriProcessPatientChoice(patient)
                                        "
                                        class="w-100"
                                    >
                                        <transition name="fade">
                                            <span
                                                v-if="
                                                    (!prescriProcess &&
                                                        !$parent.prescriProcessPatientSelected) ||
                                                    ($parent.prescriProcessPatientSelected &&
                                                        $parent
                                                            .prescriProcessPatientSelected
                                                            .id != patient.id)
                                                "
                                                ><i
                                                    class="fas fa-folder-plus"
                                                ></i
                                                >Prescrire</span
                                            >
                                            <span
                                                v-if="
                                                    prescriProcess &&
                                                    !$parent.prescriProcessPatientSelected
                                                "
                                                ><i
                                                    class="fas fa-folder-plus"
                                                ></i
                                                >Sélectionner</span
                                            >
                                            <span
                                                v-if="
                                                    $parent.prescriProcessPatientSelected &&
                                                    $parent
                                                        .prescriProcessPatientSelected
                                                        .id === patient.id
                                                "
                                                ><i
                                                    class="fas fa-check-circle"
                                                ></i
                                                >Sélectionné</span
                                            >
                                        </transition>
                                    </vs-button>
                                </div>
                            </div>
                            <div class="account-infos">
                                <div class="status">
                                    <div
                                        v-if="
                                            patient.addRequestDoctor &&
                                            patient.isVerified
                                        "
                                        class="status"
                                    >
                                        <div class="icon-active-status"></div>
                                        <p class="text-status">Actif</p>
                                    </div>
                                    <div
                                        v-if="
                                            patient.addRequestDoctor &&
                                            !patient.isVerified
                                        "
                                        class="status"
                                    >
                                        <div class="icon-inactive-status"></div>
                                        <p class="text-status">Inactif</p>
                                    </div>
                                    <div
                                        v-if="
                                            false === patient.addRequestDoctor
                                        "
                                        class="status"
                                    >
                                        <div class="icon-waiting-status"></div>
                                        <p class="text-status">Attente</p>
                                    </div>
                                </div>
                                <div
                                    v-if="patient.lastLoginAt"
                                    class="last-login"
                                >
                                    <span>Dernière connexion :</span>
                                    <strong>{{
                                        formatDate(patient.lastLoginAt)
                                    }}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="not-found"
                        v-if="
                            !loadingDoctorPatients &&
                            !getDoctorPatients.length &&
                            !search
                        "
                    >
                        <p>
                            <i class="fas fa-user-minus"></i>
                            <span>Vous n'avez pas de patient</span>
                        </p>
                    </div>
                    <div
                        class="not-found"
                        v-if="
                            !loadingDoctorPatients &&
                            !getDoctorPatients.length &&
                            search
                        "
                    >
                        <p>
                            <i class="fas fa-user-minus"></i>
                            <span
                                >Aucun patient n'a été trouvé avec
                                <span v-if="search"
                                    >"<strong>{{ search }}</strong
                                    >"</span
                                ></span
                            >
                        </p>
                    </div>
                    <div v-if="loadingDoctorPatients">
                        <div class="loading loading-block patient-block">
                            <div class="patient-details">
                                <div>
                                    <div class="loading avatar"></div>
                                    <div class="user-name">
                                        <div class="loading name w-35"></div>
                                        <div class="loading mail w-45"></div>
                                        <div
                                            class="loading prescriptions w-25"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    class="loading btn-prescription-action"
                                ></div>
                            </div>
                            <div class="account-infos">
                                <div class="loading status w-35"></div>
                                <div class="loading last-login w-45"></div>
                            </div>
                        </div>
                        <div class="loading loading-block patient-block">
                            <div class="patient-details">
                                <div>
                                    <div class="loading avatar"></div>
                                    <div class="user-name">
                                        <div class="loading name w-35"></div>
                                        <div class="loading mail w-45"></div>
                                        <div
                                            class="loading prescriptions w-25"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    class="loading btn-prescription-action"
                                ></div>
                            </div>
                            <div class="account-infos">
                                <div class="loading status w-35"></div>
                                <div class="loading last-login w-45"></div>
                            </div>
                        </div>
                        <div class="loading loading-block patient-block">
                            <div class="patient-details">
                                <div>
                                    <div class="loading avatar"></div>
                                    <div class="user-name">
                                        <div class="loading name w-35"></div>
                                        <div class="loading mail w-45"></div>
                                        <div
                                            class="loading prescriptions w-25"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    class="loading btn-prescription-action"
                                ></div>
                            </div>
                            <div class="account-infos">
                                <div class="loading status w-35"></div>
                                <div class="loading last-login w-45"></div>
                            </div>
                        </div>
                        <div class="loading loading-block patient-block">
                            <div class="patient-details">
                                <div>
                                    <div class="loading avatar"></div>
                                    <div class="user-name">
                                        <div class="loading name w-35"></div>
                                        <div class="loading mail w-45"></div>
                                        <div
                                            class="loading prescriptions w-25"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    class="loading btn-prescription-action"
                                ></div>
                            </div>
                            <div class="account-infos">
                                <div class="loading status w-35"></div>
                                <div class="loading last-login w-45"></div>
                            </div>
                        </div>
                        <div class="loading loading-block patient-block">
                            <div class="patient-details">
                                <div>
                                    <div class="loading avatar"></div>
                                    <div class="user-name">
                                        <div class="loading name w-35"></div>
                                        <div class="loading mail w-45"></div>
                                        <div
                                            class="loading prescriptions w-25"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    class="loading btn-prescription-action"
                                ></div>
                            </div>
                            <div class="account-infos">
                                <div class="loading status w-35"></div>
                                <div class="loading last-login w-45"></div>
                            </div>
                        </div>
                        <div class="loading loading-block patient-block">
                            <div class="patient-details">
                                <div>
                                    <div class="loading avatar"></div>
                                    <div class="user-name">
                                        <div class="loading name w-35"></div>
                                        <div class="loading mail w-45"></div>
                                        <div
                                            class="loading prescriptions w-25"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    class="loading btn-prescription-action"
                                ></div>
                            </div>
                            <div class="account-infos">
                                <div class="loading status w-35"></div>
                                <div class="loading last-login w-45"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination" v-if="doctorPatients.length > max">
                    <vs-pagination
                        v-model="page"
                        buttons-dotted
                        :length="
                            getLength(getSearch(doctorPatients, search), max)
                        "
                    />
                    <div class="count-page">
                        Page: <b>{{ page }}</b>
                    </div>
                </div>
            </div>
        </transition>
        <vs-dialog v-model="modalConfirmRemovePatient">
            <p class="modal-confirm-text">Confirmer la suppression de</p>

            <div class="modal-confirm-detail remove-item">
                <div class="modal-confirm-icon remove-item">
                    <i class="fas fa-user-minus"></i>
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
                    class="secondary"
                    @click="modalConfirmRemovePatient = false"
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validRemovePatient"
                    :loading="btnLoadingValidRemovePatient"
                    :class="{
                        disabled: btnLoadingValidRemovePatient,
                    }"
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
    </section>
</template>

<script>
import f from "../../services/function";
import BtnChartWorksheetPartOfBody from "../../components/BtnChartWorksheetPartOfBody.vue";
import PatientAdd from "./MyPatients/PatientAdd.vue";
import moment from "moment";
import { PlusIcon } from "vue-feather-icons";

export default {
    props: {
        doctor: Object,
        csrfTokenAddPatient: String,
        csrfTokenRemovePatient: String,
        csrfTokenCreatePatient: String,
        prescriProcess: Boolean,
    },
    components: {
        BtnChartWorksheetPartOfBody,
        PatientAdd,
        PlusIcon,
    },
    data() {
        return {
            search: "",
            page: 1,
            max: 6,
            doctorPatients: [],
            allPatients: [],
            modalAddPatient: false,
            loadingDoctorPatients: false,
            loadingAllPatients: false,
            modalConfirmRemovePatient: false,
            removePatientDetails: {},
            btnLoadingValidRemovePatient: false,
        };
    },
    computed: {
        getDoctorPatients() {
            return this.getPage(
                f.getSearch(this.doctorPatients, this.search, "doctor"),
                this.page,
                this.max
            );
        },
        getAllPatients() {
            return this.allPatients;
        },
    },
    methods: {
        prescriProcessPatientChoice(patient) {
            this.$emit("prescriProcessPatientChoice", patient);
        },
        removePatient(patient) {
            this.removePatientDetails = patient;

            return (this.modalConfirmRemovePatient =
                !this.modalConfirmRemovePatient);
        },
        validRemovePatient() {
            this.btnLoadingValidRemovePatient = true;

            this.axios
                .post(`/doctor/${this.doctor.id}/remove/patient`, {
                    _token: this.csrfTokenRemovePatient,
                    patientId: this.removePatientDetails.id,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Suppression du patient",
                        response.data
                    );
                    this.doctorPatients.splice(
                        this.doctorPatients.indexOf(this.removePatientDetails),
                        1
                    );
                    if (this.allPatients.length) {
                        const patient = this.allPatients.find(
                            (p) => p.id === this.removePatientDetails.id
                        );
                        patient.doctor = null;
                        patient.addRequestDoctor = null;
                    }
                    this.btnLoadingValidRemovePatient = false;
                    this.modalConfirmRemovePatient = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingValidRemovePatient = false;
                    this.modalConfirmRemovePatient = false;
                });
        },
        addPatient(patient) {
            this.doctorPatients.push(patient);
        },
        getAge(birthdate) {
            return f.generateAgeFromDateOfBirth(birthdate);
        },
        formatDate(datetime) {
            return moment(datetime).format("DD/MM/YYYY");
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
    },
    created() {
        this.loadingDoctorPatients = true;

        this.axios
            .get(`/doctor/${this.doctor.id}/get/patients`)
            .then((response) => {
                this.doctorPatients = response.data;

                this.loadingDoctorPatients = false;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                console.error(errorMess);
            });

        this.loadingAllPatients = true;

        this.axios
            .get(`/doctor/${this.doctor.id}/get/all/patients`)
            .then((response) => {
                this.allPatients = response.data;

                this.loadingAllPatients = false;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                console.error(errorMess);
            });
    },
};
</script>

<style lang="scss">
@import "../../../scss/variables";

#my-patients {
    .primary-actions {
        flex-direction: row;

        .search {
            margin-right: 1.5rem;
        }
    }

    .patients-list {
        .loading-block {
            border-radius: 0.5rem;
            height: 12.8rem;
            background: #fdfcfa !important;

            div {
                border-radius: 0.5rem;
            }

            .patient-details {
                .avatar {
                    border-radius: 50%;
                    height: 6rem;
                    width: 6rem;
                }
                .user-name {
                    min-width: 100%;
                    .name {
                        height: 1.8rem;
                        width: 100%;
                    }
                    .mail {
                        height: 1rem;
                        width: 80%;
                        margin-top: 1rem;
                    }

                    .prescriptions {
                        height: 0.5rem;
                        width: 70%;
                        margin-top: 1rem;
                    }
                }
                .btn-prescription-action {
                    width: 10.3rem !important;
                    height: 3.2rem;
                    margin-top: 1.7rem;
                }
            }
            .account-infos {
                background-color: #faf9f8 !important;
                .status {
                    height: 0.8rem;
                }

                .last-login {
                    height: 0.8rem;
                }
            }
        }

        .patient-block {
            background: #faf8f4;
            border-radius: 0.5rem;
            padding: 1.6rem;
            overflow: hidden;
            min-height: 10rem;
            animation: 0.6s ease 0s forwards fadeEnter;
            opacity: 0;
            position: relative;

            &:not(:last-child) {
                margin-bottom: 1.4rem;
            }

            .remove-user {
                position: absolute;
                top: 0.6rem;
                right: 0.6rem;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid $gray-middle;
                color: $gray-middle;
                cursor: pointer;
                transition: all 0.2s;
                background: transparent;

                i {
                    font-size: 0.8rem;
                    position: relative;
                    left: 0.05rem;
                }

                &:hover {
                    border: 1px solid $gray-dark;
                    color: $gray-dark;
                }
            }

            .patient-details {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0;

                @media (min-width: 500px) {
                    flex-direction: row;
                    margin-bottom: 1.8rem;
                }

                > div {
                    display: flex;

                    &:first-child {
                        margin-right: 1.6rem;

                        .avatar {
                            margin-right: 1.5rem;
                            min-width: 60px;
                            position: relative;

                            .age {
                                position: absolute;
                                bottom: -0.6rem;
                                left: 50%;
                                transform: translateX(-50%);
                                background-color: $white;
                                padding: 0.2rem 0.5rem;
                                white-space: nowrap;
                                border-radius: 0.4rem;
                                color: $black;
                                padding-top: 0.3rem;
                                font-size: 0.8rem;
                                box-shadow: 0rem 0rem 0.8rem
                                    rgba(34, 46, 84, 0.09);
                            }
                        }

                        .user-name {
                            max-width: 39vw;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;

                            @media (min-width: 500px) {
                                max-width: 30vw;
                            }

                            @media (min-width: 650px) {
                                max-width: 46vw;
                            }

                            @media (min-width: 950px) {
                                max-width: 60vw;
                            }

                            @media (min-width: 1100px) {
                                max-width: 9.5vw;
                            }

                            @media (min-width: 1550px) {
                                max-width: 12vw;
                            }

                            @media (min-width: 1600px) {
                                max-width: 14vw;
                            }

                            @media (min-width: 1800px) {
                                max-width: 15vw;
                            }

                            .name {
                                font-size: 1.6rem;
                                font-weight: 700;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            .mail {
                                margin-top: 0.3rem;
                                font-size: 1.1rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }

                            .prescriptions {
                                h4 {
                                    font-size: 1.1rem;
                                    margin-top: 1rem;
                                    font-weight: 700;

                                    .count-patient-prescri {
                                        position: relative;
                                        top: -0.1rem;
                                        right: 0;
                                        width: 1.2rem;
                                        height: 1.2rem;
                                        min-width: 1.2rem;
                                        min-height: 1.2rem;
                                        max-height: 1.2rem;
                                        background-color: #e7dfcd;
                                        border-radius: 50%;
                                        font-size: 0.7rem;
                                        display: inline-flex;
                                        justify-content: center;
                                        align-items: center;
                                        color: white;
                                        padding: 0.1rem 0.2rem;
                                        padding-top: 0.15rem;
                                        padding-left: 0.15rem;
                                    }
                                }
                                .prescriptions-patient-list {
                                    display: flex;
                                    flex-wrap: wrap;
                                    overflow: hidden;
                                    max-height: 2.2rem;
                                    overflow-y: auto;
                                    border-radius: 0.3rem;
                                    padding: 0.15rem 0.2rem;
                                    position: relative;
                                    left: -0.35rem;

                                    .prescription {
                                        background-color: $white;
                                        border-radius: 0.2rem;
                                        font-size: 0.8rem;
                                        margin: 0.2rem;
                                        max-height: 2.15rem;
                                        box-shadow: 0rem 0rem 0.8rem
                                            rgba(34, 46, 84, 0.09);
                                        cursor: initial;

                                        &.vs-button--size-mini.btn-chart.part-of-body {
                                            .vs-button__content {
                                                padding: 0.2rem 0.4rem;
                                                padding-top: 0.3rem;
                                                padding-left: 0.4rem;

                                                img {
                                                    position: relative;
                                                    margin-right: 0.4rem;

                                                    &.icon-pied {
                                                        top: -0.1rem;
                                                        height: 0.9rem;
                                                    }

                                                    &.icon-jambe {
                                                        top: 0rem;
                                                        height: 1.35rem;
                                                    }

                                                    &.icon-bras {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }

                                                    &.icon-main {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }

                                                    &.icon-epaule {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }

                                                    &.icon-dos {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }

                                                    &.icon-cervicales {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }

                                                    &.icon-lombaires {
                                                        top: -0.1rem;
                                                        height: 1.2rem;
                                                    }

                                                    &.icon-thoracique {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    &.btn-prescription-action {
                        width: 100%;
                        margin-right: 0.8rem;

                        @media (min-width: 500px) {
                            width: initial;
                        }

                        @media (min-width: 1100px) {
                            margin-right: 0;
                        }

                        @media (min-width: 1400px) {
                            margin-right: 0.8rem;
                        }

                        .vs-button {
                            background: $white;
                            font-size: 1.4rem;
                            margin-top: 0.8rem;
                            margin-bottom: 1.8rem;
                            background: $white;
                            font-size: 1.4rem;
                            margin-bottom: 2.3rem;
                            margin-top: 1.2rem;
                            color: $orange;
                            box-shadow: 0rem 0.4rem 1.4rem 0rem
                                rgba(255, 104, 56, 0.43);
                            border-radius: 0.5rem;
                            // border: 1px solid $tournesol;

                            @media (min-width: 500px) {
                                margin-bottom: 1.1rem;
                            }

                            @media (min-width: 650px) {
                                margin-bottom: 2.3rem;
                            }

                            @media (min-width: 950px) {
                                flex-direction: row;
                                margin-bottom: 1.1rem;
                            }

                            i {
                                font-size: 1.5rem;
                            }

                            .vs-button__content {
                                padding: 0.7rem 1.5rem;
                                padding-top: 0.8rem;
                            }
                        }
                    }
                }
            }

            .account-infos {
                display: flex;
                justify-content: space-between;
                text-transform: uppercase;
                color: $black;
                font-size: 0.95rem;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 0.55rem 0.8rem;
                background-color: #f6f3eb;

                .status {
                    display: flex;
                    .icon-active-status,
                    .icon-inactive-status,
                    .icon-waiting-status {
                        border-radius: 50%;
                        margin-right: 0.4rem;
                    }

                    .icon-active-status {
                        width: 1rem;
                        height: 1rem;
                        min-width: 1rem;
                        max-height: 1rem;
                        border: 2px solid #e4decc;
                        background-color: #42ba96;
                    }

                    .icon-waiting-status {
                        width: 1rem;
                        height: 1rem;
                        min-width: 1rem;
                        max-height: 1rem;
                        border: 2px solid #e4decc;
                        background-color: #fcc755;
                    }

                    .icon-inactive-status {
                        width: 0.85rem;
                        height: 0.85rem;
                        min-width: 0.85rem;
                        max-height: 0.85rem;
                        border: 1px solid #ffffffab;
                        background-color: #dcdbdb;
                    }

                    p.text-status {
                        margin: 0;
                    }
                }

                .last-login {
                    span {
                        font-size: 0.85rem;
                    }
                }
            }
        }

        .not-found {
            min-height: 13rem;

            i {
                max-width: 3.75rem;
            }
        }
    }
}
</style>
