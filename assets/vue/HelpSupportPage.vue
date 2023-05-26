<template>
    <div class="container nopadding" id="support">
        <header>
            <div>
                <h1>Aide et Support</h1>
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
                        @click="support()"
                        :class="{ active: activeTab === '1' }"
                    >
                        Contactez-nous
                    </li>
                </ul>
            </section>
            <transition name="fade">
                <section
                    v-if="activeTab === '1'"
                    id="my-profil"
                    class="kiv-block"
                >
                    <h2>Contactez-nous</h2>
                    <p>Vous avez une question ou vous rencontrez un problème ?</p>
                    <div class="contact-form">
                        <vs-input
                            v-model="contactSubject"
                            label-placeholder="Objet"
                            type="text"
                            icon-after
                            :class="{
                                error:
                                    emptyMessage.contactSubject && !contactSubject,
                            }"
                        >
                            <template
                                v-if="
                                    emptyMessage.contactSubject && !contactSubject
                                "
                                #message-danger
                            >
                                {{ emptyMessage.contactSubject }}
                            </template>
                        </vs-input>

                        <div class="message-block">
                            <textarea
                                v-model="contactMessage"
                                id="contact-message"
                                cols="30"
                                rows="6"
                                :class="{ filled: contactMessage != '',
                                    error:
                                    emptyMessage.contactMessage && !contactMessage,
                                 }"
                            >
                            </textarea>
                            <label for="contact-message">Message</label>
                            <div                                 
                                v-if="
                                    emptyMessage.contactMessage && !contactMessage
                                "
                                    class="error"
                            >
                                {{ emptyMessage.contactMessage }}
                            </div>
                        </div>

                        <div
                            class="btn-container"
                            :class="{ disabled: btnLoadingContact }"
                        >
                            <vs-button
                                :loading="btnLoadingContact"
                                class="w-100"
                                type="submit"
                                @click="validSupportContact">
                                <span>Envoyer</span>
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

export default {
    data() {
        return {
            activeTab: "1",
            currentUser: null,
            csrfTokenContact: null,
            btnLoadingContact: false,
            contactSubject: '',
            contactMessage: '',
            emptyMessage: {
                contactSubject: null,
                contactMessage: null,
            },
        };
    },
    methods: {
        support() {
            document.location.href = "/support";
        },
        validSupportContact() {
            if (this.checkIfFieldsAreNotEmpty()) {
                this.btnLoadingContact = true;
                this.axios
                    .post(`/support`, {
                        _token: this.csrfTokenContact,
                        contactSubject: this.contactSubject,
                        contactMessage: this.contactMessage,
                    })
                    .then((response) => {
                        f.openSuccessNotification(
                            "Message envoyé",
                            response.data
                        );
                        this.btnLoadingContact = false;
                    })
                    .catch((error) => {
                        const errorMess =
                            "object" === typeof error.response.data
                                ? error.response.data.detail
                                : error.response.data;

                        this.btnLoadingContact = false;

                        f.openErrorNotification(
                            "Erreur",
                            errorMess
                        );
                    });
            }
        },
        checkIfFieldsAreNotEmpty() {
            if (!this.contactSubject || !this.contactMessage) {
                if (!this.contactSubject) {
                    this.emptyMessage.contactSubject =
                        "Vous devez renseigner un Objet (Bug:..., Problème:..., Question:...)";
                }
                if (!this.contactMessage) {
                    this.emptyMessage.contactMessage =
                        "Vous devez écrire un message/description du problème";
                }

                return false;
            }

            return true;
        },
        logout() {
            document.location.href = "/logout";
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;

        const root = document.querySelector(":root");
        root.classList.add("black");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.activeTab = data.activeTab;
        this.currentUser = data.currentUser;
        this.csrfTokenContact = data.csrfTokenContact;
    },
};
</script>

<style lang="scss">
@import "../scss/variables";

.mt-2 {
    margin-top: 2rem;
}

#support {
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

            p {
                margin-top: 0;
                font-size: 1.4rem;
                margin-bottom: 2rem;
            }

            .contact-form {
                .vs-input-parent
                {
                    margin-bottom: 2rem;
                }

                .message-block {
                    position: relative;
                    margin-bottom: 1.8rem;

                    textarea {
                        width: 100%;
                        padding: 1.6rem 1.7rem;
                        background: $white;
                        color: $black;
                        border: 0.1rem solid #e7dfcd;
                        font-size: 1.4rem;
                        border-radius: 0.5rem;

                        &:focus,
                        &:hover,
                        &:focus-visible {
                            border: 0.1rem solid #c1b79d;
                            outline: none;
                            box-shadow: 0 0.5rem 2.5rem -0.4rem rgba(0, 0, 0, 0.05);
                        }

                        &:focus ~ label,
                        &.filled ~ label {
                            font-size: 1.4rem;
                            top: -0.8rem;
                            left: 1.3rem;
                            text-shadow: 0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                                0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                                0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                                0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                                0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                                0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                                0 0 0.3rem #fff, 0 0 0.3rem #fff;
                        }

                        &.error {
                            border: 0.1rem solid #ff564b;

                            ~ label {
                                color: #ff564b;
                            }
                        }
                    }
                    
                    label {
                        top: 1.6rem;
                        left: 1.6rem;
                        font-size: 1.4rem;
                        color: #c1b79d;
                        opacity: 1;
                        padding: 0.05rem 0.5rem;
                        border-radius: 0.4rem;
                        position: absolute;
                        transition: all 0.25s ease;
                        cursor: text;
                        user-select: none;
                        pointer-events: none;
                        width: initial;
                        height: initial;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                    }

                    div.error 
                    {
                        color: #ff564b;
                        padding-top: 0.7rem;
                        font-size: 1.3rem;
                    }   
                }

            }

        }
    }
}
</style>
