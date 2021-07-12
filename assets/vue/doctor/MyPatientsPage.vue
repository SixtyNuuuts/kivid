<template>
    <div>
        <AddPatient
            :patients="allPatientsExceptDoctor"
            :createPatientForm="createPatientForm"
            :addPatientForm="addPatientForm"
        />
        <List
            :items="doctorPatients"
            :config="listConfigPatients"
            :removeItemForm="removePatientForm"
        />
    </div>
</template>

<script>
import AddPatient from "./components/AddPatient.vue";
import List from "./components/List.vue";

export default {
    name: "MyPatientsPage",
    components: {
        AddPatient,
        List,
    },
    data() {
        return {
            doctor: null,
            createPatientForm: null,
            addPatientForm: null,
            removePatientForm: null,
            allPatients: null,
            listConfigPatients: {
                target: "user",
                items: [
                    {
                        title: "Statut",
                        type: "status",
                        sort: true,
                        sortKey: "isVerified",
                    },
                    {
                        title: "Nom",
                        type: "user",
                        sort: true,
                        sortKey: "lastname",
                    },
                    {
                        title: "Email",
                        type: "email",
                        sort: true,
                        sortKey: "email",
                    },
                    {
                        title: "Age",
                        type: "birthdate",
                        sort: true,
                        sortKey: "birthdate",
                    },
                    {
                        title: null,
                        type: "actions",
                        sort: false,
                        sortKey: null,
                        buttons: [
                            {
                                type: "a",
                                content: {
                                    class: "btn btn-primaki btn-xs lift",
                                    href: "#!",
                                    icon: "fe fe-file-plus",
                                    text: "Prescrire une fiche",
                                },
                            },
                            {
                                type: "removeItem",
                                content: {
                                    icon: "fe fe-user-minus",
                                    tooltip: "Retirer de mes patients",
                                },
                            },
                        ],
                    },
                ],
                notFound: {
                    search: {
                        icon: "fe fe-user-minus",
                        message: "Aucun patient n'a été trouvé avec ",
                    },
                    noData: {
                        icon: "fe fe-user-minus",
                        message: "Vous n'avez aucun patient",
                    },
                },
            },
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.createPatientForm = data.createPatientForm;
        this.addPatientForm = data.addPatientForm;
        this.removePatientForm = data.removePatientForm;
        this.allPatients = data.allPatients;
    },
    computed: {
        doctorPatients() {
            return this.allPatients.filter((patient) => {
                if (patient.doctor) {
                    return this.doctor.id === patient.doctor.id;
                }
            });
        },
        allPatientsExceptDoctor() {
            return this.allPatients.filter((patient) => {
                return (
                    !patient.doctor ||
                    (patient.doctor ? this.doctor.id !== patient.doctor.id : "")
                );
            });
        },
    },
};
</script>

<style lang="scss">
</style>
