<template>
    <div ref="worksheetsList" class="worksheets-list">
        <div class="worksheet-item-list">
            <div
                v-for="(prescription, i) in prescriptionsList"
                :key="i"
                class="worksheet-item card shadow-lg"
                @click="activeWorksheetAndGenerateVideoList(prescription, i)"
                :class="{ active: activeWorksheet === i }"
            >
                <div class="card-header">
                    <div class="title">
                        <div
                            v-if="prescription.worksheet.exercisesTags"
                            class="tags"
                        >
                            <div
                                class="tags-chip tags-chip-raised"
                                v-for="tag in prescription.worksheet
                                    .exercisesTags"
                                :key="tag"
                            >
                                {{ tag }}
                            </div>
                        </div>
                        <h3>{{ prescription.worksheet.title }}</h3>
                    </div>

                    <div
                        v-if="prescription.worksheet.partOfBody"
                        class="part-of-body"
                    >
                        <div class="img-part-of-body">
                            <img
                                :src="`/img/icons/part-of-body/${prescription.worksheet.partOfBody.toLowerCase()}.svg`"
                                :alt="`icon ${prescription.worksheet.partOfBody.toLowerCase()}`"
                            />
                        </div>
                        <span>{{ prescription.worksheet.partOfBody }}</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="timing">
                        <i class="fe fe-calendar"></i>
                        <p>Plus que <span>5 j.</span> pour terminer la fiche</p>
                    </div>
                </div>
                <div class="card-footer">
                    <div
                        v-if="prescription.worksheet.exercises"
                        class="exercises"
                    >
                        <span
                            v-if="prescription.worksheet.exercises.length > 1"
                        >
                            {{ prescription.worksheet.exercises.length }}
                            exercises
                        </span>
                        <span v-else>
                            {{ prescription.worksheet.exercises.length }}
                            exercise
                        </span>
                    </div>
                    <div v-if="activeWorksheet === i" class="lets-go">
                        <span>c'est parti !</span>
                        <i class="fe fe-arrow-right-circle"></i>
                    </div>
                    <div v-else class="selectionner">
                        <span>Sélectionner</span>
                        <i class="fe fe-arrow-right-circle"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="worksheet-details">
            <div v-for="(prescription, i) in prescriptionsList" :key="i">
                <transition name="fade">
                    <div v-if="activeWorksheet === i">
                        <h1>{{ prescription.worksheet.title }}</h1>
                        <div class="actions-btns">
                            <vs-button @click="playVideoList()" size="large">
                                <i class="fe fe-play-circle"></i>
                                <span
                                    v-if="
                                        !prescription.worksheet.exercises[0]
                                            .isCompleted
                                    "
                                >
                                    Démarrer
                                </span>
                                <span v-else>Reprendre</span>
                            </vs-button>
                            <!-- <vs-button @click="true"> Reprendre </vs-button> -->
                        </div>
                        <vs-alert closable v-model="alertCommentExercises">
                            <template #icon>
                                <i class="fe fe-info"></i>
                            </template>
                            À la fin de vos exercices, vous aurez la possiblité
                            d’écrire un bref commentaire.
                        </vs-alert>
                        <vs-card
                            type="3"
                            v-for="(exercise, i) in prescription.worksheet
                                .exercises"
                            :key="i"
                            @click="playVideoList(exercise)"
                        >
                            <template #title>
                                <h3>{{ exercise.video.name }}</h3>
                            </template>
                            <template #img>
                                <img
                                    :src="exercise.video.thumbnailUrl"
                                    alt="vignette de la vidéo"
                                />
                            </template>
                            <template #text>
                                <p>
                                    {{ exercise.video.description }}
                                </p>

                                <div class="specs">
                                    <div>
                                        <h5>
                                            <i class="fe fe-activity"></i>Nb de
                                            Répétitions
                                        </h5>
                                        <p>
                                            {{ exercise.numberOfRepetitions }}
                                        </p>
                                    </div>
                                    <div>
                                        <h5>
                                            <i class="fe fe-activity"></i>Nb de
                                            Nb de Séries
                                        </h5>
                                        <p>
                                            {{ exercise.numberOfSeries }}
                                        </p>
                                    </div>
                                    <div v-if="exercise.option">
                                        <h5>
                                            <i class="fe fe-activity"></i>Option
                                        </h5>
                                        <p>{{ exercise.option }}</p>
                                    </div>
                                </div>
                            </template>
                        </vs-card>
                    </div>
                </transition>
            </div>
        </div>
        <vs-dialog
            overflow-hidden
            full-screen
            v-model="modalVideoPlay"
            class="modal-playing-video"
        >
            <h2>{{ currentExercise.video.name }}</h2>
            <youtube
                :player-vars="playerVars"
                :video-id="currentExercise.video.youtubeId"
                @ended="ended()"
            ></youtube>
            <div>
                <div
                    v-if="
                        currentExercise &&
                        videoList.indexOf(currentExercise) != 0
                    "
                    class="prev"
                >
                    <vs-button circle icon @click="playPrevVideo()">
                        <i class="fe fe-arrow-left"></i>
                    </vs-button>
                </div>
                <div
                    v-if="
                        currentExercise &&
                        videoList.indexOf(currentExercise) !=
                            videoList.length - 1
                    "
                    class="next"
                >
                    <vs-button circle icon @click="playNextVideo()">
                        <i class="fe fe-arrow-right"></i>
                    </vs-button>
                </div>
            </div>
            <div class="specs">
                <div>
                    <h5><i class="fe fe-activity"></i>Nb de Répétitions</h5>
                    <p class="number">
                        {{ currentExercise.numberOfRepetitions }}
                    </p>
                </div>
                <div>
                    <h5><i class="fe fe-activity"></i>Nb de Nb de Séries</h5>
                    <p class="number">
                        {{ currentExercise.numberOfSeries }}
                    </p>
                </div>
                <div v-if="currentExercise.option">
                    <h5><i class="fe fe-activity"></i>Option</h5>
                    <p>{{ currentExercise.option }}</p>
                </div>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import f from "../../services/function";

