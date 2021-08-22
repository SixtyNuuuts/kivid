<template>
    <div id="vue">
        <PatientsList
            :doctor="doctor"
            :triggerAddPatient="triggerAddPatient"
            :doctorPatients="doctorPatients"
            :csrfTokenAddPatient="csrfTokenAddPatient"
            :csrfTokenRemovePatient="csrfTokenRemovePatient"
            :csrfTokenCreatePatient="csrfTokenCreatePatient"
        />
    </div>
</template>

<script>
import PatientsList from "./components/PatientsList.vue";

export default {
    name: "MyPatientsPage",
    components: {
        PatientsList,
    },
    data() {
        return {
            playerVars: {
                rel: 0,
                showinfo: 0,
                ecver: 2,
                modestbranding: 1,
            },
            triggerAddPatient: false,
            loadingDoctorPatientsList: null,
            doctor: null,
            doctorPatients: [],
            csrfTokenAddPatient: null,
            csrfTokenRemovePatient: null,
            csrfTokenCreatePatient: null,
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.triggerAddPatient =
            "true" === data.triggerAddPatient ? true : false;

        this.csrfTokenAddPatient = data.csrfTokenAddPatient;
        this.csrfTokenRemovePatient = data.csrfTokenRemovePatient;
        this.csrfTokenCreatePatient = data.csrfTokenCreatePatient;

        this.loadingDoctorPatientsList = this.$vs.loading({
            text: "chargement",
            type: "border",
        });

        this.axios
            .get(`/kine/${this.doctor.id}/get/patients`)
            .then((response) => {
                this.doctorPatients = response.data;

                this.loadingDoctorPatientsList.close();
                this.loadingDoctorPatientsList = null;
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data.detail);
                }

                this.loadingDoctorPatientsList.close();
                this.loadingDoctorPatientsList = null;
            });
    },
};
</script>
