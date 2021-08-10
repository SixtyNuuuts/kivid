<template>
    <div id="vue">
        <VideosAdd @videos-selection="addVideosSelection" />
        <div>
            <div class="vs-input-content new-worksheet-input worksheet-title">
                <input
                    v-model="worksheet.title"
                    id="title"
                    type="text"
                    class="vs-input vs-input--has-icon form-control"
                />
                <label :class="{ focus: worksheet.title.length }" for="title">
                    Titre de la fiche
                </label>
            </div>

            <vs-select
                label-placeholder="Partie du corps"
                v-model="worksheet.partOfBody"
                class="select-part-of-body"
            >
                <vs-option label="Genou" value="Genou">Genou</vs-option>
                <vs-option label="Cheville" value="Cheville"
                    >Cheville</vs-option
                >
                <vs-option label="Coude" value="Coude">Coude</vs-option>
                <vs-option label="Hanche" value="Hanche">Hanche</vs-option>
                <vs-option label="Epaule " value="Epaule">Epaule</vs-option>
                <vs-option label="Dos" value="Dos">Dos</vs-option>
            </vs-select>

            <div class="vs-input-content new-worksheet-input">
                <textarea
                    v-model="worksheet.description"
                    id="description"
                    class="vs-input vs-input--has-icon form-control"
                />
                <label
                    :class="{ focus: worksheet.description.length }"
                    for="description"
                    >Description de la fiche</label
                >
            </div>

            <div class="durations-inputs">
                <div class="vs-input-content new-worksheet-input">
                    <input
                        v-model="worksheet.duration"
                        id="duration"
                        type="number"
                        class="vs-input vs-input--has-icon form-control"
                        @keyup="
                            checkAndFormatDurationValue(
                                worksheet.duration,
                                $event
                            )
                        "
                        @blur="
                            checkIfDurationValueIsEmptyOrNull(
                                worksheet.duration,
                                $event
                            )
                        "
                        min="1"
                        max="52"
                    />
                    <label
                        :class="{ focus: worksheet.duration != '' }"
                        for="duration"
                    >
                        Durée de la prescription en semaine (max: 52)
                    </label>
                </div>
                <div class="vs-input-content new-worksheet-input">
                    <input
                        v-model="worksheet.perWeek"
                        id="perWeek"
                        type="number"
                        class="vs-input vs-input--has-icon form-control"
                        @keyup="
                            checkAndFormatDurationValue(
                                worksheet.perWeek,
                                $event
                            )
                        "
                        @blur="
                            checkIfDurationValueIsEmptyOrNull(
                                worksheet.perWeek,
                                $event
                            )
                        "
                        min="1"
                        max="7"
                    />
                    <label
                        :class="{ focus: worksheet.perWeek != '' }"
                        for="perWeek"
                    >
                        Nb de sessions par semaine (max: 7)
                    </label>
                </div>
                <div class="vs-input-content new-worksheet-input">
                    <input
                        v-model="worksheet.perDay"
                        id="perDay"
                        type="number"
                        class="vs-input vs-input--has-icon form-control"
                        @keyup="
                            checkAndFormatDurationValue(
                                worksheet.perDay,
                                $event
                            )
                        "
                        @blur="
                            checkIfDurationValueIsEmptyOrNull(
                                worksheet.perDay,
                                $event
                            )
                        "
                        min="1"
                        max="3"
                    />
                    <label
                        :class="{ focus: worksheet.perDay != '' }"
                        for="perDay"
                    >
                        Nb d'exécutions de la fiche par session (max: 3)
                    </label>
                </div>
            </div>

            <transition name="fade">
                <div v-if="exercisesSelected.length">
                    <vs-card
                        type="3"
                        v-for="(exercise, i) in getExercisesSelected"
                        :key="i"
                    >
                        <template #title>
                            <h3>{{ exercise.video.name }}</h3>
                            <vs-button
                                circle
                                icon
                                class="btn-remove-exercise"
                                @click="removeExercise(exercise)"
                            >
                                <i class="fe fe-trash-2"></i>
                            </vs-button>
                        </template>
                        <template #img>
                            <youtube
                                :player-vars="playerVars"
                                :video-id="exercise.video.youtubeId"
                            ></youtube>
                        </template>
                        <template #text>
                            <p>
                                {{ exercise.video.description }}
                            </p>

                            <div class="inputs-line first">
                                <vs-input
                                    v-model="exercise.numberOfRepetitions"
                                    label-placeholder="Nb de Répétitions"
                                    type="number"
                                >
                                    <template #icon>
                                        <i class="fe fe-activity"></i>
                                    </template>
                                </vs-input>
                                <vs-input
                                    v-model="exercise.numberOfSeries"
                                    label-placeholder="Nb de Séries"
                                    type="number"
                                >
                                    <template #icon>
                                        <i class="fe fe-activity"></i>
                                    </template>
                                </vs-input>
                            </div>
                            <div class="inputs-line">
                                <vs-input
                                    v-model="exercise.option"
                                    label-placeholder="Option"
                                    type="text"
                                >
                                    <template #icon>
                                        <i class="fe fe-activity"></i>
                                    </template>
                                </vs-input>
                            </div>
                        </template>
                        <template #interactions>
                            <div class="btns-arrow">
                                <!-- <vs-button circle icon danger>
                                    {{ exercise.position }}
                                </vs-button> -->
                                <vs-button
                                    v-if="exercise.position != 0"
                                    circle
                                    icon
                                    @click="upPosition(exercise)"
                                >
                                    <i class="fe fe-arrow-up"></i>
                                </vs-button>
                                <vs-button
                                    v-if="
                                        exercise.position !=
                                        exercisesSelected.length - 1
                                    "
                                    circle
                                    icon
                                    @click="downPosition(exercise)"
                                >
                                    <i class="fe fe-arrow-down"></i>
                                </vs-button>
                            </div>
                        </template>
                    </vs-card>
                </div>
                <div v-else class="no-videos">
                    <i class="fe fe-youtube"></i> Cette fiche ne contient pas de
                    vidéo.
                </div>
            </transition>
            <div
                class="buttons"
                :class="{
                    disabled: !worksheet.title,
                }"
            >
                <vs-button
                    v-if="action === 'creation' && patientForPrescription"
                    size="large"
                    @click="createWorksheet()"
                >
                    <vs-avatar circle size="25">
                        <img
                            :src="
                                patientForPrescription.avatarUrl
                                    ? patientForPrescription.avatarUrl
                                    : '/img/avatar-default.svg'
                            "
                            alt="Avatar du patient"
                        />
                    </vs-avatar>
                    <span>Valider la Prescription</span>
                </vs-button>
                <vs-button
                    v-if="action === 'creation' && !patientForPrescription"
                    size="large"
                    @click="createWorksheet()"
                    ><i class="fe fe-file-plus"></i>
                    Créer le modèle
                </vs-button>
                <vs-button
                    v-if="action === 'edition'"
                    size="large"
                    @click="editWorksheetTemplate()"
                    ><i class="fe fe-check-circle"></i>
                    Valider les modifications
                </vs-button>
            </div>
        </div>
        <vs-dialog class="modal-confirm" v-model="modalConfirmCreateWorksheet">
            <p class="modal-confirm-text">Confirmer la création de</p>

            <div class="modal-confirm-detail">
                <div class="modal-confirm-icon">
                    <i class="fe fe-file-plus"></i>
                </div>
                <p v-if="patientForPrescription">
                    <span>
                        {{ worksheet.title }}
                    </span>
                    pour
                    <span>
                        {{
                            patientForPrescription.gender
                                ? "male" === patientForPrescription.gender
                                    ? "M."
                                    : "Mme"
                                : ""
                        }}
                        {{ patientForPrescription.lastname }}
                        {{ patientForPrescription.firstname }}
                    </span>
                </p>
                <p v-else>
                    <span>
                        {{ worksheet.title }}
                    </span>
                </p>
            </div>

            <div class="modal-confirm-buttons">
                <vs-button
                    @click="modalConfirmCreateWorksheet = false"
                    dark
                    transparent
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validCreateWorksheet"
                    :loading="btnLoadingValidCreateWorksheet"
                    primary
                    transparent
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
        <vs-dialog
            class="modal-confirm"
            v-model="modalConfirmEditWorksheetTemplate"
        >
            <p class="modal-confirm-text">Confirmer l'édition de</p>

            <div class="modal-confirm-detail">
                <div class="modal-confirm-icon">
                    <i class="fe fe-edit-2"></i>
                </div>
                <p>
                    <span>
                        {{ worksheet.title }}
                    </span>
                </p>
            </div>

            <div class="modal-confirm-buttons">
                <vs-button
                    @click="modalConfirmEditWorksheetTemplate = false"
                    dark
                    transparent
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validEditWorksheetTemplate"
                    :loading="btnLoadingValidEditWorksheetTemplate"
                    primary
                    transparent
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
        <vs-dialog class="modal-confirm" v-model="modalConfirmRemoveExercise">
            <p class="modal-confirm-text">Confirmer la suppression de</p>

            <div class="modal-confirm-detail remove-item">
                <div class="modal-confirm-icon remove-item">
                    <i class="fe fe-trash"></i>
                </div>
                <p>
                    <span>
                        {{ removeExerciseDetails.video.name }}
                    </span>
                </p>
            </div>

            <div class="modal-confirm-buttons">
                <vs-button
                    @click="modalConfirmRemoveExercise = false"
                    dark
                    transparent
                >
                    Annuler
                </vs-button>
                <vs-button @click="validRemoveExercise" danger transparent>
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import VideosAdd from "./components/VideosAdd.vue";
import f from "../services/function";

