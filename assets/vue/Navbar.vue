<template>
    <div></div>
</template>

<script>
import f from "./services/function";
import ClickOutside from "vue-click-outside";

export default {
    data() {
        return {
            currentUser: null,
            currentUserType: null,
            currentRoute: null,
            currentUserNotifications: [],
            homePath: null,
            loginPath: null,
            logoutPath: null,
            adminDashboardPath: null,
            patientDashboardRoute: null,
            patientDashboardPath: null,
            patientWorksheetsRoute: null,
            patientWorksheetsPath: null,
            patientEditPath: null,
            doctorDashboardPath: null,
            doctorDashboardRoute: null,
            doctorPatientsPath: null,
            doctorPatientsRoute: null,
            doctorWorksheetsPath: null,
            doctorWorksheetsRoute: null,
            doctorEditPath: null,
            showNotifications: false,
            csrfTokenReadNotification: null,
        };
    },
    directives: {
        ClickOutside,
    },
    computed: {
        notificationsNavbar() {
            return this.currentUserNotifications.filter(
                (n) => "dashboard" !== n.type
            );
        },
        notificationsNavbarCount() {
            return this.currentUserNotifications.filter(
                (n) => false === n.isViewed && "dashboard" !== n.type
            );
        },
    },
    methods: {
        getNotifications() {
            this.axios
                .get(
                    `/${this.currentUserType}/${this.currentUser.id}/get/notifications`
                )
                .then((response) => {
                    this.currentUserNotifications = response.data;
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response.data.detail);
                    }
                });
        },
        readNotifications() {
            this.axios
                .post(
                    `/${this.currentUserType}/${this.currentUser.id}/read/notifications`,
                    {
                        _token: this.csrfTokenReadNotification,
                    }
                )
                .then((response) => {
                    // console.log(response.data);
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response.data.detail);
                    }
                });
        },
        hideNotifications() {
            this.showNotifications = false;
        },
        timeForNotification(notificationDate) {
            return f.timeForNotification(notificationDate);
        },
        formatDate(datetime) {
            return f.formatDate(datetime);
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
    },
    created() {
        const data = JSON.parse(
            document.getElementById("navbar-vueData").innerHTML
        );

        this.currentUser = data.currentUser;
        this.currentRoute = data.currentRoute;
        this.currentUserType = this.currentUser.roles.includes("ROLE_PATIENT")
            ? "patient"
            : "doctor";
        this.adminDashboardPath = data.adminDashboardPath;
        this.homePath = data.homePath;
        this.loginPath = data.loginPath;
        this.logoutPath = data.logoutPath;
        this.patientDashboardPath = data.patientDashboardPath;
        this.patientDashboardRoute = data.patientDashboardRoute;
        this.patientWorksheetsPath = data.patientWorksheetsPath;
        this.patientWorksheetsRoute = data.patientWorksheetsRoute;
        this.patientEditPath = data.patientEditPath;
        this.doctorDashboardPath = data.doctorDashboardPath;
        this.doctorDashboardRoute = data.doctorDashboardRoute;
        this.doctorWorksheetsPath = data.doctorWorksheetsPath;
        this.doctorWorksheetsRoute = data.doctorWorksheetsRoute;
        this.doctorPatientsPath = data.doctorPatientsPath;
        this.doctorPatientsRoute = data.doctorPatientsRoute;
        this.doctorEditPath = data.doctorEditPath;
        this.csrfTokenReadNotification = data.csrfTokenReadNotification;

        this.getNotifications();
    },
};
</script>

<style lang="scss" scoped>
</style>