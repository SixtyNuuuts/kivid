<template>
    <section
        id="my-scores"
        class="kiv-block"
        :class="{ reduced: !$parent.myScoresContent }"
    >
        <button
            class="toggle-content"
            @click="$parent.myScoresContent = !$parent.myScoresContent"
        >
            <i class="kiv-chevron-down icon-3"></i>
        </button>
        <h2>
            <span v-if="!doctorView">Mes</span
            ><span v-if="doctorView">Ses</span> indices
        </h2>
        <transition name="height">
            <div v-if="$parent.myScoresContent" class="content">
                <div class="score-circle">
                    <vue-ellipse-progress
                        :progress="getScorePercentage"
                        v-bind="options"
                    >
                    </vue-ellipse-progress>
                    <div class="score-circle-text">
                        <span class="score">{{
                            formatNumbThousand(getScore)
                        }}</span>
                        <p class="unit">Points</p>
                    </div>
                </div>

                <div class="score-line">
                    <div
                        class="progressbar-base"
                        :class="{ 'loading-gray-dark': loading }"
                    >
                        <div
                            class="progressbar-thumb"
                            :class="{ max: score >= scoreMax }"
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
                            v-if="!loading"
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
                            <span>
                                <span v-if="!doctorView">Votre</span
                                ><span v-if="doctorView">Son</span> score
                                <span class="score">{{
                                    `(${formatNumbThousand(getScore)} pts)`
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
                <div class="exercise-block score-block">
                    <div class="stat-icon">
                        <i class="kiv-exercise icon-7"></i>
                    </div>
                    <h4 class="stat-label">Nombre d’exercices faits</h4>
                    <div class="stat-result">
                        <h3 v-if="!loadingPatientWorksheets">
                            {{ getTotalExerciseCompleted }}
                        </h3>
                        <div
                            v-if="loadingPatientWorksheets"
                            class="loading-gray loading-block-h3 w-25"
                        ></div>
                    </div>
                </div>
                <div class="sensitivity-block score-block">
                    <div class="stat-icon">
                        <i class="kiv-sensitivity icon-8"></i>
                    </div>
                    <h4 class="stat-label">
                        <span v-if="!doctorView">Votre</span
                        ><span v-if="doctorView">Sa</span> sensibilité
                    </h4>
                    <div class="stat-result">
                        <h3 v-if="!loadingPatientWorksheets">
                            <span
                                v-if="
                                    getSensitivityVariation &&
                                    'up' === getSensitivityVariation.variation
                                "
                            >
                                En amélioration
                            </span>
                            <span
                                v-if="
                                    getSensitivityVariation &&
                                    'down' === getSensitivityVariation.variation
                                "
                            >
                                En baisse
                            </span>
                            <span
                                v-if="
                                    getSensitivityVariation &&
                                    'equal' === getTechnicalVariation.variation
                                "
                            >
                                Stable
                            </span>
                            <span v-if="!getSensitivityVariation">
                                Bientôt !
                            </span>
                        </h3>
                        <div
                            v-if="
                                getSensitivityVariation &&
                                !loadingPatientWorksheets &&
                                'up' === getSensitivityVariation.variation
                            "
                            class="stat-variation green"
                        >
                            (<i class="kiv-variation-up icon-27"></i
                            ><span>+{{ getSensitivityVariation.result }}%</span
                            >)
                        </div>
                        <div
                            v-if="
                                getSensitivityVariation &&
                                !loadingPatientWorksheets &&
                                'down' === getSensitivityVariation.variation
                            "
                            class="stat-variation red"
                        >
                            (<i class="kiv-variation-down icon-28"></i
                            ><span>{{ getSensitivityVariation.result }}%</span>)
                        </div>

                        <div
                            v-if="loadingPatientWorksheets"
                            class="loading-gray loading-block-h3 w-75"
                        ></div>
                    </div>
                </div>
                <div class="technical-block score-block">
                    <div class="stat-icon">
                        <i class="kiv-technical icon-9"></i>
                    </div>
                    <h4 class="stat-label">
                        <span v-if="!doctorView">Votre</span
                        ><span v-if="doctorView">Sa</span> technique
                    </h4>
                    <div class="stat-result">
                        <h3 v-if="!loadingPatientWorksheets">
                            <span
                                v-if="
                                    getTechnicalVariation &&
                                    'up' === getTechnicalVariation.variation
                                "
                            >
                                En amélioration
                            </span>
                            <span
                                v-if="
                                    getTechnicalVariation &&
                                    'down' === getTechnicalVariation.variation
                                "
                            >
                                En baisse
                            </span>
                            <span
                                v-if="
                                    getTechnicalVariation &&
                                    'equal' === getTechnicalVariation.variation
                                "
                            >
                                Stable
                            </span>
                            <span v-if="!getTechnicalVariation">
                                Bientôt !
                            </span>
                        </h3>
                        <div
                            v-if="
                                getTechnicalVariation &&
                                !loadingPatientWorksheets &&
                                'up' === getTechnicalVariation.variation
                            "
                            class="stat-variation green"
                        >
                            (<i class="kiv-variation-up icon-27"></i
                            ><span>+{{ getTechnicalVariation.result }}%</span>)
                        </div>
                        <div
                            v-if="
                                getTechnicalVariation &&
                                !loadingPatientWorksheets &&
                                'down' === getTechnicalVariation.variation
                            "
                            class="stat-variation red"
                        >
                            (<i class="kiv-variation-down icon-28"></i
                            ><span>{{ getTechnicalVariation.result }}%</span>)
                        </div>
                        <div
                            v-if="loadingPatientWorksheets"
                            class="loading-gray loading-block-h3 w-75"
                        ></div>
                    </div>
                </div>
                <ScoreRankBlock
                    :rank="getRank"
                    :loading="loading"
                    :doctorView="doctorView"
                />
            </div>
        </transition>
    </section>
</template>

<script>
import f from "../../services/function";
import ScoreRankBlock from "./MyScores/ScoreRankBlock.vue";

export default {
    props: {
        patient: Object,
        patientWorksheets: Array,
        loadingPatientWorksheets: Boolean,
        doctorView: Boolean,
    },
    components: {
        ScoreRankBlock,
    },
    data() {
        return {
            loading: false,
            score: 0,
            scoreMax: 50000,
            options: {
                color: "#FF6332",
                "empty-color": "#ffc6b5",
                size: 130,
                thickness: 5,
                "empty-thickness": 3,
                "line-mode": "out 5",
                animation: "rs 700 1000",
                legend: false,
            },
        };
    },
    computed: {
        getScore() {
            return this.score;
        },
        getScorePercentage() {
            if (this.score > 0) {
                let scorePercentage = (this.score * 100) / this.scoreMax;

                if (scorePercentage > 100) {
                    scorePercentage = 100;
                }

                return scorePercentage > 1 ? scorePercentage : 1;
            }
            return 1;
        },
        getRank() {
            if (this.score >= 0 && this.score < 10000) {
                return "nouveau";
            }

            if (this.score >= 10000 && this.score < 20000) {
                return "debutant";
            }

            if (this.score >= 20000 && this.score < 30000) {
                return "amateur";
            }

            if (this.score >= 30000 && this.score < 40000) {
                return "intermediaire";
            }

            if (this.score >= 40000 && this.score < 50000) {
                return "confirme";
            }

            if (this.score >= 50000) {
                return "expert";
            }
        },
        getTotalExerciseCompleted() {
            let countStats = 0;

            this.patientWorksheets.forEach((w) => {
                countStats += w.exerciseStats.length;
            });

            return this.formatNumbThousand(countStats / 3);
        },
        getSensitivityVariation() {
            return this.calculVariation("sensitivity");
        },
        getTechnicalVariation() {
            return this.calculVariation("technical");
        },
    },
    methods: {
        calculVariation(criterion) {
            let stats = [];

            this.patientWorksheets.forEach((w) => {
                stats = [
                    ...stats,
                    ...w.exerciseStats.filter(
                        (es) => es.criterion === criterion
                    ),
                ];
            });

            const variationSlice = 1;

            let result = 0;

            if (stats.length > variationSlice) {
                const lastStats = stats
                    .sort(function (a, b) {
                        return new Date(a.doneAt) - new Date(b.doneAt);
                    })
                    .filter((es, i) => i > stats.length - 1 - variationSlice);

                const lastStatsAverage = this.statsAverage(lastStats);

                if (!lastStats.length) {
                    return null;
                }

                const oldStats = stats
                    .sort(function (a, b) {
                        return new Date(a.doneAt) - new Date(b.doneAt);
                    })
                    .filter((es, i) => i <= stats.length - 1 - variationSlice);

                const oldStatsAverage = this.statsAverage(oldStats);

                result =
                    Math.round((lastStatsAverage - oldStatsAverage) * 10 * 10) /
                    10;
            } else {
                return null;
            }

            return {
                variation:
                    result === 0
                        ? "equal"
                        : Math.sign(result) === 1
                        ? "up"
                        : "down",
                result,
            };
        },
        formatNumbThousand(score) {
            return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        statsAverage(stats) {
            return (
                Math.round(
                    (stats.reduce((r, s) => {
                        r = parseInt(r + s.rating);

                        return r;
                    }, []) /
                        stats.length) *
                        10
                ) / 10
            );
        },
    },
    mounted() {
        this.loading = true;

        this.axios
            .get(`/patient/${this.patient.id}/get/score`)
            .then((response) => {
                this.score = response.data.score ? response.data.score : 0;

                if (response.data.notifScoreRank) {
                    const userNotifList =
                        document.getElementById("user-notif-list");
                    const notifBell = document.getElementById("notif-bell");

                    notifBell.classList.add("has-notifications");

                    let li = document.createElement("li");
                    li.classList.add("prio");
                    li.classList.add("active");
                    li.addEventListener(
                        "mouseover",
                        () => {
                            li.classList.remove("active");
                        },
                        false
                    );

                    let divIcon = document.createElement("div");
                    divIcon.classList.add("notif-icon");

                    let img = document.createElement("img");
                    img.src = "/img/icons/colored/confettis.svg";
                    img.alt = "Icone de confettis";
                    img.classList.add("icon-confettis");

                    let p = document.createElement("p");
                    let span = document.createElement("span");
                    span.innerText = `Vous avez atteint le niveau ${response.data.notifScoreRank} ! Félicitations !`;

                    p.appendChild(span);

                    divIcon.appendChild(img);

                    li.appendChild(divIcon);

                    li.appendChild(p);

                    userNotifList.appendChild(li);
                }

                this.loading = false;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                console.error(errorMess);
            });
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

#my-scores {
    grid-area: myscores;

    .content {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 46%;
        grid-template-areas:
            "scorecircle       scorerangblock"
            "exerciseblock     exerciseblock"
            "sensitivityblock  sensitivityblock"
            "technicalblock    technicalblock";

        @media (min-width: 576px) {
            grid-gap: 2rem;
            grid-template-columns: 46%;
            grid-template-areas:
                "scoreline      scoreline"
                "exerciseblock  sensitivityblock"
                "technicalblock  scorerangblock";
        }

        @media (min-width: 768px) {
            grid-gap: 1.5rem;
            grid-template-columns: repeat(4, 1fr);
            grid-template-areas:
                "scoreline      scoreline         scoreline       scoreline"
                "exerciseblock  sensitivityblock  technicalblock  scorerangblock";
        }

        @media (min-width: 992px) {
            grid-gap: 2rem;
            grid-template-columns: 46%;
            grid-template-areas:
                "scoreline      scoreline"
                "exerciseblock  sensitivityblock"
                "technicalblock  scorerangblock";
        }

        @media (min-width: 1200px) {
            grid-gap: 2rem;
            grid-template-columns: repeat(4, 1fr);
            grid-template-areas:
                "scoreline      scoreline         scoreline       scoreline"
                "exerciseblock  sensitivityblock  technicalblock  scorerangblock";
        }

        .score-circle {
            grid-area: scorecircle;
            background: #feeee8;
            border-radius: 0.5rem;
            color: $sanguine;
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (min-width: 576px) {
                display: none;
            }

            .score-circle-text {
                position: absolute;
                top: 51%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                margin-left: 0.1rem;

                .score {
                    font-size: 1.9rem;
                    font-weight: 800;
                }

                .unit {
                    font-size: 1.4rem;
                    margin: 0;
                    position: relative;
                    top: -0.3rem;
                }
            }
        }

        .score-line {
            grid-area: scoreline;
            background: #feeee8;
            border-radius: 0.5rem;
            height: 13rem;
            padding: 2rem 0;
            display: none;

            @media (min-width: 576px) {
                display: block;
            }

            .progressbar-base {
                height: 1.6rem;
                background: $gray-middle;
                position: relative;

                &.loading-gray-dark {
                    animation-duration: 1.2s;
                    animation-fill-mode: forwards;
                    animation-iteration-count: infinite;
                    animation-name: placeHolderShimmer;
                    animation-timing-function: linear;
                    background: linear-gradient(
                        to right,
                        #e7dfcd 8%,
                        #d3c9b6 38%,
                        #e7dfcd 54%
                    );
                    background-size: 1000px 640px;
                    position: relative;
                }

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
                    transition: width 1s ease, border-radius 1s ease 0.8s;
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
                    background-color: $white;
                    padding: 0.7rem 0.9rem;
                    display: inline-flex;
                    position: absolute;
                    top: 5.8rem;
                    left: 0%;
                    transition: left 1s ease;
                    min-height: 3rem;
                    min-width: 16rem;
                    animation: 0.5s ease 0s forwards fadeEnter;
                    opacity: 0;

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
                        font-size: 1.5rem;
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
        .score-block {
            background: $gray-light;
            border-radius: 0.5rem;
            padding: 2rem;
            min-height: 19rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;

            .loading-block-h3 {
                height: 2.1rem;
                border-radius: 0.4rem;
            }

            @media (min-width: 576px) {
                min-height: initial;
            }

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
                margin-bottom: 2.3rem;
            }

            .stat-result {
                display: flex;
                flex-wrap: wrap;

                h3,
                .loading-block-h3 {
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
                grid-area: exerciseblock;

                .stat-icon {
                    background: rgba($sanguine, 0.25);

                    i {
                        font-size: 1.9rem;
                        color: $sanguine;
                    }
                }

                h3::before,
                .loading-block-h3::before {
                    background: $sanguine;
                }
            }

            &.sensitivity-block {
                grid-area: sensitivityblock;

                .stat-icon {
                    background: rgba($yellow, 0.25);

                    i {
                        font-size: 2.1rem;
                        color: $yellow;
                    }
                }

                h3::before,
                .loading-block-h3::before {
                    background: $yellow;
                }
            }

            &.technical-block {
                grid-area: technicalblock;

                .stat-icon {
                    background: rgba($tournesol, 0.25);

                    i {
                        font-size: 2.2rem;
                        position: relative;
                        left: 0.2rem;
                        color: $tournesol;
                    }
                }

                h3::before,
                .loading-block-h3::before {
                    background: $tournesol;
                }
            }
        }
    }
}
</style>
