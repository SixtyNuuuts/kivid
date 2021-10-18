<template>
    <div>
        <div class="exercises-list">
            <div v-if="loading">
                <div class="exercise loading-block">
                    <div class="loading-gray thumbnail-wrapper"></div>
                    <div class="content">
                        <div class="loading-gray h2 w-45"></div>
                        <div class="details">
                            <div class="series-reps">
                                <div class="loading-gray series w-25"></div>
                                <div class="loading-gray reps w-15"></div>
                            </div>
                            <div class="loading-gray option w-25"></div>
                            <div class="loading-gray tempo w-15"></div>
                            <div class="loading-gray hold w-25"></div>
                        </div>
                        <div class="commentary">
                            <div class="loading-gray title w-25"></div>
                            <div class="loading-gray input"></div>
                        </div>
                    </div>
                </div>
                <div class="exercise loading-block">
                    <div class="loading-gray thumbnail-wrapper"></div>
                    <div class="content">
                        <div class="loading-gray h2 w-35"></div>
                        <div class="details">
                            <div class="series-reps">
                                <div class="loading-gray series w-15"></div>
                                <div class="loading-gray reps w-25"></div>
                            </div>
                            <div class="loading-gray option w-25"></div>
                            <div class="loading-gray tempo w-15"></div>
                            <div class="loading-gray hold w-25"></div>
                        </div>
                        <div class="commentary">
                            <div class="loading-gray title w-25"></div>
                            <div class="loading-gray input"></div>
                        </div>
                    </div>
                </div>
                <div class="exercise loading-block">
                    <div class="loading-gray thumbnail-wrapper"></div>
                    <div class="content">
                        <div class="loading-gray h2 w-45"></div>
                        <div class="details">
                            <div class="series-reps">
                                <div class="loading-gray series w-15"></div>
                                <div class="loading-gray reps w-15"></div>
                            </div>
                            <div class="loading-gray option w-25"></div>
                            <div class="loading-gray tempo w-15"></div>
                            <div class="loading-gray hold w-25"></div>
                        </div>
                        <div class="commentary">
                            <div class="loading-gray title w-25"></div>
                            <div class="loading-gray input"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div
                    v-for="(exercise, i) in getExercises"
                    :key="i"
                    class="exercise"
                >
                    <div class="thumbnail-wrapper">
                        <div v-if="'voir' !== action" class="btns-arrow">
                            <vs-button
                                v-if="exercise.position != 0"
                                circle
                                icon
                                @click="upPosition(exercise)"
                            >
                                <i class="fas fa-sort-up"></i>
                            </vs-button>
                            <vs-button
                                v-if="
                                    exercise.position != getExercises.length - 1
                                "
                                circle
                                icon
                                @click="downPosition(exercise)"
                            >
                                <i class="fas fa-sort-down"></i>
                            </vs-button>
                        </div>
                        <div class="btn-playlist">
                            <vs-button @click="openVideoPlayer(exercise)">
                                <span> Voir</span>
                            </vs-button>
                        </div>
                        <div
                            class="thumbnail"
                            :style="{
                                backgroundImage: `url('${exercise.video.thumbnailUrl}')`,
                            }"
                        ></div>
                    </div>
                    <div class="content">
                        <div class="input-h2">
                            <h2>
                                <span>{{ exercise.video.name }}</span>
                            </h2>
                            <button
                                v-if="'voir' !== action"
                                class="remove-exercise"
                                @click="removeExercise(exercise)"
                            >
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                        <div v-if="'voir' !== action" class="details">
                            <div class="series-reps">
                                <div class="series">
                                    <i class="kiv-series icon-18"></i>
                                    <vs-input
                                        v-model="exercise.numberOfSeries"
                                        label-placeholder="Nb de séries"
                                        type="number"
                                        @blur="
                                            checkIfValueIsEmptyOrNull(exercise)
                                        "
                                    >
                                    </vs-input>
                                </div>
                                <div class="reps">
                                    <i class="kiv-reps icon-19"></i>
                                    <vs-input
                                        v-model="exercise.numberOfRepetitions"
                                        label-placeholder="Nb de répétitions"
                                        type="number"
                                        @blur="
                                            checkIfValueIsEmptyOrNull(exercise)
                                        "
                                    >
                                    </vs-input>
                                </div>
                            </div>
                        </div>
                        <div v-if="'voir' !== action" class="options">
                            <div
                                class="option"
                                :class="{ active: exercise.optionActive }"
                            >
                                <span>Option</span>
                                <vs-switch
                                    v-model="exercise.optionActive"
                                    @change="
                                        checkValue(
                                            exercise.optionActive,
                                            exercise,
                                            'option'
                                        )
                                    "
                                />
                                <div
                                    class="kiv-select"
                                    :class="{
                                        disabled: !exercise.optionActive,
                                    }"
                                >
                                    <vs-select
                                        placeholder="Sélectionner"
                                        v-model="exercise.option"
                                        :class="{ filled: exercise.option }"
                                    >
                                        <vs-option
                                            v-for="(option, i) in exercise.video
                                                .options"
                                            :key="i"
                                            :label="option.name"
                                            :value="option.name"
                                        >
                                            {{ option.name }}
                                        </vs-option>
                                    </vs-select>
                                </div>
                            </div>
                            <div
                                class="tempo"
                                :class="{ active: exercise.tempoActive }"
                            >
                                <span>Tempo</span>
                                <vs-switch
                                    v-model="exercise.tempoActive"
                                    @change="
                                        checkValue(
                                            exercise.tempoActive,
                                            exercise,
                                            'tempo'
                                        )
                                    "
                                />
                                <vs-input
                                    v-model="exercise.tempo"
                                    label-placeholder="(ex: 2/0/1)"
                                    type="text"
                                    :class="{ disabled: !exercise.tempoActive }"
                                >
                                </vs-input>
                            </div>
                            <div
                                class="hold"
                                :class="{ active: exercise.holdActive }"
                            >
                                <span>Tenir</span>
                                <vs-switch
                                    v-model="exercise.holdActive"
                                    @change="
                                        checkValue(
                                            exercise.holdActive,
                                            exercise,
                                            'hold'
                                        )
                                    "
                                />
                                <vs-input
                                    v-model="exercise.hold"
                                    label-placeholder="Secondes"
                                    type="number"
                                    :class="{ disabled: !exercise.holdActive }"
                                >
                                </vs-input>
                            </div>
                        </div>
                        <div v-if="'voir' === action" class="details">
                            <div class="series-reps">
                                <div class="series">
                                    <i class="kiv-series icon-18"></i
                                    ><span>{{ exercise.numberOfSeries }}</span>
                                    séries
                                </div>
                                <div
                                    v-if="exercise.numberOfRepetitions"
                                    class="reps"
                                >
                                    <i class="kiv-reps icon-19"></i
                                    ><span>{{
                                        exercise.numberOfRepetitions
                                    }}</span>
                                    répétitions
                                </div>
                            </div>
                            <div v-if="exercise.option" class="option">
                                Options : <span>{{ exercise.option }}</span>
                            </div>
                            <div v-if="exercise.tempo" class="tempo">
                                Tempo : <span>{{ exercise.tempo }}</span>
                            </div>
                            <div v-if="exercise.hold" class="hold">
                                Tenir : <span>{{ exercise.hold }}s</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="add-videos" v-if="'voir' !== action">
                <div class="btn-add-videos">
                    <vs-button @click="openVideoLibrary()">
                        <i class="fab fa-youtube"></i> Ajouter des vidéos
                    </vs-button>
                </div>
            </div>
        </div>
        <transition name="fade">
            <VideoPlayer
                v-if="videoPlayerToggle"
                :doctor="doctor"
                :worksheet="getWorksheet"
                :exercise="exerciseForPlaying"
                :exercises="getExercises"
                :lastExercise="getTheLastExercise"
                @closeVideoPlayer="closeVideoPlayer"
            />
        </transition>
        <transition name="fade">
            <VideoLibrary
                v-if="videoLibraryToggle"
                :doctor="doctor"
                @closeVideoLibrary="closeVideoLibrary"
                @videos-selection="addVideosSelection"
            />
        </transition>
        <vs-dialog v-model="modalConfirmRemoveExercise">
            <p class="modal-confirm-text">Confirmer la suppression de</p>

            <div class="modal-confirm-detail remove-item">
                <div class="modal-confirm-icon remove-item">
                    <i class="fas fa-trash"></i>
                </div>
                <p>
                    <span>
                        {{ removeExerciseDetails.video.name }}
                    </span>
                </p>
            </div>

            <div class="modal-confirm-buttons">
                <vs-button
                    class="secondary"
                    @click="modalConfirmRemoveExercise = false"
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validRemoveExercise"
                    :loading="btnLoadingValidRemoveExercise"
                    :class="{
                        disabled: btnLoadingValidRemoveExercise,
                    }"
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import VideoPlayer from "./ExercisesPlaylist/VideoPlayer.vue";
import VideoLibrary from "./ExercisesPlaylist/VideoLibrary.vue";
import f from "../../services/function";

