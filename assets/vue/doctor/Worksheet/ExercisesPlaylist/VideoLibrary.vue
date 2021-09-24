<template>
    <div class="video-library">
        <button class="btn-close-library" @click="closeVideoLibrary">
            <i class="kiv-x icon-21"></i>
        </button>
        <div class="content">
            <section id="video-library" class="kiv-block">
                <h2>Vidéothèque</h2>
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
                        >
                            <vs-option
                                v-for="(tag, i) in getTagsFromAllVideos"
                                :key="i"
                                :label="tag"
                                :value="tag"
                            >
                                {{ tag }}
                            </vs-option>
                            <template slot="notData"> Aucun mot-clé </template>
                        </vs-select>
                        <div v-else class="loading select-tags"></div>
                    </div>
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
                                    animation-type="rotate"
                                    size="small"
                                    @click="removeVideo(video)"
                                    class="btn-remove-vid"
                                    v-else
                                >
                                    <check-icon size="2x"></check-icon>

                                    <template #animate>
                                        <x-icon size="1.3x"></x-icon>
                                    </template>
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
                            !selectedTags.length
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
                            (search || selectedTags.length)
                        "
                    >
                        <p>
                            <i class="fab fa-youtube"></i>
                            <span
                                >Aucune vidéo n'a été trouvée avec
                                <span v-if="search"
                                    >"<strong>{{ search }}</strong
                                    >"</span
                                ><span
                                    v-if="search && selectedTags.length"
                                    class="et"
                                >
                                    et</span
                                ><span v-if="selectedTags.length" class="tags">
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
                        Page: <b>{{ page }}</b>
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

export default {
    props: {
        doctor: Object,
    },
    components: {
        PlusIcon,
        CheckIcon,
        XIcon,
    },
    data() {
        return {
            search: "",
            page: 1,
            max: 6,
            videos: [],
            loadingVideos: false,
            playerVars: {
                rel: 0,
                showinfo: 0,
                ecver: 2,
                modestbranding: 1,
            },
            timeout: false,
            selectedTags: [],
            selectedVideos: [],
            modalAddVideo: false,
            modalViewVideo: false,
            selectedViewVideo: false,
            btnLoadingValidVideosSelection: false,
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
        getTagsFromAllVideos() {
            return f.getTagsFromAllVideos(this.videos);
        },
    },
    methods: {
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

            this.search = "";
            this.selectedTags = [];
            this.selectedVideos = [];
            this.closeVideoLibrary();

            setTimeout(() => {
                this.btnLoadingValidVideosSelection = false;
            }, 1000);
        },
        closeVideoLibrary() {
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
                    let result = false;

                    if (v.tags) {
                        v.tags.forEach((tag) => {
                            if (this.selectedTags.includes(tag.name)) {
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
                if (window.innerWidth < 600) {
                    this.max = 4;
                    this.page = 1;
                }

                if (window.innerWidth >= 600 && window.innerWidth <= 900) {
                    this.max = 8;
                    this.page = 1;
                }

                if (window.innerWidth > 900) {
                    this.max = 12;
                    this.page = 1;
                }
            }, 250);
        },
    },
    created() {
        this.loadingVideos = true;

        this.axios
            .get(`/get/videos`)
            .then((response) => {
                this.loadingVideos = false;

                this.videos = response.data;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                f.openErrorNotification("Erreur", errorMess);

                this.loadingVideos = false;
            });

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

        .vs-dialog__content {
            height: 40rem;
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

            .loading.select-tags {
                border-radius: 0.5rem;
                width: 100%;
                height: 4.3rem;
                background: #f9f9f9;
            }
        }

        @media (min-width: 576px) {
            .search {
                width: 50%;
                margin-bottom: 0;
            }

            .kiv-select.tags {
                width: 50%;
            }
        }
    }

    .btn-close-library {
        position: absolute;
        z-index: 20;
        top: -0.7rem;
        right: -0.8rem;
        background: transparent;
        border: none;
        padding: 2rem;
        display: block;
        transition: all 0.25;

        &.dark {
            i {
                color: $black;
            }
        }

        i {
            font-size: 1.5rem;
            color: $white;
        }

        @media (min-width: 680px) {
            top: 0;
            right: 0;

            i {
                font-size: 1.5rem;
            }
        }

        @media (min-width: 900px) {
            top: 1rem;
            right: 1rem;

            i {
                font-size: 1.5rem;
            }
        }

        @media (min-width: 1200px) {
            top: 1.5rem;
            right: 2rem;

            i {
                font-size: 2.5rem;
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
        align-items: center;

        @media (max-height: 700px) {
            align-items: flex-start;
            overflow-y: auto;
        }

        #video-library {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 64rem;
            max-height: 69rem;

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
                    padding: 1.5em 0.4em;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.3rem;

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
                        border: 1px solid #f1f4f8;
                        border-radius: 1.4em;
                        margin: 0.6em;
                        transition: border 0.15s ease;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0;
                        flex: 1;
                        position: relative;
                        height: 46%;
                        max-height: 17em;
                        overflow: hidden;
                        min-width: 45%;
                        max-width: 45%;
                        background: white;

                        @media (min-width: 600px) {
                            min-width: 22%;
                            max-width: 22%;
                        }

                        @media (min-width: 900px) {
                            min-width: 15%;
                            max-width: 15%;
                        }

                        &.selected-video {
                            border: 1px solid $orange !important;
                            transition: border 0.15s ease;
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
                        height: 49%;
                        min-height: 6.15em;
                        overflow: hidden;
                        position: relative;
                        cursor: pointer;

                        svg {
                            position: absolute;
                            top: 0;
                            left: 27%;
                            width: 46%;
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
                        height: 49%;
                        max-height: 8.4em;

                        .video-name {
                            font-size: 1.1rem;
                            max-height: 40%;
                            font-weight: 700;

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

                        &:hover {
                            background: $red;
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
}
</style>
