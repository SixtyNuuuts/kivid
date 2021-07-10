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
                                selected.length ==
                                doctorPrescriptionsArray.length
                            "
                            v-model="allCheck"
                            @change="
                                selected = $vs.checkAll(
                                    selected,
                                    doctorPrescriptionsArray
                                )
                            "
                        />
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorPrescriptionsArray = sortData(
                                $event,
                                doctorPrescriptionsArray,
                                'createdAt'
                            )
                        "
                    >
                        Date
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorPrescriptionsArray = sortData(
                                $event,
                                doctorPrescriptionsArray,
                                'worksheet.title'
                            )
                        "
                    >
                        Fiche
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorPrescriptionsArray = sortData(
                                $event,
                                doctorPrescriptionsArray,
                                'patient.lastname'
                            )
                        "
                    >
                        Patient
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorPrescriptionsArray = sortData(
                                $event,
                                doctorPrescriptionsArray,
                                'progression'
                            )
                        "
                    >
                        Progression
                    </vs-th>

                    <vs-th> </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr
                    :key="i"
                    v-for="(prescription, i) in $vs.getPage(
                        $vs.getSearch(doctorPrescriptionsArray, search),
                        page,
                        max
                    )"
                    :data="prescription"
                    :is-selected="!!selected.includes(prescription)"
                    not-click-selected
                >
                    <vs-td checkbox>
                        <vs-checkbox :val="prescription" v-model="selected" />
                    </vs-td>
                    <vs-td>
                        {{ formatDate(prescription.createdAt) }}
                    </vs-td>
                    <vs-td>
                        {{ prescription.worksheet.title }}
                    </vs-td>
                    <vs-td>
                        {{ prescription.patient.lastname }}
                        {{ prescription.patient.firstname }}
                    </vs-td>
                    <vs-td>
                        <div class="progress">
                            <span
                                class="progress-bar"
                                :style="`width: ${prescription.progression}%`"
                            ></span>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination
                    v-model="page"
                    :length="
                        $vs.getLength(
                            $vs.getSearch(doctorPrescriptionsArray, search),
                            max
                        )
                    "
                />
            </template>
            <template #notFound>
                <div v-if="search">
                    <i class="fe fe-file-minus"></i>
                    Aucune prescription n'a été trouvée avec "<strong>{{
                        search
                    }}</strong
                    >"
                </div>
                <div v-else>
                    <i class="fe fe-file-minus"></i>
                    Vous n'avez aucune prescription.
                </div>
            </template>
        </vs-table>
    </div>
</template>

<script>
import f from "../../services/function";

export default {
    name: "PrescriptionList",
    props: {
        doctorPrescriptions: Array,
    },
    data() {
        return {
            search: "",
            allCheck: false,
            page: 1,
            max: 10,
            selected: [],
            doctorPrescriptionsArray: this.doctorPrescriptions,
        };
    },
    methods: {
        formatDate(datetime) {
            return f.formatDate(datetime);
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

.progress {
    width: 100%;
    max-width: 260px;
    height: 6px;
    background: #e1e4e8;
    border-radius: 3px;
    overflow: hidden;

    .progress-bar {
        display: block;
        height: 100%;
        background: linear-gradient(90deg, #ffd650, #ffb049 50%, #f59120 100%);
    }
}
</style>
