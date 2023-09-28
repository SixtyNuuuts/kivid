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
                    <treeselect 
                        @input="page = 1" 
                        class="worksheet-keywords" 
                        v-model="selectedTags" 
                        :multiple="true" 
                        :disable-branch-nodes="true" 
                        :options="getTagsFromAllVideos" 
                        noResultsText="Aucun mot-clé ne correspond." 
                        placeholder="Mots-Clés"
                        :show-count="true"
                    >
                        <label slot="option-label" slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }" :class="labelClassName">
                            {{ node.label }}
                            <span v-if="shouldShowCount"><span class="selected-tags-nb" :class="{'selected-tags-nb-disabled': getNbChildOptionSelected(node.label)==0}">{{ getNbChildOptionSelected(node.label) }}</span></span>
                        </label>
                    </treeselect>
                    <treeselect @input="page = 1" v-model="selectedVideoLibraries" :multiple="true" :options="getLibrariesFromAllVideos" noResultsText="Aucune bibliothèque ne correspond." placeholder="Bibliothèques"/>
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
                                'disabled-video':
                                    video.videoLibrary.reference === 'ffmkr' && !getDoctorIsFFMKRAdherent,
                                'video-ffmkr' : video.videoLibrary.reference === 'ffmkr'
                            }"
                        >
                            <div v-if="video.videoLibrary.reference === 'ffmkr'" class="video-ffmkr-entete">
                                <div class="video-ffmkr-blason">
                                    <img class="logo-ffmkr" :src="video.videoLibrary.reference === 'ffmkr' && !getDoctorIsFFMKRAdherent ? '/img/logo-kivid-FFMKR-grey.svg' : '/img/logo-kivid-FFMKR-white.svg'" alt="Logo FFMKR">
                                </div>
                                <vs-tooltip v-if="!getDoctorIsFFMKRAdherent" class="video-ffmkr-icon-lock">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px" fill="#828282">    <path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 L 4 8 L 4 22 L 20 22 L 20 8 L 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"/></svg>
                                    <template #tooltip>Réservé aux adhérents FFMKR</template>
                                </vs-tooltip>
                            </div>
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
                                    :class="{'btn-unlock-vid':video.videoLibrary.reference === 'ffmkr' && !getDoctorIsFFMKRAdherent}"
                                    v-if="!selectedVideos.includes(video)"
                                >
                                    <svg v-if="video.videoLibrary.reference === 'ffmkr' && !getDoctorIsFFMKRAdherent" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                                        <path style="fill:none;stroke:#E7DFCD;stroke-width:2;stroke-miterlimit:10;" d="M16,8H8H6H4v14h16V8h-2H16z"/>
                                        <path style="fill:#E7DFCD;" d="M17,3.2c-1-1.4-2.7-2.4-4.6-2.5C9.1,0.5,6.3,3,6.1,6.4l0,1l2,0.1l0-1c0.1-2.3,1.9-3.9,4.2-3.8
                                            c1.3,0.1,2.4,0.7,3.1,1.7L17,3.2z"/>
                                        <path style="fill:none;stroke:#E7DFCD;stroke-width:2;stroke-miterlimit:10;" d="M8.2,7"/>
                                        <circle style="fill:#E7DFCD;" cx="12" cy="15" r="2"/>
                                    </svg>
                                    <plus-icon v-else size="2x"></plus-icon>
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
                                <span v-if="selectedVideoLibraries.length">
                                    <span class="ml-1"> chez </span>
                                    <span
                                        v-for="(lib, i) in selectedVideoLibraries"
                                        :key="i"
                                        class="nf-tag tag"
                                    >
                                        <span class="text wsnw">{{ lib }}</span>
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
                        :length="
                            getLength(getSearch(videos, search), max)
                        "
                    >
                        <vs-select v-model="page">
                            <vs-option
                                v-for="numberPage in getLength(getSearch(videos, search), max)"
                                :key="numberPage"
                                :label="numberPage"
                                :value="numberPage">
                                {{ numberPage }}
                            </vs-option>
                        </vs-select>
                    </vs-pagination>
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
        <vs-dialog class="modal-ffmkr-adhesion" v-model="modalRequestFFMKRAdhesion">
            <h2>Vidéo FFMKR</h2>
            <p>Pour utiliser cette vidéo vous devez être adhérent FFMKR</p>
            <div
                class="btn-container"
                :class="{ disabled: btnLoadingFFMKRAdhesion }"
            >
                <vs-button
                    :loading="btnLoadingFFMKRAdhesion"
                    class="w-100"
                    type="submit"
                    @click="validFFMKRAdhesion"
                >
                    <span>Adhérer à la <img class="logo-ffmkr" src="/img/logo-kivid-FFMKR-white.svg" alt="Logo FFMKR"></span>
                </vs-button>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import f from "../../../services/function";
