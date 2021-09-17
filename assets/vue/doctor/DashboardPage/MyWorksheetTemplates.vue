<template>
    <section
        id="my-worksheets"
        class="kiv-block s-worksheet-templates"
        :class="{ reduced: !$parent.myWorksheetTemplatesContent }"
    >
        <div
            class="toggle-content"
            @click="
                $parent.myWorksheetTemplatesContent =
                    !$parent.myWorksheetTemplatesContent
            "
        >
            <i class="kiv-chevron-down icon-3"></i>
        </div>
        <h2>Mes modèles de fiche</h2>
        <transition name="height">
            <div v-if="$parent.myWorksheetTemplatesContent">
                <div class="primary-actions">
                    <div class="search">
                        <vs-input
                            v-model="search"
                            @keyup="page = 1"
                            label-placeholder="Filtrer par nom de fiche et/ou créateur du modèle"
                        />
                    </div>
                    <div>
                        <div class="kiv-select tags">
                            <vs-select
                                filter
                                multiple
                                placeholder="Mots-Clés"
                                v-model="selectedTags"
                            >
                                <vs-option
                                    v-for="(tag, i) in getTagsFromAll"
                                    :key="i"
                                    :label="tag"
                                    :value="tag"
                                >
                                    {{ tag }}
                                </vs-option>
                                <template slot="notData">
                                    Aucun mot-clé
                                </template>
                            </vs-select>
                        </div>
                        <div>
                            <div class="view-all-templates">
                                <span
                                    >Voir tous <br />
                                    les modèles</span
                                >
                                <vs-switch
                                    @click="page = 1"
                                    v-model="viewAllTemplates"
                                />
                            </div>
                            <div class="btn-primary-action add">
                                <vs-tooltip>
                                    <vs-button
                                        :disabled="redirectInProgress === true"
                                        @click="true"
                                        class="btn-action add"
                                        circle
                                        floating
                                    >
                                    </vs-button>
                                    <template #tooltip>
                                        Créer un modèle
                                    </template>
                                </vs-tooltip>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="worksheet-list wl-doctor">
                    <div
                        v-if="
                            !loadingDoctorWorksheets &&
                            getDoctorWorksheetTemplates.length
                        "
                    >
                        <div
                            v-for="(
                                worksheet, i
                            ) in getDoctorWorksheetTemplates"
                            :key="i"
                        >
                            <div class="worksheet-header">
                                <h3 class="worksheet-title">
                                    {{ worksheet.title }}
                                </h3>
                                <TagPartOfBody
                                    :partOfBody="
                                        worksheet.partOfBody.toLowerCase()
                                    "
                                />
                            </div>
                            <div class="worksheet-content">
                                <div>
                                    <div class="btn-prescription-action">
                                        <vs-button @click="true" class="w-100">
                                            <i class="fas fa-folder-plus"></i>
                                            Prescrire
                                        </vs-button>
                                    </div>
                                    <div class="tags">
                                        <div
                                            class="tag-chip"
                                            v-for="(
                                                tag, i
                                            ) in worksheet.exercisesTags"
                                            :key="i"
                                        >
                                            {{ tag }}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="worksheet-details">
                                        <div class="worksheet-exercises-count">
                                            <i class="kiv-exercise icon-7"></i>
                                            <span>{{
                                                worksheet.exercises.length
                                            }}</span>
                                            exercices
                                        </div>
                                        <div class="worksheet-timing">
                                            <i class="kiv-calendar icon-10"></i>
                                            <span>{{ worksheet.perDay }}x</span>
                                            par jour -
                                            <span
                                                >{{ worksheet.perWeek }}x</span
                                            >
                                            par semaine
                                        </div>
                                        <div class="worksheet-period">
                                            <i class="kiv-clock icon-11"></i>
                                            Période :
                                            <span
                                                >{{
                                                    worksheet.duration
                                                }}
                                                semaines</span
                                            >
                                        </div>
                                    </div>
                                    <div class="btns-date">
                                        <div class="buttons">
                                            <vs-button
                                                :disabled="
                                                    redirectInProgress ===
                                                    worksheet.id
                                                "
                                                @click="
                                                    redirectToWorksheetPage(
                                                        worksheet.id
                                                    )
                                                "
                                                class="btn-action"
                                                circle
                                                floating
                                            >
                                                <i class="fas fa-eye"></i>
                                            </vs-button>
                                            <vs-button
                                                :disabled="
                                                    redirectInProgress ===
                                                    worksheet.id
                                                "
                                                @click="
                                                    redirectToWorksheetPage(
                                                        worksheet.id
                                                    )
                                                "
                                                class="btn-action"
                                                circle
                                                floating
                                            >
                                                <i class="fas fa-pen"></i>
                                            </vs-button>
                                            <vs-button
                                                :disabled="
                                                    redirectInProgress ===
                                                    worksheet.id
                                                "
                                                @click="
                                                    redirectToWorksheetPage(
                                                        worksheet.id
                                                    )
                                                "
                                                class="btn-action"
                                                circle
                                                floating
                                            >
                                                <i class="fas fa-trash"></i>
                                            </vs-button>
                                        </div>
                                        <div class="created-at-date">
                                            <span
                                                >créé le
                                                {{
                                                    formatDate(
                                                        worksheet.createdAt
                                                    )
                                                }}
                                                <span
                                                    v-if="
                                                        worksheet.doctor &&
                                                        (worksheet.doctor
                                                            .firstname ||
                                                            worksheet.doctor
                                                                .lastname)
                                                    "
                                                >
                                                    <br />par
                                                    {{
                                                        worksheet.doctor
                                                            .firstname
                                                    }}
                                                    {{
                                                        worksheet.doctor
                                                            .lastname
                                                    }}
                                                </span></span
                                            >
                                            <vs-avatar
                                                size="25"
                                                class="user-avatar"
                                                circle
                                                v-if="worksheet.doctor"
                                            >
                                                <img
                                                    :src="
                                                        worksheet.doctor
                                                            .avatarUrl
                                                            ? worksheet.doctor
                                                                  .avatarUrl
                                                            : '/img/avatar-default.svg'
                                                    "
                                                    :alt="`Avatar de ${worksheet.doctor.firstname} ${worksheet.doctor.lastname}`"
                                                />
                                            </vs-avatar>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="not-found"
                        v-if="
                            !loadingDoctorWorksheets &&
                            !getDoctorWorksheetTemplates.length
                        "
                    >
                        <p>
                            <i class="fas fa-folder-minus"></i>
                            <span>Vous n'avez pas de modèle</span>
                        </p>
                    </div>
                    <div v-if="loadingDoctorWorksheets">
                        <div class="loading loading-block">
                            <div class="worksheet-header">
                                <div class="loading worksheet-title w-25"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="
                                            loading
                                            worksheet-exercises-count
                                            w-35
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-35"
                                    ></div>
                                </div>
                                <div class="buttons">
                                    <div class="loading btn-go"></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header">
                                <div class="loading worksheet-title w-45"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="
                                            loading
                                            worksheet-exercises-count
                                            w-15
                                        "
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-35"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-25"
                                    ></div>
                                </div>
                                <div class="buttons">
                                    <div class="loading btn-go"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <vs-pagination
                        v-model="page"
                        :length="
                            getLength(
                                getSearch(doctorWorksheetTemplates, search),
                                max
                            )
                        "
                    />
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import f from "../../services/function";
import TagPartOfBody from "../../components/TagPartOfBody.vue";
import moment from "moment";

