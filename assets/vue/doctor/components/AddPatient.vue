<template>
    <div id="add-patient">
        <div class="header">
            <h2><i class="fe fe-users"></i>Mes Patients</h2>
            <vs-button
                circle
                color="warn"
                gradient
                :active="boxActive"
                @click="boxToggle"
            >
                <i class="fe fe-user-plus"></i> Ajouter un patient
            </vs-button>
        </div>
        <div>
            <transition name="height">
                <div class="add-patient-box" v-if="boxActive">
                    <h2>Ajouter un patient</h2>
                    <div class="search">
                        <vs-input
                            v-model="search"
                            type="search"
                            placeholder="Rechercher un patient"
                        >
                            <template #icon>
                                <i class="fe fe-user-plus"></i>
                            </template>
                        </vs-input>
                        <div v-if="search" class="search-active">
                            {{ getPatients.length }} patients
                        </div>
                    </div>
                    <transition name="height">
                        <div
                            v-if="search"
                            class="filtered-patients vs-alert--shadow"
                        >
                            <div v-if="getPatients.length">
                                <div
                                    v-for="(patient, i) in getPatients"
                                    :key="i"
                                    class="patient"
                                >
                                    <div>
                                        <vs-avatar
                                            class="avatar"
                                            v-if="patient.avatarUrl"
                                        >
                                            <img
                                                :src="patient.avatarUrl"
                                                alt="avatar"
                                            />
                                        </vs-avatar>
                                        <vs-avatar class="avatar" v-else>
                                            <img
                                                :src="'/img/avatar-default.svg'"
                                                alt="avatar"
                                            />
                                        </vs-avatar>
                                        {{ patient.lastname }}
                                        {{ patient.firstname }}
                                        <span
                                            v-if="
                                                patient.lastname ||
                                                patient.firstname
                                            "
                                            class="tiret"
                                        >
                                            -
                                        </span>
                                        {{ patient.email }}
                                        <span
                                            v-if="patient.birthdate"
                                            class="tiret"
                                        >
                                            -
                                        </span>
                                        {{ getAge(patient.birthdate) }}
                                        <span
                                            v-if="patient.birthdate"
                                            class="age"
                                        >
                                            ans</span
                                        >
                                    </div>
                                    <div>
                                        <vs-button flat>
                                            <i class="fe fe-file-plus"></i>
                                            Prescrire une fiche
                                        </vs-button>
                                        <vs-button plain>
                                            <i class="fe fe-file-plus"></i>
                                            Prescrire une fiche
                                        </vs-button>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <p class="no-found">
                                    <i class="fe fe-cloud-off"></i>
                                    Ce patient ne fait pas encore partie de
                                    Kivid, vous pouvez l'inviter.
                                </p>
                                <div class="patient">
                                    <div>
                                        <vs-input
                                            placeholder="Prénom"
                                            class="input"
                                            v-model="newPatient.firstname"
                                        />
                                        <vs-input
                                            placeholder="Nom"
                                            class="input"
                                            v-model="newPatient.lastname"
                                        />
                                        <vs-input
                                            placeholder="Email"
                                            class="input"
                                            v-model="newPatient.email"
                                        />
                                    </div>
                                    <div>
                                        <vs-button flat>
                                            <i class="fe fe-file-plus"></i>
                                            Créer sans prescription
                                        </vs-button>
                                        <vs-button plain>
                                            <i class="fe fe-file-plus"></i>
                                            Créer
                                        </vs-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddPatient",
    props: {
        patients: Array,
    },
    data: () => ({
        boxActive: false,
        search: null,
        newPatient: {
            firstname: "",
            lastname: "",
            email: "",
        },
    }),
    methods: {
        boxToggle() {
            this.boxActive = !this.boxActive;
            this.search = null;
        },
        getAge(dateString) {
            if (!dateString) {
                return null;
            }
            const today = new Date();
            const birthDate = new Date(dateString);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
    },
    computed: {
        getPatients() {
            var lowSearch = this.search.toLowerCase();
            return this.patients.filter(function (patient) {
                return Object.values(patient).some((val) =>
                    String(val).toLowerCase().includes(lowSearch)
                );
            });
        },
    },
};
</script>

<style lang="scss"  scoped>
.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5em;

    h2 {
        display: flex;
        align-items: center;
        margin-bottom: 0;

        i {
            margin-right: 0.3em;
        }
    }

    button {
        i {
            margin-top: -0.1em;
            margin-right: 0.3em;
        }
    }
}

.filtered-patients {
    background-color: white;
    border-radius: 0 0 12px 12px;
    position: relative;
    box-shadow: 0px 4px 15px 0px rgba(51, 34, 9, 0.12);
    max-height: 18em;
    overflow: auto;
}

.add-patient-box {
    background: rgba(255, 171, 44, 0.1);
    color: #ffab2c;
    width: 100%;
    padding: 1.9em;
    border-radius: 0px 12px 12px 0px;
    position: relative;
    font-size: 0.9rem;
    z-index: 10;
    overflow: hidden;
    margin-bottom: 1.1em;

    .search {
        position: relative;
    }

    .search-active {
        content: "sqdqdqds";
        position: absolute;
        right: 3em;
        top: 0.6em;
    }

    &::after {
        content: "";
        background: #ffab2c;
        left: 0px;
        top: 0px;
        width: 2px;
        height: 100%;
        position: absolute;
    }

    h2 {
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 1.1em;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        display: block;
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(245, 245, 245, 1);
        border-radius: 5px;
    }
}

.patient {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.95em;
    border-bottom: 1px solid #f1f4f8;
    color: #30343a;

    div {
        display: flex;

        align-items: center;
    }

    .avatar {
        margin-right: 0.6em;
    }

    span.age {
        margin-left: 0.25em;
    }

    span.tiret {
        color: #ffa729;
        margin: 0.5em;
    }

    button {
        i {
            margin-top: -0.15em;
            margin-right: 0.28em;
        }
    }

    .input {
        margin: 0 0.3em;
    }
}

p.no-found {
    text-align: center;
    margin: 1.4em;
    margin-bottom: 0;
    color: #a3a5a8;

    i {
        margin-right: 0.3em;
        color: #dce0e5;
    }
}

.height-enter-active,
.height-leave-active {
    transition: opacity 0.5s, max-height 0.25s, padding 0.5s, margin-bottom 0.5s;
}
.height-enter,
.height-leave-to {
    margin-bottom: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
}
</style>
