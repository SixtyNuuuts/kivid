<template>
    <div class="container">
        <section id="dashboard">
            <h1>
                <transition name="fade">
                    <span
                        >Bienvenue sur le listing !
                        <i>
                            <img
                                src="../../img/icons/colored/hand.svg"
                                alt="Icone d'une main qui fait 'coucou'"
                            /> </i
                    ></span>
                </transition>
            </h1>
            <main>
                 <section
                    id="liste-items"
                    class="kiv-block"
                    :class="{ reduced: !ListeItemsContent }"
                >
                    <button
                        class="toggle-content"
                        @click="ListeItemsContent = !ListeItemsContent"
                    >
                        <i class="kiv-chevron-down icon-3"></i>
                    </button>
                    <h2>{{listeType ==='doctor'? 'Praticiens' : 'Patients'}} <span v-if="!loadingListeItems">({{ ListeItems.length }})</span></h2>
                    <transition name="height">
                        <div v-if="ListeItemsContent">
                            <div class="primary-actions">
                                <div class="search">
                                    <vs-input
                                        v-model="search"
                                        @keyup="page = 1"
                                        label-placeholder="Nom, Prénom ou Email"
                                    />
                                </div>
                                <div class="btn-primary-action">
                                    <vs-button
                                        class="w-100"
                                        @click="exportData()"
                                        :loading="btnLoadingExportListeItems"
                                    >
                                        <i class="fas fa-file-import"></i> <span>Exporter (CSV)</span>
                                    </vs-button>
                                </div>
                            </div>
                            <div class="adhesions-list">
                                <div v-if="!loadingListeItems">
                                    <vs-table>
                                        <template #thead>
                                            <vs-tr>
                                                <vs-th sort @click="sortData($event, ListeItems, 'id')">
                                                    Id
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, ListeItems, 'firstname')">
                                                    Prénom
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, ListeItems, 'lastname')">
                                                    Nom
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, ListeItems, 'email')">
                                                    Email
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, ListeItems, 'numRppsAmeli')">
                                                    Num RPPS/Ameli
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, ListeItems, 'entityName')">
                                                    Cabinet
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, ListeItems, 'city')">
                                                    Ville
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, ListeItems, 'worksheets')">
                                                    Fiche(s)
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, ListeItems, 'patients')">
                                                    Patient(s)
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, ListeItems, 'FFMKRAdhesion')" class="max-w-12rem">
                                                    FFMKR Adhesion
                                                </vs-th>
                                                <!-- <vs-th sort @click="sortData($event, ListeItems, 'requestToken')" class="max-w-6-5rem">
                                                    <span class="logo-blason-kivid"><img src="/img/logo-kivid-gradient-grey.svg" alt="logo Kivid"></span>
                                                </vs-th> -->
                                            </vs-tr>
                                        </template>
                                        <template #tbody>
                                            <vs-tr
                                                v-for="(item, i) in getListeItems"
                                                :data="item"
                                                :key="i"
                                            >
                                                <vs-td>
                                                    {{ item.id ? item.id : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ item.firstname ? item.firstname : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ item.lastname ? item.lastname : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ item.email ? item.email : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ item.numRppsAmeli ? item.numRppsAmeli : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ item.entityName ? item.entityName : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ item.city ? item.city : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ item.worksheets ? item.worksheets : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ item.patients ? item.patients : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    <div class="status" v-if="item.FFMKRAdhesion">
                                                        <div class="icon-active-status"></div>
                                                        <p class="text-status">Oui</p>
                                                    </div>
                                                   <div class="status" v-else>
                                                        <div class="icon-inactive-status"></div>
                                                        <p class="text-status">Non</p>
                                                    </div>
                                                </vs-td>
                                                <!-- <vs-td>
                                                    <vs-tooltip class="logo-blason-kivid-tooltip" v-if="adhesion.requestToken">
                                                        <span class="logo-blason-kivid"><img src="/img/logo-kivid-gradient.svg" alt="logo Kivid"></span>
                                                        <template #tooltip>Adhésion via kivid</template>
                                                    </vs-tooltip>
                                                </vs-td> -->
                                            </vs-tr>
                                        </template>
                                    </vs-table>
                                </div>
                                <div
                                    class="not-found"
                                    v-if="
                                        !loadingListeItems &&
                                        !getListeItems.length &&
                                        !search
                                    "
                                >
                                    <p>
                                        <i class="fas fa-user-minus"></i>
                                        <span>Il n'y a pas de {{ listeType }} sur Kivid</span>
                                    </p>
                                </div>
                                <div
                                    class="not-found"
                                    v-if="
                                        !loadingListeItems &&
                                        !getListeItems.length &&
                                        search
                                    "
                                >
                                    <p>
                                        <i class="fas fa-user-minus"></i>
                                        <span
                                            >Aucun {{ listeType }} n'a été trouvé avec
                                            <span v-if="search"
                                                >"<strong>{{ search }}</strong
                                                >"</span
                                            ></span
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="pagination">
                                <vs-pagination 
                                    v-model="page" 
                                    :length="getLength(getSearch(ListeItems, search), max)"
                                >
                                    <div>
                                        Page : <b>{{ page }}</b><span class="sepa">/</span>{{ getLength(getSearch(ListeItems, search), max) }}
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
import f from "../services/function";
import moment from "moment";

export default {
    data() {
        return {
            ListeItemsContent: true,
            ListeItems: [],
            search: "",
            page: 1,
            max: 25,
            loadingListeItems: false,
            btnLoadingExportListeItems: false,
            listeType: null,
        };
    },
    computed: {
        getListeItems() {
            return this.getPage(
                f.getSearch(this.ListeItems, this.search),
                this.page,
                this.max
            );
        },
    },
    methods: {
        getListeItemsData() {
        this.loadingListeItems = true;
        this.btnLoadingExportListeItems = true;

        this.axios
            .get(`/admin/get/listing/${this.listeType}`)
            .then((response) => {
                this.ListeItems = response.data.map(item => {
                    return {
                        ...item,
                        patients: item.patients.length,
                        worksheets: item.worksheets.length,
                    };
                });
                this.loadingListeItems = false;
                this.btnLoadingExportListeItems = false;
            })
            .catch((error) => {
                const errorMess =
                    "object" === typeof error.response.data
                        ? error.response.data.detail
                        : error.response.data;

                console.error(errorMess);
            });
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
            return f.getSearch(data, filter);
        },
        getUserName(user) {
            return f.getUserName(user);
        },
        sortData(evt, data, sortKey) {
            this.page = 1;
            this.ListeItems = f.sortData(evt, data, sortKey);
        },
        exportData()
        {
            const itemsFiltered = f.getSearch(this.ListeItems, this.search);

            let csvContent = '"id";"firstname";"lastname";"email";"num_rpps_ameli";"entity_name";"city";"worksheets";"patients";"ffmkradhesion_id"\n'; // Ligne d'en-tête
            itemsFiltered.forEach(item => {
                let row = `${item.id};"${item.firstname?item.firstname:''}";"${item.lastname?item.lastname:''}";"${item.email?item.email:''}";"${item.numRppsAmeli?item.numRppsAmeli:''}";"${item.entityName?item.entityName:''}";"${item.city?item.city:''}";"${item.worksheets}";"${item.patients}";"${item.FFMKRAdhesion?'Oui':'Non'}"`;
                csvContent += row + '\n';
            });
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', 'export.csv');
            link.click();
        }
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);
        
        this.listeType = data.listeType;

        this.getListeItemsData(this.listeType);
    },
};
</script>

<style lang="scss">
@import "../../scss/variables";

@media (min-width: 1100px)
{
    #dashboard main {
        grid-template-columns: repeat(1, 1fr);
    }
}

#liste-items {
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