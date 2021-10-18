<template>
    <div class="video-player">
        <button class="btn-close-player" @click="closeVideoPlayer">
            <i class="kiv-x icon-21"></i>
        </button>
        <div class="content">
            <div>
                <div class="video-frame" key="video">
                    <youtube
                        :player-vars="playerVars"
                        :video-id="getExercise.video.youtubeId"
                        ref="youtube"
                    ></youtube>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="bottom-bar">
                <div class="bottom-bar-content">
                    <div class="exercise-details">
                        <div class="exercise-count">
                            Exercice {{ getExercise.position + 1 }}/{{
                                getExercises ? getExercises.length : 0
                            }}
                        </div>
                        <span class="tiret">-</span>
                        <div class="exercise-name">
                            {{ getExercise.video.name }}
                        </div>
                    </div>
                    <div class="exercise-series-reps-options">
                        <div class="series-reps">
                            <div class="series">
                                <i class="kiv-series icon-18"></i
                                ><span>{{ getExercise.numberOfSeries }}</span>
                                séries
                            </div>
                            <div class="reps">
                                <i class="kiv-reps icon-19"></i
                                ><span>{{
                                    getExercise.numberOfRepetitions
                                }}</span>
                                répétitions
                            </div>
                        </div>
                        <div class="second-details">
                            <div v-if="getExercise.option" class="option">
                                Options : <span>{{ getExercise.option }}</span>
                            </div>
                            <div v-if="getExercise.tempo" class="tempo">
                                Tempo : <span>{{ getExercise.tempo }}</span>
                            </div>
                            <div v-if="getExercise.hold" class="hold">
                                Tenir : <span>{{ getExercise.hold }}s</span>
                            </div>
                        </div>
                    </div>
                    <div class="btn-next">
                        <vs-button @click="nextExercise">
                            <span v-if="getExercise === getTheLastExercise"
                                >Fermer</span
                            >
                            <span v-else>Suivant</span>
                        </vs-button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        doctor: Object,
        exercise: Object,
        exercises: Array,
        worksheet: Object,
        lastExercise: Object,
    },
    data() {
        return {
            playerVars: {
                rel: 0,
                showinfo: 0,
                ecver: 2,
                modestbranding: 1,
            },
        };
    },
    computed: {
        getExercise() {
            return this.exercise;
        },
        getExercises() {
            return this.exercises;
        },
        getWorksheet() {
            return this.worksheet;
        },
        getTheLastExercise() {
            return this.lastExercise;
        },
    },
    methods: {
        nextExercise() {
            if (this.getExercise === this.getTheLastExercise) {
                this.closeVideoPlayer();
            } else {
                this.$parent.exerciseForPlaying = this.exercises.find(
                    (e) => e.position === this.exercise.position + 1
                );
            }
        },
        closeVideoPlayer() {
            this.$emit("closeVideoPlayer", true);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../../scss/variables";

.video-player {
    position: fixed;
    z-index: 11111;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(0.5rem);
        background: rgba(34, 46, 84, 0.8);
        height: 100vh;
        width: 100%;
    }

    .btn-close-player {
        position: absolute;
        z-index: 20;
        top: 1rem;
        right: 1rem;
        background: transparent;
        border: none;
        padding: 2rem;
        display: block;
        transition: all 0.25;

        &.dark {
            i {
                color: $black;
            }
        }

        i {
            font-size: 2.5rem;
            color: $white;
        }

        @media (min-width: 576px) {
            top: 1.5rem;
            right: 2rem;

            i {
                font-size: 2.5rem;
            }
        }
    }

    .content {
        height: 100%;
        width: 100%;

        > div {
            height: 100%;
            width: 100%;
            padding: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            @media (min-width: 768px) {
                padding: 12% 11%;
            }

            @media (min-width: 992px) {
                padding: 10% 10%;
            }

            @media (min-width: 1100px) {
                padding: 8.5% 10%;
            }

            @media (min-width: 1500px) {
                padding: 6.5% 10%;
            }

            .video-frame {
                width: 100%;
                height: 50.4vw;
                max-width: 108.5rem;
                max-height: 61rem;
                transform: translateY(-11rem);
                border-radius: 1rem;
                overflow: hidden;

                @media (min-width: 768px) {
                    height: 45vw;
                    transform: translateY(-4.7rem);
                }
            }
        }
    }

    .bottom-bar {
        position: absolute;
        bottom: 0;
        background: $gray-light;
        border-radius: 1rem 1rem 0 0;
        width: 100%;

        .bottom-bar-content {
            transition: all 0.2s;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 2.5rem 3rem;
            position: relative;
            top: 0.1rem;
            max-height: 28rem;
            overflow: hidden;
            overflow-y: auto;

            @media (min-width: 768px) {
                flex-direction: row;
            }

            .exercise-details {
                font-size: 2.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                @media (min-width: 768px) {
                    flex-direction: row;
                    max-width: 40%;
                    font-size: 2.2rem;
                }

                @media (min-width: 1200px) {
                    font-size: 2.5rem;
                }

                .exercise-count {
                    font-weight: 700;
                    white-space: nowrap;
                    margin-right: 0;

                    @media (min-width: 768px) {
                        margin-right: 1rem;
                    }
                }

                .tiret {
                    display: none;

                    @media (min-width: 768px) {
                        display: inline-block;
                    }
                }

                .exercise-name {
                    margin-left: 0;
                    margin-top: 0.4rem;
                    text-align: center;

                    @media (min-width: 768px) {
                        margin-top: 0;
                        margin-left: 1rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }

            .btn-next {
                position: initial;

                @media (min-width: 768px) {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            .exercise-series-reps-options {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 2.3rem;
                margin-bottom: 2.85rem;

                @media (min-width: 768px) {
                    align-items: flex-end;
                    margin-top: 0;
                    margin-bottom: 0;
                }

                .series-reps {
                    display: flex;
                    font-size: 1.5rem;

                    i {
                        color: $orange;
                        position: relative;
                    }

                    span {
                        margin-right: 0.4rem;
                        font-weight: 700;
                    }

                    .series {
                        margin-right: 1.9rem;
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 2rem;
                            top: -0.18rem;
                            margin-right: 0.7rem;
                        }
                    }

                    .reps {
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 1.7rem;
                            top: -0.05rem;
                            margin-right: 0.55rem;
                        }
                    }
                }
            }

            .second-details {
                font-size: 1.4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 0.8rem;

                @media (min-width: 768px) {
                    margin-top: 0.25rem;
                }

                > div {
                    margin: 0 0.7rem;

                    &:last-child {
                        margin-right: 0;
                    }
                }

                span {
                    // margin-right: 0.4rem;
                    font-weight: 700;
                }
            }
        }
    }
}
</style>