import { PlusIcon, CheckIcon, XIcon } from "vue-feather-icons";
import SelectPartOfBody from "../../../components/SelectPartOfBody.vue";
import Treeselect from '@riophae/vue-treeselect'

export default {
    props: {
        doctor: Object,
        loadingVideos: Boolean,
        videos: Array,
        csrfTokenSaveFFMKRRequestToken: String,
    },
    components: {
        PlusIcon,
        CheckIcon,
        XIcon,
        SelectPartOfBody,
        Treeselect
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
            selectedVideoLibraries: [],
            modalAddVideo: false,
            modalViewVideo: false,
            selectedViewVideo: false,
            btnLoadingValidVideosSelection: false,
            modalRequestFFMKRAdhesion: false,
            btnLoadingFFMKRAdhesion: false,
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
        getLibrariesFromAllVideos() {
            return f.getLibrariesFromAllVideos(this.videos);
        },
        getDoctorIsFFMKRAdherent() {
            return (this.doctor.FFMKRAdhesion && this.doctor.FFMKRAdhesion.numcli && !this.doctor.FFMKRAdhesion.numcli.includes('NUMCLITEMP')) || this.doctor.premium;
        },
        totalSelectedChildrenForObjectif() {
            return this.getNbChildOptionSelectedByParentOptionLabel('Objectif');
        },
        totalSelectedChildrenForCible() {
            return this.getNbChildOptionSelectedByParentOptionLabel('Cible');
        },
        totalSelectedChildrenForTypeDeContraction() {
            return this.getNbChildOptionSelectedByParentOptionLabel('Type de contraction');
        },
        totalSelectedChildrenForTypeDeMouvement() {
            return this.getNbChildOptionSelectedByParentOptionLabel('Type de mouvement');
        },
        totalSelectedChildrenForSpecialite() {
            return this.getNbChildOptionSelectedByParentOptionLabel('Spécialité');
        }
    },
    watch: {
        getLibrariesFromAllVideos: {
            handler(librariesFromAllVideos) {
                librariesFromAllVideos.forEach(bv => {
                    if(bv.id != 'FFT')
                        this.selectedVideoLibraries.push(bv.id)
                });
            },
            immediate: true // Exécutez le gestionnaire immédiatement lors de la création du composant
        },
    },
    methods: {
        getNbChildOptionSelected(nodeLabel) {
            return nodeLabel == 'Objectif' ? this.totalSelectedChildrenForObjectif : (nodeLabel == 'Cible' ? this.totalSelectedChildrenForCible : (nodeLabel == 'Type de contraction' ? this.totalSelectedChildrenForTypeDeContraction : (nodeLabel == 'Type de mouvement' ? this.totalSelectedChildrenForTypeDeMouvement : (nodeLabel == 'Spécialité' ? this.totalSelectedChildrenForSpecialite : '...'))));
        },
        getNbChildOptionSelectedByParentOptionLabel(parentOptionLabel) {
            return this.getTagsFromAllVideos.find(o => o.label === parentOptionLabel).children.filter(co => this.selectedTags.includes(co.id)).length;
        },
        validFFMKRAdhesion() {
            this.btnLoadingFFMKRAdhesion = true;
            this.axios
                .post(`/ffmkr/request-token/set/${this.doctor.id}`, {
                    _token: this.csrfTokenSaveFFMKRRequestToken,
                })
                .then((response) => {
                    window.open(`//www.ffmkr.org/adhesion/vos-informations?kividretour=//${window.location.hostname}/ffmkr/adhesion/${response.data.kividToken}`, '_blank');
                    
                    setTimeout(() => {
                        const checkAdhesion = setInterval(() => {
                            this.axios
                                .post(`/ffmkr/request-adhesion/check/${this.doctor.id}`, {})
                                .then((response) => {
                                    if(!response.data.ffmkrAdhesionNumCli.includes('NUMCLITEMP'))
                                    {
                                        clearInterval(checkAdhesion);
                                        this.btnLoadingFFMKRAdhesion = false;
                                        this.doctor.FFMKRAdhesion = {numcli:response.data.ffmkrAdhesionNumCli};
                                        this.modalRequestFFMKRAdhesion = false;
                                    }
                                })
                                .catch((error) => {
                                    const errorMess =
                                        "object" === typeof error.response.data
                                            ? error.response.data.detail
                                            : error.response.data;

                                    f.openErrorNotification("Erreur", errorMess);
                                });
                        }, 2000);
                    }, 500);
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                });
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
            if(video.videoLibrary.reference != 'ffmkr' || this.getDoctorIsFFMKRAdherent)
                this.selectedVideos.push(video);
            else
               this.modalRequestFFMKRAdhesion = true;
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

            if (this.selectedVideoLibraries.length) {
                videosListFiltered = videosListFiltered.filter((v) => {
                    return this.selectedVideoLibraries.includes(v.videoLibrary.name);
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

    @media (max-width: 849px) {
        .kiv-block {
            border-radius: 0;
        }
    }

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

            @media (min-width: 576px) {
                margin-right: 0;
            }

            @media (min-width: 850px) {
                margin-right: 1rem;
                margin-bottom: 0;
            }
        }

        .select-filter {
            width: 100%;
            .arrow-toggle-box {
                i {
                    right: 17px;
                }

                &.active {
                    transform: rotate(180deg);
                    top: 0.7rem;
                    i {
                        top: 1.4rem;
                        transform: rotate(-135deg);
                    }
                }
            }
            
            .part-of-body .text {
                position: relative;
                top: 0.1rem;
                font-size: 1.4rem;
            }

            &:hover
            {
                .arrow-toggle-box i.vs-icon-arrow::after {
                    opacity: 0.5;
                }
            }

            .arrow-toggle-box i.vs-icon-arrow::before, .arrow-toggle-box i.vs-icon-arrow::after {
                display: none
            }
            .arrow-toggle-box i.vs-icon-arrow::after {
                content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 292.362 292.362' class='vue-treeselect__control-arrow'%3E%3Cpath d='M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z'%3E%3C/path%3E%3C/svg%3E");
                display: block;
                background: none;
                transform: rotate(135deg);
                top: 0.8rem;
                opacity: 0.2;
                width: 0.88rem;
                left: 0.2rem;
                transition: 0.25s;
           }

        }

        .vue-treeselect {
            margin-bottom: 1rem;
            @media (min-width: 850px) {
                margin-bottom: 0;
            }
        }

        @media (min-width: 576px) {
            flex-direction: column;
        }
        @media (min-width: 850px) {
            flex-direction: row;
        }

        // .tags-containers
        // {
        //     display: flex;
        //     width: 100%;
        //     max-width: 55rem;
        // }

        .kiv-select.tags {
            width: 100%;
            margin-bottom: 1rem;
            margin-right: 0;

            // &:first-child
            // {
            //     flex-grow: 1;
            // }

            // &:last-child
            // {
            //     @media (max-width: 575px) {
            //         margin-left: 1rem;
            //     }

            //     width: 30%;
            // }

            .loading.select-tags {
                border-radius: 0.5rem;
                width: 100%;
                height: 4.3rem;
                background: #f9f9f9;
            }

            .vs-select__chips {
                flex-wrap: nowrap;
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
    }

    .content {
        height: 100%;
        width: 100%;
        padding: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        // overflow-y: auto;

        @media (max-width: 849px) {
            .vs-dialog__close {
                top: 9px;
                right: 9px;
            }
        }

        @media (min-width: 850px) {
            padding: 3vh;
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

        scrollbar-width: thin;
        scrollbar-color: #2e3858a1;

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
            height: 100%;

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
                overflow-y: auto;

                .videos-list {
                    display: flex;
                    flex-wrap: wrap;
                    box-shadow: 0 0 0.8rem #1b3a6952 inset,
                        0 0 3.9rem #1b3a692b inset;
                    background: #b9c7da85;
                    overflow: hidden;
                    overflow-y: auto;
                    padding: 1em 0.4em;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.8rem;
                    max-height: initial;

                    @media (max-width: 450px) and (min-height: 0px) {
                        max-height: 45vh;
                        overflow: auto;
                        overflow-x: hidden;
                    }

                    @media (max-width: 450px) and (min-height: 700px) {
                        max-height: 53vh;
                        overflow: auto;
                        overflow-x: hidden;
                    }

                    &::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                        display: block;
                        background: #bcc5d4;
                        border-radius: 8px;
                    }

                    scrollbar-width: thin;
                    scrollbar-color: #9ba4b0;

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
                        margin: 2.4vw 2.5vw;
                        transition: border 0.15s ease;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0;
                        position: relative;
                        width: 100%;
                        border-radius: 1rem;

                        &.video-ffmkr {
                           border: 2px solid #f6f2e6;
                           box-shadow: 0 0 0.7rem #978c728c;
                        }

                        .video-ffmkr-entete 
                        {
                            position: absolute;
                            top: -1.1rem;
                            z-index: 5;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;

                            .video-ffmkr-blason {
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                background-color: #e7dfcd;
                                border-radius: 1rem;
                                width: 6.1rem;
                                box-shadow: 0 0.15rem 0.4rem rgba(102, 113, 143, 0.4) !important;
                                padding: 0.5rem !important;

                                > img {
                                    width: 4.4rem;
                                }
                            }
                            
                            .video-ffmkr-icon-lock
                            {
                                width: 2.1rem;
                                height: 2.1rem;
                                margin-left: 0.5rem;
                                border-radius: 50%;
                                background-color: #c8c2b5;
                                box-shadow: 0 0.15rem 0.4rem rgb(150 154 165 / 78%) !important;

                                svg {
                                    width: 1.4rem;
                                    fill: #fff;
                                }
                            }
                        }

                        @media (min-width: 450px) {
                            width: 46%;
                            margin: 1.7vw 1.1vw;
                        }

                        @media (min-width: 650px) {
                            width: 31.2%;
                            margin: 1.3vw 0.7vw;
                        }

                        @media (min-width: 850px) {
                            width: 22%;
                            margin: 0.8vw 0.6vw;
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
                            border: 1px solid $orange;
                            box-shadow: 0 0 0.7rem $orange;
                            transition: border 0.15s ease;

                            &.video-ffmkr {
                                border: 1px solid $orange;
                                box-shadow: 0 0 0.7rem $orange;
                            }

                            .video-ffmkr-blason {
                                background-color: $orange;
                            }

                            .video-thumbnail {
                                background-color: $orange;
                            }

                            .video-details {
                                padding: 0.5em !important;
                            }
                        }

                        &.disabled-video {

                            &.video-ffmkr {
                                border: 2px solid #e5e1d7;
                                box-shadow: 0 0 0.7rem #978c7242;
                            }

                            .video-ffmkr-blason {
                                background-color: #ffffff;
                                border: 1px solid #e9e4d8;
                                box-shadow: 0 0.15rem 0.4rem rgb(150 154 165 / 31%) !important;
                                width: 6rem;
                                padding: 0.39rem !important;
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
                        padding: 0;
                        border-radius: 0.9rem 0.9rem 0 0;

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
                        border-radius: 0 0 0.9rem 0.9rem;
                        background: white;

                        .video-name {
                            font-size: 1.2rem;
                            font-weight: 700;
                            padding: 1rem;
                            padding-top: 0.5rem;
                            padding-bottom: 0.8rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            transition: 0.25s;

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
                        // background: #e7dfcd; // border: 2px solid #ffb34b;
                        box-shadow: 0 0.15rem 0.4rem rgb(102 113 143 / 10%) !important;
                        font-size: 1em;
                        background: #ffffff; // border: 2px solid #ffb34b;
                        border: 2px solid #ede7d9;

                        .vs-button__content {
                            padding: 1px;
                        }

                        &:hover {
                            background: $orange;
                            border: initial;

                            svg {
                                color: #ffffff;
                            }
                        }

                        svg {
                            color: #e7dfcd;
                            fill: #e7dfcd;
                            width: 4rem;
                        }

                        &.btn-unlock-vid {
                            .vs-button__content {
                                padding: 2px;
                            }

                           svg {
                                width: 2.33rem;
                                position: relative;
                                top: 0.2rem;
                                left: 0.3rem;
                            }

                            &:hover
                            {
                                svg {
                                    path:nth-child(1)
                                    {
                                        stroke: #fff!important;
                                    }

                                    path:nth-child(2)
                                    {
                                        fill: #fff!important;
                                    }

                                    path:nth-child(3)
                                    {
                                        stroke: #fff!important;
                                    }

                                    circle {
                                        fill: #fff!important;
                                    }
                                }
                            }
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

            .pagination {
                margin-top: 1rem;
            }

            .btn-valid-selection {
                display: flex;
                justify-content: center;
                margin-top: 2.5rem;
                margin-bottom: 1rem;

                @media (max-width: 849px) {
                    margin-top: 1rem;
                    margin-bottom: 0.3rem;
                }

                @media (min-width: 450px) {
                    margin-top: 1rem;
                }

            }
        }

        .ml-1
        {
            margin-left: 0.6rem;
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

.modal-ffmkr-adhesion {
    
    h2 {
        margin-bottom: 1.5rem !important;
    }

    p {
        font-size: 1.4rem;
        margin: 1.7rem 0;
        margin-top: 0;
    }

    .logo-ffmkr {
        width: 5.8rem;
        position: relative;
        top: 0.2rem;
        margin-left: 0.2rem;
    }
}

</style>
