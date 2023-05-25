<template>
    <div class="container" id="worksheet">
        <header>
            <div v-if="loading" class="loading-block">
                <div class="title">
                    <i class="kiv-arrow-left icon-31"></i>
                    <div class="loading-gray h1"></div>
                </div>
                <div class="loading-gray part-of-body"></div>
            </div>
            <div v-else>
                <div class="title">
                    <h1>{{ getWorksheet.title }}</h1>
                </div>
                <TagPartOfBody
                    v-if="getWorksheet.partOfBody"
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
                        Cette fiche est offerte par Kivid, n'hésitez pas à vous inscrire pour en découvrir d'autres !
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
        // getCurrentCommentary(exerciseCommentaries) {
        //     let commentary = {
        //         content: "",
        //         id: null,
        //     };

        //     if (
        //         exerciseCommentaries.length &&
        //         this.getCurrentWorksheetSession &&
        //         exerciseCommentaries.find(
        //             (c) =>
        //                 c.worksheetSession.id ===
        //                 this.getCurrentWorksheetSession.id
        //         )
        //     ) {
        //         commentary = exerciseCommentaries.find(
        //             (c) =>
        //                 c.worksheetSession.id ===
        //                 this.getCurrentWorksheetSession.id
        //         );
        //     }

        //     if (
        //         exerciseCommentaries.length &&
        //         !this.getCurrentWorksheetSession
        //     ) {
        //         commentary =
        //             exerciseCommentaries[exerciseCommentaries.length - 1];
        //     }

        //     return commentary;
        // },
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
                this.exercises = this.worksheet.exercises.map(e=>e={...e,isCompleted:false});
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
}
</style>
