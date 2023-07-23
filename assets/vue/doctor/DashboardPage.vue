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
                        :doctorPatients="getDoctorPatients"
                        :allPatients="allPatients"
                        :loadingAllPatients="loadingAllPatients"
                        :loadingDoctorFirstsPatients="loadingDoctorFirstsPatients"
                        :loadingDoctorAllPatients="loadingDoctorAllPatients"
                        :csrfTokenAddPatient="csrfTokenAddPatient"
                        :csrfTokenRemovePatient="csrfTokenRemovePatient"
                        :csrfTokenCreatePatient="csrfTokenCreatePatient"
                        :prescriProcess="prescriProcess"
                        :btnLoadingPatientPrescriProcessRedirect="
                            btnLoadingPatientPrescriProcessRedirect
                        "
                        @prescriProcessPatientChoice="
                            setPrescriProcessPatientChoice
                        "
                        @prescriProcessMainStart="startPrescriProcess('patient')"
                        @prescriProcessMainStop="stopPrescriProcess"
                    />
                    <MyWorksheetTemplates
                        v-if="activeTab === 2"
                        :doctor="doctor"
                        :worksheetTemplates="getWorksheetTemplates"
                        :tagsFromExercises="tagsFromExercises"
                        :csrfTokenRemoveWorksheet="csrfTokenRemoveWorksheet"
                        :loadingDoctorFirstsWorksheets="loadingDoctorFirstsWorksheets"
                        :loadingDoctorAllWorksheets="loadingDoctorAllWorksheets"
                        :prescriProcess="prescriProcess"
                        :btnLoadingWorksheetPrescriProcessRedirect="
                            btnLoadingWorksheetPrescriProcessRedirect
                        "
                        @prescriProcessWorksheetChoice="
                            setPrescriProcessWorksheetChoice
                        "
                        @prescriProcessMainStart="startPrescriProcess('worksheet')"
                        @prescriProcessMainStop="stopPrescriProcess"
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
            loadingDoctorFirstsWorksheets: false,
            loadingDoctorAllWorksheets: false,
            loadingDoctorFirstsPatients: false,
            loadingDoctorAllPatients: false,
            loadingAllPatients: false,
            doctorWorksheets: [],
            doctorPatients: [],
            allPatients: [],
            tagsFromExercises: [],
            activeTab: 1,
            prescriProcess: false,
            prescriProcessPatient: false,
            prescriProcessPatientSelected: null,
            prescriProcessWorksheet: false,
            prescriProcessWorksheetsSelected: null,
            btnLoadingPatientPrescriProcessRedirect: null,
            btnLoadingWorksheetPrescriProcessRedirect: null,
        };
    },
    computed: {
        getWorksheetTemplates() {
            return this.doctorWorksheets;
        },
        getDoctorPatients() {
            return this.doctorPatients;
        },
    },
    methods: {
        setPrescriProcessWorksheetChoice(worksheetsIds) {
            if (!this.prescriProcess) {
                this.startPrescriProcess();
            }

            this.prescriProcessWorksheetsSelected = encodeURIComponent(JSON.stringify(worksheetsIds));

            this.prescriProcessWorksheet = false;
            if (!this.prescriProcessPatientSelected) {
                const id = "my-worksheets";
                const yOffset = -100;
                const element = document.getElementById(id);
                const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });

                this.activeTab = 1;
                this.prescriProcessPatient = true;
            } else {
                this.btnLoadingPatientPrescriProcessRedirect =
                    this.prescriProcessPatientSelected.id;
                this.btnLoadingWorksheetPrescriProcessRedirect =
                    true;

                document.location.href = `/doctor/${this.doctor.id}/fiche/creation/${this.prescriProcessWorksheetsSelected}/${this.prescriProcessPatientSelected.id}`;
            }
        },
        setPrescriProcessPatientChoice(patient) {
            if (!this.prescriProcess) {
                this.startPrescriProcess();
            }

            this.prescriProcessPatientSelected = patient;

            this.prescriProcessPatient = false;
            if (!this.prescriProcessWorksheetsSelected) {
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
                this.btnLoadingPatientPrescriProcessRedirect =
                    this.prescriProcessPatientSelected.id;
                this.btnLoadingWorksheetPrescriProcessRedirect =
                    true;

                document.location.href = `/doctor/${this.doctor.id}/fiche/creation/${this.prescriProcessWorksheetsSelected}/${this.prescriProcessPatientSelected.id}`;
            }
        },
        startPrescriProcess(target=null) {
            this.prescriProcess = true;
            if(target && target === 'patient')
                this.prescriProcessPatient = true;
            else
                this.prescriProcessWorksheet = true;
            this.myWorksheetTemplatesContent = true;
            this.myPatientsContent = true;
            this.activeTab = target && target === 'patient' ? 1 : 2;
        },
        stopPrescriProcess() {
            this.prescriProcess = false;
            this.prescriProcessWorksheet = false;
            this.prescriProcessPatient = false;
            this.prescriProcessWorksheetsSelected = null;
            this.prescriProcessPatientSelected = null;
            this.btnLoadingPatientPrescriProcessRedirect = null;
            this.btnLoadingWorksheetPrescriProcessRedirect = null;
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

        this.loadingDoctorFirstsPatients = true;
        this.loadingDoctorAllPatients = true;
        if(this.doctor.giveAccessAddFreePatient)
            this.loadingAllPatients = true;
            
        this.axios
            .get(`/doctor/${this.doctor.id}/get/patients/6/0`)
            .then((response) => {
                this.doctorPatients = response.data;

                this.doctorPatients.forEach((p) => {
                    if (p.worksheets) {
                        p.worksheets = this.sortByCreatedAt(p.worksheets);
                    }
                });

                this.loadingDoctorFirstsPatients = false;

                this.axios
                    .get(`/doctor/${this.doctor.id}/get/patients/999999/6`)
                    .then((response) => {
                        this.doctorPatients = [...this.doctorPatients,...response.data];
                        
                        this.doctorPatients.forEach((p) => {
                            if (p.worksheets) {
                                p.worksheets = this.sortByCreatedAt(p.worksheets);
                            }
                        });

                        this.loadingDoctorAllPatients = false;

                        if(this.doctor.giveAccessAddFreePatient)
                            this.axios
                                .get(`/doctor/${this.doctor.id}/get/all/patients`)
                                .then((response) => {
                                    this.allPatients = response.data;

                                    this.loadingAllPatients = false;
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


        this.loadingDoctorFirstsWorksheets = true;
        this.loadingDoctorAllWorksheets = true;

        this.axios
            .get(`/doctor/${this.doctor.id}/get/worksheets/6/0`)
            .then((response) => {
                this.doctorWorksheets = response.data;

                this.tagsFromExercises = f.generateTagsFromExercises(
                    this.doctorWorksheets
                );

                this.loadingDoctorFirstsWorksheets = false;

                this.axios
                    .get(`/doctor/${this.doctor.id}/get/worksheets/999999/6`)
                    .then((response) => {
                        this.doctorWorksheets = [...this.doctorWorksheets,...response.data];

                        this.tagsFromExercises = f.generateTagsFromExercises(
                            this.doctorWorksheets
                        );

                        this.loadingDoctorAllWorksheets = false;
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

        // this.loadingAllWorksheets = true;

        // this.axios
        //     .get(`/doctor/${this.doctor.id}/get/all/worksheets`)
        //     .then((response) => {
        //         this.allWorksheets = response.data;

        //         this.tagsFromExercises = f.generateTagsFromExercises(
        //             this.allWorksheets
        //         );

        //         this.loadingAllWorksheets = false;
        //     })
        //     .catch((error) => {
        //         const errorMess =
        //             "object" === typeof error.response.data
        //                 ? error.response.data.detail
        //                 : error.response.data;

        //         console.error(errorMess);
        //     });
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