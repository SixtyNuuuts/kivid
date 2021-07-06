<template>
    <div id="add-patient">
        <div class="header">
            <h1><i class="fe fe-users"></i>Mes Patients</h1>
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
        <vs-dialog v-model="boxActive">
            <h2><i class="fe fe-search"></i>Rechercher un patient</h2>
            <div class="add-patient-box">
                <div class="search">
                    <vs-input
                        v-model="search"
                        type="search"
                        placeholder="Nom - Prénom - Email"
                    >
                        <template #icon>
                            <i class="fe fe-search"></i>
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
                                    <span v-if="patient.birthdate" class="age">
                                        ans</span
                                    >
                                </div>
                                <div v-html="addPatient(patient.id)"></div>
                            </div>
                        </div>
                        <div v-else>
                            <p class="no-found">
                                <i class="fe fe-user-minus"></i>
                                Aucun patient n'a été trouvé avec "<strong>{{
                                    search
                                }}</strong
                                >",<br />
                                <em>Créer un patient ci-dessous.</em>
                            </p>
                        </div>
                    </div>
                </transition>
            </div>

            <h2><i class="fe fe-user-plus"></i>Créer un patient</h2>
            <div v-html="createPatientForm"></div>
        </vs-dialog>
    </div>
</template>

<script>
import f from "../../services/function";

export default {
    name: "AddPatient",
    props: {
        patients: Array,
        createPatientForm: String,
        addPatientForm: String,
        doctor: Object,
    },
    data: () => ({
        boxActive: false,
        search: "",
        newPatient: {
            firstname: "",
            lastname: "",
            email: "",
        },
    }),
    methods: {
        addPatient(patientId) {
            const addPatientFormWithPatientId = this.addPatientForm.replace(
                `<input type="hidden" name="patient_id" value="">`,
                `<input type="hidden" name="patient_id" value="${patientId}">`
            );

            return addPatientFormWithPatientId;
        },
        boxToggle() {
            this.boxActive = !this.boxActive;
            this.search = "";
        },
        getAge(dateString) {
            f.generateAgeFromDateOfBirth(dateString);
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
$primary: #ffab2c;

.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5em;

    h1 {
        font-size: 1.7em;
        margin-bottom: 0.4em;
        display: flex;
        align-items: center;
        margin-bottom: 0;

        i {
            color: $primary;
            font-size: 0.9em;
            margin-right: 0.4em;
        }
    }

    button {
        i {
            margin-top: -0.1em;
            margin-right: 0.3em;
        }
    }
}

h2 {
    font-size: 1.7rem;
    text-align: center;
    margin: 1em;
    margin-bottom: 0.5em;
    color: $primary;

    &:first-child {
        margin-top: 0;
    }

    i {
        font-size: 0.9em;
        margin-right: 0.3em;
    }
}

.add-patient-box {
    position: relative;
}

.search {
    position: relative;
}

.search-active {
    position: absolute;
    right: 3.7em;
    top: 1em;
    color: $primary;
    text-transform: uppercase;
    font-size: 0.7em;
}

.filtered-patients {
    position: absolute;
    background-color: white;
    border-radius: 0 0 12px 12px;
    box-shadow: 0px 4px 15px 0px rgba(51, 34, 9, 0.12);
    max-height: 15em;
    overflow: auto;
    z-index: 500;
    width: 100%;
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

.patient {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9em;
    border-bottom: 1px solid #f1f4f8;
    color: #30343a;
    font-size: 0.8em;

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
        color: $primary;
        margin: 0.5em;
    }

    button {
        i {
            margin-top: -0.15em;
            margin-right: 0.28em;
        }
    }
}

p.no-found {
    text-align: center;
    margin: 0.7em;
    color: #a3a5a8;
    font-size: 0.8em;
    i {
        margin-right: 0.3em;
        color: #dce0e5;
    }
}

.height-enter-active,
.height-leave-active {
    transition: all 0.5s;
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
