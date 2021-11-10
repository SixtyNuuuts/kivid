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
                <ul>
                    <li
                        @click="myProfil()"
                        :class="{ active: activeTab === '1' }"
                    >
                        Mon Profil
                    </li>
                    <li
                        v-if="'patient' === userType"
                        @click="mySubscription()"
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
                                        :src="getCurrentAvatar"
                                        :alt="`Avatar de ${currentUser.firstname} ${currentUser.lastname}`"
                                    />
                                </vs-avatar>
                                <div>
                                    <button @click="openModalAvatar">
                                        <i class="fas fa-image"></i> Modifier ma
                                        photo
                                    </button>
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
                                autocomplete="new-password"
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
                                autocomplete="new-password"
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
                                >Enregistrer les modifications</vs-button
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
                        <div
                            class="sub-frame"
                            :class="{ active: stripeSubscription }"
                        >
                            <h3 v-if="stripeSubscription" class="active">
                                Abonnement en cours
                            </h3>
                            <h3 v-if="!stripeSubscription">Aucun abonnement</h3>
                            <div>
                                <div>
                                    <div
                                        v-if="stripeSubscription"
                                        class="sub-details"
                                    >
                                        <div class="sub-name">
                                            {{
                                                stripeSubPlans.find(
                                                    (p) =>
                                                        p.planId ===
                                                        stripeSubscription.plan
                                                            .id
                                                ).name
                                            }}
                                        </div>
                                        <div class="sub-price">
                                            {{
                                                stripeSubPlans.find(
                                                    (p) =>
                                                        p.planId ===
                                                        stripeSubscription.plan
                                                            .id
                                                ).price / 100
                                            }}
                                            € <span>/ mois</span>
                                        </div>
                                    </div>

                                    <div
                                        v-if="!stripeSubscription"
                                        class="sub-details"
                                    >
                                        <div class="sub-name">
                                            Pour accéder complètement à mes
                                            prescriptions :
                                        </div>
                                    </div>

                                    <p
                                        v-if="
                                            stripeSubscription &&
                                            !stripeSubscription.cancel_at_period_end
                                        "
                                    >
                                        <i class="kiv-info icon-17"></i>
                                        Renouvellement automatique activé
                                    </p>

                                    <p
                                        v-if="
                                            stripeSubscription &&
                                            stripeSubscription.cancel_at_period_end
                                        "
                                    >
                                        <i class="kiv-info icon-17"></i>
                                        Renouvellement automatique désactivé
                                    </p>

                                    <p v-if="stripeSubscription">
                                        <i class="kiv-info icon-17"></i>
                                        Pour accéder à vos factures, cliquez sur
                                        le bouton "Gérer l'abonnement" et allez
                                        en bas de page, dans la partie
                                        "Historique de facturation"
                                    </p>

                                    <vs-button
                                        v-if="
                                            stripeSubscription &&
                                            stripeSubscription.customer
                                        "
                                        @click="
                                            stripeCustomerPortalSession(
                                                stripeSubscription.customer
                                            )
                                        "
                                        ><i class="fas fa-sliders-h"></i>
                                        Gérer l'abonnement
                                    </vs-button>
                                    <vs-button
                                        v-if="!stripeSubscription"
                                        @click="stripeCheckout(0)"
                                        class="mt-2"
                                    >
                                        <i class="kiv-subscription icon-20"></i>
                                        Je m’abonne
                                    </vs-button>
                                </div>
                                <div>
                                    <div class="sub-illus">
                                        <img
                                            v-if="stripeSubscription"
                                            src="../img/perso-boule.svg"
                                            alt="personnage sur une grosse balle"
                                        />
                                        <img
                                            v-if="!stripeSubscription"
                                            src="../img/boule-seule.svg"
                                            alt="personnage sur une grosse balle"
                                        />
                                    </div>
                                    <p
                                        v-if="
                                            stripeSubscription &&
                                            !stripeSubscription.cancel_at_period_end
                                        "
                                    >
                                        Votre abonnement actuel est valide
                                        jusqu'au
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
                                    <p
                                        v-if="
                                            stripeSubscription &&
                                            stripeSubscription.cancel_at_period_end
                                        "
                                    >
                                        Votre abonnement se terminera le
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </transition>
        </main>
        <div class="cropper-modal" v-if="modalAvatar">
            <div class="content">
                <section id="cropper" class="kiv-block">
                    <button
                        class="vs-dialog__close btn-close-modal"
                        @click="closeModalAvatar"
                    >
                        <i class="vs-icon-close vs-icon-hover-x"></i>
                    </button>
                    <h2>Modifier ma photo</h2>

                    <div class="avatar-cropper">
                        <cropper
                            ref="cropper"
                            :stencil-component="
                                $options.components.CircleStencil
                            "
                            class="cropper"
                            check-orientation
                            :src="getCropperAvatar"
                        />
                    </div>

                    <div class="btn-container">
                        <vs-button
                            class="w-100 upload-avatar secondary"
                            @click="$refs.file.click()"
                        >
                            <input
                                ref="file"
                                type="file"
                                accept="image/*"
                                @change="loadImage($event)"
                            />
                            Importer une image
                        </vs-button>
                        <vs-button class="w-100" @click="crop()">
                            Valider
                        </vs-button>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import f from "./services/function";
