<template>
    <div>
        <vs-navbar center-collapsed v-model="active">
            <vs-navbar-item
                :active="active == 'prescription'"
                id="prescription"
            >
                Prescriptions
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'worksheet'" id="worksheet">
                Fiches
            </vs-navbar-item>
        </vs-navbar>
        <div>
            <transition name="fade" mode="out-in">
                <div v-if="active == 'prescription'" key="prescription">
                    <List
                        :items="doctorPrescriptions"
                        :config="listConfigPrescriptions"
                        :removeItemForm="removePrescriptionForm"
                    />
                </div>
                <div v-if="active == 'worksheet'" key="worksheet">
                    <List
                        :items="doctorWorksheets"
                        :config="listConfigWorksheets"
                        :createItemForm="createPrescriptionForm"
                        :removeItemForm="removeWorksheetForm"
                        :doctor="doctor"
                    />
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import List from "./components/List.vue";
import f from "../services/function";

export default {
    name: "MyWorkSheetsPage",
    components: {
        List,
    },
    data() {
        return {
            doctor: null,
            doctorPrescriptions: null,
            active: "prescription",
            createPrescriptionForm: null,
            removePrescriptionForm: null,
            removeWorksheetForm: null,
            listConfigPrescriptions: {
                target: "prescription",
                items: [
                    {
                        title: "Date de presc.",
                        type: "date",
                        sort: true,
                        sortKey: "createdAt",
                    },
                    {
                        title: "Fiche",
                        type: "title",
                        sort: true,
                        sortKey: "worksheet.title",
                    },
                    {
                        title: "Patient",
                        type: "user",
                        sort: true,
                        sortKey: "patient.lastname",
                    },
                    {
                        title: "Progression",
                        type: "progression",
                        sort: true,
                        sortKey: "progression",
                    },
                    {
                        title: null,
                        type: "actions",
                        sort: false,
                        sortKey: null,
                        buttons: [
                            {
                                type: "removeItem",
                                content: {
                                    icon: "fe fe-trash",
                                    tooltip: "Supprimer la prescription",
                                },
                            },
                        ],
                    },
                ],
                notFound: {
                    search: {
                        icon: "fe fe-file-minus",
                        message: "Aucune prescription n'a été trouvée avec ",
                    },
                    noData: {
                        icon: "fe fe-file-minus",
                        message: "Vous n'avez aucune prescription",
                    },
                },
            },
            listConfigWorksheets: {
                target: "worksheet",
                searchBoxConfig: {
                    title: "Rechercher un patient pour la prescription",
                    placeholder: "Nom - Prénom - Email",
                    target: "patient",
                    items: [
                        {
                            type: "user",
                        },
                        {
                            type: "actions",
                            buttons: [
                                {
                                    type: "addItem",
                                    target: "prescription",
                                    content: {
                                        class: "btn btn-primaki btn-xs lift",
                                        icon: "fe fe-file-plus",
                                        text: "Prescrire",
                                    },
                                },
                            ],
                        },
                    ],
                    notFound: {
                        search: {
                            icon: "fe fe-user-minus",
                            message: "Aucun patient n'a été trouvé avec ",
                        },
                    },
                },
                items: [
                    {
                        title: "Date de créa.",
                        type: "date",
                        sort: true,
                        sortKey: "createdAt",
                    },
                    {
                        title: "Nom",
                        type: "title",
                        sort: true,
                        sortKey: "title",
                    },
                    {
                        title: "Exercices",
                        type: "exercises-count",
                        sort: true,
                        sortKey: "exercises",
                    },
                    {
                        title: "Mots-Clés",
                        type: "exercises-tags",
                        sort: false,
                        sortKey: null,
                    },
                    {
                        title: null,
                        type: "actions",
                        sort: false,
                        sortKey: null,
                        buttons: [
                            {
                                type: "searchItem",
                                content: {
                                    class: "btn btn-primaki btn-xs lift",
                                    icon: "fe fe-file-plus",
                                    text: "Prescrire",
                                },
                            },
                            {
                                type: "removeItem",
                                content: {
                                    icon: "fe fe-trash",
                                    tooltip: "Supprimer la fiche",
                                },
                            },
                        ],
                    },
                ],
                notFound: {
                    search: {
                        icon: "fe fe-file-minus",
                        message: "Aucune fiche n'a été trouvée avec ",
                    },
                    noData: {
                        icon: "fe fe-file-minus",
                        message: "Vous n'avez aucune fiche",
                    },
                },
            },
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.doctorPrescriptions = data.doctorPrescriptions;
        this.createPrescriptionForm = data.createPrescriptionForm;
        this.removePrescriptionForm = data.removePrescriptionForm;
        this.removeWorksheetForm = data.removeWorksheetForm;
    },
    computed: {
        doctorWorksheets() {
            return this.doctorPrescriptions.reduce((r, prescription) => {
                if (prescription.worksheet) {
                    const worksheetIsAlreadyIncluded = r.filter(
                        (w) => w.id === prescription.worksheet.id
                    );

                    if (!worksheetIsAlreadyIncluded.length) {
                        r.push(prescription.worksheet);
                    }
                }
                return r;
            }, []);
        },
    },
    mounted() {
        f.generationOfTagsFromExercises(this.doctorWorksheets);
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
    transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
