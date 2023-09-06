<template>
    <section
        id="my-worksheets"
        class="kiv-block s-worksheet-templates"
    >
        <div class="tabs">
            <div class="inactive" :class="{disabled:this.$parent.prescriProcess&&this.$parent.prescriProcessWorksheet}" @click="activeTab(1)">
                <h2><span>Mes Patients</span></h2>
            </div>
            <div @click="activeTab(2)">
                <h2><span>Mes fiches</span></h2>
            </div>
        </div>
        <transition name="fade">
            <div
                v-if="prescriProcess && getWorksheetTemplates.length"
                class="prescri-process-dialog prescri-process-dialog-select-worksheet offset-left"
            >   
                <span class="step-num"
                    ><i class="fas fa-folder-plus"></i><span class="only-mobile">Prescription - </span>Etape
                    {{ !$parent.prescriProcessPatientSelected ? 1 : 2 }}
                </span>
                <p>
                    Veuillez sélectionner une ou&nbsp;plusieurs&nbsp;fiche(s). 
                    <br>Vous pourrez la/les personnaliser à&nbsp;l'étape&nbsp;suivante.
                </p>
            </div>
        </transition>
        <transition name="fade">
            <div
                v-if="prescriProcess"
                class="prescri-process-dialog pp-create-worksheet prescri-process-dialog-create-worksheet"
            >
                <span class="step-num"
                    ><i class="fas fa-folder-plus"></i>Etape
                    {{ !$parent.prescriProcessPatientSelected ? 1 : 2 }}
                </span>
                <p>
                    <span v-if="getWorksheetTemplates.length">et / ou sélectionnez</span
                    ><span v-else>Sélectionnez</span> le nombre de prescriptions que vous souhaitez créer&nbsp;de&nbsp;zéro 
                    <span v-if="$parent.prescriProcessPatientSelected"> pour 
                        <strong>
                            <span
                                v-if="
                                    $parent.prescriProcessPatientSelected.firstname ||
                                    $parent.prescriProcessPatientSelected.lastname
                                "
                            >
                                {{ $parent.prescriProcessPatientSelected.firstname }}
                                {{ $parent.prescriProcessPatientSelected.lastname }}
                            </span>
                            <span v-else>
                                {{ $parent.prescriProcessPatientSelected.email }}
                            </span>
                        </strong>
                    </span>
                </p>
            </div>
        </transition>
        <transition name="fade">
            <div
                v-if="prescriProcess"
                class="prescri-process-buttons"
            >   
                <button
                    @click="prescriProcessWorksheetChoice(prescriProcessWorksheetsChoice)"
                    class="prescri-edit"
                    :class="{'disabled-custom':!prescriProcessWorksheetsChoice.length}"
                >
                    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 96 96" style="enable-background:new 0 0 96 96;" xml:space="preserve">
                    <g>
                        <polygon points="73.2,83.7 66.1,90.8 59.6,83.8 54.5,84.8 48.8,94.8 66.2,93.3 83.7,94.7 78.8,85.1 	"/>
                        <path d="M24,77.8c-1.7,0-3-1.3-3-3v-62c0-1.7,1.3-3,3-3h23v17c0,5,4,9,9,9h17l-0.3,5.8c5.6-1.2,0,0,6.3-1.4v-7.4
                            c0-0.8-0.3-1.6-0.9-2.1l-26-26c-0.5-0.5-1.3-0.9-2.1-0.9H24c-5,0-9,4-9,9v62c0,5,4,9,9,9l24-0.3c-0.4-2.4-0.4-2.4-1-5.8L24,77.8z
                            M53,14l15.8,15.8H56c-1.7,0-3-1.3-3-3V14z"/>
                    </g>
                    <g>
                        <path d="M66.7,56.8c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5c3.6,0,6.5-2.9,6.5-6.5S70.3,56.8,66.7,56.8z"/>
                        <path d="M84.3,63.3l4.2-7.3L81,52.6l-1-8.3L71.9,46l-5.6-6.1L60.7,46l-8-1.7l-1,8.3L44.1,56l4.2,7.4l-4.2,7.3l7.5,3.4l1,8.3
                            l8.1-1.7l5.6,6.1l5.6-6.1l8.1,1.7l1-8.3l7.5-3.4L84.3,63.3z M79.8,65.9L76,66.6c-0.1,0.4-0.3,0.8-0.5,1.1l2.3,3.1l-3.6,3.6L71,72.2
                            c-0.4,0.2-0.7,0.3-1.1,0.5l-0.7,3.8h-4c-0.6,0-1.2-0.5-1.3-1.1l-0.5-2.7c-0.4-0.1-0.8-0.3-1.1-0.5l-3.1,2.2l-3.6-3.6l2.2-3.1
                            c-0.2-0.4-0.3-0.8-0.5-1.1l-3.8-0.7v-5.1l3.8-0.6c0.1-0.4,0.3-0.8,0.5-1.1l-2.2-3.1l3.6-3.6l3.1,2.2c0.4-0.2,0.7-0.3,1.1-0.5
                            l0.6-3.8h5.1l0.7,3.8c0.4,0.1,0.8,0.3,1.1,0.5l3.1-2.2l3.6,3.6L75.6,59c0.2,0.4,0.3,0.7,0.5,1.1l3.8,0.6V65.9z"/>
                    </g>
                    </svg>
                    <span>
                        <span class="m-r big">Paramétrer</span>
                        <span class="medium">puis Prescrire</span>
                    </span>
                </button>
                <button
                    @click="prescriProcessWorksheetChoice(prescriProcessWorksheetsChoice,'direct')"
                    class="prescri-direct"
                    :class="{'disabled-custom':!prescriProcessWorksheetsChoice.length||prescriProcessWorksheetsChoice.filter(w=>w==null).length||btnLoadingWorksheetPrescriProcessRedirect}"                  
                >
                    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 96 96" style="enable-background:new 0 0 96 96;" xml:space="preserve">
                    <g>
                        <polygon points="73.2,83.7 66.1,90.8 59.6,83.8 54.5,84.8 48.8,94.8 66.2,93.3 83.7,94.7 78.8,85.1 	"/>
                        <path d="M24,77.8c-1.7,0-3-1.3-3-3v-62c0-1.7,1.3-3,3-3h23v17c0,5,4,9,9,9h17l-0.3,5.8c5.6-1.2,0,0,6.3-1.4v-7.4
                            c0-0.8-0.3-1.6-0.9-2.1l-26-26c-0.5-0.5-1.3-0.9-2.1-0.9H24c-5,0-9,4-9,9v62c0,5,4,9,9,9l24-0.3c-0.4-2.4-0.4-2.4-1-5.8L24,77.8z
                            M53,14l15.8,15.8H56c-1.7,0-3-1.3-3-3V14z"/>
                    </g>
                    <path d="M84.3,63.3l4.2-7.3L81,52.6l-1-8.3L71.9,46l-5.6-6.1L60.6,46l-8-1.7l-1,8.3L44,56l4.2,7.4L44,70.7l7.5,3.4l1,8.3l8.1-1.7
                        l5.6,6.1l5.6-6.1l8.1,1.7l1-8.3l7.5-3.4L84.3,63.3z M63.5,71.8L55.6,64l2.5-2.5l5.4,5.4L74.4,56l2.5,2.5L63.5,71.8z"/>
                    </svg>
                    <span>
                        <span class="big">Prescrire</span>
                        directement
                    </span>
                </button>
            </div>
        </transition>
        <transition name="height">
            <div>
                <div class="primary-actions p-a-w" :class="{'without-tag':!getWorksheetTemplates.length}">
                    <div class="search loading-s-c search-worksheet">
                        <vs-input
                            v-model="search"
                            @keyup="page = 1"
                            label-placeholder="Filtrer par nom de fiche et/ou créateur"
                        />
                        <div v-if="loadingDoctorAllWorksheets" class="loading-s">
                            <div class="ldio">
                                <div></div><div></div><div></div><div></div><div></div>
                            </div>
                        </div>
                        <!-- <div class="view-all-templates">
                            <span
                                >Voir les fiches <br />
                                des autres prat.</span
                            >
                            <vs-switch
                                @click="page = 1"
                                v-model="viewAllTemplates"
                            />
                        </div> -->
                    </div>
                    <div class="kiv-select tags" v-if="getWorksheetTemplates.length">
                        <vs-select
                            v-if="getTagsFromAll.length"
                            filter
                            multiple
                            placeholder="Mots-Clés"
                            v-model="selectedTags"
                            @change="page = 1"
                            @input="selectTag()"
                        >
                            <vs-option
                                v-for="(tag, i) in getTagsFromAll"
                                :key="i"
                                :label="tag"
                                :value="tag"
                            >
                                {{ tag }}
                            </vs-option>
                            <template slot="notData">
                                Aucun mot-clé
                            </template>
                        </vs-select>
                        <div v-else class="loading select-tags"></div>
                    </div>  
                    <div class="btn-primary-action add">
                        <transition name="fade" mode="out-in">
                            <vs-tooltip v-if="!$parent.prescriProcess">
                                <vs-button
                                    @click="redirectToCreatePage(0)"
                                    class="btn-action add"
                                    circle
                                    floating
                                >
                                    <plus-icon
                                        size="3x"
                                        class="custom-class"
                                    ></plus-icon>
                                </vs-button>
                                <template #tooltip> Créer une fiche </template>
                            </vs-tooltip>
                        </transition>
                        <transition name="fade" mode="out-in">
                            <div
                                v-if="$parent.prescriProcess"
                                class="btn-prescription-action"
                                :class="{
                                    active: prescriProcess,
                                    'active-effect': prescriProcess&&!$parent.prescriProcessWorksheetSelected,
                                    selected:
                                        $parent.prescriProcessWorksheetSelected &&
                                        $parent.prescriProcessWorksheetSelected
                                            .id === null,
                                }"
                            >
                                <!-- <vs-button
                                    @click="
                                        prescriProcessWorksheetsChoice.push(null)
                                    "
                                    class="w-100 only-desktop"
                                >
                                    <span
                                        v-if="
                                            ($parent.prescriProcess &&
                                                !$parent.prescriProcessWorksheetSelected) ||
                                            ($parent.prescriProcessWorksheetSelected &&
                                                $parent
                                                    .prescriProcessWorksheetSelected
                                                    .id !== null)
                                        "
                                        ><i class="fas fa-folder-plus"></i>Créer
                                        une fiche</span
                                    >
                                    <span
                                        v-if="
                                            $parent.prescriProcessWorksheetSelected &&
                                            $parent
                                                .prescriProcessWorksheetSelected
                                                .id === null
                                        "
                                        ><i class="fas fa-check-circle"></i
                                        >Sélectionné</span
                                    >
                                </vs-button> -->
                                <vs-tooltip>
                                    <vs-button
                                        @click="
                                            prescriProcessWorksheetsChoice.filter(w=>w==null).length < 10 ? prescriProcessWorksheetsChoice.push(null) : false
                                        "
                                        class="btn-action add prescri-process-create"
                                        circle
                                        floating
                                    >
                                        <plus-icon
                                            size="3x"
                                            class="custom-class"
                                        ></plus-icon>
                                    </vs-button>
                                    <template #tooltip> Créer une fiche </template>
                                </vs-tooltip>
                                <div v-if="prescriProcessWorksheetsChoice.filter(w=>w==null).length" class="new-fiche-controls">
                                    <span>{{ prescriProcessWorksheetsChoice.filter(w=>w==null).length }}</span>
                                    <vs-button
                                        @click="
                                            prescriProcessWorksheetsChoice.splice(prescriProcessWorksheetsChoice.indexOf(null), 1)
                                        "
                                        circle
                                        floating
                                    >
                                    -
                                    </vs-button>
                                </div>
                            </div>
                        </transition>
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
                <div class="worksheet-list wl-doctor" :class="{empty:!getWorksheetTemplates.length}">
                    <transition name="fade">
                        <div
                            v-if="
                                !loadingDoctorFirstsWorksheets &&
                                getWorksheetTemplates.length
                            "
                        >
                            <div
                                v-for="(worksheet, i) in getWorksheetTemplates"
                                :key="i"
                                class="worksheet-container"
                            >
                                <div 
                                    class="worksheet"
                                    :class="{'prescri-process-choice':$parent.prescriProcess}"
                                >
                                    <div class="toggle-zone" @click="toggleCurrentOpenWorksheet(worksheet.id)"></div>
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title">
                                            {{ worksheet.title }}
                                        </h3>
                                        <TagPartOfBody
                                            :partOfBody="worksheet.partOfBody"
                                        />
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short" v-if="currentOpenWorksheet != worksheet.id">
                                            <div
                                                class="
                                                    worksheet-exercises-count
                                                "
                                            >
                                                <i
                                                    class="kiv-exercise icon-7"
                                                ></i>
                                                <span class="space">{{
                                                    worksheet.exercises.length
                                                }}</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i
                                                    class="kiv-calendar icon-10"
                                                ></i>
                                                <span class="space"
                                                    >{{
                                                        worksheet.perDay
                                                    }}</span
                                                >
                                                / 
                                                <span
                                                    >{{
                                                        worksheet.perWeek
                                                    }}</span
                                                >
                                            </div>
                                            <div class="worksheet-period">
                                                <i
                                                    class="kiv-clock icon-11"
                                                ></i>
                                                <span class="space"
                                                    >{{
                                                        worksheet.duration
                                                    }}
                                                    </span>
                                            </div>
                                        </div>
                                        <div class="worksheet-details" v-else>
                                            <div
                                                class="
                                                    worksheet-exercises-count
                                                "
                                            >
                                                <i
                                                    class="kiv-exercise icon-7"
                                                ></i>
                                                <span class="space">{{
                                                    worksheet.exercises.length
                                                }}</span>
                                                <span class="space">exercice</span><span
                                                    v-if="
                                                        worksheet.exercises
                                                            .length > 1
                                                    "
                                                    >s</span
                                                >
                                            </div>
                                            <div class="worksheet-timing">
                                                <i
                                                    class="kiv-calendar icon-10"
                                                ></i>
                                                <span class="space"
                                                    >{{
                                                        worksheet.perDay
                                                    }}x</span
                                                >
                                                <span class="space">/ jour -</span>
                                                
                                                <span class="space"
                                                    >{{
                                                        worksheet.perWeek
                                                    }}x</span
                                                >
                                                <span class="space">/ sem.</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i
                                                    class="kiv-clock icon-11"
                                                ></i>
                                                <span class="space">Pér. :</span>
                                                <span class="space"
                                                    >{{
                                                        worksheet.duration
                                                    }}
                                                    sem.</span>
                                            </div>
                                        </div>
                                        <transition name="height3">
                                            <div v-if="currentOpenWorksheet == worksheet.id" class="worksheet-details-footer">
                                                <div class="worksheet-exercises-container">
                                                    <div class="worksheet-exercises">
                                                        <div 
                                                            v-for="(exercise, i) in worksheet.exercises"
                                                            :key="i"
                                                            class="worksheet-exercise"
                                                        >
                                                            <div
                                                                class="worksheet-exercise-thumbnail"
                                                            >
                                                                <img :src="exercise.video.thumbnailUrl">
                                                            </div>
                                                            <div class="worksheet-exercise-details">
                                                                <div class="series-reps">
                                                                    <i class="kiv-reps icon-19"></i>
                                                                    <span>{{ exercise.numberOfSeries }}</span>
                                                                        x <span class="no-space">{{ exercise.numberOfRepetitions }}</span>
                                                                </div>
                                                                <div v-if="exercise.option" class="option">
                                                                    - Option : <span>{{ exercise.option }}</span>
                                                                </div>
                                                                <div v-if="exercise.hold" class="hold">
                                                                    - Tenir : <span>{{ exercise.hold }}s</span>
                                                                </div>
                                                                <div v-if="exercise.tempo" class="tempo">
                                                                    - Tempo : <span>{{ exercise.tempo }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="worksheet-exercise-other">
                                                        <div class="tags">
                                                            <div
                                                                class="tag-chip"
                                                                v-for="(
                                                                    tag, i
                                                                ) in worksheet.exercisesTags"
                                                                :key="i"
                                                            >
                                                                {{ tag }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="buttons-container" :class="{disabled:$parent.prescriProcess}">
                                                    <!-- <vs-tooltip
                                                        v-if="
                                                            worksheet.doctor.id ===
                                                            doctor.id
                                                        "
                                                    >
                                                        <vs-button
                                                            @click="
                                                                redirectToWorksheetPage(
                                                                    worksheet.id
                                                                )
                                                            "
                                                            class="btn-action"
                                                            circle
                                                        >
                                                            <i class="fas fa-eye"></i>
                                                        </vs-button>
                                                        <template #tooltip>
                                                            Voir
                                                        </template>
                                                    </vs-tooltip> -->
                                                    <vs-tooltip
                                                        v-if="
                                                            worksheet.doctor.id ===
                                                            doctor.id
                                                        "
                                                    >
                                                        <vs-button
                                                            @click="
                                                                redirectToEditPage(
                                                                    worksheet.id
                                                                )
                                                            "
                                                            class="btn-action"
                                                            circle
                                                        >
                                                            <i class="fas fa-pen"></i>
                                                        </vs-button>
                                                        <template #tooltip>
                                                            Modifier
                                                        </template>
                                                    </vs-tooltip>
                                                    <vs-tooltip>
                                                        <vs-button
                                                            :loading="
                                                                btnLoadingCopyWorksheet ===
                                                                worksheet.id
                                                            "
                                                            @click="
                                                                redirectToCreatePage(
                                                                    worksheet.id
                                                                )
                                                            "
                                                            circle
                                                            class="btn-copy"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M 14 10.5 A 3.5 3.5 0 0 0 10.5 14 L 10.5 39.560547 A 3.5 3.5 0 0 0 14 43.060547 L 17.439453 43.060547 A 1.5 1.5 0 0 0 17.439453 40.060547 L 14 40.060547 A 0.5 0.5 0 0 1 13.5 39.560547 L 13.5 14 A 0.51 0.51 0 0 1 14 13.5 L 39.560547 13.5 A 0.5 0.5 0 0 1 40.060547 14 L 40.060547 17.439453 A 1.5 1.5 0 0 0 43.060547 17.439453 L 43.060547 14 A 3.5 3.5 0 0 0 39.560547 10.5 L 14 10.5 z M 24.439453 20.939453 C 22.500453 20.939453 20.939453 22.500453 20.939453 24.439453 L 20.939453 50 C 20.939453 51.939 22.500453 53.5 24.439453 53.5 L 50 53.5 C 51.939 53.5 53.5 51.939 53.5 50 L 53.5 24.439453 C 53.5 22.500453 51.939 20.939453 50 20.939453 L 24.439453 20.939453 z"/></svg>
                                                        </vs-button>
                                                        <template #tooltip>
                                                            Copier
                                                        </template>
                                                    </vs-tooltip>
                                                    <vs-tooltip
                                                        v-if="
                                                            worksheet.doctor.id ===
                                                            doctor.id
                                                        "
                                                    >
                                                        <vs-button
                                                            @click="
                                                                removeWorksheet(
                                                                    worksheet
                                                                )
                                                            "
                                                            class="btn-action"
                                                            circle
                                                        >
                                                            <i class="fas fa-trash"></i>
                                                        </vs-button>
                                                        <template #tooltip>
                                                            Supprimer
                                                        </template>
                                                    </vs-tooltip>
                                                    <vs-tooltip
                                                        v-if="doctor.giveAccessPublicWorksheetGeneration"
                                                    >
                                                        <vs-button
                                                            v-if="!worksheet.accessPublicSlug"
                                                            :loading="btnLoadingCreatePublicAccess===worksheet.id"
                                                            @click="createPublicAccess(worksheet)"
                                                            circle
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
                                                        </vs-button>
                                                        <template #tooltip>
                                                            Créer un accès public
                                                        </template>
                                                    </vs-tooltip>
                                                    <div v-if="worksheet.accessPublicSlug" class="public-worksheet-url">
                                                        <span class="label">accès public</span>
                                                        <span class="link" @click="copyToClipboard(`${publicWorksheetBaseUrl}/${worksheet.accessPublicSlug}`, worksheet.id)">
                                                                {{ `${publicWorksheetBaseUrl}/${worksheet.accessPublicSlug}` }}
                                                                <transition name="fade">
                                                                    <span v-if="popUpCopyActive===worksheet.id" class="popUp-copy-active">Lien copié dans le presse-papier</span>
                                                                </transition>
                                                            </span>
                                                            <vs-button
                                                                :loading="btnLoadingCreatePublicAccess===worksheet.id"
                                                                @click="deletePublicAccess(worksheet)"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path></svg>
                                                            </vs-button>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                </div>
                                <transition name="fade">
                                    <div v-if="$parent.prescriProcess" class="worksheet-choice-container">
                                        <vs-checkbox
                                            :val="worksheet.id"
                                            v-model="prescriProcessWorksheetsChoice"
                                            :class="{
                                                'active-effect': prescriProcess&&!$parent.prescriProcessWorksheetSelected,
                                            }"
                                        >
                                        </vs-checkbox>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <div
                            class="not-found"
                            :class="{'prescri-process':prescriProcess}"
                            v-if="
                                !loadingDoctorFirstsWorksheets &&
                                !getWorksheetTemplates.length &&
                                !search &&
                                !selectedTags.length
                            "
                        >
                            <p>
                                <i class="fas fa-folder-minus" v-if="!prescriProcess"></i>
                                <span v-if="!prescriProcess">Vous n'avez pas de fiche</span>
                                <span v-else>
                                    Pour créer une prescription, Vous&nbsp;devez&nbsp;avoir préalablement créé des&nbsp;modèles&nbsp;de&nbsp;fiche,<br>
                                    mais vous pouvez également en&nbsp;créer&nbsp;de&nbsp;zéro en utilisant le&nbsp;bouton&nbsp;"+"&nbsp;ci-dessus,<br>
                                    puis valider avec le bouton "Paramétrer&nbsp;puis&nbsp;Prescrire".
                                </span>
                            </p>
                        </div>
                        <div
                            class="not-found"
                            v-if="
                                !loadingDoctorAllWorksheets &&
                                !loadingDoctorFirstsWorksheets &&
                                !getWorksheetTemplates.length &&
                                (search || selectedTags.length)
                            "
                        >
                            <p>
                                <i class="fas fa-folder-minus"></i>
                                <span
                                    >Aucune fiche n'a été trouvée avec
                                    <span v-if="search"
                                        >"<strong>{{ search }}</strong
                                        >"</span
                                    ><span
                                        v-if="search && selectedTags.length"
                                        class="et"
                                        >et</span
                                    ><span
                                        v-if="selectedTags.length"
                                        class="tags"
                                    >
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
                        <div
                            class="not-found"
                            v-if="
                                loadingDoctorAllWorksheets &&
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
                        <div v-if="loadingDoctorFirstsWorksheets">
                            <div class="worksheet-container loading-block">
                                <div class="worksheet">
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title loading w-35">
                                            Xxxxxxxxxxxxx xx x xxxxxxxxxx x
                                        </h3>
                                        <div class="vs-tooltip-content kiv-help" >
                                            <button
                                                class="vs-button tag part-of-body"
                                            >
                                                <div class="vs-button__content loading">
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short">
                                            <div class="worksheet-exercises-count">
                                                <i class="kiv-exercise icon-7"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i class="kiv-calendar icon-10"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i class="kiv-clock icon-11"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="worksheet-container loading-block">
                                <div class="worksheet">
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title loading w-35">
                                            Xxxxxxxxxxxxx xx x xxxxxxxxxx x
                                        </h3>
                                        <div class="vs-tooltip-content kiv-help" >
                                            <button
                                                class="vs-button tag part-of-body"
                                            >
                                                <div class="vs-button__content loading">
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short">
                                            <div class="worksheet-exercises-count">
                                                <i class="kiv-exercise icon-7"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i class="kiv-calendar icon-10"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i class="kiv-clock icon-11"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="worksheet-container loading-block">
                                <div class="worksheet">
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title loading w-35">
                                            Xxxxxxxxxxxxx xx x xxxxxxxxxx x
                                        </h3>
                                        <div class="vs-tooltip-content kiv-help" >
                                            <button
                                                class="vs-button tag part-of-body"
                                            >
                                                <div class="vs-button__content loading">
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short">
                                            <div class="worksheet-exercises-count">
                                                <i class="kiv-exercise icon-7"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i class="kiv-calendar icon-10"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i class="kiv-clock icon-11"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="worksheet-container loading-block">
                                <div class="worksheet">
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title loading w-35">
                                            Xxxxxxxxxxxxx xx x xxxxxxxxxx x
                                        </h3>
                                        <div class="vs-tooltip-content kiv-help" >
                                            <button
                                                class="vs-button tag part-of-body"
                                            >
                                                <div class="vs-button__content loading">
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short">
                                            <div class="worksheet-exercises-count">
                                                <i class="kiv-exercise icon-7"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i class="kiv-calendar icon-10"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i class="kiv-clock icon-11"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="worksheet-container loading-block">
                                <div class="worksheet">
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title loading w-35">
                                            Xxxxxxxxxxxxx xx x xxxxxxxxxx x
                                        </h3>
                                        <div class="vs-tooltip-content kiv-help" >
                                            <button
                                                class="vs-button tag part-of-body"
                                            >
                                                <div class="vs-button__content loading">
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short">
                                            <div class="worksheet-exercises-count">
                                                <i class="kiv-exercise icon-7"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i class="kiv-calendar icon-10"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i class="kiv-clock icon-11"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="worksheet-container loading-block">
                                <div class="worksheet">
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title loading w-35">
                                            Xxxxxxxxxxxxx xx x xxxxxxxxxx x
                                        </h3>
                                        <div class="vs-tooltip-content kiv-help" >
                                            <button
                                                class="vs-button tag part-of-body"
                                            >
                                                <div class="vs-button__content loading">
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short">
                                            <div class="worksheet-exercises-count">
                                                <i class="kiv-exercise icon-7"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i class="kiv-calendar icon-10"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i class="kiv-clock icon-11"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="worksheet-container loading-block">
                                <div class="worksheet">
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title loading w-35">
                                            Xxxxxxxxxxxxx xx x xxxxxxxxxx x
                                        </h3>
                                        <div class="vs-tooltip-content kiv-help" >
                                            <button
                                                class="vs-button tag part-of-body"
                                            >
                                                <div class="vs-button__content loading">
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short">
                                            <div class="worksheet-exercises-count">
                                                <i class="kiv-exercise icon-7"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i class="kiv-calendar icon-10"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i class="kiv-clock icon-11"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="worksheet-container loading-block">
                                <div class="worksheet">
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title loading w-35">
                                            Xxxxxxxxxxxxx xx x xxxxxxxxxx x
                                        </h3>
                                        <div class="vs-tooltip-content kiv-help" >
                                            <button
                                                class="vs-button tag part-of-body"
                                            >
                                                <div class="vs-button__content loading">
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short">
                                            <div class="worksheet-exercises-count">
                                                <i class="kiv-exercise icon-7"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i class="kiv-calendar icon-10"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i class="kiv-clock icon-11"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="worksheet-container loading-block">
                                <div class="worksheet">
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title loading w-35">
                                            Xxxxxxxxxxxxx xx x xxxxxxxxxx x
                                        </h3>
                                        <div class="vs-tooltip-content kiv-help" >
                                            <button
                                                class="vs-button tag part-of-body"
                                            >
                                                <div class="vs-button__content loading">
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short">
                                            <div class="worksheet-exercises-count">
                                                <i class="kiv-exercise icon-7"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i class="kiv-calendar icon-10"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i class="kiv-clock icon-11"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="worksheet-container loading-block">
                                <div class="worksheet">
                                    <div class="worksheet-header">
                                        <h3 class="worksheet-title loading w-35">
                                            Xxxxxxxxxxxxx xx x xxxxxxxxxx x
                                        </h3>
                                        <div class="vs-tooltip-content kiv-help" >
                                            <button
                                                class="vs-button tag part-of-body"
                                            >
                                                <div class="vs-button__content loading">
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="worksheet-content-wt">
                                        <div class="worksheet-details worksheet-details-short">
                                            <div class="worksheet-exercises-count">
                                                <i class="kiv-exercise icon-7"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-timing">
                                                <i class="kiv-calendar icon-10"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                            <div class="worksheet-period">
                                                <i class="kiv-clock icon-11"></i>
                                                <span class="space loading">xxx</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </transition>
                </div>
                <div 
                    class="pagination"
                    :class="{'prescri-process':prescriProcess}"
                    v-if="
                        !loadingDoctorFirstsWorksheets &&
                        !loadingDoctorAllWorksheets && getWorksheetTemplates.length
                    "
                    >
                    <vs-pagination 
                        v-model="page" 
                        :length="
                            getLength(
                                getSearch(worksheetTemplates, search),
                                max
                            )
                        "
                    >
                        <vs-select v-model="page">
                            <vs-option
                                v-for="numberPage in getLength(getSearch(worksheetTemplates, search),max)"
                                :key="numberPage"
                                :label="numberPage"
                                :value="numberPage">
                                {{ numberPage }}
                            </vs-option>
                        </vs-select>
                    </vs-pagination>
                </div>
                <div 
                    class="pagination" 
                    v-if="
                        (loadingDoctorFirstsWorksheets ||
                        loadingDoctorAllWorksheets) && getWorksheetTemplates.length
                    "
                    :class="{'prescri-process':prescriProcess}"
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
    </section>
