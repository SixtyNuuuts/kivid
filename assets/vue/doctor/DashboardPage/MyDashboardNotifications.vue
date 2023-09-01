<template>
    <section
        id="dashboard-notifications"
        class="kiv-block"
        :class="{ reduced: !$parent.myDBNotificationsContent }"
        v-if="
            !doctor.city ||
            !doctor.gender ||
            !doctor.firstname ||
            !doctor.lastname ||
            !doctor.isVerified
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
                <div
                    v-if="!loading && !doctor.isVerified"
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
                        (!doctor.city ||
                            !doctor.gender ||
                            !doctor.firstname ||
                            !doctor.lastname)
                    "
                    class="notifications-item"
                >
                    <p class="notification-label">Compléter votre profil</p>
                    <div class="notification-actions">
                        <a class="action-link" :href="`/parametres`">
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
            actionInProgress: false,
            loading: false,
        };
    },
    props: {
        doctor: Object,
    },
    methods: {
        resendVerifEmail() {
            this.actionInProgress = true;

            this.axios
                .get(`/doctor/${this.doctor.id}/resend/verify-email`)
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
};
</script>

<style lang="scss">
@import "../../../scss/variables";

#dashboard-notifications {
    grid-area: mydashboardnotif;
    margin-bottom: 0;
    width: 100%;

    margin-top: 1.8rem;
    margin-bottom: 0;

    @media (min-width: 799px) {
        margin-top: 2rem;
        margin-bottom: 0;
    }

    @media (min-width: 1100px) {
        margin-top: 0;
        margin-bottom: 2rem;
    }

    @media (min-width: 650px) {
        .notifications-list .notifications-item {
            flex-direction: row;
            align-items: center;
        }
    }
}
</style>