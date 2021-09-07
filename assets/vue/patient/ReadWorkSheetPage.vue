<template>
    <div class="container" id="read-worksheet">
        <header>
            <div class="title">
                <i class="kiv-arrow-left icon-31"></i>
                <h1>Mobilité</h1>
            </div>
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../../img/icons/part-of-body/jambe.svg"
                    alt="Icone Jambe"
                    class="icon-jambe"
                />
                Jambe
            </vs-button>
        </header>
        <div class="info">
            <i class="kiv-info icon-17"></i>
            <p>
                À la fin de vos exercices, vous aurez la possiblité d’écrire un
                bref commentaire.
            </p>
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
                <TimingFrieze />
            </vs-dialog>
            <section id="timing-frieze">
                <TimingFrieze />
            </section>
            <section id="exercises-playlist">
                <ExercisesPlaylist />
                <!-- <ExercisesPlaylist
                    :patient="patient"
                    :csrfTokenExerciseCompleted="csrfTokenExerciseCompleted"
                    :csrfTokenCreateExerciseStats="csrfTokenCreateExerciseStats"
                    :csrfTokenInitWorksheetSessions="
                        csrfTokenInitWorksheetSessions
                    "
                    :csrfTokenStartWorksheetSession="
                        csrfTokenStartWorksheetSession
                    "
                    :csrfTokenCreateCommentary="csrfTokenCreateCommentary"
                /> -->
            </section>
        </main>
    </div>
</template>

<script>
import TimingFrieze from "./components/TimingFrieze.vue";
import ExercisesPlaylist from "./components/ExercisesPlaylist.vue";
import f from "../services/function";

export default {
    components: {
        ExercisesPlaylist,
        TimingFrieze,
    },
    data() {
        return {
            patient: null,
            worksheetId: null,
            doctorView: null,
            csrfTokenInitWorksheetSessions: null,
            csrfTokenStartWorksheetSession: null,
            csrfTokenExerciseCompleted: null,
            csrfTokenCreateExerciseStats: null,
            csrfTokenCreateCommentary: null,
            modalTimingFriezeMobile: false,
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.worksheetId = data.worksheetId;
        this.doctorView = data.doctorView;
        this.csrfTokenInitWorksheetSessions =
            data.csrfTokenInitWorksheetSessions;
        this.csrfTokenStartWorksheetSession =
            data.csrfTokenStartWorksheetSession;
        this.csrfTokenExerciseCompleted = data.csrfTokenExerciseCompleted;
        this.csrfTokenCreateExerciseStats = data.csrfTokenCreateExerciseStats;
        this.csrfTokenCreateCommentary = data.csrfTokenCreateCommentary;
    },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

#read-worksheet {
    header {
        display: flex;
        align-items: flex-start;

        .title {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;

            i {
                font-size: 1.6rem;
                margin-right: 1.8rem;
                cursor: pointer;
            }

            h1 {
                margin: 0;
            }
        }

        .part-of-body {
            margin-top: 0.5rem;
            margin-left: 2rem;
        }
    }

    .info {
        border-radius: 0.5rem;
        background: $white;
        padding: 2.1rem;
        display: flex;
        align-items: center;
        margin-bottom: 2.5rem;

        @media (min-width: 992px) {
            margin-bottom: 3.5rem;
        }

        i.kiv-info {
            color: $gray-dark;
            font-size: 1.7rem;
            margin-right: 1rem;
        }

        p {
            margin: 0;
            font-size: 1.4rem;
        }
    }

    .btn-timing-frieze-mobile {
        width: 100%;
        margin-bottom: 2.5rem;
        display: block;

        @media (min-width: 576px) {
            display: none;
        }
    }

    main {
        display: flex;

        #timing-frieze {
            width: 100%;
            background: white;
            margin-right: 2.3rem;
            border-radius: 0.8rem;
            display: none;
            max-width: initial;

            @media (min-width: 576px) {
                display: block;
                width: 50%;
                max-width: 31rem;
            }
        }

        #exercises-playlist {
            width: 100%;

            @media (min-width: 576px) {
                width: 70%;
            }

            @media (min-width: 992px) {
                width: 80%;
            }
        }
    }
}
</style>
