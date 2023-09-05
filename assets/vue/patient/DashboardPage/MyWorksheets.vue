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
            <i class="kiv-chevron-down icon-3"></i>
        </button>
        <h2>
            <span v-if="!doctorView">Mes</span
            ><span v-if="doctorView">Ses</span> prescriptions
        </h2>
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
                        <div v-if="worksheet.commentaries && worksheet.commentaries.length" class="worksheet-commentaries">
                            <i class="far fa-comment-alt"></i>
                            <div class="count-commentaries">
                                {{ worksheet.commentaries.length}}
                            </div>
                        </div>
                        <div
                            class="worksheet-progress-line"
                            v-if="
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
                                        <!-- <span v-if="!doctorView"
                                            >Vous avez fini la fiche !</span
                                        >
                                        <span v-if="doctorView">En cours</span> -->
                                        <span>En cours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="worksheet-progress-line"
                            v-if="
                                (worksheet.currentWorksheetSession &&
                                    !worksheet.currentWorksheetSession
                                        .isCompleted &&
                                    !worksheet.currentWorksheetSession
                                        .isInProgress) ||
                                (!worksheet.currentWorksheetSession &&
                                    worksheet.countOldWorksheetSessions === 0 &&
                                    worksheet.exerciseStats.length === 0)
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
                                        <!-- <span v-if="!doctorView"
                                            >Vous avez fini la fiche !</span
                                        >
                                        <span v-if="doctorView"
                                            >Non démarrée</span
                                        > -->
                                        <span>Non démarrée</span>
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
                                @click="redirectToDoctorView(worksheet.id)"
                                class="btn-consult"
                            >
                                Voir
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
                                    v-if="
                                        worksheet.totalWorksheetSessions >
                                        0
                                    "
                                    @click="
                                        doctorViewRedirectToWorksheetPage(worksheet.id,true)
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
                                        doctorViewRedirectToWorksheetPage(worksheet.id,false)
                                    "
                                    class="btn-action"
                                    circle
                                    floating
                                >
                                    <i class="fas fa-eye"></i>
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
                <div v-if="loadingPatientWorksheets">
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
        redirectToDoctorView(worksheetId) {
            document.location.href = `/doctor/${this.doctor.id}/voir/${worksheetId}/${this.patient.id}/?ref=dashp`;
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

    .worksheet-commentaries
    {
        position: absolute;
        top: -0.3rem;
        right: -0.4rem;
        padding: 0.5rem;
        border-radius: 50%;
        width: 2.7rem;
        height: 2.7rem;
        color: #fff;
        font-size: 1.4rem;

        &::before 
        {
            content: "";
            width: 1.9rem;
            height: 1.6rem;
            background-color: #fb8b68;
            position: absolute;
            bottom: 0.6rem;
            right: 0.6rem;
            border-radius: 0.5rem;       
        }

        // &::after 
        // {
        //     content: "";
        //     width: 0.3rem;
        //     height: 0.3rem;
        //     background-color: #fb8b68;
        //     position: absolute;
        //     bottom: 0.4rem;
        //     right: 1.5rem;        
        // }

        .fa-comment-alt
        {
            font-size: 2rem;
            position: relative;
            top: 0rem;
            left: -0.35rem;
            color: #fb8b68;
        }

        .count-commentaries
        {
            position: absolute;
            top: 0.61rem;
            right: 0.6rem;
            width: 1.8rem;
            height: 1.3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.8rem;
            background-color: #fb8b68;
        }
    }
}
</style>