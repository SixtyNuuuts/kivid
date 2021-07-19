<template>
    <div>
        <vs-table :class="{ 'videos-lib': 'video' === configArray.target }">
            <template #header>
                <div class="search-bloc">
                    <v-text-field
                        :label="configArray.searchPlaceholder"
                        solo
                        v-model="search"
                        @keyup="page = 1"
                        class="search-text"
                    ></v-text-field>

                    <div
                        v-if="
                            'worksheet' === configArray.target ||
                            'video' === configArray.target
                        "
                        class="search-chips"
                    >
                        <v-combobox
                            v-model="tagsSelected"
                            :items="
                                'worksheet' === configArray.target
                                    ? tagsFromAllArray
                                    : getAllVideoTags
                            "
                            chips
                            small-chipss
                            label="Mots-clés"
                            multiple
                            color="primary"
                            solo
                            @change="page = 1"
                        >
                            <template
                                v-slot:selection="{
                                    attrs,
                                    item,
                                    select,
                                    selected,
                                }"
                            >
                                <v-chip
                                    v-bind="attrs"
                                    :input-value="selected"
                                    close
                                    @click="select"
                                    @click:close="removeChips(item)"
                                >
                                    <strong>{{ item }}</strong>
                                </v-chip>
                            </template>
                        </v-combobox>
                    </div>
                </div>
            </template>
            <template #thead>
                <vs-tr>
                    <vs-th
                        v-for="(th, i) in configArray.items"
                        :key="i"
                        :sort="th.sort"
                        :class="{
                            tags:
                                'exercises-tags' === th.type ||
                                'video-tags' === th.type,
                            thumbnail: 'thumbnail' === th.type,
                            date: 'date' === th.type,
                        }"
                        @click="
                            th.sort
                                ? (itemsListArray = sortData(
                                      $event,
                                      itemsListArray,
                                      th.sortKey
                                  ))
                                : false
                        "
                    >
                        {{ th.title }}
                    </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr
                    :key="i"
                    v-for="(item, i) in $vs.getPage(
                        getSearch(itemsListArray, search),
                        page,
                        max
                    )"
                    :class="{
                        unverified: false === item.isVerified,
                        'video-selected':
                            $parent.$parent.$parent &&
                            $parent.$parent.$parent.videosSelected.includes(
                                item
                            ),
                    }"
                >
                    <vs-td
                        v-for="(td, i) in configArray.items"
                        :key="i"
                        :class="{ status: td.type === 'status' }"
                    >
                        <div v-if="'thumbnail' === td.type">
                            <a :href="item.url" target="_blank">
                                <img
                                    :src="item.thumbnailUrl"
                                    width="65%"
                                    alt="vignette de la vidéo"
                                />
                            </a>
                        </div>
                        <div v-if="'status' === td.type">
                            <div v-if="item.isVerified">
                                <div class="icon-active-account"></div>
                                <p>ACTIF</p>
                            </div>
                            <div v-else>
                                <div class="icon-inactive-account"></div>
                                <p>INACTIF</p>
                            </div>
                        </div>
                        <div v-if="'date' === td.type">
                            {{ formatDate(item.createdAt) }}
                        </div>
                        <div v-if="'user' === td.type">
                            <div class="d-flex">
                                <vs-avatar
                                    circle
                                    size="30"
                                    v-if="item.avatarUrl"
                                >
                                    <img :src="item.avatarUrl" alt="avatar" />
                                </vs-avatar>
                                <vs-avatar circle size="30" v-else>
                                    <img
                                        src="/img/avatar-default.svg"
                                        alt="avatar"
                                    />
                                </vs-avatar>
                                <p v-if="'user' === configArray.target">
                                    {{ item.lastname }}
                                    {{ item.firstname }}
                                </p>
                            </div>
                        </div>
                        <div v-if="'email' === td.type">
                            {{ item.email }}
                        </div>
                        <div v-if="'title' === td.type">
                            {{ item.title }}
                        </div>
                        <div v-if="'name' === td.type">
                            {{ item.name }}
                        </div>
                        <div v-if="'birthdate' === td.type">
                            {{ getAge(item.birthdate) }}
                            <span v-if="item.birthdate" class="age"> ans</span>
                        </div>
                        <div v-if="'exercises-count' === td.type">
                            {{ item.exercises.length }}
                        </div>
                        <div v-if="'video-tags' === td.type" class="chips-list">
                            <div
                                class="md-chip md-chip-raised"
                                v-for="tag in item.tags"
                                :key="tag.name"
                            >
                                {{ tag.name }}
                            </div>
                        </div>
                        <div v-if="'exercises-tags' === td.type">
                            <div
                                class="md-chip md-chip-raised"
                                v-for="tag in item.exercisesTags"
                                :key="tag"
                            >
                                {{ tag }}
                            </div>
                        </div>
                        <div v-if="'progression' === td.type">
                            <div class="progress">
                                <span
                                    class="progress-bar"
                                    :style="`width: ${item.progression}%`"
                                ></span>
                            </div>
                        </div>
                        <div class="actions" v-if="'actions' === td.type">
                            <div v-for="(btn, i) in td.buttons" :key="i">
                                <div v-if="'a' === btn.type">
                                    <a
                                        v-if="'prescription' === btn.target"
                                        :class="btn.content.class"
                                        :href="`/kine/${doctor.id}/fiches/${item.id}`"
                                    >
                                        <i :class="btn.content.icon"></i>
                                        {{ btn.content.text }}
                                    </a>
                                </div>
                                <div v-if="'addVideo' === btn.type">
                                    <a
                                        v-if="
                                            $parent.$parent.$parent &&
                                            !$parent.$parent.$parent.videosSelected.includes(
                                                item
                                            )
                                        "
                                        :class="btn.content.class"
                                        @click="addVideo(item)"
                                    >
                                        <i :class="btn.content.icon"></i>
                                        Sélectionner
                                    </a>
                                    <a
                                        v-else
                                        :class="btn.content.class"
                                        @click="removeVideo(item)"
                                    >
                                        <i class="fe fe-x"></i>
                                        Retirer de la selection
                                    </a>
                                </div>
                                <div v-if="'searchItem' === btn.type">
                                    <a
                                        v-if="prescribedPatient"
                                        :class="btn.content.class"
                                        class="btn-avatar"
                                        @click="prescriptionForPatient(item)"
                                    >
                                        <vs-avatar circle size="25">
                                            <img
                                                :src="
                                                    prescribedPatient.avatarUrl
                                                        ? prescribedPatient.avatarUrl
                                                        : '/img/avatar-default.svg'
                                                "
                                                alt="avatar du patient"
                                            />
                                        </vs-avatar>
                                        <span>
                                            {{ btn.content.text }}
                                        </span>
                                    </a>
                                    <a
                                        v-else
                                        :class="btn.content.class"
                                        @click="searchBoxToggle(item)"
                                    >
                                        <i :class="btn.content.icon"></i>
                                        {{ btn.content.text }}
                                    </a>
                                </div>
                                <div v-if="'removeItem' === btn.type">
                                    <vs-tooltip>
                                        <vs-button
                                            class="remove-item-btn"
                                            @click="removeItem(item)"
                                        >
                                            <i :class="btn.content.icon"></i>
                                        </vs-button>
                                        <template #tooltip>
                                            {{ btn.content.tooltip }}
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination
                    v-model="page"
                    :length="
                        $vs.getLength(getSearch(itemsListArray, search), max)
                    "
                />
            </template>
            <template #notFound>
                <div v-if="search">
                    <i :class="configArray.notFound.search.icon"></i>
                    {{ configArray.notFound.search.message }}
                    "<strong>{{ search }}</strong
                    >".
                </div>
                <div v-else>
                    <i :class="configArray.notFound.noData.icon"></i>
                    {{ configArray.notFound.noData.message }}.
                </div>
            </template>
        </vs-table>
        <vs-dialog v-if="configArray.searchBoxConfig" v-model="searchBox">
            <Search
                :doctor="doctor"
                :items="searchBoxItems"
                :config="configArray.searchBoxConfig"
                :targetedItem="searchBoxItemSelected"
                :btnAddItemForm="btnAddItemForm"
                :createItemForm="createItemForm"
            />
        </vs-dialog>
        <vs-dialog class="action-item-box" v-model="removeItemBox">
            <p class="action-item-text">Confirmer la suppression de</p>

            <div v-if="'user' === configArray.target">
                <div class="action-item-detail remove-item">
                    <div class="action-item-icon remove-item">
                        <i class="fe fe-user-minus"></i>
                    </div>
                    <p>
                        <span>
                            {{
                                removeItemDetail.gender
                                    ? "male" === removeItemDetail.gender
                                        ? "M."
                                        : "Mme"
                                    : ""
                            }}
                            {{ removeItemDetail.lastname }}
                            {{ removeItemDetail.firstname }}
                        </span>
                    </p>
                </div>

                <p class="action-item-text">de votre liste.</p>
            </div>

            <div v-if="'prescription' === configArray.target">
                <div class="action-item-detail remove-item">
                    <div class="action-item-icon remove-item">
                        <i class="fe fe-trash"></i>
                    </div>
                    <p>
                        <span>
                            {{ removeItemDetail.worksheet.title }}
                        </span>
                        pour
                        <span>
                            {{
                                removeItemDetail.gender
                                    ? "male" === removeItemDetail.gender
                                        ? "M."
                                        : "Mme"
                                    : ""
                            }}
                            {{ removeItemDetail.patient.lastname }}
                            {{ removeItemDetail.patient.firstname }}
                        </span>
                    </p>
                </div>
            </div>

            <div v-if="'worksheet' === configArray.target">
                <div class="action-item-detail remove-item">
                    <div class="action-item-icon remove-item">
                        <i class="fe fe-trash"></i>
                    </div>
                    <p>
                        <span>
                            {{ removeItemDetail.title }}
                        </span>
                    </p>
                </div>
            </div>

            <div class="action-item-buttons">
                <vs-button @click="removeItemBox = false" dark transparent>
                    Annuler
                </vs-button>
                <div v-html="validRemoveItem()"></div>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import f from "../../services/function";
