<template>
    <section
        id="my-worksheets"
        class="kiv-block s-prescriptions"
        :class="{ reduced: !$parent.myPrescriptionsContent }"
    >
        <div
            class="toggle-content tab"
            @click="
                $parent.myPrescriptionsContent = !$parent.myPrescriptionsContent
            "
        >
            <i class="kiv-chevron-down icon-3"></i>
        </div>
        <div class="tabs">
            <div @click="activeTab(1)">
                <h2><span>Mes Patients</span></h2>
            </div>
            <div class="inactive" :class="{disabled:this.$parent.prescriProcess&&this.$parent.prescriProcessPatient}" @click="activeTab(2)">
                <h2><span>Mes fiches</span></h2>
            </div>
        </div>
        <transition name="fade">
            <div v-if="prescriProcess" class="prescri-process-dialog prescri-process-dialog-patient">
                <span class="step-num"
                    ><i class="fas fa-folder-plus"></i><span class="only-mobile">Prescription - </span>Etape
                    {{ !$parent.prescriProcessWorksheetSelected ? 1 : 2 }}
                </span>
                <p>Veuillez Sélectionner un patient</p>
            </div>
        </transition>
        <transition name="height">
            <div v-if="$parent.myPrescriptionsContent">
                <div class="primary-actions">
                    <div class="search loading-s-c">
                        <vs-input
                            v-model="search"
                            @keyup="page = 1"
                            label-placeholder="Filtrer par nom de fiche et/ou patient"
                        />
                        <div v-if="loadingDoctorAllPatients" class="loading-s">
                            <div class="ldio">
                                <div></div><div></div><div></div><div></div><div></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="btn-primary-action add" 
                            :class="{'btn-create-action':$parent.prescriProcess,
                                                        active: prescriProcess,
                                'active-effect': prescriProcess&&!$parent.prescriProcessPatientSelected,
                            }">
                            <vs-tooltip>
                                <vs-button
                                    @click="modalAddPatient = true"
                                    class="btn-action add"
                                    circle
                                    floating
                                >
                                    <plus-icon
                                        size="3x"
                                        class="custom-class"
                                    ></plus-icon>
                                </vs-button>
                                <template #tooltip>
                                    Ajouter un patient
                                </template>
                            </vs-tooltip>
                        </div>
                        <vs-dialog
                            width="450px"
                            v-model="modalAddPatient"
                            :loading="$parent.loadingAllPatients"
                        >
                            <PatientAdd
                                :doctor="doctor"
                                :allPatients="allPatients"
                                :loadingAllPatients="loadingAllPatients"
                                :csrfTokenAddPatient="csrfTokenAddPatient"
                                :csrfTokenCreatePatient="csrfTokenCreatePatient"
                                @addPatient="addPatient"
                                @closeModalAddPatient="modalAddPatient = false"
                            />
                        </vs-dialog>
                    </div>
                    <div class="btn-prescri-main" :class="{'cancel-prescri-process':prescriProcess}">
                            <vs-button
                                @click="prescriProcessMain"
                                class="btn-action add"
                                circle
                                floating
                            >
                                <svg v-if="!prescriProcess" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="96px" height="96px"><path d="M 12.5 4 C 10.019 4 8 6.019 8 8.5 L 8 39.5 C 8 41.981 10.019 44 12.5 44 L 25.640625 44 C 24.785625 43.111 24.055516 42.103 23.478516 41 L 12.5 41 C 11.673 41 11 40.327 11 39.5 L 11 8.5 C 11 7.673 11.673 7 12.5 7 L 24 7 L 24 15.5 C 24 17.981 26.019 20 28.5 20 L 37 20 L 37 22.169922 C 38.045 22.331922 39.053 22.606906 40 23.003906 L 40 18.5 C 40 18.0855 39.831922 17.710828 39.560547 17.439453 L 26.560547 4.4394531 C 26.289172 4.1680781 25.9145 4 25.5 4 L 12.5 4 z M 27 9.1210938 L 34.878906 17 L 28.5 17 C 27.673 17 27 16.327 27 15.5 L 27 9.1210938 z M 35 24 C 28.925 24 24 28.925 24 35 C 24 41.075 28.925 46 35 46 C 41.075 46 46 41.075 46 35 C 46 28.925 41.075 24 35 24 z M 35 27 C 35.552 27 36 27.448 36 28 L 36 34 L 42 34 C 42.552 34 43 34.448 43 35 C 43 35.552 42.552 36 42 36 L 36 36 L 36 42 C 36 42.552 35.552 43 35 43 C 34.448 43 34 42.552 34 42 L 34 36 L 28 36 C 27.448 36 27 35.552 27 35 C 27 34.448 27.448 34 28 34 L 34 34 L 34 28 C 34 27.448 34.448 27 35 27 z"/></svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
                                <span class="btn-action-text">Prescrire</span>
                            </vs-button>
                    </div>
                </div>
                <div class="worksheet-list wl-patients wl-doctor" :class="{empty:!getDoctorPatients.length,'prescri-process':prescriProcess}">
                    <div
                        v-if="
                            !loadingDoctorFirstsPatients &&
                            getDoctorPatients.length
                        "
                    >
                        <div
                            v-for="(patient, i) in getDoctorPatients"
                            :key="i"
                            :class="{
                                active: prescriProcess,
                                'active-effect': prescriProcess&&!$parent.prescriProcessPatientSelected,
                                selected:
                                    $parent.prescriProcessPatientSelected &&
                                    $parent
                                        .prescriProcessPatientSelected
                                        .id === patient.id,
                            }"
                            @click="
                                prescriProcessPatientChoiceMobile(patient)
                            "
                        >
                            <div class="patient-details">
                                <div>
                                    <vs-avatar
                                        @click="
                                            redirectToPatientDashboard(
                                                patient.id
                                            )
                                        "
                                        class="avatar"
                                        circle
                                        size="60"
                                    >
                                        <img
                                            :src="
                                                patient.avatarUrl
                                                    ? patient.avatarUrl
                                                    : '/img/avatar-default.svg'
                                            "
                                            :alt="`Avatar de ${patient.firstname} ${patient.lastname}`"
                                        />

                                        <div
                                            v-if="patient.birthdate"
                                            class="age"
                                        >
                                            {{ getAge(patient.birthdate) }} ans
                                        </div>
                                    </vs-avatar>
                                    <div class="user-name">
                                        <div
                                            @click="
                                                redirectToPatientDashboard(
                                                    patient.id
                                                )
                                            "
                                            class="name"
                                        >
                                            <span
                                                v-if="
                                                    patient.firstname ||
                                                    patient.lastname
                                                "
                                            >
                                                {{ patient.firstname }}
                                                {{ patient.lastname }}
                                            </span>
                                            <span v-else>
                                                {{ patient.email }}
                                            </span>
                                        </div>
                                        <div
                                            v-if="patient.addRequestDoctor"
                                            class="mail"
                                            @click="
                                                redirectToPatientDashboard(
                                                    patient.id
                                                )
                                            "
                                        >
                                            {{ patient.email }}
                                        </div>
                                        <div
                                            class="prescriptions"
                                            :class="{multiples:'worksheets' in patient && patient.worksheets.length && patient.worksheets.length>1}"
                                        >
                                            <h4
                                                @click="
                                                    redirectToPatientDashboard(
                                                        patient.id
                                                    )
                                                "
                                            >
                                                <span v-if="'worksheets' in patient && patient.worksheets.length">
                                                    <span>{{ patient.worksheets.length }}</span>
                                                    prescription<span
                                                        v-if="
                                                            patient.worksheets
                                                                .length > 1
                                                        "
                                                        >s
                                                    :</span>
                                                </span>
                                                <span v-else>aucune prescription</span>
                                            </h4>
                                            <ul class="prescriptions-patient-list">
                                                <li                                                 
                                                    v-for="(
                                                        worksheet, i
                                                    ) in patient.worksheets"
                                                    :key="i"
                                                    class="worksheet-progress-line"
                                                >
                                                    <div 
                                                        class="progressbar-base"
                                                       :class="{'loading-gray': loadingsGetSessions.includes(worksheet.id)}"
                                                    >
                                                        <div class="worksheet-infos">
                                                            <span>{{ worksheet.title }}</span>
                                                        </div>
                                                        <div
                                                            class="progressbar-thumb"
                                                            :style="{
                                                                width: worksheet.worksheetTotalProgression > 3 ? `${worksheet.worksheetTotalProgression}%` : `${0}%`,
                                                            }"
                                                        ></div>
                                                    </div>
                                                    <!-- <div v-if="worksheet.commentaries && worksheet.commentaries.length" class="worksheet-commentaries">
                                                        <i class="far fa-comment-alt"></i>
                                                        <div class="count-commentaries">
                                                            {{ worksheet.commentaries.length}}
                                                        </div>
                                                    </div> -->
                                                </li>
                                                <!-- <div
                                                    class="btn-prescription-action"
                                                    :class="{
                                                        active: prescriProcess,
                                                        'active-effect': prescriProcess&&!$parent.prescriProcessPatientSelected,
                                                        selected:
                                                            $parent.prescriProcessPatientSelected &&
                                                            $parent
                                                                .prescriProcessPatientSelected
                                                                .id === patient.id,
                                                    }"
                                                >
                                                    <vs-button
                                                        :loading="
                                                            btnLoadingPatientPrescriProcessRedirect ===
                                                            patient.id
                                                        "
                                                        @click="
                                                            prescriProcessPatientChoice(patient)
                                                        "
                                                        class="w-100"
                                                    >
                                                        <transition name="fade">
                                                            <span
                                                                v-if="
                                                                    (!prescriProcess &&
                                                                        !$parent.prescriProcessPatientSelected) ||
                                                                    ($parent.prescriProcessPatientSelected &&
                                                                        $parent
                                                                            .prescriProcessPatientSelected
                                                                            .id != patient.id)
                                                                "
                                                                >
                                                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">    <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M15,14h-2v2c0,0.552-0.448,1-1,1h0 c-0.552,0-1-0.448-1-1v-2H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h2v-2c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v2h2 c0.552,0,1,0.448,1,1v0C16,13.552,15.552,14,15,14z"/></svg>
                                                            Prescrire</span
                                                            >
                                                            <span
                                                                v-if="
                                                                    prescriProcess &&
                                                                    !$parent.prescriProcessPatientSelected
                                                                "
                                                                >
                                                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">    <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M15,14h-2v2c0,0.552-0.448,1-1,1h0 c-0.552,0-1-0.448-1-1v-2H9c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h2v-2c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v2h2 c0.552,0,1,0.448,1,1v0C16,13.552,15.552,14,15,14z"/></svg>
                                                                Sélectionner</span
                                                            >
                                                            <span
                                                                v-if="
                                                                    $parent.prescriProcessPatientSelected &&
                                                                    $parent
                                                                        .prescriProcessPatientSelected
                                                                        .id === patient.id
                                                                "
                                                                ><i
                                                                    class="fas fa-check-circle"
                                                                ></i
                                                                >Sélectionné</span
                                                            >
                                                        </transition>
                                                    </vs-button>
                                                </div> -->
                                            </ul>
                                        </div>
                                    </div>
                                    <button
                                        class="remove-user"
                                        @click="removePatient(patient)"
                                        v-if="!prescriProcess"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6367188 13 L 11.15625 39.029297 C 11.43025 41.862297 13.785813 44 16.632812 44 L 31.367188 44 C 34.214187 44 36.56875 41.862297 36.84375 39.029297 L 39.363281 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 19.5 18 C 20.328 18 21 18.671 21 19.5 L 21 34.5 C 21 35.329 20.328 36 19.5 36 C 18.672 36 18 35.329 18 34.5 L 18 19.5 C 18 18.671 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.671 30 19.5 L 30 34.5 C 30 35.329 29.328 36 28.5 36 C 27.672 36 27 35.329 27 34.5 L 27 19.5 C 27 18.671 27.672 18 28.5 18 z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="not-found"
                        v-if="
                            !loadingDoctorFirstsPatients &&
                            !getDoctorPatients.length &&
                            !search
                        "
                    >
                        <p>
                            <i class="fas fa-user-minus"></i>
                            <span v-if="!prescriProcess">Vous n'avez pas de patient</span>
                            <span v-else>
                                Pour créer une prescription, vous&nbsp;devez sélectionner un patient,<br>
                                vous pouvez en créer un en utilisant le bouton "+" ci-dessus.<br>
                            </span>
                        </p>
                    </div>
                    <div
                        class="not-found"
                        v-if="
                            !loadingDoctorAllPatients &&
                            !loadingDoctorFirstsPatients &&
                            !getDoctorPatients.length &&
                            search
                        "
                    >
                        <p>
                            <i class="fas fa-folder-minus"></i>
                            <span
                                >Aucun patient n'a été trouvé avec
                                <span v-if="search"
                                    >"<strong>{{ search }}</strong
                                    >"</span
                                ></span
                            >
                        </p>
                    </div>
                    <div
                        class="not-found"
                        v-if="
                            loadingDoctorAllPatients &&
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
                    </div>
                    <div v-if="loadingDoctorFirstsPatients">
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
                                <div class="loading worksheet-title w-65"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="loading worksheet-exercises-count w-45"
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
                                <div class="loading worksheet-title w-45"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="loading worksheet-exercises-count w-45"
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
                                <div class="loading worksheet-title w-55"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="loading worksheet-exercises-count w-45"
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
                                <div class="loading worksheet-title w-45"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="loading worksheet-exercises-count w-45"
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
                                <div class="loading worksheet-title w-45"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="loading worksheet-exercises-count w-45"
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading loading-block">
                            <div class="worksheet-header w-85">
                                <div class="loading worksheet-title w-45"></div>
                                <div class="loading part-of-body"></div>
                            </div>
                            <div class="loading worksheet-progress-line"></div>
                            <div class="worksheet-content">
                                <div class="worksheet-details">
                                    <div
                                        class="loading worksheet-exercises-count w-45"
                                    ></div>
                                    <div
                                        class="loading worksheet-timing w-25"
                                    ></div>
                                    <div
                                        class="loading worksheet-period w-15"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="pagination"
                    v-if="
                        !loadingDoctorFirstsPatients &&
                        !loadingDoctorAllPatients &&
                        doctorPatients.length > max
                    "
                >
                    <vs-pagination
                        v-model="page"
                        :length="
                            getLength(getSearch(doctorPatients, search), max)
                        "
                    >
                        <vs-select v-model="page">
                            <vs-option
                                v-for="numberPage in getLength(
                                    getSearch(doctorPatients, search),
                                    max
                                )"
                                :key="numberPage"
                                :label="numberPage"
                                :value="numberPage"
                            >
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
        <vs-dialog v-model="modalConfirmRemoveWorksheet">
            <p class="modal-confirm-text">Confirmer la suppression de</p>

            <div class="modal-confirm-detail remove-item">
                <div class="modal-confirm-icon remove-item">
                    <i class="fas fa-trash"></i>
                </div>
                <p>
                    <span>
                        {{ removeWorksheetDetails.title }}
                    </span>
                </p>
            </div>
            <p class="alert">
                <i class="fas fa-exclamation-triangle"></i>
                Attention : cela supprimera également le
                <strong>
                    suivi et statistiques du patient pour cette fiche</strong
                >, action&nbsp;irrémédiable.
            </p>

            <div class="modal-confirm-buttons">
                <vs-button
                    class="secondary"
                    @click="modalConfirmRemoveWorksheet = false"
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validRemoveWorksheet"
                    :loading="btnLoadingValidRemoveWorksheet"
                    :class="{
                        disabled: btnLoadingValidRemoveWorksheet,
                    }"
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
        <vs-dialog v-model="modalConfirmRemovePatient">
            <p class="modal-confirm-text">Confirmer la suppression de</p>

            <div class="modal-confirm-detail remove-item">
                <div class="modal-confirm-icon remove-item">
                    <i class="fas fa-user-minus"></i>
                </div>
                <p>
                    <span>
                        {{ getUserName(removePatientDetails) }}
                    </span>
                </p>
            </div>

            <p class="modal-confirm-text">de votre liste.</p>

            <div class="modal-confirm-buttons">
                <vs-button
                    class="secondary"
                    @click="modalConfirmRemovePatient = false"
                >
                    Annuler
                </vs-button>
                <vs-button
                    @click="validRemovePatient"
                    :loading="btnLoadingValidRemovePatient"
                    :class="{
                        disabled: btnLoadingValidRemovePatient,
                    }"
                >
                    Confirmer
                </vs-button>
            </div>
        </vs-dialog>
    </section>
