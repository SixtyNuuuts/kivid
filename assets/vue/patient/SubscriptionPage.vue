<template>
    <div>
        <stripe-checkout
            ref="checkoutRef"
            mode="subscription"
            :pk="stripePublicKey"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
            @loading="(v) => (loading = v)"
        />
        <button @click="submit">Abonnement premium</button>
        <div v-if="stripeCheckoutSession">{{ stripeCheckoutSession }}</div>
    </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
    components: {
        StripeCheckout,
    },
    data() {
        return {
            patient: null,
            loading: false,
            lineItems: [
                {
                    price: "price_1JO7HmC71RxKshwfqOiGi10v", // The id of the recurring price you created in your Stripe dashboard
                    quantity: 1,
                },
            ],
            successURL:
                "https://localhost:8000/patient/3/subscription/success?session_id={CHECKOUT_SESSION_ID}",
            cancelURL: "https://localhost:8000/patient/3/subscription",
            stripePublicKey: null,
            stripeCheckoutSession: null,
            status: null,
        };
    },
    methods: {
        submit() {
            // You will be redirected to Stripe's secure checkout page
            this.$refs.checkoutRef.redirectToCheckout();
        },
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.stripePublicKey = data.stripePublicKey;
        this.stripeCheckoutSession = data.stripeCheckoutSession;
        this.status = data.status;
    },
};
</script>
