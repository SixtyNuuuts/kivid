<template>
    <section
        id="my-worksheets"
        class="kiv-block s-worksheet-templates"
        :class="{ reduced: !$parent.myWorksheetTemplatesContent }"
    >
        <div
            class="toggle-content tab"
            @click="
                $parent.myWorksheetTemplatesContent =
                    !$parent.myWorksheetTemplatesContent
            "
        >
            <i class="kiv-chevron-down icon-3"></i>
        </div>
        <div class="tabs">
            <div class="inactive" @click="activeTab(1)">
                <h2><span>Mes prescriptions</span></h2>
            </div>
            <div @click="activeTab(2)">
                <h2><span>Mes fiches</span></h2>
            </div>
        </div>
        <transition name="fade">
            <div
                v-if="prescriProcess && getWorksheetTemplates.length"
                class="prescri-process-dialog"
            >
                <span class="step-num"
                    ><i class="fas fa-folder-plus"></i>Etape
                    {{ !$parent.prescriProcessPatientSelected ? 1 : 2 }}
                </span>
                <p>
                    Veuillez Sélectionner une fiche, vous pourrez la
                    personnaliser à l'étape suivante
                </p>
            </div>
        </transition>
        <transition name="fade">
            <div
                v-if="prescriProcess"
                class="prescri-process-dialog pp-create-worksheet"
            >
                <span class="step-num"
                    ><i class="fas fa-folder-plus"></i>Etape
                    {{ !$parent.prescriProcessPatientSelected ? 1 : 2 }}
                </span>
                <p>
                    <span v-if="getWorksheetTemplates.length">Ou créez</span
                    ><span v-else>Créez</span> une nouvelle fiche
                </p>
            </div>
        </transition>
        <transition name="height">
            <div v-if="$parent.myWorksheetTemplatesContent">
                <div class="primary-actions">
                    <div class="search">
                        <vs-input
                            v-model="search"
                            @keyup="page = 1"
                            label-placeholder="Filtrer par nom de fiche et/ou créateur"
                        />
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
                    <div>
                        <div class="kiv-select tags">
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
                            <vs-tooltip>
                                <vs-button
                                    v-if="!$parent.prescriProcess"
                                    @click="redirectToCreatePage(0)"
                                    :loading="btnLoadingAddWorksheet"
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
                        </div>
                        <transition name="fade">
                            <div
                                v-if="$parent.prescriProcess"
                                class="btn-prescription-action"
                                :class="{
                                    active: prescriProcess,
                                    selected:
                                        $parent.prescriProcessWorksheetSelected &&
                                        $parent.prescriProcessWorksheetSelected
                                            .id === null,
                                }"
                            >
                                <vs-button
                                    :loading="
                                        btnLoadingWorksheetPrescriProcessRedirect ===
                                        0
                                    "
                                    @click="
                                        prescriProcessWorksheetChoice({
                                            id: null,
                                        })
                                    "
                                    class="w-100"
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
                                </vs-button>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="worksheet-list wl-doctor">
                    <transition name="fade">
                        <div
                            v-if="
                                !loadingAllWorksheets &&
                                getWorksheetTemplates.length
                            "
                        >
                            <div
                                v-for="(worksheet, i) in getWorksheetTemplates"
                                :key="i"
                            >
                                <div class="worksheet-header">
                                    <div
                                        class="user-title"
                                        @click="
                                            redirectToWorksheetPage(
                                                worksheet.id
                                            )
                                        "
                                    >
                                        <h3 class="worksheet-title">
                                            {{ worksheet.title }}
                                        </h3>
                                    </div>
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
                                    <TagPartOfBody
                                        :partOfBody="worksheet.partOfBody"
                                    />
                                </div>
                                <div class="worksheet-content">
                                    <div>
                                        <div class="worksheet-details">
                                            <div
                                                class="
                                                    worksheet-exercises-count
                                                "
                                            >
                                                <i
                                                    class="kiv-exercise icon-7"
                                                ></i>
                                                <span class="b">{{
                                                    worksheet.exercises.length
                                                }}</span>
                                                exercice<span
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
                                                <span class="b"
                                                    >{{
                                                        worksheet.perDay
                                                    }}x</span
                                                >
                                                par jour -
                                                <span class="b"
                                                    >{{
                                                        worksheet.perWeek
                                                    }}x</span
                                                >
                                                par semaine
                                            </div>
                                            <div class="worksheet-period">
                                                <i
                                                    class="kiv-clock icon-11"
                                                ></i>
                                                Période :
                                                <span class="b"
                                                    >{{
                                                        worksheet.duration
                                                    }}
                                                    semaine<span
                                                        v-if="
                                                            worksheet.duration >
                                                            1
                                                        "
                                                        >s</span
                                                    ></span
                                                >
                                            </div>
                                        </div>
                                        <div class="worksheet-details reduced">
                                            <div
                                                class="
                                                    worksheet-exercises-count
                                                "
                                            >
                                                <i
                                                    class="kiv-exercise icon-7"
                                                ></i>
                                                <span class="b">{{
                                                    worksheet.exercises.length
                                                }}</span>
                                                ex.
                                            </div>
                                            <div class="worksheet-timing">
                                                <i
                                                    class="kiv-calendar icon-10"
                                                ></i>
                                                <span class="b"
                                                    >{{
                                                        worksheet.perDay
                                                    }}x</span
                                                >
                                                / jour -
                                                <span class="b"
                                                    >{{
                                                        worksheet.perWeek
                                                    }}x</span
                                                >
                                                / sem.
                                            </div>
                                            <div class="worksheet-period">
                                                <i
                                                    class="kiv-clock icon-11"
                                                ></i>
                                                <span class="b"
                                                    >{{
                                                        worksheet.duration
                                                    }}
                                                    sem.</span
                                                >
                                            </div>
                                        </div>
                                        <div class="btns-date">
                                            <div class="created-at-date">
                                                <span
                                                    >créé le
                                                    {{
                                                        formatDate(
                                                            worksheet.createdAt
                                                        )
                                                    }}
                                                    <span
                                                        class="creator"
                                                        v-if="
                                                            worksheet.doctor &&
                                                            (worksheet.doctor
                                                                .firstname ||
                                                                worksheet.doctor
                                                                    .lastname)
                                                        "
                                                    >
                                                        par
                                                        {{
                                                            worksheet.doctor
                                                                .firstname
                                                        }}
                                                        {{
                                                            worksheet.doctor
                                                                .lastname
                                                        }}
                                                    </span></span
                                                >
                                                <vs-avatar
                                                    size="22"
                                                    class="user-avatar"
                                                    circle
                                                    v-if="worksheet.doctor"
                                                >
                                                    <img
                                                        :src="
                                                            worksheet.doctor
                                                                .avatarUrl
                                                                ? worksheet
                                                                      .doctor
                                                                      .avatarUrl
                                                                : '/img/avatar-default.svg'
                                                        "
                                                        :alt="`Avatar de ${worksheet.doctor.firstname} ${worksheet.doctor.lastname}`"
                                                    />
                                                </vs-avatar>
                                            </div>
                                            <div class="buttons">
                                                <vs-button
                                                    @click="
                                                        redirectToWorksheetPage(
                                                            worksheet.id
                                                        )
                                                    "
                                                    class="btn-action"
                                                    circle
                                                    floating
                                                >
                                                    <i class="fas fa-eye"></i>
                                                </vs-button>
                                                <vs-button
                                                    v-if="
                                                        worksheet.doctor.id ===
                                                        doctor.id
                                                    "
                                                    @click="
                                                        redirectToEditPage(
                                                            worksheet.id
                                                        )
                                                    "
                                                    class="btn-action"
                                                    circle
                                                    floating
                                                >
                                                    <i class="fas fa-pen"></i>
                                                </vs-button>
                                                <vs-button
                                                    v-if="
                                                        worksheet.doctor.id ===
                                                        doctor.id
                                                    "
                                                    @click="
                                                        removeWorksheet(
                                                            worksheet
                                                        )
                                                    "
                                                    class="btn-action"
                                                    circle
                                                    floating
                                                >
                                                    <i class="fas fa-trash"></i>
                                                </vs-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bloc-footer">
                                    <div class="big-buttons">
                                        <div class="btn-create-action">
                                            <vs-button
                                                :disabled="$parent.prescriProcess"
                                                :loading="
                                                    btnLoadingCopyWorksheet ===
                                                    worksheet.id
                                                "
                                                @click="
                                                    redirectToCreatePage(
                                                        worksheet.id
                                                    )
                                                "
                                                class="w-100"
                                            >
                                                <i class="fas fa-plus-circle"></i>
                                                Copier
                                            </vs-button>
                                        </div>
                                        <div
                                            class="btn-prescription-action"
                                            :class="{
                                                active: prescriProcess,
                                                selected:
                                                    $parent.prescriProcessWorksheetSelected &&
                                                    $parent
                                                        .prescriProcessWorksheetSelected
                                                        .id === worksheet.id,
                                            }"
                                        >
                                            <vs-button
                                                :loading="
                                                    btnLoadingWorksheetPrescriProcessRedirect ===
                                                    worksheet.id
                                                "
                                                @click="
                                                    prescriProcessWorksheetChoice(
                                                        worksheet
                                                    )
                                                "
                                                class="w-100"
                                            >
                                                <transition name="fade">
                                                    <span
                                                        v-if="
                                                            (!prescriProcess &&
                                                                !$parent.prescriProcessWorksheetSelected) ||
                                                            ($parent.prescriProcessWorksheetSelected &&
                                                                $parent
                                                                    .prescriProcessWorksheetSelected
                                                                    .id !=
                                                                    worksheet.id)
                                                        "
                                                        ><i
                                                            class="
                                                                fas
                                                                fa-folder-plus
                                                            "
                                                        ></i
                                                        >Prescrire</span
                                                    >
                                                    <span
                                                        v-if="
                                                            prescriProcess &&
                                                            !$parent.prescriProcessWorksheetSelected
                                                        "
                                                        ><i
                                                            class="
                                                                fas
                                                                fa-folder-plus
                                                            "
                                                        ></i
                                                        >Sélectionner</span
                                                    >
                                                    <span
                                                        v-if="
                                                            $parent.prescriProcessWorksheetSelected &&
                                                            $parent
                                                                .prescriProcessWorksheetSelected
                                                                .id === worksheet.id
                                                        "
                                                        ><i
                                                            class="
                                                                fas
                                                                fa-check-circle
                                                            "
                                                        ></i
                                                        >Sélectionné</span
                                                    >
                                                </transition>
                                            </vs-button>
                                        </div>
                                    </div>
                                    <div v-if="doctor.giveAccessPublicWorksheetGeneration" class="btn-create-public-access">
                                        <vs-button
                                            v-if="!worksheet.accessPublicSlug"
                                            :disabled="$parent.prescriProcess"
                                            :loading="btnLoadingCreatePublicAccess===worksheet.id"
                                            @click="createPublicAccess(worksheet)"
                                            class="w-100"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
                                            <span>Créer un accès public</span>
                                        </vs-button>
                                        <div v-else class="public-worksheet-url">
                                           <span class="label">accès public</span>
                                           <span class="link" @click="copyToClipboard(`${publicWorksheetBaseUrl}/${worksheet.accessPublicSlug}`, worksheet.id)">
                                                <!-- <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 5 1 C 3.9 1 3 1.9 3 3 L 3 17 L 5 17 L 5 3 L 17 3 L 17 1 L 5 1 z M 9 5 C 7.9 5 7 5.9 7 7 L 7 21 C 7 22.1 7.9 23 9 23 L 20 23 C 21.1 23 22 22.1 22 21 L 22 10 L 17 5 L 9 5 z M 9 7 L 16 7 L 16 11 L 20 11 L 20 21 L 9 21 L 9 7 z M 11 13 L 11 15 L 18 15 L 18 13 L 11 13 z M 11 17 L 11 19 L 18 19 L 18 17 L 11 17 z"/></svg> -->
                                                {{ `${publicWorksheetBaseUrl}/${worksheet.accessPublicSlug}` }}
                                                <transition name="fade">
                                                    <span v-if="popUpCopyActive===worksheet.id" class="popUp-copy-active">Lien copié dans le presse-papier</span>
                                                </transition>
                                            </span>
                                            <vs-button
                                                :loading="btnLoadingCreatePublicAccess===worksheet.id"
                                                @click="deletePublicAccess(worksheet)"
                                            >
                                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M 32.5 9 C 28.364 9 25 12.364 25 16.5 L 25 18 L 17 18 C 14.791 18 13 19.791 13 22 C 13 24.209 14.791 26 17 26 L 17.232422 26 L 18.671875 51.916016 C 18.923875 56.449016 22.67875 60 27.21875 60 L 44.78125 60 C 49.32125 60 53.076125 56.449016 53.328125 51.916016 L 54.767578 26 L 55 26 C 57.209 26 59 24.209 59 22 C 59 19.791 57.209 18 55 18 L 47 18 L 47 16.5 C 47 12.364 43.636 9 39.5 9 L 32.5 9 z M 32.5 16 L 39.5 16 C 39.775 16 40 16.224 40 16.5 L 40 18 L 32 18 L 32 16.5 C 32 16.224 32.225 16 32.5 16 z M 36 28 C 37.104 28 38 28.896 38 30 L 38 47.923828 C 38 49.028828 37.104 49.923828 36 49.923828 C 34.896 49.923828 34 49.027828 34 47.923828 L 34 30 C 34 28.896 34.896 28 36 28 z M 27.392578 28.001953 C 28.459578 27.979953 29.421937 28.827641 29.460938 29.931641 L 30.085938 47.931641 C 30.123938 49.035641 29.258297 49.959047 28.154297 49.998047 C 28.131297 49.999047 28.108937 50 28.085938 50 C 27.012938 50 26.125891 49.148359 26.087891 48.068359 L 25.462891 30.068359 C 25.424891 28.964359 26.288578 28.040953 27.392578 28.001953 z M 44.607422 28.001953 C 45.711422 28.039953 46.575109 28.964359 46.537109 30.068359 L 45.912109 48.068359 C 45.874109 49.148359 44.986063 50 43.914062 50 C 43.891062 50 43.868703 49.999047 43.845703 49.998047 C 42.741703 49.960047 41.876063 49.035641 41.914062 47.931641 L 42.539062 29.931641 C 42.577062 28.827641 43.518422 27.979953 44.607422 28.001953 z"/></svg>                                            </vs-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="not-found"
                            v-if="
                                !loadingAllWorksheets &&
                                !getWorksheetTemplates.length &&
                                !search &&
                                !selectedTags.length
                            "
                        >
                            <p>
                                <i class="fas fa-folder-minus"></i>
                                <span>Vous n'avez pas de fiche</span>
                            </p>
                        </div>
                        <div
                            class="not-found"
                            v-if="
                                !loadingAllWorksheets &&
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
                        <div v-if="loadingAllWorksheets">
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-65"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-55"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="loading loading-block">
                                <div class="worksheet-header w-85">
                                    <div
                                        class="loading worksheet-title w-45"
                                    ></div>
                                    <div class="loading part-of-body"></div>
                                </div>
                                <div
                                    class="loading worksheet-progress-line"
                                ></div>
                                <div class="worksheet-content">
                                    <div class="worksheet-details">
                                        <div
                                            class="
                                                loading
                                                worksheet-exercises-count
                                                w-45
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-timing
                                                w-25
                                            "
                                        ></div>
                                        <div
                                            class="
                                                loading
                                                worksheet-period
                                                w-15
                                            "
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="pagination" v-if="countWorksheetTemplates > max">
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
        loadingAllWorksheets: Boolean,
        tagsFromExercises: Array,
        prescriProcess: Boolean,
        btnLoadingWorksheetPrescriProcessRedirect: Number,
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
            max: 6,
            viewAllTemplates: false,
            modalConfirmRemoveWorksheet: false,
            removeWorksheetDetails: {},
            btnLoadingValidRemoveWorksheet: false,
            btnLoadingAddWorksheet: false,
            btnLoadingCopyWorksheet: null,
            btnLoadingCreatePublicAccess: null,
            popUpCopyActive: null
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
        countWorksheetTemplates() {
            return this.getSearch(this.worksheetTemplates, this.search).length;
        },
        getTagsFromAll() {
            return f.getTagsFromAll(this.tagsFromExercises);
        },
        publicWorksheetBaseUrl()
        {
            return `${window.location.protocol}//${window.location.host}/fiche`;
        }
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
        prescriProcessWorksheetChoice(worksheet) {
            this.$emit("prescriProcessWorksheetChoice", worksheet);
        },
        redirectToEditPage(worksheetId) {
            document.location.href = `/doctor/${this.doctor.id}/fiche/edition/${worksheetId}`;
        },
        redirectToCreatePage(worksheetId) {
            console.log(worksheetId);
            if (worksheetId) {
                this.btnLoadingCopyWorksheet = worksheetId;
            } else {
                this.btnLoadingAddWorksheet = true;
            }

            document.location.href = `/doctor/${this.doctor.id}/fiche/creation/${worksheetId}`;
        },
        redirectToWorksheetPage(worksheetId) {
            document.location.href = `/doctor/${this.doctor.id}/fiche/voir/${worksheetId}`;
        },
        activeTab(num) {
            this.$parent.activeTab = num;

            if (window.innerWidth < 576) {
                if (1 === num) {
                    this.$parent.myPrescriptionsContent = true;
                }
                if (2 === num) {
                    this.$parent.myWorksheetTemplatesContent =
                        !this.$parent.myWorksheetTemplatesContent;
                }
            }
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
                        "Suppression de la fiche",
                        response.data
                    );
                    this.$parent.allWorksheets.splice(
                        this.$parent.allWorksheets.indexOf(
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
};
</script>

<style lang="scss">
@import "../../../scss/variables";

#my-worksheets.s-worksheet-templates {
    padding-top: 6.7rem;

    &.reduced {
        padding-top: 4.4rem;
    }

    .tabs {
        > div {
            &.inactive {
                box-shadow: inset -0.74rem -0.3rem 0.9rem
                    rgba(148, 96, 77, 0.07);
                border-radius: 0 0 0.8rem 0;
            }
        }
    }

    .primary-actions {
        margin-bottom: 1.2rem;

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

            @media (min-width: 576px) {
                width: 50%;
                // margin-right: 1.4rem;
            }
        }

        > :last-child {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 0.3rem;
            margin-top: 1rem;

            @media (min-width: 576px) {
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

        .vs-input-parent {
            margin-right: 1.4rem;
            width: 100%;
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

    .bloc-footer
    {
        display: flex;
        margin-top: 1.5rem;
        margin-bottom: -0.3rem;
        flex-direction: column;
        align-items: center;
        width: 100%;

        @media (min-width: 550px) {
            margin-top: 1.4rem;
            margin-bottom: 0;
            align-items: flex-start;
        }

        @media (min-width: 780px) {
            flex-direction: row;
            align-items: center;
        }
    }

    .btn-prescription-action,
    .btn-create-action,
    .btn-create-public-access
    {
        white-space: nowrap;

        .vs-button {
            background: $white;
            font-size: 1.4rem;
            color: $orange;
            border-radius: 0.5rem;
            box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(255, 104, 56, 0.15);

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

    .big-buttons {
        display: flex;

        .btn-prescription-action {
            position: relative;
            top: -0.1rem;
        }

        .btn-create-action {
            width: 8.8rem;
            margin-right: 1.7rem;

            @media (max-width: 449px) {
                margin-right: 1.2rem;
            }

            .vs-button {
                background: $black;
                color: $white;
                letter-spacing: 0.005rem;
                font-weight: 500;
                font-size: 1.3rem;

                .vs-button__loading {
                    background: rgba($black, 0.7);
                }

                i {
                    margin-right: 0.7rem;
                    font-size: 1.4rem;
                }
            }
        }
    }

    .btn-create-public-access {
        display: flex;
        align-items: center;
        margin-top: 1.6rem;
        max-width: 100%;
        background-color: #faf8f4;
        z-index: 5;

        @media (min-width: 550px) {
            position: relative;
            top: 0.3rem;
            max-width: 59.2vw;
        }

        .public-worksheet-url
        {             
            border: 0.0625rem solid $orange;
            height: 3.2rem;
            border-radius: 0.5rem;
            padding: 1.8rem 1.1rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;

            .label 
            {
                position: absolute;
                top: -0.6rem;
                left: 1.0625rem;
                text-transform: uppercase;
                color: $orange;
                background-color: #faf8f4;
                padding: 0.0625rem 0.25rem;
                padding-top: 0.25rem;
                font-size: 0.6875rem;
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
                color: $black;
                margin-right: 0.4rem;
                font-size: 1.2rem;
                max-width: 93.5%;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
                position: relative;

                svg
                {
                    width: 1.5rem;
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
                    background-color: $black;
                    color: #fff;
                    padding: 0.2rem 0.5rem;
                    font-size: 1rem;
                    border-radius: 0.3rem;
                    box-shadow: 0rem 0rem 0.4rem rgba(228, 221, 204, 0.9);
                }
            }

            .vs-button
            {
                width: 1.8rem;
                height: 1.8rem;
                border-radius: 50%;
                position: relative;
                left: 0.4rem;
                top: -0.1rem;
                flex: none;
                
                svg
                {
                    width: 1.3rem;
                    height: 1.3rem;
                    top: -0.02rem;
                }

                .vs-button__content {
                    padding: 0;
                    padding-top: 0;
                    position: relative;
                    left: 0.25rem;
                    top: 0.015rem;              
                }
            }
        }
        
        @media (min-width: 780px) {
            margin-left: 1.6rem;
            margin-top: 0;
            top: 0;
            max-width: 32rem;
        }

        @media (min-width: 780px) {
            margin-left: 1.6rem;
            margin-top: 0;
            top: 0;
            max-width: 38vw;
        }

        @media (min-width: 1100px) {
            max-width: 20vw;
        }

        @media (min-width: 1200px) {
            max-width: 26.5vw;
        }

        @media (min-width: 1300px) {
            max-width: 30vw;
        }

        .vs-button {
            background: $orange;
            color: $white;
            letter-spacing: 0.005rem;
            font-weight: 500;
            font-size: 1.3rem;

            .vs-button__loading {
                background: rgb(158 64 34 / 61%);
            }
            
            .vs-button__content {
                padding: 0.7rem 1.2rem;
                padding-top: 0.7rem;                
            }

            svg {
                fill: #fff;
                width: 1.6rem;
                margin-right: 0.5rem;
                height: 1.7rem;
                position: relative;
                top: -0.1rem;
                transition: 0.25s;

                &.supp-public-access {
                    transform: rotate(180deg);    
                }
            }
        }
    }

    .tags {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;

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

    .worksheet-list.wl-doctor > div:not(.not-found) {
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding-top: 4.2rem;

            @media (min-width: 550px) {
                padding-top: 1.7rem;
                align-items: flex-start;
            }

            .worksheet-header {
                margin-top: 0.2rem;
                max-width: 100%;

                @media (max-width: 550px) {
                    margin-bottom: 0.6rem;
                }

                @media (min-width: 550px) {
                    margin-top: 0;
                }

                .user-avatar {
                    margin-right: 1rem;
                    min-width: 35px;
                    max-height: 35px;
                }

                .user-title {
                    max-width: 47vw;
                    margin-right: 1rem;
                    cursor: pointer;

                    @media (min-width: 550px) {
                        max-width: 43vw;
                    }

                    @media (min-width: 576px) {
                        max-width: 46vw;
                    }

                    @media (min-width: 992px) {
                        max-width: 53vw;
                    }

                    @media (min-width: 1100px) {
                        max-width: 32vw;
                    }

                    @media (min-width: 1370px) {
                        max-width: 43vw;
                    }

                    .worksheet-title {
                        font-size: 1.3rem;

                        @media (min-width: 550px) {
                            font-size: 1.4rem;
                        }

                        @media (min-width: 576px) {
                            font-size: 1.6rem;
                        }
                    }

                    .btn-action {
                        &.commentaries {
                            background: $white !important;
                            color: $gray-middle;
                            position: relative;
                            overflow: visible;
                            width: 3rem;
                            height: 3rem;
                            min-width: 3rem;
                            min-height: 3rem;
                            max-height: 3rem;
                            margin-left: 1rem;
                            box-shadow: 0rem 0.2rem 0.9rem 0rem
                                rgba(231, 223, 205, 0.6);
                            z-index: 111;

                            i {
                                font-size: 1.6rem;
                                top: 0.18rem;
                                left: 0.45rem;
                            }

                            .count-commentaries {
                                position: absolute;
                                top: -0.3rem;
                                right: -0.5rem;
                                width: 1.2rem;
                                height: 1.2rem;
                                min-width: 1.2rem;
                                min-height: 1.2rem;
                                max-height: 1.2rem;
                                background-color: $orange;
                                border-radius: 50%;
                                font-size: 0.7rem;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                color: white;
                                padding: 0.1rem 0.2rem;
                                padding-top: 0.15rem;
                            }
                        }
                    }
                }

                &::after {
                    content: "";
                    display: block;
                    height: 100%;
                    width: 1.1rem;
                    position: absolute;
                    top: 4.3rem;
                    right: 1.9rem;
                    height: 2rem;
                    background: linear-gradient(
                        90deg,
                        rgba(250, 248, 244, 0) 0%,
                        rgba(250, 248, 244, 1) 100%
                    );
                }

                .vs-button--size-mini.tag.part-of-body {
                    font-size: 1rem;
                    top: 1.2rem;
                    right: 50%;
                    transform: translateX(50%);

                    @media (max-width: 379px) {
                        top: 1.2rem;
                    }

                    @media (min-width: 550px) {
                        top: 1.6rem;
                        right: 1.8rem;
                        transform: none;
                        font-size: 1.3rem;
                    }
                }
            }

            .worksheet-content {
                flex-direction: column;
                margin-bottom: 0;
                width: 100%;

                > div {
                    .worksheet-details {
                        position: relative;
                        display: none;
                        margin-top: 0.7rem;

                        @media (min-width: 700px) {
                            display: flex;
                        }

                        @media (min-width: 992px) {
                            display: none;
                        }

                        @media (min-width: 1100px) {
                            display: flex;
                        }

                        &.reduced {
                            display: flex;
                            width: 100%;
                            align-items: center;
                            justify-content: flex-start;
                            margin-bottom: 0.2rem;
                            overflow: hidden;
                            max-width: 98%;

                            @media (max-width: 499px) {
                                margin-bottom: 0;
                            }

                            @media (min-width: 410px) {
                                justify-content: center;
                            }

                            @media (min-width: 550px) {
                                justify-content: flex-start;
                            }

                            @media (min-width: 550px) {
                                max-width: initial;
                            }

                            @media (min-width: 700px) {
                                display: none;
                            }

                            @media (min-width: 992px) {
                                display: flex;
                            }

                            @media (min-width: 1100px) {
                                display: none;
                            }
                        }

                        @media (min-width: 992px) {
                            max-width: 41vw;
                            overflow: hidden;
                            font-size: 1.15rem !important;
                        }

                        @media (min-width: 1100px) {
                            max-width: initial;
                            font-size: 1.3rem !important;
                        }

                        &::after {
                            content: "";
                            display: block;
                            height: 100%;
                            width: 1.5rem;
                            position: absolute;
                            top: 0;
                            right: 0;
                            background: linear-gradient(
                                90deg,
                                rgba(250, 248, 244, 0) 0%,
                                rgba(250, 248, 244, 1) 100%
                            );
                        }
                    }

                    .btns-date {
                        display: flex;
                        flex-direction: row-reverse;
                        width: 106%;
                        align-items: center;
                        position: absolute;
                        top: 1.1rem;
                        bottom: auto;
                        right: -1.2rem;
                        padding: 0 1.6rem;
                        justify-content: space-between;

                        @media (min-width: 370px) {
                            width: 104.4%;
                        }

                        @media (min-width: 550px) {
                            flex-direction: column;
                            margin-top: 0rem;
                            align-items: flex-end;
                            padding: 0;
                            top: auto;
                            bottom: 2.1rem;
                            right: 1.8rem;
                        }
                    }
                }
            }

            .worksheet-content > div .btns-date {
                .created-at-date {
                    margin-bottom: 0;
                    margin-right: 0.7rem;
                    position: relative;
                    top: 0;

                    @media (max-width: 550px) {
                        font-size: 0.95rem;

                        &:first-child:last-child {
                            margin: auto;
                        }
                    }

                    @media (min-width: 550px) {
                        top: -0.9rem;
                        margin-right: 0rem;
                    }

                    @media (min-width: 700px) {
                        top: -0.7rem;
                    }

                    .user-avatar {
                        display: none;

                        @media (min-width: 430px) {
                            display: block;
                        }
                    }

                    > span {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;

                        .creator {
                            display: block;
                            max-width: 8rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;

                            @media (min-width: 500px) {
                                max-width: 12rem;
                            }
                        }
                    }
                }

                .buttons {
                    @media (min-width: 550px) {
                        margin-top: 0.8rem;
                    }
                }
            }
        }
    }
}
</style>
