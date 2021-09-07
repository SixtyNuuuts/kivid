<template>
    <section
        id="dashboard-notifications"
        class="kiv-block"
        :class="{ reduced: !$parent.notificationsContent }"
        v-if="
            getDashboardNotifications.length ||
            !patient.birthdate ||
            !patient.gender ||
            !patient.firstname ||
            !patient.lastname ||
            !patient.isVerified
        "
    >
        <div
            class="toggle-content"
            @click="
                $parent.notificationsContent = !$parent.notificationsContent
            "
        >
            <i class="kiv-chevron-down icon-3"></i>
        </div>
        <h2>Notifications</h2>
        <transition name="height">
            <div v-if="$parent.notificationsContent" class="notifications-list">
                <div v-for="(notif, i) in getDashboardNotifications" :key="i">
                    <div
                        v-if="
                            !loading && 'add-patient' === notif.content[0].type
                        "
                        class="notifications-item"
                    >
                        <p class="notification-label">
                            <span v-for="(e, i) in notif.content" :key="i">
                                <span v-if="'text' === e.type">
                                    {{ e.content }}
                                </span>
                                <span v-if="'user' === e.type">
                                    {{ e.content }}
                                </span>
                            </span>
                        </p>
                        <div
                            class="notification-actions"
                            :class="{ disabled: actionInProgress }"
                        >
                            <a
                                class="action-link green"
                                @click="acceptDoctor(notif.id)"
                            >
                                <i class="kiv-accept icon-22"></i>
                                <span>Accepter</span>
                            </a>
                            <a
                                class="action-link red"
                                @click="declineDoctor(notif.id)"
                            >
                                <i class="kiv-decline icon-6"></i>
                                <span>Refuser</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    v-if="!loading && !patient.isVerified"
                    class="notifications-item"
                >
                    <p class="notification-label">
                        Vérifier votre adresse email
                    </p>
                    <div class="notification-actions">
                        <a class="action-link verif-mail" href="#">
                            <i class="fas fa-envelope"></i>
                            <span>Voir email</span>
                        </a>
                    </div>
                </div>
                <div
                    v-if="
                        !loading &&
                        (!patient.birthdate ||
                            !patient.gender ||
                            !patient.firstname ||
                            !patient.lastname)
                    "
                    class="notifications-item"
                >
                    <p class="notification-label">Compléter votre profil</p>
                    <div class="notification-actions">
                        <a
                            class="action-link"
                            :href="`/patient/${this.patient.id}/edit`"
                        >
                            <i class="kiv-pen icon-4"></i>
                            <span>Compléter</span>
                        </a>
                    </div>
                </div>
                <div v-if="loading">
                    <div class="loading-block notifications-item">
                        <p class="loading w-60 notification-label"></p>
                        <div class="loading w-25 notification-actions"></div>
                    </div>
                    <div class="loading-block notifications-item">
                        <p class="loading w-30 notification-label"></p>
                        <div class="loading w-30 notification-actions"></div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import f from "../../services/function";

