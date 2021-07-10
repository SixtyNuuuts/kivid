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
                                selected.length == doctorWorksheetsArray.length
                            "
                            v-model="allCheck"
                            @change="
                                selected = $vs.checkAll(
                                    selected,
                                    doctorWorksheetsArray
                                )
                            "
                        />
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorWorksheetsArray = sortData(
                                $event,
                                doctorWorksheetsArray,
                                'createdAt'
                            )
                        "
                    >
                        Date
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorWorksheetsArray = sortData(
                                $event,
                                doctorWorksheetsArray,
                                'title'
                            )
                        "
                    >
                        Nom
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorWorksheetsArray = sortData(
                                $event,
                                doctorWorksheetsArray,
                                'exercises'
                            )
                        "
                    >
                        Exercices
                    </vs-th>
                    <vs-th class="tags">Mots-Clés</vs-th>
                    <vs-th> </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr
                    :key="i"
                    v-for="(worksheet, i) in $vs.getPage(
                        $vs.getSearch(doctorWorksheetsArray, search),
                        page,
                        max
                    )"
                    :data="worksheet"
                    :is-selected="!!selected.includes(worksheet)"
                    not-click-selected
                >
                    <vs-td checkbox>
                        <vs-checkbox :val="worksheet" v-model="selected" />
                    </vs-td>
                    <vs-td>
                        {{ formatDate(worksheet.createdAt) }}
                    </vs-td>
                    <vs-td>
                        {{ worksheet.title }}
                    </vs-td>
                    <vs-td>
                        {{ worksheet.exercises.length }}
                    </vs-td>
                    <vs-td>
                        <div
                            class="md-chip md-chip-raised"
                            v-for="tag in worksheet.exercisesTags"
                            :key="tag"
                        >
                            {{ tag }}
                        </div>
                    </vs-td>
                    <vs-td>
                        <div class="d-flex jc-lc">
                            <vs-button plain>
                                <i class="fe fe-file-plus"></i>
                                Prescrire
                            </vs-button>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination
                    v-model="page"
                    :length="
                        $vs.getLength(
                            $vs.getSearch(doctorWorksheetsArray, search),
                            max
                        )
                    "
                />
            </template>
            <template #notFound>
                <div v-if="search">
                    <i class="fe fe-file-minus"></i>
                    Aucune fiche n'a été trouvée avec "<strong>{{
                        search
                    }}</strong
                    >"
                </div>
                <div v-else>
                    <i class="fe fe-file-minus"></i>
                    Vous n'avez aucune fiche.
                </div>
            </template>
        </vs-table>
    </div>
</template>

<script>
import f from "../../services/function";

export default {
    name: "WorkSheetList",
    props: {
        doctorWorksheets: Array,
    },
    data() {
        return {
            search: "",
            allCheck: false,
            page: 1,
            max: 10,
            selected: [],
            doctorWorksheetsArray: this.doctorWorksheets,
        };
    },
    created() {
        this.doctorWorksheetsArray.map((worksheet) => {
            return (worksheet.exercisesTags = worksheet.exercises.reduce(
                (r2, exercise) => {
                    exercise.video.tags.forEach((tag) => {
                        if (!r2.includes(tag.name)) {
                            r2.push(tag.name);
                        }
                    });
                    return r2;
                },
                []
            ));
        });
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

th.tags {
    cursor: initial;
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

.md-chip {
    display: inline-block;
    background: #e0e0e0;
    padding: 0 0.7em;
    border-radius: 0.9em;
    font-size: 0.7em;
    margin: 0 0.3em;
    text-transform: uppercase;
    padding-top: 0.3em;
    &.md-chip-hover:hover {
        background: #ccc;
    }
}

.md-chip-raised {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
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
