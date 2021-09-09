<template>
    <div class="video-player">
        <button
            v-if="scoreFrame"
            class="btn-close-player dark"
            @click="closeVideoPlayerAndCompleteExercise"
        >
            <i class="kiv-x icon-21"></i>
        </button>
        <button v-else class="btn-close-player" @click="closeVideoPlayer">
            <i class="kiv-x icon-21"></i>
        </button>
        <div class="content" v-if="!scoreFrame">
            <transition-group name="slidevideoplayer" tag="div">
                <div v-show="videoFrame" class="video-frame" key="video">
                    <youtube
                        :player-vars="playerVars"
                        :video-id="getExercise.video.youtubeId"
                        @ended="videoEnded"
                        ref="youtube"
                    ></youtube>
                </div>
                <EvalFrame
                    v-show="technicalEvalFrame"
                    @validTechnicalValue="validTechnicalValue"
                    type="technical"
                    key="technical"
                />
                <EvalFrame
                    v-show="difficultyEvalFrame"
                    @validDifficultyValue="validDifficultyValue"
                    type="difficulty"
                    key="difficulty"
                />
                <EvalFrame
                    v-show="sensitivityEvalFrame"
                    @validSensitivityValue="validSensitivityValue"
                    type="sensitivity"
                    key="sensitivity"
                />
            </transition-group>
        </div>
        <transition name="fade">
            <div v-if="scoreFrame" class="score-frame">
                <div class="score-top-elip">
                    <img src="../../../img/score-elip.svg" alt="ovale" />
                </div>
                <div class="score-stars-confettis">
                    <img
                        src="../../../img/score-stars-confettis.svg"
                        alt="Confettis"
                    />
                </div>
                <div class="score-fanion">
                    <img src="../../../img/score-fanion.svg" alt="fanion" />
                </div>
                <div class="score-text">
                    <div class="label">Félicitation !</div>
                    <div class="score">+ 3 560 Points</div>
                    <div class="btn-next">
                        <vs-button @click="confirmScore">
                            <span v-if="getExercise !== getTheLastExercise">
                                Continuer
                            </span>
                            <span v-else>Terminer</span>
                        </vs-button>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="videoFrame" class="bottom-bar">
                <div class="bottom-bar-content">
                    <div class="exercise-details">
                        <div class="exercise-count">
                            Exercice {{ getExercise.position }}/{{
                                $parent.getExercises
                                    ? $parent.getExercises.length
                                    : 0
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
                        <vs-button
                            :disabled="!btnValidVideoCompleted"
                            @click="validVideoCompleted"
                        >
                            Suivant
                        </vs-button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import f from "../../services/function";
import EvalFrame from "./EvalFrame.vue";

export default {
    props: {
        exercise: Object,
        lastExercise: Object,
    },
    components: {
        EvalFrame,
    },
    data() {
        return {
            playerVars: {
                rel: 0,
                showinfo: 0,
                ecver: 2,
                modestbranding: 1,
            },
            videoFrame: true,
            technicalEvalFrame: false,
            difficultyEvalFrame: false,
            sensitivityEvalFrame: false,
            scoreFrame: false,
            btnValidVideoCompleted: false,
        };
    },
    computed: {
        getExercise() {
            return this.exercise;
        },
        getTheLastExercise() {
            return this.lastExercise;
        },
    },
    methods: {
        videoEnded() {
            this.btnValidVideoCompleted = true;
        },
        validVideoCompleted() {
            this.videoFrame = false;
            this.btnValidVideoCompleted = false;
            this.technicalEvalFrame = true;
        },
        validTechnicalValue(value) {
            this.$emit("setTechnicalValue", value);
            this.technicalEvalFrame = false;
            this.difficultyEvalFrame = true;
        },
        validDifficultyValue(value) {
            this.$emit("setDifficultyValue", value);
            this.difficultyEvalFrame = false;
            this.sensitivityEvalFrame = true;
        },
        validSensitivityValue(value) {
            this.$emit("setSensitivityValue", value);
            this.sensitivityEvalFrame = false;
            this.scoreFrame = true;
        },
        confirmScore() {
            this.exerciseCompleted(this.getExercise.id);
            this.scoreFrame = false;
            if (this.getExercise === this.getTheLastExercise) {
                this.closeVideoPlayer();
            } else {
                this.videoFrame = true;
            }
        },
        exerciseCompleted(exerciseId) {
            this.$emit("exerciseCompleted", exerciseId);
        },
        closeVideoPlayer() {
            this.$emit("closeVideoPlayer", true);
        },
        closeVideoPlayerAndCompleteExercise() {
            this.$emit("closeVideoPlayer", true);
            this.exerciseCompleted(this.getExercise.id);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

.video-player {
    position: absolute;
    z-index: 11;
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
        height: 100%;
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
        display: none;
        transition: all 0.25;

        &.dark {
            i {
                color: $black;
            }
        }

        @media (min-width: 768px) {
            display: block;
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
                max-width: 130rem;
                height: 50%;
                transform: translateY(-11rem);
                border-radius: 1rem;
                overflow: hidden;

                @media (min-width: 992px) {
                    transform: none;
                    height: 100%;
                    transform: translateY(-4.3rem);
                }

                @media (min-width: 1100px) {
                    transform: translateY(-4.3rem);
                }

                @media (min-width: 1500px) {
                    transform: translateY(-4.3rem);
                }
            }
        }
    }

    .score-frame {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        color: $white;
        overflow: hidden;

        .score-top-elip {
            width: 74rem;
            position: absolute;
            top: -12rem;
            left: 50%;
            transform: translate(-50%, 0);
            animation: 0.5s ease 0.2s forwards elipDown;
            opacity: 0;

            @media (min-width: 576px) {
                width: 100rem;
                top: -19rem;
            }

            @media (min-width: 800px) {
                width: 160rem;
                top: -42rem;
            }

            @media (min-width: 900px) and (min-height: 1100px) and (max-height: 1500px) {
                width: 213rem;
                top: -53rem;
            }

            @media (min-width: 1100px) {
                width: 187rem;
                top: -53rem;
            }

            @media (min-width: 1400px) {
                width: 204rem;
                top: -62rem;
            }

            @media (min-width: 1600px) {
                width: 245rem;
                top: -80rem;
            }

            img {
                width: 100%;
            }
        }

        @keyframes elipDown {
            0% {
                transform: translate(-50%, -50%);
                opacity: 1;
            }
            40% {
                transform: translate(-50%, 2%);
                opacity: 1;
            }
            80% {
                transform: translate(-50%, -2%);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, 0%);
                opacity: 1;
            }
        }

        .score-stars-confettis {
            width: 62%;
            max-width: 55rem;
            min-width: 35rem;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translate(-48%, -50%) scale(0.3);
            opacity: 0;
            animation: 0.5s ease 0.5s forwards starsConfettis;

            @media (min-width: 576px) {
                top: 28%;
            }

            img {
                width: 100%;
            }
        }

        @keyframes starsConfettis {
            0% {
                transform: translate(-48%, -50%) scale(0.3);
                opacity: 1;
            }
            100% {
                transform: translate(-48%, -50%) scale(1);
                opacity: 1;
            }
        }

        .score-fanion {
            width: 30%;
            max-width: 27rem;
            min-width: 16.9rem;
            position: absolute;
            top: 26.5%;
            left: 50%;
            transform: translate(-47.7%, -50%);
            opacity: 0;
            animation: 0.5s ease 0.5s forwards fanionBounce;

            @media (min-width: 576px) {
                top: 33.9%;
            }

            @media (min-width: 700px) {
                top: 35.5%;
            }

            @media (min-width: 750px) {
                top: 37%;
            }

            img {
                width: 100%;
            }
        }

        @keyframes fanionBounce {
            0% {
                transform: translate(-47.7%, -50%) scale(0.8);
                opacity: 0;
            }
            40% {
                transform: translate(-47.7%, -50%) scale(1.08);
                opacity: 1;
            }
            80% {
                transform: translate(-47.7%, -50%) scale(0.98);
                opacity: 1;
            }
            100% {
                transform: translate(-47.7%, -50%) scale(1);
                opacity: 1;
            }
        }

        .score-text {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            max-width: 80%;
            white-space: nowrap;
            opacity: 0;
            animation: 0.5s ease 1s forwards fadeEnter;

            .label {
                font-size: 2.5rem;
                margin-bottom: 3.5rem;

                @media (min-width: 576px) {
                    font-size: 3rem;
                }
            }
            .score {
                font-size: 4rem;
                font-weight: 700;
                margin-bottom: 4rem;
                line-height: 1.1;

                @media (min-width: 576px) {
                    font-size: 4.7rem;
                }
            }
            .btn-next {
                margin-bottom: 9rem;
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
                margin-top: 0.5rem;

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
