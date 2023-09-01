<template>
    <section
        id="worksheet-store"
        class="kiv-block"
        :class="{ reduced: !$parent.worksheetStoreContent }"
    >
        <button
            class="toggle-content"
            @click="$parent.worksheetStoreContent = !$parent.worksheetStoreContent"
        >
            <i class="kiv-chevron-down icon-3"></i>
        </button>
        <h2>Magasin de fiches</h2>
        <transition name="height">
            <div v-if="$parent.worksheetStoreContent">
                <div class="worksheet-list wl-doctor">
                    <transition name="fade">
                        <div
                            v-if="
                                !loadingStoreFirstsWorksheets &&
                                getStoreWorksheets.length
                            "
                        >
                            <div
                                v-for="(worksheet, i) in getStoreWorksheets"
                                :key="i"
                                class="worksheet-container"
                            >
                                <div 
                                    class="worksheet"
                                >
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title">
                                            {{ worksheet.title }}
                                        </h3>
                                        <TagPartOfBody
                                            :partOfBody="worksheet.partOfBody"
                                        />
                                    </div>
                                    <div class="worksheet-content-wt">                            
                                        <div class="worksheet-details">
                                            <div
                                                class="
                                                    worksheet-exercises-count
                                                "
                                            >
                                                <i
                                                    class="kiv-exercise icon-7"
                                                ></i>
                                                <span class="space">{{
                                                    worksheet.exercises.length
                                                }}</span>
                                                <span class="space">exercice</span><span
                                                    v-if="
                                                        worksheet.exercises
                                                            .length > 1
                                                    "
                                                    >s</span
                                                >
                                            </div>
                                            <div class="worksheet-timing">
                                                <i
                                                    class="kiv-calendar icon-10"
                                                ></i>
                                                <span class="space"
                                                    >{{
                                                        worksheet.perDay
                                                    }}x</span
                                                >
                                                <span class="space">/ jour -</span>
                                                
                                                <span class="space"
                                                    >{{
                                                        worksheet.perWeek
                                                    }}x</span
                                                >
                                                <span class="space">/ sem.</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i
                                                    class="kiv-clock icon-11"
                                                ></i>
                                                <span class="space">Pér. :</span>
                                                <span class="space"
                                                    >{{
                                                        worksheet.duration
                                                    }}
                                                    sem.</span>
                                            </div>
                                        </div>
                                        <transition name="height3">
                                            <div class="worksheet-details-footer">
                                                <div class="worksheet-exercises-container">
                                                    <div class="worksheet-exercises">
                                                        <div 
                                                            v-for="(exercise, i) in worksheet.exercises"
                                                            :key="i"
                                                            class="worksheet-exercise"
                                                        >
                                                            <div
                                                                class="worksheet-exercise-thumbnail"
                                                            >
                                                                <img :src="exercise.video.thumbnailUrl">
                                                            </div>
                                                            <div class="worksheet-exercise-details">
                                                                <div class="series-reps">
                                                                    <i class="kiv-reps icon-19"></i>
                                                                    <span>{{ exercise.numberOfSeries }}</span>
                                                                        x <span class="no-space">{{ exercise.numberOfRepetitions }}</span>
                                                                </div>
                                                                <div v-if="exercise.option" class="option">
                                                                    - Option : <span>{{ exercise.option }}</span>
                                                                </div>
                                                                <div v-if="exercise.hold" class="hold">
                                                                    - Tenir : <span>{{ exercise.hold }}s</span>
                                                                </div>
                                                                <div v-if="exercise.tempo" class="tempo">
                                                                    - Tempo : <span>{{ exercise.tempo }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="worksheet-exercise-other">
                                                        <div class="tags">
                                                            <div
                                                                class="tag-chip"
                                                                v-for="(
                                                                    tag, i
                                                                ) in worksheet.exercisesTags"
                                                                :key="i"
                                                            >
                                                                {{ tag }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="buttons-container" :class="{disabled:$parent.prescriProcess}">
                                                    <!-- <vs-tooltip>
                                                        <vs-button
                                                            :loading="
                                                                btnLoadingCopyWorksheet ===
                                                                worksheet.id
                                                            "
                                                            @click="
                                                                redirectToCreatePage(
                                                                    worksheet.id
                                                                )
                                                            "
                                                            circle
                                                            class="btn-copy"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M 14 10.5 A 3.5 3.5 0 0 0 10.5 14 L 10.5 39.560547 A 3.5 3.5 0 0 0 14 43.060547 L 17.439453 43.060547 A 1.5 1.5 0 0 0 17.439453 40.060547 L 14 40.060547 A 0.5 0.5 0 0 1 13.5 39.560547 L 13.5 14 A 0.51 0.51 0 0 1 14 13.5 L 39.560547 13.5 A 0.5 0.5 0 0 1 40.060547 14 L 40.060547 17.439453 A 1.5 1.5 0 0 0 43.060547 17.439453 L 43.060547 14 A 3.5 3.5 0 0 0 39.560547 10.5 L 14 10.5 z M 24.439453 20.939453 C 22.500453 20.939453 20.939453 22.500453 20.939453 24.439453 L 20.939453 50 C 20.939453 51.939 22.500453 53.5 24.439453 53.5 L 50 53.5 C 51.939 53.5 53.5 51.939 53.5 50 L 53.5 24.439453 C 53.5 22.500453 51.939 20.939453 50 20.939453 L 24.439453 20.939453 z"/></svg>
                                                        </vs-button>
                                                        <template #tooltip>
                                                            Copier
                                                        </template>
                                                    </vs-tooltip> -->
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div
                            class="not-found"
                            v-if="
                                !loadingStoreFirstsWorksheets &&
                                !getStoreWorksheets.length &&
                                !search &&
                                !selectedTags.length
                            "
                        >
                            <p>
                                <i class="fas fa-folder-minus"></i>
                                <span v-if="!prescriProcess">Vous n'avez pas de fiche</span>
                                <span v-else>
                                    Pour créer une prescription, Vous&nbsp;devez&nbsp;avoir préalablement créé des&nbsp;modèles&nbsp;de&nbsp;fiche,<br>
                                    mais vous pouvez également en&nbsp;créer&nbsp;de&nbsp;zéro en utilisant le&nbsp;bouton&nbsp;"+"&nbsp;ci-dessus,<br>
                                    puis valider avec le bouton "Paramétrer&nbsp;puis&nbsp;Prescrire".
                                </span>
                            </p>
                        </div> -->
                        <!-- <div
                            class="not-found"
                            v-if="
                                !loadingStoreAllWorksheets &&
                                !loadingStoreFirstsWorksheets &&
                                !getStoreWorksheets.length &&
                                (search || selectedTags.length)
                            "
                        >
                            <p>
                                <i class="fas fa-folder-minus"></i>
                                <span
                                    >Aucune fiche n'a été trouvée avec
                                    <span v-if="search"
                                        >"<strong>{{ search }}</strong
                                        >"</span
                                    ><span
                                        v-if="search && selectedTags.length"
                                        class="et"
                                        >et</span
                                    ><span
                                        v-if="selectedTags.length"
                                        class="tags"
                                    >
                                        <div
                                            class="tag-chip"
                                            v-for="(tag, i) in selectedTags"
                                            :key="i"
                                        >
                                            {{ tag }}
                                        </div>
                                    </span></span
                                >
                            </p>
                        </div> -->
                        <!-- <div
                            class="not-found"
                            v-if="
                                loadingStoreAllWorksheets &&
                                search
                            "
                        >
                            <p>
                                <span class="loading-n">
                                    <span class="ldio">
                                        <span></span>
                                        <span></span>
                                    </span>
                                </span>
                                <span>Chargement...</span>
                            </p>          
                        </div> -->
                        <div v-if="loadingStoreFirstsWorksheets">
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-65"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-55"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div 
                    class="pagination" 
                    v-if="
                        !loadingStoreFirstsWorksheets &&
                        !loadingStoreAllWorksheets &&
                        countStoreWorksheets > max"
                    >
                    <vs-pagination 
                        v-model="page" 
                        :length="
                            getLength(
                                storeWorksheets,
                                max
                            )
                        "
                    >
                        <vs-select v-model="page">
                            <vs-option
                                v-for="numberPage in getLength(storeWorksheets,max)"
                                :key="numberPage"
                                :label="numberPage"
                                :value="numberPage">
                                {{ numberPage }}
                            </vs-option>
                        </vs-select>
                    </vs-pagination>
                </div>
                <div class="pagination" v-else>
                    <div class="vs-pagination-content vs-component--primary">
                        <button
                            class="vs-pagination__arrow prev"
                            disabled="disabled"
                        >
                            <i class="vs-icon-arrow"></i>
                        </button>
                        <div class="vs-pagination__slot">
                            <div
                                class="vs-select-content loading-c vs-component--primary"
                            >
                                <div class="vs-select vs-select--state-null">
                                    <input
                                        class="vs-select__input simple"
                                    /><label
                                        class="vs-select__label vs-select__label--hidden"
                                    ></label
                                    ><label
                                        class="vs-select__label vs-select__label--hidden"
                                    ></label
                                    ><i class="vs-icon-arrow"></i>
                                </div>
                            </div>
                        </div>
                        <button class="vs-pagination__arrow next loading">
                            <i class="vs-icon-arrow" disabled="disabled"></i>
                        </button>
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
        doctor: Object,
    },
    components: {
        TagPartOfBody,
    },
     data() {
        return {
            page: 1,
            max: 6,
            storeWorksheets:[],
            loadingStoreFirstsWorksheets: false,
            loadingStoreAllWorksheets: false,
        };
    },
    computed: {
        getStoreWorksheets() {
            return this.getPage(
                this.storeWorksheets,
                this.page,
                this.max
            );
        },
        countStoreWorksheets() {
            return this.storeWorksheets.length;
        },
    },
    methods: {
        // redirectToCreatePage(worksheetId) {
        //     if (worksheetId) {
        //         this.btnLoadingCopyWorksheet = worksheetId;
        //     } else {
        //         this.btnLoadingAddWorksheet = true;
        //     }

        //     document.location.href = `/doctor/${this.doctor.id}/fiche/creation/${worksheetId}`;
        // },
        getPage(data, page, maxItems) {
            return f.getPage(data, page, maxItems);
        },
        getLength(data, maxItems) {
            return f.getLength(data, maxItems);
        },
    },
    created() {
        this.loadingStoreFirstsWorksheets = true;
        this.loadingStoreAllWorksheets = true;

        this.axios
            .get(`/doctor/${this.doctor.id}/get/store-worksheets/${this.max}/0`)
            .then((response) => {
                this.storeWorksheets = response.data;
                f.generateTagsFromExercises(this.storeWorksheets);

                this.loadingStoreFirstsWorksheets = false;

                this.axios
                    .get(`/doctor/${this.doctor.id}/get/store-worksheets/999999/${this.max}`)
                    .then((response) => {
                        this.storeWorksheets = [...this.storeWorksheets,...response.data];
                        f.generateTagsFromExercises(this.storeWorksheets);

                        this.storeWorksheets.forEach((w) => {
                            if (w.exercises) {
                                w.exercises =f.sortByPosition(w.exercises);
                            }
                        });

                        this.loadingStoreAllWorksheets = false;
                    })
                    .catch((error) => {
                        const errorMess =
                            "object" === typeof error.response.data
                                ? error.response.data.detail
                                : error.response.data;

                        console.error(errorMess);
                    });
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

<style lang="scss">
#worksheet-store
{
    @media (max-width: 799px) {
        max-width: 91.2vw;
    }
        margin-top: 1rem;
        margin-bottom: 0;

    @media (min-width: 799px) {
        margin-top: 2rem;
        margin-bottom: 0;
    }

    @media (min-width: 1100px) {
        max-width: 30.1vw;
        margin-top: 0;
    }
    @media (min-width: 1230px) {
        max-width: 31.1vw;
    }
    @media (min-width: 1630px) {
        max-width: 31.1vw;
    }
    @media (min-width: 1730px) {
        max-width: 31.2vw;
    }
    @media (min-width: 1800px) {
        max-width: 31.3vw;
    }
    @media (min-width: 1900px) {
        max-width: 34.3vw;
    }

    .worksheet-list.wl-doctor .worksheet-container {
        // background-color: #c6bea9;
        margin-bottom: 1.5rem;
        border-radius: 1.1rem;
        // color: #fff;

        @media (max-width: 799px) {
            box-shadow: 0.6px 0.4rem 0.4rem rgb(171 159 141 / 13%);
            border: 1px solid #e7dfcd;
        }
    }

    // .worksheet-list.wl-doctor .worksheet-container .worksheet .worksheet-content-wt .worksheet-details:not(.worksheet-details-short)::after {
    //     background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #c6bea9 60%, #c6bea9 100%);
    // }   

    // .worksheet-exercise-other::after {
    //     background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #c6bea9 100%);
    // }

    // .worksheet-list.wl-doctor .worksheet-container .worksheet .worksheet-content-wt .worksheet-details > * {
    //     // color: #ffffff;
    // }

    .worksheet-list > div:not(.not-found) .loading-block {
        border-radius: 0.5rem;
        height: 12.5rem;
        background: #fdfcfa;

        .worksheet-header {
            .worksheet-title {
                border-radius: 0.5rem;
                height: 2.5rem;
            }
            .part-of-body {
                border-radius: 0.5rem;
                height: 2.5rem;
                width: 8.3rem;
                top: 1.9rem;
                right: 1.9rem;
            }
        }
        .worksheet-progress-line {
            border-radius: 0.8rem;
            min-height: 0.8rem;
            margin-top: 1rem;
            margin-bottom: 1.6rem !important;
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
                    margin: 0 !important;

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
    }
    .loading-block {
        border-radius: 0.5rem;
        height: 19rem;
        background: #fdfcfa;

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
</style>
