<template>
    <section id="doctor-choice">
        <h1>Bienvenue sur Kivid !</h1>
        <h4>
            Vous n’avez pas encore de praticien attritré. <br />
            Recherchez-en dans la liste ci-dessous.
        </h4>
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
                    <vs-avatar class="avatar" circle size="35">
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
                        {{
                            doctorSelected.gender
                                ? getCivility(doctorSelected.gender)
                                : ""
                        }}
                        {{ doctorSelected.lastname }}
                        {{ doctorSelected.firstname }}
                    </div>
                </div>
                <input
                    v-else
                    v-model="filter"
                    @click="selectBox = true"
                    id="doctor-choice-select"
                    :class="{ 'b-r-b-zero': selectBox }"
                    autocomplete="off"
                />
                <div
                    class="placeholder"
                    :class="{ hidden: filter || doctorSelected }"
                >
                    <span v-if="!selectBox"> Sélectionnez un praticien </span>
                    <span v-else class="gray"> Recherchez un praticien </span>
                </div>
                <div
                    class="arrow-toggle-box"
                    :class="{ active: selectBox }"
                    @click="toggleSelectBox"
                >
                    <i class="kiv-chevron-down icon-3"></i>
                </div>
                <transition name="height">
                    <div
                        v-if="selectBox"
                        class="select-box"
                        @click="focusInputSelect"
                    >
                        <ul v-if="getDoctors.length">
                            <li v-for="(doctor, i) in getDoctors" :key="i">
                                <div
                                    class="doctor"
                                    @click="selectDoctor(doctor)"
                                >
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
                                        {{
                                            doctor.gender
                                                ? getCivility(doctor.gender)
                                                : ""
                                        }}
                                        {{ doctor.lastname }}
                                        {{ doctor.firstname }}
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div v-else>
                            <p class="not-found">
                                <i class="fas fa-users-slash"></i>
                                Aucun praticien n'a été trouvé avec "<strong>{{
                                    filter
                                }}</strong
                                >"
                            </p>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="btn-container">
            <vs-button :disabled="!doctorSelected" @click="valideDoctorChoice"
                >Valider et accéder à mon dashboard</vs-button
            >
        </div>
    </section>
</template>

<script>
import f from "../../services/function";
import ClickOutside from "vue-click-outside";

export default {
    props: {
        patient: Object,
        csrfTokenSelectDoctor: String,
    },
    directives: {
        ClickOutside,
    },
    data() {
        return {
            doctors: [],
            doctorSelected: null,
            filter: "",
            selectBox: false,
            selectInput: null,
            loading: false,
            footer: null,
        };
    },
    computed: {
        getDoctors() {
            return f.getSearch(this.doctors, this.filter);
        },
    },
    methods: {
        valideDoctorChoice() {
            this.axios
                .post(`/patient/${this.patient.id}/select/doctor`, {
                    _token: this.csrfTokenSelectDoctor,
                    doctorId: this.doctorSelected.id,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Choix du praticien enregistré",
                        response.data
                    );

                    this.patient.addRequestDoctor = true;

                    this.patient.doctor = this.doctorSelected;

                    this.footer.classList.remove("hidden");
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                });
        },
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
            this.doctorSelected = doctor;
            this.hideSelectBox();
        },
        resetSelect() {
            this.doctorSelected = null;

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
        getCivility(gender) {
            return f.getCivility(gender);
        },
    },
    mounted() {
        this.footer = document.querySelector(".footer");
        this.footer.classList.add("hidden");

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

<style lang="scss" scoped>
@import "../../../scss/variables";

#doctor-choice {
    max-width: 53rem;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .select-filter {
        width: 100%;
        margin-bottom: 3rem;
        position: relative;
        transition: all 0.25s;
        min-height: 5.9rem;
        border-radius: 0.8rem;

        &:hover {
            input {
                border: 1px solid $white;
                box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.1);
            }
        }

        input {
            &.b-r-b-zero {
                border-radius: 0.8rem 0.8rem 0 0;
            }

            width: 100%;
            color: $black;
            font-size: 1.5rem;
            border-radius: 0.8rem;
            padding: 1.9rem 2rem;
            padding-right: 4.5rem;
            cursor: pointer;
            border: 1px solid $white;
            transition: all 0.25s;

            &:focus {
                border: 1px solid $white;
                transform: none;
                border-radius: 0.8rem 0.8rem 0 0;
            }
        }

        .placeholder {
            position: absolute;
            top: 2.1rem;
            left: 2.2rem;
            font-size: 1.5rem;
            color: $black;
            transition: all 0.25s;
            pointer-events: none;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 70%;

            .gray {
                color: $gray-middle;
            }
        }

        .arrow-toggle-box {
            position: absolute;
            top: 1.3rem;
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
            }

            &.active {
                i {
                    top: -0.2rem;
                    transform: rotate(180deg);
                }
            }
        }

        .select-box {
            position: absolute;
            top: 5.5rem;
            left: 0;
            width: 100%;
            z-index: 100;
            background: $white;
            border-radius: 0 0 1.2rem 1.2rem;
            overflow: hidden;
            box-shadow: 0px 10px 20px -5px rgba(44, 11, 11, 0.15);
            transition: all 0.3s cubic-bezier(0.19, 1.03, 0.79, 1.02);
            max-height: 26rem;
            overflow-y: auto;
        }

        .doctor-selected {
            font-size: 1.5rem;
            border-radius: 0.8rem;
            padding: 1rem 2.2rem !important;
            padding-right: 4.6rem !important;
            cursor: pointer;
            border: 1px solid $white;
            background: $white;
            display: flex;
            align-items: center;
            transition: all 0.25s;

            &:hover {
                border: 1px solid $white;
                // transform: translate(0, -0.4rem);
                box-shadow: 0px 5px 25px -4px rgba(0, 0, 0, 0.1);
                background: $white !important;
            }
        }

        .doctor {
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

            .name {
                font-size: 1.5rem;
                flex-grow: 1;
                text-align: left;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }

        .not-found {
            font-size: 1.35rem;
            margin: 2.3rem 0;
            animation: fadeEnter 0.5s;

            i {
                font-size: 1.4rem;
                margin-right: 0.3rem;
                position: relative;
                top: 0;
            }
        }
    }

    h1 {
        margin-bottom: 3rem;
    }

    h4 {
        margin-bottom: 3rem;
    }

    .select-container {
        width: 100%;
        margin-bottom: 3rem;
    }
}
</style>
