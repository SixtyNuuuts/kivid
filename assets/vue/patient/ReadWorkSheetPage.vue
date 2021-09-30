<template>
    <div class="container" id="worksheet">
        <header>
            <div v-if="loading" class="loading-block">
                <div class="title">
                    <i class="kiv-arrow-left icon-31"></i>
                    <div class="loading-gray h1"></div>
                </div>
                <div class="loading-gray part-of-body"></div>
            </div>
            <div v-else>
                <div class="title">
                    <i
                        class="kiv-arrow-left icon-31"
                        @click="rederictToDashboard()"
                    ></i>
                    <h1>{{ getWorksheet.title }}</h1>
                </div>
                <TagPartOfBody
                    v-if="getWorksheet.partOfBody"
                    :class="{ completed: allExercisesIsCompleted }"
                    :partOfBody="getWorksheet.partOfBody.toLowerCase()"
                />
            </div>
        </header>
        <div class="info">
            <transition name="fade">
                <div v-if="!loading && allExercisesIsCompleted">
                    <i class="kiv-confettis">
                        <img
                            src="../../img/icons/colored/confettis.svg"
                            alt="Icone de confettis"
                        />
                    </i>
                    <p>
                        Félicitation, vous avez fait tous les exercices de la
                        fiche.
                        <span v-if="currentWorksheetSession"
                            >Vous pouvez laisser un commentaire à votre
                            praticien !</span
                        >
                    </p>
                </div>
                <div v-if="!loading && !allExercisesIsCompleted">
                    <i class="kiv-info icon-17"></i>
                    <p>
                        À la fin de vos exercices, vous aurez la possiblité
                        d’écrire un bref commentaire.
                    </p>
                </div>
                <div v-if="loading" class="loading-block">
                    <i class="kiv-info icon-17"></i>
                    <div class="loading-gray w-55 p"></div>
                </div>
            </transition>
        </div>
        <div class="btn-timing-frieze-mobile">
            <vs-button
                class="secondary w-100"
                @click="modalTimingFriezeMobile = !modalTimingFriezeMobile"
            >
                Frise chronologique
            </vs-button>
        </div>
        <main>
            <vs-dialog class="modal-mobile" v-model="modalTimingFriezeMobile">
                <TimingFrieze
                    :loading="loading"
                    :worksheet="getWorksheet"
                    :currentWorksheetSession="getCurrentWorksheetSession"
                    :totalWorksheetSessions="getTotalWorksheetSessions"
                />
            </vs-dialog>
            <section id="timing-frieze">
                <TimingFrieze
                    :loading="loading"
                    :worksheet="getWorksheet"
                    :currentWorksheetSession="getCurrentWorksheetSession"
                    :totalWorksheetSessions="getTotalWorksheetSessions"
                />
            </section>
            <section id="exercises-playlist">
                <ExercisesPlaylist
                    :patient="patient"
                    :loading="loading"
                    :doctorView="doctorView"
                    :worksheet="getWorksheet"
                    :currentWorksheetSession="getCurrentWorksheetSession"
                    :csrfTokenStartWorksheetSession="
                        csrfTokenStartWorksheetSession
                    "
                    :csrfTokenCompleteWorksheetSession="
                        csrfTokenCompleteWorksheetSession
                    "
                    :csrfTokenCompleteExercise="csrfTokenCompleteExercise"
                    :csrfTokenCreateExerciseStat="csrfTokenCreateExerciseStat"
                    :csrfTokenCreateCommentary="csrfTokenCreateCommentary"
                />
            </section>
        </main>
    </div>
</template>

<script>
import Vue from "vue";
import f from "../services/function";
import TimingFrieze from "./ReadWorkSheetPage/TimingFrieze.vue";
import ExercisesPlaylist from "./ReadWorkSheetPage/ExercisesPlaylist.vue";
import TagPartOfBody from "../components/TagPartOfBody.vue";

