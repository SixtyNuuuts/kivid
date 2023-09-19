<template>
    <div class="container">
        <section id="dashboard">
            <h1>
                <transition name="fade">
                    <span
                        >Bienvenue sur votre dashboard !
                        <i>
                            <img
                                src="../../../img/icons/colored/hand.svg"
                                alt="Icone d'une main qui fait 'coucou'"
                            /> </i
                    ></span>
                </transition>
            </h1>
            <main>
                 <section
                    id="ffmkr-adhesions"
                    class="kiv-block"
                    :class="{ reduced: !FFMKRAdhesionsContent }"
                >
                    <button
                        class="toggle-content"
                        @click="FFMKRAdhesionsContent = !FFMKRAdhesionsContent"
                    >
                        <i class="kiv-chevron-down icon-3"></i>
                    </button>
                    <h2>Adhesions FFMKR <span v-if="!loadingFFMKRAdhesions">({{ FFMKRAdhesions.length }} adhérents)</span></h2>
                    <transition name="height">
                        <div v-if="FFMKRAdhesionsContent">
                            <div class="primary-actions">
                                <div class="search">
                                    <vs-input
                                        v-model="search"
                                        @keyup="page = 1"
                                        label-placeholder="Filtrer par NumCli, Nom ou Email"
                                    />
                                </div>
                                <div class="btn-primary-action">
                                    <vs-button
                                        class="w-100"
                                        @click="$refs.file.click()"
                                        :loading="btnLoadingLoadCsvFile"
                                    >
                                        <input
                                            ref="file"
                                            type="file"
                                            accept=".csv, text/csv"
                                            @change="loadCsvFile($event)"
                                        />
                                        <i class="fas fa-file-import"></i> <span><span v-if="FFMKRAdhesions.length>0">Mettre à jour les adhesions (CSV)</span><span v-else>Importer les adhesions (CSV)</span></span>
                                    </vs-button>
                                    <div class="progressbar-total-chunk-ended">
                                        <div class="progressbar-completed" :class="{ error: chunkError, 'transition-width': chunkInProgress}" :style="{ width: `${totalChunkEndedPourcent}%`}"></div>
                                    </div>                  
                                </div>
                            </div>
                            <div class="adhesions-list">
                                <div v-if="!loadingFFMKRAdhesions">
                                    <vs-table>
                                        <template #thead>
                                            <vs-tr>
                                                <vs-th sort @click="sortData($event, FFMKRAdhesions, 'numcli')">
                                                    NumCli
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRAdhesions, 'firstname')">
                                                    Prénom
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRAdhesions, 'lastname')">
                                                    Nom
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRAdhesions, 'email')">
                                                    Email
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRAdhesions, 'numRpps')">
                                                    Num RPPS
                                                </vs-th>
                                                <!-- <vs-th sort @click="sortData($event, FFMKRAdhesions, 'dateOf')">
                                                    Date De
                                                </vs-th> -->
                                                <vs-th sort @click="sortData($event, FFMKRAdhesions, 'doctor')" class="max-w-12rem">
                                                    Statut Kivid
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRAdhesions, 'requestToken')" class="max-w-6-5rem">
                                                    <span class="logo-blason-kivid"><img src="/img/logo-kivid-gradient-grey.svg" alt="logo Kivid"></span>
                                                </vs-th>
                                            </vs-tr>
                                        </template>
                                        <template #tbody>
                                            <vs-tr
                                                v-for="(adhesion, i) in getFFMKRAdhesions"
                                                :data="adhesion"
                                                :key="i"
                                            >
                                                <vs-td>
                                                    {{ adhesion.numcli ? adhesion.numcli : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ adhesion.firstname ? adhesion.firstname : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ adhesion.lastname ? adhesion.lastname : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ adhesion.email ? adhesion.email : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ adhesion.numRpps ? adhesion.numRpps : '---' }}
                                                </vs-td>
                                                <!-- <vs-td>
                                                    {{ adhesion.dateOf ? adhesion.dateOf : '---' }}
                                                </vs-td> -->
                                                <vs-td>
                                                    <div class="status" v-if="adhesion.doctor">
                                                        <div class="icon-active-status"></div>
                                                        <p class="text-status">inscrit</p>
                                                    </div>
                                                   <div class="status" v-else>
                                                        <div class="icon-inactive-status"></div>
                                                        <p class="text-status">non inscrit</p>
                                                    </div>
                                                </vs-td>
                                                <vs-td>
                                                    <vs-tooltip class="logo-blason-kivid-tooltip" v-if="adhesion.requestToken">
                                                        <span class="logo-blason-kivid"><img src="/img/logo-kivid-gradient.svg" alt="logo Kivid"></span>
                                                        <template #tooltip>Adhésion via kivid</template>
                                                    </vs-tooltip>
                                                </vs-td>
                                            </vs-tr>
                                        </template>
                                    </vs-table>
                                </div>
                                <div
                                    class="not-found"
                                    v-if="
                                        !loadingFFMKRAdhesions &&
                                        !getFFMKRAdhesions.length &&
                                        !search
                                    "
                                >
                                    <p>
                                        <i class="fas fa-user-minus"></i>
                                        <span>Il n'y a pas d'adhesion FFMKR sur Kivid</span>
                                    </p>
                                </div>
                                <div
                                    class="not-found"
                                    v-if="
                                        !loadingFFMKRAdhesions &&
                                        !getFFMKRAdhesions.length &&
                                        search
                                    "
                                >
                                    <p>
                                        <i class="fas fa-user-minus"></i>
                                        <span
                                            >Aucune adhesion FFMKR n'a été trouvé avec
                                            <span v-if="search"
                                                >"<strong>{{ search }}</strong
                                                >"</span
                                            ></span
                                        >
                                    </p>
                                </div>
                                <div v-if="loadingFFMKRAdhesions" style="position: relative;">
                                    <div class="loading-info" v-if="chunkInProgress">
                                        <div class="progressbar-total-chunk-ended">
                                            <div class="progressbar-completed" :class="{ error: chunkError, 'transition-width': chunkInProgress}" :style="{ width: `${totalChunkEndedPourcent}%`}"></div>
                                        </div>                  
                                        <div>
                                            <span>Adhésion(s) créée(s) : <strong>{{adhInfos.createdFFMKRAdhesionsCount}}</strong></span>
                                            <span>Adhésion(s) modifiée(s) : <strong>{{adhInfos.updatedFFMKRAdhesionsCount}}</strong></span>
                                            <span>Adhésion(s) supprimée(s) : <strong>{{adhInfos.deletedFFMKRAdhesionsCount}}</strong></span>
                                        </div>
                                    </div>
                                    <div
                                        v-for="(loading, i) in 26"
                                        :key="i"
                                        class="loading loading-block"
                                    >
                                    </div>
                                </div>
                            </div>
                            <div class="pagination">
                                <vs-pagination 
                                    v-model="page" 
                                    :length="getLength(getSearch(FFMKRAdhesions, search), max)"
                                >
                                    <div>
                                        Page : <b>{{ page }}</b><span class="sepa">/</span>{{ getLength(getSearch(FFMKRAdhesions, search), max) }}
                                    </div>
                                </vs-pagination>
                            </div>
                        </div>
                    </transition>
                </section>
            </main>
        </section>
    </div>