export default {
    props: {
        doctor: Object,
        doctorWorksheetTemplates: Array,
        loadingDoctorWorksheets: Boolean,
        tagsFromExercises: Array,
    },
    components: {
        TagPartOfBody,
    },
    data() {
        return {
            selectedTags: [],
            search: "",
            page: 1,
            max: 4,
            viewAllTemplates: false,
            redirectInProgress: null,
        };
    },
    computed: {
        getDoctorWorksheetTemplates() {
            return this.getPage(
                this.getSearch(this.doctorWorksheetTemplates, this.search),
                this.page,
                this.max
            );
        },
        getTagsFromAll() {
            return f.getTagsFromAll(this.tagsFromExercises);
        },
    },
    methods: {
        redirectToWorksheetPage(worksheetId) {
            this.redirectInProgress = worksheetId;

            document.location.href = `/doctor/${this.doctor.id}/fiche/${worksheetId}`;
        },
        formatDate(datetime) {
            return moment(datetime).format("DD/MM/YYYY");
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

            if (!this.viewAllTemplates) {
                worksheetTemplatesFiltered = worksheetTemplatesFiltered.filter(
                    (w) => w.doctor && w.doctor.id === this.doctor.id
                );
            }

            return worksheetTemplatesFiltered;
        },
    },
};
</script>

<style lang="scss">
@import "../../../scss/variables";

