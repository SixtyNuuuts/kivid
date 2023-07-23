<template>
    <div class="container" id="worksheet">
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
                    <div class="label">prescription <span>pour</span></div>
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
                            {{ getUserName(patient) }}
                        </div>
                    </div>
                </div>
            </div>
            <div
              v-for="(worksheet, i) in getWorksheets"
              :key="i"
            >
                <div class="tab-worksheet" @click="toggleCurrentOpenWorksheet(worksheet.id)">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h10l6-6V5C21,3.895,20.105,3,19,3z M19,14h-5v5H5V5h14V14z"/></svg>
                    {{ worksheet.title == "" ? 'Création de fiche' : worksheet.title }}
                </div>
                <transition name="height">
                    <div v-show="currentOpenWorksheet == worksheet.id">
                        <header>
                            <div>
                                <div v-if="'voir' === action" class="title-view">
                                    <div class="title">
                                        <i
                                            class="kiv-arrow-left icon-31"
                                            :class="{ hidden: patient }"
                                            @click="rederictToDashboard()"
                                        ></i>
                                        <h1>{{ worksheet.title }}</h1>
                                    </div>
                                    <TagPartOfBody
                                        v-if="worksheet.partOfBody"
                                        :partOfBody="worksheet.partOfBody"
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
                                        @keyup="worksheet.titleIsEmptyMessage = null"
                                    >
                                        <template v-if="worksheet.titleIsEmptyMessage" #message-danger>
                                            {{ worksheet.titleIsEmptyMessage }}
                                        </template>
                                    </vs-input>
                                </div>
                                <div v-if="'voir' !== action" class="worksheet-params">
                                    <div
                                        class="worksheet-details"
                                        :class="{
                                            disabled:
                                                'edition' === action &&
                                                worksheet.checkIfWorksheetSessionsExist,
                                        }"
                                    >
                                        <div
                                            v-if="
                                                'edition' === action &&
                                                worksheet.checkIfWorksheetSessionsExist
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
                                                        $event,
                                                        worksheet
                                                    )
                                                "
                                                min="1"
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
                                                        $event,
                                                        worksheet
                                                    )
                                                "
                                                min="1"
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
                                                        $event,
                                                        worksheet
                                                    )
                                                "
                                                min="1"
                                                max="52"
                                            >
                                            </vs-input>
                                        </div>
                                    </div>
                                    <div class="select-filter-block">
                                        <SelectPartOfBody
                                            :partOfBody="worksheet.partOfBody"
                                            @partOfBodySelected="setPartOfBody($event, worksheet)"
                                            @partOfBodyReset="resetPoB($event, worksheet)"
                                        />
                                        <div v-if="worksheet.partOfBodyIsEmptyMessage" class="error-mess">
                                            {{ worksheet.partOfBodyIsEmptyMessage }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <main>
                            <section
                                id="exercises-playlist"
                                :class="{ 'no-mt': 'voir' === action }"
                            >
                                <ExercisesPlaylist
                                    :doctor="doctor"
                                    :loading="loading"
                                    :action="action"
                                    :worksheet="worksheet"
                                    :exercises="worksheet.exercises"
                                    :loadingVideos="loadingVideos"
                                    :videos="videos"
                                    :csrfTokenRemoveExercise="csrfTokenRemoveExercise"
                                    :csrfTokenSaveFFMKRRequestToken="csrfTokenSaveFFMKRRequestToken"
                                />
                            </section>
                        </main>
                    </div>
                </transition>
                <div
                    class="btn-valid"
                    :class="{
                        disabled:
                            btnLoadingValidEditWorksheet ||
                            btnLoadingValidCreateWorksheet ||
                            loading,
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
            worksheetsIds: null,
            worksheets: [
                {
                    id: 0,
                    partOfBody: null,
                    duration: 1,
                    perDay: 1,
                    perWeek: 1,
                    title: "",
                    partOfBodyIsEmptyMessage: null,
                    titleIsEmptyMessage: null,
                    exercises: [],
                    checkIfWorksheetSessionsExist: null,
                }
            ],
            patient: null,
            loadingVideos: false,
            videos: [],
            csrfTokenCreateWorksheet: null,
            csrfTokenEditWorksheet: null,
            csrfTokenRemoveExercise: null,
            csrfTokenSaveFFMKRRequestToken:null,
            loading: false,
            maxDuration: {
                duration: 52,
                perDay: 3,
                perWeek: 7,
            },
            btnLoadingValidEditWorksheet: false,
            btnLoadingValidCreateWorksheet: false,
            currentOpenWorksheet: null
        };
    },
    computed: {
        getWorksheets() {
            return this.worksheets;
        },
    },
    methods: {
        setPartOfBody(partOfBody, worksheet) {
            worksheet.partOfBody = partOfBody;
            worksheet.partOfBodyIsEmptyMessage = "";
        },
        resetPoB(partOfBody, worksheet) {
            worksheet.partOfBody = null;
        },
        rederictToDashboard() {
            document.location.href = `/doctor/${this.doctor.id}/dashboard`;
        },
        toggleCurrentOpenWorksheet(worksheetId) {
            this.currentOpenWorksheet = this.currentOpenWorksheet != worksheetId ? worksheetId : null;
        },
        checkIfDurationValueIsEmptyOrNull(durationValue, event, worksheet) {
            const durationType = event.target.id;

            if ("vs-input--duration" === durationType) {
                if ("" === durationValue || null === durationValue) {
                    worksheet.duration = 1;
                }
                if (durationValue < 1) {
                    worksheet.duration = 1;
                }
                if (durationValue > this.maxDuration.duration) {
                    worksheet.duration = this.maxDuration.duration;
                }
            }

            if ("vs-input--perDay" === durationType) {
                if ("" === durationValue || null === durationValue) {
                    worksheet.perDay = 1;
                }
                if (durationValue < 1) {
                    worksheet.perDay = 1;
                }
                if (durationValue > this.maxDuration.perDay) {
                    worksheet.perDay = this.maxDuration.perDay;
                }
            }

            if ("vs-input--perWeek" === durationType) {
                if ("" === durationValue || null === durationValue) {
                    worksheet.perWeek = 1;
                }
                if (durationValue < 1) {
                    worksheet.perWeek = 1;
                }
                if (durationValue > this.maxDuration.perWeek) {
                    worksheet.perWeek = this.maxDuration.perWeek;
                }
            }
        },
        checkIfEmpty(worksheet) {
            let check = true;

            if (!worksheet.partOfBody) {
                worksheet.partOfBodyIsEmptyMessage =
                    "Vous devez choisir une partie du corps";
                check = false;
                f.openErrorNotification(
                    "Erreur",
                    worksheet.partOfBodyIsEmptyMessage + " pour la fiche."
                );
            }

            if (worksheet.title === "" || worksheet.title === null) {
                worksheet.titleIsEmptyMessage =
                    "Vous devez entrer un titre pour la fiche.";
                check = false;
                f.openErrorNotification("Erreur", worksheet.titleIsEmptyMessage);
            }

            if (!worksheet.exercises.length) {
                check = false;
                f.openErrorNotification(
                    "Erreur",
                    "La fiche ne peut pas être vide, vous devez ajouter des vidéos."
                );
            }

            return check;
        },
        validEdit(worksheet) {
            this.btnLoadingValidEditWorksheet = true;

            const isNotEmpty = this.checkIfEmpty(worksheet);

            if (isNotEmpty) {
                this.axios
                    .post(`/doctor/${this.doctor.id}/edit/worksheet`, {
                        _token: this.csrfTokenEditWorksheet,
                        worksheetId: worksheet.id,
                        title: worksheet.title,
                        partOfBodyId: worksheet.partOfBody.id,
                        duration: worksheet.duration,
                        perWeek: worksheet.perWeek,
                        perDay: worksheet.perDay,
                        exercises: worksheet.exercises,
                    })
                    .then((response) => {
                        if (this.patient) {
                            f.openSuccessNotification(
                                "Edition de la prescription",
                                `La prescription a bien été modifiée`
                            );
                        } else {
                            f.openSuccessNotification(
                                "Edition de la fiche",
                                response.data
                            );
                        }

                        this.btnLoadingValidEditWorksheet = false;

                        setTimeout(() => {
                            if (this.patient) {
                                document.location.href = `/doctor/${this.doctor.id}/dashboard`;
                            } else {
                                document.location.href = `/doctor/${this.doctor.id}/dashboard/?tab=ws`;
                            }
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
        validCreate(worksheets) {
            this.btnLoadingValidCreateWorksheet = true;

            const isNotEmpty = this.checkIfEmpty(worksheet);

            // if (isNotEmpty) {
            //     this.axios
            //         .post(`/doctor/${this.doctor.id}/create/worksheet`, {
            //             _token: this.csrfTokenCreateWorksheet,
            //             worksheetId: this.worksheet.id,
            //             patientId: this.patient ? this.patient.id : null,
            //             title: worksheet.title,
            //             partOfBodyId: worksheet.partOfBody.id,
            //             duration: worksheet.duration,
            //             perWeek: worksheet.perWeek,
            //             perDay: worksheet.perDay,
            //             exercises: worksheet.exercises,
            //         })
            //         .then((response) => {
            //             if (this.patient) {
            //                 if (!this.worksheet.id) {
            //                     // création du modèle de fiche (identique sans le patient)
            //                     this.axios
            //                         .post(
            //                             `/doctor/${this.doctor.id}/create/worksheet`,
            //                             {
            //                                 _token: this
            //                                     .csrfTokenCreateWorksheet,
            //                                 worksheetId: this.worksheet.id,
            //                                 patientId: null,
            //                                 title: this.worksheet.title,
            //                                 partOfBodyId:
            //                                     this.worksheet.partOfBody.id,
            //                                 duration: this.worksheet.duration,
            //                                 perWeek: this.worksheet.perWeek,
            //                                 perDay: this.worksheet.perDay,
            //                                 exercises: this.exercises,
            //                             }
            //                         )
            //                         .then((response) => {
            //                             f.openSuccessNotification(
            //                                 "Création de la prescription",
            //                                 `La fiche <strong> ${
            //                                     this.worksheet.title
            //                                 }</strong> 
            //                                 a été prescrite à <strong>
            //                                 ${this.getUserName(
            //                                     this.patient
            //                                 )}</strong>`
            //                             );
            //                             this.btnLoadingValidCreateWorksheet = false;
            //                             setTimeout(() => {
            //                                 document.location.href = `/doctor/${this.doctor.id}/dashboard`;
            //                             }, 2000);
            //                         })
            //                         .catch((error) => {
            //                             const errorMess =
            //                                 "object" ===
            //                                 typeof error.response.data
            //                                     ? error.response.data.detail
            //                                     : error.response.data;
            //                             this.btnLoadingValidCreateWorksheet = false;
            //                             f.openErrorNotification(
            //                                 "Erreur",
            //                                 errorMess
            //                             );
            //                         });
            //                 } else {
            //                     f.openSuccessNotification(
            //                         "Création de la prescription",
            //                         `La fiche <strong> ${
            //                             this.worksheet.title
            //                         }</strong> 
            //                         a été prescrite à <strong>
            //                         ${this.getUserName(this.patient)}</strong>`
            //                     );
            //                     this.btnLoadingValidCreateWorksheet = false;
            //                     setTimeout(() => {
            //                         document.location.href = `/doctor/${this.doctor.id}/dashboard`;
            //                     }, 2000);
            //                 }
            //             } else {
            //                 f.openSuccessNotification(
            //                     "Création de la fiche",
            //                     response.data
            //                 );
            //                 this.btnLoadingValidCreateWorksheet = false;
            //                 setTimeout(() => {
            //                     document.location.href = `/doctor/${this.doctor.id}/dashboard/?tab=ws`;
            //                 }, 2000);
            //             }
            //         })
            //         .catch((error) => {
            //             const errorMess =
            //                 "object" === typeof error.response.data
            //                     ? error.response.data.detail
            //                     : error.response.data;
            //             this.btnLoadingValidCreateWorksheet = false;
            //             f.openErrorNotification("Erreur", errorMess);
            //         });
            // } else {
            //     this.btnLoadingValidCreateWorksheet = false;
            // }
        },
        getUserName(user) {
            return f.getUserName(user);
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.worksheetsIds = JSON.parse(data.worksheetId);
        this.action = data.action;
        this.patient = data.patient;
        this.csrfTokenCreateWorksheet = data.csrfTokenCreateWorksheet;
        this.csrfTokenEditWorksheet = data.csrfTokenEditWorksheet;
        this.csrfTokenRemoveExercise = data.csrfTokenRemoveExercise;
        this.csrfTokenSaveFFMKRRequestToken= data.csrfTokenSaveFFMKRRequestToken;

        if(!Array.isArray(this.worksheetsIds))
            this.worksheetsIds = [this.worksheetsIds];
            
        const 
            worksheetsIdsFiltered = this.worksheetsIds.filter(wId=>(wId!=0&&wId!=null)),
            worksheetsCreationCount = this.worksheetsIds.length - worksheetsIdsFiltered.length
        ; 

        this.loading = true;
        if (worksheetsIdsFiltered.length) {
            this.axios
                .post(`/doctor/${this.doctor.id}/get/worksheets-group`, {
                    worksheetsIds: worksheetsIdsFiltered,
                })
                .then((response) => {
                    this.worksheets = Array.from({ length: worksheetsCreationCount }, () => ({ ...JSON.parse(JSON.stringify(this.worksheets[0])) }));

                    let existingWorksheets = Array.isArray(response.data) ? response.data : [response.data];
                    if (this.action === "creation" && !this.patient) {
                        this.existingWorksheets = existingWorksheets.map(worksheet => ({
                            ...worksheet,
                            title: `Copie de ${worksheet.title}`
                        }));
                    }
                    existingWorksheets.forEach(worksheet => {
                            worksheet.exercises = worksheet.exercises.map((exercise) => {
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
                                        `/doctor/${this.doctor.id}/check/worksheet-sessions-exist/${worksheet.id}`
                                    )
                                    .then((response) => {
                                        worksheet.checkIfWorksheetSessionsExist =
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
                    });
                
                    this.worksheets = [...this.worksheets, ...existingWorksheets];
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

        this.loadingVideos = true;

        this.axios
            .get(`/doctor/${this.doctor.id}/get/videos`)
            .then((response) => {
                this.loadingVideos = false;

                this.videos = response.data;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                f.openErrorNotification("Erreur", errorMess);

                this.loadingVideos = false;
            });
    },
};
</script>

<style lang="scss">
@import "../../scss/variables";

#worksheet {
    padding: 0rem 0;

    .tab-worksheet
    {
        padding: 1rem;
        background-color: #e7dfcd;
        cursor: pointer;
        color: #afa17e;
        font-size: 1.5rem;
        display: flex;
        align-items: center;

        svg {
            width: 2rem;
            height: 2rem;
            fill: #fff;
            margin-right: 0.5rem;
        }
    }

    .loading-block {
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

    .prescri-for-patient-content {
        i {
            font-size: 1.6rem;
            margin-right: 1.8rem;
            cursor: pointer;
            position: relative;
            top: 2.5rem;
        }

        .prescri-for-patient {
            background: #fff;
            display: flex;
            align-items: center;
            padding: 0.9rem 1.7rem;
            padding-top: 1.1rem;
            box-shadow: 0px 0.4rem 0.7rem rgba(148, 96, 77, 0.04);
            border-radius: 2.5rem;
            font-weight: 600;
            margin-bottom: 2.6rem;
            margin-left: 3.4rem;
            margin-top: -0.8rem;
            min-width: 18.3rem;
            position: relative;

            .label {
                position: absolute;
                top: -1.2rem;
                left: 4.7rem;
                padding: 0.5rem 0.6rem;
                padding-bottom: 0.3rem;
                border-radius: 1.1rem;
                background: #f5f5f5;
                color: #9aa1b7;
                text-transform: uppercase;
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                justify-content: center;
                letter-spacing: 0.01rem;

                span {
                    margin-left: 0.5rem;
                }
            }

            .user-avatar {
                min-width: 26px;
                max-height: 26px;
            }

            .user-name {
                font-size: 1.5rem;
                margin-left: 0.9rem;
                margin-right: 0.5rem;
                max-width: 51vw;

                @media (min-width: 330px) {
                    max-width: 56vw;
                }

                @media (min-width: 440px) {
                    max-width: 66vw;
                }

                @media (min-width: 500px) {
                    max-width: 70vw;
                }

                @media (min-width: 690px) {
                    max-width: 77vw;
                }

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

            .vs-input-parent {
                width: 100%;

                .vs-input-content {
                    .vs-input {
                        background: $white;
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
                    max-width: 47vw;

                    @media (min-width: 330px) {
                        max-width: 52vw;
                    }

                    @media (min-width: 350px) {
                        max-width: 54vw;
                    }

                    @media (min-width: 385px) {
                        max-width: 57vw;
                    }

                    @media (min-width: 400px) {
                        max-width: 61vw;
                    }

                    @media (min-width: 430px) {
                        max-width: 62vw;
                    }

                    @media (min-width: 500px) {
                        max-width: 68vw;
                    }

                    @media (min-width: 615px) {
                        max-width: 69vw;
                    }

                    @media (min-width: 768px) {
                        max-width: 74vw;
                    }

                    @media (min-width: 905px) {
                        max-width: 76vw;
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
                margin-bottom: 0;

                @media (min-width: 768px) {
                    flex-direction: row;
                    margin-bottom: 1.9rem;
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
                            user-select: none !important;

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
            margin-top: 4.5rem;

            &.no-mt {
                margin-top: 0;
            }

            @media (min-width: 768px) {
                margin-top: 2.5rem;
            }
        }
    }
    .btn-valid {
        position: fixed;
        z-index: 1111;
        bottom: 2.3rem;
        right: 3rem;

        @media (max-width: 550px) {
            bottom: 0;
            right: 0;
            width: 100%;
        }

        .vs-button {
            background: $black;
            color: $white;
            letter-spacing: 0.005rem;
            font-weight: 700;
            font-size: 1.4rem;
            box-shadow: 0px 0.8rem 1.8rem rgba(75, 61, 56, 0.55);
            border-radius: 0.5rem;

            @media (max-width: 550px) {
                width: 100%;
                border-radius: 1rem 1rem 0 0;

                &:hover {
                    transform: none;
                }
            }

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
