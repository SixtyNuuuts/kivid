<template>
    <section
        id="dashboard-notifications"
        class="kiv-block"
        :class="{ reduced: !$parent.myDBNotificationsContent }"
        v-if="
            getDashboardNotifications.length ||
            !patient.birthdate ||
            !patient.gender ||
            !patient.firstname ||
            !patient.lastname ||
            !patient.isVerified
        "
    >
        <button
            class="toggle-content"
            @click="
                $parent.myDBNotificationsContent =
                    !$parent.myDBNotificationsContent
            "
        >
            <i class="kiv-chevron-down icon-3"></i>
        </button>
        <h2>Notifications</h2>
        <transition name="height">
            <div
                v-if="$parent.myDBNotificationsContent"
                class="notifications-list"
            >
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
                    <div
                        class="notification-actions"
                        :class="{ disabled: actionInProgress }"
                    >
                        <a
                            class="action-link verif-mail"
                            @click="resendVerifEmail()"
                        >
                            <i class="fas fa-envelope"></i>
                            <span>Renvoyer lien</span>
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
                        <a class="action-link" :href="`/settings/user/edit`">
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
                .get(
                    `/patient/${this.patient.id}/get/patient-dashboard-notifications`
                )
                .then((response) => {
                    this.dashboardNotifications = response.data;

                    this.loading = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    console.error(errorMess);
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
                    f.openSuccessNotification(
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
                    f.openSuccessNotification(
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
        resendVerifEmail() {
            this.actionInProgress = true;

            this.axios
                .get(`/patient/${this.patient.id}/resend/verify-email`)
                .then((response) => {
                    f.openSuccessNotification(
                        "E-mail de vérification envoyé",
                        response.data
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

<style lang="scss">
#dashboard-notifications {
    grid-area: mydashboardnotif;
}
</style>