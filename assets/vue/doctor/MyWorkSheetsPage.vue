<template>
    <div>
        <vs-navbar center-collapsed v-model="active">
            <vs-navbar-item :active="active == 'worksheet'" id="worksheet">
                Fiches
            </vs-navbar-item>
            <vs-navbar-item
                :active="active == 'prescription'"
                id="prescription"
            >
                Prescriptions
            </vs-navbar-item>
        </vs-navbar>
        <div>
            <transition name="fade">
                <div v-if="active == 'worksheet'">
                    <WorkSheetList :doctorWorksheets="doctorWorksheets" />
                </div>
            </transition>
            <transition name="fade2">
                <div v-if="active == 'prescription'">
                    <PrescriptionList
                        :doctorPrescriptions="doctorPrescriptions"
                    />
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import PrescriptionList from "./components/PrescriptionList.vue";
import WorkSheetList from "./components/WorkSheetList.vue";

export default {
    name: "MyWorkSheetsPage",
    components: {
        PrescriptionList,
        WorkSheetList,
    },
    data: () => ({
        doctor: null,
        doctorPrescriptions: null,
        active: "worksheet",
    }),
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.doctorPrescriptions = data.doctorPrescriptions;
    },
    computed: {
        doctorWorksheets() {
            return this.doctorPrescriptions.map((prescription) => {
                return prescription.worksheet;
            });
        },
    },
};
</script>

<style lang="scss">
$primary: #ffab2c;

.vs-navbar-content {
    position: relative;
    margin-top: -1em;
    background-color: transparent;

    .vs-navbar__line {
        background-color: $primary;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 10s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
