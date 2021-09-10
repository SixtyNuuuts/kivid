<script>
import { Bar, mixins } from "vue-chartjs";
import moment from "moment";
const { reactiveProp } = mixins;
import f from "../../../services/function";

export default {
    extends: Bar,
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
            backgroundColors: [],
        };
    },
    watch: {
        chartData: function () {
            if (this.chartData.datasets.length) {
                this.chartData.datasets.forEach((w, i) => {
                    w.borderColor = this.colors[i];
                    w.backgroundColor = this.backgroundColors[i];
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
            this.backgroundColors[i] = f.hexToRgbA(color, 0.3);
        });

        this.renderChart(this.chartData, this.getOptions);
    },
};
</script>
