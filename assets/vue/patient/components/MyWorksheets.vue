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
                <div v-if="loadingPatientWorksheets">
                    <div class="loading loading-block">
                        <div class="worksheet-header">
                            <div class="loading worksheet-title w-25"></div>
                            <div class="loading part-of-body"></div>
                        </div>
                        <div class="loading worksheet-progress-line"></div>
                        <div class="worksheet-content">
                            <div class="worksheet-details">
                                <div
                                    class="
                                        loading
                                        worksheet-exercises-count
                                        w-35
                                    "
                                ></div>
                                <div
                                    class="loading worksheet-timing w-25"
                                ></div>
                                <div
                                    class="loading worksheet-period w-35"
                                ></div>
                            </div>
                            <div class="buttons">
                                <div class="loading btn-go"></div>
                            </div>
                        </div>
                    </div>
                    <div class="loading loading-block">
                        <div class="worksheet-header">
                            <div class="loading worksheet-title w-45"></div>
                            <div class="loading part-of-body"></div>
                        </div>
                        <div class="loading worksheet-progress-line"></div>
                        <div class="worksheet-content">
                            <div class="worksheet-details">
                                <div
                                    class="
                                        loading
                                        worksheet-exercises-count
                                        w-15
                                    "
                                ></div>
                                <div
                                    class="loading worksheet-timing w-35"
                                ></div>
                                <div
                                    class="loading worksheet-period w-25"
                                ></div>
                            </div>
                            <div class="buttons">
                                <div class="loading btn-go"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    v-if="
                        !loadingPatientWorksheets && getPatientWorksheets.length
                    "
                >
                    <div
                        v-for="(worksheet, i) in getPatientWorksheets"
                        :key="i"
                    >
                        <div class="worksheet-header">
                            <h3 class="worksheet-title">
                                {{ worksheet.title }}
                            </h3>
                            <TagPartOfBody
                                :partOfBody="worksheet.partOfBody.toLowerCase()"
                            />
                        </div>
                        <div
                            v-if="worksheet.worksheetProgression < 100"
                            class="worksheet-progress-line"
                        >
                            <div class="progressbar-base">
                                <div
                                    class="progressbar-thumb"
                                    :style="{
                                        width: worksheet.worksheetProgression,
                                    }"
                                ></div>
                                <div class="progressbar-steps">
                                    <div>
                                        <div class="point"></div>
                                        <span>Vous avez fini la fiche !</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            v-if="worksheet.worksheetProgression === 100"
                            class="worksheet-content session-completed"
                        >
                            <p>
                                Bravo, vos exercices d’aujourd’hui ont été faits
                                avec succès ! Rendez-vous dans les prochains
                                jours pour...
                            </p>
                            <vs-button
                                :disabled="redirectInProgress === worksheet.id"
                                @click="redirectToWorksheetPage(worksheet.id)"
                                class="btn-consult"
                            >
                                Consulter
                            </vs-button>
                        </div>
                        <div v-else class="worksheet-content">
                            <div class="worksheet-details">
                                <div class="worksheet-exercises-count">
                                    <i class="kiv-exercise icon-7"></i>
                                    <span>{{
                                        worksheet.exercises.length
                                    }}</span>
                                    exercices
                                </div>
                                <div class="worksheet-timing">
                                    <i class="kiv-calendar icon-10"></i>
                                    <span>{{ worksheet.perDay }}x</span>
                                    par jour -
                                    <span>{{ worksheet.perWeek }}x</span>
                                    par semaine
                                </div>
                                <div class="worksheet-period">
                                    <i class="kiv-clock icon-11"></i>
                                    Période :
                                    <span
                                        >{{ worksheet.duration }} semaines</span
                                    >
                                </div>
                            </div>
                            <div class="buttons">
                                <vs-button
                                    :disabled="
                                        redirectInProgress === worksheet.id
                                    "
                                    @click="
                                        redirectToWorksheetPage(worksheet.id)
                                    "
                                    class="btn-go"
                                    circle
                                    floating
                                >
                                    Go !
                                </vs-button>
                                <!-- <vs-button class="btn-consult"> Consulter </vs-button> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="not-found" v-else>
                    <p>
                        <i class="fas fa-folder-minus"></i>
                        <span>Vous n'avez pas encore de fiche</span>
                    </p>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import f from "../../services/function";
