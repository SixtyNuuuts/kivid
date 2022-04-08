<template>
    <div class="video-player">
        <button
            class="btn-close-player"
            :class="{
                hidden:
                    technicalEvalFrame ||
                    difficultyEvalFrame ||
                    sensitivityEvalFrame,
                dark: scoreFrame,
            }"
            @click="closeVideoPlayer"
        >
            <i class="kiv-x icon-21"></i>
        </button>
        <div
            class="content"
            v-if="!scoreFrame"
            :class="{
                'switch-exercise-transition-leave':
                    switchExerciseTransitionLeave,
                'switch-exercise-transition-enter':
                    switchExerciseTransitionEnter,
            }"
        >
            <transition-group name="slidevideoplayer" tag="div">
                <div v-show="videoFrame" class="video-frame" key="video">
                    <youtube
                        v-if="getExercise.video.youtubeId"
                        :player-vars="playerVars"
                        :video-id="getExercise.video.youtubeId"
                        @ended="videoEnded"
                        ref="youtube"
                    ></youtube>
                    <div
                        class="video-frame not-sub-frame"
                        v-else
                        :style="{
                            backgroundImage: `url('${getExercise.video.thumbnailUrl}')`,
                        }"
                    ></div>
                </div>
                <div
                    v-if="!getExercise.video.youtubeId"
                    class="not-sub-message"
                    key="not-sub-message"
                >
                    <div class="request-subscription dark">
                        <div class="icon-request-subscription">
                            <i class="kiv-subscription icon-20"></i>
                        </div>
                        <div class="text-request-subscription">
                            <p>
                                Pour accéder complètement à votre prescription,
                                veuillez vous abonner.
                            </p>
                        </div>
                        <div class="btn-request-subscription">
                            <vs-button @click="stripeCheckout()">
                                Je m’abonne
                            </vs-button>
                        </div>
                    </div>
                </div>
                <EvalFrame
                    v-show="technicalEvalFrame"
                    @validTechnicalValue="validTechnicalValue"
                    type="technical"
                    key="technical"
                    :loading="loadingBtnEvalNext"
                />
                <EvalFrame
                    v-show="difficultyEvalFrame"
                    @validDifficultyValue="validDifficultyValue"
                    type="difficulty"
                    key="difficulty"
                    :loading="loadingBtnEvalNext"
                />
                <EvalFrame
                    v-show="sensitivityEvalFrame"
                    @validSensitivityValue="validSensitivityValue"
                    type="sensitivity"
                    key="sensitivity"
                    :loading="loadingBtnEvalNext"
                />
            </transition-group>
        </div>
        <transition name="fade">
            <div v-if="scoreFrame" class="score-frame">
                <div class="score-top-elip">
                    <img src="../../../../img/score-elip.svg" alt="ovale" />
                </div>
                <div class="score-stars-confettis">
                    <img
                        src="../../../../img/score-stars-confettis.svg"
                        alt="Confettis"
                    />
                </div>
                <div class="score-fanion">
                    <img src="../../../../img/score-fanion.svg" alt="fanion" />
                </div>
                <div class="score-text">
                    <div class="label">Félicitations !</div>
                    <div v-if="sessionScorePoints" class="score">
                        {{ sessionScorePoints }} points
                    </div>
                    <div class="btn-next">
                        <vs-button @click="confirmScore">
                            <span>Terminer</span>
                        </vs-button>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="videoFrame" class="bottom-bar">
                <div
                    class="bottom-bar-content"
                    :class="{
                        'switch-exercise-transition-leave':
                            switchExerciseTransitionLeave,
                        'switch-exercise-transition-enter':
                            switchExerciseTransitionEnter,
                    }"
                >
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
                        <vs-button
                            v-if="
                                getCurrentWorksheetSession &&
                                !getCurrentWorksheetSession.isCompleted &&
                                !getExercise.isCompleted
                            "
                            @click="setExerciseCompletedAndGoNext"
                            :loading="loadingBtnNextExercise"
                            :class="{
                                disabled: loadingBtnNextExercise,
                            }"
                            :disabled="switchExeAnimationIsInProgress"
                        >
                            Suivant
                        </vs-button>
                        <vs-button
                            v-if="
                                getCurrentWorksheetSession &&
                                !getCurrentWorksheetSession.isCompleted &&
                                getExercise.isCompleted
                            "
                            @click="resetExerciseForRePlaying"
                            :disabled="switchExeAnimationIsInProgress"
                        >
                            Reprendre
                        </vs-button>
                        <vs-button
                            v-if="
                                (getCurrentWorksheetSession &&
                                    getCurrentWorksheetSession.isCompleted) ||
                                !getCurrentWorksheetSession
                            "
                            @click="closeVideoPlayer"
                        >
                            Fermer
                        </vs-button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import EvalFrame from "./VideoPlayer/EvalFrame.vue";

