<template>
    <div>
        <vs-button
            @click="modalAddVideo = !modalAddVideo"
            circle
            class="btn-top-absolute long"
        >
            <i class="fe fe-youtube"></i>
            Ajouter des vidéos
        </vs-button>
        <vs-dialog
            width="1000px"
            v-model="modalAddVideo"
            :loading="!videosList.length"
        >
            <h2><i class="fe fe-youtube"></i>Selectionner des vidéos</h2>

            <vs-table class="videos-list">
                <template #header>
                    <vs-input
                        v-model="filter"
                        primary
                        placeholder="Filtrer par nom"
                        @keyup="page = 1"
                    >
                        <template #icon>
                            <i class="fe fe-filter"></i>
                        </template>
                    </vs-input>
                    <multiselect
                        v-model="selectedTags"
                        :options="tagsFromAllVideos"
                        @input="page = 1"
                        placeholder="Mots-Clés"
                        :multiple="true"
                        selectLabel=""
                        selectedLabel="sélectionné"
                        deselectLabel=""
                    >
                        <span slot="noResult">
                            Aucun mot-clé ne correspond à ce texte
                        </span>
                        <template slot="singleLabel" slot-scope="props">
                            <span>{{ props.option }}</span>
                        </template>
                        <template slot="option" slot-scope="props">
                            <span>{{ props.option }}</span>
                        </template>
                    </multiselect>
                </template>
                <template #thead>
                    <vs-tr>
                        <vs-th
                            sort
                            @click="
                                videosListArray = sortData(
                                    $event,
                                    videosList,
                                    'name'
                                )
                            "
                        >
                            Ordre alphabétique
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr
                        :key="i"
                        v-for="(video, i) in videosListArray"
                        :class="{
                            'selected-video': selectedVideos.includes(video),
                        }"
                    >
                        <vs-td class="video-thumbnail">
                            <!-- <div class="chips-list">
                                <div
                                    class="tags-chip tags-chip-raised"
                                    v-for="(tag, i) in video.tags"
                                    :key="i"
                                >
                                    {{ tag.name }}
                                </div>
                            </div> -->
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
                        </vs-td>
                        <vs-td class="video-details">
                            <div class="video-name">
                                <div v-if="video.name.length < 45">
                                    {{ video.name }}
                                </div>
                                <div v-else>
                                    {{ video.name.substring(0, 45) + "..." }}
                                </div>
                            </div>
                            <vs-button
                                circle
                                size="small"
                                @click="addVideo(video)"
                                class="btn-add-vid"
                                v-if="!selectedVideos.includes(video)"
                            >
                                <i class="fe fe-plus"></i>
                            </vs-button>
                            <vs-button
                                circle
                                animation-type="rotate"
                                size="small"
                                @click="removeVideo(video)"
                                class="btn-remove-vid"
                                v-else
                            >
                                <i class="fe fe-check"></i>

                                <template #animate
                                    ><i class="fe fe-x"></i
                                ></template>
                            </vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
                <template #footer>
                    <vs-pagination
                        v-model="page"
                        :length="getLengthForPagination"
                    />
                </template>
                <template #notFound>
                    <div v-if="filter">
                        <i class="fe fe-file-minus"></i>
                        Aucune vidéo n'a été trouvée avec "<strong>{{
                            filter
                        }}</strong
                        >".
                    </div>
                    <div v-else>
                        <i class="fe fe-file-minus"></i>
                        Aucune vidéo n'a été trouvée.
                    </div>
                </template>
            </vs-table>

            <div class="buttons">
                <vs-button
                    @click="validVideosSelection()"
                    :class="{
                        disabled: false,
                    }"
                    ><i class="fe fe-check-circle"></i>Valider la
                    selection</vs-button
                >
            </div>
        </vs-dialog>
        <vs-dialog class="view-video" v-model="modalViewVideo">
            <youtube
                :player-vars="playerVars"
                :video-id="selectedViewVideo.youtubeId"
            ></youtube>
        </vs-dialog>
    </div>
</template>

<script>
import f from "../../services/function";
import Multiselect from "vue-multiselect";

