<template>
    <div id="my-exercise-stats">
        <section class="kiv-block" id="sensitivity">
            <h2><span>Sensibilité</span></h2>
            <div v-if="getPatientWorksheets.length" class="content">
                <div class="buttons">
                    <vs-button-group>
                        <vs-button
                            :active="sensitivityUnitOfTime === 'day'"
                            @click="changeSensitivityUnitOfTime('day')"
                            flat
                        >
                            Jour
                        </vs-button>
                        <vs-button
                            :active="sensitivityUnitOfTime === 'week'"
                            @click="changeSensitivityUnitOfTime('week')"
                            flat
                        >
                            Semaine
                        </vs-button>
                        <vs-button
                            :active="sensitivityUnitOfTime === 'month'"
                            @click="changeSensitivityUnitOfTime('month')"
                            flat
                        >
                            Mois
                        </vs-button>
                        <vs-button
                            :active="sensitivityUnitOfTime === 'year'"
                            @click="changeSensitivityUnitOfTime('year')"
                            flat
                        >
                            Année
                        </vs-button>
                    </vs-button-group>
                </div>
                <div class="kiv-select">
                    <vs-select
                        placeholder="Select"
                        v-model="sensitivityUnitOfTime"
                    >
                        <vs-option label="Jour" value="day"> Jour </vs-option>
                        <vs-option label="Semaine" value="week">
                            Semaine
                        </vs-option>
                        <vs-option label="Mois" value="month"> Mois </vs-option>
                        <vs-option label="Année" value="year">
                            Année
                        </vs-option>
                    </vs-select>
                </div>
                <chartist
                    :class="{
                        'hide-content': !sensitivityExerciseStats.series.length,
                        labelsl: sensitivityExerciseStats.labels.length >= 25,
                        labelsm:
                            sensitivityExerciseStats.labels.length >= 12 &&
                            sensitivityExerciseStats.labels.length < 25,
                        labelss:
                            sensitivityExerciseStats.labels.length >= 5 &&
                            sensitivityExerciseStats.labels.length < 12,
                    }"
                    ratio="ct-major-second"
                    type="Line"
                    :data="sensitivityExerciseStats"
                    :options="sensitivityChartOptions"
                    :event-handlers="eventHandlers"
                >
                    <div class="axisY-labels sensitivity">
                        <i>
                            <img
                                src="../../../img/icons/smiley/46.svg"
                                alt="Smiley qui va très mal"
                            />
                        </i>
                        <i>
                            <img
                                src="../../../img/icons/smiley/47.svg"
                                alt="Smiley qui va mal"
                            />
                        </i>
                        <i>
                            <img
                                src="../../../img/icons/smiley/48.svg"
                                alt="Smiley qui va pas bien"
                            />
                        </i>
                        <i>
                            <img
                                src="../../../img/icons/smiley/49.svg"
                                alt="Smiley qui va bof"
                            />
                        </i>
                        <i>
                            <img
                                src="../../../img/icons/smiley/50.svg"
                                alt="Smiley perplexe"
                            />
                        </i>
                        <i>
                            <img
                                src="../../../img/icons/smiley/51.svg"
                                alt="Smiley qui va bien"
                            />
                        </i>
                        <i>
                            <img
                                src="../../../img/icons/smiley/52.svg"
                                alt="Smiley qui va très bien"
                            />
                        </i>
                        <i>
                            <img
                                src="../../../img/icons/smiley/53.svg"
                                alt="Smiley très content"
                            />
                        </i>
                        <i>
                            <img
                                src="../../../img/icons/smiley/54.svg"
                                alt="Smiley aux anges"
                            />
                        </i>
                    </div>
                </chartist>
                <div class="btns-worksheets-stats sensitivity">
                    <button
                        v-for="(worksheet, i) in getPatientWorksheets"
                        :key="i"
                        class="btn-toggle-worksheet-stats"
                        @click="
                            toggleHiddenWorksheetLine(
                                'sensitivity',
                                i,
                                worksheet.id
                            )
                        "
                        :class="{
                            disactive: disableWorksheets[
                                'sensitivity'
                            ].includes(worksheet.id),
                        }"
                    >
                        <div
                            class="line-color"
                            :style="{
                                backgroundColor: colors[i],
                                border: `5px solid ${colors[i]}`,
                            }"
                        ></div>
                        <BtnChartWorksheetPartOfBody :worksheet="worksheet" />
                    </button>
                </div>
            </div>
            <div
                class="not-found"
                v-if="!loadingPatientWorksheets && !getPatientWorksheets.length"
            >
                <p>
                    <i class="far fa-calendar-minus"></i>
                    <span>Vous n'avez pas encore de statistiques</span>
                </p>
            </div>
            <div v-if="loadingPatientWorksheets" class="loading"></div>
        </section>
        <section class="kiv-block" id="technical">
            <h2><span>Technique</span></h2>
            <div v-if="getPatientWorksheets.length" class="content">
                <div class="buttons">
                    <vs-button-group>
                        <vs-button
                            :active="technicalUnitOfTime === 'day'"
                            @click="changeTechnicalUnitOfTime('day')"
                            flat
                        >
                            Jour
                        </vs-button>
                        <vs-button
                            :active="technicalUnitOfTime === 'week'"
                            @click="changeTechnicalUnitOfTime('week')"
                            flat
                        >
                            Semaine
                        </vs-button>
                        <vs-button
                            :active="technicalUnitOfTime === 'month'"
                            @click="changeTechnicalUnitOfTime('month')"
                            flat
                        >
                            Mois
                        </vs-button>
                        <vs-button
                            :active="technicalUnitOfTime === 'year'"
                            @click="changeTechnicalUnitOfTime('year')"
                            flat
                        >
                            Année
                        </vs-button>
                    </vs-button-group>
                </div>
                <div class="kiv-select">
                    <vs-select
                        placeholder="Select"
                        v-model="technicalUnitOfTime"
                    >
                        <vs-option label="Jour" value="day"> Jour </vs-option>
                        <vs-option label="Semaine" value="week">
                            Semaine
                        </vs-option>
                        <vs-option label="Mois" value="month"> Mois </vs-option>
                        <vs-option label="Année" value="year">
                            Année
                        </vs-option>
                    </vs-select>
                </div>
                <chartist
                    :class="{
                        'hide-content': !technicalExerciseStats.series.length,
                        labelsl: technicalExerciseStats.labels.length >= 25,
                        labelsm:
                            technicalExerciseStats.labels.length >= 12 &&
                            technicalExerciseStats.labels.length < 25,
                        labelss:
                            technicalExerciseStats.labels.length >= 5 &&
                            technicalExerciseStats.labels.length < 12,
                    }"
                    ratio="ct-major-second"
                    type="Bar"
                    :data="technicalExerciseStats"
                    :options="technicalChartOptions"
                    :event-handlers="eventHandlers"
                >
                    <div class="axisY-labels technical">
                        <div><p>Excellente</p></div>
                        <div><p>Médiocre</p></div>
                    </div>
                </chartist>
                <div class="btns-worksheets-stats">
                    <button
                        v-for="(worksheet, i) in getPatientWorksheets"
                        :key="i"
                        class="btn-toggle-worksheet-stats"
                        @click="
                            toggleHiddenWorksheetLine(
                                'technical',
                                i,
                                worksheet.id
                            )
                        "
                        :class="{
                            disactive: disableWorksheets['technical'].includes(
                                worksheet.id
                            ),
                        }"
                    >
                        <div
                            class="line-color"
                            :style="{
                                backgroundColor: colors[i],
                                border: `5px solid ${colors[i]}`,
                            }"
                        ></div>
                        <BtnChartWorksheetPartOfBody :worksheet="worksheet" />
                    </button>
                </div>
            </div>
            <div
                class="not-found"
                v-if="!loadingPatientWorksheets && !getPatientWorksheets.length"
            >
                <p>
                    <i class="far fa-calendar-minus"></i>
                    <span>Vous n'avez pas encore de statistiques</span>
                </p>
            </div>
            <div v-if="loadingPatientWorksheets" class="loading"></div>
        </section>
        <section class="kiv-block" id="difficulty">
            <h2><span>Difficultées perçues</span></h2>
            <div v-if="getPatientWorksheets.length" class="content">
                <div class="buttons">
                    <vs-button-group>
                        <vs-button
                            :active="difficultyUnitOfTime === 'day'"
                            @click="changeDifficultyUnitOfTime('day')"
                            flat
                        >
                            Jour
                        </vs-button>
                        <vs-button
                            :active="difficultyUnitOfTime === 'week'"
                            @click="changeDifficultyUnitOfTime('week')"
                            flat
                        >
                            Semaine
                        </vs-button>
                        <vs-button
                            :active="difficultyUnitOfTime === 'month'"
                            @click="changeDifficultyUnitOfTime('month')"
                            flat
                        >
                            Mois
                        </vs-button>
                        <vs-button
                            :active="difficultyUnitOfTime === 'year'"
                            @click="changeDifficultyUnitOfTime('year')"
                            flat
                        >
                            Année
                        </vs-button>
                    </vs-button-group>
                </div>
                <div class="kiv-select">
                    <vs-select
                        placeholder="Select"
                        v-model="difficultyUnitOfTime"
                    >
                        <vs-option label="Jour" value="day"> Jour </vs-option>
                        <vs-option label="Semaine" value="week">
                            Semaine
                        </vs-option>
                        <vs-option label="Mois" value="month"> Mois </vs-option>
                        <vs-option label="Année" value="year">
                            Année
                        </vs-option>
                    </vs-select>
                </div>
                <chartist
                    :class="{
                        'hide-content': !difficultyExerciseStats.series.length,
                        labelsl: difficultyExerciseStats.labels.length >= 25,
                        labelsm:
                            difficultyExerciseStats.labels.length >= 9 &&
                            difficultyExerciseStats.labels.length < 25,
                        labelss:
                            difficultyExerciseStats.labels.length >= 5 &&
                            difficultyExerciseStats.labels.length < 9,
                    }"
                    ratio="ct-major-second"
                    type="Line"
                    :data="difficultyExerciseStats"
                    :options="difficultyChartOptions"
                    :event-handlers="eventHandlers"
                >
                    <div class="axisY-labels difficulty">
                        <div><p>Vraiment trop difficile</p></div>
                        <div><p>Trop difficile</p></div>
                        <div><p>Ok</p></div>
                        <div><p>Trop facile</p></div>
                        <div><p>Beaucoup trop facile</p></div>
                    </div>
                </chartist>
                <div class="btns-worksheets-stats">
                    <button
                        v-for="(worksheet, i) in getPatientWorksheets"
                        :key="i"
                        class="btn-toggle-worksheet-stats"
                        @click="
                            toggleHiddenWorksheetLine(
                                'difficulty',
                                i,
                                worksheet.id
                            )
                        "
                        :class="{
                            disactive: disableWorksheets['difficulty'].includes(
                                worksheet.id
                            ),
                        }"
                    >
                        <div
                            class="line-color"
                            :style="{
                                backgroundColor: colors[i],
                                border: `5px solid ${colors[i]}`,
                            }"
                        ></div>
                        <BtnChartWorksheetPartOfBody :worksheet="worksheet" />
                    </button>
                </div>
            </div>
            <div
                class="not-found"
                v-if="!loadingPatientWorksheets && !getPatientWorksheets.length"
            >
                <p>
                    <i class="far fa-calendar-minus"></i>
                    <span>Vous n'avez pas encore de statistiques</span>
                </p>
            </div>
            <div v-if="loadingPatientWorksheets" class="loading"></div>
        </section>
    </div>
