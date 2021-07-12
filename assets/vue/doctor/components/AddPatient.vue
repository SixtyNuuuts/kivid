<template>
    <div>
        <vs-button @click="boxToggle" class="btn-segondaki top-absolute">
            <i class="fe fe-user-plus"></i> Ajouter un patient
        </vs-button>
        <vs-dialog v-model="boxActive">
            <Search
                :items="patients"
                :config="searchConfigPatients"
                :addItemForm="addPatientForm"
            />

            <h2><i class="fe fe-user-plus"></i>Créer un patient</h2>
            <div v-html="createPatientForm"></div>
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
        patients: Array,
        createPatientForm: String,
        addPatientForm: String,
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

form[name="create_patient_form"] {
    .imputs {
        display: flex;
        flex-direction: column;

        .line {
            display: flex;
            flex-direction: column;
            @media (min-width: 576px) {
                flex-direction: row;
            }
        }
    }
    .buttons {
        display: flex;
        margin: 0.5em 0;
        line-height: 1.1;

        button {
            flex: 1;
            margin: 0;
            padding: 0.2em;
            font-size: 0.9em;
            &:first-child {
                margin-right: 0.75em;
            }
            i {
                margin-right: 0.3em;
            }
        }
    }
}
</style>
