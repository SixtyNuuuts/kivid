<template>
    <div data-app>
        <vs-button @click="boxToggle" class="btn-segondaki top-absolute">
            <i class="fe fe-youtube"></i> Ajouter une vidéo
        </vs-button>

        <v-dialog v-model="boxActive" width="1000">
            <h2 class="subtitle">
                <i class="fe fe-youtube"></i>Selectionnez des vidéos
            </h2>
            <List
                :ref="'loading'"
                :items="videosArray"
                :config="listConfigVideo"
                @add-video="addVideoToExercisesSelected"
                @remove-video="removeVideo"
            />
            <vs-button
                @click="boxToggle"
                class="btn btn-segondaki valid-vid lift lift-btn"
            >
                <i class="fe fe-youtube"></i> Valider
            </vs-button>
        </v-dialog>

        <div class="vs-input-content new-worksheet-inputs">
            <input
                v-model="worksheet.title"
                type="text"
                class="vs-input vs-input--has-icon form-control"
                placeholder="Titre de la fiche"
            />
        </div>

        <div class="vs-input-content my-3 new-worksheet-inputs">
            <textarea
                v-model="worksheet.description"
                class="vs-input vs-input--has-icon form-control"
                placeholder="Description de la fiche"
            />
        </div>

        <transition name="fade">
            <div v-if="exercisesSelected.length > 0">
                <h4 class="sub-subtitle">
                    <i class="fe fe-file-plus mt-2"></i>Configurer vos exercices
                </h4>
                <div
                    class="accordion shadow-light-lg mb-5 mb-md-6"
                    id="ExerciseAccordion"
                >
                    <div
                        class="accordion-item"
                        v-for="(exercise, i) in getExercisesSelected"
                        :key="i"
                    >
                        <vs-button
                            circle
                            icon
                            class="btn-delete-exercise"
                            @click="removeExercise(exercise)"
                        >
                            <i class="fe fe-trash-2"></i>
                        </vs-button>

                        <div class="accordion-button">
                            <input
                                v-model="exercise.position"
                                type="text"
                                class="
                                    vs-input vs-input--has-icon
                                    form-control
                                    position
                                "
                            />
                            <a :href="exercise.video.url" target="_blank">
                                <img
                                    :src="exercise.video.thumbnailUrl"
                                    width="80px"
                                    alt="vignette de la vidéo"
                                />
                            </a>

                            <span class="m-4">
                                {{ exercise.video.name }}
                            </span>

                            <div class="text-muted ms-auto">
                                <!-- Text -->
                                <span class="fs-sm me-4 d-none d-md-inline">
                                    <span
                                        v-for="tag in exercise.video.tags"
                                        :key="tag.name"
                                    >
                                        {{ tag.name }}
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div class="accordion-collapse">
                            <div class="accordion-body">
                                <!-- Text -->
                                <p
                                    class="text-gray-700"
                                    v-html="exercise.video.description"
                                ></p>
                            </div>
                            <div class="line exercise">
                                <div class="vs-input-content">
                                    <input
                                        v-model="exercise.numberOfRepetitions"
                                        type="number"
                                        class="
                                            vs-input vs-input--has-icon
                                            form-control
                                        "
                                        placeholder="Nb de Répétitions"
                                    />

                                    <span class="vs-input__icon">
                                        <i class="fe fe-activity"></i>
                                    </span>
                                </div>
                                <div class="vs-input-content">
                                    <input
                                        v-model="exercise.numberOfSeries"
                                        type="number"
                                        class="
                                            vs-input vs-input--has-icon
                                            form-control
                                        "
                                        placeholder="Nb de Séries"
                                    />

                                    <span class="vs-input__icon">
                                        <i class="fe fe-activity"></i>
                                    </span>
                                </div>
                                <div class="vs-input-content">
                                    <input
                                        v-model="exercise.option"
                                        type="text"
                                        class="
                                            vs-input vs-input--has-icon
                                            form-control
                                        "
                                        placeholder="Option"
                                    />

                                    <span class="vs-input__icon">
                                        <i class="fe fe-activity"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line mt-2">
                    <div class="button d-flex flex-row-reverse">
                        <vs-button
                            class="btn btn-primaki btn-xs lift lift-btn"
                            @click="createWorksheet()"
                        >
                            <i class="fe fe-file-plus me-2"></i>
                            <span v-if="prescribedPatient">
                                Créer et Prescrire la fiche
                            </span>
                            <span v-else> Créer la fiche </span>
                        </vs-button>
                    </div>
                </div>
            </div>
            <div v-else class="no-videos">
                <i class="fe fe-youtube"></i> Cette fiche ne contient pas de
                vidéo.
            </div>
        </transition>
        <vs-dialog class="action-item-box" v-model="createWorksheetBox">
            <p class="action-item-text">Confirmer la création</p>

            <div class="action-item-detail">
                <div class="action-item-icon">
                    <i class="fe fe-file-plus"></i>
                </div>
                <p v-if="prescribedPatient">
                    <span>
                        {{ worksheet.title }}
                    </span>
                    pour
                    <span>
                        {{
                            prescribedPatient.gender
                                ? "male" === prescribedPatient.gender
                                    ? "M."
                                    : "Mme"
                                : ""
                        }}
                        {{ prescribedPatient.lastname }}
                        {{ prescribedPatient.firstname }}
                    </span>
                </p>
                <p v-else>
                    <span>
                        {{ worksheet.title }}
                    </span>
                </p>
            </div>

            <div class="action-item-buttons">
                <vs-button @click="createWorksheetBox = false" dark transparent>
                    Annuler
                </vs-button>
                <!-- <div v-html="validCreateWorksheet()"></div> -->
                <button
                    class="
                        valid-form-btn
                        vs-button
                        vs-button--null
                        vs-button--size-null
                        vs-button--primary
                        vs-button--transparent
                    "
                    @click="validCreateWorksheet()"
                >
                    <div class="vs-button__content">Confirmer</div>
                </button>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import List from "./components/List.vue";
