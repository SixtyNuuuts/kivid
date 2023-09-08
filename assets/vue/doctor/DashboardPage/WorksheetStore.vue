<template>
    <section
        id="worksheet-store"
        class="kiv-block"
    >
        <button
            class="toggle-content"
        >
            <i class="kiv-chevron-down icon-3"></i>
        </button>
        <h2>Magasin de fiches</h2>
        <div>
            <div class="worksheet-list wl-doctor swiper" :class="{'loading-start':loadingStoreFirstsWorksheets || loadingStoreAllWorksheets}">
                <div
                    v-if="
                        !loadingStoreFirstsWorksheets &&
                        getStoreWorksheets.length
                    "
                    class="swiper-wrapper"
                >
                    <div
                        v-for="(worksheet, i) in getStoreWorksheets"
                        :key="i"
                        class="worksheet-container swiper-slide"
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
                                            <vs-button
                                                :disabled="
                                                    btnLoadingAddWorksheet ===
                                                    worksheet.id
                                                "
                                                :loading="loadingDoctorFirstsWorksheets || loadingDoctorAllWorksheets"
                                                @click="
                                                    redirectToAddWorksheet(
                                                        worksheet
                                                    )
                                                "
                                                circle
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px"><path d="M 12.5 4 C 10.019 4 8 6.019 8 8.5 L 8 39.5 C 8 41.981 10.019 44 12.5 44 L 25.640625 44 C 24.785625 43.111 24.055516 42.103 23.478516 41 L 12.5 41 C 11.673 41 11 40.327 11 39.5 L 11 8.5 C 11 7.673 11.673 7 12.5 7 L 24 7 L 24 15.5 C 24 17.981 26.019 20 28.5 20 L 37 20 L 37 22.169922 C 38.045 22.331922 39.053 22.606906 40 23.003906 L 40 18.5 C 40 18.0855 39.831922 17.710828 39.560547 17.439453 L 26.560547 4.4394531 C 26.289172 4.1680781 25.9145 4 25.5 4 L 12.5 4 z M 27 9.1210938 L 34.878906 17 L 28.5 17 C 27.673 17 27 16.327 27 15.5 L 27 9.1210938 z M 35 24 C 28.925 24 24 28.925 24 35 C 24 41.075 28.925 46 35 46 C 41.075 46 46 41.075 46 35 C 46 28.925 41.075 24 35 24 z M 35 27 C 35.552 27 36 27.448 36 28 L 36 34 L 42 34 C 42.552 34 43 34.448 43 35 C 43 35.552 42.552 36 42 36 L 36 36 L 36 42 C 36 42.552 35.552 43 35 43 C 34.448 43 34 42.552 34 42 L 34 36 L 28 36 C 27.448 36 27 35.552 27 35 C 27 34.448 27.448 34 28 34 L 34 34 L 34 28 C 34 27.448 34.448 27 35 27 z"></path></svg>
                                                Ajouter à mes fiches
                                            </vs-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div v-if="loadingStoreFirstsWorksheets">
                    <div
                        class="worksheet-container swiper-slide loading-block"
                    >
                        <div class="worksheet">
                            <div class="worksheet-header">
                                <h3 class="worksheet-title loading w-35">Xxxxx xx xxxxxx xxx</h3>
                                <div
                                    class="vs-tooltip-content kiv-help"
                                >
                                    <button
                                        class="vs-button tag part-of-body vs-button--null vs-button--size-mini vs-button--primary vs-button--default  loading"
                                    >
                                        <div class="vs-button__content">
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div class="worksheet-content-wt">
                                <div class="worksheet-details">
                                    <div class="worksheet-exercises-count">
                                        <i class="kiv-exercise icon-7"></i>
                                        <span class="space loading w-35">Xxxxxxx</span>
                                    </div>
                                    <div class="worksheet-timing">
                                        <i class="kiv-calendar icon-10"></i>
                                        <span class="space loading w-35">Xxxxxxxx</span>
                                    </div>
                                    <div class="worksheet-period">
                                        <i class="kiv-clock icon-11"></i>
                                        <span class="space loading w-35">Xxxxxxxxxx</span>
                                    </div>
                                </div>
                                <div class="worksheet-details-footer">
                                    <div class="worksheet-exercises-container">
                                        <div class="worksheet-exercises">
                                            <div class="worksheet-exercise">
                                                <div
                                                    class="worksheet-exercise-thumbnail loading w-35"
                                                >
                                                </div>
                                                <div
                                                    class="worksheet-exercise-details"
                                                >
                                                    <div class="series-reps loading w-35">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="worksheet-exercise">
                                                <div
                                                    class="worksheet-exercise-thumbnail loading w-35"
                                                >
                                                </div>
                                                <div
                                                    class="worksheet-exercise-details"
                                                >
                                                    <div class="series-reps loading w-35">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="worksheet-exercise">
                                                <div
                                                    class="worksheet-exercise-thumbnail loading w-35"
                                                >
                                                </div>
                                                <div
                                                    class="worksheet-exercise-details"
                                                >
                                                    <div class="series-reps loading w-35">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="worksheet-exercise-other">
                                            <div class="tags">
                                                <div class="tag-chip loading w-35">
                                                    Xxxxxxxxxxxxxxxxxx
                                                </div>
                                                <div class="tag-chip loading w-35">
                                                    Xxxxxxxxxx
                                                </div>
                                                <div class="tag-chip loading w-35">
                                                    Xxxxxxxx
                                                </div>
                                            </div>
                                            <button
                                                class="vs-button vs-button--null vs-button--size-null vs-button--circle vs-button--primary vs-button--default loading w-35"
                                            >
                                                <div class="vs-button__content">
                                                    Xxxx xxxxxxxxxxxx
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import f from "../../services/function";
import TagPartOfBody from "../../components/TagPartOfBody.vue";
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    props: {
        doctor: Object,
        csrfTokenCreateWorksheet: String,
        loadingDoctorFirstsWorksheets: Boolean,
        loadingDoctorAllWorksheets: Boolean,
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
            btnLoadingAddWorksheet: null,
            mySwiper: null
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
    },
    methods: {
        redirectToAddWorksheet(worksheet){
            this.btnLoadingAddWorksheet = worksheet.id;
            this.axios
                .post(`/doctor/${this.doctor.id}/create/worksheets`, {
                   _token: this.csrfTokenCreateWorksheet,
                   patientId: null,
                   worksheetsIds: [worksheet.id],
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Confirmation",
                        `La fiche <strong> ${
                            worksheet.title
                        }</strong> 
                        a été ajoutée à vos fiches</strong>`
                    );
                    // this.btnLoadingAddWorksheet = null;
                    if(!this.$parent.prescriProcess)
                        this.$parent.activeTab = 2

                    this.$emit("addWorksheetStore", response.data.worksheets);
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;
                    this.btnLoadingAddWorksheet = null;
                    f.openErrorNotification("Erreur", errorMess);
                });
        },
        getPage(data, page, maxItems) {
            return f.getPage(data, page, maxItems);
        },
        getLength(data, maxItems) {
            return f.getLength(data, maxItems);
        },
        initSwiper() {
            this.mySwiper = new Swiper('.swiper', {
                    spaceBetween: 0,
                    centeredSlides: true,
                    autoplay: {
                        delay: 6000,
                        // disableOnInteraction: false,
                    },
                    allowTouchMove: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
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

                        this.initSwiper();

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
@import "../../../scss/variables";
:root {
    --swiper-navigation-size: 18px;
    --swiper-navigation-sides-offset: -10px;
    --swiper-theme-color: #fb8b68;
    --swiper-pagination-bullet-inactive-color: #fb8b68;

    // --swiper-theme-color: #ccc4b4;
    // --swiper-pagination-bullet-inactive-color: #b0aa9f;
}

.swiper.loading-start
{
    .swiper-button-prev, .swiper-button-next, .swiper-pagination
    {
        opacity: 0;
    }
}

.swiper-button-prev, .swiper-button-next 
{
    height: 5rem;
    width: 4rem;
    top: 10rem;
    z-index: 20;
}

.swiper-button-prev.swiper-button-disabled, 
.swiper-button-next.swiper-button-disabled 
{
    opacity: 0;
}

#worksheet-store
{
    margin-top: 2.9rem;
    margin-bottom: 0;

    @media (max-width: 799px) {
        max-width: 98.4vw;

        &.kiv-block {
            background: transparent;
            border-radius: 0;
            box-shadow: none;
            padding: 0;
            position: initial;
            padding-top: 0 !important;

            .tabs {
                position: fixed !important;
                top: auto !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                background: $white;
                z-index: 999 !important;
                box-shadow: 0px 1.2rem 3rem rgba(56, 41,13, 0.55);
                padding-bottom: 1.5rem;

                > div {
                    padding-bottom: 3.7rem !important;

                    h2 {
                        top: 0 !important;
                        white-space: nowrap !important;
                        &::before {
                            top: -0.1812rem !important;
                        }
                    }
                }
            }    
        }

        .worksheet-list.wl-doctor .worksheet-container {
            padding: 0 2.2rem;
            padding-bottom: 3rem;

            .worksheet {
                        background: #fff;
                        border-radius: 1rem;
                        box-shadow: 0.6px 0.4rem 0.4rem rgb(140 136 130 / 13%);
                        padding-top: 1.5rem !important;
                        padding: 1.7rem;
                        padding-bottom: 1.2rem;
                        opacity: 1;
                        &.active-effect {
                            animation: mymove 2s infinite;
                        }
                        &.active {
                            cursor: pointer;
                            > * {
                                user-select: none;
                                pointer-events: none;
                            }
                        }
                        &.selected {
                            border-left: 5px solid $orange;
                        }
                        @keyframes mymove {
                            50% {
                                box-shadow: 0rem 0.1rem 1.5rem 0rem rgba(255, 107, 38, 0.8);
                            }
                        }        
                    }
        }
    }

    @media (min-width: 799px) {
        margin-top: 2rem;
        margin-bottom: 0;
        max-width: 92.8vw;
        padding: 2rem 0;
        padding-bottom: 1rem;

        h2 {
            margin-left: 2rem;
        }

        .worksheet-list.wl-doctor .worksheet-container {
            padding: 0 2.2rem;
            padding-bottom: 3rem;
            background-color: transparent;
            border-radius: none;
        }

        .worksheet-list.wl-doctor .worksheet
        {
            background-color: #faf8f4;
            border-radius: 0.5rem;
        }
    }

    @media (min-width: 899px) {
        max-width: 93.7vw;
    }

    @media (min-width: 999px) {
        max-width: 94.6vw;
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

    .swiper {
      width: 100%;
      min-height: 26.9rem;
    }

    .worksheet-list.wl-doctor .worksheet-container .worksheet {
        padding-bottom: 1.6rem !important;
    }

    .worksheet-exercise-other
    {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;

        .vs-button {
            white-space: nowrap;
            border-radius: 0.4rem;
            font-size: 1.2rem;
            overflow: visible;
            box-shadow: 0.15rem 0.15rem 0.7rem rgba(255, 104, 56, 0.6);
            letter-spacing: 0;
            z-index: 2;
            margin-top: 0.3rem;
            
            &:not(.loading)
            {
                background-color: #fff;
                color: #ff6838;
            }

            .vs-button__content {
                padding: 0.1rem 0.9rem;
                padding-left: 0.7rem;
                padding-top: 0.25rem;
                display: flex;
                align-items: center;
            }

            svg
            {
                width: 1.45rem;
                height: 1.45rem;
                fill: #ff6838;
                margin-right: 0.3rem;
                position: relative;
                top: -0.1rem;
            }

            &:disabled
            {
                svg
                {
                    fill: #fff;
                }
            }
        }

        &::after
        {
            display: none;
        }

        .tags {
            max-width: 75%;
        }

        &::after
        {
            content: '';
            display: block;
            background: linear-gradient(
                90deg,
                rgba(250, 248, 244, 0)00 0%,
                #fff 75%,
                #fff 100%,
            );
            width: 2.6rem;
            height: 2rem;
            position: absolute;
            top: 0.45rem;
            right: 14.23rem;
            z-index: 1;

            @media (min-width: 799px) {
                background: linear-gradient(
                    90deg,
                    rgba(250, 248, 244, 0)00 0%,
                    #faf8f4 75%,
                    #faf8f4 100%,
                ); 
            }

        }
    }

    .loading-block.worksheet-container
    {
        max-height: initial;

        .tags .tag-chip,
        .worksheet .worksheet-header .vs-button--size-mini.tag.part-of-body {
            -webkit-animation-duration: 1.2s;
            animation-duration: 1.2s;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-name: placeHolderShimmer;
            animation-name: placeHolderShimmer;
            -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
            background: linear-gradient(to right, #fafafa 8%, #f5f3ef 38%, #fafafa 54%);
            background-size: 1000px 640px;
            position: relative;
        }

        .worksheet-exercises .worksheet-exercise .worksheet-exercise-thumbnail {
            width: 16.625rem;
        }

        .worksheet-exercises {
            overflow-x: hidden;
        }

        .worksheet .worksheet-header .vs-button--size-mini.tag.part-of-body {
            position: absolute !important;
            top: -0.1rem !important;
            right: 0.5rem !important;
            width: 2.5rem !important;
            height: 2.5rem !important;
        }

        .worksheet-exercise-other .vs-button {
            width: 17rem !important;
            height: 2.5rem !important;
            border-radius: 0.3rem !important;
            position: absolute !important;
            top: 0.3rem !important;
            right: 0rem !important;
            box-shadow: none !important;

            &::after {
                display: none;
            }
        }
    }


    // 238.96

    &.disabled-custom
    {
        @media (max-width: 1099px) {
            display: none;
        }
    }
}
</style>
