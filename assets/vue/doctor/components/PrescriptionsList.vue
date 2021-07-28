<template>
    <div>
        <vs-table>
            <template #header>
                <vs-input
                    v-model="filter"
                    primary
                    placeholder="Filtrer par fiche et/ou patient"
                    @keyup="page = 1"
                >
                    <template #icon>
                        <i class="fe fe-search"></i>
                    </template>
                </vs-input>
            </template>
            <template #thead>
                <vs-tr>
                    <vs-th
                        sort
                        @click="
                            doctorPrescriptionsListArray = sortData(
                                $event,
                                doctorPrescriptionsListArray,
                                'createdAt'
                            )
                        "
                    >
                        Date de prescription
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorPrescriptionsListArray = sortData(
                                $event,
                                doctorPrescriptionsListArray,
                                'worksheet.title'
                            )
                        "
                    >
                        Fiche
                    </vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorPrescriptionsListArray = sortData(
                                $event,
                                doctorPrescriptionsListArray,
                                'patient.lastname'
                            )
                        "
                    >
                        Patient
                    </vs-th>
                    <vs-th>Commentaires</vs-th>
                    <vs-th
                        sort
                        @click="
                            doctorPrescriptionsListArray = sortData(
                                $event,
                                doctorPrescriptionsListArray,
                                'progression'
                            )
                        "
                    >
                        Progression
                    </vs-th>
                    <vs-th></vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr
                    :key="i"
                    v-for="(prescription, i) in getPage(
                        getSearch(doctorPrescriptionsListArray, filter),
                        page,
                        max
                    )"
                >
                    <vs-td>
                        {{ formatDate(prescription.createdAt) }}
                    </vs-td>
                    <vs-td>
                        {{ prescription.worksheet.title }}
                    </vs-td>
                    <vs-td>
                        <div class="user">
                            <vs-avatar circle size="25">
                                <img
                                    :src="
                                        prescription.patient.avatarUrl
                                            ? prescription.patient.avatarUrl
                                            : '/img/avatar-default.svg'
                                    "
                                    alt="avatar du patient"
                                />
                            </vs-avatar>
                            <p>
                                {{ prescription.patient.lastname }}
                                {{ prescription.patient.firstname }}
                            </p>
                        </div>
                    </vs-td>
                    <vs-td class="comments-icon">
                        <div>
                            <i class="fe fe-message-square"></i>
                            <div class="comments-count">
                                {{ Math.floor(Math.random() * 15) }}
                            </div>
                        </div>
                    </vs-td>
                    <vs-td>
                        <div class="progress">
                            <span
                                class="progress-bar"
                                :style="`width: ${prescription.progression}%`"
                            ></span>
                        </div>
                    </vs-td>
                    <vs-td>
                        <div>
                            <vs-tooltip>
                                <vs-button
                                    class="btn-remove"
                                    @click="removePrescription(prescription)"
                                >
                                    <i class="fe fe-trash"></i>
                                </vs-button>
                                <template #tooltip>
                                    Supprimer la prescription
                                </template>
                            </vs-tooltip>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination
                    v-model="page"
                    :length="
                        getLength(
                            getSearch(doctorPrescriptionsListArray, filter),
                            max
                        )
                    "
                />
            </template>
            <template #notFound>
                <div v-if="doctorPrescriptionsListArray.length">
                    <div v-if="filter">
                        <i class="fe fe-file-minus"></i>
                        Aucune prescription n'a été trouvée avec "<strong>{{
                            filter
                        }}</strong
                        >".
                    </div>
                    <div v-else>
                        <i class="fe fe-file-minus"></i>
                        Vous n'avez aucune prescription.
                    </div>
                </div>
                <div v-else>...</div>
            </template>
        </vs-table>
        <vs-dialog
            class="modal-confirm"
            v-model="modalConfirmRemovePrescription"
        >
            <p class="modal-confirm-text">Confirmer la suppression de</p>

            <div class="modal-confirm-detail remove-item">
                <div class="modal-confirm-icon remove-item">
                    <i class="fe fe-trash"></i>
                </div>
                <p>
                    <span>
                        {{ removePrescriptionDetails.worksheet.title }}
                    </span>
                    pour
                    <span>
                        {{
                            removePrescriptionDetails.patient.gender
                                ? "male" ===
                                  removePrescriptionDetails.patient.gender
                                    ? "M."
                                    : "Mme"
                                : ""
                        }}
                        {{ removePrescriptionDetails.patient.lastname }}
                        {{ removePrescriptionDetails.patient.firstname }}
                    </span>
                </p>
            </div>

            <div class="modal-confirm-buttons">
                <vs-button
                    @click="modalConfirmRemovePrescription = false"
                    dark
                    transparent
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validRemovePrescription"
                    :loading="btnLoadingValidRemovePrescription"
                    danger
                    transparent
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
    </div>