import f from "../services/function";

export default {
    name: "CreateWorksheet",
    components: {
        List,
    },
    data() {
        return {
            boxActive: false,
            positionIncr: 0,
            videos: [],
            doctor: null,
            createWorksheetForm: null,
            worksheet: {
                title: "",
                description: "",
            },
            loading: null,
            createWorksheetBox: false,
            exercisesSelected: [],
            worksheetTemplate: null,
            prescribedPatient: null,
            listConfigVideo: {
                target: "video",
                nbItemsPerPage: 10,
                searchPlaceholder: "Filtrer par Nom",
                items: [
                    {
                        title: "Vignette",
                        type: "thumbnail",
                        sort: false,
                        sortKey: null,
                    },
                    {
                        title: "Nom",
                        type: "name",
                        sort: true,
                        sortKey: "name",
                    },
                    {
                        title: "Mots-Clés",
                        type: "video-tags",
                        sort: false,
                        sortKey: null,
                    },
                    {
                        title: null,
                        type: "actions",
                        sort: false,
                        sortKey: null,
                        buttons: [
                            {
                                type: "addVideo",
                                content: {
                                    class: "btn btn-primaki btn-xs lift lift-btn white-space-no-wrap",
                                    icon: "fe fe-youtube",
                                    text: "Ajouter la vidéo",
                                },
                            },
                        ],
                    },
                ],
                notFound: {
                    search: {
                        icon: "fe fe-file-minus",
                        message: "Aucune vidéo n'a été trouvée avec ",
                    },
                    noData: {
                        icon: "fe fe-file-minus",
                        message: "Vous n'avez aucune vidéo",
                    },
                },
            },
        };
    },
    computed: {
        videosArray() {
            return this.videos;
        },
        getExercisesSelected() {
            return f.sortedByPosition(this.exercisesSelected);
        },
    },
    methods: {
        boxToggle() {
            this.boxActive = !this.boxActive;
        },
        createWorksheet() {
            f.setLoaderToBtnValidationForm();

            return (this.createWorksheetBox = !this.createWorksheetBox);
        },
        validCreateWorksheet() {
            if (this.prescribedPatient) {
                this.axios
                    .post(
                        `/kine/${this.doctor.id}/create/worksheet/${this.worksheetTemplate.id}/${this.prescribedPatient.id}`,
                        JSON.stringify({
                            title: this.worksheet.title,
                            description: this.worksheet.description,
                            exercises: this.exercisesSelected,
                        })
                    )
                    .then((response) => {
                        document.location.href = `/kine/${this.doctor.id}/fiches`;
                        console.log(response.data);
                    })
                    .catch((error) => console.log(error));
            } else if (this.worksheetTemplate) {
                this.axios
                    .post(
                        `/kine/${this.doctor.id}/create/worksheet/${this.worksheetTemplate.id}`,
                        JSON.stringify({
                            title: this.worksheet.title,
                            description: this.worksheet.description,
                            exercises: this.exercisesSelected,
                        })
                    )
                    .then((response) => {
                        document.location.href = `/kine/${this.doctor.id}/fiches`;
                        console.log(response.data);
                    })
                    .catch((error) => console.log(error));
            } else {
                this.axios
                    .post(
                        `/kine/${this.doctor.id}/create/worksheet`,
                        JSON.stringify({
                            title: this.worksheet.title,
                            description: this.worksheet.description,
                            exercises: this.exercisesSelected,
                        })
                    )
                    .then((response) => {
                        document.location.href = `/kine/${this.doctor.id}/fiches`;
                        console.log(response.data);
                    })
                    .catch((error) => console.log(error));
            }
        },
        addVideoToExercisesSelected(video) {
            const exercise = {
                position: 0,
                numberOfRepetitions: null,
                numberOfSeries: null,
                option: null,
                video: video,
            };
            this.exercisesSelected.push(exercise);
        },
        removeVideo(video) {
            this.exercisesSelected.splice(
                this.exercisesSelected.indexOf(
                    this.exercisesSelected.filter(
                        (e) => video.id === e.video.id
                    )[0]
                ),
                1
            );
        },
        removeExercise(exercise) {
            this.exercisesSelected.splice(
                this.exercisesSelected.indexOf(exercise),
                1
            );
        },
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.worksheetTemplate = data.worksheetTemplate;
        this.createWorksheetForm = data.createWorksheetForm;
        this.doctor = data.doctor;
        this.prescribedPatient = data.prescribedPatient;

        if (this.worksheetTemplate) {
            this.worksheet = {
                title: this.worksheetTemplate.title,
                description: this.worksheetTemplate.description,
            };

            const newWorksheetTemplateExercises =
                this.worksheetTemplate.exercises.map((exercise, i) => {
                    return {
                        ...exercise,
                        position: this.worksheetTemplate.exercises.length - i,
                    };
                });

            this.exercisesSelected = newWorksheetTemplateExercises;
        }

        this.loading = this.$vs.loading({
            target: this.$refs["loading"],
            text: "chargement",
            type: "border",
        });

        this.axios
            .get(`/videos`)
            .then((response) => {
                this.videos = response.data;
                this.loading.close();
                this.loading = null;
            })
            .catch((error) => {
                console.log(error);
                this.loading.close();
                this.loading = null;
            });
    },
};
</script>