export default {
    name: "WorksheetList",
    props: {
        patient: Object,
    },
    data() {
        return {
            patientPrescriptions: [],
            alertCommentExercises: true,
            activeWorksheet: null,
            modalVideoPlay: false,
            videoList: [],
            currentExercise: { video: {} },
            playerVars: {
                rel: 0,
                showinfo: 0,
                ecver: 2,
                modestbranding: 1,
            },
        };
    },
    computed: {
        prescriptionsList() {
            return this.patientPrescriptions;
        },
    },
    methods: {
        activeWorksheetAndGenerateVideoList(prescription, i) {
            this.activeWorksheet = i;
            this.generateVideoList(prescription.worksheet.exercises);
        },
        generateVideoList(exercises) {
            this.videoList = exercises;
        },
        playVideoList(exercise) {
            this.modalVideoPlay = true;

            if (!exercise) {
                this.currentExercise = this.videoList.filter(
                    (e) => false === e.isCompleted
                )[0];
            } else {
                this.currentExercise = exercise;
            }
        },
        playPrevVideo() {
            this.currentExercise =
                this.videoList[
                    this.videoList.indexOf(this.currentExercise) - 1
                ];
        },
        playNextVideo() {
            this.currentExercise =
                this.videoList[
                    this.videoList.indexOf(this.currentExercise) + 1
                ];
        },
        ended() {
            this.currentExercise.isCompleted = true;

            if (
                this.videoList.indexOf(this.currentExercise) !=
                this.videoList.length - 1
            ) {
                this.playNextVideo();
            }
        },
    },
    mounted() {
        this.loadingPatientPrescriptionsList = this.$vs.loading({
            target: this.$refs.worksheetsList,
            text: "chargement",
            type: "border",
        });

        this.axios
            .get(`/patient/${this.patient.id}/get/prescriptions`)
            .then((response) => {
                this.patientPrescriptions = response.data;

                this.patientPrescriptions.map((prescription) => {
                    return (prescription.worksheet.exercisesTags =
                        prescription.worksheet.exercises.reduce(
                            (r, exercise) => {
                                exercise.video.tags.forEach((tag) => {
                                    if (!r.includes(tag.name)) {
                                        r.push(tag.name);
                                    }
                                });
                                return r;
                            },
                            []
                        ));
                });

                this.activeWorksheetAndGenerateVideoList(
                    this.patientPrescriptions[0],
                    0
                );

                this.loadingPatientPrescriptionsList.close();
                this.loadingPatientPrescriptionsList = null;
            })
            .catch((error) => {
                console.log(error);
                this.loadingPatientPrescriptionsList.close();
                this.loadingPatientPrescriptionsList = null;
            });
    },
};
</script>

