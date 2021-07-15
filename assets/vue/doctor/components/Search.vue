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
                    {{ itemsFiltered.length }}
                    {{
                        "worksheet" === configArray.target ||
                        "worksheet-prescribed-patient" === configArray.target
                            ? "fiche"
                            : configArray.target
                    }}
                </span>
                <span v-else>
                    {{ itemsFiltered.length }}
                    {{
                        "worksheet" === configArray.target ||
                        "worksheet-prescribed-patient" === configArray.target
                            ? "fiche" + "s"
                            : configArray.target + "s"
                    }}
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
                                    class="worksheet"
                                    v-if="'worksheet' === div.type"
                                >
                                    {{ item.title }}

                                    <div class="tags" v-if="item.exercisesTags">
                                        <div
                                            class="md-chip md-chip-raised"
                                            v-for="tag in item.exercisesTags"
                                            :key="tag"
                                        >
                                            {{ tag }}
                                        </div>
                                    </div>
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
                                                                    .gender
                                                                    ? "male" ===
                                                                      item
                                                                          .doctor
                                                                          .gender
                                                                        ? "M."
                                                                        : "Mme"
                                                                    : ""
                                                            }}
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
                                                                        .avatarUrl
                                                                        ? item
                                                                              .doctor
                                                                              .avatarUrl
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
                                            <div
                                                v-if="
                                                    'patient-with-prescription' ===
                                                        btn.target ||
                                                    'patient-without-prescription' ===
                                                        btn.target
                                                "
                                            >
                                                <div>
                                                    <a
                                                        :class="
                                                            btn.content.class
                                                        "
                                                        @click="creatItem()"
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

        <h2 v-if="configArray.createItem">
            <i class="fe fe-user-plus"></i>{{ configArray.createItem.title }}
        </h2>

        <div v-if="configArray.createItem">
            <div
                v-if="'patient' === configArray.createItem.target"
                class="imputs create-patient-form"
            >
                <div class="line">
                    <div class="vs-input-content">
                        <input
                            v-model="newUserForCreate.firstname"
                            type="text"
                            class="vs-input vs-input--has-icon form-control"
                            placeholder="Prénom"
                        />

                        <span class="vs-input__icon">
                            <i class="fe fe-user"></i>
                        </span>
                    </div>
                    <div class="vs-input-content">
                        <input
                            v-model="newUserForCreate.lastname"
                            type="text"
                            class="vs-input vs-input--has-icon form-control"
                            placeholder="Nom"
                        />

                        <span class="vs-input__icon">
                            <i class="fe fe-user"></i>
                        </span>
                    </div>
                </div>
                <div class="line">
                    <div class="vs-input-content select-civ">
                        <vs-select
                            placeholder="Civilité"
                            v-model="newUserForCreate.gender"
                        >
                            <vs-option label="M." value="1">M.</vs-option>
                            <vs-option label="Mme" value="2">Mme</vs-option>
                        </vs-select>
                    </div>
                    <div class="vs-input-content">
                        <input
                            v-model="newUserForCreate.email"
                            type="email"
                            required="required"
                            class="vs-input vs-input--has-icon form-control"
                            placeholder="Email"
                            autocomplete="email"
                            @keyup="validateUserEmail"
                        />

                        <transition name="fade">
                            <div
                                v-if="validateUserMessage.email"
                                class="validate-email-mess"
                            >
                                <i class="fe fe-alert-triangle"></i>
                                {{ validateUserMessage.email }}
                            </div>
                        </transition>

                        <span
                            class="vs-input__icon"
                            :class="{ 'data-error': validateUserMessage.email }"
                            >@</span
                        >
                    </div>
                </div>
                <div class="line mt-2">
                    <div
                        v-for="(btn, i) in configArray.createItem.buttons"
                        :key="i"
                    >
                        <transition name="fade">
                            <div
                                class="button"
                                :class="{
                                    disabled:
                                        validateUserMessage.email ||
                                        !newUserForCreate.email,
                                }"
                                v-if="'createItem' === btn.type"
                            >
                                <vs-button
                                    :class="btn.content.class"
                                    @click="createItem(btn.target)"
                                >
                                    <i :class="btn.content.icon"></i>
                                    {{ btn.content.text }}
                                </vs-button>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>

        <vs-dialog class="action-item-box" v-model="addItemBox">
            <div v-if="'patient' === addItemBtnTarget">
                <p class="action-item-text">Confirmer l'ajout de</p>

                <div class="action-item-detail" v-if="addItemDetail.lastname">
                    <div class="action-item-icon">
                        <i class="fe fe-user-plus"></i>
                    </div>
                    <p>
                        <span>
                            {{
                                addItemDetail.gender
                                    ? "male" === addItemDetail.gender
                                        ? "M."
                                        : "Mme"
                                    : ""
                            }}
                            {{ addItemDetail.lastname }}
                            {{ addItemDetail.firstname }}
                        </span>
                    </p>
                </div>

                <p class="action-item-text">à votre liste.</p>
            </div>

            <div v-if="'prescription' === addItemBtnTarget">
                <p class="action-item-text">Confirmer la prescription</p>

                <div class="action-item-detail">
                    <div class="action-item-icon">
                        <i class="fe fe-file-plus"></i>
                    </div>
                    <div v-if="'patient' === configArray.target">
                        <p>
                            <span>
                                {{ targetedItem.title }}
                            </span>
                            pour
                            <span>
                                {{
                                    addItemDetail.gender
                                        ? "male" === addItemDetail.gender
                                            ? "M."
                                            : "Mme"
                                        : ""
                                }}
                                {{ addItemDetail.lastname }}
                                {{ addItemDetail.firstname }}
                            </span>
                        </p>
                    </div>

                    <div v-if="'worksheet' === configArray.target">
                        <p>
                            <span>
                                {{ addItemDetail.title }}
                            </span>
                            pour
                            <span>
                                {{
                                    targetedItem.gender
                                        ? "male" === addItemDetail.gender
                                            ? "M."
                                            : "Mme"
                                        : ""
                                }}
                                {{ targetedItem.lastname }}
                                {{ targetedItem.firstname }}
                            </span>
                        </p>
                    </div>
                    <div
                        v-if="
                            'worksheet-prescribed-patient' ===
                            configArray.target
                        "
                    >
                        <p>
                            <span>
                                {{ addItemDetail.title }}
                            </span>
                            pour
                            <span>
                                {{
                                    prescribedPatient.gender
                                        ? "male" === addItemDetail.gender
                                            ? "M."
                                            : "Mme"
                                        : ""
                                }}
                                {{ prescribedPatient.lastname }}
                                {{ prescribedPatient.firstname }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="action-item-buttons">
                <vs-button @click="addItemBox = false" dark transparent>
                    Annuler
                </vs-button>
                <div v-html="validAddItem()"></div>
            </div>
        </vs-dialog>

        <vs-dialog class="action-item-box" v-model="createItemBox">
            <div>
                <p class="action-item-text">Confirmer la création du patient</p>

                <div class="action-item-detail">
                    <div class="action-item-icon">
                        <i class="fe fe-user-plus"></i>
                    </div>
                    <p>
                        <span
                            v-if="
                                newUserForCreate.lastname ||
                                newUserForCreate.firstname
                            "
                        >
                            {{ newUserForCreate.lastname }}
                            {{ newUserForCreate.firstname }}
                        </span>
                        <span>
                            {{ newUserForCreate.email }}
                        </span>
                    </p>
                </div>
            </div>

            <div class="action-item-buttons">
                <vs-button @click="addItemBox = false" dark transparent>
                    Annuler
                </vs-button>
                <div v-html="validCreatePatientForm()"></div>
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
        btnAddItemForm: String,
        btnAddItemForm: String,
        createItemForm: String,
        prescribedPatient: Object,
    },
    directives: {
        ClickOutside,
    },
    data() {
        return {
            search: "",
            configArray: this.config,
            addItemBox: false,
            createItemBox: false,
            addItemDetail: {},
            addItemBtnTarget: null,
            newUserForCreate: {
                firstname: null,
                lastname: null,
                email: null,
                gender: "",
            },
            validateUserMessage: {
                email: null,
            },
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
        validateUserEmail() {
            this.validateUserMessage.email = "";

            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(this.newUserForCreate.email).toLowerCase())) {
                this.validateUserMessage.email =
                    "Merci d'entrer un email valide.";
            }
        },
        createItem() {
            // pour un loader sur le btn "confirmer" de la modale
            f.setLoaderToBtnValidationForm();

            return (this.createItemBox = !this.createItemBox);
        },
        validCreatePatientForm() {
            let btnCreateItemFormWithPatient = "";

            if (this.configArray.createItem) {
                btnCreateItemFormWithPatient = this.createItemForm
                    .replace(
                        `id="create_patient_form_firstname"`,
                        `id="create_patient_form_firstname" value="${this.newUserForCreate.firstname}"`
                    )
                    .replace(
                        `id="create_patient_form_lastname"`,
                        `id="create_patient_form_lastname" value="${this.newUserForCreate.lastname}"`
                    )
                    .replace(
                        `id="create_patient_form_gender"`,
                        `id="create_patient_form_gender" value="${
                            this.newUserForCreate.gender
                                ? "1" === this.newUserForCreate.gender
                                    ? "male"
                                    : "female"
                                : ""
                        }"`
                    )
                    .replace(
                        `id="create_patient_form_email"`,
                        `id="create_patient_form_email" value="${this.newUserForCreate.email}"`
                    );
            }

            return btnCreateItemFormWithPatient;
        },
        validAddItem() {
            let btnAddItemFormWithId = "";

            if ("patient" === this.addItemBtnTarget) {
                btnAddItemFormWithId = this.btnAddItemForm.replace(
                    `<input type="hidden" name="_id" value="">`,
                    `<input type="hidden" name="_id" value="${this.addItemDetail.id}">`
                );
            }

            // if ("prescription" === this.addItemBtnTarget) {
            //     let patientId, worksheetId;

            //     if ("patient" === this.configArray.target) {
            //         patientId = this.addItemDetail.id;
            //         worksheetId = this.targetedItem.id;
            //     }

            //     if ("worksheet" === this.configArray.target) {
            //         patientId = this.targetedItem.id;
            //         worksheetId = this.addItemDetail.id;
            //     }

            //     btnAddItemFormWithId = this.btnAddItemForm.replace(
            //         `<input type="hidden" name="patient_id" value=""><input type="hidden" name="worksheet_id" value="">`,
            //         `<input type="hidden" name="patient_id" value="${patientId}"><input type="hidden" name="worksheet_id" value="${worksheetId}">`
            //     );
            // }

            return btnAddItemFormWithId;
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
    padding: 0.8em 1.2em;
    border-bottom: 1px solid #f1f4f8;
    color: #30343a;
    font-size: 0.8em;

    > div:first-child {
        max-width: 60%;
        overflow: hidden;
        @media (min-width: 500px) {
            max-width: 75%;
        }
    }

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

    .worksheet {
        display: flex;
        align-items: center;

        .tags {
            margin-left: 1em;
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

.imputs.create-patient-form {
    display: flex;
    flex-direction: column;

    .line {
        display: flex;
        flex-direction: column;
        div {
            width: 100%;
        }

        @media (min-width: 576px) {
            flex-direction: row;
        }

        .select-civ {
            max-width: none;
            @media (min-width: 576px) {
                max-width: 5em;
            }
        }

        .vs-select-content {
            max-width: none;
        }
        .validate-email-mess {
            display: flex;
            position: absolute;
            bottom: -5px;
            right: 9px;
            width: initial;
            font-size: 0.45em;
            background-color: white;
            border: 1px solid #df4759;
            border-radius: 1.7em;
            padding: 0.2em 0.9em;
            color: #df4759;
            text-transform: uppercase;
            z-index: 100;
            padding-top: 2px;

            i {
                margin-right: 2px;
                margin-top: 2px;
            }
        }
    }

    .button {
        display: flex;
        margin: 0.5em 0;
        line-height: 1.1;
        justify-content: flex-end;
        &.disabled {
            pointer-events: none;
            opacity: 0.5;
        }

        button {
            flex: 1;
            margin: 0;
            padding: 0.2em;
            font-size: 0.9em;

            i {
                margin-right: 0.3em;
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
