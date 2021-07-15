<template>
    <div data-app>
        <AddWorksheet :prescribedPatient="prescribedPatient" />
        <vs-navbar v-if="!prescribedPatient" center-collapsed v-model="active">
            <vs-navbar-item :active="active == 'worksheet'" id="worksheet">
                Fiches
            </vs-navbar-item>
            <vs-navbar-item
                :active="active == 'worksheet-template'"
                id="worksheet-template"
            >
                Modèles
            </vs-navbar-item>
        </vs-navbar>
        <div>
            <transition name="fade" mode="out-in">
                <div v-if="active == 'worksheet'" key="worksheet">
                    <List
                        :doctor="doctor"
                        :prescribedPatient="prescribedPatient"
                        :items="doctorWorksheets"
                        :config="listConfigWorksheets"
                        :createItemForm="createPatientForm"
                        :btnAddItemForm="btnAddPrescriptionForm"
                        :btnRemoveItemForm="btnRemoveWorksheetForm"
                    />
                </div>
                <div
                    v-if="active == 'worksheet-template'"
                    key="worksheet-template"
                >
                    <List
                        :doctor="doctor"
                        :prescribedPatient="prescribedPatient"
                        :items="doctorWorksheets"
                        :config="listConfigWorksheets"
                        :createItemForm="createPatientForm"
                        :btnAddItemForm="btnAddPrescriptionForm"
                        :btnRemoveItemForm="btnRemoveWorksheetForm"
                    />
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import List from "./components/List.vue";
import AddWorksheet from "./components/AddWorksheet.vue";
import f from "../services/function";

export default {
    name: "MyWorkSheetsPage",
    components: {
        AddWorksheet,
        List,
    },
    data() {
        return {
            doctor: null,
            doctorPrescriptions: null,
            prescribedPatient: null,
            active: "worksheet",
            btnAddPrescriptionForm: null,
            btnRemoveWorksheetForm: null,
            listConfigWorksheets: {
                target: "worksheet",
                searchPlaceholder: "Filtrer par titre",
                searchBoxConfig: {
                    title: "Rechercher un patient",
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
                                        class: "btn btn-primaki btn-xs lift lift-btn",
                                        icon: "fe fe-file-plus",
                                        text: "Prescrire",
                                    },
                                },
                            ],
                        },
                    ],
                    createItem: {
                        title: "Créer un patient",
                        target: "patient",
                        buttons: [
                            {
                                type: "createItem",
                                target: "patient-with-prescription",
                                content: {
                                    class: "valid-form-btn vs-button btn-primaki vs-button--default",
                                    icon: "fe fe-file-plus",
                                    text: "Créer et Prescrire",
                                },
                            },
                        ],
                    },
                    notFound: {
                        search: {
                            icon: "fe fe-user-minus",
                            message: "Aucun patient n'a été trouvé avec ",
                        },
                    },
                },
                items: [
                    {
                        title: "Date de création",
                        type: "date",
                        sort: true,
                        sortKey: "createdAt",
                    },
                    {
                        title: "Titre",
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
                                    class: "btn btn-primaki btn-xs lift lift-btn",
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
        this.prescribedPatient = data.prescribedPatient;
        this.createPatientForm = data.createPatientForm;
        this.doctorPrescriptions = data.doctorPrescriptions;
        this.btnAddPrescriptionForm = data.btnAddPrescriptionForm;
        this.btnRemoveWorksheetForm = data.btnRemoveWorksheetForm;
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
</style>
