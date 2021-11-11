<template>
    <div class="video-library">
        <div class="content">
            <section id="video-library" class="kiv-block">
                <button
                    class="vs-dialog__close btn-close-library-sm"
                    @click="closeVideoLibrary"
                >
                    <i class="vs-icon-close vs-icon-hover-x"></i>
                </button>
                <h2>
                    Vidéothèque
                    <span v-if="!loadingVideos" class="count-videos">
                        <transition name="fade">
                            <i
                                v-if="
                                    search || selectedTags.length || selectedPoB
                                "
                                class="fas fa-filter"
                            ></i></transition
                        >{{ getTotalVideosFiltered }} vidéo<span
                            v-if="getTotalVideosFiltered > 1"
                            >s</span
                        >
                        <span
                            v-if="search || selectedTags.length || selectedPoB"
                        >
                            filtrée<span v-if="getTotalVideosFiltered > 1"
                                >s</span
                            >
                        </span></span
                    >
                </h2>
                <div class="primary-actions">
                    <div class="search">
                        <vs-input
                            v-model="search"
                            @keyup="page = 1"
                            label-placeholder="Filtrer par nom de video"
                        />
                    </div>
                    <div class="kiv-select tags">
                        <vs-select
                            v-if="getTagsFromAllVideos.length"
                            filter
                            multiple
                            placeholder="Mots-Clés"
                            v-model="selectedTags"
                            @change="page = 1"
                            @input="selectTag()"
                        >
                            <vs-option
                                v-for="(tag, i) in getTagsFromAllVideos"
                                :key="i"
                                :label="tag"
                                :value="tag"
                            >
                                {{ tag }}
                            </vs-option>
                            <template slot="notData">
                                Aucun mot-clé ne correspond.</template
                            >
                        </vs-select>
                        <div v-else class="loading select-tags"></div>
                    </div>
                    <SelectPartOfBody
                        :partOfBody="selectedPoB"
                        @partOfBodySelected="filterByPartOfBody"
                        @partOfBodyReset="resetSelectedPoB"
                    />
                </div>
                <div class="video-library-content">
                    <div
                        class="videos-list"
                        v-if="!loadingVideos && getVideos.length"
                    >
                        <div
                            :key="i"
                            v-for="(video, i) in getVideos"
                            :class="{
                                'selected-video':
                                    selectedVideos.includes(video),
                            }"
                        >
                            <div class="video-thumbnail">
                                <a class="video-link" @click="viewVideo(video)">
                                    <img
                                        :src="video.thumbnailUrl"
                                        alt="vignette de la vidéo"
                                    />
                                    <svg
                                        height="512pt"
                                        viewBox="0 -77 512.00213 512"
                                        width="512pt"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            id="test"
                                            d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
                                            fill="#f00"
                                        />
                                        <path
                                            id="test2"
                                            d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
                                            fill="#fff"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div class="video-details">
                                <div class="video-name">
                                    <div v-if="video.name.length < 45">
                                        {{ video.name }}
                                    </div>
                                    <div v-else>
                                        {{
                                            video.name.substring(0, 45) + "..."
                                        }}
                                    </div>
                                </div>
                                <vs-button
                                    circle
                                    size="small"
                                    @click="addVideo(video)"
                                    class="btn-add-vid"
                                    v-if="!selectedVideos.includes(video)"
                                >
                                    <plus-icon size="2x"></plus-icon>
                                </vs-button>
                                <vs-button
                                    circle
                                    size="small"
                                    @click="removeVideo(video)"
                                    class="btn-remove-vid"
                                    v-else
                                >
                                    <check-icon size="2x"></check-icon>
                                </vs-button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="not-found"
                        v-if="
                            !loadingVideos &&
                            !getVideos.length &&
                            !search &&
                            !selectedTags.length &&
                            !selectedPoB
                        "
                    >
                        <p>
                            <i class="fab fa-youtube"></i>
                            <span>Il n'y a aucune vidéo</span>
                        </p>
                    </div>
                    <div
                        class="not-found"
                        v-if="
                            !loadingVideos &&
                            !getVideos.length &&
                            (search || selectedTags.length || selectedPoB)
                        "
                    >
                        <p>
                            <i class="fab fa-youtube"></i>
                            <span
                                >Aucune vidéo n'a été trouvée avec
                                <span v-if="search"
                                    >"<strong>{{ search }}</strong
                                    >"</span
                                >
                                <span
                                    v-if="
                                        (search && selectedTags.length) ||
                                        (search && selectedPoB)
                                    "
                                    class="et"
                                >
                                    et
                                </span>
                                <span v-if="selectedTags.length">
                                    <span
                                        v-for="(tag, i) in selectedTags"
                                        :key="i"
                                        class="nf-tag tag"
                                    >
                                        <span class="text wsnw">{{ tag }}</span>
                                    </span>
                                </span>
                                <span
                                    v-if="selectedPoB"
                                    class="nf-tag part-of-body"
                                >
                                    <span class="text wsnw">
                                        {{ selectedPoB.name }}
                                    </span>
                                </span>
                            </span>
                        </p>
                    </div>
                    <div class="loading videos-list" v-if="loadingVideos"></div>
                </div>
                <div class="pagination" v-if="videos.length > max">
                    <vs-pagination
                        v-model="page"
                        buttons-dotted
                        :length="getLength(getSearch(videos, search), max)"
                    />
                    <div class="count-page">
                        Page : <b>{{ page }}</b>
                    </div>
                </div>
                <div class="btn-valid-selection">
                    <vs-button
                        @click="validVideosSelection()"
                        :loading="btnLoadingValidVideosSelection"
                        :class="{
                            disabled: btnLoadingValidVideosSelection,
                        }"
                        ><i class="fas fa-check-circle"></i>Valider la selection
                    </vs-button>
                </div>
            </section>
        </div>
        <vs-dialog class="view-video" v-model="modalViewVideo">
            <youtube
                :player-vars="playerVars"
                :video-id="selectedViewVideo.youtubeId"
            ></youtube>
        </vs-dialog>
    </div>
