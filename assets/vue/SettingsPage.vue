<template>
    <div class="container nopadding" id="settings">
        <header>
            <div>
                <h1>Paramètres</h1>
                <p>
                    {{ currentUser.email }}
                </p>
            </div>
            <a @click="logout()">
                <i class="kiv-logout icon-13"></i>
                Déconnexion
            </a>
        </header>
        <main>
            <section id="menu" class="kiv-block">
                <h3>Général</h3>
                <ul>
                    <li
                        @click="activeTab = '1'"
                        :class="{ active: activeTab === '1' }"
                    >
                        Mon Profil
                    </li>
                </ul>
                <h3 v-if="'patient' === userType">Facturation</h3>
                <ul v-if="'patient' === userType">
                    <li
                        @click="activeTab = '2'"
                        :class="{ active: activeTab === '2' }"
                    >
                        Mon Abonnement
                    </li>
                </ul>
            </section>
            <transition name="fade">
                <section
                    v-if="activeTab === '1'"
                    id="my-profil"
                    class="kiv-block"
                >
                    <h2>Mon Profil</h2>
                    <div class="edit-form">
                        <div>
                            <div>
                                <vs-select
                                    v-model="currentUser.gender"
                                    placeholder="Civilité"
                                >
                                    <vs-option label="Inconnu" value="0"
                                        >Inconnu</vs-option
                                    >
                                    <vs-option label="M." value="1"
                                        >M.</vs-option
                                    >
                                    <vs-option label="Mme" value="2"
                                        >Mme</vs-option
                                    >
                                </vs-select>

                                <vs-input
                                    v-model="currentUser.firstname"
                                    label-placeholder="Prénom"
                                    type="text"
                                >
                                </vs-input>

                                <vs-input
                                    v-model="currentUser.lastname"
                                    label-placeholder="Nom"
                                    type="text"
                                >
                                </vs-input>
                            </div>

                            <div id="current-avatar">
                                <vs-avatar
                                    size="150"
                                    class="user-avatar"
                                    circle
                                >
                                    <img
                                        :src="
                                            currentUser.avatarUrl
                                                ? currentUser.avatarUrl
                                                : '/img/avatar-default.svg'
                                        "
                                        :alt="`Avatar de ${currentUser.firstname} ${currentUser.lastname}`"
                                    />
                                </vs-avatar>
                                <div>
                                    <input
                                        type="file"
                                        @change="uploadFile"
                                        id="avatar-upload-btn"
                                        ref="file"
                                        hidden
                                    />
                                    <label for="avatar-upload-btn">
                                        <i class="fas fa-image"></i> Choisir une
                                        image
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <vs-input
                                v-if="'patient' === userType"
                                class="birthdate"
                                type="date"
                                v-model="currentUserBirthdateFormated"
                                label="Date de naissance"
                            />
                            <vs-input
                                :danger="validationMessage.email != null"
                                v-model="currentUser.email"
                                @keyup="validationEmail"
                                label-placeholder="Email"
                                autocomplete="email"
                                type="email"
                                icon-after
                                :class="{
                                    error:
                                        validationMessage.email &&
                                        currentUser.email,
                                }"
                            >
                                <template
                                    v-if="
                                        validationMessage.email &&
                                        currentUser.email
                                    "
                                    #icon
                                >
                                    <i class="kiv-error error icon-24"></i>
                                </template>

                                <template
                                    v-if="
                                        validationMessage.email &&
                                        currentUser.email
                                    "
                                    #message-danger
                                >
                                    {{ validationMessage.email }}
                                </template>
                            </vs-input>
                        </div>

                        <div v-if="'doctor' === userType" class="doctor-city">
                            <vs-input
                                v-model="currentUser.entityName"
                                label-placeholder="Cabinet"
                                type="text"
                            >
                            </vs-input>

                            <vs-input
                                v-model="currentUser.street"
                                label-placeholder="Rue"
                                type="text"
                            >
                            </vs-input>

                            <vs-input
                                v-model="currentUser.city"
                                label-placeholder="Ville"
                                type="text"
                            >
                            </vs-input>
                        </div>

                        <h4>Modifier votre mot de passe</h4>
                        <div class="passwords">
                            <vs-input
                                type="password"
                                autocomplete="current-password"
                                v-model="newPass.plainPassword"
                                label-placeholder="Nouveau mot de passe"
                                :visiblePassword="hasVisiblePassword"
                                icon-after
                                @keyup="validationPassword"
                                required
                                @click-icon="
                                    hasVisiblePassword = !hasVisiblePassword
                                "
                                :progress="getSecurePassProgress"
                            >
                                <template #icon>
                                    <i
                                        v-if="!hasVisiblePassword"
                                        class="fas fa-eye"
                                    ></i>
                                    <i v-else class="fas fa-eye-slash"></i>
                                </template>

                                <template
                                    v-if="getSecurePassProgress >= 100"
                                    #message-success
                                >
                                    Mot de passe sécurisé
                                </template>
                            </vs-input>
                            <vs-input
                                type="password"
                                v-model="newPass.passwordConfirm"
                                label-placeholder="Confirmation du nouveau mdp"
                                :visiblePassword="hasVisiblePasswordConfirm"
                                icon-after
                                @keyup="validationPassword"
                                required
                                @click-icon="
                                    hasVisiblePasswordConfirm =
                                        !hasVisiblePasswordConfirm
                                "
                                :class="{
                                    error:
                                        validationMessage.password &&
                                        newPass.plainPassword &&
                                        newPass.passwordConfirm,
                                }"
                            >
                                <template #icon>
                                    <i
                                        v-if="!hasVisiblePasswordConfirm"
                                        class="fas fa-eye"
                                    ></i>
                                    <i v-else class="fas fa-eye-slash"></i>
                                </template>

                                <template
                                    v-if="
                                        validationMessage.password &&
                                        newPass.plainPassword &&
                                        newPass.passwordConfirm
                                    "
                                    #message-danger
                                >
                                    {{ validationMessage.password }}
                                </template>
                            </vs-input>
                        </div>

                        <div
                            class="btn-container"
                            :class="{ disabled: btnLoadingEdit }"
                        >
                            <vs-button
                                :disabled="
                                    btnLoadingEdit ||
                                    validationMessage.email ||
                                    validationMessage.password ||
                                    !currentUser.email ||
                                    (newPass.plainPassword !== '' &&
                                        !newPass.passwordConfirm === '')
                                "
                                :loading="btnLoadingEdit"
                                class="w-100"
                                type="submit"
                                @click="validEdition"
                                >Valider les modifications</vs-button
                            >
                        </div>
                    </div>
                </section>
                <section
                    v-if="'patient' === userType && activeTab === '2'"
                    id="my-subscription"
                    class="kiv-block"
                >
                    <h2>Mon Abonnement</h2>
                    <div>
                        <vs-button
                            v-if="!stripeSubscription"
                            size="large"
                            @click="stripeCheckout(0)"
                            ><i class="fe fe-plus-circle"></i>
                            Abonnement premium
                        </vs-button>
                        <div v-if="stripeSubscription">
                            <vs-alert
                                v-if="!stripeSubscription.cancel_at_period_end"
                            >
                                <template #title>
                                    Abonnement en cours
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
                                                    stripeSubscription.current_period_end *
                                                        1000
                                                )
                                            )
                                        }}
                                    </strong>
                                </p>

                                <p>
                                    Votre abonnement sera automatiquement
                                    renouvellé à la fin de la période.
                                </p>
                            </vs-alert>
                            <vs-alert
                                v-if="stripeSubscription.cancel_at_period_end"
                            >
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
                                                    stripeSubscription.current_period_end *
                                                        1000
                                                )
                                            )
                                        }}
                                    </strong>
                                </p>

                                <p>
                                    Votre abonnement sera annulé à la fin de la
                                    période
                                </p>
                            </vs-alert>
                            <vs-button
                                v-if="
                                    stripeSubscription.customer &&
                                    !stripeSubscription.cancel_at_period_end
                                "
                                size="large"
                                @click="
                                    stripeCustomerPortalSession(
                                        stripeSubscription.customer
                                    )
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
                                    stripeCustomerPortalSession(
                                        stripeSubscription.customer
                                    )
                                "
                                ><i class="fe fe-settings"></i>
                                Renouveler votre abonnement
                            </vs-button>
                        </div>
                    </div>
                </section>
            </transition>
        </main>
    </div>
