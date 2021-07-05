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
                    <vs-th>
                        <!-- sort
                        @click="
                            patientsArray = $vs.sortData(
                                $event,
                                patientsArray,
                                'id'
                            )
                        "
                    >
                        Id -->
                    </vs-th>
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
                        <div class="d-flex jc-lc">
                            <vs-button flat>
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
                <i class="fe fe-cloud-off"></i>
                Rien trouvé.
            </template></vs-table
        >
    </div>
</template>

        </vs-table>
    </div>
</template>
<script>
export default {
    name: "PatientList",
    props: {
        patients: Array,
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
