<template>
    <div class="session-timing-frieze">
        <transition name="fade">
            <div v-if="loading" class="loading-block">
                <div class="loading-gray session-block-loading"></div>
                <div class="session-timing-line">
                    <div class="progressbar-steps"></div>
                    <div class="loading-gray progressbar-base"></div>
                </div>
            </div>
            <div v-else>
                <div class="session-block">
                    <i class="session-img">
                        <img
                            src="../../../img/icons/colored/basket.svg"
                            alt="Icone d'une basket"
                        />
                    </i>
                    <h2>
                        C'est parti !
                    </h2>
                </div>
                <div class="session-timing-line">
                    <div class="progressbar-steps">
                        <div
                            class="session-start-date"
                        >
                            <i class="kiv-calendar icon-10"></i>
                            <div class="date-hours">
                                <div class="date">
                                    {{ getWorksheetSessionStartDate }}
                                </div>
                            </div>
                        </div>
                        <div
                            class="session-end-date"
                        >
                            <i class="kiv-calendar icon-10"></i>
                            <div class="date-hours">
                                <div class="date">
                                    {{ getWorksheetSessionEndDate }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="progressbar-base">
                        <div
                            class="progressbar-thumb"
                            :style="{
                                height: `${getTimingPercentage}%`,
                            }"
                        ></div>

                        <div
                            class="progressbar-current-progression"
                            :class="{
                                start: getTimingPercentage < 25,
                                end: getTimingPercentage > 75,
                                max: getTimingPercentage >= 100,
                            }"
                            :style="{
                                top:
                                    getTimingPercentage <= 100
                                        ? `${getTimingPercentage}%`
                                        : '100%',
                            }"
                        >
                            <div class="legend">
                                <div class="session-timing">
                                    <span>{{ `${getTimingPercentage}%` }}</span
                                    >de la fiche a été fait
                                </div>
                                <div
                                    v-if="getWorksheetSessionDoneDate"
                                    class="final-goal"
                                >
                                    Terminé le
                                    {{ getWorksheetSessionDoneDate }}
                                </div>
                            </div>
                            <div class="point"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import f from "../../services/function";
import moment from "moment";

