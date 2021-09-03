<template>
    <section
        id="my-worksheets"
        class="kiv-block"
        :class="{ reduced: !$parent.myWorksheetsContent }"
    >
        <div
            class="toggle-content"
            @click="$parent.myWorksheetsContent = !$parent.myWorksheetsContent"
        >
            <i class="kiv-chevron-down icon-3"></i>
        </div>
        <h2>Mes fiches</h2>
        <transition name="height">
            <div v-if="$parent.myWorksheetsContent" class="worksheet-list">
                <div>
                    <div class="worksheet-header">
                        <h3 class="worksheet-title">Mobilité</h3>
                        <vs-button size="mini" class="tag part-of-body">
                            <img
                                src="../../../img/icons/part-of-body/jambe.svg"
                                alt="Icone Jambe"
                                class="icon-jambe"
                            />
                            Jambe
                        </vs-button>
                    </div>
                    <div class="worksheet-progress-line">
                        <div class="progressbar-base">
                            <div
                                class="progressbar-thumb"
                                :style="{
                                    width: `${getWorksheetProgression}%`,
                                }"
                            ></div>
                            <div class="progressbar-steps">
                                <div>
                                    <div class="point end"></div>
                                    <span
                                        :class="{
                                            completed:
                                                getWorksheetProgression === 100,
                                        }"
                                        >Vous avez fini la fiche !</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="worksheet-content">
                        <div class="worksheet-details">
                            <div class="worksheet-exercises-count">
                                <i class="kiv-exercise icon-7"></i>
                                <span>8</span> exercices
                            </div>
                            <div class="worksheet-timing">
                                <i class="kiv-calendar icon-10"></i>
                                <span>2x</span> par jour - <span>2x</span> par
                                semaine
                            </div>
                            <div class="worksheet-period">
                                <i class="kiv-clock icon-11"></i>
                                Période : <span>3 semaines</span>
                            </div>
                        </div>
                        <div class="buttons">
                            <vs-button class="btn-go" circle floating>
                                Go !
                            </vs-button>
                            <!-- <vs-button class="btn-consult"> Consulter </vs-button> -->
                        </div>
                    </div>
                </div>
                <div>
                    <div class="worksheet-header">
                        <h3 class="worksheet-title">Mobilité</h3>
                        <vs-button size="mini" class="tag part-of-body">
                            <img
                                src="../../../img/icons/part-of-body/jambe.svg"
                                alt="Icone Jambe"
                                class="icon-jambe"
                            />
                            Jambe
                        </vs-button>
                    </div>
                    <div class="worksheet-content session-completed">
                        <p>
                            Bravo, vos exercices d’aujourd’hui ont été faits
                            avec succès ! Rendez-vous dans les prochains jours
                            pour ...
                        </p>
                        <vs-button class="btn-consult"> Consulter </vs-button>
                    </div>
                </div>
                <div>
                    <div class="worksheet-header">
                        <h3 class="worksheet-title">Mobilité</h3>
                        <vs-button size="mini" class="tag part-of-body">
                            <img
                                src="../../../img/icons/part-of-body/jambe.svg"
                                alt="Icone Jambe"
                                class="icon-jambe"
                            />
                            Jambe
                        </vs-button>
                    </div>
                    <div class="worksheet-progress-line">
                        <div class="progressbar-base">
                            <div
                                class="progressbar-thumb"
                                :style="{
                                    width: `${getWorksheetProgression}%`,
                                }"
                            ></div>
                            <div class="progressbar-steps">
                                <div>
                                    <div class="point end"></div>
                                    <span
                                        :class="{
                                            completed:
                                                getWorksheetProgression === 100,
                                        }"
                                        >Vous avez fini la fiche !</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="worksheet-content">
                        <div class="worksheet-details">
                            <div class="worksheet-exercises-count">
                                <i class="kiv-exercise icon-7"></i>
                                <span>8</span> exercices
                            </div>
                            <div class="worksheet-timing">
                                <i class="kiv-calendar icon-10"></i>
                                <span>2x</span> par jour - <span>2x</span> par
                                semaine
                            </div>
                            <div class="worksheet-period">
                                <i class="kiv-clock icon-11"></i>
                                Période : <span>3 semaines</span>
                            </div>
                        </div>
                        <div class="buttons">
                            <vs-button class="btn-go" circle floating>
                                Go !
                            </vs-button>
                            <!-- <vs-button class="btn-consult"> Consulter </vs-button> -->
                        </div>
                    </div>
                </div>
                <div>
                    <div class="worksheet-header">
                        <h3 class="worksheet-title">Mobilité</h3>
                        <vs-button size="mini" class="tag part-of-body">
                            <img
                                src="../../../img/icons/part-of-body/jambe.svg"
                                alt="Icone Jambe"
                                class="icon-jambe"
                            />
                            Jambe
                        </vs-button>
                    </div>
                    <div class="worksheet-content session-completed">
                        <p>
                            Bravo, vos exercices d’aujourd’hui ont été faits
                            avec succès ! Rendez-vous dans les prochains jours
                            pour ...
                        </p>
                        <vs-button class="btn-consult"> Consulter </vs-button>
                    </div>
                </div>
                <div>
                    <div class="worksheet-header">
                        <h3 class="worksheet-title">Mobilité</h3>
                        <vs-button size="mini" class="tag part-of-body">
                            <img
                                src="../../../img/icons/part-of-body/jambe.svg"
                                alt="Icone Jambe"
                                class="icon-jambe"
                            />
                            Jambe
                        </vs-button>
                    </div>
                    <div class="worksheet-progress-line">
                        <div class="progressbar-base">
                            <div
                                class="progressbar-thumb"
                                :style="{
                                    width: `${getWorksheetProgression}%`,
                                }"
                            ></div>
                            <div class="progressbar-steps">
                                <div>
                                    <div class="point end"></div>
                                    <span
                                        :class="{
                                            completed:
                                                getWorksheetProgression === 100,
                                        }"
                                        >Vous avez fini la fiche !</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="worksheet-content">
                        <div class="worksheet-details">
                            <div class="worksheet-exercises-count">
                                <i class="kiv-exercise icon-7"></i>
                                <span>8</span> exercices
                            </div>
                            <div class="worksheet-timing">
                                <i class="kiv-calendar icon-10"></i>
                                <span>2x</span> par jour - <span>2x</span> par
                                semaine
                            </div>
                            <div class="worksheet-period">
                                <i class="kiv-clock icon-11"></i>
                                Période : <span>3 semaines</span>
                            </div>
                        </div>
                        <div class="buttons">
                            <vs-button class="btn-go" circle floating>
                                Go !
                            </vs-button>
                            <!-- <vs-button class="btn-consult"> Consulter </vs-button> -->
                        </div>
                    </div>
                </div>
                <div>
                    <div class="worksheet-header">
                        <h3 class="worksheet-title">Mobilité</h3>
                        <vs-button size="mini" class="tag part-of-body">
                            <img
                                src="../../../img/icons/part-of-body/jambe.svg"
                                alt="Icone Jambe"
                                class="icon-jambe"
                            />
                            Jambe
                        </vs-button>
                    </div>
                    <div class="worksheet-content session-completed">
                        <p>
                            Bravo, vos exercices d’aujourd’hui ont été faits
                            avec succès ! Rendez-vous dans les prochains jours
                            pour ...
                        </p>
                        <vs-button class="btn-consult"> Consulter </vs-button>
                    </div>
                </div>
                <div>
                    <div class="worksheet-header">
                        <h3 class="worksheet-title">Mobilité</h3>
                        <vs-button size="mini" class="tag part-of-body">
                            <img
                                src="../../../img/icons/part-of-body/jambe.svg"
                                alt="Icone Jambe"
                                class="icon-jambe"
                            />
                            Jambe
                        </vs-button>
                    </div>
                    <div class="worksheet-progress-line">
                        <div class="progressbar-base">
                            <div
                                class="progressbar-thumb"
                                :style="{
                                    width: `${getWorksheetProgression}%`,
                                }"
                            ></div>
                            <div class="progressbar-steps">
                                <div>
                                    <div class="point end"></div>
                                    <span
                                        :class="{
                                            completed:
                                                getWorksheetProgression === 100,
                                        }"
                                        >Vous avez fini la fiche !</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="worksheet-content">
                        <div class="worksheet-details">
                            <div class="worksheet-exercises-count">
                                <i class="kiv-exercise icon-7"></i>
                                <span>8</span> exercices
                            </div>
                            <div class="worksheet-timing">
                                <i class="kiv-calendar icon-10"></i>
                                <span>2x</span> par jour - <span>2x</span> par
                                semaine
                            </div>
                            <div class="worksheet-period">
                                <i class="kiv-clock icon-11"></i>
                                Période : <span>3 semaines</span>
                            </div>
                        </div>
                        <div class="buttons">
                            <vs-button class="btn-go" circle floating>
                                Go !
                            </vs-button>
                            <!-- <vs-button class="btn-consult"> Consulter </vs-button> -->
                        </div>
                    </div>
                </div>
                <div>
                    <div class="worksheet-header">
                        <h3 class="worksheet-title">Mobilité</h3>
                        <vs-button size="mini" class="tag part-of-body">
                            <img
                                src="../../../img/icons/part-of-body/jambe.svg"
                                alt="Icone Jambe"
                                class="icon-jambe"
                            />
                            Jambe
                        </vs-button>
                    </div>
                    <div class="worksheet-content session-completed">
                        <p>
                            Bravo, vos exercices d’aujourd’hui ont été faits
                            avec succès ! Rendez-vous dans les prochains jours
                            pour ...
                        </p>
                        <vs-button class="btn-consult"> Consulter </vs-button>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import f from "../../services/function";