export default {
    name: "CreateWorksheet",
    components: {
        VideosAdd,
    },
    data() {
        return {
            doctor: null,
            action: null,
            patientForPrescription: null,
            worksheet: {
                title: "",
                partOfBody: "",
                description: "",
                duration: 1,
                perDay: 1,
                perWeek: 1,
            },
            maxDuration: {
                duration: 52,
                perDay: 3,
                perWeek: 7,
            },
            timeout: false,
            playerVars: {
                rel: 0,
                showinfo: 0,
                ecver: 2,
                modestbranding: 1,
            },
            videosSelected: [],
            exercisesSelected: [],
            removeExerciseDetails: { video: {} },
            modalConfirmRemoveExercise: false,
            modalConfirmCreateWorksheet: false,
            csrfTokenCreateWorksheet: null,
            btnLoadingValidCreateWorksheet: false,
            csrfTokenCreatePrescription: null,
            csrfTokenEditWorksheetTemplate: null,
            csrfTokenEditPrescription: null,
            csrfTokenRemoveExerciseFromWorksheet: null,
            btnLoadingValidEditWorksheetTemplate: false,
            modalConfirmEditWorksheetTemplate: false,
        };
    },
    computed: {
        getExercisesSelected() {
            return f.sortedByPosition(this.exercisesSelected);
        },
    },
    methods: {
        addVideosSelection(videos) {
            const is = this.exercisesSelected.length;
            videos.forEach((v, i) => {
                const exercise = {
                    id: null,
                    position: is + i,
                    numberOfRepetitions: 0,
                    numberOfSeries: 0,
                    option: "",
                    video: v,
                };

                this.exercisesSelected.push(exercise);
            });
        },
        upPosition(exercise) {
            if (exercise.position > 0) {
                const oldPosition = exercise.position;
                const newPosition = exercise.position - 1;
                const prevExercise = this.exercisesSelected.find(
                    (e) => e.position === newPosition
                );

                exercise.position = newPosition;

                if (prevExercise) {
                    prevExercise.position = oldPosition;
                }
            }
        },
        downPosition(exercise) {
            if (exercise.position < this.exercisesSelected.length) {
                const oldPosition = exercise.position;
                const newPosition = exercise.position + 1;
                const nextExercise = this.exercisesSelected.find(
                    (e) => e.position === newPosition
                );

                exercise.position = newPosition;

                if (nextExercise) {
                    nextExercise.position = oldPosition;
                }
            }
        },
        checkAndFormatDurationValue(durationValue, event) {
            const durationType = event.target.id;

            if (!("Backspace" === event.code)) {
                if ("duration" === durationType) {
                    if (durationValue < 1) {
                        this.worksheet.duration = 1;
                    }
                    if (durationValue > this.maxDuration.duration) {
                        this.worksheet.duration = this.maxDuration.duration;
                    }
                }

                if ("perDay" === durationType) {
                    if (durationValue < 1) {
                        this.worksheet.perDay = 1;
                    }
                    if (durationValue > this.maxDuration.perDay) {
                        this.worksheet.perDay = this.maxDuration.perDay;
                    }
                }

                if ("perWeek" === durationType) {
                    if (durationValue < 1) {
                        this.worksheet.perWeek = 1;
                    }
                    if (durationValue > this.maxDuration.perWeek) {
                        this.worksheet.perWeek = this.maxDuration.perWeek;
                    }
                }
            }
        },
        checkIfDurationValueIsEmptyOrNull(durationValue, event) {
            const durationType = event.target.id;

            if ("duration" === durationType) {
                if ("" === durationValue || null === durationValue) {
                    this.worksheet.duration = 1;
                }
            }

            if ("perDay" === durationType) {
                if ("" === durationValue || null === durationValue) {
                    this.worksheet.perDay = 1;
                }
            }

            if ("perWeek" === durationType) {
                if ("" === durationValue || null === durationValue) {
                    this.worksheet.perWeek = 1;
                }
            }
        },
        createWorksheet() {
            return (this.modalConfirmCreateWorksheet =
                !this.modalConfirmCreateWorksheet);
        },
        validCreateWorksheet() {
            this.axios
                .post(`/kine/${this.doctor.id}/create/worksheet`, {
                    _token: this.csrfTokenCreateWorksheet,
                    title: this.worksheet.title,
                    description: this.worksheet.description,
                    partOfBody: this.worksheet.partOfBody,
                    duration: this.worksheet.duration,
                    perWeek: this.worksheet.perWeek,
                    perDay: this.worksheet.perDay,
                    exercises: this.getExercisesSelected,
                    isTemplate: this.patientForPrescription ? false : true,
                })
                .then((response) => {
                    this.openNotification(
                        `<strong>Création de la fiche</strong>`,
                        `${response.data.message}`,
                        "top-right",
                        "success",
                        "<i class='fe fe-check-circle'></i>"
                    );

                    if (
                        response.data.worksheet &&
                        this.patientForPrescription
                    ) {
                        this.axios
                            .post(
                                `/kine/${this.doctor.id}/create/prescription`,
                                {
                                    _token: this.csrfTokenCreatePrescription,
                                    patientId: this.patientForPrescription.id,
                                    worksheetId: response.data.worksheet.id,
                                }
                            )
                            .then((response) => {
                                this.openNotification(
                                    `<strong>Prescription</strong>`,
                                    `${response.data}`,
                                    "top-right",
                                    "success",
                                    "<i class='fe fe-check-circle'></i>"
                                );
                            })
                            .catch((error) => {
                                this.openNotification(
                                    `<strong>Prescription : Erreur</strong>`,
                                    `${error.response.data}`,
                                    "top-right",
                                    "danger",
                                    "<i class='fe fe-alert-circle'></i>"
                                );
                            });
                    }
                    this.btnLoadingValidCreateWorksheet = false;
                    this.modalConfirmCreateWorksheet = false;

                    setTimeout(() => {
                        if (this.patientForPrescription) {
                            document.location.href = `/kine/${this.doctor.id}/fiches/prescriptions`;
                        } else {
                            document.location.href = `/kine/${this.doctor.id}/fiches/modeles`;
                        }
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error.response.data);
                    this.openNotification(
                        `<strong>Création de la fiche : Erreur</strong>`,
                        `${error.response.data}`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                    this.btnLoadingValidCreateWorksheet = false;
                    this.modalConfirmCreateWorksheet = false;
                });
        },
        editWorksheetTemplate() {
            return (this.modalConfirmEditWorksheetTemplate =
                !this.modalConfirmEditWorksheetTemplate);
        },
        validEditWorksheetTemplate() {
            this.axios
                .post(`/kine/${this.doctor.id}/edit/worksheet-template`, {
                    _token: this.csrfTokenEditWorksheetTemplate,
                    worksheetId: this.worksheet.id,
                    title: this.worksheet.title,
                    description: this.worksheet.description,
                    partOfBody: this.worksheet.partOfBody,
                    duration: this.worksheet.duration,
                    perWeek: this.worksheet.perWeek,
                    perDay: this.worksheet.perDay,
                    exercises: this.getExercisesSelected,
                })
                .then((response) => {
                    this.openNotification(
                        `<strong>Edition de la fiche</strong>`,
                        `${response.data}`,
                        "top-right",
                        "success",
                        "<i class='fe fe-check-circle'></i>"
                    );

                    if (this.patientForPrescription) {
                        this.axios
                            .post(`/kine/${this.doctor.id}/edit/prescription`, {
                                _token: this.csrfTokenEditPrescription,
                                patientId: this.patientForPrescription.id,
                                worksheetId: this.worksheet.id,
                            })
                            .then((response) => {
                                this.openNotification(
                                    `<strong>Edition de la prescription</strong>`,
                                    `${response.data}`,
                                    "top-right",
                                    "success",
                                    "<i class='fe fe-check-circle'></i>"
                                );
                                this.btnLoadingValidEditWorksheetTemplate = false;
                                this.modalConfirmEditWorksheetTemplate = false;

                                setTimeout(() => {
                                    document.location.href = `/kine/${this.doctor.id}/fiches/prescriptions`;
                                }, 2000);
                            })
                            .catch((error) => {
                                console.log(error.response.data);
                                this.openNotification(
                                    `<strong>Edition de la prescription : Erreur</strong>`,
                                    `${error.response.data}`,
                                    "top-right",
                                    "danger",
                                    "<i class='fe fe-alert-circle'></i>"
                                );
                                this.btnLoadingValidEditWorksheetTemplate = false;
                                this.modalConfirmEditWorksheetTemplate = false;
                            });
                    } else {
                        this.btnLoadingValidEditWorksheetTemplate = false;
                        this.modalConfirmEditWorksheetTemplate = false;

                        setTimeout(() => {
                            document.location.href = `/kine/${this.doctor.id}/fiches/modeles`;
                        }, 2000);
                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                    this.openNotification(
                        `<strong>Edition de la fiche : Erreur</strong>`,
                        `${error.response.data}`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                    this.btnLoadingValidEditWorksheetTemplate = false;
                    this.modalConfirmEditWorksheetTemplate = false;
                });
        },
        removeExercise(exercise) {
            this.removeExerciseDetails = exercise;

            return (this.modalConfirmRemoveExercise =
                !this.modalConfirmRemoveExercise);
        },
        validRemoveExercise() {
            if (!this.removeExerciseDetails.id || "creation" === this.action) {
                this.exercisesSelected.splice(
                    this.exercisesSelected.indexOf(this.removeExerciseDetails),
                    1
                );

                f.sortedByPosition(this.exercisesSelected).map(
                    (e, i) => (e.position = i)
                );

                this.modalConfirmRemoveExercise = false;
            } else {
                this.axios
                    .post(
                        `/kine/${this.doctor.id}/remove/exercise-from-worksheet`,
                        {
                            _token: this.csrfTokenRemoveExerciseFromWorksheet,
                            worksheet_id: this.worksheet.id,
                            exercise_id: this.removeExerciseDetails.id,
                        }
                    )
                    .then((response) => {
                        console.log(response.data);

                        this.exercisesSelected.splice(
                            this.exercisesSelected.indexOf(
                                this.removeExerciseDetails
                            ),
                            1
                        );

                        f.sortedByPosition(this.exercisesSelected).map(
                            (e, i) => (e.position = i)
                        );

                        this.modalConfirmRemoveExercise = false;
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                        this.openNotification(
                            `<strong>Erreur lors de la suppression de l'exercice</strong>`,
                            `${error.response.data}`,
                            "top-right",
                            "danger",
                            "<i class='fe fe-alert-circle'></i>"
                        );

                        this.modalConfirmRemoveExercise = false;
                    });
            }
        },
        openNotification(title, text, position, color, icon) {
            this.$vs.notification({
                progress: "auto",
                flat: true,
                icon,
                color,
                position,
                title,
                text,
            });
        },
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.action = data.action;
        this.patientForPrescription = data.patientForPrescription;
        this.csrfTokenCreateWorksheet = data.csrfTokenCreateWorksheet;
        this.csrfTokenCreatePrescription = data.csrfTokenCreatePrescription;
        this.csrfTokenEditWorksheetTemplate =
            data.csrfTokenEditWorksheetTemplate;
        this.csrfTokenEditPrescription = data.csrfTokenEditPrescription;
        this.csrfTokenRemoveExerciseFromWorksheet =
            data.csrfTokenRemoveExerciseFromWorksheet;

        if (data.worksheetTemplate) {
            this.worksheet = {
                id: data.worksheetTemplate.id,
                title: data.worksheetTemplate.title,
                partOfBody: data.worksheetTemplate.partOfBody,
                description: data.worksheetTemplate.description,
                duration: data.worksheetTemplate.duration,
                perDay: data.worksheetTemplate.perDay,
                perWeek: data.worksheetTemplate.perWeek,
            };

            this.exercisesSelected = data.worksheetTemplate.exercises;
        }
    },
};
</script>

<style lang="scss">
$primary: #ffab2c;
@media (max-width: 700px) {
    h1,
    .h1 {
        margin-bottom: 2.4em;
    }
}

.vs-button.btn-top-absolute {
    top: -65px;
}

.vs-select__input {
    padding: 14px 13px;
    border-radius: 0.9em;
    font-size: 0.96em;

    &:focus ~ label {
        top: 10px;
        left: 38px;
        color: #ffab2c;
        font-size: 0.75em !important;
    }
}

.vs-select__label {
    font-size: 0.91em;
    color: #133371;
}

.vs-select__label--hidden.vs-select__label--placeholder {
    top: 10px;
    left: 38px;
    color: #ffab2c;
    font-size: 0.75em !important;
}

.durations-inputs {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    .new-worksheet-input {
        flex: 1;
        margin: 0.7em 0;

        &:first-child {
            min-width: 100%;
        }

        @media (min-width: 720px) {
            &:nth-child(2) {
                margin-right: 1em;
            }
        }
    }

    @media (min-width: 720px) {
        flex-direction: row;
    }
}

.select-part-of-body {
    margin: 1.8em 0;
}

.new-worksheet-input {
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.3em 0;

    &.worksheet-title {
        margin-top: 2.1em;
    }

    label {
        position: absolute;
        top: 1.1em;
        left: 1.2em;
        font-size: 0.75em;
        color: #a0b3d0;
        transition: all 0.2s;
    }

    input,
    textarea {
        border-radius: 0.9em;
        color: #2a303a;
        font-size: 0.8em;
        background: #f1f4f8;

        &:focus {
            background: #d9e2ef;
            border: 1px solid transparent;
        }

        &:focus ~ label {
            color: $primary;
            top: -1.5em;
            left: 1.4em;
            font-size: 0.65em;
        }
    }

    label.focus {
        color: $primary;
        top: -1.5em;
        left: 1.4em;
        font-size: 0.65em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 93%;
    }

    input:focus,
    textarea:focus {
        padding-left: 20px !important;
    }

    textarea {
        height: 140px;
    }
}

.no-videos {
    text-align: center;
    background-color: #ffffff;
    padding: 2.5em 2em;
    border: 1px solid #d9e2ef;
    border-radius: 0.9em;
    color: #a0b3d0;
    font-size: 0.8em;

    i {
        opacity: 0.4;
        position: relative;
        top: 1px;
        font-size: 1.1em;
        left: -3px;
    }
}

.vs-card-content.type-3 .vs-card {
    display: flex;
    max-width: none;
    position: relative;
    margin: 1.2em 0px;
    flex-direction: column;
    box-shadow: 0px 5px 20px 0px #d9e2ef;

    @media (min-width: 520px) {
        flex-direction: row;
    }

    &:hover {
        transform: none !important;
    }

    .vs-card__title {
        .btn-remove-exercise {
            position: absolute;
            top: 1px;
            right: 1px;
            width: 2.5em;
            height: 2.5em;
            background: white;
            border: 1px solid #d9e2ef;

            i {
                margin-right: -0.9px;
                color: #d9e2ef;
            }

            &:hover {
                background: #d60f3a;
                border: none;
                box-shadow: 0px 4px 15px 0px rgba(156, 156, 156, 0.068);

                i {
                    color: #ffffff;
                }
            }
        }
    }

    .vs-card__img {
        max-width: none;
        min-width: none;
        width: 100%;

        &::before,
        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 3em;
            position: absolute;
        }

        &::before {
            top: 0;
            background: linear-gradient(
                180deg,
                rgba(20, 20, 20, 1) 9%,
                rgba(20, 20, 20, 0.7) 44%,
                rgba(20, 20, 20, 0) 100%
            );
        }

        &::after {
            bottom: 0;
            background: linear-gradient(
                0deg,
                rgba(20, 20, 20, 1) 9%,
                rgba(20, 20, 20, 0.7) 44%,
                rgba(20, 20, 20, 0) 100%
            );
        }

        @media (min-width: 520px) {
            max-width: 16em;
            min-width: 16em;
        }

        .vs-card__interactions {
            top: 0px;
            bottom: initial;

            .btns-arrow {
                display: flex;
                flex-direction: column;

                button {
                    box-shadow: 0px 4px 10px 0px rgba(29, 29, 29, 0.45);

                    i {
                        padding-left: 1px;
                    }

                    &:first-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

    .vs-card__text {
        padding: 1em 2.3em;
        padding-bottom: 2.3em;

        p {
            margin-bottom: 1.8em;
        }

        .inputs-line {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-top: 2.5em;

            &.first {
                margin-top: 2.5em;
            }

            @media (min-width: 700px) {
                flex-direction: row;
                margin-top: 1.6em;
            }

            .vs-input-parent {
                flex: 1;
                margin: 0;
                width: 100%;
                margin-top: 2.5em;

                &:first-child {
                    margin-top: 0;
                }

                @media (min-width: 700px) {
                    margin: 0.5em;
                    margin-top: 0;

                    &:first-child {
                        margin-left: 0;
                    }
                }
            }
        }
    }
}

.buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 1em;

    &.disabled {
        button {
            pointer-events: none;
            opacity: 0.5;
        }
    }

    button {
        span {
            margin-left: 0.4em;
        }
    }
}
</style>
