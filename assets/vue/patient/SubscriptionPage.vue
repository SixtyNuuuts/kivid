<template>
    <div>
        <vs-button
            v-if="!stripeSubscription"
            size="large"
            @click="stripeCheckout(0)"
            ><i class="fe fe-plus-circle"></i>
            Abonnement premium
        </vs-button>
        <div v-if="stripeSubscription">
            <vs-alert v-if="!stripeSubscription.cancel_at_period_end">
                <template #title> Abonnement en cours </template>
                <p>
                    Période de l'abonnement : du
                    <strong>
                        {{
                            formatDate(
                                new Date(
                                    stripeSubscription.current_period_start *
                                        1000
                                )
                            )
                        }}
                    </strong>
                    au
                    <strong>
                        {{
                            formatDate(
                                new Date(
                                    stripeSubscription.current_period_end * 1000
                                )
                            )
                        }}
                    </strong>
                </p>

                <p>
                    Votre abonnement sera automatiquement renouvellé à la fin de
                    la période.
                </p>
            </vs-alert>
            <vs-alert v-if="stripeSubscription.cancel_at_period_end">
                <template #title>
                    Abonnement jusqu'à la fin de la période
                </template>
                <p>
                    Période de l'abonnement : du
                    <strong>
                        {{
                            formatDate(
                                new Date(
                                    stripeSubscription.current_period_start *
                                        1000
                                )
                            )
                        }}
                    </strong>
                    au
                    <strong>
                        {{
                            formatDate(
                                new Date(
                                    stripeSubscription.current_period_end * 1000
                                )
                            )
                        }}
                    </strong>
                </p>

                <p>Votre abonnement sera annulé à la fin de la période</p>
            </vs-alert>
            <vs-button
                v-if="
                    stripeSubscription.customer &&
                    !stripeSubscription.cancel_at_period_end
                "
                size="large"
                @click="
                    stripeCustomerPortalSession(stripeSubscription.customer)
                "
                ><i class="fe fe-settings"></i>
                Annuler votre abonnement
            </vs-button>
            <vs-button
                v-if="
                    stripeSubscription.customer &&
                    stripeSubscription.cancel_at_period_end
                "
                size="large"
                @click="
                    stripeCustomerPortalSession(stripeSubscription.customer)
                "
                ><i class="fe fe-settings"></i>
                Renouveler votre abonnement
            </vs-button>
        </div>
    </div>
</template>

<script>
import f from "../services/function";

export default {
    data() {
        return {
            patient: null,
            stripeSubPlans: null,
            status: null,
            // stripeCheckoutSession: null,
            stripeSubscription: null,
        };
    },
    methods: {
        stripeCheckout(indice) {
            this.axios
                .post(`/${this.patient.id}/subscription/checkout`, {
                    stripeSubPlanId: this.stripeSubPlans[indice].planId,
                    stripeCustomerId: this.stripeSubscription
                        ? this.stripeSubscription.customer
                        : null,
                })
                .then((response) => {
                    window.location.href = response.data;
                })
                .catch((error) => {
                    if (error.response.data) {
                        console.log(error.response.data.detail);
                    }

                    this.openNotification(
                        `<strong>Erreur</strong>`,
                        `Erreur lors du processus d'abonnement`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                });
        },
        stripeCustomerPortalSession(stripeCustomerId) {
            this.axios
                .post(
                    `/${this.patient.id}/subscription/customer-portal-session`,
                    {
                        stripeCustomerId: stripeCustomerId,
                    }
                )
                .then((response) => {
                    window.location.href = response.data;
                })
                .catch((error) => {
                    if (error.response.data) {
                        console.log(error.response.data.detail);
                    }

                    this.openNotification(
                        `<strong>Erreur</strong>`,
                        `Erreur lors du processus de modification d'abonnement`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                });
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
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.stripeSubPlans = data.stripeSubPlans;
        // this.stripeCheckoutSession = data.stripeCheckoutSession;
        this.stripeSubscription = data.stripeSubscription;

        this.status = data.status;

        if (
            this.stripeSubscription &&
            !this.stripeSubscription.cancel_at_period_end
        ) {
            let spanNavbarTopUserStatus =
                document.querySelector(".user-status");
            spanNavbarTopUserStatus.innerText = "Membre premium";
            spanNavbarTopUserStatus.classList.add("premium");
        }

        if ("cancel" === this.status) {
            this.openNotification(
                `<strong>Paiement annulé</strong>`,
                `Le paiement a été annulé`,
                "top-right",
                "primary",
                "<i class='fe fe-alert-circle'></i>"
            );
        }

        if ("success" === this.status) {
            this.openNotification(
                `<strong>Paiement accepté</strong>`,
                `Vous pouvez profiter de votre abonnement`,
                "top-right",
                "success",
                "<i class='fe fe-check-circle'></i>"
            );
        }
    },
};
</script>

<style lang="scss" scoped>
p {
    margin-bottom: 0;

    &:last-child {
        margin-top: 1em;
    }
}
</style>