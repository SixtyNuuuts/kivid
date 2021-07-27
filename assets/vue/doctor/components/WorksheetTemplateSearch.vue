<template>
    <div>
        <h2><i class="fe fe-search"></i>Rechercher un modèle de fiche</h2>

        <div v-click-outside="resetSearch" class="search">
            <vs-input
                v-model="search"
                type="search"
                placeholder="Titre de la fiche"
                :class="{ 'without-border-radius-bottom': search }"
            >
                <template #icon>
                    <i class="fe fe-search"></i>
                </template>
            </vs-input>
            <div v-if="search" class="search-active">
                <span v-if="worksheetTemplatesListArrayFiltered.length">
                    {{ worksheetTemplatesListArrayFiltered.length }} fiches
                </span>
                <span v-else>
                    {{ worksheetTemplatesListArrayFiltered.length }} fiche
                </span>
            </div>
            <transition name="height">
                <div v-if="search" class="filtered-items-box vs-alert--shadow">
                    <div v-if="worksheetTemplatesListArrayFiltered.length">
                        <div
                            v-for="(
                                worksheetTemplate, i
                            ) in worksheetTemplatesListArrayFiltered"
                            :key="i"
                            class="worksheet-template"
                        >
                            <div class="details">
                                <div class="text">
                                    <div class="title">
                                        {{ worksheetTemplate.title }}
                                    </div>
                                    <div
                                        v-if="worksheetTemplate.doctor"
                                        class="creator"
                                    >
                                        de
                                        {{ worksheetTemplate.doctor.firstname }}
                                        {{ worksheetTemplate.doctor.lastname }}
                                    </div>
                                </div>
                            </div>
                            <div class="actions">
                                <vs-tooltip>
                                    <vs-button
                                        circle
                                        icon
                                        size="small"
                                        @click="
                                            createWorksheetTemplate(
                                                worksheetTemplate
                                            )
                                        "
                                        class="btn-add"
                                    >
                                        <i class="fe fe-file-plus"></i>
                                    </vs-button>
                                    <template #tooltip>
                                        Créer d'après ce modèle
                                    </template>
                                </vs-tooltip>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="no-found">
                            <i class="fe fe-file-minus"></i>
                            Aucun modèle de fiche n'a été trouvé avec "
                            <strong>{{ search }}</strong
                            >"
                        </p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import f from "../../services/function";

export default {
    name: "WorksheetTemplateSearch",
    props: {
        doctor: Object,
        worksheetTemplatesList: Array,
    },
    directives: {
        ClickOutside,
    },
    data() {
        return {
            search: "",
        };
    },
    computed: {
        worksheetTemplatesListArrayFiltered() {
            return f.getSearch(this.worksheetTemplatesList, this.search);
        },
    },
    methods: {
        createWorksheetTemplate(worksheetTemplate) {
            document.location.href = `/kine/${this.doctor.id}/fiche/creation/${worksheetTemplate.id}`;
        },
        resetSearch() {
            this.search = "";
        },
    },
};
</script>

<style lang="scss" scoped>
h2 {
    font-size: 1.4rem !important;
}

.worksheet-template {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
    padding: 0.4em 0;

    .details {
        display: flex;
        align-items: center;
        padding-left: 0.8em;
        flex: 2;
        max-width: 60%;

        @media (min-width: 576px) {
            padding-left: 1.3em;
            max-width: 65%;
        }

        .avatar {
            margin-right: 0.8em;
            min-width: 35px;
        }

        .text {
            flex: 1;
            overflow: hidden;

            .title {
                font-size: 0.8em;
            }

            .creator {
                font-size: 0.7em;
                color: #91a3bd;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
    .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 1em;
        flex: 1;

        .btn-add {
            width: 3em;
            height: 3em;

            i {
                font-size: 1.5em;
                margin-left: 0.2em;
            }
        }
    }
}
</style>