</template>

<script>
import BtnChartWorksheetPartOfBody from "../../components/BtnChartWorksheetPartOfBody.vue";
import moment from "moment";

export default {
    props: {
        patient: Object,
        patientWorksheets: Array,
        loadingPatientWorksheets: Boolean,
    },
    components: {
        BtnChartWorksheetPartOfBody,
    },
    data() {
        return {
            sensitivityUnitOfTime: "day",
            technicalUnitOfTime: "day",
            difficultyUnitOfTime: "day",
            chartOptions: {
                chartPadding: {
                    right: 6,
                },
                high: 10,
                low: 0,
                axisY: {
                    showLabel: false,
                    offset: 78,
                },
                plugins: [
                    this.$chartist.plugins.tooltip({
                        anchorToPoint: true,
                        appendToBody: true,
                        tooltipFnc: function (meta, value) {
                            return meta;
                        },
                    }),
                ],
            },
            eventHandlers: [
                {
                    event: "draw",
                    fn: (data) => {
                        if (data.type === "point") {
                            const circle = new this.$chartist.Svg(
                                "circle",
                                {
                                    cx: [data.x],
                                    cy: [data.y],
                                    r: [8],
                                    "ct:meta": data.meta,
                                },
                                "ct-point"
                            );
                            data.element.replace(circle).attr({
                                transform:
                                    "translate(" +
                                    data.axisX.stepLength / 2 +
                                    ")",
                            });
                        }
                        if (data.type === "line") {
                            data.element.attr({
                                transform:
                                    "translate(" +
                                    data.axisX.stepLength / 2 +
                                    ")",
                            });
                        }
                        if (data.type === "grid" && data.index === 0) {
                            data.element.attr({
                                class:
                                    data.element.attr(" class") +
                                    " border-grid",
                            });
                        }
                    },
                },
            ],
            colors: [
                "#ff6838",
                "#ffa126",
                "#5c91e1",
                "#8f67d1",
                "#57cdbf",
                "#f17cd7",
                "#93d2a5",
                "#b24788",
                "#c1b79d",
                "#ff564b",
                "#fb8b68",
                "#ffcb46",
                "#3dc863",
                "#ff6838",
                "#ffa126",
                "#5c91e1",
                "#8f67d1",
                "#57cdbf",
                "#f17cd7",
                "#93d2a5",
                "#b24788",
                "#c1b79d",
                "#ff564b",
                "#fb8b68",
                "#ffcb46",
                "#3dc863",
            ],
            iCoresspLine: {
                0: "a",
                1: "b",
                2: "c",
                3: "d",
                4: "e",
                5: "f",
                6: "g",
                7: "h",
                8: "i",
                9: "j",
                10: "k",
                11: "l",
                12: "m",
                13: "n",
                14: "o",
            },
            disableWorksheets: {
                sensitivity: [],
                technical: [],
                difficulty: [],
            },
        };
    },
    computed: {
        getPatientWorksheets() {
            return this.sortByCreatedAt(
                this.patientWorksheets.filter((w) => w.exerciseStats.length)
            );
        },
        sensitivityExerciseStats() {
            return this.generateExerciseStatsByCriterion("sensitivity");
        },
        sensitivityChartOptions() {
            return {
                ...this.chartOptions,
                axisY: {
                    showLabel: false,
                    offset: 45,
                },
            };
        },
        technicalExerciseStats() {
            return this.generateExerciseStatsByCriterion("technical");
        },
        technicalChartOptions() {
            return {
                ...this.chartOptions,
                seriesBarDistance: 13,
            };
        },
        difficultyExerciseStats() {
            return this.generateExerciseStatsByCriterion("difficulty");
        },
        difficultyChartOptions() {
            return {
                ...this.chartOptions,
            };
        },
    },
    methods: {
        sortByCreatedAt(array) {
            array.sort(function (a, b) {
                return new Date(a.createdAt) - new Date(b.createdAt);
            });
            return array;
        },
        generateExerciseStatsByCriterion(criterion) {
            let unitOfTime;

            if ("difficulty" === criterion) {
                unitOfTime = this.difficultyUnitOfTime;
            }

            if ("sensitivity" === criterion) {
                unitOfTime = this.sensitivityUnitOfTime;
            }

            if ("technical" === criterion) {
                unitOfTime = this.technicalUnitOfTime;
            }

            const exerciseStatsByUnitOfTime =
                this.filterExerciseStatsByUnitOfTime(
                    this.getPatientWorksheets,
                    unitOfTime
                );

            const labels = this.generateLabels(exerciseStatsByUnitOfTime);

            const labelsFormatedByUnitOfTime = this.formatLabelsByUnitOfTime(
                labels,
                unitOfTime
            );

            const dataSlice = this.getDataSlice(labels.length, unitOfTime);

            return {
                labels: labelsFormatedByUnitOfTime.filter(
                    (s, i) => i >= dataSlice
                ),
                series: exerciseStatsByUnitOfTime.map((w) => {
                    const exerciseStatsFormated =
                        this.generateChartAverageDataPointsByCriterion(
                            criterion,
                            w.exerciseStats,
                            labels,
                            unitOfTime
                        );

                    const truncateTitle =
                        w.title.length > 20
                            ? w.title.substring(0, 20) + "..."
                            : w.title;

                    return (w = {
                        name: `${truncateTitle} - ${w.partOfBody}`,
                        data: exerciseStatsFormated.filter(
                            (s, i) => i >= dataSlice
                        ),
                    });
                }),
            };
        },
        formatLabelsByUnitOfTime(labels, unitOfTime) {
            if ("day" === unitOfTime) {
                return labels.map((l) => {
                    return `${l.split("-")[2]}/${l.split("-")[1]}/${
                        l.split("-")[0]
                    }`;
                });
            }

            if ("week" === unitOfTime) {
                return labels.map((l) => {
                    return `${l.split("-")[2]}/${l.split("-")[1]}/${
                        l.split("-")[0]
                    }`;
                });
            }

            const months = {
                "01": "janv.",
                "02": "févr.",
                "03": "mars",
                "04": "avril",
                "05": "mai",
                "06": "juin",
                "07": "juill.",
                "08": "août",
                "09": "sept.",
                10: "oct.",
                11: "nov.",
                12: "déc.",
            };

            if ("month" === unitOfTime) {
                return labels.map((l) => {
                    return `${months[l.split("-")[1]]} ${l.split("-")[0]}`;
                });
            }

            return labels;
        },
        generateLabels(exerciseStatsByUnitOfTime) {
            const labels = [];
            exerciseStatsByUnitOfTime.forEach((w) => {
                Object.keys(w.exerciseStats).forEach((date) => {
                    if (!labels.includes(date.split("|")[0])) {
                        labels.push(date.split("|")[0]);
                    }
                });
            });
            return labels.sort(function (a, b) {
                return new Date(a) - new Date(b);
            });
        },
        toggleHiddenWorksheetLine(criterion, i, worksheetId) {
            const line = document.querySelector(
                `#${criterion} .ct-series-${this.iCoresspLine[i]}`
            );

            line.classList.toggle("hidden");

            if (this.disableWorksheets[criterion].includes(worksheetId)) {
                this.disableWorksheets[criterion].splice(
                    this.disableWorksheets[criterion].indexOf(worksheetId),
                    1
                );
            } else {
                this.disableWorksheets[criterion].push(worksheetId);
            }
        },
        changeSensitivityUnitOfTime(UnitOfTime) {
            this.sensitivityUnitOfTime = UnitOfTime;
        },
        changeTechnicalUnitOfTime(UnitOfTime) {
            this.technicalUnitOfTime = UnitOfTime;
        },
        changeDifficultyUnitOfTime(UnitOfTime) {
            this.difficultyUnitOfTime = UnitOfTime;
        },
        generateChartAverageDataPointsByCriterion(
            criterion,
            stats,
            labels,
            unitOfTime
        ) {
            let chartDataPoints = [];

            labels.forEach((l) => {
                chartDataPoints.push(null);
            });

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

                const dateSplit = date.split("|")[0];

                const ind = labels.indexOf(dateSplit);

                const pointDate = new Date(dateSplit);

                let textTooltip = "";

                if ("month" === unitOfTime) {
                    textTooltip = moment(pointDate).format("MMM YYYY");
                }

                if ("year" === unitOfTime) {
                    textTooltip = moment(pointDate).format("YYYY");
                }

                if ("day" === unitOfTime || "week" === unitOfTime) {
                    textTooltip = moment(pointDate).format("DD/MM/YYYY");
                }

                chartDataPoints[ind] = {
                    x: pointDate,
                    y: statsAverage,
                    meta: textTooltip,
                };
            }

            return chartDataPoints;
        },
        groupStatsByDay(worksheets) {
            return worksheets.map((w) => {
                return (w = {
                    ...w,
                    exerciseStats: w.exerciseStats.reduce((r, stat) => {
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
        groupStatsByWeek(worksheets) {
            return worksheets.map((w) => {
                return (w = {
                    ...w,
                    exerciseStats: w.exerciseStats.reduce((r, stat, i) => {
                        const doneDate = new Date(stat.doneAt);
                        const dayIndice =
                            doneDate.getDay() === 0 ? 7 : doneDate.getDay();

                        if (
                            !Object.keys(r).find((g) =>
                                g.includes(stat.doneAt.substr(0, 10))
                            )
                        ) {
                            let lastDayOfMonthDate = new Date(
                                doneDate.getFullYear(),
                                doneDate.getMonth() + 1,
                                0
                            );

                            let lastDayOfPrevMonthDate = new Date(
                                doneDate.getFullYear(),
                                doneDate.getMonth(),
                                0
                            );

                            let groupWeekName = "";

                            let startWeekDay =
                                doneDate.getDate() - (dayIndice - 1);
                            let startWeekMonth = doneDate.getMonth() + 1;
                            let startWeekYear = doneDate.getFullYear();

                            if (startWeekDay < 1) {
                                startWeekDay =
                                    lastDayOfPrevMonthDate.getDate() -
                                    Math.abs(startWeekDay);
                                if (startWeekMonth > 1) {
                                    startWeekMonth -= 1;
                                } else {
                                    startWeekMonth = 12;
                                    startWeekYear -= 1;
                                }
                                lastDayOfMonthDate = lastDayOfPrevMonthDate;
                            }

                            for (let i = 0; i < 7; i++) {
                                let day = startWeekDay;
                                let month = startWeekMonth;
                                let year = startWeekYear;

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

                                if (6 != i) {
                                    groupWeekName += "|";
                                }
                            }

                            if (!r[groupWeekName]) {
                                r[groupWeekName] = [];
                            }
                        }

                        r[
                            Object.keys(r).find((g) =>
                                g.includes(stat.doneAt.substr(0, 10))
                            )
                        ].push(stat);

                        return r;
                    }, {}),
                });
            });
        },
        groupStatsByMonth(worksheets) {
            return worksheets.map((w) => {
                return (w = {
                    ...w,
                    exerciseStats: w.exerciseStats.reduce((r, stat, i) => {
                        if (!r[stat.doneAt.substr(0, 7)]) {
                            r[stat.doneAt.substr(0, 7)] = [stat];
                        } else {
                            r[stat.doneAt.substr(0, 7)].push(stat);
                        }
                        return r;
                    }, {}),
                });
            });
        },
        groupStatsByYear(worksheets) {
            return worksheets.map((w) => {
                return (w = {
                    ...w,
                    exerciseStats: w.exerciseStats.reduce((r, stat, i) => {
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
        filterExerciseStatsByUnitOfTime(worksheets, unitOfTime) {
            let exerciseStatsByUnitOfTime = [];

            if ("day" === unitOfTime) {
                exerciseStatsByUnitOfTime = this.groupStatsByDay(worksheets);
            }

            if ("week" === unitOfTime) {
                exerciseStatsByUnitOfTime = this.groupStatsByWeek(worksheets);
            }

            if ("month" === unitOfTime) {
                exerciseStatsByUnitOfTime = this.groupStatsByMonth(worksheets);
            }

            if ("year" === unitOfTime) {
                exerciseStatsByUnitOfTime = this.groupStatsByYear(worksheets);
            }

            return exerciseStatsByUnitOfTime;
        },
        sensitivityFormatDateByUnitOfTime(value) {
            if ("day" === this.sensitivityUnitOfTime) {
                return moment(value).format("DD/MM/YYYY");
            }

            if ("week" === this.sensitivityUnitOfTime) {
                return moment(value).format("DD/MM/YYYY");
            }

            if ("month" === this.sensitivityUnitOfTime) {
                return moment(value).format("MMM YYYY");
            }

            if ("year" === this.sensitivityUnitOfTime) {
                return moment(value).format("YYYY");
            }
        },
        technicalFormatDateByUnitOfTime(value) {
            if ("day" === this.technicalUnitOfTime) {
                return moment(value).format("DD/MM/YYYY");
            }

            if ("week" === this.technicalUnitOfTime) {
                return moment(value).format("DD/MM/YYYY");
            }

            if ("month" === this.technicalUnitOfTime) {
                return moment(value).format("MMM YYYY");
            }

            if ("year" === this.technicalUnitOfTime) {
                return moment(value).format("YYYY");
            }
        },
        difficultyFormatDateByUnitOfTime(value) {
            if ("day" === this.difficultyUnitOfTime) {
                return moment(value).format("DD/MM/YYYY");
            }

            if ("week" === this.difficultyUnitOfTime) {
                return moment(value).format("DD/MM/YYYY");
            }

            if ("month" === this.difficultyUnitOfTime) {
                return moment(value).format("MMM YYYY");
            }

            if ("year" === this.difficultyUnitOfTime) {
                return moment(value).format("YYYY");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

#my-exercise-stats {
    grid-area: myexercisestats;
    position: relative;

    h2 {
        span {
            @media (max-width: 450px) {
                max-width: 60%;
                overflow: hidden;
                display: inline-block;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            @media (min-width: 576px) and (max-width: 610px) {
                max-width: 17rem;
                overflow: hidden;
                display: inline-block;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }

    .loading {
        min-height: 30rem;
        border-radius: 0.6rem;
    }

    .content {
        animation: 0.5s ease 0s forwards fadeEnter;
        opacity: 0;
    }

    #sensitivity,
    #technical {
        margin-bottom: 2rem;
    }

    .buttons,
    .kiv-select {
        position: absolute;
        top: 1.7rem;
        right: 2rem;
    }

    .buttons {
        display: none;
        @media (min-width: 576px) {
            display: block;
        }
    }

    .kiv-select {
        display: block;
        top: 1.1rem;
        right: 1.4rem;
        width: 10rem;

        @media (min-width: 370px) {
            top: 1.5rem;
            right: 2rem;
        }

        @media (min-width: 576px) {
            display: none;
        }
    }

    .ct-major-second {
        height: 30rem;

        &::before {
            padding-bottom: 0;
        }

        &.empty {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.1rem;
        }

        .axisY-labels {
            width: 80px;
            padding-left: 2px;
            padding-top: 14.4px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            div,
            i {
                position: relative;

                p {
                    font-size: 1.3rem;
                    margin: 0;
                    transform: translateY(-50%);
                }

                &::before {
                    content: "";
                    display: block;
                    width: 15px;
                    height: 1px;
                    background-color: $gray-middle;
                    position: absolute;
                    top: 0;
                }
            }

            div {
                &::before {
                    right: -15px;
                }
            }

            i {
                &::before {
                    right: -7.5px;
                }
            }

            &.sensitivity {
                height: 295.2px;
                width: 5.5rem;
                flex-direction: column-reverse;

                i {
                    height: 11%;
                    display: flex;
                    justify-content: center;
                    padding-right: 1.5rem;

                    img {
                        height: 70%;
                        transform: translateY(-50%);
                    }
                }
            }

            &.technical {
                height: 278.8px;
            }

            &.difficulty {
                height: 327px;

                div {
                    height: 20%;

                    &:first-child {
                        p {
                            transform: translateY(-10%);
                        }
                    }

                    &:last-child {
                        p {
                            transform: translateY(-85%);
                        }
                    }
                }
            }
        }
    }

    .btns-worksheets-stats {
        display: flex;
        margin-top: 0.8rem;
        flex-wrap: wrap;
        margin-left: 8.5rem;

        &.sensitivity {
            margin-left: 4.4rem;
        }

        .btn-toggle-worksheet-stats {
            display: flex;
            align-items: center;
            margin-right: 1.5rem;
            min-height: 3.5rem;
            cursor: pointer;
            border: none;
            background: transparent;

            .line-color {
                width: 10px;
                height: 10px;
                min-width: 10px;
                min-height: 10px;
                border-radius: 50%;
                margin-right: 0.6rem;
                transition: all 0.2s;
            }

            &.disactive {
                .line-color {
                    background-color: #f7f2e9 !important;
                    border: 5px solid #f7f2e9 !important;
                }
            }
        }
    }
}
</style>

