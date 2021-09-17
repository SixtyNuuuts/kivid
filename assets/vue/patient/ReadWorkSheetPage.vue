<template>
    <div class="container" id="read-worksheet">
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
            worksheetId: null,
            worksheet: {},
            currentWorksheetSession: {},
            totalWorksheetSessions: null,
            // doctorView: null,
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
            document.location.href = `/patient/${this.patient.id}/dashboard`;
        },
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.worksheetId = data.worksheetId;
        // this.doctorView = data.doctorView;
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

#read-worksheet {
    header {
        > div {
            display: flex;
            align-items: flex-start;

            &.loading-block {
                min-height: 6rem;

                .title {
                    i {
                        color: $gray-middle !important;
                    }

                    .h1 {
                        height: 3.5rem;
                        width: 18rem;
                        margin: 0;
                        border-radius: 0.5rem;
                    }
                }

                .part-of-body {
                    height: 2.7rem;
                    width: 9rem;
                    margin-top: 0.5rem;
                    margin-left: 2rem;
                    border-radius: 0.4rem;
                }
            }

            .title {
                display: flex;
                align-items: center;
                margin-bottom: 2rem;
                max-width: 60%;
                position: relative;
                top: 0.3rem;

                @media (min-width: 768px) {
                    top: 0;
                }

                @media (min-width: 330px) {
                    max-width: 65%;
                }

                @media (min-width: 410px) {
                    max-width: 70%;
                }

                @media (min-width: 500px) {
                    max-width: 75%;
                }

                @media (min-width: 768px) {
                    max-width: 85%;
                }

                i {
                    font-size: 1.6rem;
                    margin-right: 1.8rem;
                    cursor: pointer;
                }

                h1 {
                    margin: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .part-of-body {
                margin-top: 0.5rem;
                margin-left: 2rem;
            }
        }
    }

    .info {
        border-radius: 0.5rem;
        background: $white;
        padding: 1.9rem 2.1rem;
        margin-bottom: 2.5rem;

        .loading-block {
            i {
                color: rgba($gray-middle, 0.9) !important;
            }

            .p {
                height: 1.5rem;
                margin: 0;
                font-size: 1.4rem;
                border-radius: 0.4rem;
            }
        }

        @media (min-width: 992px) {
            margin-bottom: 2.5rem;
        }

        > div {
            display: flex;
            align-items: center;

            i.kiv-info {
                color: $gray-dark;
                font-size: 1.7rem;
                margin-right: 1rem;
            }

            i.kiv-confettis {
                width: 2.2rem;
                margin-right: 0.8rem;

                img {
                    width: 100%;
                }
            }

            p {
                margin: 0;
                font-size: 1.4rem;
            }
        }
    }

    .btn-timing-frieze-mobile {
        width: 100%;
        margin-bottom: 2.5rem;
        display: block;

        @media (min-width: 576px) {
            display: none;
        }
    }

    main {
        display: flex;

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

        #exercises-playlist {
            width: 100%;

            @media (min-width: 576px) {
                width: 70%;
            }

            @media (min-width: 992px) {
                width: 80%;
            }
        }
    }
}
</style>
