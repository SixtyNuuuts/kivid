<template>
    <section
        id="my-worksheets"
        class="kiv-block s-prescriptions"
        :class="{ reduced: !$parent.myPrescriptionsContent }"
    >
        <div
            class="toggle-content"
            @click="
                $parent.myPrescriptionsContent = !$parent.myPrescriptionsContent
            "
        >
            <i class="kiv-chevron-down icon-3"></i>
        </div>
        <h2>Mes prescriptions</h2>
        <transition name="height">
            <div v-if="$parent.myPrescriptionsContent">
                <div class="primary-actions">
                    <div class="search">
                        <vs-input
                            label-placeholder="Filtrer par nom de fiche et/ou patient"
                        />
                    </div>
                    <div class="btn-primary-action">
                        <vs-button @click="true" class="w-100">
                            <i class="fas fa-folder-plus"></i> Créer un
                            traitement
                        </vs-button>
                    </div>
                </div>
                <div class="worksheet-list wl-doctor">
                    <div
                        v-if="
                            !loadingDoctorWorksheets &&
                            getDoctorPrescriptions.length
                        "
                    >
                        <div
                            v-for="(worksheet, i) in getDoctorPrescriptions"
                            :key="i"
                        >
                            <div class="worksheet-header">
                                <h3 class="worksheet-title">
                                    {{ worksheet.title }}
                                </h3>
                                <TagPartOfBody
                                    :partOfBody="
                                        worksheet.partOfBody.toLowerCase()
                                    "
                                />
                            </div>
                            <div class="worksheet-content">
                                <div>
                                    <div class="worksheet-patient">
                                        <vs-avatar
                                            size="55"
                                            class="user-avatar"
                                            circle
                                        >
                                            <img
                                                :src="
                                                    worksheet.patient.avatarUrl
                                                        ? worksheet.patient
                                                              .avatarUrl
                                                        : '/img/avatar-default.svg'
                                                "
                                                :alt="`Avatar de ${worksheet.patient.firstname} ${worksheet.patient.lastname}`"
                                            />
                                        </vs-avatar>
                                        <div
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
                                        </div>
                                    </div>
                                    <div class="btn-commentaries">
                                        <vs-button
                                            :disabled="
                                                redirectInProgress ===
                                                worksheet.id
                                            "
                                            @click="
                                                redirectToWorksheetPage(
                                                    worksheet.id
                                                )
                                            "
                                            class="btn-action commentaries"
                                            circle
                                            floating
                                        >
                                            <i class="far fa-comment-alt"></i>
                                            <div class="count-commentaries">
                                                8
                                            </div>
                                        </vs-button>
                                    </div>
                                </div>
                                <div>
                                    <div class="worksheet-details">
                                        <div class="worksheet-exercises-count">
                                            <i class="kiv-exercise icon-7"></i>
                                            <span>{{
                                                worksheet.exercises.length
                                            }}</span>
                                            exercices
                                        </div>
                                        <div class="worksheet-timing">
                                            <i class="kiv-calendar icon-10"></i>
                                            <span>{{ worksheet.perDay }}x</span>
                                            par jour -
                                            <span
                                                >{{ worksheet.perWeek }}x</span
                                            >
                                            par semaine
                                        </div>
                                        <div class="worksheet-period">
                                            <i class="kiv-clock icon-11"></i>
                                            Période :
                                            <span
                                                >{{
                                                    worksheet.duration
                                                }}
                                                semaines</span
                                            >
                                        </div>
                                    </div>
                                    <div class="btns-date">
                                        <div class="buttons">
                                            <vs-button
                                                :disabled="
                                                    redirectInProgress ===
                                                    worksheet.id
                                                "
                                                @click="
                                                    redirectToWorksheetPage(
                                                        worksheet.id
                                                    )
                                                "
                                                class="btn-action"
                                                circle
                                                floating
                                            >
                                                <i class="fas fa-eye"></i>
                                            </vs-button>
                                            <vs-button
                                                :disabled="
                                                    redirectInProgress ===
                                                    worksheet.id
                                                "
                                                @click="
                                                    redirectToWorksheetPage(
                                                        worksheet.id
                                                    )
                                                "
                                                class="btn-action"
                                                circle
                                                floating
                                            >
                                                <i class="fas fa-pen"></i>
                                            </vs-button>
                                            <vs-button
                                                :disabled="
                                                    redirectInProgress ===
                                                    worksheet.id
                                                "
                                                @click="
                                                    redirectToWorksheetPage(
                                                        worksheet.id
                                                    )
                                                "
                                                class="btn-action"
                                                circle
                                                floating
                                            >
                                                <i class="fas fa-trash"></i>
                                            </vs-button>
                                        </div>
                                        <div class="created-at-date">
                                            crée le 12/05/2021
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="not-found"
                        v-if="
                            !loadingDoctorWorksheets &&
                            !getDoctorPrescriptions.length
                        "
                    >
                        <p>
                            <i class="fas fa-folder-minus"></i>
                            <span>Vous n'avez pas de prescription</span>
                        </p>
                    </div>
                    <div v-if="loadingDoctorWorksheets">
                        <div class="loading loading-block">
                            <div class="worksheet-header">
                                <div class="loading worksheet-title w-25"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="
                                            loading
                                            worksheet-exercises-count
                                            w-35
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-35"
                                    ></div>
                                </div>
                                <div class="buttons">
                                    <div class="loading btn-go"></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header">
                                <div class="loading worksheet-title w-45"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="
                                            loading
                                            worksheet-exercises-count
                                            w-15
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-35"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-25"
                                    ></div>
                                </div>
                                <div class="buttons">
                                    <div class="loading btn-go"></div>
                                </div>
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
import TagPartOfBody from "../../components/TagPartOfBody.vue";

