<template>
    <div
        v-click-outside="hideSelectBox"
        class="select-filter"
        :class="{ loading: loading }"
    >
        <div v-if="!loading">
            <div
                v-if="doctorSelected"
                class="doctor-selected doctor"
                @click="resetSelect"
            >
                <vs-avatar class="avatar" circle size="30">
                    <img
                        :src="
                            doctorSelected.avatarUrl
                                ? doctorSelected.avatarUrl
                                : '/img/avatar-default.svg'
                        "
                        :alt="`Avatar de ${doctorSelected.firstname} ${doctorSelected.lastname}`"
                    />
                </vs-avatar>
                <div class="name">
                    {{ getUserName(doctorSelected) }}
                </div>
            </div>
            <input
                v-else
                v-model="filter"
                @click="selectBox = true"
                @keyup="selectBoxWithThrottle"
                id="doctor-choice-select"
                :class="{
                    'b-r-b-zero': selectBox,
                    'placeholder-gray': selectBox,
                }"
                :placeholder="
                    !selectBox
                        ? 'Sélectionnez votre praticien'
                        : 'Recherchez votre praticien'
                "
                autocomplete="off"
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
                    v-if="selectBox"
                    class="select-box"
                    @click="focusInputSelect"
                >
                    <ul v-if="getDoctors.length">
                        <li v-for="(doctor, i) in getDoctors" :key="i">
                            <div class="doctor" @click="selectDoctor(doctor)">
                                <vs-avatar class="avatar" circle size="35">
                                    <img
                                        :src="
                                            doctor.avatarUrl
                                                ? doctor.avatarUrl
                                                : '/img/avatar-default.svg'
                                        "
                                        :alt="`Avatar de ${doctor.firstname} ${doctor.lastname}`"
                                    />
                                </vs-avatar>
                                <div class="name">
                                    {{ getUserName(doctor) }}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div v-else>
                        <p class="not-found">
                            <i class="fas fa-users-slash"></i>
                            <span>
                                Aucun praticien n'a été trouvé avec "<strong>{{
                                    filter
                                }}</strong
                                >"</span
                            >
                        </p>
                    </div>
                </div>
            </transition>
            <div
                class="empty-error-mess"
                v-if="errorMessage && !doctorSelected"
            >
                {{ errorMessage }}
            </div>
        </div>
        <div v-else class="loading-text">Chargement...</div>
    </div>
</template>

<script>
import f from "../services/function";
import ClickOutside from "vue-click-outside";

export default {
    props: {
        doctorSelected: [Object, null],
        errorMessage: [String, null],
    },
    directives: {
        ClickOutside,
    },
    data() {
        return {
            doctors: [],
            filter: "",
            selectBox: false,
            selectInput: null,
            loading: false,
        };
    },
    computed: {
        getDoctors() {
            return f.getSearch(this.doctors, this.filter);
        },
    },
    methods: {
        toggleSelectBox() {
            this.selectBox = !this.selectBox;
            if (this.doctorSelected) {
                this.resetSelect();
            }
            if (this.selectBox) {
                this.focusInputSelect();
            }
        },
        hideSelectBox() {
            this.selectBox = false;
        },
        selectDoctor(doctor) {
            this.$emit("setDoctorSelected", doctor);
            this.hideSelectBox();
        },
        resetSelect() {
            this.$emit("setDoctorSelected", null);

            setTimeout(() => {
                this.selectInput = document.getElementById(
                    "doctor-choice-select"
                );
                this.selectBox = true;
                this.focusInputSelect();
            }, 100);
        },
        focusInputSelect() {
            this.selectInput.focus();
        },
        getUserName(user) {
            return f.getUserName(user);
        },
        selectBoxWithThrottle() {
            if (!this.selectBoxThrottle) {
                this.selectBoxThrottle = true;
                this.selectBox = true;
                console.log("selectBox");

                setTimeout(() => {
                    this.selectBoxThrottle = false;
                }, 1000);
            }
        },
    },
    mounted() {
        this.loading = true;

        this.axios
            .get(`/get/doctors`)
            .then((response) => {
                this.doctors = response.data;
                this.loading = false;
            })
            .catch((error) => {
                if (error.response) {
                    console.log(
                        error.response.data.detail
                            ? error.response.data.detail
                            : error.response.data
                    );
                }
            });

        this.selectInput = document.getElementById("doctor-choice-select");
    },
};
</script>

