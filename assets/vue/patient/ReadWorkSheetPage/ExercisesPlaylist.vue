<template>
    <div>
        <div class="exercises-list">
            <div v-if="loading">
                <div class="exercise loading-block">
                    <div class="loading-gray thumbnail-wrapper"></div>
                    <div class="content">
                        <div class="loading-gray h2 w-45"></div>
                        <div class="details">
                            <div class="series-reps">
                                <div class="loading-gray series w-25"></div>
                                <div class="loading-gray reps w-15"></div>
                            </div>
                            <div class="loading-gray option w-25"></div>
                            <div class="loading-gray tempo w-15"></div>
                            <div class="loading-gray hold w-25"></div>
                        </div>
                        <div class="commentary">
                            <div class="loading-gray title w-25"></div>
                            <div class="loading-gray input"></div>
                        </div>
                    </div>
                </div>
                <div class="exercise loading-block">
                    <div class="loading-gray thumbnail-wrapper"></div>
                    <div class="content">
                        <div class="loading-gray h2 w-35"></div>
                        <div class="details">
                            <div class="series-reps">
                                <div class="loading-gray series w-15"></div>
                                <div class="loading-gray reps w-25"></div>
                            </div>
                            <div class="loading-gray option w-25"></div>
                            <div class="loading-gray tempo w-15"></div>
                            <div class="loading-gray hold w-25"></div>
                        </div>
                        <div class="commentary">
                            <div class="loading-gray title w-25"></div>
                            <div class="loading-gray input"></div>
                        </div>
                    </div>
                </div>
                <div class="exercise loading-block">
                    <div class="loading-gray thumbnail-wrapper"></div>
                    <div class="content">
                        <div class="loading-gray h2 w-45"></div>
                        <div class="details">
                            <div class="series-reps">
                                <div class="loading-gray series w-15"></div>
                                <div class="loading-gray reps w-15"></div>
                            </div>
                            <div class="loading-gray option w-25"></div>
                            <div class="loading-gray tempo w-15"></div>
                            <div class="loading-gray hold w-25"></div>
                        </div>
                        <div class="commentary">
                            <div class="loading-gray title w-25"></div>
                            <div class="loading-gray input"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div
                    v-for="(exercise, i) in getExercises"
                    :key="i"
                    class="exercise"
                    :class="{
                        disabled:
                            exercise !== getCurrentExercise &&
                            !exercise.isCompleted,
                    }"
                >
                    <div class="thumbnail-wrapper">
                        <div
                            v-if="
                                exercise === getCurrentExercise &&
                                !exercise.isCompleted
                            "
                            class="btn-playlist"
                        >
                            <vs-button @click="openVideoPlayer">
                                <span v-if="0 === i">Démarrer</span>
                                <span v-else>Reprendre</span>
                            </vs-button>
                        </div>
                        <div
                            class="thumbnail"
                            :style="{
                                backgroundImage: `url('${exercise.video.thumbnailUrl}')`,
                            }"
                        ></div>
                    </div>
                    <div class="content">
                        <h2>{{ exercise.video.name }}</h2>
                        <div class="details">
                            <div class="series-reps">
                                <div class="series">
                                    <i class="kiv-series icon-18"></i
                                    ><span>{{ exercise.numberOfSeries }}</span>
                                    séries
                                </div>
                                <div
                                    v-if="exercise.numberOfRepetitions"
                                    class="reps"
                                >
                                    <i class="kiv-reps icon-19"></i
                                    ><span>{{
                                        exercise.numberOfRepetitions
                                    }}</span>
                                    répétitions
                                </div>
                            </div>
                            <div v-if="exercise.option" class="option">
                                Options : <span>{{ exercise.option }}</span>
                            </div>
                            <div v-if="exercise.tempo" class="tempo">
                                Tempo : <span>{{ exercise.tempo }}</span>
                            </div>
                            <div v-if="exercise.hold" class="hold">
                                Tenir : <span>{{ exercise.hold }}s</span>
                            </div>
                        </div>
                        <div class="commentary">
                            <p>Commentaire</p>
                            <vs-input
                                v-if="exercise.commentary"
                                placeholder="Tapez votre commentaire"
                                :disabled="!exercise.isCompleted"
                                v-model="exercise.commentary.content"
                                @keyup="setCommentaryWithDebounce(exercise)"
                                @blur="setCommentary(exercise)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="request-subscription">
                <div class="icon-request-subscription">
                    <i class="kiv-subscription icon-20"></i>
                </div>
                <div class="text-request-subscription">
                    <p>
                        Pour avoir accès à l’ensemble des vidéos de la
                        prescription, veuillez vous abonner.
                    </p>
                </div>
                <div class="btn-request-subscription">
                    <vs-button> Je m’abonne </vs-button>
                </div>
            </div>
        </div>
        <transition name="fade">
            <VideoPlayer
                v-if="videoPlayerToggle"
                :patient="patient"
                :worksheet="getWorksheet"
                :exercise="getCurrentExercise"
                :exercises="getExercises"
                :lastExercise="getTheLastExercise"
                :currentWorksheetSession="getCurrentWorksheetSession"
                :csrfTokenCompleteWorksheetSession="
                    csrfTokenCompleteWorksheetSession
                "
                :csrfTokenCompleteExercise="csrfTokenCompleteExercise"
                :csrfTokenCreateExerciseStat="csrfTokenCreateExerciseStat"
                @closeVideoPlayer="closeVideoPlayer"
            />
        </transition>
    </div>
