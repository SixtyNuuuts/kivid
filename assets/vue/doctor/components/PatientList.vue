<template>
    <div>
        <vs-table v-model="selected">
            <template #header>
                <vs-input v-model="search" border placeholder="Filtrer" />
            </template>
            <template #thead>
                <vs-tr>
                    <vs-th>
                        <vs-checkbox
                            :indeterminate="
                                selected.length == patientsArray.length
                            "
                            v-model="allCheck"
                            @change="
                                selected = $vs.checkAll(selected, patientsArray)
                            "
                        />
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            patientsArray = sortData(
                                $event,
                                patientsArray,
                                'isVerified'
                            )
                        "
                    >
                        Statut
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            patientsArray = sortData(
                                $event,
                                patientsArray,
                                'lastname'
                            )
                        "
                    >
                        Nom
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            patientsArray = sortData(
                                $event,
                                patientsArray,
                                'email'
                            )
                        "
                    >
                        Email
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            patientsArray = sortData(
                                $event,
                                patientsArray,
                                'birthdate'
                            )
                        "
                    >
                        Age
                    </vs-th>
                    <vs-th> </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr
                    :key="i"
                    v-for="(patient, i) in $vs.getPage(
                        $vs.getSearch(patientsArray, search),
                        page,
                        max
                    )"
                    :data="patient"
                    :is-selected="!!selected.includes(patient)"
                    not-click-selected
                    :class="{ unverified: !patient.isVerified }"
                >
                    <vs-td checkbox>
                        <vs-checkbox :val="patient" v-model="selected" />
                    </vs-td>
                    <vs-td class="status">
                        <div v-if="patient.isVerified">
                            <div class="icon-active-account"></div>
                            <p>ACTIF</p>
                        </div>
                        <div v-else>
                            <div class="icon-inactive-account"></div>
                            <p>INACTIF</p>
                        </div>
                    </vs-td>
                    <vs-td>
                        <div class="d-flex">
                            <vs-avatar v-if="patient.avatarUrl">
                                <img :src="patient.avatarUrl" alt="avatar" />
                            </vs-avatar>
                            <vs-avatar v-else>
                                <img
                                    src="/img/avatar-default.svg"
                                    alt="avatar"
                                />
                            </vs-avatar>
                            <p>
                                {{ patient.lastname }}
                                {{ patient.firstname }}
                            </p>
                        </div>
                    </vs-td>
                    <vs-td>
                        {{ patient.email }}
                    </vs-td>
                    <vs-td>
                        {{ getAge(patient.birthdate) }}
                        <span v-if="patient.birthdate" class="age"> ans</span>
                    </vs-td>
                    <vs-td>
                        <div class="d-flex jc-lc">
                            <div v-html="removePatient(patient.id)"></div>
                            <vs-button plain>
                                <i class="fe fe-file-plus"></i>
                                Prescrire une fiche
                            </vs-button>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination
                    v-model="page"
                    :length="
                        $vs.getLength($vs.getSearch(patientsArray, search), max)
                    "
                />
            </template>
            <template #notFound>
                <div v-if="search">
                    <i class="fe fe-user-minus"></i>
                    Aucun patient n'a été trouvé avec "<strong>{{
                        search
                    }}</strong
                    >"
                </div>
                <div v-else>
                    <i class="fe fe-user-minus"></i>
                    Vous n'avez aucun patient.
                </div>
            </template>
        </vs-table>
    </div>
</template>

<script>
import f from "../../services/function";

export default {
    name: "PatientList",
    props: {
        patients: Array,
        doctor: Object,
        removePatientForm: String,
    },
    data() {
        return {
            search: "",
            allCheck: false,
            page: 1,
            max: 10,
            selected: [],
            patientsArray: this.patients,
        };
    },
    methods: {
        removePatient(patientId) {
            const removePatientFormWithPatientId =
                this.removePatientForm.replace(
                    `<input type="hidden" name="patient_id" value="">`,
                    `<input type="hidden" name="patient_id" value="${patientId}">`
                );

            return removePatientFormWithPatientId;
        },
        getAge(dateString) {
            return f.generateAgeFromDateOfBirth(dateString);
        },
        sortData(evt, data, sortKey, type) {
            return f.sortData(evt, data, sortKey, type);
        },
    },
};
</script>

<style lang="scss">
$primary: #ffab2c;

.vs-input {
    width: 100%;
}

td.status {
    vertical-align: middle;
    div {
        display: flex;
        align-items: center;

        .icon-active-account,
        .icon-inactive-account {
            width: 1.1em;
            height: 1.1em;
            border-radius: 50%;
            border: 2px solid #d9e2ef;
        }

        .icon-active-account {
            background-color: #42ba96;
        }

        .icon-inactive-account {
            width: 1em;
            height: 1em;
            border: 3px solid #d9e2ef;
            background-color: #d9e2ef9e;
        }

        p {
            margin: 0;
            margin-left: 0.4em;
            color: #abbcd5;
            font-size: 0.8em;
        }
    }
}

tr.unverified {
    position: relative;

    td:not(:first-child):not(:nth-child(2)):not(:last-child) {
        opacity: 0.25;
        pointer-events: none;
    }
}

td {
    .d-flex {
        display: flex;

        &.jc-lc {
            justify-content: flex-end;
        }
    }

    p {
        display: flex;
        margin-bottom: 0;
        align-items: center;
    }

    .vs-avatar-content {
        margin-right: 1em;
    }

    button {
        i {
            margin-top: -0.15em;
            margin-right: 0.28em;
        }
    }
}
</style>
