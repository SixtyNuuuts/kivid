<template>
    <div class="container">
        <section id="dashboard" class="db-doctor">
            <h1>
                <transition name="fade">
                    <span v-if="!prescriProcess"
                        >Bienvenue sur votre dashboard !
                        <i>
                            <img
                                src="../../img/icons/colored/hand.svg"
                                alt="Icone d'une main qui fait 'coucou'"
                            /> </i
                    ></span>
                    <span class="prescri-process" v-if="prescriProcess">
                        <span>Création d'une prescription</span>
                        <vs-button
                            class="secondary"
                            @click="stopPrescriProcess"
                        >
                            Annuler
                        </vs-button>
                    </span>
                </transition>
            </h1>
            <main
                :class="{
                    'with-notifs':
                        !doctor.city ||
                        !doctor.gender ||
                        !doctor.firstname ||
                        !doctor.lastname ||
                        !doctor.isVerified,
                }"
            >
                <MyDashboardNotifications
                    :doctor="doctor"
                    class="mobile-view"
                />
                <transition name="fade">
                    <MyPrescriptions
                        v-if="activeTab === 1"
                        :doctor="doctor"
                        :doctorPrescriptions="getDoctorPrescriptions"
                        :csrfTokenRemoveWorksheet="csrfTokenRemoveWorksheet"
                        :loadingDoctorWorksheets="loadingDoctorWorksheets"
                        @prescriProcess="startPrescriProcess"
                    />
                    <MyWorksheetTemplates
                        v-if="activeTab === 2"
                        :doctor="doctor"
                        :worksheetTemplates="getWorksheetTemplates"
                        :tagsFromExercises="tagsFromExercises"
                        :csrfTokenRemoveWorksheet="csrfTokenRemoveWorksheet"
                        :loadingAllWorksheets="loadingAllWorksheets"
                        :prescriProcess="prescriProcessWorksheet"
                        :btnLoadingWorksheetPrescriProcessRedirect="
                            btnLoadingWorksheetPrescriProcessRedirect
                        "
                        @prescriProcessWorksheetChoice="
                            setPrescriProcessWorksheetChoice
                        "
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
                        :prescriProcess="prescriProcessPatient"
                        :btnLoadingPatientPrescriProcessRedirect="
                            btnLoadingPatientPrescriProcessRedirect
                        "
                        @prescriProcessPatientChoice="
                            setPrescriProcessPatientChoice
                        "
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
            csrfTokenRemoveWorksheet: null,
            loadingAllWorksheets: false,
            loadingDoctorWorksheets: false,
            allWorksheets: [],
            doctorWorksheets: [],
            tagsFromExercises: [],
            activeTab: 1,
            prescriProcess: false,
            prescriProcessPatient: false,
            prescriProcessPatientSelected: null,
            prescriProcessWorksheet: false,
            prescriProcessWorksheetSelected: null,
            btnLoadingPatientPrescriProcessRedirect: null,
            btnLoadingWorksheetPrescriProcessRedirect: null,
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
        setPrescriProcessWorksheetChoice(worksheet) {
            if (!this.prescriProcess) {
                this.startPrescriProcess();
            }

            this.prescriProcessWorksheetSelected = worksheet;

            this.prescriProcessWorksheet = false;
            if (!this.prescriProcessPatientSelected) {
                const id = "my-patients";
                const yOffset = -100;
                const element = document.getElementById(id);
                const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });

                this.prescriProcessPatient = true;
            } else {
                const prescriProcessWorksheetSelectedId = this
                    .prescriProcessWorksheetSelected.id
                    ? this.prescriProcessWorksheetSelected.id
                    : 0;

                this.btnLoadingPatientPrescriProcessRedirect =
                    this.prescriProcessPatientSelected.id;
                this.btnLoadingWorksheetPrescriProcessRedirect =
                    prescriProcessWorksheetSelectedId;

                document.location.href = `/doctor/${this.doctor.id}/fiche/creation/${prescriProcessWorksheetSelectedId}/${this.prescriProcessPatientSelected.id}`;
            }
        },
        setPrescriProcessPatientChoice(patient) {
            if (!this.prescriProcess) {
                this.startPrescriProcess();
            }

            this.prescriProcessPatientSelected = patient;

            this.prescriProcessPatient = false;
            if (!this.prescriProcessWorksheetSelected) {
                const id = "my-worksheets";
                const yOffset = -100;
                const element = document.getElementById(id);
                const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });

                this.activeTab = 2;
                this.prescriProcessWorksheet = true;
            } else {
                const prescriProcessWorksheetSelectedId = this
                    .prescriProcessWorksheetSelected.id
                    ? this.prescriProcessWorksheetSelected.id
                    : 0;

                this.btnLoadingPatientPrescriProcessRedirect =
                    this.prescriProcessPatientSelected.id;
                this.btnLoadingWorksheetPrescriProcessRedirect =
                    prescriProcessWorksheetSelectedId;

                document.location.href = `/doctor/${this.doctor.id}/fiche/creation/${prescriProcessWorksheetSelectedId}/${this.prescriProcessPatientSelected.id}`;
            }
        },
        startPrescriProcess() {
            this.prescriProcess = true;
            this.prescriProcessWorksheet = true;
            this.myWorksheetTemplatesContent = true;
            this.myPatientsContent = true;
            this.activeTab = 2;
        },
        stopPrescriProcess() {
            this.prescriProcess = false;
            this.prescriProcessWorksheet = false;
            this.prescriProcessPatient = false;
            this.prescriProcessWorksheetSelected = null;
            this.prescriProcessPatientSelected = null;
            this.btnLoadingPatientPrescriProcessRedirect = null;
            this.btnLoadingWorksheetPrescriProcessRedirect = null;
            this.activeTab = 1;
        },
        sortByCreatedAt(array) {
            array.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            return array;
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
        this.csrfTokenRemoveWorksheet = data.csrfTokenRemoveWorksheet;

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const triggerTab = urlParams.get("tab");
        if (triggerTab === "ws") {
            this.activeTab = 2;
        }

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
                if (this.getDoctorPrescriptions.length) {
                    this.getDoctorPrescriptions.forEach((worksheet) => {
                        this.axios
                            .get(
                                `/patient/${worksheet.patient.id}/get/current-worksheet-session/${worksheet.id}/doctorview`
                            )
                            .then((response) => {
                                worksheet.currentWorksheetSession =
                                    response.data.currentWorksheetSession;

                                this.axios
                                    .get(
                                        `/patient/${worksheet.patient.id}/get/total-worksheet-sessions/${worksheet.id}`
                                    )
                                    .then((response) => {
                                        worksheet.totalWorksheetSessions =
                                            response.data;

                                        this.loadingDoctorWorksheets = false;

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
                                                    typeof error.response.data
                                                        ? error.response.data
                                                              .detail
                                                        : error.response.data;

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
    h1 {
        span.prescri-process {
            display: flex;
            flex-direction: row;
            align-items: center;

            @media (max-width: 576px) {
                .vs-button .vs-button__content {
                    padding: 1.3rem 3.8rem;
                }
            }

            > :first-child {
                margin-right: 2rem;
            }
        }
    }
    main {
        align-items: flex-start;

        grid-template-areas:
            "myworksheets"
            "aside";

        @media (min-width: 1100px) {
            grid-template-areas: "myworksheets  myworksheets aside";
        }

        &.with-notifs {
            grid-template-areas:
                "mydashboardnotif"
                "myworksheets"
                "aside";

            @media (min-width: 1100px) {
                grid-template-areas: "myworksheets  myworksheets aside";
            }
        }

        .desktop-view {
            display: none !important;
        }
        .mobile-view {
            display: block !important;
        }

        @media (min-width: 1100px) {
            .desktop-view {
                display: block !important;
            }
            .mobile-view {
                display: none !important;
            }
        }
    }
}
</style>