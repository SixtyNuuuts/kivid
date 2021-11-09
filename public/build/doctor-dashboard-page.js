(self["webpackChunk"] = self["webpackChunk"] || []).push([["doctor-dashboard-page"],{

/***/ "./assets/vue/doctor/dashboard-page.js":
/*!*********************************************!*\
  !*** ./assets/vue/doctor/dashboard-page.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _DashboardPage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardPage.vue */ "./assets/vue/doctor/DashboardPage.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.esm.min.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuesax */ "./node_modules/vuesax/dist/vuesax.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuesax__WEBPACK_IMPORTED_MODULE_4__);

 // Axios



vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_axios__WEBPACK_IMPORTED_MODULE_2__["default"], (axios__WEBPACK_IMPORTED_MODULE_1___default())); // Vuesax (UX lib)


new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
  render: function render(h) {
    return h(_DashboardPage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}).$mount('#vue');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var _DashboardPage_MyDashboardNotifications_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DashboardPage/MyDashboardNotifications.vue */ "./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue");
/* harmony import */ var _DashboardPage_MyWorksheetTemplates_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./DashboardPage/MyWorksheetTemplates.vue */ "./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue");
/* harmony import */ var _DashboardPage_MyPrescriptions_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./DashboardPage/MyPrescriptions.vue */ "./assets/vue/doctor/DashboardPage/MyPrescriptions.vue");
/* harmony import */ var _DashboardPage_MyPatients_vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./DashboardPage/MyPatients.vue */ "./assets/vue/doctor/DashboardPage/MyPatients.vue");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MyDashboardNotifications: _DashboardPage_MyDashboardNotifications_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    MyWorksheetTemplates: _DashboardPage_MyWorksheetTemplates_vue__WEBPACK_IMPORTED_MODULE_20__["default"],
    MyPrescriptions: _DashboardPage_MyPrescriptions_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
    MyPatients: _DashboardPage_MyPatients_vue__WEBPACK_IMPORTED_MODULE_22__["default"]
  },
  data: function data() {
    return {
      doctor: null,
      // csrfTokenAcceptDoctor: null,
      myDBNotificationsContent: true,
      myWorksheetTemplatesContent: true,
      myPrescriptionsContent: true,
      myPatientsContent: true,
      csrfTokenAddPatient: null,
      csrfTokenRemovePatient: null,
      csrfTokenCreatePatient: null,
      csrfTokenRemoveWorksheet: null,
      loadingAllWorksheets: false,
      loadingDoctorWorksheets: false,
      allWorksheets: [],
      doctorWorksheets: [],
      tagsFromExercises: [],
      activeTab: 1,
      prescriProcess: false,
      prescriProcessPatient: false,
      prescriProcessPatientSelected: null,
      prescriProcessWorksheet: false,
      prescriProcessWorksheetSelected: null,
      btnLoadingPatientPrescriProcessRedirect: null,
      btnLoadingWorksheetPrescriProcessRedirect: null
    };
  },
  computed: {
    getWorksheetTemplates: function getWorksheetTemplates() {
      return this.sortByCreatedAt(this.allWorksheets.filter(function (w) {
        return !w.patient;
      }));
    },
    getDoctorPrescriptions: function getDoctorPrescriptions() {
      return this.sortByCreatedAt(this.doctorWorksheets.filter(function (w) {
        return w.patient;
      }));
    }
  },
  methods: {
    setPrescriProcessWorksheetChoice: function setPrescriProcessWorksheetChoice(worksheet) {
      if (!this.prescriProcess) {
        this.startPrescriProcess();
      }

      this.prescriProcessWorksheetSelected = worksheet;
      this.prescriProcessWorksheet = false;

      if (!this.prescriProcessPatientSelected) {
        var id = "my-patients";
        var yOffset = -100;
        var element = document.getElementById(id);
        var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
        this.prescriProcessPatient = true;
      } else {
        var prescriProcessWorksheetSelectedId = this.prescriProcessWorksheetSelected.id ? this.prescriProcessWorksheetSelected.id : 0;
        this.btnLoadingPatientPrescriProcessRedirect = this.prescriProcessPatientSelected.id;
        this.btnLoadingWorksheetPrescriProcessRedirect = prescriProcessWorksheetSelectedId;
        document.location.href = "/doctor/".concat(this.doctor.id, "/fiche/creation/").concat(prescriProcessWorksheetSelectedId, "/").concat(this.prescriProcessPatientSelected.id);
      }
    },
    setPrescriProcessPatientChoice: function setPrescriProcessPatientChoice(patient) {
      if (!this.prescriProcess) {
        this.startPrescriProcess();
      }

      this.prescriProcessPatientSelected = patient;
      this.prescriProcessPatient = false;

      if (!this.prescriProcessWorksheetSelected) {
        var id = "my-worksheets";
        var yOffset = -100;
        var element = document.getElementById(id);
        var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
        this.activeTab = 2;
        this.prescriProcessWorksheet = true;
      } else {
        var prescriProcessWorksheetSelectedId = this.prescriProcessWorksheetSelected.id ? this.prescriProcessWorksheetSelected.id : 0;
        this.btnLoadingPatientPrescriProcessRedirect = this.prescriProcessPatientSelected.id;
        this.btnLoadingWorksheetPrescriProcessRedirect = prescriProcessWorksheetSelectedId;
        document.location.href = "/doctor/".concat(this.doctor.id, "/fiche/creation/").concat(prescriProcessWorksheetSelectedId, "/").concat(this.prescriProcessPatientSelected.id);
      }
    },
    startPrescriProcess: function startPrescriProcess() {
      this.prescriProcess = true;
      this.prescriProcessWorksheet = true;
      this.myWorksheetTemplatesContent = true;
      this.myPatientsContent = true;
      this.activeTab = 2;
    },
    stopPrescriProcess: function stopPrescriProcess() {
      this.prescriProcess = false;
      this.prescriProcessWorksheet = false;
      this.prescriProcessPatient = false;
      this.prescriProcessWorksheetSelected = null;
      this.prescriProcessPatientSelected = null;
      this.btnLoadingPatientPrescriProcessRedirect = null;
      this.btnLoadingWorksheetPrescriProcessRedirect = null;
      this.activeTab = 1;
    },
    sortByCreatedAt: function sortByCreatedAt(array) {
      array.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      return array;
    },
    onResize: function onResize() {
      if (window.innerWidth > 576) {
        this.myDBNotificationsContent = true;
        this.myWorksheetTemplatesContent = true;
        this.myPrescriptionsContent = true;
        this.myPatientsContent = true;
      }
    }
  },
  created: function created() {
    var _this = this;

    vue__WEBPACK_IMPORTED_MODULE_23__["default"].prototype.$vs = this.$vs;
    document.body.classList.add("fuzzy-balls");
    window.addEventListener("resize", this.onResize);
    var data = JSON.parse(document.getElementById("vueData").innerHTML);
    this.doctor = data.doctor;
    this.csrfTokenAddPatient = data.csrfTokenAddPatient;
    this.csrfTokenRemovePatient = data.csrfTokenRemovePatient;
    this.csrfTokenCreatePatient = data.csrfTokenCreatePatient;
    this.csrfTokenRemoveWorksheet = data.csrfTokenRemoveWorksheet;
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var triggerTab = urlParams.get("tab");

    if (triggerTab === "ws") {
      this.activeTab = 2;
    }

    this.loadingDoctorWorksheets = true;
    this.axios.get("/doctor/".concat(this.doctor.id, "/get/worksheets")).then(function (response) {
      _this.doctorWorksheets = response.data.map(function (worksheet) {
        return _objectSpread(_objectSpread({}, worksheet), {}, {
          worksheetTotalProgression: null,
          currentWorksheetSession: null,
          totalWorksheetSessions: null,
          totalCompletedWorksheetSessions: null
        });
      });
      _this.loadingDoctorWorksheets = false;
    }).catch(function (error) {
      var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
      console.error(errorMess);
    });
    this.loadingAllWorksheets = true;
    this.axios.get("/doctor/".concat(this.doctor.id, "/get/all/worksheets")).then(function (response) {
      _this.allWorksheets = response.data;
      _this.tagsFromExercises = _services_function__WEBPACK_IMPORTED_MODULE_18__["default"].generateTagsFromExercises(_this.allWorksheets);
      _this.loadingAllWorksheets = false;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/function */ "./assets/vue/services/function.js");








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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      actionInProgress: false,
      loading: false
    };
  },
  props: {
    doctor: Object
  },
  methods: {
    resendVerifEmail: function resendVerifEmail() {
      var _this = this;

      this.actionInProgress = true;
      this.axios.get("/doctor/".concat(this.doctor.id, "/resend/verify-email")).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_7__["default"].openSuccessNotification("E-mail de vérification envoyé", response.data);
        _this.actionInProgress = false;
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_7__["default"].openErrorNotification("Erreur", errorMess);
        _this.actionInProgress = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var _components_BtnChartWorksheetPartOfBody_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/BtnChartWorksheetPartOfBody.vue */ "./assets/vue/components/BtnChartWorksheetPartOfBody.vue");
/* harmony import */ var _MyPatients_PatientAdd_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MyPatients/PatientAdd.vue */ "./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    doctor: Object,
    csrfTokenAddPatient: String,
    csrfTokenRemovePatient: String,
    csrfTokenCreatePatient: String,
    prescriProcess: Boolean,
    btnLoadingPatientPrescriProcessRedirect: Number
  },
  components: {
    BtnChartWorksheetPartOfBody: _components_BtnChartWorksheetPartOfBody_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    PatientAdd: _MyPatients_PatientAdd_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_19__.PlusIcon
  },
  data: function data() {
    return {
      search: "",
      page: 1,
      max: 5,
      doctorPatients: [],
      allPatients: [],
      modalAddPatient: false,
      loadingDoctorPatients: false,
      loadingAllPatients: false,
      modalConfirmRemovePatient: false,
      removePatientDetails: {},
      btnLoadingValidRemovePatient: false
    };
  },
  computed: {
    getDoctorPatients: function getDoctorPatients() {
      return this.getPage(this.sortByLastLogin(_services_function__WEBPACK_IMPORTED_MODULE_15__["default"].getSearch(this.doctorPatients, this.search, "doctor")), this.page, this.max);
    },
    getAllPatients: function getAllPatients() {
      return this.allPatients;
    }
  },
  methods: {
    prescriProcessPatientChoice: function prescriProcessPatientChoice(patient) {
      this.$emit("prescriProcessPatientChoice", patient);
    },
    removePatient: function removePatient(patient) {
      this.removePatientDetails = patient;
      return this.modalConfirmRemovePatient = !this.modalConfirmRemovePatient;
    },
    validRemovePatient: function validRemovePatient() {
      var _this = this;

      this.btnLoadingValidRemovePatient = true;
      this.axios.post("/doctor/".concat(this.doctor.id, "/remove/patient"), {
        _token: this.csrfTokenRemovePatient,
        patientId: this.removePatientDetails.id
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].openSuccessNotification("Suppression du patient", response.data);

        _this.doctorPatients.splice(_this.doctorPatients.indexOf(_this.removePatientDetails), 1);

        if (_this.allPatients.length) {
          var patient = _this.allPatients.find(function (p) {
            return p.id === _this.removePatientDetails.id;
          });

          patient.doctor = null;
          patient.addRequestDoctor = null;
        }

        _this.btnLoadingValidRemovePatient = false;
        _this.modalConfirmRemovePatient = false;
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].openErrorNotification("Erreur", errorMess);
        _this.btnLoadingValidRemovePatient = false;
        _this.modalConfirmRemovePatient = false;
      });
    },
    addPatient: function addPatient(patient) {
      this.doctorPatients.push(patient);
    },
    getAge: function getAge(birthdate) {
      return _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].generateAgeFromDateOfBirth(birthdate);
    },
    formatDate: function formatDate(datetime) {
      return moment__WEBPACK_IMPORTED_MODULE_18___default()(datetime).format("DD/MM/YYYY");
    },
    getPage: function getPage(data, page, maxItems) {
      return _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].getPage(data, page, maxItems);
    },
    getLength: function getLength(data, maxItems) {
      return _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].getLength(data, maxItems);
    },
    getSearch: function getSearch(data, filter) {
      return _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].getSearch(data, filter);
    },
    redirectToPatientDashboard: function redirectToPatientDashboard(patientId) {
      document.location.href = "/doctor/".concat(this.doctor.id, "/voir/patient/").concat(patientId);
    },
    sortByLastLogin: function sortByLastLogin(array) {
      array.sort(function (a, b) {
        return new Date(b.lastLoginAt) - new Date(a.lastLoginAt);
      });
      return array;
    },
    sortByCreatedAt: function sortByCreatedAt(array) {
      array.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      return array;
    },
    getUserName: function getUserName(user) {
      return _services_function__WEBPACK_IMPORTED_MODULE_15__["default"].getUserName(user);
    }
  },
  created: function created() {
    var _this2 = this;

    this.loadingDoctorPatients = true;
    this.axios.get("/doctor/".concat(this.doctor.id, "/get/patients")).then(function (response) {
      _this2.doctorPatients = response.data;

      _this2.doctorPatients.forEach(function (p) {
        if (p.worksheets) {
          p.worksheets = _this2.sortByCreatedAt(p.worksheets);
        }
      });

      _this2.loadingDoctorPatients = false;
    }).catch(function (error) {
      var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
      console.error(errorMess);
    });
    this.loadingAllPatients = true;
    this.axios.get("/doctor/".concat(this.doctor.id, "/get/all/patients")).then(function (response) {
      _this2.allPatients = response.data;
      _this2.loadingAllPatients = false;
    }).catch(function (error) {
      var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
      console.error(errorMess);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/function */ "./assets/vue/services/function.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PatientAdd",
  props: {
    doctor: Object,
    allPatients: Array,
    loadingAllPatients: Boolean,
    csrfTokenAddPatient: String,
    csrfTokenCreatePatient: String
  },
  directives: {
    ClickOutside: (vue_click_outside__WEBPACK_IMPORTED_MODULE_8___default())
  },
  data: function data() {
    return {
      btnLoadingValidAddPatient: false,
      btnLoadingValidCreatePatient: false,
      createPatientDetails: {
        firstname: "",
        lastname: "",
        email: "",
        gender: ""
      },
      validationMessage: {
        email: null
      },
      userSelected: {
        email: null,
        avatarUrl: null,
        firstname: null,
        lastname: null,
        gender: null,
        birthdate: null
      },
      filter: "",
      selectBox: false,
      selectInput: null
    };
  },
  computed: {
    allPatientsFiltered: function allPatientsFiltered() {
      return _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].getSearch(this.allPatients.filter(function (p) {
        return !p.doctor;
      }), this.filter);
    }
  },
  methods: {
    validAddPatient: function validAddPatient() {
      var _this = this;

      this.btnLoadingValidAddPatient = true;
      this.axios.post("/doctor/".concat(this.doctor.id, "/add/patient"), {
        _token: this.csrfTokenAddPatient,
        patientId: this.userSelected.id
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].openSuccessNotification("Ajout du patient", response.data);
        _this.userSelected.addRequestDoctor = false;
        _this.userSelected.doctor = _this.doctor;

        _this.$emit("addPatient", _this.userSelected);

        _this.btnLoadingValidAddPatient = false;

        _this.$emit("closeModalAddPatient", true);
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].openErrorNotification("Erreur", errorMess);
        _this.btnLoadingValidAddPatient = false;

        _this.$emit("closeModalAddPatient", true);
      });
    },
    validCreatePatient: function validCreatePatient() {
      var _this2 = this;

      this.btnLoadingValidCreatePatient = true;
      this.axios.post("/doctor/".concat(this.doctor.id, "/create/patient"), {
        _token: this.csrfTokenCreatePatient,
        firstname: this.createPatientDetails.firstname,
        lastname: this.createPatientDetails.lastname,
        gender: this.createPatientDetails.gender && this.createPatientDetails.gender != "0" ? "1" === this.createPatientDetails.gender ? "male" : "female" : "",
        email: this.createPatientDetails.email
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].openSuccessNotification("Création du patient", response.data.message);

        _this2.$emit("addPatient", response.data.patient);

        _this2.createPatientDetails = {
          firstname: "",
          lastname: "",
          email: "",
          gender: ""
        };
        _this2.btnLoadingValidCreatePatient = false;

        _this2.$emit("closeModalAddPatient", true);
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].openErrorNotification("Erreur", errorMess);
        _this2.btnLoadingValidCreatePatient = false;

        _this2.$emit("closeModalAddPatient", true);
      });
    },
    validationEmail: function validationEmail() {
      this.validationMessage.email = null;
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(String(this.createPatientDetails.email).toLowerCase())) {
        this.validationMessage.email = "Merci d'entrer un email valide.";
      }
    },
    getAge: function getAge(dateString) {
      return _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].generateAgeFromDateOfBirth(dateString);
    },
    toggleSelectBox: function toggleSelectBox() {
      this.selectBox = !this.selectBox;

      if (this.userSelected) {
        this.resetSelect();
      }

      if (this.selectBox) {
        this.focusInputSelect();
      }
    },
    hideSelectBox: function hideSelectBox() {
      this.selectBox = false;
    },
    selectUser: function selectUser(user) {
      this.userSelected = user;
      this.hideSelectBox();
    },
    resetSelect: function resetSelect() {
      var _this3 = this;

      this.userSelected = {
        email: null,
        avatarUrl: null,
        firstname: null,
        lastname: null,
        gender: null,
        birthdate: null
      };
      setTimeout(function () {
        _this3.selectInput = document.getElementById("user-choice-select");
        _this3.selectBox = true;

        _this3.focusInputSelect();
      }, 100);
    },
    focusInputSelect: function focusInputSelect() {
      this.selectInput.focus();
    },
    getUserName: function getUserName(user) {
      return _services_function__WEBPACK_IMPORTED_MODULE_9__["default"].getUserName(user);
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
    this.selectInput = document.getElementById("user-choice-select");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var _components_TagPartOfBody_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/TagPartOfBody.vue */ "./assets/vue/components/TagPartOfBody.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    doctor: Object,
    doctorPrescriptions: Array,
    loadingDoctorWorksheets: Boolean,
    csrfTokenRemoveWorksheet: String
  },
  components: {
    TagPartOfBody: _components_TagPartOfBody_vue__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  computed: {
    getDoctorPrescriptions: function getDoctorPrescriptions() {
      var _this = this;

      var docPrescriptions = this.getPage(_services_function__WEBPACK_IMPORTED_MODULE_13__["default"].getSearch(this.doctorPrescriptions, this.search, "doctor"), this.page, this.max);

      if (docPrescriptions.length) {
        var debounceTimer = this.search ? 700 : 0;
        clearTimeout(this.debounceGetSessionsInfos);
        this.debounceGetSessionsInfos = setTimeout(function () {
          docPrescriptions.forEach(function (worksheet) {
            if (_this.doctor.patients.find(function (p) {
              return p.id === worksheet.patient.id;
            }) && (null === worksheet.worksheetTotalProgression || null === worksheet.currentWorksheetSession || null === worksheet.totalWorksheetSessions || null === worksheet.totalCompletedWorksheetSessions)) {
              _this.loadingsGetSessions.push(worksheet.id);

              _this.axios.get("/patient/".concat(worksheet.patient.id, "/get/current-worksheet-session/").concat(worksheet.id, "/doctorview")).then(function (response) {
                worksheet.currentWorksheetSession = null === response.data.currentWorksheetSession ? false : response.data.currentWorksheetSession;

                _this.axios.get("/patient/".concat(worksheet.patient.id, "/get/total-worksheet-sessions/").concat(worksheet.id)).then(function (response) {
                  worksheet.totalWorksheetSessions = response.data;

                  _this.axios.get("/patient/".concat(worksheet.patient.id, "/get/total-completed-worksheet-sessions/").concat(worksheet.id)).then(function (response) {
                    worksheet.totalCompletedWorksheetSessions = response.data;
                    worksheet.worksheetTotalProgression = _this.calculWorksheetTotalProgression(worksheet.totalCompletedWorksheetSessions, worksheet.totalWorksheetSessions);

                    _this.loadingsGetSessions.splice(_this.loadingsGetSessions.indexOf(worksheet.id), 1);
                  }).catch(function (error) {
                    var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
                    console.error(errorMess);
                  });
                }).catch(function (error) {
                  var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
                  console.error(errorMess);
                });
              }).catch(function (error) {
                var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
                console.error(errorMess);
              });
            }
          });
        }, debounceTimer);
      }

      return docPrescriptions;
    }
  },
  data: function data() {
    return {
      search: "",
      page: 1,
      max: 6,
      modalConfirmRemoveWorksheet: false,
      removeWorksheetDetails: {},
      btnLoadingValidRemoveWorksheet: false,
      debounceGetSessionsInfos: null,
      loadingsGetSessions: []
    };
  },
  methods: {
    calculWorksheetTotalProgression: function calculWorksheetTotalProgression(totalCompletedWorksheetSessions, totalWorksheetSessions) {
      var totalProgressionPercent = 0;
      var sessionPercentPart = 100 / totalWorksheetSessions;
      var t1 = Math.round(sessionPercentPart * totalCompletedWorksheetSessions * 10) / 10;
      totalProgressionPercent = t1;
      return totalProgressionPercent;
    },
    prescriProcess: function prescriProcess() {
      this.$emit("prescriProcess", true);
    },
    redirectToEditPage: function redirectToEditPage(worksheetId, patientId) {
      document.location.href = "/doctor/".concat(this.doctor.id, "/fiche/edition/").concat(worksheetId, "/").concat(patientId);
    },
    redirectToWorksheetPage: function redirectToWorksheetPage(worksheetId, patientId, hasSessions) {
      if (hasSessions) {
        document.location.href = "/doctor/".concat(this.doctor.id, "/voir/").concat(worksheetId, "/").concat(patientId);
      } else {
        document.location.href = "/doctor/".concat(this.doctor.id, "/fiche/voir/").concat(worksheetId, "/").concat(patientId);
      }
    },
    redirectToPatientDashboard: function redirectToPatientDashboard(patientId) {
      document.location.href = "/doctor/".concat(this.doctor.id, "/voir/patient/").concat(patientId);
    },
    activeTab: function activeTab(num) {
      this.$parent.activeTab = num;

      if (window.innerWidth < 576) {
        if (1 === num) {
          this.$parent.myPrescriptionsContent = !this.$parent.myPrescriptionsContent;
        }

        if (2 === num) {
          this.$parent.myWorksheetTemplatesContent = true;
        }
      }
    },
    removeWorksheet: function removeWorksheet(patient) {
      this.removeWorksheetDetails = patient;
      return this.modalConfirmRemoveWorksheet = !this.modalConfirmRemoveWorksheet;
    },
    validRemoveWorksheet: function validRemoveWorksheet() {
      var _this2 = this;

      this.btnLoadingValidRemoveWorksheet = true;
      this.axios.post("/doctor/".concat(this.doctor.id, "/remove/worksheet"), {
        _token: this.csrfTokenRemoveWorksheet,
        worksheetId: this.removeWorksheetDetails.id
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_13__["default"].openSuccessNotification("Suppression de la prescription", response.data);

        _this2.$parent.doctorWorksheets.splice(_this2.$parent.doctorWorksheets.indexOf(_this2.removeWorksheetDetails), 1);

        _this2.btnLoadingValidRemoveWorksheet = false;
        _this2.modalConfirmRemoveWorksheet = false;
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_13__["default"].openErrorNotification("Erreur", errorMess);
        _this2.btnLoadingValidRemoveWorksheet = false;
        _this2.modalConfirmRemoveWorksheet = false;
      });
    },
    formatDate: function formatDate(datetime) {
      return moment__WEBPACK_IMPORTED_MODULE_15___default()(datetime).format("DD/MM/YYYY");
    },
    getPage: function getPage(data, page, maxItems) {
      return _services_function__WEBPACK_IMPORTED_MODULE_13__["default"].getPage(data, page, maxItems);
    },
    getLength: function getLength(data, maxItems) {
      return _services_function__WEBPACK_IMPORTED_MODULE_13__["default"].getLength(data, maxItems);
    },
    getSearch: function getSearch(data, filter) {
      return _services_function__WEBPACK_IMPORTED_MODULE_13__["default"].getSearch(data, filter);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var _components_TagPartOfBody_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/TagPartOfBody.vue */ "./assets/vue/components/TagPartOfBody.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    doctor: Object,
    worksheetTemplates: Array,
    loadingAllWorksheets: Boolean,
    tagsFromExercises: Array,
    prescriProcess: Boolean,
    btnLoadingWorksheetPrescriProcessRedirect: Number,
    csrfTokenRemoveWorksheet: String
  },
  components: {
    TagPartOfBody: _components_TagPartOfBody_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_19__.PlusIcon
  },
  data: function data() {
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
      btnLoadingCopyWorksheet: null
    };
  },
  computed: {
    getWorksheetTemplates: function getWorksheetTemplates() {
      return this.getPage(this.getSearch(this.worksheetTemplates, this.search), this.page, this.max);
    },
    countWorksheetTemplates: function countWorksheetTemplates() {
      return this.getSearch(this.worksheetTemplates, this.search).length;
    },
    getTagsFromAll: function getTagsFromAll() {
      return _services_function__WEBPACK_IMPORTED_MODULE_16__["default"].getTagsFromAll(this.tagsFromExercises);
    }
  },
  methods: {
    prescriProcessWorksheetChoice: function prescriProcessWorksheetChoice(worksheet) {
      this.$emit("prescriProcessWorksheetChoice", worksheet);
    },
    redirectToEditPage: function redirectToEditPage(worksheetId) {
      document.location.href = "/doctor/".concat(this.doctor.id, "/fiche/edition/").concat(worksheetId);
    },
    redirectToCreatePage: function redirectToCreatePage(worksheetId) {
      console.log(worksheetId);

      if (worksheetId) {
        this.btnLoadingCopyWorksheet = worksheetId;
      } else {
        this.btnLoadingAddWorksheet = true;
      }

      document.location.href = "/doctor/".concat(this.doctor.id, "/fiche/creation/").concat(worksheetId);
    },
    redirectToWorksheetPage: function redirectToWorksheetPage(worksheetId) {
      document.location.href = "/doctor/".concat(this.doctor.id, "/fiche/voir/").concat(worksheetId);
    },
    activeTab: function activeTab(num) {
      this.$parent.activeTab = num;

      if (window.innerWidth < 576) {
        if (1 === num) {
          this.$parent.myPrescriptionsContent = true;
        }

        if (2 === num) {
          this.$parent.myWorksheetTemplatesContent = !this.$parent.myWorksheetTemplatesContent;
        }
      }
    },
    removeWorksheet: function removeWorksheet(patient) {
      this.removeWorksheetDetails = patient;
      return this.modalConfirmRemoveWorksheet = !this.modalConfirmRemoveWorksheet;
    },
    validRemoveWorksheet: function validRemoveWorksheet() {
      var _this = this;

      this.btnLoadingValidRemoveWorksheet = true;
      this.axios.post("/doctor/".concat(this.doctor.id, "/remove/worksheet"), {
        _token: this.csrfTokenRemoveWorksheet,
        worksheetId: this.removeWorksheetDetails.id
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_16__["default"].openSuccessNotification("Suppression de la fiche", response.data);

        _this.$parent.allWorksheets.splice(_this.$parent.allWorksheets.indexOf(_this.removeWorksheetDetails), 1);

        _this.btnLoadingValidRemoveWorksheet = false;
        _this.modalConfirmRemoveWorksheet = false;
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_16__["default"].openErrorNotification("Erreur", errorMess);
        _this.btnLoadingValidRemoveWorksheet = false;
        _this.modalConfirmRemoveWorksheet = false;
      });
    },
    formatDate: function formatDate(datetime) {
      return moment__WEBPACK_IMPORTED_MODULE_18___default()(datetime).format("DD/MM/YYYY");
    },
    getPage: function getPage(data, page, maxItems) {
      return _services_function__WEBPACK_IMPORTED_MODULE_16__["default"].getPage(data, page, maxItems);
    },
    getLength: function getLength(data, maxItems) {
      return _services_function__WEBPACK_IMPORTED_MODULE_16__["default"].getLength(data, maxItems);
    },
    getSearch: function getSearch(data, filter) {
      var _this2 = this;

      var worksheetTemplatesFiltered = _services_function__WEBPACK_IMPORTED_MODULE_16__["default"].getSearch(data, filter);

      if (this.selectedTags.length) {
        worksheetTemplatesFiltered = worksheetTemplatesFiltered.filter(function (w) {
          var result = false;

          if (w.exercisesTags) {
            w.exercisesTags.forEach(function (tag) {
              if (_this2.selectedTags.includes(tag)) {
                result = true;
              }
            });
          }

          return result;
        });
      }

      if (!this.viewAllTemplates) {
        worksheetTemplatesFiltered = worksheetTemplatesFiltered.filter(function (w) {
          return w.doctor && w.doctor.id === _this2.doctor.id;
        });
      }

      return worksheetTemplatesFiltered;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a number');
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=style&index=0&id=79b63c6c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=style&index=0&id=79b63c6c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage.vue":
/*!*********************************************!*\
  !*** ./assets/vue/doctor/DashboardPage.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardPage_vue_vue_type_template_id_a950e9ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=template&id=a950e9ec& */ "./assets/vue/doctor/DashboardPage.vue?vue&type=template&id=a950e9ec&");
/* harmony import */ var _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=script&lang=js& */ "./assets/vue/doctor/DashboardPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _DashboardPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardPage.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/doctor/DashboardPage.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardPage_vue_vue_type_template_id_a950e9ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashboardPage_vue_vue_type_template_id_a950e9ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/doctor/DashboardPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue":
/*!**********************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyDashboardNotifications_vue_vue_type_template_id_5d23c1b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyDashboardNotifications.vue?vue&type=template&id=5d23c1b5& */ "./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=5d23c1b5&");
/* harmony import */ var _MyDashboardNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyDashboardNotifications.vue?vue&type=script&lang=js& */ "./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js&");
/* harmony import */ var _MyDashboardNotifications_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyDashboardNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyDashboardNotifications_vue_vue_type_template_id_5d23c1b5___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyDashboardNotifications_vue_vue_type_template_id_5d23c1b5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPatients.vue":
/*!********************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPatients.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyPatients_vue_vue_type_template_id_1ef5cbcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyPatients.vue?vue&type=template&id=1ef5cbcf& */ "./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=template&id=1ef5cbcf&");
/* harmony import */ var _MyPatients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyPatients.vue?vue&type=script&lang=js& */ "./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=script&lang=js&");
/* harmony import */ var _MyPatients_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyPatients.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyPatients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyPatients_vue_vue_type_template_id_1ef5cbcf___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyPatients_vue_vue_type_template_id_1ef5cbcf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/doctor/DashboardPage/MyPatients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue":
/*!*******************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PatientAdd_vue_vue_type_template_id_79b63c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PatientAdd.vue?vue&type=template&id=79b63c6c&scoped=true& */ "./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=template&id=79b63c6c&scoped=true&");
/* harmony import */ var _PatientAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PatientAdd.vue?vue&type=script&lang=js& */ "./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _PatientAdd_vue_vue_type_style_index_0_id_79b63c6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PatientAdd.vue?vue&type=style&index=0&id=79b63c6c&lang=scss&scoped=true& */ "./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=style&index=0&id=79b63c6c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PatientAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PatientAdd_vue_vue_type_template_id_79b63c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PatientAdd_vue_vue_type_template_id_79b63c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "79b63c6c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPrescriptions.vue":
/*!*************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPrescriptions.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyPrescriptions_vue_vue_type_template_id_6063b528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyPrescriptions.vue?vue&type=template&id=6063b528& */ "./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=template&id=6063b528&");
/* harmony import */ var _MyPrescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyPrescriptions.vue?vue&type=script&lang=js& */ "./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _MyPrescriptions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyPrescriptions.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyPrescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyPrescriptions_vue_vue_type_template_id_6063b528___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyPrescriptions_vue_vue_type_template_id_6063b528___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/doctor/DashboardPage/MyPrescriptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue":
/*!******************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyWorksheetTemplates_vue_vue_type_template_id_099df5ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyWorksheetTemplates.vue?vue&type=template&id=099df5ec& */ "./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=template&id=099df5ec&");
/* harmony import */ var _MyWorksheetTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyWorksheetTemplates.vue?vue&type=script&lang=js& */ "./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=script&lang=js&");
/* harmony import */ var _MyWorksheetTemplates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyWorksheetTemplates.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyWorksheetTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyWorksheetTemplates_vue_vue_type_template_id_099df5ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyWorksheetTemplates_vue_vue_type_template_id_099df5ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyDashboardNotifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPatients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyPatients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPatients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PatientAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPrescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyPrescriptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPrescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheetTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyWorksheetTemplates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheetTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/doctor/DashboardPage.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardPage.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPatients_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyPatients.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=style&index=0&id=79b63c6c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=style&index=0&id=79b63c6c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientAdd_vue_vue_type_style_index_0_id_79b63c6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PatientAdd.vue?vue&type=style&index=0&id=79b63c6c&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=style&index=0&id=79b63c6c&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPrescriptions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyPrescriptions.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheetTemplates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyWorksheetTemplates.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage.vue?vue&type=template&id=a950e9ec&":
/*!****************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage.vue?vue&type=template&id=a950e9ec& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_a950e9ec___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_a950e9ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardPage_vue_vue_type_template_id_a950e9ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardPage.vue?vue&type=template&id=a950e9ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage.vue?vue&type=template&id=a950e9ec&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=5d23c1b5&":
/*!*****************************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=5d23c1b5& ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_template_id_5d23c1b5___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_template_id_5d23c1b5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyDashboardNotifications_vue_vue_type_template_id_5d23c1b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyDashboardNotifications.vue?vue&type=template&id=5d23c1b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=5d23c1b5&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=template&id=1ef5cbcf&":
/*!***************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=template&id=1ef5cbcf& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPatients_vue_vue_type_template_id_1ef5cbcf___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPatients_vue_vue_type_template_id_1ef5cbcf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPatients_vue_vue_type_template_id_1ef5cbcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyPatients.vue?vue&type=template&id=1ef5cbcf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=template&id=1ef5cbcf&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=template&id=79b63c6c&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=template&id=79b63c6c&scoped=true& ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientAdd_vue_vue_type_template_id_79b63c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientAdd_vue_vue_type_template_id_79b63c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PatientAdd_vue_vue_type_template_id_79b63c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PatientAdd.vue?vue&type=template&id=79b63c6c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=template&id=79b63c6c&scoped=true&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=template&id=6063b528&":
/*!********************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=template&id=6063b528& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPrescriptions_vue_vue_type_template_id_6063b528___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPrescriptions_vue_vue_type_template_id_6063b528___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyPrescriptions_vue_vue_type_template_id_6063b528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyPrescriptions.vue?vue&type=template&id=6063b528& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=template&id=6063b528&");


/***/ }),

