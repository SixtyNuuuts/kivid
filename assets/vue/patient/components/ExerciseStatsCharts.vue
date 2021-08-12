<template>
    <div>
        <div>
            <h1>Sensibilité</h1>
            <button @click="changeSensitivityUnitOfTime('day')">Jour</button>
            <button @click="changeSensitivityUnitOfTime('week')">
                Semaine
            </button>
            <button @click="changeSensitivityUnitOfTime('month')">Mois</button>
            <button @click="changeSensitivityUnitOfTime('year')">Année</button>

            <ExerciseStatsLineChart
                :chartData="sensitivityExerciseStats"
                :options="sensitivityChartOptions"
            />
        </div>
        <div class="mt-5">
            <h1>Technique</h1>
            <button @click="changeTechnicalUnitOfTime('day')">Jour</button>
            <button @click="changeTechnicalUnitOfTime('week')">Semaine</button>
            <button @click="changeTechnicalUnitOfTime('month')">Mois</button>
            <button @click="changeTechnicalUnitOfTime('year')">Année</button>

            <ExerciseStatsLineChart
                :chartData="technicalExerciseStats"
                :options="technicalChartOptions"
            />
        </div>
        <div class="mt-5">
            <h1>Difficultées perçues</h1>
            <button @click="changeDifficultyUnitOfTime('day')">Jour</button>
            <button @click="changeDifficultyUnitOfTime('week')">Semaine</button>
            <button @click="changeDifficultyUnitOfTime('month')">Mois</button>
            <button @click="changeDifficultyUnitOfTime('year')">Année</button>

            <ExerciseStatsLineChart
                :chartData="difficultyExerciseStats"
                :options="difficultyChartOptions"
            />
        </div>
        <div class="mt-5">
            <h1>Technique Bar</h1>
            <button @click="changeTechnicalUnitOfTime('day')">Jour</button>
            <button @click="changeTechnicalUnitOfTime('week')">Semaine</button>
            <button @click="changeTechnicalUnitOfTime('month')">Mois</button>
            <button @click="changeTechnicalUnitOfTime('year')">Année</button>

            <ExerciseStatsBarChart
                :chartData="technicalExerciseStats"
                :options="technicalChartOptions"
            />
        </div>
    </div>
</template>

<script>
import ExerciseStatsLineChart from "./charts/ExerciseStatsLineChart.vue";
import ExerciseStatsBarChart from "./charts/ExerciseStatsBarChart.vue";

