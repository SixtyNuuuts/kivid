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
                        @ended="videoEnded"
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
                            <div v-if="getExercise.hold" class="hold">
                                Tenir : <span>{{ getExercise.hold }}s</span>
                            </div>
                            <div v-if="getExercise.tempo" class="tempo">
                                Tempo : <span>{{ getExercise.tempo }}</span>
                                <vs-tooltip class="kiv-help">
                                    <div class="icon-help">
                                        <i class="fas fa-question"></i>
                                    </div>
                                    <template #tooltip>
                                        Le tempo, c'est tout simplement le
                                        rythme de la répétition, indiquant que
                                        le mouvement doit être lent, explosif ou
                                        contrôlé.
                                    </template>
                                </vs-tooltip>
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
        videoEnded() {
            this.$refs.youtube.player.playVideo();
            this.$refs.youtube.player.stopVideo();
        },
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
                height: 50.5vw;
                // max-width: 98.4rem;
                max-height: 55.4rem;
                transform: translateY(-11rem);
                border-radius: 1rem;
                overflow: hidden;

                @media (min-width: 560px) and (min-height: 0px) {
                    height: 28.5vw;
                    max-width: 50.9vw;
                    transform: translateY(-3.9rem);
                }

                @media (min-width: 560px) and (min-height: 300px) {
                    height: 34.2vw;
                    max-width: 61vw;
                    transform: translateY(-4.2rem);
                }

                @media (min-width: 768px) {
                    transform: translateY(-4.7rem);
                }

                @media (min-width: 768px) and (min-height: 0px) {
                    height: 19.4vw;
                    max-width: 35vw;
                }

                @media (min-width: 768px) and (min-height: 270px) {
                    height: 27.6vw;
                    max-width: 49vw;
                }

                @media (min-width: 768px) and (min-height: 385px) {
                    height: 33.5vw;
                    max-width: 60vw;
                }

                @media (min-width: 768px) and (min-height: 465px) {
                    height: 36.4vw;
                    max-width: 65vw;
                }

                @media (min-width: 768px) and (min-height: 550px) {
                    height: 31.4vw;
                    max-width: 56vw;
                }

                @media (min-width: 768px) and (min-height: 630px) {
                    height: 36.4vw;
                    max-width: 65vw;
                }

                @media (min-width: 768px) and (min-height: 700px) {
                    height: 43.8vw;
                    max-width: 98.4rem;
                }

                @media (min-width: 992px) and (min-height: 0px) {
                    height: 13.7vw;
                    max-width: 24.2vw;
                }

                @media (min-width: 992px) and (min-height: 380px) {
                    height: 19.2vw;
                    max-width: 34.2vw;
                }

                @media (min-width: 992px) and (min-height: 470px) {
                    height: 25.1vw;
                    max-width: 45vw;
                }

                @media (min-width: 992px) and (min-height: 530px) {
                    height: 30.1vw;
                    max-width: 53.3vw;
                }

                @media (min-width: 992px) and (min-height: 580px) {
                    height: 35.2vw;
                    max-width: 63vw;
                }

                @media (min-width: 992px) and (min-height: 660px) {
                    height: 40.1vw;
                    max-width: 71vw;
                }

                @media (min-width: 992px) and (min-height: 700px) {
                    height: 45.1vw;
                    max-width: 99rem;
                }

                @media (min-width: 1370px) and (min-height: 0px) {
                    height: 12.2vw;
                    max-width: 21.9vw;
                }

                @media (min-width: 1370px) and (min-height: 385px) {
                    height: 16.3vw;
                    max-width: 29vw;
                }

                @media (min-width: 1370px) and (min-height: 465px) {
                    height: 21.2vw;
                    max-width: 37.9vw;
                }

                @media (min-width: 1370px) and (min-height: 580px) {
                    height: 26.4vw;
                    max-width: 47.1vw;
                }

                @media (min-width: 1370px) and (min-height: 660px) {
                    height: 31.1vw;
                    max-width: 55.4vw;
                }

                @media (min-width: 1370px) and (min-height: 700px) {
                    height: 32vw;
                    max-width: 56.7vw;
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

            @media (min-width: 560px) {
                flex-direction: row;
            }

            .exercise-details {
                font-size: 2.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                @media (min-width: 560px) {
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

                    @media (min-width: 560px) {
                        margin-right: 1rem;
                    }
                }

                .tiret {
                    display: none;

                    @media (min-width: 560px) {
                        display: inline-block;
                    }
                }

                .exercise-name {
                    margin-left: 0;
                    margin-top: 0.4rem;
                    text-align: center;

                    @media (min-width: 560px) {
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

                @media (min-width: 560px) {
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
                margin-bottom: 1.85rem;

                @media (min-width: 560px) {
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

                @media (min-width: 560px) {
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
                    margin-left: 0.3rem;
                }

                .tempo {
                    display: flex;

                    .kiv-help {
                        margin-left: 0.6rem;
                        position: relative;
                        top: -0.1rem;

                        .icon-help {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 1.8rem;
                            height: 1.8rem;
                            min-width: 1.8rem;
                            min-height: 1.8rem;
                            max-height: 1.8rem;
                            border-radius: 50%;
                            border: 1px solid #d6cfbe;

                            &:hover {
                                border: 1px solid #d8d1c0;

                                i {
                                    color: #d8d1c0;
                                }
                            }

                            i {
                                font-size: 0.8rem;
                                color: #d6cfbe;
                                transition: all;
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