export default {
    data() {
        return {
            dashboardNotifications: [],
            actionInProgress: false,
            loading: false,
        };
    },
    props: {
        patient: Object,
        csrfTokenAcceptDoctor: String,
        csrfTokenDeclineDoctor: String,
    },
    computed: {
        getDashboardNotifications() {
            return this.dashboardNotifications;
        },
    },
    methods: {
        getDBNotifications() {
            this.loading = true;

            this.axios
                .get(`/${this.patient.id}/get/patient-dashboard-notifications`)
                .then((response) => {
                    this.dashboardNotifications = response.data;

                    this.loading = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    console.log(errorMess);
                    this.loading = false;
                });
        },
        acceptDoctor(notificationId) {
            this.actionInProgress = true;

            this.axios
                .post(`/patient/${this.patient.id}/accept/doctor`, {
                    _token: this.csrfTokenAcceptDoctor,
                    notificationId: notificationId,
                    doctorId: this.patient.doctor.id,
                })
                .then((response) => {
                    f.openSuccesNotification(
                        "Demande d'ajout acceptée",
                        response.data
                    );

                    this.patient.addRequestDoctor = true;

                    this.dashboardNotifications.splice(
                        this.dashboardNotifications.indexOf(
                            this.dashboardNotifications.find(
                                (n) => n.id === notificationId
                            )
                        ),
                        1
                    );

                    this.actionInProgress = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);

                    this.actionInProgress = false;
                });
        },
        declineDoctor(notificationId) {
            this.actionInProgress = true;

            this.axios
                .post(`/patient/${this.patient.id}/decline/doctor`, {
                    _token: this.csrfTokenDeclineDoctor,
                    notificationId: notificationId,
                    doctorId: this.patient.doctor.id,
                })
                .then((response) => {
                    f.openSuccesNotification(
                        "Demande d'ajout refusée",
                        response.data
                    );

                    this.dashboardNotifications.splice(
                        this.dashboardNotifications.indexOf(
                            this.dashboardNotifications.find(
                                (n) => n.id === notificationId
                            )
                        ),
                        1
                    );

                    this.actionInProgress = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);

                    this.actionInProgress = false;
                });
        },
    },
    created() {
        this.getDBNotifications();
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

#dashboard-notifications {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    width: 100%;
    margin-right: 0;
    line-height: 1.3;

    @media (min-width: 650px) {
        margin-bottom: 0;
        width: 49%;
        margin-right: 2rem;
    }

    @media (min-width: 992px) {
        margin-bottom: 2rem;
        width: 100%;
        margin-right: 0;
    }

    .notifications-list {
        .notifications-item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 1.5rem 0;

            &.loading-block {
                > * {
                    border-radius: 0.4rem;
                    height: 1.5rem;
                    margin: 0.2rem;
                }
                .notification-label {
                    &.w-60 {
                        width: 60%;
                    }
                    &.w-30 {
                        width: 30%;
                    }
                }

                .notification-actions {
                    &.w-25 {
                        width: 25%;
                    }
                    &.w-30 {
                        width: 30%;
                    }
                }
            }

            @media (min-width: 650px) {
                flex-direction: column;
                align-items: flex-start;
            }

            @media (min-width: 768px) {
                flex-direction: row;
                align-items: center;
            }

            &:first-child {
                margin-top: 0;
            }

            &:last-child {
                margin-bottom: 0;
            }

            .notification-label {
                margin: 0;
            }

            .notification-actions {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-left: 2rem;

                @media (min-width: 576px) {
                    flex-direction: row;
                    margin-left: 0;
                }

                @media (min-width: 768px) {
                    flex-direction: column;
                    margin-left: 2rem;
                }

                @media (min-width: 1200px) {
                    flex-direction: row;
                }

                .action-link {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.5rem;
                    color: $black;
                    text-decoration: none;
                    transition: all 0.1s;
                    white-space: nowrap;
                    padding-left: 0;
                    cursor: pointer;

                    &.verif-mail {
                        cursor: initial;

                        &:hover {
                            color: $black;
                            transform: none;
                        }

                        i {
                            font-size: 1.5rem;
                            position: relative;
                            top: 0.05rem;
                            margin-right: 0.65rem;
                        }

                        span {
                            text-decoration: none;
                        }
                    }

                    @media (min-width: 768px) {
                        padding-left: 0.5rem;
                    }

                    &:hover {
                        color: darken($black, 5%);
                        transform: translateY(-0.2rem);
                    }

                    &:nth-child(2) {
                        margin-left: 0.8rem;
                        margin-left: -0.1rem;

                        @media (min-width: 576px) {
                            flex-direction: row;
                            margin-left: 0.8rem;
                        }

                        @media (min-width: 768px) {
                            margin-left: -0.1rem;
                        }

                        @media (min-width: 1200px) {
                            margin-left: 0.6rem;
                        }
                    }

                    &.green {
                        color: $green;

                        &:hover {
                            color: darken($green, 5%);
                        }
                    }

                    &.red {
                        color: $red;

                        &:hover {
                            color: darken($red, 5%);
                        }
                    }

                    i {
                        margin-right: 0.5rem;

                        &.kiv-pen {
                            font-size: 1.8rem;
                            position: relative;
                            top: -0.05rem;
                        }

                        &.kiv-accept {
                            font-size: 1.7rem;
                            position: relative;
                            top: -0.05rem;
                        }

                        &.kiv-decline {
                            font-size: 1.95rem;
                            margin-right: 0.3rem;
                        }
                    }

                    span {
                        font-weight: 600;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
