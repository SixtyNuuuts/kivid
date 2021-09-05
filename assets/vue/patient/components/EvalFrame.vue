<template>
    <div class="eval-frame">
        <h1 v-if="'technical' === type">
            Comment était votre technique de réalisation ?
        </h1>
        <h1 v-if="'difficulty' === type">
            Comment avez-vous trouvé l’exercice ?
        </h1>
        <h1 v-if="'sensitivity' === type">Comment vous sentez-vous ?</h1>
        <div v-if="'technical' === type" class="eval-question-count">
            Question 1 sur 3
        </div>
        <div v-if="'difficulty' === type" class="eval-question-count">
            Question 2 sur 3
        </div>
        <div v-if="'sensitivity' === type" class="eval-question-count">
            Question 3 sur 3
        </div>
        <div
            v-if="'technical' === type"
            class="technical-eval-rating eval-rating"
        >
            <vue-slider v-model="technicalValue" :tooltip="'none'"></vue-slider>
            <div class="legend">
                <div @click="technicalValue = 0">Médiocre</div>
                <div @click="technicalValue = 100">Excellent</div>
            </div>
        </div>
        <div
            v-if="'difficulty' === type"
            class="difficulty-eval-rating eval-rating desktop"
        >
            <vue-slider
                v-model="difficultyValue"
                :tooltip="'none'"
                :interval="25"
                :marks="true"
                :hide-label="true"
            ></vue-slider>
            <div class="legend">
                <div @click="difficultyValue = 0">
                    Beaucoup<br />
                    trop facile
                </div>
                <div @click="difficultyValue = 25">Trop facile</div>
                <div @click="difficultyValue = 50">Ok</div>
                <div @click="difficultyValue = 75">Trop difficile</div>
                <div @click="difficultyValue = 100">
                    Vraiment<br />
                    Trop difficile
                </div>
            </div>
        </div>
        <div
            v-if="'difficulty' === type"
            class="difficulty-eval-rating eval-rating mobile"
        >
            <vs-button
                class="secondary w-100"
                @click="difficultyValue = 0"
                :active="difficultyValue === 0"
            >
                Beaucoup trop facile
            </vs-button>
            <vs-button
                class="secondary w-100"
                @click="difficultyValue = 25"
                :active="difficultyValue === 25"
            >
                Trop facile
            </vs-button>
            <vs-button
                class="secondary w-100"
                @click="difficultyValue = 50"
                :active="difficultyValue === 50"
            >
                Ok
            </vs-button>
            <vs-button
                class="secondary w-100"
                @click="difficultyValue = 75"
                :active="difficultyValue === 75"
            >
                Trop difficile
            </vs-button>

            <vs-button
                class="secondary w-100"
                @click="difficultyValue = 100"
                :active="difficultyValue === 100"
            >
                Vraiment Trop difficile
            </vs-button>
        </div>
        <div
            v-if="'sensitivity' === type"
            class="sensitivity-eval-rating eval-rating"
        >
            <div class="smileys">
                <div
                    @click="sensitivityValue = 0"
                    :class="{ selected: sensitivityValue === 0 }"
                >
                    <i>
                        <img
                            src="../../../img/icons/smiley/46.svg"
                            alt="Smiley qui va très mal"
                        />
                    </i>
                    <i class="kiv-selected icon-22"></i>
                </div>
                <div
                    @click="sensitivityValue = 12.5"
                    :class="{ selected: sensitivityValue === 12.5 }"
                >
                    <i>
                        <img
                            src="../../../img/icons/smiley/47.svg"
                            alt="Smiley qui va mal"
                        />
                    </i>
                    <i class="kiv-selected icon-22"></i>
                </div>
                <div
                    @click="sensitivityValue = 25"
                    div
                    :class="{ selected: sensitivityValue === 25 }"
                >
                    <i>
                        <img
                            src="../../../img/icons/smiley/48.svg"
                            alt="Smiley qui va pas bien"
                        />
                    </i>
                    <i class="kiv-selected icon-22"></i>
                </div>
                <div
                    @click="sensitivityValue = 37.5"
                    :class="{ selected: sensitivityValue === 37.5 }"
                >
                    <i>
                        <img
                            src="../../../img/icons/smiley/49.svg"
                            alt="Smiley qui va bof"
                        />
                    </i>
                    <i class="kiv-selected icon-22"></i>
                </div>
                <div
                    @click="sensitivityValue = 50"
                    :class="{ selected: sensitivityValue === 50 }"
                >
                    <i>
                        <img
                            src="../../../img/icons/smiley/50.svg"
                            alt="Smiley perplexe"
                        />
                    </i>
                    <i class="kiv-selected icon-22"></i>
                </div>
                <div
                    @click="sensitivityValue = 62.5"
                    :class="{ selected: sensitivityValue === 62.5 }"
                >
                    <i>
                        <img
                            src="../../../img/icons/smiley/51.svg"
                            alt="Smiley qui va bien"
                        />
                    </i>
                    <i class="kiv-selected icon-22"></i>
                </div>
                <div
                    @click="sensitivityValue = 75"
                    :class="{ selected: sensitivityValue === 75 }"
                >
                    <i>
                        <img
                            src="../../../img/icons/smiley/52.svg"
                            alt="Smiley qui va très bien"
                        />
                    </i>
                    <i class="kiv-selected icon-22"></i>
                </div>
                <div
                    @click="sensitivityValue = 87.5"
                    :class="{ selected: sensitivityValue === 87.5 }"
                >
                    <i>
                        <img
                            src="../../../img/icons/smiley/53.svg"
                            alt="Smiley très content"
                        />
                    </i>
                    <i class="kiv-selected icon-22"></i>
                </div>
                <div
                    @click="sensitivityValue = 100"
                    :class="{ selected: sensitivityValue === 100 }"
                >
                    <i>
                        <img
                            src="../../../img/icons/smiley/54.svg"
                            alt="Smiley aux anges"
                        />
                    </i>
                    <i class="kiv-selected icon-22"></i>
                </div>
            </div>
        </div>
        <div class="btn-eval-valid-and-next">
            <vs-button> Suivant </vs-button>
        </div>
    </div>
