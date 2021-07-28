<template>
    <div>
        <vs-button
            circle
            class="btn-top-absolute"
            @click="createWorksheetTemplate"
        >
            <i class="fe fe-file-plus"></i>
            Créer un modèle
        </vs-button>
        <vs-table>
            <template #header>
                <vs-input
                    v-model="filter"
                    primary
                    placeholder="Filtrer par fiche et/ou créateur"
                    @keyup="page = 1"
                >
                    <template #icon>
                        <i class="fe fe-search"></i>
                    </template>
                </vs-input>
                <div class="only-my-templates">
                    <span
                        >Ne voir que <br />
                        mes modèles</span
                    >
                    <vs-switch @click="page = 1" v-model="onlyMyTemplates" />
                </div>
                <multiselect
                    v-model="selectedTags"
                    :options="tagsFromAll"
                    @input="page = 1"
                    placeholder="Mots-Clés"
                    :multiple="true"
                    selectLabel=""
                    selectedLabel="sélectionné"
                    deselectLabel=""
                >
                    <span slot="noResult">
                        Aucun mot-clé ne correspond à ce texte
                    </span>
                    <template slot="singleLabel" slot-scope="props">
                        <span>{{ props.option }}</span>
                    </template>
                    <template slot="option" slot-scope="props">
                        <span>{{ props.option }}</span>
                    </template>
                </multiselect>
            </template>
            <template #thead>
                <vs-tr>
                    <vs-th
                        sort
                        @click="
                            worksheetTemplatesListArray = sortData(
                                $event,
                                worksheetTemplatesListArray,
                                'createdAt'
                            )
                        "
                    >
                        Date de création
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            worksheetTemplatesListArray = sortData(
                                $event,
                                worksheetTemplatesListArray,
                                'title'
                            )
                        "
                    >
                        Titre
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            worksheetTemplatesListArray = sortData(
                                $event,
                                worksheetTemplatesListArray,
                                'exercises'
                            )
                        "
                    >
                        Exercices
                    </vs-th>
                    <vs-th>Mots-Clés</vs-th>
                    <vs-th
                        sort
                        @click="
                            worksheetTemplatesListArray = sortData(
                                $event,
                                worksheetTemplatesListArray,
                                'doctor.lastname'
                            )
                        "
                    >
                        Créateur du modèle
                    </vs-th>
                    <vs-th></vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr
                    :key="i"
                    v-for="(worksheetTemplate, i) in getPage(
                        getSearch(worksheetTemplatesListArray, filter),
                        page,
                        max
                    )"
                >
                    <vs-td>
                        {{ formatDate(worksheetTemplate.createdAt) }}
                    </vs-td>
                    <vs-td>
                        {{ worksheetTemplate.title }}
                    </vs-td>
                    <vs-td>
                        {{ worksheetTemplate.exercises.length }}
                    </vs-td>
                    <vs-td>
                        <div
                            class="tags-chip tags-chip-raised"
                            v-for="tag in worksheetTemplate.exercisesTags"
                            :key="tag"
                        >
                            {{ tag }}
                        </div>
                    </vs-td>
                    <vs-td>
                        <div v-if="worksheetTemplate.doctor" class="user">
                            <vs-avatar circle size="25">
                                <img
                                    :src="
                                        worksheetTemplate.doctor.avatarUrl
                                            ? worksheetTemplate.doctor.avatarUrl
                                            : '/img/avatar-default.svg'
                                    "
                                    alt="avatar du kiné"
                                />
                            </vs-avatar>
                            <p>
                                {{ worksheetTemplate.doctor.lastname }}
                                {{ worksheetTemplate.doctor.firstname }}
                            </p>
                        </div>
                    </vs-td>
                    <vs-td>
                        <div>
                            <vs-button
                                v-if="patientForPrescription"
                                class="btn-avatar"
                                circle
                                size="small"
                                @click="
                                    prescriptionForPatient(worksheetTemplate)
                                "
                                :loading="
                                    btnLoadingPrescription ===
                                    worksheetTemplate.id
                                "
                            >
                                <vs-avatar circle size="18">
                                    <img
                                        :src="
                                            patientForPrescription.avatarUrl
                                                ? patientForPrescription.avatarUrl
                                                : '/img/avatar-default.svg'
                                        "
                                        alt="Avatar du patient"
                                    />
                                </vs-avatar>
                                Prescrire
                            </vs-button>
                            <vs-button
                                v-else
                                circle
                                size="small"
                                @click="prescription(worksheetTemplate)"
                            >
                                <i class="fe fe-file-plus"></i>
                                Prescrire
                            </vs-button>
                            <vs-tooltip>
                                <vs-button
                                    class="btn-edit"
                                    :class="{
                                        disabled:
                                            worksheetTemplate.doctor.id !=
                                            doctor.id,
                                    }"
                                    @click="
                                        editWorksheetTemplate(worksheetTemplate)
                                    "
                                >
                                    <i class="fe fe-edit-2"></i>
                                </vs-button>
                                <template
                                    v-if="
                                        worksheetTemplate.doctor.id != doctor.id
                                    "
                                    #tooltip
                                >
                                    Vous n'êtes pas le créateur de ce modèle
                                </template>
                                <template v-else #tooltip>
                                    Editer le modèle
                                </template>
                            </vs-tooltip>
                            <vs-tooltip>
                                <vs-button
                                    class="btn-remove"
                                    :class="{
                                        disabled:
                                            worksheetTemplate.doctor.id !=
                                            doctor.id,
                                    }"
                                    @click="
                                        removeWorksheetTemplate(
                                            worksheetTemplate
                                        )
                                    "
                                >
                                    <i class="fe fe-trash"></i>
                                </vs-button>
                                <template
                                    v-if="
                                        worksheetTemplate.doctor.id != doctor.id
                                    "
                                    #tooltip
                                >
                                    Vous n'êtes pas le créateur de ce modèle
                                </template>
                                <template v-else #tooltip>
                                    Supprimer le modèle
                                </template>
                            </vs-tooltip>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination
                    v-model="page"
                    :length="
                        getLength(
                            getSearch(worksheetTemplatesListArray, filter),
                            max
                        )
                    "
                />
            </template>
            <template #notFound>
                <div v-if="worksheetTemplatesListArray.length">
                    <div v-if="filter">
                        <i class="fe fe-file-minus"></i>
                        Aucun modèle de fiche n'a été trouvé avec "<strong>{{
                            filter
                        }}</strong
                        >".
                    </div>
                    <div v-else>
                        <i class="fe fe-file-minus"></i>
                        Aucun modèle de fiche n'a été trouvé.
                    </div>
                </div>
                <div v-else>...</div>
            </template>
        </vs-table>
        <vs-dialog
            width="450px"
            v-model="modalPrescription"
            :loading="!doctorPatientsList.length"
        >
            <PrescriptionForPatientSearch
                :doctor="doctor"
                :doctorPatientsList="doctorPatientsList"
                :csrfTokenCreatePatient="csrfTokenCreatePatient"
                :csrfTokenCreatePrescription="csrfTokenCreatePrescription"
            />
        </vs-dialog>
        <vs-dialog
            width="450px"
            v-model="modalCreateWorksheetFromTemplate"
            :loading="!worksheetTemplatesListArray.length"
        >
            <WorksheetTemplateSearch
                :doctor="doctor"
                :worksheetTemplatesList="worksheetTemplatesListArray"
            />
        </vs-dialog>
        <vs-dialog v-model="modalCreateWorksheetTemplateChoice">
            <div class="buttons">
                <vs-button
                    @click="createWorksheetTemplateFromScratch"
                    :loading="btnLoadingValidCreateWorksheetTemplateFromScratch"
                    primary
                    size="large"
                >
                    <i class="fe fe-file-plus"></i>
                    Créer de zéro
                </vs-button>
                <span>ou</span>
                <vs-button
                    @click="createWorksheetTemplateFromTemplate"
                    primary
                    size="large"
                >
                    <i class="fe fe-file-plus"></i>
                    Créer à partir d'un autre modèle
                </vs-button>
            </div>
        </vs-dialog>
        <vs-dialog
            class="modal-confirm"
            v-model="modalConfirmRemoveWorksheetTemplate"
        >
            <p class="modal-confirm-text">Confirmer la suppression de</p>

            <div class="modal-confirm-detail remove-item">
                <div class="modal-confirm-icon remove-item">
                    <i class="fe fe-trash"></i>
                </div>
                <p>
                    <span>
                        {{ removeWorksheetTemplateDetails.title }}
                    </span>
                </p>
            </div>

            <div class="modal-confirm-buttons">
                <vs-button
                    @click="modalConfirmRemoveWorksheetTemplate = false"
                    dark
                    transparent
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validRemoveWorksheetTemplate"
                    :loading="btnLoadingValidRemoveWorksheetTemplate"
                    danger
                    transparent
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import f from "../../services/function";
import Multiselect from "vue-multiselect";
import PrescriptionForPatientSearch from "./PrescriptionForPatientSearch.vue";
import WorksheetTemplateSearch from "./WorksheetTemplateSearch.vue";

