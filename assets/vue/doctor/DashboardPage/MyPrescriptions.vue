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
                            :class="{
                                desactive:
                                    doctor.patients.filter(
                                        (p) => p.id === worksheet.patient.id
                                    ).length === 0,
                            }"
                        >
                            <div class="worksheet-header">
                                <div class="user-title">
                                    <vs-avatar
                                        size="35"
                                        class="user-avatar"
                                        circle
                                        @click="
                                            redirectToPatientDashboard(
                                                worksheet.patient.id
                                            )
                                        "
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
                                    <h3
                                        class="worksheet-title"
                                        @click="
                                            redirectToPatientDashboard(
                                                worksheet.patient.id
                                            )
                                        "
                                    >
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
                                    :partOfBody="worksheet.partOfBody"
                                />
                            </div>
                            <div class="worksheet-progress-line">
                                <div
                                    v-if="
                                        loadingsGetSessions.includes(
                                            worksheet.id
                                        )
                                    "
                                    class="loading-gray progressbar-base"
                                ></div>
                                <div v-else class="progressbar-base">
                                    <div
                                        class="progressbar-thumb"
                                        :style="{
                                            width: `${worksheet.worksheetTotalProgression}%`,
                                        }"
                                    ></div>
                                </div>
                                <div class="count-sessions">
                                    <div
                                        v-if="
                                            loadingsGetSessions.includes(
                                                worksheet.id
                                            )
                                        "
                                        class="loading-gray session-nb"
                                    ></div>
                                    <p
                                        v-else
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
                                                    0 &&
                                                worksheet.currentWorksheetSession &&
                                                worksheet.totalCompletedWorksheetSessions !=
                                                    worksheet.totalWorksheetSessions
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
                                        <span
                                            v-if="
                                                0 ===
                                                worksheet.totalWorksheetSessions
                                            "
                                        >
                                            Non démarrée
                                        </span>
                                        <span
                                            v-if="
                                                null ===
                                                worksheet.totalWorksheetSessions
                                            "
                                        >
                                            NB Sessions
                                        </span>
                                        <span
                                            v-if="
                                                (worksheet.totalWorksheetSessions >
                                                    0 &&
                                                    !worksheet.currentWorksheetSession) ||
                                                (worksheet.totalWorksheetSessions >
                                                    0 &&
                                                    worksheet.totalCompletedWorksheetSessions ===
                                                        worksheet.totalWorksheetSessions)
                                            "
                                        >
                                            Traitement terminé
                                        </span>
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
                                                        worksheet.id,
                                                        worksheet.patient.id
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
                            <div
                                v-if="
                                    doctor.patients.filter(
                                        (p) => p.id === worksheet.patient.id
                                    ).length === 0
                                "
                                class="avert-not-patient-doctor"
                            >
                                <i class="kiv-info icon-17"></i>
                                <p>
                                    Vous n'êtes plus le praticien de ce patient
                                    :
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
                                </p>
                                <vs-button
                                    size="small"
                                    class="btn-rmv-prescri secondary"
                                    @click="removeWorksheet(worksheet)"
                                >
                                    <i class="far fa-trash-alt"></i>
                                    Supprimer la prescription
                                </vs-button>
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
                        Page : <b>{{ page }}</b>
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
            <p class="alert">
                <i class="fas fa-exclamation-triangle"></i>
                Attention : cela supprimera également le
                <strong>
                    suivi et statistiques du patient pour cette fiche</strong
                >, action&nbsp;irrémédiable.
            </p>

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
            const docPrescriptions = this.getPage(
                f.getSearch(this.doctorPrescriptions, this.search, "doctor"),
                this.page,
                this.max
            );

            if (docPrescriptions.length) {
                const debounceTimer = this.search ? 700 : 0;
                clearTimeout(this.debounceGetSessionsInfos);
                this.debounceGetSessionsInfos = setTimeout(() => {
                    docPrescriptions.forEach((worksheet) => {
                        if (
                            this.doctor.patients.find(
                                (p) => p.id === worksheet.patient.id
                            ) &&
                            (null === worksheet.worksheetTotalProgression ||
                                null === worksheet.currentWorksheetSession ||
                                null === worksheet.totalWorksheetSessions ||
                                null ===
                                    worksheet.totalCompletedWorksheetSessions)
                        ) {
                            this.loadingsGetSessions.push(worksheet.id);
                            this.axios
                                .get(
                                    `/patient/${worksheet.patient.id}/get/current-worksheet-session/${worksheet.id}/doctorview`
                                )
                                .then((response) => {
                                    worksheet.currentWorksheetSession =
                                        null ===
                                        response.data.currentWorksheetSession
                                            ? false
                                            : response.data
                                                  .currentWorksheetSession;

                                    this.axios
                                        .get(
                                            `/patient/${worksheet.patient.id}/get/total-worksheet-sessions/${worksheet.id}`
                                        )
                                        .then((response) => {
                                            worksheet.totalWorksheetSessions =
                                                response.data;

                                            this.axios
                                                .get(
                                                    `/patient/${worksheet.patient.id}/get/total-completed-worksheet-sessions/${worksheet.id}`
                                                )
                                                .then((response) => {
                                                    worksheet.totalCompletedWorksheetSessions =
                                                        response.data;

                                                    worksheet.worksheetTotalProgression =
                                                        this.calculWorksheetTotalProgression(
                                                            worksheet.totalCompletedWorksheetSessions,
                                                            worksheet.totalWorksheetSessions
                                                        );

                                                    this.loadingsGetSessions.splice(
                                                        this.loadingsGetSessions.indexOf(
                                                            worksheet.id
                                                        ),
                                                        1
                                                    );
                                                })
                                                .catch((error) => {
                                                    const errorMess =
                                                        "object" ===
                                                        typeof error.response
                                                            .data
                                                            ? error.response
                                                                  .data.detail
                                                            : error.response
                                                                  .data;

                                                    console.error(errorMess);
                                                });
                                        })
                                        .catch((error) => {
                                            const errorMess =
                                                "object" ===
                                                typeof error.response.data
                                                    ? error.response.data.detail
                                                    : error.response.data;

                                            console.error(errorMess);
                                        });
                                })
                                .catch((error) => {
                                    const errorMess =
                                        "object" === typeof error.response.data
                                            ? error.response.data.detail
                                            : error.response.data;

                                    console.error(errorMess);
                                });
                        }
                    });
                }, debounceTimer);
            }

            return docPrescriptions;
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
            debounceGetSessionsInfos: null,
            loadingsGetSessions: [],
        };
    },
    methods: {
        calculWorksheetTotalProgression(
            totalCompletedWorksheetSessions,
            totalWorksheetSessions
        ) {
            let totalProgressionPercent = 0;

            const sessionPercentPart = 100 / totalWorksheetSessions;

            const t1 =
                Math.round(
                    sessionPercentPart * totalCompletedWorksheetSessions * 10
                ) / 10;

            totalProgressionPercent = t1;

            return totalProgressionPercent;
        },
        prescriProcess() {
            this.$emit("prescriProcess", true);
        },
        redirectToEditPage(worksheetId, patientId) {
            document.location.href = `/doctor/${this.doctor.id}/fiche/edition/${worksheetId}/${patientId}`;
        },
        redirectToWorksheetPage(worksheetId, patientId, hasSessions) {
            if (hasSessions) {
                document.location.href = `/doctor/${this.doctor.id}/voir/${worksheetId}/${patientId}`;
            } else {
                document.location.href = `/doctor/${this.doctor.id}/fiche/voir/${worksheetId}/${patientId}`;
            }
        },
        redirectToPatientDashboard(patientId) {
            document.location.href = `/doctor/${this.doctor.id}/voir/patient/${patientId}`;
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
            padding-top: 4.2rem;

            @media (min-width: 500px) {
                align-items: flex-start;
                padding-top: 1.5rem;
            }

            &.desactive {
                .worksheet-header,
                .worksheet-progress-line,
                .worksheet-content {
                    pointer-events: none !important;
                    opacity: 0.2 !important;
                    user-select: none !important;
                }
            }

            .worksheet-header {
                .user-avatar {
                    margin-right: 1rem;
                    min-width: 35px;
                    max-height: 35px;
                    cursor: pointer;
                }

                .user-title {
                    max-width: 70vw;

                    @media (min-width: 500px) {
                        max-width: 56.2vw;
                    }

                    @media (min-width: 576px) {
                        max-width: 60vw;
                    }

                    @media (min-width: 992px) {
                        max-width: 70vw;
                    }

                    @media (min-width: 1100px) {
                        max-width: 40.7vw;
                    }

                    @media (min-width: 1370px) {
                        max-width: 50vw;
                    }

                    .worksheet-title {
                        font-size: 1.3rem;
                        cursor: pointer;

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
                            z-index: 111;

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
                    font-size: 1rem;
                    top: 1.2rem;
                    right: 50%;
                    transform: translateX(50%);

                    @media (max-width: 379px) {
                        top: 1.2rem;
                    }

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
                    max-width: 45rem;
                }

                @media (min-width: 992px) {
                    max-width: 40vw;
                }

                @media (min-width: 1020px) {
                    max-width: 38vw;
                }

                @media (min-width: 1100px) {
                    max-width: 44rem;
                }

                @media (min-width: 1450px) {
                    max-width: 46rem;
                }

                .progressbar-base {
                    flex-grow: 1;
                    height: 0.6rem;

                    &.loading-gray {
                        animation-duration: 1.2s;
                        animation-fill-mode: forwards;
                        animation-iteration-count: infinite;
                        animation-name: placeHolderShimmer;
                        animation-timing-function: linear;
                        background: linear-gradient(
                            to right,
                            #f2efe8 8%,
                            #e1dcd0 38%,
                            #f2efe8 54%
                        );
                        background-size: 1000px 640px;
                        position: relative;
                    }
                }

                .count-sessions {
                    display: flex;
                    align-items: center;
                    margin-left: 0.8rem;

                    .session-nb {
                        font-weight: 700;
                        color: #d3ccbc;
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

                    .loading-gray.session-nb {
                        height: 1rem;
                        width: 6.5rem;
                        border-radius: 0.5rem;
                        border: 2px solid #faf8f4;
                    }
                }
            }
            .worksheet-content {
                flex-direction: column;
                margin-bottom: 0;
                width: 100%;

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
                            max-width: 98%;

                            @media (max-width: 499px) {
                                margin-bottom: 0;
                            }

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
                            max-width: 41vw;
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
                        flex-direction: row-reverse;
                        width: 103.4%;
                        align-items: center;
                        position: absolute;
                        top: 1.1rem;
                        bottom: auto;
                        right: -0.8rem;
                        padding: 0 1.6rem;
                        justify-content: space-between;

                        @media (min-width: 500px) {
                            flex-direction: column;
                            margin-top: 0rem;
                            align-items: flex-end;
                            padding: 0;
                            top: auto;
                            bottom: 2rem;
                            right: 1.8rem;
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

            .avert-not-patient-doctor {
                position: absolute;
                z-index: 11;
                top: -0.9rem;
                left: -0.9rem;
                right: 0;
                bottom: 0;
                width: 100%;
                border-radius: 0.7rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: $black;
                font-size: 1.3rem;
                text-align: center;
                padding: 0 14%;
                line-height: 1.5;
                text-shadow: 0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff;
                white-space: initial;
                margin-top: 0;
                display: flex;
                flex-direction: column;
                // background-color: #faf8f48a;
                backdrop-filter: blur(0.3rem);

                i {
                    margin-right: 0rem;
                    margin-bottom: 0.25rem;
                    color: $black;
                    font-size: 1.2rem;
                    position: relative;
                    top: 0rem;
                }

                p {
                    margin: 0;

                    span.user-name {
                        font-weight: 700;
                    }
                }

                @media (min-width: 768px) {
                    margin-top: 1rem;
                }

                @media (min-width: 1070px) {
                    white-space: nowrap;
                    flex-direction: row;
                    i {
                        margin-right: 0.6rem;
                        margin-bottom: 0rem;
                    }
                }

                .vs-button.btn-rmv-prescri {
                    font-size: 1.1rem;
                    border-radius: 0.5rem;
                    background: $white;
                    color: #c1b79d;
                    border: 0.1rem solid #e7dfcd;
                    margin-top: 0.5rem;
                    margin-left: 0;

                    @media (min-width: 1070px) {
                        margin-top: 0;
                        margin-left: 1.5rem;
                    }

                    &:hover {
                        background: $white;
                        color: #bbb196;
                        border: 0.1rem solid #bbb196;
                        box-shadow: none;
                        transform: none;
                    }

                    i {
                        font-size: 0.9rem;
                        position: relative;
                        top: 0.09rem;
                        margin-left: 0;
                        margin-right: 0.5rem;
                        color: #c3b8a2;
                        @media (min-width: 1070px) {
                            top: -0.01rem;
                        }
                    }

                    .vs-button__content {
                        padding: 0.5rem 0.9rem;
                    }
                }
            }
        }
    }
}
</style>