</template>

<script>
import f from "../../services/function";
import TagPartOfBody from "../../components/TagPartOfBody.vue";
import moment from "moment";
import { PlusIcon } from "vue-feather-icons";

export default {
    props: {
        doctor: Object,
        worksheetTemplates: Array,
        loadingDoctorFirstsWorksheets: Boolean,
        loadingDoctorAllWorksheets: Boolean,
        tagsFromExercises: Array,
        prescriProcess: Boolean,
        btnLoadingWorksheetPrescriProcessRedirect: Boolean,
        csrfTokenRemoveWorksheet: String,
    },
    components: {
        TagPartOfBody,
        PlusIcon,
    },
    data() {
        return {
            selectedTags: [],
            search: "",
            page: 1,
            max: 10,
            viewAllTemplates: false,
            modalConfirmRemoveWorksheet: false,
            removeWorksheetDetails: {},
            btnLoadingValidRemoveWorksheet: false,
            btnLoadingAddWorksheet: false,
            btnLoadingCopyWorksheet: null,
            btnLoadingCreatePublicAccess: null,
            popUpCopyActive: null,
            currentOpenWorksheet: null,
            prescriProcessWorksheetsChoice: []
        };
    },
    computed: {
        getWorksheetTemplates() {
            return this.getPage(
                this.getSearch(this.worksheetTemplates, this.search),
                this.page,
                this.max
            );
        },
        getTagsFromAll() {
            return f.getTagsFromAll(this.tagsFromExercises);
        },
        publicWorksheetBaseUrl()
        {
            return `${window.location.protocol}//${window.location.host}/fiche`;
        }
    },
    watch: {
        worksheetTemplates() {
            this.page = 1;
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
        prescriProcessWorksheetChoice(worksheetsIds,prescriptionType=null) {
            if(this.$parent.prescriProcessPatientSelected&&(!prescriptionType||(prescriptionType==='direct'&&!worksheetsIds.filter(w=>w==null).length)))
                this.$emit("prescriProcessWorksheetChoice", {worksheetsIds,prescriptionType});
            // else
            //     this.activeTab(1); 
        },
        redirectToEditPage(worksheetId) {
            document.location.href = `/doctor/${this.doctor.id}/fiche/edition/${worksheetId}`;
        },
        redirectToCreatePage(worksheetId) {
            if (worksheetId) {
                this.btnLoadingCopyWorksheet = worksheetId;
            } else {
                this.btnLoadingAddWorksheet = true;
            }

            document.location.href = `/doctor/${this.doctor.id}/fiche/creation/${worksheetId}`;
        },
        toggleCurrentOpenWorksheet(worksheetId) {
            this.currentOpenWorksheet = this.currentOpenWorksheet != worksheetId ? worksheetId : null;
        },
        activeTab(num) {
            if(this.$parent.activeTab != num)
                this.$parent.activeTab = num;
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        removeWorksheet(worksheet) {
            this.removeWorksheetDetails = worksheet;

            return (this.modalConfirmRemoveWorksheet =
                !this.modalConfirmRemoveWorksheet);
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
        validRemoveWorksheet() {
            this.btnLoadingValidRemoveWorksheet = true;

            this.axios
                .post(`/doctor/${this.doctor.id}/remove/worksheet`, {
                    _token: this.csrfTokenRemoveWorksheet,
                    worksheetId: this.removeWorksheetDetails.id,
                })
                .then((response) => {
                    f.openSuccessNotification(
                        "Suppression de la fiche",
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
                    console.log(error);
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingValidRemoveWorksheet = false;
                    this.modalConfirmRemoveWorksheet = false;
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
            let worksheetTemplatesFiltered = f.getSearch(data, filter);

            if (this.selectedTags.length) {
                worksheetTemplatesFiltered = worksheetTemplatesFiltered.filter(
                    (w) => {
                        const results = [];

                        if (w.exercisesTags) {
                            this.selectedTags.forEach((tag) => {
                                let result = false;

                                w.exercisesTags.forEach((wtag) => {
                                    if (wtag === tag) {
                                        result = true;
                                    }
                                });

                                results.push(result);
                            });
                        }

                        return !results.includes(false);
                    }
                );
            }

            if (!this.viewAllTemplates) {
                worksheetTemplatesFiltered = worksheetTemplatesFiltered.filter(
                    (w) => w.doctor && w.doctor.id === this.doctor.id
                );
            }

            return worksheetTemplatesFiltered;
        },
        createPublicAccess(worksheet)
        {
            this.btnLoadingCreatePublicAccess = worksheet.id;
            
            this.axios
                .post(`/doctor/${this.doctor.id}/create/public-access/${worksheet.id}`, {
                    worksheetTitleSlug: this.slugify(worksheet.title).substring(0, 255),
                })
                .then((response) => {
                    this.btnLoadingCreatePublicAccess = null;
                    worksheet.accessPublicSlug = response.data;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;
                    this.btnLoadingCreatePublicAccess = null;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingValidRemoveWorksheet = false;
                    this.modalConfirmRemoveWorksheet = false;
                });

        },
        deletePublicAccess(worksheet)
        {
            this.btnLoadingCreatePublicAccess = worksheet.id;

            this.axios
                .post(`/doctor/${this.doctor.id}/delete/public-access/${worksheet.id}`, {})
                .then((response) => {
                    this.btnLoadingCreatePublicAccess = null;
                    worksheet.accessPublicSlug = response.data;
                })
                .catch((error) => {
                    const errorMess =
                        "object" === typeof error.response.data
                            ? error.response.data.detail
                            : error.response.data;
                    this.btnLoadingCreatePublicAccess = null;

                    f.openErrorNotification("Erreur", errorMess);
                    this.btnLoadingValidRemoveWorksheet = false;
                    this.modalConfirmRemoveWorksheet = false;
                });

        },
        slugify(string)
		{
			return string
				.toString()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g,'')
				.toLowerCase()
				.trim()
				.replace(/[^a-z0-9 ]/g,'')
				.replace(/\s+/g,'-');
		},
        copyToClipboard(url, worksheetId)
        {
            if ('clipboard' in navigator)
            {
                navigator.clipboard.writeText(url)
                .then(()=> {
                    this.popUpCopyActive = worksheetId;    
                    setTimeout(() => {
                        this.popUpCopyActive = null;
                    }, 1500);
                })
                .catch((e)=>console.log(e));
            }
        }
    },
    beforeDestroy() {
        this.modalConfirmRemoveWorksheet = false;
        this.removeWorksheetDetails = {};
        this.btnLoadingValidRemoveWorksheet = false;
        this.btnLoadingAddWorksheet = false;
        this.btnLoadingCopyWorksheet = false;
        this.btnLoadingCreatePublicAccess = null;
        this.popUpCopyActive = null;
        this.currentOpenWorksheet = null;
        this.prescriProcessWorksheetsChoice = [];
    },
};
</script>

<style lang="scss">
.loading-block.worksheet-container
{
    max-height: 56px;

    .worksheet .worksheet-content-wt .worksheet-details i 
    {
        color: #f4eeec   !important;
    }

    .vs-button
    {
        width: 3rem !important;
        height: 3rem !important;
        border-radius: 50% !important;
        position: absolute !important;
        top: 0.3rem !important;
        right: 0.5rem !important;
    }

    .worksheet .worksheet-header .worksheet-title {
        width: 34% !important;
        }   
    .worksheet{
        background: #fdfdfd  !important;
        width: 100% !important;
    }

    .loading:not(.vs-button__content)
    {
        border-radius: 0.6rem;
        color: transparent;
    }
}

@import "../../../scss/variables";
body .kiv-block .prescri-process-dialog.prescri-process-dialog-select-worksheet {
    top: -2.8rem;
    width: 33rem;
}

body .kiv-block .prescri-process-dialog.prescri-process-dialog-create-worksheet {
    top: -7.8rem;
    right: -4.9rem;
}

body .btn-create-action .vs-button 
{
        border-radius: 50% !important;
}

#my-worksheets.s-worksheet-templates {
    padding-top: 6.7rem;

    &.reduced {
        padding-top: 4.4rem;
    }
    
    .not-found {
        > p > span {
            @media (max-width: 710px) {
                max-width: 35rem;
            }
            @media (min-width: 711px) {
                max-width: 67rem;
            }
        }

        &.prescri-process 
        {
            i {
                @media (max-width: 710px) {
                    margin-left: 2rem;
                    margin-right: -1.3rem;
                }
            }
        }
    }

    .tabs {
        > div {
            &.inactive {
                box-shadow: inset -0.74rem -0.3rem 0.9rem
                    rgba(148, 96, 77, 0.07);
                border-radius: 0 0 0.8rem 0;
                @media (max-width: 799px) {
                    background-color: #fafafa;
                }
            }
        }
    }

    .primary-actions {
        &.p-a-w
        {
            margin-bottom: 1.4rem;

            &.without-tag
            {
             margin-bottom: 0.5rem;
            }
        }

        .btn-prescription-action .vs-button .vs-button__content,
        body .btn-create-action .vs-button .vs-button__content {
            padding: 1.1rem 1.5rem;
            padding-top: 1.2rem;
            letter-spacing: 0.02rem;
        }

        .btn-primary-action {
            margin: 0;
        }

        > :first-child {
            margin-right: 0;

            // @media (min-width: 576px) {
                // width: 50%;
                // margin-right: 1.4rem;
            // }
        }

        > :last-child {

            @media (min-width: 800px) {
                display: flex;
                align-items: center;
                width: 100%;
                margin-bottom: 0.3rem;
                margin-top: 1rem;

                margin-bottom: 0;
                width: 50%;
                margin-top: 0;
            }
        }
    }

    .kiv-select.tags {
        margin-right: 1.4rem;
        width: 100%;
        overflow: visible;

        @media (max-width: 799px) {
            order: 3;
        }

        .loading.select-tags {
            border-radius: 0.5rem;
            width: 100%;
            height: 4.3rem;
            background: #f9f9f9;
        }
    }

    .search {
        display: flex;
        align-items: center;

        .loading-s {
            right: 2.2rem;
        }

        .vs-input-parent {
            margin-right: 1.4rem;
            width: 100%;
        }
    }

    .pagination.prescri-process {
        @media (min-width: 1100px) {
            justify-content: flex-start;
        }
    }

    .view-all-templates {
        width: 5.9rem;

        > span {
            font-size: 0.9rem;
            line-height: 1rem;
            display: block;
            margin-bottom: 0.4rem;
            white-space: nowrap;
        }
    }
    
    .buttons-container
    {
        display: flex;
        /* background-color: #f2efe8; */
        width: 100%;
        justify-content: center;
        /* box-shadow: inset 0rem 0.4rem 1rem -0.5rem #c1b79d; */
        position: relative;
        top: 0.9rem;
        padding: 0.5rem;
        padding-bottom: 1.2rem;
        padding-top: 0.2rem;
        
        > .vs-tooltip-content .vs-button
        {
            margin: 0 0.7rem !important;
            border-radius: 50% !important;
            transform: none !important;
            // background: transparent !important;
            box-shadow: 0rem 0.3rem 0.8rem 0rem #ded6bfba;
            // border: 0.0625rem solid #cbd5f4;
            background: #fb8b68 !important;
            border: 0.0625rem solid #fb8b68;
            width: 2.5rem !important;
            height: 2.5rem !important;
            min-width: 2.5rem !important;
            min-height: 2.5rem !important;
            max-height: 2.5rem !important;
            transition: 0.25s;

            .vs-button__content
            {
                white-space: nowrap !important;
                padding: 0.5rem !important;
                border-radius: 50% !important;

                i {
                    margin-right: 0;
                    font-size: 0.955rem;
                    color: #fff;
                    transition: 0.25s;
                }

                svg {
                    fill:  #fff;
                    transition: 0.25s;
                }
            }

            &.btn-copy
            {
                .vs-button__content
                {
                    padding: 0.38rem !important;
                }
            }

            &:hover 
            {
                background: #fb8b68 !important;
                border: 0.0625rem solid #fb8b68;

                i {
                    color: #fff;
                }

                svg {
                    fill: #fff;
                }

            }
        }

        &.disabled {
            display: none;
        }
    }

    .worksheet-choice-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.8rem;
        background-color: #f2efe8;
        border-radius: 0 1rem 1rem 0;
        position: relative;
        left: -0.375rem;
        z-index: 1;
        height: calc(100% + 0.28rem);

        @media (min-width: 799px) {
            border-radius: 0 0.5rem 0.5rem 0;
            left: 0.025rem;
            height: 100%;
        }

        .vs-checkbox-content
        {
            margin-left: 0.1rem;

            &.active-effect {
                .vs-checkbox-con {
                    animation: mymove 2s infinite;
                }
            }

            .vs-checkbox-mask::before {
                border: 1px solid #ffdbcf !important;
                
                &:hover 
                {
                    border: 1px solid #ffdbcf !important;
                }
            }
        }
    }

    .btn-prescription-action,
    .btn-create-action
    {
        white-space: nowrap;

        .vs-button {
            background: $white;
            font-size: 1.4rem;
            color: $orange;
            border-radius: 0.5rem;
            // box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(255, 104, 56, 0.15);
            box-shadow: 0rem 0.4rem 1.4rem 0rem rgba(255, 104, 56, 0.5);

            &:hover {
                box-shadow: 0rem 0.4rem 1.4rem 0rem rgba(255, 104, 56, 0.43);
            }

            i {
                font-size: 1.5rem;
            }

            .vs-button__content {
                padding: 0.7rem 1.5rem;
                padding-top: 0.8rem;
            }
        }
    }

    .public-worksheet-url
    {             
        // border: 0.0625rem solid $orange;
        height: 2.3rem;
        border-radius: 0.5rem;
        padding: 1.5rem 0.6rem;
        padding-top: 0.6rem;
        padding-bottom: 0.5rem;
        position: relative;
        top: 0.2rem;
        display: flex;
        align-items: center;
        max-width: 58%;
        margin-left: 0.7rem;
        box-shadow: 0rem 0.3rem 0.8rem 0rem #ded6bfba;
        border: 0.0625rem solid #fb8b68;
        background-color: #ffffff;

        .label 
        {
            position: absolute;
            top: -0.55rem;
            left: 1.0625rem;
            text-transform: uppercase;
            color: #222e54;
            background-color: #ffffff;
            padding: 0.0625rem 0.25rem;
            padding-top: 0.25rem;
            font-size: 0.6rem;
            border-radius: 0.3rem;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            font-weight: bold;
            letter-spacing: 0.0437rem;
        }

        .link
        {
            display: flex;
            align-items: center;
            color: #222e54;
            margin-right: 0.4rem;
            font-size: 0.95rem;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
            position: relative;
            white-space: nowrap;

            svg
            {
                width: 1.1rem;
                height: 1.3rem;
                margin-right: 0.2rem;
                position: relative;
                top: -0.15rem;
                fill: $orange;
            }

            .popUp-copy-active
            {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 100%;
                height: 100%;
                background-color: #222e54;
                color: #fff;
                padding: 0.1rem 0.3rem;
                font-size: 0.85rem;
                border-radius: 0.3rem;
                box-shadow: 0rem 0rem 0.4rem rgba(228, 221, 204, 0.9);
            }
        }

        .vs-button
        {
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
            position: relative;
            left: 0.1rem;
            top: -0.1rem;
            flex: none;
            background-color: #fb8b68;
            box-shadow: none !important;
            transform: none !important;
            svg
            {
                width: 1.3rem;
                height: 1.3rem;
                top: -0.02rem;
                fill: #fff;
            }

            i
            {
                font-size: 0.8rem;
                color: #fff;
            }

            .vs-button__content {
                padding: 0.25rem;
                padding-top: 0;
                position: relative;
                left: -0.023rem;
                top: 0.1rem;            
            }
        }
    }

.prescri-process-buttons
    {
            position: fixed;
            top: auto;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 5555;
            width: 100%;
            /* min-height: 7.4875rem; */
            display: flex;
            align-items: center;
            justify-content: center;
            height: 7.2125rem;

            button
            {
                background-color: #fb8b68;
                outline: none;
                appearance: none;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50%;
                color: white;
                padding: 0.9rem;
                font-size: 1.4rem;
                height: 100%;
                box-shadow: 0rem 0.4rem 1.4rem 0rem rgba(255, 104, 56, 0.5);
                user-select: none;
                transition: 0.25s;

                @media (min-width: 1100px) {
                    font-size: 1.21rem;
                    width: initial;
                    border-radius: 0.7rem;
                    margin-right: 2.2rem;
                    padding: 1.7rem;
                    
                    &:first-child {
                        margin-right: 1.8rem;
                    }
                }

                &.disabled-custom
                {
                    pointer-events: none;
                    box-shadow: 0rem 0rem 0.6rem 0rem rgba(255, 104, 56, 0.2);

                    > * 
                    {
                        opacity: 0.3;
                    }

                    @media (min-width: 1100px) {
                        opacity: 0.9;

                        > * 
                        {
                            opacity: 0.3;
                        }
                    }
                }

                &.prescri-direct
                {
                    background-color: #fff;
                    color: #fb8b68;
                    font-size: 1.55rem;
                    letter-spacing: 0.05rem;
                    @media (min-width: 1100px) {
                        font-size: 1.35rem;
                        letter-spacing: 0.06rem;
                        padding-left: 1.65rem;
                        padding-right: 1.9rem;
                    }

                    .big
                    {
                        letter-spacing: 0;
                        margin-bottom: -0.2rem;
                        position: relative;
                        top: -0.12rem;
                    }

                    svg
                    {
                        fill: #fb8b68;
                        top: -0.2rem;
                    }

                    &:hover, &:focus
                    {
                        background-color: #f7f7f7;
                    }
                }

                &.prescri-edit
                {

                    .big
                    {
                        font-size: 2rem;
                        @media (min-width: 1100px) {
                            font-size: 1.8rem;
                        }
                    }
                    .medium {
                        font-size: 1.45rem;
                        margin-top: 0.1rem;
                        letter-spacing: 0.08rem;
                        @media (min-width: 1100px) {
                            font-size: 1.32rem;
                            margin-top: 0.12rem;
                        }
                    }
                }

                > span 
                {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                span 
                {
                    font-weight: bold;
                    line-height: 0.9;

                    &.big
                    {
                        font-size: 2.2rem;
                        @media (min-width: 1100px) {
                            font-size: 2rem;
                        }
                    }

                    &.m-r
                    {
                        display: inline-block;
                        margin-right: 0.5rem;
                        @media (min-width: 1100px) {
                            margin-bottom: 0.1rem;
                        }
                    }
                }

                svg
                {
                    fill: #fff;
                    width: 3.6rem;
                    height: 4rem;
                    margin-right: 0.8rem;
                    position: relative;
                    top: -0.2rem;
                }

                &:hover, &:focus
                {
                    background-color: #ed7b58;
                }
            }
            
            @media (min-width: 1100px) {
                position: absolute;
                border-radius: 0 0 0.7rem 0.7rem;
                bottom: 2rem;
                height: 5.1125rem;
                justify-content: flex-end;
            }
    }

    .new-fiche-controls
    {
        position: absolute;
        top: -0.6rem;
        right: -1.3rem;
        height: 5.1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > span:first-child
        {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background-color: #ff6838;
            border-radius: 50%;
            width: 1.7rem;
            height: 1.7rem;
            color: #fff;
            font-weight: bold;
            position: relative;
            left: -0.1rem;
            top: -0.05rem;
            @media (min-width: 799px) {
                left: 0.2rem;
                top: -0.05rem;
            }
        }

        .vs-button
        {
            background: #fff;
            font-size: 1.4rem;
            color: #fb8b68;
            border-radius: 50%;
            box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(255, 255, 255, 0.15);
            width: 1.9rem;
            height: 1.9rem;
            transform: none;
            border: 1px solid #ffebe4;
            position: relative;
            top: -0.1rem;
            left: -0.2rem;
            @media (min-width: 799px) {
                top: 0.3rem;
                left: 0;
            }

            .vs-button__content 
            {
                padding: 0.3rem !important;
                padding-top: 0 !important;
                font-size: 2.2rem;
            }

            &:hover
            {
                box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(255, 255, 255, 0.15) !important;
                transform: none !important;
            }
        }
    }
}

.worksheet-list.wl-doctor .worksheet-container {
    // overflow: hidden;
    display: flex;

    @media (min-width: 799px) {
        background-color: #faf8f4;
        border-radius: 0.5rem;
    }

    .worksheet {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 1.3rem 0 !important;
        padding-bottom: 0.9rem !important;
        width: 90vw;
        transition: 0.25s;
        overflow: hidden;

        @media (min-width: 799px) {
            // width: initial;
            width: 86vw;
        }

        @media (min-width: 1100px) {
            width: 58.4vw;
        }

        // @media (min-width: 1610px) {
        //     width: 61.3vw;
        // }

        &.prescri-process-choice {
            width: 82vw!important;

            @media (min-width: 1100px) {
                width: 54vw !important;
            }
        }

        & > *:not(.worksheet-content-wt),
        .worksheet-content-wt > *:not(.worksheet-details-footer),
        .worksheet-details-footer > *:not(.buttons-container)
        {
            padding: 0 1.3rem;
        }

        .toggle-zone
        {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 5rem;
            z-index: 2;
            cursor: pointer;
        }

        .worksheet-header {
            justify-content: space-between;
            width: 100%;
            margin-bottom: 0.5rem;

            .worksheet-title
            {
                font-size: 1.4rem;
                width: 91%;
                line-height: 1;
                position: relative;
                top: -0.2rem;
                max-height: 3rem;
                overflow: hidden;
                white-space: initial;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                padding: 0.3rem 0;
            }

            .vs-tooltip-content.kiv-help
            {
                position: absolute;
                right: 1rem;
                top: 0.75rem;
                z-index: 5;

                 @media (min-width: 799px) {
                    top: 1.5rem;
                }
            }

            .vs-button--size-mini.tag.part-of-body:not(.loading) {
                background: #faf8f4 !important;
                border-radius: 50% !important;
                width: 2.5rem !important;
                height: 2.5rem !important;
                position: initial;

                @media (min-width: 799px) {
                    background: #fff !important;
                }

                img {
                    margin-right: 0 !important;
                }

                .text 
                {
                    display: none;
                }
            }
        }

        .worksheet-details-short
        {
            display: flex;
            width: 100%;
        }

        .worksheet-content-wt {
            width: 100%;

            > div 
            {
                flex-direction: column;
                margin-bottom: 0;
                width: 100%;
            }

            .worksheet-details {
                display: flex;
                flex-direction: row;
                white-space: nowrap;

                &:not(.worksheet-details-short)
                {
                    // margin-top: 0.6rem;
                    position: relative;
                    
                    &::after
                    {
                        content: '';
                        display: block;
                        background: linear-gradient(
                            90deg,
                            rgba(255, 255, 255, 0) 0%,
                            rgba(255, 255, 255, 1) 60%,
                            rgba(255, 255, 255, 1) 100%,
                        );
                        width: 2.2rem;
                        height: 1.2rem;
                        position: absolute;
                        top: -0.2rem;
                        right: 0.4rem;
                        z-index: 5;


                        @media (min-width: 800px) {
                            display: none;
                        }
                    }
                }

                > * 
                {
                    margin-right: 0.8rem;
                    display: flex;
                    align-items: center;
                    max-height: 0.9rem;
                    color: $black;
                }

                i {
                    position: relative;
                    top: -0.1rem;
                    color: #fb8b68;

                    &.kiv-calendar
                    {
                        top: -0.14rem;
                    }
                }

                span.space
                {
                    margin-left: 0.3rem;
                }

                &:not(.worksheet-details-short)
                {
                    margin-bottom: 0.8rem;
                }
            }
        }
    }
}

.worksheet-exercises-container
{
    position: relative;
    // padding-right: 0 !important;

    &::after
    {
        content: '';
        display: block;
        background: linear-gradient(
            90deg,
            rgba(250, 250, 252, 0) 0%,
            rgba(38, 37, 34, 0.07) 100%,
        );
        width: 0.7rem;
        height: 13.2rem;
        position: absolute;
        top: 0;
        right: 1.3rem;
        z-index: 5;
    }
}

.worksheet-exercises
{
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    height: 13.2rem;
    padding: 1.2rem;
    background-color: #fAf8f4;
    border-radius: 0.5rem;

    @media (min-width: 799px) {
        background-color: #fff;
        height: 13.5rem;
        box-shadow: inset -0.74rem -0.3rem 0.9rem rgba(148, 96, 77, 0.07);
    }

    @media (max-width: 799px) {
        &::-webkit-scrollbar {
            display: none;
        }

        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* Internet Explorer et Edge */
    }

    .worksheet-exercise 
    {
        width: 17rem;
        flex: none;

        &:not(:last-child)
        {
            margin-right: 1.6rem;
        }

        .worksheet-exercise-thumbnail
        {
            height: 100%;
            max-height: 9.5rem;
            margin-bottom: 0.6rem;
            img
            {
                object-fit: cover;
                width: 100%;
                height: 100%; 
            }
        }

        .worksheet-exercise-details
        {
            display: flex;
            flex-wrap: nowrap;
            overflow: hidden;
            margin-top: 0.3rem;
            color: #9b9894;

            .series-reps, 
            .option, 
            .hold, 
            .tempo
            {
                &:not(:last-child)
                {
                    margin-right: 0.3rem;
                }

                span:not(.no-space)
                {
                    margin-left: 0.3rem;
                }

                i 
                {
                    color: #fb8b68;
                }

                display: flex;
                flex: none;
            }
        }
    }

    
}

.worksheet-exercise-other
{
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: -0.3rem;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: relative;
    
    // @media (min-width: 550px) {
    //     margin-top: 1.4rem;
    //     margin-bottom: 0;
    //     align-items: flex-start;
    // }

    // @media (min-width: 780px) {
    //     flex-direction: row;
    //     align-items: center;
    // }

    &::after
    {
        content: '';
        display: block;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%,
        );
        width: 1rem;
        height: 1.2rem;
        position: absolute;
        top: 0.5rem;
        right: 0;
        z-index: 5;

        @media (min-width: 800px) {
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0) 0%,
                #faf8f4 100%,
            );
        }
    }
}

.tags {
    display: flex;
    overflow-x: auto;
    padding: 0.35rem 0;
    position: relative;
    -ms-overflow-style: none; /* Pour Internet Explorer et Edge */
    scrollbar-width: none; /* Pour Firefox */
    max-width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }
    
    .tag-chip {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #faf8f4;
        border-radius: 1rem;
        color: #9b9894;
        padding: 0.1rem 0.5rem;
        font-size: 0.8rem;
        letter-spacing: 0.02rem;
        white-space: nowrap;
        margin: 0.2rem 0.3rem;

        :last-child {
            margin-right: 0;
        }

        @media (min-width: 799px) {
            background: #fff;
        }
    }
}

</style>