import Search from "./Search.vue";

export default {
    name: "List",
    components: {
        Search,
    },
    props: {
        doctor: Object,
        items: Array,
        config: Object,
        createItemForm: String,
        btnAddItemForm: String,
        btnRemoveItemForm: String,
        doctor: Object,
        prescribedPatient: Object,
        tagsFromAll: Array,
    },
    data() {
        return {
            search: "",
            tagsSelected: [],
            page: 1,
            max: 10,
            configArray: this.config,
            searchBox: false,
            searchBoxItems: null,
            searchBoxItemSelected: null,
            patients: null,
            removeItemBox: false,
            removeItemDetail: { worksheet: {}, patient: {} },
            itemsList: this.items,
        };
    },
    watch: {
        itemsList(newitemsList, olditemsList) {},
    },
    computed: {
        itemsListArray: {
            get() {
                let il;
                if (!this.itemsList.length) {
                    il = this.items;
                } else {
                    il = this.itemsList;
                }

                return il;
            },
            set(newItemsList) {
                this.itemsList = newItemsList;
            },
        },
        tagsFromAllArray() {
            return this.tagsFromAll;
        },
        getAllVideoTags() {
            return f.getAllVideoTags(this.itemsListArray);
        },
    },
    methods: {
        sortData(evt, data, sortKey, type) {
            return f.sortData(evt, data, sortKey, type);
        },
        getSearch(data, search) {
            let itemsFiltered = f.getSearch(data, search);
            // this.page = 1;

            if (this.tagsSelected.length > 0) {
                return itemsFiltered.filter((item) => {
                    let result = false;

                    if ("worksheet" === this.configArray.target) {
                        if (item.exercisesTags) {
                            item.exercisesTags.forEach((tag) => {
                                if (this.tagsSelected.includes(tag)) {
                                    result = true;
                                }
                            });
                        }
                    }

                    if ("video" === this.configArray.target) {
                        if (item.tags) {
                            item.tags.forEach((tag) => {
                                if (this.tagsSelected.includes(tag.name)) {
                                    result = true;
                                }
                            });
                        }
                    }

                    return result;
                });
            }

            return itemsFiltered;
        },
        formatDate(datetime) {
            return f.formatDate(datetime);
        },
        getAge(dateString) {
            return f.generateAgeFromDateOfBirth(dateString);
        },
        prescriptionForPatient(fiche) {
            const idPatient = this.prescribedPatient.id;
            const idWorksheet = fiche.id;
            document.location.href = `/kine/${this.doctor.id}/create/worksheet/${idWorksheet}/${idPatient}`;
        },
        searchBoxToggle(item) {
            this.searchBoxItemSelected = item;
            return (this.searchBox = !this.searchBox);
        },
        addVideo(video) {
            this.$emit("add-video", video);
        },
        removeVideo(video) {
            this.$emit("remove-video", video);
        },
        removeItem(item) {
            this.removeItemDetail = item;

            // pour un loader sur le btn "confirmer" de la modale
            f.setLoaderToBtnValidationForm();

            return (this.removeItemBox = !this.removeItemBox);
        },
        validRemoveItem() {
            let btnRemoveItemFormWithId = "";

            if (this.btnRemoveItemForm) {
                btnRemoveItemFormWithId = this.btnRemoveItemForm.replace(
                    `<input type="hidden" name="_id" value="">`,
                    `<input type="hidden" name="_id" value="${this.removeItemDetail.id}">`
                );
            }

            return btnRemoveItemFormWithId;
        },
        removeChips(item) {
            this.tagsSelected.splice(this.tagsSelected.indexOf(item), 1);
            this.tagsSelected = [...this.tagsSelected];
        },
    },
    created() {
        if (this.configArray.nbItemsPerPage) {
            this.max = this.configArray.nbItemsPerPage;
        }
        if (
            !this.searchBoxItems &&
            this.doctor &&
            this.configArray.searchBoxConfig &&
            "patient" === this.configArray.searchBoxConfig.target
        ) {
            this.axios
                .get(`/kine/${this.doctor.id}/get/patients`)
                .then((response) => {
                    this.searchBoxItems = response.data;
                });
        }
        if (
            !this.searchBoxItems &&
            this.doctor &&
            this.configArray.searchBoxConfig &&
            "worksheet" === this.configArray.searchBoxConfig.target
        ) {
            this.axios
                .get(`/kine/${this.doctor.id}/get/worksheets`)
                .then((response) => {
                    this.searchBoxItems = response.data;
                    f.generationTagsFromExercises(this.searchBoxItems);
                });
        }
    },
};
</script>

