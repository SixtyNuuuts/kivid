<template>
    <section
        id="my-worksheets"
        class="kiv-block"
        :class="{ reduced: !$parent.myWorksheetsContent, 'doctor-view' : doctorView }"
    >
        <button
            class="toggle-content"
            @click="$parent.myWorksheetsContent = !$parent.myWorksheetsContent"
        >
            <i class="kiv-chevron-down icon-3" :class="{'hidden':doctorView}"></i>
        </button>
        <h2>
            <span v-if="!doctorView">Mes fiches</span
            ><span v-if="doctorView">Ses prescriptions</span>
        </h2>
        <div
            v-if="doctorView"
            class="patient-prescription-btn"
        >
            <vs-button
                @click="
                    doctorPrescriProcessPatientChoice()
                "
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px"><path d="M 12.5 4 C 10.019 4 8 6.019 8 8.5 L 8 39.5 C 8 41.981 10.019 44 12.5 44 L 25.640625 44 C 24.785625 43.111 24.055516 42.103 23.478516 41 L 12.5 41 C 11.673 41 11 40.327 11 39.5 L 11 8.5 C 11 7.673 11.673 7 12.5 7 L 24 7 L 24 15.5 C 24 17.981 26.019 20 28.5 20 L 37 20 L 37 22.169922 C 38.045 22.331922 39.053 22.606906 40 23.003906 L 40 18.5 C 40 18.0855 39.831922 17.710828 39.560547 17.439453 L 26.560547 4.4394531 C 26.289172 4.1680781 25.9145 4 25.5 4 L 12.5 4 z M 27 9.1210938 L 34.878906 17 L 28.5 17 C 27.673 17 27 16.327 27 15.5 L 27 9.1210938 z M 35 24 C 28.925 24 24 28.925 24 35 C 24 41.075 28.925 46 35 46 C 41.075 46 46 41.075 46 35 C 46 28.925 41.075 24 35 24 z M 35 27 C 35.552 27 36 27.448 36 28 L 36 34 L 42 34 C 42.552 34 43 34.448 43 35 C 43 35.552 42.552 36 42 36 L 36 36 L 36 42 C 36 42.552 35.552 43 35 43 C 34.448 43 34 42.552 34 42 L 34 36 L 28 36 C 27.448 36 27 35.552 27 35 C 27 34.448 27.448 34 28 34 L 34 34 L 34 28 C 34 27.448 34.448 27 35 27 z"></path></svg>
                Créer <span class="view-on-desktop">une nouvelle</span> prescri<span class="hidden-on-small-mobile">ption</span>
            </vs-button>
        </div>
        <transition name="height">
            <div v-if="$parent.myWorksheetsContent" class="worksheet-list">
                <div
                    v-if="
                        !loadingPatientWorksheets && getPatientWorksheets.length
                    "
                    class="wl-patient"
                >
                    <div
                        v-for="(worksheet, i) in getPatientWorksheets"
                        :key="i"
                    >
                        <div class="worksheet-header">
                            <h3 class="worksheet-title">
                                {{ worksheet.title }}
                            </h3>
                            <TagPartOfBody
                                :partOfBody="worksheet.partOfBody"
                                class="btn-light btn-light-full-page"
                                :class="{
                                    completed:
                                        (worksheet.currentWorksheetSession &&
                                            worksheet.currentWorksheetSession
                                                .isCompleted) ||
                                        (!worksheet.currentWorksheetSession &&
                                            worksheet.exerciseStats.length > 0),
                                }"
                            />
                        </div>
                        <div
                            class="worksheet-progress-line"
                            v-if="!loadingPatientWorksheetsProgression &&
                                worksheet.currentWorksheetSession &&
                                !worksheet.currentWorksheetSession
                                    .isCompleted &&
                                worksheet.currentWorksheetSession.isInProgress
                            "
                        >
                            <div class="progressbar-base">
                                <div
                                    class="progressbar-thumb"
                                    :style="{
                                        width: `${worksheet.worksheetProgression}%`,
                                    }"
                                ></div>
                                <div class="progressbar-steps">
                                    <div>
                                        <div class="point"></div>
                                        <span>En cours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="worksheet-progress-line"
                            v-if="!loadingPatientWorksheetsProgression && (
                                (worksheet.currentWorksheetSession &&
                                    !worksheet.currentWorksheetSession
                                        .isCompleted &&
                                    !worksheet.currentWorksheetSession
                                        .isInProgress) ||
                                (!worksheet.currentWorksheetSession &&
                                    worksheet.countOldWorksheetSessions === 0 &&
                                    worksheet.exerciseStats.length === 0))
                            "
                        >
                            <div class="progressbar-base">
                                <div
                                    class="progressbar-thumb"
                                    :style="{
                                        width: '0%',
                                    }"
                                ></div>
                                <div class="progressbar-steps">
                                    <div>
                                        <div class="point"></div>
                                        <span>Non démarrée</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="worksheet-progress-line"
                            v-if="loadingPatientWorksheetsProgression"
                        >
                            <div class="progressbar-base loading-gray">
                                <div
                                    class="progressbar-thumb"
                                    :style="{
                                        width: '0%',
                                    }"
                                ></div>
                                <div class="progressbar-steps">
                                    <div>
                                        <div class="point"></div>
                                        <span class="loading-gray">...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            v-if="
                                (worksheet.currentWorksheetSession &&
                                    worksheet.currentWorksheetSession
                                        .isCompleted) ||
                                (!worksheet.currentWorksheetSession &&
                                    worksheet.countOldWorksheetSessions > 0)
                            "
                            class="worksheet-content session-completed"
                        >
                            <p
                                v-if="
                                    worksheet.currentWorksheetSession &&
                                    worksheet.totalWorksheetSessions !=
                                        worksheet.currentWorksheetSession
                                            .execOrder
                                "
                            >
                                <span v-if="!doctorView">
                                    Bravo, vos exercices de cette session ont
                                    été faits avec succès ! <br />
                                    <transition name="fade">
                                        <span
                                            v-if="
                                                worksheet.timeLeftBeforeNextSession
                                            "
                                        >
                                            Rendez-vous dans
                                            <strong>{{
                                                worksheet.timeLeftBeforeNextSession
                                            }}</strong>
                                            pour une nouvelle session.
                                        </span>
                                    </transition>
                                </span>
                                <span v-if="doctorView">
                                    Exercices terminés pour cette session.<br />
                                    <transition name="fade">
                                        <span
                                            v-if="
                                                worksheet.timeLeftBeforeNextSession
                                            "
                                        >
                                            Prochaine session dans
                                            <strong>{{
                                                worksheet.timeLeftBeforeNextSession
                                            }}</strong
                                            >.
                                        </span>
                                    </transition>
                                </span>
                            </p>
                            <p
                                v-if="
                                    (!worksheet.currentWorksheetSession &&
                                        worksheet.exerciseStats.length > 0) ||
                                    (worksheet.currentWorksheetSession &&
                                        worksheet.totalWorksheetSessions ==
                                            worksheet.currentWorksheetSession
                                                .execOrder)
                                "
                            >
                                <span v-if="!doctorView"
                                    >Félicitations, votre traitement est terminé
                                    !</span
                                >
                                <span v-if="doctorView"
                                    >Traitement terminé.</span
                                >
                                <br />
                            </p>
                            <p
                                v-if="
                                    !worksheet.currentWorksheetSession &&
                                    worksheet.countOldWorksheetSessions > 0 &&
                                    worksheet.exerciseStats.length === 0
                                "
                            >
                                <span v-if="!doctorView"
                                    >Vous n'avez pas réalisé votre traitement,
                                    il a expiré.</span
                                >
                                <span v-if="doctorView"
                                    >Traitement non réalisé et expiré.</span
                                >
                                <br />
                            </p>
                            <vs-button
                                v-if="!doctorView"
                                @click="redirectToWorksheetPage(worksheet.id)"
                                class="btn-consult"
                            >
                                Consulter
                            </vs-button>
                            <vs-button
                                v-if="doctorView"
                                @click="doctorViewRedirectToWorksheetPage(worksheet.id)"
                                class="btn-consult btn-consult-doctorview"
                            >
                                Voir
                                <div v-if="worksheet.commentaries && worksheet.commentaries.filter((c) => !c.doctor).length" class="worksheet-commentaries">
                                    <span class="count-commentaries">
                                        {{ worksheet.commentaries.filter((c) => !c.doctor).length }}
                                    </span>
                                </div>
                            </vs-button>
                        </div>
                        <div v-else class="worksheet-content">
                            <div class="worksheet-details">
                                <div class="worksheet-exercises-count">
                                    <i class="kiv-exercise icon-7"></i>
                                    <span class="b">{{
                                        worksheet.exercises.length
                                    }}</span>
                                    exercice<span
                                        v-if="worksheet.exercises.length > 1"
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
                                        >{{ worksheet.duration }} semaine<span
                                            v-if="worksheet.duration > 1"
                                            >s</span
                                        ></span
                                    >
                                </div>
                            </div>
                            <div class="buttons" v-if="!doctorView">
                                <vs-button
                                    @click="
                                        redirectToWorksheetPage(worksheet.id)
                                    "
                                    class="btn-go"
                                    circle
                                    floating
                                >
                                    Go !
                                </vs-button>
                            </div>
                            <div class="buttons buttons-doctor-view" v-else>
                                <vs-button
                                    @click="
                                        doctorViewRedirectToWorksheetPage(worksheet.id)
                                    "
                                    class="btn-action btn-action-voir"
                                    circle
                                    floating
                                >
                                    <i class="fas fa-eye"></i>
                                    <div v-if="worksheet.commentaries && worksheet.commentaries.filter((c) => !c.doctor).length" class="worksheet-commentaries">
                                        <span class="count-commentaries">
                                            {{ worksheet.commentaries.filter((c) => !c.doctor).length }}
                                        </span>
                                    </div>
                                </vs-button>
                                <vs-button
                                    @click="
                                        doctorViewRedirectToEditPage(worksheet.id)
                                    "
                                    class="btn-action"
                                    circle
                                    floating
                                >
                                    <i class="fas fa-pen"></i>
                                </vs-button>
                                <vs-button
                                    @click="
                                        doctorViewRemoveWorksheet(worksheet)
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
                    class="not-found"
                    v-if="
                        !loadingPatientWorksheets &&
                        !getPatientWorksheets.length
                    "
                >
                    <p>
                        <i class="fas fa-folder-minus"></i>
                        <span v-if="!doctorView">Vous n'avez pas de fiche</span>
                        <span v-if="doctorView"
                            >Le patient n'a pas encore de fiche</span
                        >
                    </p>
                </div>
                <div v-if="loadingPatientWorksheets" class="wl-patient">
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