export default {
    props: {
        patient: Object,
        exercise: Object,
        exercises: Array,
        worksheet: Object,
        lastExercise: Object,
        currentWorksheetSession: [Object, Boolean],
        csrfTokenCompleteWorksheetSession: String,
        csrfTokenCompleteExercise: String,
        csrfTokenCreateSessionStat: String,
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
            switchExerciseTransitionLeave: false,
            switchExerciseTransitionEnter: false,
            switchExeAnimationIsInProgress: false,
            technicalEvalFrame: false,
            difficultyEvalFrame: false,
            sensitivityEvalFrame: false,
            scoreFrame: false,
            ponderation: [],
            loadingBtnEvalNext: false,
            loadingBtnNextExercise: false,
            sessionScorePoints: null,
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
        getCurrentWorksheetSession() {
            return this.currentWorksheetSession;
        },
        getPonderation() {
            return (
                this.ponderation.reduce((r, p) => r + p, 0) /
                this.ponderation.length
            );
        },
    },
    methods: {
        videoEnded() {
            this.$refs.youtube.player.playVideo();
            this.$refs.youtube.player.stopVideo();
        },
        resetExerciseForRePlaying() {
            this.switchExerciseWithAnimation(true);
        },
        setExerciseCompletedAndGoNext() {
            if (this.getExercise === this.getTheLastExercise) {
                this.isTheLastExercise();
            } else {
                this.loadingBtnNextExercise = true;

                this.axios
                    .post(`/patient/${this.patient.id}/complete/exercise`, {
                        _token: this.csrfTokenCompleteExercise,
                        exerciseId: this.getExercise.id,
                    })
                    .then((response) => {
                        console.log(response.data);
                        this.switchExerciseWithAnimation(false);

                        this.loadingBtnNextExercise = false;
                    })
                    .catch((error) => {
                        const errorMess =
                            "object" === typeof error.response.data
                                ? error.response.data.detail
                                : error.response.data;
                        console.error(errorMess);
                    });
            }
        },
        closeVideoPlayer() {
            this.$emit("closeVideoPlayer", true);
        },
        stripeCheckout() {
            this.$emit("stripeCheckout", 0);
        },
        switchExerciseWithAnimation(replaying) {
            if (!this.switchExeAnimationIsInProgress) {
                this.switchExeAnimationIsInProgress = true;
                this.switchExerciseTransitionLeave = true;

                setTimeout(() => {
                    if (!replaying) {
                        this.getExercise.isCompleted = true;
                    } else {
                        this.$emit("resetExerciseForRePlaying", true);
                    }
                }, 150);

                setTimeout(() => {
                    this.switchExerciseTransitionEnter = true;
                }, 250);

                setTimeout(() => {
                    this.switchExerciseTransitionLeave = false;
                    this.switchExerciseTransitionEnter = false;
                    this.switchExeAnimationIsInProgress = false;
                }, 500);
            }
        },
        isTheLastExercise() {
            this.$refs.youtube.player.stopVideo();
            this.videoFrame = false;
            this.technicalEvalFrame = true;
        },
        setSessionCompleted() {
            this.axios
                .post(
                    `/patient/${this.patient.id}/complete/worksheet-session`,
                    {
                        _token: this.csrfTokenCompleteWorksheetSession,
                        worksheetSessionId: this.getCurrentWorksheetSession.id,
                        worksheetId: this.getWorksheet.id,
                        exerciseId: this.getExercise.id,
                        ponderationForScore: this.getPonderation,
                    }
                )
                .then((response) => {
                    this.getExercise.isCompleted = true;

                    this.sessionScorePoints = response.data.score.points;

                    this.getCurrentWorksheetSession.isInProgress = false;
                    this.getCurrentWorksheetSession.isCompleted = true;
                    this.getCurrentWorksheetSession.doneAt = new Date();

                    this.loadingBtnEvalNext = false;

                    this.scoreFrame = true;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;
                    console.error(errorMess);
                });
        },
        validTechnicalValue(value) {
            this.createExerciseStat("technical", value / 10);
        },
        validDifficultyValue(value) {
            this.createExerciseStat("difficulty", value / 10);
        },
        validSensitivityValue(value) {
            this.createExerciseStat("sensitivity", value / 10);
        },
        createExerciseStat(criterion, value) {
            this.loadingBtnEvalNext = true;

            this.axios
                .post(
                    `/patient/${this.patient.id}/create/session-stat/${criterion}`,
                    {
                        _token: this.csrfTokenCreateSessionStat,
                        worksheetId: this.getWorksheet.id,
                        worksheetSessionId: this.getCurrentWorksheetSession.id,
                        sessionStatValue: value,
                    }
                )
                .then((response) => {
                    console.log(response.data);

                    this.ponderation.push(response.data.ponderation);

                    if ("technical" === criterion) {
                        this.technicalEvalFrame = false;
                        this.difficultyEvalFrame = true;
                        this.loadingBtnEvalNext = false;
                    }

                    if ("difficulty" === criterion) {
                        this.difficultyEvalFrame = false;
                        this.sensitivityEvalFrame = true;
                        this.loadingBtnEvalNext = false;
                    }

                    if ("sensitivity" === criterion) {
                        this.sensitivityEvalFrame = false;
                        this.setSessionCompleted();
                    }
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    console.error(errorMess);
                });
        },
        confirmScore() {
            this.scoreFrame = false;
            this.closeVideoPlayer();
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
        transition: all 0.5s 2s;

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
                // max-height: 55.4rem;
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

                &.not-sub-frame {
                    background-size: cover;
                    height: 100%;
                    max-width: 110rem;
                    max-height: 61rem;
                    transform: translateY(-3rem);

                    @media (min-width: 768px) {
                        height: 100%;
                        transform: translateY(-4.7rem);
                    }
                }
            }

            .not-sub-message {
                position: absolute;
                // z-index: -1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                -webkit-backdrop-filter: blur(0.5rem);
                backdrop-filter: blur(0.5rem);
                background: rgba(34, 46, 84, 0.8);
                height: 100vh;
                width: 100%;
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
            width: 114rem;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            animation: 0.5s ease 0s forwards elipDown;
            opacity: 0;
            bottom: 64vh;
            top: auto;

            @media (min-width: 630px) {
                width: 157rem;
                bottom: 61vh;
            }

            @media (min-width: 630px) and (max-height: 500px) {
                bottom: 44vh;
            }

            @media (min-width: 800px) {
                width: 160rem;
            }

            @media (min-width: 900px) and (min-height: 1100px) and (max-height: 1500px) {
                bottom: 54vh;
                width: 213rem;
            }

            @media (min-width: 1100px) {
                width: 187rem;
                bottom: 56vh;
            }

            @media (min-width: 1400px) {
                width: 204rem;
                bottom: 52vh;
            }

            @media (min-width: 1600px) {
                width: 245rem;
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
            top: 25vh;
            left: 50%;
            transform: translate(-48%, -50%) scale(0.3);
            opacity: 0;
            animation: 0.5s ease 0.3s forwards starsConfettis;

            img {
                width: 100%;
                max-height: 54vh;
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
            top: 34vh;
            left: 50%;
            transform: translate(-47.7%, -50%);
            opacity: 0;
            animation: 0.5s ease 0.3s forwards fanionBounce;

            img {
                width: 100%;
                max-height: 38vh;
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
            justify-content: center;
            align-items: center;
            text-align: center;
            max-width: 80%;
            white-space: nowrap;
            opacity: 0;
            animation: 0.5s ease 0.7s forwards fadeEnter;
            flex-direction: column;
            margin-bottom: 0;

            @media (min-width: 630px) and (min-height: 0px) and (max-height: 200px) {
                flex-direction: row;
                margin-bottom: 14vh;
            }

            @media (min-width: 630px) and (min-height: 200px) and (max-height: 500px) {
                flex-direction: row;
                margin-bottom: 21vh;
            }

            .label {
                font-size: 2.5rem;
                position: relative;
                margin-bottom: 2.7vh;
                margin-right: 0;
                top: 0;

                @media (min-width: 630px) and (max-height: 500px) {
                    margin-bottom: 0;
                    margin-right: 4rem;
                    top: 0.2rem;
                }

                @media (min-width: 576px) {
                    font-size: 3rem;
                }
            }
            .score {
                font-size: 4rem;
                font-weight: 700;
                line-height: 1.1;
                margin-bottom: 4.7vh;
                margin-right: 0;

                @media (min-width: 630px) and (max-height: 500px) {
                    margin-bottom: 0;
                    margin-right: 4rem;
                }

                @media (min-width: 576px) {
                    font-size: 4.7rem;
                }
            }
            .btn-next {
                margin-bottom: 10vh;

                @media (min-width: 630px) and (max-height: 500px) {
                    margin-bottom: 0;
                }

                @media (min-height: 700px) {
                    margin-bottom: 12vh;
                }

                @media (min-height: 800px) {
                    margin-bottom: 19vh;
                }

                @media (min-width: 576px) and (min-height: 800px) {
                    margin-bottom: 14vh;
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
