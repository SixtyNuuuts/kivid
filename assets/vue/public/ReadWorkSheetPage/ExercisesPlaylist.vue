<template>
    <div>
        <div class="exercises-list">
            <div v-if="loading">
                <div class="exercise loading-block">
                    <div class="loading-gray thumbnail-wrapper"></div>
                    <div class="content">
                        <div class="loading-gray h2 w-45"></div>
                        <div class="details">
                            <div class="series-reps">
                                <div class="loading-gray series w-25"></div>
                                <div class="loading-gray reps w-15"></div>
                            </div>
                            <div class="loading-gray option w-25"></div>
                            <div class="loading-gray tempo w-15"></div>
                            <div class="loading-gray hold w-25"></div>
                        </div>
                        <div class="commentary">
                            <div class="loading-gray title w-25"></div>
                            <div class="loading-gray input"></div>
                        </div>
                    </div>
                </div>
                <div class="exercise loading-block">
                    <div class="loading-gray thumbnail-wrapper"></div>
                    <div class="content">
                        <div class="loading-gray h2 w-35"></div>
                        <div class="details">
                            <div class="series-reps">
                                <div class="loading-gray series w-15"></div>
                                <div class="loading-gray reps w-25"></div>
                            </div>
                            <div class="loading-gray option w-25"></div>
                            <div class="loading-gray tempo w-15"></div>
                            <div class="loading-gray hold w-25"></div>
                        </div>
                        <div class="commentary">
                            <div class="loading-gray title w-25"></div>
                            <div class="loading-gray input"></div>
                        </div>
                    </div>
                </div>
                <div class="exercise loading-block">
                    <div class="loading-gray thumbnail-wrapper"></div>
                    <div class="content">
                        <div class="loading-gray h2 w-45"></div>
                        <div class="details">
                            <div class="series-reps">
                                <div class="loading-gray series w-15"></div>
                                <div class="loading-gray reps w-15"></div>
                            </div>
                            <div class="loading-gray option w-25"></div>
                            <div class="loading-gray tempo w-15"></div>
                            <div class="loading-gray hold w-25"></div>
                        </div>
                        <div class="commentary">
                            <div class="loading-gray title w-25"></div>
                            <div class="loading-gray input"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div
                    v-for="(exercise, i) in getExercises"
                    :key="i"
                    class="exercise"
                    :class="{
                        disabled:
                            exercise !== getCurrentExercise &&
                            !exercise.isCompleted,
                    }"
                >
                    <div class="thumbnail-wrapper">
                        <div
                            v-if="
                                exercise === getCurrentExercise &&
                                !exercise.isCompleted
                            "
                            class="btn-playlist"
                        >
                            <vs-button
                                @click="openVideoPlayer(null)"
                                class="current-exe"
                            >
                                <span v-if="0 === i">Démarrer</span>
                                <span v-else>Reprendre</span>
                            </vs-button>
                        </div>
                        <div
                            v-if="exercise.isCompleted"
                            class="btn-playlist"
                        >
                            <vs-button @click="openVideoPlayer(exercise)">
                                <span>Revoir</span>
                            </vs-button>
                        </div>
                        <div
                            class="thumbnail"
                            :style="{
                                backgroundImage: `url('${exercise.video.thumbnailUrl}')`,
                            }"
                        ></div>
                    </div>
                    <div class="content">
                        <h2>
                            <span>{{ exercise.video.name }}</span>
                        </h2>
                        <div class="details">
                            <div class="series-reps">
                                <div class="series">
                                    <i class="kiv-series icon-18"></i
                                    ><span>{{ exercise.numberOfSeries }}</span>
                                    séries
                                </div>
                                <div
                                    v-if="exercise.numberOfRepetitions"
                                    class="reps"
                                >
                                    <i class="kiv-reps icon-19"></i
                                    ><span>{{
                                        exercise.numberOfRepetitions
                                    }}</span>
                                    répétitions
                                </div>
                            </div>
                            <div v-if="exercise.option" class="option">
                                Options : <span>{{ exercise.option }}</span>
                            </div>
                            <div v-if="exercise.hold" class="hold">
                                Tenir : <span>{{ exercise.hold }}s</span>
                            </div>
                            <div v-if="exercise.tempo" class="tempo">
                                Tempo : <span>{{ exercise.tempo }}</span>
                                <vs-tooltip class="kiv-help">
                                    <div class="icon-help">
                                        <i class="fas fa-question"></i>
                                    </div>
                                    <template #tooltip>
                                        Le tempo, c'est tout simplement le
                                        rythme de la répétition, indiquant que
                                        le mouvement doit être lent, explosif ou
                                        contrôlé.
                                    </template>
                                </vs-tooltip>
                            </div>
                        </div>
                        <div class="commentary" v-if="exercise.commentaries.length && exercise.commentaries.filter(c=>c.content!='').length">
                            <div class="commentary-doc-read">
                                <p class="commentary-label">
                                    <i class="far fa-comment-alt"></i>
                                        Commentaire
                                </p>
                                <div class="commentary-history-list">
                                    <div
                                        v-for="(
                                            commentary, i
                                        ) in exercise.commentaries"
                                        :key="i"
                                        class="commentary-history"
                                    >
                                        <div v-if="commentary.content!=''">
                                            <h5>
                                                <span class="commentary-user">
                                                    <vs-avatar
                                                        size="14"
                                                        class="commentary-user-avatar"
                                                        circle
                                                    >
                                                        <img
                                                            v-if="commentary.doctor"
                                                            :src="
                                                                commentary.doctor.avatarUrl
                                                                    ? commentary.doctor.avatarUrl
                                                                    : '/img/avatar-default.svg'
                                                            "
                                                            :alt="`Avatar de ${commentary.doctor.firstname} ${commentary.doctor.lastname}`"
                                                        />
                                                    </vs-avatar>
                                                    <span class="commentary-user-name">
                                                        <span
                                                            v-if="
                                                                commentary.doctor &&
                                                                (commentary.doctor.firstname ||
                                                                commentary.doctor.lastname)
                                                            "
                                                        >
                                                            {{ commentary.doctor.firstname }}
                                                            {{ commentary.doctor.lastname }}
                                                        </span>
                                                    </span>
                                                </span><span class="sepa-comm-label-title">|</span><span>{{ formatDate(commentary.createdAt) }}</span>
                                            </h5>
                                            <div 
                                                class="commentary-zone"
                                            >
                                                <div 
                                                    class="commentary-zone-read nobtns"
                                                >
                                                    <p>{{ commentary.content }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-if="!$parent.stripeSubscription"
                class="request-subscription"
            >
                <div class="icon-request-subscription">
                    <i class="kiv-subscription icon-20"></i>
                </div>
                <div class="text-request-subscription">
                    <p>
                        Cette fiche a été générée par Kivid, n'hésitez pas à vous inscrire pour en découvrir d'autres !
                    </p>
                </div>
                <div class="btn-request-subscription">
                    <vs-button @click="kividInscription()">
                        Je m'inscris
                    </vs-button>
                </div>
            </div>
        </div>
        <transition name="fade">
            <VideoPlayer
                v-if="videoPlayerToggle"
                :worksheet="getWorksheet"
                :exercise="getCurrentExercise"
                :exercises="getExercises"
                :lastExercise="getTheLastExercise"
                @closeVideoPlayer="closeVideoPlayer"
            />
        </transition>
    </div>
</template>

<script>
import VideoPlayer from "./ExercisesPlaylist/VideoPlayer.vue";
import moment from "moment";

export default {
    components: {
        VideoPlayer,
    },
    props: {
        loading: Boolean,
        worksheet: Object,
        exercises: Array,
    },
    data() {
        return {
            videoPlayerToggle: false,
            emptyExercise: {
                numberOfRepetitions: null,
                numberOfSeries: null,
                position: null,
                video: {
                    name: null,
                    youtubeId: null,
                },
            },
            exerciseForRePlaying: null,
        };
    },
    computed: {
        getWorksheet() {
            return this.worksheet;
        },
        getExercises() {
            return this.exercises;
        },
        getCurrentExercise() {
            let currentExercise = this.emptyExercise;

            if (
                this.getExercises &&
                this.getExercises.find((e) => e.isCompleted === false)
            ) {
                currentExercise = this.getExercises.find(
                    (e) => e.isCompleted === false
                );
            }

            if (this.exerciseForRePlaying) {
                currentExercise = this.exerciseForRePlaying;
            }

            return currentExercise;
        },
        getTheLastExercise() {
            return this.getExercises[this.getExercises.length - 1];
        },
    },
    methods: {
        openVideoPlayer(exercise) {
            if(exercise)
            {                    
                let s = true;
                this.exercises.forEach(e => {
                    if(exercise.id === e.id)
                        s = false;  
                    e.isCompleted = s;
                });
            }

            this.videoPlayerToggle = true;
            document.body.classList.add("no-scrollbar");
        },
        closeVideoPlayer() {
            this.exerciseForRePlaying = null;
            this.videoPlayerToggle = false;
            document.body.classList.remove("no-scrollbar");
        },
        formatDate(datetime) {
            return moment(datetime).format("DD/MM/YYYY");
        },
        kividInscription()
        {
            window.open('/inscription');
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

.exercises-list {
    width: 100%;

    .exercise {
        display: flex;
        flex-direction: column;

        &:not(:last-child) {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
        }

        @media (min-width: 992px) {
            flex-direction: row;
        }

        &.loading-block {
            .loading-gray {
                border-radius: 0.4rem;
            }

            .thumbnail-wrapper {
                border-radius: 0.8rem;
            }

            .content {
                .h2 {
                    height: 2.5rem;
                    position: relative;
                    margin-bottom: 2.5rem;
                }

                .details {
                    .series-reps {
                        .series {
                            height: 1.8rem;
                        }

                        .reps {
                            height: 1.8rem;
                        }
                    }
                    .option,
                    .tempo,
                    .hold {
                        height: 1.6rem;
                    }
                }
                .commentary {
                    .title {
                        height: 1.3rem;
                        margin-top: 2.5rem;
                        margin-bottom: 1rem;
                    }
                    .input {
                        height: 5rem;
                        width: 100%;
                        border-radius: 0.8rem;
                    }
                }
            }
        }

        .thumbnail-wrapper {
            height: 52vw;
            width: 100%;
            background-color: $gray-dark;
            border-radius: 0.8rem;
            margin-right: 0;
            margin-bottom: 2rem;
            position: relative;
            overflow: hidden;

            @media (min-width: 768px) {
                height: 33vw;
            }

            @media (min-width: 900px) {
                height: 36vw;
            }

            @media (min-width: 992px) {
                height: 24vw;
                margin-right: 2.3rem;
                margin-bottom: 0;
            }

            @media (min-width: 1090px) {
                height: 25vw;
            }

            @media (min-width: 1200px) {
                height: 26vw;
            }

            @media (min-width: 1300px) {
                height: 19vw;
                max-width: 56rem;
                max-height: 31.7rem;
                min-width: 56rem;
                min-height: 31.7rem;
            }

            .btn-playlist {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .vs-button {
                    box-shadow: 0px 0rem 1.5rem rgba(173, 100, 74, 0.88);

                    &.current-exe {
                        background-color: #faf8f4;
                        color: $orange;
                    }
                }

                &:hover ~ .thumbnail {
                    transform: scale(1.05);
                    opacity: 1;
                }
            }

            .thumbnail {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                transform: scale(1);
                transition: all 3s;
                opacity: 0.9;
            }
        }

        .content {
            flex-grow: 1;
            height: 100%;
            font-size: 1.4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media (min-width: 992px) {
                width: 50%;
            }

            h2 {
                position: relative;
                margin-bottom: 2.5rem;
                margin-left: 2rem;
                max-width: 80%;

                &::before {
                    content: "";
                    display: block;
                    width: 0.3rem;
                    height: 2.2rem;
                    background: $orange;
                    position: absolute;
                    left: -2rem;
                    top: 0.2rem;
                    border-radius: 0.3rem;
                }
            }

            h2 {
                position: relative;
                margin-bottom: 2.5rem;
                margin-left: 2rem;
                max-width: 95%;

                @media (min-width: 768px) {
                    max-width: 55vw;
                }

                @media (min-width: 870px) {
                    max-width: 58vw;
                }

                @media (min-width: 992px) {
                    max-width: 18vw;
                }

                @media (min-width: 1050px) {
                    max-width: 19vw;
                }

                @media (min-width: 1100px) {
                    max-width: 20vw;
                }

                @media (min-width: 1250px) {
                    max-width: 22vw;
                }

                @media (min-width: 1350px) {
                    max-width: 25vw;
                }

                @media (min-width: 1400px) {
                    max-width: 27vw;
                }

                @media (min-width: 1450px) {
                    max-width: 29vw;
                }

                @media (min-width: 1550px) {
                    max-width: 35vw;
                }

                @media (min-width: 1650px) {
                    max-width: 40vw;
                }

                span {
                    display: block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                &::before {
                    content: "";
                    display: block;
                    width: 0.3rem;
                    height: 2.2rem;
                    background: $orange;
                    position: absolute;
                    left: -2rem;
                    top: 0.2rem;
                    border-radius: 0.3rem;
                }
            }

            .details {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                border-top: 1px solid $gray-middle;
                border-bottom: 1px solid $gray-middle;
                padding: 1.7rem 0;

                > div {
                    margin: 0.8rem 0;
                }

                i {
                    color: $orange;
                    margin-right: 0.6rem;
                    position: relative;
                }

                span {
                    font-weight: 800;
                }

                .series-reps {
                    display: flex;

                    span {
                        margin-right: 0.4rem;
                    }

                    .series {
                        margin-right: 1.9rem;
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 2rem;
                            top: 0rem;
                        }
                    }

                    .reps {
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 1.7rem;
                            top: 0.05rem;
                        }
                    }
                }
                .option,
                .tempo,
                .hold {
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    max-width: 95%;

                    @media (min-width: 768px) {
                        max-width: 55vw;
                    }

                    @media (min-width: 870px) {
                        max-width: 58vw;
                    }

                    @media (min-width: 992px) {
                        max-width: 18vw;
                    }

                    @media (min-width: 1050px) {
                        max-width: 19vw;
                    }

                    @media (min-width: 1100px) {
                        max-width: 20vw;
                    }

                    @media (min-width: 1250px) {
                        max-width: 22vw;
                    }

                    @media (min-width: 1350px) {
                        max-width: 25vw;
                    }

                    @media (min-width: 1400px) {
                        max-width: 27vw;
                    }

                    @media (min-width: 1450px) {
                        max-width: 29vw;
                    }

                    @media (min-width: 1550px) {
                        max-width: 35vw;
                    }

                    @media (min-width: 1650px) {
                        max-width: 40vw;
                    }

                    span {
                        display: inline-block;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-left: 0.5rem;
                        position: relative;
                        top: 0.05rem;
                    }

                    .kiv-help {
                        margin-left: 0.6rem;
                        position: relative;
                        top: 0.1rem;

                        .icon-help {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 1.8rem;
                            height: 1.8rem;
                            min-width: 1.8rem;
                            min-height: 1.8rem;
                            max-height: 1.8rem;
                            border-radius: 50%;
                            border: 1px solid #d6cfbe;

                            &:hover {
                                border: 1px solid #d8d1c0;

                                i {
                                    color: #d8d1c0;
                                }
                            }

                            i {
                                font-size: 0.8rem;
                                color: #d6cfbe;
                                transition: all;
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
            .commentary {
                p {
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                }

                .commentary-create,
                .commentary-zone {
                    display: flex;

                    .vs-button {
                        transform: none;
                        border-radius: 0 0.8rem 0.8rem 0;

                        &.disactived {
                            background-color: #e5ddcb;
                            box-shadow: none;
                        }

                        .vs-button__content {
                            i {
                                margin-right: 0;
                            }
                        }
                    }
                }

                .commentary-create {
                    margin-top: 1.25rem;
                    position: relative;
                    margin-right: 0.75rem;

                    label
                    {
                        position: absolute;
                        left: 1.9rem;
                        top: 1.7rem;
                        z-index: 1;
                        color: #cfc6b0;
                        pointer-events: none;
                    }
                }

                .commentary-zone {
                    .commentary-zone-read {
                        flex: 1;
                        padding: 1.005rem 1.5rem;
                        border: 0.1rem solid #e7dfcd;
                        border-radius: 0.8rem 0 0 0.8rem;
                        // border: 1px solid #ebe4d5;
                        overflow-y: auto;
                        // padding: 1.6rem 1.7rem;
                        line-height: 1.3;
                        // font-weight: 700;
                        font-style: italic;
                        font-size: 1.3rem;

                        &.full-border-radius {
                            border-radius: 0.8rem;
                        }

                        .light {
                            font-weight: 400;
                            color: $gray-dark;
                        }

                        &.nobtns
                        {
                            border-radius: 0.8rem;
                        }
                        &.btns-edit
                        {
                            border-radius: 0.8rem;
                            padding-right: 6rem;
                        }
                    }

                    .commentary-zone-btns
                    {
                        display: flex;
                        .vs-button {
                            transform: none;
                            border-radius: 0 0.8rem 0.8rem 0;
                            background-color: #fff;
                            box-shadow: none;
                            border: 0.1rem solid #e7dfcd;
                            border-left: none;
                            --vs-button-padding: 1.2rem 1rem;
                            display: flex;
                            align-items: flex-start;

                            &.btn-edit-commentary
                            {
                                border-radius: 0;
                            }

                            &:hover {
                                background-color: #fff;

                                i {
                                    color: $gray-dark;
                                }
                            }

                            i {                                
                                font-size: 1.3rem;
                                color: $gray-dark;

                                &.fa-trash
                                {
                                    font-size: 1.2rem;
                                }
                            }
                        }

                    }
                    
                    .commentary-zone-btns-inprogress
                    {
                        display: flex;
                        position: relative;

                        .icon-edit-active
                        {
                            position: absolute;
                            top: 0.8rem;
                            right: 3.6rem;
                            width: 2.3rem;
                            height: 2.3rem;
                            color: #fff;
                            background-color: #fb8b68;
                            border-radius: 50%;
                            z-index: 2;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;

                            i {
                                position: relative;
                                left: -0.5rem;
                                font-size: 1.2rem;
                            }
                        }
                        .vs-button {
                            transform: none;
                            border-radius: 0 0.8rem 0.8rem 0;
                            background-color: #fff;
                            box-shadow: none;
                            border-left: none;
                            --vs-button-padding: 0rem 0rem;
                            position: absolute;
                            top: 0.4rem;
                            right: 0.5rem;

                            &:disabled {
                                opacity: 1;
                                background: #fff !important;
                                color: $orange !important;
                            }

                            &:hover {
                                background-color: #fff;

                                i {
                                    color: $orange;
                                }
                            }

                            i {
                                font-size: 1.5rem;
                                color: $orange;
                            }
                        }
                    }

                }

                .commentary-doc-read {
                    background: $white;
                    padding: 1.2rem;
                    border-radius: 0 0 0.8rem 0.8rem;
                    padding-left: 1.8rem;

                    .commentary-label
                    {
                        margin-bottom: 0.5rem;
                        margin-top: 0.3rem;
                        color: #c1b79d;
                        font-weight: bold;

                        i {
                            font-size: 1.3rem;
                            position: relative;
                            top: 0.08rem;
                            margin-right: 0.3rem;
                        }
                    }

                    .commentary-history-list
                    {
                        max-height: 27.2rem;
                        overflow: auto;
                        /* box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.05); */
                        padding-right: 0.8rem;
                        padding-bottom: 0.8rem;
                        border-radius: 0.4rem;

                        .commentary-history
                        {
                            margin-top: 1.2rem;

                            &:first-child 
                            {
                                margin-top: 0.8rem;
                            }

                            .commentary-history-message
                            {
                                border-radius: 0.8rem;
                                padding: 1.1rem 1.5rem;
                                border: 0.1rem solid #e7dfcd;

                                p
                                {
                                    margin-top: 0;
                                    font-style: italic;
                                    font-size: 1.3rem;
                                }
                            }
                        }
                    }

                    &:not(:last-child) {
                        margin-bottom: 1.2rem;
                    }

                    h5 {
                        color: $gray-dark;
                        margin: 0;
                        font-size: 1rem;
                        display: flex;
                        align-items: center;
                        white-space: nowrap;
                        margin-bottom: 0.15rem;

                        .commentary-user
                        {
                            display: flex;
                            align-items: center;

                            .commentary-user-avatar {
                                position: relative;
                                top: -0.15rem;
                                margin-right: 0.1rem;
                                flex: none;
                                min-width: 14px;
                            }
                        }

                        .commentary-user-name,
                        .commentary-worksheet-session
                        {
                            margin: 0 0.3rem;
                        }

                        .sepa-comm-label-title
                        {
                            display: inline-block;
                            margin: 0 0.4rem;
                            margin-left: 0.25rem;
                            font-weight: normal;
                        }
                    }

                    p {
                        margin: 0;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
}
</style>
