<template>
    <div class="container">
        <section id="dashboard" class="db-doctor">
            <h1>
                Bienvenue sur votre dashboard !
                <i>
                    <img
                        src="../../img/icons/colored/hand.svg"
                        alt="Icone d'une main qui fait 'coucou'"
                    />
                </i>
            </h1>
            <main>
                <MyDashboardNotifications
                    :doctor="doctor"
                    class="mobile-view"
                />
                <transition name="fade">
                    <MyPrescriptions
                        v-if="activeOnglet === 1"
                        :doctor="doctor"
                        :doctorPrescriptions="getDoctorPrescriptions"
                        :loadingDoctorWorksheets="loadingDoctorWorksheets"
                    />
                    <MyWorksheetTemplates
                        v-if="activeOnglet === 2"
                        :doctor="doctor"
                        :worksheetTemplates="getWorksheetTemplates"
                        :tagsFromExercises="tagsFromExercises"
                        :loadingAllWorksheets="loadingAllWorksheets"
                    />
                </transition>
                <aside>
                    <MyDashboardNotifications
                        :doctor="doctor"
                        class="desktop-view"
                    />
                    <MyPatients
                        :doctor="doctor"
                        :csrfTokenAddPatient="csrfTokenAddPatient"
                        :csrfTokenRemovePatient="csrfTokenRemovePatient"
                        :csrfTokenCreatePatient="csrfTokenCreatePatient"
                    />
                </aside>
            </main>
        </section>
    </div>
</template>

<script>
import Vue from "vue";
import f from "../services/function";
import MyDashboardNotifications from "./DashboardPage/MyDashboardNotifications.vue";
import MyWorksheetTemplates from "./DashboardPage/MyWorksheetTemplates.vue";
import MyPrescriptions from "./DashboardPage/MyPrescriptions.vue";
import MyPatients from "./DashboardPage/MyPatients.vue";