</template>

<script>
import f from "../../services/function";

export default {
    name: "PrescriptionsList",
    props: {
        doctor: Object,
        doctorPrescriptions: Array,
        csrfTokenRemovePrescription: String,
    },
    data() {
        return {
            filter: "",
            page: 1,
            max: 10,
            doctorPrescriptionsList: [],
            removePrescriptionDetails: { worksheet: {}, patient: {} },
            modalConfirmRemovePrescription: false,
            btnLoadingValidRemovePrescription: false,
        };
    },
    computed: {
        doctorPrescriptionsListArray: {
            get() {
                let doctorPrescriptionsList;
                if (!this.doctorPrescriptionsList.length) {
                    doctorPrescriptionsList = this.doctorPrescriptions;
                } else {
                    doctorPrescriptionsList = this.doctorPrescriptionsList;
                }

                return doctorPrescriptionsList;
            },
            set(newDoctorPrescriptionsList) {
                this.doctorPrescriptionsList = newDoctorPrescriptionsList;
            },
        },
    },
    methods: {
        removePrescription(prescription) {
            this.removePrescriptionDetails = prescription;

            return (this.modalConfirmRemovePrescription =
                !this.modalConfirmRemovePrescription);
        },
        validRemovePrescription() {
            this.btnLoadingValidRemovePrescription = true;

            this.axios
                .post(`/kine/${this.doctor.id}/remove/prescription`, {
                    _token: this.csrfTokenRemovePrescription,
                    prescription_id: this.removePrescriptionDetails.id,
                })
                .then((response) => {
                    this.openNotification(
                        `<strong>Suppression de la prescription</strong>`,
                        `${response.data}`,
                        "top-right",
                        "success",
                        "<i class='fe fe-check-circle'></i>"
                    );
                    this.doctorPrescriptionsListArray.splice(
                        this.doctorPrescriptionsListArray.indexOf(
                            this.removePrescriptionDetails
                        ),
                        1
                    );
                    this.btnLoadingValidRemovePrescription = false;
                    this.modalConfirmRemovePrescription = false;
                })
                .catch((error) => {
                    this.openNotification(
                        `<strong>Suppression de la prescription : Erreur</strong>`,
                        `${error.response.data}`,
                        "top-right",
                        "danger",
                        "<i class='fe fe-alert-circle'></i>"
                    );
                    this.btnLoadingValidRemovePrescription = false;
                    this.modalConfirmRemovePrescription = false;
                });
        },
        openNotification(title, text, position, color, icon) {
            this.$vs.notification({
                progress: "auto",
                flat: true,
                icon,
                color,
                position,
                title,
                text,
            });
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
        sortData(evt, data, sortKey, type) {
            return f.sortData(evt, data, sortKey, type);
        },
        formatDate(datetime) {
            return f.formatDate(datetime);
        },
    },
};
</script>

<style lang="scss" scoped>
.vs-table__th:first-child {
    max-width: 110px;
}

.vs-table__th:nth-child(2) {
    width: 250px;
}

.vs-table__th:nth-child(3) {
    width: 200px;
}

.user {
    p {
        margin-bottom: 0;
        margin-left: 0.6em;
        flex: 1;
    }
}

.comments-icon {
    font-size: 1.7em;
    color: #d2ddeb;

    > div {
        position: relative;
        cursor: pointer;
        display: inline;

        .comments-count {
            background: linear-gradient(
                90deg,
                #ffc250,
                #ffb049 50%,
                #fc9c2e 100%
            );
            position: absolute;
            top: -3px;
            right: -4px;
            border-radius: 50%;
            width: 13px;
            height: 13px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 8px;
            font-weight: 600;
        }
    }
}

.progress {
    width: 100%;
    max-width: 260px;
    height: 6px;
    background: #e1e4e8;
    border-radius: 3px;
    overflow: hidden;

    .progress-bar {
        display: block;
        height: 100%;
        background: linear-gradient(90deg, #ffd650, #ffb049 50%, #f59120 100%);
    }
}
</style>
