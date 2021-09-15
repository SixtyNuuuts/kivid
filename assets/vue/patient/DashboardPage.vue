<template>
    <div class="container">
        <DoctorChoice
            v-if="!patient.doctor"
            :patient="patient"
            :csrfTokenSelectDoctor="csrfTokenSelectDoctor"
        />
        <section v-else id="dashboard">
            <h1>
                Bienvenue sur votre dashabord !
                <i>
                    <img
                        src="../../img/icons/colored/hand.svg"
                        alt="Icone d'une main qui fait 'coucou'"
                    />
                </i>
            </h1>
            <main>
                <MyScores
                    :patient="patient"
                    :patientWorksheets="patientWorksheets"
                    :loadingPatientWorksheets="loadingPatientWorksheets"
                />
                <MyWorksheets
                    :patient="patient"
                    :patientWorksheets="patientWorksheets"
                    :loadingPatientWorksheets="loadingPatientWorksheets"
                />
                <aside>
                    <MyDashboardNotifications
                        v-if="!doctorView"
                        :patient="patient"
                        :csrfTokenAcceptDoctor="csrfTokenAcceptDoctor"
                        :csrfTokenDeclineDoctor="csrfTokenDeclineDoctor"
                    />
                    <section
                        id="my-doctor"
                        class="kiv-block"
                        :class="{ reduced: !myDoctorContent }"
                    >
                        <div
                            class="toggle-content"
                            @click="myDoctorContent = !myDoctorContent"
                        >
                            <i class="kiv-chevron-down icon-3"></i>
                        </div>
                        <h2>Mon praticien</h2>
                        <transition name="height2">
                            <div v-if="myDoctorContent" class="doctor-details">
                                <div class="doctor-avatar">
                                    <div
                                        v-if="loadingDoctor"
                                        class="loading avatar"
                                    ></div>
                                    <vs-avatar
                                        v-if="
                                            patient.addRequestDoctor &&
                                            !loadingDoctor
                                        "
                                        class="avatar"
                                        circle
                                        size="116"
                                    >
                                        <img
                                            :src="
                                                patient.doctor.avatarUrl
                                                    ? patient.doctor.avatarUrl
                                                    : '../../img/avatar-default.svg'
                                            "
                                            :alt="`Avatar de ${patient.doctor.firstname} ${patient.doctor.lastname}`"
                                        />
                                    </vs-avatar>
                                    <vs-avatar
                                        v-if="
                                            false ===
                                                patient.addRequestDoctor &&
                                            !loadingDoctor
                                        "
                                        class="avatar waiting"
                                        circle
                                        size="116"
                                    >
                                        <img
                                            src="../../img/icons/smiley/60.svg"
                                            alt="Smiley Monocle"
                                        />
                                    </vs-avatar>
                                </div>
                                <div class="doctor-infos">
                                    <div v-if="loadingDoctor">
                                        <p class="loading name w-55"></p>
                                        <p class="loading city w-45"></p>
                                    </div>
                                    <div
                                        v-if="
                                            patient.addRequestDoctor &&
                                            !loadingDoctor
                                        "
                                    >
                                        <p class="name">
                                            {{
                                                patient.doctor.gender
                                                    ? getCivility(
                                                          patient.doctor.gender
                                                      )
                                                    : ""
                                            }}
                                            {{ patient.doctor.lastname }}
                                            {{ patient.doctor.firstname }}
                                        </p>
                                        <p class="city">
                                            {{ patient.doctor.city }}
                                        </p>
                                    </div>
                                    <div
                                        v-if="
                                            false ===
                                                patient.addRequestDoctor &&
                                            !loadingDoctor
                                        "
                                    >
                                        <p>En attente de validation</p>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </section>
                </aside>
                <MyExerciseStats
                    :patient="patient"
                    :patientWorksheets="patientWorksheets"
                    :loadingPatientWorksheets="loadingPatientWorksheets"
                />
            </main>
        </section>
    </div>
</template>

<script>
import Vue from "vue";
import moment from "moment";
import f from "../services/function";
import DoctorChoice from "./DashboardPage/DoctorChoice.vue";
import MyScores from "./DashboardPage/MyScores.vue";
import MyDashboardNotifications from "./DashboardPage/MyDashboardNotifications.vue";
import MyWorksheets from "./DashboardPage/MyWorksheets.vue";
import MyExerciseStats from "./DashboardPage/MyExerciseStats.vue";