</template>

<script>
import f from "../../../services/function";
import { PlusIcon, CheckIcon, XIcon } from "vue-feather-icons";
import SelectPartOfBody from "../../../components/SelectPartOfBody.vue";

export default {
    props: {
        doctor: Object,
        loadingVideos: Boolean,
        videos: Array,
    },
    components: {
        PlusIcon,
        CheckIcon,
        XIcon,
        SelectPartOfBody,
    },
    data() {
        return {
            search: "",
            page: 1,
            max: 12,
            playerVars: {
                rel: 0,
                showinfo: 0,
                ecver: 2,
                modestbranding: 1,
            },
            timeout: false,
            selectedTags: [],
            selectedPoB: null,
            selectedVideos: [],
            modalAddVideo: false,
            modalViewVideo: false,
            selectedViewVideo: false,
            btnLoadingValidVideosSelection: false,
            inputChips: null,
        };
    },
    computed: {
        getVideos() {
            return this.getPage(
                this.getSearch(this.videos, this.search),
                this.page,
                this.max
            );
        },
        getLengthForPagination() {
            return this.getLength(
                this.getSearch(this.videos, this.search),
                this.max
            );
        },
        getTotalVideosFiltered() {
            return this.getSearch(this.videos, this.search).length;
        },
        getTagsFromAllVideos() {
            return f.getTagsFromAllVideos(this.videos);
        },
    },
    methods: {
        selectTag() {
            if (!this.inputChips) {
                this.inputChips = document.querySelector(
                    ".vs-select__chips__input"
                );
            }

            this.inputChips.focus();
            this.inputChips.blur();
        },
        filterByPartOfBody(partOfBody) {
            this.selectedPoB = partOfBody;
            this.page = 1;
        },
        resetSelectedPoB() {
            this.selectedPoB = null;
            this.page = 1;
        },
        viewVideo(video) {
            this.selectedViewVideo = video;

            return (this.modalViewVideo = !this.modalViewVideo);
        },
        addVideo(video) {
            this.selectedVideos.push(video);
        },
        removeVideo(video) {
            this.selectedVideos.splice(this.selectedVideos.indexOf(video), 1);
        },
        validVideosSelection() {
            this.btnLoadingValidVideosSelection = true;
            this.$emit("videos-selection", this.selectedVideos);

            this.closeVideoLibrary();

            setTimeout(() => {
                this.btnLoadingValidVideosSelection = false;
            }, 1000);
        },
        closeVideoLibrary() {
            setTimeout(() => {
                this.search = "";
                this.selectedTags = [];
                this.selectedVideos = [];
                this.selectedPoB = null;
            }, 300);

            this.$emit("closeVideoLibrary", true);
        },
        getPage(data, page, maxItems) {
            return f.getPage(data, page, maxItems);
        },
        getLength(data, maxItems) {
            return f.getLength(data, maxItems);
        },
        getSearch(data, filter) {
            let videosListFiltered = f.getSearch(data, filter);

            if (this.selectedTags.length) {
                videosListFiltered = videosListFiltered.filter((v) => {
                    const results = [];

                    if (v.tags) {
                        this.selectedTags.forEach((tag) => {
                            let result = false;
                            v.tags.forEach((vtag) => {
                                if (vtag.name === tag) {
                                    result = true;
                                }
                            });
                            results.push(result);
                        });
                    }

                    return !results.includes(false);
                });
            }

            if (this.selectedPoB) {
                videosListFiltered = videosListFiltered.filter((v) => {
                    let result = false;

                    if (v.partOfBodys) {
                        v.partOfBodys.forEach((partOfBody) => {
                            if (partOfBody.id === this.selectedPoB.id) {
                                result = true;
                            }
                        });
                    }

                    return result;
                });
            }

            return videosListFiltered;
        },
        resizeWindowEventHandler(e) {
            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                if (window.innerWidth < 449) {
                    this.max = 1000;
                    this.page = 1;
                }

                if (window.innerWidth >= 449 && window.innerWidth <= 649) {
                    this.max = 8;
                    this.page = 1;
                }

                if (window.innerWidth > 649 && window.innerWidth <= 849) {
                    this.max = 9;
                    this.page = 1;
                }

                if (window.innerWidth > 849 && window.innerWidth <= 1618) {
                    this.max = 8;
                    this.page = 1;
                }

                if (window.innerWidth > 1618 && window.innerWidth <= 1659) {
                    this.max = 10;
                    this.page = 1;
                }

                if (window.innerWidth > 1659) {
                    this.max = 12;
                    this.page = 1;
                }
            }, 250);
        },
    },
    created() {
        window.addEventListener("resize", this.resizeWindowEventHandler);

        this.resizeWindowEventHandler();
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeWindowEventHandler);
    },
};
</script>