export default {
    props: {
        loading: Boolean,
        worksheet: Object,
        exercises: Array,
    },
    data() {
        return {
            // timing: 0,
        };
    },
    computed: {
        getWorksheet() {
            return this.worksheet;
        },
        getExercises() {
            return this.exercises;
        },
        getTimingPercentage() {
            let progression = 0;

            if (this.getExercises && this.getExercises.length) {
                const exercisePercentPart = 100 / this.getExercises.length;

                const exercisesCompletedCount = this.getExercises.filter(
                    (e) => e.isCompleted
                ).length;

                progression = Math.round(
                    exercisePercentPart * exercisesCompletedCount
                );
            }

            return progression;
        },
        getWorksheetSessionStartDate() {
            return moment().format(
                "DD/MM/YYYY"
            );
        },
        getWorksheetSessionEndDate() {
            return moment().format(
                "DD/MM/YYYY"
            );
        },
        getWorksheetSessionDoneDate() {
            return null;
        },
        getWorksheetSessionDoneHours() {
            return null;
        },
        getTimeLeftBeforeNextSession() {
            return null;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

.session-timing-frieze {
    width: 100%;
    height: 100%;
    background-color: $white;
    background: url(../../../img/icons/colored/background-icons-sports.svg) top
        center;
    background-size: cover;
    padding: 3rem;

    @media (min-width: 576px) {
        background-size: initial;
        padding: 2.2rem;
    }

    @media (min-width: 650px) {
        padding: 2.35rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        &.loading-block {
            .session-block-loading {
                height: 13.3rem;
                border-radius: 0.5rem;
            }

            .session-timing-line {
                .progressbar-base {
                    background-color: #e6e1d8;
                }
            }
        }

        .session-block {
            background-color: $orange;
            background-image: url(../../../img/icons/colored/basket.svg);
            background-position: top 0rem left -4rem;
            background-repeat: no-repeat;
            color: $white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            position: relative;
            padding: 2rem 1rem;
            border-radius: 0.5rem;

            @media (min-width: 576px) {
                padding: 2rem;
            }

            > * {
                position: relative;
                z-index: 3;
            }

            &::before {
                content: "";
                background: url(../../../img/ball-4.svg) top -8.1rem right -7.3rem
                        no-repeat,
                    url(../../../img/ball-4.svg) bottom -15.4rem left -9.4rem
                        no-repeat;
                background-size: 17.7rem, 26.7rem;
                display: block;
                position: absolute;
                z-index: 2;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 0.5rem;
            }

            &::after {
                content: "";
                background: $orange;
                opacity: 0.89;
                display: block;
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 0.5rem;
            }

            i.session-img {
                width: 3.2rem;
                margin-bottom: 0.5rem;

                img {
                    width: 100%;
                }
            }

            h2 {
                font-size: 2.4rem;
                margin: 0;
            }

            .total-sessions {
                font-size: 1.3rem;
            }
        }

        .session-timing-line {
            height: 100%;
            width: 100%;
            margin-top: 3.5rem;
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;

            @media (min-width: 760px) {
                padding-right: 0.6rem;
            }

            @media (min-width: 850px) {
                padding-right: 3vw;
            }

            .progressbar-steps {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                > div {
                    display: flex;
                    align-items: center;

                    i {
                        color: $sanguine;
                        font-size: 2.2rem;
                        position: relative;
                        top: -0.95rem;
                        margin-right: 0.6rem;

                        @media (min-width: 576px) {
                            font-size: 1.7rem;
                            top: -0.715rem;
                        }

                        @media (min-width: 650px) {
                            font-size: 1.85rem;
                            top: -1rem;
                        }
                    }

                    .date-hours {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;

                        .date {
                            font-weight: 700;
                            font-size: 1.9rem;
                            position: relative;
                            top: -0.88rem;

                            @media (min-width: 576px) {
                                font-size: 1.6rem;
                                top: -0.65rem;
                            }

                            @media (min-width: 650px) {
                                font-size: 1.7rem;
                                top: -0.75rem;
                            }
                        }

                        .hours {
                            font-weight: 400;
                            font-size: 1.4rem;
                            margin-top: 0.1rem;

                            @media (min-width: 576px) {
                                font-size: 1.1rem;
                            }

                            @media (min-width: 650px) {
                                font-size: 1.2rem;
                            }
                        }
                    }
                }
            }

            .progressbar-base {
                width: 1rem;
                background: $gray-middle;
                position: relative;
                height: 100%;
                border-radius: 0.6rem;

                @media (min-width: 576px) {
                    width: 0.8rem;
                }

                .progressbar-thumb {
                    background: linear-gradient(
                        360deg,
                        #fb8b68 9.29%,
                        #ff6839 100%
                    );
                    border-radius: 0.6rem 0.6rem 0 0;
                    width: 100%;
                    height: 0%;
                    transition: height 1s ease;
                    position: relative;
                    z-index: 2;
                    max-height: 100%;

                    &.max {
                        border-radius: 0;
                    }
                }

                .progressbar-current-progression {
                    position: absolute;
                    z-index: 11;
                    display: flex;
                    right: -0.55rem;
                    transition: all 1s ease;

                    &.start {
                        .legend {
                            transform: translateY(62%);
                        }
                        .point {
                            transform: translateY(-0.2rem);
                        }
                    }

                    &.end {
                        .legend {
                            transform: translateY(-140%);
                        }
                    }

                    &.max {
                        .legend {
                            transform: translateY(-184.6%);
                        }
                        .point {
                            transform: translateY(-1.9rem);
                        }
                    }

                    .point {
                        width: 2.2rem;
                        height: 2.2rem;
                        min-width: 2.2rem;
                        min-height: 2.2rem;
                        border-radius: 50%;
                        background: $sanguine;
                        border: 0.6rem solid $white;
                        box-sizing: border-box;
                        box-shadow: 0px 0.4rem 1.2rem rgb(255, 99, 50, 0.5);
                        transform: translateY(-0.8rem);

                        @media (min-width: 576px) {
                            width: 2rem;
                            height: 2rem;
                            min-width: 2rem;
                            min-height: 2rem;
                        }
                    }

                    .legend {
                        background: $gray-light;
                        border-radius: 0.3rem;
                        white-space: nowrap;
                        text-align: center;
                        position: relative;
                        transform: translateY(-48%);
                        font-size: 1.5rem;
                        margin-right: 1.4rem;
                        padding: 1.3rem 1.6rem;

                        @media (min-width: 768px) {
                            font-size: 1.2rem;
                            margin-right: 1.2rem;
                            padding: 1.1rem 1.4rem;
                        }

                        @media (min-width: 1300px) {
                            font-size: 1.4rem;
                            margin-right: 1.4rem;
                            padding: 1.3rem 1.6rem;
                        }

                        span {
                            margin-right: 0.4rem;
                            font-weight: 800;
                        }

                        .final-goal {
                            background: $orange;
                            color: $white;
                            padding: 0.4rem 0.8rem;
                            border-radius: 0.4rem;
                            display: inline-flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 1.4rem;
                            margin-top: 0.8rem;
                            padding-bottom: 0.4rem;

                            @media (min-width: 768px) {
                                font-size: 1.1rem;
                                margin-top: 0.6rem;
                                padding-bottom: 0.3rem;
                            }

                            @media (min-width: 1300px) {
                                font-size: 1.3rem;
                                margin-top: 0.7rem;
                                padding-bottom: 0.4rem;
                            }

                            span {
                                margin-right: 0.4rem;
                                font-weight: 400;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
