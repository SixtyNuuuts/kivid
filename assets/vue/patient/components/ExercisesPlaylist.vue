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
                                placeholder="Tapez votre commentaire"
                                disabled
                                v-model="exercise.commentaries[0].content"
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
                :exercise="getCurrentExercise"
                :lastExercise="getTheLastExercise"
                @setTechnicalValue="setTechnicalValue"
                @setDifficultyValue="setDifficultyValue"
                @setSensitivityValue="setSensitivityValue"
                @exerciseCompleted="exerciseCompleted"
                @closeVideoPlayer="closeVideoPlayer"
            />
        </transition>
    </div>
</template>

<script>
import f from "../../services/function";
import VideoPlayer from "./VideoPlayer.vue";

export default {
    components: {
        VideoPlayer,
    },
    props: {
        exercises: Array,
        loading: Boolean,
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
        };
    },
    computed: {
        getCurrentExercise() {
            let currentExercise = this.emptyExercise;

            if (
                this.exercises &&
                this.exercises.find((e) => e.isCompleted === false)
            ) {
                currentExercise = this.exercises.find(
                    (e) => e.isCompleted === false
                );
            }
            return currentExercise;
        },
        getTheLastExercise() {
            return this.exercises[this.exercises.length - 1];
        },
        getExercises() {
            return this.exercises;
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
        setTechnicalValue(value) {
            console.log("setTechnicalValue", value);
        },
        setDifficultyValue(value) {
            console.log("setDifficultyValue", value);
        },
        setSensitivityValue(value) {
            console.log("setSensitivityValue", value);
        },
        exerciseCompleted(exerciseId) {
            this.getExercises.find(
                (e) => e.id === exerciseId
            ).isCompleted = true;
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
            margin-bottom: 2.5rem;
            padding-bottom: 2.5rem;
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
                transition: all 5s;
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
                .option {
                }
                .tempo {
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
