<template>
    <div class="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div class="container">
            <a class="navbar-brand" :href="homePath">
                <img
                    src="/img/brand.svg"
                    class="navbar-brand-img"
                    alt="Logo Kivid"
                />
            </a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fe fe-x"></i>
                </button>

                <ul class="navbar-nav ms-auto">
                    <li
                        v-if="
                            currentUser &&
                            currentUser.roles.includes('ROLE_PATIENT')
                        "
                        class="nav-item d-flex align-items-center"
                    >
                        <a
                            class="nav-link"
                            :class="{
                                active: currentRoute === patientDashboardRoute,
                            }"
                            :href="patientDashboardPath"
                        >
                            <i class="fe fe-layout"></i>
                            Tableau de bord
                        </a>
                    </li>
                    <li
                        v-if="
                            currentUser &&
                            currentUser.roles.includes('ROLE_DOCTOR')
                        "
                        class="nav-item d-flex align-items-center"
                    >
                        <a
                            class="nav-link"
                            :class="{
                                active: currentRoute === doctorDashboardRoute,
                            }"
                            :href="doctorDashboardPath"
                        >
                            <i class="fe fe-layout"></i>
                            Tableau de bord
                        </a>
                    </li>
                    <li
                        v-if="
                            currentUser &&
                            currentUser.roles.includes('ROLE_ADMIN')
                        "
                        class="nav-item d-flex align-items-center"
                    >
                        <a
                            v-if="currentUser.roles.includes('ROLE_ADMIN')"
                            class="nav-link"
                            :href="adminDashboardPath"
                        >
                            <i class="fe fe-layout"></i>
                            Tableau de bord
                        </a>
                    </li>
                    <li
                        v-if="
                            currentUser &&
                            currentUser.roles.includes('ROLE_PATIENT')
                        "
                        class="nav-item d-flex align-items-center"
                    >
                        <a
                            class="nav-link"
                            :class="{
                                active: currentRoute === patientWorksheetsRoute,
                            }"
                            :href="patientWorksheetsPath"
                        >
                            <i class="fe fe-file-text"></i>
                            Mes fiches
                        </a>
                    </li>
                    <li
                        v-if="
                            currentUser &&
                            currentUser.roles.includes('ROLE_DOCTOR')
                        "
                        class="nav-item d-flex align-items-center"
                    >
                        <a
                            class="nav-link"
                            :class="{
                                active: currentRoute === doctorWorksheetsRoute,
                            }"
                            :href="doctorWorksheetsPath"
                        >
                            <i class="fe fe-file-text"></i>
                            Mes fiches
                        </a>
                    </li>
                    <li
                        v-if="
                            currentUser &&
                            currentUser.roles.includes('ROLE_PATIENT')
                        "
                        class="nav-item d-flex align-items-center"
                    >
                        <a class="nav-link" href="#!">
                            <i class="fe fe-shopping-bag"></i>
                            Boutique
                        </a>
                    </li>
                    <li
                        v-if="
                            currentUser &&
                            currentUser.roles.includes('ROLE_DOCTOR')
                        "
                        class="nav-item d-flex align-items-center"
                    >
                        <a
                            class="nav-link"
                            :class="{
                                active: currentRoute === doctorPatientsRoute,
                            }"
                            :href="doctorPatientsPath"
                        >
                            <i class="fe fe-users"></i>
                            Mes patients
                        </a>
                    </li>
                    <li
                        v-if="currentUser"
                        class="nav-item notifications"
                        @click="readNotifications"
                        v-click-outside="hideNotifications"
                    >
                        <div
                            class="nav-link notif-bell"
                            @click="showNotifications = !showNotifications"
                        >
                            <i class="fe fe-bell">
                                <span
                                    v-if="
                                        notificationCount &&
                                        notificationCount.length
                                    "
                                    class="notif-count"
                                    >{{ notificationCount.length }}</span
                                >
                            </i>
                        </div>
                        <div v-if="showNotifications" class="notif-menu">
                            <div
                                v-for="(notif, i) in navbarNotifications"
                                :key="i"
                                class="list-group list-group-flush"
                                :class="{ highlight: false === notif.isViewed }"
                                @mouseover="notif.isViewed = true"
                            >
                                <div>
                                    <div class="ms-4">
                                        <span
                                            v-for="(e, i) in notif.content"
                                            :key="i"
                                        >
                                            <span v-if="'user' === e.type">
                                                <strong>{{ e.content }}</strong>
                                            </span>
                                            <span v-if="'text' === e.type">
                                                {{ e.content }}
                                            </span>
                                            <a
                                                v-if="'link' === e.type"
                                                :href="e.content.url"
                                            >
                                                {{ e.content.text }}
                                            </a>
                                        </span>
                                    </div>
                                    <span class="notif-time">{{
                                        timeForNotification(notif.createdAt)
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li v-if="currentUser" class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle d-flex"
                            id="dropdown-user"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <div
                                class="
                                    user-nav
                                    d-sm-flex
                                    justify-content-center
                                    d-none
                                    flex-column
                                "
                            >
                                <span class="user-name fw-bolder">
                                    {{
                                        currentUser.firstname
                                            ? currentUser.firstname
                                            : currentUser.username
                                    }}
                                    {{
                                        currentUser.lastname
                                            ? currentUser.lastname
                                            : ""
                                    }}
                                </span>
                                <span
                                    v-if="
                                        currentUser.roles.includes(
                                            'ROLE_PATIENT'
                                        )
                                    "
                                    class="user-status"
                                    >Membre standard</span
                                >
                                <span
                                    v-if="
                                        currentUser.roles.includes(
                                            'ROLE_DOCTOR'
                                        )
                                    "
                                    class="user-status"
                                    >Kinésithérapeute</span
                                >
                                <span
                                    v-if="
                                        currentUser.roles.includes('ROLE_ADMIN')
                                    "
                                    class="user-status"
                                    >Admin</span
                                >
                            </div>
                            <span class="avatar avatar-online ms-5">
                                <img
                                    class="avatar-img rounded-circle"
                                    :src="
                                        currentUser.avatarUrl
                                            ? currentUser.avatarUrl
                                            : '/img/avatar-default.svg'
                                    "
                                    alt="avatar"
                                    height="40"
                                    width="40"
                                />
                            </span>
                        </a>
                        <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdown-user"
                        >
                            <a
                                v-if="
                                    currentUser.roles.includes('ROLE_PATIENT')
                                "
                                class="dropdown-item"
                                :href="patientEditPath"
                            >
                                <i class="fe fe-settings"></i>
                                Paramètres
                            </a>
                            <a
                                v-if="currentUser.roles.includes('ROLE_DOCTOR')"
                                class="dropdown-item"
                                :href="doctorEditPath"
                            >
                                <i class="fe fe-settings"></i>
                                Paramètres
                            </a>
                            <a class="dropdown-item" :href="logoutPath">
                                <i class="fe fe-log-out"></i>
                                Déconnexion
                            </a>
                        </div>
                    </li>
                    <a
                        v-if="!currentUser"
                        class="
                            navbar-btn
                            btn btn btn-outline-primary
                            lift
                            ms-auto
                        "
                        href="#!"
                    >
                        <i class="fe fe-shopping-bag"></i>
                        BOUTIQUE
                    </a>
                    <a
                        v-if="!currentUser"
                        class="navbar-btn btn btn-primary lift ms-auto"
                        :href="loginPath"
                    >
                        SE CONNECTER
                        <i class="fe fe-log-in"></i>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import f from "./services/function";
import ClickOutside from "vue-click-outside";

export default {
    data() {
        return {
            currentUser: null,
            currentUserType: null,
            currentUserNotifications: [],
            currentRoute: null,
            adminDashboardPath: null,
            homePath: null,
            patientDashboardPath: null,
            doctorDashboardPath: null,
            patientWorksheetsPath: null,
            patientEditPath: null,
            doctorWorksheetsPath: null,
            doctorPatientsPath: null,
            doctorEditPath: null,
            loginPath: null,
            logoutPath: null,
            patientDashboardRoute: null,
            doctorDashboardRoute: null,
            patientWorksheetsRoute: null,
            doctorWorksheetsRoute: null,
            doctorPatientsRoute: null,
            showNotifications: false,
            csrfTokenReadNotification: null,
        };
    },
    directives: {
        ClickOutside,
    },
    computed: {
        notificationCount() {
            return this.currentUserNotifications.filter(
                (n) => false === n.isViewed && "dashboard" !== n.type
            );
        },
        navbarNotifications() {
            return this.currentUserNotifications.filter(
                (n) => "dashboard" !== n.type
            );
        },
    },
    methods: {
        getNotifications() {
            this.axios
                .get(
                    `/${this.currentUserType}/${this.currentUser.id}/get/notifications`
                )
                .then((response) => {
                    this.currentUserNotifications = response.data;
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response.data.detail);
                    }
                });
        },
        readNotifications() {
            this.axios
                .post(
                    `/${this.currentUserType}/${this.currentUser.id}/read/notifications`,
                    {
                        _token: this.csrfTokenReadNotification,
                    }
                )
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response.data.detail);
                    }
                });
        },
        hideNotifications() {
            this.showNotifications = false;
        },
        timeForNotification(notificationDate) {
            const timeNow = new Date().getTime();
            const timeNotification = new Date(notificationDate).getTime();

            const msDiff = timeNow - timeNotification;

            const dayDiff = msDiff / 86400 / 1000;
            const nbDays = Math.round(dayDiff);

            const restInHours = (msDiff - 86400 * nbDays * 1000) / 3600 / 1000;
            const nbHours = Math.round(restInHours);

            const restInMin =
                (msDiff - (3600 * nbHours * 1000 + 86400 * nbDays * 1000)) /
                60 /
                1000;
            const nbMin = Math.round(restInMin);

            let minutes = nbMin > 0 ? `${nbMin} min.` : `À l'instant`;

            const hoursOrMinutes = nbHours >= 1 ? `${nbHours} h.` : minutes;

            const timeForNotif =
                nbDays > 1 ? this.formatDate(notificationDate) : hoursOrMinutes;

            return timeForNotif;
        },
        formatDate(datetime) {
            return f.formatDate(datetime);
        },
        openNotification(title, text, position, color, icon) {
            this.$vs.notification({
                progress: "auto",
                flat: true,
                icon,
                color,
                position,
                title,
                text,
            });
        },
    },
    created() {
        const data = JSON.parse(
            document.getElementById("navbar-vueData").innerHTML
        );

        this.csrfTokenReadNotification = data.csrfTokenReadNotification;

        this.currentUser = data.currentUser;
        this.currentRoute = data.currentRoute;
        this.adminDashboardPath = data.adminDashboardPath;
        this.homePath = data.homePath;
        this.patientDashboardPath = data.patientDashboardPath;
        this.patientWorksheetsPath = data.patientWorksheetsPath;
        this.patientEditPath = data.patientEditPath;
        this.doctorDashboardPath = data.doctorDashboardPath;
        this.doctorWorksheetsPath = data.doctorWorksheetsPath;
        this.doctorPatientsPath = data.doctorPatientsPath;
        this.doctorEditPath = data.doctorEditPath;
        this.loginPath = data.loginPath;
        this.logoutPath = data.logoutPath;
        this.patientDashboardRoute = data.patientDashboardRoute;
        this.doctorDashboardRoute = data.doctorDashboardRoute;
        this.patientWorksheetsRoute = data.patientWorksheetsRoute;
        this.doctorWorksheetsRoute = data.doctorWorksheetsRoute;
        this.doctorPatientsRoute = data.doctorPatientsRoute;

        this.currentUserType = this.currentUser.roles.includes("ROLE_PATIENT")
            ? "patient"
            : "doctor";

        this.getNotifications();
    },
};
</script>