export default {
    name: "VideoAdd",
    components: { Multiselect },
    props: {
        doctor: Object,
    },
    data() {
        return {
            filter: "",
            page: 1,
            max: 4,
            timeout: false,
            videosList: [],
            playerVars: {
                rel: 0,
                showinfo: 0,
                ecver: 2,
                modestbranding: 1,
            },
            selectedTags: [],
            selectedVideos: [],
            modalAddVideo: false,
            modalViewVideo: false,
            selectedViewVideo: false,
        };
    },
    computed: {
        videosListArray: {
            get() {
                return this.getPage(
                    this.getSearch(this.videosList, this.filter),
                    this.page,
                    this.max
                );
            },
            set(newAllVideosList) {
                this.videosList = newAllVideosList;
            },
        },
        getLengthForPagination() {
            return this.getLength(
                this.getSearch(this.videosList, this.filter),
                this.max
            );
        },
        tagsFromAllVideos() {
            return f.getTagsFromAllVideos(this.videosList);
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
            this.$emit("videos-selection", this.selectedVideos);

            this.filter = "";
            this.selectedTags = [];
            this.selectedVideos = [];
            this.modalAddVideo = false;
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
        sortData(evt, data, sortKey, type) {
            return f.sortData(evt, data, sortKey, type);
        },
        resizeWindowEventHandler(e) {
            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                if (window.innerWidth < 600) {
                    this.max = 4;
                }

                if (window.innerWidth >= 600 && window.innerWidth <= 900) {
                    this.max = 8;
                }

                if (window.innerWidth > 900) {
                    this.max = 12;
                }
            }, 250);
        },
    },
    created() {
        this.axios
            .get(`/get/videos`)
            .then((response) => {
                this.videosList = response.data;
            })
            .catch((error) => {
                console.log(error);
            });

        window.addEventListener("resize", this.resizeWindowEventHandler);

        this.resizeWindowEventHandler();
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeWindowEventHandler);
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
h2 {
    margin: 0.1em 0 !important;
    margin-bottom: 0.4em !important;
}

.vs-table__tbody .vs-table__tr {
    border: 2px solid #f1f4f8;
    border-radius: 1.4em;
    margin: 0.4em;
    transition: border 0.15s ease;

    &.selected-video {
        border: 6.5px solid orange !important;
        transition: border 0.15s ease;
        .video-details {
            padding: 0.5em !important;
        }
    }
}

.video-thumbnail {
    height: 6.15em;
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
                fill: #ff87176e;
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
    height: 7em;
    max-height: 7em;

    .video-name {
        font-size: 0.9em;
        max-height: 40%;
        font-weight: 700;

        > div {
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}

.chips-list {
    flex-direction: row !important;
    position: absolute;
    top: 5px;
    width: initial !important;
    flex-wrap: wrap;

    .tags-chip.tags-chip-raised {
        font-size: 0.5em;
        width: initial;
    }
}

.btn-add-vid {
    width: 3em;
    height: 3em;
    margin-bottom: 0.2em !important;
    background: #f2f2f2; // border: 2px solid #ffb34b;
    box-shadow: 0 0.15rem 0.4rem rgb(102 113 143 / 40%) !important;
    font-size: 1em;

    &:hover {
        background: linear-gradient(
            231deg,
            #fbcc52f5 0%,
            #ffb049 50%,
            #ffa71a 100%
        );
        border: initial;

        i {
            color: #ffffff;
        }
    }

    i {
        font-size: 1.7em;
        margin-left: 0.15em;
        margin-top: 0.035em;
        color: #ffb54d;
    }
}

.btn-remove-vid {
    width: 3em;
    height: 3em;
    margin-bottom: 0.2em !important;
    box-shadow: 0 0.3rem 0.5rem rgb(102 113 143 / 31%) !important;

    &:hover {
        background: white;

        i {
            font-size: 1.7em;
            margin-left: 0.15em;
            margin-top: 0.035em;
            color: #ffb54d;
        }
    }

    i {
        font-size: 1.35em;
        margin-left: 0.2em;
        color: #ffffff;
    }
}

.buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 1em;

    > button {
        flex: 1;
        margin: 0;
        line-height: 1.2;
        font-size: 0.8em;
        padding: 0.4em 0;

        i {
            margin-right: 8px;
        }

        &.disabled {
            pointer-events: none;
            opacity: 0.5;
        }
    }
}
</style>
