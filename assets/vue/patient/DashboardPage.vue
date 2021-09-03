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
                <MyScores :patient="patient" />
                <MyWorksheets :patient="patient" />
                <aside>
                    <DashboardNotifications
                        v-if="!doctorView"
                        :patient="patient"
                        :csrfTokenAcceptAddRequest="csrfTokenAcceptAddRequest"
                        :csrfTokenDeclineAddRequest="csrfTokenDeclineAddRequest"
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
                        <transition name="height">
                            <div v-if="myDoctorContent" class="doctor-details">
                                <div class="doctor-avatar">
                                    <vs-avatar
                                        v-if="true === patient.doctorAddRequest"
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
                                        v-if="null === patient.doctorAddRequest"
                                        class="avatar waiting"
                                        circle
                                        size="116"
                                    >
                                        <img
                                            src="../../img/icons/smiley/55.svg"
                                            alt="Smiley Monocle"
                                        />
                                    </vs-avatar>
                                </div>
                                <div class="doctor-infos">
                                    <div
                                        v-if="true === patient.doctorAddRequest"
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
                                        v-if="null === patient.doctorAddRequest"
                                    >
                                        <p>En attente de validation</p>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </section>
                </aside>
            </main>
            <!-- <div class="col-12 col-md-8">
            <ExerciseStatsCharts :patient="patient" />
        </div>
        <div class="col-12 col-md-4">
            <PatientDetails :patient="patient" />
        </div> -->
        </section>
    </div>
</template>

<script>
import Vue from "vue";
import f from "../services/function";
import DoctorChoice from "./components/DoctorChoice.vue";
import MyScores from "./components/MyScores.vue";
import MyWorksheets from "./components/MyWorksheets.vue";

import DashboardNotifications from "./components/DashboardNotifications.vue";

// import ExerciseStatsCharts from "./components/ExerciseStatsCharts.vue";
// import PatientDetails from "./components/PatientDetails.vue";

export default {
    components: {
        DoctorChoice,
        MyScores,
        MyWorksheets,
        DashboardNotifications,
        // ExerciseStatsCharts,
        // PatientDetails,
    },
    data() {
        return {
            patient: null,
            doctorView: null,
            csrfTokenAcceptAddRequest: null,
            csrfTokenDeclineAddRequest: null,
            csrfTokenSelectDoctor: null,
            myScoresContent: true,
            notificationsContent: true,
            myDoctorContent: true,
            myWorksheetsContent: true,
        };
    },
    methods: {
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
        window.addEventListener("resize", this.onResize);

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.doctorView = data.doctorView;
        this.csrfTokenAcceptAddRequest = data.csrfTokenAcceptAddRequest;
        this.csrfTokenDeclineAddRequest = data.csrfTokenDeclineAddRequest;
        this.csrfTokenSelectDoctor = data.csrfTokenSelectDoctor;
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
            "myworksheets";

        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas:
                "myscores      myscores      aside"
                "myworksheets  myworksheets  aside";
        }

        aside {
            grid-area: aside;
            display: flex;
            flex-direction: column;

            @media (min-width: 576px) {
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

                @media (min-width: 576px) {
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
                            margin-right: 1.5vw;

                            &.waiting {
                                img {
                                    width: 35%;
                                }
                            }
                        }
                    }

                    .doctor-infos {
                        font-size: 1.8rem;
                        .name {
                        }

                        .city {
                        }
                    }
                }
            }
        }
    }
}
</style>
