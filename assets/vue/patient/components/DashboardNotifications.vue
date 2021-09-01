<template>
    <section id="dashboard-notifications" class="kiv-block">
        <h2>Notifications</h2>
        <div class="notifications-list">
            <div>
                <p class="notification-label">Vérifier votre adresse email</p>
                <div class="notification-actions">
                    <a class="action-link" href="#">
                        <i class="kiv-pen icon-4"></i>
                        <span>Compléter</span>
                    </a>
                </div>
            </div>
            <div>
                <p class="notification-label">
                    Un praticien (Jérome Doe) vous a ajouté
                </p>
                <div class="notification-actions">
                    <a class="action-link green" href="#">
                        <i class="kiv-accept icon-22"></i>
                        <span>Accepter</span>
                    </a>
                    <a class="action-link red" href="#">
                        <i class="kiv-decline icon-6"></i>
                        <span>Refuser</span>
                    </a>
                </div>
            </div>
            <div>
                <p class="notification-label">Compléter votre profil</p>
                <div class="notification-actions">
                    <a class="action-link" href="#">
                        <i class="kiv-pen icon-4"></i>
                        <span>Compléter</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            dashboardNotifications: [],
        };
    },
    props: {
        patient: Object,
        csrfTokenAcceptAddRequest: String,
        csrfTokenDeclineAddRequest: String,
    },
    computed: {
        dashboardNotificationsList() {
            return dashboardNotifications;
        },
    },
    methods: {
        getDashboardNotifications() {
            this.axios
                .get(`/${this.patient.id}/get/patient-dashboard-notifications`)
                .then((response) => {
                    this.dashboardNotifications = response.data;
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response.data.detail);
                    }
                });
        },
        acceptAddRequest(notificationId) {
            this.axios
                .post(`/patient/${this.patient.id}/accept/add-request`, {
                    _token: this.csrfTokenAcceptAddRequest,
                    notificationId: notificationId,
                })
                .then((response) => {
                    f.openSuccesNotification(
                        "Demande d'ajout acceptée",
                        `Vous avez accepté la demande d'ajout de 
                        <strong>${this.patient.doctor.firstname} ${this.patient.doctor.lastname}</strong>`
                    );
                })
                .catch((error) => {
                    f.openErrorNotification("Erreur", error.response.data);
                });
        },
        declineAddRequest(notificationId) {
            this.axios
                .post(`/patient/${this.patient.id}/decline/add-request`, {
                    _token: this.csrfTokenDeclineAddRequest,
                    notificationId: notificationId,
                })
                .then((response) => {
                    f.openSuccesNotification(
                        "Demande d'ajout refusée",
                        `Vous avez refusé la demande d'ajout de 
                        <strong>${this.patient.doctor.firstname} ${this.patient.doctor.lastname}</strong>`
                    );
                })
                .catch((error) => {
                    f.openErrorNotification("Erreur", error.response.data);
                });
        },
    },
    created() {
        this.getDashboardNotifications();
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

#dashboard-notifications {
    font-size: 1.4rem;

    .notifications-list {
        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1.5rem 0;

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

                .action-link {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.5rem;
                    color: $black;
                    text-decoration: none;
                    transition: all 0.15s;
                    position: relative;
                    white-space: nowrap;

                    &:hover {
                        color: darken($black, 5%);
                    }

                    &:nth-child(2) {
                        margin-left: 0.6rem;
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
