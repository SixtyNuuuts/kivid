<template>
    <div>
        <vs-button @click="boxToggle" class="btn-segondaki top-absolute">
            <i class="fe fe-user-plus"></i> Ajouter un patient
        </vs-button>
        <vs-dialog v-model="boxActive">
            <Search
                :doctor="doctor"
                :items="patients"
                :config="searchConfigPatients"
                :btnAddItemForm="btnAddPatientForm"
                :createItemForm="createPatientForm"
            />
        </vs-dialog>
    </div>
</template>

<script>
import f from "../../services/function";
import Search from "./Search.vue";

export default {
    name: "AddPatient",
    components: {
        Search,
    },
    props: {
        doctor: Object,
        addPatient: String,
        patients: Array,
        createPatientForm: String,
        btnAddPatientForm: String,
    },
    mounted() {
        if ("add" === this.addPatient) {
            this.boxActive = true;
        }
    },
    data() {
        return {
            boxActive: false,
            searchConfigPatients: {
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
                                target: "patient",
                                content: {
                                    class: "btn btn-primaki btn-xs lift lift-btn",
                                    icon: "fe fe-user-plus",
                                    text: "Ajouter à mes patients",
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
                            target: "patient-without-prescription",
                            content: {
                                class: "valid-form-btn vs-button btn-segondaki vs-button vs-button--default me-2",
                                icon: "fe fe-file-minus",
                                text: "Créer sans prescription",
                            },
                        },
                        {
                            type: "createItem",
                            target: "patient-with-prescription",
                            content: {
                                class: "valid-form-btn vs-button btn-primaki vs-button vs-button--default",
                                icon: "fe fe-file-plus",
                                text: "Créer",
                            },
                        },
                    ],
                },
                notFound: {
                    search: {
                        icon: "fe fe-user-minus",
                        message: "Aucun patient n'a été trouvé avec ",
                    },
                    secondLine: {
                        message: "Créer un patient ci-dessous",
                    },
                },
            },
        };
    },
    methods: {
        boxToggle() {
            // pour un loader sur les btns de la modale
            f.setLoaderToBtnValidationForm();

            this.boxActive = !this.boxActive;
        },
    },
};
</script>

<style lang="scss">
$primary: #ffab2c;
</style>
