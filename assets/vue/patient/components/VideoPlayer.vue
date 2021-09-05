<template>
    <div class="video-player">
        <button class="btn-close-player" @click="$parent.closeVideoPlayer">
            <i class="kiv-x icon-21"></i>
        </button>
        <div class="content">
            <!-- <transition name="fade2">
                <div class="video-frame" v-if="$parent.videoPlayerToggle">
                    <youtube
                        :player-vars="playerVars"
                        :video-id="'yvQGwDLh4os'"
                        @ended="videoEnded"
                        ref="youtube"
                    ></youtube>
                </div>
            </transition> -->
            <EvalFrame type="sensitivity" />
        </div>
        <!-- <div ref="bottombar" class="bottom-bar">
            <div ref="bottombarcontent" class="bottom-bar-content">
                <div class="exercise-details">
                    <div class="exercise-count">Exercice 1/4</div>
                    <span class="tiret">-</span>
                    <div class="exercise-name">Flexion plantaire</div>
                </div>
                <div class="series-reps">
                    <div class="series">
                        <i class="kiv-series icon-18"></i><span>10</span> séries
                    </div>
                    <div class="reps">
                        <i class="kiv-reps icon-19"></i
                        ><span>2</span> répétitions
                    </div>
                </div>
                <div class="btn-next">
                    <vs-button> Suivant </vs-button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import f from "../../services/function";
import EvalFrame from "./EvalFrame.vue";

export default {
    // props: {
    //     patient: Object,
    // },
    components: {
        EvalFrame,
    },
    data() {
        return {
            // worksheetProgression: 50,
            // commentary1: "",
            playerVars: {
                rel: 0,
                showinfo: 0,
                ecver: 2,
                modestbranding: 1,
            },
        };
    },
    computed: {
        // getWorksheetProgression() {
        //     return this.worksheetProgression;
        // },
    },
    methods: {
        videoEnded() {},
    },
    mounted() {},
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
        background: rgba(34, 46, 84, 0.8);
        height: 200%;
        width: 100%;
    }

    .btn-close-player {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: transparent;
        border: none;
        padding: 2rem;

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
        padding: 5%;
        display: flex;
        justify-content: center;
        align-items: center;

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

    .bottom-bar {
        position: absolute;
        bottom: 0;
        background: $gray-light;
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        max-height: 0rem;
        transition: all 0.2s;
        opacity: 0;

        &.show {
            max-height: 50rem;
            opacity: 1;

            .bottom-bar-content {
                padding: 2.5rem 3rem;

                .btn-next {
                    @media (min-width: 992px) {
                        transform: translate(-50%, -50%);
                    }
                }
            }
        }

        .bottom-bar-content {
            transition: all 0.2s;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 0;
            position: relative;
            top: 0.1rem;
            max-height: 28rem;
            overflow: hidden;
            overflow-y: auto;

            @media (min-width: 992px) {
                flex-direction: row;
            }

            .exercise-details {
                font-size: 2.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                @media (min-width: 992px) {
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

                    @media (min-width: 992px) {
                        margin-right: 1rem;
                    }
                }

                .tiret {
                    display: none;

                    @media (min-width: 992px) {
                        display: inline-block;
                    }
                }

                .exercise-name {
                    margin-left: 0;
                    margin-top: 0.4rem;
                    text-align: center;

                    @media (min-width: 992px) {
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

                @media (min-width: 992px) {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, 0);
                }
            }

            .series-reps {
                display: flex;
                font-size: 1.5rem;
                margin-top: 2.3rem;
                margin-bottom: 2.5rem;

                @media (min-width: 992px) {
                    margin-top: 0;
                    margin-bottom: 0;
                }

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
    }
}
</style>
