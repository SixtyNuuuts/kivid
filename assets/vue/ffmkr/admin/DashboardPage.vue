<template>
    <div class="container">
        <section id="dashboard" class="db-doctor">
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
                    id="ffmkr-doctors"
                    class="kiv-block"
                    :class="{ reduced: !FFMKRDoctorsContent }"
                >
                    <button
                        class="toggle-content"
                        @click="FFMKRDoctorsContent = !FFMKRDoctorsContent"
                    >
                        <i class="kiv-chevron-down icon-3"></i>
                    </button>
                    <h2>Praticiens FFMKR <span v-if="!loadingFFMKRDoctors">({{ FFMKRDoctors.length }} adhérents)</span></h2>
                    <transition name="height">
                        <div v-if="FFMKRDoctorsContent">
                            <div class="primary-actions">
                                <div class="search">
                                    <vs-input
                                        v-model="search"
                                        @keyup="page = 1"
                                        label-placeholder="Filtrer par nom ou email"
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
                                        <i class="fas fa-file-import"></i> <span><span v-if="FFMKRDoctors.length>0">Mettre à jour les praticiens (CSV)</span><span v-else>Importer des praticiens (CSV)</span></span>
                                    </vs-button>                    
                                </div>
                            </div>
                            <div class="doctors-list">
                                <div v-if="!loadingFFMKRDoctors">
                                    <vs-table>
                                        <template #thead>
                                            <vs-tr>
                                                <vs-th sort @click="sortData($event, FFMKRDoctors, 'doctor.FFMKRAdhesionRequestToken')">
                                                    <span class="logo-blason-kivid"><img src="/img/logo-kivid-gradient-grey.svg" alt="logo Kivid"></span>
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRDoctors, 'numcli')">
                                                NumCli
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRDoctors, 'firstname')">
                                                Prénom
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRDoctors, 'lastname')">
                                                Nom
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRDoctors, 'email')">
                                                Email
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRDoctors, 'numRpps')">
                                                Num RPPS
                                                </vs-th>
                                                <vs-th sort @click="sortData($event, FFMKRDoctors, 'dateOf')">
                                                Date De
                                                </vs-th>
                                            </vs-tr>
                                        </template>
                                        <template #tbody>
                                            <vs-tr
                                                v-for="(doctor, i) in getFFMKRDoctors"
                                                :data="doctor"
                                                :key="i"
                                            >
                                                <vs-td>
                                                    <vs-tooltip class="logo-blason-kivid-tooltip" v-if="doctor.doctor.FFMKRAdhesionRequestToken">
                                                        <span class="logo-blason-kivid"><img src="/img/logo-kivid-gradient.svg" alt="logo Kivid"></span>
                                                        <template #tooltip>Adhésion via kivid</template>
                                                    </vs-tooltip>
                                                </vs-td>
                                                <vs-td>
                                                    {{ doctor.numcli ? doctor.numcli : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ doctor.firstname ? ucwords(doctor.firstname) : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ doctor.lastname ? ucwords(doctor.lastname) : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ doctor.email ? doctor.email : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ doctor.numRpps ? doctor.numRpps : '---' }}
                                                </vs-td>
                                                <vs-td>
                                                    {{ doctor.dateOf ? doctor.dateOf : '---' }}
                                                </vs-td>
                                            </vs-tr>
                                        </template>
                                    </vs-table>
                                </div>
                                <div
                                    class="not-found"
                                    v-if="
                                        !loadingFFMKRDoctors &&
                                        !getFFMKRDoctors.length &&
                                        !search
                                    "
                                >
                                    <p>
                                        <i class="fas fa-user-minus"></i>
                                        <span>Il n'y a pas de praticien FFMKR sur Kivid</span>
                                    </p>
                                </div>
                                <div
                                    class="not-found"
                                    v-if="
                                        !loadingFFMKRDoctors &&
                                        !getFFMKRDoctors.length &&
                                        search
                                    "
                                >
                                    <p>
                                        <i class="fas fa-user-minus"></i>
                                        <span
                                            >Aucun praticien FFMKR n'a été trouvé avec
                                            <span v-if="search"
                                                >"<strong>{{ search }}</strong
                                                >"</span
                                            ></span
                                        >
                                    </p>
                                </div>
                                <div v-if="loadingFFMKRDoctors">
                                    <div
                                        v-for="(loading, i) in 26"
                                        :key="i"
                                        class="loading loading-block"
                                    >
                                    </div>
                                </div>
                            </div>
                            <div class="pagination" v-if="FFMKRDoctors.length > max">
                                <vs-pagination 
                                    v-model="page" 
                                    :length="
                                        getLength(getSearch(FFMKRDoctors, search), max)
                                    "
                                >
                                    <vs-select v-model="page">
                                        <vs-option
                                            v-for="numberPage in getLength(getSearch(FFMKRDoctors, search), max)"
                                            :key="numberPage"
                                            :label="numberPage"
                                            :value="numberPage">
                                            {{ numberPage }}
                                        </vs-option>
                                    </vs-select>
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
            FFMKRDoctorsContent: true,
            FFMKRDoctors: [],
            search: "",
            page: 1,
            max: 25,
            loadingFFMKRDoctors: false,
            btnLoadingLoadCsvFile: false,
        };
    },
    computed: {
        getFFMKRDoctors() {
            return this.getPage(
                f.getSearch(this.FFMKRDoctors, this.search),
                this.page,
                this.max
            );
        },
    },
    methods: {   
        getFFMKRDoctorsData() {
        this.loadingFFMKRDoctors = true;
        this.btnLoadingLoadCsvFile = true;

        this.axios
            .get(`/ffmkr/get/doctors`)
            .then((response) => {
                this.FFMKRDoctors = response.data;
                this.loadingFFMKRDoctors = false;
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
                const formData = new FormData();
                formData.append('csv_file', csvFile.files[0]);
           
                this.loadingFFMKRDoctors = true;
                this.btnLoadingLoadCsvFile = true;

                this.axios
                    .post(`/ffmkr/import/doctors`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((response) => {
                        csvFile.value = '';
                        this.loadingFFMKRDoctors = false;
                        this.btnLoadingLoadCsvFile = false;
                        const hasChanges = response.data.createdFFMKRDoctorsCount > 0 || response.data.updatedFFMKRDoctorsCount > 0 || response.data.deletedFFMKRDoctorsCount > 0;

                        f.openSuccessNotification(
                            "Praticiens mis à jour",
                             hasChanges ? `
                             Praticien(s) créé(s) : ${response.data.createdFFMKRDoctorsCount}<br>
                             Praticien(s) modifié(s) : ${response.data.updatedFFMKRDoctorsCount}<br>
                             Praticien(s) supprimé(s) : ${response.data.deletedFFMKRDoctorsCount}
                             ` : 'Votre fichier .csv ne contient aucune nouvelles données'
                        );

                        if(hasChanges)
                            this.getFFMKRDoctorsData();
                    })
                    .catch((error) => {
                        console.log(error);
                        csvFile.value = '';

                        f.openErrorNotification(
                            "Erreur",
                            "Erreur lors du processus d'importation du fichier .csv"
                        );
                    });
            }
        },
        ucwords(str) {
        return str.toLowerCase().replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
            function(s){
                return s.toUpperCase();
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
            this.FFMKRDoctors = f.sortData(evt, data, sortKey);
        },
    },
    created() {
        Vue.prototype.$vs = this.$vs;
        document.body.classList.add("fuzzy-balls");

        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.getFFMKRDoctorsData();
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

#ffmkr-doctors {
    .primary-actions {
        flex-direction: row;

        .search {
            margin-right: 1.5rem;
        }

        .btn-primary-action {
            width: 29.4rem;

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

            input {
                display: none;
            }
        }
    }

    .doctors-list {
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

            img {
                width: 100%;
            };
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
}

</style>