</template>

<script>
import Vue from "vue";
import f from "./services/function";
import moment from "moment";

export default {
    data() {
        return {
            activeTab: "1",
            currentUser: null,
            validationMessage: {
                email: null,
                password: null,
            },
            newPass: {
                plainPassword: "",
                passwordConfirm: "",
            },
            newAvatar: null,
            hasVisiblePassword: false,
            hasVisiblePasswordConfirm: false,
            csrfTokenEdit: null,
            btnLoadingEdit: false,
            patient: null,
            stripeSubPlans: null,
            status: null,
            stripeSubscription: null,
        };
    },
    methods: {
        uploadFile() {
            const inputFile = this.$refs.file;

            if (inputFile.files && inputFile.files[0]) {
                this.newAvatar = inputFile.files[0];

                const reader = new FileReader();

                reader.onload = (e) => {
                    this.currentUser.avatarUrl = e.target.result;
                };

                reader.readAsDataURL(inputFile.files[0]);
            }
        },
        validEdition() {
            this.btnLoadingEdit = true;

            this.axios
                .post(`/settings/user/edit`, {
                    _token: this.csrfTokenEdit,
                    email: this.currentUser.email,
                    plainPassword:
                        this.newPass.plainPassword !== ""
                            ? this.newPass.plainPassword
                            : null,
                    firstname: this.currentUser.firstname,
                    lastname: this.currentUser.lastname,
                    gender:
                        this.currentUser.gender &&
                        this.currentUser.gender != "0"
                            ? "1" === this.currentUser.gender
                                ? "male"
                                : "female"
                            : "",
                    birthdate: this.currentUser.birthdate
                        ? this.currentUser.birthdate
                        : null,
                    entityName: this.currentUser.entityName
                        ? this.currentUser.entityName
                        : null,
                    street: this.currentUser.street
                        ? this.currentUser.street
                        : null,
                    city: this.currentUser.city ? this.currentUser.city : null,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Modifications enregistrées",
                        response.data.message
                    );

                    document.getElementById(
                        "u-name"
                    ).innerText = `${this.currentUser.firstname} ${this.currentUser.lastname}`;

                    if (response.data.resendEmail) {
                        this.axios
                            .get(
                                `/${this.userType}/${this.currentUser.id}/resend/verify-email`
                            )
                            .then((response) => {
                                f.openSuccessNotification(
                                    "E-mail de vérification envoyé",
                                    response.data
                                );
                            })
                            .catch((error) => {
                                const errorMess =
                                    "object" === typeof error.response.data
                                        ? error.response.data.detail
                                        : error.response.data;

                                f.openErrorNotification("Erreur", errorMess);
                            });
                    }

                    this.btnLoadingEdit = false;

                    // setTimeout(() => {
                    //     document.location.href = `/login`;
                    // }, 2000);
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingEdit = false;
                });

            if (this.newAvatar) {
                const formData = new FormData();
                formData.append("avatar", this.newAvatar);
                const headers = { "Content-Type": "multipart/form-data" };
                this.axios
                    .post(`/settings/user/edit`, formData, { headers })
                    .then((response) => {
                        f.openSuccessNotification(
                            "Avatar modifié",
                            response.data.message
                        );

                        document.getElementById("u-avatar").src =
                            response.data.avatarUrl;

                        this.btnLoadingEdit = false;
                    })
                    .catch((error) => {
                        const errorMess =
                            "object" === typeof error.response.data
                                ? error.response.data.detail
                                : error.response.data;

                        f.openErrorNotification("Erreur", errorMess);
                        this.btnLoadingEdit = false;
                    });
            }
        },
        validationEmail() {
            this.validationMessage.email = null;

            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(this.currentUser.email).toLowerCase())) {
                this.validationMessage.email =
                    "Merci d'entrer un email valide.";
            }
        },
        validationPassword() {
            this.validationMessage.password = null;

            if (this.newPass.plainPassword !== this.newPass.passwordConfirm) {
                this.validationMessage.password =
                    "Les mots de passe ne correspondent pas.";
            }
        },
        logout() {
            document.location.href = "/logout";
        },
        formatDate(datetime) {
            return moment(datetime).format("YYYY-MM-DD");
        },
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
                    f.openErrorNotification(
                        "Erreur",
                        "Erreur lors du processus d'abonnement"
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
                    f.openErrorNotification(
                        "Erreur",
                        "Erreur lors du processus de modification d'abonnement"
                    );
                });
        },
    },
    computed: {
        currentUserBirthdateFormated: {
            get() {
                if (this.currentUser.birthdate) {
                    return this.formatDate(this.currentUser.birthdate);
                }
            },
            set(newValue) {
                this.currentUser.birthdate = newValue;
            },
        },
        getSecurePassProgress() {
            let progress = 0;

            // at least one number
            if (/\d/.test(this.newPass.plainPassword)) {
                progress += 20;
            }

            // at least one capital letter
            if (/(.*[A-Z].*)/.test(this.newPass.plainPassword)) {
                progress += 20;
            }

            // at menons a lowercase
            if (/(.*[a-z].*)/.test(this.newPass.plainPassword)) {
                progress += 20;
            }

            // more than 5 digits
            if (this.newPass.plainPassword.length >= 6) {
                progress += 20;
            }

            // at least one special character
            if (/[^A-Za-z0-9]/.test(this.newPass.plainPassword)) {
                progress += 20;
            }

            return progress;
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;

        const root = document.querySelector(":root");
        root.classList.add("black");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.activeTab = data.activeTab;
        this.currentUser = data.currentUser;
        this.patient = data.patient;
        this.csrfTokenEdit = data.csrfTokenEdit;

        if (!this.currentUser && this.patient) {
            this.currentUser = this.patient;
        }

        if (this.currentUser.firstname === null) {
            this.currentUser.firstname = "";
        }

        if (this.currentUser.lastname === null) {
            this.currentUser.lastname = "";
        }

        if (this.currentUser.gender === null) {
            this.currentUser.gender = "";
        }

        if (this.currentUser.entityName === null) {
            this.currentUser.entityName = "";
        }

        if (this.currentUser.street === null) {
            this.currentUser.street = "";
        }

        if (this.currentUser.city === null) {
            this.currentUser.city = "";
        }

        this.currentUser.gender =
            this.currentUser.gender === "male" ? 1 : this.currentUser.gender;

        this.currentUser.gender =
            this.currentUser.gender === "female" ? 2 : this.currentUser.gender;

        if (this.currentUser.roles) {
            this.userType = this.currentUser.roles.includes("ROLE_PATIENT")
                ? "patient"
                : "doctor";
        } else {
            this.userType = "patient";
        }

        this.stripeSubPlans = data.stripeSubPlans;
        this.stripeSubscription = data.stripeSubscription;
        this.status = data.status;

        if ("cancel" === this.status) {
            f.openPrimaryNotification(
                "Paiement annulé",
                "Le paiement a été annulé"
            );
        }

        if ("success" === this.status) {
            f.openSuccessNotification(
                "Paiement accepté",
                "Vous pouvez profiter de votre abonnement"
            );
        }
    },
};
</script>

