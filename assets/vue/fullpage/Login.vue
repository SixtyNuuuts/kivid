<template>
    <div class="container fullpage">
        <div class="logo">
            <img src="../../img/logo-kivid.svg" alt="Logo Kivid" />
        </div>

        <section id="login" class="kiv-block">
            <h2 v-if="userType === 'patient'">Connexion</h2>
            <h2 v-if="userType === 'doctor'">Connexion praticien</h2>
            <form
                class="login-form"
                @submit="checkForm"
                action="/connexion"
                method="post"
            >
                <vs-input
                    v-model="email"
                    label-placeholder="Email"
                    autocomplete="email"
                    type="email"
                    required
                    name="login_form[email]"
                >
                </vs-input>

                <vs-input
                    type="password"
                    name="login_form[password]"
                    autocomplete="current-password"
                    v-model="password"
                    label-placeholder="Mot de passe"
                    :visiblePassword="hasVisiblePassword"
                    icon-after
                    required
                    @click-icon="hasVisiblePassword = !hasVisiblePassword"
                >
                    <template #icon>
                        <i v-if="!hasVisiblePassword" class="fas fa-eye"></i>
                        <i v-else class="fas fa-eye-slash"></i>
                    </template>
                </vs-input>

                <input
                    type="hidden"
                    name="login_form[_token]"
                    v-model="csrfTokenLogin"
                />

                <a class="forget-password" @click="forgotPassword"
                    >Mot de passe oublié ?</a
                >

                <div class="btn-container">
                    <vs-button class="w-100" type="submit"
                        >Se connecter</vs-button
                    >
                </div>
                <div class="sign-up">
                    Vous n'avez pas encore de compte ?
                    <a @click="register">S'inscrire</a>
                </div>
            </form>

            <div class="divider">
                <div class="divider-text">ou</div>
            </div>

            <div class="btn-container social-login">
                <vs-button class="w-100" @click="loginOauth('facebook')">
                    Se connecter avec <i class="fab fa-facebook-f"></i
                ></vs-button>

                <vs-button class="w-100" @click="loginOauth('google')"
                    >Se connecter avec <i class="fab fa-google"></i
                ></vs-button>
            </div>
        </section>
    </div>
</template>

<script>
import f from "../services/function";
import Vue from "vue";

export default {
    data() {
        return {
            error: null,
            getLastUsername: null,
            csrfTokenLogin: null,
            userType: null,
            password: "",
            email: "",
            hasVisiblePassword: false,
        };
    },
    methods: {
        checkForm(e) {
            if (this.email && this.password) {
                return true;
            }
            e.preventDefault();
        },
        loginOauth(social) {
            document.location.href = `/oauth/connect/${this.userType}/${social}`;
        },
        register() {
            if ("doctor" === this.userType) {
                document.location.href = `/inscription/praticien`;
            } else {
                document.location.href = `/inscription`;
            }
        },
        forgotPassword() {
            document.location.href = `/reset-password`;
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");
        document.body.classList.add("animated");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.error = data.error;
        this.getLastUsername = data.getLastUsername;
        this.userType = data.userType;
        this.csrfTokenLogin = data.csrfTokenLogin;

        if (this.error) {
            f.openErrorNotificationStay("Erreur", this.error);
        }

        if (this.getLastUsername) {
            this.email = this.getLastUsername;
        }
    },
};
</script>