#my-worksheets.s-worksheet-templates {
    grid-area: myworksheettemplates;

    h2 {
        &::before {
            background: $tournesol;
        }
    }

    .primary-actions {
        > div {
            &:first-child {
                width: 100%;

                @media (min-width: 768px) {
                    width: 50%;
                    margin-right: 1.5rem;
                }

                @media (min-width: 992px) {
                    width: 100%;
                    margin-right: 0;
                }

                @media (min-width: 1300px) {
                    width: 50%;
                    margin-right: 1.5rem;
                }
            }

            &:last-child {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                margin-top: 1.5rem;

                @media (min-width: 576px) {
                    flex-direction: row;
                }

                @media (min-width: 768px) {
                    width: 50%;
                    margin-top: 0;
                }

                @media (min-width: 992px) {
                    width: 100%;
                    margin-top: 1.5rem;
                }

                @media (min-width: 1300px) {
                    width: 50%;
                    margin-top: 0;
                }

                > :first-child.kiv-select.tags {
                    margin-right: 0;
                    @media (min-width: 576px) {
                        margin-right: 0.6rem;
                    }
                }

                > :last-child {
                    display: flex;
                    align-items: center;
                    margin-top: 1.5rem;
                    @media (min-width: 576px) {
                        margin-top: 0;
                    }
                }
            }

            .kiv-select.tags {
                margin-right: 0.6rem;
                width: 100%;
            }

            .view-all-templates {
                margin-right: 1.7rem;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    display: block;
                    text-align: right;
                    width: 6rem;
                    margin-bottom: 0.5rem;
                    margin-right: 0.7rem;
                    width: 6rem;
                    white-space: nowrap;
                }

                .vs-switch__background {
                    background: $tournesol;
                }
            }

            .btn-primary-action {
                .vs-button {
                    background: $tournesol;
                }
            }
        }

        @media (min-width: 992px) {
            flex-direction: column;
        }

        @media (min-width: 1300px) {
            flex-direction: row;
        }
    }

    .btn-action {
        background: $tournesol;
        box-shadow: 0rem 0.4rem 1.4rem 0rem #ffa12675;
    }

    .worksheet-list.wl-doctor > div:not(.not-found) {
        .tags {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            overflow: hidden;
            margin-left: 1.5rem;
            position: relative;

            .tag-chip {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: $black;
                border-radius: 1rem;
                color: $white;
                padding: 0.3rem 0.9rem;
                font-size: 1.1rem;
                white-space: nowrap;

                &:not(:last-child) {
                    margin: 0.3em;
                }
            }
        }
        .btn-prescription-action {
            .vs-button {
                background: $white;
                font-size: 1.4rem;
                margin-top: 0.8rem;
                margin-bottom: 1.8rem;
                background: $white;
                font-size: 1.4rem;
                margin-top: 0.7rem;
                margin-bottom: 2rem;
                color: $tournesol;
                box-shadow: 0rem 0.4rem 1.4rem 0rem rgba(255, 161, 38, 0.43);
                border-radius: 0.5rem;
                // border: 1px solid $tournesol;

                i {
                    font-size: 1.5rem;
                }

                .vs-button__content {
                    padding: 0.7rem 1.5rem;
                    padding-top: 0.8rem;
                }
            }
        }

        @media (min-width: 810px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 992px) {
            grid-template-columns: 1fr;
        }

        @media (min-width: 1270px) {
            grid-template-columns: 1fr 1fr;
        }

        > div {
            .worksheet-header {
                margin-bottom: 0.8rem;
            }

            .worksheet-content {
                flex-direction: column;

                > div {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    &:first-child {
                        align-items: center;
                    }

                    &:last-child {
                        align-items: flex-end;

                        @media (max-width: 450px) {
                            flex-direction: column !important;
                            align-items: center !important;
                        }
                    }

                    .worksheet-details {
                        font-size: 1.3rem;

                        > div i {
                            color: $tournesol;
                        }
                    }

                    .btns-date {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-end;

                        @media (max-width: 450px) {
                            flex-direction: row !important;
                            width: 100%;
                            margin-top: 1rem;
                        }

                        .buttons {
                            display: flex;
                        }

                        .created-at-date {
                            font-size: 1.1rem;
                            background-color: #e7dfcd66;
                            padding: 0.6rem 1.5rem;
                            border-radius: 1.5rem;
                            margin-top: 1.8rem;
                            margin-left: 1rem;
                            display: flex;
                            align-items: center;
                            padding-right: 1rem;

                            .user-avatar {
                                margin-left: 0.5rem;
                                display: inline-flex;
                                flex-grow: 2;
                                min-width: 25px;
                                max-height: 25px;
                                min-height: 25px;
                            }
                        }
                    }
                }
            }
        }
    }

    .pagination {
        .vs-pagination__active {
            background: $tournesol;
        }
    }
}
</style>
