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
                <div
                    v-if="
                        !loadingPatientWorksheets && getPatientWorksheets.length
                    "
                    class="wl-patient"
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
                                :class="{
                                    completed:
                                        (worksheet.currentWorksheetSession &&
                                            worksheet.currentWorksheetSession
                                                .isCompleted) ||
                                        !worksheet.currentWorksheetSession,
                                }"
                            />
                        </div>
                        <div
                            class="worksheet-progress-line"
                            v-if="
                                worksheet.currentWorksheetSession &&
                                !worksheet.currentWorksheetSession
                                    .isCompleted &&
                                worksheet.currentWorksheetSession.isInProgress
                            "
                        >
                            <div class="progressbar-base">
                                <div
                                    class="progressbar-thumb"
                                    :style="{
                                        width: `${worksheet.worksheetProgression}%`,
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
                            class="worksheet-progress-line"
                            v-if="
                                worksheet.currentWorksheetSession &&
                                !worksheet.currentWorksheetSession
                                    .isCompleted &&
                                !worksheet.currentWorksheetSession.isInProgress
                            "
                        >
                            <div class="progressbar-base">
                                <div
                                    class="progressbar-thumb"
                                    :style="{
                                        width: '0%',
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
                            v-if="
                                (worksheet.currentWorksheetSession &&
                                    worksheet.currentWorksheetSession
                                        .isCompleted) ||
                                !worksheet.currentWorksheetSession
                            "
                            class="worksheet-content session-completed"
                        >
                            <p v-if="worksheet.currentWorksheetSession">
                                Bravo, vos exercices de cette session ont été
                                faits avec succès ! <br />
                                <transition name="fade">
                                    <span
                                        v-if="
                                            worksheet.timeLeftBeforeNextSession
                                        "
                                    >
                                        Rendez-vous dans
                                        <strong>{{
                                            worksheet.timeLeftBeforeNextSession
                                        }}</strong>
                                        pour une nouvelle session.
                                    </span>
                                </transition>
                            </p>
                            <p v-if="!worksheet.currentWorksheetSession">
                                Traitement terminé<br />
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
                <div
                    class="not-found"
                    v-if="
                        !loadingPatientWorksheets &&
                        !getPatientWorksheets.length
                    "
                >
                    <p>
                        <i class="fas fa-folder-minus"></i>
                        <span>Vous n'avez pas de fiche</span>
                    </p>
                </div>
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
            </div>
        </transition>
    </section>
</template>

<script>
import f from "../../services/function";
import TagPartOfBody from "../../components/TagPartOfBody.vue";

export default {
    props: {
        patient: Object,
        patientWorksheets: Array,
        loadingPatientWorksheets: Boolean,
    },
    components: {
        TagPartOfBody,
    },
    data() {
        return {
            redirectInProgress: null,
        };
    },
    computed: {
        getPatientWorksheets() {
            return this.sortByCreatedAt(this.patientWorksheets);
        },
    },
    methods: {
        sortByCreatedAt(array) {
            array.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            return array;
        },
        redirectToWorksheetPage(worksheetId) {
            this.redirectInProgress = worksheetId;

            document.location.href = `/patient/${this.patient.id}/fiche/${worksheetId}`;
        },
    },
};
</script>
