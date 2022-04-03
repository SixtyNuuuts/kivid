<template>
    <section
        id="my-worksheets"
        class="kiv-block"
        :class="{ reduced: !$parent.myWorksheetsContent }"
    >
        <button
            class="toggle-content"
            @click="$parent.myWorksheetsContent = !$parent.myWorksheetsContent"
        >
            <i class="kiv-chevron-down icon-3"></i>
        </button>
        <h2>
            <span v-if="!doctorView">Mes</span
            ><span v-if="doctorView">Ses</span> fiches
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
                                    worksheet.exerciseStats.length > 0)
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
                            <!-- <p
                                v-if="
                                    !worksheet.currentWorksheetSession &&
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
                            </p> -->
                            <vs-button
                                v-if="!doctorView"
                                :disabled="redirectInProgress === worksheet.id"
                                @click="redirectToWorksheetPage(worksheet.id)"
                                class="btn-consult"
                            >
                                Consulter
                            </vs-button>
                            <vs-button
                                v-if="doctorView"
                                :disabled="redirectInProgress === worksheet.id"
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
                            <div class="buttons">
                                <vs-button
                                    v-if="!doctorView"
                                    :disabled="
                                        redirectInProgress === worksheet.id
                                    "
                                    @click="
                                        redirectToWorksheetPage(worksheet.id)
                                    "
                                    class="btn-go"
                                    circle
                                    floating
                                >
                                    Go !
                                </vs-button>
                                <vs-button
                                    v-if="doctorView"
                                    :disabled="
                                        redirectInProgress === worksheet.id ||
                                        (!worksheet.currentWorksheetSession &&
                                            worksheet.exerciseStats.length ===
                                                0)
                                    "
                                    @click="redirectToDoctorView(worksheet.id)"
                                    class="btn-go"
                                    circle
                                    floating
                                >
                                    Voir
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
    },
    components: {
        TagPartOfBody,
    },
    data() {
        return {
            redirectInProgress: null,
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
            this.redirectInProgress = worksheetId;

            document.location.href = `/patient/${this.patient.id}/fiche/${worksheetId}`;
        },
        redirectToDoctorView(worksheetId) {
            this.redirectInProgress = worksheetId;

            document.location.href = `/doctor/${this.doctor.id}/voir/${worksheetId}/${this.patient.id}/?ref=dashp`;
        },
    },
};
</script>
