<template>
    <section
        id="my-worksheets"
        class="kiv-block s-worksheet-templates"
        :class="{ reduced: !$parent.myWorksheetTemplatesContent }"
    >
        <div
            class="toggle-content tab"
            @click="
                $parent.myWorksheetTemplatesContent =
                    !$parent.myWorksheetTemplatesContent
            "
        >
            <i class="kiv-chevron-down icon-3"></i>
        </div>
        <div class="tabs">
            <div class="inactive" @click="activeTab(1)">
                <h2><span>Mes prescriptions</span></h2>
            </div>
            <div @click="activeTab(2)">
                <h2><span>Mes fiches</span></h2>
            </div>
        </div>
        <transition name="fade">
            <div
                v-if="prescriProcess && getWorksheetTemplates.length"
                class="prescri-process-dialog"
            >
                <span class="step-num"
                    ><i class="fas fa-folder-plus"></i>Etape
                    {{ !$parent.prescriProcessPatientSelected ? 1 : 2 }}
                </span>
                <p>
                    Veuillez Sélectionner une fiche, vous pourrez la
                    personnaliser à l'étape suivante
                </p>
            </div>
        </transition>
        <transition name="fade">
            <div
                v-if="prescriProcess"
                class="prescri-process-dialog pp-create-worksheet"
            >
                <span class="step-num"
                    ><i class="fas fa-folder-plus"></i>Etape
                    {{ !$parent.prescriProcessPatientSelected ? 1 : 2 }}
                </span>
                <p>
                    <span v-if="getWorksheetTemplates.length">Ou créez</span
                    ><span v-else>Créez</span> une nouvelle fiche
                </p>
            </div>
        </transition>
        <transition name="height">
            <div v-if="$parent.myWorksheetTemplatesContent">
                <div class="primary-actions">
                    <div class="search">
                        <vs-input
                            v-model="search"
                            @keyup="page = 1"
                            label-placeholder="Filtrer par nom de fiche et/ou créateur"
                        />
                        <div class="view-all-templates">
                            <span
                                >Voir les fiches <br />
                                des autres prat.</span
                            >
                            <vs-switch
                                @click="page = 1"
                                v-model="viewAllTemplates"
                            />
                        </div>
                    </div>
                    <div>
                        <div class="kiv-select tags">
                            <vs-select
                                v-if="getTagsFromAll.length"
                                filter
                                multiple
                                placeholder="Mots-Clés"
                                v-model="selectedTags"
                                @change="page = 1"
                                @input="selectTag()"
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
                            <div v-else class="loading select-tags"></div>
                        </div>
                        <div class="btn-primary-action add">
                            <vs-tooltip>
                                <vs-button
                                    v-if="!$parent.prescriProcess"
                                    @click="redirectToCreatePage(0)"
                                    :loading="btnLoadingAddWorksheet"
                                    class="btn-action add"
                                    circle
                                    floating
                                >
                                    <plus-icon
                                        size="3x"
                                        class="custom-class"
                                    ></plus-icon>
                                </vs-button>
                                <template #tooltip> Créer une fiche </template>
                            </vs-tooltip>
                        </div>
                        <transition name="fade">
                            <div
                                v-if="$parent.prescriProcess"
                                class="btn-prescription-action"
                                :class="{
                                    active: prescriProcess,
                                    selected:
                                        $parent.prescriProcessWorksheetSelected &&
                                        $parent.prescriProcessWorksheetSelected
                                            .id === null,
                                }"
                            >
                                <vs-button
                                    :loading="
                                        btnLoadingWorksheetPrescriProcessRedirect ===
                                        0
                                    "
                                    @click="
                                        prescriProcessWorksheetChoice({
                                            id: null,
                                        })
                                    "
                                    class="w-100"
                                >
                                    <span
                                        v-if="
                                            ($parent.prescriProcess &&
                                                !$parent.prescriProcessWorksheetSelected) ||
                                            ($parent.prescriProcessWorksheetSelected &&
                                                $parent
                                                    .prescriProcessWorksheetSelected
                                                    .id !== null)
                                        "
                                        ><i class="fas fa-folder-plus"></i>Créer
                                        une fiche</span
                                    >
                                    <span
                                        v-if="
                                            $parent.prescriProcessWorksheetSelected &&
                                            $parent
                                                .prescriProcessWorksheetSelected
                                                .id === null
                                        "
                                        ><i class="fas fa-check-circle"></i
                                        >Sélectionné</span
                                    >
                                </vs-button>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="worksheet-list wl-doctor">
                    <transition name="fade">
                        <div
                            v-if="
                                !loadingAllWorksheets &&
                                getWorksheetTemplates.length
                            "
                        >
                            <div
                                v-for="(worksheet, i) in getWorksheetTemplates"
                                :key="i"
                            >
                                <div class="worksheet-header">
                                    <div
                                        class="user-title"
                                        @click="
                                            redirectToWorksheetPage(
                                                worksheet.id
                                            )
                                        "
                                    >
                                        <h3 class="worksheet-title">
                                            {{ worksheet.title }}
                                        </h3>
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
                                    <TagPartOfBody
                                        :partOfBody="worksheet.partOfBody"
                                    />
                                </div>
                                <div class="worksheet-content">
                                    <div>
                                        <div class="worksheet-details">
                                            <div
                                                class="
                                                    worksheet-exercises-count
                                                "
                                            >
                                                <i
                                                    class="kiv-exercise icon-7"
                                                ></i>
                                                <span class="b">{{
                                                    worksheet.exercises.length
                                                }}</span>
                                                exercice<span
                                                    v-if="
                                                        worksheet.exercises
                                                            .length > 1
                                                    "
                                                    >s</span
                                                >
                                            </div>
                                            <div class="worksheet-timing">
                                                <i
                                                    class="kiv-calendar icon-10"
                                                ></i>
                                                <span class="b"
                                                    >{{
                                                        worksheet.perDay
                                                    }}x</span
                                                >
                                                par jour -
                                                <span class="b"
                                                    >{{
                                                        worksheet.perWeek
                                                    }}x</span
                                                >
                                                par semaine
                                            </div>
                                            <div class="worksheet-period">
                                                <i
                                                    class="kiv-clock icon-11"
                                                ></i>
                                                Période :
                                                <span class="b"
                                                    >{{
                                                        worksheet.duration
                                                    }}
                                                    semaine<span
                                                        v-if="
                                                            worksheet.duration >
                                                            1
                                                        "
                                                        >s</span
                                                    ></span
                                                >
                                            </div>
                                        </div>
                                        <div class="worksheet-details reduced">
                                            <div
                                                class="
                                                    worksheet-exercises-count
                                                "
                                            >
                                                <i
                                                    class="kiv-exercise icon-7"
                                                ></i>
                                                <span class="b">{{
                                                    worksheet.exercises.length
                                                }}</span>
                                                ex.
                                            </div>
                                            <div class="worksheet-timing">
                                                <i
                                                    class="kiv-calendar icon-10"
                                                ></i>
                                                <span class="b"
                                                    >{{
                                                        worksheet.perDay
                                                    }}x</span
                                                >
                                                / jour -
                                                <span class="b"
                                                    >{{
                                                        worksheet.perWeek
                                                    }}x</span
                                                >
                                                / sem.
                                            </div>
                                            <div class="worksheet-period">
                                                <i
                                                    class="kiv-clock icon-11"
                                                ></i>
                                                <span class="b"
                                                    >{{
                                                        worksheet.duration
                                                    }}
                                                    sem.</span
                                                >
                                            </div>
                                        </div>
                                        <div class="btns-date">
                                            <div class="created-at-date">
                                                <span
                                                    >créé le
                                                    {{
                                                        formatDate(
                                                            worksheet.createdAt
                                                        )
                                                    }}
                                                    <span
                                                        class="creator"
                                                        v-if="
                                                            worksheet.doctor &&
                                                            (worksheet.doctor
                                                                .firstname ||
                                                                worksheet.doctor
                                                                    .lastname)
                                                        "
                                                    >
                                                        par
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
                                                    size="22"
                                                    class="user-avatar"
                                                    circle
                                                    v-if="worksheet.doctor"
                                                >
                                                    <img
                                                        :src="
                                                            worksheet.doctor
                                                                .avatarUrl
                                                                ? worksheet
                                                                      .doctor
                                                                      .avatarUrl
                                                                : '/img/avatar-default.svg'
                                                        "
                                                        :alt="`Avatar de ${worksheet.doctor.firstname} ${worksheet.doctor.lastname}`"
                                                    />
                                                </vs-avatar>
                                            </div>
                                            <div class="buttons">
                                                <vs-button
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
                                                    v-if="
                                                        worksheet.doctor.id ===
                                                        doctor.id
                                                    "
                                                    @click="
                                                        redirectToEditPage(
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
                                                    v-if="
                                                        worksheet.doctor.id ===
                                                        doctor.id
                                                    "
                                                    @click="
                                                        removeWorksheet(
                                                            worksheet
                                                        )
                                                    "
                                                    class="btn-action"
                                                    circle
                                                    floating
                                                >
                                                    <i class="fas fa-trash"></i>
                                                </vs-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="big-buttons">
                                    <div class="btn-create-action">
                                        <vs-button
                                            :disabled="$parent.prescriProcess"
                                            :loading="
                                                btnLoadingCopyWorksheet ===
                                                worksheet.id
                                            "
                                            @click="
                                                redirectToCreatePage(
                                                    worksheet.id
                                                )
                                            "
                                            class="w-100"
                                        >
                                            <i class="fas fa-plus-circle"></i>
                                            Copier
                                        </vs-button>
                                    </div>
                                    <div
                                        class="btn-prescription-action"
                                        :class="{
                                            active: prescriProcess,
                                            selected:
                                                $parent.prescriProcessWorksheetSelected &&
                                                $parent
                                                    .prescriProcessWorksheetSelected
                                                    .id === worksheet.id,
                                        }"
                                    >
                                        <vs-button
                                            :loading="
                                                btnLoadingWorksheetPrescriProcessRedirect ===
                                                worksheet.id
                                            "
                                            @click="
                                                prescriProcessWorksheetChoice(
                                                    worksheet
                                                )
                                            "
                                            class="w-100"
                                        >
                                            <transition name="fade">
                                                <span
                                                    v-if="
                                                        (!prescriProcess &&
                                                            !$parent.prescriProcessWorksheetSelected) ||
                                                        ($parent.prescriProcessWorksheetSelected &&
                                                            $parent
                                                                .prescriProcessWorksheetSelected
                                                                .id !=
                                                                worksheet.id)
                                                    "
                                                    ><i
                                                        class="
                                                            fas
                                                            fa-folder-plus
                                                        "
                                                    ></i
                                                    >Prescrire</span
                                                >
                                                <span
                                                    v-if="
                                                        prescriProcess &&
                                                        !$parent.prescriProcessWorksheetSelected
                                                    "
                                                    ><i
                                                        class="
                                                            fas
                                                            fa-folder-plus
                                                        "
                                                    ></i
                                                    >Sélectionner</span
                                                >
                                                <span
                                                    v-if="
                                                        $parent.prescriProcessWorksheetSelected &&
                                                        $parent
                                                            .prescriProcessWorksheetSelected
                                                            .id === worksheet.id
                                                    "
                                                    ><i
                                                        class="
                                                            fas
                                                            fa-check-circle
                                                        "
                                                    ></i
                                                    >Sélectionné</span
                                                >
                                            </transition>
                                        </vs-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="not-found"
                            v-if="
                                !loadingAllWorksheets &&
                                !getWorksheetTemplates.length &&
                                !search &&
                                !selectedTags.length
                            "
                        >
                            <p>
                                <i class="fas fa-folder-minus"></i>
                                <span>Vous n'avez pas de fiche</span>
                            </p>
                        </div>
                        <div
                            class="not-found"
                            v-if="
                                !loadingAllWorksheets &&
                                !getWorksheetTemplates.length &&
                                (search || selectedTags.length)
                            "
                        >
                            <p>
                                <i class="fas fa-folder-minus"></i>
                                <span
                                    >Aucune fiche n'a été trouvée avec
                                    <span v-if="search"
                                        >"<strong>{{ search }}</strong
                                        >"</span
                                    ><span
                                        v-if="search && selectedTags.length"
                                        class="et"
                                        >et</span
                                    ><span
                                        v-if="selectedTags.length"
                                        class="tags"
                                    >
                                        <div
                                            class="tag-chip"
                                            v-for="(tag, i) in selectedTags"
                                            :key="i"
                                        >
                                            {{ tag }}
                                        </div>
                                    </span></span
                                >
                            </p>
                        </div>
                        <div v-if="loadingAllWorksheets">
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-65"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-55"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="pagination" v-if="countWorksheetTemplates > max">
                    <vs-pagination 
                        v-model="page" 
                        :length="
                            getLength(
                                getSearch(worksheetTemplates, search),
                                max
                            )
                        "
                    >
                        <vs-select v-model="page">
                            <vs-option
                                v-for="numberPage in getLength(getSearch(worksheetTemplates, search),max)"
                                :key="numberPage"
                                :label="numberPage"
                                :value="numberPage">
                                {{ numberPage }}
                            </vs-option>
                        </vs-select>
                    </vs-pagination>
                </div>
            </div>
        </transition>
        <vs-dialog v-model="modalConfirmRemoveWorksheet">
            <p class="modal-confirm-text">Confirmer la suppression de</p>

            <div class="modal-confirm-detail remove-item">
                <div class="modal-confirm-icon remove-item">
                    <i class="fas fa-trash"></i>
                </div>
                <p>
                    <span>
                        {{ removeWorksheetDetails.title }}
                    </span>
                </p>
            </div>

            <div class="modal-confirm-buttons">
                <vs-button
                    class="secondary"
                    @click="modalConfirmRemoveWorksheet = false"
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validRemoveWorksheet"
                    :loading="btnLoadingValidRemoveWorksheet"
                    :class="{
                        disabled: btnLoadingValidRemoveWorksheet,
                    }"
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
    </section>
