<template>
    <div class="container" id="worksheet">
        <header>
            <div v-if="loading" class="loading-block">
                <div class="title">
                    <i class="kiv-arrow-left icon-31"></i>
                    <div class="loading-gray h1"></div>
                </div>
                <div class="loading-gray part-of-body"></div>
            </div>
            <div v-else>
                <div v-if="patient" class="prescri-for-patient-content">
                    <i
                        class="kiv-arrow-left icon-31"
                        @click="rederictToDashboard()"
                    ></i>
                    <div class="prescri-for-patient">
                        <div class="label">prescription pour</div>
                        <vs-avatar size="26" class="user-avatar" circle>
                            <img
                                :src="
                                    patient.avatarUrl
                                        ? patient.avatarUrl
                                        : '/img/avatar-default.svg'
                                "
                                :alt="`Avatar de ${patient.firstname} ${patient.lastname}`"
                            />
                        </vs-avatar>
                        <div class="user-name">
                            <div>
                                <div
                                    v-if="patient.firstname || patient.lastname"
                                >
                                    {{ getCivility(patient.gender) }}
                                    {{ patient.firstname }}
                                    {{ patient.lastname }}
                                </div>
                                <div v-else>
                                    {{ patient.email }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="'voir' === action" class="title-view">
                    <div class="title">
                        <i
                            class="kiv-arrow-left icon-31"
                            :class="{ hidden: patient }"
                            @click="rederictToDashboard()"
                        ></i>
                        <h1>{{ getWorksheet.title }}</h1>
                    </div>
                    <TagPartOfBody
                        v-if="getWorksheet.partOfBody"
                        :partOfBody="getWorksheet.partOfBody"
                    />
                </div>
                <div v-else class="title">
                    <i
                        class="kiv-arrow-left icon-31"
                        :class="{ hidden: patient }"
                        @click="rederictToDashboard()"
                    ></i>
                    <vs-input
                        v-model="worksheet.title"
                        label-placeholder="Titre de la fiche"
                        type="text"
                        @keyup="titleIsEmptyMessage = null"
                    >
                        <template v-if="titleIsEmptyMessage" #message-danger>
                            {{ titleIsEmptyMessage }}
                        </template>
                    </vs-input>
                </div>

                <div v-if="'voir' !== action" class="worksheet-params">
                    <div
                        class="worksheet-details"
                        :class="{
                            disabled:
                                'edition' === action &&
                                checkIfWorksheetSessionsExist,
                        }"
                    >
                        <div
                            v-if="
                                'edition' === action &&
                                checkIfWorksheetSessionsExist
                            "
                            class="avert-sessions-start"
                        >
                            <i class="kiv-info icon-17"></i>
                            <p>
                                Vous ne pouvez plus modifier la durée de la
                                prescription car le patient a déjà démarré ses
                                sessions.
                            </p>
                        </div>
                        <div class="worksheet-timing-perweek">
                            <i class="kiv-calendar icon-10"></i>
                            <vs-input
                                v-model="worksheet.perWeek"
                                id="perWeek"
                                label-placeholder="X par sem. (max: 7)"
                                type="number"
                                @blur="
                                    checkIfDurationValueIsEmptyOrNull(
                                        worksheet.perWeek,
                                        $event
                                    )
                                "
                                max="7"
                            >
                            </vs-input>
                        </div>
                        <div class="worksheet-timing-perday">
                            <i class="kiv-calendar icon-10"></i>
                            <vs-input
                                v-model="worksheet.perDay"
                                id="perDay"
                                label-placeholder="X par jour (max: 3)"
                                type="number"
                                @blur="
                                    checkIfDurationValueIsEmptyOrNull(
                                        worksheet.perDay,
                                        $event
                                    )
                                "
                                max="3"
                            >
                            </vs-input>
                        </div>
                        <div class="worksheet-period">
                            <i class="kiv-clock icon-11"></i>
                            <vs-input
                                v-model="worksheet.duration"
                                id="duration"
                                label-placeholder="Durée en sem. (max: 52)"
                                type="number"
                                @blur="
                                    checkIfDurationValueIsEmptyOrNull(
                                        worksheet.duration,
                                        $event
                                    )
                                "
                                max="52"
                            >
                            </vs-input>
                        </div>
                    </div>
                    <div class="select-filter-block">
                        <SelectPartOfBody
                            :partOfBody="worksheet.partOfBody"
                            @partOfBodySelected="setPartOfBody"
                            @partOfBodyReset="resetPoB"
                        />
                        <div v-if="partOfBodyIsEmptyMessage" class="error-mess">
                            {{ partOfBodyIsEmptyMessage }}
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <section id="exercises-playlist">
                <ExercisesPlaylist
                    :doctor="doctor"
                    :loading="loading"
                    :action="action"
                    :worksheet="getWorksheet"
                    :exercises="getExercises"
                    :csrfTokenRemoveExercise="csrfTokenRemoveExercise"
                />
            </section>
        </main>
        <div
            class="btn-valid"
            :class="{
                disabled:
                    btnLoadingValidEditWorksheet ||
                    btnLoadingValidCreateWorksheet,
            }"
        >
            <vs-button
                v-if="'edition' === action"
                @click="validEdit"
                :loading="btnLoadingValidEditWorksheet"
            >
                <i class="fas fa-check-circle"></i>
                Valider les modifications
            </vs-button>
            <vs-button
                v-if="'creation' === action && !patient"
                @click="validCreate"
                :loading="btnLoadingValidCreateWorksheet"
            >
                <i class="fas fa-check-circle"></i>
                Créer la fiche
            </vs-button>
            <vs-button
                v-if="'creation' === action && patient"
                @click="validCreate"
                :loading="btnLoadingValidCreateWorksheet"
            >
                <i class="fas fa-check-circle"></i>
                Créer la prescription
            </vs-button>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import f from "../services/function";
