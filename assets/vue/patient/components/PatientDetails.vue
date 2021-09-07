<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div
                        class="
                            card card-border
                            border-primary-desat
                            shadow-lg
                            mb-6 mb-md-8 mb-lg-0
                            lift lift-lg
                        "
                    >
                        <div
                            class="
                                card-body
                                d-flex
                                flex-center flex-column
                                pt-5
                                pb-2
                            "
                        >
                            <div
                                class="
                                    d-flex
                                    flex-center
                                    justify-content-center
                                "
                            >
                                <span class="badge rounded-pill bg-dark-soft">
                                    <span class="h6 text-uppercase">
                                        PROFIL
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div
                            class="
                                d-flex
                                flex-row-reverse
                                position-absolute
                                w-100
                            "
                        >
                            <a
                                v-if="!$parent.doctorView"
                                class="
                                    btn btn-lg btn-rounded-circle btn-primary
                                "
                                :href="`/patient/${patient.id}/edit`"
                            >
                                <i class="fe fe-edit"></i>
                            </a>
                        </div>
                        <div class="d-flex flex-center flex-column">
                            <div class="d-flex justify-content-center mt-4">
                                <div class="avatar avatar-xxl">
                                    <img
                                        class="avatar-img rounded-circle"
                                        :src="
                                            patient.avatarUrl
                                                ? patient.avatarUrl
                                                : '/img/avatar-default.svg'
                                        "
                                        alt="avatar"
                                    />
                                </div>
                            </div>
                            <div>
                                <p class="text-center mt-3 mb-0">
                                    {{ patient.firstname }}
                                    {{ patient.lastname }}
                                </p>
                                <p
                                    class="
                                        text-center
                                        d-block
                                        small
                                        text-truncate text-gray-700
                                        m-0
                                    "
                                    href="#!"
                                >
                                    {{ patient.email }}
                                </p>
                                <div
                                    class="
                                        text-center
                                        d-block
                                        small
                                        text-truncate text-gray-700
                                    "
                                    href="#!"
                                >
                                    <div
                                        class="
                                            text-center
                                            d-flex
                                            align-items-center
                                            flex-column
                                            border border-gray-300 border-dashed
                                            rounded
                                            min-w-125px
                                            py-3
                                            px-4
                                            m-5
                                        "
                                    >
                                        <div
                                            class="
                                                border
                                                border-gray-300
                                                border-dashed
                                                rounded
                                                min-w-125px
                                                py-3
                                                px-4
                                                m-1
                                            "
                                        >
                                            <div
                                                class="
                                                    fs-6
                                                    fw-boldest
                                                    text-gray-700
                                                "
                                            >
                                                ÂGE
                                            </div>
                                            <div class="fw-bold text-gray-400">
                                                <div
                                                    v-if="!patient.birthdate"
                                                    class="
                                                        badge
                                                        bg-warning-soft
                                                        my-1
                                                        text-primary
                                                    "
                                                    style="white-space: normal"
                                                >
                                                    <div
                                                        class="
                                                            badge
                                                            badge-rounded-circle
                                                            bg-warning-soft
                                                        "
                                                    >
                                                        <i
                                                            class="
                                                                fe
                                                                fe-alert-triangle
                                                            "
                                                        ></i>
                                                    </div>
                                                    Pour vous préscrire les
                                                    meilleurs programmes, nous
                                                    avons besoin de connaitre
                                                    votre âge.
                                                </div>
                                                <div
                                                    v-if="
                                                        !patient.birthdate &&
                                                        !$parent.doctorView
                                                    "
                                                >
                                                    <a
                                                        :href="`/patient/${patient.id}/edit`"
                                                    >
                                                        compléter votre profil
                                                    </a>
                                                </div>
                                                {{ getAge(patient.birthdate) }}
                                            </div>
                                        </div>
                                        <div
                                            class="
                                                border
                                                border-gray-300
                                                border-dashed
                                                rounded
                                                min-w-125px
                                                py-3
                                                px-4
                                                m-1
                                            "
                                        >
                                            <div
                                                class="
                                                    fs-6
                                                    fw-boldest
                                                    text-gray-700
                                                "
                                            >
                                                KINÉSITHERAPEUTE
                                            </div>
                                            <div class="fw-bold text-gray-400">
                                                <a
                                                    v-if="
                                                        patient.doctor &&
                                                        null !==
                                                            patient.addRequestDoctor
                                                    "
                                                    href=""
                                                    class="text-gray-400"
                                                >
                                                    <div>
                                                        <div
                                                            class="
                                                                badge
                                                                badge-rounded-circle
                                                                bg-secondary-soft
                                                            "
                                                        >
                                                            <i
                                                                class="
                                                                    fe fe-user
                                                                    text-muted
                                                                "
                                                            ></i>
                                                        </div>
                                                        {{
                                                            patient.doctor
                                                                .firstname
                                                        }}
                                                        {{
                                                            patient.doctor
                                                                .lastname
                                                        }}
                                                        <div
                                                            v-if="
                                                                false ===
                                                                patient.addRequestDoctor
                                                            "
                                                        >
                                                            (EN ATTENTE)
                                                        </div>
                                                    </div>
                                                </a>
                                                <div
                                                    v-else
                                                    class="
                                                        badge
                                                        my-1
                                                        text-gray-600
                                                    "
                                                    style="white-space: normal"
                                                >
                                                    <div
                                                        class="
                                                            badge
                                                            badge-rounded-circle
                                                        "
                                                    >
                                                        <i
                                                            class="
                                                                fe fe-user-x
                                                                text-muted
                                                            "
                                                        ></i>
                                                    </div>
                                                    Pour l'instant, aucun
                                                    Kinésitherapeute ne
                                                    s'occupe<br />
                                                    de vous.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import f from "../../services/function";

export default {
    name: "PatientDetails",
    props: {
        patient: Object,
    },
    data() {
        return {
            dashboardNotifications: null,
        };
    },
    methods: {
        getAge(dateString) {
            return f.generateAgeFromDateOfBirth(dateString);
        },
    },
    created() {},
};
</script>

<style lang="scss" scoped>
</style>