import moment from "moment";
import { Cropper, CircleStencil } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

export default {
    components: {
        Cropper,
        CircleStencil,
    },
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
            stripeSubPlans: null,
            status: null,
            stripeSubscription: null,
            modalAvatar: false,
            image: {
                src: null,
                type: null,
            },
        };
    },
    methods: {
        openModalAvatar() {
            this.modalAvatar = true;

            document.body.classList.add("no-scrollbar");
        },
        closeModalAvatar() {
            this.modalAvatar = false;
            document.body.classList.remove("no-scrollbar");
        },
        validEdition() {
            this.btnLoadingEdit = true;

            this.axios
                .post(`/parametres`, {
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
                    avatar: this.newAvatar,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Modifications enregistrées",
                        response.data.message
                    );

                    if (
                        this.currentUser.firstname ||
                        this.currentUser.lastname
                    ) {
                        document.getElementById(
                            "u-name"
                        ).innerText = `${this.currentUser.firstname} ${this.currentUser.lastname}`;
                    }

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

                    if (response.data.avatarUrl) {
                        document.getElementById("u-avatar").src =
                            response.data.avatarUrl;
                    }

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
        formatDateBirthdate(datetime) {
            return moment(datetime).format("YYYY-MM-DD");
        },
        formatDate(datetime) {
            return moment(datetime).format("DD/MM/YYYY");
        },
        stripeCheckout(indice) {
            this.axios
                .post(`/subscription/checkout`, {
                    stripeSubPlanId: this.stripeSubPlans[indice].planId,
                    stripeCustomerId: this.stripeSubscription
                        ? this.stripeSubscription.customer
                        : null,
                    successUrl: "abonnement/success",
                    cancelUrl: "abonnement/cancel",
                    userId: `${this.currentUser.id}`,
                })
                .then((response) => {
                    window.location.href = response.data;
                })
                .catch((error) => {
                    console.log(error);

                    f.openErrorNotification(
                        "Erreur",
                        "Erreur lors du processus d'abonnement"
                    );
                });
        },
        stripeCustomerPortalSession(stripeCustomerId) {
            this.axios
                .post(`/subscription/customer-portal-session`, {
                    stripeCustomerId: stripeCustomerId,
                })
                .then((response) => {
                    window.location.href = response.data;
                })
                .catch((error) => {
                    console.log(error);

                    f.openErrorNotification(
                        "Erreur",
                        "Erreur lors du processus de modification d'abonnement"
                    );
                });
        },
        myProfil() {
            document.location.href = "/parametres";
        },
        mySubscription() {
            document.location.href = "/abonnement";
        },
        getMimeType(file, fallback = null) {
            const byteArray = new Uint8Array(file).subarray(0, 4);
            let header = "";
            for (let i = 0; i < byteArray.length; i++) {
                header += byteArray[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    return "image/png";
                case "47494638":
                    return "image/gif";
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    return "image/jpeg";
                default:
                    return fallback;
            }
        },
        crop() {
            this.newAvatar = this.$refs.cropper.getResult().canvas.toDataURL();

            this.closeModalAvatar();
        },
        reset() {
            this.image = {
                src: null,
                type: null,
            };
        },
        loadImage(event) {
            // Reference to the DOM input element
            const { files } = event.target;
            // Ensure that you have a file before attempting to read it
            if (files && files[0]) {
                // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
                if (this.image.src) {
                    URL.revokeObjectURL(this.image.src);
                }
                // 2. Create the blob link to the file to optimize performance:
                const blob = URL.createObjectURL(files[0]);
                // 3. The steps below are designated to determine a file mime type to use it during the
                // getting of a cropped image from the canvas. You can replace it them by the following string,
                // but the type will be derived from the extension and it can lead to an incorrect result:
                //
                // this.image = {
                //    src: blob;
                //    type: files[0].type
                // }
                // Create a new FileReader to read this image binary data
                const reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.image" refers to the image of Vue component
                    this.image = {
                        // Read image as base64 and set it as src:
                        src: blob,
                        // Determine the image type to preserve it during the extracting the image from canvas:
                        type: this.getMimeType(e.target.result, files[0].type),
                    };
                };
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsArrayBuffer(files[0]);
            }
        },
    },
    destroyed() {
        // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
        if (this.image.src) {
            URL.revokeObjectURL(this.image.src);
        }
    },
    computed: {
        currentUserBirthdateFormated: {
            get() {
                if (this.currentUser.birthdate) {
                    return this.formatDateBirthdate(this.currentUser.birthdate);
                }
            },
            set(newValue) {
                this.currentUser.birthdate = newValue;
            },
        },
        getCurrentAvatar() {
            return this.newAvatar
                ? this.newAvatar
                : this.currentUser.avatarUrl
                ? this.currentUser.avatarUrl
                : "/img/avatar-default.svg";
        },
        getCropperAvatar() {
            return this.image.src
                ? this.image.src
                : this.currentUser.avatarUrl
                ? this.currentUser.avatarUrl
                : "/img/avatar-default.svg";
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

            // more than 9 digits
            if (this.newPass.plainPassword.length >= 9) {
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
        this.csrfTokenEdit = data.csrfTokenEdit;

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

        this.userType = this.currentUser.roles.includes("ROLE_PATIENT")
            ? "patient"
            : "doctor";

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

.mt-2 {
    margin-top: 2rem;
}

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

            // h3 {
            //     text-transform: uppercase;
            //     font-size: 1rem;
            //     font-weight: 700;
            //     color: #d3cfc3;

            //     &:not(:first-child) {
            //         margin-top: 2rem;
            //     }
            // }

            li {
                font-size: 1.3rem;
                position: relative;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.1s;
                padding: 1.4rem 0;
                border-bottom: 1px solid #e0e0df;
                border-top: 1px solid #e0e0df;

                &:not(:first-child) {
                    border-top: 0px solid #e0e0df;
                }

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
                        top: 1.5rem;
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

                        button {
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
                            border: none;

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

            .sub-frame {
                border: 2px solid #e0dfde;
                border-radius: 0.5rem;
                max-width: 64.3rem;

                &.active {
                    border: 2px solid #ffc3b1;

                    h3 {
                        color: $orange;
                    }
                }

                h3 {
                    position: relative;
                    top: -0.9rem;
                    background-color: white;
                    width: 14.6rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 1rem;
                    color: #c3beb3;
                    font-size: 1.5rem;
                    font-weight: 600;

                    &.active {
                        width: 16.6rem;
                    }
                }

                > div {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;

                    @media (min-width: 690px) {
                        flex-direction: row;
                    }

                    > :first-child {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 2.7rem;
                        padding-top: 1.7rem;
                        justify-content: space-between;

                        .sub-details {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;

                            .sub-name {
                                font-size: 2rem;
                                font-weight: 700;
                                color: #fb8b68;
                                text-align: center;
                            }

                            .sub-price {
                                font-size: 3.8rem;
                                font-weight: 700;
                                color: #ffc5b4;

                                span {
                                    font-size: 1.3rem;
                                }
                            }
                        }

                        p {
                            color: #a8a396;
                            max-width: 33rem;
                            text-align: center;
                            margin: 1.8rem 0;
                            line-height: 1.2;

                            &:nth-child(2) {
                                margin-top: 1rem;
                                margin-bottom: 0;
                            }

                            &:nth-child(3) {
                                margin-top: 1rem;
                            }

                            i {
                                color: $orange;
                                font-size: 0.9rem;
                            }
                        }

                        .vs-button {
                            font-size: 1.2rem;

                            i {
                                font-size: 1.4rem;
                                top: -0.1rem;
                            }

                            .vs-button__content {
                                padding: 1rem 1.6rem;
                            }
                        }
                    }

                    > :last-child {
                        display: flex;
                        flex-grow: 1;
                        flex-direction: column;
                        align-items: center;
                        padding: 0 2.7rem;

                        p {
                            position: relative;
                            top: -1.2rem;
                            font-size: 1.2rem;
                            color: #8b867a;
                            text-align: center;
                            line-height: 1.3;

                            strong {
                                color: $orange;
                            }
                        }
                    }

                    .sub-illus {
                        height: 100%;
                        width: 23rem;

                        @media (min-width: 450px) {
                            width: 31rem;
                        }
                    }
                }
            }
        }
    }
}

.cropper-modal {
    position: fixed;
    z-index: 11111;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .btn-close-modal {
        border-radius: 50%;
    }

    &::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(0.5rem);
        background: rgba(34, 46, 84, 0.8);
        height: 100vh;
        width: 100%;
    }

    .content {
        height: 100%;
        width: 100%;
        padding: 6%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        &::-webkit-scrollbar {
            width: 4px;
            height: 4px;
            display: block;
            background: transparent;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background: #2e3858a1;
            border: 1px solid transparent;
            border-radius: 4px;
        }

        @media (max-height: 815px) {
            align-items: flex-start;
            overflow-y: auto;
        }

        #cropper {
            min-width: initial;
            max-width: 45rem;
        }

        .avatar-cropper {
            margin-top: 2rem;
            margin-bottom: 2rem;
            user-select: none;
            position: relative;

            .cropper {
                border: solid 1px #eee;
                min-height: 300px;
                max-height: 500px;
                width: 100%;
                user-select: none;
            }
        }

        .btn-container {
            .upload-avatar {
                input {
                    display: none;
                }

                margin-bottom: 1.5rem;
            }
        }
    }
}
</style>
