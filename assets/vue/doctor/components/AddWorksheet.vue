<template>
    <div>
        <vs-button
            @click="boxToggle"
            class="btn-segondaki top-absolute btn-add-worksheet"
            v-if="prescribedPatient"
        >
            <i class="fe fe-file-plus"></i> Prescrire une nouvelle fiche
        </vs-button>
        <vs-button
            @click="boxToggle"
            class="btn-segondaki top-absolute btn-add-worksheet"
            v-else
        >
            <i class="fe fe-file-plus"></i> Ajouter une fiche
        </vs-button>
        <vs-dialog v-model="boxActive">
            <transition name="fade" mode="out-in">
                <div
                    v-if="!createWorksheetChoice"
                    class="btns-create-choice"
                    key="create-choice"
                >
                    <vs-button
                        class="btn btn-segondaki big btn-xs lift lift-btn"
                        @click="createWorksheetFromTemplate"
                    >
                        <i class="fe fe-file-plus"></i>
                        À partir d'un modèle
                    </vs-button>
                    <span>ou</span>
                    <a
                        class="btn btn-primaki btn-xs lift lift-btn"
                        :href="`/kine/${doctor.id}/create/worksheet`"
                    >
                        <i class="fe fe-file-plus"></i>
                        À partir de zéro
                    </a>
                </div>
                <Search
                    v-if="'template' === createWorksheetChoice"
                    key="template"
                    :items="worksheets"
                    :config="searchConfigWorksheet"
                    :prescribedPatient="prescribedPatient"
                />
            </transition>
        </vs-dialog>
    </div>
</template>

<script>
import f from "../../services/function";
import Search from "./Search.vue";

export default {
    name: "AddWorksheet",
    components: {
        Search,
    },
    props: {
        doctor: Object,
        worksheets: Array,
        prescribedPatient: Object,
    },
    data() {
        return {
            boxActive: false,
            createWorksheetChoice: null,
            searchConfigWorksheet: {
                title: "Rechercher un modèle de fiche",
                placeholder: "Titre de la fiche",
                target: "worksheet-prescribed-patient",
                items: [
                    {
                        type: "worksheet",
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
                notFound: {
                    search: {
                        icon: "fe fe-file-minus",
                        message: "Aucune fiche n'a été trouvée avec ",
                    },
                },
            },
        };
    },
    methods: {
        createWorksheetFromTemplate() {
            this.createWorksheetChoice = "template";
        },
        boxToggle() {
            this.createWorksheetChoice = "";
            // pour un loader sur les btns de la modale
            f.setLoaderToBtnValidationForm();

            this.boxActive = !this.boxActive;
        },
    },
};
</script>

<style lang="scss">
$primary: #ffab2c;

.btns-create-choice {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (min-width: 576px) {
        flex-direction: row;
    }

    .vs-button {
        flex: 2;
        width: 100%;

        @media (min-width: 1000px) {
            flex: 1;
            white-space: nowrap;
        }

        i {
            margin-right: 0.5em;
            margin-top: -0.15em;
        }
    }

    a {
        width: 100%;
        padding: 1em 0.95em;
        flex: 1;
    }

    span {
        margin: 0.5em 1.5em;
        color: grey;
    }
}
</style>
