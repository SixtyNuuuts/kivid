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
        <vs-dialog v-model="boxActive"> </vs-dialog>
    </div>
</template>

<script>
import f from "../../services/function";

export default {
    name: "AddWorksheet",
    props: {
        prescribedPatient: Object,
    },
    data() {
        return {
            boxActive: false,
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
