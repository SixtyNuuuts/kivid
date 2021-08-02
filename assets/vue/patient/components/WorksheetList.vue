<template>
    <div class="worksheets-list">
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
                            :class="{
                                completed: true === exercise.isCompleted,
                            }"
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
        <transition name="fade">
            <div v-if="playerVideoToggle" class="overlay">
                <vs-button
                    class="btn-close-player"
                    circle
                    icon
                    @click="closePlayerVideo"
                >
                    <i class="fe fe-x"></i>
                </vs-button>
                <div class="player-video">
                    <h2>{{ currentExercise.video.name }}</h2>
                    <youtube
                        :player-vars="playerVars"
                        :video-id="currentExercise.video.youtubeId"
                        @ended="ended()"
                        ref="youtube"
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
                            <h5>
                                <i class="fe fe-activity"></i>Nb de Répétitions
                            </h5>
                            <p class="number">
                                {{ currentExercise.numberOfRepetitions }}
                            </p>
                        </div>
                        <div>
                            <h5>
                                <i class="fe fe-activity"></i>Nb de Nb de Séries
                            </h5>
                            <p class="number">
                                {{ currentExercise.numberOfSeries }}
                            </p>
                        </div>
                        <div v-if="currentExercise.option">
                            <h5><i class="fe fe-activity"></i>Option</h5>
                            <p>{{ currentExercise.option }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import f from "../../services/function";

export default {
    name: "WorksheetList",
    props: {
        patient: Object,
        csrfTokenExerciseCompleted: String,
    },
    data() {
        return {
            patientPrescriptions: [],
            alertCommentExercises: true,
            activeWorksheet: null,
            playerVideoToggle: false,
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
            this.playerVideoToggle = true;

            if (!exercise) {
                this.currentExercise = this.videoList.filter(
                    (e) => false === e.isCompleted
                )[0];
            } else {
                this.currentExercise = exercise;
            }
            this.playVideo();
            this.addMaxHeightToBody();
        },
        playPrevVideo() {
            this.currentExercise =
                this.videoList[
                    this.videoList.indexOf(this.currentExercise) - 1
                ];
            this.playVideo();
            this.addMaxHeightToBody();
        },
        playNextVideo() {
            this.currentExercise =
                this.videoList[
                    this.videoList.indexOf(this.currentExercise) + 1
                ];
            this.playVideo();
            this.addMaxHeightToBody();
        },
        playVideo() {
            setTimeout(() => {
                this.$refs.youtube.player.playVideo();
            }, 500);
        },
        closePlayerVideo() {
            this.playerVideoToggle = false;
            this.removeMaxHeightToBody();
        },
        addMaxHeightToBody() {
            document.body.classList.add("max-height-100vh");
        },
        removeMaxHeightToBody() {
            document.body.classList.remove("max-height-100vh");
        },
        ended() {
            this.currentExercise.isCompleted = true;

            this.axios
                .post(`/patient/${this.patient.id}/completed/exercise`, {
                    _token: this.csrfTokenExerciseCompleted,
                    exercise_id: this.currentExercise.id,
                })
                .then((response) => {
                    this.openNotification(
                        `<strong>Exercice terminé !</strong>`,
                        `${response.data}`,
                        "top-right",
                        "success",
                        "<i class='fe fe-check-circle'></i>"
                    );

                    this.playerVideoToggle = false;
                })
                .catch((error) => {
                    this.openNotification(
                        `<strong>Erreur</strong>`,
                        `${error.response.data}`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );

                    this.playerVideoToggle = false;
                });

            if (
                this.videoList.indexOf(this.currentExercise) !=
                this.videoList.length - 1
            ) {
                this.playNextVideo();
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
    mounted() {
        this.loadingPatientPrescriptionsList = this.$vs.loading({
            // target: this.$refs.worksheetsList,
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

                this.patientPrescriptions.map((prescription) => {
                    return (prescription.worksheet.exercises =
                        f.sortedByPosition(prescription.worksheet.exercises));
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
                border-left: 10px solid orange;
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

    .completed {
        position: relative;

        &::after {
            content: "";
            position: absolute;
            top: 39%;
            right: -1em;
            width: 2em;
            height: 2em;
            background: linear-gradient(
                90deg,
                #ffc250,
                #ffb049 50%,
                #fc9c2e 100%
            );
            border-radius: 50%;
            color: white;
            font-family: "Feather" !important;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0.3rem 0.5rem rgb(102 113 143 / 31%);
        }

        > * {
            opacity: 0.5;
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

.overlay {
    background: rgb(0 0 0 / 95%);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 90000000;
    display: flex;

    .btn-close-player {
        position: absolute;
        top: 0;
        right: 0;
        width: 2em;
        height: 2em;
        font-size: 2em;
        z-index: 1000000;
        background: transparent;

        &:hover {
            box-shadow: none;
            transform: none;
            color: #838383;
        }
    }

    .player-video {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        position: relative;
        z-index: 100;
        padding: 2em;

        h2 {
            color: #fab84b;
            margin-bottom: 1em;
        }

        p {
            font-weight: 600;
            color: #ffffff;
            background-color: transparent;
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
    margin-top: 2em;
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
