<template>
    <div id="vue">
        <vs-navbar v-model="activeTab">
            <vs-navbar-item
                :active="activeTab == 'prescriptions'"
                id="prescriptions"
                v-if="!patientForPrescription"
            >
                Prescriptions
            </vs-navbar-item>
            <vs-navbar-item :active="activeTab == 'modeles'" id="modeles">
                Modèles de fiche
            </vs-navbar-item>
        </vs-navbar>

        <transition name="fade" mode="out-in">
            <div v-if="activeTab == 'prescriptions'" key="prescriptions">
                <PrescriptionsList
                    :doctor="doctor"
                    :doctorPrescriptions="doctorPrescriptions"
                    :csrfTokenRemovePrescription="csrfTokenRemovePrescription"
                />
            </div>
            <div v-if="activeTab == 'modeles'" key="modeles">
                <WorksheetTemplatesList
                    :doctor="doctor"
                    :patientForPrescription="patientForPrescription"
                    :worksheetTemplates="worksheetTemplates"
                    :csrfTokenRemoveWorksheetTemplate="
                        csrfTokenRemoveWorksheetTemplate
                    "
                    :csrfTokenCreatePatient="csrfTokenCreatePatient"
                    :csrfTokenCreatePrescription="csrfTokenCreatePrescription"
                    :tagsFromExercises="tagsFromExercises"
                />
            </div>
        </transition>
    </div>
</template>

<script>
import PrescriptionsList from "./components/PrescriptionsList.vue";
import WorksheetTemplatesList from "./components/WorksheetTemplatesList.vue";
import f from "../services/function";

export default {
    name: "MyWorkSheetsPage",
    components: {
        PrescriptionsList,
        WorksheetTemplatesList,
    },
    data() {
        return {
            doctor: null,
            patientForPrescription: null,
            activeTab: "prescriptions",
            loadingDoctorPrescriptionsList: null,
            loadingWorksheetTemplatesList: null,
            doctorPrescriptions: [],
            worksheetTemplates: [],
            tagsFromExercises: [],
            csrfTokenRemovePrescription: null,
            csrfTokenRemoveWorksheetTemplate: null,
            csrfTokenCreatePatient: null,
            csrfTokenCreatePrescription: null,
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.activeTab = data.listType;
        this.patientForPrescription = data.patientForPrescription;
        this.csrfTokenRemovePrescription = data.csrfTokenRemovePrescription;
        this.csrfTokenRemoveWorksheetTemplate =
            data.csrfTokenRemoveWorksheetTemplate;
        this.csrfTokenCreatePatient = data.csrfTokenCreatePatient;
        this.csrfTokenCreatePrescription = data.csrfTokenCreatePrescription;

        if (!this.patientForPrescription) {
            this.loadingDoctorPrescriptionsList = this.$vs.loading({
                text: "chargement",
                type: "border",
            });

            this.axios
                .get(`/kine/${this.doctor.id}/get/prescriptions`)
                .then((response) => {
                    this.doctorPrescriptions = response.data;

                    this.loadingDoctorPrescriptionsList.close();
                    this.loadingDoctorPrescriptionsList = null;
                })
                .catch((error) => {
                    console.log(error.response);
                    this.loadingDoctorPrescriptionsList.close();
                    this.loadingDoctorPrescriptionsList = null;
                });
        }

        this.loadingWorksheetTemplatesList = this.$vs.loading({
            text: "chargement",
            type: "border",
        });

        this.axios
            .get(`/get/worksheet-templates`)
            .then((response) => {
                this.worksheetTemplates = response.data;
                this.tagsFromExercises = f.generateTagsFromExercises(
                    this.worksheetTemplates
                );

                this.loadingWorksheetTemplatesList.close();
                this.loadingWorksheetTemplatesList = null;
            })
            .catch((error) => {
                console.log(error);
                this.loadingWorksheetTemplatesList.close();
                this.loadingWorksheetTemplatesList = null;
            });
    },
};
</script>