<style lang="scss" scoped>
.notifications {
    display: flex;
    align-items: center;

    .notif-bell {
        cursor: pointer;
    }

    i {
        font-size: 1.3em;
        position: relative;

        .notif-count {
            display: flex;
            height: 1em;
            width: 1em;
            background-color: #ffab2c;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            font-size: 0.5em;
            padding: 0.7em;
            color: white;
            position: absolute;
            top: -7px;
            right: -6px;
            font-family: "HKGroteskPro", serif;
        }
    }

    .notif-menu {
        display: flex;
        position: absolute;
        top: 4em;
        right: 1em;
        opacity: 1;
        min-width: 18em;
        box-shadow: 0 0.5rem 1.5rem rgb(22 28 45 / 10%) !important;
        background-color: white;
        flex-direction: column;
        max-width: 20.2em;
        max-height: 15em;
        overflow: auto;

        .list-group.list-group-flush {
            width: 100%;
            min-height: 3em;
            display: flex;
            justify-content: center;
            border-bottom: 1px solid #d9e2ef;
            padding: 0.5em !important;
            min-height: 3.5em;
            position: relative;
            font-size: 0.8em;

            .ms-4 {
                min-height: 2.5em;
            }

            .notif-time {
                color: #c2c8d0;
                position: absolute;
                bottom: 6px;
                right: 6px;
                text-transform: uppercase;
                font-size: 0.6em;
            }

            &.highlight {
                background-color: rgb(254 170 44 / 7%);

                .list-group-item {
                    background-color: transparent;
                }

                &::before {
                    content: "";
                    display: block;
                    width: 0.5em;
                    height: 0.5em;
                    position: absolute;
                    left: 7px;
                    top: 44%;
                    background-color: #ffab2c;
                    border-radius: 50%;
                }
            }

            p {
                max-width: 90.5%;
            }
        }
    }
}
</style>