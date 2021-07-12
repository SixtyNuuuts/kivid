<template>
    <div>
        <vs-table v-model="selected">
            <template #header>
                <vs-input v-model="search" border placeholder="Filtrer" />
            </template>
            <template #thead>
                <vs-tr>
                    <vs-th>
                        <vs-checkbox
                            :indeterminate="
                                selected.length == itemsArray.length
                            "
                            v-model="allCheck"
                            @change="
                                selected = $vs.checkAll(selected, itemsArray)
                            "
                        />
                    </vs-th>
                    <vs-th
                        v-for="(th, i) in configArray.items"
                        :key="i"
                        :sort="th.sort"
                        :class="{ tags: 'exercises-tags' === th.type }"
                        @click="
                            th.sort
                                ? (itemsArray = sortData(
                                      $event,
                                      itemsArray,
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
                        $vs.getSearch(itemsArray, search),
                        page,
                        max
                    )"
                    :data="item"
                    :is-selected="!!selected.includes(item)"
                    not-click-selected
                    :class="{ unverified: false === item.isVerified }"
                >
                    <vs-td checkbox>
                        <vs-checkbox :val="item" v-model="selected" />
                    </vs-td>

                    <vs-td
                        v-for="(td, i) in configArray.items"
                        :key="i"
                        :class="{ status: td.type === 'status' }"
                    >
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
                                <p v-if="'prescription' === configArray.target">
                                    {{ item.patient.lastname }}
                                    {{ item.patient.firstname }}
                                </p>
                            </div>
                        </div>
                        <div v-if="'email' === td.type">
                            {{ item.email }}
                        </div>
                        <div v-if="'title' === td.type">
                            <div v-if="'worksheet' === configArray.target">
                                {{ item.title }}
                            </div>
                            <div v-if="'prescription' === configArray.target">
                                {{ item.worksheet.title }}
                            </div>
                        </div>
                        <div v-if="'birthdate' === td.type">
                            {{ getAge(item.birthdate) }}
                            <span v-if="item.birthdate" class="age"> ans</span>
                        </div>
                        <div v-if="'exercises-count' === td.type">
                            {{ item.exercises.length }}
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
                                        :class="btn.content.class"
                                        :href="btn.content.href"
                                    >
                                        <i :class="btn.content.icon"></i>
                                        {{ btn.content.text }}
                                    </a>
                                </div>
                                <div v-if="'searchItem' === btn.type">
                                    <a
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
                        $vs.getLength($vs.getSearch(itemsArray, search), max)
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
                :items="searchBoxItems"
                :config="configArray.searchBoxConfig"
                :targetedItem="searchBoxItemSelected"
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
        items: Array,
        config: Object,
        createItemForm: String,
        removeItemForm: String,
        doctor: Object,
    },
    data() {
        return {
            search: "",
            allCheck: false,
            page: 1,
            max: 10,
            selected: [],
            itemsArray: this.items,
            configArray: this.config,
            searchBox: false,
            searchBoxItems: null,
            searchBoxItemSelected: null,
            patients: null,
            removeItemBox: false,
            removeItemDetail: { worksheet: {}, patient: {} },
        };
    },
    methods: {
        sortData(evt, data, sortKey, type) {
            return f.sortData(evt, data, sortKey, type);
        },
        formatDate(datetime) {
            return f.formatDate(datetime);
        },
        getAge(dateString) {
            return f.generateAgeFromDateOfBirth(dateString);
        },
        searchBoxToggle(item) {
            this.searchBoxItemSelected = item;
            return (this.searchBox = !this.searchBox);
        },
        removeItem(item) {
            this.removeItemDetail = item;

            // pour un loader sur le btn "confirmer" de la modale
            f.setLoaderToBtnValidationForm();

            return (this.removeItemBox = !this.removeItemBox);
        },
        validRemoveItem() {
            const removeItemFormWithId = this.removeItemForm.replace(
                `<input type="hidden" name="_id" value="">`,
                `<input type="hidden" name="_id" value="${this.removeItemDetail.id}">`
            );

            return removeItemFormWithId;
        },
    },
    created() {
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
                    f.generationOfTagsFromExercises(this.searchBoxItems);
                });
        }
    },
};
</script>

<style lang="scss">
$primary: #ffab2c;

.vs-input {
    width: 100%;
}

tr.unverified {
    position: relative;

    td:not(:first-child):not(:nth-child(2)):not(:last-child) {
        opacity: 0.25;
        pointer-events: none;
    }
}

th.tags {
    cursor: initial;
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
