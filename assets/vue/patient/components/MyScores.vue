<template>
    <section id="my-scores" class="kiv-block">
        <h2>Mes indices</h2>
        <div class="score-line">
            <div class="progressbar-base">
                <div
                    class="progressbar-thumb"
                    :class="{ max: score > scoreMax }"
                    :style="{ width: `${getScorePercentage}%` }"
                ></div>
                <div class="progressbar-steps">
                    <div>
                        <div class="point"></div>
                        <span>10 000 pts</span>
                    </div>
                    <div>
                        <div class="point"></div>
                        <span>20 000 pts</span>
                    </div>
                    <div>
                        <div class="point"></div>
                        <span>30 000 pts</span>
                    </div>
                    <div>
                        <div class="point"></div>
                        <span>40 000 pts</span>
                    </div>
                </div>

                <div
                    class="progressbar-current-score"
                    :class="{
                        start: getScorePercentage < 20,
                        end: getScorePercentage > 80,
                    }"
                    :style="{
                        left:
                            getScorePercentage <= 100
                                ? `${getScorePercentage}%`
                                : '100%',
                    }"
                >
                    <span
                        >Votre niveau
                        <span class="score">{{
                            `(${formatScore(getScore)} pts)`
                        }}</span></span
                    >
                </div>
                <div class="progressbar-base-end-decoration">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="score-blocks">
            <div class="exercise-block">
                <div class="stat-icon"><i class="kiv-exercise icon-7"></i></div>
                <h4 class="stat-label">Nombre d’exercices faits</h4>
                <div class="stat-result">
                    <h3>459</h3>
                    <div class="stat-variation"></div>
                </div>
            </div>
            <div class="sensitivity-block">
                <div class="stat-icon">
                    <i class="kiv-sensitivity icon-8"></i>
                </div>
                <h4 class="stat-label">Votre sensibilité</h4>
                <div class="stat-result">
                    <h3>En amélioration</h3>
                    <div class="stat-variation green">
                        (<i class="kiv-variation-up icon-27"></i
                        ><span>+5%</span>)
                    </div>
                </div>
            </div>
            <div class="technical-block">
                <div class="stat-icon">
                    <i class="kiv-technical icon-9"></i>
                </div>
                <h4 class="stat-label">Votre technique</h4>
                <div class="stat-result">
                    <h3>En baisse</h3>
                    <div class="stat-variation"></div>
                </div>
            </div>
            <div class="score-rang-block expert">
                <h4>Votre niveau</h4>
                <i class="rang-img">
                    <img
                        src="../../../img/icons/colored/reward.svg"
                        alt="Icone 1 du rang expert"
                    />
                    <img
                        src="../../../img/icons/colored/reward.svg"
                        alt="Icone 2 du rang expert"
                    />
                    <img
                        src="../../../img/icons/colored/reward.svg"
                        alt="Icone 3 du rang expert"
                    />
                </i>
                <p class="rang-label">Patient Expert</p>
                <p class="rang-result">Vous êtes trop fort(e) !</p>
            </div>
        </div>
    </section>
</template>

<script>
import f from "../../services/function";