export default {
    components: {
        VideoPlayer,
        VideoLibrary,
    },
    props: {
        doctor: Object,
        loading: Boolean,
        worksheet: Object,
        exercises: Array,
        action: String,
        csrfTokenRemoveExercise: String,
    },
    data() {
        return {
            videoPlayerToggle: false,
            videoLibraryToggle: false,
            activeOptions: {
                option: [],
                tempo: [],
                hold: [],
            },
            exerciseForPlaying: null,
            modalConfirmRemoveExercise: false,
            removeExerciseDetails: { video: {} },
            btnLoadingValidRemoveExercise: false,
        };
    },
    computed: {
        getWorksheet() {
            return this.worksheet;
        },
        getExercises() {
            return f.sortByPosition(this.exercises);
        },
        getTheLastExercise() {
            return this.getExercises[this.getExercises.length - 1];
        },
    },
    methods: {
        checkValue(bool, exercise, type) {
            if (false === bool) {
                exercise[type] = "";
            }
        },
        addVideosSelection(videos) {
            const is = this.getExercises.length;
            videos.forEach((v, i) => {
                const exercise = {
                    id: null,
                    position: is + i,
                    numberOfRepetitions: 1,
                    numberOfSeries: 1,
                    option: "",
                    tempo: "",
                    hold: "",
                    optionActive: false,
                    tempoActive: false,
                    holdActive: false,
                    video: v,
                };

                this.exercises.push(exercise);
            });
        },
        checkIfValueIsEmptyOrNull(exercise) {
            if (exercise.numberOfSeries < 1) {
                exercise.numberOfSeries = 1;
            }

            if (exercise.numberOfRepetitions < 1) {
                exercise.numberOfRepetitions = 1;
            }

            if (
                "" === exercise.numberOfSeries ||
                null === exercise.numberOfSeries
            ) {
                exercise.numberOfSeries = 1;
            }
            if (
                "" === exercise.numberOfRepetitions ||
                null === exercise.numberOfRepetitions
            ) {
                exercise.numberOfRepetitions = 1;
            }
        },
        upPosition(exercise) {
            if (exercise.position > 0) {
                const oldPosition = exercise.position;
                const newPosition = exercise.position - 1;
                const prevExercise = this.getExercises.find(
                    (e) => e.position === newPosition
                );

                exercise.position = newPosition;

                if (prevExercise) {
                    prevExercise.position = oldPosition;
                }
            }
        },
        downPosition(exercise) {
            if (exercise.position < this.getExercises.length) {
                const oldPosition = exercise.position;
                const newPosition = exercise.position + 1;
                const nextExercise = this.getExercises.find(
                    (e) => e.position === newPosition
                );

                exercise.position = newPosition;

                if (nextExercise) {
                    nextExercise.position = oldPosition;
                }
            }
        },
        removeExercise(exercise) {
            this.removeExerciseDetails = exercise;

            return (this.modalConfirmRemoveExercise =
                !this.modalConfirmRemoveExercise);
        },
        validRemoveExercise() {
            this.btnLoadingValidRemoveExercise = true;

            if (!this.removeExerciseDetails.id || "creation" === this.action) {
                this.exercises.splice(
                    this.exercises.indexOf(this.removeExerciseDetails),
                    1
                );

                f.sortByPosition(this.exercises).map(
                    (e, i) => (e.position = i)
                );

                this.btnLoadingValidRemoveExercise = false;
                this.modalConfirmRemoveExercise = false;
            } else {
                this.axios
                    .post(`/doctor/${this.doctor.id}/remove/exercise`, {
                        _token: this.csrfTokenRemoveExercise,
                        worksheetId: this.getWorksheet.id,
                        exerciseId: this.removeExerciseDetails.id,
                    })
                    .then((response) => {
                        console.log(response.data);

                        this.exercises.splice(
                            this.exercises.indexOf(this.removeExerciseDetails),
                            1
                        );

                        f.sortByPosition(this.exercises).map(
                            (e, i) => (e.position = i)
                        );

                        f.openSuccessNotification(
                            "Suppression de l'exercice",
                            response.data
                        );

                        this.btnLoadingValidRemoveExercise = false;
                        this.modalConfirmRemoveExercise = false;
                    })
                    .catch((error) => {
                        const errorMess =
                            "object" === typeof error.response.data
                                ? error.response.data.detail
                                : error.response.data;

                        f.openErrorNotification("Erreur", errorMess);

                        this.btnLoadingValidRemoveExercise = false;
                        this.modalConfirmRemoveExercise = false;
                    });
            }
        },
        openVideoPlayer(exercise) {
            this.exerciseForPlaying = exercise;
            this.videoPlayerToggle = true;
            document.body.classList.add("no-scrollbar");
        },
        openVideoLibrary() {
            this.videoLibraryToggle = true;
            document.body.classList.add("no-scrollbar");
        },
        closeVideoPlayer() {
            this.videoPlayerToggle = false;
            document.body.classList.remove("no-scrollbar");
        },
        closeVideoLibrary() {
            this.videoLibraryToggle = false;
            document.body.classList.remove("no-scrollbar");
        },
    },
};
</script>

