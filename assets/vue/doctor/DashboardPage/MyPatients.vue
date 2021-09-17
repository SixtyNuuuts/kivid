<template>
    <section
        id="my-patients"
        class="kiv-block"
        :class="{ reduced: !$parent.myPatientsContent }"
    >
        <div
            class="toggle-content"
            @click="$parent.myPatientsContent = !$parent.myPatientsContent"
        >
            <i class="kiv-chevron-down icon-3"></i>
        </div>
        <h2>Mes Patients</h2>
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
                                </vs-button>
                                <template #tooltip>
                                    Ajouter un patient
                                </template>
                            </vs-tooltip>
                        </div>
                        <PatientAdd
                            :doctor="doctor"
                            :modalAddPatient="modalAddPatient"
                            :allPatients="allPatients"
                            :csrfTokenAddPatient="csrfTokenAddPatient"
                            :csrfTokenCreatePatient="csrfTokenCreatePatient"
                        />
                    </div>
                </div>
                <div class="patients-list">
                    <div
                        v-for="(patient, i) in getDoctorPatients"
                        :key="i"
                        class="patient-block"
                    >
                        <div class="remove-user">
                            <i class="fas fa-user-minus"></i>
                        </div>
                        <div class="patient-details">
                            <div>
                                <vs-avatar class="avatar" circle size="70">
                                    <img
                                        :src="
                                            patient.avatarUrl
                                                ? patient.avatarUrl
                                                : '/img/avatar-default.svg'
                                        "
                                        :alt="`Avatar de ${patient.firstname} ${patient.lastname}`"
                                    />

                                    <div v-if="patient.birthdate" class="age">
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
                                    <div class="mail">{{ patient.email }}</div>
                                    <div
                                        v-if="patient.worksheets.length"
                                        class="prescriptions"
                                    >
                                        <h4>Prescriptions :</h4>
                                        <div class="prescriptions-patient-list">
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
                            <div class="btn-prescription-action">
                                <vs-button @click="true" class="w-100">
                                    <i class="fas fa-folder-plus"></i>
                                    Prescrire
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
                                    v-if="false === patient.addRequestDoctor"
                                    class="status"
                                >
                                    <div class="icon-waiting-status"></div>
                                    <p class="text-status">Attente</p>
                                </div>
                            </div>
                            <div v-if="patient.lastLoginAt" class="last-login">
                                <span>Dernière connexion :</span>
                                <strong>{{
                                    formatDate(patient.lastLoginAt)
                                }}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <vs-pagination
                        v-model="page"
                        :length="
                            getLength(getSearch(doctorPatients, search), max)
                        "
                    />
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import f from "../../services/function";
import BtnChartWorksheetPartOfBody from "../../components/BtnChartWorksheetPartOfBody.vue";
import PatientAdd from "./MyPatients/PatientAdd.vue";
import moment from "moment";

export default {
    props: {
        doctor: Object,
        csrfTokenAddPatient: String,
        csrfTokenRemovePatient: String,
        csrfTokenCreatePatient: String,
    },
    components: {
        BtnChartWorksheetPartOfBody,
        PatientAdd,
    },
    data() {
        return {
            search: "",
            page: 1,
            max: 4,
            doctorPatients: [],
            allPatients: [],
            modalAddPatient: false,
            loadingDoctorPatients: false,
            loadingAllPatients: false,
        };
    },
    computed: {
        getDoctorPatients() {
            return this.getPage(
                this.getSearch(this.doctorPatients, this.search),
                this.page,
                this.max
            );
        },
        getAllPatients() {
            return this.allPatients;
        },
    },
    methods: {
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
    h2 {
        &::before {
            background: $sanguine;
        }
    }

    .primary-actions {
        flex-direction: row;

        .search {
            margin-right: 1.5rem;
        }
    }

    .patients-list {
        .patient-block {
            background: #faf8f4;
            border-radius: 0.5rem;
            padding: 1.6rem;
            overflow: hidden;
            min-height: 10rem;
            animation: 0.6s ease 0s forwards fadeEnter;
            opacity: 0;
            position: relative;

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

                @media (min-width: 650px) {
                    flex-direction: column;
                    margin-bottom: 0;
                }

                @media (min-width: 950px) {
                    flex-direction: row;
                    margin-bottom: 1.8rem;
                }

                > div {
                    display: flex;

                    &:first-child {
                        .avatar {
                            margin-right: 1.5rem;
                            min-width: 70px;
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
                            max-width: 50vw;

                            @media (min-width: 500px) {
                                max-width: 38vw;
                            }

                            @media (min-width: 650px) {
                                max-width: 22vw;
                            }

                            @media (min-width: 950px) {
                                max-width: 17vw;
                            }

                            @media (min-width: 992px) {
                                max-width: 13vw;
                            }

                            @media (min-width: 1100px) {
                                max-width: 11vw;
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
                                font-size: 1.45rem;
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
                                }
                                .prescriptions-patient-list {
                                    display: flex;
                                    flex-wrap: wrap;
                                    overflow: hidden;

                                    .prescription {
                                        background-color: $white;
                                        border-radius: 0.5rem;
                                        font-size: 1rem;
                                        margin: 0.2rem 0.3rem;
                                        max-height: 2.15rem;
                                        box-shadow: 0rem 0rem 0.8rem
                                            rgba(34, 46, 84, 0.09);
                                        cursor: initial;

                                        &.vs-button--size-mini.btn-chart.part-of-body {
                                            .vs-button__content {
                                                padding: 0.25rem 0.6rem;
                                                padding-top: 0.4rem;
                                                padding-left: 0.6rem;
                                            }
                                        }

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

                    &.btn-prescription-action {
                        @media (max-width: 400px) {
                            width: 100%;
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
                            color: $sanguine;
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
                        border: 2px solid #f4eee8;
                        background-color: #ffffff52;
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
    }

    .pagination {
        .vs-pagination__active {
            background: $sanguine;
        }
    }
}
</style>