import TagPartOfBody from "./TagPartOfBody.vue";

export default {
    props: {
        patient: Object,
    },
    components: {
        TagPartOfBody,
    },
    data() {
        return {
            loadingPatientWorksheets: false,
            patientWorksheets: [],
            redirectInProgress: null,
        };
    },
    computed: {
        getPatientWorksheets() {
            return this.patientWorksheets;
        },
    },
    methods: {
        redirectToWorksheetPage(worksheetId) {
            this.redirectInProgress = worksheetId;

            document.location.href = `/patient/${this.patient.id}/fiche/${worksheetId}`;
        },
        calculWorksheetProgression(worksheet) {
            let progression = 0;

            if (worksheet.exercises.length) {
                const exercisePercentPart = 100 / worksheet.exercises.length;

                const exercisesCompletedCount = worksheet.exercises.filter(
                    (e) => e.isCompleted
                ).length;

                progression = exercisePercentPart * exercisesCompletedCount;
            }

            return progression;
        },
    },
    created() {
        this.loadingPatientWorksheets = true;

        this.axios
            .get(`/patient/${this.patient.id}/get/worksheets`)
            .then((response) => {
                this.patientWorksheets = response.data.map((worksheet) => {
                    return {
                        ...worksheet,
                        worksheetProgression:
                            this.calculWorksheetProgression(worksheet),
                    };
                });

                this.loadingPatientWorksheets = false;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                console.error(errorMess);

                this.loadingPatientWorksheets = false;
            });
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

#my-worksheets {
    grid-area: myworksheets;

    .worksheet-list {
        > div:not(.not-found) {
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
                    margin-bottom: 1.8rem;
                    position: relative;

                    .worksheet-title {
                        max-width: 55%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;

                        @media (min-width: 380px) {
                            max-width: 63%;
                        }

                        @media (min-width: 480px) {
                            max-width: 70%;
                        }

                        @media (min-width: 576px) {
                            max-width: 77%;
                        }

                        @media (min-width: 768px) {
                            max-width: 63%;
                        }

                        @media (min-width: 840px) {
                            max-width: 70%;
                        }

                        @media (min-width: 992px) {
                            max-width: 78%;
                        }

                        @media (min-width: 1200px) {
                            max-width: 68%;
                        }

                        @media (min-width: 1450px) {
                            max-width: 76%;
                        }
                    }

                    > :last-child {
                        position: absolute;
                        top: 0;
                        right: 0;
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

            .loading-block {
                border-radius: 0.5rem;
                height: 18.6rem;
                background: #fcfcfc;

                .worksheet-header {
                    .worksheet-title {
                        border-radius: 0.5rem;
                        height: 2.5rem;
                    }
                    .part-of-body {
                        border-radius: 0.5rem;
                        height: 2.7rem;
                        width: 8.3rem;
                    }
                }
                .worksheet-progress-line {
                    border-radius: 1rem;
                    height: 1rem;
                    width: 100%;
                }
                .worksheet-content {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    .worksheet-details {
                        width: 100%;
                        > div {
                            display: flex;
                            align-items: center;
                            margin: 1rem 0;

                            &:first-child {
                                margin-top: 0;
                            }

                            &:last-child {
                                margin-bottom: 0;
                            }

                            &.worksheet-exercises-count {
                                border-radius: 0.5rem;
                                height: 1.7rem;
                            }

                            &.worksheet-timing {
                                border-radius: 0.5rem;
                                height: 1.7rem;
                            }
                            &.worksheet-period {
                                border-radius: 0.5rem;
                                height: 1.7rem;
                            }
                        }
                    }
                }

                .buttons {
                    display: flex;
                    align-items: flex-end;

                    .btn-go {
                        border-radius: 50%;
                        height: 5.5rem;
                        width: 5.5rem;
                    }
                }
            }
        }
    }
}
</style>