<style lang="scss">
$primary: #ffab2c;

.vs-table-content.videos-lib {
    border-radius: 0;

    .vs-table {
        overflow: visible;
    }
    .vs-table__tr:hover .vs-table__td {
        background: none;
    }
    .vs-table__header {
        border-radius: 0;
    }
    table {
        display: block;
        .vs-table__thead {
            display: block;
            .vs-table__tr {
                display: flex;
                padding: 0;
                justify-content: space-between;
                .vs-table__th {
                    flex: 1 !important;

                    &.thumbnail,
                    &.tags {
                        display: none;
                    }
                }
            }
        }
        .vs-table__tbody {
            display: flex;
            flex-wrap: wrap;

            .vs-table__tr {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                max-width: 20%;
                justify-content: space-between;
                padding: 0.5em 0;

                .vs-table__td {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    text-align: center;
                    line-height: 1.2;
                    padding: 0.3em 0;

                    div {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                    }

                    .chips-list {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;

                        .md-chip.md-chip-raised {
                            font-size: 0.5em;
                            width: initial;
                        }
                    }

                    .btn-primaki {
                        margin-top: 0.7em;
                        font-size: 0.8em;
                    }
                }
            }
        }
    }
}

.vs-table__th.max-width {
    max-width: 100px !important;
}

