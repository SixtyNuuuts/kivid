<template>
    <div class="navbar">
        <div class="logo" @click="homepage()">
            <img src="../img/logo-kivid-navbar.svg" alt="Logo Kivid" />
        </div>
        <nav v-if="currentUser && 'admin' != currentUserType">
            <ul>
                <li
                    class="dashboard dashboard-icon"
                    v-if="
                        ('doctor' === currentUserType &&
                            currentRoute != doctorDashboardRoute) ||
                        ('patient' === currentUserType &&
                            currentRoute != patientDashboardRoute)
                    "
                    @click="dashboard()"
                >
                    <i class="kiv-dashboard icon-26"></i>
                </li>
                <li
                    v-if="
                        ('doctor' === currentUserType &&
                            currentRoute != doctorDashboardRoute) ||
                        ('patient' === currentUserType &&
                            currentRoute != patientDashboardRoute)
                    "
                    class="dashboard btn-navbar"
                >
                    <vs-button @click="dashboard()">
                        <i class="kiv-dashboard icon-26"></i>
                        Dashboard
                    </vs-button>
                </li>
                <li class="notifications" v-click-outside="hideNotifications">
                    <div
                        @click="openNotifications"
                        id="notif-bell"
                        :class="{
                            active: showNotifications,
                            'has-notifications':
                                this.getNavbarNotifications.find(
                                    (n) => !n.isViewed
                                ),
                            loading: loadingNotif,
                        }"
                    >
                        <i class="kiv-bell icon-2"></i>
                    </div>
                    <transition name="height">
                        <div
                            class="user-notification dropdown-frame"
                            v-show="
                                showNotifications &&
                                getNavbarNotifications.length
                            "
                        >
                            <ul id="user-notif-list">
                                <li
                                    v-for="(notif, i) in getNavbarNotifications"
                                    :key="i"
                                    :class="{ active: !notif.isViewed }"
                                    @mouseover="notif.isViewed = true"
                                >
                                    <div class="notif-icon">
                                        <img
                                            v-if="'prescription' === notif.type"
                                            src="../img/icons/colored/prescription.svg"
                                            alt="Icone d'une prescription"
                                            class="icon-prescription"
                                        />
                                        <img
                                            v-if="
                                                'worksheet-completed' ===
                                                notif.type
                                            "
                                            src="../img/icons/colored/worksheetcompleted.svg"
                                            alt="Icone d'une fiche"
                                            class="icon-fiche"
                                        />
                                        <img
                                            v-if="
                                                'timing-worksheet' ===
                                                notif.type
                                            "
                                            src="../img/icons/colored/clock.svg"
                                            alt="Icone d'une montre / horloge"
                                            class="icon-clock"
                                        />
                                        <img
                                            v-if="'score-rank' === notif.type"
                                            src="../img/icons/colored/confettis.svg"
                                            alt="Icone de confettis"
                                            class="icon-confettis"
                                        />
                                        <img
                                            v-if="
                                                'select-doctor' === notif.type
                                            "
                                            src="../img/icons/colored/user-add.svg"
                                            alt="Icone de confettis"
                                            class="icon-user"
                                        />
                                        <img
                                            v-if="
                                                'accept-doctor' === notif.type
                                            "
                                            src="../img/icons/colored/user-add.svg"
                                            alt="Icone de confettis"
                                            class="icon-user"
                                        />
                                        <img
                                            v-if="
                                                'decline-doctor' === notif.type
                                            "
                                            src="../img/icons/colored/user-decl.svg"
                                            alt="Icone de confettis"
                                            class="icon-user"
                                        />
                                    </div>
                                    <p>
                                        <span>
                                            <span
                                                v-for="(e, i) in notif.content"
                                                :key="i"
                                            >
                                                <span v-if="'text' === e.type">
                                                    {{ e.content }}
                                                </span>
                                                <span v-if="'user' === e.type">
                                                    {{ e.content }}
                                                </span>
                                            </span>
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>
                <li
                    class="user"
                    v-click-outside="hideMenu"
                    :class="{ loading: loadingUser }"
                >
                    <div
                        @click="currentUserMenu = !currentUserMenu"
                        :class="{ active: currentUserMenu }"
                    >
                        <vs-avatar
                            :class="{ loading: loadingUser }"
                            size="26"
                            class="user-avatar"
                            circle
                        >
                            <img
                                id="u-avatar"
                                :src="
                                    currentUser.avatarUrl
                                        ? currentUser.avatarUrl
                                        : '/img/avatar-default.svg'
                                "
                                :alt="`Avatar de ${currentUser.firstname} ${currentUser.lastname}`"
                            />
                        </vs-avatar>
                        <div class="user-name">
                            <div v-if="loadingUser" class="loading-block">
                                <div class="loading"></div>
                            </div>
                            <div v-else>
                                <div
                                    id="u-name"
                                    v-if="
                                        currentUser.firstname ||
                                        currentUser.lastname
                                    "
                                >
                                    {{ currentUser.firstname }}
                                    {{ currentUser.lastname }}
                                </div>
                                <div id="u-name" v-else>
                                    {{ currentUser.email }}
                                </div>
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
                                <li class="md" @click="myProfil()">
                                    <i class="kiv-profil icon-12"></i>
                                    Mon Profil
                                </li>
                                <li
                                    v-if="'patient' === currentUserType"
                                    class="md"
                                    @click="mySubscription()"
                                >
                                    <i class="kiv-subscription icon-20"></i> Mon
                                    Abonnement
                                </li>
                                <li @click="myProfil()" class="desktop">
                                    <i class="kiv-settings icon-16"></i>
                                    Paramètres
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
            <ul v-if="'admin' === currentUserType">
                <li class="dashboard dashboard-icon" @click="dashboard()">
                    <i class="kiv-dashboard icon-26"></i>
                </li>
                <li class="dashboard btn-navbar">
                    <vs-button @click="dashboard()">
                        <i class="kiv-dashboard icon-26"></i>
                        Dashboard
                    </vs-button>
                </li>
                <li class="user" v-click-outside="hideMenu">
                    <div
                        @click="currentUserMenu = !currentUserMenu"
                        :class="{ active: currentUserMenu }"
                    >
                        <vs-avatar size="26" class="user-avatar" circle>
                            <img
                                id="u-avatar"
                                :src="'/img/avatar-default.svg'"
                                :alt="`Avatar de l'admin`"
                            />
                        </vs-avatar>
                        <div class="user-name">
                            <div>
                                {{ currentUser.username }}
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
                                <li @click="logout()">
                                    <i class="kiv-logout icon-13"></i>
                                    Déconnexion
                                </li>
                            </ul>
                        </nav>
                    </transition>
                </li>
            </ul>
            <ul v-else>
                <li class="login dashboard-icon" @click="login()">
                    <i class="kiv-login icon-14"></i>
                </li>
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
            settingsUserEditPath: null,
            homePath: null,
            loginPath: null,
            logoutPath: null,
            adminDashboardPath: null,
            patientDashboardRoute: null,
            patientDashboardPath: null,
            doctorDashboardPath: null,
            doctorDashboardRoute: null,
            csrfTokenReadNotification: null,
            loadingNotif: false,
            loadingUser: false,
        };
    },
    directives: {
        ClickOutside,
    },
    computed: {
        getNavbarNotifications() {
            return this.currentUserNotifications.filter(
                (n) => "dashboard" !== n.type
            );
        },
    },
    methods: {
        getNotifications() {
            this.loadingNotif = true;

            this.axios
                .get(
                    `/${this.currentUserType}/${this.currentUser.id}/get/notifications`
                )
                .then((response) => {
                    this.currentUserNotifications = response.data;

                    this.loadingNotif = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    console.error(errorMess);
                });
        },
        openNotifications() {
            this.showNotifications = !this.showNotifications;
            this.readNotifications();
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
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    console.error(errorMess);
                });
        },
        hideNotifications() {
            this.showNotifications = false;
        },
        hideMenu() {
            this.currentUserMenu = false;
        },
        dashboard() {
            if ("admin" === this.currentUserType) {
                document.location.href = this.adminDashboardPath;
            }

            if ("patient" === this.currentUserType) {
                document.location.href = this.patientDashboardPath;
            }

            if ("doctor" === this.currentUserType) {
                document.location.href = this.doctorDashboardPath;
            }
        },
        myProfil() {
            document.location.href = this.settingsUserEditPath;
        },
        mySubscription() {
            document.location.href = this.settingsSubscriptionPath;
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
    },
    created() {
        const data = JSON.parse(
            document.getElementById("navbar-vueData").innerHTML
        );

        this.homePath = data.homePath;
        this.loginPath = data.loginPath;
        this.currentUser = data.currentUser;

        if (this.currentUser) {
            this.currentUserType = this.currentUser.roles.includes("ROLE_ADMIN")
                ? "admin"
                : this.currentUser.roles.includes("ROLE_PATIENT")
                ? "patient"
                : "doctor";
            this.currentRoute = data.currentRoute;
            this.adminDashboardPath = data.adminDashboardPath;
            this.logoutPath = data.logoutPath;
            this.patientDashboardPath = data.patientDashboardPath;
            this.patientDashboardRoute = data.patientDashboardRoute;
            this.doctorDashboardPath = data.doctorDashboardPath;
            this.doctorDashboardRoute = data.doctorDashboardRoute;
            this.settingsUserEditPath = data.settingsUserEditPath;
            this.settingsSubscriptionPath = data.settingsSubscriptionPath;
            this.csrfTokenReadNotification = data.csrfTokenReadNotification;

            if ("admin" != this.currentUserType) {
                this.getNotifications();
            }
        }
    },
};
</script>

