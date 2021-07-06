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
                            patientsArray = $vs.sortData(
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
                            patientsArray = $vs.sortData(
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
                            patientsArray = $vs.sortData(
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
                >
                    <vs-td checkbox>
                        <vs-checkbox :val="patient" v-model="selected" />
                    </vs-td>
                    <vs-td>
                        <div class="d-flex">
                            <vs-avatar v-if="patient.avatarUrl">
                                <img :src="patient.avatarUrl" alt="avatar" />
                            </vs-avatar>
                            <vs-avatar v-else>
                                <img
                                    :src="'/img/avatar-default.svg'"
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
                    </vs-td>
                    <vs-td>
                        <div class="d-flex jc-lc">
                            <vs-button flat @click="removePatient(patient.id)">
                                <i class="fe fe-user-minus"></i>
                                Retirer de mes patients
                            </vs-button>

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
                <i class="fe fe-user-minus"></i>
                Aucun patient n'a été trouvé avec "<strong>{{ search }}</strong
                >",<br /> </template
        ></vs-table>
    </div>
</template>

<script>
export default {
    name: "PatientList",
    props: {
        patients: Array,
        doctor: Object,
    },
    data() {
        return {
            search: "",
            allCheck: false,
            page: 1,
            max: 5,
            active: 0,
            selected: [],
            patientsArray: this.patients,
        };
    },
    methods: {
        removePatient(patientId) {
            this.axios
                .get(`/kine/${this.doctor.id}/remove/patient/${patientId}`)
                .then((response) => {
                    console.log(response);
                    document.location.href = `/kine/${this.doctor.id}/patients`;
                })
                .catch((error) => {
                    console.log(error);
                    this.$vs.notification({
                        text: `Erreur`,
                    });
                });
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
};
</script>

<style lang="scss"  scoped>
.vs-input {
    width: 100%;
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
