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
        <vs-dialog
            v-model="triggerCreatePrescription"
            :loading="loadingDoctorPatientsList"
        >
            <h1 class="step">1 - Sélectionner un patient</h1>
            <PrescriptionForPatientSearch2
                :doctor="doctor"
                :doctorPatientsList="doctorPatientsList"
                :csrfTokenCreatePatient="csrfTokenCreatePatient"
                :csrfTokenCreatePrescription="csrfTokenCreatePrescription"
            />
            <div class="buttons">
                <vs-button
                    @click="validePatientChoice"
                    primary
                    size="large"
                    :class="{ disabled: !patientForPrescription }"
                >
                    <i class="fe fe-user-check"></i>
                    Valider le choix du patient
                </vs-button>
            </div>
        </vs-dialog>
        <vs-dialog
            v-model="modaleCreatePrescriptionChoice"
            class="template-choice"
        >
            <h1 class="step">2 - Créer la fiche</h1>

            <div class="buttons">
                <vs-button
                    @click="createPrescriptionFromScratch"
                    primary
                    size="large"
                >
                    <i class="fe fe-file-plus"></i>
                    Créer de zéro
                </vs-button>
                <span v-if="worksheetTemplates.length">ou</span>
                <vs-button
                    v-if="worksheetTemplates.length"
                    @click="createPrescriptionFromTemplate"
                    primary
                    size="large"
                >
                    <i class="fe fe-file-plus"></i>
                    Créer à partir d'un autre modèle
                </vs-button>
            </div>
        </vs-dialog>
        <vs-dialog
            width="450px"
            v-model="modalCreatePrescriptionFromTemplate"
            :loading="!worksheetTemplates.length"
            class="template-search"
        >
            <WorksheetTemplateSearch2
                :doctor="doctor"
                :worksheetTemplatesList="worksheetTemplates"
            />
        </vs-dialog>
    </div>
</template>

<script>
import PrescriptionsList from "./components/PrescriptionsList.vue";
import WorksheetTemplatesList from "./components/WorksheetTemplatesList.vue";
import f from "../services/function";
import PrescriptionForPatientSearch2 from "./components/PrescriptionForPatientSearch2.vue";
import WorksheetTemplateSearch2 from "./components/WorksheetTemplateSearch2.vue";

export default {
    name: "MyWorkSheetsPage",
    components: {
        PrescriptionsList,
        WorksheetTemplatesList,
        PrescriptionForPatientSearch2,
        WorksheetTemplateSearch2,
    },
    data() {
        return {
            doctor: null,
            patientForPrescription: null,
            triggerCreatePrescription: false,
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
            doctorPatientsList: [],
            loadingDoctorPatientsList: false,
            modaleCreatePrescriptionChoice: false,
            modalCreatePrescriptionFromTemplate: false,
        };
    },
    methods: {
        validePatientChoice() {
            this.modaleCreatePrescriptionChoice = true;
        },
        createPrescriptionFromTemplate() {
            return (this.modalCreatePrescriptionFromTemplate =
                !this.modalCreatePrescriptionFromTemplate);
        },
        createPrescriptionFromScratch() {
            const idPatient = this.patientForPrescription.id;
            document.location.href = `/kine/${this.doctor.id}/fiche/creation/0/${idPatient}`;
        },
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

        this.loadingDoctorPatientsList = true;

        if (!this.patientForPrescription) {
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

        this.loadingDoctorPrescriptionsList = this.$vs.loading({
            text: "chargement",
            type: "border",
        });

        this.axios
            .get(`/kine/${this.doctor.id}/get/patients/`)
            .then((response) => {
                this.doctorPatientsList = response.data;
                this.loadingDoctorPatientsList = false;
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data.detail);
                }

                this.loadingDoctorPatientsList = false;
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
                if (error.response) {
                    console.log(error.response.data.detail);
                }

                this.loadingWorksheetTemplatesList.close();
                this.loadingWorksheetTemplatesList = null;
            });
    },
    mounted() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.triggerCreatePrescription =
            "true" === data.triggerCreatePrescription ? true : false;
    },
};
</script>

<style lang="scss" scoped>
.buttons:not(.template-choice) {
    display: flex;
    justify-content: flex-end;
    margin-top: 1em;

    > button {
        width: 100%;
        margin: 0;

        &.disabled {
            pointer-events: none;
            opacity: 0.5;
        }
    }
}
.template-choice {
    z-index: 1000000;

    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        > button {
            margin: 1em;
            i {
                margin-right: 3px;
                margin-top: -1px;
                font-size: 0.95em;
            }
        }
    }
}

.template-search {
    z-index: 2000000;
}

h1.step {
    font-size: 1.4em;
    color: #abbcd5;
    display: flex;
    justify-content: center;
    margin-bottom: 0.7em;
}
</style>
