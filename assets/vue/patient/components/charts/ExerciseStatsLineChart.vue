<script>
import { Line, mixins } from "vue-chartjs";
import moment from "moment";
const { reactiveProp } = mixins;
import f from "../../../services/function";

export default {
    extends: Line,
    props: ["options"],
    mixins: [reactiveProp],
    computed: {
        getOptions: function () {
            return this.options;
        },
    },
    data() {
        return {
            colors: ["#fbc351", "#abbcd5", "#f1f4f8", "#f7b83c"],
            gradients: [],
        };
    },
    watch: {
        chartData: function () {
            if (this.chartData.datasets.length) {
                this.chartData.datasets.forEach((w, i) => {
                    w.borderColor = this.colors[i];
                    w.pointBorderColor = this.colors[i];
                    w.pointBackgroundColor = this.colors[i];
                    w.backgroundColor = this.gradients[i];
                });
            }
            this.$data._chart.update();
        },
        options: function () {
            this.$data._chart.destroy();
            this.renderChart(this.chartData, this.getOptions);
        },
    },
    mixins: [reactiveProp],
    mounted() {
        moment.locale("fr-FR");

        this.colors.forEach((color, i) => {
            this.gradients[i] = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);

            this.gradients[i].addColorStop(0, f.hexToRgbA(color, 0.75));
            this.gradients[i].addColorStop(0.3, f.hexToRgbA(color, 0.45));
            this.gradients[i].addColorStop(0.7, f.hexToRgbA(color, 0.05));
            this.gradients[i].addColorStop(1, f.hexToRgbA(color, 0));
        });

        this.renderChart(this.chartData, this.getOptions);
    },
};
</script>
