<template>
    <div>
        <div class="header">
            <div class="logo">
                <img src="../img/logo-kivid.svg" alt="Logo Kivid" />
            </div>
            <nav>
                <ul>
                    <li>
                        <div class="questions">
                            <i class="fas fa-question"></i>
                        </div>
                    </li>
                    <li>
                        <div class="notifications">
                            <i class="fas fa-bell"></i>
                        </div>
                    </li>
                    <li>
                        <div class="user">
                            <vs-avatar size="26" class="user-avatar" circle>
                                <img
                                    src="../img/avatar-default.svg"
                                    alt="Avatar de l'utilisateur"
                                />
                            </vs-avatar>
                            <div class="user-name">
                                <div>Damien Dupuy</div>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="container">
            <vs-button :active="active == 1" @click="active = 1">
                S’inscrire
            </vs-button>
            <br />
            <br />

            <vs-button
                class="secondary w-100"
                :active="active == 1"
                @click="active = 1"
            >
                S’inscrire
            </vs-button>
            <br />
            <br />

            <vs-button disabled>Disabled</vs-button>
            <br />
            <br />

            <a class="action-link" href="#">
                <i class="fas fa-pen"></i>
                <span>Compléter</span>
            </a>
            <br />
            <br />

            <br />
            <a class="action-link" href="#">
                <i class="fas fa-pen"></i>
                <span>Compléter</span>
            </a>

            <br />
            <br />

            <br />
            <a class="action-link" href="#">
                <i class="fas fa-eye"></i>
                <span>Voir toutes les fiches</span>
            </a>
            <br />
            <br />

            <br />
            <a class="action-link green" href="#">
                <i class="fas fa-check-circle"></i>
                <span>Accepter</span>
            </a>
            <br />
            <br />

            <br />
            <a class="action-link red" href="#">
                <i class="fas fa-times-circle"></i>
                <span>Refuser</span>
            </a>
            <br />
            <br />
            <br />
            <br />

            <vs-input
                type="password"
                v-model="value"
                label-placeholder="Password"
                :progress="getProgress"
                :visiblePassword="hasVisiblePassword"
                icon-after
                @click-icon="hasVisiblePassword = !hasVisiblePassword"
                :class="{ 'is-filled': value }"
            >
                <template #icon>
                    <i v-if="!hasVisiblePassword" class="fas fa-eye"></i>
                    <i v-else class="fas fa-eye-slash"></i>
                </template>

                <template v-if="getProgress >= 100" #message-success>
                    Secure password
                </template>
            </vs-input>
            <br />
            <br />
            <vs-input
                label-placeholder="Name"
                v-model="value2"
                :class="{ 'is-filled': value2 }"
            />
            <br />
            <br />

            <vs-input
                label-placeholder="Error"
                v-model="value3"
                :class="{ 'is-filled': value3, error: true }"
            >
                <template #message-danger> Required </template>
            </vs-input>
            <br />

            <br />
            <vs-checkbox v-model="option"> Option </vs-checkbox>
            <br />
            <br />
            <br />
            <br />
            <vs-switch v-model="active2" />
            <br />
            <br />

            <vs-select placeholder="Select" v-model="value">
                <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
                <vs-option label="Vue" value="2"> Vue </vs-option>
                <vs-option label="Javascript" value="3"> Javascript </vs-option>
                <vs-option disabled label="Sass" value="4"> Sass </vs-option>
                <vs-option label="Typescript" value="5"> Typescript </vs-option>
                <vs-option label="Webpack" value="6"> Webpack </vs-option>
                <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
            </vs-select>
            <br />
            <br />
            <br />
            <br />

            <vs-button-group>
                <vs-button :active="active == 0" @click="active = 0" flat>
                    Jour
                </vs-button>
                <vs-button :active="active == 1" @click="active = 1" flat>
                    Semaine
                </vs-button>
                <vs-button :active="active == 2" @click="active = 2" flat>
                    Mois
                </vs-button>
                <vs-button :active="active == 3" @click="active = 3" flat>
                    Année
                </vs-button>
            </vs-button-group>
            <br />
            <br />
            <br />
            <br />

            <vs-button size="mini" class="tag"> Tag </vs-button>

            <br />
            <br />
            <vs-button size="mini" class="tag secondary"> Tag </vs-button>

            <br />
            <br />
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/cheville.svg"
                    alt="Icon Cheville"
                />
                Cheville
            </vs-button>

            <br />
            <br />
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/genou.svg"
                    alt="Icon Genou"
                />
                Genou
            </vs-button>
        </div>
    </div>