export default {
    components: {
        DoctorChoice,
        MyScores,
        MyDashboardNotifications,
        MyWorksheets,
        MyExerciseStats,
    },
    data() {
        return {
            patient: null,
            doctorView: null,
            csrfTokenSelectDoctor: null,
            csrfTokenAcceptDoctor: null,
            csrfTokenDeclineDoctor: null,
            notificationsContent: true,
            myScoresContent: true,
            myDoctorContent: true,
            myWorksheetsContent: true,
            loadingDoctor: false,
            loadingPatientWorksheets: false,
            patientWorksheets: [],
        };
    },
    methods: {
        getTimeLeftBeforeNextSession(endDateCurrentSession) {
            const timeLeft = f.getTimeLeftBeforeNextSession(
                endDateCurrentSession
            );

            if (timeLeft.days >= 1) {
                return Math.round(timeLeft.days) === 1
                    ? `${Math.round(timeLeft.days)} jour`
                    : `${Math.round(timeLeft.days)} jours`;
            }

            if (timeLeft.hours >= 1) {
                return timeLeft.hours === 1
                    ? `${Math.round(timeLeft.hours)} heure`
                    : `${Math.round(timeLeft.hours)} heures`;
            }

            if (timeLeft.minutes >= 1) {
                return timeLeft.minutes === 1
                    ? `${Math.round(timeLeft.minutes)} minute`
                    : `${Math.round(timeLeft.minutes)} minutes`;
            }

            if (timeLeft.seconds >= 1) {
                return timeLeft.seconds === 1
                    ? `${Math.round(timeLeft.seconds)} seconde`
                    : `${Math.round(timeLeft.seconds)} secondes`;
            }

            return null;
        },
        calculWorksheetProgression(worksheet) {
            let progression = 0;

            if (worksheet.exercises.length) {
                const exercisePercentPart = 100 / worksheet.exercises.length;

                const exercisesCompletedCount = worksheet.exercises.filter(
                    (e) => e.isCompleted
                ).length;

                progression = exercisePercentPart * exercisesCompletedCount;
            }

            return progression;
        },
        getCivility(gender) {
            return f.getCivility(gender);
        },
        onResize() {
            if (window.innerWidth > 576) {
                this.myScoresContent = true;
                this.notificationsContent = true;
                this.myDoctorContent = true;
                this.myWorksheetsContent = true;
            }
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");
        window.addEventListener("resize", this.onResize);

        moment.locale("fr-FR");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.doctorView = data.doctorView;
        this.csrfTokenAcceptDoctor = data.csrfTokenAcceptDoctor;
        this.csrfTokenDeclineDoctor = data.csrfTokenDeclineDoctor;
        this.csrfTokenSelectDoctor = data.csrfTokenSelectDoctor;

        this.loadingPatientWorksheets = true;

        this.axios
            .get(`/patient/${this.patient.id}/get/worksheets`)
            .then((response) => {
                this.patientWorksheets = response.data.map((worksheet) => {
                    return {
                        ...worksheet,
                        worksheetProgression:
                            this.calculWorksheetProgression(worksheet),
                        timeLeftBeforeNextSession: null,
                        currentWorksheetSession: {},
                    };
                });

                this.patientWorksheets.forEach((worksheet) => {
                    this.axios
                        .get(
                            `/patient/${this.patient.id}/get/current-worksheet-session/${worksheet.id}`
                        )
                        .then((response) => {
                            worksheet.currentWorksheetSession = response.data;

                            worksheet.timeLeftBeforeNextSession =
                                this.getTimeLeftBeforeNextSession(
                                    response.data.endAt
                                );

                            this.loadingPatientWorksheets = false;
                        })
                        .catch((error) => {
                            const errorMess =
                                "object" === typeof error.response.data
                                    ? error.response.data.detail
                                    : error.response.data;

                            console.error(errorMess);
                        });
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
    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    },
};
</script>

<style lang="scss" scoped>
#dashboard {
    main {
        display: grid;
        grid-gap: 2rem;

        grid-template-columns: 1fr;
        grid-template-areas:
            "myscores"
            "aside"
            "myworksheets"
            "myexercisestats";

        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas:
                "myscores      myscores      aside"
                "myworksheets  myworksheets  aside"
                "myexercisestats  myexercisestats  aside";
        }

        aside {
            grid-area: aside;
            display: flex;
            flex-direction: column;

            @media (min-width: 650px) {
                flex-direction: row;
            }

            @media (min-width: 992px) {
                margin-bottom: 2rem;
                flex-direction: column;
            }

            #my-doctor {
                display: flex;
                flex-direction: column;
                width: 100%;

                @media (min-width: 650px) {
                    width: 49%;
                }

                @media (min-width: 992px) {
                    width: 100%;
                }

                .doctor-details {
                    display: flex;
                    align-items: center;
                    flex-grow: 1;

                    .doctor-avatar {
                        .avatar {
                            margin-right: 1.9rem;

                            @media (min-width: 992px) {
                                margin-right: 1.5vw;
                            }

                            &.waiting {
                                img {
                                    width: 35%;
                                }
                            }
                        }

                        .avatar.loading {
                            width: 11.6rem;
                            height: 11.6rem;
                            min-width: 11.6rem;
                            min-height: 11.6rem;
                            max-height: 11.6rem;
                            border-radius: 50%;
                        }
                    }

                    .doctor-infos {
                        font-size: 1.8rem;
                        width: 100%;

                        .name {
                            margin: 0.5rem 0;

                            &.loading {
                                height: 2.3rem;
                            }
                        }

                        .city {
                            margin: 0.5rem 0;
                            font-weight: 200;
                            font-size: 1.5rem;

                            &.loading {
                                height: 1.8rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
