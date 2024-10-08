<template>
    <div class="container" id="worksheet">
        <header>
            <div v-if="loading" class="loading-block">
                <div class="title">
                    <!-- <i class="kiv-arrow-left icon-31"></i> -->
                    <div class="loading-gray h1"></div>
                </div>
                <div class="loading-gray part-of-body"></div>
            </div>
            <div v-else class="read-worksheet-title">
                <div class="title">
                    <h1>{{ getWorksheet.title }}</h1>
                </div>
                <TagPartOfBody
                    v-if="getWorksheet.partOfBody"
                    class="btn-light btn-light-plus"
                    :class="{ completed: allExercisesIsCompleted }"
                    :partOfBody="getWorksheet.partOfBody"
                />
            </div>
        </header>
        <div class="info">
            <transition name="fade">
                <div v-if="!loading && allExercisesIsCompleted">
                    <i class="kiv-confettis">
                        <img
                            src="../../img/icons/colored/confettis.svg"
                            alt="Icone de confettis"
                        />
                    </i>
                    <p>
                        Félicitations, vous avez fait tous les exercices de la
                        fiche.
                    </p>
                </div>
                <div v-if="!loading && !allExercisesIsCompleted">
                    <i class="kiv-info icon-17"></i>
                    <p>
                        Cette fiche a été générée par Kivid, n'hésitez pas à vous inscrire pour en découvrir d'autres !
                    </p>
                </div>
                <div v-if="loading" class="loading-block">
                    <i class="kiv-info icon-17"></i>
                    <div class="loading-gray w-55 p"></div>
                </div>
            </transition>
        </div>
        <div class="btn-timing-frieze-mobile">
            <vs-button
                class="secondary w-100"
                @click="modalTimingFriezeMobile = !modalTimingFriezeMobile"
            >
                Frise chronologique
            </vs-button>
        </div>
        <main>
            <vs-dialog class="modal-mobile" v-model="modalTimingFriezeMobile">
                <TimingFrieze
                    :loading="loading"
                    :worksheet="getWorksheet"
                    :exercises="getExercises"
                />
            </vs-dialog>
            <section id="timing-frieze">
                <TimingFrieze
                    :loading="loading"
                    :worksheet="getWorksheet"
                    :exercises="getExercises"
                />
            </section>
            <section id="exercises-playlist">
                <ExercisesPlaylist
                    :loading="loading"
                    :worksheet="getWorksheet"
                    :exercises="getExercises"
                />
            </section>
        </main>
    </div>
</template>

<script>
import Vue from "vue";
import f from "../services/function";
import TimingFrieze from "./ReadWorkSheetPage/TimingFrieze.vue";
import ExercisesPlaylist from "./ReadWorkSheetPage/ExercisesPlaylist.vue";
import TagPartOfBody from "../components/TagPartOfBody.vue";

export default {
    components: {
        ExercisesPlaylist,
        TimingFrieze,
        TagPartOfBody,
    },
    data() {
        return {
            worksheetId: null,
            worksheet: {},
            exercises: [],
            modalTimingFriezeMobile: false,
            loading: false,
        };
    },
    computed: {
        getWorksheet() {
            return this.worksheet;
        },
        getExercises() {
            return this.exercises;
        },
        allExercisesIsCompleted() {
            if (this.getExercises) {
                return !this.getExercises.filter((e) => !e.isCompleted).length;
            }
        },
    },
    methods: {
    },
    created() {
        Vue.prototype.$vs = this.$vs;

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.worksheetId = data.worksheetId;

        this.loading = true;

        this.axios
            .get(
                `/fiche/get/${this.worksheetId}`
            )
            .then((response) => {
                this.worksheet = response.data;
                this.exercises = f.sortByPosition(
                    this.worksheet.exercises.map((exercise) => {
                        return {
                            ...exercise,
                            isCompleted:false,
                            commentaries: f.sortByCreatedAtAsc(
                                exercise.commentaries
                            ),
                        };
                    })
                );

                this.loading = false;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                console.error(errorMess);
            });
    },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

#worksheet {
    @media (max-width: 790px) {
        padding-top: 1.8rem;
    }

    .btn-timing-frieze-mobile {
        width: 100%;
        margin-bottom: 2.5rem;
        display: block;

        @media (min-width: 768px) {
            display: none;
        }
    }

    main {
        #timing-frieze {
            width: 100%;
            background: white;
            margin-right: 2.3rem;
            border-radius: 0.8rem;
            display: none;
            max-width: initial;

            @media (min-width: 768px) {
                display: block;
                width: 50%;
                max-width: 26rem;
                min-height: 45rem;
            }

            @media (min-width: 1300px) {
                max-width: 31rem;
            }
        }
    }

    .read-worksheet-title
    {
        position: relative;
    }

    header > div .title
    {
        max-width: initial;
        width: 100%;
        margin-bottom: 2.5rem;

        h1 
        {
            max-width: 87.6%;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.1;
            padding-top: 0.4rem;
            padding-bottom: 0.5rem;
            margin: 0;
            white-space: initial;
            max-height: 8rem;
            @media (max-width: 790px) {
                font-size: 2.4rem;
                max-height: 5.8rem;
            }
        }
    }
}
</style>
