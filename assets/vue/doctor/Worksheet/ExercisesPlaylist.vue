<template>
    <div>
        <div class="exercises-list-container">
            <!-- <h1>{{ getActiveExercise && 'video' in getActiveExercise ? getActiveExercise.video.name : '' }}</h1> -->
             <h2>{{ `${getExercises.length} exercice${getExercises.length>1?'s':''}` }}</h2>
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
            <!-- <div v-else class="exercises-list" :id="`exercises-list-${worksheetIndex}`" @touchmove="setActiveExercise"> -->
            <div v-else class="exercises-list" :id="`exercises-list-${worksheetIndex}`">
                <div
                    v-for="exercise in getExercises"
                    :key="exercise.id"
                    class="exercise"
                    :class="{ active: exercise.isActive }"
                    :id="`exercise-${worksheetIndex}-${exercise.position}`"
                >
                    <div class="exercise-position" v-if="'voir' !== action" @click="exercisePositionActiveId=exercise.id" :class="{ active: exercisePositionActiveId==exercise.id }" v-click-outside="resetExercisePositionActiveId">
                        <vs-button
                            v-if="exercise.position != 0"
                            circle
                            icon
                            class="btn-up-position"
                            @click="upPosition(exercise)"
                        >
                            <i class="fas fa-sort-up"></i>
                        </vs-button>
                        <div>{{ exercise.position + 1 }}</div>
                        <vs-button
                            v-if="
                                exercise.position != getExercises.length - 1
                            "
                            circle
                            icon
                            class="btn-down-position"
                            @click="downPosition(exercise)"
                        >
                            <i class="fas fa-sort-down"></i>
                        </vs-button>
                    </div>
                    <div class="input-h2">
                        <h2>
                            <span>{{ exercise.video.name }}</span>
                        </h2>
                        <button
                            v-if="'voir' !== action"
                            class="remove-exercise"
                            @click="removeExercise(exercise)"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6367188 13 L 11.15625 39.029297 C 11.43025 41.862297 13.785813 44 16.632812 44 L 31.367188 44 C 34.214187 44 36.56875 41.862297 36.84375 39.029297 L 39.363281 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 19.5 18 C 20.328 18 21 18.671 21 19.5 L 21 34.5 C 21 35.329 20.328 36 19.5 36 C 18.672 36 18 35.329 18 34.5 L 18 19.5 C 18 18.671 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.671 30 19.5 L 30 34.5 C 30 35.329 29.328 36 28.5 36 C 27.672 36 27 35.329 27 34.5 L 27 19.5 C 27 18.671 27.672 18 28.5 18 z"/></svg>
                        </button>
                    </div>
                    <div class="thumbnail-wrapper"  @click="openVideoPlayer(exercise)">
                        <div class="video-link">
                            <svg
                                height="512pt"
                                viewBox="0 -77 512.00213 512"
                                width="512pt"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    id="test"
                                    d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
                                    fill="#f00"
                                />
                                <path
                                    id="test2"
                                    d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
                                    fill="#fff"
                                />
                            </svg>
                        </div>
                        <div
                            class="thumbnail"
                            :style="{
                                backgroundImage: `url('${exercise.video.thumbnailUrl}')`,
                            }"
                        ></div>
                    </div>
                    <div class="content">
                        <!-- <div class="input-h2 input-h2-desktop">
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
                        </div> -->
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
                                        min="1"
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
                                        min="1"
                                    >
                                    </vs-input>
                                </div>
                            </div>
                        </div>
                        <div v-if="'voir' !== action" class="options">
                            <div
                                class="option"
                                :class="{
                                    active: exercise.optionActive,
                                    hidden: !exercise.video.options.length,
                                }"
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
                                    <select
                                        v-model="exercise.option"
                                        class="select-options"
                                    >
                                        <option value=""></option>
                                        <option
                                            v-for="(option, i) in exercise.video
                                                .options"
                                            :key="i"
                                            :label="option.name"
                                            :value="option.name"
                                        >
                                            {{ option.name }}
                                        </option>
                                    </select>
                                    <div
                                        class="placeholder"
                                        :class="{ hidden: exercise.option }"
                                    >
                                        Sélectionner
                                    </div>
                                    <div class="white-background"></div>
                                </div>
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
                                    label-placeholder="(ex: 2 - 0 - 1 - 0)"
                                    type="text"
                                    :class="{ disabled: !exercise.tempoActive }"
                                >
                                </vs-input>
                                <vs-tooltip class="kiv-help">
                                    <div
                                        class="icon-help"
                                        :class="{
                                            active: exercise.tempoActive,
                                        }"
                                    >
                                        <i class="fas fa-question"></i>
                                    </div>
                                    <template #tooltip>
                                        Le tempo, c'est tout simplement le
                                        rythme de la répétition, indiquant que
                                        le mouvement doit être lent, explosif ou
                                        contrôlé.
                                    </template>
                                </vs-tooltip>
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
                            <div v-if="exercise.hold" class="hold">
                                Tenir : <span>{{ exercise.hold }}s</span>
                            </div>
                            <div v-if="exercise.tempo" class="tempo">
                                Tempo : <span>{{ exercise.tempo }}</span>
                                <vs-tooltip class="kiv-help">
                                    <div class="icon-help">
                                        <i class="fas fa-question"></i>
                                    </div>
                                    <template #tooltip>
                                        Le tempo, c'est tout simplement le
                                        rythme de la répétition, indiquant que
                                        le mouvement doit être lent, explosif ou
                                        contrôlé.
                                    </template>
                                </vs-tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="add-videos" v-if="'voir' !== action">
                <vs-tooltip v-if="!$parent.prescriProcess">
                    <vs-button
                        @click="openVideoLibrary()"
                        circle
                        floating
                    >
                        <plus-icon
                            size="3x"
                            class="custom-class"
                        ></plus-icon>
                    </vs-button>
                    <template #tooltip> Ajouter des vidéos </template>
                </vs-tooltip>
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
                :loadingVideos="loadingVideos"
                :videos="videos"
                :csrfTokenSaveFFMKRRequestToken="csrfTokenSaveFFMKRRequestToken"
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
import ClickOutside from "vue-click-outside";
import { PlusIcon } from "vue-feather-icons";

