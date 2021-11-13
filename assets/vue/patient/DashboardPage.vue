<template>
    <div class="container">
        <DoctorChoice
            v-if="!patient.doctor && !doctorView"
            :patient="patient"
            :csrfTokenSelectDoctor="csrfTokenSelectDoctor"
            :csrfTokenContact="csrfTokenContact"
        />
        <section
            v-else
            id="dashboard"
            class="db-patient"
            :class="{ 'doctor-view': doctorView }"
        >
            <div>
                <i
                    v-if="doctorView"
                    class="kiv-arrow-left icon-31"
                    @click="rederictToDashboard()"
                ></i>
                <h1>
                    <span v-if="!doctorView">
                        Bienvenue sur votre dashboard !
                        <i>
                            <img
                                src="../../img/icons/colored/hand.svg"
                                alt="Icone d'une main qui fait 'coucou'"
                            />
                        </i>
                    </span>
                    <span v-if="doctorView">
                        Dashboard de
                        <span v-if="patient.firstname || patient.lastname">
                            {{ patient.firstname }}
                            {{ patient.lastname }}
                        </span>
                        <span v-else>
                            {{ patient.email }}
                        </span>
                    </span>
                </h1>
            </div>
            <main>
                <section
                    v-if="doctorView"
                    class="kiv-block mobile-view"
                    id="patient"
                >
                    <h2>Le patient</h2>
                    <div v-if="myDoctorContent" class="patient-details">
                        <div class="patient-avatar">
                            <vs-avatar class="avatar" circle size="116">
                                <img
                                    :src="
                                        patient.avatarUrl
                                            ? patient.avatarUrl
                                            : '/img/avatar-default.svg'
                                    "
                                    :alt="`Avatar de ${patient.firstname} ${patient.lastname}`"
                                />
                            </vs-avatar>
                        </div>
                        <div class="patient-infos">
                            <div>
                                <p class="name">
                                    {{ getUserName(patient) }}
                                </p>
                                <p v-if="patient.birthdate" class="birthdate">
                                    {{ getAge(patient.birthdate) }} ans
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <MyScores
                    :patient="patient"
                    :doctorView="doctorView"
                    :patientWorksheets="patientWorksheets"
                    :loadingPatientWorksheets="loadingPatientWorksheets"
                />
                <MyWorksheets
                    :patient="patient"
                    :doctorView="doctorView"
                    :doctor="currentUser"
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
                        v-if="!doctorView"
                        id="my-doctor"
                        class="kiv-block"
                        :class="{ reduced: !myDoctorContent }"
                    >
                        <button
                            class="toggle-content"
                            @click="myDoctorContent = !myDoctorContent"
                        >
                            <i class="kiv-chevron-down icon-3"></i>
                        </button>
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
                                            {{ getUserName(patient.doctor) }}
                                        </p>
                                        <p class="entity-city">
                                            <span
                                                v-if="
                                                    patient.doctor.entityName &&
                                                    !patient.doctor.city
                                                "
                                            >
                                                {{ patient.doctor.entityName }}
                                            </span>
                                            <span
                                                v-if="
                                                    !patient.doctor
                                                        .entityName &&
                                                    patient.doctor.city
                                                "
                                            >
                                                {{ patient.doctor.city }}
                                            </span>
                                            <span
                                                v-if="
                                                    patient.doctor.entityName &&
                                                    patient.doctor.city
                                                "
                                            >
                                                {{ patient.doctor.entityName }},
                                                {{ patient.doctor.city }}
                                            </span>
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
                    <section
                        v-if="doctorView"
                        class="kiv-block desktop-view"
                        id="patient"
                    >
                        <h2>Le patient</h2>
                        <div v-if="myDoctorContent" class="patient-details">
                            <div class="patient-avatar">
                                <vs-avatar class="avatar" circle size="116">
                                    <img
                                        :src="
                                            patient.avatarUrl
                                                ? patient.avatarUrl
                                                : '/img/avatar-default.svg'
                                        "
                                        :alt="`Avatar de ${patient.firstname} ${patient.lastname}`"
                                    />
                                </vs-avatar>
                            </div>
                            <div class="patient-infos">
                                <div>
                                    <p class="name">
                                        {{ getUserName(patient) }}
                                    </p>
                                    <p
                                        v-if="patient.birthdate"
                                        class="birthdate"
                                    >
                                        {{ getAge(patient.birthdate) }} ans
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </aside>
                <MyExerciseStats
                    :patient="patient"
                    :doctorView="doctorView"
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
            currentUser: null,
            doctorView: null,
            csrfTokenSelectDoctor: null,
            csrfTokenAcceptDoctor: null,
            csrfTokenDeclineDoctor: null,
            csrfTokenContact: null,
            myDBNotificationsContent: true,
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
        getUserName(user) {
            return f.getUserName(user);
        },
        onResize() {
            if (window.innerWidth > 576) {
                this.myScoresContent = true;
                this.myDBNotificationsContent = true;
                this.myDoctorContent = true;
                this.myWorksheetsContent = true;
            }
        },
        getAge(birthdate) {
            return f.generateAgeFromDateOfBirth(birthdate);
        },
        rederictToDashboard() {
            document.location.href = `/doctor/${this.currentUser.id}/dashboard`;
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");
        window.addEventListener("resize", this.onResize);

        moment.locale("fr-FR");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.currentUser = data.currentUser;
        this.doctorView = data.doctorView;
        this.csrfTokenAcceptDoctor = data.csrfTokenAcceptDoctor;
        this.csrfTokenDeclineDoctor = data.csrfTokenDeclineDoctor;
        this.csrfTokenSelectDoctor = data.csrfTokenSelectDoctor;
        this.csrfTokenContact = data.csrfTokenContact;

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
                        totalWorksheetSessions: null,
                        currentWorksheetSession: {},
                    };
                });

                if (this.patientWorksheets.length) {
                    this.patientWorksheets.forEach((worksheet) => {
                        this.axios
                            .get(
                                `/patient/${this.patient.id}/get/current-worksheet-session/${worksheet.id}/time-left-before-next`
                            )
                            .then((response) => {
                                worksheet.currentWorksheetSession =
                                    response.data.currentWorksheetSession;

                                if (response.data.currentWorksheetSession) {
                                    worksheet.timeLeftBeforeNextSession =
                                        this.getTimeLeftBeforeNextSession(
                                            response.data
                                                .currentWorksheetSession.endAt
                                        );
                                }

                                if (
                                    response.data.notifTimeLeft &&
                                    !this.doctorView
                                ) {
                                    const userNotifList =
                                        document.getElementById(
                                            "user-notif-list"
                                        );
                                    const notifBell =
                                        document.getElementById("notif-bell");

                                    notifBell.classList.add(
                                        "has-notifications"
                                    );

                                    let li = document.createElement("li");
                                    li.classList.add("prio");
                                    li.classList.add("active");
                                    li.classList.add("clickable");
                                    li.addEventListener(
                                        "mouseover",
                                        () => {
                                            li.classList.remove("active");
                                        },
                                        false
                                    );
                                    li.addEventListener(
                                        "click",
                                        () => {
                                            document.location.href = `/patient/${this.patient.id}/fiche/${response.data.notifTimeLeft.worksheetId}`;
                                        },
                                        false
                                    );

                                    let divIcon = document.createElement("div");
                                    divIcon.classList.add("notif-icon");

                                    let img = document.createElement("img");
                                    img.src = "/img/icons/colored/clock.svg";
                                    img.alt = "Icone d'une montre / horloge";
                                    img.classList.add("icon-clock");

                                    let p = document.createElement("p");
                                    let span = document.createElement("span");
                                    span.innerText = `Plus que quelques ${response.data.notifTimeLeft.time} pour réaliser vos exercices de "${response.data.notifTimeLeft.worksheet}", je m'y met maintenant !`;

                                    p.appendChild(span);

                                    divIcon.appendChild(img);

                                    li.appendChild(divIcon);

                                    li.appendChild(p);

                                    userNotifList.appendChild(li);
                                }

                                this.axios
                                    .get(
                                        `/patient/${this.patient.id}/get/total-worksheet-sessions/${worksheet.id}`
                                    )
                                    .then((response) => {
                                        worksheet.totalWorksheetSessions =
                                            response.data;
                                        this.loadingPatientWorksheets = false;
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
                    this.loadingPatientWorksheets = false;
                }
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
#dashboard.db-patient {
    &.doctor-view {
        > div:first-child {
            display: flex;
            margin-top: 0.5rem;
            position: relative;
            left: -0.5rem;

            i {
                font-size: 1.6rem;
                margin-right: -1.2rem;
                position: relative;
                top: 0.7rem;
                cursor: pointer;
                min-width: 3.6rem;

                @media (min-width: 768px) {
                    top: 1rem;
                }
            }

            h1 {
                margin-bottom: 2rem;
            }
        }

        main {
            #patient {
                grid-template-areas: patient;
            }

            aside {
                display: none;

                @media (min-width: 992px) {
                    display: flex;
                }
            }

            grid-template-areas:
                "patient"
                "myscores"
                "myworksheets"
                "myexercisestats";

            @media (min-width: 992px) {
                grid-template-areas:
                    "myscores      myscores      aside"
                    "myworksheets  myworksheets  aside"
                    "myexercisestats  myexercisestats  aside";
            }
        }
    }
    main {
        grid-template-areas:
            "myscores"
            "aside"
            "myworksheets"
            "myexercisestats";

        @media (min-width: 992px) {
            grid-template-areas:
                "myscores      myscores      aside"
                "myworksheets  myworksheets  aside"
                "myexercisestats  myexercisestats  aside";
        }

        .desktop-view {
            display: none !important;
        }
        .mobile-view {
            display: block !important;
        }

        @media (min-width: 992px) {
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