<style lang="scss">
@import "../../../../scss/variables";
.vs-dialog-content.view-video {
    .vs-dialog {
        width: 100%;
        margin: auto 2rem;
        max-width: 650px;

        .vs-dialog__content {
            height: 54vw;
            max-height: 382px;

            @media (min-width: 672px) {
                height: 55vw;
            }
        }
    }
}

.video-library {
    position: fixed;
    z-index: 11111;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    h2 span.count-videos {
        padding: 0.2rem 0.7rem;
        padding-bottom: 0.1rem;
        background-color: #fb8b68;
        border-radius: 0.5rem;
        font-size: 1.2rem;
        color: white;
        font-weight: 600;
        margin-left: 0.8rem;
        position: relative;
        top: -0.2rem;
        white-space: nowrap;

        i {
            font-size: 0.9rem;
            position: relative;
            top: -0.1rem;
            margin-right: 0.5rem;
        }
    }

    .btn-close-library-sm {
        border-radius: 50%;
    }

    &::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(0.5rem);
        background: rgba(34, 46, 84, 0.8);
        height: 100vh;
        width: 100%;
    }

    .primary-actions {
        .search {
            width: 100%;
            margin-bottom: 1rem;
        }

        .kiv-select.tags {
            width: 100%;
            margin-bottom: 1rem;
            margin-right: 0;

            .loading.select-tags {
                border-radius: 0.5rem;
                width: 100%;
                height: 4.3rem;
                background: #f9f9f9;
            }
        }

        .select-filter {
            width: 100%;

            .loading-pob {
                height: 4.2rem;
                opacity: 0.2;
            }

            .partofbody-selected {
                padding-top: 1.33rem !important;
                padding-bottom: 1rem !important;
                padding: 1.15rem 1.5rem !important;
                background: $white;
                border: 0.2rem solid #faf6ef;
            }

            .part-of-body {
                background: $white;

                &:hover {
                    background: $gray-light;
                }
            }

            input {
                padding: 1.15rem 1.5rem;
                padding-right: 3.4rem;
                border: 0.2rem solid #faf6ef;
                min-height: 4.2rem;
                border-radius: 0.4rem;

                &::placeholder {
                    color: #b7bdc2;
                    font-weight: 300;
                    font-size: 1.4rem;
                }
            }

            input.b-r-b-zero {
                border-radius: 0.4rem 0.4rem 0 0;
            }

            .arrow-toggle-box {
                top: 0.3rem;
                right: 0rem;

                i.vs-icon-arrow {
                    width: 0.85rem;
                    height: 0.85rem;
                }
            }

            .select-box {
                top: 4.3rem;
            }
        }

        @media (min-width: 576px) {
            .search {
                width: 33%;
                margin-bottom: 0;
            }

            .kiv-select.tags {
                width: 33%;
                margin-bottom: 0;
                margin-right: 1.7rem;
            }

            .select-filter {
                width: 33%;
            }
        }
    }

    .content {
        height: 100%;
        width: 100%;
        padding: 6%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow-y: auto;

        @media (min-width: 850px) {
            padding: 7vh;
        }

        @media (min-height: 840px) {
            align-items: center;
        }

        &::-webkit-scrollbar {
            width: 4px;
            height: 4px;
            display: block;
            background: transparent;
            border-radius: 4px;

            @media (min-width: 768px) {
                width: 6px;
                height: 6px;
            }
        }

        &::-webkit-scrollbar-thumb {
            background: #2e3858a1;
            border: 1px solid transparent;
            border-radius: 4px;
        }

        #video-library {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            max-width: 99rem;

            @media (min-width: 1619px) {
                max-width: 122rem;
            }

            @media (min-width: 1660px) {
                max-width: 139rem;
            }

            .tags {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                overflow: hidden;
                position: relative;

                .tag-chip {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: $orange;
                    border-radius: 1rem;
                    color: $white;
                    padding: 0.2rem 0.7rem;
                    font-size: 0.9rem;
                    white-space: nowrap;
                    margin: 0.2rem 0.3rem;

                    :last-child {
                        margin-right: 0;
                    }
                }
            }
            .video-library-content {
                flex-grow: 1;

                .videos-list {
                    display: flex;
                    flex-wrap: wrap;
                    box-shadow: 0 0 0.8rem #1b3a6952 inset,
                        0 0 3.9rem #1b3a692b inset;
                    background: #b9c7da85;
                    overflow: hidden;
                    padding: 1em 0.4em;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.8rem;
                    max-height: initial;

                    @media (max-width: 450px) and (min-height: 0px) {
                        max-height: 45vh;
                        overflow: auto;
                    }

                    @media (max-width: 450px) and (min-height: 700px) {
                        max-height: 53vh;
                        overflow: auto;
                    }

                    &::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                        display: block;
                        background: #bcc5d4;
                        border-radius: 8px;
                    }

                    &::-webkit-scrollbar-thumb {
                        background: #9ba4b0;
                        border: 1px solid white;
                        border-radius: 4px;
                    }

                    &.loading {
                        animation-duration: 1.2s;
                        animation-fill-mode: forwards;
                        animation-iteration-count: infinite;
                        animation-name: placeHolderShimmer;
                        animation-timing-function: linear;
                        background: linear-gradient(
                            to right,
                            #fafafa 8%,
                            #f1f1f1 38%,
                            #fafafa 54%
                        );
                        background-size: 1000px 640px;
                        position: relative;
                        box-shadow: none;
                    }

                    > div {
                        border-radius: 1rem;
                        margin: 1.6vw 2.5vw;
                        transition: border 0.15s ease;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0;
                        position: relative;
                        overflow: hidden;
                        background: white;
                        width: 100%;

                        @media (min-width: 450px) {
                            width: 46%;
                            margin: 1.1vw;
                        }

                        @media (min-width: 650px) {
                            width: 31.2%;
                            margin: 0.7vw;
                        }

                        @media (min-width: 850px) {
                            width: 22%;
                            margin: 0.6vw;
                            max-width: 30rem;
                        }

                        @media (min-width: 1619px) {
                            width: 18%;
                            margin: 0.6vw;
                        }

                        @media (min-width: 1660px) {
                            width: 15%;
                            margin: 1.1rem;
                            max-width: 22rem;
                        }

                        &.selected-video {
                            box-shadow: 0 0 0.7rem $orange;
                            transition: border 0.15s ease;

                            .video-thumbnail {
                                background-color: $orange;
                            }

                            .video-details {
                                padding: 0.5em !important;
                            }
                        }

                        &:hover {
                            .vs-table__td {
                                background: none;
                            }
                        }

                        > div {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: 100%;
                            text-align: center;
                            line-height: 1.2;
                            padding: 0.3em 0;
                            border-radius: 0 !important;

                            &:first-child {
                                padding: 0;
                            }

                            > div {
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                width: 100%;
                            }
                        }
                    }

                    .video-thumbnail {
                        overflow: hidden;
                        position: relative;
                        cursor: pointer;
                        height: 37vw;
                        min-height: 37vw;
                        max-height: 37vw;

                        @media (min-width: 450px) {
                            height: 19vw;
                            min-height: 19vw;
                            max-height: 19vw;
                        }

                        @media (min-width: 650px) {
                            height: 13.6vw;
                            min-height: 13.6vw;
                            max-height: 13.6vw;
                        }

                        @media (min-width: 850px) {
                            height: 9.9vw;
                            min-height: initial;
                            max-height: 11.5rem;
                        }

                        svg {
                            position: absolute;
                            top: 0;
                            left: 34%;
                            width: 31%;
                            height: 100%;

                            #test {
                                fill: #80808073;
                            }

                            #test2 {
                                fill: #fffffff0;
                            }

                            &:hover {
                                #test {
                                    fill: #ff59176e;
                                }

                                #test2 {
                                    fill: #fffffff0;
                                }
                            }
                        }

                        .video-link {
                            cursor: pointer;
                            width: 100%;
                            height: 100%;

                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                    }

                    .video-details {
                        flex: 1;
                        justify-content: space-between !important;
                        padding: 0.4em !important;
                        height: 100%;

                        .video-name {
                            font-size: 1.2rem;
                            font-weight: 700;
                            padding: 1rem;
                            padding-top: 0.5rem;
                            padding-bottom: 0.8rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;

                            @media (min-width: 950px) {
                                font-size: 1.3rem;
                            }

                            > div {
                                max-width: 100%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                    }

                    .btn-add-vid {
                        width: 3.5rem;
                        height: 3.5rem;
                        max-width: 3.5rem;
                        max-height: 3.5rem;
                        min-height: 3.5rem;
                        margin-bottom: 0.7rem !important;
                        background: #f2f2f2; // border: 2px solid #ffb34b;
                        box-shadow: 0 0.15rem 0.4rem rgb(102 113 143 / 40%) !important;
                        font-size: 1em;

                        .vs-button__content {
                            padding: 1px 7px;
                        }

                        &:hover {
                            background: $orange;
                            border: initial;

                            svg {
                                color: #ffffff;
                            }
                        }

                        svg {
                            color: $orange;
                        }
                    }

                    .btn-remove-vid {
                        width: 3.5rem;
                        height: 3.5rem;
                        max-width: 3.5rem;
                        max-height: 3.5rem;
                        min-height: 3.5rem;
                        margin-bottom: 0.7rem !important;
                        box-shadow: 0 0.3rem 0.5rem rgb(102 113 143 / 31%) !important;

                        .vs-button__content {
                            padding: 1px 7px;
                        }

                        svg {
                            color: #ffffff;
                        }
                    }
                }
            }

            .btn-valid-selection {
                display: flex;
                justify-content: center;
                margin-top: 3rem;
                margin-bottom: 1rem;
            }
        }
    }

    .not-found {
        min-height: 19rem;

        .nf-tag {
            letter-spacing: 0.02rem;
            transition: all 0.3s;
            display: inline-flex;
            box-shadow: 0px 0rem 0.8rem rgba(137, 137, 137, 0.2);
            padding: 0.2rem 0.6rem;
            border-radius: 0.6rem;
            margin-left: 0.45rem;
            top: -0.1rem;

            .text {
                font-size: 1rem;
            }

            &.tag {
                background: $orange;
                color: $white;
            }

            &.part-of-body {
                background: $white;
                color: $black;
                top: 0;
            }
        }
    }
}
</style>