export default {
    props: {
        patient: Object,
    },
    data() {
        return {
            worksheetProgression: 50,
        };
    },
    computed: {
        getWorksheetProgression() {
            return this.worksheetProgression;
        },
    },
    methods: {
        formatScore(score) {
            return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
    },
    mounted() {
        setTimeout(() => {
            this.score = 5000;
        }, 500);
        // this.loading = true;
        // this.axios
        //     .get(`/get/doctors`)
        //     .then((response) => {
        //         this.doctors = response.data;
        //         this.loading = false;
        //     })
        //     .catch((error) => {
        //         if (error.response) {
        //             console.log(
        //                 error.response.data.detail
        //                     ? error.response.data.detail
        //                     : error.response.data
        //             );
        //         }
        //         this.loading = false;
        //     });
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

#my-worksheets {
    grid-area: myworksheets;

    .worksheet-list {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1.5rem;

        @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 992px) {
            grid-template-columns: 1fr;
        }

        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }

        > div {
            background: #faf8f4;
            border-radius: 0.5rem;
            padding: 2rem;
            overflow: hidden;

            .worksheet-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 1rem;

                h3 {
                }
                .part-of-body {
                }
            }
            .worksheet-progress-line {
                margin-bottom: 3rem;

                .progressbar-base {
                    height: 0.8rem;
                    border-radius: 1rem;
                    background: $gray-middle;
                    position: relative;

                    .progressbar-thumb {
                        background: linear-gradient(
                            270deg,
                            #fb8b68 9.29%,
                            #ff6839 100%
                        );
                        border-radius: 1rem;
                        width: 0%;
                        height: 100%;
                        transition: width 1s ease;
                        position: relative;
                        z-index: 2;
                        max-width: 100%;
                    }

                    .progressbar-steps {
                        display: flex;
                        justify-content: flex-end;
                        position: relative;
                        z-index: 3;
                        top: -0.7rem;
                        margin-right: 0.1rem;

                        > div {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-end;

                            .point {
                                width: 0.6rem;
                                height: 0.6rem;
                                min-width: 0.6rem;
                                max-height: 0.6rem;
                                border-radius: 50%;
                                background: $white;
                            }

                            span {
                                font-size: 1.3rem;
                                margin-top: 0.7rem;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                color: #e1d8c6;
                                transition: all 2s;

                                &.completed {
                                    color: $orange;
                                    font-weight: 600;
                                }
                            }
                        }
                    }
                }
            }
            .worksheet-content {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                &.session-completed {
                    flex-direction: column;
                    align-items: flex-start;

                    p {
                        font-size: 1.4rem;
                        margin: 0;
                        margin-top: 1.2rem;
                        margin-bottom: 2.2rem;
                    }

                    .btn-consult {
                    }
                }

                .worksheet-details {
                    font-size: 1.4rem;

                    @media (max-width: 380px) {
                        font-size: 1.2rem;
                    }

                    > div {
                        display: flex;
                        align-items: center;
                        margin: 1rem 0;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        &:first-child {
                            margin-top: 0;
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }

                        i {
                            color: $orange;
                            font-size: 1.8rem;
                            margin-right: 0.5rem;
                        }

                        span {
                            font-weight: 700;
                        }

                        &.worksheet-exercises-count {
                            span {
                                margin-right: 0.3rem;
                            }
                        }

                        &.worksheet-timing {
                            span {
                                margin-right: 0.3rem;

                                &:nth-child(3) {
                                    margin-left: 0.3rem;
                                }
                            }
                        }
                        &.worksheet-period {
                            span {
                                margin-left: 0.3rem;
                            }
                        }
                    }
                }
            }

            .buttons {
                display: flex;
                align-items: flex-end;

                .btn-go {
                }

                .btn-consult {
                }
            }
        }
    }
}
</style>
