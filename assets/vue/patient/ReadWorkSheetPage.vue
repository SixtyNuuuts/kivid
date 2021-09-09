<template>
    <div class="container" id="read-worksheet">
        <header>
            <div v-if="loadingWorksheet" class="loading-block">
                <div class="title">
                    <i class="kiv-arrow-left icon-31"></i>
                    <div class="loading-gray h1"></div>
                </div>
                <div class="loading-gray part-of-body"></div>
            </div>
            <div v-else>
                <div class="title">
                    <i class="kiv-arrow-left icon-31"></i>
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
                <div v-if="allExercisesIsCompleted">
                    <i class="kiv-confettis">
                        <img
                            src="../../img/icons/colored/confettis.svg"
                            alt="Icone de confettis"
                        />
                    </i>
                    <p>
                        Félicitation, vous avez fait tous les exercices de la
                        fiche. Vous pouvez laisser un commentaire à votre
                        praticien !
                    </p>
                </div>
                <div v-else>
                    <i class="kiv-info icon-17"></i>
                    <p>
                        À la fin de vos exercices, vous aurez la possiblité
                        d’écrire un bref commentaire.
                    </p>
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
                    :loading="loadingWorksheet"
                    :worksheet="getWorksheet"
                />
            </vs-dialog>
            <section id="timing-frieze">
                <TimingFrieze
                    :loading="loadingWorksheet"
                    :worksheet="getWorksheet"
                />
            </section>
            <section id="exercises-playlist">
                <ExercisesPlaylist
                    :exercises="getWorksheet.exercises"
                    :loading="loadingWorksheet"
                />
                <!-- <ExercisesPlaylist
                    :patient="patient"
                    :csrfTokenExerciseCompleted="csrfTokenExerciseCompleted"
                    :csrfTokenCreateExerciseStats="csrfTokenCreateExerciseStats"
                    :csrfTokenInitWorksheetSessions="
                        csrfTokenInitWorksheetSessions
                    "
                    :csrfTokenStartWorksheetSession="
                        csrfTokenStartWorksheetSession
                    "
                    :csrfTokenCreateCommentary="csrfTokenCreateCommentary"
                /> -->
            </section>
        </main>
    </div>
</template>

<script>
import f from "../services/function";
import TimingFrieze from "./components/TimingFrieze.vue";
import ExercisesPlaylist from "./components/ExercisesPlaylist.vue";
import TagPartOfBody from "./components/TagPartOfBody.vue";

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
            // doctorView: null,
            csrfTokenInitWorksheetSessions: null,
            csrfTokenStartWorksheetSession: null,
            csrfTokenExerciseCompleted: null,
            csrfTokenCreateExerciseStats: null,
            csrfTokenCreateCommentary: null,
            modalTimingFriezeMobile: false,
            loadingWorksheet: false,
        };
    },
    computed: {
        getWorksheet() {
            return this.worksheet;
        },
        allExercisesIsCompleted() {
            if (this.getWorksheet.exercises) {
                return !this.getWorksheet.exercises.filter(
                    (e) => !e.isCompleted
                ).length;
            }
        },
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.worksheetId = data.worksheetId;
        // this.doctorView = data.doctorView;
        this.csrfTokenInitWorksheetSessions =
            data.csrfTokenInitWorksheetSessions;
        this.csrfTokenStartWorksheetSession =
            data.csrfTokenStartWorksheetSession;
        this.csrfTokenExerciseCompleted = data.csrfTokenExerciseCompleted;
        this.csrfTokenCreateExerciseStats = data.csrfTokenCreateExerciseStats;
        this.csrfTokenCreateCommentary = data.csrfTokenCreateCommentary;

        this.loadingWorksheet = true;

        this.axios
            .get(
                `/patient/${this.patient.id}/get/worksheet/${this.worksheetId}`
            )
            .then((response) => {
                this.worksheet = response.data;

                this.worksheet.exercises = f.sortByPosition(
                    this.worksheet.exercises
                );

                this.loadingWorksheet = false;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                console.error(errorMess);

                this.loadingWorksheet = false;
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
                        color: $gray-dark;
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

                i {
                    font-size: 1.6rem;
                    margin-right: 1.8rem;
                    cursor: pointer;
                }

                h1 {
                    margin: 0;
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
        padding: 2.1rem;
        margin-bottom: 2.5rem;

        @media (min-width: 992px) {
            margin-bottom: 3.5rem;
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