export default {
    name: "WorksheetTemplatesList",
    components: {
        Multiselect,
        PrescriptionForPatientSearch,
        WorksheetTemplateSearch,
    },
    props: {
        doctor: Object,
        patientForPrescription: Object,
        worksheetTemplates: Array,
        tagsFromExercises: Array,
        csrfTokenRemoveWorksheetTemplate: String,
        csrfTokenCreatePatient: String,
        csrfTokenCreatePrescription: String,
    },
    data() {
        return {
            filter: "",
            page: 1,
            max: 10,
            worksheetTemplatesList: [],
            onlyMyTemplates: false,
            btnLoadingPrescription: false,
            modalCreateWorksheetTemplateChoice: false,
            btnLoadingValidCreateWorksheetTemplateFromScratch: false,
            modalConfirmRemoveWorksheetTemplate: false,
            removeWorksheetTemplateDetails: {},
            btnLoadingValidRemoveWorksheetTemplate: false,
            selectedTags: [],
            modalPrescription: false,
            prescriptiedWorksheetTemplate: {},
            doctorPatientsList: [],
            modalCreateWorksheetFromTemplate: false,
        };
    },
    computed: {
        worksheetTemplatesListArray: {
            get() {
                let worksheetTemplatesList;
                if (!this.worksheetTemplatesList.length) {
                    worksheetTemplatesList = this.worksheetTemplates;
                } else {
                    worksheetTemplatesList = this.worksheetTemplatesList;
                }

                return worksheetTemplatesList;
            },
            set(newWorksheetTemplatesList) {
                this.worksheetTemplatesList = newWorksheetTemplatesList;
            },
        },
        tagsFromAll() {
            return f.getTagsFromAll(this.tagsFromExercises);
        },
    },
    methods: {
        createWorksheetTemplate() {
            return (this.modalCreateWorksheetTemplateChoice =
                !this.modalCreateWorksheetTemplateChoice);
        },
        prescription(worksheetTemplate) {
            this.prescriptiedWorksheetTemplate = worksheetTemplate;

            return (this.modalPrescription = !this.modalPrescription);
        },
        prescriptionForPatient(worksheetTemplate) {
            this.btnLoadingPrescription = worksheetTemplate.id;

            const idPatient = this.patientForPrescription.id;
            const idWorksheet = worksheetTemplate.id;
            document.location.href = `/kine/${this.doctor.id}/fiche/creation/${idWorksheet}/${idPatient}`;
        },
        removeWorksheetTemplate(worksheetTemplate) {
            this.removeWorksheetTemplateDetails = worksheetTemplate;

            return (this.modalConfirmRemoveWorksheetTemplate =
                !this.modalConfirmRemoveWorksheetTemplate);
        },
        editWorksheetTemplate(worksheetTemplate) {
            document.location.href = `/kine/${this.doctor.id}/fiche/edition/${worksheetTemplate.id}`;
        },
        createWorksheetTemplateFromTemplate() {
            return (this.modalCreateWorksheetFromTemplate =
                !this.modalCreateWorksheetFromTemplate);
        },
        createWorksheetTemplateFromScratch() {
            this.btnLoadingValidCreateWorksheetTemplateFromScratch = true;

            document.location.href = `/kine/${this.doctor.id}/fiche/creation/`;
        },
        validRemoveWorksheetTemplate() {
            this.btnLoadingValidRemoveWorksheetTemplate = true;

            this.axios
                .post(`/kine/${this.doctor.id}/remove/worksheet-template`, {
                    _token: this.csrfTokenRemoveWorksheetTemplate,
                    worksheetTemplate_id:
                        this.removeWorksheetTemplateDetails.id,
                })
                .then((response) => {
                    this.openNotification(
                        `<strong>Suppression du modèle</strong>`,
                        `${response.data}`,
                        "top-right",
                        "success",
                        "<i class='fe fe-check-circle'></i>"
                    );
                    this.worksheetTemplatesListArray.splice(
                        this.worksheetTemplatesListArray.indexOf(
                            this.removeWorksheetTemplateDetails
                        ),
                        1
                    );
                    this.btnLoadingValidRemoveWorksheetTemplate = false;
                    this.modalConfirmRemoveWorksheetTemplate = false;
                })
                .catch((error) => {
                    this.openNotification(
                        `<strong>Suppression du modèle : Erreur</strong>`,
                        `${error.response.data}`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                    this.btnLoadingValidRemoveWorksheetTemplate = false;
                    this.modalConfirmRemoveWorksheetTemplate = false;
                });
        },
        openNotification(title, text, position, color, icon) {
            this.$vs.notification({
                progress: "auto",
                flat: true,
                icon,
                color,
                position,
                title,
                text,
            });
        },
        getPage(data, page, maxItems) {
            return f.getPage(data, page, maxItems);
        },
        getLength(data, maxItems) {
            return f.getLength(data, maxItems);
        },
        getSearch(data, filter) {
            let worksheetTemplatesFiltered = f.getSearch(data, filter);

            if (this.selectedTags.length) {
                worksheetTemplatesFiltered = worksheetTemplatesFiltered.filter(
                    (w) => {
                        let result = false;

                        if (w.exercisesTags) {
                            w.exercisesTags.forEach((tag) => {
                                if (this.selectedTags.includes(tag)) {
                                    result = true;
                                }
                            });
                        }

                        return result;
                    }
                );
            }

            if (this.onlyMyTemplates) {
                worksheetTemplatesFiltered = worksheetTemplatesFiltered.filter(
                    (w) => w.doctor.id === this.doctor.id
                );
            }

            return worksheetTemplatesFiltered;
        },
        sortData(evt, data, sortKey, type) {
            return f.sortData(evt, data, sortKey, type);
        },
        formatDate(datetime) {
            return f.formatDate(datetime);
        },
    },
    created() {
        this.axios
            .get(`/kine/${this.doctor.id}/get/patients/`)
            .then((response) => {
                this.doctorPatientsList = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.vs-table__th:nth-child(1) {
    width: 10% !important;
    @media (max-width: 515px) {
        width: 0% !important;
    }
}

.vs-table__th:nth-child(2) {
    width: 35% !important;
    @media (max-width: 515px) {
        width: 0% !important;
    }
}

.vs-table__th:nth-child(3) {
    width: 10% !important;
    @media (max-width: 515px) {
        width: 0% !important;
    }
}

.vs-table__th:nth-child(4) {
    width: 10% !important;
    @media (max-width: 515px) {
        width: 0% !important;
    }
}

.vs-table__th:nth-child(5) {
    width: 20% !important;
    @media (max-width: 515px) {
        width: 0% !important;
    }
}

.vs-table__th:nth-child(6) {
    width: 0% !important;
}

.vs-button.btn-top-absolute {
    top: -33px;
}

.vs-button.btn-remove i {
    margin-right: -2px;
    margin-top: -1px;
}

.only-my-templates {
    margin-left: 0;
    margin-top: 0.6em;
    display: flex;
    align-items: center;

    span {
        font-size: 0.7em;
        line-height: 1.1;
        margin-right: 0.6em;
        color: #a6b5cb;
    }

    @media (min-width: 770px) {
        margin-left: 1.1em;
        margin-top: 0;
    }
}

.btn-avatar {
    .vs-avatar-content {
        margin-left: -2px;
        margin-right: 5px;
    }
}

.vs-dialog-content {
    .vs-dialog {
        .vs-dialog__content.notFooter {
            .buttons {
                display: flex;
                flex-direction: column;
                align-items: center;

                .vs-button {
                    width: 100%;
                    font-size: 0.9em;
                }

                span {
                    color: #abbcd5;
                    font-size: 0.8em;
                    margin: 0.4em 0;
                }
            }
        }
    }
}

.user {
    p {
        margin-bottom: 0;
        margin-left: 0.6em;
        flex: 1;
    }
}
</style>
