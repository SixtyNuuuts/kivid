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
                    <MyPatients
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
                    <WorksheetStore
                        :class="{'disabled-custom': activeTab === 1}"
                        :csrfTokenCreateWorksheet="csrfTokenCreateWorksheet"
                        :doctor="doctor"
                        :loadingDoctorFirstsWorksheets="loadingDoctorFirstsWorksheets"
                        :loadingDoctorAllWorksheets="loadingDoctorAllWorksheets"
                        @addWorksheetStore="addWorksheetStore"
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
import MyPatients from "./DashboardPage/MyPatients.vue";
import WorksheetStore from "./DashboardPage/WorksheetStore.vue";

export default {
    components: {
        MyDashboardNotifications,
        MyWorksheetTemplates,
        MyPatients,
        WorksheetStore,
    },
    data() {
        return {
            doctor: null,
            // csrfTokenAcceptDoctor: null,
            csrfTokenAddPatient: null,
            csrfTokenRemovePatient: null,
            csrfTokenCreatePatient: null,
            csrfTokenRemoveWorksheet: null,
            csrfTokenCreateWorksheet: null,
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
            btnLoadingWorksheetPrescriProcessRedirect: false,
            prescriProcessStartOrigin: 'patient'
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
        setPrescriProcessWorksheetChoice(worksheetsData) {
            if (!this.prescriProcess) {
                this.startPrescriProcess();
            }

            this.prescriProcessWorksheetsSelected = encodeURIComponent(JSON.stringify(worksheetsData.worksheetsIds));

            this.prescriProcessWorksheet = false;
            
            if(worksheetsData.worksheetsIds.length&&this.prescriProcessPatientSelected)
            {
                this.btnLoadingPatientPrescriProcessRedirect =
                    this.prescriProcessPatientSelected.id;
                this.btnLoadingWorksheetPrescriProcessRedirect =
                    false;

                if(worksheetsData.prescriptionType==='direct')
                {
                    this.btnLoadingWorksheetPrescriProcessRedirect = true;
                    this.axios
                        .post(`/doctor/${this.doctor.id}/create/worksheets`, {
                            _token: this.csrfTokenCreateWorksheet,
                            patientId: this.prescriProcessPatientSelected ? this.prescriProcessPatientSelected.id : null,
                            worksheetsIds: worksheetsData.worksheetsIds,
                        })
                        .then((response) => {
                            f.openSuccessNotification(
                                "Création de la prescription",
                                // `La fiche <strong> ${
                                //     this.worksheet.title
                                // }</strong> 
                                // a été prescrite à <strong>
                                // ${this.getUserName(this.patient)}</strong>`
                                response.data.message
                            );
                            this.btnLoadingWorksheetPrescriProcessRedirect = false;
                            this.btnLoadingValidCreateWorksheet = false;
                            this.doctorPatients.filter(p=>p.id==this.prescriProcessPatientSelected.id)[0].worksheets = [...response.data.worksheets, ...this.doctorPatients.filter(p=>p.id==this.prescriProcessPatientSelected.id)[0].worksheets]
                            this.stopPrescriProcess(null, 1);
                        })
                        .catch((error) => {
                            const errorMess =
                                "object" === typeof error.response.data
                                    ? error.response.data.detail
                                    : error.response.data;
                            this.btnLoadingWorksheetPrescriProcessRedirect = false;
                            this.btnLoadingValidCreateWorksheet = false;
                            f.openErrorNotification("Erreur", errorMess);
                        });
                }
                else
                {
                    document.location.href = `/doctor/${this.doctor.id}/fiche/creation/${this.prescriProcessWorksheetsSelected}/${this.prescriProcessPatientSelected.id}`;
                }
            }
        },
        setPrescriProcessPatientChoice(patient) {
            if (!this.prescriProcess) {
                this.startPrescriProcess();
            }

            this.prescriProcessPatientSelected = patient;

            this.prescriProcessPatient = false;
            if (!this.prescriProcessWorksheetsSelected) {
                // const id = "my-worksheets";
                // const yOffset = -100;
                // const element = document.getElementById(id);
                // const y =
                //     element.getBoundingClientRect().top +
                //     window.pageYOffset +
                //     yOffset;

                // window.scrollTo({ top: y, behavior: "smooth" });

                this.activeTab = 2;
                this.prescriProcessWorksheet = true;
            } else {
                this.btnLoadingPatientPrescriProcessRedirect =
                    this.prescriProcessPatientSelected.id;
                this.btnLoadingWorksheetPrescriProcessRedirect =
                    false;

                document.location.href = `/doctor/${this.doctor.id}/fiche/creation/${this.prescriProcessWorksheetsSelected}/${this.prescriProcessPatientSelected.id}`;
            }
        },
        startPrescriProcess(target=null) {
            this.prescriProcess = true;
            this.prescriProcessPatient = true;
            this.activeTab = 1;
            this.prescriProcessStartOrigin = target;
        },
        stopPrescriProcess(e, activeTab=null) {
            this.prescriProcess = false;
            this.prescriProcessWorksheet = false;
            this.prescriProcessPatient = false;
            this.prescriProcessWorksheetsSelected = null;
            this.prescriProcessPatientSelected = null;
            this.btnLoadingPatientPrescriProcessRedirect = null;
            this.btnLoadingWorksheetPrescriProcessRedirect = false;
            if(activeTab!=null)
                this.activeTab = activeTab;
            else if(this.prescriProcessStartOrigin === 'worksheet')
                this.activeTab = 2;
            else if(this.prescriProcessStartOrigin === 'patient')
                this.activeTab = 1;
        },
        sortByCreatedAt(array) {
            array.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            return array;
        },
        addWorksheetStore(worksheets)
        {
            this.doctorWorksheets = [...worksheets,...this.doctorWorksheets];

            this.tagsFromExercises = f.generateTagsFromExercises(
                this.doctorWorksheets
            );
        }
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.csrfTokenAddPatient = data.csrfTokenAddPatient;
        this.csrfTokenRemovePatient = data.csrfTokenRemovePatient;
        this.csrfTokenCreatePatient = data.csrfTokenCreatePatient;
        this.csrfTokenRemoveWorksheet = data.csrfTokenRemoveWorksheet;
        this.csrfTokenCreateWorksheet = data.csrfTokenCreateWorksheet;

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
            .get(`/doctor/${this.doctor.id}/get/worksheets/10/0`)
            .then((response) => {
                this.doctorWorksheets = response.data;

                this.tagsFromExercises = f.generateTagsFromExercises(
                    this.doctorWorksheets
                );

                // this.doctorWorksheets.forEach((w) => {
                //     if (w.exercises) {
                //         f.sortByPosition(w.exercises);
                //     }
                // });

                this.loadingDoctorFirstsWorksheets = false;

                this.axios
                    .get(`/doctor/${this.doctor.id}/get/worksheets/999999/10`)
                    .then((response) => {
                        this.doctorWorksheets = [...this.doctorWorksheets,...response.data];

                        this.tagsFromExercises = f.generateTagsFromExercises(
                            this.doctorWorksheets
                        );

                        // this.doctorWorksheets.forEach((w) => {
                        //     if (w.exercises) {
                        //         f.sortByPosition(w.exercises);
                        //     }
                        // });

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
    },
};
</script>

<style lang="scss">

@media (max-width: 799px)
{
    body .container {
        padding: 3rem 0;

        main > *:not(aside)
        {
            padding-left: 2rem!important;
            padding-right: 2rem!important;
        }

        #dashboard-notifications
        {
            padding-left: 0!important;
            padding-right: 0!important;
            background-color: transparent;
            box-shadow: none;

            .notifications-list
            {
                background: #fff;
                border-radius: 1rem;
                box-shadow: 0.6px 0.4rem 0.4rem rgba(140, 136, 130, 0.13);
                padding-top: 1.5rem !important;
                padding: 1.7rem;
                padding-bottom: 1.2rem;
                margin: 0rem 2.3rem;
            }
        }

        #dashboard-notifications h2,
        #worksheet-store h2
        {
            margin-left: 4.3rem;
        }
    }
}

#dashboard.db-doctor {
    .not-found {
        @media (max-width: 799px) {
            background-color: #fff;
        }
    }
    .worksheet-list.wl-doctor.wl-patients.prescri-process
    {
        @media (max-width: 799px) {
            min-height: 165vw;
        }
    }
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
                "myworksheets"
                "aside"
                "mydashboardnotif";

            grid-gap: 0.9rem;

            @media (min-width: 1100px) {
                grid-template-areas: "myworksheets  myworksheets aside";
                grid-gap: 2rem;
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

@media (max-width: 991px) {
    .footer
    {
        min-height: 6.4rem;
        > *
        {
            display: none !important;
        }
    }
}
</style>