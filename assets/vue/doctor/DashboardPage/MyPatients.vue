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
                        <vs-input label-placeholder="Filtrer par nom" />
                    </div>
                    <div>
                        <div class="btn-primary-action add">
                            <vs-tooltip>
                                <vs-button
                                    :disabled="redirectInProgress === true"
                                    @click="true"
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
                    </div>
                </div>
                <div class="patients-list">
                    <div class="patient-block">
                        <div class="remove-user">
                            <i class="fas fa-user-minus"></i>
                        </div>
                        <div class="patient-details">
                            <div>
                                <vs-avatar class="avatar" circle size="70">
                                    <img
                                        :src="'../../img/avatar-default.svg'"
                                        :alt="`Avatar de Damien Dupuy`"
                                    />
                                    <div class="age">27 ans</div>
                                </vs-avatar>

                                <!-- <div
                                    class="user-name"
                                    v-if="
                                        worksheet.patient.firstname ||
                                        worksheet.patient.lastname
                                    "
                                >
                                    {{ worksheet.patient.firstname }}
                                    {{ worksheet.patient.lastname }}
                                </div>
                                <div v-else>
                                    {{ worksheet.patient.email }}
                                </div> -->
                                <!-- <img
                                    :src="
                                        patient.doctor.avatarUrl
                                            ? patient.doctor.avatarUrl
                                            : '../../img/avatar-default.svg'
                                    "
                                    :alt="`Avatar de ${patient.doctor.firstname} ${patient.doctor.lastname}`"
                                /> -->
                                <div class="user-name">
                                    <div class="name">Damien Dupuy</div>
                                    <div class="mail">sixty.nuts@gmail.com</div>
                                    <div class="prescriptions">
                                        <h4>Prescriptions :</h4>
                                        <div class="prescriptions-patient-list">
                                            <div class="prescription">
                                                Fiche Test
                                            </div>

                                            <div class="prescription">
                                                Fiche Test 2
                                            </div>
                                            <div class="prescription">
                                                Fiche Test 3
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <BtnChartWorksheetPartOfBody
                                    :worksheet="worksheet"
                                /> -->
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
                                <div class="icon-active-status"></div>
                                <p class="text-status">Actif</p>
                            </div>
                            <div class="last-login">
                                <span>Dernière connexion :</span>
                                <strong>20/06/2021</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <vs-pagination v-model="page" :length="2" />
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import f from "../../services/function";
import BtnChartWorksheetPartOfBody from "../../components/BtnChartWorksheetPartOfBody.vue";

export default {
    props: {
        doctor: Object,
        doctorPatients: Array,
        loadingDoctorPatients: Boolean,
    },
    components: {
        BtnChartWorksheetPartOfBody,
    },
    computed: {
        getDoctorPatients() {
            return this.doctorPatients;
        },
    },
    data() {
        return {
            redirectInProgress: null,
            page: 1,
        };
    },
    methods: {
        // redirectToWorksheetPage(worksheetId) {
        //     this.redirectInProgress = worksheetId;
        //     document.location.href = `/doctor/${this.doctor.id}/fiche/${worksheetId}`;
        // },
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
                                background-color: #c1b79f;
                                padding: 0.2rem 0.5rem;
                                white-space: nowrap;
                                border-radius: 0.4rem;
                                color: $white;
                                padding-top: 0.3rem;
                                font-size: 0.9rem;
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
                                        height: 1.4rem;
                                        background-color: white;
                                        border-radius: 0.5rem;
                                        padding: 0.2rem;
                                        margin: 0.2rem 0.3rem;
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