.v-input {
    max-width: none !important;
    border-radius: 1.2em;
}
.theme--light.v-label {
    color: rgba(0, 0, 0, 0.3);
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
    > .v-input__control
    > .v-input__slot {
    box-shadow: inset 0 3px 1px -2px rgb(17, 17, 37, 0.1),
        0 2px 2px 0 rgb(17, 17, 37, 0.05), 0 1px 5px 0 rgba(17, 17, 37, 0.05);
    background-color: #e9edf4;
}
.theme--light.v-list {
    background: #fff;
    color: $primary;
}

.v-text-field__slot {
    padding: 0.62em !important;
}

.v-select__slot {
    padding: 0.3em;
    position: relative;
    align-items: center;
    display: flex;
    max-width: 100%;
    min-width: 0;
    width: 100%;
}

.v-input {
    max-width: 45%;
}

.theme--light.v-input,
.theme--light.v-input input,
.theme--light.v-input textarea {
    color: $primary;
}
.v-list-item {
    min-height: 36px;
}
.v-menu__content {
    border-radius: 1.2em !important;
}
.v-input--selection-controls__input {
    width: 16px;
}
.v-simple-checkbox {
    margin-top: 4px;
}
.v-list-item__action {
    margin: 0;
}

.theme--light.v-chip:not(.v-chip--active) {
    background: $primary;
    color: white;

    svg {
        color: white;
    }
}
.v-chip.v-size--default {
    border-radius: 16px;
    font-size: 9.8px;
    height: 25px;
    margin: 3px 5px;
    text-transform: uppercase;
}

.search-bloc {
    display: flex;
    flex-direction: column;
    margin-bottom: -1.4em;

    .search-text {
        margin-right: 0;
        flex: 4;
    }

    .search-chips {
        flex: 3;
    }

    @media (min-width: 576px) {
        flex-direction: row;
        .search-text {
            margin-right: 1em;
        }
    }
}

.video-selected {
    background-color: #fffbda;
    position: relative;

    &::after {
        z-index: 100;
        position: absolute;
        top: -6px;
        right: -6px;
        content: "";
        font-family: "Feather" !important;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        background-color: #f9fbfd;
        padding: 0.3em;
        font-size: 1.1em;
        border-radius: 50%;
        color: $primary;
        border: 2px solid $primary;
        box-shadow: 0 0.3rem 0.5rem rgb(134 134 135 / 46%) !important;
    }

    .vs-button.btn-primaki,
    .btn-primaki {
        color: $primary;
        background: white;
        border-color: $primary !important;
        border: 2px solid $primary;
        box-shadow: 0 0.3rem 0.5rem rgb(134 134 135 / 46%) !important;
    }
}
tr.unverified {
    position: relative;

    td:not(:first-child):not(:nth-child(2)):not(:last-child) {
        opacity: 0.25;
        pointer-events: none;
    }
}

th:first-child,
td:first-child {
    padding-left: 1.5em;
}

th.tags {
    cursor: initial;
}

th.thumbnail {
    cursor: initial;
    max-width: 70px;
}

th.date {
    max-width: 130px;
}

td.status {
    vertical-align: middle;

    div {
        display: flex;
        align-items: center;

        .icon-active-account,
        .icon-inactive-account {
            width: 1em;
            height: 1em;
            border-radius: 50%;
            border: 2px solid #d9e2ef;
        }

        .icon-active-account {
            background-color: #42ba96;
        }

        .icon-inactive-account {
            width: 0.88em;
            height: 0.88em;
            border: 2px solid #d9e2ef;
            background-color: #d9e2ef9e;
        }

        p {
            margin: 0;
            margin-left: 0.4em;
            color: #abbcd5;
            font-size: 0.8em;
        }
    }
}

td {
    .d-flex {
        display: flex;

        &.jc-lc {
            justify-content: flex-end;
        }
    }

    p {
        display: flex;
        margin-bottom: 0;
        align-items: center;
    }

    .vs-avatar-content {
        margin-right: 1em;
    }

    .actions {
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: center;

        .remove-item-btn {
            border-radius: 50%;
            background-color: #fee4bd;
            transition: all 0.5;
            color: $primary;
            width: 2.3em;
            height: 2.3em;

            &:hover {
                background-color: #d60f3a;
                color: white;
            }

            .vs-button__content {
                padding: 0.67em;
            }
            i {
                margin-right: -0.1em;
                position: relative;
            }
        }
    }

    .progress {
        width: 100%;
        max-width: 260px;
        height: 6px;
        background: #e1e4e8;
        border-radius: 3px;
        overflow: hidden;

        .progress-bar {
            display: block;
            height: 100%;
            background: linear-gradient(
                90deg,
                #ffd650,
                #ffb049 50%,
                #f59120 100%
            );
        }
    }
}

.vs-table_not-found {
    i {
        position: relative;
        top: 0.05em;
        color: #d2d2d2;
    }
}
</style>
