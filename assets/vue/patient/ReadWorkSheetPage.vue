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
                <div class="title">
                    <i
                        class="kiv-arrow-left icon-31"
                        @click="rederictToDashboard()"
                    ></i>
                    <h1>{{ getWorksheet.title }}</h1>
                </div>
                <TagPartOfBody
                    v-if="getWorksheet.partOfBody"
                    :class="{ completed: allExercisesIsCompleted }"
                    :partOfBody="getWorksheet.partOfBody"
                />
            </div>
        </header>
        <div class="info">
            <transition name="fade">
                <div v-if="!loading && allExercisesIsCompleted">
                    <i class="kiv-confettis">
                        <img
                            src="../../img/icons/colored/confettis.svg"
                            alt="Icone de confettis"
                        />
                    </i>
                    <p>
                        Félicitations, vous avez fait tous les exercices de la
                        fiche.
                        <span v-if="currentWorksheetSession"
                            >Vous pouvez laisser un commentaire à votre
                            praticien !</span
                        >
                    </p>
                </div>
                <div v-if="!loading && !allExercisesIsCompleted">
                    <i class="kiv-info icon-17"></i>
                    <p>
                        À la fin de vos exercices, vous aurez la possiblité
                        d’écrire un bref commentaire.
                    </p>
                </div>
                <div v-if="loading" class="loading-block">
                    <i class="kiv-info icon-17"></i>
                    <div class="loading-gray w-55 p"></div>
                </div>
            </transition>
        </div>
        <div class="btn-timing-frieze-mobile">
            <vs-button
                class="secondary w-100"
                @click="modalTimingFriezeMobile = !modalTimingFriezeMobile"
            >
                Frise chronologique
            </vs-button>
        </div>
        <main>
            <vs-dialog class="modal-mobile" v-model="modalTimingFriezeMobile">
                <TimingFrieze
                    :loading="loading"
                    :worksheet="getWorksheet"
                    :exercises="getExercises"
                    :currentWorksheetSession="getCurrentWorksheetSession"
                    :totalWorksheetSessions="getTotalWorksheetSessions"
                />
            </vs-dialog>
            <section id="timing-frieze">
                <TimingFrieze
                    :loading="loading"
                    :worksheet="getWorksheet"
                    :exercises="getExercises"
                    :currentWorksheetSession="getCurrentWorksheetSession"
                    :totalWorksheetSessions="getTotalWorksheetSessions"
                />
            </section>
            <section id="exercises-playlist">
                <ExercisesPlaylist
                    :patient="patient"
                    :loading="loading"
                    :doctorView="doctorView"
                    :worksheet="getWorksheet"
                    :exercises="getExercises"
                    :currentWorksheetSession="getCurrentWorksheetSession"
                    :csrfTokenStartWorksheetSession="
                        csrfTokenStartWorksheetSession
                    "
                    :csrfTokenCompleteWorksheetSession="
                        csrfTokenCompleteWorksheetSession
                    "
                    :csrfTokenCompleteExercise="csrfTokenCompleteExercise"
                    :csrfTokenCreateSessionStat="csrfTokenCreateSessionStat"
                    :csrfTokenCreateCommentary="csrfTokenCreateCommentary"
                    @stripeCheckout="stripeCheckout"
                />
            </section>
        </main>
    </div>
</template>

<script>
import Vue from "vue";
import f from "../services/function";
import TimingFrieze from "./ReadWorkSheetPage/TimingFrieze.vue";
import ExercisesPlaylist from "./ReadWorkSheetPage/ExercisesPlaylist.vue";
import TagPartOfBody from "../components/TagPartOfBody.vue";

