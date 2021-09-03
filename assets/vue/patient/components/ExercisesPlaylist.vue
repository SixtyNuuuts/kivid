<template>
    <div class="exercises-list">
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
                    <div class="option">Options : <span>Élastique</span></div>
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
                    <div class="option">Options : <span>Élastique</span></div>
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
                    <div class="option">Options : <span>Élastique</span></div>
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
    </div>
</template>

<script>
import f from "../../services/function";

export default {
    // props: {
    //     patient: Object,
    // },
    data() {
        return {
            // worksheetProgression: 50,
            commentary1: "",
        };
    },
    computed: {
        // getWorksheetProgression() {
        //     return this.worksheetProgression;
        // },
    },
    methods: {
        // formatScore(score) {
        //     return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        // },
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
}
</style>
