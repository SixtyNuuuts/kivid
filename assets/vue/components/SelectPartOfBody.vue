<template>
    <div v-click-outside="hideSelectBox" class="select-filter">
        <div>
            <div
                v-show="getPartOfBodySelected.length"
                class="partofbody-selected part-of-body"
                @click="resetSelect"
            >
                <img
                    v-if="groupPOB[0].includes(getPartOfBodySelected)"
                    src="../../img/icons/part-of-body/pied.svg"
                    alt="Icone Pied"
                    class="icon-pied"
                />
                <img
                    v-if="groupPOB[1].includes(getPartOfBodySelected)"
                    src="../../img/icons/part-of-body/jambe.svg"
                    alt="Icone Jambe"
                    class="icon-jambe"
                />
                <img
                    v-if="groupPOB[2].includes(getPartOfBodySelected)"
                    src="../../img/icons/part-of-body/bras.svg"
                    alt="Icone Bras"
                    class="icon-bras"
                />
                <img
                    v-if="groupPOB[3].includes(getPartOfBodySelected)"
                    src="../../img/icons/part-of-body/main.svg"
                    alt="Icone Main"
                    class="icon-main"
                />
                <img
                    v-if="groupPOB[4].includes(getPartOfBodySelected)"
                    src="../../img/icons/part-of-body/epaule.svg"
                    alt="Icone Épaule"
                    class="icon-epaule"
                />
                <img
                    v-if="groupPOB[5].includes(getPartOfBodySelected)"
                    src="../../img/icons/part-of-body/dos.svg"
                    alt="Icone Dos"
                    class="icon-dos"
                />
                <img
                    v-if="groupPOB[6].includes(getPartOfBodySelected)"
                    src="../../img/icons/part-of-body/cervicales.svg"
                    alt="Icone Cervicales"
                    class="icon-cervicales"
                />
                <img
                    v-if="groupPOB[7].includes(getPartOfBodySelected)"
                    src="../../img/icons/part-of-body/lombaires.svg"
                    alt="Icone Lombaires"
                    class="icon-lombaires"
                />
                <img
                    v-if="groupPOB[8].includes(getPartOfBodySelected)"
                    src="../../img/icons/part-of-body/thoracique.svg"
                    alt="Icone Thoracique"
                    class="icon-thoracique"
                />
                <span class="text">{{
                    formatPartOfBodyName(getPartOfBodySelected)
                }}</span>
            </div>
            <input
                v-show="!getPartOfBodySelected.length"
                v-model="filter"
                @click="selectBox = true"
                id="partofbody-choice-select"
                :class="{ 'b-r-b-zero': selectBox }"
                autocomplete="off"
            />
            <div
                class="placeholder"
                :class="{ hidden: filter || getPartOfBodySelected.length }"
            >
                <span v-show="!selectBox">
                    Sélectionnez la partie du corps concernée
                </span>
                <span v-show="selectBox" class="gray">
                    Recherchez la partie du corps concernée
                </span>
            </div>
            <div
                class="arrow-toggle-box"
                :class="{ active: selectBox }"
                @click="toggleSelectBox"
            >
                <i class="vs-icon-arrow"></i>
            </div>
            <transition name="height">
                <div
                    v-show="selectBox"
                    class="select-box"
                    @click="focusInputSelect"
                >
                    <ul>
                        <li v-for="(part, i) in partsOfBodyFiltered" :key="i">
                            <div
                                class="part-of-body"
                                @click="selectPartOfBody(part)"
                            >
                                <img
                                    v-if="groupPOB[0].includes(part)"
                                    src="../../img/icons/part-of-body/pied.svg"
                                    alt="Icone Pied"
                                    class="icon-pied"
                                />
                                <img
                                    v-if="groupPOB[1].includes(part)"
                                    src="../../img/icons/part-of-body/jambe.svg"
                                    alt="Icone Jambe"
                                    class="icon-jambe"
                                />
                                <img
                                    v-if="groupPOB[2].includes(part)"
                                    src="../../img/icons/part-of-body/bras.svg"
                                    alt="Icone Bras"
                                    class="icon-bras"
                                />
                                <img
                                    v-if="groupPOB[3].includes(part)"
                                    src="../../img/icons/part-of-body/main.svg"
                                    alt="Icone Main"
                                    class="icon-main"
                                />
                                <img
                                    v-if="groupPOB[4].includes(part)"
                                    src="../../img/icons/part-of-body/epaule.svg"
                                    alt="Icone Épaule"
                                    class="icon-epaule"
                                />
                                <img
                                    v-if="groupPOB[5].includes(part)"
                                    src="../../img/icons/part-of-body/dos.svg"
                                    alt="Icone Dos"
                                    class="icon-dos"
                                />
                                <img
                                    v-if="groupPOB[6].includes(part)"
                                    src="../../img/icons/part-of-body/cervicales.svg"
                                    alt="Icone Cervicales"
                                    class="icon-cervicales"
                                />
                                <img
                                    v-if="groupPOB[7].includes(part)"
                                    src="../../img/icons/part-of-body/lombaires.svg"
                                    alt="Icone Lombaires"
                                    class="icon-lombaires"
                                />
                                <img
                                    v-if="groupPOB[8].includes(part)"
                                    src="../../img/icons/part-of-body/thoracique.svg"
                                    alt="Icone Thoracique"
                                    class="icon-thoracique"
                                />
                                <span class="text">{{
                                    formatPartOfBodyName(part)
                                }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
    props: {
        partOfBody: String,
    },
    directives: {
        ClickOutside,
    },
    data() {
        return {
            partOfBodySelected: null,
            partsOfBody: [
                "pied",
                "cheville",
                "jambe",
                "cuisse",
                "genou",
                "bras",
                "coude",
                "avantbras",
                "main",
                "epaule",
                "dos",
                "dorsales",
                "cervicales",
                "lombaires",
                "bassin",
                "hanche",
                "thoracique",
                "abdominal",
            ],
            iconsForPOB: {
                pied: "pied",
                cheville: "pied",
                jambe: "jambe",
                cuisse: "jambe",
                genou: "jambe",
                bras: "bras",
                coude: "bras",
                avantbras: "bras",
                main: "main",
                epaule: "epaule",
                dos: "dos",
                dorsales: "dos",
                cervicales: "cervicales",
                lombaires: "lombaires",
                bassin: "lombaires",
                hanche: "lombaires",
                thoracique: "thoracique",
                abdominal: "thoracique",
            },
            groupPOB: [
                ["pied", "cheville"],
                ["jambe", "cuisse", "genou"],
                ["bras", "coude", "avantbras"],
                ["main"],
                ["epaule"],
                ["dos", "dorsales"],
                ["cervicales"],
                ["lombaires", "bassin", "hanche"],
                ["thoracique", "abdominal"],
            ],
            filter: "",
            selectBox: false,
            selectInput: null,
        };
    },
    computed: {
        getPartOfBodySelected() {
            if (this.partOfBodySelected != null) {
                return this.partOfBodySelected;
            }
            return this.partOfBody;
        },
        partsOfBodyFiltered() {
            return this.partsOfBody.filter((p) =>
                p.includes(
                    this.filter
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase()
                )
            );
        },
    },
    methods: {
        formatPartOfBodyName(partOfBody) {
            if ("epaule" === partOfBody) {
                return "Épaule";
            }
            if ("avantbras" === partOfBody) {
                return "Avant-bras";
            }
            return partOfBody.charAt(0).toUpperCase() + partOfBody.slice(1);
        },
        toggleSelectBox() {
            this.selectBox = !this.selectBox;
            if (
                this.partOfBodySelected != null &&
                this.partOfBodySelected.length
            ) {
                this.resetSelect();
            }
            if (this.selectBox) {
                this.focusInputSelect();
            }
        },
        hideSelectBox() {
            this.selectBox = false;
        },
        selectPartOfBody(partofbody) {
            this.partOfBodySelected = partofbody;
            this.$emit("partOfBodySelected", partofbody);
            this.hideSelectBox();
        },
        resetSelect() {
            this.partOfBodySelected = "";

            setTimeout(() => {
                this.selectInput = document.getElementById(
                    "partofbody-choice-select"
                );
                this.selectBox = true;
                this.focusInputSelect();
            }, 100);
        },
        focusInputSelect() {
            this.selectInput.focus();
        },
    },
    mounted() {
        this.selectInput = document.getElementById("partofbody-choice-select");
    },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.select-filter {
    width: 100%;
    position: relative;
    transition: all 0.25s;
    border-radius: 0.5rem;

    &:hover {
        input {
            box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.1);
            border: 0.1rem solid $gray-middle;
        }
    }

    input {
        &.b-r-b-zero {
            border-radius: 0.5rem 0.5rem 0 0;
        }
        min-height: 4.9rem;
        width: 100%;
        color: $black;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        padding: 1.4rem 1.7rem;
        cursor: pointer;
        transition: all 0.25s;
        border: 0.1rem solid $gray-middle;
        background: transparent;

        &:hover {
            background: $white;
        }

        &:focus {
            border: 1px solid $white;
            background: $white;
            transform: none;
            border-radius: 0.5rem 0.5rem 0 0;
            border: 0.1rem solid $gray-middle;
        }
    }

    .placeholder {
        position: absolute;
        top: 1.7rem;
        left: 1.8rem;
        font-size: 1.4rem;
        color: $gray-dark;
        transition: all 0.25s;
        pointer-events: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 65%;

        .gray {
            color: #d2ccbd;
        }
    }

    .arrow-toggle-box {
        position: absolute;
        top: 0.6rem;
        right: 0.7rem;
        width: 3.8rem;
        height: 3.4rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        transition: all 0.25s;

        i {
            transition: all 0.25s;
            position: relative;

            &.vs-icon-arrow {
                width: 1rem;
                height: 1rem;
                color: #222e54;
                margin-top: -0.5rem;
                right: 1.6rem;
                z-index: 600;
                position: absolute;
                right: 15px;
                margin-top: -2px;
                transition: all 0.25s ease;
                pointer-events: auto;
                cursor: pointer;

                &::before {
                    top: 0px;
                    content: "";
                    width: 1px;
                    height: 100%;
                    background: rgba(var(--vs-text), 1);
                    position: absolute;
                    display: block;
                }

                &::after {
                    content: "";
                    width: 100%;
                    height: 1px;
                    background: rgba(var(--vs-text), 1);
                    position: absolute;
                    display: block;
                    top: 0px;
                }
            }
        }

        &.active {
            i {
                top: 1.9rem;
                transform: rotate(45deg);
            }
        }
    }

    .select-box {
        position: absolute;
        top: 4.9rem;
        left: 0;
        width: 100%;
        z-index: 777;
        background: $white;
        border-radius: 0 0 0.5rem 0.5rem;
        overflow: hidden;
        box-shadow: 0px 10px 20px -5px rgba(44, 11, 11, 0.15);
        transition: all 0.3s cubic-bezier(0.19, 1.03, 0.79, 1.02);
        max-height: 26rem;
        overflow-y: auto;
        min-height: 1.7rem;
    }

    .partofbody-selected {
        font-size: 1.5rem;
        border-radius: 0.5rem;
        padding: 1.5rem 2rem !important;
        padding-right: 4.6rem !important;
        padding-top: 1.7rem !important;
        padding-bottom: 1.4rem !important;
        cursor: pointer;
        border: 1px solid $white;
        background: $white;
        display: flex;
        align-items: center;
        transition: all 0.25s;
        border: 0.1rem solid $gray-middle;

        &:hover {
            border: 0.1rem solid $gray-middle;
            // transform: translate(0, -0.4rem);
            box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.1);
            background: $white !important;
        }
    }

    .partofbody {
        padding: 1.5rem 2.2rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        animation: fadeEnter 0.5s;

        &:hover {
            background: rgba($gray-middle, 0.15);
        }

        .avatar {
            margin-right: 1.5rem;
            max-height: 3.5rem;
            min-width: 3.5rem;
        }

        .text {
            flex: 1;
            overflow: hidden;

            .name {
                font-size: 1.4rem;
                flex-grow: 1;
                text-align: left;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-weight: 600;
                margin-bottom: 0.2rem;

                .birthdate {
                    background: #fff8ee;
                    color: #f5b85d;
                    font-size: 1.1rem;
                    padding: 0.2em 0.4em;
                    border-radius: 0.4em;
                    position: relative;
                    top: 0;
                    white-space: nowrap;
                    margin-left: 0.4rem;
                }
            }

            .email {
                font-size: 1.2rem;
                color: #91a3bd;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .part-of-body {
        background: #feeee8;
        color: $black;
        letter-spacing: 0.02rem;
        transition: all 0.3s;

        &:hover {
            background: #fdf6f4;
        }

        img {
            position: relative;
            margin-right: 0.6rem;

            &.icon-pied {
                top: -0.1rem;
                height: 1.4rem;
            }

            &.icon-jambe {
                top: 0rem;
                height: 1.75rem;
            }

            &.icon-bras {
                top: -0.1rem;
                height: 1.6rem;
            }

            &.icon-main {
                top: -0.1rem;
                height: 1.6rem;
            }

            &.icon-epaule {
                top: -0.1rem;
                height: 1.6rem;
            }

            &.icon-dos {
                top: -0.1rem;
                height: 1.6rem;
            }

            &.icon-cervicales {
                top: -0.1rem;
                height: 1.6rem;
            }

            &.icon-lombaires {
                top: 0rem;
                height: 1.7rem;
            }

            &.icon-thoracique {
                top: -0.1rem;
                height: 1.6rem;
            }
        }
    }

    .select-box {
        .part-of-body {
            padding: 1.1rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 1.5rem;
        }
    }
}
</style>