export default {
    components: {
        ExercisesPlaylist,
        TimingFrieze,
        TagPartOfBody,
    },
    data() {
        return {
            patient: null,
            doctor: null,
            worksheetId: null,
            worksheet: {},
            exercises: [],
            currentWorksheetSession: {},
            totalWorksheetSessions: null,
            doctorView: null,
            csrfTokenStartWorksheetSession: null,
            csrfTokenCompleteWorksheetSession: null,
            csrfTokenCompleteExercise: null,
            csrfTokenCreateSessionStat: null,
            csrfTokenCreateCommentary: null,
            modalTimingFriezeMobile: false,
            loading: false,
            stripeSubPlans: null,
            status: null,
            stripeSubscription: null,
        };
    },
    computed: {
        getWorksheet() {
            return this.worksheet;
        },
        getExercises() {
            return this.exercises;
        },
        getCurrentWorksheetSession() {
            return this.currentWorksheetSession;
        },
        getTotalWorksheetSessions() {
            return this.totalWorksheetSessions;
        },
        allExercisesIsCompleted() {
            if (this.getExercises) {
                return !this.getExercises.filter((e) => !e.isCompleted).length;
            }
        },
    },
    methods: {
        getCurrentCommentary(exerciseCommentaries) {
            let commentary = {
                content: "",
                id: null,
            };

            if (
                exerciseCommentaries.length &&
                this.getCurrentWorksheetSession
            ) {
                commentary = exerciseCommentaries.find(
                    (c) =>
                        c.worksheetSession.id ===
                        this.getCurrentWorksheetSession.id
                );
            }

            if (
                exerciseCommentaries.length &&
                !this.getCurrentWorksheetSession
            ) {
                commentary =
                    exerciseCommentaries[exerciseCommentaries.length - 1];
            }

            return commentary;
        },
        rederictToDashboard() {
            if (this.doctorView && this.doctor) {
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                const referer = urlParams.get("ref");
                if (referer === "dashp") {
                    document.location.href = `/doctor/${this.doctor.id}/voir/patient/${this.patient.id}`;
                } else {
                    document.location.href = `/doctor/${this.doctor.id}/dashboard`;
                }
            } else {
                document.location.href = `/patient/${this.patient.id}/dashboard`;
            }
        },
        stripeCheckout(indice) {
            this.axios
                .post(`/subscription/checkout`, {
                    stripeSubPlanId: this.stripeSubPlans[indice].planId,
                    stripeCustomerId: this.stripeSubscription
                        ? this.stripeSubscription.customer
                        : null,
                    successUrl: `patient/${this.patient.id}/fiche/${this.getWorksheet.id}/success`,
                    cancelUrl: `patient/${this.patient.id}/fiche/${this.getWorksheet.id}/cancel`,
                    userId: `${this.patient.id}`,
                })
                .then((response) => {
                    window.location.href = response.data;
                })
                .catch((error) => {
                    console.log(error);

                    f.openErrorNotification(
                        "Erreur",
                        "Erreur lors du processus d'abonnement"
                    );
                });
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.doctor = data.doctor;
        this.worksheetId = data.worksheetId;
        this.doctorView = data.doctorView;
        this.csrfTokenStartWorksheetSession =
            data.csrfTokenStartWorksheetSession;
        this.csrfTokenCompleteWorksheetSession =
            data.csrfTokenCompleteWorksheetSession;
        this.csrfTokenCompleteExercise = data.csrfTokenCompleteExercise;
        this.csrfTokenCreateSessionStat = data.csrfTokenCreateSessionStat;
        this.csrfTokenCreateCommentary = data.csrfTokenCreateCommentary;

        this.stripeSubPlans = data.stripeSubPlans;
        this.stripeSubscription = data.stripeSubscription;
        this.status = data.status;

        if ("cancel" === this.status) {
            f.openPrimaryNotification(
                "Paiement annulé",
                "Le paiement a été annulé"
            );
        }

        if ("success" === this.status) {
            f.openSuccessNotification(
                "Paiement accepté",
                "Vous pouvez profiter de votre abonnement"
            );
        }

        this.loading = true;

        const currentWorksheetParam = this.doctorView ? "/doctorview" : "";

        this.axios
            .get(
                `/patient/${this.patient.id}/get/worksheet/${this.worksheetId}`
            )
            .then((response) => {
                this.worksheet = response.data;

                this.axios
                    .get(
                        `/patient/${this.patient.id}/get/current-worksheet-session/${this.worksheetId}${currentWorksheetParam}`
                    )
                    .then((response) => {
                        this.currentWorksheetSession =
                            response.data.currentWorksheetSession;

                        this.axios
                            .get(
                                `/patient/${this.patient.id}/get/exercises/${this.worksheetId}`
                            )
                            .then((response) => {
                                this.exercises = response.data;

                                this.exercises = f.sortByPosition(
                                    this.exercises.map((exercise) => {
                                        return {
                                            ...exercise,
                                            commentaries: f.sortByCreatedAtDesc(
                                                exercise.commentaries
                                            ),
                                            commentary:
                                                this.getCurrentCommentary(
                                                    exercise.commentaries
                                                ),
                                        };
                                    })
                                );

                                this.axios
                                    .get(
                                        `/patient/${this.patient.id}/get/total-worksheet-sessions/${this.worksheetId}`
                                    )
                                    .then((response) => {
                                        this.totalWorksheetSessions =
                                            response.data;

                                        if (
                                            this.currentWorksheetSession &&
                                            !this.currentWorksheetSession
                                                .isInProgress &&
                                            !this.currentWorksheetSession
                                                .isCompleted &&
                                            !this.doctorView
                                        ) {
                                            this.axios
                                                .post(
                                                    `/patient/${this.patient.id}/start/worksheet-session`,
                                                    {
                                                        _token: this
                                                            .csrfTokenStartWorksheetSession,
                                                        worksheetId:
                                                            this.getWorksheet
                                                                .id,
                                                        worksheetSessionId:
                                                            this
                                                                .getCurrentWorksheetSession
                                                                .id,
                                                    }
                                                )
                                                .then((response) => {
                                                    // console.log(response.data);

                                                    this.getCurrentWorksheetSession.isInProgress = true;

                                                    this.exercises.forEach(
                                                        (exercise) => {
                                                            exercise.isCompleted = false;
                                                        }
                                                    );

                                                    this.loading = false;
                                                })
                                                .catch((error) => {
                                                    const errorMess =
                                                        "object" ===
                                                        typeof error.response
                                                            .data
                                                            ? error.response
                                                                  .data.detail
                                                            : error.response
                                                                  .data;

                                                    console.error(errorMess);
                                                });
                                        } else {
                                            this.loading = false;
                                        }
                                    })
                                    .catch((error) => {
                                        const errorMess =
                                            "object" ===
                                            typeof error.response.data
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
    },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

#worksheet {
    .btn-timing-frieze-mobile {
        width: 100%;
        margin-bottom: 2.5rem;
        display: block;

        @media (min-width: 768px) {
            display: none;
        }
    }

    main {
        #timing-frieze {
            width: 100%;
            background: white;
            margin-right: 2.3rem;
            border-radius: 0.8rem;
            display: none;
            max-width: initial;

            @media (min-width: 768px) {
                display: block;
                width: 50%;
                max-width: 26rem;
                min-height: 45rem;
            }

            @media (min-width: 1300px) {
                max-width: 31rem;
            }
        }
    }
}
</style>