</template>

<script>
import f from "./services/function";
import ClickOutside from "vue-click-outside";

export default {
    data() {
        return {
            active: 0,
            value: "",
            hasVisiblePassword: false,
            option: true,
            active2: true,
            value2: "",
            value3: "sqdsdq",
        };
    },
    computed: {
        getProgress() {
            let progress = 0;

            // at least one number
            if (/\d/.test(this.value)) {
                progress += 20;
            }

            // at least one capital letter
            if (/(.*[A-Z].*)/.test(this.value)) {
                progress += 20;
            }

            // at menons a lowercase
            if (/(.*[a-z].*)/.test(this.value)) {
                progress += 20;
            }

            // more than 5 digits
            if (this.value.length >= 6) {
                progress += 20;
            }

            // at least one special character
            if (/[^A-Za-z0-9]/.test(this.value)) {
                progress += 20;
            }

            return progress;
        },
    },
    methods: {},
    created() {},
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.header {
    background: $white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 3rem;
    border-radius: 0 0 2rem 2rem;
    font-weight: 600;

    .logo {
        width: 11.7rem;
    }

    nav {
        ul {
            display: flex;
            align-items: center;
            list-style: none;
            margin: 0;

            li {
                display: flex;
                align-items: center;
                padding: 0 1.8rem;
                border-left: 1px solid $gray-middle;
                color: $black;
                font-size: 1.5rem;
                max-height: 1.8rem;

                .questions {
                    background-color: #222e54;
                    width: 1.7rem;
                    height: 1.7rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.3rem;
                    cursor: pointer;

                    &:hover {
                        background-color: $orange;
                    }

                    i {
                        font-size: 1rem;
                        color: white;
                        position: relative;
                        top: -0.1rem;
                    }
                }

                .notifications {
                    font-size: 1.7rem;
                    width: 2.8rem;
                    height: 2.8rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.2s;

                    &:hover {
                        color: $orange;
                        background-color: rgba(251, 138, 104, 0.1);
                    }
                }

                .user {
                    display: flex;
                    cursor: pointer;

                    .user-avatar {
                        margin-right: 1rem;
                    }

                    .user-name {
                        display: flex;
                        align-items: center;
                        font-size: 1.45rem;

                        i {
                            margin-left: 1rem;
                            font-size: 1.3rem;
                        }
                    }
                }
            }
        }
    }
}

.container {
    max-width: 400px;
    margin: 5rem auto;

    font-size: 1.5rem;

    .w-100 {
        width: 100%;
    }

    .action-link {
        color: $black;
        text-decoration: none;
        transition: all 0.2s;
        position: relative;
        top: 0;

        &:hover {
            color: darken($black, 5%);
            top: -0.2rem;
        }

        &.green {
            color: $green;

            &:hover {
                color: darken($green, 5%);
                top: -0.2rem;
            }
        }

        &.red {
            color: $red;

            &:hover {
                color: darken($red, 5%);
                top: -0.2rem;
            }
        }

        i {
            font-size: 1.4rem;
            margin-right: 0.4rem;

            &.fa-eye {
                font-size: 1.75rem;
                position: relative;
                top: 0.1rem;
            }

            &.fa-check-circle,
            &.fa-times-circle {
                font-size: 1.55rem;
            }
        }

        span {
            font-weight: 700;
            text-decoration: underline;
        }
    }
}
</style>