</template>

<script>
import f from "../../services/function";
import VueSlider from "vue-slider-component";

export default {
    props: {
        type: String,
    },
    components: {
        VueSlider,
    },
    data() {
        return {
            // worksheetProgression: 50,
            // commentary1: "",
            technicalValue: 50,
            difficultyValue: 50,
            sensitivityValue: 50,
        };
    },
    computed: {
        // getWorksheetProgression() {
        //     return this.worksheetProgression;
        // },
    },
    methods: {},
    mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

.eval-frame {
    background: $gray-light;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    border-radius: initial;
    max-width: 120rem;

    @media (min-width: 768px) {
        justify-content: space-between;
        position: relative;
        top: -0.6rem;
        left: auto;
        right: auto;
        height: initial;
        border-radius: 1rem;
        padding: 8.5rem;
    }

    h1 {
        margin-bottom: 4rem;

        @media (min-width: 768px) {
            margin-bottom: 2.5rem;
        }
    }

    .eval-question-count {
        font-size: 1.5rem;
        font-weight: 700;
        border-radius: 0.4rem;
        color: $sanguine;
        padding: 0.7rem 1.2rem;
        background: rgba($orange, 0.15);
        white-space: nowrap;
    }

    .eval-rating {
        width: 100%;
        margin: 8rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &.technical-eval-rating {
            max-width: 72rem;

            @media (max-width: 768px) {
                .legend {
                    width: 100%;
                    position: relative;
                    left: -0.1rem;

                    > div {
                        width: initial;
                    }
                }
            }
        }

        &.difficulty-eval-rating {
            max-width: 85rem;
            position: relative;
            left: -0.1rem;

            &.desktop {
                display: none;
            }

            &.mobile {
                display: flex;
                margin: 4.6rem 0;

                > button:not(:last-child) {
                    margin-bottom: 2rem;
                }
            }

            @media (min-width: 768px) {
                &.desktop {
                    display: flex;
                }

                &.mobile {
                    display: none;
                }
            }
        }

        &.sensitivity-eval-rating {
            margin: 4.5rem 0;

            @media (min-width: 768px) {
                margin: 12rem 0;
            }
        }

        > div:not(.legend):not(.smileys) {
            width: 100% !important;
            height: 1rem !important;
        }

        .legend {
            font-size: 1.9rem;
            font-weight: 700;
            display: flex;
            justify-content: space-between;
            margin-top: 1.4rem;
            width: 125%;

            > div {
                width: 20%;
                cursor: pointer;
            }
        }

        .smileys {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            @media (min-width: 768px) {
                flex-direction: row;
                width: 90%;
                position: absolute;
            }

            > div {
                margin: 1rem;
                background: $white;
                border: 1px solid $gray-middle;
                border-radius: 0.4rem;
                padding: 15% 16%;
                padding-bottom: 13.8%;
                cursor: pointer;
                transition: border 0.2s;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                max-height: 8rem;
                max-width: 8rem;

                @media (max-width: 768px) {
                    &:first-child {
                        margin-top: 0;
                    }

                    &:last-child {
                        margin-bottom: 0;
                    }
                }

                @media (min-width: 768px) {
                    padding: 2% 2.1%;
                    padding-bottom: 1.9%;

                    &:first-child {
                        margin-left: 0;
                    }

                    &:last-child {
                        margin-right: 0;
                    }
                }

                &:hover {
                    border: 1px solid rgba($orange, 0.6);
                }

                &.selected {
                    border: 2px solid rgba($green, 0.9);

                    i.kiv-selected {
                        opacity: 1;
                    }
                }
            }

            i:not(.kiv-selected) {
                width: 100%;

                img {
                    width: 100%;
                }
            }

            i.kiv-selected {
                position: absolute;
                top: -0.8rem;
                right: -0.8rem;
                font-size: 1.8rem;
                border-radius: 50%;
                color: $green;
                opacity: 0;
                transition: opacity 0.2s;

                &::before {
                    position: relative;
                    z-index: 1;
                }

                &::after {
                    content: "";
                    background: #fff;
                    position: absolute;
                    top: 0.125rem;
                    right: 0.125rem;
                    z-index: 0;
                    border-radius: 50%;
                    display: block;
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
        }
    }
}
</style>