<style lang="scss">
@import "../../../scss/variables";

.exercises-list {
    width: 100%;

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

    .exercise {
        display: flex;
        flex-direction: column;

        &:not(:last-child) {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
        }

        @media (min-width: 992px) {
            flex-direction: row;
        }

        &.loading-block {
            .loading-gray {
                border-radius: 0.4rem;
            }

            .thumbnail-wrapper {
                border-radius: 0.8rem;
            }

            .content {
                .h2 {
                    height: 2.5rem;
                    position: relative;
                    margin-bottom: 2.5rem;
                }

                .details {
                    .series-reps {
                        .series {
                            height: 1.8rem;
                        }

                        .reps {
                            height: 1.8rem;
                        }
                    }
                    .option,
                    .tempo,
                    .hold {
                        height: 1.6rem;
                    }
                }
                .commentary {
                    .title {
                        height: 1.3rem;
                        margin-top: 2.5rem;
                        margin-bottom: 1rem;
                    }
                    .input {
                        height: 5rem;
                        width: 100%;
                        border-radius: 0.8rem;
                    }
                }
            }
        }

        .thumbnail-wrapper {
            height: 52vw;
            width: 100%;
            background-color: $gray-dark;
            border-radius: 0.8rem;
            margin-right: 0;
            margin-bottom: 2rem;
            position: relative;
            overflow: hidden;

            .btns-arrow {
                position: absolute;
                top: 1rem;
                left: 1rem;

                .vs-button {
                    width: 3rem;
                    height: 3rem;
                    box-shadow: 0px 0rem 1.5rem rgba(173, 100, 74, 0.88);

                    &:first-child {
                        margin-bottom: 0.7rem;
                    }

                    i {
                        font-size: 2.4rem;
                        margin-right: 0;

                        &.fa-sort-up {
                            top: 0.4rem;
                        }

                        &.fa-sort-down {
                            top: -0.4rem;
                        }
                    }
                }
            }

            @media (min-width: 992px) {
                height: 35vw;
                margin-right: 2.3rem;
                margin-bottom: 0;
                max-width: 67rem;
                max-height: 38rem;
                min-width: 67rem;
                min-height: 38rem;
            }

            .btn-playlist {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .vs-button {
                    box-shadow: 0px 0rem 1.5rem rgba(173, 100, 74, 0.88);
                }

                &:hover ~ .thumbnail {
                    transform: scale(1.05);
                    opacity: 1;
                    transition: all 3s;
                }
            }

            .thumbnail {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                transform: scale(1);
                transition: all 1s;
                opacity: 0.9;
            }
        }

        .content {
            flex-grow: 1;
            height: 100%;
            font-size: 1.4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media (min-width: 992px) {
                width: 50%;
            }

            .input-h2 {
                margin-bottom: 2rem;
                position: relative;

                h2 {
                    position: relative;
                    margin-bottom: 0.3rem;
                    margin-left: 2rem;
                    max-width: 80%;

                    @media (min-width: 992px) {
                        max-width: 18vw;
                    }

                    @media (min-width: 1040px) {
                        max-width: 22vw;
                    }

                    @media (min-width: 1100px) {
                        max-width: 27vw;
                    }

                    @media (min-width: 1370px) {
                        max-width: 41vw;
                    }

                    @media (min-width: 1450px) {
                        max-width: 43vw;
                    }

                    span {
                        display: block;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    &::before {
                        content: "";
                        display: block;
                        width: 0.3rem;
                        height: 2.2rem;
                        background: $orange;
                        position: absolute;
                        left: -2rem;
                        top: 0.2rem;
                        border-radius: 0.3rem;
                    }
                }

                .remove-exercise {
                    position: absolute;
                    top: -0.2rem;
                    right: 0.6rem;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid $gray-middle;
                    color: $gray-middle;
                    cursor: pointer;
                    transition: all 0.2s;
                    background: transparent;

                    i {
                        font-size: 1.2rem;
                        position: relative;
                        left: 0;
                    }

                    &:hover {
                        border: 1px solid $gray-dark;
                        color: $gray-dark;
                    }
                }
            }

            .details {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                border-top: 1px solid $gray-middle;
                border-bottom: 1px solid $gray-middle;
                padding: 1.8rem 0;

                > div {
                    margin: 0.8rem 0;
                    margin-bottom: 0.5rem;
                }

                i {
                    color: $orange;
                    margin-right: 0.6rem;
                    position: relative;
                }

                span {
                    font-weight: 800;
                }

                .series-reps {
                    display: flex;

                    span {
                        margin-right: 0.4rem;
                    }

                    .series {
                        margin-right: 1.9rem;
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 2rem;
                            top: 0rem;
                        }
                    }

                    .reps {
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 1.7rem;
                            top: 0.05rem;
                        }
                    }
                }
            }
            .options {
                > div {
                    margin: 1.7rem 0;
                    display: flex;
                    align-items: center;
                    color: $gray-dark;
                    font-weight: 600;
                    transition: all 0.25s;

                    &:first-child {
                        margin-top: 2.2rem;
                    }

                    > span {
                        display: block;
                        width: 5.1rem;
                    }

                    .kiv-select.disabled .vs-select .vs-icon-arrow {
                        pointer-events: none !important;
                    }

                    .kiv-select .vs-select-content .vs-select__input,
                    .kiv-select
                        .vs-select-content
                        .vs-select.activeOptions
                        .vs-select__input {
                        color: #222e54;
                        border: 0.1rem solid $gray-middle;
                        border-radius: 0.5rem;
                        background: rgba(255, 255, 255, 0.25);

                        &:hover {
                            background: $white;
                            border: 0.1rem solid $gray-dark;
                        }
                    }

                    .kiv-select .vs-select-content.filled .vs-select__input,
                    .kiv-select
                        .vs-select-content.filled
                        .vs-select.activeOptions
                        .vs-select__input {
                        background: rgba(255, 255, 255, 0.25);
                    }

                    .kiv-select .vs-select-content .vs-select__label {
                        top: 1.2rem;
                        left: 0.7rem;
                        color: #b7ab97;
                        font-weight: 400;
                        display: block;
                    }

                    .kiv-select .vs-select__input:hover ~ .vs-select__label,
                    .vs-select.activeOptions .vs-select__label {
                        margin-top: 0;
                    }

                    .vs-select__options {
                        transform: translateY(2px);
                    }

                    .vs-input-parent .vs-input-content .vs-input {
                        padding: 0.9rem 1rem;
                        padding-bottom: 0.6rem;
                        font-size: 1.3rem;
                    }

                    .vs-input-parent .vs-input-content .vs-input__label {
                        top: 0.85rem;
                        left: 0.7rem;
                        font-size: 1.3rem;
                    }

                    .vs-input-parent
                        .vs-input-content
                        .vs-input:focus
                        ~ .vs-input__label--placeholder,
                    .vs-input-parent
                        .vs-input-content
                        .vs-input__label--hidden.vs-input__label--placeholder {
                        font-size: 1.1rem;
                        top: -0.65rem;
                        left: 0.6rem;
                    }

                    &.active {
                        color: $orange;
                    }

                    .vs-input-parent,
                    .kiv-select {
                        max-width: 15rem;
                        margin-left: 1.5rem;
                    }

                    > :first-child {
                        margin-left: 1rem;
                    }

                    .vs-switch {
                        background: #ded5c2de;
                        min-width: 38px;
                        height: 23px;
                        margin-left: 0.3rem;

                        .vs-switch__input:checked ~ .vs-switch__circle {
                            left: calc(100% - 19px);
                        }

                        .vs-switch__circle {
                            width: 17px;
                            height: 17px;
                            left: 3px;
                        }
                    }
                }
                .option,
                .tempo,
                .hold {
                }
            }
        }
    }

    .add-videos {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: $white;
        border-radius: 1rem;
        padding: 4.3rem;
        margin-top: 3rem;

        .icon-add-videos {
            width: 5rem;
            height: 5rem;
            min-width: 5rem;
            min-height: 5rem;
            max-height: 5rem;
            background: rgba($tournesol, 0.25);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 2rem;

            i {
                color: $sanguine;
                position: relative;
                top: 0.1rem;
                left: 0.05rem;
                font-size: 2.4rem;
            }
        }
        .text-add-videos {
            p {
                margin-top: 4rem;
                margin-bottom: 4.5rem;
                font-size: 2.3rem;
                font-weight: 700;
                max-width: 44rem;
                text-align: center;
            }
        }

        .btn-add-videos {
        }
    }
}
</style>