export default {
    components: {
        VideoPlayer,
        VideoLibrary,
        PlusIcon,
    },
    props: {
        doctor: Object,
        loading: Boolean,
        worksheet: Object,
        exercises: Array,
        action: String,
        csrfTokenRemoveExercise: String,
        loadingVideos: Boolean,
        videos: Array,
        csrfTokenSaveFFMKRRequestToken: String,
        worksheetIndex: Number
    },
    directives: {
        ClickOutside,
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
            visibleItemIndex: 0,
            // setActiveExerciseTimeout: null,
            exercisePositionActiveId: null
        };
    },
    computed: {
        getWorksheet() {
            return this.worksheet;
        },
        getExercises() {
            return f.sortByPosition(this.exercises);
        },
        getActiveExercise() {
            return this.getExercises.filter(e=>e.isActive)[0];
        },
        getTheLastExercise() {
            return this.getExercises[this.getExercises.length - 1];
        },
    },
    mounted() {
        // this.setActiveExercise();
        // window.addEventListener('resize', this.setActiveExercise);
    },
    beforeDestroy() {
        // window.removeEventListener('resize', this.setActiveExercise);
    },
    methods: {
        // setActiveExercise(e,context=null) {
        //     const container = document.getElementById(`exercises-list-${this.worksheetIndex}`);
        //     const exercises = container.querySelectorAll('.exercise');
        //     const containerRect = container.getBoundingClientRect();

        //     let maxVisibleArea = 0;
        //     let maxVisibleIndex = 0;

        //     exercises.forEach((exercise, index) => {
        //         const exerciseRect = exercise.getBoundingClientRect();
        //         const visibleArea = this.calculateVisibleArea(containerRect, exerciseRect);
        //         if (visibleArea > maxVisibleArea) {
        //             maxVisibleArea = visibleArea;
        //             maxVisibleIndex = index;
        //         }
        //     });

        //     this.getExercises.forEach((exercice, index) => {
        //         exercice.isActive = index === maxVisibleIndex;
        //     });

        //     clearTimeout(this.setActiveExerciseTimeout);
        //     if(!context)
        //     {
        //         this.setActiveExerciseTimeout = setTimeout(() => {
        //             this.setActiveExercise(e,'secondhit')
        //         }, 1000);
        //     }

        //     this.visibleItemIndex = maxVisibleIndex;
        // },
        calculateVisibleArea(containerRect, itemRect) {
            const intersectionLeft = Math.max(containerRect.left, itemRect.left);
            const intersectionRight = Math.min(containerRect.right, itemRect.right);
            const intersectionWidth = intersectionRight - intersectionLeft;

            if (intersectionWidth <= 0) {
                return 0;
            }

            return (intersectionWidth / itemRect.width) * 100;
        },
        checkValue(bool, exercise, type) {
            if (false === bool) {
                exercise[type] = "";
            }
        },
        addVideosSelection(videos) {
            const is = this.getExercises.length;
            videos.forEach((v, i) => {
                const exercise = {
                    id: `new${this.worksheetIndex}${i}`,
                    position: is + i,
                    numberOfRepetitions: 10,
                    numberOfSeries: 3,
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

            this.$emit("videos-selection", true);

            this.$nextTick(() => {
                this.scrollToExercise(this.exercises[this.exercises.length-1]);
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

                this.scrollToExercise(exercise);
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

                this.scrollToExercise(exercise);
            }
        },
        scrollToExercise(exercise) {
            const container = document.getElementById(`exercises-list-${this.worksheetIndex}`);
            const exerciseCible = document.getElementById(`exercise-${this.worksheetIndex}-${exercise.position}`);
            if (exerciseCible&&container) 
            {
                container.scrollTo({
                    left: exerciseCible.offsetLeft,
                    behavior: 'smooth',
                });
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
        resetExercisePositionActiveId(event) {
            let currentElement = event.target;

            if(
                !currentElement.classList?.contains('btn-up-position') 
                && !currentElement.classList?.contains('btn-down-position')
                && !currentElement.classList?.contains('fa-sort-up')
                && !currentElement.classList?.contains('fa-sort-down')
            )
            {
                let exercisePositionContexte = false;
                while (currentElement !== null) {
                    if (currentElement.classList?.contains('exercise-position')) 
                        exercisePositionContexte = true
                    currentElement = currentElement.parentNode;
                }
                
                if(!exercisePositionContexte)
                    this.exercisePositionActiveId = null;
            }
        }
    },
};
</script>

<style lang="scss">
@import "../../../scss/variables";

.tab-worksheet-content .vs-input-content .vs-input,
.tab-worksheet-content .vs-input-content .vs-input:hover
{
    border: none;
    background: #fff;
    box-shadow: 0rem 0.4rem 1.4rem 0rem #e7dfcdd1;
}

.exercises-list-container {
    width: 100%;

    .exercises-list {
        overflow-x: scroll;
        display: flex;
        
        @media (max-width: 799px) {
            &::-webkit-scrollbar {
                display: none;
            }

            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* Internet Explorer et Edge */
        }
    }

    .vs-input-parent {
        width: 100%;

        .vs-input-content {
            .vs-input {
                background: $white;
                padding: 1rem 1.7rem;
                padding-bottom: 1rem;

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
                font-size: 1.1rem;
                top: -0.65rem;
                left: 0.3rem;
            }
        }
    }

    .exercise {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        flex: none;
        width: 27rem;
        margin-left: 1.6rem;
        background: #fff;
        border-radius: 1rem;
        box-shadow: 0.0375rem 0.8rem 1.5rem rgba(166, 146, 115, 0.23);
        padding-top: 1.8rem !important;
        padding: 1.7rem;    
        padding-bottom: 1.2rem;
        transition: 0.25s;
        position: relative;

        &:last-child
        {
            margin-right: 1.6rem;
        }

        &:not(.active)
        {
            transform: scale(0.97);
            box-shadow: 0.0375rem 0.2rem 0.5rem rgba(166, 146, 115, 0.13);
            margin-left: 1rem;
        }
        
        @media (min-width: 768px) {
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
            height: 13.3rem;
            // background-color: $gray-dark;
            border-radius: 0.8rem;
            // margin-right: 0;
            // margin-bottom: 1.6rem;
            position: relative;
            overflow: hidden;
            cursor: pointer;

            // .btns-arrow {
            //     position: absolute;
            //     top: 1rem;
            //     left: 1rem;

            //     .vs-button {
            //         width: 3rem;
            //         height: 3rem;
            //         box-shadow: 0px 0rem 1.5rem rgba(173, 100, 74, 0.88);

            //         &:first-child {
            //             margin-bottom: 0.7rem;
            //         }

            //         i {
            //             font-size: 2.4rem;
            //             margin-right: 0;

            //             &.fa-sort-up {
            //                 top: 0.4rem;
            //             }

            //             &.fa-sort-down {
            //                 top: -0.4rem;
            //             }
            //         }
            //     }
            // }

            // @media (min-width: 992px) {
            //     height: 35vw;
            //     margin-right: 2.3rem;
            //     margin-bottom: 0;
            //     max-width: 67rem;
            //     max-height: 38rem;
            //     min-width: 67rem;
            //     min-height: 38rem;
            // }

            .video-link
            {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                position: absolute;
                z-index: 1;
                width: 100%;

                svg 
                {
                    width: 12rem;
                    height: 12rem;
                    opacity: 0.4;
                    
                    path:first-child
                    {
                        fill: transparent
                    }
                }

            }

            .thumbnail {
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            //     right: 0;
            //     width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
            //     transform: scale(1);
            //     transition: all 1s;
            //     opacity: 0.9;
            }
        }

        .input-h2 {
            margin-bottom: 0.9rem;
            position: relative;

            // &.input-h2-mobile
            // {
            //     @media (min-width: 992px) {
            //         display: none;
            //     }
            // }

            // &.input-h2-desktop
            // {
            //     display: none;

            //     @media (min-width: 992px) {
            //         display: block;
            //     }
            // }

            h2 {
                position: relative;
                margin-bottom: 0.6rem;
                margin-left: 3.5rem;
                max-width: 75.9%;
                font-size: 1.4rem;

                // @media (min-width: 992px) {
                //     max-width: 18vw;
                // }

                // @media (min-width: 1040px) {
                //     max-width: 22vw;
                // }

                // @media (min-width: 1100px) {
                //     max-width: 27vw;
                // }

                // @media (min-width: 1370px) {
                //     max-width: 41vw;
                // }

                // @media (min-width: 1450px) {
                //     max-width: 43vw;
                // }

                span {
                    display: block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

            }

            // .remove-exercise {
            //     position: absolute;
            //     top: -0.4rem;
            //     right: -0.4rem;
            //     width: 2.2rem;
            //     height: 2.2rem;
            //     border-radius: 50%;
            //     display: flex;
            //     justify-content: center;
            //     align-items: center;
            //     border: 1px solid #d6ccb9;
            //     color: #d6ccb9;
            //     cursor: pointer;
            //     transition: all 0.2s;
            //     background: transparent;

            //     i {
            //         font-size: 1rem;
            //         position: relative;
            //         left: 0;
            //     }

            //     &:hover {
            //         border: 1px solid $gray-dark;
            //         color: $gray-dark;
            //     }
            // }

            .remove-exercise {
                position: absolute;
                top: -0.4rem;
                right: -0.4rem;
                width: 2.2rem;
                height: 2.2rem;
                padding: 0.18rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #dfd8cb;
                // color: #d6cfbe;
                cursor: pointer;
                transition: all 0.2s;
                background: transparent;

                // @media (min-width: 800px) {
                //     border: 1px solid #d6cfbe;
                // }

                i {
                    font-size: 0.7rem;
                    position: relative;
                    left: 0.05rem;
                }

                svg {
                    fill: #dfd8cb;
                    // @media (min-width: 800px) {
                    //     fill: #d6cfbe
                    // }
                    &:hover {
                        fill: $gray-dark;
                        // @media (min-width: 800px) {
                        //     fill: $gray-dark
                        // }
                    }
                }

                &:hover {
                    border: 1px solid $gray-dark;
                    // color: $gray-dark;
                    // @media (min-width: 800px) {
                    //     border: 1px solid $gray-dark;
                    // }
                }
            }
        }

        .content {
            font-size: 1.3rem;
            display: flex;
            flex-direction: column;

            @media (min-width: 992px) {
                width: 50%;
            }

            .details {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
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
                    margin-left: 0.3rem;
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
                    margin: 1.3rem 0;
                    display: flex;
                    align-items: center;
                    color: $gray-dark;
                    font-weight: 600;
                    transition: all 0.25s;

                    &.option.hidden {
                        display: none;
                    }

                    &:first-child {
                        margin-top: 2.2rem;
                    }

                    > span {
                        display: block;
                        width: 4.8rem;
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
                        // border: 0.1rem solid $gray-middle;
                        border-radius: 0.5rem;
                        background: $white;

                        &:hover {
                            background: $white;
                            // border: 0.1rem solid $gray-dark;
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

                    .kiv-select {
                        position: relative;

                        select.select-options {
                            padding: 0.53rem 1rem;
                            color: #222e54;
                            border: 0.1rem solid transparent;
                            border-radius: 0.4rem;
                            background: transparent;
                            font-size: 1.3rem;
                            min-width: 12.2rem;
                            box-shadow: 0rem 0.4rem 1.4rem 0rem #e7dfcdd1;

                            &:focus-visible,
                            &:focus {
                                border: 0.1rem solid transparent;
                                outline: none;
                            }
                        }

                        .placeholder {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            height: 100%;
                            width: 100%;
                            font-size: 1.3rem;
                            color: $gray-dark;
                            z-index: -1;
                            padding: 0.9rem 1.4rem;

                            &.hidden {
                                display: none;
                            }
                        }

                        .white-background {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            height: 100%;
                            width: 100%;
                            background-color: white;
                            border-radius: 0.4rem;
                            z-index: -2;
                        }
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
                    
                    // &.hold, &.option {
                    //     .vs-input-parent,
                    //     .kiv-select {
                    //         max-width: 12rem;
                    //     }
                    // }

                    .vs-input-parent,
                    .kiv-select {
                        max-width: 12rem;
                        margin-left: 1.5rem;
                    }

                    > :first-child {
                        margin-left: 1rem;
                    }

                    .vs-switch {
                        background: #ded5c2de;
                        min-width: 31px;
                        height: 17px;
                        margin-left: 0;

                        .vs-switch__input:checked ~ .vs-switch__circle {
                            left: calc(100% - 15px);
                        }

                        .vs-switch__circle {
                            width: 13px;
                            height: 13px;
                            left: 2px;
                        }
                    }

                    .kiv-help {
                        margin-left: 0.6rem;
                        position: absolute;
                        right: 6px;

                        .icon-help {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 1.8rem;
                            height: 1.8rem;
                            min-width: 1.8rem;
                            min-height: 1.8rem;
                            max-height: 1.8rem;
                            border-radius: 50%;
                            border: 1px solid #efe9df;

                            &.active {
                                border: 1px solid #d8d1c0;

                                i {
                                    color: #d8d1c0;
                                }
                            }

                            i {
                                font-size: 0.8rem;
                                color: #efe9df;
                                transition: all;
                            }
                        }
                    }
                }
            }

            .details {
                .tempo {
                    display: flex;
                    .kiv-help {
                        margin-left: 0.6rem;
                        position: relative;
                        top: -0.1rem;

                        .icon-help {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 1.8rem;
                            height: 1.8rem;
                            min-width: 1.8rem;
                            min-height: 1.8rem;
                            max-height: 1.8rem;
                            border-radius: 50%;
                            border: 1px solid #d6cfbe;

                            &:hover {
                                border: 1px solid #d8d1c0;

                                i {
                                    color: #d8d1c0;
                                }
                            }

                            i {
                                font-size: 0.8rem;
                                color: #d6cfbe;
                                transition: all;
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
        }

        .exercise-position
        {
            position: absolute;
            top: 1.15rem;
            left: 1.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            width: 2.8rem;
            height: 2.8rem;
            border-radius: 50%;
            color: $orange;
            font-size: 1.3rem;
            font-weight: bold;
            z-index: 5;
            box-shadow: 0rem 0.2rem 0.7rem rgba(166, 146, 115, 0.23);
            transition: 0.25s;
            cursor: pointer;
            border: 1px solid $orange;
    
            * 
            {
                user-select: none;
            }

            .vs-button
            {
                background: transparent;
                box-shadow: none !important;
                opacity: 0;
                pointer-events: none;
                width: 0;
                transition: 0.25s;
                z-index: -1;
                position: absolute;
                transform: rotate(270deg);
                top: 0.9rem;
                padding: 0 1.1rem;

                &.btn-up-position
                {
                    left: -0.5rem;
                }

                &.btn-down-position
                {
                    right: -0.5rem;
                }

                .vs-button__content
                {
                    padding: 0;

                    i 
                    {
                        margin-right: 0;
                        font-size: 1.7rem;
                        color: #fff;
                    }
                }

            }

            &.active
            {
                top: 0.535rem;
                left: 0.65rem;
                width: 4rem;
                height: 4rem;
                // background-color: $orange;
                // color: #fff;

                .vs-button
                {
                    opacity: 1;
                    pointer-events: initial;
                    width: initial;
                    z-index: 1;

                    .vs-button__content
                    {
                        i 
                        {
                            color: #d8d1c0;
                        }
                    }
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
        padding: 1.4rem !important;
        margin: 0 1.5rem;

        .vs-button
        {
            font-size: 0.9rem;
            .vs-button__content
            {
                padding: 1rem !important;
            }
        }

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

@media (max-width: 991px) {
    .footer
    {
        min-height: 6.4rem;
        > *
        {
            display: none !important;
        }
    }
}

</style>
