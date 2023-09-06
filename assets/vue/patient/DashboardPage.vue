<template>
    <div class="container">
        <DoctorChoice
            v-if="!patient.addRequestDoctor && !doctorView"
            :patient="patient"
            :csrfTokenSelectDoctor="csrfTokenSelectDoctor"
            :csrfTokenContact="csrfTokenContact"
            @patientHasNoDoctorChoice="setPatientHasNoDoctorChoice"
        />
        <section
            v-else
            id="dashboard"
            class="db-patient"
            :class="{ 'doctor-view': doctorView }"
        >
            <div>
                <!-- <i
                    v-if="doctorView"
                    class="kiv-arrow-left icon-31"
                    @click="rederictToDashboard()"
                ></i> -->
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
                    <span v-if="doctorView" class="h1-doctor-view">
                        <span class="patient-avatar">
                            <vs-avatar class="avatar" circle size="65">
                                <img
                                    :src="
                                        patient.avatarUrl
                                            ? patient.avatarUrl
                                            : '/img/avatar-default.svg'
                                    "
                                    :alt="`Avatar de ${patient.firstname} ${patient.lastname}`"
                                />
                            </vs-avatar>
                        </span>
                        <span>
                            Dashboard de
                            <span class="patient-name" v-if="patient.firstname || patient.lastname">
                                {{ patient.firstname }}
                                {{ patient.lastname }}
                            </span>
                            <span class="patient-name" v-else>
                                {{ patient.email }}
                            </span>
                        </span>
                    </span>
                </h1>
            </div>
            <main>
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
                    :csrfTokenRemoveWorksheet="csrfTokenRemoveWorksheet"
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
                                            patient.addRequestDoctor && patient.doctor &&
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
                                            (false ===
                                                patient.addRequestDoctor &&
                                                !loadingDoctor) ||
                                            !patient.doctor
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
                                            patient.addRequestDoctor && patient.doctor &&
                                            !loadingDoctor
                                        "
                                    >
                                        <div class="name">
                                            <span>{{
                                                getUserName(patient.doctor)
                                            }}</span>
                                            <vs-button
                                                size="mini"
                                                class="btn-change-doctor"
                                                @click="openModalChangeDoctor"
                                                ><i class="fas fa-sync-alt"></i>
                                                <span
                                                    >Changer de praticien
                                                </span>
                                            </vs-button>
                                        </div>
                                        <div
                                            class="entity-city"
                                            v-if="
                                                patient.doctor.entityName ||
                                                patient.doctor.city
                                            "
                                        >
                                            <span
                                                v-if="patient.doctor.entityName"
                                                >{{
                                                    patient.doctor.entityName
                                                }}</span
                                            ><span
                                                v-if="
                                                    patient.doctor.entityName &&
                                                    patient.doctor.city
                                                "
                                                >, </span
                                            ><span v-if="patient.doctor.city">{{
                                                patient.doctor.city
                                            }}</span>
                                        </div>
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
                                    <div v-if="!patient.doctor">
                                        <p class="p">En attente</p>
                                        <p class="subp">Un de nos praticiens va prendre contact avec vous
                                           pour&nbsp;élaborer le traitement approprié.
                                        </p>
                                        <p class="subp">
                                            Vous avez une question ?
                                            <a @click="rederictToHelpSupport">contactez-nous</a>
                                        </p>
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
            <div class="change-doctor-modal" v-if="modalChangeDoctor">
                <div class="content">
                    <section id="change-doctor-box" class="kiv-block">
                        <button
                            class="vs-dialog__close btn-close-modal"
                            @click="closeModalChangeDoctor"
                        >
                            <i class="vs-icon-close vs-icon-hover-x"></i>
                        </button>
                        <h2>Changer de praticien</h2>
                        <DoctorSelectBox
                            class="big"
                            :doctorSelected="doctorSelected"
                            @setDoctorSelected="setDoctorSelected"
                        />
                        <div class="btn-container">
                            <vs-button
                                class="secondary"
                                @click="closeModalChangeDoctor"
                                >Annuler</vs-button
                            >
                            <vs-button
                                :disabled="
                                    loadingChangeDoctor || !doctorSelected
                                "
                                :loading="loadingChangeDoctor"
                                @click="valideChangeDoctor"
                                >Valider</vs-button
                            >
                        </div>
                    </section>
                </div>
            </div>
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
import DoctorSelectBox from "../components/DoctorSelectBox.vue";

