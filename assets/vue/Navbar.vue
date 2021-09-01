<template>
    <div class="navbar">
        <div class="logo" @click="homepage()">
            <img src="../img/logo-kivid.svg" alt="Logo Kivid" />
        </div>
        <nav v-if="currentUser">
            <ul>
                <li class="dashboard dashboard-icon">
                    <i class="kiv-dashboard icon-26"></i>
                </li>
                <li class="dashboard btn-navbar">
                    <vs-button @click="dashboard()">
                        <i class="kiv-dashboard icon-26"></i>
                        Dashboard
                    </vs-button>
                </li>
                <li class="lexique">
                    <i class="kiv-lexique icon-1"></i>
                </li>
                <li class="notifications" v-click-outside="hideNotifications">
                    <div
                        @click="showNotifications = !showNotifications"
                        :class="{
                            active: showNotifications,
                            'has-notifications':
                                notificationsNavbarCount.length,
                        }"
                    >
                        <i class="kiv-bell icon-2"></i>
                    </div>
                    <transition name="height">
                        <div
                            class="user-notification dropdown-frame"
                            v-if="showNotifications"
                        >
                            <ul>
                                <li class="active">
                                    <div class="notif-icon">
                                        <img
                                            src="../img/icons/colored/prescription.svg"
                                            alt="Icone d'une prescription"
                                            class="icon-prescription"
                                        />
                                    </div>
                                    <p>
                                        Votre kinésithérapeute vous a prescrit
                                        une fiche
                                        <a>"Mobilité"</a>
                                    </p>
                                </li>
                                <li>
                                    <div class="notif-icon">
                                        <img
                                            src="../img/icons/colored/confettis.svg"
                                            alt="Icone de confettis"
                                            class="icon-confettis"
                                        />
                                    </div>
                                    <p>
                                        Vous avez atteint le niveau Super
                                        Patient ! Félicitation !
                                    </p>
                                </li>
                                <li>
                                    <div class="notif-icon">
                                        <img
                                            src="../img/icons/colored/clock.svg"
                                            alt="Icone d'une montre / horloge"
                                            class="icon-clock"
                                        />
                                    </div>
                                    <p>
                                        Plus que quelques heures pour réaliser
                                        vos exercices, je m'y met maintenant !
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>
                <li class="user" v-click-outside="hideMenu">
                    <div
                        @click="currentUserMenu = !currentUserMenu"
                        :class="{ active: currentUserMenu }"
                    >
                        <vs-avatar size="26" class="user-avatar" circle>
                            <img
                                :src="
                                    currentUser.avatarUrl
                                        ? currentUser.avatarUrl
                                        : '../img/avatar-default.svg'
                                "
                                :alt="`Avatar de ${currentUser.firstname} ${currentUser.lastname}`"
                            />
                        </vs-avatar>
                        <div class="user-name">
                            <div>
                                {{ currentUser.firstname }}
                                {{ currentUser.lastname }}
                            </div>
                            <i class="kiv-chevron-down icon-3"></i>
                        </div>
                    </div>
                    <transition name="height">
                        <nav
                            class="user-menu dropdown-frame"
                            v-if="currentUserMenu"
                        >
                            <ul>
                                <li @click="profil()">
                                    <i class="kiv-profil icon-12"></i>
                                    Profil
                                </li>
                                <li @click="settings()">
                                    <i class="kiv-settings icon-16"></i>
                                    Paramètres
                                </li>
                                <li class="sm" @click="lexique()">
                                    <i class="kiv-lexique icon-1"></i>
                                    Lexique
                                </li>
                                <li @click="help()">
                                    <i class="kiv-help icon-15"></i>
                                    Aide
                                </li>
                                <hr />
                                <li @click="logout()">
                                    <i class="kiv-logout icon-13"></i>
                                    Déconnexion
                                </li>
                            </ul>
                        </nav>
                    </transition>
                </li>
            </ul>
        </nav>
        <nav v-else>
            <ul>
                <li class="dashboard btn-navbar">
                    <vs-button @click="login()">
                        <i class="kiv-login icon-14"></i>
                        Se connecter
                    </vs-button>
                </li>
            </ul>
        </nav>
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
            currentRoute: null,
            currentUserMenu: false,
            showNotifications: false,
            currentUserNotifications: [],
            homePath: null,
            loginPath: null,
            logoutPath: null,
            adminDashboardPath: null,
            patientDashboardRoute: null,
            patientDashboardPath: null,
            // patientWorksheetsRoute: null,
            // patientWorksheetsPath: null,
            patientEditPath: null,
            doctorDashboardPath: null,
            doctorDashboardRoute: null,
            doctorPatientsPath: null,
            doctorPatientsRoute: null,
            doctorWorksheetsPath: null,
            doctorWorksheetsRoute: null,
            doctorEditPath: null,
            csrfTokenReadNotification: null,
        };
    },
    directives: {
        ClickOutside,
    },
    computed: {
        notificationsNavbar() {
            return this.currentUserNotifications.filter(
                (n) => "dashboard" !== n.type
            );
        },
        notificationsNavbarCount() {
            return this.currentUserNotifications.filter(
                (n) => false === n.isViewed && "dashboard" !== n.type
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
                    // console.log(response.data);
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
        hideMenu() {
            this.currentUserMenu = false;
        },
        dashboard() {
            console.log(this.currentUserType);
            if ("admin" === this.currentUser) {
                document.location.href = this.adminDashboardPath;
            }

            if ("patient" === this.currentUserType) {
                document.location.href = this.patientDashboardPath;
            }

            if ("doctor" === this.currentUserType) {
                document.location.href = this.doctorDashboardPath;
            }
        },
        settings() {
            if ("patient" === this.currentUserType) {
                document.location.href = this.patientEditPath;
            }

            if ("doctor" === this.currentUserType) {
                document.location.href = this.doctorEditPath;
            }
        },
        homepage() {
            document.location.href = this.homePath;
        },
        login() {
            document.location.href = this.loginPath;
        },
        logout() {
            document.location.href = this.logoutPath;
        },
        timeForNotification(notificationDate) {
            return f.timeForNotification(notificationDate);
        },
        formatDate(datetime) {
            return f.formatDate(datetime);
        },
    },
    created() {
        const data = JSON.parse(
            document.getElementById("navbar-vueData").innerHTML
        );

        this.homePath = data.homePath;
        this.loginPath = data.loginPath;
        this.currentUser = data.currentUser;

        if (this.currentUser) {
            this.currentUserType = this.currentUser.roles.includes(
                "ROLE_PATIENT"
            )
                ? "patient"
                : "doctor";
            this.currentRoute = data.currentRoute;
            this.adminDashboardPath = data.adminDashboardPath;
            this.logoutPath = data.logoutPath;
            this.patientDashboardPath = data.patientDashboardPath;
            this.patientDashboardRoute = data.patientDashboardRoute;
            // this.patientWorksheetsPath = data.patientWorksheetsPath;
            // this.patientWorksheetsRoute = data.patientWorksheetsRoute;
            this.patientEditPath = data.patientEditPath;
            this.doctorDashboardPath = data.doctorDashboardPath;
            this.doctorDashboardRoute = data.doctorDashboardRoute;
            this.doctorWorksheetsPath = data.doctorWorksheetsPath;
            this.doctorWorksheetsRoute = data.doctorWorksheetsRoute;
            this.doctorPatientsPath = data.doctorPatientsPath;
            this.doctorPatientsRoute = data.doctorPatientsRoute;
            this.doctorEditPath = data.doctorEditPath;
            this.csrfTokenReadNotification = data.csrfTokenReadNotification;

            this.getNotifications();
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.navbar {
    background: $white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.6rem;
    box-shadow: 0px 0.4rem 0.7rem rgba(78, 25, 8, 0.02);
    border-radius: 0 0 2rem 2rem;
    font-weight: 600;
    position: relative;
    z-index: 10;

    @media (min-width: 576px) {
        padding: 1.25rem 3rem;
    }

    .logo {
        width: 11.7rem;
        min-width: 6rem;
        cursor: pointer;
    }

    > nav {
        > ul {
            display: flex;
            align-items: center;
            list-style: none;
            margin: 0;

            > li {
                display: flex;
                align-items: center;
                padding: 0 2rem;
                border-left: 1px solid $gray-middle;
                color: $black;
                font-size: 1.5rem;
                max-height: 1.65rem;
                border-left: 1px solid $gray-middle;

                &:last-child {
                    padding-right: 0;
                }

                &.dashboard {
                    border-left: none;
                }

                &.dashboard-icon {
                    display: flex;

                    i {
                        font-size: 1.8rem;
                        cursor: pointer;

                        &:hover {
                            color: $orange;
                        }
                    }

                    @media (min-width: 768px) {
                        display: none;
                    }
                }

                &.btn-navbar {
                    display: none;

                    @media (min-width: 768px) {
                        display: flex;
                    }
                }

                &.lexique {
                    padding: 0 1.9rem;
                    display: none;

                    @media (min-width: 768px) {
                        display: flex;
                    }

                    i {
                        font-size: 1.8rem;
                        position: relative;
                        top: -0.05rem;
                        cursor: pointer;

                        &:hover {
                            color: $orange;
                        }
                    }
                }

                .dropdown-frame {
                    position: absolute;
                    z-index: 1;
                    top: 2.6rem;
                    right: -0.2rem;
                    background: $white;
                    border: 1px solid $gray-middle;
                    border-radius: 0.5rem;
                    font-size: 1.5rem;
                    box-shadow: 0px 1.5rem 3rem rgba(78, 25, 8, 0.15);
                    overflow: hidden;

                    @media (min-width: 576px) {
                        font-size: 1.4rem;
                    }
                }

                &.notifications {
                    padding: 0 1.1rem;
                    position: relative;

                    > div:not(.dropdown-frame) {
                        font-size: 1.9rem;
                        width: 3rem;
                        height: 2.8rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        cursor: pointer;
                        transition: all 0.2s;

                        &.has-notifications {
                            &:after {
                                content: "";
                                position: absolute;
                                top: -0.4rem;
                                right: 1.2rem;
                                border-radius: 50%;
                                display: block;
                                width: 0.7rem;
                                height: 0.7rem;
                                background: $orange;
                                animation: blink 1.5s linear infinite;
                            }
                        }

                        &:hover,
                        &.active {
                            color: $orange;
                            background-color: rgba(251, 138, 104, 0.1);
                        }
                    }

                    .user-notification {
                        min-width: 28rem;
                        padding: 1rem 0;

                        ul {
                            list-style: none;
                            padding: 0;

                            li {
                                display: flex;
                                padding: 1rem 1.8rem;
                                transition: all 0.2s;
                                &:hover {
                                    background: rgba($gray-middle, 0.2);
                                }

                                &.active {
                                    font-weight: 700;

                                    .notif-icon {
                                        background: rgba($orange, 0.25);

                                        &:after {
                                            content: "";
                                            position: absolute;
                                            top: 0.1rem;
                                            right: 0.1rem;
                                            border-radius: 50%;
                                            display: block;
                                            width: 0.8rem;
                                            height: 0.8rem;
                                            background: $orange;
                                        }
                                    }
                                }

                                .notif-icon {
                                    background: $gray-light;
                                    position: relative;
                                    border-radius: 50%;
                                    padding: 0rem;
                                    width: 3.6rem;
                                    height: 3.6rem;
                                    min-width: 3.6rem;
                                    max-height: 3.6rem;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    margin-right: 1.1rem;

                                    img {
                                        height: 60%;
                                        position: relative;
                                        top: -0.1rem;
                                        left: 0.1rem;

                                        &.icon-prescription {
                                            left: 0.15rem;
                                        }

                                        &.icon-confettis {
                                            height: 65%;
                                        }

                                        &.icon-clock {
                                            top: -0.06rem;
                                            left: 0rem;
                                        }
                                    }
                                }

                                p {
                                    margin: 0;
                                }
                            }
                        }
                    }
                }

                &.user {
                    padding: 0 1.9rem;
                    padding-right: 0;
                    position: relative;

                    > div {
                        display: flex;
                        cursor: pointer;

                        @media (min-width: 576px) {
                            .user-avatar {
                                margin-right: 1rem;
                            }
                        }

                        .user-name {
                            display: none;
                            align-items: center;
                            font-size: 1.45rem;
                            white-space: nowrap;

                            i {
                                margin-left: 0.9rem;
                                font-size: 1rem;
                                margin-top: 0.2rem;
                                transition: transform 0.2s;
                            }

                            @media (min-width: 576px) {
                                display: flex;
                            }
                        }

                        &.active {
                            .user-avatar {
                                border: 0.3rem solid $orange;
                            }

                            @media (min-width: 576px) {
                                .user-avatar {
                                    border: none;
                                }
                            }

                            .user-name {
                                i {
                                    transform: rotate(180deg);
                                }
                            }
                        }
                    }

                    .user-menu {
                        min-width: 15.5rem;
                        padding: 1rem 2.1rem;

                        > ul {
                            list-style: none;
                            padding: 0;

                            > li {
                                padding: 0.8rem 0;
                                cursor: pointer;
                                transition: all 0.3s;

                                @media (min-width: 576px) {
                                    padding: 0.6rem 0;
                                }

                                &.sm {
                                    @media (min-width: 768px) {
                                        display: none;
                                    }
                                }

                                &:hover {
                                    color: $orange;
                                }

                                i {
                                    margin-right: 0.5rem;
                                    font-size: 1.6rem;
                                    position: relative;
                                    top: 0.2rem;

                                    &.kiv-help {
                                        font-size: 1.8rem;
                                    }

                                    &.kiv-logout {
                                        font-size: 1.6rem;
                                        margin-left: 0.2rem;
                                        margin-right: 0.4rem;
                                    }
                                }
                            }
                        }

                        hr {
                            display: block;
                            height: 0.1rem;
                            border: 0;
                            border-top: 0.1rem solid #e7dfcd;
                            margin: 1rem 0;
                            margin-bottom: 0.7rem;
                            padding: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>