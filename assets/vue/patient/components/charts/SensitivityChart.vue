<script>
import { Line } from "vue-chartjs";

export default {
    extends: Line,
    props: {
        patient: Object,
    },
    data() {
        return {
            sensitivityStats: [],
            sensitivityStatsValues: [],
            sensitivityStatsLabels: [],
            colors: ["#fbc351", "#f1f4f8", "#abbcd5", "#f7b83c"],
            gradients: [],
        };
    },
    methods: {
        filterExerciseStatsBy(patientExerciseStats, criterion) {
            return patientExerciseStats.map((p) => {
                return (p = {
                    worksheetTitle: p.worksheetTitle,
                    worksheetPartOfBody: p.worksheetPartOfBody,
                    stats: this.sortByDoneDate(
                        p.stats.filter((s) => criterion === s.criterion)
                    ),
                });
            });
        },
        cleanUpExerciseStats(exerciseStats) {
            return exerciseStats.map((p) => {
                return (p = {
                    worksheetTitle: p.worksheet.title,
                    worksheetPartOfBody: p.worksheet.partOfBody,
                    stats: p.worksheetSessions.reduce((r, ws) => {
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
                    }, []),
                });
            });
        },
        sortByDoneDate(stats) {
            stats.sort(function (a, b) {
                return new Date(a.doneAt) - new Date(b.doneAt);
            });
            return stats;
        },
    },
    mounted() {
        this.loadingPatientExerciseStats = this.$vs.loading({
            text: "chargement",
            type: "border",
        });

        this.axios
            .get(`/patient/${this.patient.id}/get/exercise-stats`)
            .then((response) => {
                this.sensitivityStats = this.filterExerciseStatsBy(
                    this.cleanUpExerciseStats(response.data),
                    "sensitivity"
                );

                this.sensitivityStatsValues = this.sensitivityStats.map(
                    (w, i) => {
                        return (w = {
                            label: `${w.worksheetTitle} - ${w.worksheetPartOfBody}`,
                            borderColor: this.colors[i],
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "white",
                            backgroundColor: this.gradients[i],
                            data: w.stats.map(
                                (s) =>
                                    (s = { x: new Date(s.doneAt), y: s.rating })
                            ),
                        });
                    }
                );

                this.sensitivityStatsLabels = this.sensitivityStats.map((w) => {
                    return (w = [w.stats.map((s) => (s = s.doneAt))]);
                });

                this.renderChart(
                    {
                        // labels: [
                        //     "January",
                        //     "February",
                        //     "March",
                        //     "April",
                        //     "May",
                        //     "June",
                        //     "July",
                        // ],
                        // datasets: [
                        //     {
                        //         label: "Data One",
                        //         borderColor: "#FC2525",
                        //         pointBackgroundColor: "white",
                        //         borderWidth: 1,
                        //         pointBorderColor: "white",
                        //         backgroundColor: this.gradient,
                        //         data: [40, 39, 10, 40, 39, 80, 40],
                        //     },
                        //     {
                        //         label: "Data Two",
                        //         borderColor: "#05CBE1",
                        //         pointBackgroundColor: "white",
                        //         pointBorderColor: "white",
                        //         borderWidth: 1,
                        //         backgroundColor: this.gradient2,
                        //         data: [60, 55, 32, 10, 2, 12, 53],
                        //     },
                        // ],
                        // labels: [
                        //     "January",
                        //     "February",
                        //     "March",
                        //     "April",
                        //     "May",
                        //     "June",
                        //     "July",
                        //     "July",
                        //     "July",
                        // ],
                        datasets: this.sensitivityStatsValues,
                    },
                    {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [
                                {
                                    type: "time",
                                    time: {
                                        unit: "month",
                                    },
                                },
                            ],
                        },
                    }
                );

                this.loadingPatientExerciseStats.close();
                this.loadingPatientExerciseStats = null;
            })
            .catch((error) => {
                console.log(error);

                this.loadingPatientExerciseStats.close();
                this.loadingPatientExerciseStats = null;
            });

        this.gradients[0] = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450);
        this.gradients[1] = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450);
        this.gradients[2] = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450);
        this.gradients[3] = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450);
        this.gradients[4] = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450);

        this.gradients[0].addColorStop(0, "rgba(251, 195, 81, 0.5)");
        this.gradients[0].addColorStop(0.5, "rgba(251, 195, 81, 0.25)");
        this.gradients[0].addColorStop(1, "rgba(251, 195, 81, 0)");

        this.gradients[1].addColorStop(0, "rgba(241, 244, 248, 0.9)");
        this.gradients[1].addColorStop(0.5, "rgba(241, 244, 248, 0.25)");
        this.gradients[1].addColorStop(1, "rgba(241, 244, 248, 0)");

        this.gradients[2].addColorStop(0, "rgba(171, 188, 213, 0.5)");
        this.gradients[2].addColorStop(0.5, "rgba(171, 188, 213, 0.25)");
        this.gradients[2].addColorStop(1, "rgba(171, 188, 213, 0)");

        this.gradients[3].addColorStop(0, "rgba(247, 184, 60, 0.9)");
        this.gradients[3].addColorStop(0.5, "rgba(247, 184, 60, 0.25)");
        this.gradients[3].addColorStop(1, "rgba(247, 184, 60, 0)");
    },
};
</script>
