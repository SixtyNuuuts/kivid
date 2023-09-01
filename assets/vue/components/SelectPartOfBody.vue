<template>
    <div v-click-outside="hideSelectBox" class="select-filter" :class="{active:selectBox,partofbodyselected:getPartOfBodySelected}">
        <div v-show="!loadingPartsOfBody">
            <div
                v-show="getPartOfBodySelected"
                class="partofbody-selected part-of-body"
                @click="resetSelect"
            >
                <img
                    v-if="getPartOfBodySelected.icon === 'pied'"
                    src="../../img/icons/part-of-body/pied.svg"
                    alt="Icone Pied"
                    class="icon-pied"
                />
                <img
                    v-if="getPartOfBodySelected.icon === 'jambe'"
                    src="../../img/icons/part-of-body/jambe.svg"
                    alt="Icone Jambe"
                    class="icon-jambe"
                />
                <img
                    v-if="getPartOfBodySelected.icon === 'bras'"
                    src="../../img/icons/part-of-body/bras.svg"
                    alt="Icone Bras"
                    class="icon-bras"
                />
                <img
                    v-if="getPartOfBodySelected.icon === 'main'"
                    src="../../img/icons/part-of-body/main.svg"
                    alt="Icone Main"
                    class="icon-main"
                />
                <img
                    v-if="getPartOfBodySelected.icon === 'epaule'"
                    src="../../img/icons/part-of-body/epaule.svg"
                    alt="Icone Épaule"
                    class="icon-epaule"
                />
                <img
                    v-if="getPartOfBodySelected.icon === 'dos'"
                    src="../../img/icons/part-of-body/dos.svg"
                    alt="Icone Dos"
                    class="icon-dos"
                />
                <img
                    v-if="getPartOfBodySelected.icon === 'cervicales'"
                    src="../../img/icons/part-of-body/cervicales.svg"
                    alt="Icone Cervicales"
                    class="icon-cervicales"
                />
                <img
                    v-if="getPartOfBodySelected.icon === 'lombaires'"
                    src="../../img/icons/part-of-body/lombaires.svg"
                    alt="Icone Lombaires"
                    class="icon-lombaires"
                />
                <img
                    v-if="getPartOfBodySelected.icon === 'thoracique'"
                    src="../../img/icons/part-of-body/thoracique.svg"
                    alt="Icone Thoracique"
                    class="icon-thoracique"
                />
                <span class="text wsnw">{{ getPartOfBodySelected.name }}</span>
            </div>
            <input
                v-show="!getPartOfBodySelected"
                v-model="filter"
                @click="toggleSelectBox"
                @keyup="selectBoxWithThrottle"
                id="partofbody-choice-select"
                :class="{ 'b-r-b-zero': selectBox }"
                autocomplete="off"
                :placeholder="!selectBox ? 'Partie du corps' : 'Recherchez'"
            />
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
                    <ul v-if="partsOfBodyFiltered.length">
                        <li v-for="(part, i) in partsOfBodyFiltered" :key="i">
                            <div
                                class="part-of-body"
                                @click="selectPartOfBody(part)"
                            >
                                <img
                                    v-if="part.icon === 'pied'"
                                    src="../../img/icons/part-of-body/pied.svg"
                                    alt="Icone Pied"
                                    class="icon-pied"
                                />
                                <img
                                    v-if="part.icon === 'jambe'"
                                    src="../../img/icons/part-of-body/jambe.svg"
                                    alt="Icone Jambe"
                                    class="icon-jambe"
                                />
                                <img
                                    v-if="part.icon === 'bras'"
                                    src="../../img/icons/part-of-body/bras.svg"
                                    alt="Icone Bras"
                                    class="icon-bras"
                                />
                                <img
                                    v-if="part.icon === 'main'"
                                    src="../../img/icons/part-of-body/main.svg"
                                    alt="Icone Main"
                                    class="icon-main"
                                />
                                <img
                                    v-if="part.icon === 'epaule'"
                                    src="../../img/icons/part-of-body/epaule.svg"
                                    alt="Icone Épaule"
                                    class="icon-epaule"
                                />
                                <img
                                    v-if="part.icon === 'dos'"
                                    src="../../img/icons/part-of-body/dos.svg"
                                    alt="Icone Dos"
                                    class="icon-dos"
                                />
                                <img
                                    v-if="part.icon === 'cervicales'"
                                    src="../../img/icons/part-of-body/cervicales.svg"
                                    alt="Icone Cervicales"
                                    class="icon-cervicales"
                                />
                                <img
                                    v-if="part.icon === 'lombaires'"
                                    src="../../img/icons/part-of-body/lombaires.svg"
                                    alt="Icone Lombaires"
                                    class="icon-lombaires"
                                />
                                <img
                                    v-if="part.icon === 'thoracique'"
                                    src="../../img/icons/part-of-body/thoracique.svg"
                                    alt="Icone Thoracique"
                                    class="icon-thoracique"
                                />
                                <span class="text wsnw">{{ part.name }}</span>
                            </div>
                        </li>
                    </ul>
                    <div v-else>
                        <p class="not-found-pob">
                            Aucune partie du corps ne correspond.
                        </p>
                    </div>
                </div>
            </transition>
        </div>
        <div v-show="loadingPartsOfBody" class="loading-gray loading-pob"></div>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
    props: {
        partOfBody: Object,
    },
    directives: {
        ClickOutside,
    },
    data() {
        return {
            partsOfBody: [],
            filter: "",
            selectBox: false,
            selectInput: null,
            loadingPartsOfBody: false,
            selectBoxThrottle: false,
        };
    },
    computed: {
        getPartOfBodySelected() {
            if (!this.partOfBody) {
                return "";
            }
            return this.partOfBody;
        },
        partsOfBodyFiltered() {
            return this.sortByPosition(
                this.partsOfBody.filter((p) =>
                    p.name
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase()
                        .includes(
                            this.filter
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "")
                                .toLowerCase()
                        )
                )
            );
        },
    },
    methods: {
        toggleSelectBox() {
            this.selectBox = !this.selectBox;
            if (this.partOfBody != null) {
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
            this.$emit("partOfBodySelected", partofbody);
            this.hideSelectBox();
        },
        resetSelect() {
            this.$emit("partOfBodyReset", true);

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
        selectBoxWithThrottle() {
            if (!this.selectBoxThrottle) {
                this.selectBoxThrottle = true;
                this.selectBox = true;

                setTimeout(() => {
                    this.selectBoxThrottle = false;
                }, 1000);
            }
        },
        sortedPoBNameByAlphabet(array) {
            array.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            return array;
        },
        sortByPosition(array) {
            array.sort(function (a, b) {
            return a.position - b.position
            })
            return array
        },
    },
    created() {
        this.loadingPartsOfBody = true;

        this.axios
            .get(`/get/parts-of-body`)
            .then((response) => {
                this.partsOfBody = response.data;

                this.loadingPartsOfBody = false;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                console.error(errorMess);
            });
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

    .loading-pob {
        border-radius: 0.6rem;
        height: 4.8rem;
        width: 100%;
    }

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
        padding-right: 4.3rem;
        cursor: pointer;
        transition: all 0.25s;
        border: 0.1rem solid $gray-middle;
        background: $white;

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

        &::placeholder {
            color: $gray-dark;
            font-size: 1.4rem;
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

        .not-found-pob {
            font-size: 1.3rem;
            animation: fadeEnter 0.5s;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 1.2rem;
        }
    }

    .partofbody-selected {
        font-size: 1.5rem;
        border-radius: 0.5rem;
        padding: 1.5rem 2rem !important;
        padding-right: 4.6rem !important;
        padding-top: 1.6rem !important;
        padding-bottom: 1.3rem !important;
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

        .text {
            position: relative;
            top: 0.1rem;
            font-size: 1.5rem;
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
