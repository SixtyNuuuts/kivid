<template>
    <section
        id="my-worksheets"
        class="kiv-block s-prescriptions"
    >
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
            <div>
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
                                <svg v-if="!prescriProcess" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 96 96" style="enable-background:new 0 0 96 96;" xml:space="preserve">
                                <polygon points="66.3,93.6 48.8,95 54.5,85 59.6,84 66.1,91.1 73.3,83.9 78.8,85.4 83.7,94.9 "/>
                                <path d="M24,4c-5,0-9,4-9,9v62c0,5,4,9,9,9l24-0.3c-0.4-2.4-0.4-2.4-1-5.8L24,78c-1.7,0-3-1.3-3-3V13c0-1.7,1.3-3,3-3h23v17
                                    c0,5,4,9,9,9h17l-0.3,5.8c5.6-1.2,0,0,6.3-1.4V33c0-0.8-0.3-1.6-0.9-2.1l-26-26C51.6,4.3,50.8,4,50,4H24z M53,14.2L68.8,30H56
                                    c-1.7,0-3-1.3-3-3V14.2z"/>
                                <path d="M89,56.1l-7.7-3.5l-1-8.4l-8.2,1.7l-5.7-6.2l-5.7,6.2l-8.2-1.7l-1,8.4l-7.7,3.5l4.2,7.4L43.8,71l7.7,3.5l1,8.4l8.2-1.7
                                    l5.7,6.2l5.7-6.2l8.2,1.7l1-8.4L89,71l-4.2-7.4L89,56.1z M79,65.3c-0.5,0.5-1.2,0.8-1.9,0.8h-8.2v8.2c0,1.4-1.1,2.5-2.5,2.5
                                    s-2.5-1.1-2.5-2.5v-8.2h-8.2c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h8.2v-8.2c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V61h8.2
                                    c1.3,0,2.5,1.1,2.5,2.4C79.7,64.1,79.5,64.8,79,65.3z"/>
                                </svg>
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
                                <div class="user">
                                    <vs-avatar
                                        @click="
                                            redirectToPatientDashboard(
                                                patient.id
                                            )
                                        "
                                        class="avatar"
                                        circle
                                        size="55"
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
                                            class="name"
                                        >
                                            <span
                                                v-if="
                                                    patient.firstname ||
                                                    patient.lastname
                                                "
                                                @click="
                                                    redirectToPatientDashboard(
                                                        patient.id
                                                    )
                                                "
                                            >
                                                {{ patient.firstname }}
                                                {{ patient.lastname }}
                                            </span>
                                            <span v-else
                                                @click="
                                                    redirectToPatientDashboard(
                                                        patient.id
                                                    )
                                                "
                                            >
                                                {{ patient.email }}
                                            </span>
                                        </div>
                                        <div
                                            v-if="patient.addRequestDoctor"
                                            class="mail"
                                        >
                                            <span
                                                @click="
                                                    redirectToPatientDashboard(
                                                        patient.id
                                                    )
                                                "
                                            >{{ patient.email }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="prescriptions"
                                    :class="{multiples:'worksheets' in patient && patient.worksheets.length && patient.worksheets.length>1, 'no-prescription':'worksheets' in patient && !patient.worksheets.length}"
                                >
                                    <h4>
                                        <span 
                                            @click="
                                                redirectToPatientDashboard(
                                                    patient.id,
                                                    'my-worksheets'
                                                )
                                            "
                                        v-if="'worksheets' in patient && patient.worksheets.length">
                                            <span>{{ patient.worksheets.length }}</span>
                                            prescription<span
                                                v-if="
                                                    patient.worksheets
                                                        .length > 1
                                                "
                                                >s</span>
                                            :
                                        </span>
                                        <span 
                                            @click="
                                                redirectToPatientDashboard(
                                                    patient.id,
                                                    'my-worksheets'
                                                )
                                            "
                                        v-else>aucune prescription</span>
                                    </h4>
                                    <div class="patient-prescriptions-list-container">
                                        <ul class="patient-prescriptions-list"
                                            :class="{'not-empty':!('worksheets' in patient && patient.worksheets.length)}"
                                            @click="
                                                redirectToPatientDashboard(
                                                    patient.id,
                                                    'my-worksheets'
                                                )
                                            "
                                        >
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
                                        </ul>
                                        <div
                                            class="patient-prescription-btn"
                                        >
                                            <vs-button
                                                @click="
                                                    prescriProcessPatientChoice(patient)
                                                "
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px"><path d="M 12.5 4 C 10.019 4 8 6.019 8 8.5 L 8 39.5 C 8 41.981 10.019 44 12.5 44 L 25.640625 44 C 24.785625 43.111 24.055516 42.103 23.478516 41 L 12.5 41 C 11.673 41 11 40.327 11 39.5 L 11 8.5 C 11 7.673 11.673 7 12.5 7 L 24 7 L 24 15.5 C 24 17.981 26.019 20 28.5 20 L 37 20 L 37 22.169922 C 38.045 22.331922 39.053 22.606906 40 23.003906 L 40 18.5 C 40 18.0855 39.831922 17.710828 39.560547 17.439453 L 26.560547 4.4394531 C 26.289172 4.1680781 25.9145 4 25.5 4 L 12.5 4 z M 27 9.1210938 L 34.878906 17 L 28.5 17 C 27.673 17 27 16.327 27 15.5 L 27 9.1210938 z M 35 24 C 28.925 24 24 28.925 24 35 C 24 41.075 28.925 46 35 46 C 41.075 46 46 41.075 46 35 C 46 28.925 41.075 24 35 24 z M 35 27 C 35.552 27 36 27.448 36 28 L 36 34 L 42 34 C 42.552 34 43 34.448 43 35 C 43 35.552 42.552 36 42 36 L 36 36 L 36 42 C 36 42.552 35.552 43 35 43 C 34.448 43 34 42.552 34 42 L 34 36 L 28 36 C 27.448 36 27 35.552 27 35 C 27 34.448 27.448 34 28 34 L 34 34 L 34 28 C 34 27.448 34.448 27 35 27 z"></path></svg>
                                                Prescrire
                                            </vs-button>
                                        </div>
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
                        <div class="loading loading-block" style="height: 13rem;">
                            <div class="patient-details">
                                <div class="user">
                                    <div
                                        class="vs-avatar-content avatar vs-avatar-content--circle"
                                        style="width: 60px; height: 60px"
                                    >
                                        <div class="vs-avatar loading">
                                        </div>
                                    </div>
                                    <div class="user-name">
                                        <div class="name loading  w-25">
                                            <span> xxxxxx </span>
                                        </div>
                                        <div class="mail loading  w-35">
                                            xxxxxx 
                                        </div>
                                    </div>
                                </div>
                                <div class="prescriptions">
                                    <h4 class="loading w-45" style="max-height:0.5rem;">
                                        <span
                                            ><span>X</span>
                                            prescription<!----></span
                                        >
                                    </h4>
                                    <div class="patient-prescriptions-list-container" style="max-height:2.5rem;">
                                        <ul
                                            class="patient-prescriptions-list"
                                        >
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="remove-user loading">
                                </button>
                            </div>
                        </div>
                                                <div class="loading loading-block" style="height: 13rem;">
                            <div class="patient-details">
                                <div class="user">
                                    <div
                                        class="vs-avatar-content avatar vs-avatar-content--circle"
                                        style="width: 60px; height: 60px"
                                    >
                                        <div class="vs-avatar loading">
                                        </div>
                                    </div>
                                    <div class="user-name">
                                        <div class="name loading  w-25">
                                            <span> xxxxxx </span>
                                        </div>
                                        <div class="mail loading  w-35">
                                            xxxxxx 
                                        </div>
                                    </div>
                                </div>
                                <div class="prescriptions">
                                    <h4 class="loading w-45" style="max-height:0.5rem;">
                                        <span
                                            ><span>X</span>
                                            prescription<!----></span
                                        >
                                    </h4>
                                    <div class="patient-prescriptions-list-container" style="max-height:2.5rem;">
                                        <ul
                                            class="patient-prescriptions-list"
                                        >
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="remove-user loading">
                                </button>
                            </div>
                        </div>
                        <div class="loading loading-block" style="height: 13rem;">
                            <div class="patient-details">
                                <div class="user">
                                    <div
                                        class="vs-avatar-content avatar vs-avatar-content--circle"
                                        style="width: 60px; height: 60px"
                                    >
                                        <div class="vs-avatar loading">
                                        </div>
                                    </div>
                                    <div class="user-name">
                                        <div class="name loading  w-25">
                                            <span> xxxxxx </span>
                                        </div>
                                        <div class="mail loading  w-35">
                                            xxxxxx 
                                        </div>
                                    </div>
                                </div>
                                <div class="prescriptions">
                                    <h4 class="loading w-45" style="max-height:0.5rem;">
                                        <span
                                            ><span>X</span>
                                            prescription<!----></span
                                        >
                                    </h4>
                                    <div class="patient-prescriptions-list-container" style="max-height:2.5rem;">
                                        <ul
                                            class="patient-prescriptions-list"
                                        >
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="remove-user loading">
                                </button>
                            </div>
                        </div>
                        <div class="loading loading-block" style="height: 13rem;">
                            <div class="patient-details">
                                <div class="user">
                                    <div
                                        class="vs-avatar-content avatar vs-avatar-content--circle"
                                        style="width: 60px; height: 60px"
                                    >
                                        <div class="vs-avatar loading">
                                        </div>
                                    </div>
                                    <div class="user-name">
                                        <div class="name loading  w-25">
                                            <span> xxxxxx </span>
                                        </div>
                                        <div class="mail loading  w-35">
                                            xxxxxx 
                                        </div>
                                    </div>
                                </div>
                                <div class="prescriptions">
                                    <h4 class="loading w-45" style="max-height:0.5rem;">
                                        <span
                                            ><span>X</span>
                                            prescription<!----></span
                                        >
                                    </h4>
                                    <div class="patient-prescriptions-list-container" style="max-height:2.5rem;">
                                        <ul
                                            class="patient-prescriptions-list"
                                        >
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="remove-user loading">
                                </button>
                            </div>
                        </div>
                        <div class="loading loading-block" style="height: 13rem;">
                            <div class="patient-details">
                                <div class="user">
                                    <div
                                        class="vs-avatar-content avatar vs-avatar-content--circle"
                                        style="width: 60px; height: 60px"
                                    >
                                        <div class="vs-avatar loading">
                                        </div>
                                    </div>
                                    <div class="user-name">
                                        <div class="name loading  w-25">
                                            <span> xxxxxx </span>
                                        </div>
                                        <div class="mail loading  w-35">
                                            xxxxxx 
                                        </div>
                                    </div>
                                </div>
                                <div class="prescriptions">
                                    <h4 class="loading w-45" style="max-height:0.5rem;">
                                        <span
                                            ><span>X</span>
                                            prescription<!----></span
                                        >
                                    </h4>
                                    <div class="patient-prescriptions-list-container" style="max-height:2.5rem;">
                                        <ul
                                            class="patient-prescriptions-list"
                                        >
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="remove-user loading">
                                </button>
                            </div>
                        </div>
                        <div class="loading loading-block" style="height: 13rem;">
                            <div class="patient-details">
                                <div class="user">
                                    <div
                                        class="vs-avatar-content avatar vs-avatar-content--circle"
                                        style="width: 60px; height: 60px"
                                    >
                                        <div class="vs-avatar loading">
                                        </div>
                                    </div>
                                    <div class="user-name">
                                        <div class="name loading  w-25">
                                            <span> xxxxxx </span>
                                        </div>
                                        <div class="mail loading  w-35">
                                            xxxxxx 
                                        </div>
                                    </div>
                                </div>
                                <div class="prescriptions">
                                    <h4 class="loading w-45" style="max-height:0.5rem;">
                                        <span
                                            ><span>X</span>
                                            prescription<!----></span
                                        >
                                    </h4>
                                    <div class="patient-prescriptions-list-container" style="max-height:2.5rem;">
                                        <ul
                                            class="patient-prescriptions-list"
                                        >
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li
                                                class="worksheet-progress-line"
                                            >
                                                <div
                                                    class="progressbar-base"
                                                >
                                                    <div
                                                        class="worksheet-infos loading  w-35"
                                                    >
                                                        <span>XXXXXXXXXXXXXXXX</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="remove-user loading">
                                </button>
                            </div>
                        </div>

                    </div>  
                </div>
                <div
                    class="pagination"
                    v-if="
                        !loadingDoctorFirstsPatients &&
                        !loadingDoctorAllPatients && getDoctorPatients.length
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
                <div class="pagination" 
                    v-if="
                        (loadingDoctorFirstsPatients ||
                        loadingDoctorAllPatients) && getDoctorPatients.length
                    "
                >
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
        redirectToPatientDashboard(patientId, scrollTarget=null) {
            document.location.href = `/doctor/${this.doctor.id}/voir/patient/${patientId}${scrollTarget?`?st=${scrollTarget}`:''}`;
        },
        activeTab(num) {
            if(this.$parent.activeTab != num)
                this.$parent.activeTab = num;
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
            // this.$parent.doctor.patients.unshift(patient);
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

.loading-block
{
    .loading:not(.vs-avatar)
    {
        border-radius: 0.6rem;
        color: transparent;

        &.remove-user
        {
            border: none !important;
        }
    }
}

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
            padding: 1.7rem 1.8rem;
            padding-top: 1.5rem;

            @media (max-width: 500px) {
                padding-top: 1.1rem !important;
                padding: 1.3rem !important;
                padding-bottom: 1.2rem !important;            
            }

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

                .avatar {
                    margin-right: 1.5rem;
                    flex: none;
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

                .user
                {
                    display: flex;
                    width: 100%;
                }

                .user-name {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;
                    overflow: hidden;

                    .name {
                        font-size: 1.6rem;
                        font-weight: 700;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        cursor: pointer;

                        @media (max-width: 500px) {
                            font-size: 1.5rem;
                        }   
                    }
                    .mail {
                        margin-top: 0.3rem;
                        font-size: 1.1rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        cursor: pointer;
                    }
                }

                .prescriptions {
                    position: relative;
                    width: 100%;

                    h4 {
                        font-size: 1.1rem;
                        font-weight: 700;
                        cursor: pointer;

                        margin-top: 1rem;

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

                    &.no-prescription
                    {
                        .patient-prescriptions-list-container
                        {
                            margin-bottom: 0.4rem;
                            margin-top: 0.2rem;
                            @media (max-width: 500px) {
                                margin-top: -1.97rem;
                            }
                        }
                    }

                    .patient-prescriptions-list-container 
                    {
                        display: flex;
                        @media (max-width: 500px) {
                            justify-content: space-between;
                        }

                        .patient-prescriptions-list {
                            display: flex;
                            overflow-x: auto;
                            padding: 0.35rem 0;
                            position: relative;
                            cursor: pointer;

                            -ms-overflow-style: none; /* Pour Internet Explorer et Edge */
                            scrollbar-width: none; /* Pour Firefox */
                            &::-webkit-scrollbar {
                                display: none;
                            }

                            .prescription {
                                background-color: transparent;
                                font-size: 0.8rem;
                                cursor: initial;
                                height: 100%;
                                width: 100%;
                            }

                            &:not(.not-empty)
                            {
                                margin-right: 0.3rem;
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

                .patient-prescription-btn {
                    position: relative;
                    top: -0.15rem;

                    &::after
                    {
                        content: '';
                        display: block;
                        background: linear-gradient(
                            90deg,
                            rgba(250, 250, 252, 0) 0%,
                            white 70%,
                            white 100%,
                        );
                        width: 1.9rem;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: -2.2rem;
                        z-index: 3;

                        @media (min-width: 800px) {
                            background: linear-gradient(
                                90deg,
                                rgba(250, 250, 252, 0) 0%,
                                #faf8f4 70%,
                                #faf8f4 100%,
                            );
                        }
                    }

                    .worksheet-progress-line:last-child
                    {
                        margin-right: 1.3rem !important;
                    }
                
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
                            padding: 0.1rem 0.6rem;
                            padding-left: 0.5rem;
                            padding-top: 0.35rem;
                            display: flex;
                            align-items: center;
                        }

                        svg
                        {
                            width: 1.45rem;
                            height: 1.45rem;
                            fill: #ff6838;
                            margin-right: 0.2rem;
                            position: relative;
                            top: -0.15rem;                            
                        }

                        &:disabled
                        {
                            svg
                            {
                                fill: #fff;
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

                    @media (max-width: 500px) {
                        top: -0.5rem;
                        right: -0.5rem;                    
                    }   

                    &:not(.loading)
                    {
                        background: transparent;
                    }

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