export default {
    props: {
        doctor: Object,
        doctorPrescriptions: Array,
        loadingDoctorWorksheets: Boolean,
    },
    components: {
        TagPartOfBody,
    },
    computed: {
        getDoctorPrescriptions() {
            return this.doctorPrescriptions;
        },
    },
    data() {
        return {
            page: 1,
            redirectInProgress: null,
        };
    },
    methods: {
        redirectToWorksheetPage(worksheetId) {
            this.redirectInProgress = worksheetId;

            document.location.href = `/doctor/${this.doctor.id}/fiche/${worksheetId}`;
        },
    },
};
</script>

<style lang="scss">
@import "../../../scss/variables";

#my-worksheets.s-prescriptions {
    grid-area: myprescriptions;

    .primary-actions .btn-primary-action {
        margin-top: 1.4rem;
        margin-bottom: 0.6rem;

        @media (min-width: 768px) {
            margin: 0;
        }
    }

    .worksheet-list.wl-doctor > div:not(.not-found) {
        @media (min-width: 810px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 992px) {
            grid-template-columns: 1fr;
        }

        @media (min-width: 1270px) {
            grid-template-columns: 1fr 1fr;
        }

        > div {
            .worksheet-header {
                margin-bottom: 0.8rem;
            }

            .worksheet-content {
                flex-direction: column;

                > div {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    &:first-child {
                        align-items: center;
                    }

                    &:last-child {
                        align-items: flex-end;

                        @media (max-width: 450px) {
                            flex-direction: column !important;
                            align-items: center !important;
                        }
                    }

                    .worksheet-patient {
                        margin-bottom: 0.9rem;
                        position: relative;
                        overflow: visible;
                        flex-grow: 1;

                        .user-avatar {
                            border: 0.5rem solid $orange;
                            box-shadow: 0rem 0.4rem 1.4rem 0rem
                                rgba(251, 139, 104, 0.5);
                        }

                        .user-name {
                            background-color: $orange;
                            padding: 0.2rem 0.9rem;
                            font-size: 1.3rem;
                            font-weight: 700;
                            color: $white;
                            border-radius: 0 0.9rem 0.9rem 0;
                            padding-left: 0.8rem;
                            padding-top: 0.3rem;
                            position: absolute;
                            top: 50%;
                            left: 5.1rem;
                            transform: translateY(-50%);
                            box-shadow: 0rem 0.4rem 1.4rem 0rem
                                rgba(251, 139, 104, 0.5);
                            max-width: 14rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;

                            @media (min-width: 450px) {
                                max-width: 20rem;
                            }

                            @media (min-width: 500px) {
                                max-width: 25rem;
                            }
                        }
                    }

                    .worksheet-details {
                        font-size: 1.3rem;
                    }

                    .btns-date {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-end;

                        @media (max-width: 450px) {
                            flex-direction: row !important;
                            width: 100%;
                            margin-top: 1rem;
                        }

                        .buttons {
                            display: flex;
                        }

                        .created-at-date {
                            font-size: 1.1rem;
                            background-color: #e7dfcd66;
                            padding: 0.6rem 1.5rem;
                            border-radius: 1.5rem;
                            margin-top: 1.8rem;
                            margin-left: 1rem;
                        }
                    }

                    .btn-action {
                        background: $orange;
                    }
                }
            }
        }
    }
}
</style>
