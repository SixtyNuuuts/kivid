<template>
    <section
        id="my-worksheets"
        class="kiv-block s-prescriptions"
        :class="{ reduced: !$parent.myPrescriptionsContent }"
    >
        <div
            class="toggle-content tab"
            @click="
                $parent.myPrescriptionsContent = !$parent.myPrescriptionsContent
            "
        >
            <i class="kiv-chevron-down icon-3"></i>
        </div>
        <div class="tabs">
            <div @click="activeTab(1)">
                <h2><span>Mes prescriptions</span></h2>
            </div>
            <div class="inactive" @click="activeTab(2)">
                <h2><span>Mes fiches</span></h2>
            </div>
        </div>
        <transition name="height">
            <div v-if="$parent.myPrescriptionsContent">
                <div class="primary-actions">
                    <div class="search">
                        <vs-input
                            v-model="search"
                            @keyup="page = 1"
                            label-placeholder="Filtrer par nom de fiche et/ou patient"
                        />
                    </div>
                    <div class="btn-primary-action">
                        <vs-button @click="prescriProcess" class="w-100">
                            <i class="fas fa-folder-plus"></i> Prescrire
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
                                <div class="user-title">
                                    <vs-avatar
                                        size="35"
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
                                    <h3 class="worksheet-title">
                                        <span
                                            class="user-name"
                                            v-if="
                                                worksheet.patient.firstname ||
                                                worksheet.patient.lastname
                                            "
                                        >
                                            {{ worksheet.patient.firstname }}
                                            {{ worksheet.patient.lastname }}
                                        </span>
                                        <span v-else>
                                            {{ worksheet.patient.email }}
                                        </span>
                                        <span class="deux-points">:</span>
                                        {{ worksheet.title }}
                                    </h3>
                                    <div v-if="worksheet.commentaries.length">
                                        <vs-button
                                            @click="
                                                redirectToWorksheetPage(
                                                    worksheet.id,
                                                    worksheet.patient.id,
                                                    true
                                                )
                                            "
                                            class="btn-action commentaries"
                                            circle
                                            floating
                                        >
                                            <i class="far fa-comment-alt"></i>
                                            <div class="count-commentaries">
                                                {{
                                                    worksheet.commentaries
                                                        .length
                                                }}
                                            </div>
                                        </vs-button>
                                    </div>
                                </div>
                                <TagPartOfBody
                                    :partOfBody="
                                        worksheet.partOfBody.toLowerCase()
                                    "
                                />
                            </div>
                            <div class="worksheet-progress-line">
                                <div class="progressbar-base">
                                    <div
                                        class="progressbar-thumb"
                                        :style="{
                                            width: `${worksheet.worksheetTotalProgression}%`,
                                        }"
                                    ></div>
                                    <!-- <div class="progressbar-steps">
                                        <div>
                                            <div class="point"></div>
                                        </div>
                                    </div> -->
                                </div>
                                <div class="count-sessions">
                                    <!-- <i class="session-img">
                                        <img
                                            src="../../../img/icons/colored/basket.svg"
                                            alt="Icone d'une basket"
                                        />
                                    </i> -->
                                    <p
                                        class="session-nb"
                                        :class="{
                                            completed:
                                                100 <=
                                                worksheet.worksheetTotalProgression,
                                        }"
                                    >
                                        <span
                                            v-if="
                                                worksheet.totalWorksheetSessions >
                                                0
                                            "
                                        >
                                            Session n°<span
                                                v-if="
                                                    worksheet.currentWorksheetSession
                                                "
                                                >{{
                                                    worksheet
                                                        .currentWorksheetSession
                                                        .execOrder
                                                }}</span
                                            ><span v-else>{{
                                                worksheet.totalWorksheetSessions
                                            }}</span
                                            >/{{
                                                worksheet.totalWorksheetSessions
                                            }}
                                        </span>
                                        <span v-else> Non démarrée </span>
                                    </p>
                                </div>
                            </div>
                            <div class="worksheet-content">
                                <div>
                                    <div class="worksheet-details">
                                        <div class="worksheet-exercises-count">
                                            <i class="kiv-exercise icon-7"></i>
                                            <span class="b">{{
                                                worksheet.exercises.length
                                            }}</span>
                                            exercice<span
                                                v-if="
                                                    worksheet.exercises.length >
                                                    1
                                                "
                                                >s</span
                                            >
                                        </div>
                                        <div class="worksheet-timing">
                                            <i class="kiv-calendar icon-10"></i>
                                            <span class="b"
                                                >{{ worksheet.perDay }}x</span
                                            >
                                            par jour -
                                            <span class="b"
                                                >{{ worksheet.perWeek }}x</span
                                            >
                                            par semaine
                                        </div>
                                        <div class="worksheet-period">
                                            <i class="kiv-clock icon-11"></i>
                                            Période :
                                            <span class="b"
                                                >{{
                                                    worksheet.duration
                                                }}
                                                semaine<span
                                                    v-if="
                                                        worksheet.duration > 1
                                                    "
                                                    >s</span
                                                ></span
                                            >
                                        </div>
                                    </div>
                                    <div class="worksheet-details reduced">
                                        <div class="worksheet-exercises-count">
                                            <i class="kiv-exercise icon-7"></i>
                                            <span class="b">{{
                                                worksheet.exercises.length
                                            }}</span>
                                            ex.
                                        </div>
                                        <div class="worksheet-timing">
                                            <i class="kiv-calendar icon-10"></i>
                                            <span class="b"
                                                >{{ worksheet.perDay }}x</span
                                            >
                                            / jour -
                                            <span class="b"
                                                >{{ worksheet.perWeek }}x</span
                                            >
                                            / sem.
                                        </div>
                                        <div class="worksheet-period">
                                            <i class="kiv-clock icon-11"></i>
                                            <span class="b"
                                                >{{
                                                    worksheet.duration
                                                }}
                                                sem.</span
                                            >
                                        </div>
                                    </div>
                                    <div class="btns-date">
                                        <div class="created-at-date">
                                            <span
                                                >créé le
                                                {{
                                                    formatDate(
                                                        worksheet.createdAt
                                                    )
                                                }}
                                            </span>
                                        </div>

                                        <div class="buttons">
                                            <vs-button
                                                v-if="
                                                    worksheet.totalWorksheetSessions >
                                                    0
                                                "
                                                @click="
                                                    redirectToWorksheetPage(
                                                        worksheet.id,
                                                        worksheet.patient.id,
                                                        true
                                                    )
                                                "
                                                class="btn-action"
                                                circle
                                                floating
                                            >
                                                <i class="fas fa-eye"></i>
                                            </vs-button>
                                            <vs-button
                                                v-if="
                                                    worksheet.totalWorksheetSessions ===
                                                    0
                                                "
                                                @click="
                                                    redirectToWorksheetPage(
                                                        worksheet.id,
                                                        worksheet.patient.id,
                                                        false
                                                    )
                                                "
                                                class="btn-action"
                                                circle
                                                floating
                                            >
                                                <i class="fas fa-eye"></i>
                                            </vs-button>
                                            <vs-button
                                                @click="
                                                    redirectToEditPage(
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
                                                @click="
                                                    removeWorksheet(worksheet)
                                                "
                                                class="btn-action"
                                                circle
                                                floating
                                            >
                                                <i class="fas fa-trash"></i>
                                            </vs-button>
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
                            !getDoctorPrescriptions.length &&
                            !search
                        "
                    >
                        <p>
                            <i class="fas fa-folder-minus"></i>
                            <span>Vous n'avez pas de prescription</span>
                        </p>
                    </div>
                    <div
                        class="not-found"
                        v-if="
                            !loadingDoctorWorksheets &&
                            !getDoctorPrescriptions.length &&
                            search
                        "
                    >
                        <p>
                            <i class="fas fa-folder-minus"></i>
                            <span
                                >Aucune prescription n'a été trouvée avec
                                <span v-if="search"
                                    >"<strong>{{ search }}</strong
                                    >"</span
                                ></span
                            >
                        </p>
                    </div>
                    <div v-if="loadingDoctorWorksheets">
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
                                <div class="loading worksheet-title w-65"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="
                                            loading
                                            worksheet-exercises-count
                                            w-45
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
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
                                            w-45
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
                                <div class="loading worksheet-title w-55"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="
                                            loading
                                            worksheet-exercises-count
                                            w-45
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
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
                                            w-45
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
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
                                            w-45
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
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
                                            w-45
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
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
                                            w-45
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination" v-if="doctorPrescriptions.length > max">
                    <vs-pagination
                        v-model="page"
                        buttons-dotted
                        :length="
                            getLength(
                                getSearch(doctorPrescriptions, search),
                                max
                            )
                        "
                    />
                    <div class="count-page">
                        Page: <b>{{ page }}</b>
                    </div>
                </div>
            </div>
        </transition>
        <vs-dialog v-model="modalConfirmRemoveWorksheet">
            <p class="modal-confirm-text">Confirmer la suppression de</p>

            <div class="modal-confirm-detail remove-item">
                <div class="modal-confirm-icon remove-item">
                    <i class="fas fa-trash"></i>
                </div>
                <p>
                    <span>
                        {{ removeWorksheetDetails.title }}
                    </span>
                </p>
            </div>

            <div class="modal-confirm-buttons">
                <vs-button
                    class="secondary"
                    @click="modalConfirmRemoveWorksheet = false"
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validRemoveWorksheet"
                    :loading="btnLoadingValidRemoveWorksheet"
                    :class="{
                        disabled: btnLoadingValidRemoveWorksheet,
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
import TagPartOfBody from "../../components/TagPartOfBody.vue";
import moment from "moment";

export default {
    props: {
        doctor: Object,
        doctorPrescriptions: Array,
        loadingDoctorWorksheets: Boolean,
        csrfTokenRemoveWorksheet: String,
    },
    components: {
        TagPartOfBody,
    },
    computed: {
        getDoctorPrescriptions() {
            return this.getPage(
                f.getSearch(this.doctorPrescriptions, this.search, "doctor"),
                this.page,
                this.max
            );
        },
    },
    data() {
        return {
            search: "",
            page: 1,
            max: 6,
            modalConfirmRemoveWorksheet: false,
            removeWorksheetDetails: {},
            btnLoadingValidRemoveWorksheet: false,
        };
    },
    methods: {
        prescriProcess() {
            this.$emit("prescriProcess", true);
        },
        redirectToEditPage(worksheetId) {
            document.location.href = `/doctor/${this.doctor.id}/fiche/edition/${worksheetId}`;
        },
        redirectToWorksheetPage(worksheetId, patientId, hasSessions) {
            if (hasSessions) {
                document.location.href = `/doctor/${this.doctor.id}/voir/${worksheetId}/${patientId}`;
            } else {
                document.location.href = `/doctor/${this.doctor.id}/fiche/voir/${worksheetId}`;
            }
        },
        activeTab(num) {
            this.$parent.activeTab = num;

            if (window.innerWidth < 576) {
                if (1 === num) {
                    this.$parent.myPrescriptionsContent =
                        !this.$parent.myPrescriptionsContent;
                }
                if (2 === num) {
                    this.$parent.myWorksheetTemplatesContent = true;
                }
            }
        },
        removeWorksheet(patient) {
            this.removeWorksheetDetails = patient;

            return (this.modalConfirmRemoveWorksheet =
                !this.modalConfirmRemoveWorksheet);
        },
        validRemoveWorksheet() {
            this.btnLoadingValidRemoveWorksheet = true;

            this.axios
                .post(`/doctor/${this.doctor.id}/remove/worksheet`, {
                    _token: this.csrfTokenRemoveWorksheet,
                    worksheetId: this.removeWorksheetDetails.id,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Suppression de la prescription",
                        response.data
                    );
                    this.$parent.doctorWorksheets.splice(
                        this.$parent.doctorWorksheets.indexOf(
                            this.removeWorksheetDetails
                        ),
                        1
                    );
                    this.btnLoadingValidRemoveWorksheet = false;
                    this.modalConfirmRemoveWorksheet = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingValidRemoveWorksheet = false;
                    this.modalConfirmRemoveWorksheet = false;
                });
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
};
</script>

<style lang="scss">
@import "../../../scss/variables";

#my-worksheets.s-prescriptions {
    padding-top: 6.7rem;

    &.reduced {
        padding-top: 4.4rem;
    }

    .tabs {
        > div {
            &.inactive {
                box-shadow: inset 0.66rem -0.3rem 0.9rem rgba(148, 96, 77, 0.07);
                border-radius: 0 0 0 0.8rem;
            }
        }
    }

    .worksheet-list.wl-doctor > div:not(.not-found) {
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;

            @media (min-width: 500px) {
                align-items: flex-start;
            }

            .worksheet-header {
                .user-avatar {
                    margin-right: 1rem;
                    min-width: 35px;
                    max-height: 35px;
                }

                .user-title {
                    max-width: 70vw;

                    @media (min-width: 500px) {
                        max-width: 62vw;
                    }

                    @media (min-width: 576px) {
                        max-width: 65vw;
                    }

                    @media (min-width: 992px) {
                        max-width: 36vw;
                    }

                    @media (min-width: 1100px) {
                        max-width: 45vw;
                    }

                    @media (min-width: 1370px) {
                        max-width: 50vw;
                    }

                    .worksheet-title {
                        font-size: 1.3rem;

                        @media (min-width: 500px) {
                            font-size: 1.4rem;
                        }

                        @media (min-width: 576px) {
                            font-size: 1.6rem;
                        }
                    }

                    .btn-action {
                        &.commentaries {
                            background: $white !important;
                            color: $gray-middle;
                            position: relative;
                            overflow: visible;
                            width: 3rem;
                            height: 3rem;
                            min-width: 3rem;
                            min-height: 3rem;
                            max-height: 3rem;
                            margin-left: 1rem;
                            box-shadow: 0rem 0.2rem 0.9rem 0rem
                                rgba(231, 223, 205, 0.6);

                            i {
                                font-size: 1.6rem;
                                top: 0.18rem;
                                left: 0.45rem;
                            }

                            .count-commentaries {
                                position: absolute;
                                top: -0.3rem;
                                right: -0.5rem;
                                width: 1.2rem;
                                height: 1.2rem;
                                min-width: 1.2rem;
                                min-height: 1.2rem;
                                max-height: 1.2rem;
                                background-color: $orange;
                                border-radius: 50%;
                                font-size: 0.7rem;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                color: white;
                                padding: 0.1rem 0.2rem;
                                padding-top: 0.15rem;
                            }
                        }
                    }
                }

                .vs-button--size-mini.tag.part-of-body {
                    font-size: 0.9rem;
                    top: 0;
                    right: 50%;
                    transform: translateX(50%);

                    @media (min-width: 500px) {
                        top: 1.6rem;
                        right: 1.8rem;
                        transform: none;
                        font-size: 1.3rem;
                    }
                }
            }

            .worksheet-progress-line {
                display: flex;
                align-items: center;
                margin-bottom: 1.4rem;
                max-width: 70vw;
                width: 100%;

                @media (min-width: 500px) {
                    max-width: 28rem;
                }

                @media (min-width: 700px) {
                    max-width: 46rem;
                }

                @media (min-width: 992px) {
                    max-width: 36vw;
                }

                @media (min-width: 1100px) {
                    max-width: 46rem;
                }

                .progressbar-base {
                    flex-grow: 1;
                    height: 0.6rem;
                }

                .count-sessions {
                    display: flex;
                    align-items: center;
                    margin-left: 0.8rem;

                    // i {
                    //     width: 1.9rem;
                    // }
                    .session-nb {
                        font-weight: 700;
                        color: #dfd9ca;
                        margin: 0;
                        font-size: 0.9rem;
                        text-transform: uppercase;

                        &.completed {
                            color: $orange;
                        }

                        &:not(.completed):hover {
                            color: $gray-dark;
                        }
                    }
                }
            }
            .worksheet-content {
                flex-direction: column;
                margin-bottom: 2.1rem;
                width: 100%;

                @media (min-width: 500px) {
                    margin-bottom: 0;
                }

                > div {
                    .worksheet-details {
                        position: relative;
                        display: none;

                        @media (min-width: 700px) {
                            display: flex;
                        }

                        &.reduced {
                            display: flex;
                            width: 100%;
                            align-items: center;
                            justify-content: flex-start;
                            margin-bottom: 0.2rem;
                            overflow: hidden;
                            max-width: 96%;

                            @media (min-width: 410px) {
                                justify-content: center;
                            }

                            @media (min-width: 500px) {
                                justify-content: flex-start;
                            }

                            @media (min-width: 500px) {
                                max-width: initial;
                            }

                            @media (min-width: 700px) {
                                display: none;
                            }
                        }

                        @media (min-width: 992px) {
                            max-width: 36.5vw;
                            overflow: hidden;
                            font-size: 1.15rem !important;
                        }

                        @media (min-width: 1100px) {
                            max-width: initial;
                            font-size: 1.3rem !important;
                        }

                        &::after {
                            content: "";
                            display: block;
                            height: 100%;
                            width: 1.5rem;
                            position: absolute;
                            top: 0;
                            right: 0;
                            background: linear-gradient(
                                90deg,
                                rgba(250, 248, 244, 0) 0%,
                                rgba(250, 248, 244, 1) 100%
                            );
                        }
                    }

                    .btns-date {
                        display: flex;
                        flex-direction: row;
                        width: 99%;
                        margin-top: 3rem;
                        align-items: center;
                        position: absolute;
                        bottom: -0.7rem;
                        right: 0;
                        padding: 1.6rem;
                        justify-content: space-between;

                        @media (min-width: 500px) {
                            flex-direction: column;
                            width: initial;
                            margin-top: 0rem;
                            align-items: flex-end;
                            padding: 0;
                            bottom: 2rem;
                            right: 2rem;
                        }

                        .created-at-date {
                            margin-bottom: 0;
                            margin-right: 0.7rem;

                            @media (min-width: 500px) {
                                margin-bottom: 0.9rem;
                                margin-right: 0rem;
                            }

                            @media (min-width: 700px) {
                                margin-bottom: 0.7rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