export default {
    components: {
        DoctorChoice,
        MyScores,
        MyDashboardNotifications,
        MyWorksheets,
        MyExerciseStats,
        DoctorSelectBox,
    },
    data() {
        return {
            patient: null,
            currentUser: null,
            doctorView: null,
            csrfTokenContact: null,
            csrfTokenSelectDoctor: null,
            csrfTokenAcceptDoctor: null,
            csrfTokenDeclineDoctor: null,
            csrfTokenRemoveWorksheet: null,
            myDBNotificationsContent: true,
            myScoresContent: true,
            myDoctorContent: true,
            myWorksheetsContent: true,
            loadingDoctor: false,
            loadingPatientWorksheets: false,
            patientWorksheets: [],
            modalChangeDoctor: false,
            doctorSelected: null,
            loadingChangeDoctor: false,
            patientHasNoDoctorChoice: false,
        };
    },
    methods: {
        openModalChangeDoctor() {
            this.modalChangeDoctor = true;

            document.body.classList.add("no-scrollbar");
        },
        setPatientHasNoDoctorChoice(patientHasNoDoctorChoice) {
            this.patientHasNoDoctorChoice = patientHasNoDoctorChoice;
            this.valideChangeDoctor();
        },
        closeModalChangeDoctor() {
            this.modalChangeDoctor = false;
            this.doctorSelected = this.patient.doctor;

            document.body.classList.remove("no-scrollbar");
        },
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
        rederictToHelpSupport() {
            document.location.href = `/support`;
        },
        setDoctorSelected(doctorSelected) {
            this.doctorSelected = doctorSelected;
        },
        valideChangeDoctor() {
            this.loadingChangeDoctor = true;

            this.axios
                .post(`/patient/${this.patient.id}/select/doctor`, {
                    _token: this.csrfTokenSelectDoctor,
                    doctorId: this.doctorSelected?.id??null,
                })
                .then((response) => {
                    this.patient.addRequestDoctor = true;

                    if(response.data != 'patient-without-doctor')
                    {
                        f.openSuccessNotification(
                            "Choix du praticien enregistré",
                            response.data
                        );

                        this.patient.doctor = this.doctorSelected;

                        this.modalChangeDoctor = false;

                        this.loadingChangeDoctor = false;
                    }
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    this.loadingChangeDoctor = false;

                    f.openErrorNotification("Erreur", errorMess);
                });
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
        this.csrfTokenContact = data.csrfTokenContact;
        this.csrfTokenDeclineDoctor = data.csrfTokenDeclineDoctor;
        this.csrfTokenRemoveWorksheet = data.csrfTokenRemoveWorksheet;
        this.csrfTokenSelectDoctor = data.csrfTokenSelectDoctor;
        this.doctorSelected = this.patient.doctor;

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

                                worksheet.countOldWorksheetSessions =
                                    response.data.countOldWorksheetSessions;

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
    mounted() {
        const params = new URLSearchParams(window.location.search);
        if(params.size)
        {
            const elementToScrollTo = document.getElementById(params.get('st'));
            const offset = 90;

            if (elementToScrollTo) {
                const offsetTop = elementToScrollTo.offsetTop - offset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
        this.loadingDoctor = false;
        this.loadingPatientWorksheets = false;
        this.modalChangeDoctor = false;
        this.loadingChangeDoctor = false;
    },
};
</script>

<style lang="scss" scoped>
@media (max-width: 991px) {
    body .container 
    {
        padding: 2rem;
    }
}

#dashboard.db-patient {
    &.doctor-view {
        h1 {
            margin-bottom: 1rem !important;
            .h1-doctor-view
            {
                font-size: 2.7rem;
                display: flex;
                align-items: center;

                > *:not(:last-child) {
                    margin-right: 1.5rem;
                }

                > span:not(.patient-avatar)
                {
                    display: flex;
                    flex-direction: column;
                    margin-top: 0.5rem;
                }

                .patient-name
                {
                    white-space: nowrap;
                    display: inline-block;
                    max-width: 72vw;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    // font-size: 3.2rem;
                }

                @media (min-width: 992px) {
                    .patient-avatar {
                        display: none;
                    }

                    > span:not(.patient-avatar)
                    {
                        display: flex;
                        flex-direction: row;
                        margin-bottom: 1.5rem;
                        margin-left: 0.5rem;
                        font-size: 3.2rem;

                        .patient-name
                        {
                            max-width: initial;
                            margin-left: 0.75rem;
                        }
                    }
                }
            }
        }
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
    .p {
        margin-bottom: 0.4rem;
        font-weight: bold;
        font-size: 1.5rem;
    }
    .subp {
        font-size: 1.4rem;
        max-width: 28rem;
        margin-top: 0rem;
        margin-bottom: 0.125rem;

        a {
            text-decoration: underline;
            color: #a4a29f;
            cursor: pointer;
        }
    }
    .change-doctor-modal {
        position: fixed;
        z-index: 11111;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .btn-close-modal {
            border-radius: 50%;
        }

        &::after {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            backdrop-filter: blur(0.5rem);
            background: rgba(34, 46, 84, 0.8);
            height: 100vh;
            width: 100%;
        }

        .content {
            height: 100%;
            width: 100%;
            padding: 6%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 7%;

            .select-filter {
                margin-bottom: 1rem;

                &.loading {
                    margin-bottom: 1.6rem;
                }
            }

            &::-webkit-scrollbar {
                width: 4px;
                height: 4px;
                display: block;
                background: transparent;
                border-radius: 4px;
            }

            &::-webkit-scrollbar-thumb {
                background: #2e3858a1;
                border: 1px solid transparent;
                border-radius: 4px;
            }

            @media (max-height: 815px) {
                align-items: flex-start;
                overflow-y: auto;
            }

            #change-doctor-box {
                min-width: initial;
                max-width: 45rem;
            }

            .btn-container {
                display: flex;
                flex-direction: column;

                .vs-button {
                    width: 100%;

                    &:last-child {
                        margin-top: 1rem;
                        margin-left: 0;
                    }
                }

                @media (min-width: 300px) {
                    flex-direction: row;

                    .vs-button {
                        width: 50%;

                        &:last-child {
                            margin-top: 0;
                            margin-left: 1.7rem;
                        }
                    }
                }
            }
        }
    }
}
</style>