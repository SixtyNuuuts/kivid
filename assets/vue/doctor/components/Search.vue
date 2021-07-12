<template>
    <div>
        <h2><i class="fe fe-search"></i>{{ configArray.title }}</h2>

        <div v-click-outside="resetSearch" class="search">
            <vs-input
                v-model="search"
                type="search"
                :placeholder="configArray.placeholder"
                :class="{ 'without-border-radius-bottom': search }"
            >
                <template #icon>
                    <i class="fe fe-search"></i>
                </template>
            </vs-input>
            <div v-if="search" class="search-active">
                <span v-if="itemsFiltered.length <= 1">
                    {{ itemsFiltered.length }} {{ configArray.target }}
                </span>
                <span v-else>
                    {{ itemsFiltered.length }} {{ configArray.target + "s" }}
                </span>
            </div>
            <transition name="height">
                <div v-if="search" class="filtered-items-box vs-alert--shadow">
                    <div v-if="itemsFiltered.length">
                        <div
                            v-for="(item, i) in itemsFiltered"
                            :key="i"
                            class="item-user"
                        >
                            <div v-for="(div, i) in configArray.items" :key="i">
                                <div class="user" v-if="'user' === div.type">
                                    <vs-avatar
                                        circle
                                        size="35"
                                        class="avatar"
                                        v-if="item.avatarUrl"
                                    >
                                        <img
                                            :src="item.avatarUrl"
                                            alt="avatar"
                                        />
                                    </vs-avatar>
                                    <vs-avatar
                                        circle
                                        size="35"
                                        class="avatar"
                                        v-else
                                    >
                                        <img
                                            src="/img/avatar-default.svg"
                                            alt="avatar"
                                        />
                                    </vs-avatar>
                                    {{ item.lastname }}
                                    {{ item.firstname }}
                                    <span
                                        v-if="item.lastname || item.firstname"
                                        class="tiret"
                                    >
                                        -
                                    </span>
                                    {{ item.email }}
                                    <span v-if="item.birthdate" class="tiret">
                                        -
                                    </span>
                                    {{ getAge(item.birthdate) }}
                                    <span v-if="item.birthdate" class="age">
                                        ans</span
                                    >
                                </div>
                                <div
                                    v-if="'actions' === div.type"
                                    class="actions"
                                >
                                    <div
                                        v-for="(btn, i) in div.buttons"
                                        :key="i"
                                    >
                                        <div v-if="'addItem' === btn.type">
                                            <div
                                                v-if="'patient' === btn.target"
                                            >
                                                <div
                                                    v-if="item.doctor"
                                                    class="current-doctor"
                                                >
                                                    <vs-button flat>
                                                        suivi par
                                                        <em>
                                                            {{
                                                                item.doctor
                                                                    .lastname
                                                            }}
                                                            {{
                                                                item.doctor
                                                                    .firstname
                                                            }}
                                                        </em>
                                                        <vs-avatar
                                                            circle
                                                            size="25"
                                                        >
                                                            <img
                                                                :src="
                                                                    item.doctor
                                                                        .urlAvatar
                                                                        ? item
                                                                              .doctor
                                                                              .urlAvatar
                                                                        : '/img/avatar-default.svg'
                                                                "
                                                                alt="avatar du kiné"
                                                            />
                                                        </vs-avatar>
                                                    </vs-button>
                                                </div>
                                                <div v-else>
                                                    <a
                                                        :class="
                                                            btn.content.class
                                                        "
                                                        @click="
                                                            addItem(
                                                                item,
                                                                btn.target
                                                            )
                                                        "
                                                    >
                                                        <i
                                                            :class="
                                                                btn.content.icon
                                                            "
                                                        ></i>
                                                        {{ btn.content.text }}
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                v-if="
                                                    'prescription' ===
                                                    btn.target
                                                "
                                            >
                                                <div>
                                                    <a
                                                        :class="
                                                            btn.content.class
                                                        "
                                                        @click="
                                                            addItem(
                                                                item,
                                                                btn.target
                                                            )
                                                        "
                                                    >
                                                        <i
                                                            :class="
                                                                btn.content.icon
                                                            "
                                                        ></i>
                                                        {{ btn.content.text }}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="no-found">
                            <i :class="configArray.notFound.search.icon"></i>
                            {{ configArray.notFound.search.message }}
                            "<strong>{{ search }}</strong
                            >"<span v-if="configArray.notFound.secondLine"
                                >,
                                <br />
                                <em>{{
                                    configArray.notFound.secondLine.message
                                }}</em>
                            </span>
                        </p>
                    </div>
                </div>
            </transition>
        </div>
        <vs-dialog class="add-item-box" v-model="addItemBox">
            <div v-if="'patient' === addItemBtnTarget">
                <p class="add-item-text">
                    Confirmer l'<strong>ajout</strong> de
                </p>

                <div class="add-item-detail" v-if="addItemDetail.lastname">
                    <div class="add-item-icon">
                        <i class="fe fe-user-plus"></i>
                    </div>
                    <p>
                        {{ addItemDetail.lastname }}
                        {{ addItemDetail.firstname }}
                    </p>
                </div>

                <p class="add-item-text">à votre liste.</p>
            </div>

            <div v-if="'prescription' === addItemBtnTarget">
                <p class="add-item-text">
                    Confirmer la <strong>prescription</strong>
                </p>

                <div class="add-item-detail" v-if="addItemDetail.lastname">
                    <div class="add-item-icon">
                        <i class="fe fe-file-plus"></i>
                    </div>
                    <p>
                        {{ targetedItem.title }}
                        <br />pour
                        {{ addItemDetail.lastname }}
                        {{ addItemDetail.firstname }}
                    </p>
                </div>
            </div>

            <div class="add-item-buttons">
                <vs-button @click="addItemBox = false" dark transparent>
                    Annuler
                </vs-button>
                <div v-html="validAddItem()"></div>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import f from "../../services/function";