export default {
    components: {
        MyDashboardNotifications,
        MyWorksheetTemplates,
        MyPrescriptions,
        MyPatients,
    },
    data() {
        return {
            doctor: null,
            // csrfTokenAcceptDoctor: null,
            myDBNotificationsContent: true,
            myWorksheetTemplatesContent: true,
            myPrescriptionsContent: true,
            myPatientsContent: true,
            csrfTokenAddPatient: null,
            csrfTokenRemovePatient: null,
            csrfTokenCreatePatient: null,
            loadingAllWorksheets: false,
            loadingDoctorWorksheets: false,
            allWorksheets: [],
            doctorWorksheets: [],
            tagsFromExercises: [],
            activeOnglet: 1,
        };
    },
    computed: {
        getWorksheetTemplates() {
            return this.sortByCreatedAt(
                this.allWorksheets.filter((w) => !w.patient)
            );
        },
        getDoctorPrescriptions() {
            return this.sortByCreatedAt(
                this.doctorWorksheets.filter((w) => w.patient)
            );
        },
    },
    methods: {
        sortByCreatedAt(array) {
            array.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            return array;
        },
        getCivility(gender) {
            return f.getCivility(gender);
        },
        onResize() {
            if (window.innerWidth > 576) {
                this.myDBNotificationsContent = true;
                this.myWorksheetTemplatesContent = true;
                this.myPrescriptionsContent = true;
                this.myPatientsContent = true;
            }
        },
        // calculWorksheetTimingProgression(
        //     currentSessionNum,
        //     totalWorksheetSessions
        // ) {
        //     let totalProgressionPercent = 0;

        //     const sessionPercentPart = 100 / totalWorksheetSessions;

        //     if (!currentSessionNum) {
        //         currentSessionNum = totalWorksheetSessions;
        //     }

        //     const t1 =
        //         Math.round(sessionPercentPart * (currentSessionNum - 1) * 10) /
        //         10;

        //     totalProgressionPercent = t1;

        //     return totalProgressionPercent;
        // },
        calculWorksheetTotalProgression(
            worksheet,
            totalCompletedWorksheetSessions,
            totalWorksheetSessions
        ) {
            let totalProgressionPercent = 0;

            // if (worksheet.exercises.length) {
            // const exercisePercentPart = 100 / worksheet.exercises.length;

            // const exercisesCompletedCount = worksheet.exercises.filter(
            //     (e) => e.isCompleted
            // ).length;

            // const currentSessionProgressionPercent =
            //     exercisePercentPart * exercisesCompletedCount;

            const sessionPercentPart = 100 / totalWorksheetSessions;

            const t1 =
                Math.round(
                    sessionPercentPart * totalCompletedWorksheetSessions * 10
                ) / 10;

            // const t2 =
            //     Math.round(
            //         ((sessionPercentPart *
            //             currentSessionProgressionPercent) /
            //             100) *
            //             10
            //     ) / 10;

            totalProgressionPercent = t1;
            // }

            return totalProgressionPercent;
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");
        window.addEventListener("resize", this.onResize);

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.csrfTokenAddPatient = data.csrfTokenAddPatient;
        this.csrfTokenRemovePatient = data.csrfTokenRemovePatient;
        this.csrfTokenCreatePatient = data.csrfTokenCreatePatient;

        this.loadingDoctorWorksheets = true;

        this.axios
            .get(`/doctor/${this.doctor.id}/get/worksheets`)
            .then((response) => {
                this.doctorWorksheets = response.data.map((worksheet) => {
                    return {
                        ...worksheet,
                        worksheetTotalProgression: null,
                        // worksheetTimingProgression: null,
                        currentWorksheetSession: {},
                        totalWorksheetSessions: null,
                        totalCompletedWorksheetSessions: null,
                    };
                });

                if (this.doctorWorksheets.length) {
                    this.doctorWorksheets
                        .filter((w) => w.patient)
                        .forEach((worksheet) => {
                            this.axios
                                .get(
                                    `/patient/${worksheet.patient.id}/get/current-worksheet-session/${worksheet.id}`
                                )
                                .then((response) => {
                                    worksheet.currentWorksheetSession =
                                        response.data;

                                    this.loadingDoctorWorksheets = false;

                                    this.axios
                                        .get(
                                            `/patient/${worksheet.patient.id}/get/total-worksheet-sessions/${worksheet.id}`
                                        )
                                        .then((response) => {
                                            worksheet.totalWorksheetSessions =
                                                response.data;

                                            this.axios
                                                .get(
                                                    `/patient/${worksheet.patient.id}/get/total-completed-worksheet-sessions/${worksheet.id}`
                                                )
                                                .then((response) => {
                                                    worksheet.totalCompletedWorksheetSessions =
                                                        response.data;

                                                    // worksheet.worksheetTimingProgression =
                                                    //     this.calculWorksheetTimingProgression(
                                                    //         worksheet
                                                    //             .currentWorksheetSession
                                                    //             .execOrder,
                                                    //         worksheet.totalWorksheetSessions
                                                    //     );

                                                    worksheet.worksheetTotalProgression =
                                                        this.calculWorksheetTotalProgression(
                                                            worksheet,
                                                            worksheet.totalCompletedWorksheetSessions,
                                                            worksheet.totalWorksheetSessions
                                                        );
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
                        });
                } else {
                    this.loadingDoctorWorksheets = false;
                }
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                console.error(errorMess);
            });

        this.loadingAllWorksheets = true;

        this.axios
            .get(`/doctor/${this.doctor.id}/get/all/worksheets`)
            .then((response) => {
                this.allWorksheets = response.data;

                this.tagsFromExercises = f.generateTagsFromExercises(
                    this.allWorksheets
                );

                this.loadingAllWorksheets = false;
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

<style lang="scss">
#dashboard.db-doctor {
    main {
        grid-template-areas:
            "mydashboardnotif"
            "myworksheets"
            "aside";
        align-items: flex-start;

        @media (min-width: 1100px) {
            grid-template-areas: "myworksheets  myworksheets aside";
        }

        .desktop-view {
            display: none;
        }
        .mobile-view {
            display: block;
        }

        @media (min-width: 1100px) {
            .desktop-view {
                display: block;
            }
            .mobile-view {
                display: none;
            }
        }
    }
}
</style>