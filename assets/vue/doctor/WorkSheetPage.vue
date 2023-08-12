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
                <!-- <i
                    class="kiv-arrow-left icon-31"
                    @click="rederictToDashboard()"
                ></i> -->
                <div class="prescri-for-patient">
                    <div class="label">
                        <span v-if="getWorksheets.length > 1">{{ getWorksheets.length }} prescriptions</span>
                        <span v-else>prescription</span>
                        <span>pour</span>
                    </div>
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
              v-for="(worksheet, worksheetIndex) in getWorksheets"
              :key="worksheetIndex"
            >
                <div v-if="getWorksheets.length > 1" class="tab-worksheet-header" @click="toggleCurrentOpenWorksheet(worksheet.id)" :class="{active:currentOpenWorksheet == worksheet.id}">
                    <span class="worksheet-title-zone">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h10l6-6V5C21,3.895,20.105,3,19,3z M19,14h-5v5H5V5h14V14z"/></svg>
                        <span class="worksheet-title">{{ worksheet.title == "" ? 'Création de fiche' : worksheet.title }}</span>
                    </span>
                    <span class="vs-icon-arrow"></span>
                    <button class="worksheet-remove">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6367188 13 L 11.15625 39.029297 C 11.43025 41.862297 13.785813 44 16.632812 44 L 31.367188 44 C 34.214187 44 36.56875 41.862297 36.84375 39.029297 L 39.363281 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 19.5 18 C 20.328 18 21 18.671 21 19.5 L 21 34.5 C 21 35.329 20.328 36 19.5 36 C 18.672 36 18 35.329 18 34.5 L 18 19.5 C 18 18.671 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.671 30 19.5 L 30 34.5 C 30 35.329 29.328 36 28.5 36 C 27.672 36 27 35.329 27 34.5 L 27 19.5 C 27 18.671 27.672 18 28.5 18 z"></path></svg>
                    </button>
                </div>
                <transition name="height">
                    <div class="tab-worksheet-content" v-show="currentOpenWorksheet == worksheet.id">
                        <header>
                            <div>
                                <div>
                                    <div v-if="'voir' === action" class="title-view">
                                        <div class="title">
                                            <!-- <i
                                                class="kiv-arrow-left icon-31"
                                                :class="{ hidden: patient }"
                                                @click="rederictToDashboard()"
                                            ></i> -->
                                            <h1>{{ worksheet.title }}</h1>
                                        </div>
                                        <TagPartOfBody
                                            v-if="worksheet.partOfBody"
                                            :partOfBody="worksheet.partOfBody"
                                        />
                                    </div>
                                    <div v-else class="title">
                                        <!-- <i
                                            class="kiv-arrow-left icon-31"
                                            :class="{ hidden: patient }"
                                            @click="rederictToDashboard()"
                                        ></i> -->
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
                                                label-placeholder="X / sem."
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
                                                label-placeholder="X / jour"
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
                                                label-placeholder="Durée (sem.)"
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
                                    :worksheetIndex="worksheetIndex"
                                    :csrfTokenRemoveExercise="csrfTokenRemoveExercise"
                                    :csrfTokenSaveFFMKRRequestToken="csrfTokenSaveFFMKRRequestToken"
                                />
                            </section>
                        </main>
                    </div>
                </transition>
            </div>
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
                    <span v-if="getWorksheets.length > 1">Créer les prescriptions</span>
                    <span v-else>Créer la prescription</span>
                </vs-button>
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
            currentOpenWorksheet: null,
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
            let check = false;

            if (!worksheet.partOfBody) {
                worksheet.partOfBodyIsEmptyMessage =
                    "Vous devez choisir une partie du corps";
                check = true;
                f.openErrorNotification(
                    "Erreur",
                    worksheet.partOfBodyIsEmptyMessage + " pour la fiche."
                );
            }

            if (worksheet.title === "" || worksheet.title === null) {
                worksheet.titleIsEmptyMessage =
                    "Vous devez entrer un titre pour la fiche.";
                check = true;
                f.openErrorNotification("Erreur", worksheet.titleIsEmptyMessage);
            }

            if (!worksheet.exercises.length) {
                check = true;
                f.openErrorNotification(
                    "Erreur",
                    "La fiche ne peut pas être vide, vous devez ajouter des vidéos."
                );
            }

            return check;
        },
        validEdit() {
            this.btnLoadingValidEditWorksheet = true;

            const 
                worksheet = this.worksheets[0],
                isNotEmpty = !this.checkIfEmpty(worksheet)
            ;

            if (isNotEmpty) {
                const worksheetCopy = JSON.parse(JSON.stringify(worksheet));

                worksheetCopy.exercises = worksheetCopy.exercises.map(exercise => {
                    const id = String(exercise.id);
                    if (id.startsWith('new')) {
                        return { ...exercise, id: null };
                    }
                    return exercise;
                });

                this.axios
                    .post(`/doctor/${this.doctor.id}/edit/worksheet`, {
                        _token: this.csrfTokenEditWorksheet,
                        worksheetId: worksheetCopy.id,
                        title: worksheetCopy.title,
                        partOfBodyId: worksheetCopy.partOfBody.id,
                        duration: worksheetCopy.duration,
                        perWeek: worksheetCopy.perWeek,
                        perDay: worksheetCopy.perDay,
                        exercises: worksheetCopy.exercises,
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
        validCreate() {
            this.btnLoadingValidCreateWorksheet = true;

            let allNotEmpty = true;
            this.worksheets.forEach(worksheet => {
                if (this.checkIfEmpty(worksheet)) {
                    allNotEmpty = false;
                }
            }); 

            if (allNotEmpty) {
                const worksheetsCopy = JSON.parse(JSON.stringify(this.worksheets));

                worksheetsCopy.forEach(worksheet => {
                    const worksheetId = String(worksheet.id);
                    if (worksheetId.startsWith('new')) {
                        worksheet.id = null;
                    }

                    worksheet.exercises = worksheet.exercises.map(exercise => {
                        const exerciseId = String(exercise.id);
                        if (exerciseId.startsWith('new')) {
                            return { ...exercise, id: null };
                        }
                        return exercise;
                    });

                }); 

                this.axios
                    .post(`/doctor/${this.doctor.id}/create/worksheets`, {
                        _token: this.csrfTokenCreateWorksheet,
                        patientId: this.patient ? this.patient.id : null,
                        worksheets: worksheetsCopy,
                    })
                    .then((response) => {
                        if (this.patient) {
                            f.openSuccessNotification(
                                "Création de la prescription",
                                // `La fiche <strong> ${
                                //     this.worksheet.title
                                // }</strong> 
                                // a été prescrite à <strong>
                                // ${this.getUserName(this.patient)}</strong>`
                                response.data
                            );
                            this.btnLoadingValidCreateWorksheet = false;
                            setTimeout(() => {
                                document.location.href = `/doctor/${this.doctor.id}/dashboard`;
                            }, 2000);
                        } else {
                            f.openSuccessNotification(
                                "Création de la fiche",
                                response.data
                            );
                            this.btnLoadingValidCreateWorksheet = false;
                            setTimeout(() => {
                                document.location.href = `/doctor/${this.doctor.id}/dashboard/?tab=ws`;
                            }, 2000);
                        }
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
        {
            this.currentOpenWorksheet = this.worksheetsIds;
            this.worksheetsIds = [this.worksheetsIds];
        }
            
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
                    this.worksheets = Array.from({ length: worksheetsCreationCount }, (_, index) => {
                        const newWorksheet = { ...JSON.parse(JSON.stringify(this.worksheets[0])) };
                        newWorksheet.id = `new${index}`;
                        return newWorksheet;
                    });

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
                                    isActive: false
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

    .tab-worksheet-header
    {
        padding: 1rem;
        background-color: #e7dfcd;
        cursor: pointer;
        color: #afa17e;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        transition: 0.25s;
        border-top: 1px solid #ffffff;

        &.active
        {
            background-color: #fff;
            color: #afa17e;
            font-weight: bold;

            svg {
                fill: #e7dfcd;
            }
        }

        svg {
            width: 2rem;
            height: 2rem;
            fill: #fff;
            margin-right: 0.5rem;
        }

        .worksheet-title-zone
        {
            display: inline-flex;
            flex-grow: 1;
        }

        .worksheet-title
        {
            flex-grow: 1;
            white-space: nowrap;
            max-width: 65vw;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 0.3rem;

            @media (min-width: 310px) {
                max-width: 70vw;
            }

            @media (min-width: 350px) {
                max-width: 72vw;
            }

            @media (min-width: 440px) {
                max-width: 78vw;
            }

            @media (min-width: 600px) {
                max-width: 79vw;
            }

            @media (min-width: 690px) {
                max-width: 85vw;
            }

        }
    }

    .tab-worksheet-content
    {
        header
        {
            padding: 1.5rem;
            padding-top: 2rem;
        }

        main
        {
            #exercises-playlist
            {
                .exercises-list-container
                {
                    > *:not(.exercises-list)
                    {
                        padding: 0 1.5rem;
                        font-size: 1.5rem;
                        color: #c1b79d;
                        font-weight: normal;
                        margin-bottom: 0.7rem;
                    }
                }
            }
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
            padding: 0.7rem 0.7rem;
            // padding-top: 1.1rem;
            box-shadow: 0px 0.4rem 0.7rem rgba(148, 96, 77, 0.04);
            border-radius: 2.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            margin-left: 3.4rem;
            margin-top: 2.5rem;
            margin-right: 3.4rem;
            min-width: 18.3rem;
            position: relative;

            .label {
                position: absolute;
                top: -1.2rem;
                left: 4.7rem;
                padding: 0.4rem;
                padding-right: 0.8rem;
                border-radius: 1.1rem;
                background: #f6f5f2;
                color: #afa17e;
                text-transform: uppercase;
                font-size: 0.87rem;
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
                margin-top: 0.5rem;
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

            > div:first-child
            {
                width: 100%;
                display: flex;
            }

            .vs-input-parent {
                width: 100%;

                .vs-input-content {
                    .vs-input {
                        background: $white;
                        padding: 1.2rem 1.7rem;
                        padding-bottom: 1.05rem;

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
                margin-bottom: 1.7rem;
                position: relative;
                top: 0.3rem;
                width: 100%;
                max-width: initial;

                @media (min-width: 768px) {
                    margin-bottom: 3.7rem;
                }

                .vs-input-content {
                    .vs-input {
                        font-size: 1.6rem;
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
                    flex-direction: row;
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

                        @media (min-width: 768px) {
                            &:not(:last-child) {
                                margin-right: 2rem;
                            }
                            margin-bottom: 0;
                        }

                        i {
                            color: $orange;
                            font-size: 1.7rem;
                            margin-right: 0.7rem;

                            @media (min-width: 768px) {
                                margin-right: 0.7rem;
                            }
                        }

                        .vs-input-parent
                        {
                            .vs-input-content
                            {
                                .vs-input__label--hidden.vs-input__label--placeholder 
                                {
                                    font-size: 1.2rem;
                                    top: -0.65rem;
                                    left: 0.6rem;
                                }
                            }
                        }

                        &.worksheet-timing-perweek,
                        &.worksheet-timing-perday
                        {
                            .vs-input-parent
                            {
                                margin-right: 1.2rem;
                            }
                        }
                    }
                } 
            }

            .select-filter
            {
                
                > div:first-child
                {
                    transition: 0.25s;
                    width: 12.6625rem;
                    margin-left: 1rem;
                    position: relative;
                }

                input 
                {
                    border: none;
                }

                .loading-pob
                {
                    border-radius: 50%;
                    height: 5rem;
                    top: -0.1rem!important;
                }

                .part-of-body 
                {
                    margin-top: 0;
                    background: #fff;
                    box-shadow: 0rem 0.4rem 1.4rem 0rem #e7dfcdd1;
                    border: none;

                    .text 
                    {
                        font-size: 1.4rem;
                    }
                }

                #partofbody-choice-select
                {
                    position: relative;
                    top: 0.08rem;
                    min-height: 3.9rem;
                    padding: 1.04rem 1.7rem;
                    box-shadow: 0rem 0.4rem 1.4rem 0rem #e7dfcdd1;
                }

                .arrow-toggle-box
                {
                    top: 0.2rem;
                    right: -0.2rem;
                    width: 3.2rem;
                    height: 3.7rem;

                    i.vs-icon-arrow
                    {
                        width: 0.8rem;
                        height: 0.8rem;
                        margin-right: 0.2rem;
                    }
                }

                .select-box 
                {
                    top: 3.9rem;
                } 

                &:not(.active)
                {
                    transition: 0.25s;

                    > div:first-child
                    {
                        transition: 0.25s;
                        width: 5rem;
                        position: relative;
                    }

                    &:not(.partofbodyselected)
                    {
                        > div:first-child
                        {
                            transition: 0.25s;
                            width: 5rem;
                            position: relative;

                            &::after
                            {
                                // content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='40px' height='40px'%3E%3Cpath fill='%23ffb74d' d='M31,46c-0.611-0.306-1.316-0.517-2-0.664V36h-4v3.02c0,0.27,0.01,0.55,0.02,0.83	c0.05,0.71,0.18,1.12,0.37,2.09l0.07,0.35L26,45c0,0-1,1-1,2s0.448,1,1,1h7C33,46.343,33,47,31,46z'/%3E%3Cpath fill='%23ffb74d' d='M19,45.336c-0.684,0.147-1.389,0.359-2,0.664c-2,1-2,0.343-2,2h7c0.552,0,1,0,1-1s-1-2-1-2l0.54-2.71	l0.07-0.35c0.02-0.1,0.04-0.19,0.06-0.27c0.17-0.8,0.27-1.21,0.31-1.87C23,39.54,23,39.28,23,39.02V36h-4V45.336z'/%3E%3Cpath fill='%23ff9800' d='M23,36v3.02c0,0.26,0,0.52-0.02,0.78c-0.04,0.66-0.14,1.07-0.31,1.87c-0.02,0.08-0.04,0.17-0.06,0.27	l-0.07,0.35C22,40,22,39,21,39c-1.1,0-1.78,0.08-2-1v-2H23z'/%3E%3Cpath fill='%23ff9800' d='M29,36v2c-0.22,1.08-0.9,1-2,1c-1,0-1,1-1.54,3.29l-0.07-0.35c-0.19-0.97-0.32-1.38-0.37-2.09	C25.01,39.57,25,39.29,25,39.02V36H29z'/%3E%3Cpath fill='%23ffb74d' d='M37.504,26.687l-1.647-1.306c-0.052-0.041-0.112-0.065-0.175-0.08l-1.74-5.221l-1.238-4.949	C32.961,14.587,33,13.834,33,13c0-1.8-1.25-3-2.5-3c-0.167,0-0.334,0.023-0.5,0.047V10l-4-1h-4l-4,1v0.047	C17.834,10.023,17.667,10,17.5,10c-1.25,0-2.5,1.2-2.5,3c0,0.834,0.039,1.587,0.296,2.131l-1.238,4.949l-1.74,5.221	c-0.063,0.014-0.124,0.039-0.175,0.08l-1.647,1.306c-0.203,0.161-0.242,0.473-0.087,0.697c0.11,0.159,0.288,0.23,0.456,0.2	c0.068-0.012,0.135-0.041,0.194-0.088l0.55-0.436c-0.838,2.579-0.631,3.072,0.232,3.398c0.879,0.332,2.168,1.649,3.294-2.612	c0.172-0.654,0.178-1.232,0.068-1.713l1.719-5.159c0.012-0.036,0.023-0.073,0.032-0.11l1.247-4.986l0.668,2.902l0.01,0.05l0.29,1.05	l0.35,1.32c0.31,1.17,0.28,2.41-0.11,3.57c-0.27,0.82-0.46,1.66-0.57,2.52l-0.31,2.55C18.18,31.93,18.59,33.92,19,36	c0.03,0.13,0.05,0.27,0.08,0.4C19.26,37.29,20,38,20.9,38c1.19,0,1.99-0.81,2.1-2l1-10l1,10c0.11,1.19,0.91,2,2.1,2	c0.9,0,1.64-0.71,1.82-1.6c0.03-0.13,0.05-0.27,0.08-0.4c0.41-2.08,0.82-4.07,0.47-6.16l-0.31-2.55c-0.11-0.86-0.3-1.7-0.57-2.52	l-0.02-0.06c-0.37-1.12-0.42-2.32-0.13-3.46l0.37-1.45c0-0.01,0-0.01,0-0.01L29,19.02l0.06-0.25l0.73-2.928l1.255,5.021	c0.009,0.037,0.02,0.074,0.032,0.11l1.719,5.159c-0.11,0.481-0.104,1.059,0.068,1.713c1.126,4.261,2.415,2.944,3.294,2.612	c0.863-0.326,1.07-0.819,0.232-3.398l0.55,0.436c0.059,0.047,0.126,0.076,0.194,0.088c0.168,0.03,0.346-0.041,0.456-0.2	C37.746,27.16,37.707,26.848,37.504,26.687z'/%3E%3Cpath fill='%23ff9800' d='M22,5h4v4c0,1.105-0.895,2-2,2l0,0c-1.105,0-2-0.895-2-2V5z'/%3E%3Cpath fill='%23ffb74d' d='M21,4c0-3,1-4,3-4s3,1,3,4c0,1.5-1,5-3,5S21,5.5,21,4z'/%3E%3Cpath fill='%23ff9800' d='M23,17l-1.09,0.27c-0.94,0.24-2.22,0.81-3.03,1.56l-0.01-0.05l-0.73-3.17L18,15l1.41,1.41	C19.79,16.79,20.3,17,20.83,17H23z'/%3E%3Cpath fill='%23ff9800' d='M30,15l-0.17,0.68l-0.77,3.09L29,19.02c-0.91-0.7-2.34-1.61-2.91-1.75L25,17h2.17	c0.53,0,1.04-0.21,1.42-0.59L30,15z'/%3E%3C/svg%3E");
                                content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='36px' height='36px'%3E%3Cpath fill='%23e7dfcd' d='M31,46c-0.611-0.306-1.316-0.517-2-0.664V36h-4v3.02c0,0.27,0.01,0.55,0.02,0.83	c0.05,0.71,0.18,1.12,0.37,2.09l0.07,0.35L26,45c0,0-1,1-1,2s0.448,1,1,1h7C33,46.343,33,47,31,46z'/%3E%3Cpath fill='%23e7dfcd' d='M19,45.336c-0.684,0.147-1.389,0.359-2,0.664c-2,1-2,0.343-2,2h7c0.552,0,1,0,1-1s-1-2-1-2l0.54-2.71	l0.07-0.35c0.02-0.1,0.04-0.19,0.06-0.27c0.17-0.8,0.27-1.21,0.31-1.87C23,39.54,23,39.28,23,39.02V36h-4V45.336z'/%3E%3Cpath fill='%23d8cbb2' d='M23,36v3.02c0,0.26,0,0.52-0.02,0.78c-0.04,0.66-0.14,1.07-0.31,1.87c-0.02,0.08-0.04,0.17-0.06,0.27	l-0.07,0.35C22,40,22,39,21,39c-1.1,0-1.78,0.08-2-1v-2H23z'/%3E%3Cpath fill='%23d8cbb2' d='M29,36v2c-0.22,1.08-0.9,1-2,1c-1,0-1,1-1.54,3.29l-0.07-0.35c-0.19-0.97-0.32-1.38-0.37-2.09	C25.01,39.57,25,39.29,25,39.02V36H29z'/%3E%3Cpath fill='%23e7dfcd' d='M37.504,26.687l-1.647-1.306c-0.052-0.041-0.112-0.065-0.175-0.08l-1.74-5.221l-1.238-4.949	C32.961,14.587,33,13.834,33,13c0-1.8-1.25-3-2.5-3c-0.167,0-0.334,0.023-0.5,0.047V10l-4-1h-4l-4,1v0.047	C17.834,10.023,17.667,10,17.5,10c-1.25,0-2.5,1.2-2.5,3c0,0.834,0.039,1.587,0.296,2.131l-1.238,4.949l-1.74,5.221	c-0.063,0.014-0.124,0.039-0.175,0.08l-1.647,1.306c-0.203,0.161-0.242,0.473-0.087,0.697c0.11,0.159,0.288,0.23,0.456,0.2	c0.068-0.012,0.135-0.041,0.194-0.088l0.55-0.436c-0.838,2.579-0.631,3.072,0.232,3.398c0.879,0.332,2.168,1.649,3.294-2.612	c0.172-0.654,0.178-1.232,0.068-1.713l1.719-5.159c0.012-0.036,0.023-0.073,0.032-0.11l1.247-4.986l0.668,2.902l0.01,0.05l0.29,1.05	l0.35,1.32c0.31,1.17,0.28,2.41-0.11,3.57c-0.27,0.82-0.46,1.66-0.57,2.52l-0.31,2.55C18.18,31.93,18.59,33.92,19,36	c0.03,0.13,0.05,0.27,0.08,0.4C19.26,37.29,20,38,20.9,38c1.19,0,1.99-0.81,2.1-2l1-10l1,10c0.11,1.19,0.91,2,2.1,2	c0.9,0,1.64-0.71,1.82-1.6c0.03-0.13,0.05-0.27,0.08-0.4c0.41-2.08,0.82-4.07,0.47-6.16l-0.31-2.55c-0.11-0.86-0.3-1.7-0.57-2.52	l-0.02-0.06c-0.37-1.12-0.42-2.32-0.13-3.46l0.37-1.45c0-0.01,0-0.01,0-0.01L29,19.02l0.06-0.25l0.73-2.928l1.255,5.021	c0.009,0.037,0.02,0.074,0.032,0.11l1.719,5.159c-0.11,0.481-0.104,1.059,0.068,1.713c1.126,4.261,2.415,2.944,3.294,2.612	c0.863-0.326,1.07-0.819,0.232-3.398l0.55,0.436c0.059,0.047,0.126,0.076,0.194,0.088c0.168,0.03,0.346-0.041,0.456-0.2	C37.746,27.16,37.707,26.848,37.504,26.687z'/%3E%3Cpath fill='%23d8cbb2' d='M22,5h4v4c0,1.105-0.895,2-2,2l0,0c-1.105,0-2-0.895-2-2V5z'/%3E%3Cpath fill='%23e7dfcd' d='M21,4c0-3,1-4,3-4s3,1,3,4c0,1.5-1,5-3,5S21,5.5,21,4z'/%3E%3Cpath fill='%23d8cbb2' d='M23,17l-1.09,0.27c-0.94,0.24-2.22,0.81-3.03,1.56l-0.01-0.05l-0.73-3.17L18,15l1.41,1.41	C19.79,16.79,20.3,17,20.83,17H23z'/%3E%3Cpath fill='%23d8cbb2' d='M30,15l-0.17,0.68l-0.77,3.09L29,19.02c-0.91-0.7-2.34-1.61-2.91-1.75L25,17h2.17	c0.53,0,1.04-0.21,1.42-0.59L30,15z'/%3E%3C/svg%3E");
                                position: absolute;
                                top: 0.65rem;
                                left: 0.8rem;
                                pointer-events: none;
                                user-select: none;
                            }
                        }                        
                    }

                    #partofbody-choice-select,
                    .partofbody-selected
                    {
                        transition: 0.25s;
                        padding: 1rem!important;
                        width: 5rem;
                        height: 4.9rem;
                        border-radius: 50%;
                        min-height: initial;
                        position: relative;
                        top: -0.05rem;

                        &::placeholder
                        {
                            transition: 0.25s;
                            color: #fff;
                            opacity: 0;
                        }

                        .text
                        {
                            display: none;
                        }

                        img {
                            margin-right: 0;

                            &.icon-pied {
                                top: -0.1rem;
                                height: 2.4rem;
                            }

                            &.icon-jambe {
                                top: 0rem;
                                height: 2.75rem;
                            }

                            &.icon-bras {
                                top: -0.1rem;
                                height: 2.6rem;
                            }

                            &.icon-main {
                                top: -0.1rem;
                                height: 2.6rem;
                            }

                            &.icon-epaule {
                                top: -0.1rem;
                                height: 2.6rem;
                            }

                            &.icon-dos {
                                top: -0.1rem;
                                height: 2.6rem;
                            }

                            &.icon-cervicales {
                                top: -0.1rem;
                                height: 2.6rem;
                            }

                            &.icon-lombaires {
                                top: 0rem;
                                height: 2.7rem;
                            }

                            &.icon-thoracique {
                                top: -0.1rem;
                                height: 2.6rem;
                            }
                        }

                    }

                    .part-of-body 
                    {
                        transition: 0.25s;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .arrow-toggle-box
                    {
                        transition: 0.25s;
                        opacity: 0;
                    }
                }


            }
        }
    }
    main {
        display: flex;

        #exercises-playlist {
            width: 100%;

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