</template>

<script>
import Vue from "vue";
import f from "../../services/function";
import moment from "moment";

export default {
    data() {
        return {
            FFMKRAdhesionsContent: true,
            FFMKRAdhesions: [],
            search: "",
            page: 1,
            max: 25,
            adhInfos: {createdFFMKRAdhesionsCount:0,updatedFFMKRAdhesionsCount:0,deletedFFMKRAdhesionsCount:0},
            loadingFFMKRAdhesions: false,
            btnLoadingLoadCsvFile: false,
            totalChunkEndedPourcent: 0,
            chunkError: false,
            chunkInProgress: false
        };
    },
    computed: {
        getFFMKRAdhesions() {
            return this.getPage(
                f.getSearch(this.FFMKRAdhesions, this.search,'','ffmkr_adhesion'),
                this.page,
                this.max
            );
        },
    },
    methods: {
        getFFMKRAdhesionsData() {
        this.loadingFFMKRAdhesions = true;
        this.btnLoadingLoadCsvFile = true;

        this.axios
            .get(`/ffmkr/get/adhesions`)
            .then((response) => {
                this.FFMKRAdhesions = response.data.filter(a=>!a.numcli.includes('NUMCLITEMP'));
                this.loadingFFMKRAdhesions = false;
                this.btnLoadingLoadCsvFile = false;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                console.error(errorMess);
            });
        },
        loadCsvFile(event) {
            const csvFile = event.target;
            if (csvFile.files[0]) {
                const reader = new FileReader();
                reader.readAsText(csvFile.files[0]);

                this.loadingFFMKRAdhesions = true;
                this.btnLoadingLoadCsvFile = true;
                const chunkSize = 500;
                reader.onload = (event) => {
                    const csv = event.target.result;
                    const rows = csv.split('\n');

                    let chunks = [];
                    let chunk = [];

                    for (let i = 0; i < rows.length; i++) {
                        if (chunk.length >= chunkSize) {
                            chunks.push(chunk.join('\n'));
                            chunk = [];
                        }

                        if(i!=0&&!rows[i].includes('numcli'))
                            chunk.push(rows[i]);
                    }

                    if (chunk.length > 0) {
                        chunks.push(chunk.join('\n'));
                    }

                    this.axios
                        .get(`/ffmkr/import/adhesions/start`)
                        .then((response) => {
                            this.totalChunkEndedPourcent = 0;
                            this.adhInfos.createdFFMKRAdhesionsCount = 0;
                            this.adhInfos.updatedFFMKRAdhesionsCount = 0;
                            this.adhInfos.deletedFFMKRAdhesionsCount = 0;

                            for (let i = 0; i < chunks.length; i++) {
                                this.axios
                                    .post(`/ffmkr/import/adhesions/chunk`, {
                                        chunk: chunks[i]
                                    })
                                    .then((response) => {
                                        this.adhInfos.createdFFMKRAdhesionsCount += response.data.createdFFMKRAdhesionsCount;
                                        this.adhInfos.updatedFFMKRAdhesionsCount += response.data.updatedFFMKRAdhesionsCount;

                                        this.chunkInProgress = true;
                                        if(this.totalChunkEndedPourcent<100)
                                            this.totalChunkEndedPourcent += (100/chunks.length);

                                        if(i==chunks.length-1)
                                        {
                                            const endedImport = setInterval(() => {
                                                if(this.totalChunkEndedPourcent>=100)
                                                {
                                                    this.axios
                                                        .get(`/ffmkr/import/adhesions/stop`)
                                                            .then((response) => {
                                                                this.adhInfos.deletedFFMKRAdhesionsCount += response.data.deletedFFMKRAdhesionsCount;

                                                                csvFile.value = '';
                                                                const hasChanges = this.adhInfos.createdFFMKRAdhesionsCount > 0 || this.adhInfos.updatedFFMKRAdhesionsCount > 0 || this.adhInfos.deletedFFMKRAdhesionsCount > 0;

                                                                f.openSuccessNotification(
                                                                    "Adhésion(s) mis à jour",
                                                                    hasChanges ? `
                                                                    Adhésion(s) créée(s) : ${this.adhInfos.createdFFMKRAdhesionsCount}<br>
                                                                    Adhésion(s) modifiée(s) : ${this.adhInfos.updatedFFMKRAdhesionsCount}<br>
                                                                    Adhésion(s) supprimée(s) : ${this.adhInfos.deletedFFMKRAdhesionsCount}
                                                                    ` : 'Votre fichier .csv ne contient aucune nouvelles données'
                                                                );

                                                                if(hasChanges)
                                                                    this.getFFMKRAdhesionsData();

                                                                clearInterval(endedImport);                                                                
                                                                setTimeout(() => {
                                                                   this.chunkInProgress = false;
                                                                   this.loadingFFMKRAdhesions = false;
                                                                    this.btnLoadingLoadCsvFile = false;
                                                                }, 1000);
                                                            })
                                                            .catch((error) => {
                                                                console.log(error);
                                                                this.chunkError = true;
                                                                this.chunkInProgress = false;
                                                                csvFile.value = '';
                                                                f.openErrorNotification(
                                                                    "Erreur",
                                                                    "Erreur lors du processus d'importation du fichier .csv"
                                                                );
                                                            });
                                                }
                                            }, 1000);
                                        }
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                        this.chunkError = true;
                                        this.chunkInProgress = false;
                                        csvFile.value = '';
                                        f.openErrorNotification(
                                            "Erreur",
                                            "Erreur lors du processus d'importation du fichier .csv"
                                        );
                                    });
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            this.chunkError = true;
                            this.chunkInProgress = false;
                            csvFile.value = '';
                            f.openErrorNotification(
                                "Erreur",
                                "Erreur lors du processus d'importation du fichier .csv"
                            );
                        });
                };
            }
        },
        formatDate(datetime) {
            return moment(datetime).format("DD/MM/YYYY");
        },
        getPage(data, page, maxItems) {
            return f.getPage(data, page, maxItems);
        },
        getLength(data, maxItems) {
            return f.getLength(data, maxItems);
        },
        getSearch(data, filter) {
            return f.getSearch(data, filter,'','ffmkr_adhesion');
        },
        getUserName(user) {
            return f.getUserName(user);
        },
        sortData(evt, data, sortKey) {
            this.page = 1;
            this.FFMKRAdhesions = f.sortData(evt, data, sortKey);
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.getFFMKRAdhesionsData();
    },
};
</script>

<style lang="scss">
@import "../../../scss/variables";

@media (min-width: 1100px)
{
    #dashboard main {
        grid-template-columns: repeat(1, 1fr);
    }
}

#ffmkr-adhesions {
    .primary-actions {
        flex-direction: row;

        @media (max-width: 780px)
        {
            flex-direction: column;
        }

        .search {
            margin-right: 4rem;
            position: relative;

            @media (max-width: 780px)
            {
                order: 2;
                margin-right: 0;
            }

            &::after{
                content:'';
                display: block;
                width: 1px;
                height: 80%;
                position: absolute;
                top: 10%;
                right: -2rem;
                background-color: #e7e7e7;

                @media (max-width: 780px)
                {
                    display: none;
                }
            }
        }

        .btn-primary-action {
            width: 29.4rem;
            position: relative;

            @media (max-width: 780px)
            {
                order: 1;
                width: 100%;
                margin-bottom: 1.9rem;
            }
            
            .vs-button .vs-button__content i {
                top: -0.018rem;
                font-size: 1.5rem;
                margin-right: 0.9rem;
            }

            .vs-button .vs-button__content {
                padding: 1.2rem 1.8rem;

                > span 
                {
                    font-size: 1.3rem;
                    position: relative;
                    top: 0.1rem;
                }
            }

            .progressbar-total-chunk-ended 
            {
                width: 100%;
                height: 1.5rem;
                position: absolute;
                bottom: -0.35rem;

                .progressbar-completed
                {
                    background-color: #5ad5b0;
                    height: 100%;
                    border-radius: 1rem;

                    &.transition-width {
                        transition: width 2s;
                    }

                    &.error {
                        background-color: #ec2b2b;
                    }
                }
            }

            input {
                display: none;
            }
        }
    }

    .adhesions-list {
        .max-w-12rem {
            max-width: 12rem;
        }

        .max-w-6-5rem {
            max-width: 6.5rem;
        }

        .logo-blason-kivid-tooltip {
            width: 1.9625rem;
            height: 1.9625rem;
        }

        .logo-blason-kivid {
            background-color: white;
            border-radius: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 0.3rem;
            padding-bottom: 0.33rem;
            width: 1.9625rem;
            height: 1.9625rem;
            border: 0.0625rem solid #f2f2f2;
            box-shadow: 0rem 0.4rem 0.7rem rgba(148,96,77, 0.04);
            margin-right: 0.4rem;
            user-select: none;

            img {
                width: 100%;
            };
        }

        .status {
            border: 1px solid #e8e8e8;
            padding: 0.35rem 0.7rem;
            padding-bottom: 0.4rem;
            border-radius: 0.3rem;
            align-items: center;
            display: inline-flex;
            color: #7a7a7a;
            text-transform: uppercase;
            font-size: 1rem;
            position: relative;
            left: -0.6rem;
            white-space: nowrap;

            .icon-active-status,
            .icon-inactive-status {
                border-radius: 50%;
                margin-right: 0.4rem;
            }

            .icon-active-status {
                width: 1rem;
                height: 1rem;
                min-width: 1rem;
                max-height: 1rem;
                border: 1px solid #fdfdfd;
                background-color: #5ad5b0;
            }

            .icon-inactive-status {
                width: 0.85rem;
                height: 0.85rem;
                min-width: 0.85rem;
                max-height: 0.85rem;
                border: 1px solid #e8e8e8;
                background-color: #f0f0f0;
            }

            p.text-status {
                margin: 0;
                position: relative;
                top: 0.15rem;
            }
        }


        .loading-block:first-child {
            min-height: 2.125rem;
            border-radius: 0.875rem 0.875rem 0 0;
        }
        
        .loading-block {
            min-height: 2rem;
        }

        .vs-table__th.sort {
            cursor: pointer;
        }

        .vs-table__th {
            font-size: 1.3rem;
        }

        .vs-table__td
        {
            font-size: 1.3rem;
        }

        .vs-table__tbody {
            border: 1px solid #f6f6f6;
        }

        .vs-table_not-found {
            display: none;
        }

        .not-found {
            min-height: 13rem;
            background-color: #fefefe;
            border: 1px solid #f6f6f6;

            i {
                max-width: 3.75rem;
            }
        }
    }

    .vs-pagination__slot > div
    {
        font-size: 1.2rem;
        margin: 0 1.2rem;

        > .sepa {
            margin: 0 0.2rem;
        }
    }

    .loading-info
    {
        background-color: rgba(255,255,255, 0.06);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 2;
        padding: 0 3rem;

        .progressbar-total-chunk-ended 
        {
            width: 100%;
            height: 2.3rem;
            max-width: 83rem;
            border-radius: 0.4rem;
            border: 1px solid #e6ecfd;
            margin-bottom: 1.2rem;
            background-color: #fff;

            .progressbar-completed
            {
                background-color: #5ad5b0;
                height: 100%;
                border-radius: 0.4rem;

                &.transition-width {
                    transition: width 2s;
                }

                &.error {
                    background-color: #ec2b2b;
                }
            }
        }

        span 
        {
            font-size: 2rem;
            display: inline-flex;
            margin: 0 3rem;

            strong {
                margin-left: 0.6rem;
            }
        }
    }
}

</style>