export default {
    components: {
        ExercisesPlaylist,
        TimingFrieze,
        TagPartOfBody,
    },
    data() {
        return {
            patient: null,
            doctor: null,
            worksheetId: null,
            worksheet: {},
            currentWorksheetSession: {},
            totalWorksheetSessions: null,
            doctorView: null,
            csrfTokenStartWorksheetSession: null,
            csrfTokenCompleteWorksheetSession: null,
            csrfTokenCompleteExercise: null,
            csrfTokenCreateExerciseStat: null,
            csrfTokenCreateCommentary: null,
            modalTimingFriezeMobile: false,
            loading: false,
        };
    },
    computed: {
        getWorksheet() {
            return this.worksheet;
        },
        getCurrentWorksheetSession() {
            return this.currentWorksheetSession;
        },
        getTotalWorksheetSessions() {
            return this.totalWorksheetSessions;
        },
        allExercisesIsCompleted() {
            if (this.getWorksheet.exercises) {
                return !this.getWorksheet.exercises.filter(
                    (e) => !e.isCompleted
                ).length;
            }
        },
    },
    methods: {
        getCurrentCommentary(exerciseCommentaries) {
            let commentary = {
                content: "",
                id: null,
            };

            const commentaryExist = exerciseCommentaries.find(
                (c) =>
                    c.worksheetSession.id === this.getCurrentWorksheetSession.id
            );

            if (commentaryExist) {
                commentary = commentaryExist;
            }

            return commentary;
        },
        rederictToDashboard() {
            if (this.doctorView && this.doctor) {
                document.location.href = `/doctor/${this.doctor.id}/dashboard`;
            } else {
                document.location.href = `/patient/${this.patient.id}/dashboard`;
            }
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.doctor = data.doctor;
        this.worksheetId = data.worksheetId;
        this.doctorView = data.doctorView;
        this.csrfTokenStartWorksheetSession =
            data.csrfTokenStartWorksheetSession;
        this.csrfTokenCompleteWorksheetSession =
            data.csrfTokenCompleteWorksheetSession;
        this.csrfTokenCompleteExercise = data.csrfTokenCompleteExercise;
        this.csrfTokenCreateExerciseStat = data.csrfTokenCreateExerciseStat;
        this.csrfTokenCreateCommentary = data.csrfTokenCreateCommentary;

        this.loading = true;

        this.axios
            .get(
                `/patient/${this.patient.id}/get/worksheet/${this.worksheetId}`
            )
            .then((response) => {
                this.worksheet = response.data;

                this.axios
                    .get(
                        `/patient/${this.patient.id}/get/current-worksheet-session/${this.worksheetId}`
                    )
                    .then((response) => {
                        this.currentWorksheetSession = response.data;

                        this.worksheet.exercises = f.sortByPosition(
                            this.worksheet.exercises.map((exercise) => {
                                return {
                                    ...exercise,
                                    commentary: this.getCurrentCommentary(
                                        exercise.commentaries
                                    ),
                                };
                            })
                        );

                        this.axios
                            .get(
                                `/patient/${this.patient.id}/get/total-worksheet-sessions/${this.worksheetId}`
                            )
                            .then((response) => {
                                this.totalWorksheetSessions = response.data;

                                if (
                                    this.currentWorksheetSession &&
                                    !this.currentWorksheetSession
                                        .isInProgress &&
                                    !this.currentWorksheetSession.isCompleted
                                ) {
                                    this.axios
                                        .post(
                                            `/patient/${this.patient.id}/start/worksheet-session`,
                                            {
                                                _token: this
                                                    .csrfTokenStartWorksheetSession,
                                                worksheetId:
                                                    this.getWorksheet.id,
                                                worksheetSessionId:
                                                    this
                                                        .getCurrentWorksheetSession
                                                        .id,
                                            }
                                        )
                                        .then((response) => {
                                            // console.log(response.data);

                                            this.getCurrentWorksheetSession.isInProgress = true;

                                            this.getWorksheet.exercises.forEach(
                                                (exercise) => {
                                                    exercise.isCompleted = false;
                                                }
                                            );

                                            this.loading = false;
                                        })
                                        .catch((error) => {
                                            const errorMess =
                                                "object" ===
                                                typeof error.response.data
                                                    ? error.response.data.detail
                                                    : error.response.data;

                                            console.error(errorMess);
                                        });
                                } else {
                                    this.loading = false;
                                }
                            })
                            .catch((error) => {
                                const errorMess =
                                    "object" === typeof error.response.data
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

<style lang="scss" scoped>
@import "../../scss/variables";

#worksheet {
    .btn-timing-frieze-mobile {
        width: 100%;
        margin-bottom: 2.5rem;
        display: block;

        @media (min-width: 576px) {
            display: none;
        }
    }

    main {
        #timing-frieze {
            width: 100%;
            background: white;
            margin-right: 2.3rem;
            border-radius: 0.8rem;
            display: none;
            max-width: initial;

            @media (min-width: 576px) {
                display: block;
                width: 50%;
                max-width: 31rem;
            }
        }
    }
}
</style>