</template>

<script>
import f from "../../services/function";
import TagPartOfBody from "../../components/TagPartOfBody.vue";
import moment from "moment";
import { PlusIcon } from "vue-feather-icons";

export default {
    props: {
        doctor: Object,
        worksheetTemplates: Array,
        loadingAllWorksheets: Boolean,
        tagsFromExercises: Array,
        prescriProcess: Boolean,
        btnLoadingWorksheetPrescriProcessRedirect: Number,
        csrfTokenRemoveWorksheet: String,
    },
    components: {
        TagPartOfBody,
        PlusIcon,
    },
    data() {
        return {
            selectedTags: [],
            search: "",
            page: 1,
            max: 6,
            viewAllTemplates: false,
            modalConfirmRemoveWorksheet: false,
            removeWorksheetDetails: {},
            btnLoadingValidRemoveWorksheet: false,
            btnLoadingAddWorksheet: false,
            btnLoadingCopyWorksheet: null,
        };
    },
    computed: {
        getWorksheetTemplates() {
            return this.getPage(
                this.getSearch(this.worksheetTemplates, this.search),
                this.page,
                this.max
            );
        },
        countWorksheetTemplates() {
            return this.getSearch(this.worksheetTemplates, this.search).length;
        },
        getTagsFromAll() {
            return f.getTagsFromAll(this.tagsFromExercises);
        },
    },
    methods: {
        selectTag() {
            if (!this.inputChips) {
                this.inputChips = document.querySelector(
                    ".vs-select__chips__input"
                );
            }

            this.inputChips.focus();
            this.inputChips.blur();
        },
        prescriProcessWorksheetChoice(worksheet) {
            this.$emit("prescriProcessWorksheetChoice", worksheet);
        },
        redirectToEditPage(worksheetId) {
            document.location.href = `/doctor/${this.doctor.id}/fiche/edition/${worksheetId}`;
        },
        redirectToCreatePage(worksheetId) {
            console.log(worksheetId);
            if (worksheetId) {
                this.btnLoadingCopyWorksheet = worksheetId;
            } else {
                this.btnLoadingAddWorksheet = true;
            }

            document.location.href = `/doctor/${this.doctor.id}/fiche/creation/${worksheetId}`;
        },
        redirectToWorksheetPage(worksheetId) {
            document.location.href = `/doctor/${this.doctor.id}/fiche/voir/${worksheetId}`;
        },
        activeTab(num) {
            this.$parent.activeTab = num;

            if (window.innerWidth < 576) {
                if (1 === num) {
                    this.$parent.myPrescriptionsContent = true;
                }
                if (2 === num) {
                    this.$parent.myWorksheetTemplatesContent =
                        !this.$parent.myWorksheetTemplatesContent;
                }
            }
        },
        removeWorksheet(patient) {
            this.removeWorksheetDetails = patient;

            return (this.modalConfirmRemoveWorksheet =
                !this.modalConfirmRemoveWorksheet);
        },
        validRemoveWorksheet() {
            this.btnLoadingValidRemoveWorksheet = true;

            this.axios
                .post(`/doctor/${this.doctor.id}/remove/worksheet`, {
                    _token: this.csrfTokenRemoveWorksheet,
                    worksheetId: this.removeWorksheetDetails.id,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Suppression de la fiche",
                        response.data
                    );
                    this.$parent.allWorksheets.splice(
                        this.$parent.allWorksheets.indexOf(
                            this.removeWorksheetDetails
                        ),
                        1
                    );
                    this.btnLoadingValidRemoveWorksheet = false;
                    this.modalConfirmRemoveWorksheet = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingValidRemoveWorksheet = false;
                    this.modalConfirmRemoveWorksheet = false;
                });
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
                        const results = [];

                        if (w.exercisesTags) {
                            this.selectedTags.forEach((tag) => {
                                let result = false;

                                w.exercisesTags.forEach((wtag) => {
                                    if (wtag === tag) {
                                        result = true;
                                    }
                                });

                                results.push(result);
                            });
                        }

                        return !results.includes(false);
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
    padding-top: 6.7rem;

    &.reduced {
        padding-top: 4.4rem;
    }

    .tabs {
        > div {
            &.inactive {
                box-shadow: inset -0.74rem -0.3rem 0.9rem
                    rgba(148, 96, 77, 0.07);
                border-radius: 0 0 0.8rem 0;
            }
        }
    }

    .primary-actions {
        margin-bottom: 1.2rem;

        .btn-prescription-action .vs-button .vs-button__content,
        body .btn-create-action .vs-button .vs-button__content {
            padding: 1.1rem 1.5rem;
            padding-top: 1.2rem;
            letter-spacing: 0.02rem;
        }

        .btn-primary-action {
            margin: 0;
        }

        > :first-child {
            margin-right: 0;

            @media (min-width: 576px) {
                width: 50%;
                margin-right: 1.4rem;
            }
        }

        > :last-child {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 0.3rem;
            margin-top: 1rem;

            @media (min-width: 576px) {
                margin-bottom: 0;
                width: 50%;
                margin-top: 0;
            }
        }
    }

    .kiv-select.tags {
        margin-right: 1.4rem;
        width: 100%;
        overflow: visible;

        .loading.select-tags {
            border-radius: 0.5rem;
            width: 100%;
            height: 4.3rem;
            background: #f9f9f9;
        }
    }

    .search {
        display: flex;
        align-items: center;

        .vs-input-parent {
            margin-right: 1.4rem;
            width: 100%;
        }
    }

    .view-all-templates {
        width: 5.9rem;

        > span {
            font-size: 0.9rem;
            line-height: 1rem;
            display: block;
            margin-bottom: 0.4rem;
            white-space: nowrap;
        }

        .vs-switch {
            height: 22px;
            min-width: 41px;
            position: relative;
            left: -0.2rem;
        }

        .vs-switch__circle {
            width: 16px;
            height: 16px;
            left: 4px;
        }

        .vs-switch__input:checked ~ .vs-switch__circle {
            left: calc(100% - 20px);
        }
    }

    .big-buttons {
        display: flex;
        margin-top: 1.5rem;
        margin-bottom: -0.3rem;

        @media (min-width: 550px) {
            margin-top: 1.4rem;
            margin-bottom: 0;
        }

        .btn-prescription-action,
        .btn-create-action {
            white-space: nowrap;

            .vs-button {
                background: $white;
                font-size: 1.4rem;
                color: $orange;
                border-radius: 0.5rem;
                box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(255, 104, 56, 0.15);

                &:hover {
                    box-shadow: 0rem 0.4rem 1.4rem 0rem rgba(255, 104, 56, 0.43);
                }

                i {
                    font-size: 1.5rem;
                }

                .vs-button__content {
                    padding: 0.7rem 1.5rem;
                    padding-top: 0.8rem;
                }
            }
        }

        .btn-prescription-action {
            position: relative;
            top: -0.1rem;
        }

        .btn-create-action {
            width: 8.8rem;
            margin-right: 1.7rem;

            @media (max-width: 449px) {
                margin-right: 1.2rem;
            }

            .vs-button {
                background: $black;
                color: $white;
                letter-spacing: 0.005rem;
                font-weight: 500;
                font-size: 1.3rem;

                .vs-button__loading {
                    background: rgba($black, 0.7);
                }

                i {
                    margin-right: 0.7rem;
                    font-size: 1.4rem;
                }
            }
        }
    }

    .tags {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;

        .tag-chip {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: $orange;
            border-radius: 1rem;
            color: $white;
            padding: 0.2rem 0.7rem;
            font-size: 0.9rem;
            white-space: nowrap;
            margin: 0.2rem 0.3rem;

            :last-child {
                margin-right: 0;
            }
        }
    }

    .worksheet-list.wl-doctor > div:not(.not-found) {
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding-top: 4.2rem;

            @media (min-width: 550px) {
                padding-top: 1.7rem;
                align-items: flex-start;
            }

            .worksheet-header {
                margin-top: 0.2rem;
                max-width: 100%;

                @media (max-width: 550px) {
                    margin-bottom: 0.6rem;
                }

                @media (min-width: 550px) {
                    margin-top: 0;
                }

                .user-avatar {
                    margin-right: 1rem;
                    min-width: 35px;
                    max-height: 35px;
                }

                .user-title {
                    max-width: 47vw;
                    margin-right: 1rem;
                    cursor: pointer;

                    @media (min-width: 550px) {
                        max-width: 43vw;
                    }

                    @media (min-width: 576px) {
                        max-width: 46vw;
                    }

                    @media (min-width: 992px) {
                        max-width: 53vw;
                    }

                    @media (min-width: 1100px) {
                        max-width: 32vw;
                    }

                    @media (min-width: 1370px) {
                        max-width: 43vw;
                    }

                    .worksheet-title {
                        font-size: 1.3rem;

                        @media (min-width: 550px) {
                            font-size: 1.4rem;
                        }

                        @media (min-width: 576px) {
                            font-size: 1.6rem;
                        }
                    }

                    .btn-action {
                        &.commentaries {
                            background: $white !important;
                            color: $gray-middle;
                            position: relative;
                            overflow: visible;
                            width: 3rem;
                            height: 3rem;
                            min-width: 3rem;
                            min-height: 3rem;
                            max-height: 3rem;
                            margin-left: 1rem;
                            box-shadow: 0rem 0.2rem 0.9rem 0rem
                                rgba(231, 223, 205, 0.6);
                            z-index: 111;

                            i {
                                font-size: 1.6rem;
                                top: 0.18rem;
                                left: 0.45rem;
                            }

                            .count-commentaries {
                                position: absolute;
                                top: -0.3rem;
                                right: -0.5rem;
                                width: 1.2rem;
                                height: 1.2rem;
                                min-width: 1.2rem;
                                min-height: 1.2rem;
                                max-height: 1.2rem;
                                background-color: $orange;
                                border-radius: 50%;
                                font-size: 0.7rem;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                color: white;
                                padding: 0.1rem 0.2rem;
                                padding-top: 0.15rem;
                            }
                        }
                    }
                }

                &::after {
                    content: "";
                    display: block;
                    height: 100%;
                    width: 1.1rem;
                    position: absolute;
                    top: 4.3rem;
                    right: 1.9rem;
                    height: 2rem;
                    background: linear-gradient(
                        90deg,
                        rgba(250, 248, 244, 0) 0%,
                        rgba(250, 248, 244, 1) 100%
                    );
                }

                .vs-button--size-mini.tag.part-of-body {
                    font-size: 1rem;
                    top: 1.2rem;
                    right: 50%;
                    transform: translateX(50%);

                    @media (max-width: 379px) {
                        top: 1.2rem;
                    }

                    @media (min-width: 550px) {
                        top: 1.6rem;
                        right: 1.8rem;
                        transform: none;
                        font-size: 1.3rem;
                    }
                }
            }

            .worksheet-content {
                flex-direction: column;
                margin-bottom: 0;
                width: 100%;

                > div {
                    .worksheet-details {
                        position: relative;
                        display: none;
                        margin-top: 0.7rem;

                        @media (min-width: 700px) {
                            display: flex;
                        }

                        @media (min-width: 992px) {
                            display: none;
                        }

                        @media (min-width: 1100px) {
                            display: flex;
                        }

                        &.reduced {
                            display: flex;
                            width: 100%;
                            align-items: center;
                            justify-content: flex-start;
                            margin-bottom: 0.2rem;
                            overflow: hidden;
                            max-width: 98%;

                            @media (max-width: 499px) {
                                margin-bottom: 0;
                            }

                            @media (min-width: 410px) {
                                justify-content: center;
                            }

                            @media (min-width: 550px) {
                                justify-content: flex-start;
                            }

                            @media (min-width: 550px) {
                                max-width: initial;
                            }

                            @media (min-width: 700px) {
                                display: none;
                            }

                            @media (min-width: 992px) {
                                display: flex;
                            }

                            @media (min-width: 1100px) {
                                display: none;
                            }
                        }

                        @media (min-width: 992px) {
                            max-width: 41vw;
                            overflow: hidden;
                            font-size: 1.15rem !important;
                        }

                        @media (min-width: 1100px) {
                            max-width: initial;
                            font-size: 1.3rem !important;
                        }

                        &::after {
                            content: "";
                            display: block;
                            height: 100%;
                            width: 1.5rem;
                            position: absolute;
                            top: 0;
                            right: 0;
                            background: linear-gradient(
                                90deg,
                                rgba(250, 248, 244, 0) 0%,
                                rgba(250, 248, 244, 1) 100%
                            );
                        }
                    }

                    .btns-date {
                        display: flex;
                        flex-direction: row-reverse;
                        width: 106%;
                        align-items: center;
                        position: absolute;
                        top: 1.1rem;
                        bottom: auto;
                        right: -1.2rem;
                        padding: 0 1.6rem;
                        justify-content: space-between;

                        @media (min-width: 370px) {
                            width: 104.4%;
                        }

                        @media (min-width: 550px) {
                            flex-direction: column;
                            margin-top: 0rem;
                            align-items: flex-end;
                            padding: 0;
                            top: auto;
                            bottom: 2rem;
                            right: 1.8rem;
                        }
                    }
                }
            }

            .worksheet-content > div .btns-date {
                .created-at-date {
                    margin-bottom: 0;
                    margin-right: 0.7rem;
                    position: relative;
                    top: 0;

                    @media (max-width: 550px) {
                        font-size: 0.95rem;

                        &:first-child:last-child {
                            margin: auto;
                        }
                    }

                    @media (min-width: 550px) {
                        top: -0.9rem;
                        margin-right: 0rem;
                    }

                    @media (min-width: 700px) {
                        top: -0.7rem;
                    }

                    .user-avatar {
                        display: none;

                        @media (min-width: 430px) {
                            display: block;
                        }
                    }

                    > span {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;

                        .creator {
                            display: block;
                            max-width: 8rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;

                            @media (min-width: 500px) {
                                max-width: 12rem;
                            }
                        }
                    }
                }

                .buttons {
                    @media (min-width: 550px) {
                        margin-top: 0.8rem;
                    }
                }
            }
        }
    }
}
</style>