export default {
    name: "Search",
    props: {
        items: Array,
        config: Object,
        targetedItem: Object,
        addItemForm: String,
        createTargetedItemForm: String,
    },
    directives: {
        ClickOutside,
    },
    data() {
        return {
            search: "",
            configArray: this.config,
            addItemBox: false,
            addItemDetail: {},
            addItemBtnTarget: null,
        };
    },
    methods: {
        resetSearch() {
            this.search = "";
        },
        getAge(dateString) {
            return f.generateAgeFromDateOfBirth(dateString);
        },
        addItem(item, btnTarget) {
            this.addItemDetail = item;
            this.addItemBtnTarget = btnTarget;

            // pour un loader sur le btn "confirmer" de la modale
            f.setLoaderToBtnValidationForm();

            return (this.addItemBox = !this.addItemBox);
        },
        validAddItem() {
            let addItemFormWithId = "";

            if ("patient" === this.addItemBtnTarget) {
                addItemFormWithId = this.addItemForm.replace(
                    `<input type="hidden" name="_id" value="">`,
                    `<input type="hidden" name="_id" value="${this.addItemDetail.id}">`
                );
            }

            if ("prescription" === this.addItemBtnTarget) {
                addItemFormWithId = this.createTargetedItemForm.replace(
                    `<input type="hidden" name="patient_id" value=""><input type="hidden" name="worksheet_id" value="">`,
                    `<input type="hidden" name="patient_id" value="${this.addItemDetail.id}"><input type="hidden" name="worksheet_id" value="${this.targetedItem.id}">`
                );
            }

            return addItemFormWithId;
        },
    },
    computed: {
        itemsFiltered() {
            var lowSearch = this.search.toLowerCase();
            return this.items.filter((item) => {
                return Object.values(item).some((val) =>
                    String(val).toLowerCase().includes(lowSearch)
                );
            });
        },
    },
};
</script>

<style lang="scss">
$primary: #ffab2c;

.search {
    position: relative;
}

.search-active {
    position: absolute;
    bottom: 11px;
    right: 43.1px;
    color: #92a6c3;
    text-transform: uppercase;
    font-size: 0.7em;
}

/* Replace cancel btn into search input */
input[type="search"] {
    &::-webkit-search-cancel-button {
        /* Remove default */
        -webkit-appearance: none;
        /*Your new styles */
        height: 18px;
        width: 18px;
        cursor: pointer;
        background-image: url("../../../img/icons/x-circle.svg");
    }
}

.without-border-radius-bottom input[type="search"] {
    border-radius: 12px 12px 0 0;
}

.filtered-items-box {
    position: absolute;
    background-color: white;
    border-radius: 0 0 12px 12px;
    box-shadow: 0px 4px 15px 0px rgba(51, 34, 9, 0.12);
    max-height: 15.5em;
    overflow: auto;
    z-index: 500;
    width: 100%;
    line-height: 1.3;
}

.item-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8em 0.9em;
    border-bottom: 1px solid #f1f4f8;
    color: #30343a;
    font-size: 0.8em;

    .user {
        display: flex;
        align-items: center;

        .avatar {
            margin-right: 0.6em;
        }

        span.age {
            margin-left: 0.25em;
        }

        span.tiret {
            color: $primary;
            margin: 0.5em;
        }
    }

    .actions {
        margin-left: 1em;

        .current-doctor {
            button {
                cursor: unset;
                border-radius: 1em;

                > div {
                    padding: 0.1em 0.55em;

                    em {
                        margin-left: 0.2em;
                    }
                    .vs-avatar {
                        margin-left: 0.5em;
                    }
                }
            }
        }
    }
}

p.no-found {
    text-align: center;
    margin: 0.7em;
    color: #95a2b5;
    font-size: 0.8em;
    i {
        margin-right: 0.3em;
        color: #fdc269;
    }
}

.vs-dialog-content.add-item-box {
    .vs-dialog {
        max-width: 200px;

        .vs-dialog__content.notFooter {
            padding: 2.1em 1.8em;
            padding-bottom: 1em;

            .add-item-text {
                font-size: 0.9em;
                text-align: center;

                strong {
                    font-weight: 700;
                }
            }

            .add-item-detail {
                display: flex;
                justify-content: center;
                padding: 0.8em 0;
                border-radius: 0.8em;
                background-color: #fffaf0;
                margin: 1em 0;
                margin-top: 0.8em;

                p {
                    display: flex;
                    margin-bottom: 0;
                    align-items: center;
                }

                .add-item-icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 0.6em;
                    width: 1.9em;
                    height: 1.9em;
                    border-radius: 50%;
                    background-color: $primary;

                    i {
                        color: white;
                    }
                }
            }

            .add-item-buttons {
                display: flex;
                justify-content: center;
                align-items: center;

                .vs-button__content {
                    font-size: 1.1em;
                    font-weight: 700;
                }
            }
        }
    }
}

.height-enter-active,
.height-leave-active {
    transition: all 0.5s;
}
.height-enter,
.height-leave-to {
    margin-bottom: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
}
</style>
