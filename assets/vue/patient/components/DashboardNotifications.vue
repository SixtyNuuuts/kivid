<template>
    <div>
        <vs-alert v-if="!patient.isVerified">
            <template #icon>
                <i class="fe fe-info"></i>
            </template>
            <template #title> Bienvenue sur Kivid ! </template>
            <span>
                Veuillez tout d'abord cliquer sur le lien de vérification que
                nous vous avons envoyé par e-mail à l'adresse
                <strong>{{ patient.email }}</strong
                >.
            </span>
        </vs-alert>
        <div v-if="dashboardNotifications.length" class="dashboard-notif">
            <div v-for="(notif, i) in dashboardNotifications" :key="i">
                <div v-if="'add-patient' === notif.content[0].type">
                    <vs-alert v-if="null === patient.doctorAddRequest">
                        <template #icon>
                            <i class="fe fe-info"></i>
                        </template>
                        <span v-for="(e, i) in notif.content" :key="i">
                            <span v-if="'user' === e.type">
                                <strong>{{ e.content }}</strong>
                            </span>
                            <span v-if="'text' === e.type">
                                {{ e.content }}
                            </span>
                        </span>
                        <a class="link" @click="acceptAddRequest(notif.id)">
                            Accepter
                        </a>
                        <a class="link" @click="declineAddRequest(notif.id)">
                            Refuser
                        </a>
                    </vs-alert>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardNotifications",
    data() {
        return {
            dashboardNotifications: [],
            loadingDashboardNotifications: null,
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
            this.loadingDashboardNotifications = this.$vs.loading({
                text: "chargement",
                type: "border",
            });

            this.axios
                .get(`/${this.patient.id}/get/patient-dashboard-notifications`)
                .then((response) => {
                    this.dashboardNotifications = response.data;

                    this.loadingDashboardNotifications.close();
                    this.loadingDashboardNotifications = null;
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response.data.detail);
                    }

                    this.loadingDashboardNotifications.close();
                    this.loadingDashboardNotifications = null;
                });
        },
        acceptAddRequest(notificationId) {
            this.patient.doctorAddRequest = true;

            this.axios
                .post(`/patient/${this.patient.id}/accept/add-request`, {
                    _token: this.csrfTokenAcceptAddRequest,
                    notificationId: notificationId,
                })
                .then((response) => {
                    this.openNotification(
                        `<strong>Demande d'ajout acceptée</strong>`,
                        `Vous avez accepté la demande d'ajout de 
                        <strong>${this.patient.doctor.firstname} ${this.patient.doctor.lastname}</strong>`,
                        "top-right",
                        "success",
                        "<i class='fe fe-check-circle'></i>"
                    );

                    this.patient.doctorAddRequest = true;
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response.data.detail);
                    }

                    this.openNotification(
                        `<strong>Erreur</strong>`,
                        `${error.response.data}`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                });
        },
        declineAddRequest(notificationId) {
            this.axios
                .post(`/patient/${this.patient.id}/decline/add-request`, {
                    _token: this.csrfTokenDeclineAddRequest,
                    notificationId: notificationId,
                })
                .then((response) => {
                    this.openNotification(
                        `<strong>Demande d'ajout refusée</strong>`,
                        `Vous avez refusé la demande d'ajout de 
                        <strong>${this.patient.doctor.firstname} ${this.patient.doctor.lastname}</strong>`,
                        "top-right",
                        "success",
                        "<i class='fe fe-check-circle'></i>"
                    );

                    this.patient.doctorAddRequest = false;
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response.data.detail);
                    }

                    this.openNotification(
                        `<strong>Erreur</strong>`,
                        `${error.response.data}`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                });
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
        this.getDashboardNotifications();
    },
};
</script>

<style lang="scss" scoped>
.vs-alert {
    margin-bottom: 1em;

    .link {
        cursor: pointer;
        font-weight: 600;
        margin-left: 0.5em;
    }
}

.dashboard-notif {
    margin-bottom: 2em;

    a {
        margin-right: 0.5em;
    }
}
</style>