export default {
    props: {
        patient: Object,
    },
    data() {
        return {
            // doctors: [],
            // loading: false,
            score: 0,
            scoreMax: 50000,
        };
    },
    computed: {
        getScore() {
            return this.score;
        },
        getScorePercentage() {
            return (this.score * 100) / this.scoreMax;
        },
    },
    methods: {
        formatScore(score) {
            return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
    },
    mounted() {
        setTimeout(() => {
            this.score = 5000;
        }, 500);
        // this.loading = true;
        // this.axios
        //     .get(`/get/doctors`)
        //     .then((response) => {
        //         this.doctors = response.data;
        //         this.loading = false;
        //     })
        //     .catch((error) => {
        //         if (error.response) {
        //             console.log(
        //                 error.response.data.detail
        //                     ? error.response.data.detail
        //                     : error.response.data
        //             );
        //         }
        //         this.loading = false;
        //     });
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

#my-scores {
    .score-line {
        background: #feeee8;
        border-radius: 0.5rem;
        height: 11.7rem;
        padding: 2rem 0;
        margin-bottom: 2rem;

        .progressbar-base {
            height: 1.6rem;
            background: $gray-middle;
            position: relative;

            .progressbar-base-end-decoration {
                position: absolute;
                z-index: 1;
                top: 0;
                right: 0;
                width: 1.3rem;
                height: 1.6rem;
                display: flex;
                justify-content: flex-end;

                div {
                    background: #feeee8;
                    width: 0.3rem;
                    height: 100%;
                    margin-right: 0.2rem;
                }
            }

            .progressbar-thumb {
                background: linear-gradient(
                    270deg,
                    #fb8b68 9.29%,
                    #ff6839 100%
                );
                border-radius: 0 0.8rem 0.8rem 0;
                width: 0%;
                height: 100%;
                transition: width 1s ease;
                position: relative;
                z-index: 2;
                max-width: 100%;

                &.max {
                    border-radius: 0;
                }
            }

            .progressbar-steps {
                display: flex;
                position: relative;
                z-index: 3;
                top: -1.2rem;

                > div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-left: 20%;

                    &:nth-child(1) {
                        transform: translateX(-50%);
                    }

                    &:nth-child(2) {
                        transform: translateX(-150%);
                    }

                    &:nth-child(3) {
                        transform: translateX(-250%);
                    }

                    &:nth-child(4) {
                        transform: translateX(-350%);
                    }

                    .point {
                        width: 0.8rem;
                        height: 0.8rem;
                        min-width: 0.8rem;
                        max-height: 0.8rem;
                        border-radius: 50%;
                        background: $white;
                    }

                    span {
                        font-size: 1.45rem;
                        margin-top: 1.1rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
            .progressbar-current-score {
                background: $white;
                padding: 0.6rem 0.7rem;
                display: inline-flex;
                position: absolute;
                top: 5rem;
                left: 0%;
                transition: left 1s ease;

                &::before {
                    content: "";
                    display: block;
                    width: 0;
                    height: 0;
                    border-bottom: 0.6rem solid $white;
                    position: absolute;
                    top: -0.6rem;
                }

                &:not(.start) {
                    transform: translateX(-50%);
                    &::before {
                        border-left: 0.6rem solid transparent;
                        border-right: 0.6rem solid transparent;
                        left: 50%;
                        right: auto;
                        transform: translateX(-50%);
                    }
                }

                &.start {
                    transform: none;
                    &::before {
                        border-left: 0 solid transparent;
                        border-right: 0.7rem solid transparent;
                        left: 0;
                        right: auto;
                        transform: none;
                    }
                }

                &.end {
                    transform: translateX(-100%);
                    &::before {
                        border-left: 0.7rem solid transparent;
                        border-right: 0 solid transparent;
                        left: auto;
                        right: 0;
                        transform: none;
                    }
                }

                span {
                    font-weight: 800;
                    font-size: 1.4rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    span.score {
                        font-weight: 400;
                    }
                }
            }
        }
    }
    .score-blocks {
        display: flex;
        justify-content: space-between;

        > div {
            flex-grow: 1;
            width: 25%;
            margin: 0 1rem;
            background: $gray-light;
            border-radius: 0.5rem;
            padding: 2rem;
            height: 20.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }

            .stat-icon {
                width: 4rem;
                height: 4rem;
                min-width: 4rem;
                min-height: 4rem;
                max-height: 4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                margin-bottom: 2.3rem;
            }

            .stat-label {
                flex-grow: 1;
            }

            .stat-result {
                display: flex;
                flex-wrap: wrap;

                h3 {
                    margin-right: 1rem;
                    position: relative;

                    &::before {
                        content: "";
                        display: block;
                        width: 1.2rem;
                        height: 1.2rem;
                        position: absolute;
                        left: -2.6rem;
                        top: 0.3rem;
                        border-radius: 50%;
                    }
                }

                .stat-variation {
                    position: relative;
                    top: -0.1rem;
                    font-size: 1.6rem;

                    span {
                        position: relative;
                        top: 0.1rem;
                    }

                    i {
                        font-size: 1.9rem;
                        position: relative;
                        top: 0.4rem;
                    }

                    &.green {
                        color: $green;
                    }

                    &.red {
                        color: $red;
                    }
                }
            }

            &.exercise-block {
                .stat-icon {
                    background: rgba($sanguine, 0.25);

                    i {
                        font-size: 1.9rem;
                        color: $sanguine;
                    }
                }

                h3::before {
                    background: $sanguine;
                }
            }

            &.sensitivity-block {
                .stat-icon {
                    background: rgba($yellow, 0.25);

                    i {
                        font-size: 2.1rem;
                        color: $yellow;
                    }
                }

                h3::before {
                    background: $yellow;
                }
            }

            &.technical-block {
                .stat-icon {
                    background: rgba($tournesol, 0.25);

                    i {
                        font-size: 2.2rem;
                        position: relative;
                        left: 0.2rem;
                        color: $tournesol;
                    }
                }

                h3::before {
                    background: $tournesol;
                }
            }

            &.score-rang-block {
                background-color: $orange;
                color: $white;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                position: relative;

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
                }

                &.expert {
                    background-image: url(../../../img/icons/colored/reward.svg);
                    background-position: top 0rem left -4rem;
                    background-repeat: no-repeat;

                    i.rang-img {
                        img {
                            width: 23%;
                            margin: 0 0.5rem;
                        }
                    }
                }

                h4 {
                    line-height: 1.1;
                }

                i.rang-img {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    max-width: 18rem;

                    img {
                        width: 23%;
                        margin: 0 0.5rem;
                    }
                }

                .rang-label {
                    white-space: nowrap;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.5rem 1rem;
                    background: $white;
                    border-radius: 0.4rem;
                    color: $black;
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin: 0;
                }

                .rang-result {
                    font-size: 1.3rem;
                    font-weight: 700;
                    margin: 0;
                }
            }
        }
    }
}
</style>
