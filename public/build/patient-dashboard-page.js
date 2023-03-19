"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["patient-dashboard-page"],{

/***/ "./assets/vue/patient/dashboard-page.js":
/*!**********************************************!*\
  !*** ./assets/vue/patient/dashboard-page.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _DashboardPage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardPage.vue */ "./assets/vue/patient/DashboardPage.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.esm.min.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuesax */ "./node_modules/vuesax/dist/vuesax.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuesax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_ellipse_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-ellipse-progress */ "./node_modules/vue-ellipse-progress/dist/vue-ellipse-progress.umd.min.js");
/* harmony import */ var vue_ellipse_progress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_ellipse_progress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var chartist_plugin_tooltips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chartist-plugin-tooltips */ "./node_modules/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.js");
/* harmony import */ var chartist_plugin_tooltips__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chartist_plugin_tooltips__WEBPACK_IMPORTED_MODULE_6__);

 // Axios



vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_axios__WEBPACK_IMPORTED_MODULE_2__["default"], (axios__WEBPACK_IMPORTED_MODULE_1___default())); // Vuesax (UX lib)

 // Ellipse Progress Bar


vue__WEBPACK_IMPORTED_MODULE_3__["default"].use((vue_ellipse_progress__WEBPACK_IMPORTED_MODULE_5___default())); // Vue-Chartist
// + Plugin for tooltips


vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(__webpack_require__(/*! vue-chartist */ "./node_modules/vue-chartist/index.js"), {
  messageNoData: "Aucune donnée",
  classNoData: "empty"
});
new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
  render: function render(h) {
    return h(_DashboardPage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}).$mount('#vue');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_2__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    doctorSelected: [Object, null],
    errorMessage: [String, null]
  },
  directives: {
    ClickOutside: (vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default())
  },
  data: function data() {
    return {
      doctors: [],
      filter: "",
      selectBox: false,
      selectInput: null,
      loading: false
    };
  },
  computed: {
    getDoctors: function getDoctors() {
      return _services_function__WEBPACK_IMPORTED_MODULE_1__["default"].getSearch(this.doctors, this.filter);
    }
  },
  methods: {
    toggleSelectBox: function toggleSelectBox() {
      this.selectBox = !this.selectBox;

      if (this.doctorSelected) {
        this.resetSelect();
      }

      if (this.selectBox) {
        this.focusInputSelect();
      }
    },
    hideSelectBox: function hideSelectBox() {
      this.selectBox = false;
    },
    selectDoctor: function selectDoctor(doctor) {
      this.$emit("setDoctorSelected", doctor);
      this.hideSelectBox();
    },
    resetSelect: function resetSelect() {
      var _this = this;

      this.$emit("setDoctorSelected", null);
      setTimeout(function () {
        _this.selectInput = document.getElementById("doctor-choice-select");
        _this.selectBox = true;

        _this.focusInputSelect();
      }, 100);
    },
    focusInputSelect: function focusInputSelect() {
      this.selectInput.focus();
    },
    getUserName: function getUserName(user) {
      return _services_function__WEBPACK_IMPORTED_MODULE_1__["default"].getUserName(user);
    },
    selectBoxWithThrottle: function selectBoxWithThrottle() {
      var _this2 = this;

      if (!this.selectBoxThrottle) {
        this.selectBoxThrottle = true;
        this.selectBox = true;
        console.log("selectBox");
        setTimeout(function () {
          _this2.selectBoxThrottle = false;
        }, 1000);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.loading = true;
    this.axios.get("/get/doctors").then(function (response) {
      _this3.doctors = response.data;
      _this3.loading = false;
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data.detail ? error.response.data.detail : error.response.data);
      }
    });
    this.selectInput = document.getElementById("doctor-choice-select");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var _DashboardPage_DoctorChoice_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DashboardPage/DoctorChoice.vue */ "./assets/vue/patient/DashboardPage/DoctorChoice.vue");
/* harmony import */ var _DashboardPage_MyScores_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DashboardPage/MyScores.vue */ "./assets/vue/patient/DashboardPage/MyScores.vue");
/* harmony import */ var _DashboardPage_MyDashboardNotifications_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DashboardPage/MyDashboardNotifications.vue */ "./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue");
/* harmony import */ var _DashboardPage_MyWorksheets_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DashboardPage/MyWorksheets.vue */ "./assets/vue/patient/DashboardPage/MyWorksheets.vue");
/* harmony import */ var _DashboardPage_MyExerciseStats_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./DashboardPage/MyExerciseStats.vue */ "./assets/vue/patient/DashboardPage/MyExerciseStats.vue");
/* harmony import */ var _components_DoctorSelectBox_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/DoctorSelectBox.vue */ "./assets/vue/components/DoctorSelectBox.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DoctorChoice: _DashboardPage_DoctorChoice_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    MyScores: _DashboardPage_MyScores_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    MyDashboardNotifications: _DashboardPage_MyDashboardNotifications_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    MyWorksheets: _DashboardPage_MyWorksheets_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    MyExerciseStats: _DashboardPage_MyExerciseStats_vue__WEBPACK_IMPORTED_MODULE_20__["default"],
    DoctorSelectBox: _components_DoctorSelectBox_vue__WEBPACK_IMPORTED_MODULE_21__["default"]
  },
  data: function data() {
    return {
      patient: null,
      currentUser: null,
      doctorView: null,
      csrfTokenContact: null,
      csrfTokenSelectDoctor: null,
      csrfTokenAcceptDoctor: null,
      csrfTokenDeclineDoctor: null,
      myDBNotificationsContent: true,
      myScoresContent: true,
      myDoctorContent: true,
      myWorksheetsContent: true,
      loadingDoctor: false,
      loadingPatientWorksheets: false,
      patientWorksheets: [],
      modalChangeDoctor: false,
      doctorSelected: null,
      loadingChangeDoctor: false,
      patientHasNoDoctorChoice: false
    };
  },
  methods: {
    openModalChangeDoctor: function openModalChangeDoctor() {
      this.modalChangeDoctor = true;
      document.body.classList.add("no-scrollbar");
    },
    setPatientHasNoDoctorChoice: function setPatientHasNoDoctorChoice(patientHasNoDoctorChoice) {
      this.patientHasNoDoctorChoice = patientHasNoDoctorChoice;
    },
    closeModalChangeDoctor: function closeModalChangeDoctor() {
      this.modalChangeDoctor = false;
      this.doctorSelected = this.patient.doctor;
      document.body.classList.remove("no-scrollbar");
    },
    getTimeLeftBeforeNextSession: function getTimeLeftBeforeNextSession(endDateCurrentSession) {
      var timeLeft = _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].getTimeLeftBeforeNextSession(endDateCurrentSession);

      if (timeLeft.days >= 1) {
        return Math.round(timeLeft.days) === 1 ? "".concat(Math.round(timeLeft.days), " jour") : "".concat(Math.round(timeLeft.days), " jours");
      }

      if (timeLeft.hours >= 1) {
        return timeLeft.hours === 1 ? "".concat(Math.round(timeLeft.hours), " heure") : "".concat(Math.round(timeLeft.hours), " heures");
      }

      if (timeLeft.minutes >= 1) {
        return timeLeft.minutes === 1 ? "".concat(Math.round(timeLeft.minutes), " minute") : "".concat(Math.round(timeLeft.minutes), " minutes");
      }

      if (timeLeft.seconds >= 1) {
        return timeLeft.seconds === 1 ? "".concat(Math.round(timeLeft.seconds), " seconde") : "".concat(Math.round(timeLeft.seconds), " secondes");
      }

      return null;
    },
    calculWorksheetProgression: function calculWorksheetProgression(worksheet) {
      var progression = 0;

      if (worksheet.exercises.length) {
        var exercisePercentPart = 100 / worksheet.exercises.length;
        var exercisesCompletedCount = worksheet.exercises.filter(function (e) {
          return e.isCompleted;
        }).length;
        progression = exercisePercentPart * exercisesCompletedCount;
      }

      return progression;
    },
    getUserName: function getUserName(user) {
      return _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].getUserName(user);
    },
    onResize: function onResize() {
      if (window.innerWidth > 576) {
        this.myScoresContent = true;
        this.myDBNotificationsContent = true;
        this.myDoctorContent = true;
        this.myWorksheetsContent = true;
      }
    },
    getAge: function getAge(birthdate) {
      return _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].generateAgeFromDateOfBirth(birthdate);
    },
    rederictToDashboard: function rederictToDashboard() {
      document.location.href = "/doctor/".concat(this.currentUser.id, "/dashboard");
    },
    setDoctorSelected: function setDoctorSelected(doctorSelected) {
      this.doctorSelected = doctorSelected;
    },
    valideChangeDoctor: function valideChangeDoctor() {
      var _this = this;

      this.loadingChangeDoctor = true;
      this.axios.post("/patient/".concat(this.patient.id, "/select/doctor"), {
        _token: this.csrfTokenSelectDoctor,
        doctorId: this.doctorSelected.id
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].openSuccessNotification("Choix du praticien enregistré", response.data);
        _this.patient.addRequestDoctor = true;
        _this.patient.doctor = _this.doctorSelected;
        _this.modalChangeDoctor = false;
        _this.loadingChangeDoctor = false;
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _this.loadingChangeDoctor = false;
        _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].openErrorNotification("Erreur", errorMess);
      });
    }
  },
  created: function created() {
    var _this2 = this;

    vue__WEBPACK_IMPORTED_MODULE_22__["default"].prototype.$vs = this.$vs;
    document.body.classList.add("fuzzy-balls");
    window.addEventListener("resize", this.onResize);
    moment__WEBPACK_IMPORTED_MODULE_14___default().locale("fr-FR");
    var data = JSON.parse(document.getElementById("vueData").innerHTML);
    this.patient = data.patient;
    this.currentUser = data.currentUser;
    this.doctorView = data.doctorView;
    this.csrfTokenAcceptDoctor = data.csrfTokenAcceptDoctor;
    this.csrfTokenContact = data.csrfTokenContact;
    this.csrfTokenDeclineDoctor = data.csrfTokenDeclineDoctor;
    this.csrfTokenSelectDoctor = data.csrfTokenSelectDoctor;
    this.doctorSelected = this.patient.doctor;
    this.loadingPatientWorksheets = true;
    this.axios.get("/patient/".concat(this.patient.id, "/get/worksheets")).then(function (response) {
      _this2.patientWorksheets = response.data.map(function (worksheet) {
        return _objectSpread(_objectSpread({}, worksheet), {}, {
          worksheetProgression: _this2.calculWorksheetProgression(worksheet),
          timeLeftBeforeNextSession: null,
          totalWorksheetSessions: null,
          currentWorksheetSession: {}
        });
      });

      if (_this2.patientWorksheets.length) {
        _this2.patientWorksheets.forEach(function (worksheet) {
          _this2.axios.get("/patient/".concat(_this2.patient.id, "/get/current-worksheet-session/").concat(worksheet.id, "/time-left-before-next")).then(function (response) {
            worksheet.currentWorksheetSession = response.data.currentWorksheetSession;
            worksheet.countOldWorksheetSessions = response.data.countOldWorksheetSessions;

            if (response.data.currentWorksheetSession) {
              worksheet.timeLeftBeforeNextSession = _this2.getTimeLeftBeforeNextSession(response.data.currentWorksheetSession.endAt);
            }

            if (response.data.notifTimeLeft && !_this2.doctorView) {
              var userNotifList = document.getElementById("user-notif-list");
              var notifBell = document.getElementById("notif-bell");
              notifBell.classList.add("has-notifications");
              var li = document.createElement("li");
              li.classList.add("prio");
              li.classList.add("active");
              li.classList.add("clickable");
              li.addEventListener("mouseover", function () {
                li.classList.remove("active");
              }, false);
              li.addEventListener("click", function () {
                document.location.href = "/patient/".concat(_this2.patient.id, "/fiche/").concat(response.data.notifTimeLeft.worksheetId);
              }, false);
              var divIcon = document.createElement("div");
              divIcon.classList.add("notif-icon");
              var img = document.createElement("img");
              img.src = "/img/icons/colored/clock.svg";
              img.alt = "Icone d'une montre / horloge";
              img.classList.add("icon-clock");
              var p = document.createElement("p");
              var span = document.createElement("span");
              span.innerText = "Plus que quelques ".concat(response.data.notifTimeLeft.time, " pour r\xE9aliser vos exercices de \"").concat(response.data.notifTimeLeft.worksheet, "\", je m'y met maintenant !");
              p.appendChild(span);
              divIcon.appendChild(img);
              li.appendChild(divIcon);
              li.appendChild(p);
              userNotifList.appendChild(li);
            }

            _this2.axios.get("/patient/".concat(_this2.patient.id, "/get/total-worksheet-sessions/").concat(worksheet.id)).then(function (response) {
              worksheet.totalWorksheetSessions = response.data;
              _this2.loadingPatientWorksheets = false;
            }).catch(function (error) {
              var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
              console.error(errorMess);
            });
          }).catch(function (error) {
            var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
            console.error(errorMess);
          });
        });
      } else {
        _this2.loadingPatientWorksheets = false;
      }
    }).catch(function (error) {
      var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
      console.error(errorMess);
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var vue_phone_number_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-phone-number-input */ "./node_modules/vue-phone-number-input/dist/vue-phone-number-input.common.js");
/* harmony import */ var vue_phone_number_input__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_phone_number_input__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    patient: Object,
    csrfTokenSelectDoctor: String,
    csrfTokenContact: String
  },
  directives: {
    ClickOutside: (vue_click_outside__WEBPACK_IMPORTED_MODULE_11___default())
  },
  components: {
    VuePhoneNumberInput: (vue_phone_number_input__WEBPACK_IMPORTED_MODULE_12___default())
  },
  data: function data() {
    return {
      doctors: [],
      doctorSelected: null,
      filter: "",
      selectBox: false,
      selectInput: null,
      loading: false,
      footer: null,
      modalContact: false,
      btnLoadingValidContact: false,
      validationMessage: {
        email: null
      },
      contactTel: null,
      patientHasDoctorChoice: null
    };
  },
  computed: {
    getDoctors: function getDoctors() {
      return _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].getSearch(this.doctors, this.filter);
    },
    errorTel: function errorTel() {
      var error = false;

      if (this.contactTel && this.contactTel.length > 4) {
        var contactTelFormated = this.contactTel.replace(/ /g, "");
        var re = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

        if (!re.test(String(contactTelFormated))) {
          error = true;
        }
      }

      return error;
    }
  },
  methods: {
    valideDoctorChoice: function valideDoctorChoice() {
      var _this = this;

      if (this.doctorSelected) this.axios.post("/patient/".concat(this.patient.id, "/select/doctor"), {
        _token: this.csrfTokenSelectDoctor,
        doctorId: this.doctorSelected.id
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].openSuccessNotification("Choix du praticien enregistré", response.data);
        _this.patient.addRequestDoctor = true;
        _this.patient.doctor = _this.doctorSelected;

        _this.footer.classList.remove("hidden");
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].openErrorNotification("Erreur", errorMess);
      });
    },
    patientHasNoDoctorChoice: function patientHasNoDoctorChoice() {
      this.$emit("patientHasNoDoctorChoice", true);
    },
    toggleSelectBox: function toggleSelectBox() {
      this.selectBox = !this.selectBox;

      if (this.doctorSelected) {
        this.resetSelect();
      }

      if (this.selectBox) {
        this.focusInputSelect();
      }
    },
    hideSelectBox: function hideSelectBox() {
      this.selectBox = false;
    },
    selectDoctor: function selectDoctor(doctor) {
      this.doctorSelected = doctor;
      this.hideSelectBox();
    },
    resetSelect: function resetSelect() {
      var _this2 = this;

      this.doctorSelected = null;
      setTimeout(function () {
        _this2.selectInput = document.getElementById("doctor-choice-select");
        _this2.selectBox = true;

        _this2.focusInputSelect();
      }, 100);
    },
    focusInputSelect: function focusInputSelect() {
      this.selectInput.focus();
    },
    getUserName: function getUserName(user) {
      return _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].getUserName(user);
    },
    validContact: function validContact() {
      var _this3 = this;

      this.btnLoadingValidContact = true;
      this.axios.post("/contact", {
        _token: this.csrfTokenContact,
        firstname: this.patient.firstname,
        lastname: this.patient.lastname,
        email: this.patient.email.toLowerCase(),
        contactTel: this.contactTel
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].openSuccessNotification("Message envoyé", response.data);
        _this3.modalContact = false;
        _this3.btnLoadingValidContact = false;
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _this3.modalContact = false;
        _this3.btnLoadingValidContact = false;
        _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].openErrorNotification("Erreur", errorMess);
      });
    },
    validationEmail: function validationEmail() {
      this.validationMessage.email = null;
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(String(this.patient.email).toLowerCase())) {
        this.validationMessage.email = "Merci d'entrer un email valide.";
      }
    },
    selectBoxWithThrottle: function selectBoxWithThrottle() {
      var _this4 = this;

      if (!this.selectBoxThrottle) {
        this.selectBoxThrottle = true;
        this.selectBox = true;
        console.log("selectBox");
        setTimeout(function () {
          _this4.selectBoxThrottle = false;
        }, 1000);
      }
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    this.footer = document.querySelector(".footer");
    this.footer.classList.add("hidden");

    if (this.patient.firstname === null) {
      this.patient.firstname = "";
    }

    if (this.patient.lastname === null) {
      this.patient.lastname = "";
    }

    this.loading = true;
    this.axios.get("/patient/".concat(this.$parent.patient.id, "/get/doctors")).then(function (response) {
      _this5.doctors = response.data;
      _this5.loading = false;
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data.detail ? error.response.data.detail : error.response.data);
      }
    });
    this.selectInput = document.getElementById("doctor-choice-select");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/function */ "./assets/vue/services/function.js");










function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dashboardNotifications: [],
      actionInProgress: false,
      loading: false
    };
  },
  props: {
    patient: Object,
    csrfTokenAcceptDoctor: String,
    csrfTokenDeclineDoctor: String
  },
  computed: {
    getDashboardNotifications: function getDashboardNotifications() {
      return this.dashboardNotifications;
    }
  },
  methods: {
    getDBNotifications: function getDBNotifications() {
      var _this = this;

      this.loading = true;
      this.axios.get("/patient/".concat(this.patient.id, "/get/patient-dashboard-notifications")).then(function (response) {
        _this.dashboardNotifications = response.data;
        _this.loading = false;
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        console.error(errorMess);
      });
    },
    acceptDoctor: function acceptDoctor(notificationId) {
      var _this2 = this;

      this.actionInProgress = true;
      this.axios.post("/patient/".concat(this.patient.id, "/accept/doctor"), {
        _token: this.csrfTokenAcceptDoctor,
        notificationId: notificationId,
        doctorId: this.patient.doctor.id
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].openSuccessNotification("Demande d'ajout acceptée", response.data);
        _this2.patient.addRequestDoctor = true;

        _this2.dashboardNotifications.splice(_this2.dashboardNotifications.indexOf(_this2.dashboardNotifications.find(function (n) {
          return n.id === notificationId;
        })), 1);

        _this2.actionInProgress = false;
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].openErrorNotification("Erreur", errorMess);
        _this2.actionInProgress = false;
      });
    },
    declineDoctor: function declineDoctor(notificationId) {
      var _this3 = this;

      this.actionInProgress = true;
      this.axios.post("/patient/".concat(this.patient.id, "/decline/doctor"), {
        _token: this.csrfTokenDeclineDoctor,
        notificationId: notificationId,
        doctorId: this.patient.doctor.id
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].openSuccessNotification("Demande d'ajout refusée", response.data);

        _this3.dashboardNotifications.splice(_this3.dashboardNotifications.indexOf(_this3.dashboardNotifications.find(function (n) {
          return n.id === notificationId;
        })), 1);

        _this3.actionInProgress = false;
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].openErrorNotification("Erreur", errorMess);
        _this3.actionInProgress = false;
      });
    },
    resendVerifEmail: function resendVerifEmail() {
      var _this4 = this;

      this.actionInProgress = true;
      this.axios.get("/patient/".concat(this.patient.id, "/resend/verify-email")).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].openSuccessNotification("E-mail de vérification envoyé", response.data);
        _this4.actionInProgress = false;
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].openErrorNotification("Erreur", errorMess);
        _this4.actionInProgress = false;
      });
    }
  },
  created: function created() {
    this.getDBNotifications();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_BtnChartWorksheetPartOfBody_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/BtnChartWorksheetPartOfBody.vue */ "./assets/vue/components/BtnChartWorksheetPartOfBody.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    patient: Object,
    patientWorksheets: Array,
    loadingPatientWorksheets: Boolean,
    doctorView: Boolean
  },
  components: {
    BtnChartWorksheetPartOfBody: _components_BtnChartWorksheetPartOfBody_vue__WEBPACK_IMPORTED_MODULE_17__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      sensitivityUnitOfTime: "day",
      technicalUnitOfTime: "day",
      difficultyUnitOfTime: "day",
      chartOptions: {
        chartPadding: {
          right: 6
        },
        high: 10,
        low: 0,
        axisY: {
          showLabel: false,
          offset: 78
        },
        plugins: [this.$chartist.plugins.tooltip({
          anchorToPoint: true,
          appendToBody: true,
          tooltipFnc: function tooltipFnc(meta, value) {
            return meta;
          }
        })]
      },
      eventHandlers: [{
        event: "draw",
        fn: function fn(data) {
          if (data.type === "point") {
            var circle = new _this.$chartist.Svg("circle", {
              cx: [data.x],
              cy: [data.y],
              r: [8],
              "ct:meta": data.meta
            }, "ct-point");
            data.element.replace(circle).attr({
              transform: "translate(" + data.axisX.stepLength / 2 + ")"
            });
          }

          if (data.type === "line") {
            data.element.attr({
              transform: "translate(" + data.axisX.stepLength / 2 + ")"
            });
          }

          if (data.type === "grid" && data.index === 0) {
            data.element.attr({
              class: data.element.attr(" class") + " border-grid"
            });
          }
        }
      }],
      colors: ["#ff6838", "#ffa126", "#5c91e1", "#8f67d1", "#57cdbf", "#f17cd7", "#93d2a5", "#b24788", "#c1b79d", "#ff564b", "#fb8b68", "#ffcb46", "#3dc863", "#ff6838", "#ffa126", "#5c91e1", "#8f67d1", "#57cdbf", "#f17cd7", "#93d2a5", "#b24788", "#c1b79d", "#ff564b", "#fb8b68", "#ffcb46", "#3dc863"],
      iCoresspLine: {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j",
        10: "k",
        11: "l",
        12: "m",
        13: "n",
        14: "o"
      },
      disableWorksheets: {
        sensitivity: [],
        technical: [],
        difficulty: []
      }
    };
  },
  computed: {
    getPatientWorksheets: function getPatientWorksheets() {
      return this.sortByCreatedAt(this.patientWorksheets.filter(function (w) {
        return w.exerciseStats.length;
      }));
    },
    sensitivityExerciseStats: function sensitivityExerciseStats() {
      return this.generateExerciseStatsByCriterion("sensitivity");
    },
    sensitivityChartOptions: function sensitivityChartOptions() {
      return _objectSpread(_objectSpread({}, this.chartOptions), {}, {
        axisY: {
          showLabel: false,
          offset: 45
        }
      });
    },
    technicalExerciseStats: function technicalExerciseStats() {
      return this.generateExerciseStatsByCriterion("technical");
    },
    technicalChartOptions: function technicalChartOptions() {
      return _objectSpread(_objectSpread({}, this.chartOptions), {}, {
        seriesBarDistance: 13
      });
    },
    difficultyExerciseStats: function difficultyExerciseStats() {
      return this.generateExerciseStatsByCriterion("difficulty");
    },
    difficultyChartOptions: function difficultyChartOptions() {
      return _objectSpread({}, this.chartOptions);
    }
  },
  methods: {
    sortByCreatedAt: function sortByCreatedAt(array) {
      array.sort(function (a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
      return array;
    },
    generateExerciseStatsByCriterion: function generateExerciseStatsByCriterion(criterion) {
      var _this2 = this;

      var unitOfTime;

      if ("difficulty" === criterion) {
        unitOfTime = this.difficultyUnitOfTime;
      }

      if ("sensitivity" === criterion) {
        unitOfTime = this.sensitivityUnitOfTime;
      }

      if ("technical" === criterion) {
        unitOfTime = this.technicalUnitOfTime;
      }

      var exerciseStatsByUnitOfTime = this.filterExerciseStatsByUnitOfTime(this.getPatientWorksheets, unitOfTime);
      var labels = this.generateLabels(exerciseStatsByUnitOfTime);
      var labelsFormatedByUnitOfTime = this.formatLabelsByUnitOfTime(labels, unitOfTime);
      var dataSlice = this.getDataSlice(labels.length, unitOfTime);
      return {
        labels: labelsFormatedByUnitOfTime.filter(function (s, i) {
          return i >= dataSlice;
        }),
        series: exerciseStatsByUnitOfTime.map(function (w) {
          var exerciseStatsFormated = _this2.generateChartAverageDataPointsByCriterion(criterion, w.exerciseStats, labels, unitOfTime);

          var truncateTitle = w.title.length > 20 ? w.title.substring(0, 20) + "..." : w.title;
          return w = {
            name: "".concat(truncateTitle, " - ").concat(w.partOfBody.name),
            data: exerciseStatsFormated.filter(function (s, i) {
              return i >= dataSlice;
            })
          };
        })
      };
    },
    formatLabelsByUnitOfTime: function formatLabelsByUnitOfTime(labels, unitOfTime) {
      if ("day" === unitOfTime) {
        return labels.map(function (l) {
          return "".concat(l.split("-")[2], "/").concat(l.split("-")[1], "/").concat(l.split("-")[0]);
        });
      }

      if ("week" === unitOfTime) {
        return labels.map(function (l) {
          return "sem. ".concat(l.split("-")[2], "/").concat(l.split("-")[1], "/").concat(l.split("-")[0]);
        });
      }

      var months = {
        "01": "janv.",
        "02": "févr.",
        "03": "mars",
        "04": "avril",
        "05": "mai",
        "06": "juin",
        "07": "juill.",
        "08": "août",
        "09": "sept.",
        10: "oct.",
        11: "nov.",
        12: "déc."
      };

      if ("month" === unitOfTime) {
        return labels.map(function (l) {
          return "".concat(months[l.split("-")[1]], " ").concat(l.split("-")[0]);
        });
      }

      return labels;
    },
    generateLabels: function generateLabels(exerciseStatsByUnitOfTime) {
      var labels = [];
      exerciseStatsByUnitOfTime.forEach(function (w) {
        Object.keys(w.exerciseStats).forEach(function (date) {
          if (!labels.includes(date.split("|")[0])) {
            labels.push(date.split("|")[0]);
          }
        });
      });
      return labels.sort(function (a, b) {
        return new Date(a) - new Date(b);
      });
    },
    toggleHiddenWorksheetLine: function toggleHiddenWorksheetLine(criterion, i, worksheetId) {
      var line = document.querySelector("#".concat(criterion, " .ct-series-").concat(this.iCoresspLine[i]));
      line.classList.toggle("hidden");

      if (this.disableWorksheets[criterion].includes(worksheetId)) {
        this.disableWorksheets[criterion].splice(this.disableWorksheets[criterion].indexOf(worksheetId), 1);
      } else {
        this.disableWorksheets[criterion].push(worksheetId);
      }
    },
    changeSensitivityUnitOfTime: function changeSensitivityUnitOfTime(UnitOfTime) {
      this.sensitivityUnitOfTime = UnitOfTime;
      this.resetDisableWorksheets("sensitivity");
    },
    changeTechnicalUnitOfTime: function changeTechnicalUnitOfTime(UnitOfTime) {
      this.technicalUnitOfTime = UnitOfTime;
      this.resetDisableWorksheets("technical");
    },
    changeDifficultyUnitOfTime: function changeDifficultyUnitOfTime(UnitOfTime) {
      this.difficultyUnitOfTime = UnitOfTime;
      this.resetDisableWorksheets("difficulty");
    },
    resetDisableWorksheets: function resetDisableWorksheets(criterion) {
      this.disableWorksheets[criterion] = [];
    },
    generateChartAverageDataPointsByCriterion: function generateChartAverageDataPointsByCriterion(criterion, stats, labels, unitOfTime) {
      var chartDataPoints = [];
      labels.forEach(function (l) {
        chartDataPoints.push(null);
      });

      for (var date in stats) {
        var statsFiltered = stats[date].filter(function (s) {
          return criterion === s.criterion;
        });
        var statsAverage = Math.round(statsFiltered.reduce(function (r, s) {
          r = parseInt(r + s.rating);
          return r;
        }, []) / statsFiltered.length * 10) / 10;
        var dateSplit = date.split("|")[0];
        var ind = labels.indexOf(dateSplit);
        var pointDate = new Date(dateSplit);
        var textTooltip = "";

        if ("month" === unitOfTime) {
          textTooltip = moment__WEBPACK_IMPORTED_MODULE_18___default()(pointDate).format("MMM YYYY");
        }

        if ("year" === unitOfTime) {
          textTooltip = moment__WEBPACK_IMPORTED_MODULE_18___default()(pointDate).format("YYYY");
        }

        if ("day" === unitOfTime || "week" === unitOfTime) {
          textTooltip = moment__WEBPACK_IMPORTED_MODULE_18___default()(pointDate).format("DD/MM/YYYY");

          if ("week" === unitOfTime) {
            textTooltip = "sem. ".concat(textTooltip);
          }
        }

        chartDataPoints[ind] = {
          x: pointDate,
          y: statsAverage,
          meta: textTooltip
        };
      }

      return chartDataPoints;
    },
    groupStatsByDay: function groupStatsByDay(worksheets) {
      return worksheets.map(function (w) {
        return w = _objectSpread(_objectSpread({}, w), {}, {
          exerciseStats: w.exerciseStats.reduce(function (r, stat) {
            if (!r[stat.doneAt.substr(0, 10)]) {
              r[stat.doneAt.substr(0, 10)] = [stat];
            } else {
              r[stat.doneAt.substr(0, 10)].push(stat);
            }

            return r;
          }, {})
        });
      });
    },
    groupStatsByWeek: function groupStatsByWeek(worksheets) {
      return worksheets.map(function (w) {
        return w = _objectSpread(_objectSpread({}, w), {}, {
          exerciseStats: w.exerciseStats.reduce(function (r, stat, i) {
            var doneDate = new Date(stat.doneAt);
            var dayIndice = doneDate.getDay() === 0 ? 7 : doneDate.getDay();

            if (!Object.keys(r).find(function (g) {
              return g.includes(stat.doneAt.substr(0, 10));
            })) {
              var lastDayOfMonthDate = new Date(doneDate.getFullYear(), doneDate.getMonth() + 1, 0);
              var lastDayOfPrevMonthDate = new Date(doneDate.getFullYear(), doneDate.getMonth(), 0);
              var groupWeekName = "";
              var startWeekDay = doneDate.getDate() - (dayIndice - 1);
              var startWeekMonth = doneDate.getMonth() + 1;
              var startWeekYear = doneDate.getFullYear();

              if (startWeekDay < 1) {
                startWeekDay = lastDayOfPrevMonthDate.getDate() - Math.abs(startWeekDay);

                if (startWeekMonth > 1) {
                  startWeekMonth -= 1;
                } else {
                  startWeekMonth = 12;
                  startWeekYear -= 1;
                }

                lastDayOfMonthDate = lastDayOfPrevMonthDate;
              }

              for (var _i = 0; _i < 7; _i++) {
                var day = startWeekDay;
                var month = startWeekMonth;
                var year = startWeekYear;
                day += _i;

                if (day > lastDayOfMonthDate.getDate()) {
                  day -= lastDayOfMonthDate.getDate();

                  if (month < 12) {
                    month += 1;
                  } else {
                    month = 1;
                    year += 1;
                  }
                }

                if (day > 0 && day < 10) {
                  day = "0".concat(day);
                } else {
                  day = "".concat(day);
                }

                if (month > 0 && month < 10) {
                  month = "0".concat(month);
                } else {
                  month = "".concat(month);
                }

                groupWeekName += "".concat(year, "-").concat(month, "-").concat(day);

                if (6 != _i) {
                  groupWeekName += "|";
                }
              }

              if (!r[groupWeekName]) {
                r[groupWeekName] = [];
              }
            }

            r[Object.keys(r).find(function (g) {
              return g.includes(stat.doneAt.substr(0, 10));
            })].push(stat);
            return r;
          }, {})
        });
      });
    },
    groupStatsByMonth: function groupStatsByMonth(worksheets) {
      return worksheets.map(function (w) {
        return w = _objectSpread(_objectSpread({}, w), {}, {
          exerciseStats: w.exerciseStats.reduce(function (r, stat, i) {
            if (!r[stat.doneAt.substr(0, 7)]) {
              r[stat.doneAt.substr(0, 7)] = [stat];
            } else {
              r[stat.doneAt.substr(0, 7)].push(stat);
            }

            return r;
          }, {})
        });
      });
    },
    groupStatsByYear: function groupStatsByYear(worksheets) {
      return worksheets.map(function (w) {
        return w = _objectSpread(_objectSpread({}, w), {}, {
          exerciseStats: w.exerciseStats.reduce(function (r, stat, i) {
            if (!r[stat.doneAt.substr(0, 4)]) {
              r[stat.doneAt.substr(0, 4)] = [stat];
            } else {
              r[stat.doneAt.substr(0, 4)].push(stat);
            }

            return r;
          }, {})
        });
      });
    },
    sortByDoneDate: function sortByDoneDate(stats) {
      stats.sort(function (a, b) {
        return new Date(a.doneAt) - new Date(b.doneAt);
      });
      return stats;
    },
    getDataSlice: function getDataSlice(total, unitOfTime) {
      var dataSlice = 0;

      if ("day" === unitOfTime) {
        dataSlice = total - 31;
      }

      if ("week" === unitOfTime) {
        dataSlice = total - 12;
      }

      return dataSlice;
    },
    filterExerciseStatsByUnitOfTime: function filterExerciseStatsByUnitOfTime(worksheets, unitOfTime) {
      var exerciseStatsByUnitOfTime = [];

      if ("day" === unitOfTime) {
        exerciseStatsByUnitOfTime = this.groupStatsByDay(worksheets);
      }

      if ("week" === unitOfTime) {
        exerciseStatsByUnitOfTime = this.groupStatsByWeek(worksheets);
      }

      if ("month" === unitOfTime) {
        exerciseStatsByUnitOfTime = this.groupStatsByMonth(worksheets);
      }

      if ("year" === unitOfTime) {
        exerciseStatsByUnitOfTime = this.groupStatsByYear(worksheets);
      }

      return exerciseStatsByUnitOfTime;
    },
    sensitivityFormatDateByUnitOfTime: function sensitivityFormatDateByUnitOfTime(value) {
      if ("day" === this.sensitivityUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("DD/MM/YYYY");
      }

      if ("week" === this.sensitivityUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("DD/MM/YYYY");
      }

      if ("month" === this.sensitivityUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("MMM YYYY");
      }

      if ("year" === this.sensitivityUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("YYYY");
      }
    },
    technicalFormatDateByUnitOfTime: function technicalFormatDateByUnitOfTime(value) {
      if ("day" === this.technicalUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("DD/MM/YYYY");
      }

      if ("week" === this.technicalUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("DD/MM/YYYY");
      }

      if ("month" === this.technicalUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("MMM YYYY");
      }

      if ("year" === this.technicalUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("YYYY");
      }
    },
    difficultyFormatDateByUnitOfTime: function difficultyFormatDateByUnitOfTime(value) {
      if ("day" === this.difficultyUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("DD/MM/YYYY");
      }

      if ("week" === this.difficultyUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("DD/MM/YYYY");
      }

      if ("month" === this.difficultyUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("MMM YYYY");
      }

      if ("year" === this.difficultyUnitOfTime) {
        return moment__WEBPACK_IMPORTED_MODULE_18___default()(value).format("YYYY");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.math.sign.js */ "./node_modules/core-js/modules/es.math.sign.js");
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var _MyScores_ScoreRankBlock_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./MyScores/ScoreRankBlock.vue */ "./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    patient: Object,
    patientWorksheets: Array,
    loadingPatientWorksheets: Boolean,
    doctorView: Boolean
  },
  components: {
    ScoreRankBlock: _MyScores_ScoreRankBlock_vue__WEBPACK_IMPORTED_MODULE_20__["default"]
  },
  data: function data() {
    return {
      loading: false,
      score: 0,
      scoreMax: 5000,
      options: {
        color: "#FF6332",
        "empty-color": "#ffc6b5",
        size: 130,
        thickness: 5,
        "empty-thickness": 3,
        "line-mode": "out 5",
        animation: "rs 700 1000",
        legend: false
      },
      sensitivityLastStatsAverageForSmiley: null
    };
  },
  computed: {
    getScore: function getScore() {
      return this.score;
    },
    getScorePercentage: function getScorePercentage() {
      if (this.score > 0) {
        var scorePercentage = this.score * 100 / this.scoreMax;

        if (scorePercentage > 100) {
          scorePercentage = 100;
        }

        return scorePercentage > 1 ? scorePercentage : 1;
      }

      return 1;
    },
    getRank: function getRank() {
      if (this.score >= 0 && this.score < 1000) {
        return "nouveau";
      }

      if (this.score >= 1000 && this.score < 2000) {
        return "debutant";
      }

      if (this.score >= 2000 && this.score < 3000) {
        return "amateur";
      }

      if (this.score >= 3000 && this.score < 4000) {
        return "intermediaire";
      }

      if (this.score >= 4000 && this.score < 5000) {
        return "confirme";
      }

      if (this.score >= 5000) {
        return "expert";
      }
    },
    getTotalExerciseCompleted: function getTotalExerciseCompleted() {
      var countExerciseCompleted = 0;
      this.patientWorksheets.forEach(function (w) {
        // Exercices complétés de la session en cours
        if (w.worksheetProgression > 0 && w.worksheetProgression < 100) {
          countExerciseCompleted += w.exercises.filter(function (e) {
            return e.isCompleted;
          }).length;
        } // Exercices complétés des précédentes sessions terminées
        // On utilise les stats pour déterminer le nombre d'exercices complétés
        //// Cet hack est fait pour voir si les stats sont postérieures (après) au "2022-04-02"
        //// car c'est à partir du 3 avril 2022 que les stats ont changées pour être des stats de session (1)
        //// et non des stats d'exercices (x*nb ex)


        var statsIsSessionStats = w.exerciseStats.find(function (s) {
          return s.doneAt.substring(0, 10) > "2022-04-02";
        }); // le divisé par 3 est appliqué car les stats sont dispatchées en : Sensibilité / Technique / Difficulté

        if (statsIsSessionStats) {
          countExerciseCompleted += Math.floor(w.exerciseStats.length * w.exercises.length / 3);
        } else {
          countExerciseCompleted += Math.floor(w.exerciseStats.length / 3);
        }
      });
      return this.formatNumbThousand(countExerciseCompleted);
    },
    getSensitivityVariation: function getSensitivityVariation() {
      return this.calculVariation("sensitivity");
    },
    getTechnicalVariation: function getTechnicalVariation() {
      return this.calculVariation("technical");
    },
    getSensitivitySmiley: function getSensitivitySmiley() {
      var sensitivitySmileys = {
        0: {
          src: __webpack_require__(/*! ../../../img/icons/smiley/46.svg */ "./assets/img/icons/smiley/46.svg"),
          alt: "Smiley qui va très mal"
        },
        1.25: {
          src: __webpack_require__(/*! ../../../img/icons/smiley/47.svg */ "./assets/img/icons/smiley/47.svg"),
          alt: "Smiley qui va mal"
        },
        2.5: {
          src: __webpack_require__(/*! ../../../img/icons/smiley/48.svg */ "./assets/img/icons/smiley/48.svg"),
          alt: "Smiley qui va pas bien"
        },
        3.75: {
          src: __webpack_require__(/*! ../../../img/icons/smiley/49.svg */ "./assets/img/icons/smiley/49.svg"),
          alt: "Smiley qui va bof"
        },
        5: {
          src: __webpack_require__(/*! ../../../img/icons/smiley/50.svg */ "./assets/img/icons/smiley/50.svg"),
          alt: "Smiley perplexe"
        },
        6.25: {
          src: __webpack_require__(/*! ../../../img/icons/smiley/51.svg */ "./assets/img/icons/smiley/51.svg"),
          alt: "Smiley qui va bien"
        },
        7.5: {
          src: __webpack_require__(/*! ../../../img/icons/smiley/52.svg */ "./assets/img/icons/smiley/52.svg"),
          alt: "Smiley qui va très bien"
        },
        8.75: {
          src: __webpack_require__(/*! ../../../img/icons/smiley/53.svg */ "./assets/img/icons/smiley/53.svg"),
          alt: "Smiley très content"
        },
        10: {
          src: __webpack_require__(/*! ../../../img/icons/smiley/54.svg */ "./assets/img/icons/smiley/54.svg"),
          alt: "Smiley aux anges"
        }
      };
      var smiley = null;

      if (this.sensitivityLastStatsAverageForSmiley) {
        if (this.sensitivityLastStatsAverageForSmiley >= 0 && this.sensitivityLastStatsAverageForSmiley < 1.25) {
          smiley = sensitivitySmileys["0"];
        }

        if (this.sensitivityLastStatsAverageForSmiley >= 1.25 && this.sensitivityLastStatsAverageForSmiley < 2.5) {
          smiley = sensitivitySmileys["1.25"];
        }

        if (this.sensitivityLastStatsAverageForSmiley >= 2.5 && this.sensitivityLastStatsAverageForSmiley < 3.75) {
          smiley = sensitivitySmileys["2.5"];
        }

        if (this.sensitivityLastStatsAverageForSmiley >= 3.75 && this.sensitivityLastStatsAverageForSmiley < 5) {
          smiley = sensitivitySmileys["3.75"];
        }

        if (this.sensitivityLastStatsAverageForSmiley >= 5 && this.sensitivityLastStatsAverageForSmiley < 6.25) {
          smiley = sensitivitySmileys["5"];
        }

        if (this.sensitivityLastStatsAverageForSmiley >= 6.25 && this.sensitivityLastStatsAverageForSmiley < 7.5) {
          smiley = sensitivitySmileys["6.25"];
        }

        if (this.sensitivityLastStatsAverageForSmiley >= 7.5 && this.sensitivityLastStatsAverageForSmiley < 8.75) {
          smiley = sensitivitySmileys["7.5"];
        }

        if (this.sensitivityLastStatsAverageForSmiley >= 8.75 && this.sensitivityLastStatsAverageForSmiley < 10) {
          smiley = sensitivitySmileys["8.75"];
        }

        if (this.sensitivityLastStatsAverageForSmiley >= 10) {
          smiley = sensitivitySmileys["10"];
        }
      }

      return smiley;
    }
  },
  methods: {
    calculVariation: function calculVariation(criterion) {
      var stats = [];
      this.patientWorksheets.forEach(function (w) {
        stats = [].concat(_toConsumableArray(stats), _toConsumableArray(w.exerciseStats.filter(function (es) {
          return es.criterion === criterion;
        })));
      });
      var variationSlice = 1; // if (stats.length < 6) {
      //     variationSlice = 1;
      // }

      var result = 0;

      if (stats.length > variationSlice) {
        var lastStats = stats.sort(function (a, b) {
          return new Date(a.doneAt) - new Date(b.doneAt);
        }).filter(function (es, i) {
          return i > stats.length - 1 - variationSlice;
        });
        var lastStatsAverage = this.statsAverage(lastStats);

        if (!lastStats.length) {
          return null;
        }

        if ("sensitivity" === criterion) {
          // this.sensitivityLastStatsAverageForSmiley =
          //     this.statsAverage(stats);
          this.sensitivityLastStatsAverageForSmiley = lastStatsAverage;
        }

        var oldStats = stats.sort(function (a, b) {
          return new Date(a.doneAt) - new Date(b.doneAt);
        }).filter(function (es, i) {
          return i <= stats.length - 1 - variationSlice;
        });
        var oldStatsAverage = this.statsAverage(oldStats);
        result = Math.round((lastStatsAverage - oldStatsAverage) / oldStatsAverage * 100);
      } else {
        return null;
      }

      return {
        variation: result === 0 ? "equal" : Math.sign(result) === 1 ? "up" : "down",
        result: result
      };
    },
    formatNumbThousand: function formatNumbThousand(score) {
      return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    statsAverage: function statsAverage(stats) {
      return Math.round(stats.reduce(function (r, s) {
        r += s.rating;
        return r;
      }, 0) / stats.length * 10) / 10;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.loading = true;
    this.axios.get("/patient/".concat(this.patient.id, "/get/score")).then(function (response) {
      _this.score = response.data.score ? response.data.score : 0;

      if (response.data.notifScoreRank && !_this.doctorView) {
        var userNotifList = document.getElementById("user-notif-list");
        var notifBell = document.getElementById("notif-bell");
        notifBell.classList.add("has-notifications");
        var li = document.createElement("li");
        li.classList.add("prio");
        li.classList.add("active");
        li.addEventListener("mouseover", function () {
          li.classList.remove("active");
        }, false);
        var divIcon = document.createElement("div");
        divIcon.classList.add("notif-icon");
        var img = document.createElement("img");
        img.src = "/img/icons/colored/confettis.svg";
        img.alt = "Icone de confettis";
        img.classList.add("icon-confettis");
        var p = document.createElement("p");
        var span = document.createElement("span");
        span.innerText = "Vous avez atteint le niveau ".concat(response.data.notifScoreRank, " ! F\xE9licitations !");
        p.appendChild(span);
        divIcon.appendChild(img);
        li.appendChild(divIcon);
        li.appendChild(p);
        userNotifList.appendChild(li);
      }

      _this.loading = false;
    }).catch(function (error) {
      var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
      console.error(errorMess);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    rank: String,
    loading: Boolean,
    doctorView: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var _components_TagPartOfBody_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TagPartOfBody.vue */ "./assets/vue/components/TagPartOfBody.vue");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    patient: Object,
    patientWorksheets: Array,
    loadingPatientWorksheets: Boolean,
    doctorView: Boolean,
    doctor: Object
  },
  components: {
    TagPartOfBody: _components_TagPartOfBody_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      redirectInProgress: null
    };
  },
  computed: {
    getPatientWorksheets: function getPatientWorksheets() {
      return this.sortByCreatedAt(this.patientWorksheets);
    }
  },
  methods: {
    sortByCreatedAt: function sortByCreatedAt(array) {
      array.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      return array;
    },
    redirectToWorksheetPage: function redirectToWorksheetPage(worksheetId) {
      this.redirectInProgress = worksheetId;
      document.location.href = "/patient/".concat(this.patient.id, "/fiche/").concat(worksheetId);
    },
    redirectToDoctorView: function redirectToDoctorView(worksheetId) {
      this.redirectInProgress = worksheetId;
      document.location.href = "/doctor/".concat(this.doctor.id, "/voir/").concat(worksheetId, "/").concat(this.patient.id, "/?ref=dashp");
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage.vue?vue&type=style&index=0&id=2bc8e05c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage.vue?vue&type=style&index=0&id=2bc8e05c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=style&index=0&id=80c26604&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=style&index=0&id=80c26604&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=style&index=0&id=2a90fada&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=style&index=0&id=2a90fada&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=style&index=0&id=2ea27674&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=style&index=0&id=2ea27674&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/vue/components/DoctorSelectBox.vue":
/*!***************************************************!*\
  !*** ./assets/vue/components/DoctorSelectBox.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoctorSelectBox_vue_vue_type_template_id_ecc3a164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoctorSelectBox.vue?vue&type=template&id=ecc3a164& */ "./assets/vue/components/DoctorSelectBox.vue?vue&type=template&id=ecc3a164&");
/* harmony import */ var _DoctorSelectBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoctorSelectBox.vue?vue&type=script&lang=js& */ "./assets/vue/components/DoctorSelectBox.vue?vue&type=script&lang=js&");
/* harmony import */ var _DoctorSelectBox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DoctorSelectBox.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DoctorSelectBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DoctorSelectBox_vue_vue_type_template_id_ecc3a164___WEBPACK_IMPORTED_MODULE_0__.render,
  _DoctorSelectBox_vue_vue_type_template_id_ecc3a164___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/components/DoctorSelectBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/patient/DashboardPage.vue":
/*!**********************************************!*\
  !*** ./assets/vue/patient/DashboardPage.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardPage_vue_vue_type_template_id_2bc8e05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=template&id=2bc8e05c&scoped=true& */ "./assets/vue/patient/DashboardPage.vue?vue&type=template&id=2bc8e05c&scoped=true&");
/* harmony import */ var _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=script&lang=js& */ "./assets/vue/patient/DashboardPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _DashboardPage_vue_vue_type_style_index_0_id_2bc8e05c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=style&index=0&id=2bc8e05c&lang=scss&scoped=true& */ "./assets/vue/patient/DashboardPage.vue?vue&type=style&index=0&id=2bc8e05c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardPage_vue_vue_type_template_id_2bc8e05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashboardPage_vue_vue_type_template_id_2bc8e05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2bc8e05c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/patient/DashboardPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/DoctorChoice.vue":
/*!***********************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/DoctorChoice.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoctorChoice_vue_vue_type_template_id_768a218d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoctorChoice.vue?vue&type=template&id=768a218d& */ "./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=template&id=768a218d&");
/* harmony import */ var _DoctorChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoctorChoice.vue?vue&type=script&lang=js& */ "./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _DoctorChoice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DoctorChoice.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DoctorChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DoctorChoice_vue_vue_type_template_id_768a218d___WEBPACK_IMPORTED_MODULE_0__.render,
  _DoctorChoice_vue_vue_type_template_id_768a218d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/patient/DashboardPage/DoctorChoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue":
/*!***********************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyDashboardNotifications_vue_vue_type_template_id_59f52ded___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyDashboardNotifications.vue?vue&type=template&id=59f52ded& */ "./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=59f52ded&");
/* harmony import */ var _MyDashboardNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyDashboardNotifications.vue?vue&type=script&lang=js& */ "./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js&");
/* harmony import */ var _MyDashboardNotifications_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyDashboardNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyDashboardNotifications_vue_vue_type_template_id_59f52ded___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyDashboardNotifications_vue_vue_type_template_id_59f52ded___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/patient/DashboardPage/MyDashboardNotifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyExerciseStats.vue":
/*!**************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyExerciseStats.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyExerciseStats_vue_vue_type_template_id_80c26604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyExerciseStats.vue?vue&type=template&id=80c26604&scoped=true& */ "./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=template&id=80c26604&scoped=true&");
/* harmony import */ var _MyExerciseStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyExerciseStats.vue?vue&type=script&lang=js& */ "./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=script&lang=js&");
/* harmony import */ var _MyExerciseStats_vue_vue_type_style_index_0_id_80c26604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyExerciseStats.vue?vue&type=style&index=0&id=80c26604&lang=scss&scoped=true& */ "./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=style&index=0&id=80c26604&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyExerciseStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyExerciseStats_vue_vue_type_template_id_80c26604_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyExerciseStats_vue_vue_type_template_id_80c26604_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "80c26604",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/patient/DashboardPage/MyExerciseStats.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyScores.vue":
/*!*******************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyScores.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyScores_vue_vue_type_template_id_2a90fada_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyScores.vue?vue&type=template&id=2a90fada&scoped=true& */ "./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=template&id=2a90fada&scoped=true&");
/* harmony import */ var _MyScores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyScores.vue?vue&type=script&lang=js& */ "./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=script&lang=js&");
/* harmony import */ var _MyScores_vue_vue_type_style_index_0_id_2a90fada_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyScores.vue?vue&type=style&index=0&id=2a90fada&lang=scss&scoped=true& */ "./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=style&index=0&id=2a90fada&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyScores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyScores_vue_vue_type_template_id_2a90fada_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyScores_vue_vue_type_template_id_2a90fada_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2a90fada",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/patient/DashboardPage/MyScores.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue":
/*!**********************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScoreRankBlock_vue_vue_type_template_id_2ea27674_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScoreRankBlock.vue?vue&type=template&id=2ea27674&scoped=true& */ "./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=template&id=2ea27674&scoped=true&");
/* harmony import */ var _ScoreRankBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoreRankBlock.vue?vue&type=script&lang=js& */ "./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=script&lang=js&");
/* harmony import */ var _ScoreRankBlock_vue_vue_type_style_index_0_id_2ea27674_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScoreRankBlock.vue?vue&type=style&index=0&id=2ea27674&lang=scss&scoped=true& */ "./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=style&index=0&id=2ea27674&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScoreRankBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScoreRankBlock_vue_vue_type_template_id_2ea27674_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ScoreRankBlock_vue_vue_type_template_id_2ea27674_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2ea27674",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyWorksheets.vue":
/*!***********************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyWorksheets.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyWorksheets_vue_vue_type_template_id_93767d04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyWorksheets.vue?vue&type=template&id=93767d04& */ "./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=template&id=93767d04&");
/* harmony import */ var _MyWorksheets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyWorksheets.vue?vue&type=script&lang=js& */ "./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyWorksheets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyWorksheets_vue_vue_type_template_id_93767d04___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyWorksheets_vue_vue_type_template_id_93767d04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/patient/DashboardPage/MyWorksheets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/components/DoctorSelectBox.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./assets/vue/components/DoctorSelectBox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorSelectBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoctorSelectBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorSelectBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/patient/DashboardPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoctorChoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyDashboardNotifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyExerciseStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyExerciseStats.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyExerciseStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyScores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyScores.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyScores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoreRankBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScoreRankBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoreRankBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyWorksheets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorSelectBox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoctorSelectBox.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage.vue?vue&type=style&index=0&id=2bc8e05c&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage.vue?vue&type=style&index=0&id=2bc8e05c&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_style_index_0_id_2bc8e05c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardPage.vue?vue&type=style&index=0&id=2bc8e05c&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage.vue?vue&type=style&index=0&id=2bc8e05c&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorChoice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoctorChoice.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=style&index=0&id=80c26604&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=style&index=0&id=80c26604&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyExerciseStats_vue_vue_type_style_index_0_id_80c26604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyExerciseStats.vue?vue&type=style&index=0&id=80c26604&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=style&index=0&id=80c26604&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=style&index=0&id=2a90fada&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=style&index=0&id=2a90fada&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyScores_vue_vue_type_style_index_0_id_2a90fada_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyScores.vue?vue&type=style&index=0&id=2a90fada&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=style&index=0&id=2a90fada&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=style&index=0&id=2ea27674&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=style&index=0&id=2ea27674&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoreRankBlock_vue_vue_type_style_index_0_id_2ea27674_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScoreRankBlock.vue?vue&type=style&index=0&id=2ea27674&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=style&index=0&id=2ea27674&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/vue/components/DoctorSelectBox.vue?vue&type=template&id=ecc3a164&":
/*!**********************************************************************************!*\
  !*** ./assets/vue/components/DoctorSelectBox.vue?vue&type=template&id=ecc3a164& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorSelectBox_vue_vue_type_template_id_ecc3a164___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorSelectBox_vue_vue_type_template_id_ecc3a164___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorSelectBox_vue_vue_type_template_id_ecc3a164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoctorSelectBox.vue?vue&type=template&id=ecc3a164& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=template&id=ecc3a164&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage.vue?vue&type=template&id=2bc8e05c&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage.vue?vue&type=template&id=2bc8e05c&scoped=true& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_2bc8e05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_2bc8e05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_2bc8e05c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardPage.vue?vue&type=template&id=2bc8e05c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage.vue?vue&type=template&id=2bc8e05c&scoped=true&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=template&id=768a218d&":
/*!******************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=template&id=768a218d& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorChoice_vue_vue_type_template_id_768a218d___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorChoice_vue_vue_type_template_id_768a218d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorChoice_vue_vue_type_template_id_768a218d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoctorChoice.vue?vue&type=template&id=768a218d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=template&id=768a218d&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=59f52ded&":
/*!******************************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=59f52ded& ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_template_id_59f52ded___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_template_id_59f52ded___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_template_id_59f52ded___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyDashboardNotifications.vue?vue&type=template&id=59f52ded& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=59f52ded&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=template&id=80c26604&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=template&id=80c26604&scoped=true& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyExerciseStats_vue_vue_type_template_id_80c26604_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyExerciseStats_vue_vue_type_template_id_80c26604_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyExerciseStats_vue_vue_type_template_id_80c26604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyExerciseStats.vue?vue&type=template&id=80c26604&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=template&id=80c26604&scoped=true&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=template&id=2a90fada&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=template&id=2a90fada&scoped=true& ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyScores_vue_vue_type_template_id_2a90fada_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyScores_vue_vue_type_template_id_2a90fada_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyScores_vue_vue_type_template_id_2a90fada_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyScores.vue?vue&type=template&id=2a90fada&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=template&id=2a90fada&scoped=true&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=template&id=2ea27674&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=template&id=2ea27674&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoreRankBlock_vue_vue_type_template_id_2ea27674_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoreRankBlock_vue_vue_type_template_id_2ea27674_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoreRankBlock_vue_vue_type_template_id_2ea27674_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScoreRankBlock.vue?vue&type=template&id=2ea27674&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=template&id=2ea27674&scoped=true&");


/***/ }),

