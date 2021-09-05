<template>
    <div>
        <div class="exercises-list">
            <div class="exercise">
                <div class="thumbnail">
                    <div class="btn-playlist">
                        <vs-button @click="openVideoPlayer">
                            Démarrer
                        </vs-button>
                    </div>
                </div>
                <div class="content">
                    <h2>Flexion plantaire</h2>
                    <div class="details">
                        <div class="series-reps">
                            <div class="series">
                                <i class="kiv-series icon-18"></i
                                ><span>10</span> séries
                            </div>
                            <div class="reps">
                                <i class="kiv-reps icon-19"></i
                                ><span>2</span> répétitions
                            </div>
                        </div>
                        <div class="option">
                            Options : <span>Élastique</span>
                        </div>
                        <div class="tempo">Tempo : <span>2/0/1</span></div>
                    </div>
                    <div class="commentary">
                        <p>Commentaire</p>
                        <vs-input
                            placeholder="Tapez votre commentaire"
                            disabled
                            v-model="commentary1"
                        />
                    </div>
                </div>
            </div>
            <div class="exercise">
                <div class="thumbnail"></div>
                <div class="content">
                    <h2>Flexion plantaire</h2>
                    <div class="details">
                        <div class="series-reps">
                            <div class="series">
                                <i class="kiv-series icon-18"></i
                                ><span>10</span> séries
                            </div>
                            <div class="reps">
                                <i class="kiv-reps icon-19"></i
                                ><span>2</span> répétitions
                            </div>
                        </div>
                        <div class="option">
                            Options : <span>Élastique</span>
                        </div>
                        <div class="tempo">Tempo : <span>2/0/1</span></div>
                    </div>
                    <div class="commentary">
                        <p>Commentaire</p>
                        <vs-input
                            placeholder="Tapez votre commentaire"
                            disabled
                            v-model="commentary1"
                        />
                    </div>
                </div>
            </div>
            <div class="exercise">
                <div class="thumbnail">
                    <div class="btn-playlist">
                        <vs-button @click="openVideoPlayer">
                            Démarrer
                        </vs-button>
                    </div>
                </div>
                <div class="content">
                    <h2>Flexion plantaire</h2>
                    <div class="details">
                        <div class="series-reps">
                            <div class="series">
                                <i class="kiv-series icon-18"></i
                                ><span>10</span> séries
                            </div>
                            <div class="reps">
                                <i class="kiv-reps icon-19"></i
                                ><span>2</span> répétitions
                            </div>
                        </div>
                        <div class="option">
                            Options : <span>Élastique</span>
                        </div>
                        <div class="tempo">Tempo : <span>2/0/1</span></div>
                    </div>
                    <div class="commentary">
                        <p>Commentaire</p>
                        <vs-input
                            placeholder="Tapez votre commentaire"
                            disabled
                            v-model="commentary1"
                        />
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
            <VideoPlayer ref="videoplayer" v-show="videoPlayerToggle" />
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
    data() {
        return {
            // worksheetProgression: 50,
            commentary1: "",
            videoPlayerToggle: false,
        };
    },
    computed: {
        // getWorksheetProgression() {
        //     return this.worksheetProgression;
        // },
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
        addMaxHeightToBody() {
            setTimeout(() => {
                this.$refs.videoplayer.$refs.bottombar.classList.add("show");
            }, 300);
            window.scrollTo(0, 0);
            document.body.classList.add("max-height-100vh");
        },
        removeMaxHeightToBody() {
            this.$refs.videoplayer.$refs.bottombar.classList.remove("show");
            document.body.classList.remove("max-height-100vh");
        },
    },
    mounted() {},
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

        .thumbnail {
            height: 18rem;
            width: 100%;
            background-color: $gray-middle;
            border-radius: 0.8rem;
            margin-right: 0;
            margin-bottom: 2rem;
            position: relative;

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
            }

            @media (min-width: 992px) {
                height: 28.6rem;
                width: 50%;
                margin-right: 2.3rem;
                margin-bottom: 0;
            }

            @media (min-width: 1550px) {
                width: 60rem;
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