import ExercisesPlaylist from "./Worksheet/ExercisesPlaylist.vue";
import TagPartOfBody from "../components/TagPartOfBody.vue";
import SelectPartOfBody from "../components/SelectPartOfBody.vue";

export default {
    components: {
        ExercisesPlaylist,
        SelectPartOfBody,
        TagPartOfBody,
    },
    data() {
        return {
            doctor: null,
            action: null,
            worksheetId: null,
            worksheet: {
                partOfBody: null,
                duration: 1,
                perDay: 1,
                perWeek: 1,
                title: "",
            },
            exercises: [],
            patient: null,
            csrfTokenCreateWorksheet: null,
            csrfTokenEditWorksheet: null,
            csrfTokenRemoveExercise: null,
            loading: false,
            maxDuration: {
                duration: 52,
                perDay: 3,
                perWeek: 7,
            },
            btnLoadingValidEditWorksheet: false,
            btnLoadingValidCreateWorksheet: false,
            checkIfWorksheetSessionsExist: null,
            titleIsEmptyMessage: null,
            partOfBodyIsEmptyMessage: null,
        };
    },
    computed: {
        getWorksheet() {
            return this.worksheet;
        },
        getExercises() {
            return this.exercises;
        },
    },
    methods: {
        setPartOfBody(partOfBody) {
            this.worksheet.partOfBody = partOfBody;
            this.partOfBodyIsEmptyMessage = "";
        },
        resetPoB() {
            this.worksheet.partOfBody = null;
        },
        rederictToDashboard() {
            document.location.href = `/doctor/${this.doctor.id}/dashboard`;
        },
        checkIfDurationValueIsEmptyOrNull(durationValue, event) {
            const durationType = event.target.id;

            if ("vs-input--duration" === durationType) {
                if ("" === durationValue || null === durationValue) {
                    this.worksheet.duration = 1;
                }
                if (durationValue < 1) {
                    this.worksheet.duration = 1;
                }
                if (durationValue > this.maxDuration.duration) {
                    this.worksheet.duration = this.maxDuration.duration;
                }
            }

            if ("vs-input--perDay" === durationType) {
                if ("" === durationValue || null === durationValue) {
                    this.worksheet.perDay = 1;
                }
                if (durationValue < 1) {
                    this.worksheet.perDay = 1;
                }
                if (durationValue > this.maxDuration.perDay) {
                    this.worksheet.perDay = this.maxDuration.perDay;
                }
            }

            if ("vs-input--perWeek" === durationType) {
                if ("" === durationValue || null === durationValue) {
                    this.worksheet.perWeek = 1;
                }
                if (durationValue < 1) {
                    this.worksheet.perWeek = 1;
                }
                if (durationValue > this.maxDuration.perWeek) {
                    this.worksheet.perWeek = this.maxDuration.perWeek;
                }
            }
        },
        checkIfEmpty() {
            let check = true;

            if (this.worksheet.title === "" || this.worksheet.title === null) {
                this.titleIsEmptyMessage =
                    "Vous devez entrer un titre pour la fiche.";
                check = false;
            }

            if (!this.worksheet.partOfBody) {
                this.partOfBodyIsEmptyMessage =
                    "Vous devez choisir une partie du corps";
                check = false;
            }

            return check;
        },
        validEdit() {
            this.btnLoadingValidEditWorksheet = true;

            const isNotEmpty = this.checkIfEmpty();

            if (isNotEmpty) {
                this.axios
                    .post(`/doctor/${this.doctor.id}/edit/worksheet`, {
                        _token: this.csrfTokenEditWorksheet,
                        worksheetId: this.worksheet.id,
                        title: this.worksheet.title,
                        partOfBodyId: this.worksheet.partOfBody.id,
                        duration: this.worksheet.duration,
                        perWeek: this.worksheet.perWeek,
                        perDay: this.worksheet.perDay,
                        exercises: this.exercises,
                    })
                    .then((response) => {
                        f.openSuccessNotification(
                            "Edition de la fiche",
                            response.data
                        );
                        this.btnLoadingValidEditWorksheet = false;

                        setTimeout(() => {
                            document.location.href = `/doctor/${this.doctor.id}/dashboard`;
                        }, 2000);
                    })
                    .catch((error) => {
                        const errorMess =
                            "object" === typeof error.response.data
                                ? error.response.data.detail
                                : error.response.data;

                        this.btnLoadingValidEditWorksheet = false;

                        f.openErrorNotification("Erreur", errorMess);
                    });
            } else {
                this.btnLoadingValidEditWorksheet = false;
            }
        },
        validCreate() {
            this.btnLoadingValidCreateWorksheet = true;

            const isNotEmpty = this.checkIfEmpty();

            if (isNotEmpty) {
                this.axios
                    .post(`/doctor/${this.doctor.id}/create/worksheet`, {
                        _token: this.csrfTokenCreateWorksheet,
                        worksheetId: this.worksheet.id,
                        patientId: this.patient ? this.patient.id : null,
                        title: this.worksheet.title,
                        partOfBodyId: this.worksheet.partOfBody.id,
                        duration: this.worksheet.duration,
                        perWeek: this.worksheet.perWeek,
                        perDay: this.worksheet.perDay,
                        exercises: this.exercises,
                    })
                    .then((response) => {
                        if (this.patient) {
                            f.openSuccessNotification(
                                "Création de la prescription",
                                `La fiche <strong> ${
                                    this.worksheet.title
                                }</strong> a été prescrite à
                                <strong>${this.getCivility(
                                    this.patient.gender
                                )} ${this.patient.firstname} ${
                                    this.patient.lastname
                                }</strong>.`
                            );
                        } else {
                            f.openSuccessNotification(
                                "Création de la fiche",
                                response.data
                            );
                        }
                        this.btnLoadingValidCreateWorksheet = false;
                        setTimeout(() => {
                            document.location.href = `/doctor/${this.doctor.id}/dashboard`;
                        }, 2000);
                    })
                    .catch((error) => {
                        const errorMess =
                            "object" === typeof error.response.data
                                ? error.response.data.detail
                                : error.response.data;
                        this.btnLoadingValidCreateWorksheet = false;
                        f.openErrorNotification("Erreur", errorMess);
                    });
            } else {
                this.btnLoadingValidCreateWorksheet = false;
            }
        },
        getCivility(gender) {
            return f.getCivility(gender);
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.worksheetId = data.worksheetId;
        this.action = data.action;
        this.patient = data.patient;
        this.csrfTokenCreateWorksheet = data.csrfTokenCreateWorksheet;
        this.csrfTokenEditWorksheet = data.csrfTokenEditWorksheet;
        this.csrfTokenRemoveExercise = data.csrfTokenRemoveExercise;

        this.loading = true;

        if (this.worksheetId != 0) {
            this.axios
                .get(
                    `/doctor/${this.doctor.id}/get/worksheet/${this.worksheetId}`
                )
                .then((response) => {
                    this.worksheet = response.data;

                    if (this.action === "creation" && !this.patient) {
                        this.worksheet.title = `Copie de ${this.worksheet.title}`;
                    }

                    this.axios
                        .get(
                            `/doctor/${this.doctor.id}/get/exercises/${this.worksheetId}`
                        )
                        .then((response) => {
                            this.exercises = response.data;

                            this.exercises = this.exercises.map((exercise) => {
                                return {
                                    ...exercise,
                                    option: exercise.option
                                        ? exercise.option
                                        : "",
                                    tempo: exercise.tempo ? exercise.tempo : "",
                                    hold: exercise.hold ? exercise.hold : "",
                                    optionActive: exercise.option
                                        ? true
                                        : false,
                                    tempoActive: exercise.tempo ? true : false,
                                    holdActive: exercise.hold ? true : false,
                                };
                            });
                            if ("edition" === this.action) {
                                this.axios
                                    .get(
                                        `/doctor/${this.doctor.id}/check/worksheet-sessions-exist/${this.worksheetId}`
                                    )
                                    .then((response) => {
                                        this.checkIfWorksheetSessionsExist =
                                            response.data;

                                        this.loading = false;
                                    })
                                    .catch((error) => {
                                        const errorMess =
                                            "object" ===
                                            typeof error.response.data
                                                ? error.response.data.detail
                                                : error.response.data;

                                        console.error(errorMess);
                                    });
                            } else {
                                this.loading = false;
                            }
                        })
                        .catch((error) => {
                            const errorMess =
                                "object" === typeof error.response.data
                                    ? error.response.data.detail
                                    : error.response.data;

                            console.error(errorMess);
                        });
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    console.error(errorMess);
                });
        } else {
            this.loading = false;
        }
    },
};
</script>

<style lang="scss">
@import "../../scss/variables";

#worksheet {
    .prescri-for-patient-content {
        i {
            font-size: 1.6rem;
            margin-right: 1.8rem;
            cursor: pointer;
            position: relative;
            top: 2.1rem;
        }

        .prescri-for-patient {
            background: #fff;
            display: flex;
            align-items: center;
            padding: 0.55rem 0.9rem;
            padding-top: 0.7rem;
            box-shadow: 0px 0.4rem 0.7rem rgba(148, 96, 77, 0.04);
            border-radius: 2.5rem;
            font-weight: 600;
            margin-bottom: 2.6rem;
            margin-left: 3.4rem;
            margin-top: -0.8rem;
            position: relative;

            .label {
                position: absolute;
                top: -1rem;
                left: 4rem;
                padding: 0.5rem 0.6rem;
                padding-bottom: 0.3rem;
                border-radius: 1.1rem;
                background: #f5f5f5;
                color: #9aa1b7;
                text-transform: uppercase;
                font-size: 0.8rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .user-avatar {
                min-width: 26px;
                max-height: 26px;
            }

            .user-name {
                font-size: 1.4rem;
                margin-left: 0.9rem;
                margin-right: 0.5rem;
                max-width: 63vw;

                div {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }

    header {
        > div {
            display: flex;
            align-items: flex-start;
            flex-direction: column;

            &.loading-block {
                min-height: 6rem;
                flex-direction: row;
                justify-content: flex-start;

                .title {
                    width: 13%;

                    i {
                        color: $gray-middle !important;
                    }

                    .h1 {
                        height: 3.5rem;
                        width: 18rem;
                        margin: 0;
                        border-radius: 0.5rem;
                    }
                }

                .part-of-body {
                    height: 2.7rem;
                    width: 9rem;
                    margin-top: 0.5rem;
                    margin-left: 2rem;
                    border-radius: 0.4rem;
                }
            }

            .vs-input-parent {
                width: 100%;

                .vs-input-content {
                    .vs-input {
                        background: rgba(255, 255, 255, 0.25);
                        padding-bottom: 1.5rem;

                        &:focus,
                        &:hover {
                            background: $white;
                        }
                    }

                    .vs-input__label {
                        max-width: 89%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                    }

                    .vs-input__label--hidden.vs-input__label--placeholder {
                        font-size: 1.4rem;
                        top: -0.85rem;
                        left: 1.3rem;
                    }
                }
            }

            .title-view {
                display: flex;
                align-items: center;
                margin-bottom: 3.7rem;

                h1,
                .title {
                    margin-bottom: 0;
                }

                .title {
                    max-width: 60vw;

                    @media (min-width: 768px) {
                        max-width: 81vw;
                    }
                }
            }

            .title {
                display: flex;
                align-items: center;
                margin-bottom: 3rem;
                position: relative;
                top: 0.3rem;
                width: 100%;
                max-width: initial;

                @media (min-width: 768px) {
                    margin-bottom: 3.7rem;
                }

                .vs-input-content {
                    .vs-input {
                        font-size: 2.9rem;
                        font-weight: 700;

                        @media (min-width: 768px) {
                            font-size: 3.5rem;
                        }
                    }

                    .vs-input__label {
                        font-size: 2.4rem;
                        top: 1.9rem;
                        left: 1.6rem;

                        @media (min-width: 768px) {
                            font-size: 3rem;
                        }
                    }
                }
            }

            .worksheet-params {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                width: 100%;
                margin-bottom: 3.9rem;

                @media (min-width: 768px) {
                    flex-direction: row;
                }

                .worksheet-details {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;

                    &.disabled {
                        opacity: 1 !important;

                        .worksheet-period,
                        .worksheet-timing-perday,
                        .worksheet-timing-perweek {
                            opacity: 0.2 !important;

                            .vs-input {
                                pointer-events: none;
                            }
                        }
                    }

                    .avert-sessions-start {
                        position: absolute;
                        z-index: 11;
                        top: -0.9rem;
                        left: -0.9rem;
                        right: 0;
                        bottom: 0;
                        width: 100%;
                        border-radius: 0.7rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: $black;
                        font-size: 1.3rem;
                        text-align: center;
                        padding: 0 14%;
                        line-height: 1.5;
                        text-shadow: 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                            0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                            0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                            0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                            0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                            0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                            0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff;
                        white-space: initial;
                        margin-top: 0;
                        pointer-events: none;
                        display: flex;
                        flex-direction: column;

                        i {
                            margin-right: 0rem;
                            margin-bottom: 0.25rem;
                            color: $black;
                            font-size: 1.2rem;
                            position: relative;
                            top: 0.05rem;
                        }

                        p {
                            margin: 0;
                        }

                        @media (min-width: 768px) {
                            margin-top: 1rem;
                        }

                        @media (min-width: 1070px) {
                            white-space: nowrap;
                            flex-direction: row;
                            i {
                                margin-right: 0.6rem;
                                margin-bottom: 0rem;
                            }
                        }
                    }

                    @media (min-width: 768px) {
                        flex-direction: row;
                        margin-left: 0.8rem;
                    }

                    > div {
                        flex-grow: 1;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        margin-right: 0;
                        margin-bottom: 2.4rem;

                        @media (min-width: 768px) {
                            &:not(:last-child) {
                                margin-right: 2rem;
                            }
                            margin-bottom: 0;
                        }

                        i {
                            color: $orange;
                            font-size: 2rem;
                            margin-right: 1.3rem;

                            @media (min-width: 768px) {
                                margin-right: 0.7rem;
                            }
                        }
                    }
                }

                .select-filter-block {
                    max-width: initial;
                    margin-left: 0;
                    width: 100%;

                    @media (min-width: 768px) {
                        max-width: 23rem;
                        margin-left: 2.5rem;
                    }

                    .part-of-body {
                        margin-top: 0;
                        margin-left: 0;
                    }

                    .error-mess {
                        color: $red;
                        margin-top: 0.7rem;
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
    main {
        display: flex;

        #exercises-playlist {
            width: 100%;
        }
    }
    .btn-valid {
        position: fixed;
        z-index: 1111;
        bottom: 2rem;
        right: 2rem;

        .vs-button {
            background: $black;
            color: $white;
            letter-spacing: 0.005rem;
            font-weight: 700;
            font-size: 1.4rem;
            box-shadow: 0px 0.8rem 1.8rem rgba(75, 61, 56, 0.55);
            border-radius: 0.5rem;

            .vs-button__loading {
                background: $black;
            }

            i {
                margin-right: 0.7rem;
                font-size: 1.4rem;
            }
        }
    }
}
</style>