<style lang="scss">
@import "../../scss/variables";

.select-filter {
    width: 100%;
    position: relative;
    transition: all 0.25s;
    min-height: 5.9rem;
    border-radius: 0.5rem;
    margin-bottom: 0.7rem;

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
        min-height: 5.006rem;
        font-size: 1.4rem;
        width: 100%;
        color: $black;
        border-radius: 0.5rem;
        padding: 1.4rem 1.7rem;
        padding-right: 4.5rem;
        cursor: pointer;
        border: 1px solid $white;
        transition: all 0.25s;
        border: 0.1rem solid $gray-middle;

        &:focus {
            border: 1px solid $white;
            transform: none;
            border-radius: 0.5rem 0.5rem 0 0;
            border: 0.1rem solid $gray-middle;
        }

        &::placeholder {
            color: $black;
            position: relative;
            top: 0.05rem;
        }

        &.placeholder-gray {
            &::placeholder {
                color: #b4ad9a;
                font-weight: 300;
            }
        }
    }

    .arrow-toggle-box {
        position: absolute;
        top: 0.7rem;
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
        top: 5.1rem;
        left: 0;
        width: 100%;
        z-index: 777;
        background: $white;
        border-radius: 0 0 0.5rem 0.5rem;
        overflow: hidden;
        box-shadow: 0px 10px 20px -5px rgba(44, 11, 11, 0.15);
        transition: all 0.3s cubic-bezier(0.19, 1.03, 0.79, 1.02);
        max-height: 26.3rem;
        overflow-y: auto;
        min-height: 6.7rem;
    }

    .doctor-selected {
        font-size: 1.5rem;
        border-radius: 0.5rem;
        padding: 1rem 1.5rem !important;
        padding-right: 4.6rem !important;
        cursor: pointer;
        border: 1px solid $white;
        background: $white;
        display: flex;
        align-items: center;
        transition: all 0.25s;
        border: 0.1rem solid $gray-middle;

        &.doctor .avatar {
            max-height: 3rem;
            min-width: 3rem;
            margin-right: 1.2rem;
        }

        &:hover {
            border: 0.1rem solid $gray-middle;
            // transform: translate(0, -0.4rem);
            box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.1);
            background: $white !important;
        }
    }

    .doctor {
        padding: 1.5rem 1.8rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        animation: fadeEnter 0.5s;
        font-size: 1.4rem;

        &:not(.doctor-selected):first-child {
            padding-top: 1.65rem;
        }

        &:not(.doctor-selected):last-child {
            padding-bottom: 1.65rem;
        }

        &:hover {
            background: rgba($gray-middle, 0.15);
        }

        .avatar {
            margin-right: 1.4rem;
            max-height: 3.5rem;
            min-width: 3.5rem;
        }

        .name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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

    &.big {
        .doctor {
            font-size: 1.5rem;
            border-radius: 0.8rem;

            .name {
                position: relative;
                top: 0.2rem;
            }
        }
    }

    .not-found {
        font-size: 1.35rem;
        margin: 0;
        animation: fadeEnter 0.5s;
        min-height: initial;

        i {
            font-size: 1.4rem;
            margin-right: 1.1rem;
            width: 3.8rem;
            height: 3.8rem;
            position: relative;
            top: 0;
        }
    }

    .loading-text {
        height: 5.7rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.6rem;
        margin-left: 1.6rem;
        color: #ccc;
        letter-spacing: 0.08rem;
    }
}
</style>