export default {
    props: {
        patient: Object,
        patientWorksheets: Array,
        loadingPatientWorksheets: Boolean,
        loadingPatientWorksheetsProgression: Boolean,
        doctorView: Boolean,
        doctor: Object,
        csrfTokenRemoveWorksheet: String,
    },
    components: {
        TagPartOfBody,
    },
    data() {
        return {
            modalConfirmRemoveWorksheet: false,
            removeWorksheetDetails: {},
            btnLoadingValidRemoveWorksheet: false,
        };
    },
    computed: {
        getPatientWorksheets() {
            return this.sortByCreatedAt(this.patientWorksheets);
        },
    },
    methods: {
        sortByCreatedAt(array) {
            array.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            return array;
        },
        redirectToWorksheetPage(worksheetId) {
            document.location.href = `/patient/${this.patient.id}/fiche/${worksheetId}`;
        },
        doctorViewRedirectToEditPage(worksheetId) {
            document.location.href = `/doctor/${this.doctor.id}/fiche/edition/${worksheetId}/${this.patient.id}`;
        },
        doctorViewRedirectToWorksheetPage(worksheetId) {
            document.location.href = `/doctor/${this.doctor.id}/voir/${worksheetId}/${this.patient.id}/?ref=dashp`;
            // if (hasSessions) {
            //     document.location.href = `/doctor/${this.doctor.id}/voir/${worksheetId}/${this.patient.id}`;
            // } else {
            //     document.location.href = `/doctor/${this.doctor.id}/fiche/voir/${worksheetId}/${this.patient.id}`;
            // }
        },
        doctorPrescriProcessPatientChoice() {
            document.location.href = `/doctor/${this.doctor.id}/dashboard?pp=${this.patient.id}`;
        },
        doctorViewRemoveWorksheet(worksheet) {
            this.removeWorksheetDetails = worksheet;

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
                    this.$parent.patientWorksheets.splice(
                        this.$parent.patientWorksheets.indexOf(
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
    },
};
</script>

<style lang="scss" scoped>
@media (max-width: 991px) {
    #my-worksheets .worksheet-list > div:not(.not-found) > div:not(.worksheet-container) .buttons
    {
        flex-direction: column;

        .btn-action {
            margin: 0.3rem;
            width: 2.5rem;
            height: 2.5rem;
            min-width: 2.5rem;
            min-height: 2.5rem;
            max-height: 2.5rem;

            i {
                font-size: 1.1rem;

                &.fa-trash
                {
                    font-size: 1.05rem;
                }
            }
        }
    }
}

#my-worksheets.doctor-view .worksheet-list > div:not(.not-found) > div:not(.worksheet-container)
{
    position: relative;
    overflow: visible;

    .btn-action-voir
    {
        overflow: visible !important;
        position: relative;
    }

    .btn-consult-doctorview
    {
        overflow: visible;
    }

    .worksheet-commentaries
    {
        width: 1.9rem;
        height: 1.6rem;
        position: absolute;
        top: -0.6rem;
        right: -1rem;
        color: #fb8b68;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.1rem 0.1rem;

        &::before 
        {
            content: url("data:image/svg+xml,%3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 50 45.8' style='enable-background:new 0 0 50 45.8;' xml:space='preserve' fill='%23fff'%3E%3Cpath class='st0' d='M41.6,1.8H8.1c-3.4,0-6.2,2.5-6.2,5.5v20.9c0,3.1,2.8,5.5,6.2,5.5h8v10.5l16.1-10.5h9.3c3.4,0,6.2-2.5,6.2-5.5 V7.3C47.7,4.2,45,1.8,41.6,1.8z'/%3E%3C/svg%3E%0A");
            width: 1.9rem;
            height: 1.6rem;
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
            -webkit-filter: drop-shadow(0rem 0.1475rem 0.2525rem rgba(251, 139, 104, 0.9));
            filter: drop-shadow(0rem 0.1475rem 0.2525rem rgba(251, 139, 104, 0.9));
        }

        .count-commentaries {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative;
            top: -0.02rem;
        }
    }
}

.patient-prescription-btn {
    position: absolute;
    top: 1.1rem;
    right: 2.1rem;
    z-index: 55;

    @media (max-width: 380px) {
        .hidden-on-small-mobile
        {
            display: none;
        }
    }

    .view-on-desktop
    {
        margin: 0 0.33rem;

        @media (max-width: 460px) {
            display: none;
        }
    }

    .vs-button {
        white-space: nowrap;
        border-radius: 0.4rem;
        font-size: 1.2rem;
        overflow: visible;
        box-shadow: 0.15rem 0.15rem 0.7rem rgba(255, 104, 56, 0.6);
        letter-spacing: 0;
        z-index: 2;
        margin-top: 0.3rem;

        &:not(.loading)
        {
            background-color: #fff;
            color: #ff6838;
        }

        --vs-button-padding: 0.6rem 0.7rem 0.5rem 0.7rem;

        svg
        {
            width: 1.45rem;
            height: 1.45rem;
            fill: #ff6838;
            margin-right: 0.4rem;
            position: relative;
            top: -0.15rem;                            
        }

        &:disabled
        {
            svg
            {
                fill: #fff;
            }
        }
    }
}

</style>