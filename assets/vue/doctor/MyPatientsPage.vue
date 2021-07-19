<template>
    <div>
        <AddPatient
            :doctor="doctor"
            :addPatient="addPatient"
            :patients="allPatientsExceptDoctor"
            :createPatientForm="createPatientForm"
            :btnAddPatientForm="btnAddPatientForm"
        />
        <List
            :items="doctorPatients"
            :config="listConfigPatients"
            :btnAddItemForm="btnAddPrescriptionForm"
            :btnRemoveItemForm="btnRemovePatientForm"
            :doctor="doctor"
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
            addPatient: null,
            doctor: null,
            createPatientForm: null,
            btnAddPrescriptionForm: null,
            btnAddPatientForm: null,
            btnRemovePatientForm: null,
            allPatients: null,
            listConfigPatients: {
                target: "user",
                searchPlaceholder: "Filtrer par le nom et/ou prénom",
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
                                target: "prescription",
                                content: {
                                    class: "btn btn-primaki btn-xs lift lift-btn",
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

        this.addPatient = data.addPatient;
        this.doctor = data.doctor;
        this.createPatientForm = data.createPatientForm;
        this.btnAddPrescriptionForm = data.btnAddPrescriptionForm;
        this.btnAddPatientForm = data.btnAddPatientForm;
        this.btnRemovePatientForm = data.btnRemovePatientForm;
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