/***/ "./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=template&id=099df5ec&":
/*!*************************************************************************************************!*\
  !*** ./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=template&id=099df5ec& ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheetTemplates_vue_vue_type_template_id_099df5ec___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheetTemplates_vue_vue_type_template_id_099df5ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyWorksheetTemplates_vue_vue_type_template_id_099df5ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyWorksheetTemplates.vue?vue&type=template&id=099df5ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=template&id=099df5ec&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage.vue?vue&type=template&id=a950e9ec&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage.vue?vue&type=template&id=a950e9ec& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("section", { staticClass: "db-doctor", attrs: { id: "dashboard" } }, [
      _c(
        "h1",
        [
          _c("transition", { attrs: { name: "fade" } }, [
            !_vm.prescriProcess
              ? _c("span", [
                  _vm._v(
                    "Bienvenue sur votre dashboard !\n                    "
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
            _vm.prescriProcess
              ? _c(
                  "span",
                  { staticClass: "prescri-process" },
                  [
                    _c("span", [_vm._v("Création d'une prescription")]),
                    _vm._v(" "),
                    _c(
                      "vs-button",
                      {
                        staticClass: "secondary",
                        on: { click: _vm.stopPrescriProcess }
                      },
                      [
                        _vm._v(
                          "\n                        Annuler\n                    "
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e()
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "main",
        {
          class: {
            "with-notifs":
              !_vm.doctor.city ||
              !_vm.doctor.gender ||
              !_vm.doctor.firstname ||
              !_vm.doctor.lastname ||
              !_vm.doctor.isVerified
          }
        },
        [
          _c("MyDashboardNotifications", {
            staticClass: "mobile-view",
            attrs: { doctor: _vm.doctor }
          }),
          _vm._v(" "),
          _c(
            "transition",
            { attrs: { name: "fade" } },
            [
              _vm.activeTab === 1
                ? _c("MyPrescriptions", {
                    attrs: {
                      doctor: _vm.doctor,
                      doctorPrescriptions: _vm.getDoctorPrescriptions,
                      csrfTokenRemoveWorksheet: _vm.csrfTokenRemoveWorksheet,
                      loadingDoctorWorksheets: _vm.loadingDoctorWorksheets
                    },
                    on: { prescriProcess: _vm.startPrescriProcess }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.activeTab === 2
                ? _c("MyWorksheetTemplates", {
                    attrs: {
                      doctor: _vm.doctor,
                      worksheetTemplates: _vm.getWorksheetTemplates,
                      tagsFromExercises: _vm.tagsFromExercises,
                      csrfTokenRemoveWorksheet: _vm.csrfTokenRemoveWorksheet,
                      loadingAllWorksheets: _vm.loadingAllWorksheets,
                      prescriProcess: _vm.prescriProcessWorksheet,
                      btnLoadingWorksheetPrescriProcessRedirect:
                        _vm.btnLoadingWorksheetPrescriProcessRedirect
                    },
                    on: {
                      prescriProcessWorksheetChoice:
                        _vm.setPrescriProcessWorksheetChoice
                    }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "aside",
            [
              _c("MyDashboardNotifications", {
                staticClass: "desktop-view",
                attrs: { doctor: _vm.doctor }
              }),
              _vm._v(" "),
              _c("MyPatients", {
                attrs: {
                  doctor: _vm.doctor,
                  csrfTokenAddPatient: _vm.csrfTokenAddPatient,
                  csrfTokenRemovePatient: _vm.csrfTokenRemovePatient,
                  csrfTokenCreatePatient: _vm.csrfTokenCreatePatient,
                  prescriProcess: _vm.prescriProcessPatient,
                  btnLoadingPatientPrescriProcessRedirect:
                    _vm.btnLoadingPatientPrescriProcessRedirect
                },
                on: {
                  prescriProcessPatientChoice:
                    _vm.setPrescriProcessPatientChoice
                }
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=5d23c1b5&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyDashboardNotifications.vue?vue&type=template&id=5d23c1b5& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.doctor.city ||
    !_vm.doctor.gender ||
    !_vm.doctor.firstname ||
    !_vm.doctor.lastname ||
    !_vm.doctor.isVerified
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
              ? _c("div", { staticClass: "notifications-list" }, [
                  !_vm.loading && !_vm.doctor.isVerified
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
                  (!_vm.doctor.city ||
                    !_vm.doctor.gender ||
                    !_vm.doctor.firstname ||
                    !_vm.doctor.lastname)
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
                ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=template&id=1ef5cbcf&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients.vue?vue&type=template&id=1ef5cbcf& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      class: { reduced: !_vm.$parent.myPatientsContent },
      attrs: { id: "my-patients" }
    },
    [
      _c(
        "button",
        {
          staticClass: "toggle-content",
          on: {
            click: function($event) {
              _vm.$parent.myPatientsContent = !_vm.$parent.myPatientsContent
            }
          }
        },
        [_c("i", { staticClass: "kiv-chevron-down icon-3" })]
      ),
      _vm._v(" "),
      _c("h2", [_vm._v("Mes Patients")]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.prescriProcess
          ? _c("div", { staticClass: "prescri-process-dialog" }, [
              _c("span", { staticClass: "step-num" }, [
                _c("i", { staticClass: "fas fa-folder-plus" }),
                _vm._v(
                  "Etape\n                " +
                    _vm._s(
                      !_vm.$parent.prescriProcessWorksheetSelected ? 1 : 2
                    ) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Veuillez Sélectionner un patient")])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "height" } }, [
        _vm.$parent.myPatientsContent
          ? _c("div", [
              _c("div", { staticClass: "primary-actions" }, [
                _c(
                  "div",
                  { staticClass: "search" },
                  [
                    _c("vs-input", {
                      attrs: {
                        "label-placeholder": "Filtrer par nom ou email"
                      },
                      on: {
                        keyup: function($event) {
                          _vm.page = 1
                        }
                      },
                      model: {
                        value: _vm.search,
                        callback: function($$v) {
                          _vm.search = $$v
                        },
                        expression: "search"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "div",
                      { staticClass: "btn-primary-action add" },
                      [
                        _c(
                          "vs-tooltip",
                          {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "tooltip",
                                  fn: function() {
                                    return [
                                      _vm._v(
                                        "\n                                Ajouter un patient\n                            "
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ],
                              null,
                              false,
                              2558201810
                            )
                          },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "btn-action add",
                                attrs: { circle: "", floating: "" },
                                on: {
                                  click: function($event) {
                                    _vm.modalAddPatient = true
                                  }
                                }
                              },
                              [
                                _c("plus-icon", {
                                  staticClass: "custom-class",
                                  attrs: { size: "3x" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dialog",
                      {
                        attrs: {
                          width: "450px",
                          loading: _vm.$parent.loadingAllPatients
                        },
                        model: {
                          value: _vm.modalAddPatient,
                          callback: function($$v) {
                            _vm.modalAddPatient = $$v
                          },
                          expression: "modalAddPatient"
                        }
                      },
                      [
                        _c("PatientAdd", {
                          attrs: {
                            doctor: _vm.doctor,
                            allPatients: _vm.allPatients,
                            loadingAllPatients: _vm.loadingAllPatients,
                            csrfTokenAddPatient: _vm.csrfTokenAddPatient,
                            csrfTokenCreatePatient: _vm.csrfTokenCreatePatient
                          },
                          on: {
                            addPatient: _vm.addPatient,
                            closeModalAddPatient: function($event) {
                              _vm.modalAddPatient = false
                            }
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "patients-list" }, [
                !_vm.loadingDoctorPatients
                  ? _c(
                      "div",
                      _vm._l(_vm.getDoctorPatients, function(patient, i) {
                        return _c(
                          "div",
                          { key: i, staticClass: "patient-block" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "remove-user",
                                on: {
                                  click: function($event) {
                                    return _vm.removePatient(patient)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-user-minus" })]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "patient-details" }, [
                              _c(
                                "div",
                                [
                                  _c(
                                    "vs-avatar",
                                    {
                                      staticClass: "avatar",
                                      attrs: { circle: "", size: "60" },
                                      on: {
                                        click: function($event) {
                                          return _vm.redirectToPatientDashboard(
                                            patient.id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: patient.avatarUrl
                                            ? patient.avatarUrl
                                            : "/img/avatar-default.svg",
                                          alt:
                                            "Avatar de " +
                                            patient.firstname +
                                            " " +
                                            patient.lastname
                                        }
                                      }),
                                      _vm._v(" "),
                                      patient.birthdate
                                        ? _c("div", { staticClass: "age" }, [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  _vm.getAge(patient.birthdate)
                                                ) +
                                                " ans\n                                    "
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "user-name" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "name",
                                        on: {
                                          click: function($event) {
                                            return _vm.redirectToPatientDashboard(
                                              patient.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        patient.firstname || patient.lastname
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(patient.firstname) +
                                                  "\n                                            " +
                                                  _vm._s(patient.lastname) +
                                                  "\n                                        "
                                              )
                                            ])
                                          : _c("span", [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(patient.email) +
                                                  "\n                                        "
                                              )
                                            ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "mail",
                                        on: {
                                          click: function($event) {
                                            return _vm.redirectToPatientDashboard(
                                              patient.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(patient.email) +
                                            "\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    patient.worksheets.length
                                      ? _c(
                                          "div",
                                          { staticClass: "prescriptions" },
                                          [
                                            _c("h4", [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    patient.worksheets.length
                                                  )
                                                )
                                              ]),
                                              _vm._v(
                                                "\n                                            prescription"
                                              ),
                                              patient.worksheets.length > 1
                                                ? _c("span", [_vm._v("s")])
                                                : _vm._e(),
                                              _vm._v(
                                                "\n                                            :\n                                        "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "\n                                                prescriptions-patient-list\n                                            "
                                              },
                                              _vm._l(
                                                patient.worksheets,
                                                function(worksheet, i) {
                                                  return _c(
                                                    "BtnChartWorksheetPartOfBody",
                                                    {
                                                      key: i,
                                                      staticClass:
                                                        "prescription",
                                                      attrs: {
                                                        worksheet: worksheet
                                                      }
                                                    }
                                                  )
                                                }
                                              ),
                                              1
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "btn-prescription-action",
                                  class: {
                                    active: _vm.prescriProcess,
                                    selected:
                                      _vm.$parent
                                        .prescriProcessPatientSelected &&
                                      _vm.$parent.prescriProcessPatientSelected
                                        .id === patient.id
                                  }
                                },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      staticClass: "w-100",
                                      attrs: {
                                        loading:
                                          _vm.btnLoadingPatientPrescriProcessRedirect ===
                                          patient.id
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.prescriProcessPatientChoice(
                                            patient
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "transition",
                                        { attrs: { name: "fade" } },
                                        [
                                          (!_vm.prescriProcess &&
                                            !_vm.$parent
                                              .prescriProcessPatientSelected) ||
                                          (_vm.$parent
                                            .prescriProcessPatientSelected &&
                                            _vm.$parent
                                              .prescriProcessPatientSelected
                                              .id != patient.id)
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-folder-plus"
                                                }),
                                                _vm._v("Prescrire")
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.prescriProcess &&
                                          !_vm.$parent
                                            .prescriProcessPatientSelected
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-folder-plus"
                                                }),
                                                _vm._v("Sélectionner")
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.$parent
                                            .prescriProcessPatientSelected &&
                                          _vm.$parent
                                            .prescriProcessPatientSelected
                                            .id === patient.id
                                            ? _c("span", [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-check-circle"
                                                }),
                                                _vm._v("Sélectionné")
                                              ])
                                            : _vm._e()
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "account-infos" }, [
                              _c("div", { staticClass: "status" }, [
                                patient.addRequestDoctor && patient.isVerified
                                  ? _c("div", { staticClass: "status" }, [
                                      _c("div", {
                                        staticClass: "icon-active-status"
                                      }),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "text-status" }, [
                                        _vm._v("Actif")
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                patient.addRequestDoctor && !patient.isVerified
                                  ? _c("div", { staticClass: "status" }, [
                                      _c("div", {
                                        staticClass: "icon-inactive-status"
                                      }),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "text-status" }, [
                                        _vm._v("Inactif")
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                false === patient.addRequestDoctor
                                  ? _c("div", { staticClass: "status" }, [
                                      _c("div", {
                                        staticClass: "icon-waiting-status"
                                      }),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "text-status" }, [
                                        _vm._v("Attente")
                                      ])
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              patient.lastLoginAt
                                ? _c("div", { staticClass: "last-login" }, [
                                    _c("span", [
                                      _vm._v("Dernière connexion :")
                                    ]),
                                    _vm._v(" "),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.formatDate(patient.lastLoginAt)
                                        )
                                      )
                                    ])
                                  ])
                                : _vm._e()
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.loadingDoctorPatients &&
                !_vm.getDoctorPatients.length &&
                !_vm.search
                  ? _c("div", { staticClass: "not-found" }, [
                      _c("p", [
                        _c("i", { staticClass: "fas fa-user-minus" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Vous n'avez pas de patient")])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.loadingDoctorPatients &&
                !_vm.getDoctorPatients.length &&
                _vm.search
                  ? _c("div", { staticClass: "not-found" }, [
                      _c("p", [
                        _c("i", { staticClass: "fas fa-user-minus" }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            "Aucun patient n'a été trouvé avec\n                            "
                          ),
                          _vm.search
                            ? _c("span", [
                                _vm._v('"'),
                                _c("strong", [_vm._v(_vm._s(_vm.search))]),
                                _vm._v('"')
                              ])
                            : _vm._e()
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.loadingDoctorPatients
                  ? _c("div", [
                      _c(
                        "div",
                        { staticClass: "loading loading-block patient-block" },
                        [
                          _c("div", { staticClass: "patient-details" }, [
                            _c("div", [
                              _c("div", { staticClass: "loading avatar" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "user-name" }, [
                                _c("div", { staticClass: "loading name w-35" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "loading mail w-45" }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading prescriptions w-25"
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading btn-prescription-action"
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "account-infos" }, [
                            _c("div", { staticClass: "loading status w-35" }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading last-login w-45"
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "loading loading-block patient-block" },
                        [
                          _c("div", { staticClass: "patient-details" }, [
                            _c("div", [
                              _c("div", { staticClass: "loading avatar" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "user-name" }, [
                                _c("div", { staticClass: "loading name w-35" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "loading mail w-45" }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading prescriptions w-25"
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading btn-prescription-action"
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "account-infos" }, [
                            _c("div", { staticClass: "loading status w-35" }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading last-login w-45"
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "loading loading-block patient-block" },
                        [
                          _c("div", { staticClass: "patient-details" }, [
                            _c("div", [
                              _c("div", { staticClass: "loading avatar" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "user-name" }, [
                                _c("div", { staticClass: "loading name w-35" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "loading mail w-45" }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading prescriptions w-25"
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading btn-prescription-action"
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "account-infos" }, [
                            _c("div", { staticClass: "loading status w-35" }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading last-login w-45"
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "loading loading-block patient-block" },
                        [
                          _c("div", { staticClass: "patient-details" }, [
                            _c("div", [
                              _c("div", { staticClass: "loading avatar" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "user-name" }, [
                                _c("div", { staticClass: "loading name w-35" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "loading mail w-45" }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading prescriptions w-25"
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading btn-prescription-action"
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "account-infos" }, [
                            _c("div", { staticClass: "loading status w-35" }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading last-login w-45"
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "loading loading-block patient-block" },
                        [
                          _c("div", { staticClass: "patient-details" }, [
                            _c("div", [
                              _c("div", { staticClass: "loading avatar" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "user-name" }, [
                                _c("div", { staticClass: "loading name w-35" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "loading mail w-45" }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading prescriptions w-25"
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading btn-prescription-action"
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "account-infos" }, [
                            _c("div", { staticClass: "loading status w-35" }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading last-login w-45"
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "loading loading-block patient-block" },
                        [
                          _c("div", { staticClass: "patient-details" }, [
                            _c("div", [
                              _c("div", { staticClass: "loading avatar" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "user-name" }, [
                                _c("div", { staticClass: "loading name w-35" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "loading mail w-45" }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading prescriptions w-25"
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading btn-prescription-action"
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "account-infos" }, [
                            _c("div", { staticClass: "loading status w-35" }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading last-login w-45"
                            })
                          ])
                        ]
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm.doctorPatients.length > _vm.max
                ? _c(
                    "div",
                    { staticClass: "pagination" },
                    [
                      _c("vs-pagination", {
                        attrs: {
                          "buttons-dotted": "",
                          length: _vm.getLength(
                            _vm.getSearch(_vm.doctorPatients, _vm.search),
                            _vm.max
                          )
                        },
                        model: {
                          value: _vm.page,
                          callback: function($$v) {
                            _vm.page = $$v
                          },
                          expression: "page"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "count-page" }, [
                        _vm._v("\n                    Page : "),
                        _c("b", [_vm._v(_vm._s(_vm.page))])
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          model: {
            value: _vm.modalConfirmRemovePatient,
            callback: function($$v) {
              _vm.modalConfirmRemovePatient = $$v
            },
            expression: "modalConfirmRemovePatient"
          }
        },
        [
          _c("p", { staticClass: "modal-confirm-text" }, [
            _vm._v("Confirmer la suppression de")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-confirm-detail remove-item" }, [
            _c("div", { staticClass: "modal-confirm-icon remove-item" }, [
              _c("i", { staticClass: "fas fa-user-minus" })
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.getUserName(_vm.removePatientDetails)) +
                    "\n                "
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "modal-confirm-text" }, [
            _vm._v("de votre liste.")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-confirm-buttons" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "secondary",
                  on: {
                    click: function($event) {
                      _vm.modalConfirmRemovePatient = false
                    }
                  }
                },
                [_vm._v("\n                Annuler\n            ")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  class: {
                    disabled: _vm.btnLoadingValidRemovePatient
                  },
                  attrs: { loading: _vm.btnLoadingValidRemovePatient },
                  on: { click: _vm.validRemovePatient }
                },
                [_vm._v("\n                Confirmer\n            ")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=template&id=79b63c6c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPatients/PatientAdd.vue?vue&type=template&id=79b63c6c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Ajout d'un patient")]),
    _vm._v(" "),
    _c(
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
        class: { loading: _vm.loadingAllPatients }
      },
      [
        !_vm.loadingAllPatients
          ? _c(
              "div",
              [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.userSelected.email,
                        expression: "userSelected.email"
                      }
                    ],
                    staticClass: "user-selected user",
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
                            src: _vm.userSelected.avatarUrl
                              ? _vm.userSelected.avatarUrl
                              : "/img/avatar-default.svg",
                            alt:
                              "Avatar de " +
                              _vm.userSelected.firstname +
                              " " +
                              _vm.userSelected.lastname
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text" }, [
                      _c("div", { staticClass: "name" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.getUserName(_vm.userSelected)) +
                            "\n                        "
                        ),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.userSelected.birthdate,
                                expression: "userSelected.birthdate"
                              }
                            ],
                            staticClass: "birthdate"
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.getAge(_vm.userSelected.birthdate)) +
                                "\n                            ans"
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "email" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.userSelected.email) +
                            "\n                    "
                        )
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.userSelected.email,
                      expression: "!userSelected.email"
                    },
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
                    id: "user-choice-select",
                    placeholder: !_vm.selectBox
                      ? "Sélectionnez un patient kivid"
                      : "Recherchez un patient kivid",
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
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.selectBox,
                          expression: "selectBox"
                        }
                      ],
                      staticClass: "select-box",
                      on: { click: _vm.focusInputSelect }
                    },
                    [
                      _vm.allPatientsFiltered.length
                        ? _c(
                            "ul",
                            _vm._l(_vm.allPatientsFiltered, function(
                              patient,
                              i
                            ) {
                              return _c("li", { key: i }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "user",
                                    on: {
                                      click: function($event) {
                                        return _vm.selectUser(patient)
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
                                            src: patient.avatarUrl
                                              ? patient.avatarUrl
                                              : "/img/avatar-default.svg",
                                            alt:
                                              "Avatar de " +
                                              patient.firstname +
                                              " " +
                                              patient.lastname
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text" }, [
                                      _c("div", { staticClass: "name" }, [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.getUserName(patient)) +
                                            "\n                                        "
                                        ),
                                        _c(
                                          "span",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: patient.birthdate,
                                                expression: "patient.birthdate"
                                              }
                                            ],
                                            staticClass: "birthdate"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  _vm.getAge(patient.birthdate)
                                                ) +
                                                "\n                                            ans"
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "email" }, [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(patient.email) +
                                            "\n                                    "
                                        )
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              ])
                            }),
                            0
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.allPatientsFiltered.length && _vm.filter
                        ? _c("div", [
                            _c("p", { staticClass: "not-found" }, [
                              _c("i", { staticClass: "fas fa-users-slash" }),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  "\n                                Aucun patient n'a été trouvé avec \""
                                ),
                                _c("strong", [_vm._v(_vm._s(_vm.filter))]),
                                _vm._v('"\n                            ')
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.allPatientsFiltered.length && !_vm.filter
                        ? _c("div", [
                            _c("p", { staticClass: "not-found" }, [
                              _c("i", { staticClass: "fas fa-users-slash" }),
                              _vm._v(
                                "\n                            Aucun patient n'a été trouvé\n                        "
                              )
                            ])
                          ])
                        : _vm._e()
                    ]
                  )
                ])
              ],
              1
            )
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "btn-container",
        class: { disabled: _vm.btnLoadingValidAddPatient }
      },
      [
        _c(
          "vs-button",
          {
            staticClass: "w-100",
            attrs: {
              loading: _vm.btnLoadingValidAddPatient,
              disabled: !_vm.userSelected.email || _vm.btnLoadingValidAddPatient
            },
            on: { click: _vm.validAddPatient }
          },
          [_vm._v("Valider la sélection")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "create-patient-form" },
      [
        _c(
          "vs-select",
          {
            attrs: { placeholder: "Civilité" },
            model: {
              value: _vm.createPatientDetails.gender,
              callback: function($$v) {
                _vm.$set(_vm.createPatientDetails, "gender", $$v)
              },
              expression: "createPatientDetails.gender"
            }
          },
          [
            _c("vs-option", { attrs: { label: "Inconnu", value: "0" } }, [
              _vm._v("Inconnu")
            ]),
            _vm._v(" "),
            _c("vs-option", { attrs: { label: "M.", value: "1" } }, [
              _vm._v("M.")
            ]),
            _vm._v(" "),
            _c("vs-option", { attrs: { label: "Mme", value: "2" } }, [
              _vm._v("Mme")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { "label-placeholder": "Prénom", type: "text" },
          model: {
            value: _vm.createPatientDetails.firstname,
            callback: function($$v) {
              _vm.$set(_vm.createPatientDetails, "firstname", $$v)
            },
            expression: "createPatientDetails.firstname"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { "label-placeholder": "Nom", type: "text" },
          model: {
            value: _vm.createPatientDetails.lastname,
            callback: function($$v) {
              _vm.$set(_vm.createPatientDetails, "lastname", $$v)
            },
            expression: "createPatientDetails.lastname"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          class: {
            error: _vm.validationMessage.email && _vm.createPatientDetails.email
          },
          attrs: {
            danger: _vm.validationMessage.email != null,
            "label-placeholder": "Email",
            autocomplete: "email",
            type: "email",
            "icon-after": ""
          },
          on: { keyup: _vm.validationEmail },
          scopedSlots: _vm._u(
            [
              _vm.validationMessage.email && _vm.createPatientDetails.email
                ? {
                    key: "icon",
                    fn: function() {
                      return [
                        _c("i", { staticClass: "kiv-error error icon-24" })
                      ]
                    },
                    proxy: true
                  }
                : null,
              _vm.validationMessage.email && _vm.createPatientDetails.email
                ? {
                    key: "message-danger",
                    fn: function() {
                      return [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.validationMessage.email) +
                            "\n            "
                        )
                      ]
                    },
                    proxy: true
                  }
                : null
            ],
            null,
            true
          ),
          model: {
            value: _vm.createPatientDetails.email,
            callback: function($$v) {
              _vm.$set(_vm.createPatientDetails, "email", $$v)
            },
            expression: "createPatientDetails.email"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "btn-container",
        class: { disabled: _vm.btnLoadingValidCreatePatient }
      },
      [
        _c(
          "vs-button",
          {
            staticClass: "w-100",
            attrs: {
              disabled:
                _vm.validationMessage.email ||
                !_vm.createPatientDetails.email ||
                _vm.btnLoadingValidCreatePatient,
              loading: _vm.btnLoadingValidCreatePatient
            },
            on: { click: _vm.validCreatePatient }
          },
          [_vm._v("Valider la création")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "divider" }, [
      _c("div", { staticClass: "divider-text" }, [_vm._v("ou")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=template&id=6063b528&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyPrescriptions.vue?vue&type=template&id=6063b528& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      staticClass: "kiv-block s-prescriptions",
      class: { reduced: !_vm.$parent.myPrescriptionsContent },
      attrs: { id: "my-worksheets" }
    },
    [
      _c(
        "div",
        {
          staticClass: "toggle-content tab",
          on: {
            click: function($event) {
              _vm.$parent.myPrescriptionsContent = !_vm.$parent
                .myPrescriptionsContent
            }
          }
        },
        [_c("i", { staticClass: "kiv-chevron-down icon-3" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "tabs" }, [
        _c(
          "div",
          {
            on: {
              click: function($event) {
                return _vm.activeTab(1)
              }
            }
          },
          [_vm._m(0)]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "inactive",
            on: {
              click: function($event) {
                return _vm.activeTab(2)
              }
            }
          },
          [_vm._m(1)]
        )
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "height" } }, [
        _vm.$parent.myPrescriptionsContent
          ? _c("div", [
              _c("div", { staticClass: "primary-actions" }, [
                _c(
                  "div",
                  { staticClass: "search" },
                  [
                    _c("vs-input", {
                      attrs: {
                        "label-placeholder":
                          "Filtrer par nom de fiche et/ou patient"
                      },
                      on: {
                        keyup: function($event) {
                          _vm.page = 1
                        }
                      },
                      model: {
                        value: _vm.search,
                        callback: function($$v) {
                          _vm.search = $$v
                        },
                        expression: "search"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-primary-action" },
                  [
                    _c(
                      "vs-button",
                      {
                        staticClass: "w-100",
                        on: { click: _vm.prescriProcess }
                      },
                      [
                        _c("i", { staticClass: "fas fa-folder-plus" }),
                        _vm._v(" Prescrire\n                    ")
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "worksheet-list wl-doctor" }, [
                !_vm.loadingDoctorWorksheets &&
                _vm.getDoctorPrescriptions.length
                  ? _c(
                      "div",
                      _vm._l(_vm.getDoctorPrescriptions, function(
                        worksheet,
                        i
                      ) {
                        return _c("div", { key: i }, [
                          _c(
                            "div",
                            { staticClass: "worksheet-header" },
                            [
                              _c(
                                "div",
                                { staticClass: "user-title" },
                                [
                                  _c(
                                    "vs-avatar",
                                    {
                                      staticClass: "user-avatar",
                                      attrs: { size: "35", circle: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.redirectToPatientDashboard(
                                            worksheet.patient.id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: worksheet.patient.avatarUrl
                                            ? worksheet.patient.avatarUrl
                                            : "/img/avatar-default.svg",
                                          alt:
                                            "Avatar de " +
                                            worksheet.patient.firstname +
                                            " " +
                                            worksheet.patient.lastname
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "h3",
                                    {
                                      staticClass: "worksheet-title",
                                      on: {
                                        click: function($event) {
                                          return _vm.redirectToPatientDashboard(
                                            worksheet.patient.id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      worksheet.patient.firstname ||
                                      worksheet.patient.lastname
                                        ? _c(
                                            "span",
                                            { staticClass: "user-name" },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(
                                                    worksheet.patient.firstname
                                                  ) +
                                                  "\n                                        " +
                                                  _vm._s(
                                                    worksheet.patient.lastname
                                                  ) +
                                                  "\n                                    "
                                              )
                                            ]
                                          )
                                        : _c("span", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  worksheet.patient.email
                                                ) +
                                                "\n                                    "
                                            )
                                          ]),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "deux-points" },
                                        [_vm._v(":")]
                                      ),
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(worksheet.title) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  worksheet.commentaries.length
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-button",
                                            {
                                              staticClass:
                                                "btn-action commentaries",
                                              attrs: {
                                                circle: "",
                                                floating: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.redirectToWorksheetPage(
                                                    worksheet.id,
                                                    worksheet.patient.id,
                                                    true
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "far fa-comment-alt"
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "count-commentaries"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        worksheet.commentaries
                                                          .length
                                                      ) +
                                                      "\n                                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("TagPartOfBody", {
                                attrs: { partOfBody: worksheet.partOfBody }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "worksheet-progress-line" },
                            [
                              _vm.loadingsGetSessions.includes(worksheet.id)
                                ? _c("div", {
                                    staticClass: "loading-gray progressbar-base"
                                  })
                                : _c(
                                    "div",
                                    { staticClass: "progressbar-base" },
                                    [
                                      _c("div", {
                                        staticClass: "progressbar-thumb",
                                        style: {
                                          width:
                                            worksheet.worksheetTotalProgression +
                                            "%"
                                        }
                                      })
                                    ]
                                  ),
                              _vm._v(" "),
                              _c("div", { staticClass: "count-sessions" }, [
                                _vm.loadingsGetSessions.includes(worksheet.id)
                                  ? _c("div", {
                                      staticClass: "loading-gray session-nb"
                                    })
                                  : _c(
                                      "p",
                                      {
                                        staticClass: "session-nb",
                                        class: {
                                          completed:
                                            100 <=
                                            worksheet.worksheetTotalProgression
                                        }
                                      },
                                      [
                                        worksheet.totalWorksheetSessions > 0
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                        Session n°"
                                              ),
                                              worksheet.currentWorksheetSession
                                                ? _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        worksheet
                                                          .currentWorksheetSession
                                                          .execOrder
                                                      )
                                                    )
                                                  ])
                                                : _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        worksheet.totalWorksheetSessions
                                                      )
                                                    )
                                                  ]),
                                              _vm._v(
                                                "/" +
                                                  _vm._s(
                                                    worksheet.totalWorksheetSessions
                                                  ) +
                                                  "\n                                    "
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        0 === worksheet.totalWorksheetSessions
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                        Non démarrée\n                                    "
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        null ===
                                        worksheet.totalWorksheetSessions
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                        NB Sessions\n                                    "
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "worksheet-content" }, [
                            _c("div", [
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
                                      "\n                                        exercice"
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
                                    "\n                                        par jour -\n                                        "
                                  ),
                                  _c("span", { staticClass: "b" }, [
                                    _vm._v(_vm._s(worksheet.perWeek) + "x")
                                  ]),
                                  _vm._v(
                                    "\n                                        par semaine\n                                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "worksheet-period" }, [
                                  _c("i", { staticClass: "kiv-clock icon-11" }),
                                  _vm._v(
                                    "\n                                        Période :\n                                        "
                                  ),
                                  _c("span", { staticClass: "b" }, [
                                    _vm._v(
                                      _vm._s(worksheet.duration) +
                                        "\n                                            semaine"
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
                                { staticClass: "worksheet-details reduced" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "worksheet-exercises-count"
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "kiv-exercise icon-7"
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "b" }, [
                                        _vm._v(
                                          _vm._s(worksheet.exercises.length)
                                        )
                                      ]),
                                      _vm._v(
                                        "\n                                        ex.\n                                    "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "worksheet-timing" },
                                    [
                                      _c("i", {
                                        staticClass: "kiv-calendar icon-10"
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "b" }, [
                                        _vm._v(_vm._s(worksheet.perDay) + "x")
                                      ]),
                                      _vm._v(
                                        "\n                                        / jour -\n                                        "
                                      ),
                                      _c("span", { staticClass: "b" }, [
                                        _vm._v(_vm._s(worksheet.perWeek) + "x")
                                      ]),
                                      _vm._v(
                                        "\n                                        / sem.\n                                    "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "worksheet-period" },
                                    [
                                      _c("i", {
                                        staticClass: "kiv-clock icon-11"
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "b" }, [
                                        _vm._v(
                                          _vm._s(worksheet.duration) +
                                            "\n                                            sem."
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "btns-date" }, [
                                _c("div", { staticClass: "created-at-date" }, [
                                  _c("span", [
                                    _vm._v(
                                      "créé le\n                                            " +
                                        _vm._s(
                                          _vm.formatDate(worksheet.createdAt)
                                        ) +
                                        "\n                                        "
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "buttons" },
                                  [
                                    worksheet.totalWorksheetSessions > 0
                                      ? _c(
                                          "vs-button",
                                          {
                                            staticClass: "btn-action",
                                            attrs: { circle: "", floating: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.redirectToWorksheetPage(
                                                  worksheet.id,
                                                  worksheet.patient.id,
                                                  true
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-eye"
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    worksheet.totalWorksheetSessions === 0
                                      ? _c(
                                          "vs-button",
                                          {
                                            staticClass: "btn-action",
                                            attrs: { circle: "", floating: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.redirectToWorksheetPage(
                                                  worksheet.id,
                                                  worksheet.patient.id,
                                                  false
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-eye"
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "vs-button",
                                      {
                                        staticClass: "btn-action",
                                        attrs: { circle: "", floating: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.redirectToEditPage(
                                              worksheet.id,
                                              worksheet.patient.id
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fas fa-pen" })]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-button",
                                      {
                                        staticClass: "btn-action",
                                        attrs: { circle: "", floating: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.removeWorksheet(
                                              worksheet
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fas fa-trash" })]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ])
                          ])
                        ])
                      }),
                      0
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.loadingDoctorWorksheets &&
                !_vm.getDoctorPrescriptions.length &&
                !_vm.search
                  ? _c("div", { staticClass: "not-found" }, [
                      _c("p", [
                        _c("i", { staticClass: "fas fa-folder-minus" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Vous n'avez pas de prescription")])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.loadingDoctorWorksheets &&
                !_vm.getDoctorPrescriptions.length &&
                _vm.search
                  ? _c("div", { staticClass: "not-found" }, [
                      _c("p", [
                        _c("i", { staticClass: "fas fa-folder-minus" }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            "Aucune prescription n'a été trouvée avec\n                            "
                          ),
                          _vm.search
                            ? _c("span", [
                                _vm._v('"'),
                                _c("strong", [_vm._v(_vm._s(_vm.search))]),
                                _vm._v('"')
                              ])
                            : _vm._e()
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.loadingDoctorWorksheets
                  ? _c("div", [
                      _c("div", { staticClass: "loading loading-block" }, [
                        _c("div", { staticClass: "worksheet-header w-85" }, [
                          _c("div", {
                            staticClass: "loading worksheet-title w-65"
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
                                "\n                                        loading\n                                        worksheet-exercises-count\n                                        w-45\n                                    "
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-timing w-25"
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-period w-15"
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "loading loading-block" }, [
                        _c("div", { staticClass: "worksheet-header w-85" }, [
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
                                "\n                                        loading\n                                        worksheet-exercises-count\n                                        w-45\n                                    "
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-timing w-25"
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-period w-15"
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "loading loading-block" }, [
                        _c("div", { staticClass: "worksheet-header w-85" }, [
                          _c("div", {
                            staticClass: "loading worksheet-title w-55"
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
                                "\n                                        loading\n                                        worksheet-exercises-count\n                                        w-45\n                                    "
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-timing w-25"
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-period w-15"
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "loading loading-block" }, [
                        _c("div", { staticClass: "worksheet-header w-85" }, [
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
                                "\n                                        loading\n                                        worksheet-exercises-count\n                                        w-45\n                                    "
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-timing w-25"
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-period w-15"
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "loading loading-block" }, [
                        _c("div", { staticClass: "worksheet-header w-85" }, [
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
                                "\n                                        loading\n                                        worksheet-exercises-count\n                                        w-45\n                                    "
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-timing w-25"
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-period w-15"
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "loading loading-block" }, [
                        _c("div", { staticClass: "worksheet-header w-85" }, [
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
                                "\n                                        loading\n                                        worksheet-exercises-count\n                                        w-45\n                                    "
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-timing w-25"
                            }),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-period w-15"
                            })
                          ])
                        ])
                      ])
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm.doctorPrescriptions.length > _vm.max
                ? _c(
                    "div",
                    { staticClass: "pagination" },
                    [
                      _c("vs-pagination", {
                        attrs: {
                          "buttons-dotted": "",
                          length: _vm.getLength(
                            _vm.getSearch(_vm.doctorPrescriptions, _vm.search),
                            _vm.max
                          )
                        },
                        model: {
                          value: _vm.page,
                          callback: function($$v) {
                            _vm.page = $$v
                          },
                          expression: "page"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "count-page" }, [
                        _vm._v("\n                    Page : "),
                        _c("b", [_vm._v(_vm._s(_vm.page))])
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          model: {
            value: _vm.modalConfirmRemoveWorksheet,
            callback: function($$v) {
              _vm.modalConfirmRemoveWorksheet = $$v
            },
            expression: "modalConfirmRemoveWorksheet"
          }
        },
        [
          _c("p", { staticClass: "modal-confirm-text" }, [
            _vm._v("Confirmer la suppression de")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-confirm-detail remove-item" }, [
            _c("div", { staticClass: "modal-confirm-icon remove-item" }, [
              _c("i", { staticClass: "fas fa-trash" })
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.removeWorksheetDetails.title) +
                    "\n                "
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-confirm-buttons" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "secondary",
                  on: {
                    click: function($event) {
                      _vm.modalConfirmRemoveWorksheet = false
                    }
                  }
                },
                [_vm._v("\n                Annuler\n            ")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  class: {
                    disabled: _vm.btnLoadingValidRemoveWorksheet
                  },
                  attrs: { loading: _vm.btnLoadingValidRemoveWorksheet },
                  on: { click: _vm.validRemoveWorksheet }
                },
                [_vm._v("\n                Confirmer\n            ")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_c("span", [_vm._v("Mes prescriptions")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_c("span", [_vm._v("Mes fiches")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=template&id=099df5ec&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/DashboardPage/MyWorksheetTemplates.vue?vue&type=template&id=099df5ec& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      staticClass: "kiv-block s-worksheet-templates",
      class: { reduced: !_vm.$parent.myWorksheetTemplatesContent },
      attrs: { id: "my-worksheets" }
    },
    [
      _c(
        "div",
        {
          staticClass: "toggle-content tab",
          on: {
            click: function($event) {
              _vm.$parent.myWorksheetTemplatesContent = !_vm.$parent
                .myWorksheetTemplatesContent
            }
          }
        },
        [_c("i", { staticClass: "kiv-chevron-down icon-3" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "tabs" }, [
        _c(
          "div",
          {
            staticClass: "inactive",
            on: {
              click: function($event) {
                return _vm.activeTab(1)
              }
            }
          },
          [_vm._m(0)]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            on: {
              click: function($event) {
                return _vm.activeTab(2)
              }
            }
          },
          [_vm._m(1)]
        )
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.prescriProcess && _vm.getWorksheetTemplates.length
          ? _c("div", { staticClass: "prescri-process-dialog" }, [
              _c("span", { staticClass: "step-num" }, [
                _c("i", { staticClass: "fas fa-folder-plus" }),
                _vm._v(
                  "Etape\n                " +
                    _vm._s(!_vm.$parent.prescriProcessPatientSelected ? 1 : 2) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                Veuillez Sélectionner une fiche, vous pourrez la\n                personnaliser à l'étape suivante\n            "
                )
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.prescriProcess
          ? _c(
              "div",
              { staticClass: "prescri-process-dialog pp-create-worksheet" },
              [
                _c("span", { staticClass: "step-num" }, [
                  _c("i", { staticClass: "fas fa-folder-plus" }),
                  _vm._v(
                    "Etape\n                " +
                      _vm._s(
                        !_vm.$parent.prescriProcessPatientSelected ? 1 : 2
                      ) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm.getWorksheetTemplates.length
                    ? _c("span", [_vm._v("Ou créez")])
                    : _c("span", [_vm._v("Créez")]),
                  _vm._v(" une nouvelle fiche\n            ")
                ])
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "height" } }, [
        _vm.$parent.myWorksheetTemplatesContent
          ? _c("div", [
              _c("div", { staticClass: "primary-actions" }, [
                _c(
                  "div",
                  { staticClass: "search" },
                  [
                    _c("vs-input", {
                      attrs: {
                        "label-placeholder":
                          "Filtrer par nom de fiche et/ou créateur"
                      },
                      on: {
                        keyup: function($event) {
                          _vm.page = 1
                        }
                      },
                      model: {
                        value: _vm.search,
                        callback: function($$v) {
                          _vm.search = $$v
                        },
                        expression: "search"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "view-all-templates" },
                      [
                        _c("span", [
                          _vm._v("Voir les fiches "),
                          _c("br"),
                          _vm._v(
                            "\n                            des autres prat."
                          )
                        ]),
                        _vm._v(" "),
                        _c("vs-switch", {
                          on: {
                            click: function($event) {
                              _vm.page = 1
                            }
                          },
                          model: {
                            value: _vm.viewAllTemplates,
                            callback: function($$v) {
                              _vm.viewAllTemplates = $$v
                            },
                            expression: "viewAllTemplates"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "div",
                      { staticClass: "kiv-select tags" },
                      [
                        _vm.getTagsFromAll.length
                          ? _c(
                              "vs-select",
                              {
                                attrs: {
                                  filter: "",
                                  multiple: "",
                                  placeholder: "Mots-Clés"
                                },
                                on: {
                                  change: function($event) {
                                    _vm.page = 1
                                  }
                                },
                                model: {
                                  value: _vm.selectedTags,
                                  callback: function($$v) {
                                    _vm.selectedTags = $$v
                                  },
                                  expression: "selectedTags"
                                }
                              },
                              [
                                _vm._l(_vm.getTagsFromAll, function(tag, i) {
                                  return _c(
                                    "vs-option",
                                    {
                                      key: i,
                                      attrs: { label: tag, value: tag }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(tag) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                _c("template", { slot: "notData" }, [
                                  _vm._v(
                                    "\n                                Aucun mot-clé\n                            "
                                  )
                                ])
                              ],
                              2
                            )
                          : _c("div", { staticClass: "loading select-tags" })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "btn-primary-action add" },
                      [
                        _c(
                          "vs-tooltip",
                          {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "tooltip",
                                  fn: function() {
                                    return [_vm._v(" Créer une fiche ")]
                                  },
                                  proxy: true
                                }
                              ],
                              null,
                              false,
                              987881784
                            )
                          },
                          [
                            !_vm.$parent.prescriProcess
                              ? _c(
                                  "vs-button",
                                  {
                                    staticClass: "btn-action add",
                                    attrs: {
                                      loading: _vm.btnLoadingAddWorksheet,
                                      circle: "",
                                      floating: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.redirectToCreatePage(0)
                                      }
                                    }
                                  },
                                  [
                                    _c("plus-icon", {
                                      staticClass: "custom-class",
                                      attrs: { size: "3x" }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("transition", { attrs: { name: "fade" } }, [
                      _vm.$parent.prescriProcess
                        ? _c(
                            "div",
                            {
                              staticClass: "btn-prescription-action",
                              class: {
                                active: _vm.prescriProcess,
                                selected:
                                  _vm.$parent.prescriProcessWorksheetSelected &&
                                  _vm.$parent.prescriProcessWorksheetSelected
                                    .id === null
                              }
                            },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "w-100",
                                  attrs: {
                                    loading:
                                      _vm.btnLoadingWorksheetPrescriProcessRedirect ===
                                      0
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.prescriProcessWorksheetChoice({
                                        id: null
                                      })
                                    }
                                  }
                                },
                                [
                                  (_vm.$parent.prescriProcess &&
                                    !_vm.$parent
                                      .prescriProcessWorksheetSelected) ||
                                  (_vm.$parent
                                    .prescriProcessWorksheetSelected &&
                                    _vm.$parent.prescriProcessWorksheetSelected
                                      .id !== null)
                                    ? _c("span", [
                                        _c("i", {
                                          staticClass: "fas fa-folder-plus"
                                        }),
                                        _vm._v(
                                          "Créer\n                                    une fiche"
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$parent.prescriProcessWorksheetSelected &&
                                  _vm.$parent.prescriProcessWorksheetSelected
                                    .id === null
                                    ? _c("span", [
                                        _c("i", {
                                          staticClass: "fas fa-check-circle"
                                        }),
                                        _vm._v("Sélectionné")
                                      ])
                                    : _vm._e()
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "worksheet-list wl-doctor" },
                [
                  _c("transition", { attrs: { name: "fade" } }, [
                    !_vm.loadingAllWorksheets &&
                    _vm.getWorksheetTemplates.length
                      ? _c(
                          "div",
                          _vm._l(_vm.getWorksheetTemplates, function(
                            worksheet,
                            i
                          ) {
                            return _c("div", { key: i }, [
                              _c(
                                "div",
                                { staticClass: "worksheet-header" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "user-title",
                                      on: {
                                        click: function($event) {
                                          return _vm.redirectToWorksheetPage(
                                            worksheet.id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "h3",
                                        { staticClass: "worksheet-title" },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(worksheet.title) +
                                              "\n                                    "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "tags" },
                                    _vm._l(worksheet.exercisesTags, function(
                                      tag,
                                      i
                                    ) {
                                      return _c(
                                        "div",
                                        { key: i, staticClass: "tag-chip" },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(tag) +
                                              "\n                                    "
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  ),
                                  _vm._v(" "),
                                  _c("TagPartOfBody", {
                                    attrs: { partOfBody: worksheet.partOfBody }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "worksheet-content" }, [
                                _c("div", [
                                  _c(
                                    "div",
                                    { staticClass: "worksheet-details" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "\n                                                worksheet-exercises-count\n                                            "
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "kiv-exercise icon-7"
                                          }),
                                          _vm._v(" "),
                                          _c("span", { staticClass: "b" }, [
                                            _vm._v(
                                              _vm._s(worksheet.exercises.length)
                                            )
                                          ]),
                                          _vm._v(
                                            "\n                                            exercice"
                                          ),
                                          worksheet.exercises.length > 1
                                            ? _c("span", [_vm._v("s")])
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "worksheet-timing" },
                                        [
                                          _c("i", {
                                            staticClass: "kiv-calendar icon-10"
                                          }),
                                          _vm._v(" "),
                                          _c("span", { staticClass: "b" }, [
                                            _vm._v(
                                              _vm._s(worksheet.perDay) + "x"
                                            )
                                          ]),
                                          _vm._v(
                                            "\n                                            par jour -\n                                            "
                                          ),
                                          _c("span", { staticClass: "b" }, [
                                            _vm._v(
                                              _vm._s(worksheet.perWeek) + "x"
                                            )
                                          ]),
                                          _vm._v(
                                            "\n                                            par semaine\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "worksheet-period" },
                                        [
                                          _c("i", {
                                            staticClass: "kiv-clock icon-11"
                                          }),
                                          _vm._v(
                                            "\n                                            Période :\n                                            "
                                          ),
                                          _c("span", { staticClass: "b" }, [
                                            _vm._v(
                                              _vm._s(worksheet.duration) +
                                                "\n                                                semaine"
                                            ),
                                            worksheet.duration > 1
                                              ? _c("span", [_vm._v("s")])
                                              : _vm._e()
                                          ])
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "worksheet-details reduced"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "\n                                                worksheet-exercises-count\n                                            "
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "kiv-exercise icon-7"
                                          }),
                                          _vm._v(" "),
                                          _c("span", { staticClass: "b" }, [
                                            _vm._v(
                                              _vm._s(worksheet.exercises.length)
                                            )
                                          ]),
                                          _vm._v(
                                            "\n                                            ex.\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "worksheet-timing" },
                                        [
                                          _c("i", {
                                            staticClass: "kiv-calendar icon-10"
                                          }),
                                          _vm._v(" "),
                                          _c("span", { staticClass: "b" }, [
                                            _vm._v(
                                              _vm._s(worksheet.perDay) + "x"
                                            )
                                          ]),
                                          _vm._v(
                                            "\n                                            / jour -\n                                            "
                                          ),
                                          _c("span", { staticClass: "b" }, [
                                            _vm._v(
                                              _vm._s(worksheet.perWeek) + "x"
                                            )
                                          ]),
                                          _vm._v(
                                            "\n                                            / sem.\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "worksheet-period" },
                                        [
                                          _c("i", {
                                            staticClass: "kiv-clock icon-11"
                                          }),
                                          _vm._v(" "),
                                          _c("span", { staticClass: "b" }, [
                                            _vm._v(
                                              _vm._s(worksheet.duration) +
                                                "\n                                                sem."
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "btns-date" }, [
                                    _c(
                                      "div",
                                      { staticClass: "created-at-date" },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            "créé le\n                                                " +
                                              _vm._s(
                                                _vm.formatDate(
                                                  worksheet.createdAt
                                                )
                                              ) +
                                              "\n                                                "
                                          ),
                                          worksheet.doctor &&
                                          (worksheet.doctor.firstname ||
                                            worksheet.doctor.lastname)
                                            ? _c(
                                                "span",
                                                { staticClass: "creator" },
                                                [
                                                  _vm._v(
                                                    "\n                                                    par\n                                                    " +
                                                      _vm._s(
                                                        worksheet.doctor
                                                          .firstname
                                                      ) +
                                                      "\n                                                    " +
                                                      _vm._s(
                                                        worksheet.doctor
                                                          .lastname
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]),
                                        _vm._v(" "),
                                        worksheet.doctor
                                          ? _c(
                                              "vs-avatar",
                                              {
                                                staticClass: "user-avatar",
                                                attrs: {
                                                  size: "22",
                                                  circle: ""
                                                }
                                              },
                                              [
                                                _c("img", {
                                                  attrs: {
                                                    src: worksheet.doctor
                                                      .avatarUrl
                                                      ? worksheet.doctor
                                                          .avatarUrl
                                                      : "/img/avatar-default.svg",
                                                    alt:
                                                      "Avatar de " +
                                                      worksheet.doctor
                                                        .firstname +
                                                      " " +
                                                      worksheet.doctor.lastname
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
                                      { staticClass: "buttons" },
                                      [
                                        _c(
                                          "vs-button",
                                          {
                                            staticClass: "btn-action",
                                            attrs: { circle: "", floating: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.redirectToWorksheetPage(
                                                  worksheet.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-eye"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        worksheet.doctor.id === _vm.doctor.id
                                          ? _c(
                                              "vs-button",
                                              {
                                                staticClass: "btn-action",
                                                attrs: {
                                                  circle: "",
                                                  floating: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.redirectToEditPage(
                                                      worksheet.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fas fa-pen"
                                                })
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        worksheet.doctor.id === _vm.doctor.id
                                          ? _c(
                                              "vs-button",
                                              {
                                                staticClass: "btn-action",
                                                attrs: {
                                                  circle: "",
                                                  floating: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.removeWorksheet(
                                                      worksheet
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fas fa-trash"
                                                })
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "big-buttons" }, [
                                _c(
                                  "div",
                                  { staticClass: "btn-create-action" },
                                  [
                                    _c(
                                      "vs-button",
                                      {
                                        staticClass: "w-100",
                                        attrs: {
                                          disabled: _vm.$parent.prescriProcess,
                                          loading:
                                            _vm.btnLoadingCopyWorksheet ===
                                            worksheet.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.redirectToCreatePage(
                                              worksheet.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-plus-circle"
                                        }),
                                        _vm._v(
                                          "\n                                        Copier\n                                    "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "btn-prescription-action",
                                    class: {
                                      active: _vm.prescriProcess,
                                      selected:
                                        _vm.$parent
                                          .prescriProcessWorksheetSelected &&
                                        _vm.$parent
                                          .prescriProcessWorksheetSelected
                                          .id === worksheet.id
                                    }
                                  },
                                  [
                                    _c(
                                      "vs-button",
                                      {
                                        staticClass: "w-100",
                                        attrs: {
                                          loading:
                                            _vm.btnLoadingWorksheetPrescriProcessRedirect ===
                                            worksheet.id
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.prescriProcessWorksheetChoice(
                                              worksheet
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "transition",
                                          { attrs: { name: "fade" } },
                                          [
                                            (!_vm.prescriProcess &&
                                              !_vm.$parent
                                                .prescriProcessWorksheetSelected) ||
                                            (_vm.$parent
                                              .prescriProcessWorksheetSelected &&
                                              _vm.$parent
                                                .prescriProcessWorksheetSelected
                                                .id != worksheet.id)
                                              ? _c("span", [
                                                  _c("i", {
                                                    staticClass:
                                                      "\n                                                        fas\n                                                        fa-folder-plus\n                                                    "
                                                  }),
                                                  _vm._v("Prescrire")
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.prescriProcess &&
                                            !_vm.$parent
                                              .prescriProcessWorksheetSelected
                                              ? _c("span", [
                                                  _c("i", {
                                                    staticClass:
                                                      "\n                                                        fas\n                                                        fa-folder-plus\n                                                    "
                                                  }),
                                                  _vm._v("Sélectionner")
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.$parent
                                              .prescriProcessWorksheetSelected &&
                                            _vm.$parent
                                              .prescriProcessWorksheetSelected
                                              .id === worksheet.id
                                              ? _c("span", [
                                                  _c("i", {
                                                    staticClass:
                                                      "\n                                                        fas\n                                                        fa-check-circle\n                                                    "
                                                  }),
                                                  _vm._v("Sélectionné")
                                                ])
                                              : _vm._e()
                                          ]
                                        )
                                      ],
                                      1
                                    )
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
                    !_vm.loadingAllWorksheets &&
                    !_vm.getWorksheetTemplates.length &&
                    !_vm.search &&
                    !_vm.selectedTags.length
                      ? _c("div", { staticClass: "not-found" }, [
                          _c("p", [
                            _c("i", { staticClass: "fas fa-folder-minus" }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Vous n'avez pas de fiche")])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.loadingAllWorksheets &&
                    !_vm.getWorksheetTemplates.length &&
                    (_vm.search || _vm.selectedTags.length)
                      ? _c("div", { staticClass: "not-found" }, [
                          _c("p", [
                            _c("i", { staticClass: "fas fa-folder-minus" }),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                "Aucune fiche n'a été trouvée avec\n                                "
                              ),
                              _vm.search
                                ? _c("span", [
                                    _vm._v('"'),
                                    _c("strong", [_vm._v(_vm._s(_vm.search))]),
                                    _vm._v('"')
                                  ])
                                : _vm._e(),
                              _vm.search && _vm.selectedTags.length
                                ? _c("span", { staticClass: "et" }, [
                                    _vm._v("et")
                                  ])
                                : _vm._e(),
                              _vm.selectedTags.length
                                ? _c(
                                    "span",
                                    { staticClass: "tags" },
                                    _vm._l(_vm.selectedTags, function(tag, i) {
                                      return _c(
                                        "div",
                                        { key: i, staticClass: "tag-chip" },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(tag) +
                                              "\n                                    "
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e()
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.loadingAllWorksheets
                      ? _c("div", [
                          _c("div", { staticClass: "loading loading-block" }, [
                            _c(
                              "div",
                              { staticClass: "worksheet-header w-85" },
                              [
                                _c("div", {
                                  staticClass: "loading worksheet-title w-65"
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading part-of-body"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-progress-line"
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "worksheet-content" }, [
                              _c("div", { staticClass: "worksheet-details" }, [
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-exercises-count\n                                            w-45\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-timing\n                                            w-25\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-period\n                                            w-15\n                                        "
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "loading loading-block" }, [
                            _c(
                              "div",
                              { staticClass: "worksheet-header w-85" },
                              [
                                _c("div", {
                                  staticClass: "loading worksheet-title w-45"
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading part-of-body"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-progress-line"
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "worksheet-content" }, [
                              _c("div", { staticClass: "worksheet-details" }, [
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-exercises-count\n                                            w-45\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-timing\n                                            w-25\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-period\n                                            w-15\n                                        "
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "loading loading-block" }, [
                            _c(
                              "div",
                              { staticClass: "worksheet-header w-85" },
                              [
                                _c("div", {
                                  staticClass: "loading worksheet-title w-55"
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading part-of-body"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-progress-line"
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "worksheet-content" }, [
                              _c("div", { staticClass: "worksheet-details" }, [
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-exercises-count\n                                            w-45\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-timing\n                                            w-25\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-period\n                                            w-15\n                                        "
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "loading loading-block" }, [
                            _c(
                              "div",
                              { staticClass: "worksheet-header w-85" },
                              [
                                _c("div", {
                                  staticClass: "loading worksheet-title w-45"
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading part-of-body"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-progress-line"
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "worksheet-content" }, [
                              _c("div", { staticClass: "worksheet-details" }, [
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-exercises-count\n                                            w-45\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-timing\n                                            w-25\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-period\n                                            w-15\n                                        "
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "loading loading-block" }, [
                            _c(
                              "div",
                              { staticClass: "worksheet-header w-85" },
                              [
                                _c("div", {
                                  staticClass: "loading worksheet-title w-45"
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading part-of-body"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-progress-line"
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "worksheet-content" }, [
                              _c("div", { staticClass: "worksheet-details" }, [
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-exercises-count\n                                            w-45\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-timing\n                                            w-25\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-period\n                                            w-15\n                                        "
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "loading loading-block" }, [
                            _c(
                              "div",
                              { staticClass: "worksheet-header w-85" },
                              [
                                _c("div", {
                                  staticClass: "loading worksheet-title w-45"
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading part-of-body"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-progress-line"
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "worksheet-content" }, [
                              _c("div", { staticClass: "worksheet-details" }, [
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-exercises-count\n                                            w-45\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-timing\n                                            w-25\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-period\n                                            w-15\n                                        "
                                })
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "loading loading-block" }, [
                            _c(
                              "div",
                              { staticClass: "worksheet-header w-85" },
                              [
                                _c("div", {
                                  staticClass: "loading worksheet-title w-45"
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "loading part-of-body"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "loading worksheet-progress-line"
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "worksheet-content" }, [
                              _c("div", { staticClass: "worksheet-details" }, [
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-exercises-count\n                                            w-45\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-timing\n                                            w-25\n                                        "
                                }),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass:
                                    "\n                                            loading\n                                            worksheet-period\n                                            w-15\n                                        "
                                })
                              ])
                            ])
                          ])
                        ])
                      : _vm._e()
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.countWorksheetTemplates > _vm.max
                ? _c(
                    "div",
                    { staticClass: "pagination" },
                    [
                      _c("vs-pagination", {
                        attrs: {
                          "buttons-dotted": "",
                          length: _vm.getLength(
                            _vm.getSearch(_vm.worksheetTemplates, _vm.search),
                            _vm.max
                          )
                        },
                        model: {
                          value: _vm.page,
                          callback: function($$v) {
                            _vm.page = $$v
                          },
                          expression: "page"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "count-page" }, [
                        _vm._v("\n                    Page : "),
                        _c("b", [_vm._v(_vm._s(_vm.page))])
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          model: {
            value: _vm.modalConfirmRemoveWorksheet,
            callback: function($$v) {
              _vm.modalConfirmRemoveWorksheet = $$v
            },
            expression: "modalConfirmRemoveWorksheet"
          }
        },
        [
          _c("p", { staticClass: "modal-confirm-text" }, [
            _vm._v("Confirmer la suppression de")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-confirm-detail remove-item" }, [
            _c("div", { staticClass: "modal-confirm-icon remove-item" }, [
              _c("i", { staticClass: "fas fa-trash" })
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.removeWorksheetDetails.title) +
                    "\n                "
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-confirm-buttons" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "secondary",
                  on: {
                    click: function($event) {
                      _vm.modalConfirmRemoveWorksheet = false
                    }
                  }
                },
                [_vm._v("\n                Annuler\n            ")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  class: {
                    disabled: _vm.btnLoadingValidRemoveWorksheet
                  },
                  attrs: { loading: _vm.btnLoadingValidRemoveWorksheet },
                  on: { click: _vm.validRemoveWorksheet }
                },
                [_vm._v("\n                Confirmer\n            ")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_c("span", [_vm._v("Mes prescriptions")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_c("span", [_vm._v("Mes fiches")])])
  }
]
render._withStripped = true



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-38d47d","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_modules_we-9f7dbb","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_s-f64eb6","assets_vue_services_function_js-node_modules_moment_locale_sync_recursive_","assets_vue_components_BtnChartWorksheetPartOfBody_vue-assets_vue_components_TagPartOfBody_vue-72399a"], function() { return __webpack_exec__("./assets/vue/doctor/dashboard-page.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdG9yLWRhc2hib2FyZC1wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBQ0FBLCtDQUFBLENBQVFHLGlEQUFSLEVBQWtCRCw4Q0FBbEIsR0FFQTs7QUFDQTtBQUVBLElBQUlGLDJDQUFKLENBQVE7QUFDSk0sRUFBQUEsTUFBTSxFQUFFLGdCQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDTiwwREFBRCxDQUFMO0FBQUE7QUFETCxDQUFSLEVBRUdPLE1BRkgsQ0FFVSxNQUZWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0Esa0hBREE7QUFFQSwwR0FGQTtBQUdBLGdHQUhBO0FBSUE7QUFKQSxHQURBO0FBT0EsTUFQQSxrQkFPQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBLG9DQUhBO0FBSUEsdUNBSkE7QUFLQSxrQ0FMQTtBQU1BLDZCQU5BO0FBT0EsK0JBUEE7QUFRQSxrQ0FSQTtBQVNBLGtDQVRBO0FBVUEsb0NBVkE7QUFXQSxpQ0FYQTtBQVlBLG9DQVpBO0FBYUEsdUJBYkE7QUFjQSwwQkFkQTtBQWVBLDJCQWZBO0FBZ0JBLGtCQWhCQTtBQWlCQSwyQkFqQkE7QUFrQkEsa0NBbEJBO0FBbUJBLHlDQW5CQTtBQW9CQSxvQ0FwQkE7QUFxQkEsMkNBckJBO0FBc0JBLG1EQXRCQTtBQXVCQTtBQXZCQTtBQXlCQSxHQWpDQTtBQWtDQTtBQUNBLHlCQURBLG1DQUNBO0FBQ0Esa0NBQ0E7QUFBQTtBQUFBLFFBREE7QUFHQSxLQUxBO0FBTUEsMEJBTkEsb0NBTUE7QUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpUkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSw2QkFGQTtBQUdBLGlDQUhBO0FBSUEsNEJBSkE7QUFLQSwyQkFMQTtBQU1BLHFEQU5BO0FBT0E7QUFQQSxHQURBO0FBVUE7QUFDQSx5RkFEQTtBQUVBO0FBRkEsR0FWQTtBQWNBLE1BZEEsa0JBY0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsZ0JBRkE7QUFHQSxhQUhBO0FBSUEsWUFK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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBc0M7QUFDNUU7QUFDQTtBQUNBLGdDQUFnQyxzQ0FBc0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0Esd0NBQXdDLGtDQUFrQztBQUMxRSwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBc0M7QUFDNUU7QUFDQTtBQUNBLGdDQUFnQyxzQ0FBc0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0Esd0NBQXdDLGtDQUFrQztBQUMxRSwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBc0M7QUFDNUU7QUFDQTtBQUNBLGdDQUFnQyxzQ0FBc0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0Esd0NBQXdDLGtDQUFrQztBQUMxRSwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBc0M7QUFDNUU7QUFDQTtBQUNBLGdDQUFnQyxzQ0FBc0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0Esd0NBQXdDLGtDQUFrQztBQUMxRSwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBc0M7QUFDNUU7QUFDQTtBQUNBLGdDQUFnQyxzQ0FBc0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0Esd0NBQXdDLGtDQUFrQztBQUMxRSwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBc0M7QUFDNUU7QUFDQTtBQUNBLGdDQUFnQyxzQ0FBc0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0Esd0NBQXdDLGtDQUFrQztBQUMxRSwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBc0M7QUFDNUU7QUFDQTtBQUNBLGdDQUFnQyxzQ0FBc0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0Esd0NBQXdDLGtDQUFrQztBQUMxRSwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esa0NBQWtDLDJCQUEyQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFpRDtBQUN2RSx3QkFBd0IsK0NBQStDO0FBQ3ZFLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzQ0FBc0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQiwyQkFBMkIsNkNBQTZDO0FBQ3hFLHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvZGFzaGJvYXJkLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2RvY3Rvci9EYXNoYm9hcmRQYWdlL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlQYXRpZW50cy52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlQYXRpZW50cy9QYXRpZW50QWRkLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeVByZXNjcmlwdGlvbnMudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2RvY3Rvci9EYXNoYm9hcmRQYWdlL015V29ya3NoZWV0VGVtcGxhdGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UudnVlPzQ1ZmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlPzIyOTIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeVBhdGllbnRzLnZ1ZT82NGY3Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlQYXRpZW50cy9QYXRpZW50QWRkLnZ1ZT9kMzA1Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlQcmVzY3JpcHRpb25zLnZ1ZT85YzNkIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlXb3Jrc2hlZXRUZW1wbGF0ZXMudnVlPzYwYmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlQYXRpZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeVBhdGllbnRzL1BhdGllbnRBZGQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlQcmVzY3JpcHRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9EYXNoYm9hcmRQYWdlL015V29ya3NoZWV0VGVtcGxhdGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9EYXNoYm9hcmRQYWdlLnZ1ZT8zOWNiIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT80M2U4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlQYXRpZW50cy52dWU/ZDhmNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9EYXNoYm9hcmRQYWdlL015UGF0aWVudHMvUGF0aWVudEFkZC52dWU/ZTFmOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9EYXNoYm9hcmRQYWdlL015UHJlc2NyaXB0aW9ucy52dWU/YjVmZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9EYXNoYm9hcmRQYWdlL015V29ya3NoZWV0VGVtcGxhdGVzLnZ1ZT9kNDM4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UudnVlPzhiOTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlP2I3M2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeVBhdGllbnRzLnZ1ZT9mNjYwIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlQYXRpZW50cy9QYXRpZW50QWRkLnZ1ZT9hMzAyIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlQcmVzY3JpcHRpb25zLnZ1ZT8wYjlkIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlXb3Jrc2hlZXRUZW1wbGF0ZXMudnVlP2RjOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgRGFzaGJvYXJkUGFnZSBmcm9tICcuL0Rhc2hib2FyZFBhZ2UudnVlJ1xyXG5cclxuLy8gQXhpb3NcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgVnVlQXhpb3MgZnJvbSAndnVlLWF4aW9zJ1xyXG5WdWUudXNlKFZ1ZUF4aW9zLCBheGlvcylcclxuXHJcbi8vIFZ1ZXNheCAoVVggbGliKVxyXG5pbXBvcnQgVnVlc2F4IGZyb20gJ3Z1ZXNheCdcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgcmVuZGVyOiBoID0+IGgoRGFzaGJvYXJkUGFnZSlcclxufSkuJG1vdW50KCcjdnVlJylcclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZGFzaGJvYXJkXCIgY2xhc3M9XCJkYi1kb2N0b3JcIj5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIXByZXNjcmlQcm9jZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPkJpZW52ZW51ZSBzdXIgdm90cmUgZGFzaGJvYXJkICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvaGFuZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIGQndW5lIG1haW4gcXVpIGZhaXQgJ2NvdWNvdSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gPC9pXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXNjcmktcHJvY2Vzc1wiIHYtaWY9XCJwcmVzY3JpUHJvY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DcsOpYXRpb24gZCd1bmUgcHJlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzdG9wUHJlc2NyaVByb2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbm51bGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPG1haW5cclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAnd2l0aC1ub3RpZnMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZG9jdG9yLmNpdHkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWRvY3Rvci5nZW5kZXIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWRvY3Rvci5maXJzdG5hbWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWRvY3Rvci5sYXN0bmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZG9jdG9yLmlzVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE15RGFzaGJvYXJkTm90aWZpY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIDpkb2N0b3I9XCJkb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibW9iaWxlLXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15UHJlc2NyaXB0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiYWN0aXZlVGFiID09PSAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmRvY3Rvcj1cImRvY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpkb2N0b3JQcmVzY3JpcHRpb25zPVwiZ2V0RG9jdG9yUHJlc2NyaXB0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjc3JmVG9rZW5SZW1vdmVXb3Jrc2hlZXQ9XCJjc3JmVG9rZW5SZW1vdmVXb3Jrc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZ0RvY3RvcldvcmtzaGVldHM9XCJsb2FkaW5nRG9jdG9yV29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBwcmVzY3JpUHJvY2Vzcz1cInN0YXJ0UHJlc2NyaVByb2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15V29ya3NoZWV0VGVtcGxhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJhY3RpdmVUYWIgPT09IDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZG9jdG9yPVwiZG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOndvcmtzaGVldFRlbXBsYXRlcz1cImdldFdvcmtzaGVldFRlbXBsYXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0YWdzRnJvbUV4ZXJjaXNlcz1cInRhZ3NGcm9tRXhlcmNpc2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNzcmZUb2tlblJlbW92ZVdvcmtzaGVldD1cImNzcmZUb2tlblJlbW92ZVdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nQWxsV29ya3NoZWV0cz1cImxvYWRpbmdBbGxXb3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnByZXNjcmlQcm9jZXNzPVwicHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6YnRuTG9hZGluZ1dvcmtzaGVldFByZXNjcmlQcm9jZXNzUmVkaXJlY3Q9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkxvYWRpbmdXb3Jrc2hlZXRQcmVzY3JpUHJvY2Vzc1JlZGlyZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBwcmVzY3JpUHJvY2Vzc1dvcmtzaGVldENob2ljZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRDaG9pY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeURhc2hib2FyZE5vdGlmaWNhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmRvY3Rvcj1cImRvY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVza3RvcC12aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeVBhdGllbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpkb2N0b3I9XCJkb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y3NyZlRva2VuQWRkUGF0aWVudD1cImNzcmZUb2tlbkFkZFBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y3NyZlRva2VuUmVtb3ZlUGF0aWVudD1cImNzcmZUb2tlblJlbW92ZVBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y3NyZlRva2VuQ3JlYXRlUGF0aWVudD1cImNzcmZUb2tlbkNyZWF0ZVBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cHJlc2NyaVByb2Nlc3M9XCJwcmVzY3JpUHJvY2Vzc1BhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6YnRuTG9hZGluZ1BhdGllbnRQcmVzY3JpUHJvY2Vzc1JlZGlyZWN0PVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5Mb2FkaW5nUGF0aWVudFByZXNjcmlQcm9jZXNzUmVkaXJlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHByZXNjcmlQcm9jZXNzUGF0aWVudENob2ljZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc2NyaVByb2Nlc3NQYXRpZW50Q2hvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgZiBmcm9tIFwiLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IE15RGFzaGJvYXJkTm90aWZpY2F0aW9ucyBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWVcIjtcclxuaW1wb3J0IE15V29ya3NoZWV0VGVtcGxhdGVzIGZyb20gXCIuL0Rhc2hib2FyZFBhZ2UvTXlXb3Jrc2hlZXRUZW1wbGF0ZXMudnVlXCI7XHJcbmltcG9ydCBNeVByZXNjcmlwdGlvbnMgZnJvbSBcIi4vRGFzaGJvYXJkUGFnZS9NeVByZXNjcmlwdGlvbnMudnVlXCI7XHJcbmltcG9ydCBNeVBhdGllbnRzIGZyb20gXCIuL0Rhc2hib2FyZFBhZ2UvTXlQYXRpZW50cy52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBNeURhc2hib2FyZE5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgTXlXb3Jrc2hlZXRUZW1wbGF0ZXMsXHJcbiAgICAgICAgTXlQcmVzY3JpcHRpb25zLFxyXG4gICAgICAgIE15UGF0aWVudHMsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkb2N0b3I6IG51bGwsXHJcbiAgICAgICAgICAgIC8vIGNzcmZUb2tlbkFjY2VwdERvY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgbXlEQk5vdGlmaWNhdGlvbnNDb250ZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBteVdvcmtzaGVldFRlbXBsYXRlc0NvbnRlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIG15UHJlc2NyaXB0aW9uc0NvbnRlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIG15UGF0aWVudHNDb250ZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5BZGRQYXRpZW50OiBudWxsLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5SZW1vdmVQYXRpZW50OiBudWxsLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5DcmVhdGVQYXRpZW50OiBudWxsLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5SZW1vdmVXb3Jrc2hlZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmdBbGxXb3Jrc2hlZXRzOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGluZ0RvY3RvcldvcmtzaGVldHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbGxXb3Jrc2hlZXRzOiBbXSxcclxuICAgICAgICAgICAgZG9jdG9yV29ya3NoZWV0czogW10sXHJcbiAgICAgICAgICAgIHRhZ3NGcm9tRXhlcmNpc2VzOiBbXSxcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiAxLFxyXG4gICAgICAgICAgICBwcmVzY3JpUHJvY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIHByZXNjcmlQcm9jZXNzUGF0aWVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkOiBudWxsLFxyXG4gICAgICAgICAgICBwcmVzY3JpUHJvY2Vzc1dvcmtzaGVldDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdQYXRpZW50UHJlc2NyaVByb2Nlc3NSZWRpcmVjdDogbnVsbCxcclxuICAgICAgICAgICAgYnRuTG9hZGluZ1dvcmtzaGVldFByZXNjcmlQcm9jZXNzUmVkaXJlY3Q6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGdldFdvcmtzaGVldFRlbXBsYXRlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5Q3JlYXRlZEF0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxXb3Jrc2hlZXRzLmZpbHRlcigodykgPT4gIXcucGF0aWVudClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldERvY3RvclByZXNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRCeUNyZWF0ZWRBdChcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9jdG9yV29ya3NoZWV0cy5maWx0ZXIoKHcpID0+IHcucGF0aWVudClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzZXRQcmVzY3JpUHJvY2Vzc1dvcmtzaGVldENob2ljZSh3b3Jrc2hlZXQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnByZXNjcmlQcm9jZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UHJlc2NyaVByb2Nlc3MoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkID0gd29ya3NoZWV0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJlc2NyaVByb2Nlc3NQYXRpZW50U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gXCJteS1wYXRpZW50c1wiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeU9mZnNldCA9IC0xMDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgK1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCArXHJcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IHksIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc2NyaVByb2Nlc3NQYXRpZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWRJZCA9IHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZC5pZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1BhdGllbnRQcmVzY3JpUHJvY2Vzc1JlZGlyZWN0ID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkLmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nV29ya3NoZWV0UHJlc2NyaVByb2Nlc3NSZWRpcmVjdCA9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZElkO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9maWNoZS9jcmVhdGlvbi8ke3ByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWRJZH0vJHt0aGlzLnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkLmlkfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFByZXNjcmlQcm9jZXNzUGF0aWVudENob2ljZShwYXRpZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wcmVzY3JpUHJvY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFByZXNjcmlQcm9jZXNzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJlc2NyaVByb2Nlc3NQYXRpZW50U2VsZWN0ZWQgPSBwYXRpZW50O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmVzY3JpUHJvY2Vzc1BhdGllbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gXCJteS13b3Jrc2hlZXRzXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5T2Zmc2V0ID0gLTEwMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID1cclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ICtcclxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0O1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogeSwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkSWQgPSB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWQuaWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZC5pZFxyXG4gICAgICAgICAgICAgICAgICAgIDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdQYXRpZW50UHJlc2NyaVByb2Nlc3NSZWRpcmVjdCA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzY3JpUHJvY2Vzc1BhdGllbnRTZWxlY3RlZC5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1dvcmtzaGVldFByZXNjcmlQcm9jZXNzUmVkaXJlY3QgPVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWRJZDtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vZmljaGUvY3JlYXRpb24vJHtwcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkSWR9LyR7dGhpcy5wcmVzY3JpUHJvY2Vzc1BhdGllbnRTZWxlY3RlZC5pZH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydFByZXNjcmlQcm9jZXNzKCkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXNjcmlQcm9jZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubXlXb3Jrc2hlZXRUZW1wbGF0ZXNDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5teVBhdGllbnRzQ29udGVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiID0gMjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0b3BQcmVzY3JpUHJvY2VzcygpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVzY3JpUHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnByZXNjcmlQcm9jZXNzV29ya3NoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJlc2NyaVByb2Nlc3NQYXRpZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucHJlc2NyaVByb2Nlc3NQYXRpZW50U2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdQYXRpZW50UHJlc2NyaVByb2Nlc3NSZWRpcmVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1dvcmtzaGVldFByZXNjcmlQcm9jZXNzUmVkaXJlY3QgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IDE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzb3J0QnlDcmVhdGVkQXQoYXJyYXkpIHtcclxuICAgICAgICAgICAgYXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGIuY3JlYXRlZEF0KSAtIG5ldyBEYXRlKGEuY3JlYXRlZEF0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUmVzaXplKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1NzYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlXb3Jrc2hlZXRUZW1wbGF0ZXNDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlQcmVzY3JpcHRpb25zQ29udGVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15UGF0aWVudHNDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICBWdWUucHJvdG90eXBlLiR2cyA9IHRoaXMuJHZzO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZ1enp5LWJhbGxzXCIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZ1ZURhdGFcIikuaW5uZXJIVE1MKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb2N0b3IgPSBkYXRhLmRvY3RvcjtcclxuICAgICAgICB0aGlzLmNzcmZUb2tlbkFkZFBhdGllbnQgPSBkYXRhLmNzcmZUb2tlbkFkZFBhdGllbnQ7XHJcbiAgICAgICAgdGhpcy5jc3JmVG9rZW5SZW1vdmVQYXRpZW50ID0gZGF0YS5jc3JmVG9rZW5SZW1vdmVQYXRpZW50O1xyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuQ3JlYXRlUGF0aWVudCA9IGRhdGEuY3NyZlRva2VuQ3JlYXRlUGF0aWVudDtcclxuICAgICAgICB0aGlzLmNzcmZUb2tlblJlbW92ZVdvcmtzaGVldCA9IGRhdGEuY3NyZlRva2VuUmVtb3ZlV29ya3NoZWV0O1xyXG5cclxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgICAgICAgY29uc3QgdHJpZ2dlclRhYiA9IHVybFBhcmFtcy5nZXQoXCJ0YWJcIik7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJUYWIgPT09IFwid3NcIikge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdEb2N0b3JXb3Jrc2hlZXRzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAuZ2V0KGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2dldC93b3Jrc2hlZXRzYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3RvcldvcmtzaGVldHMgPSByZXNwb25zZS5kYXRhLm1hcCgod29ya3NoZWV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ud29ya3NoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXRUb3RhbFByb2dyZXNzaW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V29ya3NoZWV0U2Vzc2lvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxXb3Jrc2hlZXRTZXNzaW9uczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxDb21wbGV0ZWRXb3Jrc2hlZXRTZXNzaW9uczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdEb2N0b3JXb3Jrc2hlZXRzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nQWxsV29ya3NoZWV0cyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgLmdldChgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9nZXQvYWxsL3dvcmtzaGVldHNgKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsV29ya3NoZWV0cyA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50YWdzRnJvbUV4ZXJjaXNlcyA9IGYuZ2VuZXJhdGVUYWdzRnJvbUV4ZXJjaXNlcyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFdvcmtzaGVldHNcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nQWxsV29ya3NoZWV0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiNkYXNoYm9hcmQuZGItZG9jdG9yIHtcclxuICAgIGgxIHtcclxuICAgICAgICBzcGFuLnByZXNjcmktcHJvY2VzcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAgIC52cy1idXR0b24gLnZzLWJ1dHRvbl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4zcmVtIDMuOHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgIFwibXl3b3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgXCJhc2lkZVwiO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibXl3b3Jrc2hlZXRzICBteXdvcmtzaGVldHMgYXNpZGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYud2l0aC1ub3RpZnMge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgXCJteWRhc2hib2FyZG5vdGlmXCJcclxuICAgICAgICAgICAgICAgIFwibXl3b3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgIFwiYXNpZGVcIjtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibXl3b3Jrc2hlZXRzICBteXdvcmtzaGVldHMgYXNpZGVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2t0b3AtdmlldyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vYmlsZS12aWV3IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgLmRlc2t0b3AtdmlldyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2JpbGUtdmlldyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvblxyXG4gICAgICAgIGlkPVwiZGFzaGJvYXJkLW5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICAgIGNsYXNzPVwia2l2LWJsb2NrXCJcclxuICAgICAgICA6Y2xhc3M9XCJ7IHJlZHVjZWQ6ICEkcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudCB9XCJcclxuICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICFkb2N0b3IuY2l0eSB8fFxyXG4gICAgICAgICAgICAhZG9jdG9yLmdlbmRlciB8fFxyXG4gICAgICAgICAgICAhZG9jdG9yLmZpcnN0bmFtZSB8fFxyXG4gICAgICAgICAgICAhZG9jdG9yLmxhc3RuYW1lIHx8XHJcbiAgICAgICAgICAgICFkb2N0b3IuaXNWZXJpZmllZFxyXG4gICAgICAgIFwiXHJcbiAgICA+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1jb250ZW50XCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAkcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgISRwYXJlbnQubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50XHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMj5Ob3RpZmljYXRpb25zPC9oMj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHYtaWY9XCIkcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbnMtbGlzdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmcgJiYgIWRvY3Rvci5pc1ZlcmlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbnMtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJub3RpZmljYXRpb24tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVsOpcmlmaWVyIHZvdHJlIGFkcmVzc2UgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbi1hY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZDogYWN0aW9uSW5Qcm9ncmVzcyB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFjdGlvbi1saW5rIHZlcmlmLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVzZW5kVmVyaWZFbWFpbCgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZW52ZWxvcGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZW52b3llciBsaWVuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICghZG9jdG9yLmNpdHkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkb2N0b3IuZ2VuZGVyIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZG9jdG9yLmZpcnN0bmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRvY3Rvci5sYXN0bmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90aWZpY2F0aW9ucy1pdGVtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vdGlmaWNhdGlvbi1sYWJlbFwiPkNvbXBsw6l0ZXIgdm90cmUgcHJvZmlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb24tYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFjdGlvbi1saW5rXCIgOmhyZWY9XCJgL3BhcmFtZXRyZXNgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1wZW4gaWNvbi00XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29tcGzDqXRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctYmxvY2sgbm90aWZpY2F0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibG9hZGluZyB3LTYwIG5vdGlmaWNhdGlvbi1sYWJlbFwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgdy0yNSBub3RpZmljYXRpb24tYWN0aW9uc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWJsb2NrIG5vdGlmaWNhdGlvbnMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxvYWRpbmcgdy0zMCBub3RpZmljYXRpb24tbGFiZWxcIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHctMzAgbm90aWZpY2F0aW9uLWFjdGlvbnNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgZiBmcm9tIFwiLi4vLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWN0aW9uSW5Qcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBkb2N0b3I6IE9iamVjdCxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmVzZW5kVmVyaWZFbWFpbCgpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25JblByb2dyZXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vcmVzZW5kL3ZlcmlmeS1lbWFpbGApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkUtbWFpbCBkZSB2w6lyaWZpY2F0aW9uIGVudm95w6lcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbiNkYXNoYm9hcmQtbm90aWZpY2F0aW9ucyB7XHJcbiAgICBncmlkLWFyZWE6IG15ZGFzaGJvYXJkbm90aWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDY1MHB4KSB7XHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbnMtbGlzdCAubm90aWZpY2F0aW9ucy1pdGVtIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvblxyXG4gICAgICAgIGlkPVwibXktcGF0aWVudHNcIlxyXG4gICAgICAgIGNsYXNzPVwia2l2LWJsb2NrXCJcclxuICAgICAgICA6Y2xhc3M9XCJ7IHJlZHVjZWQ6ICEkcGFyZW50Lm15UGF0aWVudHNDb250ZW50IH1cIlxyXG4gICAgPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtY29udGVudFwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cIiRwYXJlbnQubXlQYXRpZW50c0NvbnRlbnQgPSAhJHBhcmVudC5teVBhdGllbnRzQ29udGVudFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMj5NZXMgUGF0aWVudHM8L2gyPlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInByZXNjcmlQcm9jZXNzXCIgY2xhc3M9XCJwcmVzY3JpLXByb2Nlc3MtZGlhbG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0ZXAtbnVtXCJcclxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJmYXMgZmEtZm9sZGVyLXBsdXNcIj48L2k+RXRhcGVcclxuICAgICAgICAgICAgICAgICAgICB7eyAhJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkID8gMSA6IDIgfX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwPlZldWlsbGV6IFPDqWxlY3Rpb25uZXIgdW4gcGF0aWVudDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJoZWlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHBhcmVudC5teVBhdGllbnRzQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW1hcnktYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInBhZ2UgPSAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiRmlsdHJlciBwYXIgbm9tIG91IGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXByaW1hcnktYWN0aW9uIGFkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLXRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJtb2RhbEFkZFBhdGllbnQgPSB0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tYWN0aW9uIGFkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBsdXMtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjN4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGx1cy1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWpvdXRlciB1biBwYXRpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1kaWFsb2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDUwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGFsQWRkUGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cIiRwYXJlbnQubG9hZGluZ0FsbFBhdGllbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhdGllbnRBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZG9jdG9yPVwiZG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWxsUGF0aWVudHM9XCJhbGxQYXRpZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmdBbGxQYXRpZW50cz1cImxvYWRpbmdBbGxQYXRpZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNzcmZUb2tlbkFkZFBhdGllbnQ9XCJjc3JmVG9rZW5BZGRQYXRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y3NyZlRva2VuQ3JlYXRlUGF0aWVudD1cImNzcmZUb2tlbkNyZWF0ZVBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBhZGRQYXRpZW50PVwiYWRkUGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsb3NlTW9kYWxBZGRQYXRpZW50PVwibW9kYWxBZGRQYXRpZW50ID0gZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1kaWFsb2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXRpZW50cy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRpbmdEb2N0b3JQYXRpZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwYXRpZW50LCBpKSBpbiBnZXREb2N0b3JQYXRpZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBhdGllbnQtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZW1vdmUtdXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlUGF0aWVudChwYXRpZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlci1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhdGllbnQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1hdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9QYXRpZW50RGFzaGJvYXJkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjYwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGF0aWVudC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImBBdmF0YXIgZGUgJHtwYXRpZW50LmZpcnN0bmFtZX0gJHtwYXRpZW50Lmxhc3RuYW1lfWBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhdGllbnQuYmlydGhkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZ2V0QWdlKHBhdGllbnQuYmlydGhkYXRlKSB9fSBhbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvUGF0aWVudERhc2hib2FyZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmZpcnN0bmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5sYXN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcGF0aWVudC5maXJzdG5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcGF0aWVudC5sYXN0bmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBhdGllbnQuZW1haWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvUGF0aWVudERhc2hib2FyZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcGF0aWVudC5lbWFpbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhdGllbnQud29ya3NoZWV0cy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJlc2NyaXB0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC53b3Jrc2hlZXRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2NyaXB0aW9uPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LndvcmtzaGVldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+czwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNjcmlwdGlvbnMtcGF0aWVudC1saXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQsIGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgaW4gcGF0aWVudC53b3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp3b3Jrc2hlZXQ9XCJ3b3Jrc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tcHJlc2NyaXB0aW9uLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJlc2NyaVByb2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFyZW50LnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NQYXRpZW50U2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkID09PSBwYXRpZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuTG9hZGluZ1BhdGllbnRQcmVzY3JpUHJvY2Vzc1JlZGlyZWN0ID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzY3JpUHJvY2Vzc1BhdGllbnRDaG9pY2UocGF0aWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXByZXNjcmlQcm9jZXNzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISRwYXJlbnQucHJlc2NyaVByb2Nlc3NQYXRpZW50U2VsZWN0ZWQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1BhdGllbnRTZWxlY3RlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pZCAhPSBwYXRpZW50LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFzIGZhLWZvbGRlci1wbHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UHJlc2NyaXJlPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNjcmlQcm9jZXNzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1BhdGllbnRTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFzIGZhLWZvbGRlci1wbHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U8OpbGVjdGlvbm5lcjwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFyZW50LnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkID09PSBwYXRpZW50LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U8OpbGVjdGlvbm7DqTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvdW50LWluZm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5pc1ZlcmlmaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi1hY3RpdmUtc3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc3RhdHVzXCI+QWN0aWY8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXBhdGllbnQuaXNWZXJpZmllZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24taW5hY3RpdmUtc3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc3RhdHVzXCI+SW5hY3RpZjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSA9PT0gcGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi13YWl0aW5nLXN0YXR1c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXN0YXR1c1wiPkF0dGVudGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhdGllbnQubGFzdExvZ2luQXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhc3QtbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGVybmnDqHJlIGNvbm5leGlvbiA6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXREYXRlKHBhdGllbnQubGFzdExvZ2luQXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdC1mb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nRG9jdG9yUGF0aWVudHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFnZXREb2N0b3JQYXRpZW50cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlci1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlZvdXMgbidhdmV6IHBhcyBkZSBwYXRpZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdC1mb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nRG9jdG9yUGF0aWVudHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFnZXREb2N0b3JQYXRpZW50cy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VyLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+QXVjdW4gcGF0aWVudCBuJ2Egw6l0w6kgdHJvdXbDqSBhdmVjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cIjxzdHJvbmc+e3sgc2VhcmNoIH19PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlwiPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ0RvY3RvclBhdGllbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGxvYWRpbmctYmxvY2sgcGF0aWVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhdGllbnQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGF2YXRhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBuYW1lIHctMzVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIG1haWwgdy00NVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBwcmVzY3JpcHRpb25zIHctMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBidG4tcHJlc2NyaXB0aW9uLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3VudC1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHN0YXR1cyB3LTM1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgbGFzdC1sb2dpbiB3LTQ1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGxvYWRpbmctYmxvY2sgcGF0aWVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhdGllbnQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGF2YXRhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBuYW1lIHctMzVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIG1haWwgdy00NVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBwcmVzY3JpcHRpb25zIHctMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBidG4tcHJlc2NyaXB0aW9uLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3VudC1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHN0YXR1cyB3LTM1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgbGFzdC1sb2dpbiB3LTQ1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGxvYWRpbmctYmxvY2sgcGF0aWVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhdGllbnQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGF2YXRhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBuYW1lIHctMzVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIG1haWwgdy00NVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBwcmVzY3JpcHRpb25zIHctMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBidG4tcHJlc2NyaXB0aW9uLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3VudC1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHN0YXR1cyB3LTM1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgbGFzdC1sb2dpbiB3LTQ1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGxvYWRpbmctYmxvY2sgcGF0aWVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhdGllbnQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGF2YXRhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBuYW1lIHctMzVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIG1haWwgdy00NVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBwcmVzY3JpcHRpb25zIHctMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBidG4tcHJlc2NyaXB0aW9uLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3VudC1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHN0YXR1cyB3LTM1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgbGFzdC1sb2dpbiB3LTQ1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGxvYWRpbmctYmxvY2sgcGF0aWVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhdGllbnQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGF2YXRhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBuYW1lIHctMzVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIG1haWwgdy00NVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBwcmVzY3JpcHRpb25zIHctMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBidG4tcHJlc2NyaXB0aW9uLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3VudC1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHN0YXR1cyB3LTM1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgbGFzdC1sb2dpbiB3LTQ1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGxvYWRpbmctYmxvY2sgcGF0aWVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhdGllbnQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGF2YXRhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBuYW1lIHctMzVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIG1haWwgdy00NVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBwcmVzY3JpcHRpb25zIHctMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBidG4tcHJlc2NyaXB0aW9uLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3VudC1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHN0YXR1cyB3LTM1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgbGFzdC1sb2dpbiB3LTQ1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uXCIgdi1pZj1cImRvY3RvclBhdGllbnRzLmxlbmd0aCA+IG1heFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1wYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy1kb3R0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGVuZ3RoKGdldFNlYXJjaChkb2N0b3JQYXRpZW50cywgc2VhcmNoKSwgbWF4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50LXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFnZSA6IDxiPnt7IHBhZ2UgfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDx2cy1kaWFsb2cgdi1tb2RlbD1cIm1vZGFsQ29uZmlybVJlbW92ZVBhdGllbnRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbC1jb25maXJtLXRleHRcIj5Db25maXJtZXIgbGEgc3VwcHJlc3Npb24gZGU8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29uZmlybS1kZXRhaWwgcmVtb3ZlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb25maXJtLWljb24gcmVtb3ZlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VyLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZ2V0VXNlck5hbWUocmVtb3ZlUGF0aWVudERldGFpbHMpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibW9kYWwtY29uZmlybS10ZXh0XCI+ZGUgdm90cmUgbGlzdGUuPC9wPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbmZpcm0tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJtb2RhbENvbmZpcm1SZW1vdmVQYXRpZW50ID0gZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFubnVsZXJcclxuICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkUmVtb3ZlUGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nVmFsaWRSZW1vdmVQYXRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBidG5Mb2FkaW5nVmFsaWRSZW1vdmVQYXRpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbmZpcm1lclxyXG4gICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdnMtZGlhbG9nPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGYgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCBCdG5DaGFydFdvcmtzaGVldFBhcnRPZkJvZHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5LnZ1ZVwiO1xyXG5pbXBvcnQgUGF0aWVudEFkZCBmcm9tIFwiLi9NeVBhdGllbnRzL1BhdGllbnRBZGQudnVlXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgeyBQbHVzSWNvbiB9IGZyb20gXCJ2dWUtZmVhdGhlci1pY29uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBkb2N0b3I6IE9iamVjdCxcclxuICAgICAgICBjc3JmVG9rZW5BZGRQYXRpZW50OiBTdHJpbmcsXHJcbiAgICAgICAgY3NyZlRva2VuUmVtb3ZlUGF0aWVudDogU3RyaW5nLFxyXG4gICAgICAgIGNzcmZUb2tlbkNyZWF0ZVBhdGllbnQ6IFN0cmluZyxcclxuICAgICAgICBwcmVzY3JpUHJvY2VzczogQm9vbGVhbixcclxuICAgICAgICBidG5Mb2FkaW5nUGF0aWVudFByZXNjcmlQcm9jZXNzUmVkaXJlY3Q6IE51bWJlcixcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgQnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5LFxyXG4gICAgICAgIFBhdGllbnRBZGQsXHJcbiAgICAgICAgUGx1c0ljb24sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgIG1heDogNSxcclxuICAgICAgICAgICAgZG9jdG9yUGF0aWVudHM6IFtdLFxyXG4gICAgICAgICAgICBhbGxQYXRpZW50czogW10sXHJcbiAgICAgICAgICAgIG1vZGFsQWRkUGF0aWVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmdEb2N0b3JQYXRpZW50czogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmdBbGxQYXRpZW50czogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vZGFsQ29uZmlybVJlbW92ZVBhdGllbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICByZW1vdmVQYXRpZW50RGV0YWlsczoge30sXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdWYWxpZFJlbW92ZVBhdGllbnQ6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXREb2N0b3JQYXRpZW50cygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydEJ5TGFzdExvZ2luKFxyXG4gICAgICAgICAgICAgICAgICAgIGYuZ2V0U2VhcmNoKHRoaXMuZG9jdG9yUGF0aWVudHMsIHRoaXMuc2VhcmNoLCBcImRvY3RvclwiKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSxcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRBbGxQYXRpZW50cygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsUGF0aWVudHM7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcHJlc2NyaVByb2Nlc3NQYXRpZW50Q2hvaWNlKHBhdGllbnQpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcInByZXNjcmlQcm9jZXNzUGF0aWVudENob2ljZVwiLCBwYXRpZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVBhdGllbnQocGF0aWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVBhdGllbnREZXRhaWxzID0gcGF0aWVudDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5tb2RhbENvbmZpcm1SZW1vdmVQYXRpZW50ID1cclxuICAgICAgICAgICAgICAgICF0aGlzLm1vZGFsQ29uZmlybVJlbW92ZVBhdGllbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRSZW1vdmVQYXRpZW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZFJlbW92ZVBhdGllbnQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgLnBvc3QoYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vcmVtb3ZlL3BhdGllbnRgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0aGlzLmNzcmZUb2tlblJlbW92ZVBhdGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudElkOiB0aGlzLnJlbW92ZVBhdGllbnREZXRhaWxzLmlkLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VwcHJlc3Npb24gZHUgcGF0aWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvY3RvclBhdGllbnRzLnNwbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb2N0b3JQYXRpZW50cy5pbmRleE9mKHRoaXMucmVtb3ZlUGF0aWVudERldGFpbHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbGxQYXRpZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0aWVudCA9IHRoaXMuYWxsUGF0aWVudHMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwKSA9PiBwLmlkID09PSB0aGlzLnJlbW92ZVBhdGllbnREZXRhaWxzLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZG9jdG9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVQYXRpZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbmZpcm1SZW1vdmVQYXRpZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFwiRXJyZXVyXCIsIGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVQYXRpZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbmZpcm1SZW1vdmVQYXRpZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZFBhdGllbnQocGF0aWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvY3RvclBhdGllbnRzLnB1c2gocGF0aWVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRBZ2UoYmlydGhkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdlbmVyYXRlQWdlRnJvbURhdGVPZkJpcnRoKGJpcnRoZGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtYXREYXRlKGRhdGV0aW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZXRpbWUpLmZvcm1hdChcIkREL01NL1lZWVlcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQYWdlKGRhdGEsIHBhZ2UsIG1heEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFBhZ2UoZGF0YSwgcGFnZSwgbWF4SXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TGVuZ3RoKGRhdGEsIG1heEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldExlbmd0aChkYXRhLCBtYXhJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTZWFyY2goZGF0YSwgZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFNlYXJjaChkYXRhLCBmaWx0ZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3RUb1BhdGllbnREYXNoYm9hcmQocGF0aWVudElkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS92b2lyL3BhdGllbnQvJHtwYXRpZW50SWR9YDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNvcnRCeUxhc3RMb2dpbihhcnJheSkge1xyXG4gICAgICAgICAgICBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5sYXN0TG9naW5BdCkgLSBuZXcgRGF0ZShhLmxhc3RMb2dpbkF0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNvcnRCeUNyZWF0ZWRBdChhcnJheSkge1xyXG4gICAgICAgICAgICBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5jcmVhdGVkQXQpIC0gbmV3IERhdGUoYS5jcmVhdGVkQXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VXNlck5hbWUodXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRVc2VyTmFtZSh1c2VyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nRG9jdG9yUGF0aWVudHMgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vZ2V0L3BhdGllbnRzYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3RvclBhdGllbnRzID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3RvclBhdGllbnRzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocC53b3Jrc2hlZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAud29ya3NoZWV0cyA9IHRoaXMuc29ydEJ5Q3JlYXRlZEF0KHAud29ya3NoZWV0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nRG9jdG9yUGF0aWVudHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdBbGxQYXRpZW50cyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgLmdldChgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9nZXQvYWxsL3BhdGllbnRzYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFBhdGllbnRzID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdBbGxQYXRpZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbiNteS1wYXRpZW50cyB7XHJcbiAgICAucHJpbWFyeS1hY3Rpb25zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYXRpZW50cy1saXN0IHtcclxuICAgICAgICAubG9hZGluZy1ibG9jayB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMi44cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRmY2ZhICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGF0aWVudC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudXNlci1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlwdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuLXByZXNjcmlwdGlvbi1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMC4zcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS43cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hY2NvdW50LWluZm9zIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWY5ZjggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5sYXN0LWxvZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhdGllbnQtYmxvY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmOGY0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNnJlbTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTByZW07XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMC42cyBlYXNlIDBzIGZvcndhcmRzIGZhZGVFbnRlcjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJlbW92ZS11c2VyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjdyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZjZmJlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkNmNmYmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjA1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5LWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LWRhcms7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wYXRpZW50LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTlweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjZyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0wLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHJlbSAwcmVtIDAuOHJlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDIyOCwgMjIxLCAyMDQsIDAuOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51c2VyLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM3MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDd2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDEwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTd2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDN2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ3dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkuNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTJ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaXB0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb3VudC1wYXRpZW50LXByZXNjcmkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmNmYmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4xcmVtIDAuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVzY3JpcHRpb25zLXBhdGllbnQtbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMTVyZW0gMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjM1cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmM2ViO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlNWQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIuMTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcmVtIDByZW0gMC40cmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyMjgsIDIyMSwgMjA0LCAwLjkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBpbml0aWFsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYudnMtYnV0dG9uLS1zaXplLW1pbmkuYnRuLWNoYXJ0LnBhcnQtb2YtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZzLWJ1dHRvbl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuaWNvbi1waWVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5pY29uLWphbWJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjM1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuaWNvbi1icmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5pY29uLW1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmljb24tZXBhdWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5pY29uLWRvcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuaWNvbi1jZXJ2aWNhbGVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5pY29uLWxvbWJhaXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuaWNvbi10aG9yYWNpcXVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuYnRuLXByZXNjcmlwdGlvbi1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDByZW0gMC4ycmVtIDAuOHJlbSAwcmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyNTUsIDEwNCwgNTYsIDAuMTUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDByZW0gMC40cmVtIDEuNHJlbSAwcmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjU1LCAxMDQsIDU2LCAwLjQzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZzLWJ1dHRvbl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWNjb3VudC1pbmZvcyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjU1cmVtIDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmYzZWI7XHJcblxyXG4gICAgICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1hY3RpdmUtc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgIC5pY29uLWluYWN0aXZlLXN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAuaWNvbi13YWl0aW5nLXN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1hY3RpdmUtc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTRkZWNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJiYTk2O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmljb24td2FpdGluZy1zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNGRlY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2M3NTU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1pbmFjdGl2ZS1zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC44NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmZhYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGJkYjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAudGV4dC1zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5sYXN0LWxvZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEzcmVtO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMuNzVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+QWpvdXQgZCd1biBwYXRpZW50PC9oMj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHYtY2xpY2stb3V0c2lkZT1cImhpZGVTZWxlY3RCb3hcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1maWx0ZXJcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IGxvYWRpbmc6IGxvYWRpbmdBbGxQYXRpZW50cyB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFsb2FkaW5nQWxsUGF0aWVudHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJ1c2VyU2VsZWN0ZWQuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidXNlci1zZWxlY3RlZCB1c2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldFNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWF2YXRhciBjbGFzcz1cImF2YXRhclwiIGNpcmNsZSBzaXplPVwiMzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3RlZC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1c2VyU2VsZWN0ZWQuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJgQXZhdGFyIGRlICR7dXNlclNlbGVjdGVkLmZpcnN0bmFtZX0gJHt1c2VyU2VsZWN0ZWQubGFzdG5hbWV9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1hdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldFVzZXJOYW1lKHVzZXJTZWxlY3RlZCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiaXJ0aGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cInVzZXJTZWxlY3RlZC5iaXJ0aGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldEFnZSh1c2VyU2VsZWN0ZWQuYmlydGhkYXRlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuczwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB1c2VyU2VsZWN0ZWQuZW1haWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cIiF1c2VyU2VsZWN0ZWQuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNlbGVjdEJveCA9IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInNlbGVjdEJveFdpdGhUaHJvdHRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyLWNob2ljZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Itci1iLXplcm8nOiBzZWxlY3RCb3gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlci1ncmF5Jzogc2VsZWN0Qm94LFxyXG4gICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhc2VsZWN0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdTw6lsZWN0aW9ubmV6IHVuIHBhdGllbnQga2l2aWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdSZWNoZXJjaGV6IHVuIHBhdGllbnQga2l2aWQnXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFycm93LXRvZ2dsZS1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBzZWxlY3RCb3ggfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlU2VsZWN0Qm94XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxpIGNsYXNzPVwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIj48L2k+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidnMtaWNvbi1hcnJvd1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImhlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwic2VsZWN0Qm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZm9jdXNJbnB1dFNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgdi1pZj1cImFsbFBhdGllbnRzRmlsdGVyZWQubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwYXRpZW50LCBpKSBpbiBhbGxQYXRpZW50c0ZpbHRlcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJcIiBAY2xpY2s9XCJzZWxlY3RVc2VyKHBhdGllbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1hdmF0YXIgY2xhc3M9XCJhdmF0YXJcIiBjaXJjbGUgc2l6ZT1cIjM1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXRpZW50LmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnL2ltZy9hdmF0YXItZGVmYXVsdC5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiYEF2YXRhciBkZSAke3BhdGllbnQuZmlyc3RuYW1lfSAke3BhdGllbnQubGFzdG5hbWV9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZ2V0VXNlck5hbWUocGF0aWVudCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJpcnRoZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cInBhdGllbnQuYmlydGhkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldEFnZShwYXRpZW50LmJpcnRoZGF0ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwYXRpZW50LmVtYWlsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhYWxsUGF0aWVudHNGaWx0ZXJlZC5sZW5ndGggJiYgZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vdC1mb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXJzLXNsYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWN1biBwYXRpZW50IG4nYSDDqXTDqSB0cm91dsOpIGF2ZWMgXCI8c3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgZmlsdGVyIH19PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWFsbFBhdGllbnRzRmlsdGVyZWQubGVuZ3RoICYmICFmaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm90LWZvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlcnMtc2xhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW4gcGF0aWVudCBuJ2Egw6l0w6kgdHJvdXbDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4tY29udGFpbmVyXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZDogYnRuTG9hZGluZ1ZhbGlkQWRkUGF0aWVudCB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwiYnRuTG9hZGluZ1ZhbGlkQWRkUGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhdXNlclNlbGVjdGVkLmVtYWlsIHx8IGJ0bkxvYWRpbmdWYWxpZEFkZFBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZEFkZFBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgPlZhbGlkZXIgbGEgc8OpbGVjdGlvbjwvdnMtYnV0dG9uXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItdGV4dFwiPm91PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcmVhdGUtcGF0aWVudC1mb3JtXCI+XHJcbiAgICAgICAgICAgIDx2cy1zZWxlY3RcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjcmVhdGVQYXRpZW50RGV0YWlscy5nZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXZpbGl0w6lcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiSW5jb25udVwiIHZhbHVlPVwiMFwiPkluY29ubnU8L3ZzLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDx2cy1vcHRpb24gbGFiZWw9XCJNLlwiIHZhbHVlPVwiMVwiPk0uPC92cy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiTW1lXCIgdmFsdWU9XCIyXCI+TW1lPC92cy1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvdnMtc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY3JlYXRlUGF0aWVudERldGFpbHMuZmlyc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiUHLDqW5vbVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImNyZWF0ZVBhdGllbnREZXRhaWxzLmxhc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiTm9tXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG5cclxuICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICA6ZGFuZ2VyPVwidmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgIT0gbnVsbFwiXHJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY3JlYXRlUGF0aWVudERldGFpbHMuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgQGtleXVwPVwidmFsaWRhdGlvbkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGljb24tYWZ0ZXJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiYgY3JlYXRlUGF0aWVudERldGFpbHMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICYmIGNyZWF0ZVBhdGllbnREZXRhaWxzLmVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAjaWNvblxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWVycm9yIGVycm9yIGljb24tMjRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJiBjcmVhdGVQYXRpZW50RGV0YWlscy5lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgI21lc3NhZ2UtZGFuZ2VyXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgdmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgfX1cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4tY29udGFpbmVyXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZDogYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlUGF0aWVudCB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmVtYWlsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIWNyZWF0ZVBhdGllbnREZXRhaWxzLmVtYWlsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlUGF0aWVudFxyXG4gICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwiYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlUGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkQ3JlYXRlUGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICA+VmFsaWRlciBsYSBjcsOpYXRpb248L3ZzLWJ1dHRvblxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSBcInZ1ZS1jbGljay1vdXRzaWRlXCI7XHJcbmltcG9ydCBmIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJQYXRpZW50QWRkXCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGRvY3RvcjogT2JqZWN0LFxyXG4gICAgICAgIGFsbFBhdGllbnRzOiBBcnJheSxcclxuICAgICAgICBsb2FkaW5nQWxsUGF0aWVudHM6IEJvb2xlYW4sXHJcbiAgICAgICAgY3NyZlRva2VuQWRkUGF0aWVudDogU3RyaW5nLFxyXG4gICAgICAgIGNzcmZUb2tlbkNyZWF0ZVBhdGllbnQ6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBkaXJlY3RpdmVzOiB7XHJcbiAgICAgICAgQ2xpY2tPdXRzaWRlLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYnRuTG9hZGluZ1ZhbGlkQWRkUGF0aWVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdWYWxpZENyZWF0ZVBhdGllbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjcmVhdGVQYXRpZW50RGV0YWlsczoge1xyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogXCJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBnZW5kZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRhdGU6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbHRlcjogXCJcIixcclxuICAgICAgICAgICAgc2VsZWN0Qm94OiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0SW5wdXQ6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGFsbFBhdGllbnRzRmlsdGVyZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFNlYXJjaChcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsUGF0aWVudHMuZmlsdGVyKChwKSA9PiAhcC5kb2N0b3IpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB2YWxpZEFkZFBhdGllbnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQWRkUGF0aWVudCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAucG9zdChgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9hZGQvcGF0aWVudGAsIHtcclxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuQWRkUGF0aWVudCxcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50SWQ6IHRoaXMudXNlclNlbGVjdGVkLmlkLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQWpvdXQgZHUgcGF0aWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyU2VsZWN0ZWQuYWRkUmVxdWVzdERvY3RvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclNlbGVjdGVkLmRvY3RvciA9IHRoaXMuZG9jdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZGRQYXRpZW50XCIsIHRoaXMudXNlclNlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZEFkZFBhdGllbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiY2xvc2VNb2RhbEFkZFBhdGllbnRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFwiRXJyZXVyXCIsIGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRBZGRQYXRpZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsb3NlTW9kYWxBZGRQYXRpZW50XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZENyZWF0ZVBhdGllbnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlUGF0aWVudCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAucG9zdChgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9jcmVhdGUvcGF0aWVudGAsIHtcclxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuQ3JlYXRlUGF0aWVudCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IHRoaXMuY3JlYXRlUGF0aWVudERldGFpbHMuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RuYW1lOiB0aGlzLmNyZWF0ZVBhdGllbnREZXRhaWxzLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdlbmRlcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYXRpZW50RGV0YWlscy5nZW5kZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQYXRpZW50RGV0YWlscy5nZW5kZXIgIT0gXCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxXCIgPT09IHRoaXMuY3JlYXRlUGF0aWVudERldGFpbHMuZ2VuZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1hbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJmZW1hbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmNyZWF0ZVBhdGllbnREZXRhaWxzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3LDqWF0aW9uIGR1IHBhdGllbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiYWRkUGF0aWVudFwiLCByZXNwb25zZS5kYXRhLnBhdGllbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBhdGllbnREZXRhaWxzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZGVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDcmVhdGVQYXRpZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsb3NlTW9kYWxBZGRQYXRpZW50XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlUGF0aWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbG9zZU1vZGFsQWRkUGF0aWVudFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvbkVtYWlsKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlID1cclxuICAgICAgICAgICAgICAgIC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICFyZS50ZXN0KFN0cmluZyh0aGlzLmNyZWF0ZVBhdGllbnREZXRhaWxzLmVtYWlsKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWVyY2kgZCdlbnRyZXIgdW4gZW1haWwgdmFsaWRlLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRBZ2UoZGF0ZVN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZW5lcmF0ZUFnZUZyb21EYXRlT2ZCaXJ0aChkYXRlU3RyaW5nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvZ2dsZVNlbGVjdEJveCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSAhdGhpcy5zZWxlY3RCb3g7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEJveCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0U2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGVTZWxlY3RCb3goKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RVc2VyKHVzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyU2VsZWN0ZWQgPSB1c2VyO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVTZWxlY3RCb3goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0U2VsZWN0KCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJTZWxlY3RlZCA9IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBnZW5kZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRhdGU6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SW5wdXQgPVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1jaG9pY2Utc2VsZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0U2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1c0lucHV0U2VsZWN0KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRVc2VyTmFtZSh1c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFVzZXJOYW1lKHVzZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0Qm94V2l0aFRocm90dGxlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0Qm94VGhyb3R0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94VGhyb3R0bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RCb3hcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3hUaHJvdHRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1jaG9pY2Utc2VsZWN0XCIpO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogIzIyMmU1NDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMi40cmVtO1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDNyZW0gMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgLmRpdmlkZXItdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgY29sb3I6ICNlMGRiY2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlNGQ0O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogOTk5OXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZTRkNDtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDk5OTlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWxlY3QtZmlsdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgbWluLWhlaWdodDogNS45cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICAmLmItci1iLXplcm8ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWluLWhlaWdodDogNS43cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNHJlbSAxLjdyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNC41cmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMC4xcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wbGFjZWhvbGRlci1ncmF5IHtcclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkMmNjYmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93LXRvZ2dsZS1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDFyZW07XHJcbiAgICAgICAgcmlnaHQ6IDAuN3JlbTtcclxuICAgICAgICB3aWR0aDogMy44cmVtO1xyXG4gICAgICAgIGhlaWdodDogMy40cmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAmLnZzLWljb24tYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmU1NDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjVyZW07XHJcbiAgICAgICAgICAgICAgICByaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNjAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS12cy10ZXh0KSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tdnMtdGV4dCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMS45cmVtO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QtYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1LjdyZW07XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiA3Nzc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjVyZW0gMC41cmVtO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAtNXB4IHJnYmEoNDQsIDExLCAxMSwgMC4xNSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTksIDEuMDMsIDAuNzksIDEuMDIpO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDI2cmVtO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgbWluLWhlaWdodDogNi43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLXNlbGVjdGVkIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAyLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0LjZyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuNHJlbSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VyIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMi4ycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlRW50ZXIgMC41cztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGdyYXktbWlkZGxlLCAwLjE1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMy41cmVtO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIC5iaXJ0aGRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY4ZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmNWI4NWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yZW0gMC40ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5lbWFpbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTFhM2JkO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ub3QtZm91bmQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlRW50ZXIgMC41cztcclxuICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMy44cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMuOHJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY3JlYXRlLXBhdGllbnQtZm9ybSB7XHJcbiAgICA+ICoge1xyXG4gICAgICAgIG1hcmdpbjogMmVtIDA7XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgICBpZD1cIm15LXdvcmtzaGVldHNcIlxyXG4gICAgICAgIGNsYXNzPVwia2l2LWJsb2NrIHMtcHJlc2NyaXB0aW9uc1wiXHJcbiAgICAgICAgOmNsYXNzPVwieyByZWR1Y2VkOiAhJHBhcmVudC5teVByZXNjcmlwdGlvbnNDb250ZW50IH1cIlxyXG4gICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtY29udGVudCB0YWJcIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICRwYXJlbnQubXlQcmVzY3JpcHRpb25zQ29udGVudCA9ICEkcGFyZW50Lm15UHJlc2NyaXB0aW9uc0NvbnRlbnRcclxuICAgICAgICAgICAgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYnNcIj5cclxuICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJhY3RpdmVUYWIoMSlcIj5cclxuICAgICAgICAgICAgICAgIDxoMj48c3Bhbj5NZXMgcHJlc2NyaXB0aW9uczwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluYWN0aXZlXCIgQGNsaWNrPVwiYWN0aXZlVGFiKDIpXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+PHNwYW4+TWVzIGZpY2hlczwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiRwYXJlbnQubXlQcmVzY3JpcHRpb25zQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW1hcnktYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInBhZ2UgPSAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiRmlsdHJlciBwYXIgbm9tIGRlIGZpY2hlIGV0L291IHBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tcHJpbWFyeS1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvbiBAY2xpY2s9XCJwcmVzY3JpUHJvY2Vzc1wiIGNsYXNzPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZvbGRlci1wbHVzXCI+PC9pPiBQcmVzY3JpcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtbGlzdCB3bC1kb2N0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nRG9jdG9yV29ya3NoZWV0cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RG9jdG9yUHJlc2NyaXB0aW9ucy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHdvcmtzaGVldCwgaSkgaW4gZ2V0RG9jdG9yUHJlc2NyaXB0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjM1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidXNlci1hdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvUGF0aWVudERhc2hib2FyZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBhdGllbnQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQucGF0aWVudC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gd29ya3NoZWV0LnBhdGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImBBdmF0YXIgZGUgJHt3b3Jrc2hlZXQucGF0aWVudC5maXJzdG5hbWV9ICR7d29ya3NoZWV0LnBhdGllbnQubGFzdG5hbWV9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIndvcmtzaGVldC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvUGF0aWVudERhc2hib2FyZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBhdGllbnQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidXNlci1uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5wYXRpZW50LmZpcnN0bmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQucGF0aWVudC5sYXN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgd29ya3NoZWV0LnBhdGllbnQuZmlyc3RuYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgd29ya3NoZWV0LnBhdGllbnQubGFzdG5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB3b3Jrc2hlZXQucGF0aWVudC5lbWFpbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXV4LXBvaW50c1wiPjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB3b3Jrc2hlZXQudGl0bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwid29ya3NoZWV0LmNvbW1lbnRhcmllcy5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUb1dvcmtzaGVldFBhZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQucGF0aWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tYWN0aW9uIGNvbW1lbnRhcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jb21tZW50LWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnQtY29tbWVudGFyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY29tbWVudGFyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdQYXJ0T2ZCb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYXJ0T2ZCb2R5PVwid29ya3NoZWV0LnBhcnRPZkJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ3NHZXRTZXNzaW9ucy5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nLWdyYXkgcHJvZ3Jlc3NiYXItYmFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwicHJvZ3Jlc3NiYXItYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzYmFyLXRodW1iXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7d29ya3NoZWV0LndvcmtzaGVldFRvdGFsUHJvZ3Jlc3Npb259JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudC1zZXNzaW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ3NHZXRTZXNzaW9ucy5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZy1ncmF5IHNlc3Npb24tbmJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2Vzc2lvbi1uYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgPD1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LndvcmtzaGVldFRvdGFsUHJvZ3Jlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50b3RhbFdvcmtzaGVldFNlc3Npb25zID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2Vzc2lvbiBuwrA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3VycmVudFdvcmtzaGVldFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXhlY09yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtZWxzZT57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudG90YWxXb3Jrc2hlZXRTZXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPi97e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudG90YWxXb3Jrc2hlZXRTZXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbiBkw6ltYXJyw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5CIFNlc3Npb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWV4ZXJjaXNlIGljb24tN1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaWNlPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlcy5sZW5ndGggPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+czwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC10aW1pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jYWxlbmRhciBpY29uLTEwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB3b3Jrc2hlZXQucGVyRGF5IH19eDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXIgam91ciAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IHdvcmtzaGVldC5wZXJXZWVrIH19eDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXIgc2VtYWluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LXBlcmlvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWNsb2NrIGljb24tMTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUMOpcmlvZGUgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmR1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbWFpbmU8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kdXJhdGlvbiA+IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+czwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWRldGFpbHMgcmVkdWNlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1leGVyY2lzZXMtY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1leGVyY2lzZSBpY29uLTdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC10aW1pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jYWxlbmRhciBpY29uLTEwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB3b3Jrc2hlZXQucGVyRGF5IH19eDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIGpvdXIgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB3b3Jrc2hlZXQucGVyV2VlayB9fXg8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyBzZW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtcGVyaW9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtY2xvY2sgaWNvbi0xMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kdXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW0uPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRucy1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3JlYXRlZC1hdC1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPmNyw6nDqSBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0RGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50b3RhbFdvcmtzaGVldFNlc3Npb25zID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvV29ya3NoZWV0UGFnZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBhdGllbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50b3RhbFdvcmtzaGVldFNlc3Npb25zID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9Xb3Jrc2hlZXRQYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQucGF0aWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUb0VkaXRQYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQucGF0aWVudC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1hY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBlblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlV29ya3NoZWV0KHdvcmtzaGVldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90LWZvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmdEb2N0b3JXb3Jrc2hlZXRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZ2V0RG9jdG9yUHJlc2NyaXB0aW9ucy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZm9sZGVyLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Vm91cyBuJ2F2ZXogcGFzIGRlIHByZXNjcmlwdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3QtZm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ0RvY3RvcldvcmtzaGVldHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFnZXREb2N0b3JQcmVzY3JpcHRpb25zLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZvbGRlci1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPkF1Y3VuZSBwcmVzY3JpcHRpb24gbidhIMOpdMOpIHRyb3V2w6llIGF2ZWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlwiPHN0cm9uZz57eyBzZWFyY2ggfX08L3N0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XCI8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nRG9jdG9yV29ya3NoZWV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlciB3LTg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNjVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy00NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpbWluZyB3LTI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXBlcmlvZCB3LTE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlciB3LTg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy00NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpbWluZyB3LTI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXBlcmlvZCB3LTE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlciB3LTg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy00NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpbWluZyB3LTI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXBlcmlvZCB3LTE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlciB3LTg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy00NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpbWluZyB3LTI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXBlcmlvZCB3LTE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlciB3LTg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy00NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpbWluZyB3LTI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXBlcmlvZCB3LTE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlciB3LTg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy00NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpbWluZyB3LTI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXBlcmlvZCB3LTE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvblwiIHYtaWY9XCJkb2N0b3JQcmVzY3JpcHRpb25zLmxlbmd0aCA+IG1heFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1wYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy1kb3R0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGVuZ3RoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNlYXJjaChkb2N0b3JQcmVzY3JpcHRpb25zLCBzZWFyY2gpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50LXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFnZSA6IDxiPnt7IHBhZ2UgfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDx2cy1kaWFsb2cgdi1tb2RlbD1cIm1vZGFsQ29uZmlybVJlbW92ZVdvcmtzaGVldFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsLWNvbmZpcm0tdGV4dFwiPkNvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiBkZTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb25maXJtLWRldGFpbCByZW1vdmUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbmZpcm0taWNvbiByZW1vdmUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgcmVtb3ZlV29ya3NoZWV0RGV0YWlscy50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29uZmlybS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm1vZGFsQ29uZmlybVJlbW92ZVdvcmtzaGVldCA9IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBbm51bGVyXHJcbiAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZFJlbW92ZVdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nVmFsaWRSZW1vdmVXb3Jrc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGJ0bkxvYWRpbmdWYWxpZFJlbW92ZVdvcmtzaGVldCxcclxuICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDb25maXJtZXJcclxuICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3ZzLWRpYWxvZz5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgVGFnUGFydE9mQm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZG9jdG9yOiBPYmplY3QsXHJcbiAgICAgICAgZG9jdG9yUHJlc2NyaXB0aW9uczogQXJyYXksXHJcbiAgICAgICAgbG9hZGluZ0RvY3RvcldvcmtzaGVldHM6IEJvb2xlYW4sXHJcbiAgICAgICAgY3NyZlRva2VuUmVtb3ZlV29ya3NoZWV0OiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFRhZ1BhcnRPZkJvZHksXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXREb2N0b3JQcmVzY3JpcHRpb25zKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkb2NQcmVzY3JpcHRpb25zID0gdGhpcy5nZXRQYWdlKFxyXG4gICAgICAgICAgICAgICAgZi5nZXRTZWFyY2godGhpcy5kb2N0b3JQcmVzY3JpcHRpb25zLCB0aGlzLnNlYXJjaCwgXCJkb2N0b3JcIiksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRvY1ByZXNjcmlwdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWJvdW5jZVRpbWVyID0gdGhpcy5zZWFyY2ggPyA3MDAgOiAwO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VHZXRTZXNzaW9uc0luZm9zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VHZXRTZXNzaW9uc0luZm9zID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jUHJlc2NyaXB0aW9ucy5mb3JFYWNoKCh3b3Jrc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb2N0b3IucGF0aWVudHMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocCkgPT4gcC5pZCA9PT0gd29ya3NoZWV0LnBhdGllbnQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChudWxsID09PSB3b3Jrc2hlZXQud29ya3NoZWV0VG90YWxQcm9ncmVzc2lvbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT09IHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT09IHdvcmtzaGVldC50b3RhbFdvcmtzaGVldFNlc3Npb25zIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsQ29tcGxldGVkV29ya3NoZWV0U2Vzc2lvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nc0dldFNlc3Npb25zLnB1c2god29ya3NoZWV0LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL3BhdGllbnQvJHt3b3Jrc2hlZXQucGF0aWVudC5pZH0vZ2V0L2N1cnJlbnQtd29ya3NoZWV0LXNlc3Npb24vJHt3b3Jrc2hlZXQuaWR9L2RvY3RvcnZpZXdgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY3VycmVudFdvcmtzaGVldFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL3BhdGllbnQvJHt3b3Jrc2hlZXQucGF0aWVudC5pZH0vZ2V0L3RvdGFsLXdvcmtzaGVldC1zZXNzaW9ucy8ke3dvcmtzaGVldC5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudG90YWxXb3Jrc2hlZXRTZXNzaW9ucyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvcGF0aWVudC8ke3dvcmtzaGVldC5wYXRpZW50LmlkfS9nZXQvdG90YWwtY29tcGxldGVkLXdvcmtzaGVldC1zZXNzaW9ucy8ke3dvcmtzaGVldC5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudG90YWxDb21wbGV0ZWRXb3Jrc2hlZXRTZXNzaW9ucyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQud29ya3NoZWV0VG90YWxQcm9ncmVzc2lvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxXb3Jrc2hlZXRUb3RhbFByb2dyZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudG90YWxDb21wbGV0ZWRXb3Jrc2hlZXRTZXNzaW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ3NHZXRTZXNzaW9ucy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nc0dldFNlc3Npb25zLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5yZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCBkZWJvdW5jZVRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRvY1ByZXNjcmlwdGlvbnM7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlYXJjaDogXCJcIixcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgbWF4OiA2LFxyXG4gICAgICAgICAgICBtb2RhbENvbmZpcm1SZW1vdmVXb3Jrc2hlZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICByZW1vdmVXb3Jrc2hlZXREZXRhaWxzOiB7fSxcclxuICAgICAgICAgICAgYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlV29ya3NoZWV0OiBmYWxzZSxcclxuICAgICAgICAgICAgZGVib3VuY2VHZXRTZXNzaW9uc0luZm9zOiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nc0dldFNlc3Npb25zOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjYWxjdWxXb3Jrc2hlZXRUb3RhbFByb2dyZXNzaW9uKFxyXG4gICAgICAgICAgICB0b3RhbENvbXBsZXRlZFdvcmtzaGVldFNlc3Npb25zLFxyXG4gICAgICAgICAgICB0b3RhbFdvcmtzaGVldFNlc3Npb25zXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbFByb2dyZXNzaW9uUGVyY2VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uUGVyY2VudFBhcnQgPSAxMDAgLyB0b3RhbFdvcmtzaGVldFNlc3Npb25zO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdDEgPVxyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uUGVyY2VudFBhcnQgKiB0b3RhbENvbXBsZXRlZFdvcmtzaGVldFNlc3Npb25zICogMTBcclxuICAgICAgICAgICAgICAgICkgLyAxMDtcclxuXHJcbiAgICAgICAgICAgIHRvdGFsUHJvZ3Jlc3Npb25QZXJjZW50ID0gdDE7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG90YWxQcm9ncmVzc2lvblBlcmNlbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVzY3JpUHJvY2VzcygpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcInByZXNjcmlQcm9jZXNzXCIsIHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3RUb0VkaXRQYWdlKHdvcmtzaGVldElkLCBwYXRpZW50SWQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2ZpY2hlL2VkaXRpb24vJHt3b3Jrc2hlZXRJZH0vJHtwYXRpZW50SWR9YDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGlyZWN0VG9Xb3Jrc2hlZXRQYWdlKHdvcmtzaGVldElkLCBwYXRpZW50SWQsIGhhc1Nlc3Npb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNTZXNzaW9ucykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L3ZvaXIvJHt3b3Jrc2hlZXRJZH0vJHtwYXRpZW50SWR9YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9maWNoZS92b2lyLyR7d29ya3NoZWV0SWR9LyR7cGF0aWVudElkfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGlyZWN0VG9QYXRpZW50RGFzaGJvYXJkKHBhdGllbnRJZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vdm9pci9wYXRpZW50LyR7cGF0aWVudElkfWA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3RpdmVUYWIobnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5hY3RpdmVUYWIgPSBudW07XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1NzYpIHtcclxuICAgICAgICAgICAgICAgIGlmICgxID09PSBudW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQubXlQcmVzY3JpcHRpb25zQ29udGVudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLiRwYXJlbnQubXlQcmVzY3JpcHRpb25zQ29udGVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgyID09PSBudW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQubXlXb3Jrc2hlZXRUZW1wbGF0ZXNDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlV29ya3NoZWV0KHBhdGllbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVXb3Jrc2hlZXREZXRhaWxzID0gcGF0aWVudDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5tb2RhbENvbmZpcm1SZW1vdmVXb3Jrc2hlZXQgPVxyXG4gICAgICAgICAgICAgICAgIXRoaXMubW9kYWxDb25maXJtUmVtb3ZlV29ya3NoZWV0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkUmVtb3ZlV29ya3NoZWV0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZFJlbW92ZVdvcmtzaGVldCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAucG9zdChgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9yZW1vdmUvd29ya3NoZWV0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogdGhpcy5jc3JmVG9rZW5SZW1vdmVXb3Jrc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0SWQ6IHRoaXMucmVtb3ZlV29ya3NoZWV0RGV0YWlscy5pZCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1cHByZXNzaW9uIGRlIGxhIHByZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZG9jdG9yV29ya3NoZWV0cy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5kb2N0b3JXb3Jrc2hlZXRzLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVdvcmtzaGVldERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQ29uZmlybVJlbW92ZVdvcmtzaGVldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlV29ya3NoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbmZpcm1SZW1vdmVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0RGF0ZShkYXRldGltZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGV0aW1lKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UGFnZShkYXRhLCBwYWdlLCBtYXhJdGVtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRQYWdlKGRhdGEsIHBhZ2UsIG1heEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldExlbmd0aChkYXRhLCBtYXhJdGVtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRMZW5ndGgoZGF0YSwgbWF4SXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U2VhcmNoKGRhdGEsIGZpbHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRTZWFyY2goZGF0YSwgZmlsdGVyKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4jbXktd29ya3NoZWV0cy5zLXByZXNjcmlwdGlvbnMge1xyXG4gICAgcGFkZGluZy10b3A6IDYuN3JlbTtcclxuXHJcbiAgICAmLnJlZHVjZWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0LjRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnMge1xyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgJi5pbmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwLjY2cmVtIC0wLjNyZW0gMC45cmVtIHJnYmEoMTQ4LCA5NiwgNzcsIDAuMDcpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53b3Jrc2hlZXQtbGlzdC53bC1kb2N0b3IgPiBkaXY6bm90KC5ub3QtZm91bmQpIHtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0LjJyZW07XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLndvcmtzaGVldC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgLnVzZXItYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC51c2VyLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwdnc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU4dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzB2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MS43dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTM3MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTB2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC53b3Jrc2hlZXQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmNvbW1lbnRhcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDByZW0gMC4ycmVtIDAuOXJlbSAwcmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyMzEsIDIyMywgMjA1LCAwLjYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMC4xOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjQ1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb3VudC1jb21tZW50YXJpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0wLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4xcmVtIDAuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC4xNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudnMtYnV0dG9uLS1zaXplLW1pbmkudGFnLnBhcnQtb2YtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzlweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC53b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzB2dztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjhyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzh2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NnJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucHJvZ3Jlc3NiYXItYmFzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMC42cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmxvYWRpbmctZ3JheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogcGxhY2VIb2xkZXJTaGltbWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2YyZWZlOCA4JSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlMWRjZDAgMzglLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2YyZWZlOCA1NCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggNjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvdW50LXNlc3Npb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlc3Npb24tbmIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2QzY2NiYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuY29tcGxldGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm5vdCguY29tcGxldGVkKTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxvYWRpbmctZ3JheS5zZXNzaW9uLW5iIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmYWY4ZjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53b3Jrc2hlZXQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAud29ya3NoZWV0LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucmVkdWNlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTglO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTlweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQxMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDF2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDkwZGVnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjUwLCAyNDgsIDI0NCwgMCkgMCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyNTAsIDI0OCwgMjQ0LCAxKSAxMDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnRucy1kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAzLjQlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlZC1hdC1kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvblxyXG4gICAgICAgIGlkPVwibXktd29ya3NoZWV0c1wiXHJcbiAgICAgICAgY2xhc3M9XCJraXYtYmxvY2sgcy13b3Jrc2hlZXQtdGVtcGxhdGVzXCJcclxuICAgICAgICA6Y2xhc3M9XCJ7IHJlZHVjZWQ6ICEkcGFyZW50Lm15V29ya3NoZWV0VGVtcGxhdGVzQ29udGVudCB9XCJcclxuICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWNvbnRlbnQgdGFiXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAkcGFyZW50Lm15V29ya3NoZWV0VGVtcGxhdGVzQ29udGVudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgISRwYXJlbnQubXlXb3Jrc2hlZXRUZW1wbGF0ZXNDb250ZW50XHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCI+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmFjdGl2ZVwiIEBjbGljaz1cImFjdGl2ZVRhYigxKVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPjxzcGFuPk1lcyBwcmVzY3JpcHRpb25zPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IEBjbGljaz1cImFjdGl2ZVRhYigyKVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPjxzcGFuPk1lcyBmaWNoZXM8L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgdi1pZj1cInByZXNjcmlQcm9jZXNzICYmIGdldFdvcmtzaGVldFRlbXBsYXRlcy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwcmVzY3JpLXByb2Nlc3MtZGlhbG9nXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGVwLW51bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiZmFzIGZhLWZvbGRlci1wbHVzXCI+PC9pPkV0YXBlXHJcbiAgICAgICAgICAgICAgICAgICAge3sgISRwYXJlbnQucHJlc2NyaVByb2Nlc3NQYXRpZW50U2VsZWN0ZWQgPyAxIDogMiB9fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgVmV1aWxsZXogU8OpbGVjdGlvbm5lciB1bmUgZmljaGUsIHZvdXMgcG91cnJleiBsYVxyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNvbm5hbGlzZXIgw6AgbCfDqXRhcGUgc3VpdmFudGVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJwcmVzY3JpUHJvY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInByZXNjcmktcHJvY2Vzcy1kaWFsb2cgcHAtY3JlYXRlLXdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RlcC1udW1cIlxyXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImZhcyBmYS1mb2xkZXItcGx1c1wiPjwvaT5FdGFwZVxyXG4gICAgICAgICAgICAgICAgICAgIHt7ICEkcGFyZW50LnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkID8gMSA6IDIgfX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJnZXRXb3Jrc2hlZXRUZW1wbGF0ZXMubGVuZ3RoXCI+T3UgY3LDqWV6PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtZWxzZT5DcsOpZXo8L3NwYW4+IHVuZSBub3V2ZWxsZSBmaWNoZVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImhlaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIkcGFyZW50Lm15V29ya3NoZWV0VGVtcGxhdGVzQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW1hcnktYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInBhZ2UgPSAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiRmlsdHJlciBwYXIgbm9tIGRlIGZpY2hlIGV0L291IGNyw6lhdGV1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWFsbC10ZW1wbGF0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlZvaXIgbGVzIGZpY2hlcyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXMgYXV0cmVzIHByYXQuPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtc3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicGFnZSA9IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ2aWV3QWxsVGVtcGxhdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJraXYtc2VsZWN0IHRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0VGFnc0Zyb21BbGwubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW90cy1DbMOpc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkVGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInBhZ2UgPSAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHRhZywgaSkgaW4gZ2V0VGFnc0Zyb21BbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cInRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vdERhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW4gbW90LWNsw6lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImxvYWRpbmcgc2VsZWN0LXRhZ3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tcHJpbWFyeS1hY3Rpb24gYWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlZGlyZWN0VG9DcmVhdGVQYWdlKDApXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nQWRkV29ya3NoZWV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tYWN0aW9uIGFkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBsdXMtaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjN4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGx1cy1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjdG9vbHRpcD4gQ3LDqWVyIHVuZSBmaWNoZSA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy10b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tcHJlc2NyaXB0aW9uLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByZXNjcmlQcm9jZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYXJlbnQucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkID09PSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkxvYWRpbmdXb3Jrc2hlZXRQcmVzY3JpUHJvY2Vzc1JlZGlyZWN0ID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNjcmlQcm9jZXNzV29ya3NoZWV0Q2hvaWNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJHBhcmVudC5wcmVzY3JpUHJvY2VzcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgkcGFyZW50LnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pZCAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJmYXMgZmEtZm9sZGVyLXBsdXNcIj48L2k+Q3LDqWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmUgZmljaGU8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYXJlbnQucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlPDqWxlY3Rpb25uw6k8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1saXN0IHdsLWRvY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ0FsbFdvcmtzaGVldHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRXb3Jrc2hlZXRUZW1wbGF0ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIod29ya3NoZWV0LCBpKSBpbiBnZXRXb3Jrc2hlZXRUZW1wbGF0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVzZXItdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUb1dvcmtzaGVldFBhZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIndvcmtzaGVldC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHdvcmtzaGVldC50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0YWctY2hpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZywgaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgaW4gd29ya3NoZWV0LmV4ZXJjaXNlc1RhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ1BhcnRPZkJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYXJ0T2ZCb2R5PVwid29ya3NoZWV0LnBhcnRPZkJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2l2LWV4ZXJjaXNlIGljb24tN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYlwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpY2U8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5leGVyY2lzZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+czwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC10aW1pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2l2LWNhbGVuZGFyIGljb24tMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBlckRheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX14PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyIGpvdXIgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBlcldlZWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19eDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhciBzZW1haW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1wZXJpb2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2l2LWNsb2NrIGljb24tMTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQw6lyaW9kZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZHVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW1haW5lPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kdXJhdGlvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5zPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1kZXRhaWxzIHJlZHVjZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtZXhlcmNpc2UgaWNvbi03XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5leGVyY2lzZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LXRpbWluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQucGVyRGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fXg8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIGpvdXIgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBlcldlZWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19eDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8gc2VtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtcGVyaW9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImtpdi1jbG9jayBpY29uLTExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kdXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbS48L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRucy1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNyZWF0ZWQtYXQtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPmNyw6nDqSBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXREYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjcmVhdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kb2N0b3IgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdvcmtzaGVldC5kb2N0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdG5hbWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kb2N0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFzdG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZG9jdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZG9jdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1hdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIyMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVzZXItYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIndvcmtzaGVldC5kb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZG9jdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHdvcmtzaGVldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnL2ltZy9hdmF0YXItZGVmYXVsdC5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiYEF2YXRhciBkZSAke3dvcmtzaGVldC5kb2N0b3IuZmlyc3RuYW1lfSAke3dvcmtzaGVldC5kb2N0b3IubGFzdG5hbWV9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvV29ya3NoZWV0UGFnZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZG9jdG9yLmlkID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9FZGl0UGFnZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBlblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZG9jdG9yLmlkID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVdvcmtzaGVldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmlnLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jcmVhdGUtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuTG9hZGluZ0NvcHlXb3Jrc2hlZXQgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9DcmVhdGVQYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcGllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1wcmVzY3JpcHRpb24tYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByZXNjcmlQcm9jZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFyZW50LnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pZCA9PT0gd29ya3NoZWV0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5Mb2FkaW5nV29ya3NoZWV0UHJlc2NyaVByb2Nlc3NSZWRpcmVjdCA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRDaG9pY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXByZXNjcmlQcm9jZXNzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEkcGFyZW50LnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCRwYXJlbnQucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkICE9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhLWZvbGRlci1wbHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5QcmVzY3JpcmU8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNjcmlQcm9jZXNzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISRwYXJlbnQucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYS1mb2xkZXItcGx1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U8OpbGVjdGlvbm5lcjwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWQgPT09IHdvcmtzaGVldC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYS1jaGVjay1jaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlPDqWxlY3Rpb25uw6k8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3QtZm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nQWxsV29ya3NoZWV0cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFnZXRXb3Jrc2hlZXRUZW1wbGF0ZXMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNlYXJjaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzZWxlY3RlZFRhZ3MubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1mb2xkZXItbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Vm91cyBuJ2F2ZXogcGFzIGRlIGZpY2hlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3QtZm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nQWxsV29ya3NoZWV0cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFnZXRXb3Jrc2hlZXRUZW1wbGF0ZXMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlYXJjaCB8fCBzZWxlY3RlZFRhZ3MubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZm9sZGVyLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5BdWN1bmUgZmljaGUgbidhIMOpdMOpIHRyb3V2w6llIGF2ZWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XCI8c3Ryb25nPnt7IHNlYXJjaCB9fTwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XCI8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VhcmNoICYmIHNlbGVjdGVkVGFncy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+ZXQ8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0ZWRUYWdzLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0YWctY2hpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIodGFnLCBpKSBpbiBzZWxlY3RlZFRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0YWcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ0FsbFdvcmtzaGVldHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlciB3LTg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyB3b3Jrc2hlZXQtdGl0bGUgdy02NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgcGFydC1vZi1ib2R5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LXRpbWluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTI1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1wZXJpb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0xNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1oZWFkZXIgdy04NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nIHdvcmtzaGVldC1wcm9ncmVzcy1saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTQ1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC10aW1pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0yNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtcGVyaW9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgbG9hZGluZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtaGVhZGVyIHctODVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nIHdvcmtzaGVldC10aXRsZSB3LTU1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyB3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1leGVyY2lzZXMtY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy00NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtdGltaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LXBlcmlvZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTE1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlciB3LTg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyB3b3Jrc2hlZXQtdGl0bGUgdy00NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgcGFydC1vZi1ib2R5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LXRpbWluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTI1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1wZXJpb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0xNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1oZWFkZXIgdy04NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nIHdvcmtzaGVldC1wcm9ncmVzcy1saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTQ1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC10aW1pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0yNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtcGVyaW9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgbG9hZGluZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtaGVhZGVyIHctODVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nIHdvcmtzaGVldC10aXRsZSB3LTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyB3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1leGVyY2lzZXMtY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy00NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtdGltaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LXBlcmlvZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTE1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlciB3LTg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyB3b3Jrc2hlZXQtdGl0bGUgdy00NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgcGFydC1vZi1ib2R5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LXRpbWluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTI1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1wZXJpb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0xNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb25cIiB2LWlmPVwiY291bnRXb3Jrc2hlZXRUZW1wbGF0ZXMgPiBtYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dnMtcGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMtZG90dGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExlbmd0aChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTZWFyY2god29ya3NoZWV0VGVtcGxhdGVzLCBzZWFyY2gpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50LXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFnZSA6IDxiPnt7IHBhZ2UgfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDx2cy1kaWFsb2cgdi1tb2RlbD1cIm1vZGFsQ29uZmlybVJlbW92ZVdvcmtzaGVldFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsLWNvbmZpcm0tdGV4dFwiPkNvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiBkZTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb25maXJtLWRldGFpbCByZW1vdmUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbmZpcm0taWNvbiByZW1vdmUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgcmVtb3ZlV29ya3NoZWV0RGV0YWlscy50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29uZmlybS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm1vZGFsQ29uZmlybVJlbW92ZVdvcmtzaGVldCA9IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBbm51bGVyXHJcbiAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZFJlbW92ZVdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nVmFsaWRSZW1vdmVXb3Jrc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGJ0bkxvYWRpbmdWYWxpZFJlbW92ZVdvcmtzaGVldCxcclxuICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDb25maXJtZXJcclxuICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3ZzLWRpYWxvZz5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgVGFnUGFydE9mQm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgUGx1c0ljb24gfSBmcm9tIFwidnVlLWZlYXRoZXItaWNvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZG9jdG9yOiBPYmplY3QsXHJcbiAgICAgICAgd29ya3NoZWV0VGVtcGxhdGVzOiBBcnJheSxcclxuICAgICAgICBsb2FkaW5nQWxsV29ya3NoZWV0czogQm9vbGVhbixcclxuICAgICAgICB0YWdzRnJvbUV4ZXJjaXNlczogQXJyYXksXHJcbiAgICAgICAgcHJlc2NyaVByb2Nlc3M6IEJvb2xlYW4sXHJcbiAgICAgICAgYnRuTG9hZGluZ1dvcmtzaGVldFByZXNjcmlQcm9jZXNzUmVkaXJlY3Q6IE51bWJlcixcclxuICAgICAgICBjc3JmVG9rZW5SZW1vdmVXb3Jrc2hlZXQ6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgVGFnUGFydE9mQm9keSxcclxuICAgICAgICBQbHVzSWNvbixcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVGFnczogW10sXHJcbiAgICAgICAgICAgIHNlYXJjaDogXCJcIixcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgbWF4OiA2LFxyXG4gICAgICAgICAgICB2aWV3QWxsVGVtcGxhdGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9kYWxDb25maXJtUmVtb3ZlV29ya3NoZWV0OiBmYWxzZSxcclxuICAgICAgICAgICAgcmVtb3ZlV29ya3NoZWV0RGV0YWlsczoge30sXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdWYWxpZFJlbW92ZVdvcmtzaGVldDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdBZGRXb3Jrc2hlZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBidG5Mb2FkaW5nQ29weVdvcmtzaGVldDogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0V29ya3NoZWV0VGVtcGxhdGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRQYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTZWFyY2godGhpcy53b3Jrc2hlZXRUZW1wbGF0ZXMsIHRoaXMuc2VhcmNoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSxcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb3VudFdvcmtzaGVldFRlbXBsYXRlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2VhcmNoKHRoaXMud29ya3NoZWV0VGVtcGxhdGVzLCB0aGlzLnNlYXJjaCkubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGFnc0Zyb21BbGwoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFRhZ3NGcm9tQWxsKHRoaXMudGFnc0Zyb21FeGVyY2lzZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHByZXNjcmlQcm9jZXNzV29ya3NoZWV0Q2hvaWNlKHdvcmtzaGVldCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwicHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRDaG9pY2VcIiwgd29ya3NoZWV0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGlyZWN0VG9FZGl0UGFnZSh3b3Jrc2hlZXRJZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vZmljaGUvZWRpdGlvbi8ke3dvcmtzaGVldElkfWA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWRpcmVjdFRvQ3JlYXRlUGFnZSh3b3Jrc2hlZXRJZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3b3Jrc2hlZXRJZCk7XHJcbiAgICAgICAgICAgIGlmICh3b3Jrc2hlZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nQ29weVdvcmtzaGVldCA9IHdvcmtzaGVldElkO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nQWRkV29ya3NoZWV0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2ZpY2hlL2NyZWF0aW9uLyR7d29ya3NoZWV0SWR9YDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGlyZWN0VG9Xb3Jrc2hlZXRQYWdlKHdvcmtzaGVldElkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9maWNoZS92b2lyLyR7d29ya3NoZWV0SWR9YDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2ZVRhYihudW0pIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LmFjdGl2ZVRhYiA9IG51bTtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDU3Nikge1xyXG4gICAgICAgICAgICAgICAgaWYgKDEgPT09IG51bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5teVByZXNjcmlwdGlvbnNDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgyID09PSBudW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQubXlXb3Jrc2hlZXRUZW1wbGF0ZXNDb250ZW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuJHBhcmVudC5teVdvcmtzaGVldFRlbXBsYXRlc0NvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVdvcmtzaGVldChwYXRpZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlV29ya3NoZWV0RGV0YWlscyA9IHBhdGllbnQ7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMubW9kYWxDb25maXJtUmVtb3ZlV29ya3NoZWV0ID1cclxuICAgICAgICAgICAgICAgICF0aGlzLm1vZGFsQ29uZmlybVJlbW92ZVdvcmtzaGVldCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZFJlbW92ZVdvcmtzaGVldCgpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVXb3Jrc2hlZXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgLnBvc3QoYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vcmVtb3ZlL3dvcmtzaGVldGAsIHtcclxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuUmVtb3ZlV29ya3NoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldElkOiB0aGlzLnJlbW92ZVdvcmtzaGVldERldGFpbHMuaWQsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdXBwcmVzc2lvbiBkZSBsYSBmaWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuYWxsV29ya3NoZWV0cy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5hbGxXb3Jrc2hlZXRzLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVdvcmtzaGVldERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQ29uZmlybVJlbW92ZVdvcmtzaGVldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlV29ya3NoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbmZpcm1SZW1vdmVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0RGF0ZShkYXRldGltZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGV0aW1lKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UGFnZShkYXRhLCBwYWdlLCBtYXhJdGVtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRQYWdlKGRhdGEsIHBhZ2UsIG1heEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldExlbmd0aChkYXRhLCBtYXhJdGVtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRMZW5ndGgoZGF0YSwgbWF4SXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U2VhcmNoKGRhdGEsIGZpbHRlcikge1xyXG4gICAgICAgICAgICBsZXQgd29ya3NoZWV0VGVtcGxhdGVzRmlsdGVyZWQgPSBmLmdldFNlYXJjaChkYXRhLCBmaWx0ZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgd29ya3NoZWV0VGVtcGxhdGVzRmlsdGVyZWQgPSB3b3Jrc2hlZXRUZW1wbGF0ZXNGaWx0ZXJlZC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKHcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcuZXhlcmNpc2VzVGFncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdy5leGVyY2lzZXNUYWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFncy5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnZpZXdBbGxUZW1wbGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHdvcmtzaGVldFRlbXBsYXRlc0ZpbHRlcmVkID0gd29ya3NoZWV0VGVtcGxhdGVzRmlsdGVyZWQuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICh3KSA9PiB3LmRvY3RvciAmJiB3LmRvY3Rvci5pZCA9PT0gdGhpcy5kb2N0b3IuaWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB3b3Jrc2hlZXRUZW1wbGF0ZXNGaWx0ZXJlZDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4jbXktd29ya3NoZWV0cy5zLXdvcmtzaGVldC10ZW1wbGF0ZXMge1xyXG4gICAgcGFkZGluZy10b3A6IDYuN3JlbTtcclxuXHJcbiAgICAmLnJlZHVjZWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0LjRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnMge1xyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgJi5pbmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMC43NHJlbSAtMC4zcmVtIDAuOXJlbVxyXG4gICAgICAgICAgICAgICAgICAgIHJnYmEoMTQ4LCA5NiwgNzcsIDAuMDcpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAuOHJlbSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcmltYXJ5LWFjdGlvbnMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuXHJcbiAgICAgICAgLmJ0bi1wcmVzY3JpcHRpb24tYWN0aW9uIC52cy1idXR0b24gLnZzLWJ1dHRvbl9fY29udGVudCxcclxuICAgICAgICBib2R5IC5idG4tY3JlYXRlLWFjdGlvbiAudnMtYnV0dG9uIC52cy1idXR0b25fX2NvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gMS41cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS4ycmVtO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tcHJpbWFyeS1hY3Rpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+IDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS40cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+IDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5raXYtc2VsZWN0LnRhZ3Mge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS40cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgICAgICAubG9hZGluZy5zZWxlY3QtdGFncyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNC4zcmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC52cy1pbnB1dC1wYXJlbnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNHJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC52aWV3LWFsbC10ZW1wbGF0ZXMge1xyXG4gICAgICAgIHdpZHRoOiA1LjlyZW07XHJcblxyXG4gICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52cy1zd2l0Y2gge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDFweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMC4ycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZzLXN3aXRjaF9fY2lyY2xlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZzLXN3aXRjaF9faW5wdXQ6Y2hlY2tlZCB+IC52cy1zd2l0Y2hfX2NpcmNsZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmlnLWJ1dHRvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0wLjNyZW07XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLXByZXNjcmlwdGlvbi1hY3Rpb24sXHJcbiAgICAgICAgLmJ0bi1jcmVhdGUtYWN0aW9uIHtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgICAgIC52cy1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDByZW0gMC4ycmVtIDAuOHJlbSAwcmVtIHJnYmEoMjU1LCAxMDQsIDU2LCAwLjE1KTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcmVtIDAuNHJlbSAxLjRyZW0gMHJlbSByZ2JhKDI1NSwgMTA0LCA1NiwgMC40Myk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnZzLWJ1dHRvbl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLXByZXNjcmlwdGlvbi1hY3Rpb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tY3JlYXRlLWFjdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4LjhyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS43cmVtO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0OXB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZzLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDA1cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIC52cy1idXR0b25fX2xvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGJsYWNrLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWdzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIC50YWctY2hpcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG9yYW5nZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuN3JlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC4ycmVtIDAuM3JlbTtcclxuXHJcbiAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud29ya3NoZWV0LWxpc3Qud2wtZG9jdG9yID4gZGl2Om5vdCgubm90LWZvdW5kKSB7XHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0LjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC53b3Jrc2hlZXQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudXNlci1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudXNlci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTN2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEzNzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQzdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAud29ya3NoZWV0LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLWFjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuY29tbWVudGFyaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LW1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHJlbSAwLjJyZW0gMC45cmVtIDByZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDIzMSwgMjIzLCAyMDUsIDAuNik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjE4cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAuNDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvdW50LWNvbW1lbnRhcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDQuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMS45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDkwZGVnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDI1MCwgMjQ4LCAyNDQsIDApIDAlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDI1MCwgMjQ4LCAyNDQsIDEpIDEwMCVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC52cy1idXR0b24tLXNpemUtbWluaS50YWcucGFydC1vZi1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3OXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLndvcmtzaGVldC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIC53b3Jrc2hlZXQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC43cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucmVkdWNlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTglO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTlweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQxMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOTBkZWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyNTAsIDI0OCwgMjQ0LCAwKSAwJSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDI1MCwgMjQ4LCAyNDQsIDEpIDEwMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5idG5zLWRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM3MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTA0LjQlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC53b3Jrc2hlZXQtY29udGVudCA+IGRpdiAuYnRucy1kYXRlIHtcclxuICAgICAgICAgICAgICAgIC5jcmVhdGVkLWF0LWRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudXNlci1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0b3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyJyArXG4gICdcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xuXG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgTmF0aXZlTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgTnVtYmVyUHJvdG90eXBlID0gTmF0aXZlTnVtYmVyLnByb3RvdHlwZTtcblxuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NMQVNTT0YgPSBjbGFzc29mKGNyZWF0ZShOdW1iZXJQcm90b3R5cGUpKSA9PSBOVU1CRVI7XG5cbi8vIGBUb051bWJlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbnVtYmVyXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzU3ltYm9sKGFyZ3VtZW50KSkgdGhyb3cgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIG51bWJlcicpO1xuICB2YXIgaXQgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ251bWJlcicpO1xuICB2YXIgZmlyc3QsIHRoaXJkLCByYWRpeCwgbWF4Q29kZSwgZGlnaXRzLCBsZW5ndGgsIGluZGV4LCBjb2RlO1xuICBpZiAodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIpIHtcbiAgICBpdCA9IHRyaW0oaXQpO1xuICAgIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKTtcbiAgICBpZiAoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSkge1xuICAgICAgdGhpcmQgPSBpdC5jaGFyQ29kZUF0KDIpO1xuICAgICAgaWYgKHRoaXJkID09PSA4OCB8fCB0aGlyZCA9PT0gMTIwKSByZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmIChmaXJzdCA9PT0gNDgpIHtcbiAgICAgIHN3aXRjaCAoaXQuY2hhckNvZGVBdCgxKSkge1xuICAgICAgICBjYXNlIDY2OiBjYXNlIDk4OiByYWRpeCA9IDI7IG1heENvZGUgPSA0OTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgb2YgL14wYlswMV0rJC9pXG4gICAgICAgIGNhc2UgNzk6IGNhc2UgMTExOiByYWRpeCA9IDg7IG1heENvZGUgPSA1NTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgb2YgL14wb1swLTddKyQvaVxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gK2l0O1xuICAgICAgfVxuICAgICAgZGlnaXRzID0gaXQuc2xpY2UoMik7XG4gICAgICBsZW5ndGggPSBkaWdpdHMubGVuZ3RoO1xuICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvZGUgPSBkaWdpdHMuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZiAoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKSByZXR1cm4gTmFOO1xuICAgICAgfSByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG4gICAgfVxuICB9IHJldHVybiAraXQ7XG59O1xuXG4vLyBgTnVtYmVyYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1udW1iZXItY29uc3RydWN0b3JcbmlmIChpc0ZvcmNlZChOVU1CRVIsICFOYXRpdmVOdW1iZXIoJyAwbzEnKSB8fCAhTmF0aXZlTnVtYmVyKCcwYjEnKSB8fCBOYXRpdmVOdW1iZXIoJysweDEnKSkpIHtcbiAgdmFyIE51bWJlcldyYXBwZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgZHVtbXkgPSB0aGlzO1xuICAgIHJldHVybiBkdW1teSBpbnN0YW5jZW9mIE51bWJlcldyYXBwZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DTEFTU09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBOdW1iZXJQcm90b3R5cGUudmFsdWVPZi5jYWxsKGR1bW15KTsgfSkgOiBjbGFzc29mKGR1bW15KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZU51bWJlcih0b051bWJlcihpdCkpLCBkdW1teSwgTnVtYmVyV3JhcHBlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSBERVNDUklQVE9SUyA/IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlTnVtYmVyKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTMjAxNSAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTMjAxNSBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXIsJyArXG4gICAgLy8gRVNOZXh0XG4gICAgJ2Zyb21TdHJpbmcscmFuZ2UnXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKE5hdGl2ZU51bWJlciwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcyhOdW1iZXJXcmFwcGVyLCBrZXkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShOdW1iZXJXcmFwcGVyLCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihOYXRpdmVOdW1iZXIsIGtleSkpO1xuICAgIH1cbiAgfVxuICBOdW1iZXJXcmFwcGVyLnByb3RvdHlwZSA9IE51bWJlclByb3RvdHlwZTtcbiAgTnVtYmVyUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyV3JhcHBlcjtcbiAgcmVkZWZpbmUoZ2xvYmFsLCBOVU1CRVIsIE51bWJlcldyYXBwZXIpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOTUwZTllYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGFzaGJvYXJkUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRGFzaGJvYXJkUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E5NTBlOWVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E5NTBlOWVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E5NTBlOWVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXNoYm9hcmRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOTUwZTllYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhOTUwZTllYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWQyM2MxYjUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1ZDIzYzFiNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZDIzYzFiNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZDIzYzFiNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDIzYzFiNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZDIzYzFiNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NeVBhdGllbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY1Y2JjZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NeVBhdGllbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXlQYXRpZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTXlQYXRpZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFlZjVjYmNmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFlZjVjYmNmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFlZjVjYmNmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NeVBhdGllbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY1Y2JjZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxZWY1Y2JjZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeVBhdGllbnRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGF0aWVudEFkZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzliNjNjNmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGF0aWVudEFkZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhdGllbnRBZGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BhdGllbnRBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzliNjNjNmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3OWI2M2M2Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc5YjYzYzZjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc5YjYzYzZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc5YjYzYzZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYXRpZW50QWRkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OWI2M2M2YyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3OWI2M2M2YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeVBhdGllbnRzL1BhdGllbnRBZGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NeVByZXNjcmlwdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwNjNiNTI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL015UHJlc2NyaXB0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL015UHJlc2NyaXB0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTXlQcmVzY3JpcHRpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjA2M2I1MjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjA2M2I1MjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjA2M2I1MjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL015UHJlc2NyaXB0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA2M2I1MjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjA2M2I1MjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvZG9jdG9yL0Rhc2hib2FyZFBhZ2UvTXlQcmVzY3JpcHRpb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXlXb3Jrc2hlZXRUZW1wbGF0ZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5OWRmNWVjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL015V29ya3NoZWV0VGVtcGxhdGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXlXb3Jrc2hlZXRUZW1wbGF0ZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL015V29ya3NoZWV0VGVtcGxhdGVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDk5ZGY1ZWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDk5ZGY1ZWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDk5ZGY1ZWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL015V29ya3NoZWV0VGVtcGxhdGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOTlkZjVlYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwOTlkZjVlYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvRGFzaGJvYXJkUGFnZS9NeVdvcmtzaGVldFRlbXBsYXRlcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXNoYm9hcmRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeVBhdGllbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015UGF0aWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhdGllbnRBZGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF0aWVudEFkZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlQcmVzY3JpcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015UHJlc2NyaXB0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlXb3Jrc2hlZXRUZW1wbGF0ZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlXb3Jrc2hlZXRUZW1wbGF0ZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJkYi1kb2N0b3JcIiwgYXR0cnM6IHsgaWQ6IFwiZGFzaGJvYXJkXCIgfSB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJoMVwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LCBbXG4gICAgICAgICAgICAhX3ZtLnByZXNjcmlQcm9jZXNzXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJCaWVudmVudWUgc3VyIHZvdHJlIGRhc2hib2FyZCAhXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvaGFuZC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgZCd1bmUgbWFpbiBxdWkgZmFpdCAnY291Y291J1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5wcmVzY3JpUHJvY2Vzc1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByZXNjcmktcHJvY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQ3LDqWF0aW9uIGQndW5lIHByZXNjcmlwdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zdG9wUHJlc2NyaVByb2Nlc3MgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFubnVsZXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwibWFpblwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwid2l0aC1ub3RpZnNcIjpcbiAgICAgICAgICAgICAgIV92bS5kb2N0b3IuY2l0eSB8fFxuICAgICAgICAgICAgICAhX3ZtLmRvY3Rvci5nZW5kZXIgfHxcbiAgICAgICAgICAgICAgIV92bS5kb2N0b3IuZmlyc3RuYW1lIHx8XG4gICAgICAgICAgICAgICFfdm0uZG9jdG9yLmxhc3RuYW1lIHx8XG4gICAgICAgICAgICAgICFfdm0uZG9jdG9yLmlzVmVyaWZpZWRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk15RGFzaGJvYXJkTm90aWZpY2F0aW9uc1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtdmlld1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgZG9jdG9yOiBfdm0uZG9jdG9yIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLmFjdGl2ZVRhYiA9PT0gMVxuICAgICAgICAgICAgICAgID8gX2MoXCJNeVByZXNjcmlwdGlvbnNcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRvY3RvcjogX3ZtLmRvY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JQcmVzY3JpcHRpb25zOiBfdm0uZ2V0RG9jdG9yUHJlc2NyaXB0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICBjc3JmVG9rZW5SZW1vdmVXb3Jrc2hlZXQ6IF92bS5jc3JmVG9rZW5SZW1vdmVXb3Jrc2hlZXQsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0RvY3RvcldvcmtzaGVldHM6IF92bS5sb2FkaW5nRG9jdG9yV29ya3NoZWV0c1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBwcmVzY3JpUHJvY2VzczogX3ZtLnN0YXJ0UHJlc2NyaVByb2Nlc3MgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uYWN0aXZlVGFiID09PSAyXG4gICAgICAgICAgICAgICAgPyBfYyhcIk15V29ya3NoZWV0VGVtcGxhdGVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkb2N0b3I6IF92bS5kb2N0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0VGVtcGxhdGVzOiBfdm0uZ2V0V29ya3NoZWV0VGVtcGxhdGVzLFxuICAgICAgICAgICAgICAgICAgICAgIHRhZ3NGcm9tRXhlcmNpc2VzOiBfdm0udGFnc0Zyb21FeGVyY2lzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY3NyZlRva2VuUmVtb3ZlV29ya3NoZWV0OiBfdm0uY3NyZlRva2VuUmVtb3ZlV29ya3NoZWV0LFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdBbGxXb3Jrc2hlZXRzOiBfdm0ubG9hZGluZ0FsbFdvcmtzaGVldHMsXG4gICAgICAgICAgICAgICAgICAgICAgcHJlc2NyaVByb2Nlc3M6IF92bS5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldCxcbiAgICAgICAgICAgICAgICAgICAgICBidG5Mb2FkaW5nV29ya3NoZWV0UHJlc2NyaVByb2Nlc3NSZWRpcmVjdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5idG5Mb2FkaW5nV29ya3NoZWV0UHJlc2NyaVByb2Nlc3NSZWRpcmVjdFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHByZXNjcmlQcm9jZXNzV29ya3NoZWV0Q2hvaWNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldFByZXNjcmlQcm9jZXNzV29ya3NoZWV0Q2hvaWNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFzaWRlXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTXlEYXNoYm9hcmROb3RpZmljYXRpb25zXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNrdG9wLXZpZXdcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBkb2N0b3I6IF92bS5kb2N0b3IgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJNeVBhdGllbnRzXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZG9jdG9yOiBfdm0uZG9jdG9yLFxuICAgICAgICAgICAgICAgICAgY3NyZlRva2VuQWRkUGF0aWVudDogX3ZtLmNzcmZUb2tlbkFkZFBhdGllbnQsXG4gICAgICAgICAgICAgICAgICBjc3JmVG9rZW5SZW1vdmVQYXRpZW50OiBfdm0uY3NyZlRva2VuUmVtb3ZlUGF0aWVudCxcbiAgICAgICAgICAgICAgICAgIGNzcmZUb2tlbkNyZWF0ZVBhdGllbnQ6IF92bS5jc3JmVG9rZW5DcmVhdGVQYXRpZW50LFxuICAgICAgICAgICAgICAgICAgcHJlc2NyaVByb2Nlc3M6IF92bS5wcmVzY3JpUHJvY2Vzc1BhdGllbnQsXG4gICAgICAgICAgICAgICAgICBidG5Mb2FkaW5nUGF0aWVudFByZXNjcmlQcm9jZXNzUmVkaXJlY3Q6XG4gICAgICAgICAgICAgICAgICAgIF92bS5idG5Mb2FkaW5nUGF0aWVudFByZXNjcmlQcm9jZXNzUmVkaXJlY3RcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBwcmVzY3JpUHJvY2Vzc1BhdGllbnRDaG9pY2U6XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZXRQcmVzY3JpUHJvY2Vzc1BhdGllbnRDaG9pY2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiAhX3ZtLmRvY3Rvci5jaXR5IHx8XG4gICAgIV92bS5kb2N0b3IuZ2VuZGVyIHx8XG4gICAgIV92bS5kb2N0b3IuZmlyc3RuYW1lIHx8XG4gICAgIV92bS5kb2N0b3IubGFzdG5hbWUgfHxcbiAgICAhX3ZtLmRvY3Rvci5pc1ZlcmlmaWVkXG4gICAgPyBfYyhcbiAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIixcbiAgICAgICAgICBjbGFzczogeyByZWR1Y2VkOiAhX3ZtLiRwYXJlbnQubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50IH0sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZGFzaGJvYXJkLW5vdGlmaWNhdGlvbnNcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvZ2dsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRwYXJlbnQubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50ID0gIV92bS4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgIC5teURCTm90aWZpY2F0aW9uc0NvbnRlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIiB9KV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiTm90aWZpY2F0aW9uc1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJoZWlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS4kcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudFxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9ucy1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nICYmICFfdm0uZG9jdG9yLmlzVmVyaWZpZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbnMtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbi1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBWw6lyaWZpZXIgdm90cmUgYWRyZXNzZSBlbWFpbFxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbi1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZWQ6IF92bS5hY3Rpb25JblByb2dyZXNzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1saW5rIHZlcmlmLW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2VuZFZlcmlmRW1haWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWVudmVsb3BlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUmVudm95ZXIgbGllblwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICghX3ZtLmRvY3Rvci5jaXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICFfdm0uZG9jdG9yLmdlbmRlciB8fFxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3Rvci5maXJzdG5hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgIV92bS5kb2N0b3IubGFzdG5hbWUpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb25zLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24tbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsw6l0ZXIgdm90cmUgcHJvZmlsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbi1hY3Rpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvcGFyYW1ldHJlc1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1wZW4gaWNvbi00XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJDb21wbMOpdGVyXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctYmxvY2sgbm90aWZpY2F0aW9ucy1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHctNjAgbm90aWZpY2F0aW9uLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgdy0yNSBub3RpZmljYXRpb24tYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWJsb2NrIG5vdGlmaWNhdGlvbnMtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3LTMwIG5vdGlmaWNhdGlvbi1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHctMzAgbm90aWZpY2F0aW9uLWFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIixcbiAgICAgIGNsYXNzOiB7IHJlZHVjZWQ6ICFfdm0uJHBhcmVudC5teVBhdGllbnRzQ29udGVudCB9LFxuICAgICAgYXR0cnM6IHsgaWQ6IFwibXktcGF0aWVudHNcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvZ2dsZS1jb250ZW50XCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLiRwYXJlbnQubXlQYXRpZW50c0NvbnRlbnQgPSAhX3ZtLiRwYXJlbnQubXlQYXRpZW50c0NvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY2hldnJvbi1kb3duIGljb24tM1wiIH0pXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJNZXMgUGF0aWVudHNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sIFtcbiAgICAgICAgX3ZtLnByZXNjcmlQcm9jZXNzXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXNjcmktcHJvY2Vzcy1kaWFsb2dcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInN0ZXAtbnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1mb2xkZXItcGx1c1wiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiRXRhcGVcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS4kcGFyZW50LnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWQgPyAxIDogMlxuICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiVmV1aWxsZXogU8OpbGVjdGlvbm5lciB1biBwYXRpZW50XCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJoZWlnaHRcIiB9IH0sIFtcbiAgICAgICAgX3ZtLiRwYXJlbnQubXlQYXRpZW50c0NvbnRlbnRcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmltYXJ5LWFjdGlvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIkZpbHRyZXIgcGFyIG5vbSBvdSBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tcHJpbWFyeS1hY3Rpb24gYWRkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFqb3V0ZXIgdW4gcGF0aWVudFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjU1ODIwMTgxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWFjdGlvbiBhZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBmbG9hdGluZzogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2RhbEFkZFBhdGllbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBsdXMtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNsYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCIzeFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidnMtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLiRwYXJlbnQubG9hZGluZ0FsbFBhdGllbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RhbEFkZFBhdGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kYWxBZGRQYXRpZW50ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxBZGRQYXRpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiUGF0aWVudEFkZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yOiBfdm0uZG9jdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBhdGllbnRzOiBfdm0uYWxsUGF0aWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0FsbFBhdGllbnRzOiBfdm0ubG9hZGluZ0FsbFBhdGllbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcmZUb2tlbkFkZFBhdGllbnQ6IF92bS5jc3JmVG9rZW5BZGRQYXRpZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcmZUb2tlbkNyZWF0ZVBhdGllbnQ6IF92bS5jc3JmVG9rZW5DcmVhdGVQYXRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkUGF0aWVudDogX3ZtLmFkZFBhdGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbEFkZFBhdGllbnQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZGFsQWRkUGF0aWVudCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGF0aWVudHMtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdEb2N0b3JQYXRpZW50c1xuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0RG9jdG9yUGF0aWVudHMsIGZ1bmN0aW9uKHBhdGllbnQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGksIHN0YXRpY0NsYXNzOiBcInBhdGllbnQtYmxvY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZW1vdmUtdXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlUGF0aWVudChwYXRpZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdXNlci1taW51c1wiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhdGllbnQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBzaXplOiBcIjYwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZGlyZWN0VG9QYXRpZW50RGFzaGJvYXJkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcGF0aWVudC5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXRpZW50LmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2ltZy9hdmF0YXItZGVmYXVsdC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdmF0YXIgZGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5sYXN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYmlydGhkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEFnZShwYXRpZW50LmJpcnRoZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYW5zXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlci1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRpcmVjdFRvUGF0aWVudERhc2hib2FyZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmZpcnN0bmFtZSB8fCBwYXRpZW50Lmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBhdGllbnQuZmlyc3RuYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwYXRpZW50Lmxhc3RuYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwYXRpZW50LmVtYWlsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkaXJlY3RUb1BhdGllbnREYXNoYm9hcmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocGF0aWVudC5lbWFpbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQud29ya3NoZWV0cy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByZXNjcmlwdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC53b3Jrc2hlZXRzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LndvcmtzaGVldHMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcInNcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2NyaXB0aW9ucy1wYXRpZW50LWxpc3RcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LndvcmtzaGVldHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih3b3Jrc2hlZXQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1wcmVzY3JpcHRpb24tYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLnByZXNjcmlQcm9jZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcGFyZW50LnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkID09PSBwYXRpZW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYnRuTG9hZGluZ1BhdGllbnRQcmVzY3JpUHJvY2Vzc1JlZGlyZWN0ID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJlc2NyaVByb2Nlc3NQYXRpZW50Q2hvaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIV92bS5wcmVzY3JpUHJvY2VzcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NQYXRpZW50U2VsZWN0ZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkICE9IHBhdGllbnQuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFzIGZhLWZvbGRlci1wbHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJlc2NyaXJlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJlc2NyaVByb2Nlc3MgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uJHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NQYXRpZW50U2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYXMgZmEtZm9sZGVyLXBsdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTw6lsZWN0aW9ubmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NQYXRpZW50U2VsZWN0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVzY3JpUHJvY2Vzc1BhdGllbnRTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWQgPT09IHBhdGllbnQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYXMgZmEtY2hlY2stY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU8OpbGVjdGlvbm7DqVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjY291bnQtaW5mb3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXR1c1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmIHBhdGllbnQuaXNWZXJpZmllZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0dXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWFjdGl2ZS1zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdGF0dXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWN0aWZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmICFwYXRpZW50LmlzVmVyaWZpZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdHVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1pbmFjdGl2ZS1zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdGF0dXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSW5hY3RpZlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSA9PT0gcGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXR1c1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24td2FpdGluZy1zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdGF0dXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQXR0ZW50ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lmxhc3RMb2dpbkF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsYXN0LWxvZ2luXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRGVybmnDqHJlIGNvbm5leGlvbiA6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0RGF0ZShwYXRpZW50Lmxhc3RMb2dpbkF0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0RvY3RvclBhdGllbnRzICYmXG4gICAgICAgICAgICAgICAgIV92bS5nZXREb2N0b3JQYXRpZW50cy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAhX3ZtLnNlYXJjaFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXVzZXItbWludXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlZvdXMgbidhdmV6IHBhcyBkZSBwYXRpZW50XCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0RvY3RvclBhdGllbnRzICYmXG4gICAgICAgICAgICAgICAgIV92bS5nZXREb2N0b3JQYXRpZW50cy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdXNlci1taW51c1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF1Y3VuIHBhdGllbnQgbidhIMOpdMOpIHRyb3V2w6kgYXZlY1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoJ1wiJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zZWFyY2gpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoJ1wiJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5sb2FkaW5nRG9jdG9yUGF0aWVudHNcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBsb2FkaW5nLWJsb2NrIHBhdGllbnQtYmxvY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhdGllbnQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgYXZhdGFyXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VyLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBuYW1lIHctMzVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIG1haWwgdy00NVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBwcmVzY3JpcHRpb25zIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgYnRuLXByZXNjcmlwdGlvbi1hY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjY291bnQtaW5mb3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHN0YXR1cyB3LTM1XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxhc3QtbG9naW4gdy00NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2sgcGF0aWVudC1ibG9ja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGF0aWVudC1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBhdmF0YXJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVzZXItbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIG5hbWUgdy0zNVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbWFpbCB3LTQ1XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHByZXNjcmlwdGlvbnMgdy0yNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBidG4tcHJlc2NyaXB0aW9uLWFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWNjb3VudC1pbmZvc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgc3RhdHVzIHctMzVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbGFzdC1sb2dpbiB3LTQ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbG9hZGluZy1ibG9jayBwYXRpZW50LWJsb2NrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYXRpZW50LWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGF2YXRhclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlci1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbmFtZSB3LTM1XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBtYWlsIHctNDVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgcHJlc2NyaXB0aW9ucyB3LTI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGJ0bi1wcmVzY3JpcHRpb24tYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhY2NvdW50LWluZm9zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBzdGF0dXMgdy0zNVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBsYXN0LWxvZ2luIHctNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBsb2FkaW5nLWJsb2NrIHBhdGllbnQtYmxvY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhdGllbnQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgYXZhdGFyXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VyLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBuYW1lIHctMzVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIG1haWwgdy00NVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBwcmVzY3JpcHRpb25zIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgYnRuLXByZXNjcmlwdGlvbi1hY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjY291bnQtaW5mb3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHN0YXR1cyB3LTM1XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxhc3QtbG9naW4gdy00NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2sgcGF0aWVudC1ibG9ja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGF0aWVudC1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBhdmF0YXJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVzZXItbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIG5hbWUgdy0zNVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbWFpbCB3LTQ1XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHByZXNjcmlwdGlvbnMgdy0yNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBidG4tcHJlc2NyaXB0aW9uLWFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWNjb3VudC1pbmZvc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgc3RhdHVzIHctMzVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbGFzdC1sb2dpbiB3LTQ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbG9hZGluZy1ibG9jayBwYXRpZW50LWJsb2NrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYXRpZW50LWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGF2YXRhclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlci1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbmFtZSB3LTM1XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBtYWlsIHctNDVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgcHJlc2NyaXB0aW9ucyB3LTI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGJ0bi1wcmVzY3JpcHRpb24tYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhY2NvdW50LWluZm9zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBzdGF0dXMgdy0zNVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBsYXN0LWxvZ2luIHctNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmRvY3RvclBhdGllbnRzLmxlbmd0aCA+IF92bS5tYXhcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9ucy1kb3R0ZWRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBfdm0uZ2V0TGVuZ3RoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRTZWFyY2goX3ZtLmRvY3RvclBhdGllbnRzLCBfdm0uc2VhcmNoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWF4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb3VudC1wYWdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBQYWdlIDogXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wYWdlKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZzLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kYWxDb25maXJtUmVtb3ZlUGF0aWVudCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLm1vZGFsQ29uZmlybVJlbW92ZVBhdGllbnQgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsQ29uZmlybVJlbW92ZVBhdGllbnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbmZpcm0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiBkZVwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb25maXJtLWRldGFpbCByZW1vdmUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29uZmlybS1pY29uIHJlbW92ZS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdXNlci1taW51c1wiIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VXNlck5hbWUoX3ZtLnJlbW92ZVBhdGllbnREZXRhaWxzKSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb25maXJtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJkZSB2b3RyZSBsaXN0ZS5cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29uZmlybS1idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kYWxDb25maXJtUmVtb3ZlUGF0aWVudCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgQW5udWxlclxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmJ0bkxvYWRpbmdWYWxpZFJlbW92ZVBhdGllbnRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlUGF0aWVudCB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZFJlbW92ZVBhdGllbnQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBDb25maXJtZXJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJBam91dCBkJ3VuIHBhdGllbnRcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uaGlkZVNlbGVjdEJveCxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGlkZVNlbGVjdEJveFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QtZmlsdGVyXCIsXG4gICAgICAgIGNsYXNzOiB7IGxvYWRpbmc6IF92bS5sb2FkaW5nQWxsUGF0aWVudHMgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgIV92bS5sb2FkaW5nQWxsUGF0aWVudHNcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyU2VsZWN0ZWQuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXJTZWxlY3RlZC5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1c2VyLXNlbGVjdGVkIHVzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5yZXNldFNlbGVjdCB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBzaXplOiBcIjM1XCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnVzZXJTZWxlY3RlZC5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnVzZXJTZWxlY3RlZC5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIvaW1nL2F2YXRhci1kZWZhdWx0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXZhdGFyIGRlIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyU2VsZWN0ZWQuZmlyc3RuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyU2VsZWN0ZWQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VXNlck5hbWUoX3ZtLnVzZXJTZWxlY3RlZCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyU2VsZWN0ZWQuYmlydGhkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXJTZWxlY3RlZC5iaXJ0aGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmlydGhkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRBZ2UoX3ZtLnVzZXJTZWxlY3RlZC5iaXJ0aGRhdGUpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtYWlsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXJTZWxlY3RlZC5lbWFpbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0udXNlclNlbGVjdGVkLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIXVzZXJTZWxlY3RlZC5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJiLXItYi16ZXJvXCI6IF92bS5zZWxlY3RCb3gsXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2Vob2xkZXItZ3JheVwiOiBfdm0uc2VsZWN0Qm94XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXNlci1jaG9pY2Utc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAhX3ZtLnNlbGVjdEJveFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJTw6lsZWN0aW9ubmV6IHVuIHBhdGllbnQga2l2aWRcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJSZWNoZXJjaGV6IHVuIHBhdGllbnQga2l2aWRcIixcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWx0ZXIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0Qm94ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrZXl1cDogX3ZtLnNlbGVjdEJveFdpdGhUaHJvdHRsZSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5maWx0ZXIgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXJyb3ctdG9nZ2xlLWJveFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5zZWxlY3RCb3ggfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVTZWxlY3RCb3ggfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJ2cy1pY29uLWFycm93XCIgfSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiaGVpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0Qm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdEJveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QtYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5mb2N1c0lucHV0U2VsZWN0IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5hbGxQYXRpZW50c0ZpbHRlcmVkLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbGxQYXRpZW50c0ZpbHRlcmVkLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGtleTogaSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VsZWN0VXNlcihwYXRpZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgc2l6ZTogXCIzNVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcGF0aWVudC5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhdGllbnQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5maXJzdG5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VXNlck5hbWUocGF0aWVudCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGF0aWVudC5iaXJ0aGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhdGllbnQuYmlydGhkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJpcnRoZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEFnZShwYXRpZW50LmJpcnRoZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtYWlsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBhdGllbnQuZW1haWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5hbGxQYXRpZW50c0ZpbHRlcmVkLmxlbmd0aCAmJiBfdm0uZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdXNlcnMtc2xhc2hcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuIHBhdGllbnQgbidhIMOpdMOpIHRyb3V2w6kgYXZlYyBcXFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihfdm0uX3MoX3ZtLmZpbHRlcikpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdignXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmFsbFBhdGllbnRzRmlsdGVyZWQubGVuZ3RoICYmICFfdm0uZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdXNlcnMtc2xhc2hcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW4gcGF0aWVudCBuJ2Egw6l0w6kgdHJvdXbDqVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWNvbnRhaW5lclwiLFxuICAgICAgICBjbGFzczogeyBkaXNhYmxlZDogX3ZtLmJ0bkxvYWRpbmdWYWxpZEFkZFBhdGllbnQgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmJ0bkxvYWRpbmdWYWxpZEFkZFBhdGllbnQsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLnVzZXJTZWxlY3RlZC5lbWFpbCB8fCBfdm0uYnRuTG9hZGluZ1ZhbGlkQWRkUGF0aWVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRBZGRQYXRpZW50IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJWYWxpZGVyIGxhIHPDqWxlY3Rpb25cIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3JlYXRlLXBhdGllbnQtZm9ybVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidnMtc2VsZWN0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiQ2l2aWxpdMOpXCIgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3JlYXRlUGF0aWVudERldGFpbHMuZ2VuZGVyLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNyZWF0ZVBhdGllbnREZXRhaWxzLCBcImdlbmRlclwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3JlYXRlUGF0aWVudERldGFpbHMuZ2VuZGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidnMtb3B0aW9uXCIsIHsgYXR0cnM6IHsgbGFiZWw6IFwiSW5jb25udVwiLCB2YWx1ZTogXCIwXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkluY29ubnVcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidnMtb3B0aW9uXCIsIHsgYXR0cnM6IHsgbGFiZWw6IFwiTS5cIiwgdmFsdWU6IFwiMVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJNLlwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2cy1vcHRpb25cIiwgeyBhdHRyczogeyBsYWJlbDogXCJNbWVcIiwgdmFsdWU6IFwiMlwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJNbWVcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJQcsOpbm9tXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY3JlYXRlUGF0aWVudERldGFpbHMuZmlyc3RuYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY3JlYXRlUGF0aWVudERldGFpbHMsIFwiZmlyc3RuYW1lXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNyZWF0ZVBhdGllbnREZXRhaWxzLmZpcnN0bmFtZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIk5vbVwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNyZWF0ZVBhdGllbnREZXRhaWxzLmxhc3RuYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY3JlYXRlUGF0aWVudERldGFpbHMsIFwibGFzdG5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3JlYXRlUGF0aWVudERldGFpbHMubGFzdG5hbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBlcnJvcjogX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICYmIF92bS5jcmVhdGVQYXRpZW50RGV0YWlscy5lbWFpbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGRhbmdlcjogX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICE9IG51bGwsXG4gICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiRW1haWxcIixcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgXCJpY29uLWFmdGVyXCI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGtleXVwOiBfdm0udmFsaWRhdGlvbkVtYWlsIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICYmIF92bS5jcmVhdGVQYXRpZW50RGV0YWlscy5lbWFpbFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1lcnJvciBlcnJvciBpY29uLTI0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiYgX3ZtLmNyZWF0ZVBhdGllbnREZXRhaWxzLmVtYWlsXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJtZXNzYWdlLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5jcmVhdGVQYXRpZW50RGV0YWlscy5lbWFpbCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNyZWF0ZVBhdGllbnREZXRhaWxzLCBcImVtYWlsXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNyZWF0ZVBhdGllbnREZXRhaWxzLmVtYWlsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1jb250YWluZXJcIixcbiAgICAgICAgY2xhc3M6IHsgZGlzYWJsZWQ6IF92bS5idG5Mb2FkaW5nVmFsaWRDcmVhdGVQYXRpZW50IH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCB8fFxuICAgICAgICAgICAgICAgICFfdm0uY3JlYXRlUGF0aWVudERldGFpbHMuZW1haWwgfHxcbiAgICAgICAgICAgICAgICBfdm0uYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlUGF0aWVudCxcbiAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmJ0bkxvYWRpbmdWYWxpZENyZWF0ZVBhdGllbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnZhbGlkQ3JlYXRlUGF0aWVudCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiVmFsaWRlciBsYSBjcsOpYXRpb25cIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyLXRleHRcIiB9LCBbX3ZtLl92KFwib3VcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJraXYtYmxvY2sgcy1wcmVzY3JpcHRpb25zXCIsXG4gICAgICBjbGFzczogeyByZWR1Y2VkOiAhX3ZtLiRwYXJlbnQubXlQcmVzY3JpcHRpb25zQ29udGVudCB9LFxuICAgICAgYXR0cnM6IHsgaWQ6IFwibXktd29ya3NoZWV0c1wiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9nZ2xlLWNvbnRlbnQgdGFiXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLiRwYXJlbnQubXlQcmVzY3JpcHRpb25zQ29udGVudCA9ICFfdm0uJHBhcmVudFxuICAgICAgICAgICAgICAgIC5teVByZXNjcmlwdGlvbnNDb250ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIiB9KV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJzXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFjdGl2ZVRhYigxKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl9tKDApXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImluYWN0aXZlXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hY3RpdmVUYWIoMilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fbSgxKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJoZWlnaHRcIiB9IH0sIFtcbiAgICAgICAgX3ZtLiRwYXJlbnQubXlQcmVzY3JpcHRpb25zQ29udGVudFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByaW1hcnktYWN0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlsdHJlciBwYXIgbm9tIGRlIGZpY2hlIGV0L291IHBhdGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UgPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tcHJpbWFyeS1hY3Rpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnByZXNjcmlQcm9jZXNzIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1mb2xkZXItcGx1c1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFByZXNjcmlyZVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWxpc3Qgd2wtZG9jdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0RvY3RvcldvcmtzaGVldHMgJiZcbiAgICAgICAgICAgICAgICBfdm0uZ2V0RG9jdG9yUHJlc2NyaXB0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdldERvY3RvclByZXNjcmlwdGlvbnMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInVzZXItdGl0bGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1c2VyLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIjM1XCIsIGNpcmNsZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkaXJlY3RUb1BhdGllbnREYXNoYm9hcmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5wYXRpZW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogd29ya3NoZWV0LnBhdGllbnQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gd29ya3NoZWV0LnBhdGllbnQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIvaW1nL2F2YXRhci1kZWZhdWx0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5wYXRpZW50LmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBhdGllbnQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZGlyZWN0VG9QYXRpZW50RGFzaGJvYXJkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQucGF0aWVudC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBhdGllbnQuZmlyc3RuYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5wYXRpZW50Lmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1uYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5wYXRpZW50LmZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBhdGllbnQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5wYXRpZW50LmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGV1eC1wb2ludHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI6XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mod29ya3NoZWV0LnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY29tbWVudGFyaWVzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1hY3Rpb24gY29tbWVudGFyaWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZGlyZWN0VG9Xb3Jrc2hlZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQucGF0aWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFyIGZhLWNvbW1lbnQtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb3VudC1jb21tZW50YXJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jb21tZW50YXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGFnUGFydE9mQm9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBhcnRPZkJvZHk6IHdvcmtzaGVldC5wYXJ0T2ZCb2R5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdzR2V0U2Vzc2lvbnMuaW5jbHVkZXMod29ya3NoZWV0LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBwcm9ncmVzc2Jhci1iYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NiYXItYmFzZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci10aHVtYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LndvcmtzaGVldFRvdGFsUHJvZ3Jlc3Npb24gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY291bnQtc2Vzc2lvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkaW5nc0dldFNlc3Npb25zLmluY2x1ZGVzKHdvcmtzaGVldC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHNlc3Npb24tbmJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlc3Npb24tbmJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgPD1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LndvcmtzaGVldFRvdGFsUHJvZ3Jlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudG90YWxXb3Jrc2hlZXRTZXNzaW9ucyA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXNzaW9uIG7CsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leGVjT3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudG90YWxXb3Jrc2hlZXRTZXNzaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PT0gd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb24gZMOpbWFycsOpZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOQiBTZXNzaW9uc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWV4ZXJjaXNlIGljb24tN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHdvcmtzaGVldC5leGVyY2lzZXMubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2ljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlcy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtdGltaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh3b3Jrc2hlZXQucGVyRGF5KSArIFwieFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhciBqb3VyIC1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHdvcmtzaGVldC5wZXJXZWVrKSArIFwieFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhciBzZW1haW5lXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1wZXJpb2RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNsb2NrIGljb24tMTFcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQw6lyaW9kZSA6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mod29ya3NoZWV0LmR1cmF0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbWFpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kdXJhdGlvbiA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcInNcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1kZXRhaWxzIHJlZHVjZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWV4ZXJjaXNlIGljb24tN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh3b3Jrc2hlZXQuZXhlcmNpc2VzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXguXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC10aW1pbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1jYWxlbmRhciBpY29uLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh3b3Jrc2hlZXQucGVyRGF5KSArIFwieFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8gam91ciAtXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh3b3Jrc2hlZXQucGVyV2VlaykgKyBcInhcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIHNlbS5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LXBlcmlvZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWNsb2NrIGljb24tMTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mod29ya3NoZWV0LmR1cmF0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW0uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRucy1kYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNyZWF0ZWQtYXQtZGF0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNyw6nDqSBsZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXREYXRlKHdvcmtzaGVldC5jcmVhdGVkQXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50b3RhbFdvcmtzaGVldFNlc3Npb25zID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjaXJjbGU6IFwiXCIsIGZsb2F0aW5nOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRpcmVjdFRvV29ya3NoZWV0UGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQucGF0aWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtZXllXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnMgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBmbG9hdGluZzogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkaXJlY3RUb1dvcmtzaGVldFBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBhdGllbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjaXJjbGU6IFwiXCIsIGZsb2F0aW5nOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRpcmVjdFRvRWRpdFBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5wYXRpZW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGVuXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgZmxvYXRpbmc6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVdvcmtzaGVldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS10cmFzaFwiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0RvY3RvcldvcmtzaGVldHMgJiZcbiAgICAgICAgICAgICAgICAhX3ZtLmdldERvY3RvclByZXNjcmlwdGlvbnMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgIV92bS5zZWFyY2hcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1mb2xkZXItbWludXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlZvdXMgbidhdmV6IHBhcyBkZSBwcmVzY3JpcHRpb25cIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nRG9jdG9yV29ya3NoZWV0cyAmJlxuICAgICAgICAgICAgICAgICFfdm0uZ2V0RG9jdG9yUHJlc2NyaXB0aW9ucy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZm9sZGVyLW1pbnVzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXVjdW5lIHByZXNjcmlwdGlvbiBuJ2Egw6l0w6kgdHJvdXbDqWUgYXZlY1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoJ1wiJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zZWFyY2gpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoJ1wiJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5sb2FkaW5nRG9jdG9yV29ya3NoZWV0c1xuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXIgdy04NVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGltaW5nIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcGVyaW9kIHctMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXIgdy04NVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGltaW5nIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcGVyaW9kIHctMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXIgdy04NVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGltaW5nIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcGVyaW9kIHctMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXIgdy04NVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGltaW5nIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcGVyaW9kIHctMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXIgdy04NVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGltaW5nIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcGVyaW9kIHctMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXIgdy04NVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGltaW5nIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcGVyaW9kIHctMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZG9jdG9yUHJlc2NyaXB0aW9ucy5sZW5ndGggPiBfdm0ubWF4XG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbnMtZG90dGVkXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogX3ZtLmdldExlbmd0aChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0U2VhcmNoKF92bS5kb2N0b3JQcmVzY3JpcHRpb25zLCBfdm0uc2VhcmNoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWF4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb3VudC1wYWdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBQYWdlIDogXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wYWdlKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZzLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kYWxDb25maXJtUmVtb3ZlV29ya3NoZWV0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubW9kYWxDb25maXJtUmVtb3ZlV29ya3NoZWV0ID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RhbENvbmZpcm1SZW1vdmVXb3Jrc2hlZXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbmZpcm0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiBkZVwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb25maXJtLWRldGFpbCByZW1vdmUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29uZmlybS1pY29uIHJlbW92ZS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdHJhc2hcIiB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnJlbW92ZVdvcmtzaGVldERldGFpbHMudGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb25maXJtLWJ1dHRvbnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2RhbENvbmZpcm1SZW1vdmVXb3Jrc2hlZXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIEFubnVsZXJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5idG5Mb2FkaW5nVmFsaWRSZW1vdmVXb3Jrc2hlZXRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlV29ya3NoZWV0IH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnZhbGlkUmVtb3ZlV29ya3NoZWV0IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgQ29uZmlybWVyXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImgyXCIsIFtfYyhcInNwYW5cIiwgW192bS5fdihcIk1lcyBwcmVzY3JpcHRpb25zXCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImgyXCIsIFtfYyhcInNwYW5cIiwgW192bS5fdihcIk1lcyBmaWNoZXNcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJraXYtYmxvY2sgcy13b3Jrc2hlZXQtdGVtcGxhdGVzXCIsXG4gICAgICBjbGFzczogeyByZWR1Y2VkOiAhX3ZtLiRwYXJlbnQubXlXb3Jrc2hlZXRUZW1wbGF0ZXNDb250ZW50IH0sXG4gICAgICBhdHRyczogeyBpZDogXCJteS13b3Jrc2hlZXRzXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b2dnbGUtY29udGVudCB0YWJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uJHBhcmVudC5teVdvcmtzaGVldFRlbXBsYXRlc0NvbnRlbnQgPSAhX3ZtLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAubXlXb3Jrc2hlZXRUZW1wbGF0ZXNDb250ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIiB9KV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJzXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImluYWN0aXZlXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hY3RpdmVUYWIoMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fbSgwKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hY3RpdmVUYWIoMilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fbSgxKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LCBbXG4gICAgICAgIF92bS5wcmVzY3JpUHJvY2VzcyAmJiBfdm0uZ2V0V29ya3NoZWV0VGVtcGxhdGVzLmxlbmd0aFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmVzY3JpLXByb2Nlc3MtZGlhbG9nXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzdGVwLW51bVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZm9sZGVyLXBsdXNcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIkV0YXBlXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKCFfdm0uJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1BhdGllbnRTZWxlY3RlZCA/IDEgOiAyKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFZldWlsbGV6IFPDqWxlY3Rpb25uZXIgdW5lIGZpY2hlLCB2b3VzIHBvdXJyZXogbGFcXG4gICAgICAgICAgICAgICAgcGVyc29ubmFsaXNlciDDoCBsJ8OpdGFwZSBzdWl2YW50ZVxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sIFtcbiAgICAgICAgX3ZtLnByZXNjcmlQcm9jZXNzXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcmVzY3JpLXByb2Nlc3MtZGlhbG9nIHBwLWNyZWF0ZS13b3Jrc2hlZXRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RlcC1udW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZm9sZGVyLXBsdXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJFdGFwZVxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgIV92bS4kcGFyZW50LnByZXNjcmlQcm9jZXNzUGF0aWVudFNlbGVjdGVkID8gMSA6IDJcbiAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmdldFdvcmtzaGVldFRlbXBsYXRlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIk91IGNyw6llelwiKV0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJDcsOpZXpcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiB1bmUgbm91dmVsbGUgZmljaGVcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJoZWlnaHRcIiB9IH0sIFtcbiAgICAgICAgX3ZtLiRwYXJlbnQubXlXb3Jrc2hlZXRUZW1wbGF0ZXNDb250ZW50XG4gICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJpbWFyeS1hY3Rpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGaWx0cmVyIHBhciBub20gZGUgZmljaGUgZXQvb3UgY3LDqWF0ZXVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2aWV3LWFsbC10ZW1wbGF0ZXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlZvaXIgbGVzIGZpY2hlcyBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXMgYXV0cmVzIHByYXQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZpZXdBbGxUZW1wbGF0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZpZXdBbGxUZW1wbGF0ZXMgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmlld0FsbFRlbXBsYXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImtpdi1zZWxlY3QgdGFnc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFRhZ3NGcm9tQWxsLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTW90cy1DbMOpc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWdzID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFnc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0VGFnc0Zyb21BbGwsIGZ1bmN0aW9uKHRhZywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IHRhZywgdmFsdWU6IHRhZyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0YWcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJub3REYXRhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWN1biBtb3QtY2zDqVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBzZWxlY3QtdGFnc1wiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tcHJpbWFyeS1hY3Rpb24gYWRkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW192bS5fdihcIiBDcsOpZXIgdW5lIGZpY2hlIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA5ODc4ODE3ODRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLiRwYXJlbnQucHJlc2NyaVByb2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tYWN0aW9uIGFkZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmJ0bkxvYWRpbmdBZGRXb3Jrc2hlZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmc6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRpcmVjdFRvQ3JlYXRlUGFnZSgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBsdXMtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jbGFzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIjN4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kcGFyZW50LnByZXNjcmlQcm9jZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLXByZXNjcmlwdGlvbi1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLnByZXNjcmlQcm9jZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRwYXJlbnQucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5idG5Mb2FkaW5nV29ya3NoZWV0UHJlc2NyaVByb2Nlc3NSZWRpcmVjdCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldENob2ljZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLiRwYXJlbnQucHJlc2NyaVByb2Nlc3MgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uJHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pZCAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZvbGRlci1wbHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNyw6llclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZSBmaWNoZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcGFyZW50LnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHBhcmVudC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWQgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU8OpbGVjdGlvbm7DqVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1saXN0IHdsLWRvY3RvclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0FsbFdvcmtzaGVldHMgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFdvcmtzaGVldFRlbXBsYXRlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdldFdvcmtzaGVldFRlbXBsYXRlcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1c2VyLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRpcmVjdFRvV29ya3NoZWV0UGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtdGl0bGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh3b3Jrc2hlZXQudGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFnc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wod29ya3NoZWV0LmV4ZXJjaXNlc1RhZ3MsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwidGFnLWNoaXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0YWcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUYWdQYXJ0T2ZCb2R5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBhcnRPZkJvZHk6IHdvcmtzaGVldC5wYXJ0T2ZCb2R5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1kZXRhaWxzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWV4ZXJjaXNlIGljb24tN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHdvcmtzaGVldC5leGVyY2lzZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcInNcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LXRpbWluZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWNhbGVuZGFyIGljb24tMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh3b3Jrc2hlZXQucGVyRGF5KSArIFwieFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyIGpvdXIgLVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHdvcmtzaGVldC5wZXJXZWVrKSArIFwieFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyIHNlbWFpbmVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtcGVyaW9kXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtY2xvY2sgaWNvbi0xMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFDDqXJpb2RlIDpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh3b3Jrc2hlZXQuZHVyYXRpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VtYWluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kdXJhdGlvbiA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwic1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlscyByZWR1Y2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1leGVyY2lzZSBpY29uLTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh3b3Jrc2hlZXQuZXhlcmNpc2VzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtdGltaW5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHdvcmtzaGVldC5wZXJEYXkpICsgXCJ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIGpvdXIgLVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHdvcmtzaGVldC5wZXJXZWVrKSArIFwieFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyBzZW0uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LXBlcmlvZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWNsb2NrIGljb24tMTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh3b3Jrc2hlZXQuZHVyYXRpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VtLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRucy1kYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3JlYXRlZC1hdC1kYXRlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3LDqcOpIGxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXREYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3JlYXRlZEF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kb2N0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3b3Jrc2hlZXQuZG9jdG9yLmZpcnN0bmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZG9jdG9yLmxhc3RuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNyZWF0b3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVzZXItYXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogd29ya3NoZWV0LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB3b3Jrc2hlZXQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdmF0YXIgZGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3RuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kb2N0b3IubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjaXJjbGU6IFwiXCIsIGZsb2F0aW5nOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRpcmVjdFRvV29ya3NoZWV0UGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZG9jdG9yLmlkID09PSBfdm0uZG9jdG9yLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZzogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZGlyZWN0VG9FZGl0UGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXBlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kb2N0b3IuaWQgPT09IF92bS5kb2N0b3IuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlV29ya3NoZWV0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtdHJhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJpZy1idXR0b25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuLWNyZWF0ZS1hY3Rpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS4kcGFyZW50LnByZXNjcmlQcm9jZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJ0bkxvYWRpbmdDb3B5V29ya3NoZWV0ID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkaXJlY3RUb0NyZWF0ZVBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXBsdXMtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3BpZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1wcmVzY3JpcHRpb24tYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5wcmVzY3JpUHJvY2VzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWQgPT09IHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYnRuTG9hZGluZ1dvcmtzaGVldFByZXNjcmlQcm9jZXNzUmVkaXJlY3QgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldENob2ljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFfdm0ucHJlc2NyaVByb2Nlc3MgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVzY3JpUHJvY2Vzc1dvcmtzaGVldFNlbGVjdGVkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkICE9IHdvcmtzaGVldC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYS1mb2xkZXItcGx1c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJlc2NyaXJlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmVzY3JpUHJvY2VzcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhLWZvbGRlci1wbHVzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTw6lsZWN0aW9ubmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZXNjcmlQcm9jZXNzV29ya3NoZWV0U2VsZWN0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlc2NyaVByb2Nlc3NXb3Jrc2hlZXRTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pZCA9PT0gd29ya3NoZWV0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmEtY2hlY2stY2lyY2xlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTw6lsZWN0aW9ubsOpXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0FsbFdvcmtzaGVldHMgJiZcbiAgICAgICAgICAgICAgICAgICAgIV92bS5nZXRXb3Jrc2hlZXRUZW1wbGF0ZXMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICFfdm0uc2VhcmNoICYmXG4gICAgICAgICAgICAgICAgICAgICFfdm0uc2VsZWN0ZWRUYWdzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZvbGRlci1taW51c1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJWb3VzIG4nYXZleiBwYXMgZGUgZmljaGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdBbGxXb3Jrc2hlZXRzICYmXG4gICAgICAgICAgICAgICAgICAgICFfdm0uZ2V0V29ya3NoZWV0VGVtcGxhdGVzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAoX3ZtLnNlYXJjaCB8fCBfdm0uc2VsZWN0ZWRUYWdzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1mb2xkZXItbWludXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXVjdW5lIGZpY2hlIG4nYSDDqXTDqSB0cm91dsOpZSBhdmVjXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KCdcIicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihfdm0uX3MoX3ZtLnNlYXJjaCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoJ1wiJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCAmJiBfdm0uc2VsZWN0ZWRUYWdzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImV0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFncy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWdzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VsZWN0ZWRUYWdzLCBmdW5jdGlvbih0YWcsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGksIHN0YXRpY0NsYXNzOiBcInRhZy1jaGlwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGFnKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdBbGxXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWhlYWRlciB3LTg1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgcGFydC1vZi1ib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1leGVyY2lzZXMtY291bnRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtdGltaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTI1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LXBlcmlvZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0xNVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtaGVhZGVyIHctODVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGl0bGUgdy00NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHdvcmtzaGVldC1wcm9ncmVzcy1saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy00NVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC10aW1pbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMjVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtcGVyaW9kXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTE1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbG9hZGluZy1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXIgdy04NVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHdvcmtzaGVldC10aXRsZSB3LTU1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTQ1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LXRpbWluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0yNVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1wZXJpb2RcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMTVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWhlYWRlciB3LTg1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgcGFydC1vZi1ib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1leGVyY2lzZXMtY291bnRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtdGltaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTI1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LXBlcmlvZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0xNVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtaGVhZGVyIHctODVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGl0bGUgdy00NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBwYXJ0LW9mLWJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHdvcmtzaGVldC1wcm9ncmVzcy1saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy00NVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC10aW1pbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMjVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtcGVyaW9kXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTE1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbG9hZGluZy1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXIgdy04NVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHdvcmtzaGVldC10aXRsZSB3LTQ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTQ1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LXRpbWluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0yNVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1wZXJpb2RcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMTVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWhlYWRlciB3LTg1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgcGFydC1vZi1ib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1leGVyY2lzZXMtY291bnRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctNDVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtdGltaW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTI1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LXBlcmlvZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0xNVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uY291bnRXb3Jrc2hlZXRUZW1wbGF0ZXMgPiBfdm0ubWF4XG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbnMtZG90dGVkXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogX3ZtLmdldExlbmd0aChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0U2VhcmNoKF92bS53b3Jrc2hlZXRUZW1wbGF0ZXMsIF92bS5zZWFyY2gpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvdW50LXBhZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFBhZ2UgOiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLnBhZ2UpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidnMtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RhbENvbmZpcm1SZW1vdmVXb3Jrc2hlZXQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5tb2RhbENvbmZpcm1SZW1vdmVXb3Jrc2hlZXQgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsQ29uZmlybVJlbW92ZVdvcmtzaGVldFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29uZmlybS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uIGRlXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbmZpcm0tZGV0YWlsIHJlbW92ZS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb25maXJtLWljb24gcmVtb3ZlLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS10cmFzaFwiIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVtb3ZlV29ya3NoZWV0RGV0YWlscy50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbmZpcm0tYnV0dG9uc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZGFsQ29uZmlybVJlbW92ZVdvcmtzaGVldCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgQW5udWxlclxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmJ0bkxvYWRpbmdWYWxpZFJlbW92ZVdvcmtzaGVldFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nVmFsaWRSZW1vdmVXb3Jrc2hlZXQgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRSZW1vdmVXb3Jrc2hlZXQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBDb25maXJtZXJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaDJcIiwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiTWVzIHByZXNjcmlwdGlvbnNcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaDJcIiwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiTWVzIGZpY2hlc1wiKV0pXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiVnVlIiwiRGFzaGJvYXJkUGFnZSIsImF4aW9zIiwiVnVlQXhpb3MiLCJ1c2UiLCJWdWVzYXgiLCJyZW5kZXIiLCJoIiwiJG1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==