</template>

<script>
import VideoPlayer from "./ExercisesPlaylist/VideoPlayer.vue";

export default {
    components: {
        VideoPlayer,
    },
    props: {
        patient: Object,
        loading: Boolean,
        worksheet: Object,
        currentWorksheetSession: Object,
        csrfTokenStartWorksheetSession: String,
        csrfTokenCompleteWorksheetSession: String,
        csrfTokenCompleteExercise: String,
        csrfTokenCreateExerciseStat: String,
        csrfTokenCreateCommentary: String,
    },
    data() {
        return {
            videoPlayerToggle: false,
            emptyExercise: {
                numberOfRepetitions: null,
                numberOfSeries: null,
                position: null,
                video: {
                    name: null,
                    youtubeId: null,
                },
            },
            loadingBtnStartSession: false,
            timeoutSetCommentary: null,
        };
    },
    computed: {
        getWorksheet() {
            return this.worksheet;
        },
        getExercises() {
            return this.getWorksheet.exercises;
        },
        getCurrentExercise() {
            let currentExercise = this.emptyExercise;

            if (
                this.getWorksheet.exercises &&
                this.getWorksheet.exercises.find((e) => e.isCompleted === false)
            ) {
                currentExercise = this.getWorksheet.exercises.find(
                    (e) => e.isCompleted === false
                );
            }
            return currentExercise;
        },
        getCurrentWorksheetSession() {
            return this.currentWorksheetSession;
        },
        getTheLastExercise() {
            return this.getWorksheet.exercises[
                this.getWorksheet.exercises.length - 1
            ];
        },
    },
    methods: {
        openVideoPlayer() {
            this.videoPlayerToggle = true;
            this.addMaxHeightToBody();
        },
        closeVideoPlayer() {
            this.videoPlayerToggle = false;
            this.removeMaxHeightToBody();
        },
        setCommentary(exercise) {
            this.axios
                .post(`/patient/${this.patient.id}/create/commentary`, {
                    _token: this.csrfTokenCreateCommentary,
                    exerciseId: exercise.id,
                    worksheetId: this.getWorksheet.id,
                    worksheetSessionId: this.getCurrentWorksheetSession.id,
                    commentaryId: exercise.commentary.id,
                    commentaryContent: exercise.commentary.content,
                })
                .then((response) => {
                    console.log(response.data);

                    exercise.commentary.id = response.data.commentaryId;
                    console.log(exercise.commentary.id);
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;
                    console.error(errorMess);
                });
        },
        setCommentaryWithDebounce(exercise) {
            clearTimeout(this.timeoutSetCommentary);
            this.timeoutSetCommentary = setTimeout(() => {
                this.setCommentary(exercise);
            }, 1500);
        },
        addMaxHeightToBody() {
            window.scrollTo(0, 0);
            document.body.classList.add("max-height-100vh");
        },
        removeMaxHeightToBody() {
            setTimeout(() => {
                document.body.classList.remove("max-height-100vh");
            }, 200);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

.exercises-list {
    width: 100%;

    .exercise {
        display: flex;
        flex-direction: column;

        &:not(:last-child) {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
        }

        @media (min-width: 992px) {
            flex-direction: row;
        }

        &.loading-block {
            .loading-gray {
                border-radius: 0.4rem;
            }

            .thumbnail-wrapper {
                border-radius: 0.8rem;
            }

            .content {
                .h2 {
                    height: 2.5rem;
                    position: relative;
                    margin-bottom: 2.5rem;
                }

                .details {
                    .series-reps {
                        .series {
                            height: 1.8rem;
                        }

                        .reps {
                            height: 1.8rem;
                        }
                    }
                    .option,
                    .tempo,
                    .hold {
                        height: 1.6rem;
                    }
                }
                .commentary {
                    .title {
                        height: 1.3rem;
                        margin-top: 2.5rem;
                        margin-bottom: 1rem;
                    }
                    .input {
                        height: 5rem;
                        width: 100%;
                        border-radius: 0.8rem;
                    }
                }
            }
        }

        .thumbnail-wrapper {
            height: 18rem;
            width: 100%;
            background-color: $black;
            border-radius: 0.8rem;
            margin-right: 0;
            margin-bottom: 2rem;
            position: relative;
            overflow: hidden;

            @media (min-width: 992px) {
                height: 31.6rem;
                width: 50%;
                margin-right: 2.3rem;
                margin-bottom: 0;
            }

            @media (min-width: 1550px) {
                width: 60rem;
            }

            .btn-playlist {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .vs-button {
                    box-shadow: none;
                }

                &:hover ~ .thumbnail {
                    transform: scale(1.15, 1.15);
                    opacity: 1;
                }
            }

            .thumbnail {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                transform: scale(1.1);
                transition: all 3s;
                opacity: 0.9;
            }
        }

        .content {
            flex-grow: 1;
            height: 100%;
            font-size: 1.4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h2 {
                position: relative;
                margin-bottom: 2.5rem;
                margin-left: 2rem;

                &::before {
                    content: "";
                    display: block;
                    width: 0.3rem;
                    height: 2.2rem;
                    background: $orange;
                    position: absolute;
                    left: -2rem;
                    top: 0.2rem;
                    border-radius: 0.3rem;
                }
            }

            .details {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                border-top: 1px solid $gray-middle;
                border-bottom: 1px solid $gray-middle;
                padding: 1.7rem 0;

                > div {
                    margin: 0.8rem 0;
                }

                i {
                    color: $orange;
                    margin-right: 0.6rem;
                    position: relative;
                }

                span {
                    font-weight: 800;
                }

                .series-reps {
                    display: flex;

                    span {
                        margin-right: 0.4rem;
                    }

                    .series {
                        margin-right: 1.9rem;
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 2rem;
                            top: 0rem;
                        }
                    }

                    .reps {
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 1.7rem;
                            top: 0.05rem;
                        }
                    }
                }
                .option,
                .tempo,
                .hold {
                }
            }
            .commentary {
                p {
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                }
            }
        }
    }

    .request-subscription {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: $white;
        border-radius: 1rem;
        padding: 4.3rem;
        margin-top: 3rem;

        .icon-request-subscription {
            width: 5rem;
            height: 5rem;
            min-width: 5rem;
            min-height: 5rem;
            max-height: 5rem;
            background: rgba($tournesol, 0.25);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                color: $sanguine;
                position: relative;
                top: 0.1rem;
                left: 0.05rem;
                font-size: 2.4rem;
            }
        }
        .text-request-subscription {
            p {
                margin-top: 4rem;
                margin-bottom: 4.5rem;
                font-size: 2.3rem;
                font-weight: 700;
                max-width: 44rem;
                text-align: center;
            }
        }

        .btn-request-subscription {
        }
    }
}
</style>