</template>

<script>
import f from "../../services/function";
import PatientAdd from "./MyPatients/PatientAdd.vue";
import moment from "moment";
import { PlusIcon } from "vue-feather-icons";

export default {
    props: {
        doctor: Object,
        doctorPatients: Array,
        allPatients: Array,
        loadingDoctorFirstsPatients: Boolean,
        loadingDoctorAllPatients: Boolean,
        loadingAllPatients: Boolean,
        csrfTokenAddPatient: String,
        csrfTokenRemovePatient: String,
        csrfTokenCreatePatient: String,
        prescriProcess: Boolean,
        btnLoadingPatientPrescriProcessRedirect: Number,
    },
    components: {
        PatientAdd,
        PlusIcon,
    },
    computed: {
        getDoctorPatients() {
            const docPatients = this.getPage(
                f.getSearch(this.doctorPatients, this.search, "doctor"),
                this.page,
                this.max
            );

            if (docPatients.length && !this.loadingDoctorFirstsPatients && !this.loadingDoctorAllPatients) {
                const debounceTimer = this.search ? 700 : 0;
                clearTimeout(this.debounceGetSessionsInfos);
                this.debounceGetSessionsInfos = setTimeout(() => {
                    docPatients.forEach(patient => {
                        if(patient.worksheets && patient.worksheets.length)
                        {
                            patient.worksheets.forEach((worksheet) => {
                                if (
                                (!('worksheetTotalProgression' in worksheet) || null === worksheet.worksheetTotalProgression) ||
                                (!('currentWorksheetSession' in worksheet) || null === worksheet.currentWorksheetSession) ||
                                (!('totalWorksheetSessions' in worksheet) || null === worksheet.totalWorksheetSessions) ||
                                (!('totalCompletedWorksheetSessions' in worksheet) || null === worksheet.totalCompletedWorksheetSessions)
                                ) {
                                    this.loadingsGetSessions.push(worksheet.id);
                                    this.axios
                                        .get(
                                            `/patient/${patient.id}/get/worksheet-progression/${worksheet.id}`
                                        )
                                        .then((response) => {
                                            worksheet.currentWorksheetSession =
                                                null ===
                                                response.data.currentWorksheetSession
                                                    ? false
                                                    : response.data
                                                        .currentWorksheetSession;

                                            worksheet.totalWorksheetSessions =
                                                response.data.countWorksheetSessions;

                                            worksheet.totalCompletedWorksheetSessions =
                                                response.data.countCompletedWorksheetSessions;

                                            worksheet.worksheetTotalProgression =
                                                this.calculWorksheetTotalProgression(
                                                    worksheet.totalCompletedWorksheetSessions,
                                                    worksheet.totalWorksheetSessions
                                                );

                                            this.loadingsGetSessions.splice(
                                                this.loadingsGetSessions.indexOf(
                                                    worksheet.id
                                                ),
                                                1
                                            );
                                    })
                                    .catch((error) => {
                                        const errorMess =
                                            "object" ===
                                            typeof error.response
                                                .data
                                                ? error.response
                                                    .data.detail
                                                : error.response
                                                    .data;

                                        console.error(errorMess);
                                    });
                                }
                            });
                        }
                    });
                }, debounceTimer); 
            }

            return docPatients;
        },
    },
    data() {
        return {
            search: "",
            page: 1,
            page_loading: 1,
            max: 6,
            modalConfirmRemoveWorksheet: false,
            removeWorksheetDetails: {},
            btnLoadingValidRemoveWorksheet: false,
            debounceGetSessionsInfos: null,
            loadingsGetSessions: [],
            modalAddPatient: false,
            modalConfirmRemovePatient: false,
            removePatientDetails: {},
            btnLoadingValidRemovePatient: false,
        };
    },
    methods: {
        prescriProcessPatientChoice(patient) {
            this.$emit("prescriProcessPatientChoice", patient);
        },
        prescriProcessPatientChoiceMobile(patient) {
            if(this.prescriProcess)
                this.$emit("prescriProcessPatientChoice", patient);
        },
        calculWorksheetTotalProgression(
            totalCompletedWorksheetSessions,
            totalWorksheetSessions
        ) {
            return Math.round((100/totalWorksheetSessions) * totalCompletedWorksheetSessions * 10) / 10;
        },
        prescriProcessMain() {
            if(this.prescriProcess)
                this.$emit("prescriProcessMainStop", true);
            else
            {
                window.scrollTo({ top: 0, behavior: "smooth" });
                this.$emit("prescriProcessMainStart", true);
            }
        },
        redirectToEditPage(worksheetId, patientId) {
            document.location.href = `/doctor/${this.doctor.id}/fiche/edition/${worksheetId}/${patientId}`;
        },
        redirectToWorksheetPage(worksheetId) {
            document.location.href = `/doctor/${this.doctor.id}/fiche/voir/${worksheetId}`;
        },
        redirectToPatientDashboard(patientId) {
            document.location.href = `/doctor/${this.doctor.id}/voir/patient/${patientId}`;
        },
        activeTab(num) {
            if(this.$parent.activeTab != num)
            {
                this.$parent.activeTab = num;

                if (window.innerWidth < 576) {
                    if (1 === num) {
                        this.$parent.myPrescriptionsContent =
                            !this.$parent.myPrescriptionsContent;
                    }
                    if (2 === num) {
                        this.$parent.myWorksheetTemplatesContent = true;
                    }
                }
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        removeWorksheet(patient) {
            this.removeWorksheetDetails = patient;

            return (this.modalConfirmRemoveWorksheet =
                !this.modalConfirmRemoveWorksheet);
        },
        validRemoveWorksheet() {
            this.btnLoadingValidRemoveWorksheet = true;

            this.axios
                .post(`/doctor/${this.doctor.id}/remove/worksheet`, {
                    _token: this.csrfTokenRemoveWorksheet,
                    worksheetId: this.removeWorksheetDetails.id,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Suppression de la prescription",
                        response.data
                    );
                    this.$parent.doctorWorksheets.splice(
                        this.$parent.doctorWorksheets.indexOf(
                            this.removeWorksheetDetails
                        ),
                        1
                    );
                    this.btnLoadingValidRemoveWorksheet = false;
                    this.modalConfirmRemoveWorksheet = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingValidRemoveWorksheet = false;
                    this.modalConfirmRemoveWorksheet = false;
                });
        },
        removePatient(patient) {
            this.removePatientDetails = patient;

            return (this.modalConfirmRemovePatient =
                !this.modalConfirmRemovePatient);
        },
        validRemovePatient() {
            this.btnLoadingValidRemovePatient = true;

            this.axios
                .post(`/doctor/${this.doctor.id}/remove/patient`, {
                    _token: this.csrfTokenRemovePatient,
                    patientId: this.removePatientDetails.id,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Suppression du patient",
                        response.data
                    );
                    this.doctorPatients.splice(
                        this.doctorPatients.indexOf(this.removePatientDetails),
                        1
                    );
                    this.$parent.doctor.patients.splice(
                        this.$parent.doctor.patients.indexOf(
                            this.removePatientDetails
                        ),
                        1
                    );
                    if (this.allPatients.length) {
                        const patient = this.allPatients.find(
                            (p) => p.id === this.removePatientDetails.id
                        );
                        patient.doctor = null;
                        patient.addRequestDoctor = null;
                    }
                    this.btnLoadingValidRemovePatient = false;
                    this.modalConfirmRemovePatient = false;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingValidRemovePatient = false;
                    this.modalConfirmRemovePatient = false;
                });
        },
        addPatient(patient) {
            this.doctorPatients.unshift(patient);
            this.$parent.doctor.patients.unshift(patient);
        },
        formatDate(datetime) {
            return moment(datetime).format("DD/MM/YYYY");
        },
        getUserName(user) {
            return f.getUserName(user);
        },
        getAge(birthdate) {
            return f.generateAgeFromDateOfBirth(birthdate);
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
    },
};
</script>

<style lang="scss">
@import "../../../scss/variables";
#my-worksheets.s-prescriptions .tabs > div.inactive.disabled
{
    opacity: 0.2;
    pointer-events: none;
    transition: 0.25s;
}

@media (max-width: 580px) {
    .vs-dialog-content {
        padding-top: 15px;
    }
}

@media (max-width: 799px) {
    body .container h1 {
        display: none;
    }
    body .container {
        padding-top: 2rem;
    }
    body.fuzzy-balls {
        background: none;
    }   
}

body .kiv-block .prescri-process-dialog.prescri-process-dialog-patient {
    top: -2.8rem;
}

body .kiv-block .prescri-process-dialog::after {
    @media (max-width: 799px) {
        border-top: none;
        border-bottom: 20px solid #222e54;
        bottom: auto !important;
        top: -0.9rem;
        z-index: -1;
    }
}

#my-worksheets.s-prescriptions {
    padding-top: 6.7rem;

    &.reduced {
        padding-top: 4.4rem;
    }

    .not-found {
        > p > span {
            @media (max-width: 550px) {
                max-width: 22rem;
            }
            @media (min-width: 551px) {
                max-width: 45rem;
            }
        }
    }

    .tabs {
        > div {
            &.inactive {
                box-shadow: inset 0.66rem -0.3rem 0.9rem rgba(148, 96, 77, 0.07);
                border-radius: 0 0 0 0.8rem;
                @media (max-width: 799px) {
                    background-color: #fafafa;
                }
            }
        }
    }

    .worksheet-list.wl-doctor > div:not(.not-found) {
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 1.9rem;

            // @media (min-width: 500px) {
            //     align-items: flex-start;
            //     padding-top: 1.5rem;
            //     padding-bottom: 0.9rem;
            // }

            .patient-details {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0;
                position: relative;

                // @media (max-width: 499px) {
                //     align-items: flex-start;
                // }

                // @media (min-width: 500px) {
                //     flex-direction: row;
                //     // margin-bottom: 1.8rem;
                // }

                > div {
                    display: flex;

                    &:first-child {
                        flex-grow: 1;
                        width: 100%;
                        
                        .avatar {
                            margin-right: 1.5rem;
                            min-width: 60px;
                            position: relative;
                            cursor: pointer;

                            .age {
                                position: absolute;
                                bottom: -0.6rem;
                                left: 50%;
                                transform: translateX(-50%);
                                background-color: $white;
                                padding: 0.2rem 0.5rem;
                                white-space: nowrap;
                                border-radius: 0.2rem;
                                color: $black;
                                padding-top: 0.3rem;
                                font-size: 0.8rem;
                                box-shadow: 0rem 0rem 0.8rem
                                    rgba(228, 221, 204, 0.9);
                            }
                        }

                        .user-name {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            width: 80%;

                            @media (min-width: 375px) {
                                width: 81.3%;
                            }
                            @media (min-width: 403px) {
                                width: 81.8%;
                            }
                            @media (min-width: 416px) {
                                width: 83.3%;
                            }
                            @media (min-width: 440px) {
                                width: 84.8%;
                            }
                            @media (min-width: 460px) {
                                width: 85.3%;
                            }
                            @media (min-width: 475px) {
                                width: 86%;
                            }
                            @media (min-width: 510px) {
                                width: 86.9%;
                            }
                            @media (min-width: 520px) {
                                width: 87.5%;
                            }
                            @media (min-width: 563px) {
                                width: 88.8%;
                            }
                            @media (min-width: 634px) {
                                width: 89.5%;
                            }
                            @media (min-width: 650px) {
                                width: 90%;
                            }
                            @media (min-width: 680px) {
                                width: 90.5%;
                            }
                            @media (min-width: 720px) {
                                width: 91%;
                            }
                            @media (min-width: 740px) {
                                width: 91.5%;
                            }
                            @media (min-width: 800px) {
                                width: 88%;
                            }

                            .name {
                                font-size: 1.6rem;
                                font-weight: 700;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                cursor: pointer;
                            }
                            .mail {
                                margin-top: 0.3rem;
                                font-size: 1.1rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                cursor: pointer;
                            }

                            .prescriptions {
                                position: relative;

                                @media (min-width: 800px) {
                                    width: calc(100% + 2.8rem);
                                }
                                @media (min-width: 820px) {
                                    width: calc(110% - 2.8rem);
                                }
                                @media (min-width: 1020px) {
                                    width: calc(110.4% - 2.8rem);
                                }
                                @media (min-width: 1020px) {
                                    width: calc(109% - 2.8rem);
                                }
                                @media (min-width: 1200px) {
                                    width: calc(109.4% - 2.8rem);
                                }
                                @media (min-width: 1300px) {
                                    width: calc(109.6% - 2.8rem);
                                }
                                @media (min-width: 1400px) {
                                    width: calc(109.8% - 2.8rem);
                                }
                                @media (min-width: 1450px) {
                                    width: calc(110% - 2.8rem);
                                }
                                @media (min-width: 1550px) {
                                    width: calc(110.2% - 2.8rem);
                                }
                                @media (min-width: 1650px) {
                                    width: calc(110.5% - 2.8rem);
                                }
                                @media (min-width: 1750px) {
                                    width: calc(110.7% - 2.8rem);
                                }
                                @media (min-width: 1850px) {
                                    width: calc(110.9% - 2.8rem);
                                }
                                @media (min-width: 1950px) {
                                    width: calc(111.1% - 2.8rem);
                                }

                                // @media (min-width: 870px) {
                                //     width: calc(120% - 2.8rem);
                                // }
                                // @media (min-width: 920px) {
                                //     width: calc(130% - 2.8rem);
                                // }
                                // @media (min-width: 990px) {
                                //     width: calc(104% - 2.8rem);
                                // }
                                // @media (min-width: 1050px) {
                                //     width: calc(105% - 2.8rem);
                                // }
                                // @media (min-width: 1100px) {
                                //     width: calc(100% - 2.8rem);
                                // }
                                // @media (min-width: 1120px) {
                                //     width: calc(101% - 2.8rem);
                                // }
                                // @media (min-width: 1175px) {
                                //     width: calc(101% - 2.8rem);
                                // }
                                // @media (min-width: 1235px) {
                                //     width: calc(101% - 2.8rem);
                                // }
                                // @media (min-width: 1285px) {
                                //     width: calc(101% - 2.8rem);
                                // }
                                // @media (min-width: 1370px) {
                                //     width: calc(101% - 2.8rem);
                                // }
                                // @media (min-width: 1400px) {
                                //     width: calc(101% - 2.8rem);
                                // }
                                // @media (min-width: 1440px) {
                                //     width: calc(101% - 2.8rem);
                                // }
                                // @media (min-width: 1580px) {
                                //     width: calc(101% - 2.8rem);
                                // }
                                // @media (min-width: 1620px) {
                                //     width: calc(101% - 2.8rem);
                                // }

                                &.multiples
                                {
                                    &::after
                                    {
                                        content: '';
                                        display: block;
                                        background: linear-gradient(
                                            90deg,
                                            rgba(250, 250, 252, 0) 0%,
                                            white 65%,
                                            white 100%
                                        );
                                        width: 3.7rem;
                                        height: 100%;
                                        position: absolute;
                                        top: 0;
                                        right: 0;
                                        z-index: 5;

                                        @media (min-width: 800px) {
                                            background: linear-gradient(
                                                90deg,
                                                rgba(250, 250, 252, 0) 0%,
                                                #faf8f4 65%,
                                                #faf8f4 100%
                                            );
                                        }
                                    }

                                    .worksheet-progress-line:last-child
                                    {
                                        margin-right: 2rem !important;
                                    }
                                }

                                h4 {
                                    font-size: 1.1rem;
                                    margin-top: 1rem;
                                    font-weight: 700;
                                    cursor: pointer;

                                    .count-patient-prescri {
                                        position: relative;
                                        top: -0.1rem;
                                        right: 0;
                                        width: 1.2rem;
                                        height: 1.2rem;
                                        min-width: 1.2rem;
                                        min-height: 1.2rem;
                                        max-height: 1.2rem;
                                        background-color: #d6cfbe;
                                        border-radius: 50%;
                                        font-size: 0.7rem;
                                        display: inline-flex;
                                        justify-content: center;
                                        align-items: center;
                                        color: white;
                                        padding: 0.1rem 0.2rem;
                                        padding-top: 0.15rem;
                                        padding-left: 0.15rem;
                                    }
                                }
                                .prescriptions-patient-list {
                                    display: flex;
                                    overflow-x: auto;
                                    padding: 0.35rem 0;
                                    position: relative;

                                    // @media (max-width: 1000px) {
                                        -ms-overflow-style: none; /* Pour Internet Explorer et Edge */
                                        scrollbar-width: none; /* Pour Firefox */
                                    // }
                                    @media (min-width: 800px) {
                                        min-height: 2.749rem;
                                        width: 100%;
                                        // max-width: calc(98% - 5.3rem);
                                    }
                                    // @media (min-width: 820px) {
                                    //     max-width: calc(99% - 5.3rem);
                                    // }
                                    // @media (min-width: 870px) {
                                    //     max-width: calc(100% - 5.3rem);
                                    // }

                                    // @media (min-width: 920px) {
                                    //     max-width: calc(101% - 5.3rem);
                                    // }
                                    // @media (min-width: 990px) {
                                    //     max-width: calc(102% - 5.3rem);
                                    // }
                                    // @media (min-width: 1050px) {
                                    //     max-width: calc(103% - 5.3rem);
                                    // }
                                    // @media (min-width: 1100px) {
                                    //     max-width: calc(95.2% - 5.3rem);
                                    // }
                                    // @media (min-width: 1120px) {
                                    //     max-width: calc(96.2% - 5.3rem);
                                    // }
                                    // @media (min-width: 1175px) {
                                    //     max-width: calc(97.2% - 5.3rem);
                                    // }
                                    // @media (min-width: 1235px) {
                                    //     max-width: calc(98.2% - 5.3rem);
                                    // }
                                    // @media (min-width: 1285px) {
                                    //     max-width: calc(99.2% - 5.3rem);
                                    // }
                                    // @media (min-width: 1370px) {
                                    //     max-width: calc(100.2% - 5.3rem);
                                    // }
                                    // @media (min-width: 1400px) {
                                    //     max-width: calc(101.2% - 5.3rem);
                                    // }
                                    // @media (min-width: 1440px) {
                                    //     max-width: calc(102.2% - 5.3rem);
                                    // }
                                    // @media (min-width: 1580px) {
                                    //     max-width: calc(103% - 5.3rem);
                                    // }
                                    // @media (min-width: 1620px) {
                                    //     max-width: calc(104% - 5.3rem);
                                    // }

                                    // @media (min-width: 1000px) {
                                    //     padding-bottom: 0.6rem;
                                    // }

                                    &::-webkit-scrollbar {
                                        // width: 4px;
                                        // height: 4px;
                                        // display: block;
                                        // background: #f6f3eb;
                                        // border-radius: 4px;

                                        // @media (max-width: 1000px) {
                                            display: none;
                                        // }
                                    }

                                    // &::-webkit-scrollbar-thumb {
                                    //     background: #ece5d5;
                                    //     border: 1px solid transparent;
                                    //     border-radius: 4px;
                                    // }

                                    .prescription {
                                        background-color: transparent;
                                        font-size: 0.8rem;
                                        cursor: initial;
                                        height: 100%;
                                        width: 100%;

                                        &.vs-button--size-mini.btn-chart.part-of-body {
                                            .vs-button__content {
                                                white-space: nowrap;
                                                padding: 0.4rem 1.3rem;

                                                img {
                                                    display: none;
                                                    position: relative;
                                                    margin-right: 0.5rem;

                                                    &.icon-pied {
                                                        top: -0.089rem;
                                                        height: 0.9rem;
                                                    }

                                                    &.icon-jambe {
                                                        top: -0.08rem;
                                                        height: 1.35rem;
                                                    }

                                                    &.icon-bras {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }

                                                    &.icon-main {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }

                                                    &.icon-epaule {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }

                                                    &.icon-dos {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }

                                                    &.icon-cervicales {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }

                                                    &.icon-lombaires {
                                                        top: -0.1rem;
                                                        height: 1.2rem;
                                                    }

                                                    &.icon-thoracique {
                                                        top: -0.1rem;
                                                        height: 1.1rem;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .worksheet-progress-line {
                        display: flex;
                        align-items: center;
                        margin-bottom: 0;
                        margin-right: 0.7rem;

                        .progressbar-base {
                            flex-grow: 1;
                            position: relative;
                            border-radius: 0.6rem;
                            height: 1.8rem;
                            background: #ece8e0;
                            min-width: 7.5rem;
                            max-width: 30rem;

                            @media (max-width: 799px) {
                                max-width: 20rem;
                            }
                            @media (min-width: 800px) {
                                background: #ffffff;
                            }

                            .worksheet-infos
                            {
                                height: 100%;
                                position: relative;
                                z-index: 3;
                                display: flex;  
                                align-items: center;
                                justify-content: center;
                                padding: 0 1.4rem;
                                width: 100%;
                                user-select: none;
                                font-size: 0.875rem;

                                span {
                                    display: block;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                            }

                            .progressbar-thumb
                            {
                                background: linear-gradient(270deg, #ffa387 9.29%, #f4b4a0 100%);
                                @media (min-width: 800px) {
                                   background: linear-gradient(270deg, #fee4bd 9.29%, #f7d7ad 100%);
                                }
                                border-radius: 0.6rem;
                                min-width: initial;
                                position: absolute;
                                left: 0;
                                top: 0;
                            }

                            &.loading-gray {
                                animation-duration: 1.2s;
                                animation-fill-mode: forwards;
                                animation-iteration-count: infinite;
                                animation-name: placeHolderShimmer;
                                animation-timing-function: linear;
                                background: linear-gradient(
                                    to right,
                                    #f2efe8 8%,
                                    #e1dcd0 38%,
                                    #f2efe8 54%
                                );
                                background-size: 1000px 640px;
                                position: relative;

                                @media (min-width: 800px) {
                                    background: linear-gradient(
                                        to right,
                                        #fff 8%,
                                        #f8f8f8  38%,
                                        #fff 54%
                                    );
                                    background-size: 1000px 640px;
                                }
                            }

                            .progressbar-label {
                                display: flex;
                                align-items: center;
                                margin-left: 0.8rem;
                                position: absolute;
                                top: 0;
                                right: 0;

                                .session-nb {
                                    font-weight: 700;
                                    color: #d3ccbc;
                                    margin: 0;
                                    font-size: 0.9rem;
                                    text-transform: uppercase;

                                    &.completed {
                                        color: $orange;
                                    }

                                    &:not(.completed):hover {
                                        color: $gray-dark;
                                    }
                                }

                                .loading-gray.session-nb {
                                    height: 1rem;
                                    width: 6.5rem;
                                    border-radius: 0.5rem;
                                    border: 2px solid #faf8f4;
                                }
                            }
                        }
                    }

                    .btn-prescription-action {
                        width: 100%;
                        margin-right: 0.8rem;
                        transform: none;

                        .vs-button--default:hover,  .vs-button--default:hover
                        {
                            transform: none;
                        }

                        @media (max-width: 799px) {
                            display: none;
                        }

                        @media (min-width: 800px) {
                            position: absolute;
                            top: -0.1rem;
                            right: -9.875rem;
                            width: initial;
                            z-index: 55;
                            padding: 0.3rem 1.5rem;
                            padding-left: 0;
                            background-color: #faf8f4;
                            
                            &.active-effect {
                                right: -11.575rem;
                            }

                            // &.active-effect {
                            //     .vs-button {
                            //         animation: mymove 2s infinite;
                            //     }
                            // }

                            &.selected {
                                right: -11.275rem;

                                i {
                                    font-size: 1.1rem!important;
                                    margin-right: 0.4rem;
                                    position: relative;
                                    top: -0.1rem;
                                }

                                .vs-button {
                                    background: #fff !important;
                                    color: $orange!important;
                                }
                            }

                            .vs-button {
                                background: $orange!important;
                                color: #fff!important;
                                margin-bottom: 0!important;
                                .vs-button__content {
                                    padding: 0.3rem 0.8rem !important;
                                    position: relative;
                                    top: 0.08rem;
                                }
                                span {
                                    display: flex;
                                    align-items: center;
                                }
                                svg {
                                    width: 1.3rem;
                                    height: 1.3rem;
                                    fill: #fff;
                                    margin-right: 0.2rem;
                                    position: relative;
                                    top: -0.1rem;
                                }
                                box-shadow:  -0.6rem 0.2rem 0.8rem 0rem rgba(231, 223, 205, 0.8), 0rem 0.2rem 0.8rem 0rem rgba(255, 104, 56, 0.15)!important;
                                &:hover {
                                    box-shadow: 0rem 0.4rem 1.4rem 0rem rgba(255, 104, 56, 0.43)!important;
                                }
                            }

                            &:not(:first-child)
                            {
                                right: -10.075rem;

                                &.active-effect {
                                    right: -11.775rem;
                                }

                                &.selected {
                                    right: -11.475rem;
                                }

                                .vs-button {
                                    // box-shadow:  -0.6rem 0.2rem 0.8rem 0rem #e7dfcd, 0rem 0.2rem 0.8rem 0rem rgba(255, 104, 56, 0.15);
                                }
                                // &::after
                                //     {
                                //         content: '';
                                //         display: block;
                                //         background: linear-gradient(82deg, rgba(250,250,252,0) 0%, rgba(250,248,244,1) 74%, rgba(250,248,244,1) 100%);
                                //         width: 0.9rem;
                                //         height: 100%;
                                //         position: absolute;
                                //         top: 0;
                                //         left: -0.9rem;
                                //         z-index: 5;
                                //     }
                            }
                        }

                        // @media (min-width: 500px) {
                        //     width: initial;
                        // }

                        // @media (min-width: 1100px) {
                        //     margin-right: 0;
                        // }

                        // @media (min-width: 1400px) {
                        //     margin-right: 0.8rem;
                        // }

                        .vs-button {
                            background: $white;
                            font-size: 1.4rem;
                            margin-top: 0.8rem;
                            margin-bottom: 1.8rem;
                            background: $white;
                            font-size: 1.4rem;
                            margin-bottom: 2.3rem;
                            margin-top: 1.2rem;
                            color: $orange;
                            border-radius: 0.5rem;
                            box-shadow: 0rem 0.2rem 0.8rem 0rem
                                rgba(255, 104, 56, 0.15);

                            &:hover {
                                box-shadow: 0rem 0.4rem 1.4rem 0rem
                                    rgba(255, 104, 56, 0.43);
                            }

                            // @media (min-width: 800px) {
                            //     margin-top: 0;
                            //     margin-bottom: 0;
                            // }

                            // @media (min-width: 950px) {
                            //     flex-direction: row;
                            //     margin-bottom: 1.1rem;
                            // }

                            i {
                                font-size: 1.5rem;
                            }

                            .vs-button__content {
                                padding: 0.7rem 1.5rem;
                                padding-top: 0.8rem;
                            }
                        }
                    }
                }

                .remove-user {
                    position: absolute;
                    top: -0.7rem;
                    padding: 0.18rem;
                    right: -0.8rem;
                    width: 1.7rem;
                    height: 1.7rem;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #e4e4e4;
                    // color: #d6cfbe;
                    cursor: pointer;
                    transition: all 0.2s;
                    background: transparent;

                    @media (min-width: 800px) {
                        border: 1px solid #d6cfbe;
                    }

                    i {
                        font-size: 0.7rem;
                        position: relative;
                        left: 0.05rem;
                    }

                    svg {
                        fill: #e4e4e4;
                        @media (min-width: 800px) {
                            fill: #d6cfbe
                        }
                        &:hover {
                            fill: #c5c0bc;
                            @media (min-width: 800px) {
                                fill: $gray-dark
                            }
                        }
                    }

                    &:hover {
                        border: 1px solid #c5c0bc;
                        // color: $gray-dark;
                        @media (min-width: 800px) {
                            border: 1px solid $gray-dark;
                        }
                    }
                }
            }

            // .worksheet-header {

            //         .btn-action {
            //             &.commentaries {
            //                 background: $white !important;
            //                 color: $gray-middle;
            //                 position: relative;
            //                 overflow: visible;
            //                 width: 3rem;
            //                 height: 3rem;
            //                 min-width: 3rem;
            //                 min-height: 3rem;
            //                 max-height: 3rem;
            //                 margin-left: 1rem;
            //                 box-shadow: 0rem 0.2rem 0.9rem 0rem
            //                     rgba(231, 223, 205, 0.6);
            //                 z-index: 111;

            //                 i {
            //                     font-size: 1.6rem;
            //                     top: 0.18rem;
            //                     left: 0.45rem;
            //                 }

            //                 .count-commentaries {
            //                     position: absolute;
            //                     top: -0.3rem;
            //                     right: -0.5rem;
            //                     width: 1.2rem;
            //                     height: 1.2rem;
            //                     min-width: 1.2rem;
            //                     min-height: 1.2rem;
            //                     max-height: 1.2rem;
            //                     background-color: $orange;
            //                     border-radius: 50%;
            //                     font-size: 0.7rem;
            //                     display: flex;
            //                     justify-content: center;
            //                     align-items: center;
            //                     color: white;
            //                     padding: 0.1rem 0.2rem;
            //                     padding-top: 0.15rem;
            //                 }
            //             }
            //         }
            //     }
            // }

            .avert-not-patient-doctor {
                position: absolute;
                z-index: 11;
                top: -0.9rem;
                left: -0.9rem;
                right: 0;
                bottom: 0;
                width: 100%;
                border-radius: 0.7rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: $black;
                font-size: 1.3rem;
                text-align: center;
                padding: 0 14%;
                line-height: 1.5;
                text-shadow: 0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 0.3rem #fff,
                    0 0 0.3rem #fff, 0 0 0.3rem #fff;
                white-space: initial;
                margin-top: 0;
                display: flex;
                flex-direction: column;
                // background-color: #faf8f48a;
                backdrop-filter: blur(0.3rem);

                i {
                    margin-right: 0rem;
                    margin-bottom: 0.25rem;
                    color: $black;
                    font-size: 1.2rem;
                    position: relative;
                    top: 0rem;
                }

                p {
                    margin: 0;

                    span.user-name {
                        font-weight: 700;
                    }
                }

                // @media (min-width: 768px) {
                //     margin-top: 1rem;
                // }

                // @media (min-width: 1070px) {
                //     white-space: nowrap;
                //     flex-direction: row;
                //     i {
                //         margin-right: 0.6rem;
                //         margin-bottom: 0rem;
                //     }
                // }

                .vs-button.btn-rmv-prescri {
                    font-size: 1.1rem;
                    border-radius: 0.5rem;
                    background: $white;
                    color: #c1b79d;
                    border: 0.1rem solid #e7dfcd;
                    margin-top: 0.5rem;
                    margin-left: 0;

                    // @media (min-width: 1070px) {
                    //     margin-top: 0;
                    //     margin-left: 1.5rem;
                    // }

                    &:hover {
                        background: $white;
                        color: #bbb196;
                        border: 0.1rem solid #bbb196;
                        box-shadow: none;
                        transform: none;
                    }

                    i {
                        font-size: 0.9rem;
                        position: relative;
                        top: 0.09rem;
                        margin-left: 0;
                        margin-right: 0.5rem;
                        color: #c3b8a2;
                        @media (min-width: 1070px) {
                            top: -0.01rem;
                        }
                    }

                    .vs-button__content {
                        padding: 0.5rem 0.9rem;
                    }
                }
            }
        }
    }
}
</style>