<style lang="scss">
$primary: #ffab2c;
.new-worksheet-inputs {
    input,
    textarea,
    input:focus,
    textarea:focus {
        padding-left: 1em !important;
    }
}

.no-videos {
    text-align: center;
    background-color: #ffffff;
    padding: 2em;
    border: 1px solid #d9e2ef;
    border-radius: 0.5em;
    color: #a0b3d0;
}

.v-overlay {
}

.valid-vid {
    width: 40%;
    margin: 1em auto;
    padding: 0.2em 0 !important;
}

.v-dialog.v-dialog--active {
    background-color: white;
    border-radius: 1.3em;
    overflow: visible;
    h2.subtitle {
        text-align: center;
    }
}

.line.exercise {
    display: flex;
    justify-content: space-between;
    margin: 1em;
    .vs-input-content {
        margin: 0 0.5em;
        flex: 1;
    }
}

.btn-delete-exercise {
    background-color: $primary;
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
}
.accordion-body {
    padding: 0 1em;
    font-size: 0.85em;
}
.position.vs-input {
    width: 50px;
    padding-left: 10px;
    border-radius: 5px !important;
    margin-right: 10px;
    &:focus {
        padding-left: 10px !important;
    }
}
h4.sub-subtitle {
    color: #5b77a0;
    font-size: 1em;
    margin-top: 1.7em;

    i {
        margin-right: 0.4em;
    }
}

.white-space-no-wrap {
    white-space: nowrap;
}

.accordion-item {
    position: relative;
    span.fs-sm.me-4 {
        display: flex !important;
        flex-direction: column;
        font-size: 0.85em !important;
    }
    p {
        margin: 1em;
    }
}

.vs-input-content {
    input,
    textarea {
        width: 100%;
    }
}
</style>
