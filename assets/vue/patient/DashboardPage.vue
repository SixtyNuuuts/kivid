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
            <div class="content">
                <main>
                    <MyScores :patient="patient" />
                    <MyWorksheets :patient="patient" />
                </main>
                <aside>
                    <DashboardNotifications
                        v-if="!doctorView"
                        :patient="patient"
                        :csrfTokenAcceptAddRequest="csrfTokenAcceptAddRequest"
                        :csrfTokenDeclineAddRequest="csrfTokenDeclineAddRequest"
                    />
                    <section id="my-doctor" class="kiv-block">
                        <h2>Mon praticien</h2>
                        <div class="doctor-details">
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
                                <div v-if="true === patient.doctorAddRequest">
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
                                <div v-if="null === patient.doctorAddRequest">
                                    <p>En attente de validation</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </aside>
            </div>
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
        };
    },
    methods: {
        getCivility(gender) {
            return f.getCivility(gender);
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.doctorView = data.doctorView;
        this.csrfTokenAcceptAddRequest = data.csrfTokenAcceptAddRequest;
        this.csrfTokenDeclineAddRequest = data.csrfTokenDeclineAddRequest;
        this.csrfTokenSelectDoctor = data.csrfTokenSelectDoctor;
    },
};
</script>

<style lang="scss" scoped>
#dashboard {
    .content {
        display: flex;
        justify-content: space-between;
        min-height: 20rem;

        main {
            flex-grow: 2;
            margin-right: 2rem;
            max-width: 70%;
        }

        aside {
            flex-grow: 1;

            #my-doctor {
                .doctor-details {
                    display: flex;
                    align-items: center;

                    .doctor-avatar {
                        .avatar {
                            margin-right: 2.5rem;

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