<style lang="scss">
@import "../scss/variables";

#settings {
    header {
        background-color: $black;
        color: $white;
        padding: 5rem 3.1rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;

        :first-child {
            h1 {
                font-weight: 600;
                font-size: 3rem;
                margin-bottom: 0.7rem;
            }

            p {
                color: #c6d3e6;
                font-size: 2.2rem;
                margin: 0;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                max-width: 91vw;
                text-overflow: ellipsis;
            }
        }

        a {
            position: absolute;
            top: 4.6rem;
            right: 3rem;
            border-color: transparent !important;
            background-color: rgba(217, 226, 239, 0.2);
            color: #fff;
            border-radius: 0.375rem;
            font-size: 1.4rem;
            padding: 0.5rem 1.3rem;
            padding-top: 0.8rem;
            border: 1px solid transparent;
            cursor: pointer;
            font-weight: 600;
            line-height: 1.6;
            transition: color 0.15s ease-in-out,
                background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            user-select: none;
            text-transform: uppercase;
            display: none;

            @media (min-width: 576px) {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            i {
                margin-right: 0.8rem;
                font-size: 1.2rem;
                position: relative;
                top: -0.1rem;
                opacity: 0.5;
            }

            &:hover {
                background-color: rgba(217, 226, 239, 0.1);
            }
        }
    }

    main {
        background-color: $gray-light;
        margin: 3rem 0;
        margin-bottom: 2rem;
        flex-grow: 1;
        display: flex;
        padding: 0 2.7rem;
        align-items: flex-start;

        > :first-child {
            width: 20%;
            min-width: initial;
            transform: translateY(-4rem);
            margin-right: 2rem;
            display: none;
            flex-direction: column;
            overflow: hidden;

            @media (min-width: 850px) {
                display: flex;
            }

            h3 {
                text-transform: uppercase;
                font-size: 1rem;
                font-weight: 700;
                color: #d3cfc3;

                &:not(:first-child) {
                    margin-top: 2rem;
                }
            }

            li {
                font-size: 1.3rem;
                margin-top: 0.5rem;
                position: relative;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.1s;

                &.active {
                    font-weight: 700;
                    font-size: 1.4rem;

                    &::before {
                        content: "";
                        display: block;
                        width: 1.2rem;
                        height: 1.2rem;
                        position: absolute;
                        left: -2.6rem;
                        top: 0.2rem;
                        border-radius: 50%;
                        background-color: $orange;
                    }
                }
            }
        }

        > :last-child {
            flex-grow: 1;
            min-width: initial;
            transform: translateY(-4rem);
            margin-left: 0;

            .edit-form {
                > :first-child {
                    display: flex;
                    flex-direction: column-reverse;

                    @media (min-width: 576px) {
                        flex-direction: row;
                    }

                    > :first-child {
                        margin-right: 0;
                        flex-grow: 1;

                        @media (min-width: 576px) {
                            margin-right: 2rem;
                        }
                    }
                }

                > :nth-child(2) {
                    display: flex;
                    flex-direction: column;

                    @media (min-width: 768px) {
                        flex-direction: row;
                    }

                    .birthdate {
                        margin-right: 0;
                        max-width: initial;
                        width: 100%;

                        @media (min-width: 768px) {
                            margin-right: 1.7rem;
                            max-width: 18rem;
                        }

                        input {
                            padding: 1.35rem 1.7rem;
                        }
                    }

                    > :last-child {
                        flex-grow: 1;
                        width: 100%;
                    }
                }

                .passwords {
                    display: flex;
                    flex-direction: column;

                    @media (min-width: 768px) {
                        flex-direction: row;
                    }

                    > div {
                        flex-grow: 1;
                        width: 100%;

                        &:first-child {
                            margin-right: 0;

                            @media (min-width: 768px) {
                                margin-right: 1.7rem;
                            }
                        }
                    }
                }

                .doctor-city {
                    display: flex;
                    flex-direction: column;

                    @media (min-width: 768px) {
                        flex-direction: row;
                    }

                    > div {
                        width: 100%;

                        &:not(:last-child) {
                            margin-right: 0;

                            @media (min-width: 768px) {
                                margin-right: 1.7rem;
                            }
                        }
                    }
                }

                .vs-input__label {
                    max-width: 76%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                }

                .vs-select-content,
                .vs-input-parent {
                    margin-bottom: 2rem;
                }

                h4 {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    margin-top: 2.5rem;
                }

                #current-avatar {
                    display: flex;
                    align-items: center;
                    margin-bottom: 2.5rem;
                    flex-direction: column;

                    @media (min-width: 576px) {
                        margin-bottom: 1.8rem;
                    }

                    > :last-child {
                        position: relative;
                        z-index: 1;

                        label {
                            display: block;
                            padding: 0.6rem 1.3rem;
                            padding-top: 0.7rem;
                            box-shadow: 0rem 0.2rem 0.6rem 0rem
                                rgba(34, 46, 84, 0.14) !important;
                            border-radius: 0.6rem;
                            background: #f5f5f5;
                            color: #222e54;
                            cursor: pointer;
                            transition: all 0.2s;
                            font-weight: 600;
                            white-space: nowrap;
                            font-size: 1.1rem;
                            margin-top: 1rem;

                            &:hover {
                                background: #ecebeb;
                            }

                            i {
                                font-size: 1.2rem;
                                margin-right: 0.3rem;
                                position: relative;
                                top: 0.1rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