<style lang="scss">
@import "../scss/variables";

.navbar {
    background: $white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.6rem;
    box-shadow: 0px 0.4rem 0.7rem rgba(148, 96, 77, 0.04);
    border-radius: 0 0 2rem 2rem;
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 1111;

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
                color: $black;
                font-size: 1.5rem;
                max-height: 1.65rem;

                &:not(:first-child) {
                    border-left: 1px solid $gray-middle;
                }

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

                        &.kiv-login {
                            font-size: 2.2rem;
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
                    top: 3.4rem;
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
                                top: -0.5rem;
                                right: 1.1rem;
                                border-radius: 50%;
                                display: block;
                                width: 6px;
                                height: 6px;
                                border: 2px solid $white;
                                background: $orange;
                                animation: blink 1.5s linear infinite;
                            }
                        }

                        &:hover,
                        &.active {
                            color: $orange;
                            background-color: rgba(251, 138, 104, 0.1);
                        }

                        &.loading {
                            pointer-events: none;

                            i {
                                opacity: 0.08;
                            }
                        }
                    }

                    .user-notification {
                        min-width: 27.4rem;

                        ul {
                            list-style: none;
                            padding: 0;
                            max-height: 28.8rem;
                            overflow: auto;
                            display: flex;
                            flex-direction: column;

                            li {
                                display: flex;
                                padding: 1rem 1.7rem;
                                transition: all 0.2s;
                                order: 2;

                                &.prio {
                                    order: 1;
                                    padding-top: 1.5rem !important;
                                    padding-bottom: 0.5rem !important;
                                }

                                &:hover {
                                    background: rgba($gray-middle, 0.2);
                                }

                                &:first-child {
                                    padding-top: 1.5rem;
                                }

                                &:last-child {
                                    padding-bottom: 1.5rem;
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
                                            width: 6px;
                                            height: 6px;
                                            min-width: 6px;
                                            min-height: 6px;
                                            background: $orange;
                                            border: 1.1px solid $orange;
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
                                    transition: all 0.2s;

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

                                        &.icon-user {
                                            height: 63%;
                                            top: -0.2rem;
                                            left: 0rem;
                                        }

                                        &.icon-clock {
                                            top: -0.06rem;
                                            left: 0rem;
                                        }
                                    }
                                }

                                p {
                                    margin: 0;
                                    display: flex;
                                    align-items: center;
                                    font-size: 1.4rem;
                                }
                            }
                        }
                    }
                }

                &.user {
                    padding: 0 1.9rem;
                    padding-right: 0;
                    position: relative;

                    &.loading {
                        pointer-events: none;
                        background: transparent;

                        i {
                            color: #f0f0f0;
                        }
                    }

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

                            .loading-block {
                                > * {
                                    border-radius: 0.4rem;
                                    height: 1.5rem;
                                    width: 11rem;
                                }
                            }
                        }

                        &.active {
                            // .user-avatar {
                            //     border: 0.3rem solid $orange;
                            // }

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
                        min-width: 16.5rem;
                        padding: 1rem 2.1rem;

                        > ul {
                            list-style: none;
                            padding: 0;

                            > li {
                                padding: 0.8rem 0;
                                cursor: pointer;
                                transition: all 0.3s;
                                white-space: nowrap;

                                @media (min-width: 576px) {
                                    padding: 0.6rem 0;
                                }

                                &.sm {
                                    @media (min-width: 768px) {
                                        display: none;
                                    }
                                }

                                &.md {
                                    @media (min-width: 850px) {
                                        display: none;
                                    }
                                }

                                &.desktop {
                                    display: none;

                                    @media (min-width: 850px) {
                                        display: list-item;
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

                                    &.kiv-subscription {
                                        font-size: 1.8rem;
                                    }

                                    &.kiv-profil {
                                        font-size: 1.7rem;
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