<style lang="scss" scoped>
.worksheets-list {
    display: flex;

    .worksheet-item-list {
        flex: 2;
        box-shadow: 0 0.5rem 1.5rem rgb(33 42 69 / 15%) !important;
        z-index: 10;

        .worksheet-item.card {
            cursor: pointer;
            position: relative;
            background-color: white;
            transition: all 0.2s;
            border-left: 1px solid transparent;

            &.active {
                border-left: 5px solid orange;
            }

            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.5rem 1.1rem;
                padding-top: 0.8rem;

                .title {
                    display: flex;
                    flex-direction: column;
                    width: 75%;
                    white-space: nowrap;

                    .tags {
                        margin-bottom: 0.1em;
                        font-size: 0.65em;

                        .tags-chip {
                            background: linear-gradient(
                                90deg,
                                #ffc250,
                                #ffb049 50%,
                                #fc9c2e 100%
                            );
                            color: white;
                            font-weight: 600;
                        }
                    }

                    h3 {
                        margin: 0;
                        font-weight: 700;
                        font-size: 1em;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }

                .part-of-body {
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    flex-direction: column;
                    width: 25%;

                    span {
                        margin-right: 0.5em;
                        margin-top: 0.3em;
                        text-transform: uppercase;
                        font-size: 0.65em;
                        color: #ffab2c;
                    }

                    .img-part-of-body {
                        width: 2em;
                        height: 2em;
                        border-radius: 50%;
                        padding: 0.3em;
                        padding-top: 0.1em;
                        background-color: #fff6e8;
                    }
                }
            }

            .card-body {
                background-color: #f9fafd;
                display: flex;
                justify-content: center;
                padding: 1rem 1.1rem;
                font-size: 1.2em;

                .timing {
                    display: flex;
                    align-items: center;

                    i {
                        color: #fad776;
                        margin-top: -2px;
                        margin-right: 5px;
                        font-size: 0.65em;
                    }

                    p {
                        margin-bottom: 0;
                        font-style: italic;
                        font-size: 0.65em;
                        color: #506690;

                        span {
                            font-weight: 700;
                        }
                    }
                }
            }

            .card-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-top: 1px solid #f1f4f8;
                padding: 0.7rem 1.1rem;
                border-bottom: 1px solid #e2e9f9;
                box-shadow: 0 0.6rem 1rem rgb(33 42 69 / 15%) !important;

                .exercises {
                    color: #869ab8;
                    text-transform: uppercase;
                    font-size: 0.7em;
                }

                .lets-go,
                .selectionner {
                    padding: 0.3em 0.9em;
                    text-transform: uppercase;
                    font-size: 0.65em;
                    border-radius: 2em;
                    display: flex;
                    align-items: center;

                    span {
                        margin-top: 0.15em;
                    }

                    i {
                        margin-left: 0.3em;
                        margin-top: -0.05em;
                        font-size: 1.15em;
                    }
                }

                .selectionner {
                    color: #869ab8;
                    background-color: #f9fafd;
                }

                .lets-go {
                    color: #ffa227;
                    background-color: #fff6e8;
                }
            }
        }
    }

    .worksheet-details {
        flex: 4;
        position: relative;
        background-color: #f1f4f8;
        padding: 1.5em 2.5em;
        padding-right: 2em;

        h1 {
            margin-bottom: 0.7em;
            width: 75%;
        }

        .actions-btns {
            display: flex;
            position: absolute;
            top: 1em;
            right: 1.6em;
        }

        .vs-card-content.type-3 .vs-card {
            .specs {
                display: flex;
                justify-content: space-between;
                margin-top: 0.7em;

                > div {
                    h5 {
                        font-size: 0.75rem;
                        color: #ffab2c;
                        margin-bottom: 0;

                        i {
                            margin-right: 0.5em;
                        }
                    }
                }
            }
        }
    }
}

.prev,
.next {
    position: absolute;
    top: 47%;

    button {
        width: 3em;
        height: 3em;

        i {
            font-size: 1.5em;
        }
    }
}

.prev {
    left: 2%;
}

.next {
    right: 2%;
}

.specs {
    display: flex;
    justify-content: space-between;
    width: 85%;
    max-width: 1010px;
    margin-top: 1em;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 100%;

        h5 {
            color: #ffab2c;
            margin-bottom: 0.5em;
            line-height: 1.2;

            i {
                margin-right: 0.3em;
            }
        }

        p {
            border-radius: 0.2em;
            font-weight: 600;
            color: #506690;
            background-color: #f1f4f8;
            width: 100%;
            padding: 0.5em 0.7em;
            line-height: 1.2;

            &.number {
                font-size: 2em;
                text-align: center;
            }
        }
    }

    @media (min-width: 765px) {
        flex-direction: row;

        div {
            max-width: 13em;
            &:not(:last-child) {
                margin-right: 0.8em;
            }
        }
    }
}
</style>