/***/ "./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=template&id=93767d04&":
/*!******************************************************************************************!*\
  !*** ./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=template&id=93767d04& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheets_vue_vue_type_template_id_93767d04___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheets_vue_vue_type_template_id_93767d04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheets_vue_vue_type_template_id_93767d04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyWorksheets.vue?vue&type=template&id=93767d04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=template&id=93767d04&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=template&id=ecc3a164&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=template&id=ecc3a164& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.hideSelectBox,
          expression: "hideSelectBox"
        }
      ],
      staticClass: "select-filter",
      class: { loading: _vm.loading }
    },
    [
      !_vm.loading
        ? _c(
            "div",
            [
              _vm.doctorSelected
                ? _c(
                    "div",
                    {
                      staticClass: "doctor-selected doctor",
                      on: { click: _vm.resetSelect }
                    },
                    [
                      _c(
                        "vs-avatar",
                        {
                          staticClass: "avatar",
                          attrs: { circle: "", size: "30" }
                        },
                        [
                          _c("img", {
                            attrs: {
                              src: _vm.doctorSelected.avatarUrl
                                ? _vm.doctorSelected.avatarUrl
                                : "/img/avatar-default.svg",
                              alt:
                                "Avatar de " +
                                _vm.doctorSelected.firstname +
                                " " +
                                _vm.doctorSelected.lastname
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "name" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.getUserName(_vm.doctorSelected)) +
                            "\n            "
                        )
                      ])
                    ],
                    1
                  )
                : _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.filter,
                        expression: "filter"
                      }
                    ],
                    class: {
                      "b-r-b-zero": _vm.selectBox,
                      "placeholder-gray": _vm.selectBox
                    },
                    attrs: {
                      id: "doctor-choice-select",
                      placeholder: !_vm.selectBox
                        ? "Sélectionnez votre praticien"
                        : "Recherchez votre praticien",
                      autocomplete: "off"
                    },
                    domProps: { value: _vm.filter },
                    on: {
                      click: function($event) {
                        _vm.selectBox = true
                      },
                      keyup: _vm.selectBoxWithThrottle,
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.filter = $event.target.value
                      }
                    }
                  }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "arrow-toggle-box",
                  class: { active: _vm.selectBox },
                  on: { click: _vm.toggleSelectBox }
                },
                [_c("i", { staticClass: "vs-icon-arrow" })]
              ),
              _vm._v(" "),
              _c("transition", { attrs: { name: "height" } }, [
                _vm.selectBox
                  ? _c(
                      "div",
                      {
                        staticClass: "select-box",
                        on: { click: _vm.focusInputSelect }
                      },
                      [
                        _vm.getDoctors.length
                          ? _c(
                              "ul",
                              _vm._l(_vm.getDoctors, function(doctor, i) {
                                return _c("li", { key: i }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "doctor",
                                      on: {
                                        click: function($event) {
                                          return _vm.selectDoctor(doctor)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "vs-avatar",
                                        {
                                          staticClass: "avatar",
                                          attrs: { circle: "", size: "35" }
                                        },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src: doctor.avatarUrl
                                                ? doctor.avatarUrl
                                                : "/img/avatar-default.svg",
                                              alt:
                                                "Avatar de " +
                                                doctor.firstname +
                                                " " +
                                                doctor.lastname
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "name" }, [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(_vm.getUserName(doctor)) +
                                            "\n                            "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ])
                              }),
                              0
                            )
                          : _c("div", [
                              _c("p", { staticClass: "not-found" }, [
                                _c("i", { staticClass: "fas fa-users-slash" }),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    "\n                            Aucun praticien n'a été trouvé avec \""
                                  ),
                                  _c("strong", [_vm._v(_vm._s(_vm.filter))]),
                                  _vm._v('"')
                                ])
                              ])
                            ])
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm.errorMessage && !_vm.doctorSelected
                ? _c("div", { staticClass: "empty-error-mess" }, [
                    _vm._v(
                      "\n            " + _vm._s(_vm.errorMessage) + "\n        "
                    )
                  ])
                : _vm._e()
            ],
            1
          )
        : _c("div", { staticClass: "loading-text" }, [_vm._v("Chargement...")])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage.vue?vue&type=template&id=2bc8e05c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage.vue?vue&type=template&id=2bc8e05c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      !_vm.patient.doctor && !_vm.patientHasNoDoctorChoice && !_vm.doctorView
        ? _c("DoctorChoice", {
            attrs: {
              patient: _vm.patient,
              csrfTokenSelectDoctor: _vm.csrfTokenSelectDoctor,
              csrfTokenContact: _vm.csrfTokenContact
            },
            on: { patientHasNoDoctorChoice: _vm.setPatientHasNoDoctorChoice }
          })
        : _c(
            "section",
            {
              staticClass: "db-patient",
              class: { "doctor-view": _vm.doctorView },
              attrs: { id: "dashboard" }
            },
            [
              _c("div", [
                _vm.doctorView
                  ? _c("i", {
                      staticClass: "kiv-arrow-left icon-31",
                      on: {
                        click: function($event) {
                          return _vm.rederictToDashboard()
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("h1", [
                  !_vm.doctorView
                    ? _c("span", [
                        _vm._v(
                          "\n                    Bienvenue sur votre dashboard !\n                    "
                        ),
                        _c("i", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../img/icons/colored/hand.svg */ "./assets/img/icons/colored/hand.svg"),
                              alt: "Icone d'une main qui fait 'coucou'"
                            }
                          })
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.doctorView
                    ? _c("span", [
                        _vm._v(
                          "\n                    Dashboard de\n                    "
                        ),
                        _vm.patient.firstname || _vm.patient.lastname
                          ? _c("span", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.patient.firstname) +
                                  "\n                        " +
                                  _vm._s(_vm.patient.lastname) +
                                  "\n                    "
                              )
                            ])
                          : _c("span", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.patient.email) +
                                  "\n                    "
                              )
                            ])
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c(
                "main",
                [
                  _vm.doctorView
                    ? _c(
                        "section",
                        {
                          staticClass: "kiv-block mobile-view",
                          attrs: { id: "patient" }
                        },
                        [
                          _c("h2", [_vm._v("Le patient")]),
                          _vm._v(" "),
                          _vm.myDoctorContent
                            ? _c("div", { staticClass: "patient-details" }, [
                                _c(
                                  "div",
                                  { staticClass: "patient-avatar" },
                                  [
                                    _c(
                                      "vs-avatar",
                                      {
                                        staticClass: "avatar",
                                        attrs: { circle: "", size: "116" }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: _vm.patient.avatarUrl
                                              ? _vm.patient.avatarUrl
                                              : "/img/avatar-default.svg",
                                            alt:
                                              "Avatar de " +
                                              _vm.patient.firstname +
                                              " " +
                                              _vm.patient.lastname
                                          }
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "patient-infos" }, [
                                  _c("div", [
                                    _c("p", { staticClass: "name" }, [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(_vm.getUserName(_vm.patient)) +
                                          "\n                            "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm.patient.birthdate
                                      ? _c("p", { staticClass: "birthdate" }, [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                _vm.getAge(
                                                  _vm.patient.birthdate
                                                )
                                              ) +
                                              " ans\n                            "
                                          )
                                        ])
                                      : _vm._e()
                                  ])
                                ])
                              ])
                            : _vm._e()
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("MyScores", {
                    attrs: {
                      patient: _vm.patient,
                      doctorView: _vm.doctorView,
                      patientWorksheets: _vm.patientWorksheets,
                      loadingPatientWorksheets: _vm.loadingPatientWorksheets
                    }
                  }),
                  _vm._v(" "),
                  _c("MyWorksheets", {
                    attrs: {
                      patient: _vm.patient,
                      doctorView: _vm.doctorView,
                      doctor: _vm.currentUser,
                      patientWorksheets: _vm.patientWorksheets,
                      loadingPatientWorksheets: _vm.loadingPatientWorksheets
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "aside",
                    [
                      !_vm.doctorView
                        ? _c("MyDashboardNotifications", {
                            attrs: {
                              patient: _vm.patient,
                              csrfTokenAcceptDoctor: _vm.csrfTokenAcceptDoctor,
                              csrfTokenDeclineDoctor: _vm.csrfTokenDeclineDoctor
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.doctorView
                        ? _c(
                            "section",
                            {
                              staticClass: "kiv-block",
                              class: { reduced: !_vm.myDoctorContent },
                              attrs: { id: "my-doctor" }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "toggle-content",
                                  on: {
                                    click: function($event) {
                                      _vm.myDoctorContent = !_vm.myDoctorContent
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "kiv-chevron-down icon-3"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("h2", [_vm._v("Mon praticien")]),
                              _vm._v(" "),
                              _c("transition", { attrs: { name: "height2" } }, [
                                _vm.myDoctorContent
                                  ? _c(
                                      "div",
                                      { staticClass: "doctor-details" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "doctor-avatar" },
                                          [
                                            _vm.loadingDoctor
                                              ? _c("div", {
                                                  staticClass: "loading avatar"
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.patient.addRequestDoctor &&
                                            !_vm.loadingDoctor
                                              ? _c(
                                                  "vs-avatar",
                                                  {
                                                    staticClass: "avatar",
                                                    attrs: {
                                                      circle: "",
                                                      size: "116"
                                                    }
                                                  },
                                                  [
                                                    _c("img", {
                                                      attrs: {
                                                        src: _vm.patient.doctor
                                                          .avatarUrl
                                                          ? _vm.patient.doctor
                                                              .avatarUrl
                                                          : "../../img/avatar-default.svg",
                                                        alt:
                                                          "Avatar de " +
                                                          _vm.patient.doctor
                                                            .firstname +
                                                          " " +
                                                          _vm.patient.doctor
                                                            .lastname
                                                      }
                                                    })
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            (false ===
                                              _vm.patient.addRequestDoctor &&
                                              !_vm.loadingDoctor) ||
                                            !_vm.patient.doctor
                                              ? _c(
                                                  "vs-avatar",
                                                  {
                                                    staticClass:
                                                      "avatar waiting",
                                                    attrs: {
                                                      circle: "",
                                                      size: "116"
                                                    }
                                                  },
                                                  [
                                                    _c("img", {
                                                      attrs: {
                                                        src: __webpack_require__(/*! ../../img/icons/smiley/60.svg */ "./assets/img/icons/smiley/60.svg"),
                                                        alt: "Smiley Monocle"
                                                      }
                                                    })
                                                  ]
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "doctor-infos" },
                                          [
                                            _vm.loadingDoctor
                                              ? _c("div", [
                                                  _c("p", {
                                                    staticClass:
                                                      "loading name w-55"
                                                  }),
                                                  _vm._v(" "),
                                                  _c("p", {
                                                    staticClass:
                                                      "loading city w-45"
                                                  })
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.patient.addRequestDoctor &&
                                            !_vm.loadingDoctor
                                              ? _c("div", [
                                                  _c(
                                                    "div",
                                                    { staticClass: "name" },
                                                    [
                                                      _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.getUserName(
                                                              _vm.patient.doctor
                                                            )
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-button",
                                                        {
                                                          staticClass:
                                                            "btn-change-doctor",
                                                          attrs: {
                                                            size: "mini"
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.openModalChangeDoctor
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-sync-alt"
                                                          }),
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              "Changer de praticien\n                                            "
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _vm.patient.doctor
                                                    .entityName ||
                                                  _vm.patient.doctor.city
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "entity-city"
                                                        },
                                                        [
                                                          _vm.patient.doctor
                                                            .entityName
                                                            ? _c("span", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.patient
                                                                      .doctor
                                                                      .entityName
                                                                  )
                                                                )
                                                              ])
                                                            : _vm._e(),
                                                          _vm.patient.doctor
                                                            .entityName &&
                                                          _vm.patient.doctor
                                                            .city
                                                            ? _c("span", [
                                                                _vm._v(", ")
                                                              ])
                                                            : _vm._e(),
                                                          _vm.patient.doctor
                                                            .city
                                                            ? _c("span", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.patient
                                                                      .doctor
                                                                      .city
                                                                  )
                                                                )
                                                              ])
                                                            : _vm._e()
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            false ===
                                              _vm.patient.addRequestDoctor &&
                                            !_vm.loadingDoctor
                                              ? _c("div", [
                                                  _c("p", [
                                                    _vm._v(
                                                      "En attente de validation"
                                                    )
                                                  ])
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            !_vm.patient.doctor
                                              ? _c("div", [
                                                  _c(
                                                    "p",
                                                    { staticClass: "p" },
                                                    [_vm._v("En attente")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    { staticClass: "subp" },
                                                    [
                                                      _vm._v(
                                                        "Un de nos praticiens va prendre contact avec vous\n                                       pour élaborer le traitement approprié\n                                    "
                                                      )
                                                    ]
                                                  )
                                                ])
                                              : _vm._e()
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.doctorView
                        ? _c(
                            "section",
                            {
                              staticClass: "kiv-block desktop-view",
                              attrs: { id: "patient" }
                            },
                            [
                              _c("h2", [_vm._v("Le patient")]),
                              _vm._v(" "),
                              _vm.myDoctorContent
                                ? _c(
                                    "div",
                                    { staticClass: "patient-details" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "patient-avatar" },
                                        [
                                          _c(
                                            "vs-avatar",
                                            {
                                              staticClass: "avatar",
                                              attrs: { circle: "", size: "116" }
                                            },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: _vm.patient.avatarUrl
                                                    ? _vm.patient.avatarUrl
                                                    : "/img/avatar-default.svg",
                                                  alt:
                                                    "Avatar de " +
                                                    _vm.patient.firstname +
                                                    " " +
                                                    _vm.patient.lastname
                                                }
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "patient-infos" },
                                        [
                                          _c("div", [
                                            _c("p", { staticClass: "name" }, [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.getUserName(_vm.patient)
                                                  ) +
                                                  "\n                                "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _vm.patient.birthdate
                                              ? _c(
                                                  "p",
                                                  { staticClass: "birthdate" },
                                                  [
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          _vm.getAge(
                                                            _vm.patient
                                                              .birthdate
                                                          )
                                                        ) +
                                                        " ans\n                                "
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("MyExerciseStats", {
                    attrs: {
                      patient: _vm.patient,
                      doctorView: _vm.doctorView,
                      patientWorksheets: _vm.patientWorksheets,
                      loadingPatientWorksheets: _vm.loadingPatientWorksheets
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.modalChangeDoctor
                ? _c("div", { staticClass: "change-doctor-modal" }, [
                    _c("div", { staticClass: "content" }, [
                      _c(
                        "section",
                        {
                          staticClass: "kiv-block",
                          attrs: { id: "change-doctor-box" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "vs-dialog__close btn-close-modal",
                              on: { click: _vm.closeModalChangeDoctor }
                            },
                            [
                              _c("i", {
                                staticClass: "vs-icon-close vs-icon-hover-x"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("h2", [_vm._v("Changer de praticien")]),
                          _vm._v(" "),
                          _c("DoctorSelectBox", {
                            staticClass: "big",
                            attrs: { doctorSelected: _vm.doctorSelected },
                            on: { setDoctorSelected: _vm.setDoctorSelected }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "btn-container" },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "secondary",
                                  on: { click: _vm.closeModalChangeDoctor }
                                },
                                [_vm._v("Annuler")]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  attrs: {
                                    disabled:
                                      _vm.loadingChangeDoctor ||
                                      !_vm.doctorSelected,
                                    loading: _vm.loadingChangeDoctor
                                  },
                                  on: { click: _vm.valideChangeDoctor }
                                },
                                [_vm._v("Valider")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ])
                : _vm._e()
            ]
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=template&id=768a218d&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/DoctorChoice.vue?vue&type=template&id=768a218d& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { attrs: { id: "doctor-choice" } },
    [
      _vm.patientHasDoctorChoice !== null
        ? _c(
            "vs-button",
            {
              staticClass: "btn-prev",
              attrs: { circle: "", floating: "" },
              on: {
                click: function($event) {
                  _vm.patientHasDoctorChoice = null
                }
              }
            },
            [_c("i", { staticClass: "kiv-arrow-left icon-31" })]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("h1", [_vm._v("Bienvenue sur Kivid !")]),
      _vm._v(" "),
      _vm.patientHasDoctorChoice === null
        ? _c(
            "div",
            { staticClass: "btn-container" },
            [
              _c("h4", [_vm._v(" Avez-vous un praticien ?")]),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "w-100",
                  on: {
                    click: function($event) {
                      _vm.patientHasDoctorChoice = true
                    }
                  }
                },
                [_vm._v("\n            Oui, j'ai un praticien\n        ")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "w-100",
                  on: { click: _vm.patientHasNoDoctorChoice }
                },
                [_vm._v("\n            Non, je n'en ai pas\n        ")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.patientHasDoctorChoice
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "click-outside",
                  rawName: "v-click-outside",
                  value: _vm.hideSelectBox,
                  expression: "hideSelectBox"
                }
              ],
              staticClass: "select-filter",
              class: { loading: _vm.loading }
            },
            [
              !_vm.loading
                ? _c(
                    "div",
                    [
                      _vm.doctorSelected
                        ? _c(
                            "div",
                            {
                              staticClass: "doctor-selected doctor",
                              on: { click: _vm.resetSelect }
                            },
                            [
                              _c(
                                "vs-avatar",
                                {
                                  staticClass: "avatar",
                                  attrs: { circle: "", size: "35" }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: _vm.doctorSelected.avatarUrl
                                        ? _vm.doctorSelected.avatarUrl
                                        : "/img/avatar-default.svg",
                                      alt:
                                        "Avatar de " +
                                        _vm.doctorSelected.firstname +
                                        " " +
                                        _vm.doctorSelected.lastname
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "name" }, [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(
                                      _vm.getUserName(_vm.doctorSelected)
                                    ) +
                                    "\n                "
                                )
                              ])
                            ],
                            1
                          )
                        : _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.filter,
                                expression: "filter"
                              }
                            ],
                            class: {
                              "b-r-b-zero": _vm.selectBox,
                              "placeholder-gray": _vm.selectBox
                            },
                            attrs: {
                              id: "doctor-choice-select",
                              placeholder: !_vm.selectBox
                                ? "Sélectionnez votre praticien"
                                : "Recherchez votre praticien",
                              autocomplete: "off"
                            },
                            domProps: { value: _vm.filter },
                            on: {
                              click: function($event) {
                                _vm.selectBox = true
                              },
                              keyup: _vm.selectBoxWithThrottle,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.filter = $event.target.value
                              }
                            }
                          }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "arrow-toggle-box",
                          class: { active: _vm.selectBox },
                          on: { click: _vm.toggleSelectBox }
                        },
                        [_c("i", { staticClass: "kiv-chevron-down icon-3" })]
                      ),
                      _vm._v(" "),
                      _c("transition", { attrs: { name: "height" } }, [
                        _vm.selectBox
                          ? _c(
                              "div",
                              {
                                staticClass: "select-box",
                                on: { click: _vm.focusInputSelect }
                              },
                              [
                                _vm.getDoctors.length
                                  ? _c(
                                      "ul",
                                      _vm._l(_vm.getDoctors, function(
                                        doctor,
                                        i
                                      ) {
                                        return _c("li", { key: i }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "doctor",
                                              on: {
                                                click: function($event) {
                                                  return _vm.selectDoctor(
                                                    doctor
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "vs-avatar",
                                                {
                                                  staticClass: "avatar",
                                                  attrs: {
                                                    circle: "",
                                                    size: "35"
                                                  }
                                                },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src: doctor.avatarUrl
                                                        ? doctor.avatarUrl
                                                        : "/img/avatar-default.svg",
                                                      alt:
                                                        "Avatar de " +
                                                        doctor.firstname +
                                                        " " +
                                                        doctor.lastname
                                                    }
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "name" },
                                                [
                                                  _vm._v(
                                                    "\n                                    " +
                                                      _vm._s(
                                                        _vm.getUserName(doctor)
                                                      ) +
                                                      "\n                                "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      }),
                                      0
                                    )
                                  : _c("div", [
                                      _c("p", { staticClass: "not-found" }, [
                                        _c("i", {
                                          staticClass: "fas fa-users-slash"
                                        }),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                                Aucun praticien n'a été trouvé avec \""
                                          ),
                                          _c("strong", [
                                            _vm._v(_vm._s(_vm.filter))
                                          ]),
                                          _vm._v('"')
                                        ])
                                      ])
                                    ])
                              ]
                            )
                          : _vm._e()
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "valid-doctor-container" },
                [
                  _c("vs-button", { on: { click: _vm.valideDoctorChoice } }, [
                    _vm._v("Valider")
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "contact",
                      on: { click: _vm.patientHasNoDoctorChoice }
                    },
                    [_vm._v("Je n'ai pas de praticien")]
                  )
                ],
                1
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=59f52ded&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=59f52ded& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.getDashboardNotifications.length ||
    !_vm.patient.birthdate ||
    !_vm.patient.gender ||
    !_vm.patient.firstname ||
    !_vm.patient.lastname ||
    !_vm.patient.isVerified
    ? _c(
        "section",
        {
          staticClass: "kiv-block",
          class: { reduced: !_vm.$parent.myDBNotificationsContent },
          attrs: { id: "dashboard-notifications" }
        },
        [
          _c(
            "button",
            {
              staticClass: "toggle-content",
              on: {
                click: function($event) {
                  _vm.$parent.myDBNotificationsContent = !_vm.$parent
                    .myDBNotificationsContent
                }
              }
            },
            [_c("i", { staticClass: "kiv-chevron-down icon-3" })]
          ),
          _vm._v(" "),
          _c("h2", [_vm._v("Notifications")]),
          _vm._v(" "),
          _c("transition", { attrs: { name: "height" } }, [
            _vm.$parent.myDBNotificationsContent
              ? _c(
                  "div",
                  { staticClass: "notifications-list" },
                  [
                    _vm._l(_vm.getDashboardNotifications, function(notif, i) {
                      return _c("div", { key: i }, [
                        !_vm.loading && "add-patient" === notif.content[0].type
                          ? _c("div", { staticClass: "notifications-item" }, [
                              _c(
                                "p",
                                { staticClass: "notification-label" },
                                _vm._l(notif.content, function(e, i) {
                                  return _c("span", { key: i }, [
                                    "text" === e.type
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(e.content) +
                                              "\n                            "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    "user" === e.type
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(e.content) +
                                              "\n                            "
                                          )
                                        ])
                                      : _vm._e()
                                  ])
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "notification-actions",
                                  class: { disabled: _vm.actionInProgress }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "action-link green",
                                      on: {
                                        click: function($event) {
                                          return _vm.acceptDoctor(notif.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "kiv-accept icon-22"
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Accepter")])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "action-link red",
                                      on: {
                                        click: function($event) {
                                          return _vm.declineDoctor(notif.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "kiv-decline icon-6"
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Refuser")])
                                    ]
                                  )
                                ]
                              )
                            ])
                          : _vm._e()
                      ])
                    }),
                    _vm._v(" "),
                    !_vm.loading && !_vm.patient.isVerified
                      ? _c("div", { staticClass: "notifications-item" }, [
                          _c("p", { staticClass: "notification-label" }, [
                            _vm._v(
                              "\n                    Vérifier votre adresse email\n                "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "notification-actions",
                              class: { disabled: _vm.actionInProgress }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "action-link verif-mail",
                                  on: {
                                    click: function($event) {
                                      return _vm.resendVerifEmail()
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-envelope" }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Renvoyer lien")])
                                ]
                              )
                            ]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.loading &&
                    (!_vm.patient.birthdate ||
                      !_vm.patient.gender ||
                      !_vm.patient.firstname ||
                      !_vm.patient.lastname)
                      ? _c("div", { staticClass: "notifications-item" }, [
                          _c("p", { staticClass: "notification-label" }, [
                            _vm._v("Compléter votre profil")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "notification-actions" }, [
                            _c(
                              "a",
                              {
                                staticClass: "action-link",
                                attrs: { href: "/parametres" }
                              },
                              [
                                _c("i", { staticClass: "kiv-pen icon-4" }),
                                _vm._v(" "),
                                _c("span", [_vm._v("Compléter")])
                              ]
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.loading
                      ? _c("div", [
                          _c(
                            "div",
                            { staticClass: "loading-block notifications-item" },
                            [
                              _c("p", {
                                staticClass: "loading w-60 notification-label"
                              }),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "loading w-25 notification-actions"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "loading-block notifications-item" },
                            [
                              _c("p", {
                                staticClass: "loading w-30 notification-label"
                              }),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "loading w-30 notification-actions"
                              })
                            ]
                          )
                        ])
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e()
          ])
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=template&id=80c26604&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyExerciseStats.vue?vue&type=template&id=80c26604&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "my-exercise-stats" } }, [
    _c("section", { staticClass: "kiv-block", attrs: { id: "sensitivity" } }, [
      _vm._m(0),
      _vm._v(" "),
      _vm.getPatientWorksheets.length
        ? _c(
            "div",
            { staticClass: "content" },
            [
              _c(
                "div",
                { staticClass: "buttons" },
                [
                  _c(
                    "vs-button-group",
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.sensitivityUnitOfTime === "day",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeSensitivityUnitOfTime("day")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Jour\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.sensitivityUnitOfTime === "week",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeSensitivityUnitOfTime("week")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Semaine\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.sensitivityUnitOfTime === "month",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeSensitivityUnitOfTime("month")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Mois\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.sensitivityUnitOfTime === "year",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeSensitivityUnitOfTime("year")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Année\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "kiv-select" },
                [
                  _c(
                    "vs-select",
                    {
                      attrs: { placeholder: "Select" },
                      on: {
                        change: function($event) {
                          return _vm.resetDisableWorksheets("sensitivity")
                        }
                      },
                      model: {
                        value: _vm.sensitivityUnitOfTime,
                        callback: function($$v) {
                          _vm.sensitivityUnitOfTime = $$v
                        },
                        expression: "sensitivityUnitOfTime"
                      }
                    },
                    [
                      _c(
                        "vs-option",
                        { attrs: { label: "Jour", value: "day" } },
                        [_vm._v(" Jour ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-option",
                        { attrs: { label: "Semaine", value: "week" } },
                        [
                          _vm._v(
                            "\n                        Semaine\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-option",
                        { attrs: { label: "Mois", value: "month" } },
                        [_vm._v(" Mois ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-option",
                        { attrs: { label: "Année", value: "year" } },
                        [
                          _vm._v(
                            "\n                        Année\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              !_vm.loadingPatientWorksheets
                ? _c(
                    "chartist",
                    {
                      class: {
                        "hide-content": !_vm.sensitivityExerciseStats.series
                          .length,
                        labelsl:
                          _vm.sensitivityExerciseStats.labels.length >= 25,
                        labelsm:
                          _vm.sensitivityExerciseStats.labels.length >= 12 &&
                          _vm.sensitivityExerciseStats.labels.length < 25,
                        labelss:
                          _vm.sensitivityExerciseStats.labels.length >= 5 &&
                          _vm.sensitivityExerciseStats.labels.length < 12
                      },
                      attrs: {
                        ratio: "ct-major-second",
                        type: "Line",
                        data: _vm.sensitivityExerciseStats,
                        options: _vm.sensitivityChartOptions,
                        "event-handlers": _vm.eventHandlers
                      }
                    },
                    [
                      _c("div", { staticClass: "axisY-labels sensitivity" }, [
                        _c("i", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../img/icons/smiley/46.svg */ "./assets/img/icons/smiley/46.svg"),
                              alt: "Smiley qui va très mal"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("i", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../img/icons/smiley/47.svg */ "./assets/img/icons/smiley/47.svg"),
                              alt: "Smiley qui va mal"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("i", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../img/icons/smiley/48.svg */ "./assets/img/icons/smiley/48.svg"),
                              alt: "Smiley qui va pas bien"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("i", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../img/icons/smiley/49.svg */ "./assets/img/icons/smiley/49.svg"),
                              alt: "Smiley qui va bof"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("i", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../img/icons/smiley/50.svg */ "./assets/img/icons/smiley/50.svg"),
                              alt: "Smiley perplexe"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("i", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../img/icons/smiley/51.svg */ "./assets/img/icons/smiley/51.svg"),
                              alt: "Smiley qui va bien"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("i", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../img/icons/smiley/52.svg */ "./assets/img/icons/smiley/52.svg"),
                              alt: "Smiley qui va très bien"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("i", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../img/icons/smiley/53.svg */ "./assets/img/icons/smiley/53.svg"),
                              alt: "Smiley très content"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("i", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../img/icons/smiley/54.svg */ "./assets/img/icons/smiley/54.svg"),
                              alt: "Smiley aux anges"
                            }
                          })
                        ])
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loadingPatientWorksheets
                ? _c(
                    "div",
                    { staticClass: "btns-worksheets-stats sensitivity" },
                    _vm._l(_vm.getPatientWorksheets, function(worksheet, i) {
                      return _c(
                        "button",
                        {
                          key: i,
                          staticClass: "btn-toggle-worksheet-stats",
                          class: {
                            disactive: _vm.disableWorksheets[
                              "sensitivity"
                            ].includes(worksheet.id)
                          },
                          on: {
                            click: function($event) {
                              return _vm.toggleHiddenWorksheetLine(
                                "sensitivity",
                                i,
                                worksheet.id
                              )
                            }
                          }
                        },
                        [
                          _c("div", {
                            staticClass: "line-color",
                            style: {
                              backgroundColor: _vm.colors[i],
                              border: "5px solid " + _vm.colors[i]
                            }
                          }),
                          _vm._v(" "),
                          _c("BtnChartWorksheetPartOfBody", {
                            attrs: { worksheet: worksheet }
                          })
                        ],
                        1
                      )
                    }),
                    0
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loadingPatientWorksheets && !_vm.getPatientWorksheets.length
        ? _c("div", { staticClass: "not-found" }, [
            _c("p", [
              _c("i", { staticClass: "far fa-calendar-minus" }),
              _vm._v(" "),
              !_vm.doctorView
                ? _c("span", [_vm._v("Vous n'avez pas encore de statistique")])
                : _vm._e(),
              _vm._v(" "),
              _vm.doctorView
                ? _c("span", [
                    _vm._v("Le patient n'a pas encore de statistique")
                  ])
                : _vm._e()
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.loadingPatientWorksheets
        ? _c("div", { staticClass: "loading" })
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "kiv-block", attrs: { id: "technical" } }, [
      _vm._m(1),
      _vm._v(" "),
      _vm.getPatientWorksheets.length
        ? _c(
            "div",
            { staticClass: "content" },
            [
              _c(
                "div",
                { staticClass: "buttons" },
                [
                  _c(
                    "vs-button-group",
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.technicalUnitOfTime === "day",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeTechnicalUnitOfTime("day")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Jour\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.technicalUnitOfTime === "week",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeTechnicalUnitOfTime("week")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Semaine\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.technicalUnitOfTime === "month",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeTechnicalUnitOfTime("month")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Mois\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.technicalUnitOfTime === "year",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeTechnicalUnitOfTime("year")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Année\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "kiv-select" },
                [
                  _c(
                    "vs-select",
                    {
                      attrs: { placeholder: "Select" },
                      on: {
                        change: function($event) {
                          return _vm.resetDisableWorksheets("technical")
                        }
                      },
                      model: {
                        value: _vm.technicalUnitOfTime,
                        callback: function($$v) {
                          _vm.technicalUnitOfTime = $$v
                        },
                        expression: "technicalUnitOfTime"
                      }
                    },
                    [
                      _c(
                        "vs-option",
                        { attrs: { label: "Jour", value: "day" } },
                        [_vm._v(" Jour ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-option",
                        { attrs: { label: "Semaine", value: "week" } },
                        [
                          _vm._v(
                            "\n                        Semaine\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-option",
                        { attrs: { label: "Mois", value: "month" } },
                        [_vm._v(" Mois ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-option",
                        { attrs: { label: "Année", value: "year" } },
                        [
                          _vm._v(
                            "\n                        Année\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              !_vm.loadingPatientWorksheets
                ? _c(
                    "chartist",
                    {
                      class: {
                        "hide-content": !_vm.technicalExerciseStats.series
                          .length,
                        labelsl: _vm.technicalExerciseStats.labels.length >= 25,
                        labelsm:
                          _vm.technicalExerciseStats.labels.length >= 12 &&
                          _vm.technicalExerciseStats.labels.length < 25,
                        labelss:
                          _vm.technicalExerciseStats.labels.length >= 5 &&
                          _vm.technicalExerciseStats.labels.length < 12
                      },
                      attrs: {
                        ratio: "ct-major-second",
                        type: "Bar",
                        data: _vm.technicalExerciseStats,
                        options: _vm.technicalChartOptions,
                        "event-handlers": _vm.eventHandlers
                      }
                    },
                    [
                      _c("div", { staticClass: "axisY-labels technical" }, [
                        _c("div", [_c("p", [_vm._v("Excellente")])]),
                        _vm._v(" "),
                        _c("div", [_c("p", [_vm._v("Médiocre")])])
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loadingPatientWorksheets
                ? _c(
                    "div",
                    { staticClass: "btns-worksheets-stats" },
                    _vm._l(_vm.getPatientWorksheets, function(worksheet, i) {
                      return _c(
                        "button",
                        {
                          key: i,
                          staticClass: "btn-toggle-worksheet-stats",
                          class: {
                            disactive: _vm.disableWorksheets[
                              "technical"
                            ].includes(worksheet.id)
                          },
                          on: {
                            click: function($event) {
                              return _vm.toggleHiddenWorksheetLine(
                                "technical",
                                i,
                                worksheet.id
                              )
                            }
                          }
                        },
                        [
                          _c("div", {
                            staticClass: "line-color",
                            style: {
                              backgroundColor: _vm.colors[i],
                              border: "5px solid " + _vm.colors[i]
                            }
                          }),
                          _vm._v(" "),
                          _c("BtnChartWorksheetPartOfBody", {
                            attrs: { worksheet: worksheet }
                          })
                        ],
                        1
                      )
                    }),
                    0
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loadingPatientWorksheets && !_vm.getPatientWorksheets.length
        ? _c("div", { staticClass: "not-found" }, [
            _c("p", [
              _c("i", { staticClass: "far fa-calendar-minus" }),
              _vm._v(" "),
              !_vm.doctorView
                ? _c("span", [_vm._v("Vous n'avez pas encore de statistique")])
                : _vm._e(),
              _vm._v(" "),
              _vm.doctorView
                ? _c("span", [
                    _vm._v("Le patient n'a pas encore de statistique")
                  ])
                : _vm._e()
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.loadingPatientWorksheets
        ? _c("div", { staticClass: "loading" })
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "kiv-block", attrs: { id: "difficulty" } }, [
      _vm._m(2),
      _vm._v(" "),
      _vm.getPatientWorksheets.length
        ? _c(
            "div",
            { staticClass: "content" },
            [
              _c(
                "div",
                { staticClass: "buttons" },
                [
                  _c(
                    "vs-button-group",
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.difficultyUnitOfTime === "day",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeDifficultyUnitOfTime("day")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Jour\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.difficultyUnitOfTime === "week",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeDifficultyUnitOfTime("week")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Semaine\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.difficultyUnitOfTime === "month",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeDifficultyUnitOfTime("month")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Mois\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            active: _vm.difficultyUnitOfTime === "year",
                            flat: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeDifficultyUnitOfTime("year")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Année\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "kiv-select" },
                [
                  _c(
                    "vs-select",
                    {
                      attrs: { placeholder: "Select" },
                      on: {
                        change: function($event) {
                          return _vm.resetDisableWorksheets("difficulty")
                        }
                      },
                      model: {
                        value: _vm.difficultyUnitOfTime,
                        callback: function($$v) {
                          _vm.difficultyUnitOfTime = $$v
                        },
                        expression: "difficultyUnitOfTime"
                      }
                    },
                    [
                      _c(
                        "vs-option",
                        { attrs: { label: "Jour", value: "day" } },
                        [_vm._v(" Jour ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-option",
                        { attrs: { label: "Semaine", value: "week" } },
                        [
                          _vm._v(
                            "\n                        Semaine\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-option",
                        { attrs: { label: "Mois", value: "month" } },
                        [_vm._v(" Mois ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-option",
                        { attrs: { label: "Année", value: "year" } },
                        [
                          _vm._v(
                            "\n                        Année\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              !_vm.loadingPatientWorksheets
                ? _c(
                    "chartist",
                    {
                      class: {
                        "hide-content": !_vm.difficultyExerciseStats.series
                          .length,
                        labelsl:
                          _vm.difficultyExerciseStats.labels.length >= 25,
                        labelsm:
                          _vm.difficultyExerciseStats.labels.length >= 9 &&
                          _vm.difficultyExerciseStats.labels.length < 25,
                        labelss:
                          _vm.difficultyExerciseStats.labels.length >= 5 &&
                          _vm.difficultyExerciseStats.labels.length < 9
                      },
                      attrs: {
                        ratio: "ct-major-second",
                        type: "Line",
                        data: _vm.difficultyExerciseStats,
                        options: _vm.difficultyChartOptions,
                        "event-handlers": _vm.eventHandlers
                      }
                    },
                    [
                      _c("div", { staticClass: "axisY-labels difficulty" }, [
                        _c("div", [_c("p", [_vm._v("Difficile")])]),
                        _vm._v(" "),
                        _c("div", [_c("p", [_vm._v("Facile")])])
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loadingPatientWorksheets
                ? _c(
                    "div",
                    { staticClass: "btns-worksheets-stats" },
                    _vm._l(_vm.getPatientWorksheets, function(worksheet, i) {
                      return _c(
                        "button",
                        {
                          key: i,
                          staticClass: "btn-toggle-worksheet-stats",
                          class: {
                            disactive: _vm.disableWorksheets[
                              "difficulty"
                            ].includes(worksheet.id)
                          },
                          on: {
                            click: function($event) {
                              return _vm.toggleHiddenWorksheetLine(
                                "difficulty",
                                i,
                                worksheet.id
                              )
                            }
                          }
                        },
                        [
                          _c("div", {
                            staticClass: "line-color",
                            style: {
                              backgroundColor: _vm.colors[i],
                              border: "5px solid " + _vm.colors[i]
                            }
                          }),
                          _vm._v(" "),
                          _c("BtnChartWorksheetPartOfBody", {
                            attrs: { worksheet: worksheet }
                          })
                        ],
                        1
                      )
                    }),
                    0
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loadingPatientWorksheets && !_vm.getPatientWorksheets.length
        ? _c("div", { staticClass: "not-found" }, [
            _c("p", [
              _c("i", { staticClass: "far fa-calendar-minus" }),
              _vm._v(" "),
              !_vm.doctorView
                ? _c("span", [_vm._v("Vous n'avez pas encore de statistique")])
                : _vm._e(),
              _vm._v(" "),
              _vm.doctorView
                ? _c("span", [
                    _vm._v("Le patient n'a pas encore de statistique")
                  ])
                : _vm._e()
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.loadingPatientWorksheets
        ? _c("div", { staticClass: "loading" })
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_c("span", [_vm._v("Sensibilité")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_c("span", [_vm._v("Technique")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_c("span", [_vm._v("Difficultées perçues")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=template&id=2a90fada&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores.vue?vue&type=template&id=2a90fada&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "kiv-block",
      class: { reduced: !_vm.$parent.myScoresContent },
      attrs: { id: "my-scores" }
    },
    [
      _c(
        "button",
        {
          staticClass: "toggle-content",
          on: {
            click: function($event) {
              _vm.$parent.myScoresContent = !_vm.$parent.myScoresContent
            }
          }
        },
        [_c("i", { staticClass: "kiv-chevron-down icon-3" })]
      ),
      _vm._v(" "),
      _c("h2", [
        !_vm.doctorView ? _c("span", [_vm._v("Mes")]) : _vm._e(),
        _vm.doctorView ? _c("span", [_vm._v("Ses")]) : _vm._e(),
        _vm._v(" indices\n    ")
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "height" } }, [
        _vm.$parent.myScoresContent
          ? _c(
              "div",
              { staticClass: "content" },
              [
                _c(
                  "div",
                  { staticClass: "score-circle" },
                  [
                    _c(
                      "vue-ellipse-progress",
                      _vm._b(
                        { attrs: { progress: _vm.getScorePercentage } },
                        "vue-ellipse-progress",
                        _vm.options,
                        false
                      )
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "score-circle-text" }, [
                      _c("span", { staticClass: "score" }, [
                        _vm._v(_vm._s(_vm.formatNumbThousand(_vm.getScore)))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "unit" }, [_vm._v("Points")])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "score-line" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progressbar-base",
                      class: { "loading-gray-dark": _vm.loading }
                    },
                    [
                      _c("div", {
                        staticClass: "progressbar-thumb",
                        class: { max: _vm.score >= _vm.scoreMax },
                        style: { width: _vm.getScorePercentage + "%" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "progressbar-steps" }, [
                        _c("div", [
                          _c("div", { staticClass: "point" }),
                          _vm._v(" "),
                          _c("span", [_vm._v("1 000 pts")])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "point" }),
                          _vm._v(" "),
                          _c("span", [_vm._v("2 000 pts")])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "point" }),
                          _vm._v(" "),
                          _c("span", [_vm._v("3 000 pts")])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "point" }),
                          _vm._v(" "),
                          _c("span", [_vm._v("4 000 pts")])
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.loading
                        ? _c(
                            "div",
                            {
                              staticClass: "progressbar-current-score",
                              class: {
                                start: _vm.getScorePercentage < 20,
                                end: _vm.getScorePercentage > 80
                              },
                              style: {
                                left:
                                  _vm.getScorePercentage <= 100
                                    ? _vm.getScorePercentage + "%"
                                    : "100%"
                              }
                            },
                            [
                              _c("span", [
                                !_vm.doctorView
                                  ? _c("span", [_vm._v("Votre")])
                                  : _vm._e(),
                                _vm.doctorView
                                  ? _c("span", [_vm._v("Son")])
                                  : _vm._e(),
                                _vm._v(" score\n                            "),
                                _c("span", { staticClass: "score" }, [
                                  _vm._v(
                                    _vm._s(
                                      "(" +
                                        _vm.formatNumbThousand(_vm.getScore) +
                                        " pts)"
                                    )
                                  )
                                ])
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "progressbar-base-end-decoration" },
                        [
                          _c("div"),
                          _vm._v(" "),
                          _c("div"),
                          _vm._v(" "),
                          _c("div")
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "exercise-block score-block" }, [
                  _c("div", { staticClass: "stat-icon" }, [
                    _c("i", { staticClass: "kiv-exercise icon-7" })
                  ]),
                  _vm._v(" "),
                  _c("h4", { staticClass: "stat-label" }, [
                    _vm._v("Nombre d’exercices faits")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "stat-result" }, [
                    !_vm.loadingPatientWorksheets
                      ? _c("h3", [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.getTotalExerciseCompleted) +
                              "\n                    "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.loadingPatientWorksheets
                      ? _c("div", {
                          staticClass: "loading-gray loading-block-h3 w-25"
                        })
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "sensitivity-block score-block" }, [
                  _c("div", { staticClass: "stat-icon" }, [
                    _c("i", { staticClass: "kiv-sensitivity icon-8" })
                  ]),
                  _vm._v(" "),
                  _c("h4", { staticClass: "stat-label" }, [
                    !_vm.doctorView ? _c("span", [_vm._v("Votre")]) : _vm._e(),
                    _vm.doctorView ? _c("span", [_vm._v("Sa")]) : _vm._e(),
                    _vm._v(" sensibilité\n                ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "stat-result" }, [
                    !_vm.loadingPatientWorksheets
                      ? _c("h3", [
                          _vm.getSensitivitySmiley &&
                          !_vm.loadingPatientWorksheets
                            ? _c("div", { staticClass: "sensitivity-smiley" }, [
                                _c("img", {
                                  attrs: {
                                    src: _vm.getSensitivitySmiley.src,
                                    alt: _vm.getSensitivitySmiley.alt
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getSensitivityVariation &&
                          "up" === _vm.getSensitivityVariation.variation
                            ? _c("span", [
                                _vm._v(
                                  "\n                            En amélioration\n                        "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getSensitivityVariation &&
                          "down" === _vm.getSensitivityVariation.variation
                            ? _c("span", [
                                _vm._v(
                                  "\n                            En baisse\n                        "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getSensitivityVariation &&
                          "equal" === _vm.getTechnicalVariation.variation
                            ? _c("span", [
                                _vm._v(
                                  "\n                            Stable\n                        "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.getSensitivityVariation
                            ? _c("span", [
                                _vm._v(
                                  "\n                            Bientôt !\n                        "
                                )
                              ])
                            : _vm._e()
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.getSensitivityVariation &&
                    !_vm.loadingPatientWorksheets &&
                    "up" === _vm.getSensitivityVariation.variation
                      ? _c("div", { staticClass: "stat-variation green" }, [
                          _vm._v("\n                        ("),
                          _c("i", { staticClass: "kiv-variation-up icon-27" }),
                          _c("span", [
                            _vm._v(
                              "+" +
                                _vm._s(_vm.getSensitivityVariation.result) +
                                "%"
                            )
                          ]),
                          _vm._v(")\n                    ")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.getSensitivityVariation &&
                    !_vm.loadingPatientWorksheets &&
                    "down" === _vm.getSensitivityVariation.variation
                      ? _c("div", { staticClass: "stat-variation red" }, [
                          _vm._v("\n                        ("),
                          _c("i", {
                            staticClass: "kiv-variation-down icon-28"
                          }),
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.getSensitivityVariation.result) + "%"
                            )
                          ]),
                          _vm._v(")\n                    ")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.loadingPatientWorksheets
                      ? _c("div", {
                          staticClass: "loading-gray loading-block-h3 w-75"
                        })
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "technical-block score-block" }, [
                  _c("div", { staticClass: "stat-icon" }, [
                    _c("i", { staticClass: "kiv-technical icon-9" })
                  ]),
                  _vm._v(" "),
                  _c("h4", { staticClass: "stat-label" }, [
                    !_vm.doctorView ? _c("span", [_vm._v("Votre")]) : _vm._e(),
                    _vm.doctorView ? _c("span", [_vm._v("Sa")]) : _vm._e(),
                    _vm._v(" technique\n                ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "stat-result" }, [
                    !_vm.loadingPatientWorksheets
                      ? _c("h3", [
                          _vm.getTechnicalVariation &&
                          "up" === _vm.getTechnicalVariation.variation
                            ? _c("span", [
                                _vm._v(
                                  "\n                            En amélioration\n                        "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getTechnicalVariation &&
                          "down" === _vm.getTechnicalVariation.variation
                            ? _c("span", [
                                _vm._v(
                                  "\n                            En baisse\n                        "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getTechnicalVariation &&
                          "equal" === _vm.getTechnicalVariation.variation
                            ? _c("span", [
                                _vm._v(
                                  "\n                            Stable\n                        "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.getTechnicalVariation
                            ? _c("span", [
                                _vm._v(
                                  "\n                            Bientôt !\n                        "
                                )
                              ])
                            : _vm._e()
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.getTechnicalVariation &&
                    !_vm.loadingPatientWorksheets &&
                    "up" === _vm.getTechnicalVariation.variation
                      ? _c("div", { staticClass: "stat-variation green" }, [
                          _vm._v("\n                        ("),
                          _c("i", { staticClass: "kiv-variation-up icon-27" }),
                          _c("span", [
                            _vm._v(
                              "+" +
                                _vm._s(_vm.getTechnicalVariation.result) +
                                "%"
                            )
                          ]),
                          _vm._v(")\n                    ")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.getTechnicalVariation &&
                    !_vm.loadingPatientWorksheets &&
                    "down" === _vm.getTechnicalVariation.variation
                      ? _c("div", { staticClass: "stat-variation red" }, [
                          _vm._v("\n                        ("),
                          _c("i", {
                            staticClass: "kiv-variation-down icon-28"
                          }),
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.getTechnicalVariation.result) + "%"
                            )
                          ]),
                          _vm._v(")\n                    ")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.loadingPatientWorksheets
                      ? _c("div", {
                          staticClass: "loading-gray loading-block-h3 w-75"
                        })
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("ScoreRankBlock", {
                  attrs: {
                    rank: _vm.getRank,
                    loading: _vm.loading,
                    doctorView: _vm.doctorView
                  }
                })
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=template&id=2ea27674&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue?vue&type=template&id=2ea27674&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "score-rank-block score-block",
      class: {
        nouveau: "nouveau" === _vm.rank,
        debutant: "debutant" === _vm.rank,
        amateur: "amateur" === _vm.rank,
        intermediaire: "intermediaire" === _vm.rank,
        confirme: "confirme" === _vm.rank,
        expert: "expert" === _vm.rank
      }
    },
    [
      _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
        !_vm.loading && "nouveau" === _vm.rank
          ? _c("div", { key: "nouveau" }, [
              _c("h4", [
                !_vm.doctorView ? _c("span", [_vm._v("Votre")]) : _vm._e(),
                _vm.doctorView ? _c("span", [_vm._v("Son")]) : _vm._e(),
                _vm._v(" niveau\n            ")
              ]),
              _vm._v(" "),
              _c("i", { staticClass: "rank-img" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/icons/colored/hand.svg */ "./assets/img/icons/colored/hand.svg"),
                    alt: "Icone du rang nouveau patient"
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-label" }, [
                _vm._v("Nouveau Patient")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-result" }, [
                _vm._v("C’est parti pour aller mieux !")
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading && "debutant" === _vm.rank
          ? _c("div", { key: "debutant" }, [
              _c("h4", [_vm._v("Votre niveau")]),
              _vm._v(" "),
              _c("i", { staticClass: "rank-img" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/icons/colored/bras.svg */ "./assets/img/icons/colored/bras.svg"),
                    alt: "Icone du rang débutant"
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-label" }, [
                _vm._v("Patient Débutant")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-result" }, [
                _vm._v('Muscle ton jeu "Robert" !')
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading && "amateur" === _vm.rank
          ? _c("div", { key: "amateur" }, [
              _c("h4", [_vm._v("Votre niveau")]),
              _vm._v(" "),
              _c("i", { staticClass: "rank-img" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/icons/smiley/61.svg */ "./assets/img/icons/smiley/61.svg"),
                    alt: "Icone du rang amateur"
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-label" }, [
                _vm._v("Patient Amateur")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-result" }, [
                _vm._v("La tête dans le guidon !")
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading && "intermediaire" === _vm.rank
          ? _c("div", { key: "intermediaire" }, [
              _c("h4", [_vm._v("Votre niveau")]),
              _vm._v(" "),
              _c("i", { staticClass: "rank-img" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/icons/colored/reward.svg */ "./assets/img/icons/colored/reward.svg"),
                    alt: "Icone du rang intermédiaire"
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-label" }, [
                _vm._v("Patient Intermédiaire")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-result" }, [
                _vm._v("Bien dans tes Baskets !")
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading && "confirme" === _vm.rank
          ? _c("div", { key: "confirme" }, [
              _c("h4", [_vm._v("Votre niveau")]),
              _vm._v(" "),
              _c("i", { staticClass: "rank-img" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/icons/colored/reward.svg */ "./assets/img/icons/colored/reward.svg"),
                    alt: "Icone 1 du rang confirmé"
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/icons/colored/reward.svg */ "./assets/img/icons/colored/reward.svg"),
                    alt: "Icone 2 du rang confirmé"
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-label" }, [
                _vm._v("Patient Confirmé")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-result" }, [
                _vm._v("Pas le temps de niaiser !")
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading && "expert" === _vm.rank
          ? _c("div", { key: "expert" }, [
              _c("h4", [_vm._v("Votre niveau")]),
              _vm._v(" "),
              _c("i", { staticClass: "rank-img" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/icons/colored/reward.svg */ "./assets/img/icons/colored/reward.svg"),
                    alt: "Icone 1 du rang expert"
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/icons/colored/reward.svg */ "./assets/img/icons/colored/reward.svg"),
                    alt: "Icone 2 du rang expert"
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/icons/colored/reward.svg */ "./assets/img/icons/colored/reward.svg"),
                    alt: "Icone 3 du rang expert"
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-label" }, [
                _vm._v("Patient Expert")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "rank-result" }, [
                _vm._v("Prêt pour le prochain Iron Man !")
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c("div", { key: "loading", staticClass: "loading-block" }, [
            _c("div", { staticClass: "loading h4 w-65" }),
            _vm._v(" "),
            _c("div", { staticClass: "loading i" }),
            _vm._v(" "),
            _c("div", { staticClass: "loading rank-label" }),
            _vm._v(" "),
            _c("div", { staticClass: "loading rank-result w-85" })
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=template&id=93767d04&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/patient/DashboardPage/MyWorksheets.vue?vue&type=template&id=93767d04& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "kiv-block",
      class: { reduced: !_vm.$parent.myWorksheetsContent },
      attrs: { id: "my-worksheets" }
    },
    [
      _c(
        "button",
        {
          staticClass: "toggle-content",
          on: {
            click: function($event) {
              _vm.$parent.myWorksheetsContent = !_vm.$parent.myWorksheetsContent
            }
          }
        },
        [_c("i", { staticClass: "kiv-chevron-down icon-3" })]
      ),
      _vm._v(" "),
      _c("h2", [
        !_vm.doctorView ? _c("span", [_vm._v("Mes")]) : _vm._e(),
        _vm.doctorView ? _c("span", [_vm._v("Ses")]) : _vm._e(),
        _vm._v(" fiches\n    ")
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "height" } }, [
        _vm.$parent.myWorksheetsContent
          ? _c("div", { staticClass: "worksheet-list" }, [
              !_vm.loadingPatientWorksheets && _vm.getPatientWorksheets.length
                ? _c(
                    "div",
                    { staticClass: "wl-patient" },
                    _vm._l(_vm.getPatientWorksheets, function(worksheet, i) {
                      return _c("div", { key: i }, [
                        _c(
                          "div",
                          { staticClass: "worksheet-header" },
                          [
                            _c("h3", { staticClass: "worksheet-title" }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(worksheet.title) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("TagPartOfBody", {
                              class: {
                                completed:
                                  (worksheet.currentWorksheetSession &&
                                    worksheet.currentWorksheetSession
                                      .isCompleted) ||
                                  (!worksheet.currentWorksheetSession &&
                                    worksheet.exerciseStats.length > 0)
                              },
                              attrs: { partOfBody: worksheet.partOfBody }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        worksheet.currentWorksheetSession &&
                        !worksheet.currentWorksheetSession.isCompleted &&
                        worksheet.currentWorksheetSession.isInProgress
                          ? _c(
                              "div",
                              { staticClass: "worksheet-progress-line" },
                              [
                                _c("div", { staticClass: "progressbar-base" }, [
                                  _c("div", {
                                    staticClass: "progressbar-thumb",
                                    style: {
                                      width:
                                        worksheet.worksheetProgression + "%"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "progressbar-steps" },
                                    [
                                      _c("div", [
                                        _c("div", { staticClass: "point" }),
                                        _vm._v(" "),
                                        _c("span", [_vm._v("En cours")])
                                      ])
                                    ]
                                  )
                                ])
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        (worksheet.currentWorksheetSession &&
                          !worksheet.currentWorksheetSession.isCompleted &&
                          !worksheet.currentWorksheetSession.isInProgress) ||
                        (!worksheet.currentWorksheetSession &&
                          worksheet.countOldWorksheetSessions === 0 &&
                          worksheet.exerciseStats.length === 0)
                          ? _c(
                              "div",
                              { staticClass: "worksheet-progress-line" },
                              [
                                _c("div", { staticClass: "progressbar-base" }, [
                                  _c("div", {
                                    staticClass: "progressbar-thumb",
                                    style: {
                                      width: "0%"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "progressbar-steps" },
                                    [
                                      _c("div", [
                                        _c("div", { staticClass: "point" }),
                                        _vm._v(" "),
                                        _c("span", [_vm._v("Non démarrée")])
                                      ])
                                    ]
                                  )
                                ])
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        (worksheet.currentWorksheetSession &&
                          worksheet.currentWorksheetSession.isCompleted) ||
                        (!worksheet.currentWorksheetSession &&
                          worksheet.countOldWorksheetSessions > 0)
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "worksheet-content session-completed"
                              },
                              [
                                worksheet.currentWorksheetSession &&
                                worksheet.totalWorksheetSessions !=
                                  worksheet.currentWorksheetSession.execOrder
                                  ? _c("p", [
                                      !_vm.doctorView
                                        ? _c(
                                            "span",
                                            [
                                              _vm._v(
                                                "\n                                Bravo, vos exercices de cette session ont\n                                été faits avec succès ! "
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c(
                                                "transition",
                                                { attrs: { name: "fade" } },
                                                [
                                                  worksheet.timeLeftBeforeNextSession
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                        Rendez-vous dans\n                                        "
                                                        ),
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              worksheet.timeLeftBeforeNextSession
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          "\n                                        pour une nouvelle session.\n                                    "
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.doctorView
                                        ? _c(
                                            "span",
                                            [
                                              _vm._v(
                                                "\n                                Exercices terminés pour cette session."
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c(
                                                "transition",
                                                { attrs: { name: "fade" } },
                                                [
                                                  worksheet.timeLeftBeforeNextSession
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                        Prochaine session dans\n                                        "
                                                        ),
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              worksheet.timeLeftBeforeNextSession
                                                            )
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          ".\n                                    "
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                (!worksheet.currentWorksheetSession &&
                                  worksheet.exerciseStats.length > 0) ||
                                (worksheet.currentWorksheetSession &&
                                  worksheet.totalWorksheetSessions ==
                                    worksheet.currentWorksheetSession.execOrder)
                                  ? _c("p", [
                                      !_vm.doctorView
                                        ? _c("span", [
                                            _vm._v(
                                              "Félicitations, votre traitement est terminé\n                                !"
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.doctorView
                                        ? _c("span", [
                                            _vm._v("Traitement terminé.")
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("br")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                !worksheet.currentWorksheetSession &&
                                worksheet.countOldWorksheetSessions > 0 &&
                                worksheet.exerciseStats.length === 0
                                  ? _c("p", [
                                      !_vm.doctorView
                                        ? _c("span", [
                                            _vm._v(
                                              "Vous n'avez pas réalisé votre traitement,\n                                il a expiré."
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.doctorView
                                        ? _c("span", [
                                            _vm._v(
                                              "Traitement non réalisé et expiré."
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("br")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.doctorView
                                  ? _c(
                                      "vs-button",
                                      {
                                        staticClass: "btn-consult",
                                        attrs: {
                                          disabled:
                                            _vm.redirectInProgress ===
                                            worksheet.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.redirectToWorksheetPage(
                                              worksheet.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                            Consulter\n                        "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.doctorView
                                  ? _c(
                                      "vs-button",
                                      {
                                        staticClass: "btn-consult",
                                        attrs: {
                                          disabled:
                                            _vm.redirectInProgress ===
                                            worksheet.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.redirectToDoctorView(
                                              worksheet.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                            Voir\n                        "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          : _c("div", { staticClass: "worksheet-content" }, [
                              _c("div", { staticClass: "worksheet-details" }, [
                                _c(
                                  "div",
                                  { staticClass: "worksheet-exercises-count" },
                                  [
                                    _c("i", {
                                      staticClass: "kiv-exercise icon-7"
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "b" }, [
                                      _vm._v(_vm._s(worksheet.exercises.length))
                                    ]),
                                    _vm._v(
                                      "\n                                exercice"
                                    ),
                                    worksheet.exercises.length > 1
                                      ? _c("span", [_vm._v("s")])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "worksheet-timing" }, [
                                  _c("i", {
                                    staticClass: "kiv-calendar icon-10"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "b" }, [
                                    _vm._v(_vm._s(worksheet.perDay) + "x")
                                  ]),
                                  _vm._v(
                                    "\n                                par jour -\n                                "
                                  ),
                                  _c("span", { staticClass: "b" }, [
                                    _vm._v(_vm._s(worksheet.perWeek) + "x")
                                  ]),
                                  _vm._v(
                                    "\n                                par semaine\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "worksheet-period" }, [
                                  _c("i", { staticClass: "kiv-clock icon-11" }),
                                  _vm._v(
                                    "\n                                Période :\n                                "
                                  ),
                                  _c("span", { staticClass: "b" }, [
                                    _vm._v(
                                      _vm._s(worksheet.duration) + " semaine"
                                    ),
                                    worksheet.duration > 1
                                      ? _c("span", [_vm._v("s")])
                                      : _vm._e()
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "buttons" },
                                [
                                  !_vm.doctorView
                                    ? _c(
                                        "vs-button",
                                        {
                                          staticClass: "btn-go",
                                          attrs: {
                                            disabled:
                                              _vm.redirectInProgress ===
                                              worksheet.id,
                                            circle: "",
                                            floating: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.redirectToWorksheetPage(
                                                worksheet.id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Go !\n                            "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.doctorView
                                    ? _c(
                                        "vs-button",
                                        {
                                          staticClass: "btn-go",
                                          attrs: {
                                            disabled:
                                              _vm.redirectInProgress ===
                                                worksheet.id ||
                                              (!worksheet.currentWorksheetSession &&
                                                worksheet.exerciseStats
                                                  .length === 0),
                                            circle: "",
                                            floating: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.redirectToDoctorView(
                                                worksheet.id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Voir\n                            "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                      ])
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loadingPatientWorksheets && !_vm.getPatientWorksheets.length
                ? _c("div", { staticClass: "not-found" }, [
                    _c("p", [
                      _c("i", { staticClass: "fas fa-folder-minus" }),
                      _vm._v(" "),
                      !_vm.doctorView
                        ? _c("span", [_vm._v("Vous n'avez pas de fiche")])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.doctorView
                        ? _c("span", [
                            _vm._v("Le patient n'a pas encore de fiche")
                          ])
                        : _vm._e()
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.loadingPatientWorksheets
                ? _c("div", [
                    _c("div", { staticClass: "loading loading-block" }, [
                      _c("div", { staticClass: "worksheet-header" }, [
                        _c("div", {
                          staticClass: "loading worksheet-title w-25"
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "loading part-of-body" })
                      ]),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "loading worksheet-progress-line"
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "worksheet-content" }, [
                        _c("div", { staticClass: "worksheet-details" }, [
                          _c("div", {
                            staticClass:
                              "\n                                    loading\n                                    worksheet-exercises-count\n                                    w-35\n                                "
                          }),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "loading worksheet-timing w-25"
                          }),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "loading worksheet-period w-35"
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "buttons" }, [
                          _c("div", { staticClass: "loading btn-go" })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "loading loading-block" }, [
                      _c("div", { staticClass: "worksheet-header" }, [
                        _c("div", {
                          staticClass: "loading worksheet-title w-45"
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "loading part-of-body" })
                      ]),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "loading worksheet-progress-line"
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "worksheet-content" }, [
                        _c("div", { staticClass: "worksheet-details" }, [
                          _c("div", {
                            staticClass:
                              "\n                                    loading\n                                    worksheet-exercises-count\n                                    w-15\n                                "
                          }),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "loading worksheet-timing w-35"
                          }),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "loading worksheet-period w-25"
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "buttons" }, [
                          _c("div", { staticClass: "loading btn-go" })
                        ])
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./assets/img/icons/colored/bras.svg":
/*!*******************************************!*\
  !*** ./assets/img/icons/colored/bras.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bras.0ec10e9f.svg";

/***/ }),

/***/ "./assets/img/icons/colored/reward.svg":
/*!*********************************************!*\
  !*** ./assets/img/icons/colored/reward.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/reward.a2c9e50a.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/46.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/46.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/46.0399c65a.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/47.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/47.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/47.b41f86d5.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/48.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/48.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/48.fdbe8352.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/49.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/49.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/49.d0512f3a.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/50.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/50.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/50.dc6f934c.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/51.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/51.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/51.8b05a017.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/52.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/52.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/52.c28f7a8b.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/53.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/53.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/53.324059de.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/54.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/54.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/54.096a1702.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/60.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/60.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/60.9d802eef.svg";

/***/ }),

/***/ "./assets/img/icons/smiley/61.svg":
/*!****************************************!*\
  !*** ./assets/img/icons/smiley/61.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/61.a30efa8e.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-38d47d","vendors-node_modules_chartist-plugin-tooltips_dist_chartist-plugin-tooltip_js-node_modules_co-f61cc6","assets_vue_services_function_js-node_modules_moment_locale_sync_recursive_","assets_vue_components_BtnChartWorksheetPartOfBody_vue-assets_vue_components_TagPartOfBody_vue-72399a"], function() { return __webpack_exec__("./assets/vue/patient/dashboard-page.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsU0FBUyxnQkFBZ0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFNBQVMsZ0JBQWdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGtDQUFrQztBQUMxRSwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQSxvQ0FBb0MsMENBQTBDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLGlEQUFpRCxrQkFBa0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpQ0FBaUM7QUFDN0U7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBLCtDQUErQyxrQkFBa0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrQkFBa0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsaUNBQWlDO0FBQzdFLDRDQUE0QyxrQ0FBa0M7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtCQUFrQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msd0JBQXdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQSxnQ0FBZ0Msb0NBQW9DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNDQUFzQztBQUN0RSxrQ0FBa0MsaUNBQWlDO0FBQ25FO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxvQ0FBb0MscUNBQXFDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esa0NBQWtDLGtDQUFrQztBQUNwRSxvQ0FBb0Msa0NBQWtDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0Msd0JBQXdCO0FBQzVELHNDQUFzQywrQkFBK0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0NBQXNDO0FBQ3RFLGtDQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLG9DQUFvQyxxQ0FBcUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxrQ0FBa0Msa0NBQWtDO0FBQ3BFLG9DQUFvQyxrQ0FBa0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLG9DQUFvQyx3QkFBd0I7QUFDNUQsc0NBQXNDLCtCQUErQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L2Rhc2hib2FyZC1wYWdlLmpzIiwid2VicGFjazovLy9hc3NldHMvdnVlL2NvbXBvbmVudHMvRG9jdG9yU2VsZWN0Qm94LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9Eb2N0b3JDaG9pY2UudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeUV4ZXJjaXNlU3RhdHMudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzL1Njb3JlUmFua0Jsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlXb3Jrc2hlZXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvRG9jdG9yU2VsZWN0Qm94LnZ1ZT8wMzY5Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlLnZ1ZT83ZTgwIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL0RvY3RvckNob2ljZS52dWU/NTRjZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlPzU1YWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlFeGVyY2lzZVN0YXRzLnZ1ZT80NDI3Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzLnZ1ZT81MTQyIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzL1Njb3JlUmFua0Jsb2NrLnZ1ZT9lZGIwIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9Eb2N0b3JTZWxlY3RCb3gudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9Eb2N0b3JDaG9pY2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlFeGVyY2lzZVN0YXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlTY29yZXMvU2NvcmVSYW5rQmxvY2sudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015V29ya3NoZWV0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb21wb25lbnRzL0RvY3RvclNlbGVjdEJveC52dWU/OGM2NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS52dWU/YzBjOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9Eb2N0b3JDaG9pY2UudnVlP2VhOGUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT82ZjAwIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015RXhlcmNpc2VTdGF0cy52dWU/MTVmYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy52dWU/MjcxOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy9TY29yZVJhbmtCbG9jay52dWU/YTg1ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVdvcmtzaGVldHMudnVlPzBhNjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb21wb25lbnRzL0RvY3RvclNlbGVjdEJveC52dWU/Y2ZiNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS52dWU/YjI3MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9Eb2N0b3JDaG9pY2UudnVlPzExMTYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT9mN2IwIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015RXhlcmNpc2VTdGF0cy52dWU/NDhiNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy52dWU/NTUyNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy9TY29yZVJhbmtCbG9jay52dWU/MjAwZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvRG9jdG9yU2VsZWN0Qm94LnZ1ZT84OWNhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlLnZ1ZT9hOTY4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL0RvY3RvckNob2ljZS52dWU/NjVkZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlP2Y4NzYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlFeGVyY2lzZVN0YXRzLnZ1ZT8zNjliIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzLnZ1ZT9lNTE2Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzL1Njb3JlUmFua0Jsb2NrLnZ1ZT85YTUyIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015V29ya3NoZWV0cy52dWU/MmM4NCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvRG9jdG9yU2VsZWN0Qm94LnZ1ZT80YzdhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlLnZ1ZT9jYjM5Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL0RvY3RvckNob2ljZS52dWU/ODdhMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlPzA3NzYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlFeGVyY2lzZVN0YXRzLnZ1ZT9hYTBmIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzLnZ1ZT9mODVhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzL1Njb3JlUmFua0Jsb2NrLnZ1ZT84OTAyIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015V29ya3NoZWV0cy52dWU/MDNiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBEYXNoYm9hcmRQYWdlIGZyb20gJy4vRGFzaGJvYXJkUGFnZS52dWUnXHJcblxyXG4vLyBBeGlvc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBWdWVBeGlvcyBmcm9tICd2dWUtYXhpb3MnXHJcblZ1ZS51c2UoVnVlQXhpb3MsIGF4aW9zKVxyXG5cclxuLy8gVnVlc2F4IChVWCBsaWIpXHJcbmltcG9ydCBWdWVzYXggZnJvbSAndnVlc2F4J1xyXG5cclxuLy8gRWxsaXBzZSBQcm9ncmVzcyBCYXJcclxuaW1wb3J0IFZ1ZUVsbGlwc2VQcm9ncmVzcyBmcm9tICd2dWUtZWxsaXBzZS1wcm9ncmVzcyc7XHJcblZ1ZS51c2UoVnVlRWxsaXBzZVByb2dyZXNzKTtcclxuXHJcbi8vIFZ1ZS1DaGFydGlzdFxyXG4vLyArIFBsdWdpbiBmb3IgdG9vbHRpcHNcclxuaW1wb3J0ICogYXMgQ2hhcnRpc3RUb29sdGlwcyBmcm9tICdjaGFydGlzdC1wbHVnaW4tdG9vbHRpcHMnO1xyXG5WdWUudXNlKHJlcXVpcmUoJ3Z1ZS1jaGFydGlzdCcpLCB7XHJcbiAgICBtZXNzYWdlTm9EYXRhOiBcIkF1Y3VuZSBkb25uw6llXCIsXHJcbiAgICBjbGFzc05vRGF0YTogXCJlbXB0eVwiXHJcbn0pXHJcblxyXG5uZXcgVnVlKHtcclxuICAgIHJlbmRlcjogaCA9PiBoKERhc2hib2FyZFBhZ2UpXHJcbn0pLiRtb3VudCgnI3Z1ZScpXHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXZcclxuICAgICAgICB2LWNsaWNrLW91dHNpZGU9XCJoaWRlU2VsZWN0Qm94XCJcclxuICAgICAgICBjbGFzcz1cInNlbGVjdC1maWx0ZXJcIlxyXG4gICAgICAgIDpjbGFzcz1cInsgbG9hZGluZzogbG9hZGluZyB9XCJcclxuICAgID5cclxuICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZG9jdG9yU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkb2N0b3Itc2VsZWN0ZWQgZG9jdG9yXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInJlc2V0U2VsZWN0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHZzLWF2YXRhciBjbGFzcz1cImF2YXRhclwiIGNpcmNsZSBzaXplPVwiMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvclNlbGVjdGVkLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZG9jdG9yU2VsZWN0ZWQuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnL2ltZy9hdmF0YXItZGVmYXVsdC5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJgQXZhdGFyIGRlICR7ZG9jdG9yU2VsZWN0ZWQuZmlyc3RuYW1lfSAke2RvY3RvclNlbGVjdGVkLmxhc3RuYW1lfWBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0VXNlck5hbWUoZG9jdG9yU2VsZWN0ZWQpIH19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdi1lbHNlXHJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVyXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInNlbGVjdEJveCA9IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgQGtleXVwPVwic2VsZWN0Qm94V2l0aFRocm90dGxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZG9jdG9yLWNob2ljZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICdiLXItYi16ZXJvJzogc2VsZWN0Qm94LFxyXG4gICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlci1ncmF5Jzogc2VsZWN0Qm94LFxyXG4gICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJcclxuICAgICAgICAgICAgICAgICAgICAhc2VsZWN0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ1PDqWxlY3Rpb25uZXogdm90cmUgcHJhdGljaWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdSZWNoZXJjaGV6IHZvdHJlIHByYXRpY2llbidcclxuICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFycm93LXRvZ2dsZS1ib3hcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IHNlbGVjdEJveCB9XCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZVNlbGVjdEJveFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidnMtaWNvbi1hcnJvd1wiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJoZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0Qm94XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImZvY3VzSW5wdXRTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCB2LWlmPVwiZ2V0RG9jdG9ycy5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKGRvY3RvciwgaSkgaW4gZ2V0RG9jdG9yc1wiIDprZXk9XCJpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG9jdG9yXCIgQGNsaWNrPVwic2VsZWN0RG9jdG9yKGRvY3RvcilcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYXZhdGFyIGNsYXNzPVwiYXZhdGFyXCIgY2lyY2xlIHNpemU9XCIzNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvY3Rvci5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnL2ltZy9hdmF0YXItZGVmYXVsdC5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImBBdmF0YXIgZGUgJHtkb2N0b3IuZmlyc3RuYW1lfSAke2RvY3Rvci5sYXN0bmFtZX1gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRVc2VyTmFtZShkb2N0b3IpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vdC1mb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlcnMtc2xhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWN1biBwcmF0aWNpZW4gbidhIMOpdMOpIHRyb3V2w6kgYXZlYyBcIjxzdHJvbmc+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3N0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cIjwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVtcHR5LWVycm9yLW1lc3NcIlxyXG4gICAgICAgICAgICAgICAgdi1pZj1cImVycm9yTWVzc2FnZSAmJiAhZG9jdG9yU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7eyBlcnJvck1lc3NhZ2UgfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJsb2FkaW5nLXRleHRcIj5DaGFyZ2VtZW50Li4uPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmIGZyb20gXCIuLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgQ2xpY2tPdXRzaWRlIGZyb20gXCJ2dWUtY2xpY2stb3V0c2lkZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBkb2N0b3JTZWxlY3RlZDogW09iamVjdCwgbnVsbF0sXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBbU3RyaW5nLCBudWxsXSxcclxuICAgIH0sXHJcbiAgICBkaXJlY3RpdmVzOiB7XHJcbiAgICAgICAgQ2xpY2tPdXRzaWRlLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZG9jdG9yczogW10sXHJcbiAgICAgICAgICAgIGZpbHRlcjogXCJcIixcclxuICAgICAgICAgICAgc2VsZWN0Qm94OiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0SW5wdXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXREb2N0b3JzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRTZWFyY2godGhpcy5kb2N0b3JzLCB0aGlzLmZpbHRlcik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9nZ2xlU2VsZWN0Qm94KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJveCA9ICF0aGlzLnNlbGVjdEJveDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZG9jdG9yU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTZWxlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RCb3gpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dFNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlU2VsZWN0Qm94KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJveCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0RG9jdG9yKGRvY3Rvcikge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwic2V0RG9jdG9yU2VsZWN0ZWRcIiwgZG9jdG9yKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlU2VsZWN0Qm94KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNldFNlbGVjdCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcInNldERvY3RvclNlbGVjdGVkXCIsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkb2N0b3ItY2hvaWNlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0U2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1c0lucHV0U2VsZWN0KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRVc2VyTmFtZSh1c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFVzZXJOYW1lKHVzZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0Qm94V2l0aFRocm90dGxlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0Qm94VGhyb3R0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94VGhyb3R0bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RCb3hcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3hUaHJvdHRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAuZ2V0KGAvZ2V0L2RvY3RvcnNgKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9jdG9ycyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9jdG9yLWNob2ljZS1zZWxlY3RcIik7XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5zZWxlY3QtZmlsdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgbWluLWhlaWdodDogNS45cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICAmLmItci1iLXplcm8ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWluLWhlaWdodDogNS4wMDZyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS40cmVtIDEuN3JlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0LjVyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAwLjVyZW0gMCAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwLjA1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wbGFjZWhvbGRlci1ncmF5IHtcclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNiNGFkOWE7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvdy10b2dnbGUtYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwLjdyZW07XHJcbiAgICAgICAgcmlnaHQ6IDAuN3JlbTtcclxuICAgICAgICB3aWR0aDogMy44cmVtO1xyXG4gICAgICAgIGhlaWdodDogMy40cmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAmLnZzLWljb24tYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmU1NDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjVyZW07XHJcbiAgICAgICAgICAgICAgICByaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNjAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS12cy10ZXh0KSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tdnMtdGV4dCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMS45cmVtO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QtYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1LjFyZW07XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiA3Nzc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjVyZW0gMC41cmVtO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAtNXB4IHJnYmEoNDQsIDExLCAxMSwgMC4xNSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTksIDEuMDMsIDAuNzksIDEuMDIpO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDI2LjNyZW07XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OiA2LjdyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRvY3Rvci1zZWxlY3RlZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNC42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZ3JheS1taWRkbGU7XHJcblxyXG4gICAgICAgICYuZG9jdG9yIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuNHJlbSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kb2N0b3Ige1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbSAxLjhyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBhbmltYXRpb246IGZhZGVFbnRlciAwLjVzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cclxuICAgICAgICAmOm5vdCguZG9jdG9yLXNlbGVjdGVkKTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjY1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpub3QoLmRvY3Rvci1zZWxlY3RlZCk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjY1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGdyYXktbWlkZGxlLCAwLjE1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNHJlbTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMy41cmVtO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAuYmlydGhkYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOGVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjViODVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMmVtIDAuNGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZW1haWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzkxYTNiZDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmJpZyB7XHJcbiAgICAgICAgLmRvY3RvciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcblxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm90LWZvdW5kIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUVudGVyIDAuNXM7XHJcbiAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDMuOHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzLjhyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9hZGluZy10ZXh0IHtcclxuICAgICAgICBoZWlnaHQ6IDUuN3JlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjZyZW07XHJcbiAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhyZW07XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxEb2N0b3JDaG9pY2VcclxuICAgICAgICAgICAgdi1pZj1cIiFwYXRpZW50LmRvY3RvciAmJiAhcGF0aWVudEhhc05vRG9jdG9yQ2hvaWNlICYmICFkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgOnBhdGllbnQ9XCJwYXRpZW50XCJcclxuICAgICAgICAgICAgOmNzcmZUb2tlblNlbGVjdERvY3Rvcj1cImNzcmZUb2tlblNlbGVjdERvY3RvclwiXHJcbiAgICAgICAgICAgIDpjc3JmVG9rZW5Db250YWN0PVwiY3NyZlRva2VuQ29udGFjdFwiXHJcbiAgICAgICAgICAgIEBwYXRpZW50SGFzTm9Eb2N0b3JDaG9pY2U9XCJzZXRQYXRpZW50SGFzTm9Eb2N0b3JDaG9pY2VcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgdi1lbHNlXHJcbiAgICAgICAgICAgIGlkPVwiZGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJkYi1wYXRpZW50XCJcclxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZG9jdG9yLXZpZXcnOiBkb2N0b3JWaWV3IH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2l2LWFycm93LWxlZnQgaWNvbi0zMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVkZXJpY3RUb0Rhc2hib2FyZCgpXCJcclxuICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBzdXIgdm90cmUgZGFzaGJvYXJkICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvaGFuZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIGQndW5lIG1haW4gcXVpIGZhaXQgJ2NvdWNvdSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmQgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInBhdGllbnQuZmlyc3RuYW1lIHx8IHBhdGllbnQubGFzdG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBhdGllbnQuZmlyc3RuYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwYXRpZW50Lmxhc3RuYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcGF0aWVudC5lbWFpbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtYmxvY2sgbW9iaWxlLXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkxlIHBhdGllbnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIm15RG9jdG9yQ29udGVudFwiIGNsYXNzPVwicGF0aWVudC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXRpZW50LWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWF2YXRhciBjbGFzcz1cImF2YXRhclwiIGNpcmNsZSBzaXplPVwiMTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGF0aWVudC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcvaW1nL2F2YXRhci1kZWZhdWx0LnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImBBdmF0YXIgZGUgJHtwYXRpZW50LmZpcnN0bmFtZX0gJHtwYXRpZW50Lmxhc3RuYW1lfWBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXRpZW50LWluZm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRVc2VyTmFtZShwYXRpZW50KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwicGF0aWVudC5iaXJ0aGRhdGVcIiBjbGFzcz1cImJpcnRoZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRBZ2UocGF0aWVudC5iaXJ0aGRhdGUpIH19IGFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxNeVNjb3Jlc1xyXG4gICAgICAgICAgICAgICAgICAgIDpwYXRpZW50PVwicGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRvY3RvclZpZXc9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICA6cGF0aWVudFdvcmtzaGVldHM9XCJwYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cz1cImxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE15V29ya3NoZWV0c1xyXG4gICAgICAgICAgICAgICAgICAgIDpwYXRpZW50PVwicGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRvY3RvclZpZXc9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICA6ZG9jdG9yPVwiY3VycmVudFVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpwYXRpZW50V29ya3NoZWV0cz1cInBhdGllbnRXb3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgICAgICA6bG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzPVwibG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15RGFzaGJvYXJkTm90aWZpY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cGF0aWVudD1cInBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y3NyZlRva2VuQWNjZXB0RG9jdG9yPVwiY3NyZlRva2VuQWNjZXB0RG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNzcmZUb2tlbkRlY2xpbmVEb2N0b3I9XCJjc3JmVG9rZW5EZWNsaW5lRG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXktZG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IHJlZHVjZWQ6ICFteURvY3RvckNvbnRlbnQgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm15RG9jdG9yQ29udGVudCA9ICFteURvY3RvckNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPk1vbiBwcmF0aWNpZW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiaGVpZ2h0MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibXlEb2N0b3JDb250ZW50XCIgY2xhc3M9XCJkb2N0b3ItZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb2N0b3ItYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJsb2FkaW5nRG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBhdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1hdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmFkZFJlcXVlc3REb2N0b3IgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ0RvY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjExNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZG9jdG9yLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXRpZW50LmRvY3Rvci5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy4uLy4uL2ltZy9hdmF0YXItZGVmYXVsdC5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiYEF2YXRhciBkZSAke3BhdGllbnQuZG9jdG9yLmZpcnN0bmFtZX0gJHtwYXRpZW50LmRvY3Rvci5sYXN0bmFtZX1gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZhbHNlID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmFkZFJlcXVlc3REb2N0b3IgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmdEb2N0b3IpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXBhdGllbnQuZG9jdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhdmF0YXIgd2FpdGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3NtaWxleS82MC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNtaWxleSBNb25vY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb2N0b3ItaW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ0RvY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsb2FkaW5nIG5hbWUgdy01NVwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibG9hZGluZyBjaXR5IHctNDVcIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmdEb2N0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VXNlck5hbWUocGF0aWVudC5kb2N0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWluaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWNoYW5nZS1kb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuTW9kYWxDaGFuZ2VEb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJmYXMgZmEtc3luYy1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Q2hhbmdlciBkZSBwcmF0aWNpZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbnRpdHktY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmRvY3Rvci5lbnRpdHlOYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZG9jdG9yLmNpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXRpZW50LmRvY3Rvci5lbnRpdHlOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmRvY3Rvci5lbnRpdHlOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZG9jdG9yLmVudGl0eU5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZG9jdG9yLmNpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiwgPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtaWY9XCJwYXRpZW50LmRvY3Rvci5jaXR5XCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5kb2N0b3IuY2l0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYWRkUmVxdWVzdERvY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nRG9jdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbiBhdHRlbnRlIGRlIHZhbGlkYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhcGF0aWVudC5kb2N0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicFwiPkVuIGF0dGVudGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1YnBcIj5VbiBkZSBub3MgcHJhdGljaWVucyB2YSBwcmVuZHJlIGNvbnRhY3QgYXZlYyB2b3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3VyJm5ic3A7w6lsYWJvcmVyIGxlIHRyYWl0ZW1lbnQgYXBwcm9wcmnDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtYmxvY2sgZGVza3RvcC12aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MZSBwYXRpZW50PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibXlEb2N0b3JDb250ZW50XCIgY2xhc3M9XCJwYXRpZW50LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXRpZW50LWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1hdmF0YXIgY2xhc3M9XCJhdmF0YXJcIiBjaXJjbGUgc2l6ZT1cIjExNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXRpZW50LmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcvaW1nL2F2YXRhci1kZWZhdWx0LnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiYEF2YXRhciBkZSAke3BhdGllbnQuZmlyc3RuYW1lfSAke3BhdGllbnQubGFzdG5hbWV9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1hdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXRpZW50LWluZm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRVc2VyTmFtZShwYXRpZW50KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGF0aWVudC5iaXJ0aGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiaXJ0aGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRBZ2UocGF0aWVudC5iaXJ0aGRhdGUpIH19IGFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxNeUV4ZXJjaXNlU3RhdHNcclxuICAgICAgICAgICAgICAgICAgICA6cGF0aWVudD1cInBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkb2N0b3JWaWV3PVwiZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOnBhdGllbnRXb3Jrc2hlZXRzPVwicGF0aWVudFdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nUGF0aWVudFdvcmtzaGVldHM9XCJsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhbmdlLWRvY3Rvci1tb2RhbFwiIHYtaWY9XCJtb2RhbENoYW5nZURvY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cImNoYW5nZS1kb2N0b3ItYm94XCIgY2xhc3M9XCJraXYtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ2cy1kaWFsb2dfX2Nsb3NlIGJ0bi1jbG9zZS1tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZU1vZGFsQ2hhbmdlRG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ2cy1pY29uLWNsb3NlIHZzLWljb24taG92ZXIteFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DaGFuZ2VyIGRlIHByYXRpY2llbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEb2N0b3JTZWxlY3RCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmlnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkb2N0b3JTZWxlY3RlZD1cImRvY3RvclNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzZXREb2N0b3JTZWxlY3RlZD1cInNldERvY3RvclNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VNb2RhbENoYW5nZURvY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPkFubnVsZXI8L3ZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nQ2hhbmdlRG9jdG9yIHx8ICFkb2N0b3JTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nQ2hhbmdlRG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZGVDaGFuZ2VEb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5WYWxpZGVyPC92cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgZiBmcm9tIFwiLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IERvY3RvckNob2ljZSBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlL0RvY3RvckNob2ljZS52dWVcIjtcclxuaW1wb3J0IE15U2NvcmVzIGZyb20gXCIuL0Rhc2hib2FyZFBhZ2UvTXlTY29yZXMudnVlXCI7XHJcbmltcG9ydCBNeURhc2hib2FyZE5vdGlmaWNhdGlvbnMgZnJvbSBcIi4vRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlXCI7XHJcbmltcG9ydCBNeVdvcmtzaGVldHMgZnJvbSBcIi4vRGFzaGJvYXJkUGFnZS9NeVdvcmtzaGVldHMudnVlXCI7XHJcbmltcG9ydCBNeUV4ZXJjaXNlU3RhdHMgZnJvbSBcIi4vRGFzaGJvYXJkUGFnZS9NeUV4ZXJjaXNlU3RhdHMudnVlXCI7XHJcbmltcG9ydCBEb2N0b3JTZWxlY3RCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvRG9jdG9yU2VsZWN0Qm94LnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIERvY3RvckNob2ljZSxcclxuICAgICAgICBNeVNjb3JlcyxcclxuICAgICAgICBNeURhc2hib2FyZE5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgTXlXb3Jrc2hlZXRzLFxyXG4gICAgICAgIE15RXhlcmNpc2VTdGF0cyxcclxuICAgICAgICBEb2N0b3JTZWxlY3RCb3gsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXRpZW50OiBudWxsLFxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcjogbnVsbCxcclxuICAgICAgICAgICAgZG9jdG9yVmlldzogbnVsbCxcclxuICAgICAgICAgICAgY3NyZlRva2VuQ29udGFjdDogbnVsbCxcclxuICAgICAgICAgICAgY3NyZlRva2VuU2VsZWN0RG9jdG9yOiBudWxsLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5BY2NlcHREb2N0b3I6IG51bGwsXHJcbiAgICAgICAgICAgIGNzcmZUb2tlbkRlY2xpbmVEb2N0b3I6IG51bGwsXHJcbiAgICAgICAgICAgIG15REJOb3RpZmljYXRpb25zQ29udGVudDogdHJ1ZSxcclxuICAgICAgICAgICAgbXlTY29yZXNDb250ZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBteURvY3RvckNvbnRlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIG15V29ya3NoZWV0c0NvbnRlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGxvYWRpbmdEb2N0b3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nUGF0aWVudFdvcmtzaGVldHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXRpZW50V29ya3NoZWV0czogW10sXHJcbiAgICAgICAgICAgIG1vZGFsQ2hhbmdlRG9jdG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgZG9jdG9yU2VsZWN0ZWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDaGFuZ2VEb2N0b3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXRpZW50SGFzTm9Eb2N0b3JDaG9pY2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9wZW5Nb2RhbENoYW5nZURvY3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbENoYW5nZURvY3RvciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJuby1zY3JvbGxiYXJcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQYXRpZW50SGFzTm9Eb2N0b3JDaG9pY2UocGF0aWVudEhhc05vRG9jdG9yQ2hvaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aWVudEhhc05vRG9jdG9yQ2hvaWNlID0gcGF0aWVudEhhc05vRG9jdG9yQ2hvaWNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VNb2RhbENoYW5nZURvY3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbENoYW5nZURvY3RvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRvY3RvclNlbGVjdGVkID0gdGhpcy5wYXRpZW50LmRvY3RvcjtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbGJhclwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFRpbWVMZWZ0QmVmb3JlTmV4dFNlc3Npb24oZW5kRGF0ZUN1cnJlbnRTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gZi5nZXRUaW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgZW5kRGF0ZUN1cnJlbnRTZXNzaW9uXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGltZUxlZnQuZGF5cyA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aW1lTGVmdC5kYXlzKSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7TWF0aC5yb3VuZCh0aW1lTGVmdC5kYXlzKX0gam91cmBcclxuICAgICAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQodGltZUxlZnQuZGF5cyl9IGpvdXJzYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRpbWVMZWZ0LmhvdXJzID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lTGVmdC5ob3VycyA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7TWF0aC5yb3VuZCh0aW1lTGVmdC5ob3Vycyl9IGhldXJlYFxyXG4gICAgICAgICAgICAgICAgICAgIDogYCR7TWF0aC5yb3VuZCh0aW1lTGVmdC5ob3Vycyl9IGhldXJlc2A7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aW1lTGVmdC5taW51dGVzID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lTGVmdC5taW51dGVzID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtNYXRoLnJvdW5kKHRpbWVMZWZ0Lm1pbnV0ZXMpfSBtaW51dGVgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtNYXRoLnJvdW5kKHRpbWVMZWZ0Lm1pbnV0ZXMpfSBtaW51dGVzYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRpbWVMZWZ0LnNlY29uZHMgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVMZWZ0LnNlY29uZHMgPT09IDFcclxuICAgICAgICAgICAgICAgICAgICA/IGAke01hdGgucm91bmQodGltZUxlZnQuc2Vjb25kcyl9IHNlY29uZGVgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtNYXRoLnJvdW5kKHRpbWVMZWZ0LnNlY29uZHMpfSBzZWNvbmRlc2A7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FsY3VsV29ya3NoZWV0UHJvZ3Jlc3Npb24od29ya3NoZWV0KSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzc2lvbiA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAod29ya3NoZWV0LmV4ZXJjaXNlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4ZXJjaXNlUGVyY2VudFBhcnQgPSAxMDAgLyB3b3Jrc2hlZXQuZXhlcmNpc2VzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGVyY2lzZXNDb21wbGV0ZWRDb3VudCA9IHdvcmtzaGVldC5leGVyY2lzZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChlKSA9PiBlLmlzQ29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICApLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc2lvbiA9IGV4ZXJjaXNlUGVyY2VudFBhcnQgKiBleGVyY2lzZXNDb21wbGV0ZWRDb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyZXNzaW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VXNlck5hbWUodXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRVc2VyTmFtZSh1c2VyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUmVzaXplKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1NzYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlTY29yZXNDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlEb2N0b3JDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlXb3Jrc2hlZXRzQ29udGVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEFnZShiaXJ0aGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGYuZ2VuZXJhdGVBZ2VGcm9tRGF0ZU9mQmlydGgoYmlydGhkYXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGVyaWN0VG9EYXNoYm9hcmQoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2RvY3Rvci8ke3RoaXMuY3VycmVudFVzZXIuaWR9L2Rhc2hib2FyZGA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXREb2N0b3JTZWxlY3RlZChkb2N0b3JTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvY3RvclNlbGVjdGVkID0gZG9jdG9yU2VsZWN0ZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGVDaGFuZ2VEb2N0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0NoYW5nZURvY3RvciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAucG9zdChgL3BhdGllbnQvJHt0aGlzLnBhdGllbnQuaWR9L3NlbGVjdC9kb2N0b3JgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0aGlzLmNzcmZUb2tlblNlbGVjdERvY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBkb2N0b3JJZDogdGhpcy5kb2N0b3JTZWxlY3RlZC5pZCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNob2l4IGR1IHByYXRpY2llbiBlbnJlZ2lzdHLDqVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRpZW50LmFkZFJlcXVlc3REb2N0b3IgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGllbnQuZG9jdG9yID0gdGhpcy5kb2N0b3JTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbENoYW5nZURvY3RvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdDaGFuZ2VEb2N0b3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nQ2hhbmdlRG9jdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFwiRXJyZXVyXCIsIGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgVnVlLnByb3RvdHlwZS4kdnMgPSB0aGlzLiR2cztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmdXp6eS1iYWxsc1wiKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcclxuXHJcbiAgICAgICAgbW9tZW50LmxvY2FsZShcImZyLUZSXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZ1ZURhdGFcIikuaW5uZXJIVE1MKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gZGF0YS5wYXRpZW50O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIHRoaXMuZG9jdG9yVmlldyA9IGRhdGEuZG9jdG9yVmlldztcclxuICAgICAgICB0aGlzLmNzcmZUb2tlbkFjY2VwdERvY3RvciA9IGRhdGEuY3NyZlRva2VuQWNjZXB0RG9jdG9yO1xyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuQ29udGFjdCA9IGRhdGEuY3NyZlRva2VuQ29udGFjdDtcclxuICAgICAgICB0aGlzLmNzcmZUb2tlbkRlY2xpbmVEb2N0b3IgPSBkYXRhLmNzcmZUb2tlbkRlY2xpbmVEb2N0b3I7XHJcbiAgICAgICAgdGhpcy5jc3JmVG9rZW5TZWxlY3REb2N0b3IgPSBkYXRhLmNzcmZUb2tlblNlbGVjdERvY3RvcjtcclxuICAgICAgICB0aGlzLmRvY3RvclNlbGVjdGVkID0gdGhpcy5wYXRpZW50LmRvY3RvcjtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYC9wYXRpZW50LyR7dGhpcy5wYXRpZW50LmlkfS9nZXQvd29ya3NoZWV0c2ApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRpZW50V29ya3NoZWV0cyA9IHJlc3BvbnNlLmRhdGEubWFwKCh3b3Jrc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi53b3Jrc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldFByb2dyZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxXb3Jrc2hlZXRQcm9ncmVzc2lvbih3b3Jrc2hlZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFdvcmtzaGVldFNlc3Npb25zOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V29ya3NoZWV0U2Vzc2lvbjoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aWVudFdvcmtzaGVldHMuZm9yRWFjaCgod29ya3NoZWV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC9wYXRpZW50LyR7dGhpcy5wYXRpZW50LmlkfS9nZXQvY3VycmVudC13b3Jrc2hlZXQtc2Vzc2lvbi8ke3dvcmtzaGVldC5pZH0vdGltZS1sZWZ0LWJlZm9yZS1uZXh0YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmNvdW50T2xkV29ya3NoZWV0U2Vzc2lvbnMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmNvdW50T2xkV29ya3NoZWV0U2Vzc2lvbnM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50aW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGltZUxlZnRCZWZvcmVOZXh0U2Vzc2lvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbi5lbmRBdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5ub3RpZlRpbWVMZWZ0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmRvY3RvclZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlck5vdGlmTGlzdCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXItbm90aWYtbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3RpZkJlbGwgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RpZi1iZWxsXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZCZWxsLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1ub3RpZmljYXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInByaW9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJjbGlja2FibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vdXNlb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9wYXRpZW50LyR7dGhpcy5wYXRpZW50LmlkfS9maWNoZS8ke3Jlc3BvbnNlLmRhdGEubm90aWZUaW1lTGVmdC53b3Jrc2hlZXRJZH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdkljb24uY2xhc3NMaXN0LmFkZChcIm5vdGlmLWljb25cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFwiL2ltZy9pY29ucy9jb2xvcmVkL2Nsb2NrLnN2Z1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuYWx0ID0gXCJJY29uZSBkJ3VuZSBtb250cmUgLyBob3Jsb2dlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiaWNvbi1jbG9ja1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gYFBsdXMgcXVlIHF1ZWxxdWVzICR7cmVzcG9uc2UuZGF0YS5ub3RpZlRpbWVMZWZ0LnRpbWV9IHBvdXIgcsOpYWxpc2VyIHZvcyBleGVyY2ljZXMgZGUgXCIke3Jlc3BvbnNlLmRhdGEubm90aWZUaW1lTGVmdC53b3Jrc2hlZXR9XCIsIGplIG0neSBtZXQgbWFpbnRlbmFudCAhYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJY29uLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXZJY29uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5vdGlmTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL3BhdGllbnQvJHt0aGlzLnBhdGllbnQuaWR9L2dldC90b3RhbC13b3Jrc2hlZXQtc2Vzc2lvbnMvJHt3b3Jrc2hlZXQuaWR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiNkYXNoYm9hcmQuZGItcGF0aWVudCB7XHJcbiAgICAmLmRvY3Rvci12aWV3IHtcclxuICAgICAgICA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMC41cmVtO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTEuMnJlbTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzLjZyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgI3BhdGllbnQge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogcGF0aWVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXNpZGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgXCJwYXRpZW50XCJcclxuICAgICAgICAgICAgICAgIFwibXlzY29yZXNcIlxyXG4gICAgICAgICAgICAgICAgXCJteXdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgXCJteWV4ZXJjaXNlc3RhdHNcIjtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgICAgICBcIm15c2NvcmVzICAgICAgbXlzY29yZXMgICAgICBhc2lkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgXCJteXdvcmtzaGVldHMgIG15d29ya3NoZWV0cyAgYXNpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFwibXlleGVyY2lzZXN0YXRzICBteWV4ZXJjaXNlc3RhdHMgIGFzaWRlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYWluIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICBcIm15c2NvcmVzXCJcclxuICAgICAgICAgICAgXCJhc2lkZVwiXHJcbiAgICAgICAgICAgIFwibXl3b3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgXCJteWV4ZXJjaXNlc3RhdHNcIjtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICBcIm15c2NvcmVzICAgICAgbXlzY29yZXMgICAgICBhc2lkZVwiXHJcbiAgICAgICAgICAgICAgICBcIm15d29ya3NoZWV0cyAgbXl3b3Jrc2hlZXRzICBhc2lkZVwiXHJcbiAgICAgICAgICAgICAgICBcIm15ZXhlcmNpc2VzdGF0cyAgbXlleGVyY2lzZXN0YXRzICBhc2lkZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2t0b3AtdmlldyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vYmlsZS12aWV3IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuZGVza3RvcC12aWV3IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vYmlsZS12aWV3IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XHJcbiAgICB9XHJcbiAgICAuc3VicCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyOHJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gICAgfVxyXG4gICAgLmNoYW5nZS1kb2N0b3ItbW9kYWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxMTExMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgIC5idG4tY2xvc2UtbW9kYWwge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNXJlbSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDQ2LCA4NCwgMC44KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDclO1xyXG5cclxuICAgICAgICAgICAgLnNlbGVjdC1maWx0ZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmxvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJlMzg1OGExO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogODE1cHgpIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2NoYW5nZS1kb2N0b3ItYm94IHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idG4tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgIC52cy1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBpZD1cImRvY3Rvci1jaG9pY2VcIj5cclxuICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgIHYtaWY9XCJwYXRpZW50SGFzRG9jdG9yQ2hvaWNlICE9PSBudWxsXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwicGF0aWVudEhhc0RvY3RvckNob2ljZSA9IG51bGxcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0bi1wcmV2XCJcclxuICAgICAgICAgICAgY2lyY2xlXHJcbiAgICAgICAgICAgIGZsb2F0aW5nXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIj48L2k+XHJcbiAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgPGgxPkJpZW52ZW51ZSBzdXIgS2l2aWQgITwvaDE+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwicGF0aWVudEhhc0RvY3RvckNob2ljZSA9PT0gbnVsbFwiIGNsYXNzPVwiYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDQ+IEF2ZXotdm91cyZuYnNwO3VuJm5ic3A7cHJhdGljaWVuID88L2g0PlxyXG4gICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInBhdGllbnRIYXNEb2N0b3JDaG9pY2UgPSB0cnVlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgT3VpLCBqJ2FpIHVuIHByYXRpY2llblxyXG4gICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJwYXRpZW50SGFzTm9Eb2N0b3JDaG9pY2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBOb24sIGplIG4nZW4gYWkgcGFzXHJcbiAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgdi1pZj1cInBhdGllbnRIYXNEb2N0b3JDaG9pY2VcIlxyXG4gICAgICAgICAgICB2LWNsaWNrLW91dHNpZGU9XCJoaWRlU2VsZWN0Qm94XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtZmlsdGVyXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwieyBsb2FkaW5nOiBsb2FkaW5nIH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZG9jdG9yU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZG9jdG9yLXNlbGVjdGVkIGRvY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVzZXRTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1hdmF0YXIgY2xhc3M9XCJhdmF0YXJcIiBjaXJjbGUgc2l6ZT1cIjM1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JTZWxlY3RlZC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb2N0b3JTZWxlY3RlZC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnL2ltZy9hdmF0YXItZGVmYXVsdC5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImBBdmF0YXIgZGUgJHtkb2N0b3JTZWxlY3RlZC5maXJzdG5hbWV9ICR7ZG9jdG9yU2VsZWN0ZWQubGFzdG5hbWV9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1hdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZ2V0VXNlck5hbWUoZG9jdG9yU2VsZWN0ZWQpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHYtZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNlbGVjdEJveCA9IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInNlbGVjdEJveFdpdGhUaHJvdHRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkb2N0b3ItY2hvaWNlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYi1yLWItemVybyc6IHNlbGVjdEJveCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyLWdyYXknOiBzZWxlY3RCb3gsXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFzZWxlY3RCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ1PDqWxlY3Rpb25uZXogdm90cmUgcHJhdGljaWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnUmVjaGVyY2hleiB2b3RyZSBwcmF0aWNpZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFycm93LXRvZ2dsZS1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBzZWxlY3RCb3ggfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlU2VsZWN0Qm94XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0Qm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZm9jdXNJbnB1dFNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgdi1pZj1cImdldERvY3RvcnMubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIoZG9jdG9yLCBpKSBpbiBnZXREb2N0b3JzXCIgOmtleT1cImlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0RG9jdG9yKGRvY3RvcilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWF2YXRhciBjbGFzcz1cImF2YXRhclwiIGNpcmNsZSBzaXplPVwiMzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZG9jdG9yLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnL2ltZy9hdmF0YXItZGVmYXVsdC5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiYEF2YXRhciBkZSAke2RvY3Rvci5maXJzdG5hbWV9ICR7ZG9jdG9yLmxhc3RuYW1lfWBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1hdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRVc2VyTmFtZShkb2N0b3IpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vdC1mb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXJzLXNsYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWN1biBwcmF0aWNpZW4gbidhIMOpdMOpIHRyb3V2w6kgYXZlYyBcIjxzdHJvbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBmaWx0ZXIgfX08L3N0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XCI8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbGlkLWRvY3Rvci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDx2cy1idXR0b24gQGNsaWNrPVwidmFsaWRlRG9jdG9yQ2hvaWNlXCI+VmFsaWRlcjwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjb250YWN0XCIgQGNsaWNrPVwicGF0aWVudEhhc05vRG9jdG9yQ2hvaWNlXCI+SmUgbidhaSBwYXMgZGUgcHJhdGljaWVuPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgQ2xpY2tPdXRzaWRlIGZyb20gXCJ2dWUtY2xpY2stb3V0c2lkZVwiO1xyXG5pbXBvcnQgVnVlUGhvbmVOdW1iZXJJbnB1dCBmcm9tIFwidnVlLXBob25lLW51bWJlci1pbnB1dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwYXRpZW50OiBPYmplY3QsXHJcbiAgICAgICAgY3NyZlRva2VuU2VsZWN0RG9jdG9yOiBTdHJpbmcsXHJcbiAgICAgICAgY3NyZlRva2VuQ29udGFjdDogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGRpcmVjdGl2ZXM6IHtcclxuICAgICAgICBDbGlja091dHNpZGUsXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFZ1ZVBob25lTnVtYmVySW5wdXQsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkb2N0b3JzOiBbXSxcclxuICAgICAgICAgICAgZG9jdG9yU2VsZWN0ZWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGZpbHRlcjogXCJcIixcclxuICAgICAgICAgICAgc2VsZWN0Qm94OiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0SW5wdXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb290ZXI6IG51bGwsXHJcbiAgICAgICAgICAgIG1vZGFsQ29udGFjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdWYWxpZENvbnRhY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZToge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRhY3RUZWw6IG51bGwsXHJcbiAgICAgICAgICAgIHBhdGllbnRIYXNEb2N0b3JDaG9pY2U6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGdldERvY3RvcnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFNlYXJjaCh0aGlzLmRvY3RvcnMsIHRoaXMuZmlsdGVyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yVGVsKCkge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhY3RUZWwgJiYgdGhpcy5jb250YWN0VGVsLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWN0VGVsRm9ybWF0ZWQgPSB0aGlzLmNvbnRhY3RUZWwucmVwbGFjZSgvIC9nLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZSA9IC9eMFsxLTldKFstLiBdP1swLTldezJ9KXs0fSQvO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcmUudGVzdChTdHJpbmcoY29udGFjdFRlbEZvcm1hdGVkKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB2YWxpZGVEb2N0b3JDaG9pY2UoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvY3RvclNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KGAvcGF0aWVudC8ke3RoaXMucGF0aWVudC5pZH0vc2VsZWN0L2RvY3RvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0aGlzLmNzcmZUb2tlblNlbGVjdERvY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9ySWQ6IHRoaXMuZG9jdG9yU2VsZWN0ZWQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2hvaXggZHUgcHJhdGljaWVuIGVucmVnaXN0csOpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGllbnQuYWRkUmVxdWVzdERvY3RvciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGllbnQuZG9jdG9yID0gdGhpcy5kb2N0b3JTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF0aWVudEhhc05vRG9jdG9yQ2hvaWNlKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwicGF0aWVudEhhc05vRG9jdG9yQ2hvaWNlXCIsIHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9nZ2xlU2VsZWN0Qm94KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJveCA9ICF0aGlzLnNlbGVjdEJveDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZG9jdG9yU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTZWxlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RCb3gpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dFNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlU2VsZWN0Qm94KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJveCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0RG9jdG9yKGRvY3Rvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRvY3RvclNlbGVjdGVkID0gZG9jdG9yO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVTZWxlY3RCb3goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0U2VsZWN0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvY3RvclNlbGVjdGVkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZG9jdG9yLWNob2ljZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dFNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9jdXNJbnB1dFNlbGVjdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VXNlck5hbWUodXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRVc2VyTmFtZSh1c2VyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkQ29udGFjdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDb250YWN0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgIC5wb3N0KGAvY29udGFjdGAsIHtcclxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuQ29udGFjdCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IHRoaXMucGF0aWVudC5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6IHRoaXMucGF0aWVudC5sYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5wYXRpZW50LmVtYWlsLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdFRlbDogdGhpcy5jb250YWN0VGVsLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXCJNZXNzYWdlIGVudm95w6lcIiwgcmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWxDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWxDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvbkVtYWlsKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlID1cclxuICAgICAgICAgICAgICAgIC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHJcbiAgICAgICAgICAgIGlmICghcmUudGVzdChTdHJpbmcodGhpcy5wYXRpZW50LmVtYWlsKS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJNZXJjaSBkJ2VudHJlciB1biBlbWFpbCB2YWxpZGUuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdEJveFdpdGhUaHJvdHRsZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdEJveFRocm90dGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEJveFRocm90dGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0Qm94XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94VGhyb3R0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJcIik7XHJcbiAgICAgICAgdGhpcy5mb290ZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGF0aWVudC5maXJzdG5hbWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRpZW50LmZpcnN0bmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXRpZW50Lmxhc3RuYW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aWVudC5sYXN0bmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYC9wYXRpZW50LyR7dGhpcy4kcGFyZW50LnBhdGllbnQuaWR9L2dldC9kb2N0b3JzYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3RvcnMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvY3Rvci1jaG9pY2Utc2VsZWN0XCIpO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4jZG9jdG9yLWNob2ljZSB7XHJcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLnZzLWJ1dHRvbi5idG4tcHJldiB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb246IDAuNXMgZWFzZSAwLjJzIGZvcndhcmRzIGZhZGVFbnRlcjtcclxuICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcmVtIDAuNHJlbSAxLjRyZW0gMHJlbSByZ2JhKDI1MSwgMTM5LCAxMDQsIDAuMyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmRmYzAwO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHJlbSAwLjRyZW0gMS40cmVtIDByZW0gcmdiYSgyNTEsIDEzOSwgMTA0LCAwLjgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGVmdDogMnJlbTtcclxuICAgICAgICB0b3A6IDhyZW07XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIHtcclxuICAgICAgICAgICAgbGVmdDogNXJlbTtcclxuICAgICAgICAgICAgdG9wOiAxMHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICBsZWZ0OiAzLjVyZW07XHJcbiAgICAgICAgICAgIHRvcDogOS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudmFsaWQtZG9jdG9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMjRyZW07XHJcblxyXG4gICAgICAgIC52cy1idXR0b24ge1xyXG4gICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0LWZpbHRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi4xcmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgbWluLWhlaWdodDogNS45cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAmLmItci1iLXplcm8ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtIDAuOHJlbSAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjlyZW0gMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNC41cmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW0gMC44cmVtIDAgMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMC4xcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnBsYWNlaG9sZGVyLWdyYXkge1xyXG4gICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvdy10b2dnbGUtYm94IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDEuM3JlbTtcclxuICAgICAgICAgICAgcmlnaHQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDMuOHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzLjRyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3QtYm94IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUuNXJlbTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMS4ycmVtIDEuMnJlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAtNXB4IHJnYmEoNDQsIDExLCAxMSwgMC4xNSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE5LCAxLjAzLCAwLjc5LCAxLjAyKTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjZyZW07XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG9jdG9yLXNlbGVjdGVkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAyLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNC42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuNHJlbSk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvY3RvciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAyLjJyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlRW50ZXIgMC41cztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkZ3JheS1taWRkbGUsIDAuMTUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ub3QtZm91bmQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMy4zcmVtIDJyZW07XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3Qge1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMuMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4uY29udGFjdC1mb3JtIHtcclxuICAgIC52cy1pbnB1dC1wYXJlbnQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZS1ibG9jayxcclxuICAgIC52dWUtcGhvbmUtbnVtYmVyLWlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIHRleHRhcmVhLFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNnJlbSAxLjdyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2U3ZGZjZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgJjpmb2N1cy12aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICNjMWI3OWQ7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMi41cmVtIC0wLjRyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyB+IGxhYmVsLFxyXG4gICAgICAgICAgICAmLmZpbGxlZCB+IGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIHRvcDogMS42cmVtO1xyXG4gICAgICAgICAgICBsZWZ0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2MxYjc5ZDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4wNXJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZ1ZS1waG9uZS1udW1iZXItaW5wdXQge1xyXG4gICAgICAgICYuZmlsbGVkIHtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjhyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjYXJldC1jb2xvcjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmZvY3VzIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNjMWI3OWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmVycm9yIHtcclxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgODYsIDc1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uXHJcbiAgICAgICAgaWQ9XCJkYXNoYm9hcmQtbm90aWZpY2F0aW9uc1wiXHJcbiAgICAgICAgY2xhc3M9XCJraXYtYmxvY2tcIlxyXG4gICAgICAgIDpjbGFzcz1cInsgcmVkdWNlZDogISRwYXJlbnQubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50IH1cIlxyXG4gICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgZ2V0RGFzaGJvYXJkTm90aWZpY2F0aW9ucy5sZW5ndGggfHxcclxuICAgICAgICAgICAgIXBhdGllbnQuYmlydGhkYXRlIHx8XHJcbiAgICAgICAgICAgICFwYXRpZW50LmdlbmRlciB8fFxyXG4gICAgICAgICAgICAhcGF0aWVudC5maXJzdG5hbWUgfHxcclxuICAgICAgICAgICAgIXBhdGllbnQubGFzdG5hbWUgfHxcclxuICAgICAgICAgICAgIXBhdGllbnQuaXNWZXJpZmllZFxyXG4gICAgICAgIFwiXHJcbiAgICA+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1jb250ZW50XCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAkcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgISRwYXJlbnQubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50XHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMj5Ob3RpZmljYXRpb25zPC9oMj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHYtaWY9XCIkcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbnMtbGlzdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIobm90aWYsIGkpIGluIGdldERhc2hib2FyZE5vdGlmaWNhdGlvbnNcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgJ2FkZC1wYXRpZW50JyA9PT0gbm90aWYuY29udGVudFswXS50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90aWZpY2F0aW9ucy1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm90aWZpY2F0aW9uLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWZvcj1cIihlLCBpKSBpbiBub3RpZi5jb250ZW50XCIgOmtleT1cImlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiJ3RleHQnID09PSBlLnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZS5jb250ZW50IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIndXNlcicgPT09IGUudHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlLmNvbnRlbnQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3RpZmljYXRpb24tYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGRpc2FibGVkOiBhY3Rpb25JblByb2dyZXNzIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uLWxpbmsgZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImFjY2VwdERvY3Rvcihub3RpZi5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWFjY2VwdCBpY29uLTIyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFjY2VwdGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFjdGlvbi1saW5rIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVjbGluZURvY3Rvcihub3RpZi5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWRlY2xpbmUgaWNvbi02XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlZnVzZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFsb2FkaW5nICYmICFwYXRpZW50LmlzVmVyaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90aWZpY2F0aW9ucy1pdGVtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vdGlmaWNhdGlvbi1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWw6lyaWZpZXIgdm90cmUgYWRyZXNzZSBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90aWZpY2F0aW9uLWFjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGRpc2FibGVkOiBhY3Rpb25JblByb2dyZXNzIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uLWxpbmsgdmVyaWYtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNlbmRWZXJpZkVtYWlsKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlbnZveWVyIGxpZW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCFwYXRpZW50LmJpcnRoZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXBhdGllbnQuZ2VuZGVyIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcGF0aWVudC5maXJzdG5hbWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwYXRpZW50Lmxhc3RuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3RpZmljYXRpb25zLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm90aWZpY2F0aW9uLWxhYmVsXCI+Q29tcGzDqXRlciB2b3RyZSBwcm9maWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmtcIiA6aHJlZj1cImAvcGFyYW1ldHJlc2BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LXBlbiBpY29uLTRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21wbMOpdGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ibG9jayBub3RpZmljYXRpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsb2FkaW5nIHctNjAgbm90aWZpY2F0aW9uLWxhYmVsXCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyB3LTI1IG5vdGlmaWNhdGlvbi1hY3Rpb25zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctYmxvY2sgbm90aWZpY2F0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibG9hZGluZyB3LTMwIG5vdGlmaWNhdGlvbi1sYWJlbFwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgdy0zMCBub3RpZmljYXRpb24tYWN0aW9uc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXNoYm9hcmROb3RpZmljYXRpb25zOiBbXSxcclxuICAgICAgICAgICAgYWN0aW9uSW5Qcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwYXRpZW50OiBPYmplY3QsXHJcbiAgICAgICAgY3NyZlRva2VuQWNjZXB0RG9jdG9yOiBTdHJpbmcsXHJcbiAgICAgICAgY3NyZlRva2VuRGVjbGluZURvY3RvcjogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0RGFzaGJvYXJkTm90aWZpY2F0aW9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFzaGJvYXJkTm90aWZpY2F0aW9ucztcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXREQk5vdGlmaWNhdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIGAvcGF0aWVudC8ke3RoaXMucGF0aWVudC5pZH0vZ2V0L3BhdGllbnQtZGFzaGJvYXJkLW5vdGlmaWNhdGlvbnNgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhc2hib2FyZE5vdGlmaWNhdGlvbnMgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY2NlcHREb2N0b3Iobm90aWZpY2F0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25JblByb2dyZXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgIC5wb3N0KGAvcGF0aWVudC8ke3RoaXMucGF0aWVudC5pZH0vYWNjZXB0L2RvY3RvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuQWNjZXB0RG9jdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbklkOiBub3RpZmljYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICBkb2N0b3JJZDogdGhpcy5wYXRpZW50LmRvY3Rvci5pZCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRlbWFuZGUgZCdham91dCBhY2NlcHTDqWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmROb3RpZmljYXRpb25zLnNwbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmROb3RpZmljYXRpb25zLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhc2hib2FyZE5vdGlmaWNhdGlvbnMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobikgPT4gbi5pZCA9PT0gbm90aWZpY2F0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVjbGluZURvY3Rvcihub3RpZmljYXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbkluUHJvZ3Jlc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgLnBvc3QoYC9wYXRpZW50LyR7dGhpcy5wYXRpZW50LmlkfS9kZWNsaW5lL2RvY3RvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuRGVjbGluZURvY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25JZDogbm90aWZpY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdG9ySWQ6IHRoaXMucGF0aWVudC5kb2N0b3IuaWQsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEZW1hbmRlIGQnYWpvdXQgcmVmdXPDqWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkTm90aWZpY2F0aW9ucy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkTm90aWZpY2F0aW9ucy5pbmRleE9mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmROb3RpZmljYXRpb25zLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG4pID0+IG4uaWQgPT09IG5vdGlmaWNhdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2VuZFZlcmlmRW1haWwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uSW5Qcm9ncmVzcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KGAvcGF0aWVudC8ke3RoaXMucGF0aWVudC5pZH0vcmVzZW5kL3ZlcmlmeS1lbWFpbGApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkUtbWFpbCBkZSB2w6lyaWZpY2F0aW9uIGVudm95w6lcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmdldERCTm90aWZpY2F0aW9ucygpO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuI2Rhc2hib2FyZC1ub3RpZmljYXRpb25zIHtcclxuICAgIGdyaWQtYXJlYTogbXlkYXNoYm9hcmRub3RpZjtcclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgaWQ9XCJteS1leGVyY2lzZS1zdGF0c1wiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwia2l2LWJsb2NrXCIgaWQ9XCJzZW5zaXRpdml0eVwiPlxyXG4gICAgICAgICAgICA8aDI+PHNwYW4+U2Vuc2liaWxpdMOpPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFwiIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlPVwic2Vuc2l0aXZpdHlVbml0T2ZUaW1lID09PSAnZGF5J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VTZW5zaXRpdml0eVVuaXRPZlRpbWUoJ2RheScpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSm91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cInNlbnNpdGl2aXR5VW5pdE9mVGltZSA9PT0gJ3dlZWsnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVNlbnNpdGl2aXR5VW5pdE9mVGltZSgnd2VlaycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VtYWluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cInNlbnNpdGl2aXR5VW5pdE9mVGltZSA9PT0gJ21vbnRoJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VTZW5zaXRpdml0eVVuaXRPZlRpbWUoJ21vbnRoJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2lzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlPVwic2Vuc2l0aXZpdHlVbml0T2ZUaW1lID09PSAneWVhcidcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlU2Vuc2l0aXZpdHlVbml0T2ZUaW1lKCd5ZWFyJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbm7DqWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJraXYtc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLXNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZW5zaXRpdml0eVVuaXRPZlRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwicmVzZXREaXNhYmxlV29ya3NoZWV0cygnc2Vuc2l0aXZpdHknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiSm91clwiIHZhbHVlPVwiZGF5XCI+IEpvdXIgPC92cy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1vcHRpb24gbGFiZWw9XCJTZW1haW5lXCIgdmFsdWU9XCJ3ZWVrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiTW9pc1wiIHZhbHVlPVwibW9udGhcIj4gTW9pcyA8L3ZzLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLW9wdGlvbiBsYWJlbD1cIkFubsOpZVwiIHZhbHVlPVwieWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Y2hhcnRpc3RcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGlkZS1jb250ZW50JzogIXNlbnNpdGl2aXR5RXhlcmNpc2VTdGF0cy5zZXJpZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNsOiBzZW5zaXRpdml0eUV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA+PSAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzbTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbnNpdGl2aXR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDEyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5zaXRpdml0eUV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA8IDI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAxMixcclxuICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICByYXRpbz1cImN0LW1ham9yLXNlY29uZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkYXRhPVwic2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzXCJcclxuICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNlbnNpdGl2aXR5Q2hhcnRPcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZXZlbnQtaGFuZGxlcnM9XCJldmVudEhhbmRsZXJzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXhpc1ktbGFiZWxzIHNlbnNpdGl2aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNDYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTbWlsZXkgcXVpIHZhIHRyw6hzIG1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNDcuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTbWlsZXkgcXVpIHZhIG1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNDguc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTbWlsZXkgcXVpIHZhIHBhcyBiaWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS80OS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNtaWxleSBxdWkgdmEgYm9mXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS81MC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNtaWxleSBwZXJwbGV4ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNTEuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTbWlsZXkgcXVpIHZhIGJpZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzUyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiU21pbGV5IHF1aSB2YSB0csOocyBiaWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS81My5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNtaWxleSB0csOocyBjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS81NC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNtaWxleSBhdXggYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9jaGFydGlzdD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG5zLXdvcmtzaGVldHMtc3RhdHMgc2Vuc2l0aXZpdHlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIod29ya3NoZWV0LCBpKSBpbiBnZXRQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tdG9nZ2xlLXdvcmtzaGVldC1zdGF0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSGlkZGVuV29ya3NoZWV0TGluZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2Vuc2l0aXZpdHknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FjdGl2ZTogZGlzYWJsZVdvcmtzaGVldHNbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbnNpdGl2aXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5pbmNsdWRlcyh3b3Jrc2hlZXQuaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluZS1jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgNXB4IHNvbGlkICR7Y29sb3JzW2ldfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5IDp3b3Jrc2hlZXQ9XCJ3b3Jrc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdC1mb3VuZFwiXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJiAhZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXItbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlZvdXMgbidhdmV6IHBhcyBlbmNvcmUgZGUgc3RhdGlzdGlxdWU8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+TGUgcGF0aWVudCBuJ2EgcGFzIGVuY29yZSBkZSBzdGF0aXN0aXF1ZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiIGNsYXNzPVwibG9hZGluZ1wiPjwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImtpdi1ibG9ja1wiIGlkPVwidGVjaG5pY2FsXCI+XHJcbiAgICAgICAgICAgIDxoMj48c3Bhbj5UZWNobmlxdWU8L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXCIgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphY3RpdmU9XCJ0ZWNobmljYWxVbml0T2ZUaW1lID09PSAnZGF5J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VUZWNobmljYWxVbml0T2ZUaW1lKCdkYXknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphY3RpdmU9XCJ0ZWNobmljYWxVbml0T2ZUaW1lID09PSAnd2VlaydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGVjaG5pY2FsVW5pdE9mVGltZSgnd2VlaycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VtYWluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cInRlY2huaWNhbFVuaXRPZlRpbWUgPT09ICdtb250aCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGVjaG5pY2FsVW5pdE9mVGltZSgnbW9udGgnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphY3RpdmU9XCJ0ZWNobmljYWxVbml0T2ZUaW1lID09PSAneWVhcidcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGVjaG5pY2FsVW5pdE9mVGltZSgneWVhcicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2l2LXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidGVjaG5pY2FsVW5pdE9mVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJyZXNldERpc2FibGVXb3Jrc2hlZXRzKCd0ZWNobmljYWwnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiSm91clwiIHZhbHVlPVwiZGF5XCI+IEpvdXIgPC92cy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1vcHRpb24gbGFiZWw9XCJTZW1haW5lXCIgdmFsdWU9XCJ3ZWVrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiTW9pc1wiIHZhbHVlPVwibW9udGhcIj4gTW9pcyA8L3ZzLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLW9wdGlvbiBsYWJlbD1cIkFubsOpZVwiIHZhbHVlPVwieWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Y2hhcnRpc3RcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGlkZS1jb250ZW50JzogIXRlY2huaWNhbEV4ZXJjaXNlU3RhdHMuc2VyaWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzbDogdGVjaG5pY2FsRXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNtOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjaG5pY2FsRXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDEyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWNobmljYWxFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlY2huaWNhbEV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA+PSA1ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWNobmljYWxFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAxMixcclxuICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICByYXRpbz1cImN0LW1ham9yLXNlY29uZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGE9XCJ0ZWNobmljYWxFeGVyY2lzZVN0YXRzXCJcclxuICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInRlY2huaWNhbENoYXJ0T3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmV2ZW50LWhhbmRsZXJzPVwiZXZlbnRIYW5kbGVyc1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF4aXNZLWxhYmVscyB0ZWNobmljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48cD5FeGNlbGxlbnRlPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPk3DqWRpb2NyZTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvY2hhcnRpc3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRucy13b3Jrc2hlZXRzLXN0YXRzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHdvcmtzaGVldCwgaSkgaW4gZ2V0UGF0aWVudFdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLXRvZ2dsZS13b3Jrc2hlZXQtc3RhdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUhpZGRlbldvcmtzaGVldExpbmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RlY2huaWNhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWN0aXZlOiBkaXNhYmxlV29ya3NoZWV0c1sndGVjaG5pY2FsJ10uaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluZS1jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgNXB4IHNvbGlkICR7Y29sb3JzW2ldfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5IDp3b3Jrc2hlZXQ9XCJ3b3Jrc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdC1mb3VuZFwiXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJiAhZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXItbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlZvdXMgbidhdmV6IHBhcyBlbmNvcmUgZGUgc3RhdGlzdGlxdWU8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+TGUgcGF0aWVudCBuJ2EgcGFzIGVuY29yZSBkZSBzdGF0aXN0aXF1ZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiIGNsYXNzPVwibG9hZGluZ1wiPjwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImtpdi1ibG9ja1wiIGlkPVwiZGlmZmljdWx0eVwiPlxyXG4gICAgICAgICAgICA8aDI+PHNwYW4+RGlmZmljdWx0w6llcyBwZXLDp3Vlczwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJnZXRQYXRpZW50V29ya3NoZWV0cy5sZW5ndGhcIiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvbi1ncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImRpZmZpY3VsdHlVbml0T2ZUaW1lID09PSAnZGF5J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VEaWZmaWN1bHR5VW5pdE9mVGltZSgnZGF5JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKb3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlPVwiZGlmZmljdWx0eVVuaXRPZlRpbWUgPT09ICd3ZWVrJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VEaWZmaWN1bHR5VW5pdE9mVGltZSgnd2VlaycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VtYWluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImRpZmZpY3VsdHlVbml0T2ZUaW1lID09PSAnbW9udGgnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZURpZmZpY3VsdHlVbml0T2ZUaW1lKCdtb250aCcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9pc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImRpZmZpY3VsdHlVbml0T2ZUaW1lID09PSAneWVhcidcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlRGlmZmljdWx0eVVuaXRPZlRpbWUoJ3llYXInKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFubsOpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbi1ncm91cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtpdi1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dnMtc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRpZmZpY3VsdHlVbml0T2ZUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInJlc2V0RGlzYWJsZVdvcmtzaGVldHMoJ2RpZmZpY3VsdHknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiSm91clwiIHZhbHVlPVwiZGF5XCI+IEpvdXIgPC92cy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1vcHRpb24gbGFiZWw9XCJTZW1haW5lXCIgdmFsdWU9XCJ3ZWVrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiTW9pc1wiIHZhbHVlPVwibW9udGhcIj4gTW9pcyA8L3ZzLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLW9wdGlvbiBsYWJlbD1cIkFubsOpZVwiIHZhbHVlPVwieWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Y2hhcnRpc3RcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGlkZS1jb250ZW50JzogIWRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLnNlcmllcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc2w6IGRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc206XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmaWN1bHR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZmljdWx0eUV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA8IDksXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW89XCJjdC1tYWpvci1zZWNvbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJMaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YT1cImRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzXCJcclxuICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImRpZmZpY3VsdHlDaGFydE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpldmVudC1oYW5kbGVycz1cImV2ZW50SGFuZGxlcnNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJheGlzWS1sYWJlbHMgZGlmZmljdWx0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPkRpZmZpY2lsZTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48cD5GYWNpbGU8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2NoYXJ0aXN0PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bnMtd29ya3NoZWV0cy1zdGF0c1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIih3b3Jrc2hlZXQsIGkpIGluIGdldFBhdGllbnRXb3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi10b2dnbGUtd29ya3NoZWV0LXN0YXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVIaWRkZW5Xb3Jrc2hlZXRMaW5lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaWZmaWN1bHR5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhY3RpdmU6IGRpc2FibGVXb3Jrc2hlZXRzWydkaWZmaWN1bHR5J10uaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluZS1jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgNXB4IHNvbGlkICR7Y29sb3JzW2ldfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5IDp3b3Jrc2hlZXQ9XCJ3b3Jrc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdC1mb3VuZFwiXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJiAhZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXItbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlZvdXMgbidhdmV6IHBhcyBlbmNvcmUgZGUgc3RhdGlzdGlxdWU8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+TGUgcGF0aWVudCBuJ2EgcGFzIGVuY29yZSBkZSBzdGF0aXN0aXF1ZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiIGNsYXNzPVwibG9hZGluZ1wiPjwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEJ0bkNoYXJ0V29ya3NoZWV0UGFydE9mQm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdG5DaGFydFdvcmtzaGVldFBhcnRPZkJvZHkudnVlXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwYXRpZW50OiBPYmplY3QsXHJcbiAgICAgICAgcGF0aWVudFdvcmtzaGVldHM6IEFycmF5LFxyXG4gICAgICAgIGxvYWRpbmdQYXRpZW50V29ya3NoZWV0czogQm9vbGVhbixcclxuICAgICAgICBkb2N0b3JWaWV3OiBCb29sZWFuLFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBCdG5DaGFydFdvcmtzaGVldFBhcnRPZkJvZHksXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZW5zaXRpdml0eVVuaXRPZlRpbWU6IFwiZGF5XCIsXHJcbiAgICAgICAgICAgIHRlY2huaWNhbFVuaXRPZlRpbWU6IFwiZGF5XCIsXHJcbiAgICAgICAgICAgIGRpZmZpY3VsdHlVbml0T2ZUaW1lOiBcImRheVwiLFxyXG4gICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0UGFkZGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA2LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhpZ2g6IDEwLFxyXG4gICAgICAgICAgICAgICAgbG93OiAwLFxyXG4gICAgICAgICAgICAgICAgYXhpc1k6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogNzgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNoYXJ0aXN0LnBsdWdpbnMudG9vbHRpcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvclRvUG9pbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvQm9keTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEZuYzogZnVuY3Rpb24gKG1ldGEsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWV0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogXCJkcmF3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm46IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFwicG9pbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2lyY2xlID0gbmV3IHRoaXMuJGNoYXJ0aXN0LlN2ZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3g6IFtkYXRhLnhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeTogW2RhdGEueV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IFs4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdDptZXRhXCI6IGRhdGEubWV0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3QtcG9pbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5yZXBsYWNlKGNpcmNsZSkuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXhpc1guc3RlcExlbmd0aCAvIDIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFwibGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXhpc1guc3RlcExlbmd0aCAvIDIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFwiZ3JpZFwiICYmIGRhdGEuaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmF0dHIoXCIgY2xhc3NcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBib3JkZXItZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgY29sb3JzOiBbXHJcbiAgICAgICAgICAgICAgICBcIiNmZjY4MzhcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZmYTEyNlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjNWM5MWUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIiM4ZjY3ZDFcIixcclxuICAgICAgICAgICAgICAgIFwiIzU3Y2RiZlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZjE3Y2Q3XCIsXHJcbiAgICAgICAgICAgICAgICBcIiM5M2QyYTVcIixcclxuICAgICAgICAgICAgICAgIFwiI2IyNDc4OFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjYzFiNzlkXCIsXHJcbiAgICAgICAgICAgICAgICBcIiNmZjU2NGJcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZiOGI2OFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZmZjYjQ2XCIsXHJcbiAgICAgICAgICAgICAgICBcIiMzZGM4NjNcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZmNjgzOFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZmZhMTI2XCIsXHJcbiAgICAgICAgICAgICAgICBcIiM1YzkxZTFcIixcclxuICAgICAgICAgICAgICAgIFwiIzhmNjdkMVwiLFxyXG4gICAgICAgICAgICAgICAgXCIjNTdjZGJmXCIsXHJcbiAgICAgICAgICAgICAgICBcIiNmMTdjZDdcIixcclxuICAgICAgICAgICAgICAgIFwiIzkzZDJhNVwiLFxyXG4gICAgICAgICAgICAgICAgXCIjYjI0Nzg4XCIsXHJcbiAgICAgICAgICAgICAgICBcIiNjMWI3OWRcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZmNTY0YlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZmI4YjY4XCIsXHJcbiAgICAgICAgICAgICAgICBcIiNmZmNiNDZcIixcclxuICAgICAgICAgICAgICAgIFwiIzNkYzg2M1wiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBpQ29yZXNzcExpbmU6IHtcclxuICAgICAgICAgICAgICAgIDA6IFwiYVwiLFxyXG4gICAgICAgICAgICAgICAgMTogXCJiXCIsXHJcbiAgICAgICAgICAgICAgICAyOiBcImNcIixcclxuICAgICAgICAgICAgICAgIDM6IFwiZFwiLFxyXG4gICAgICAgICAgICAgICAgNDogXCJlXCIsXHJcbiAgICAgICAgICAgICAgICA1OiBcImZcIixcclxuICAgICAgICAgICAgICAgIDY6IFwiZ1wiLFxyXG4gICAgICAgICAgICAgICAgNzogXCJoXCIsXHJcbiAgICAgICAgICAgICAgICA4OiBcImlcIixcclxuICAgICAgICAgICAgICAgIDk6IFwialwiLFxyXG4gICAgICAgICAgICAgICAgMTA6IFwia1wiLFxyXG4gICAgICAgICAgICAgICAgMTE6IFwibFwiLFxyXG4gICAgICAgICAgICAgICAgMTI6IFwibVwiLFxyXG4gICAgICAgICAgICAgICAgMTM6IFwiblwiLFxyXG4gICAgICAgICAgICAgICAgMTQ6IFwib1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNhYmxlV29ya3NoZWV0czoge1xyXG4gICAgICAgICAgICAgICAgc2Vuc2l0aXZpdHk6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGVjaG5pY2FsOiBbXSxcclxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdHk6IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRQYXRpZW50V29ya3NoZWV0cygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5Q3JlYXRlZEF0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRpZW50V29ya3NoZWV0cy5maWx0ZXIoKHcpID0+IHcuZXhlcmNpc2VTdGF0cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZW5zaXRpdml0eUV4ZXJjaXNlU3RhdHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlRXhlcmNpc2VTdGF0c0J5Q3JpdGVyaW9uKFwic2Vuc2l0aXZpdHlcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZW5zaXRpdml0eUNoYXJ0T3B0aW9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuY2hhcnRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgYXhpc1k6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogNDUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVjaG5pY2FsRXhlcmNpc2VTdGF0cygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVFeGVyY2lzZVN0YXRzQnlDcml0ZXJpb24oXCJ0ZWNobmljYWxcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZWNobmljYWxDaGFydE9wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmNoYXJ0T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIHNlcmllc0JhckRpc3RhbmNlOiAxMyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUV4ZXJjaXNlU3RhdHNCeUNyaXRlcmlvbihcImRpZmZpY3VsdHlcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaWZmaWN1bHR5Q2hhcnRPcHRpb25zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5jaGFydE9wdGlvbnMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc29ydEJ5Q3JlYXRlZEF0KGFycmF5KSB7XHJcbiAgICAgICAgICAgIGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmNyZWF0ZWRBdCkgLSBuZXcgRGF0ZShiLmNyZWF0ZWRBdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZW5lcmF0ZUV4ZXJjaXNlU3RhdHNCeUNyaXRlcmlvbihjcml0ZXJpb24pIHtcclxuICAgICAgICAgICAgbGV0IHVuaXRPZlRpbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJkaWZmaWN1bHR5XCIgPT09IGNyaXRlcmlvbikge1xyXG4gICAgICAgICAgICAgICAgdW5pdE9mVGltZSA9IHRoaXMuZGlmZmljdWx0eVVuaXRPZlRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcInNlbnNpdGl2aXR5XCIgPT09IGNyaXRlcmlvbikge1xyXG4gICAgICAgICAgICAgICAgdW5pdE9mVGltZSA9IHRoaXMuc2Vuc2l0aXZpdHlVbml0T2ZUaW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJ0ZWNobmljYWxcIiA9PT0gY3JpdGVyaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB1bml0T2ZUaW1lID0gdGhpcy50ZWNobmljYWxVbml0T2ZUaW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleGVyY2lzZVN0YXRzQnlVbml0T2ZUaW1lID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRXhlcmNpc2VTdGF0c0J5VW5pdE9mVGltZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhdGllbnRXb3Jrc2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuaXRPZlRpbWVcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdlbmVyYXRlTGFiZWxzKGV4ZXJjaXNlU3RhdHNCeVVuaXRPZlRpbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFiZWxzRm9ybWF0ZWRCeVVuaXRPZlRpbWUgPSB0aGlzLmZvcm1hdExhYmVsc0J5VW5pdE9mVGltZShcclxuICAgICAgICAgICAgICAgIGxhYmVscyxcclxuICAgICAgICAgICAgICAgIHVuaXRPZlRpbWVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTbGljZSA9IHRoaXMuZ2V0RGF0YVNsaWNlKGxhYmVscy5sZW5ndGgsIHVuaXRPZlRpbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogbGFiZWxzRm9ybWF0ZWRCeVVuaXRPZlRpbWUuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChzLCBpKSA9PiBpID49IGRhdGFTbGljZVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHNlcmllczogZXhlcmNpc2VTdGF0c0J5VW5pdE9mVGltZS5tYXAoKHcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGVyY2lzZVN0YXRzRm9ybWF0ZWQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2hhcnRBdmVyYWdlRGF0YVBvaW50c0J5Q3JpdGVyaW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JpdGVyaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdy5leGVyY2lzZVN0YXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdE9mVGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cnVuY2F0ZVRpdGxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdy50aXRsZS5sZW5ndGggPiAyMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB3LnRpdGxlLnN1YnN0cmluZygwLCAyMCkgKyBcIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHcudGl0bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYCR7dHJ1bmNhdGVUaXRsZX0gLSAke3cucGFydE9mQm9keS5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGV4ZXJjaXNlU3RhdHNGb3JtYXRlZC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocywgaSkgPT4gaSA+PSBkYXRhU2xpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0TGFiZWxzQnlVbml0T2ZUaW1lKGxhYmVscywgdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICBpZiAoXCJkYXlcIiA9PT0gdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVscy5tYXAoKGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7bC5zcGxpdChcIi1cIilbMl19LyR7bC5zcGxpdChcIi1cIilbMV19LyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwuc3BsaXQoXCItXCIpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgfWA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwid2Vla1wiID09PSB1bml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWxzLm1hcCgobCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgc2VtLiAke2wuc3BsaXQoXCItXCIpWzJdfS8ke2wuc3BsaXQoXCItXCIpWzFdfS8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLnNwbGl0KFwiLVwiKVswXVxyXG4gICAgICAgICAgICAgICAgICAgIH1gO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRocyA9IHtcclxuICAgICAgICAgICAgICAgIFwiMDFcIjogXCJqYW52LlwiLFxyXG4gICAgICAgICAgICAgICAgXCIwMlwiOiBcImbDqXZyLlwiLFxyXG4gICAgICAgICAgICAgICAgXCIwM1wiOiBcIm1hcnNcIixcclxuICAgICAgICAgICAgICAgIFwiMDRcIjogXCJhdnJpbFwiLFxyXG4gICAgICAgICAgICAgICAgXCIwNVwiOiBcIm1haVwiLFxyXG4gICAgICAgICAgICAgICAgXCIwNlwiOiBcImp1aW5cIixcclxuICAgICAgICAgICAgICAgIFwiMDdcIjogXCJqdWlsbC5cIixcclxuICAgICAgICAgICAgICAgIFwiMDhcIjogXCJhb8O7dFwiLFxyXG4gICAgICAgICAgICAgICAgXCIwOVwiOiBcInNlcHQuXCIsXHJcbiAgICAgICAgICAgICAgICAxMDogXCJvY3QuXCIsXHJcbiAgICAgICAgICAgICAgICAxMTogXCJub3YuXCIsXHJcbiAgICAgICAgICAgICAgICAxMjogXCJkw6ljLlwiLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKFwibW9udGhcIiA9PT0gdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVscy5tYXAoKGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7bW9udGhzW2wuc3BsaXQoXCItXCIpWzFdXX0gJHtsLnNwbGl0KFwiLVwiKVswXX1gO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBsYWJlbHM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZW5lcmF0ZUxhYmVscyhleGVyY2lzZVN0YXRzQnlVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVscyA9IFtdO1xyXG4gICAgICAgICAgICBleGVyY2lzZVN0YXRzQnlVbml0T2ZUaW1lLmZvckVhY2goKHcpID0+IHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHcuZXhlcmNpc2VTdGF0cykuZm9yRWFjaCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbGFiZWxzLmluY2x1ZGVzKGRhdGUuc3BsaXQoXCJ8XCIpWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHMucHVzaChkYXRlLnNwbGl0KFwifFwiKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhKSAtIG5ldyBEYXRlKGIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvZ2dsZUhpZGRlbldvcmtzaGVldExpbmUoY3JpdGVyaW9uLCBpLCB3b3Jrc2hlZXRJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgIGAjJHtjcml0ZXJpb259IC5jdC1zZXJpZXMtJHt0aGlzLmlDb3Jlc3NwTGluZVtpXX1gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBsaW5lLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlV29ya3NoZWV0c1tjcml0ZXJpb25dLmluY2x1ZGVzKHdvcmtzaGVldElkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlV29ya3NoZWV0c1tjcml0ZXJpb25dLnNwbGljZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVXb3Jrc2hlZXRzW2NyaXRlcmlvbl0uaW5kZXhPZih3b3Jrc2hlZXRJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZVdvcmtzaGVldHNbY3JpdGVyaW9uXS5wdXNoKHdvcmtzaGVldElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlU2Vuc2l0aXZpdHlVbml0T2ZUaW1lKFVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZW5zaXRpdml0eVVuaXRPZlRpbWUgPSBVbml0T2ZUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RGlzYWJsZVdvcmtzaGVldHMoXCJzZW5zaXRpdml0eVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZVRlY2huaWNhbFVuaXRPZlRpbWUoVW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRlY2huaWNhbFVuaXRPZlRpbWUgPSBVbml0T2ZUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RGlzYWJsZVdvcmtzaGVldHMoXCJ0ZWNobmljYWxcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2VEaWZmaWN1bHR5VW5pdE9mVGltZShVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eVVuaXRPZlRpbWUgPSBVbml0T2ZUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RGlzYWJsZVdvcmtzaGVldHMoXCJkaWZmaWN1bHR5XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXREaXNhYmxlV29ya3NoZWV0cyhjcml0ZXJpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlV29ya3NoZWV0c1tjcml0ZXJpb25dID0gW107XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZW5lcmF0ZUNoYXJ0QXZlcmFnZURhdGFQb2ludHNCeUNyaXRlcmlvbihcclxuICAgICAgICAgICAgY3JpdGVyaW9uLFxyXG4gICAgICAgICAgICBzdGF0cyxcclxuICAgICAgICAgICAgbGFiZWxzLFxyXG4gICAgICAgICAgICB1bml0T2ZUaW1lXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFydERhdGFQb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGxhYmVscy5mb3JFYWNoKChsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFydERhdGFQb2ludHMucHVzaChudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGUgaW4gc3RhdHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzRmlsdGVyZWQgPSBzdGF0c1tkYXRlXS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKHMpID0+IGNyaXRlcmlvbiA9PT0gcy5jcml0ZXJpb25cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHNBdmVyYWdlID1cclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdHNGaWx0ZXJlZC5yZWR1Y2UoKHIsIHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBwYXJzZUludChyICsgcy5yYXRpbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHNGaWx0ZXJlZC5sZW5ndGgpICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgKSAvIDEwO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTcGxpdCA9IGRhdGUuc3BsaXQoXCJ8XCIpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZCA9IGxhYmVscy5pbmRleE9mKGRhdGVTcGxpdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnREYXRlID0gbmV3IERhdGUoZGF0ZVNwbGl0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dFRvb2x0aXAgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcIm1vbnRoXCIgPT09IHVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VG9vbHRpcCA9IG1vbWVudChwb2ludERhdGUpLmZvcm1hdChcIk1NTSBZWVlZXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcInllYXJcIiA9PT0gdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRUb29sdGlwID0gbW9tZW50KHBvaW50RGF0ZSkuZm9ybWF0KFwiWVlZWVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXCJkYXlcIiA9PT0gdW5pdE9mVGltZSB8fCBcIndlZWtcIiA9PT0gdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRUb29sdGlwID0gbW9tZW50KHBvaW50RGF0ZSkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwid2Vla1wiID09PSB1bml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUb29sdGlwID0gYHNlbS4gJHt0ZXh0VG9vbHRpcH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjaGFydERhdGFQb2ludHNbaW5kXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBwb2ludERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogc3RhdHNBdmVyYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGE6IHRleHRUb29sdGlwLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJ0RGF0YVBvaW50cztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyb3VwU3RhdHNCeURheSh3b3Jrc2hlZXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3Jrc2hlZXRzLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh3ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLncsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VTdGF0czogdy5leGVyY2lzZVN0YXRzLnJlZHVjZSgociwgc3RhdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJbc3RhdC5kb25lQXQuc3Vic3RyKDAsIDEwKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJbc3RhdC5kb25lQXQuc3Vic3RyKDAsIDEwKV0gPSBbc3RhdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByW3N0YXQuZG9uZUF0LnN1YnN0cigwLCAxMCldLnB1c2goc3RhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwge30pLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JvdXBTdGF0c0J5V2Vlayh3b3Jrc2hlZXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3Jrc2hlZXRzLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh3ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLncsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VTdGF0czogdy5leGVyY2lzZVN0YXRzLnJlZHVjZSgociwgc3RhdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb25lRGF0ZSA9IG5ldyBEYXRlKHN0YXQuZG9uZUF0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5SW5kaWNlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmVEYXRlLmdldERheSgpID09PSAwID8gNyA6IGRvbmVEYXRlLmdldERheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIU9iamVjdC5rZXlzKHIpLmZpbmQoKGcpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5pbmNsdWRlcyhzdGF0LmRvbmVBdC5zdWJzdHIoMCwgMTApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0RGF5T2ZNb250aERhdGUgPSBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lRGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmVEYXRlLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3REYXlPZlByZXZNb250aERhdGUgPSBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lRGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmVEYXRlLmdldE1vbnRoKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdXBXZWVrTmFtZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0V2Vla0RheSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZURhdGUuZ2V0RGF0ZSgpIC0gKGRheUluZGljZSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0V2Vla01vbnRoID0gZG9uZURhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnRXZWVrWWVhciA9IGRvbmVEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0V2Vla0RheSA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFdlZWtEYXkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RGF5T2ZQcmV2TW9udGhEYXRlLmdldERhdGUoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHN0YXJ0V2Vla0RheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0V2Vla01vbnRoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFdlZWtNb250aCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0V2Vla01vbnRoID0gMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0V2Vla1llYXIgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdERheU9mTW9udGhEYXRlID0gbGFzdERheU9mUHJldk1vbnRoRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXkgPSBzdGFydFdlZWtEYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gc3RhcnRXZWVrTW9udGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHllYXIgPSBzdGFydFdlZWtZZWFyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXkgKz0gaTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRheSA+IGxhc3REYXlPZk1vbnRoRGF0ZS5nZXREYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5IC09IGxhc3REYXlPZk1vbnRoRGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb250aCA8IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhciArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5ID4gMCAmJiBkYXkgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXkgPSBgMCR7ZGF5fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5ID0gYCR7ZGF5fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9udGggPiAwICYmIG1vbnRoIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBgMCR7bW9udGh9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aCA9IGAke21vbnRofWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFdlZWtOYW1lICs9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg2ICE9IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBXZWVrTmFtZSArPSBcInxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyW2dyb3VwV2Vla05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcltncm91cFdlZWtOYW1lXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocikuZmluZCgoZykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLmluY2x1ZGVzKHN0YXQuZG9uZUF0LnN1YnN0cigwLCAxMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0ucHVzaChzdGF0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHt9KSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyb3VwU3RhdHNCeU1vbnRoKHdvcmtzaGVldHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdvcmtzaGVldHMubWFwKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udyxcclxuICAgICAgICAgICAgICAgICAgICBleGVyY2lzZVN0YXRzOiB3LmV4ZXJjaXNlU3RhdHMucmVkdWNlKChyLCBzdGF0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcltzdGF0LmRvbmVBdC5zdWJzdHIoMCwgNyldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByW3N0YXQuZG9uZUF0LnN1YnN0cigwLCA3KV0gPSBbc3RhdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByW3N0YXQuZG9uZUF0LnN1YnN0cigwLCA3KV0ucHVzaChzdGF0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICB9LCB7fSksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncm91cFN0YXRzQnlZZWFyKHdvcmtzaGVldHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdvcmtzaGVldHMubWFwKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udyxcclxuICAgICAgICAgICAgICAgICAgICBleGVyY2lzZVN0YXRzOiB3LmV4ZXJjaXNlU3RhdHMucmVkdWNlKChyLCBzdGF0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcltzdGF0LmRvbmVBdC5zdWJzdHIoMCwgNCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByW3N0YXQuZG9uZUF0LnN1YnN0cigwLCA0KV0gPSBbc3RhdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByW3N0YXQuZG9uZUF0LnN1YnN0cigwLCA0KV0ucHVzaChzdGF0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICB9LCB7fSksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzb3J0QnlEb25lRGF0ZShzdGF0cykge1xyXG4gICAgICAgICAgICBzdGF0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kb25lQXQpIC0gbmV3IERhdGUoYi5kb25lQXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0RGF0YVNsaWNlKHRvdGFsLCB1bml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhU2xpY2UgPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKFwiZGF5XCIgPT09IHVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFTbGljZSA9IHRvdGFsIC0gMzE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcIndlZWtcIiA9PT0gdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVNsaWNlID0gdG90YWwgLSAxMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFTbGljZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbHRlckV4ZXJjaXNlU3RhdHNCeVVuaXRPZlRpbWUod29ya3NoZWV0cywgdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICBsZXQgZXhlcmNpc2VTdGF0c0J5VW5pdE9mVGltZSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKFwiZGF5XCIgPT09IHVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlU3RhdHNCeVVuaXRPZlRpbWUgPSB0aGlzLmdyb3VwU3RhdHNCeURheSh3b3Jrc2hlZXRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwid2Vla1wiID09PSB1bml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBleGVyY2lzZVN0YXRzQnlVbml0T2ZUaW1lID0gdGhpcy5ncm91cFN0YXRzQnlXZWVrKHdvcmtzaGVldHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJtb250aFwiID09PSB1bml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBleGVyY2lzZVN0YXRzQnlVbml0T2ZUaW1lID0gdGhpcy5ncm91cFN0YXRzQnlNb250aCh3b3Jrc2hlZXRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwieWVhclwiID09PSB1bml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBleGVyY2lzZVN0YXRzQnlVbml0T2ZUaW1lID0gdGhpcy5ncm91cFN0YXRzQnlZZWFyKHdvcmtzaGVldHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhlcmNpc2VTdGF0c0J5VW5pdE9mVGltZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbnNpdGl2aXR5Rm9ybWF0RGF0ZUJ5VW5pdE9mVGltZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoXCJkYXlcIiA9PT0gdGhpcy5zZW5zaXRpdml0eVVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChcIkREL01NL1lZWVlcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcIndlZWtcIiA9PT0gdGhpcy5zZW5zaXRpdml0eVVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChcIkREL01NL1lZWVlcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcIm1vbnRoXCIgPT09IHRoaXMuc2Vuc2l0aXZpdHlVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoXCJNTU0gWVlZWVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwieWVhclwiID09PSB0aGlzLnNlbnNpdGl2aXR5VW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KFwiWVlZWVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVjaG5pY2FsRm9ybWF0RGF0ZUJ5VW5pdE9mVGltZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoXCJkYXlcIiA9PT0gdGhpcy50ZWNobmljYWxVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJ3ZWVrXCIgPT09IHRoaXMudGVjaG5pY2FsVW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwibW9udGhcIiA9PT0gdGhpcy50ZWNobmljYWxVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoXCJNTU0gWVlZWVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwieWVhclwiID09PSB0aGlzLnRlY2huaWNhbFVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChcIllZWVlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpZmZpY3VsdHlGb3JtYXREYXRlQnlVbml0T2ZUaW1lKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChcImRheVwiID09PSB0aGlzLmRpZmZpY3VsdHlVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJ3ZWVrXCIgPT09IHRoaXMuZGlmZmljdWx0eVVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChcIkREL01NL1lZWVlcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcIm1vbnRoXCIgPT09IHRoaXMuZGlmZmljdWx0eVVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChcIk1NTSBZWVlZXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJ5ZWFyXCIgPT09IHRoaXMuZGlmZmljdWx0eVVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChcIllZWVlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuI215LWV4ZXJjaXNlLXN0YXRzIHtcclxuICAgIGdyaWQtYXJlYTogbXlleGVyY2lzZXN0YXRzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTdyZW07XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2FkaW5nIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMHJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGFuaW1hdGlvbjogMC41cyBlYXNlIDBzIGZvcndhcmRzIGZhZGVFbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICNzZW5zaXRpdml0eSxcclxuICAgICN0ZWNobmljYWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMsXHJcbiAgICAua2l2LXNlbGVjdCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMS43cmVtO1xyXG4gICAgICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmtpdi1zZWxlY3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRvcDogMS4xcmVtO1xyXG4gICAgICAgIHJpZ2h0OiAxLjRyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzcwcHgpIHtcclxuICAgICAgICAgICAgdG9wOiAxLjVyZW07XHJcbiAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdC1tYWpvci1zZWNvbmQge1xyXG4gICAgICAgIGhlaWdodDogMzByZW07XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5lbXB0eSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5heGlzWS1sYWJlbHMge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNC40cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIGRpdixcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNy41cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2Vuc2l0aXZpdHkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOTUuMnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUuNXJlbTtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYudGVjaG5pY2FsIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjc4LjhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5kaWZmaWN1bHR5IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjc5LjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRucy13b3Jrc2hlZXRzLXN0YXRzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDguNXJlbTtcclxuXHJcbiAgICAgICAgJi5zZW5zaXRpdml0eSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0LjRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLXRvZ2dsZS13b3Jrc2hlZXQtc3RhdHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMy41cmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAubGluZS1jb2xvciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmRpc2FjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAubGluZS1jb2xvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjJlOSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmN2YyZTkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgICBpZD1cIm15LXNjb3Jlc1wiXHJcbiAgICAgICAgY2xhc3M9XCJraXYtYmxvY2tcIlxyXG4gICAgICAgIDpjbGFzcz1cInsgcmVkdWNlZDogISRwYXJlbnQubXlTY29yZXNDb250ZW50IH1cIlxyXG4gICAgPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtY29udGVudFwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cIiRwYXJlbnQubXlTY29yZXNDb250ZW50ID0gISRwYXJlbnQubXlTY29yZXNDb250ZW50XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiIWRvY3RvclZpZXdcIj5NZXM8L3NwYW5cclxuICAgICAgICAgICAgPjxzcGFuIHYtaWY9XCJkb2N0b3JWaWV3XCI+U2VzPC9zcGFuPiBpbmRpY2VzXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiRwYXJlbnQubXlTY29yZXNDb250ZW50XCIgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmUtY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZ1ZS1lbGxpcHNlLXByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwcm9ncmVzcz1cImdldFNjb3JlUGVyY2VudGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1lbGxpcHNlLXByb2dyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY29yZS1jaXJjbGUtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNjb3JlXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdE51bWJUaG91c2FuZChnZXRTY29yZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidW5pdFwiPlBvaW50czwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY29yZS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzYmFyLWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdsb2FkaW5nLWdyYXktZGFyayc6IGxvYWRpbmcgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzYmFyLXRodW1iXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgbWF4OiBzY29yZSA+PSBzY29yZU1heCB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgd2lkdGg6IGAke2dldFNjb3JlUGVyY2VudGFnZX0lYCB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NiYXItc3RlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MSAwMDAgcHRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjIgMDAwIHB0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4zIDAwMCBwdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+NCAwMDAgcHRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9ncmVzc2Jhci1jdXJyZW50LXNjb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogZ2V0U2NvcmVQZXJjZW50YWdlIDwgMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBnZXRTY29yZVBlcmNlbnRhZ2UgPiA4MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNjb3JlUGVyY2VudGFnZSA8PSAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7Z2V0U2NvcmVQZXJjZW50YWdlfSVgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIWRvY3RvclZpZXdcIj5Wb3RyZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiPlNvbjwvc3Bhbj4gc2NvcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNjb3JlXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCgke2Zvcm1hdE51bWJUaG91c2FuZChnZXRTY29yZSl9IHB0cylgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NiYXItYmFzZS1lbmQtZGVjb3JhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlLWJsb2NrIHNjb3JlLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1leGVyY2lzZSBpY29uLTdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwic3RhdC1sYWJlbFwiPk5vbWJyZSBk4oCZZXhlcmNpY2VzIGZhaXRzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1yZXN1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHYtaWY9XCIhbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRUb3RhbEV4ZXJjaXNlQ29tcGxldGVkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nLWdyYXkgbG9hZGluZy1ibG9jay1oMyB3LTI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vuc2l0aXZpdHktYmxvY2sgc2NvcmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LXNlbnNpdGl2aXR5IGljb24tOFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzdGF0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiPlZvdHJlPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiPlNhPC9zcGFuPiBzZW5zaWJpbGl0w6lcclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgdi1pZj1cIiFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbnNpdGl2aXR5LXNtaWxleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTZW5zaXRpdml0eVNtaWxleSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJnZXRTZW5zaXRpdml0eVNtaWxleS5zcmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiZ2V0U2Vuc2l0aXZpdHlTbWlsZXkuYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VwJyA9PT0gZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24udmFyaWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBhbcOpbGlvcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rvd24nID09PSBnZXRTZW5zaXRpdml0eVZhcmlhdGlvbi52YXJpYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGJhaXNzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNlbnNpdGl2aXR5VmFyaWF0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcXVhbCcgPT09IGdldFRlY2huaWNhbFZhcmlhdGlvbi52YXJpYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFnZXRTZW5zaXRpdml0eVZhcmlhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZW50w7R0ICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNlbnNpdGl2aXR5VmFyaWF0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1cCcgPT09IGdldFNlbnNpdGl2aXR5VmFyaWF0aW9uLnZhcmlhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdC12YXJpYXRpb24gZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGkgY2xhc3M9XCJraXYtdmFyaWF0aW9uLXVwIGljb24tMjdcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3Bhbj4re3sgZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24ucmVzdWx0IH19JTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTZW5zaXRpdml0eVZhcmlhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZG93bicgPT09IGdldFNlbnNpdGl2aXR5VmFyaWF0aW9uLnZhcmlhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdC12YXJpYXRpb24gcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpIGNsYXNzPVwia2l2LXZhcmlhdGlvbi1kb3duIGljb24tMjhcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3Bhbj57eyBnZXRTZW5zaXRpdml0eVZhcmlhdGlvbi5yZXN1bHQgfX0lPC9zcGFuPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwibG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZy1ncmF5IGxvYWRpbmctYmxvY2staDMgdy03NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlY2huaWNhbC1ibG9jayBzY29yZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtdGVjaG5pY2FsIGljb24tOVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzdGF0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiPlZvdHJlPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiPlNhPC9zcGFuPiB0ZWNobmlxdWVcclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgdi1pZj1cIiFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRUZWNobmljYWxWYXJpYXRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VwJyA9PT0gZ2V0VGVjaG5pY2FsVmFyaWF0aW9uLnZhcmlhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW4gYW3DqWxpb3JhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFRlY2huaWNhbFZhcmlhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZG93bicgPT09IGdldFRlY2huaWNhbFZhcmlhdGlvbi52YXJpYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGJhaXNzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFRlY2huaWNhbFZhcmlhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXF1YWwnID09PSBnZXRUZWNobmljYWxWYXJpYXRpb24udmFyaWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZ2V0VGVjaG5pY2FsVmFyaWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmllbnTDtHQgIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGVjaG5pY2FsVmFyaWF0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1cCcgPT09IGdldFRlY2huaWNhbFZhcmlhdGlvbi52YXJpYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXQtdmFyaWF0aW9uIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpIGNsYXNzPVwia2l2LXZhcmlhdGlvbi11cCBpY29uLTI3XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+K3t7IGdldFRlY2huaWNhbFZhcmlhdGlvbi5yZXN1bHQgfX0lPC9zcGFuPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRUZWNobmljYWxWYXJpYXRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rvd24nID09PSBnZXRUZWNobmljYWxWYXJpYXRpb24udmFyaWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0LXZhcmlhdGlvbiByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGkgY2xhc3M9XCJraXYtdmFyaWF0aW9uLWRvd24gaWNvbi0yOFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuPnt7IGdldFRlY2huaWNhbFZhcmlhdGlvbi5yZXN1bHQgfX0lPC9zcGFuPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nLWdyYXkgbG9hZGluZy1ibG9jay1oMyB3LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2NvcmVSYW5rQmxvY2tcclxuICAgICAgICAgICAgICAgICAgICA6cmFuaz1cImdldFJhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRvY3RvclZpZXc9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgU2NvcmVSYW5rQmxvY2sgZnJvbSBcIi4vTXlTY29yZXMvU2NvcmVSYW5rQmxvY2sudnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHBhdGllbnQ6IE9iamVjdCxcclxuICAgICAgICBwYXRpZW50V29ya3NoZWV0czogQXJyYXksXHJcbiAgICAgICAgbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzOiBCb29sZWFuLFxyXG4gICAgICAgIGRvY3RvclZpZXc6IEJvb2xlYW4sXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFNjb3JlUmFua0Jsb2NrLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgICAgICBzY29yZU1heDogNTAwMCxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGNjMzMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbXB0eS1jb2xvclwiOiBcIiNmZmM2YjVcIixcclxuICAgICAgICAgICAgICAgIHNpemU6IDEzMCxcclxuICAgICAgICAgICAgICAgIHRoaWNrbmVzczogNSxcclxuICAgICAgICAgICAgICAgIFwiZW1wdHktdGhpY2tuZXNzXCI6IDMsXHJcbiAgICAgICAgICAgICAgICBcImxpbmUtbW9kZVwiOiBcIm91dCA1XCIsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IFwicnMgNzAwIDEwMDBcIixcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbnNpdGl2aXR5TGFzdFN0YXRzQXZlcmFnZUZvclNtaWxleTogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0U2NvcmUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U2NvcmVQZXJjZW50YWdlKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBzY29yZVBlcmNlbnRhZ2UgPSAodGhpcy5zY29yZSAqIDEwMCkgLyB0aGlzLnNjb3JlTWF4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzY29yZVBlcmNlbnRhZ2UgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZVBlcmNlbnRhZ2UgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3JlUGVyY2VudGFnZSA+IDEgPyBzY29yZVBlcmNlbnRhZ2UgOiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmFuaygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPj0gMCAmJiB0aGlzLnNjb3JlIDwgMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm91dmVhdVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+PSAxMDAwICYmIHRoaXMuc2NvcmUgPCAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJkZWJ1dGFudFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+PSAyMDAwICYmIHRoaXMuc2NvcmUgPCAzMDAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJhbWF0ZXVyXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlID49IDMwMDAgJiYgdGhpcy5zY29yZSA8IDQwMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImludGVybWVkaWFpcmVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPj0gNDAwMCAmJiB0aGlzLnNjb3JlIDwgNTAwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29uZmlybWVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPj0gNTAwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZXhwZXJ0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFRvdGFsRXhlcmNpc2VDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudEV4ZXJjaXNlQ29tcGxldGVkID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF0aWVudFdvcmtzaGVldHMuZm9yRWFjaCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhlcmNpY2VzIGNvbXBsw6l0w6lzIGRlIGxhIHNlc3Npb24gZW4gY291cnNcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB3LndvcmtzaGVldFByb2dyZXNzaW9uID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHcud29ya3NoZWV0UHJvZ3Jlc3Npb24gPCAxMDBcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50RXhlcmNpc2VDb21wbGV0ZWQgKz0gdy5leGVyY2lzZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT4gZS5pc0NvbXBsZXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEV4ZXJjaWNlcyBjb21wbMOpdMOpcyBkZXMgcHLDqWPDqWRlbnRlcyBzZXNzaW9ucyB0ZXJtaW7DqWVzXHJcbiAgICAgICAgICAgICAgICAvLyBPbiB1dGlsaXNlIGxlcyBzdGF0cyBwb3VyIGTDqXRlcm1pbmVyIGxlIG5vbWJyZSBkJ2V4ZXJjaWNlcyBjb21wbMOpdMOpc1xyXG4gICAgICAgICAgICAgICAgLy8vLyBDZXQgaGFjayBlc3QgZmFpdCBwb3VyIHZvaXIgc2kgbGVzIHN0YXRzIHNvbnQgcG9zdMOpcmlldXJlcyAoYXByw6hzKSBhdSBcIjIwMjItMDQtMDJcIlxyXG4gICAgICAgICAgICAgICAgLy8vLyBjYXIgYydlc3Qgw6AgcGFydGlyIGR1IDMgYXZyaWwgMjAyMiBxdWUgbGVzIHN0YXRzIG9udCBjaGFuZ8OpZXMgcG91ciDDqnRyZSBkZXMgc3RhdHMgZGUgc2Vzc2lvbiAoMSlcclxuICAgICAgICAgICAgICAgIC8vLy8gZXQgbm9uIGRlcyBzdGF0cyBkJ2V4ZXJjaWNlcyAoeCpuYiBleClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzSXNTZXNzaW9uU3RhdHMgPSB3LmV4ZXJjaXNlU3RhdHMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAocykgPT4gcy5kb25lQXQuc3Vic3RyaW5nKDAsIDEwKSA+IFwiMjAyMi0wNC0wMlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxlIGRpdmlzw6kgcGFyIDMgZXN0IGFwcGxpcXXDqSBjYXIgbGVzIHN0YXRzIHNvbnQgZGlzcGF0Y2jDqWVzIGVuIDogU2Vuc2liaWxpdMOpIC8gVGVjaG5pcXVlIC8gRGlmZmljdWx0w6lcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0c0lzU2Vzc2lvblN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRFeGVyY2lzZUNvbXBsZXRlZCArPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAody5leGVyY2lzZVN0YXRzLmxlbmd0aCAqIHcuZXhlcmNpc2VzLmxlbmd0aCkgLyAzXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRFeGVyY2lzZUNvbXBsZXRlZCArPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3LmV4ZXJjaXNlU3RhdHMubGVuZ3RoIC8gM1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0TnVtYlRob3VzYW5kKGNvdW50RXhlcmNpc2VDb21wbGV0ZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGN1bFZhcmlhdGlvbihcInNlbnNpdGl2aXR5XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGVjaG5pY2FsVmFyaWF0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWxWYXJpYXRpb24oXCJ0ZWNobmljYWxcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTZW5zaXRpdml0eVNtaWxleSgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Vuc2l0aXZpdHlTbWlsZXlzID0ge1xyXG4gICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNDYuc3ZnXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgcXVpIHZhIHRyw6hzIG1hbFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEuMjU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzQ3LnN2Z1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiU21pbGV5IHF1aSB2YSBtYWxcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAyLjU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzQ4LnN2Z1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiU21pbGV5IHF1aSB2YSBwYXMgYmllblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDMuNzU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzQ5LnN2Z1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiU21pbGV5IHF1aSB2YSBib2ZcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA1OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS81MC5zdmdcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlNtaWxleSBwZXJwbGV4ZVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDYuMjU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzUxLnN2Z1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiU21pbGV5IHF1aSB2YSBiaWVuXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNy41OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS81Mi5zdmdcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlNtaWxleSBxdWkgdmEgdHLDqHMgYmllblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDguNzU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzUzLnN2Z1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiU21pbGV5IHRyw6hzIGNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNTQuc3ZnXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgYXV4IGFuZ2VzXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IHNtaWxleSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZW5zaXRpdml0eUxhc3RTdGF0c0F2ZXJhZ2VGb3JTbWlsZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbnNpdGl2aXR5TGFzdFN0YXRzQXZlcmFnZUZvclNtaWxleSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5zaXRpdml0eUxhc3RTdGF0c0F2ZXJhZ2VGb3JTbWlsZXkgPCAxLjI1XHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbWlsZXkgPSBzZW5zaXRpdml0eVNtaWxleXNbXCIwXCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vuc2l0aXZpdHlMYXN0U3RhdHNBdmVyYWdlRm9yU21pbGV5ID49IDEuMjUgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbnNpdGl2aXR5TGFzdFN0YXRzQXZlcmFnZUZvclNtaWxleSA8IDIuNVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc21pbGV5ID0gc2Vuc2l0aXZpdHlTbWlsZXlzW1wiMS4yNVwiXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbnNpdGl2aXR5TGFzdFN0YXRzQXZlcmFnZUZvclNtaWxleSA+PSAyLjUgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbnNpdGl2aXR5TGFzdFN0YXRzQXZlcmFnZUZvclNtaWxleSA8IDMuNzVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNtaWxleSA9IHNlbnNpdGl2aXR5U21pbGV5c1tcIjIuNVwiXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbnNpdGl2aXR5TGFzdFN0YXRzQXZlcmFnZUZvclNtaWxleSA+PSAzLjc1ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5zaXRpdml0eUxhc3RTdGF0c0F2ZXJhZ2VGb3JTbWlsZXkgPCA1XHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbWlsZXkgPSBzZW5zaXRpdml0eVNtaWxleXNbXCIzLjc1XCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vuc2l0aXZpdHlMYXN0U3RhdHNBdmVyYWdlRm9yU21pbGV5ID49IDUgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbnNpdGl2aXR5TGFzdFN0YXRzQXZlcmFnZUZvclNtaWxleSA8IDYuMjVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNtaWxleSA9IHNlbnNpdGl2aXR5U21pbGV5c1tcIjVcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5zaXRpdml0eUxhc3RTdGF0c0F2ZXJhZ2VGb3JTbWlsZXkgPj0gNi4yNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vuc2l0aXZpdHlMYXN0U3RhdHNBdmVyYWdlRm9yU21pbGV5IDwgNy41XHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbWlsZXkgPSBzZW5zaXRpdml0eVNtaWxleXNbXCI2LjI1XCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vuc2l0aXZpdHlMYXN0U3RhdHNBdmVyYWdlRm9yU21pbGV5ID49IDcuNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vuc2l0aXZpdHlMYXN0U3RhdHNBdmVyYWdlRm9yU21pbGV5IDwgOC43NVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc21pbGV5ID0gc2Vuc2l0aXZpdHlTbWlsZXlzW1wiNy41XCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vuc2l0aXZpdHlMYXN0U3RhdHNBdmVyYWdlRm9yU21pbGV5ID49IDguNzUgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbnNpdGl2aXR5TGFzdFN0YXRzQXZlcmFnZUZvclNtaWxleSA8IDEwXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbWlsZXkgPSBzZW5zaXRpdml0eVNtaWxleXNbXCI4Ljc1XCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Vuc2l0aXZpdHlMYXN0U3RhdHNBdmVyYWdlRm9yU21pbGV5ID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc21pbGV5ID0gc2Vuc2l0aXZpdHlTbWlsZXlzW1wiMTBcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzbWlsZXk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2FsY3VsVmFyaWF0aW9uKGNyaXRlcmlvbikge1xyXG4gICAgICAgICAgICBsZXQgc3RhdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF0aWVudFdvcmtzaGVldHMuZm9yRWFjaCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udy5leGVyY2lzZVN0YXRzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVzKSA9PiBlcy5jcml0ZXJpb24gPT09IGNyaXRlcmlvblxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YXJpYXRpb25TbGljZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoc3RhdHMubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICAvLyAgICAgdmFyaWF0aW9uU2xpY2UgPSAxO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0cy5sZW5ndGggPiB2YXJpYXRpb25TbGljZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFN0YXRzID0gc3RhdHNcclxuICAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kb25lQXQpIC0gbmV3IERhdGUoYi5kb25lQXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZXMsIGkpID0+IGkgPiBzdGF0cy5sZW5ndGggLSAxIC0gdmFyaWF0aW9uU2xpY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RTdGF0c0F2ZXJhZ2UgPSB0aGlzLnN0YXRzQXZlcmFnZShsYXN0U3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbGFzdFN0YXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcInNlbnNpdGl2aXR5XCIgPT09IGNyaXRlcmlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2Vuc2l0aXZpdHlMYXN0U3RhdHNBdmVyYWdlRm9yU21pbGV5ID1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0c0F2ZXJhZ2Uoc3RhdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vuc2l0aXZpdHlMYXN0U3RhdHNBdmVyYWdlRm9yU21pbGV5ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFN0YXRzQXZlcmFnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRTdGF0cyA9IHN0YXRzXHJcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZG9uZUF0KSAtIG5ldyBEYXRlKGIuZG9uZUF0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVzLCBpKSA9PiBpIDw9IHN0YXRzLmxlbmd0aCAtIDEgLSB2YXJpYXRpb25TbGljZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkU3RhdHNBdmVyYWdlID0gdGhpcy5zdGF0c0F2ZXJhZ2Uob2xkU3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgKChsYXN0U3RhdHNBdmVyYWdlIC0gb2xkU3RhdHNBdmVyYWdlKSAvIG9sZFN0YXRzQXZlcmFnZSkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImVxdWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLnNpZ24ocmVzdWx0KSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwidXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiZG93blwiLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0TnVtYlRob3VzYW5kKHNjb3JlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29yZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiIFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXRzQXZlcmFnZShzdGF0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAoc3RhdHMucmVkdWNlKChyLCBzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gcy5yYXRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMubGVuZ3RoKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICApIC8gMTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAuZ2V0KGAvcGF0aWVudC8ke3RoaXMucGF0aWVudC5pZH0vZ2V0L3Njb3JlYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlID0gcmVzcG9uc2UuZGF0YS5zY29yZSA/IHJlc3BvbnNlLmRhdGEuc2NvcmUgOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLm5vdGlmU2NvcmVSYW5rICYmICF0aGlzLmRvY3RvclZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyTm90aWZMaXN0ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLW5vdGlmLWxpc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm90aWZCZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RpZi1iZWxsXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBub3RpZkJlbGwuY2xhc3NMaXN0LmFkZChcImhhcy1ub3RpZmljYXRpb25zXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInByaW9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vdXNlb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXZJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXZJY29uLmNsYXNzTGlzdC5hZGQoXCJub3RpZi1pY29uXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gXCIvaW1nL2ljb25zL2NvbG9yZWQvY29uZmV0dGlzLnN2Z1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5hbHQgPSBcIkljb25lIGRlIGNvbmZldHRpc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiaWNvbi1jb25mZXR0aXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLmlubmVyVGV4dCA9IGBWb3VzIGF2ZXogYXR0ZWludCBsZSBuaXZlYXUgJHtyZXNwb25zZS5kYXRhLm5vdGlmU2NvcmVSYW5rfSAhIEbDqWxpY2l0YXRpb25zICFgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXZJY29uLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGRpdkljb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5vdGlmTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbiNteS1zY29yZXMge1xyXG4gICAgZ3JpZC1hcmVhOiBteXNjb3JlcztcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLWdhcDogMXJlbTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ2JTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICBcInNjb3JlY2lyY2xlICAgICAgIHNjb3JlcmFuZ2Jsb2NrXCJcclxuICAgICAgICAgICAgXCJleGVyY2lzZWJsb2NrICAgICBleGVyY2lzZWJsb2NrXCJcclxuICAgICAgICAgICAgXCJzZW5zaXRpdml0eWJsb2NrICBzZW5zaXRpdml0eWJsb2NrXCJcclxuICAgICAgICAgICAgXCJ0ZWNobmljYWxibG9jayAgICB0ZWNobmljYWxibG9ja1wiO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDJyZW07XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDYlO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgXCJzY29yZWxpbmUgICAgICBzY29yZWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgXCJleGVyY2lzZWJsb2NrICBzZW5zaXRpdml0eWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIFwidGVjaG5pY2FsYmxvY2sgIHNjb3JlcmFuZ2Jsb2NrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDEuNXJlbTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgIFwic2NvcmVsaW5lICAgICAgc2NvcmVsaW5lICAgICAgICAgc2NvcmVsaW5lICAgICAgIHNjb3JlbGluZVwiXHJcbiAgICAgICAgICAgICAgICBcImV4ZXJjaXNlYmxvY2sgIHNlbnNpdGl2aXR5YmxvY2sgIHRlY2huaWNhbGJsb2NrICBzY29yZXJhbmdibG9ja1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAycmVtO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ2JTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgIFwic2NvcmVsaW5lICAgICAgc2NvcmVsaW5lXCJcclxuICAgICAgICAgICAgICAgIFwiZXhlcmNpc2VibG9jayAgc2Vuc2l0aXZpdHlibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBcInRlY2huaWNhbGJsb2NrICBzY29yZXJhbmdibG9ja1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMnJlbTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgIFwic2NvcmVsaW5lICAgICAgc2NvcmVsaW5lICAgICAgICAgc2NvcmVsaW5lICAgICAgIHNjb3JlbGluZVwiXHJcbiAgICAgICAgICAgICAgICBcImV4ZXJjaXNlYmxvY2sgIHNlbnNpdGl2aXR5YmxvY2sgIHRlY2huaWNhbGJsb2NrICBzY29yZXJhbmdibG9ja1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNjb3JlLWNpcmNsZSB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogc2NvcmVjaXJjbGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWVlZTg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICRzYW5ndWluZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNjb3JlLWNpcmNsZS10ZXh0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTElO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4xcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zY29yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudW5pdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjNyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zY29yZS1saW5lIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBzY29yZWxpbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWVlZTg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxM3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2dyZXNzYmFyLWJhc2Uge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5sb2FkaW5nLWdyYXktZGFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNlN2RmY2QgOCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNkM2M5YjYgMzglLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZTdkZmNkIDU0JVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggNjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9ncmVzc2Jhci1iYXNlLWVuZC1kZWNvcmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWVlZTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9ncmVzc2Jhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNmYjhiNjggOS4yOSUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNmZjY4MzkgMTAwJVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjhyZW0gMC44cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLCBib3JkZXItcmFkaXVzIDFzIGVhc2UgMC44cztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYubWF4IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2dyZXNzYmFyLXN0ZXBzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEuMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucG9pbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9ncmVzc2Jhci1jdXJyZW50LXNjb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1LjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAxcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDAuNXMgZWFzZSAwcyBmb3J3YXJkcyBmYWRlRW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuNnJlbSBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpub3QoLnN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLnN0YXJ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDAuN3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDAuN3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uc2NvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2NvcmUtYmxvY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS1saWdodDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxOXJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgLmxvYWRpbmctYmxvY2staDMge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjFyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN0YXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNHJlbTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN0YXQtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RhdC1yZXN1bHQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICBoMyxcclxuICAgICAgICAgICAgICAgIC5sb2FkaW5nLWJsb2NrLWgzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTIuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIGFuZCAobWF4LXdpZHRoOiA4OTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxN3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODkwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxOHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zdGF0LXZhcmlhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTAuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuMDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuZ3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5yZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZXhlcmNpc2UtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBleGVyY2lzZWJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zdGF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHNhbmd1aW5lLCAwLjI1KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNhbmd1aW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMzo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgLmxvYWRpbmctYmxvY2staDM6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHNhbmd1aW5lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnNlbnNpdGl2aXR5LWJsb2NrIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogc2Vuc2l0aXZpdHlibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICAuc3RhdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR5ZWxsb3csIDAuMjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkeWVsbG93O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMzo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgLmxvYWRpbmctYmxvY2staDM6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHllbGxvdztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MjBweCkgYW5kIChtYXgtd2lkdGg6IDg5MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEzdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4OTBweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOC4zdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzEwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTMxMHB4KSBhbmQgKG1heC13aWR0aDogMTQyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkuM3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zZW5zaXRpdml0eS1zbWlsZXkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjNyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnRlY2huaWNhbC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRlY2huaWNhbGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zdGF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHRvdXJuZXNvbCwgMC4yNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdG91cm5lc29sO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMzo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgLmxvYWRpbmctYmxvY2staDM6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvdXJuZXNvbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJzY29yZS1yYW5rLWJsb2NrIHNjb3JlLWJsb2NrXCJcclxuICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgIG5vdXZlYXU6ICdub3V2ZWF1JyA9PT0gcmFuayxcclxuICAgICAgICAgICAgZGVidXRhbnQ6ICdkZWJ1dGFudCcgPT09IHJhbmssXHJcbiAgICAgICAgICAgIGFtYXRldXI6ICdhbWF0ZXVyJyA9PT0gcmFuayxcclxuICAgICAgICAgICAgaW50ZXJtZWRpYWlyZTogJ2ludGVybWVkaWFpcmUnID09PSByYW5rLFxyXG4gICAgICAgICAgICBjb25maXJtZTogJ2NvbmZpcm1lJyA9PT0gcmFuayxcclxuICAgICAgICAgICAgZXhwZXJ0OiAnZXhwZXJ0JyA9PT0gcmFuayxcclxuICAgICAgICB9XCJcclxuICAgID5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiIG1vZGU9XCJvdXQtaW5cIj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRpbmcgJiYgJ25vdXZlYXUnID09PSByYW5rXCIga2V5PVwibm91dmVhdVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiPlZvdHJlPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtaWY9XCJkb2N0b3JWaWV3XCI+U29uPC9zcGFuPiBuaXZlYXVcclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJhbmstaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi8uLi8uLi9pbWcvaWNvbnMvY29sb3JlZC9oYW5kLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIGR1IHJhbmcgbm91dmVhdSBwYXRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyYW5rLWxhYmVsXCI+Tm91dmVhdSBQYXRpZW50PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyYW5rLXJlc3VsdFwiPkPigJllc3QgcGFydGkgcG91ciBhbGxlciBtaWV1eCZuYnNwOyE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGluZyAmJiAnZGVidXRhbnQnID09PSByYW5rXCIga2V5PVwiZGVidXRhbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoND5Wb3RyZSBuaXZlYXU8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyYW5rLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvYnJhcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBkdSByYW5nIGTDqWJ1dGFudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1sYWJlbFwiPlBhdGllbnQgRMOpYnV0YW50PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyYW5rLXJlc3VsdFwiPk11c2NsZSB0b24gamV1IFwiUm9iZXJ0XCImbmJzcDshPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRpbmcgJiYgJ2FtYXRldXInID09PSByYW5rXCIga2V5PVwiYW1hdGV1clwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlZvdHJlIG5pdmVhdTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJhbmstaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIGR1IHJhbmcgYW1hdGV1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1sYWJlbFwiPlBhdGllbnQgQW1hdGV1cjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1yZXN1bHRcIj5MYSB0w6p0ZSBkYW5zIGxlIGd1aWRvbiZuYnNwOyE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmcgJiYgJ2ludGVybWVkaWFpcmUnID09PSByYW5rXCJcclxuICAgICAgICAgICAgICAgIGtleT1cImludGVybWVkaWFpcmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDQ+Vm90cmUgbml2ZWF1PC9oND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmFuay1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBkdSByYW5nIGludGVybcOpZGlhaXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyYW5rLWxhYmVsXCI+UGF0aWVudCBJbnRlcm3DqWRpYWlyZTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1yZXN1bHRcIj5CaWVuIGRhbnMgdGVzIEJhc2tldHMmbmJzcDshPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRpbmcgJiYgJ2NvbmZpcm1lJyA9PT0gcmFua1wiIGtleT1cImNvbmZpcm1lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+Vm90cmUgbml2ZWF1PC9oND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmFuay1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSAxIGR1IHJhbmcgY29uZmlybcOpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIDIgZHUgcmFuZyBjb25maXJtw6lcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJhbmstbGFiZWxcIj5QYXRpZW50IENvbmZpcm3DqTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1yZXN1bHRcIj5QYXMgbGUgdGVtcHMgZGUgbmlhaXNlciZuYnNwOyE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGluZyAmJiAnZXhwZXJ0JyA9PT0gcmFua1wiIGtleT1cImV4cGVydFwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlZvdHJlIG5pdmVhdTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJhbmstaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi8uLi8uLi9pbWcvaWNvbnMvY29sb3JlZC9yZXdhcmQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgMSBkdSByYW5nIGV4cGVydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSAyIGR1IHJhbmcgZXhwZXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIDMgZHUgcmFuZyBleHBlcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJhbmstbGFiZWxcIj5QYXRpZW50IEV4cGVydDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1yZXN1bHRcIj5QcsOqdCBwb3VyIGxlIHByb2NoYWluIElyb24gTWFuJm5ic3A7ITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIiBjbGFzcz1cImxvYWRpbmctYmxvY2tcIiBrZXk9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGg0IHctNjVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgaVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyByYW5rLWxhYmVsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHJhbmstcmVzdWx0IHctODVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICByYW5rOiBTdHJpbmcsXHJcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcclxuICAgICAgICBkb2N0b3JWaWV3OiBCb29sZWFuLFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+PHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbiNteS1zY29yZXMgLmNvbnRlbnQgLnNjb3JlLWJsb2NrLnNjb3JlLXJhbmstYmxvY2sge1xyXG4gICAgZ3JpZC1hcmVhOiBzY29yZXJhbmdibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAyMXJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgID4gKiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9pbWcvYmFsbC00LnN2ZykgdG9wIC04LjFyZW0gcmlnaHQgLTcuM3JlbVxyXG4gICAgICAgICAgICAgICAgbm8tcmVwZWF0LFxyXG4gICAgICAgICAgICB1cmwoLi4vLi4vLi4vLi4vaW1nL2JhbGwtNC5zdmcpIGJvdHRvbSAtMTUuNHJlbSBsZWZ0IC05LjRyZW1cclxuICAgICAgICAgICAgICAgIG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE3LjdyZW0sIDI2LjdyZW07XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgICAgICAgb3BhY2l0eTogMC44OTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5ub3V2ZWF1IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvaGFuZC5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCAwcmVtIGxlZnQgLTRyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAgICAgaS5yYW5rLWltZyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjclO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmRlYnV0YW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvYnJhcy5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCAwcmVtIGxlZnQgLTRyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAgICAgaS5yYW5rLWltZyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjclO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmFtYXRldXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzYxLnN2Zyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIDByZW0gbGVmdCAtNHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgICAgICBpLnJhbmstaW1nIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuaW50ZXJtZWRpYWlyZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCAwcmVtIGxlZnQgLTRyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAgICAgaS5yYW5rLWltZyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjclO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmNvbmZpcm1lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Zyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIDByZW0gbGVmdCAtNHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgICAgICBpLnJhbmstaW1nIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZXhwZXJ0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Zyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIDByZW0gbGVmdCAtNHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgICAgICBpLnJhbmstaW1nIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2FkaW5nLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuMnM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSA4JSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjQwLCAxMDEsIDY1LCAwLjQpIDM4JSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgNTQlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDY0MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+ICoge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaDQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJhbmstbGFiZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIuNTVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmFuay1yZXN1bHQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBpLnJhbmstaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxOHJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjMlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmFuay1sYWJlbCB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJhbmstcmVzdWx0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uXHJcbiAgICAgICAgaWQ9XCJteS13b3Jrc2hlZXRzXCJcclxuICAgICAgICBjbGFzcz1cImtpdi1ibG9ja1wiXHJcbiAgICAgICAgOmNsYXNzPVwieyByZWR1Y2VkOiAhJHBhcmVudC5teVdvcmtzaGVldHNDb250ZW50IH1cIlxyXG4gICAgPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtY29udGVudFwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cIiRwYXJlbnQubXlXb3Jrc2hlZXRzQ29udGVudCA9ICEkcGFyZW50Lm15V29ya3NoZWV0c0NvbnRlbnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtY2hldnJvbi1kb3duIGljb24tM1wiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiPk1lczwvc3BhblxyXG4gICAgICAgICAgICA+PHNwYW4gdi1pZj1cImRvY3RvclZpZXdcIj5TZXM8L3NwYW4+IGZpY2hlc1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImhlaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIkcGFyZW50Lm15V29ya3NoZWV0c0NvbnRlbnRcIiBjbGFzcz1cIndvcmtzaGVldC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmIGdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3bC1wYXRpZW50XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHdvcmtzaGVldCwgaSkgaW4gZ2V0UGF0aWVudFdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwid29ya3NoZWV0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgd29ya3NoZWV0LnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ1BhcnRPZkJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFydE9mQm9keT1cIndvcmtzaGVldC5wYXJ0T2ZCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlzQ29tcGxldGVkKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VTdGF0cy5sZW5ndGggPiAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIndvcmtzaGVldC1wcm9ncmVzcy1saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pc0NvbXBsZXRlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbi5pc0luUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2Jhci1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzYmFyLXRodW1iXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3dvcmtzaGVldC53b3Jrc2hlZXRQcm9ncmVzc2lvbn0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2Jhci1zdGVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlZvdXMgYXZleiBmaW5pIGxhIGZpY2hlICE8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJkb2N0b3JWaWV3XCI+RW4gY291cnM8L3NwYW4+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW4gY291cnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIndvcmtzaGVldC1wcm9ncmVzcy1saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pc0NvbXBsZXRlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXNJblByb2dyZXNzKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jb3VudE9sZFdvcmtzaGVldFNlc3Npb25zID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5leGVyY2lzZVN0YXRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2Jhci1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzYmFyLXRodW1iXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NiYXItc3RlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhbiB2LWlmPVwiIWRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5Wb3VzIGF2ZXogZmluaSBsYSBmaWNoZSAhPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPk5vbiBkw6ltYXJyw6llPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm9uIGTDqW1hcnLDqWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pc0NvbXBsZXRlZCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY291bnRPbGRXb3Jrc2hlZXRTZXNzaW9ucyA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3b3Jrc2hlZXQtY29udGVudCBzZXNzaW9uLWNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnMgIT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leGVjT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcmF2bywgdm9zIGV4ZXJjaWNlcyBkZSBjZXR0ZSBzZXNzaW9uIG9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDDqXTDqSBmYWl0cyBhdmVjIHN1Y2PDqHMgISA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudGltZUxlZnRCZWZvcmVOZXh0U2Vzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGV6LXZvdXMgZGFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRpbWVMZWZ0QmVmb3JlTmV4dFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvdXIgdW5lIG5vdXZlbGxlIHNlc3Npb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRvY3RvclZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhlcmNpY2VzIHRlcm1pbsOpcyBwb3VyIGNldHRlIHNlc3Npb24uPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRpbWVMZWZ0QmVmb3JlTmV4dFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2NoYWluZSBzZXNzaW9uIGRhbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50aW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3N0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5leGVyY2lzZVN0YXRzLmxlbmd0aCA+IDApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50b3RhbFdvcmtzaGVldFNlc3Npb25zID09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leGVjT3JkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIWRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+RsOpbGljaXRhdGlvbnMsIHZvdHJlIHRyYWl0ZW1lbnQgZXN0IHRlcm1pbsOpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICE8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+VHJhaXRlbWVudCB0ZXJtaW7DqS48L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY291bnRPbGRXb3Jrc2hlZXRTZXNzaW9ucyA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlU3RhdHMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIWRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Vm91cyBuJ2F2ZXogcGFzIHLDqWFsaXPDqSB2b3RyZSB0cmFpdGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbCBhIGV4cGlyw6kuPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlRyYWl0ZW1lbnQgbm9uIHLDqWFsaXPDqSBldCBleHBpcsOpLjwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInJlZGlyZWN0SW5Qcm9ncmVzcyA9PT0gd29ya3NoZWV0LmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWRpcmVjdFRvV29ya3NoZWV0UGFnZSh3b3Jrc2hlZXQuaWQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1jb25zdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJyZWRpcmVjdEluUHJvZ3Jlc3MgPT09IHdvcmtzaGVldC5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVkaXJlY3RUb0RvY3RvclZpZXcod29ya3NoZWV0LmlkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tY29uc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9pclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIndvcmtzaGVldC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1leGVyY2lzZSBpY29uLTdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYlwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpY2U8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIndvcmtzaGVldC5leGVyY2lzZXMubGVuZ3RoID4gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+czwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC10aW1pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB3b3Jrc2hlZXQucGVyRGF5IH19eDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhciBqb3VyIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB3b3Jrc2hlZXQucGVyV2VlayB9fXg8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXIgc2VtYWluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtcGVyaW9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWNsb2NrIGljb24tMTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFDDqXJpb2RlIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB3b3Jrc2hlZXQuZHVyYXRpb24gfX0gc2VtYWluZTxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIndvcmtzaGVldC5kdXJhdGlvbiA+IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5zPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RJblByb2dyZXNzID09PSB3b3Jrc2hlZXQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvV29ya3NoZWV0UGFnZSh3b3Jrc2hlZXQuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWdvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyAhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RJblByb2dyZXNzID09PSB3b3Jrc2hlZXQuaWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlU3RhdHMubGVuZ3RoID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWRpcmVjdFRvRG9jdG9yVmlldyh3b3Jrc2hlZXQuaWQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvaXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90LWZvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZvbGRlci1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCI+Vm91cyBuJ2F2ZXogcGFzIGRlIGZpY2hlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+TGUgcGF0aWVudCBuJ2EgcGFzIGVuY29yZSBkZSBmaWNoZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyB3b3Jrc2hlZXQtdGl0bGUgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgcGFydC1vZi1ib2R5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyB3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1leGVyY2lzZXMtY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMzVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpbWluZyB3LTI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXBlcmlvZCB3LTM1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgYnRuLWdvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgbG9hZGluZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTE1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nIHdvcmtzaGVldC10aW1pbmcgdy0zNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nIHdvcmtzaGVldC1wZXJpb2Qgdy0yNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGJ0bi1nb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgVGFnUGFydE9mQm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwYXRpZW50OiBPYmplY3QsXHJcbiAgICAgICAgcGF0aWVudFdvcmtzaGVldHM6IEFycmF5LFxyXG4gICAgICAgIGxvYWRpbmdQYXRpZW50V29ya3NoZWV0czogQm9vbGVhbixcclxuICAgICAgICBkb2N0b3JWaWV3OiBCb29sZWFuLFxyXG4gICAgICAgIGRvY3RvcjogT2JqZWN0LFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBUYWdQYXJ0T2ZCb2R5LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkaXJlY3RJblByb2dyZXNzOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRQYXRpZW50V29ya3NoZWV0cygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5Q3JlYXRlZEF0KHRoaXMucGF0aWVudFdvcmtzaGVldHMpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNvcnRCeUNyZWF0ZWRBdChhcnJheSkge1xyXG4gICAgICAgICAgICBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5jcmVhdGVkQXQpIC0gbmV3IERhdGUoYS5jcmVhdGVkQXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3RUb1dvcmtzaGVldFBhZ2Uod29ya3NoZWV0SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdEluUHJvZ3Jlc3MgPSB3b3Jrc2hlZXRJZDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL3BhdGllbnQvJHt0aGlzLnBhdGllbnQuaWR9L2ZpY2hlLyR7d29ya3NoZWV0SWR9YDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGlyZWN0VG9Eb2N0b3JWaWV3KHdvcmtzaGVldElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3RJblByb2dyZXNzID0gd29ya3NoZWV0SWQ7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vdm9pci8ke3dvcmtzaGVldElkfS8ke3RoaXMucGF0aWVudC5pZH0vP3JlZj1kYXNocGA7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RvY3RvclNlbGVjdEJveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWNjM2ExNjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRG9jdG9yU2VsZWN0Qm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRG9jdG9yU2VsZWN0Qm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Eb2N0b3JTZWxlY3RCb3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlY2MzYTE2NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlY2MzYTE2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlY2MzYTE2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRG9jdG9yU2VsZWN0Qm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lY2MzYTE2NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlY2MzYTE2NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9jb21wb25lbnRzL0RvY3RvclNlbGVjdEJveC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Rhc2hib2FyZFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiYzhlMDVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rhc2hib2FyZFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiYzhlMDVjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmJjOGUwNWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYmM4ZTA1YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYmM4ZTA1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYmM4ZTA1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGFzaGJvYXJkUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJjOGUwNWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmJjOGUwNWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRG9jdG9yQ2hvaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjhhMjE4ZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Eb2N0b3JDaG9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Eb2N0b3JDaG9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0RvY3RvckNob2ljZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc2OGEyMThkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc2OGEyMThkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc2OGEyMThkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Eb2N0b3JDaG9pY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2OGEyMThkJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc2OGEyMThkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9Eb2N0b3JDaG9pY2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5ZjUyZGVkJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTlmNTJkZWQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTlmNTJkZWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTlmNTJkZWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTlmNTJkZWQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTlmNTJkZWQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL015RXhlcmNpc2VTdGF0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODBjMjY2MDQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXlFeGVyY2lzZVN0YXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXlFeGVyY2lzZVN0YXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9NeUV4ZXJjaXNlU3RhdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODBjMjY2MDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4MGMyNjYwNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzgwYzI2NjA0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzgwYzI2NjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzgwYzI2NjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NeUV4ZXJjaXNlU3RhdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwYzI2NjA0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzgwYzI2NjA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeUV4ZXJjaXNlU3RhdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NeVNjb3Jlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmE5MGZhZGEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXlTY29yZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NeVNjb3Jlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTXlTY29yZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmE5MGZhZGEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYTkwZmFkYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJhOTBmYWRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJhOTBmYWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJhOTBmYWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NeVNjb3Jlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmE5MGZhZGEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmE5MGZhZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2NvcmVSYW5rQmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlYTI3Njc0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Njb3JlUmFua0Jsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2NvcmVSYW5rQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Njb3JlUmFua0Jsb2NrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlYTI3Njc0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmVhMjc2NzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZWEyNzY3NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZWEyNzY3NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZWEyNzY3NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2NvcmVSYW5rQmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlYTI3Njc0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJlYTI3Njc0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy9TY29yZVJhbmtCbG9jay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL015V29ya3NoZWV0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTM3NjdkMDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXlXb3Jrc2hlZXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXlXb3Jrc2hlZXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTM3NjdkMDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTM3NjdkMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTM3NjdkMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL015V29ya3NoZWV0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTM3NjdkMDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTM3NjdkMDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015V29ya3NoZWV0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRG9jdG9yU2VsZWN0Qm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RvY3RvclNlbGVjdEJveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXNoYm9hcmRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Eb2N0b3JDaG9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRG9jdG9yQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeUV4ZXJjaXNlU3RhdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlFeGVyY2lzZVN0YXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeVNjb3Jlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeVNjb3Jlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NvcmVSYW5rQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NvcmVSYW5rQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015V29ya3NoZWV0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeVdvcmtzaGVldHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RvY3RvclNlbGVjdEJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzRdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmM4ZTA1YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzRdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRG9jdG9yQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbNF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015RXhlcmNpc2VTdGF0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MGMyNjYwNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzRdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlTY29yZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmE5MGZhZGEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Njb3JlUmFua0Jsb2NrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlYTI3Njc0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Eb2N0b3JTZWxlY3RCb3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVjYzNhMTY0JlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rhc2hib2FyZFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiYzhlMDVjJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RvY3RvckNob2ljZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzY4YTIxOGQmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OWY1MmRlZCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeUV4ZXJjaXNlU3RhdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwYzI2NjA0JnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015U2NvcmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYTkwZmFkYSZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY29yZVJhbmtCbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmVhMjc2NzQmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlXb3Jrc2hlZXRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05Mzc2N2QwNCZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0uaGlkZVNlbGVjdEJveCxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImhpZGVTZWxlY3RCb3hcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0LWZpbHRlclwiLFxuICAgICAgY2xhc3M6IHsgbG9hZGluZzogX3ZtLmxvYWRpbmcgfVxuICAgIH0sXG4gICAgW1xuICAgICAgIV92bS5sb2FkaW5nXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uZG9jdG9yU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZG9jdG9yLXNlbGVjdGVkIGRvY3RvclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucmVzZXRTZWxlY3QgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBzaXplOiBcIjMwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5kb2N0b3JTZWxlY3RlZC5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uZG9jdG9yU2VsZWN0ZWQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIvaW1nL2F2YXRhci1kZWZhdWx0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JTZWxlY3RlZC5maXJzdG5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JTZWxlY3RlZC5sYXN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRVc2VyTmFtZShfdm0uZG9jdG9yU2VsZWN0ZWQpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJiLXItYi16ZXJvXCI6IF92bS5zZWxlY3RCb3gsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlci1ncmF5XCI6IF92bS5zZWxlY3RCb3hcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkb2N0b3ItY2hvaWNlLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAhX3ZtLnNlbGVjdEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlPDqWxlY3Rpb25uZXogdm90cmUgcHJhdGljaWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJSZWNoZXJjaGV6IHZvdHJlIHByYXRpY2llblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpbHRlciB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RCb3ggPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogX3ZtLnNlbGVjdEJveFdpdGhUaHJvdHRsZSxcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsdGVyID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXJyb3ctdG9nZ2xlLWJveFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uc2VsZWN0Qm94IH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZVNlbGVjdEJveCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwidnMtaWNvbi1hcnJvd1wiIH0pXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImhlaWdodFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RCb3hcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QtYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmZvY3VzSW5wdXRTZWxlY3QgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldERvY3RvcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdldERvY3RvcnMsIGZ1bmN0aW9uKGRvY3RvciwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGtleTogaSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkb2N0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdERvY3Rvcihkb2N0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBzaXplOiBcIjM1XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZG9jdG9yLmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb2N0b3IuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2ltZy9hdmF0YXItZGVmYXVsdC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuZmlyc3RuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5sYXN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VXNlck5hbWUoZG9jdG9yKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXVzZXJzLXNsYXNoXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW4gcHJhdGljaWVuIG4nYSDDqXTDqSB0cm91dsOpIGF2ZWMgXFxcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsdGVyKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoJ1wiJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5lcnJvck1lc3NhZ2UgJiYgIV92bS5kb2N0b3JTZWxlY3RlZFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXB0eS1lcnJvci1tZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlKSArIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy10ZXh0XCIgfSwgW192bS5fdihcIkNoYXJnZW1lbnQuLi5cIildKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgIV92bS5wYXRpZW50LmRvY3RvciAmJiAhX3ZtLnBhdGllbnRIYXNOb0RvY3RvckNob2ljZSAmJiAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgPyBfYyhcIkRvY3RvckNob2ljZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBwYXRpZW50OiBfdm0ucGF0aWVudCxcbiAgICAgICAgICAgICAgY3NyZlRva2VuU2VsZWN0RG9jdG9yOiBfdm0uY3NyZlRva2VuU2VsZWN0RG9jdG9yLFxuICAgICAgICAgICAgICBjc3JmVG9rZW5Db250YWN0OiBfdm0uY3NyZlRva2VuQ29udGFjdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHBhdGllbnRIYXNOb0RvY3RvckNob2ljZTogX3ZtLnNldFBhdGllbnRIYXNOb0RvY3RvckNob2ljZSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfYyhcbiAgICAgICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYi1wYXRpZW50XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IFwiZG9jdG9yLXZpZXdcIjogX3ZtLmRvY3RvclZpZXcgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZGFzaGJvYXJkXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWFycm93LWxlZnQgaWNvbi0zMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkZXJpY3RUb0Rhc2hib2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW1xuICAgICAgICAgICAgICAgICAgIV92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBzdXIgdm90cmUgZGFzaGJvYXJkICFcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvY29sb3JlZC9oYW5kLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBkJ3VuZSBtYWluIHF1aSBmYWl0ICdjb3Vjb3UnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkIGRlXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmZpcnN0bmFtZSB8fCBfdm0ucGF0aWVudC5sYXN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGF0aWVudC5maXJzdG5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBhdGllbnQubGFzdG5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGF0aWVudC5lbWFpbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1haW5cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1ibG9jayBtb2JpbGUtdmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYXRpZW50XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiTGUgcGF0aWVudFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubXlEb2N0b3JDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhdGllbnQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhdGllbnQtYXZhdGFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgc2l6ZTogXCIxMTZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5wYXRpZW50LmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBhdGllbnQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuZmlyc3RuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGF0aWVudC1pbmZvc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VXNlck5hbWUoX3ZtLnBhdGllbnQpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5iaXJ0aGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJiaXJ0aGRhdGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuYmlydGhkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYW5zXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJNeVNjb3Jlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aWVudDogX3ZtLnBhdGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdG9yVmlldzogX3ZtLmRvY3RvclZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aWVudFdvcmtzaGVldHM6IF92bS5wYXRpZW50V29ya3NoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nUGF0aWVudFdvcmtzaGVldHM6IF92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJNeVdvcmtzaGVldHNcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQ6IF92bS5wYXRpZW50LFxuICAgICAgICAgICAgICAgICAgICAgIGRvY3RvclZpZXc6IF92bS5kb2N0b3JWaWV3LFxuICAgICAgICAgICAgICAgICAgICAgIGRvY3RvcjogX3ZtLmN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnRXb3Jrc2hlZXRzOiBfdm0ucGF0aWVudFdvcmtzaGVldHMsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzOiBfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFzaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJNeURhc2hib2FyZE5vdGlmaWNhdGlvbnNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50OiBfdm0ucGF0aWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcmZUb2tlbkFjY2VwdERvY3RvcjogX3ZtLmNzcmZUb2tlbkFjY2VwdERvY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcmZUb2tlbkRlY2xpbmVEb2N0b3I6IF92bS5jc3JmVG9rZW5EZWNsaW5lRG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IHJlZHVjZWQ6ICFfdm0ubXlEb2N0b3JDb250ZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJteS1kb2N0b3JcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvZ2dsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm15RG9jdG9yQ29udGVudCA9ICFfdm0ubXlEb2N0b3JDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIk1vbiBwcmF0aWNpZW5cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImhlaWdodDJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm15RG9jdG9yQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZG9jdG9yLWRldGFpbHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkb2N0b3ItYXZhdGFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdEb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0RvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIxMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnBhdGllbnQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBhdGllbnQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLi4vLi4vaW1nL2F2YXRhci1kZWZhdWx0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdmF0YXIgZGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmYWxzZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nRG9jdG9yKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnBhdGllbnQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXIgd2FpdGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjExNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3NtaWxleS82MC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgTW9ub2NsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZG9jdG9yLWluZm9zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdEb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGluZyBuYW1lIHctNTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGluZyBjaXR5IHctNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0RvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRVc2VyTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tY2hhbmdlLWRvY3RvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3Blbk1vZGFsQ2hhbmdlRG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhcyBmYS1zeW5jLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNoYW5nZXIgZGUgcHJhdGljaWVuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eU5hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuZG9jdG9yLmNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudGl0eS1jaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbnRpdHlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5kb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbnRpdHlOYW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2l0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiwgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0RvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW4gYXR0ZW50ZSBkZSB2YWxpZGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucGF0aWVudC5kb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW4gYXR0ZW50ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzdWJwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW4gZGUgbm9zIHByYXRpY2llbnMgdmEgcHJlbmRyZSBjb250YWN0IGF2ZWMgdm91c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvdXLCoMOpbGFib3JlciBsZSB0cmFpdGVtZW50IGFwcHJvcHJpw6lcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1ibG9jayBkZXNrdG9wLXZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInBhdGllbnRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJMZSBwYXRpZW50XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm15RG9jdG9yQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGF0aWVudC1kZXRhaWxzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhdGllbnQtYXZhdGFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgc2l6ZTogXCIxMTZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5wYXRpZW50LmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBhdGllbnQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuZmlyc3RuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYXRpZW50LWluZm9zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VXNlck5hbWUoX3ZtLnBhdGllbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5iaXJ0aGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiaXJ0aGRhdGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0QWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJpcnRoZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGFuc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTXlFeGVyY2lzZVN0YXRzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50OiBfdm0ucGF0aWVudCxcbiAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JWaWV3OiBfdm0uZG9jdG9yVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50V29ya3NoZWV0czogX3ZtLnBhdGllbnRXb3Jrc2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdQYXRpZW50V29ya3NoZWV0czogX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubW9kYWxDaGFuZ2VEb2N0b3JcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hhbmdlLWRvY3Rvci1tb2RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJjaGFuZ2UtZG9jdG9yLWJveFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnMtZGlhbG9nX19jbG9zZSBidG4tY2xvc2UtbW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VNb2RhbENoYW5nZURvY3RvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2cy1pY29uLWNsb3NlIHZzLWljb24taG92ZXIteFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiQ2hhbmdlciBkZSBwcmF0aWNpZW5cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJEb2N0b3JTZWxlY3RCb3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJpZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRvY3RvclNlbGVjdGVkOiBfdm0uZG9jdG9yU2VsZWN0ZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBzZXREb2N0b3JTZWxlY3RlZDogX3ZtLnNldERvY3RvclNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VNb2RhbENoYW5nZURvY3RvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBbm51bGVyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdDaGFuZ2VEb2N0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5kb2N0b3JTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nQ2hhbmdlRG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnZhbGlkZUNoYW5nZURvY3RvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJWYWxpZGVyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJkb2N0b3ItY2hvaWNlXCIgfSB9LFxuICAgIFtcbiAgICAgIF92bS5wYXRpZW50SGFzRG9jdG9yQ2hvaWNlICE9PSBudWxsXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tcHJldlwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBjaXJjbGU6IFwiXCIsIGZsb2F0aW5nOiBcIlwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnRIYXNEb2N0b3JDaG9pY2UgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIiB9KV1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiQmllbnZlbnVlIHN1ciBLaXZpZCAhXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBhdGllbnRIYXNEb2N0b3JDaG9pY2UgPT09IG51bGxcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCIgQXZlei12b3VzwqB1bsKgcHJhdGljaWVuID9cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50SGFzRG9jdG9yQ2hvaWNlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgT3VpLCBqJ2FpIHVuIHByYXRpY2llblxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnBhdGllbnRIYXNOb0RvY3RvckNob2ljZSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgTm9uLCBqZSBuJ2VuIGFpIHBhc1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGF0aWVudEhhc0RvY3RvckNob2ljZVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGlkZVNlbGVjdEJveCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGlkZVNlbGVjdEJveFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QtZmlsdGVyXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IGxvYWRpbmc6IF92bS5sb2FkaW5nIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkb2N0b3Itc2VsZWN0ZWQgZG9jdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnJlc2V0U2VsZWN0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBzaXplOiBcIjM1XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZG9jdG9yU2VsZWN0ZWQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uZG9jdG9yU2VsZWN0ZWQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRvY3RvclNlbGVjdGVkLmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JTZWxlY3RlZC5sYXN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFVzZXJOYW1lKF92bS5kb2N0b3JTZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXItYi16ZXJvXCI6IF92bS5zZWxlY3RCb3gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyLWdyYXlcIjogX3ZtLnNlbGVjdEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRvY3Rvci1jaG9pY2Utc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogIV92bS5zZWxlY3RCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlPDqWxlY3Rpb25uZXogdm90cmUgcHJhdGljaWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlJlY2hlcmNoZXogdm90cmUgcHJhdGljaWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdEJveCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogX3ZtLnNlbGVjdEJveFdpdGhUaHJvdHRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbHRlciA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhcnJvdy10b2dnbGUtYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnNlbGVjdEJveCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZVNlbGVjdEJveCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiaGVpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QtYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZm9jdXNJbnB1dFNlbGVjdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0RG9jdG9ycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0RG9jdG9ycywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGkgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkb2N0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdERvY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiMzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZG9jdG9yLmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvY3Rvci5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXZhdGFyIGRlIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRVc2VyTmFtZShkb2N0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtdXNlcnMtc2xhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuIHByYXRpY2llbiBuJ2Egw6l0w6kgdHJvdXbDqSBhdmVjIFxcXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZmlsdGVyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KCdcIicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2YWxpZC1kb2N0b3ItY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInZzLWJ1dHRvblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0udmFsaWRlRG9jdG9yQ2hvaWNlIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJWYWxpZGVyXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250YWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5wYXRpZW50SGFzTm9Eb2N0b3JDaG9pY2UgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSmUgbidhaSBwYXMgZGUgcHJhdGljaWVuXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5nZXREYXNoYm9hcmROb3RpZmljYXRpb25zLmxlbmd0aCB8fFxuICAgICFfdm0ucGF0aWVudC5iaXJ0aGRhdGUgfHxcbiAgICAhX3ZtLnBhdGllbnQuZ2VuZGVyIHx8XG4gICAgIV92bS5wYXRpZW50LmZpcnN0bmFtZSB8fFxuICAgICFfdm0ucGF0aWVudC5sYXN0bmFtZSB8fFxuICAgICFfdm0ucGF0aWVudC5pc1ZlcmlmaWVkXG4gICAgPyBfYyhcbiAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIixcbiAgICAgICAgICBjbGFzczogeyByZWR1Y2VkOiAhX3ZtLiRwYXJlbnQubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50IH0sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZGFzaGJvYXJkLW5vdGlmaWNhdGlvbnNcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvZ2dsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRwYXJlbnQubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50ID0gIV92bS4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgIC5teURCTm90aWZpY2F0aW9uc0NvbnRlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIiB9KV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiTm90aWZpY2F0aW9uc1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJoZWlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS4kcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9ucy1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nZXREYXNoYm9hcmROb3RpZmljYXRpb25zLCBmdW5jdGlvbihub3RpZiwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmcgJiYgXCJhZGQtcGF0aWVudFwiID09PSBub3RpZi5jb250ZW50WzBdLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbnMtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24tbGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wobm90aWYuY29udGVudCwgZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBrZXk6IGkgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIgPT09IGUudHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGUuY29udGVudCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJcIiA9PT0gZS50eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZS5jb250ZW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24tYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGRpc2FibGVkOiBfdm0uYWN0aW9uSW5Qcm9ncmVzcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tbGluayBncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWNjZXB0RG9jdG9yKG5vdGlmLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtYWNjZXB0IGljb24tMjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBY2NlcHRlclwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1saW5rIHJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVjbGluZURvY3Rvcihub3RpZi5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWRlY2xpbmUgaWNvbi02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUmVmdXNlclwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmcgJiYgIV92bS5wYXRpZW50LmlzVmVyaWZpZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9ucy1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24tbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFbDqXJpZmllciB2b3RyZSBhZHJlc3NlIGVtYWlsXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24tYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZWQ6IF92bS5hY3Rpb25JblByb2dyZXNzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1saW5rIHZlcmlmLW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2VuZFZlcmlmRW1haWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1lbnZlbG9wZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJSZW52b3llciBsaWVuXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFfdm0ucGF0aWVudC5iaXJ0aGRhdGUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnBhdGllbnQuZ2VuZGVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5wYXRpZW50LmZpcnN0bmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0ucGF0aWVudC5sYXN0bmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9ucy1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24tbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29tcGzDqXRlciB2b3RyZSBwcm9maWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLWFjdGlvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvcGFyYW1ldHJlc1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1wZW4gaWNvbi00XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQ29tcGzDqXRlclwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ibG9jayBub3RpZmljYXRpb25zLWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgdy02MCBub3RpZmljYXRpb24tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHctMjUgbm90aWZpY2F0aW9uLWFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWJsb2NrIG5vdGlmaWNhdGlvbnMtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3LTMwIG5vdGlmaWNhdGlvbi1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgdy0zMCBub3RpZmljYXRpb24tYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcIm15LWV4ZXJjaXNlLXN0YXRzXCIgfSB9LCBbXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWJsb2NrXCIsIGF0dHJzOiB7IGlkOiBcInNlbnNpdGl2aXR5XCIgfSB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b24tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5zZW5zaXRpdml0eVVuaXRPZlRpbWUgPT09IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlU2Vuc2l0aXZpdHlVbml0T2ZUaW1lKFwiZGF5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBKb3VyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5zZW5zaXRpdml0eVVuaXRPZlRpbWUgPT09IFwid2Vla1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVNlbnNpdGl2aXR5VW5pdE9mVGltZShcIndlZWtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbWFpbmVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLnNlbnNpdGl2aXR5VW5pdE9mVGltZSA9PT0gXCJtb250aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVNlbnNpdGl2aXR5VW5pdE9mVGltZShcIm1vbnRoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBNb2lzXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5zZW5zaXRpdml0eVVuaXRPZlRpbWUgPT09IFwieWVhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVNlbnNpdGl2aXR5VW5pdE9mVGltZShcInllYXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFubsOpZVxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwia2l2LXNlbGVjdFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidnMtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJTZWxlY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0RGlzYWJsZVdvcmtzaGVldHMoXCJzZW5zaXRpdml0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2Vuc2l0aXZpdHlVbml0T2ZUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2Vuc2l0aXZpdHlVbml0T2ZUaW1lID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZW5zaXRpdml0eVVuaXRPZlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiSm91clwiLCB2YWx1ZTogXCJkYXlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIEpvdXIgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIlNlbWFpbmVcIiwgdmFsdWU6IFwid2Vla1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU2VtYWluZVxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIk1vaXNcIiwgdmFsdWU6IFwibW9udGhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIE1vaXMgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIkFubsOpZVwiLCB2YWx1ZTogXCJ5ZWFyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBbm7DqWVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNoYXJ0aXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWNvbnRlbnRcIjogIV92bS5zZW5zaXRpdml0eUV4ZXJjaXNlU3RhdHMuc2VyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNtOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gMTIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbnNpdGl2aXR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoIDwgMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gNSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAxMlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGlvOiBcImN0LW1ham9yLXNlY29uZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNlbnNpdGl2aXR5Q2hhcnRPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudC1oYW5kbGVyc1wiOiBfdm0uZXZlbnRIYW5kbGVyc1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXhpc1ktbGFiZWxzIHNlbnNpdGl2aXR5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzQ2LnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgcXVpIHZhIHRyw6hzIG1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzQ3LnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgcXVpIHZhIG1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzQ4LnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgcXVpIHZhIHBhcyBiaWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNDkuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlNtaWxleSBxdWkgdmEgYm9mXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNTAuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlNtaWxleSBwZXJwbGV4ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzUxLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgcXVpIHZhIGJpZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS81Mi5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiU21pbGV5IHF1aSB2YSB0csOocyBiaWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNTMuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlNtaWxleSB0csOocyBjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNTQuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlNtaWxleSBhdXggYW5nZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG5zLXdvcmtzaGVldHMtc3RhdHMgc2Vuc2l0aXZpdHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdldFBhdGllbnRXb3Jrc2hlZXRzLCBmdW5jdGlvbih3b3Jrc2hlZXQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi10b2dnbGUtd29ya3NoZWV0LXN0YXRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWN0aXZlOiBfdm0uZGlzYWJsZVdvcmtzaGVldHNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbnNpdGl2aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKHdvcmtzaGVldC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZUhpZGRlbldvcmtzaGVldExpbmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2Vuc2l0aXZpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGluZS1jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5jb2xvcnNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiNXB4IHNvbGlkIFwiICsgX3ZtLmNvbG9yc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB3b3Jrc2hlZXQ6IHdvcmtzaGVldCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJiAhX3ZtLmdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWNhbGVuZGFyLW1pbnVzXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJWb3VzIG4nYXZleiBwYXMgZW5jb3JlIGRlIHN0YXRpc3RpcXVlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTGUgcGF0aWVudCBuJ2EgcGFzIGVuY29yZSBkZSBzdGF0aXN0aXF1ZVwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1xuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZ1wiIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1ibG9ja1wiLCBhdHRyczogeyBpZDogXCJ0ZWNobmljYWxcIiB9IH0sIFtcbiAgICAgIF92bS5fbSgxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvbi1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLnRlY2huaWNhbFVuaXRPZlRpbWUgPT09IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGVjaG5pY2FsVW5pdE9mVGltZShcImRheVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgSm91clxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0udGVjaG5pY2FsVW5pdE9mVGltZSA9PT0gXCJ3ZWVrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGVjaG5pY2FsVW5pdE9mVGltZShcIndlZWtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbWFpbmVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLnRlY2huaWNhbFVuaXRPZlRpbWUgPT09IFwibW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUZWNobmljYWxVbml0T2ZUaW1lKFwibW9udGhcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1vaXNcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLnRlY2huaWNhbFVuaXRPZlRpbWUgPT09IFwieWVhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRlY2huaWNhbFVuaXRPZlRpbWUoXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBbm7DqWVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImtpdi1zZWxlY3RcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZzLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiU2VsZWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldERpc2FibGVXb3Jrc2hlZXRzKFwidGVjaG5pY2FsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZWNobmljYWxVbml0T2ZUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVjaG5pY2FsVW5pdE9mVGltZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGVjaG5pY2FsVW5pdE9mVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJKb3VyXCIsIHZhbHVlOiBcImRheVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgSm91ciBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiU2VtYWluZVwiLCB2YWx1ZTogXCJ3ZWVrXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiTW9pc1wiLCB2YWx1ZTogXCJtb250aFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgTW9pcyBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiQW5uw6llXCIsIHZhbHVlOiBcInllYXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFubsOpZVxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1xuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY2hhcnRpc3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtY29udGVudFwiOiAhX3ZtLnRlY2huaWNhbEV4ZXJjaXNlU3RhdHMuc2VyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNsOiBfdm0udGVjaG5pY2FsRXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzbTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlY2huaWNhbEV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA+PSAxMiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVjaG5pY2FsRXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoIDwgMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVjaG5pY2FsRXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlY2huaWNhbEV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA8IDEyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86IFwiY3QtbWFqb3Itc2Vjb25kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLnRlY2huaWNhbEV4ZXJjaXNlU3RhdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0udGVjaG5pY2FsQ2hhcnRPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudC1oYW5kbGVyc1wiOiBfdm0uZXZlbnRIYW5kbGVyc1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXhpc1ktbGFiZWxzIHRlY2huaWNhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfYyhcInBcIiwgW192bS5fdihcIkV4Y2VsbGVudGVcIildKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfYyhcInBcIiwgW192bS5fdihcIk3DqWRpb2NyZVwiKV0pXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bnMtd29ya3NoZWV0cy1zdGF0c1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0UGF0aWVudFdvcmtzaGVldHMsIGZ1bmN0aW9uKHdvcmtzaGVldCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLXRvZ2dsZS13b3Jrc2hlZXQtc3RhdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhY3RpdmU6IF92bS5kaXNhYmxlV29ya3NoZWV0c1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGVjaG5pY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKHdvcmtzaGVldC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZUhpZGRlbldvcmtzaGVldExpbmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGVjaG5pY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmUtY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBfdm0uY29sb3JzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjVweCBzb2xpZCBcIiArIF92bS5jb2xvcnNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ0bkNoYXJ0V29ya3NoZWV0UGFydE9mQm9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgd29ya3NoZWV0OiB3b3Jrc2hlZXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgJiYgIV92bS5nZXRQYXRpZW50V29ya3NoZWV0cy5sZW5ndGhcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1jYWxlbmRhci1taW51c1wiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVm91cyBuJ2F2ZXogcGFzIGVuY29yZSBkZSBzdGF0aXN0aXF1ZVwiKV0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxlIHBhdGllbnQgbidhIHBhcyBlbmNvcmUgZGUgc3RhdGlzdGlxdWVcIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmdcIiB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIiwgYXR0cnM6IHsgaWQ6IFwiZGlmZmljdWx0eVwiIH0gfSwgW1xuICAgICAgX3ZtLl9tKDIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5nZXRQYXRpZW50V29ya3NoZWV0cy5sZW5ndGhcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uZGlmZmljdWx0eVVuaXRPZlRpbWUgPT09IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlRGlmZmljdWx0eVVuaXRPZlRpbWUoXCJkYXlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEpvdXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmRpZmZpY3VsdHlVbml0T2ZUaW1lID09PSBcIndlZWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VEaWZmaWN1bHR5VW5pdE9mVGltZShcIndlZWtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbWFpbmVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmRpZmZpY3VsdHlVbml0T2ZUaW1lID09PSBcIm1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlRGlmZmljdWx0eVVuaXRPZlRpbWUoXCJtb250aFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgTW9pc1xcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uZGlmZmljdWx0eVVuaXRPZlRpbWUgPT09IFwieWVhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZURpZmZpY3VsdHlVbml0T2ZUaW1lKFwieWVhclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJraXYtc2VsZWN0XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2cy1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIlNlbGVjdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzZXREaXNhYmxlV29ya3NoZWV0cyhcImRpZmZpY3VsdHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpZmZpY3VsdHlVbml0T2ZUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlmZmljdWx0eVVuaXRPZlRpbWUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRpZmZpY3VsdHlVbml0T2ZUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIkpvdXJcIiwgdmFsdWU6IFwiZGF5XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBKb3VyIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJTZW1haW5lXCIsIHZhbHVlOiBcIndlZWtcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbWFpbmVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJNb2lzXCIsIHZhbHVlOiBcIm1vbnRoXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBNb2lzIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJBbm7DqWVcIiwgdmFsdWU6IFwieWVhclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjaGFydGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1jb250ZW50XCI6ICFfdm0uZGlmZmljdWx0eUV4ZXJjaXNlU3RhdHMuc2VyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlmZmljdWx0eUV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA+PSAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc206XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWZmaWN1bHR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWZmaWN1bHR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCA5XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86IFwiY3QtbWFqb3Itc2Vjb25kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kaWZmaWN1bHR5RXhlcmNpc2VTdGF0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5kaWZmaWN1bHR5Q2hhcnRPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudC1oYW5kbGVyc1wiOiBfdm0uZXZlbnRIYW5kbGVyc1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXhpc1ktbGFiZWxzIGRpZmZpY3VsdHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX2MoXCJwXCIsIFtfdm0uX3YoXCJEaWZmaWNpbGVcIildKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfYyhcInBcIiwgW192bS5fdihcIkZhY2lsZVwiKV0pXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bnMtd29ya3NoZWV0cy1zdGF0c1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0UGF0aWVudFdvcmtzaGVldHMsIGZ1bmN0aW9uKHdvcmtzaGVldCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLXRvZ2dsZS13b3Jrc2hlZXQtc3RhdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhY3RpdmU6IF92bS5kaXNhYmxlV29ya3NoZWV0c1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5pbmNsdWRlcyh3b3Jrc2hlZXQuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVIaWRkZW5Xb3Jrc2hlZXRMaW5lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpZmZpY3VsdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGluZS1jb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5jb2xvcnNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiNXB4IHNvbGlkIFwiICsgX3ZtLmNvbG9yc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB3b3Jrc2hlZXQ6IHdvcmtzaGVldCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJiAhX3ZtLmdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWNhbGVuZGFyLW1pbnVzXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJWb3VzIG4nYXZleiBwYXMgZW5jb3JlIGRlIHN0YXRpc3RpcXVlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTGUgcGF0aWVudCBuJ2EgcGFzIGVuY29yZSBkZSBzdGF0aXN0aXF1ZVwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1xuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZ1wiIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJoMlwiLCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTZW5zaWJpbGl0w6lcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaDJcIiwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiVGVjaG5pcXVlXCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImgyXCIsIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkRpZmZpY3VsdMOpZXMgcGVyw6d1ZXNcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIixcbiAgICAgIGNsYXNzOiB7IHJlZHVjZWQ6ICFfdm0uJHBhcmVudC5teVNjb3Jlc0NvbnRlbnQgfSxcbiAgICAgIGF0dHJzOiB7IGlkOiBcIm15LXNjb3Jlc1wiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9nZ2xlLWNvbnRlbnRcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uJHBhcmVudC5teVNjb3Jlc0NvbnRlbnQgPSAhX3ZtLiRwYXJlbnQubXlTY29yZXNDb250ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIiB9KV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICFfdm0uZG9jdG9yVmlldyA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTWVzXCIpXSkgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLmRvY3RvclZpZXcgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlNlc1wiKV0pIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBpbmRpY2VzXFxuICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJoZWlnaHRcIiB9IH0sIFtcbiAgICAgICAgX3ZtLiRwYXJlbnQubXlTY29yZXNDb250ZW50XG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2NvcmUtY2lyY2xlXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2dWUtZWxsaXBzZS1wcm9ncmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fYihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcHJvZ3Jlc3M6IF92bS5nZXRTY29yZVBlcmNlbnRhZ2UgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWUtZWxsaXBzZS1wcm9ncmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzY29yZS1jaXJjbGUtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzY29yZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvcm1hdE51bWJUaG91c2FuZChfdm0uZ2V0U2NvcmUpKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInVuaXRcIiB9LCBbX3ZtLl92KFwiUG9pbnRzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2NvcmUtbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NiYXItYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwibG9hZGluZy1ncmF5LWRhcmtcIjogX3ZtLmxvYWRpbmcgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NiYXItdGh1bWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IG1heDogX3ZtLnNjb3JlID49IF92bS5zY29yZU1heCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IF92bS5nZXRTY29yZVBlcmNlbnRhZ2UgKyBcIiVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2dyZXNzYmFyLXN0ZXBzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiMSAwMDAgcHRzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb2ludFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIjIgMDAwIHB0c1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIzIDAwMCBwdHNcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiNCAwMDAgcHRzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci1jdXJyZW50LXNjb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogX3ZtLmdldFNjb3JlUGVyY2VudGFnZSA8IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IF92bS5nZXRTY29yZVBlcmNlbnRhZ2UgPiA4MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFNjb3JlUGVyY2VudGFnZSA8PSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmdldFNjb3JlUGVyY2VudGFnZSArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVm90cmVcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlNvblwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIHNjb3JlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2NvcmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIihcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdE51bWJUaG91c2FuZChfdm0uZ2V0U2NvcmUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBwdHMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NiYXItYmFzZS1lbmQtZGVjb3JhdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2UtYmxvY2sgc2NvcmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWV4ZXJjaXNlIGljb24tN1wiIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm9tYnJlIGTigJlleGVyY2ljZXMgZmFpdHNcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC1yZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRUb3RhbEV4ZXJjaXNlQ29tcGxldGVkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBsb2FkaW5nLWJsb2NrLWgzIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZW5zaXRpdml0eS1ibG9jayBzY29yZS1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtc2Vuc2l0aXZpdHkgaWNvbi04XCIgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXcgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlZvdHJlXCIpXSkgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRvY3RvclZpZXcgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlNhXCIpXSkgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIHNlbnNpYmlsaXTDqVxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC1yZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFNlbnNpdGl2aXR5U21pbGV5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbnNpdGl2aXR5LXNtaWxleVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRTZW5zaXRpdml0eVNtaWxleS5zcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5nZXRTZW5zaXRpdml0eVNtaWxleS5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRTZW5zaXRpdml0eVZhcmlhdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwXCIgPT09IF92bS5nZXRTZW5zaXRpdml0eVZhcmlhdGlvbi52YXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBhbcOpbGlvcmF0aW9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3duXCIgPT09IF92bS5nZXRTZW5zaXRpdml0eVZhcmlhdGlvbi52YXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBiYWlzc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRTZW5zaXRpdml0eVZhcmlhdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVxdWFsXCIgPT09IF92bS5nZXRUZWNobmljYWxWYXJpYXRpb24udmFyaWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhYmxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmdldFNlbnNpdGl2aXR5VmFyaWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmllbnTDtHQgIVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJ1cFwiID09PSBfdm0uZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24udmFyaWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtdmFyaWF0aW9uIGdyZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAoXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtdmFyaWF0aW9uLXVwIGljb24tMjdcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24ucmVzdWx0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5nZXRTZW5zaXRpdml0eVZhcmlhdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJlxuICAgICAgICAgICAgICAgICAgICBcImRvd25cIiA9PT0gX3ZtLmdldFNlbnNpdGl2aXR5VmFyaWF0aW9uLnZhcmlhdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LXZhcmlhdGlvbiByZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIChcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LXZhcmlhdGlvbi1kb3duIGljb24tMjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldFNlbnNpdGl2aXR5VmFyaWF0aW9uLnJlc3VsdCkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIilcXG4gICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBsb2FkaW5nLWJsb2NrLWgzIHctNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZWNobmljYWwtYmxvY2sgc2NvcmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LXRlY2huaWNhbCBpY29uLTlcIiB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0uZG9jdG9yVmlldyA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVm90cmVcIildKSA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlldyA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiU2FcIildKSA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgdGVjaG5pcXVlXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LXJlc3VsdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBcIiA9PT0gX3ZtLmdldFRlY2huaWNhbFZhcmlhdGlvbi52YXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBhbcOpbGlvcmF0aW9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZG93blwiID09PSBfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uLnZhcmlhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGJhaXNzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFRlY2huaWNhbFZhcmlhdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVxdWFsXCIgPT09IF92bS5nZXRUZWNobmljYWxWYXJpYXRpb24udmFyaWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhYmxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmdldFRlY2huaWNhbFZhcmlhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZW50w7R0ICFcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFRlY2huaWNhbFZhcmlhdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJlxuICAgICAgICAgICAgICAgICAgICBcInVwXCIgPT09IF92bS5nZXRUZWNobmljYWxWYXJpYXRpb24udmFyaWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtdmFyaWF0aW9uIGdyZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAoXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtdmFyaWF0aW9uLXVwIGljb24tMjdcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uLnJlc3VsdCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIilcXG4gICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmXG4gICAgICAgICAgICAgICAgICAgIFwiZG93blwiID09PSBfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uLnZhcmlhdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LXZhcmlhdGlvbiByZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIChcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LXZhcmlhdGlvbi1kb3duIGljb24tMjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldFRlY2huaWNhbFZhcmlhdGlvbi5yZXN1bHQpICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIpXFxuICAgICAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgbG9hZGluZy1ibG9jay1oMyB3LTc1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiU2NvcmVSYW5rQmxvY2tcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmFuazogX3ZtLmdldFJhbmssXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICBkb2N0b3JWaWV3OiBfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNjb3JlLXJhbmstYmxvY2sgc2NvcmUtYmxvY2tcIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIG5vdXZlYXU6IFwibm91dmVhdVwiID09PSBfdm0ucmFuayxcbiAgICAgICAgZGVidXRhbnQ6IFwiZGVidXRhbnRcIiA9PT0gX3ZtLnJhbmssXG4gICAgICAgIGFtYXRldXI6IFwiYW1hdGV1clwiID09PSBfdm0ucmFuayxcbiAgICAgICAgaW50ZXJtZWRpYWlyZTogXCJpbnRlcm1lZGlhaXJlXCIgPT09IF92bS5yYW5rLFxuICAgICAgICBjb25maXJtZTogXCJjb25maXJtZVwiID09PSBfdm0ucmFuayxcbiAgICAgICAgZXhwZXJ0OiBcImV4cGVydFwiID09PSBfdm0ucmFua1xuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIsIG1vZGU6IFwib3V0LWluXCIgfSB9LCBbXG4gICAgICAgICFfdm0ubG9hZGluZyAmJiBcIm5vdXZlYXVcIiA9PT0gX3ZtLnJhbmtcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBcIm5vdXZlYXVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgICAgICAgICFfdm0uZG9jdG9yVmlldyA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVm90cmVcIildKSA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3ID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTb25cIildKSA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBuaXZlYXVcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstaW1nXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL2hhbmQuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgZHUgcmFuZyBub3V2ZWF1IHBhdGllbnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIk5vdXZlYXUgUGF0aWVudFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1yZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiQ+KAmWVzdCBwYXJ0aSBwb3VyIGFsbGVyIG1pZXV4wqAhXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICFfdm0ubG9hZGluZyAmJiBcImRlYnV0YW50XCIgPT09IF92bS5yYW5rXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IGtleTogXCJkZWJ1dGFudFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiVm90cmUgbml2ZWF1XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstaW1nXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL2JyYXMuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgZHUgcmFuZyBkw6lidXRhbnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlBhdGllbnQgRMOpYnV0YW50XCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLXJlc3VsdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoJ011c2NsZSB0b24gamV1IFwiUm9iZXJ0XCLCoCEnKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAhX3ZtLmxvYWRpbmcgJiYgXCJhbWF0ZXVyXCIgPT09IF92bS5yYW5rXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IGtleTogXCJhbWF0ZXVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJWb3RyZSBuaXZlYXVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1pbWdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS82MS5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBkdSByYW5nIGFtYXRldXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlBhdGllbnQgQW1hdGV1clwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1yZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiTGEgdMOqdGUgZGFucyBsZSBndWlkb27CoCFcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgIV92bS5sb2FkaW5nICYmIFwiaW50ZXJtZWRpYWlyZVwiID09PSBfdm0ucmFua1xuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBrZXk6IFwiaW50ZXJtZWRpYWlyZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiVm90cmUgbml2ZWF1XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstaW1nXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBkdSByYW5nIGludGVybcOpZGlhaXJlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJQYXRpZW50IEludGVybcOpZGlhaXJlXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLXJlc3VsdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJCaWVuIGRhbnMgdGVzIEJhc2tldHPCoCFcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgIV92bS5sb2FkaW5nICYmIFwiY29uZmlybWVcIiA9PT0gX3ZtLnJhbmtcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBcImNvbmZpcm1lXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJWb3RyZSBuaXZlYXVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1pbWdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIDEgZHUgcmFuZyBjb25maXJtw6lcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIDIgZHUgcmFuZyBjb25maXJtw6lcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlBhdGllbnQgQ29uZmlybcOpXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLXJlc3VsdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJQYXMgbGUgdGVtcHMgZGUgbmlhaXNlcsKgIVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAhX3ZtLmxvYWRpbmcgJiYgXCJleHBlcnRcIiA9PT0gX3ZtLnJhbmtcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBcImV4cGVydFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiVm90cmUgbml2ZWF1XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstaW1nXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSAxIGR1IHJhbmcgZXhwZXJ0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSAyIGR1IHJhbmcgZXhwZXJ0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSAzIGR1IHJhbmcgZXhwZXJ0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJQYXRpZW50IEV4cGVydFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1yZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiUHLDqnQgcG91ciBsZSBwcm9jaGFpbiBJcm9uIE1hbsKgIVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubG9hZGluZ1xuICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBcImxvYWRpbmdcIiwgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBoNCB3LTY1XCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGlcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgcmFuay1sYWJlbFwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyByYW5rLXJlc3VsdCB3LTg1XCIgfSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2VjdGlvblwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1ibG9ja1wiLFxuICAgICAgY2xhc3M6IHsgcmVkdWNlZDogIV92bS4kcGFyZW50Lm15V29ya3NoZWV0c0NvbnRlbnQgfSxcbiAgICAgIGF0dHJzOiB7IGlkOiBcIm15LXdvcmtzaGVldHNcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvZ2dsZS1jb250ZW50XCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLiRwYXJlbnQubXlXb3Jrc2hlZXRzQ29udGVudCA9ICFfdm0uJHBhcmVudC5teVdvcmtzaGVldHNDb250ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIiB9KV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICFfdm0uZG9jdG9yVmlldyA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTWVzXCIpXSkgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLmRvY3RvclZpZXcgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlNlc1wiKV0pIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBmaWNoZXNcXG4gICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImhlaWdodFwiIH0gfSwgW1xuICAgICAgICBfdm0uJHBhcmVudC5teVdvcmtzaGVldHNDb250ZW50XG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJiBfdm0uZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3bC1wYXRpZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nZXRQYXRpZW50V29ya3NoZWV0cywgZnVuY3Rpb24od29ya3NoZWV0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh3b3Jrc2hlZXQudGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRhZ1BhcnRPZkJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXNDb21wbGV0ZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5leGVyY2lzZVN0YXRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGFydE9mQm9keTogd29ya3NoZWV0LnBhcnRPZkJvZHkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uLmlzQ29tcGxldGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24uaXNJblByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NiYXItYmFzZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci10aHVtYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LndvcmtzaGVldFByb2dyZXNzaW9uICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NiYXItc3RlcHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb2ludFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJFbiBjb3Vyc1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAod29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24uaXNDb21wbGV0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbi5pc0luUHJvZ3Jlc3MpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoIXdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY291bnRPbGRXb3Jrc2hlZXRTZXNzaW9ucyA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VTdGF0cy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NiYXItYmFzZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci10aHVtYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci1zdGVwc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIk5vbiBkw6ltYXJyw6llXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICh3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uLmlzQ29tcGxldGVkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKCF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmNvdW50T2xkV29ya3NoZWV0U2Vzc2lvbnMgPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3Jrc2hlZXQtY29udGVudCBzZXNzaW9uLWNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnMgIT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24uZXhlY09yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcmF2bywgdm9zIGV4ZXJjaWNlcyBkZSBjZXR0ZSBzZXNzaW9uIG9udFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw6l0w6kgZmFpdHMgYXZlYyBzdWNjw6hzICEgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50aW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGV6LXZvdXMgZGFuc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudGltZUxlZnRCZWZvcmVOZXh0U2Vzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3VyIHVuZSBub3V2ZWxsZSBzZXNzaW9uLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhlcmNpY2VzIHRlcm1pbsOpcyBwb3VyIGNldHRlIHNlc3Npb24uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50aW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2hhaW5lIHNlc3Npb24gZGFuc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudGltZUxlZnRCZWZvcmVOZXh0U2Vzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlU3RhdHMubGVuZ3RoID4gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50b3RhbFdvcmtzaGVldFNlc3Npb25zID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24uZXhlY09yZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGw6lsaWNpdGF0aW9ucywgdm90cmUgdHJhaXRlbWVudCBlc3QgdGVybWluw6lcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUcmFpdGVtZW50IHRlcm1pbsOpLlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmNvdW50T2xkV29ya3NoZWV0U2Vzc2lvbnMgPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5leGVyY2lzZVN0YXRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWb3VzIG4nYXZleiBwYXMgcsOpYWxpc8OpIHZvdHJlIHRyYWl0ZW1lbnQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbCBhIGV4cGlyw6kuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVHJhaXRlbWVudCBub24gcsOpYWxpc8OpIGV0IGV4cGlyw6kuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tY29uc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZGlyZWN0SW5Qcm9ncmVzcyA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZGlyZWN0VG9Xb3Jrc2hlZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tY29uc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZGlyZWN0SW5Qcm9ncmVzcyA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZGlyZWN0VG9Eb2N0b3JWaWV3KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9pclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtZXhlcmNpc2UgaWNvbi03XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mod29ya3NoZWV0LmV4ZXJjaXNlcy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2ljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlcy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtdGltaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh3b3Jrc2hlZXQucGVyRGF5KSArIFwieFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXIgam91ciAtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mod29ya3NoZWV0LnBlcldlZWspICsgXCJ4XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhciBzZW1haW5lXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtcGVyaW9kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1jbG9jayBpY29uLTExXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFDDqXJpb2RlIDpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mod29ya3NoZWV0LmR1cmF0aW9uKSArIFwiIHNlbWFpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kdXJhdGlvbiA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcInNcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWdvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVkaXJlY3RJblByb2dyZXNzID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZzogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZGlyZWN0VG9Xb3Jrc2hlZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyAhXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWRpcmVjdEluUHJvZ3Jlc3MgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlU3RhdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA9PT0gMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmc6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRpcmVjdFRvRG9jdG9yVmlldyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9pclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmICFfdm0uZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZm9sZGVyLW1pbnVzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJWb3VzIG4nYXZleiBwYXMgZGUgZmljaGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTGUgcGF0aWVudCBuJ2EgcGFzIGVuY29yZSBkZSBmaWNoZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGl0bGUgdy0yNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgcGFydC1vZi1ib2R5XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1leGVyY2lzZXMtY291bnRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTM1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpbWluZyB3LTI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHdvcmtzaGVldC1wZXJpb2Qgdy0zNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBidG4tZ29cIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHdvcmtzaGVldC10aXRsZSB3LTQ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMTVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGltaW5nIHctMzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXBlcmlvZCB3LTI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGJ0bi1nb1wiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6WyJWdWUiLCJEYXNoYm9hcmRQYWdlIiwiYXhpb3MiLCJWdWVBeGlvcyIsInVzZSIsIlZ1ZXNheCIsIlZ1ZUVsbGlwc2VQcm9ncmVzcyIsIkNoYXJ0aXN0VG9vbHRpcHMiLCJyZXF1aXJlIiwibWVzc2FnZU5vRGF0YSIsImNsYXNzTm9EYXRhIiwicmVuZGVyIiwiaCIsIiRtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=