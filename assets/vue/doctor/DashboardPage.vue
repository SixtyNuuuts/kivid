<template>
    <div class="container">
        <section id="dashboard" class="db-doctor">
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
                <MyWorksheetTemplates
                    :doctor="doctor"
                    :doctorWorksheetTemplates="getDoctorWorksheetTemplates"
                    :tagsFromExercises="tagsFromExercises"
                    :loadingDoctorWorksheets="loadingDoctorWorksheets"
                />
                <MyPrescriptions
                    :doctor="doctor"
                    :doctorPrescriptions="getDoctorPrescriptions"
                    :loadingDoctorWorksheets="loadingDoctorWorksheets"
                />
                <aside>
                    <MyDashboardNotifications :doctor="doctor" />
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
            loadingDoctorWorksheets: false,
            loadingDoctorPatients: false,
            allWorksheets: [],
            doctorPatients: [],
            tagsFromExercises: [],
        };
    },
    computed: {
        getDoctorWorksheetTemplates() {
            return this.sortByCreatedAt(
                this.allWorksheets.filter((w) => !w.patient)
            );
        },
        getDoctorPrescriptions() {
            return this.sortByCreatedAt(
                this.allWorksheets.filter(
                    (w) => w.patient && w.doctor.id === this.doctor.id
                )
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
            .get(`/doctor/${this.doctor.id}/get/all/worksheets`)
            .then((response) => {
                this.allWorksheets = response.data;

                this.tagsFromExercises = f.generateTagsFromExercises(
                    this.allWorksheets
                );

                this.loadingDoctorWorksheets = false;
            })
            .catch((error) => {
                console.error(error);
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
            "myworksheettemplates"
            "aside"
            "myprescriptions";

        @media (min-width: 992px) {
            grid-template-areas:
                "myworksheettemplates  myworksheettemplates  aside"
                "myprescriptions       myprescriptions       aside";
        }
    }
}
</style>