export default {
    name: "ExerciseStatsCharts",
    components: {
        ExerciseStatsLineChart,
        ExerciseStatsBarChart,
    },
    props: {
        patient: Object,
        // csrfTokenInitWorksheetSessions: String,
    },
    data() {
        return {
            exerciseStats: [],
            sensitivityUnitOfTime: "day",
            technicalUnitOfTime: "day",
            difficultyUnitOfTime: "day",
            commonChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            type: "time",
                            time: {
                                unit: "day",
                                tooltipFormat: "Do MMMM YYYY",
                                displayFormats: {
                                    day: "DD/MM/YYYY",
                                    week: "DD/MM/YYYY",
                                    month: "MMMM YYYY",
                                    year: "YYYY",
                                },
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                max: 5,
                                min: 1,
                            },
                        },
                    ],
                },
            },
        };
    },
    computed: {
        sensitivityExerciseStats() {
            const exerciseStatsByUnitOfTime =
                this.filterExerciseStatsByUnitOfTime(
                    this.exerciseStats,
                    this.sensitivityUnitOfTime
                );

            return {
                datasets: exerciseStatsByUnitOfTime.map((p) => {
                    const sensitivityExerciseStatsFormated =
                        this.generateChartDataPointsAverageByCriterions(
                            "sensitivity",
                            p.stats
                        );

                    const dataSlice = this.getDataSlice(
                        sensitivityExerciseStatsFormated.length,
                        this.sensitivityUnitOfTime
                    );

                    return (p = {
                        label: `${p.worksheetTitle} - ${p.worksheetPartOfBody}`,
                        borderWidth: 1,
                        pointRadius: 3,
                        pointHoverRadius: 4,
                        data: sensitivityExerciseStatsFormated.filter(
                            (s, i) => i >= dataSlice
                        ),
                    });
                }),
            };
        },
        sensitivityChartOptions() {
            const sensitivityChartOptions = { ...this.commonChartOptions };

            sensitivityChartOptions.scales.xAxes[0].time.unit =
                this.sensitivityUnitOfTime;

            return sensitivityChartOptions;
        },
        technicalExerciseStats() {
            const exerciseStatsByUnitOfTime =
                this.filterExerciseStatsByUnitOfTime(
                    this.exerciseStats,
                    this.technicalUnitOfTime
                );

            return {
                datasets: exerciseStatsByUnitOfTime.map((p) => {
                    const technicalExerciseStatsFormated =
                        this.generateChartDataPointsAverageByCriterions(
                            "technical",
                            p.stats
                        );

                    const dataSlice = this.getDataSlice(
                        technicalExerciseStatsFormated.length,
                        this.technicalUnitOfTime
                    );

                    return (p = {
                        label: `${p.worksheetTitle} - ${p.worksheetPartOfBody}`,
                        borderWidth: 1,
                        pointRadius: 3,
                        pointHoverRadius: 4,
                        data: technicalExerciseStatsFormated.filter(
                            (s, i) => i >= dataSlice
                        ),
                    });
                }),
            };
        },
        technicalChartOptions() {
            const technicalChartOptions = { ...this.commonChartOptions };

            technicalChartOptions.scales.xAxes[0].time.unit =
                this.technicalUnitOfTime;

            return technicalChartOptions;
        },
        difficultyExerciseStats() {
            const exerciseStatsByUnitOfTime =
                this.filterExerciseStatsByUnitOfTime(
                    this.exerciseStats,
                    this.difficultyUnitOfTime
                );

            return {
                datasets: exerciseStatsByUnitOfTime.map((p) => {
                    const difficultyExerciseStatsFormated =
                        this.generateChartDataPointsAverageByCriterions(
                            "difficulty",
                            p.stats
                        );

                    const dataSlice = this.getDataSlice(
                        difficultyExerciseStatsFormated.length,
                        this.difficultyUnitOfTime
                    );

                    return (p = {
                        label: `${p.worksheetTitle} - ${p.worksheetPartOfBody}`,
                        borderWidth: 1,
                        pointRadius: 3,
                        pointHoverRadius: 4,
                        data: difficultyExerciseStatsFormated.filter(
                            (s, i) => i >= dataSlice
                        ),
                    });
                }),
            };
        },
        difficultyChartOptions() {
            const difficultyChartOptions = { ...this.commonChartOptions };

            difficultyChartOptions.scales.xAxes[0].time.unit =
                this.difficultyUnitOfTime;

            return difficultyChartOptions;
        },
    },
    methods: {
        changeSensitivityUnitOfTime(UnitOfTime) {
            // for reset chart
            this.sensitivityUnitOfTime = 0;

            // set new value
            this.sensitivityUnitOfTime = UnitOfTime;
        },
        changeTechnicalUnitOfTime(UnitOfTime) {
            // for reset chart
            this.technicalUnitOfTime = 0;

            // set new value
            this.technicalUnitOfTime = UnitOfTime;
        },
        changeDifficultyUnitOfTime(UnitOfTime) {
            // for reset chart
            this.difficultyUnitOfTime = 0;

            // set new value
            this.difficultyUnitOfTime = UnitOfTime;
        },
        generateChartDataPointsAverageByCriterions(criterion, stats) {
            let chartDataPoints = [];

            for (const date in stats) {
                const statsFiltered = stats[date].filter(
                    (s) => criterion === s.criterion
                );

                const statsAverage =
                    Math.round(
                        (statsFiltered.reduce((r, s) => {
                            r = parseInt(r + s.rating);

                            return r;
                        }, []) /
                            statsFiltered.length) *
                            10
                    ) / 10;

                chartDataPoints.push({
                    x: date.split("|")[0],
                    y: statsAverage,
                });
            }
            return chartDataPoints;
        },
        cleanUpExerciseStats(exerciseStats) {
            return exerciseStats.map((p) => {
                return (p = {
                    worksheetTitle: p.worksheet.title,
                    worksheetPartOfBody: p.worksheet.partOfBody,
                    stats: this.sortByDoneDate(
                        p.worksheetSessions.reduce((r, ws) => {
                            r = [
                                ...r,
                                ...ws.exerciseStats
                                    .map((s) => {
                                        return (s = {
                                            criterion: s.criterion,
                                            doneAt: s.doneAt,
                                            rating: s.rating,
                                        });
                                    })
                                    .filter((s) => s.rating),
                            ];

                            return r;
                        }, [])
                    ),
                });
            });
        },
        groupStatsByDay(exerciseStats) {
            return exerciseStats.map((es) => {
                return (es = {
                    worksheetTitle: es.worksheetTitle,
                    worksheetPartOfBody: es.worksheetPartOfBody,
                    stats: es.stats.reduce((r, stat) => {
                        if (!r[stat.doneAt.substr(0, 10)]) {
                            r[stat.doneAt.substr(0, 10)] = [stat];
                        } else {
                            r[stat.doneAt.substr(0, 10)].push(stat);
                        }
                        return r;
                    }, {}),
                });
            });
        },
        groupStatsByWeek(exerciseStats) {
            return exerciseStats.map((es) => {
                return (es = {
                    worksheetTitle: es.worksheetTitle,
                    worksheetPartOfBody: es.worksheetPartOfBody,
                    stats: es.stats.reduce((r, stat, i) => {
                        const doneDate = new Date(stat.doneAt);
                        const dayIndice =
                            doneDate.getDay() === 0 ? 7 : doneDate.getDay();

                        if (0 === i || 1 === dayIndice) {
                            let lastDayOfMonthDate = new Date(
                                doneDate.getFullYear(),
                                doneDate.getMonth() + 1,
                                0
                            );

                            let iMax = 7 - dayIndice + 1;
                            let groupWeekName = "";

                            for (let i = 0; i < iMax; i++) {
                                let day = doneDate.getDate();
                                let month = doneDate.getMonth() + 1;
                                let year = doneDate.getFullYear();

                                day += i;

                                if (day > lastDayOfMonthDate.getDate()) {
                                    day -= lastDayOfMonthDate.getDate();
                                    if (month < 12) {
                                        month += 1;
                                    } else {
                                        month = 1;
                                        year += 1;
                                    }
                                }

                                if (day > 0 && day < 10) {
                                    day = `0${day}`;
                                } else {
                                    day = `${day}`;
                                }

                                if (month > 0 && month < 10) {
                                    month = `0${month}`;
                                } else {
                                    month = `${month}`;
                                }

                                groupWeekName += `${year}-${month}-${day}`;

                                if (iMax - 1 != i) {
                                    groupWeekName += "|";
                                }
                            }

                            if (!r[groupWeekName]) {
                                r[groupWeekName] = [];
                            }
                        }

                        r[
                            Object.keys(r).filter((g) =>
                                g.includes(stat.doneAt.substr(0, 10))
                            )[0]
                        ].push(stat);

                        return r;
                    }, {}),
                });
            });
        },
        groupStatsByMonth(exerciseStats) {
            return exerciseStats.map((es) => {
                return (es = {
                    worksheetTitle: es.worksheetTitle,
                    worksheetPartOfBody: es.worksheetPartOfBody,
                    stats: es.stats.reduce((r, stat, i) => {
                        const doneDate = new Date(stat.doneAt);
                        const dayNum = doneDate.getDate();

                        if (0 === i || 1 === dayNum) {
                            let lastDayOfMonthDate = new Date(
                                doneDate.getFullYear(),
                                doneDate.getMonth() + 1,
                                0
                            );

                            let month = doneDate.getMonth() + 1;
                            if (month > 0 && month < 10) {
                                month = `0${month}`;
                            } else {
                                month = `${month}`;
                            }

                            let year = doneDate.getFullYear();

                            let groupMonthName = "";

                            for (
                                let i = 0;
                                i < lastDayOfMonthDate.getDate();
                                i++
                            ) {
                                let day = 1;

                                day += i;

                                if (day > 0 && day < 10) {
                                    day = `0${day}`;
                                } else {
                                    day = `${day}`;
                                }

                                groupMonthName += `${year}-${month}-${day}`;

                                if (lastDayOfMonthDate.getDate() - 1 != i) {
                                    groupMonthName += "|";
                                }
                            }

                            if (!r[groupMonthName]) {
                                r[groupMonthName] = [];
                            }
                        }

                        r[
                            Object.keys(r).filter((g) =>
                                g.includes(stat.doneAt.substr(0, 10))
                            )[0]
                        ].push(stat);
                        return r;
                    }, {}),
                });
            });
        },
        groupStatsByYear(exerciseStats) {
            return exerciseStats.map((es) => {
                return (es = {
                    worksheetTitle: es.worksheetTitle,
                    worksheetPartOfBody: es.worksheetPartOfBody,
                    stats: es.stats.reduce((r, stat, i) => {
                        if (!r[stat.doneAt.substr(0, 4)]) {
                            r[stat.doneAt.substr(0, 4)] = [stat];
                        } else {
                            r[stat.doneAt.substr(0, 4)].push(stat);
                        }
                        return r;
                    }, {}),
                });
            });
        },
        sortByDoneDate(stats) {
            stats.sort(function (a, b) {
                return new Date(a.doneAt) - new Date(b.doneAt);
            });
            return stats;
        },
        getDataSlice(total, unitOfTime) {
            let dataSlice = 0;

            if ("day" === unitOfTime) {
                dataSlice = total - 31;
            }

            if ("week" === unitOfTime) {
                dataSlice = total - 12;
            }

            return dataSlice;
        },
        filterExerciseStatsByUnitOfTime(exerciseStats, unitOfTime) {
            let exerciseStatsByUnitOfTime = [];

            if ("day" === unitOfTime) {
                exerciseStatsByUnitOfTime = this.groupStatsByDay(exerciseStats);
            }

            if ("week" === unitOfTime) {
                exerciseStatsByUnitOfTime =
                    this.groupStatsByWeek(exerciseStats);
            }

            if ("month" === unitOfTime) {
                exerciseStatsByUnitOfTime =
                    this.groupStatsByMonth(exerciseStats);
            }

            if ("year" === unitOfTime) {
                exerciseStatsByUnitOfTime =
                    this.groupStatsByYear(exerciseStats);
            }

            return exerciseStatsByUnitOfTime;
        },
    },
    created() {
        this.loadingPatientExerciseStats = this.$vs.loading({
            text: "chargement",
            type: "border",
        });

        this.axios
            .get(`/patient/${this.patient.id}/get/exercise-stats`)
            .then((response) => {
                this.exerciseStats = this.cleanUpExerciseStats(response.data);

                this.loadingPatientExerciseStats.close();
                this.loadingPatientExerciseStats = null;
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data.detail);
                }

                this.loadingPatientExerciseStats.close();
                this.loadingPatientExerciseStats = null;
            });
    },
};
</script>

<style lang="scss" scoped>
</style>
