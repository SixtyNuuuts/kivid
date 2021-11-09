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
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var _DashboardPage_DoctorChoice_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DashboardPage/DoctorChoice.vue */ "./assets/vue/patient/DashboardPage/DoctorChoice.vue");
/* harmony import */ var _DashboardPage_MyScores_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DashboardPage/MyScores.vue */ "./assets/vue/patient/DashboardPage/MyScores.vue");
/* harmony import */ var _DashboardPage_MyDashboardNotifications_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DashboardPage/MyDashboardNotifications.vue */ "./assets/vue/patient/DashboardPage/MyDashboardNotifications.vue");
/* harmony import */ var _DashboardPage_MyWorksheets_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DashboardPage/MyWorksheets.vue */ "./assets/vue/patient/DashboardPage/MyWorksheets.vue");
/* harmony import */ var _DashboardPage_MyExerciseStats_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./DashboardPage/MyExerciseStats.vue */ "./assets/vue/patient/DashboardPage/MyExerciseStats.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MyExerciseStats: _DashboardPage_MyExerciseStats_vue__WEBPACK_IMPORTED_MODULE_20__["default"]
  },
  data: function data() {
    return {
      patient: null,
      currentUser: null,
      doctorView: null,
      csrfTokenSelectDoctor: null,
      csrfTokenAcceptDoctor: null,
      csrfTokenDeclineDoctor: null,
      csrfTokenContact: null,
      myDBNotificationsContent: true,
      myScoresContent: true,
      myDoctorContent: true,
      myWorksheetsContent: true,
      loadingDoctor: false,
      loadingPatientWorksheets: false,
      patientWorksheets: []
    };
  },
  methods: {
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
    }
  },
  created: function created() {
    var _this = this;

    vue__WEBPACK_IMPORTED_MODULE_21__["default"].prototype.$vs = this.$vs;
    document.body.classList.add("fuzzy-balls");
    window.addEventListener("resize", this.onResize);
    moment__WEBPACK_IMPORTED_MODULE_14___default().locale("fr-FR");
    var data = JSON.parse(document.getElementById("vueData").innerHTML);
    this.patient = data.patient;
    this.currentUser = data.currentUser;
    this.doctorView = data.doctorView;
    this.csrfTokenAcceptDoctor = data.csrfTokenAcceptDoctor;
    this.csrfTokenDeclineDoctor = data.csrfTokenDeclineDoctor;
    this.csrfTokenSelectDoctor = data.csrfTokenSelectDoctor;
    this.csrfTokenContact = data.csrfTokenContact;
    this.loadingPatientWorksheets = true;
    this.axios.get("/patient/".concat(this.patient.id, "/get/worksheets")).then(function (response) {
      _this.patientWorksheets = response.data.map(function (worksheet) {
        return _objectSpread(_objectSpread({}, worksheet), {}, {
          worksheetProgression: _this.calculWorksheetProgression(worksheet),
          timeLeftBeforeNextSession: null,
          totalWorksheetSessions: null,
          currentWorksheetSession: {}
        });
      });

      if (_this.patientWorksheets.length) {
        _this.patientWorksheets.forEach(function (worksheet) {
          _this.axios.get("/patient/".concat(_this.patient.id, "/get/current-worksheet-session/").concat(worksheet.id, "/time-left-before-next")).then(function (response) {
            worksheet.currentWorksheetSession = response.data.currentWorksheetSession;

            if (response.data.currentWorksheetSession) {
              worksheet.timeLeftBeforeNextSession = _this.getTimeLeftBeforeNextSession(response.data.currentWorksheetSession.endAt);
            }

            if (response.data.notifTimeLeft) {
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

            _this.axios.get("/patient/".concat(_this.patient.id, "/get/total-worksheet-sessions/").concat(worksheet.id)).then(function (response) {
              worksheet.totalWorksheetSessions = response.data;
              _this.loadingPatientWorksheets = false;
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
        _this.loadingPatientWorksheets = false;
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      contactTel: null // contactMessage: "",

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

      this.axios.post("/patient/".concat(this.patient.id, "/select/doctor"), {
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
        email: this.patient.email,
        contactTel: this.contactTel // contactMessage: this.contactMessage,

      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].openSuccessNotification("Message envoyé", response.data); // this.contactMessage = "";

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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.math.sign.js */ "./node_modules/core-js/modules/es.math.sign.js");
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var _MyScores_ScoreRankBlock_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./MyScores/ScoreRankBlock.vue */ "./assets/vue/patient/DashboardPage/MyScores/ScoreRankBlock.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    patient: Object,
    patientWorksheets: Array,
    loadingPatientWorksheets: Boolean,
    doctorView: Boolean
  },
  components: {
    ScoreRankBlock: _MyScores_ScoreRankBlock_vue__WEBPACK_IMPORTED_MODULE_19__["default"]
  },
  data: function data() {
    return {
      loading: false,
      score: 0,
      scoreMax: 50000,
      options: {
        color: "#FF6332",
        "empty-color": "#ffc6b5",
        size: 130,
        thickness: 5,
        "empty-thickness": 3,
        "line-mode": "out 5",
        animation: "rs 700 1000",
        legend: false
      }
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
      if (this.score >= 0 && this.score < 10000) {
        return "nouveau";
      }

      if (this.score >= 10000 && this.score < 20000) {
        return "debutant";
      }

      if (this.score >= 20000 && this.score < 30000) {
        return "amateur";
      }

      if (this.score >= 30000 && this.score < 40000) {
        return "intermediaire";
      }

      if (this.score >= 40000 && this.score < 50000) {
        return "confirme";
      }

      if (this.score >= 50000) {
        return "expert";
      }
    },
    getTotalExerciseCompleted: function getTotalExerciseCompleted() {
      var countStats = 0;
      this.patientWorksheets.forEach(function (w) {
        countStats += w.exerciseStats.length;
      });
      return this.formatNumbThousand(Math.floor(countStats / 3));
    },
    getSensitivityVariation: function getSensitivityVariation() {
      return this.calculVariation("sensitivity");
    },
    getTechnicalVariation: function getTechnicalVariation() {
      return this.calculVariation("technical");
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
      var variationSlice = 1;
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

        var oldStats = stats.sort(function (a, b) {
          return new Date(a.doneAt) - new Date(b.doneAt);
        }).filter(function (es, i) {
          return i <= stats.length - 1 - variationSlice;
        });
        var oldStatsAverage = this.statsAverage(oldStats);
        result = Math.round((lastStatsAverage - oldStatsAverage) * 10 * 10) / 10;
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
        r = parseInt(r + s.rating);
        return r;
      }, []) / stats.length * 10) / 10;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.loading = true;
    this.axios.get("/patient/".concat(this.patient.id, "/get/score")).then(function (response) {
      _this.score = response.data.score ? response.data.score : 0;

      if (response.data.notifScoreRank) {
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
      !_vm.patient.doctor && !_vm.doctorView
        ? _c("DoctorChoice", {
            attrs: {
              patient: _vm.patient,
              csrfTokenSelectDoctor: _vm.csrfTokenSelectDoctor,
              csrfTokenContact: _vm.csrfTokenContact
            }
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
                                            false ===
                                              _vm.patient.addRequestDoctor &&
                                            !_vm.loadingDoctor
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
                                                    "p",
                                                    { staticClass: "name" },
                                                    [
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            _vm.getUserName(
                                                              _vm.patient.doctor
                                                            )
                                                          ) +
                                                          "\n                                    "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass: "entity-city"
                                                    },
                                                    [
                                                      _vm.patient.doctor
                                                        .entityName &&
                                                      !_vm.patient.doctor.city
                                                        ? _c("span", [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm.patient
                                                                    .doctor
                                                                    .entityName
                                                                ) +
                                                                "\n                                        "
                                                            )
                                                          ])
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      !_vm.patient.doctor
                                                        .entityName &&
                                                      _vm.patient.doctor.city
                                                        ? _c("span", [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm.patient
                                                                    .doctor.city
                                                                ) +
                                                                "\n                                        "
                                                            )
                                                          ])
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _vm.patient.doctor
                                                        .entityName &&
                                                      _vm.patient.doctor.city
                                                        ? _c("span", [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm.patient
                                                                    .doctor
                                                                    .entityName
                                                                ) +
                                                                ",\n                                            " +
                                                                _vm._s(
                                                                  _vm.patient
                                                                    .doctor.city
                                                                ) +
                                                                "\n                                        "
                                                            )
                                                          ])
                                                        : _vm._e()
                                                    ]
                                                  )
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
      _c("h1", [_vm._v("Bienvenue sur Kivid !")]),
      _vm._v(" "),
      _vm._m(0),
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
                                _vm._s(_vm.getUserName(_vm.doctorSelected)) +
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
                            ? "Sélectionnez un praticien"
                            : "Recherchez un praticien",
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.getUserName(doctor)
                                                ) +
                                                "\n                                "
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
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "contact",
          on: {
            click: function($event) {
              _vm.modalContact = true
            }
          }
        },
        [_vm._v("Vous n'avez pas de praticien ?")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "btn-container" },
        [
          _c(
            "vs-button",
            {
              attrs: { disabled: !_vm.doctorSelected },
              on: { click: _vm.valideDoctorChoice }
            },
            [_vm._v("Valider et accéder à mon dashboard")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          attrs: { width: "450px" },
          model: {
            value: _vm.modalContact,
            callback: function($$v) {
              _vm.modalContact = $$v
            },
            expression: "modalContact"
          }
        },
        [
          _c("h2", [_vm._v("Je n'ai pas de praticien")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "contact-form" },
            [
              _c("vs-input", {
                attrs: { "label-placeholder": "Prénom", type: "text" },
                model: {
                  value: _vm.patient.firstname,
                  callback: function($$v) {
                    _vm.$set(_vm.patient, "firstname", $$v)
                  },
                  expression: "patient.firstname"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                attrs: { "label-placeholder": "Nom", type: "text" },
                model: {
                  value: _vm.patient.lastname,
                  callback: function($$v) {
                    _vm.$set(_vm.patient, "lastname", $$v)
                  },
                  expression: "patient.lastname"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                class: {
                  error: _vm.validationMessage.email && _vm.patient.email
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
                    _vm.validationMessage.email && _vm.patient.email
                      ? {
                          key: "icon",
                          fn: function() {
                            return [
                              _c("i", {
                                staticClass: "kiv-error error icon-24"
                              })
                            ]
                          },
                          proxy: true
                        }
                      : null,
                    _vm.validationMessage.email && _vm.patient.email
                      ? {
                          key: "message-danger",
                          fn: function() {
                            return [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.validationMessage.email) +
                                  "\n                "
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
                  value: _vm.patient.email,
                  callback: function($$v) {
                    _vm.$set(_vm.patient, "email", $$v)
                  },
                  expression: "patient.email"
                }
              }),
              _vm._v(" "),
              _c("VuePhoneNumberInput", {
                class: {
                  filled: _vm.contactTel != null,
                  error: _vm.errorTel
                },
                attrs: {
                  "default-country-code": "FR",
                  "only-countries": ["FR"],
                  "no-example": true,
                  "no-country-selector": true,
                  translations: {
                    countrySelectorLabel: "Code pays",
                    countrySelectorError: "Choisir un pays",
                    phoneNumberLabel: "Numéro de téléphone",
                    example: "Exemple :"
                  },
                  color: "#c1b79d",
                  "valid-color": "#c1b79d",
                  "error-color": "#ff564b",
                  error: _vm.errorTel
                },
                model: {
                  value: _vm.contactTel,
                  callback: function($$v) {
                    _vm.contactTel = $$v
                  },
                  expression: "contactTel"
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
              class: { disabled: _vm.btnLoadingValidContact }
            },
            [
              _c(
                "vs-button",
                {
                  staticClass: "w-100",
                  attrs: {
                    disabled:
                      _vm.validationMessage.email ||
                      !_vm.patient.email ||
                      _vm.btnLoadingValidContact,
                    loading: _vm.btnLoadingValidContact
                  },
                  on: { click: _vm.validContact }
                },
                [_vm._v("Me contacter")]
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
    return _c("h4", [
      _vm._v("\n        Vous n’avez pas encore de praticien attritré. "),
      _c("br"),
      _vm._v("\n        Recherchez-en dans la liste ci-dessous.\n    ")
    ])
  }
]
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
                        _c("div", [
                          _c("p", [_vm._v("Vraiment trop difficile")])
                        ]),
                        _vm._v(" "),
                        _c("div", [_c("p", [_vm._v("Trop difficile")])]),
                        _vm._v(" "),
                        _c("div", [_c("p", [_vm._v("Ok")])]),
                        _vm._v(" "),
                        _c("div", [_c("p", [_vm._v("Trop facile")])]),
                        _vm._v(" "),
                        _c("div", [_c("p", [_vm._v("Beaucoup trop facile")])])
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
                          _c("span", [_vm._v("10 000 pts")])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "point" }),
                          _vm._v(" "),
                          _c("span", [_vm._v("20 000 pts")])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "point" }),
                          _vm._v(" "),
                          _c("span", [_vm._v("30 000 pts")])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "point" }),
                          _vm._v(" "),
                          _c("span", [_vm._v("40 000 pts")])
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
                                        !_vm.doctorView
                                          ? _c("span", [
                                              _vm._v(
                                                "Vous avez fini la fiche !"
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.doctorView &&
                                        worksheet.currentWorksheetSession
                                          ? _c("span", [_vm._v("En cours")])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.doctorView &&
                                        !worksheet.currentWorksheetSession &&
                                        worksheet.exerciseStats.length === 0
                                          ? _c("span", [_vm._v("Non démarrée")])
                                          : _vm._e()
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
                                        !_vm.doctorView
                                          ? _c("span", [
                                              _vm._v(
                                                "Vous avez fini la fiche !"
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.doctorView &&
                                        worksheet.currentWorksheetSession
                                          ? _c("span", [_vm._v("En cours")])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.doctorView &&
                                        !worksheet.currentWorksheetSession &&
                                        worksheet.exerciseStats.length === 0
                                          ? _c("span", [_vm._v("Non démarrée")])
                                          : _vm._e()
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
                          worksheet.exerciseStats.length > 0)
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
                                worksheet.totalWorksheetSessions ==
                                  worksheet.currentWorksheetSession.execOrder
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC1kYXNoYm9hcmQtcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7QUFDQUEsK0NBQUEsQ0FBUUcsaURBQVIsRUFBa0JELDhDQUFsQixHQUVBOztDQUdBOztBQUNBO0FBQ0FGLCtDQUFBLENBQVFNLDZEQUFSLEdBRUE7QUFDQTs7QUFDQTtBQUNBTiwrQ0FBQSxDQUFRUSxtQkFBTyxDQUFDLDBEQUFELENBQWYsRUFBaUM7QUFDN0JDLEVBQUFBLGFBQWEsRUFBRSxlQURjO0FBRTdCQyxFQUFBQSxXQUFXLEVBQUU7QUFGZ0IsQ0FBakM7QUFLQSxJQUFJViwyQ0FBSixDQUFRO0FBQ0pXLEVBQUFBLE1BQU0sRUFBRSxnQkFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1gsMERBQUQsQ0FBTDtBQUFBO0FBREwsQ0FBUixFQUVHWSxNQUZILENBRVUsTUFGVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSwwRkFEQTtBQUVBLGtGQUZBO0FBR0Esa0hBSEE7QUFJQSwwRkFKQTtBQUtBO0FBTEEsR0FEQTtBQVFBLE1BUkEsa0JBUUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsdUJB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QTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DLHdCQUF3QjtBQUM1RCxzQ0FBc0MsK0JBQStCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNDQUFzQztBQUN0RSxrQ0FBa0MsaUNBQWlDO0FBQ25FO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxvQ0FBb0MscUNBQXFDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esa0NBQWtDLGtDQUFrQztBQUNwRSxvQ0FBb0Msa0NBQWtDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0Msd0JBQXdCO0FBQzVELHNDQUFzQywrQkFBK0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9kYXNoYm9hcmQtcGFnZS5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9Eb2N0b3JDaG9pY2UudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeUV4ZXJjaXNlU3RhdHMudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzL1Njb3JlUmFua0Jsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlXb3Jrc2hlZXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS52dWU/N2U4MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9Eb2N0b3JDaG9pY2UudnVlPzU0Y2UiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT81NWFmIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015RXhlcmNpc2VTdGF0cy52dWU/NDQyNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy52dWU/NTE0MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy9TY29yZVJhbmtCbG9jay52dWU/ZWRiMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvRG9jdG9yQ2hvaWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015RXhlcmNpc2VTdGF0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlTY29yZXMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzL1Njb3JlUmFua0Jsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVdvcmtzaGVldHMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlLnZ1ZT9jMGM4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL0RvY3RvckNob2ljZS52dWU/ZWE4ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlPzZmMDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlFeGVyY2lzZVN0YXRzLnZ1ZT8xNWZjIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzLnZ1ZT8yNzE4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzL1Njb3JlUmFua0Jsb2NrLnZ1ZT9hODVkIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015V29ya3NoZWV0cy52dWU/MGE2MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS52dWU/YjI3MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9Eb2N0b3JDaG9pY2UudnVlPzExMTYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT9mN2IwIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015RXhlcmNpc2VTdGF0cy52dWU/NDhiNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy52dWU/NTUyNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy9TY29yZVJhbmtCbG9jay52dWU/MjAwZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS52dWU/YTk2OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9Eb2N0b3JDaG9pY2UudnVlPzY1ZGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT9mODc2Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015RXhlcmNpc2VTdGF0cy52dWU/MzY5YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy52dWU/ZTUxNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy9TY29yZVJhbmtCbG9jay52dWU/OWE1MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVdvcmtzaGVldHMudnVlPzJjODQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UudnVlP2NiMzkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvRG9jdG9yQ2hvaWNlLnZ1ZT84N2EwIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWU/MDc3NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeUV4ZXJjaXNlU3RhdHMudnVlP2FhMGYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlTY29yZXMudnVlP2Y4NWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlTY29yZXMvU2NvcmVSYW5rQmxvY2sudnVlPzg5MDIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9wYXRpZW50L0Rhc2hib2FyZFBhZ2UvTXlXb3Jrc2hlZXRzLnZ1ZT8wM2JlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IERhc2hib2FyZFBhZ2UgZnJvbSAnLi9EYXNoYm9hcmRQYWdlLnZ1ZSdcclxuXHJcbi8vIEF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcydcclxuVnVlLnVzZShWdWVBeGlvcywgYXhpb3MpXHJcblxyXG4vLyBWdWVzYXggKFVYIGxpYilcclxuaW1wb3J0IFZ1ZXNheCBmcm9tICd2dWVzYXgnXHJcblxyXG4vLyBFbGxpcHNlIFByb2dyZXNzIEJhclxyXG5pbXBvcnQgVnVlRWxsaXBzZVByb2dyZXNzIGZyb20gJ3Z1ZS1lbGxpcHNlLXByb2dyZXNzJztcclxuVnVlLnVzZShWdWVFbGxpcHNlUHJvZ3Jlc3MpO1xyXG5cclxuLy8gVnVlLUNoYXJ0aXN0XHJcbi8vICsgUGx1Z2luIGZvciB0b29sdGlwc1xyXG5pbXBvcnQgKiBhcyBDaGFydGlzdFRvb2x0aXBzIGZyb20gJ2NoYXJ0aXN0LXBsdWdpbi10b29sdGlwcyc7XHJcblZ1ZS51c2UocmVxdWlyZSgndnVlLWNoYXJ0aXN0JyksIHtcclxuICAgIG1lc3NhZ2VOb0RhdGE6IFwiQXVjdW5lIGRvbm7DqWVcIixcclxuICAgIGNsYXNzTm9EYXRhOiBcImVtcHR5XCJcclxufSlcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgcmVuZGVyOiBoID0+IGgoRGFzaGJvYXJkUGFnZSlcclxufSkuJG1vdW50KCcjdnVlJylcclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxEb2N0b3JDaG9pY2VcclxuICAgICAgICAgICAgdi1pZj1cIiFwYXRpZW50LmRvY3RvciAmJiAhZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgIDpwYXRpZW50PVwicGF0aWVudFwiXHJcbiAgICAgICAgICAgIDpjc3JmVG9rZW5TZWxlY3REb2N0b3I9XCJjc3JmVG9rZW5TZWxlY3REb2N0b3JcIlxyXG4gICAgICAgICAgICA6Y3NyZlRva2VuQ29udGFjdD1cImNzcmZUb2tlbkNvbnRhY3RcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgdi1lbHNlXHJcbiAgICAgICAgICAgIGlkPVwiZGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJkYi1wYXRpZW50XCJcclxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZG9jdG9yLXZpZXcnOiBkb2N0b3JWaWV3IH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2l2LWFycm93LWxlZnQgaWNvbi0zMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVkZXJpY3RUb0Rhc2hib2FyZCgpXCJcclxuICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBzdXIgdm90cmUgZGFzaGJvYXJkICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvaGFuZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIGQndW5lIG1haW4gcXVpIGZhaXQgJ2NvdWNvdSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmQgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInBhdGllbnQuZmlyc3RuYW1lIHx8IHBhdGllbnQubGFzdG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBhdGllbnQuZmlyc3RuYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwYXRpZW50Lmxhc3RuYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcGF0aWVudC5lbWFpbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtYmxvY2sgbW9iaWxlLXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkxlIHBhdGllbnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIm15RG9jdG9yQ29udGVudFwiIGNsYXNzPVwicGF0aWVudC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXRpZW50LWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWF2YXRhciBjbGFzcz1cImF2YXRhclwiIGNpcmNsZSBzaXplPVwiMTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGF0aWVudC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcvaW1nL2F2YXRhci1kZWZhdWx0LnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImBBdmF0YXIgZGUgJHtwYXRpZW50LmZpcnN0bmFtZX0gJHtwYXRpZW50Lmxhc3RuYW1lfWBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXRpZW50LWluZm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRVc2VyTmFtZShwYXRpZW50KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwicGF0aWVudC5iaXJ0aGRhdGVcIiBjbGFzcz1cImJpcnRoZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRBZ2UocGF0aWVudC5iaXJ0aGRhdGUpIH19IGFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxNeVNjb3Jlc1xyXG4gICAgICAgICAgICAgICAgICAgIDpwYXRpZW50PVwicGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRvY3RvclZpZXc9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICA6cGF0aWVudFdvcmtzaGVldHM9XCJwYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cz1cImxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE15V29ya3NoZWV0c1xyXG4gICAgICAgICAgICAgICAgICAgIDpwYXRpZW50PVwicGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRvY3RvclZpZXc9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICA6ZG9jdG9yPVwiY3VycmVudFVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpwYXRpZW50V29ya3NoZWV0cz1cInBhdGllbnRXb3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgICAgICA6bG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzPVwibG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15RGFzaGJvYXJkTm90aWZpY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cGF0aWVudD1cInBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y3NyZlRva2VuQWNjZXB0RG9jdG9yPVwiY3NyZlRva2VuQWNjZXB0RG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNzcmZUb2tlbkRlY2xpbmVEb2N0b3I9XCJjc3JmVG9rZW5EZWNsaW5lRG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXktZG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IHJlZHVjZWQ6ICFteURvY3RvckNvbnRlbnQgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm15RG9jdG9yQ29udGVudCA9ICFteURvY3RvckNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPk1vbiBwcmF0aWNpZW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiaGVpZ2h0MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibXlEb2N0b3JDb250ZW50XCIgY2xhc3M9XCJkb2N0b3ItZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb2N0b3ItYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJsb2FkaW5nRG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZyBhdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1hdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmFkZFJlcXVlc3REb2N0b3IgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ0RvY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjExNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZG9jdG9yLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXRpZW50LmRvY3Rvci5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy4uLy4uL2ltZy9hdmF0YXItZGVmYXVsdC5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiYEF2YXRhciBkZSAke3BhdGllbnQuZG9jdG9yLmZpcnN0bmFtZX0gJHtwYXRpZW50LmRvY3Rvci5sYXN0bmFtZX1gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYWRkUmVxdWVzdERvY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nRG9jdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhdmF0YXIgd2FpdGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3NtaWxleS82MC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNtaWxleSBNb25vY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb2N0b3ItaW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ0RvY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsb2FkaW5nIG5hbWUgdy01NVwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibG9hZGluZyBjaXR5IHctNDVcIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmdEb2N0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldFVzZXJOYW1lKHBhdGllbnQuZG9jdG9yKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlbnRpdHktY2l0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZG9jdG9yLmVudGl0eU5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwYXRpZW50LmRvY3Rvci5jaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwYXRpZW50LmRvY3Rvci5lbnRpdHlOYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwYXRpZW50LmRvY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbnRpdHlOYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmRvY3Rvci5jaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwYXRpZW50LmRvY3Rvci5jaXR5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZG9jdG9yLmVudGl0eU5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZG9jdG9yLmNpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBhdGllbnQuZG9jdG9yLmVudGl0eU5hbWUgfX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBhdGllbnQuZG9jdG9yLmNpdHkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYWRkUmVxdWVzdERvY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nRG9jdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbiBhdHRlbnRlIGRlIHZhbGlkYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImtpdi1ibG9jayBkZXNrdG9wLXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkxlIHBhdGllbnQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJteURvY3RvckNvbnRlbnRcIiBjbGFzcz1cInBhdGllbnQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhdGllbnQtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWF2YXRhciBjbGFzcz1cImF2YXRhclwiIGNpcmNsZSBzaXplPVwiMTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhdGllbnQuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJgQXZhdGFyIGRlICR7cGF0aWVudC5maXJzdG5hbWV9ICR7cGF0aWVudC5sYXN0bmFtZX1gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhdGllbnQtaW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldFVzZXJOYW1lKHBhdGllbnQpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXRpZW50LmJpcnRoZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJpcnRoZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldEFnZShwYXRpZW50LmJpcnRoZGF0ZSkgfX0gYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgPE15RXhlcmNpc2VTdGF0c1xyXG4gICAgICAgICAgICAgICAgICAgIDpwYXRpZW50PVwicGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRvY3RvclZpZXc9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICA6cGF0aWVudFdvcmtzaGVldHM9XCJwYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cz1cImxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBmIGZyb20gXCIuLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgRG9jdG9yQ2hvaWNlIGZyb20gXCIuL0Rhc2hib2FyZFBhZ2UvRG9jdG9yQ2hvaWNlLnZ1ZVwiO1xyXG5pbXBvcnQgTXlTY29yZXMgZnJvbSBcIi4vRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy52dWVcIjtcclxuaW1wb3J0IE15RGFzaGJvYXJkTm90aWZpY2F0aW9ucyBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWVcIjtcclxuaW1wb3J0IE15V29ya3NoZWV0cyBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlL015V29ya3NoZWV0cy52dWVcIjtcclxuaW1wb3J0IE15RXhlcmNpc2VTdGF0cyBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlL015RXhlcmNpc2VTdGF0cy52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBEb2N0b3JDaG9pY2UsXHJcbiAgICAgICAgTXlTY29yZXMsXHJcbiAgICAgICAgTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLFxyXG4gICAgICAgIE15V29ya3NoZWV0cyxcclxuICAgICAgICBNeUV4ZXJjaXNlU3RhdHMsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXRpZW50OiBudWxsLFxyXG4gICAgICAgICAgICBjdXJyZW50VXNlcjogbnVsbCxcclxuICAgICAgICAgICAgZG9jdG9yVmlldzogbnVsbCxcclxuICAgICAgICAgICAgY3NyZlRva2VuU2VsZWN0RG9jdG9yOiBudWxsLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5BY2NlcHREb2N0b3I6IG51bGwsXHJcbiAgICAgICAgICAgIGNzcmZUb2tlbkRlY2xpbmVEb2N0b3I6IG51bGwsXHJcbiAgICAgICAgICAgIGNzcmZUb2tlbkNvbnRhY3Q6IG51bGwsXHJcbiAgICAgICAgICAgIG15REJOb3RpZmljYXRpb25zQ29udGVudDogdHJ1ZSxcclxuICAgICAgICAgICAgbXlTY29yZXNDb250ZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBteURvY3RvckNvbnRlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIG15V29ya3NoZWV0c0NvbnRlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGxvYWRpbmdEb2N0b3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nUGF0aWVudFdvcmtzaGVldHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXRpZW50V29ya3NoZWV0czogW10sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2V0VGltZUxlZnRCZWZvcmVOZXh0U2Vzc2lvbihlbmREYXRlQ3VycmVudFNlc3Npb24pIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZUxlZnQgPSBmLmdldFRpbWVMZWZ0QmVmb3JlTmV4dFNlc3Npb24oXHJcbiAgICAgICAgICAgICAgICBlbmREYXRlQ3VycmVudFNlc3Npb25cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aW1lTGVmdC5kYXlzID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRpbWVMZWZ0LmRheXMpID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtNYXRoLnJvdW5kKHRpbWVMZWZ0LmRheXMpfSBqb3VyYFxyXG4gICAgICAgICAgICAgICAgICAgIDogYCR7TWF0aC5yb3VuZCh0aW1lTGVmdC5kYXlzKX0gam91cnNgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGltZUxlZnQuaG91cnMgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVMZWZ0LmhvdXJzID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtNYXRoLnJvdW5kKHRpbWVMZWZ0LmhvdXJzKX0gaGV1cmVgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtNYXRoLnJvdW5kKHRpbWVMZWZ0LmhvdXJzKX0gaGV1cmVzYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRpbWVMZWZ0Lm1pbnV0ZXMgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVMZWZ0Lm1pbnV0ZXMgPT09IDFcclxuICAgICAgICAgICAgICAgICAgICA/IGAke01hdGgucm91bmQodGltZUxlZnQubWludXRlcyl9IG1pbnV0ZWBcclxuICAgICAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQodGltZUxlZnQubWludXRlcyl9IG1pbnV0ZXNgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGltZUxlZnQuc2Vjb25kcyA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGltZUxlZnQuc2Vjb25kcyA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7TWF0aC5yb3VuZCh0aW1lTGVmdC5zZWNvbmRzKX0gc2Vjb25kZWBcclxuICAgICAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQodGltZUxlZnQuc2Vjb25kcyl9IHNlY29uZGVzYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYWxjdWxXb3Jrc2hlZXRQcm9ncmVzc2lvbih3b3Jrc2hlZXQpIHtcclxuICAgICAgICAgICAgbGV0IHByb2dyZXNzaW9uID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmICh3b3Jrc2hlZXQuZXhlcmNpc2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhlcmNpc2VQZXJjZW50UGFydCA9IDEwMCAvIHdvcmtzaGVldC5leGVyY2lzZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4ZXJjaXNlc0NvbXBsZXRlZENvdW50ID0gd29ya3NoZWV0LmV4ZXJjaXNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IGUuaXNDb21wbGV0ZWRcclxuICAgICAgICAgICAgICAgICkubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2dyZXNzaW9uID0gZXhlcmNpc2VQZXJjZW50UGFydCAqIGV4ZXJjaXNlc0NvbXBsZXRlZENvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3Npb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRVc2VyTmFtZSh1c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFVzZXJOYW1lKHVzZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25SZXNpemUoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDU3Nikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teVNjb3Jlc0NvbnRlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teURCTm90aWZpY2F0aW9uc0NvbnRlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teURvY3RvckNvbnRlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teVdvcmtzaGVldHNDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QWdlKGJpcnRoZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZW5lcmF0ZUFnZUZyb21EYXRlT2ZCaXJ0aChiaXJ0aGRhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkZXJpY3RUb0Rhc2hib2FyZCgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5jdXJyZW50VXNlci5pZH0vZGFzaGJvYXJkYDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgVnVlLnByb3RvdHlwZS4kdnMgPSB0aGlzLiR2cztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmdXp6eS1iYWxsc1wiKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcclxuXHJcbiAgICAgICAgbW9tZW50LmxvY2FsZShcImZyLUZSXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZ1ZURhdGFcIikuaW5uZXJIVE1MKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gZGF0YS5wYXRpZW50O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIHRoaXMuZG9jdG9yVmlldyA9IGRhdGEuZG9jdG9yVmlldztcclxuICAgICAgICB0aGlzLmNzcmZUb2tlbkFjY2VwdERvY3RvciA9IGRhdGEuY3NyZlRva2VuQWNjZXB0RG9jdG9yO1xyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuRGVjbGluZURvY3RvciA9IGRhdGEuY3NyZlRva2VuRGVjbGluZURvY3RvcjtcclxuICAgICAgICB0aGlzLmNzcmZUb2tlblNlbGVjdERvY3RvciA9IGRhdGEuY3NyZlRva2VuU2VsZWN0RG9jdG9yO1xyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuQ29udGFjdCA9IGRhdGEuY3NyZlRva2VuQ29udGFjdDtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYC9wYXRpZW50LyR7dGhpcy5wYXRpZW50LmlkfS9nZXQvd29ya3NoZWV0c2ApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRpZW50V29ya3NoZWV0cyA9IHJlc3BvbnNlLmRhdGEubWFwKCh3b3Jrc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi53b3Jrc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldFByb2dyZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxXb3Jrc2hlZXRQcm9ncmVzc2lvbih3b3Jrc2hlZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFdvcmtzaGVldFNlc3Npb25zOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V29ya3NoZWV0U2Vzc2lvbjoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aWVudFdvcmtzaGVldHMuZm9yRWFjaCgod29ya3NoZWV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC9wYXRpZW50LyR7dGhpcy5wYXRpZW50LmlkfS9nZXQvY3VycmVudC13b3Jrc2hlZXQtc2Vzc2lvbi8ke3dvcmtzaGVldC5pZH0vdGltZS1sZWZ0LWJlZm9yZS1uZXh0YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY3VycmVudFdvcmtzaGVldFNlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRpbWVMZWZ0QmVmb3JlTmV4dFNlc3Npb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUaW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uLmVuZEF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubm90aWZUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyTm90aWZMaXN0ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlci1ub3RpZi1saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdGlmQmVsbCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGlmLWJlbGxcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZkJlbGwuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLW5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwicHJpb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW91c2VvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZJY29uLmNsYXNzTGlzdC5hZGQoXCJub3RpZi1pY29uXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBcIi9pbWcvaWNvbnMvY29sb3JlZC9jbG9jay5zdmdcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmFsdCA9IFwiSWNvbmUgZCd1bmUgbW9udHJlIC8gaG9ybG9nZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImljb24tY2xvY2tcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmlubmVyVGV4dCA9IGBQbHVzIHF1ZSBxdWVscXVlcyAke3Jlc3BvbnNlLmRhdGEubm90aWZUaW1lTGVmdC50aW1lfSBwb3VyIHLDqWFsaXNlciB2b3MgZXhlcmNpY2VzIGRlIFwiJHtyZXNwb25zZS5kYXRhLm5vdGlmVGltZUxlZnQud29ya3NoZWV0fVwiLCBqZSBtJ3kgbWV0IG1haW50ZW5hbnQgIWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2SWNvbi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2SWNvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOb3RpZkxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC9wYXRpZW50LyR7dGhpcy5wYXRpZW50LmlkfS9nZXQvdG90YWwtd29ya3NoZWV0LXNlc3Npb25zLyR7d29ya3NoZWV0LmlkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50b3RhbFdvcmtzaGVldFNlc3Npb25zID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4jZGFzaGJvYXJkLmRiLXBhdGllbnQge1xyXG4gICAgJi5kb2N0b3ItdmlldyB7XHJcbiAgICAgICAgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogLTAuNXJlbTtcclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xLjJyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMy42cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgICNwYXRpZW50IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IHBhdGllbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFzaWRlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgIFwicGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICBcIm15c2NvcmVzXCJcclxuICAgICAgICAgICAgICAgIFwibXl3b3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgIFwibXlleGVyY2lzZXN0YXRzXCI7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJteXNjb3JlcyAgICAgIG15c2NvcmVzICAgICAgYXNpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFwibXl3b3Jrc2hlZXRzICBteXdvcmtzaGVldHMgIGFzaWRlXCJcclxuICAgICAgICAgICAgICAgICAgICBcIm15ZXhlcmNpc2VzdGF0cyAgbXlleGVyY2lzZXN0YXRzICBhc2lkZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgXCJteXNjb3Jlc1wiXHJcbiAgICAgICAgICAgIFwiYXNpZGVcIlxyXG4gICAgICAgICAgICBcIm15d29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgIFwibXlleGVyY2lzZXN0YXRzXCI7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgXCJteXNjb3JlcyAgICAgIG15c2NvcmVzICAgICAgYXNpZGVcIlxyXG4gICAgICAgICAgICAgICAgXCJteXdvcmtzaGVldHMgIG15d29ya3NoZWV0cyAgYXNpZGVcIlxyXG4gICAgICAgICAgICAgICAgXCJteWV4ZXJjaXNlc3RhdHMgIG15ZXhlcmNpc2VzdGF0cyAgYXNpZGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNrdG9wLXZpZXcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2JpbGUtdmlldyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLmRlc2t0b3AtdmlldyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb2JpbGUtdmlldyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBpZD1cImRvY3Rvci1jaG9pY2VcIj5cclxuICAgICAgICA8aDE+QmllbnZlbnVlIHN1ciBLaXZpZCAhPC9oMT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIFZvdXMgbuKAmWF2ZXogcGFzIGVuY29yZSBkZSBwcmF0aWNpZW4gYXR0cml0csOpLiA8YnIgLz5cclxuICAgICAgICAgICAgUmVjaGVyY2hlei1lbiBkYW5zIGxhIGxpc3RlIGNpLWRlc3NvdXMuXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHYtY2xpY2stb3V0c2lkZT1cImhpZGVTZWxlY3RCb3hcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1maWx0ZXJcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7IGxvYWRpbmc6IGxvYWRpbmcgfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJkb2N0b3JTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkb2N0b3Itc2VsZWN0ZWQgZG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldFNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWF2YXRhciBjbGFzcz1cImF2YXRhclwiIGNpcmNsZSBzaXplPVwiMzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvclNlbGVjdGVkLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvY3RvclNlbGVjdGVkLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcvaW1nL2F2YXRhci1kZWZhdWx0LnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiYEF2YXRhciBkZSAke2RvY3RvclNlbGVjdGVkLmZpcnN0bmFtZX0gJHtkb2N0b3JTZWxlY3RlZC5sYXN0bmFtZX1gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRVc2VyTmFtZShkb2N0b3JTZWxlY3RlZCkgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdi1lbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0Qm94ID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwPVwic2VsZWN0Qm94V2l0aFRocm90dGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRvY3Rvci1jaG9pY2Utc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiLXItYi16ZXJvJzogc2VsZWN0Qm94LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXItZ3JheSc6IHNlbGVjdEJveCxcclxuICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXNlbGVjdEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnU8OpbGVjdGlvbm5leiB1biBwcmF0aWNpZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdSZWNoZXJjaGV6IHVuIHByYXRpY2llbidcclxuICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXJyb3ctdG9nZ2xlLWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IHNlbGVjdEJveCB9XCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVTZWxlY3RCb3hcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJoZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RCb3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJmb2N1c0lucHV0U2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCB2LWlmPVwiZ2V0RG9jdG9ycy5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihkb2N0b3IsIGkpIGluIGdldERvY3RvcnNcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3REb2N0b3IoZG9jdG9yKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYXZhdGFyIGNsYXNzPVwiYXZhdGFyXCIgY2lyY2xlIHNpemU9XCIzNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb2N0b3IuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcvaW1nL2F2YXRhci1kZWZhdWx0LnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJgQXZhdGFyIGRlICR7ZG9jdG9yLmZpcnN0bmFtZX0gJHtkb2N0b3IubGFzdG5hbWV9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldFVzZXJOYW1lKGRvY3RvcikgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm90LWZvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlcnMtc2xhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuIHByYXRpY2llbiBuJ2Egw6l0w6kgdHJvdXbDqSBhdmVjIFwiPHN0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGZpbHRlciB9fTwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cIjwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxhIGNsYXNzPVwiY29udGFjdFwiIEBjbGljaz1cIm1vZGFsQ29udGFjdCA9IHRydWVcIlxyXG4gICAgICAgICAgICA+Vm91cyBuJ2F2ZXogcGFzIGRlIHByYXRpY2llbiA/PC9hXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b24gOmRpc2FibGVkPVwiIWRvY3RvclNlbGVjdGVkXCIgQGNsaWNrPVwidmFsaWRlRG9jdG9yQ2hvaWNlXCJcclxuICAgICAgICAgICAgICAgID5WYWxpZGVyIGV0IGFjY8OpZGVyIMOgIG1vbiBkYXNoYm9hcmQ8L3ZzLWJ1dHRvblxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHZzLWRpYWxvZyB3aWR0aD1cIjQ1MHB4XCIgdi1tb2RlbD1cIm1vZGFsQ29udGFjdFwiPlxyXG4gICAgICAgICAgICA8aDI+SmUgbidhaSBwYXMgZGUgcHJhdGljaWVuPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXRpZW50LmZpcnN0bmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJQcsOpbm9tXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXRpZW50Lmxhc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIk5vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dnMtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICA6ZGFuZ2VyPVwidmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgIT0gbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBhdGllbnQuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInZhbGlkYXRpb25FbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi1hZnRlclxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICYmIHBhdGllbnQuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJiBwYXRpZW50LmVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2ljb25cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWVycm9yIGVycm9yIGljb24tMjRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJiBwYXRpZW50LmVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgI21lc3NhZ2UtZGFuZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxWdWVQaG9uZU51bWJlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdC1jb3VudHJ5LWNvZGU9XCJGUlwiXHJcbiAgICAgICAgICAgICAgICAgICAgOm9ubHktY291bnRyaWVzPVwiWydGUiddXCJcclxuICAgICAgICAgICAgICAgICAgICA6bm8tZXhhbXBsZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpuby1jb3VudHJ5LXNlbGVjdG9yPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnRyYW5zbGF0aW9ucz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeVNlbGVjdG9yTGFiZWw6ICdDb2RlIHBheXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5U2VsZWN0b3JFcnJvcjogJ0Nob2lzaXIgdW4gcGF5cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyTGFiZWw6ICdOdW3DqXJvIGRlIHTDqWzDqXBob25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhbXBsZTogJ0V4ZW1wbGUgOicsXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbnRhY3RUZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbGVkOiBjb250YWN0VGVsICE9IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclRlbCxcclxuICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNjMWI3OWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkLWNvbG9yPVwiI2MxYjc5ZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3ItY29sb3I9XCIjZmY1NjRiXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3I9XCJlcnJvclRlbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cIm1lc3NhZ2UtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbnRhY3RNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250YWN0LW1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgZmlsbGVkOiBjb250YWN0TWVzc2FnZSAhPSAnJyB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdC1tZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZDogYnRuTG9hZGluZ1ZhbGlkQ29udGFjdCB9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhcGF0aWVudC5lbWFpbCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5Mb2FkaW5nVmFsaWRDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImJ0bkxvYWRpbmdWYWxpZENvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkQ29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPk1lIGNvbnRhY3RlcjwvdnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdnMtZGlhbG9nPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGYgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSBcInZ1ZS1jbGljay1vdXRzaWRlXCI7XHJcbmltcG9ydCBWdWVQaG9uZU51bWJlcklucHV0IGZyb20gXCJ2dWUtcGhvbmUtbnVtYmVyLWlucHV0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHBhdGllbnQ6IE9iamVjdCxcclxuICAgICAgICBjc3JmVG9rZW5TZWxlY3REb2N0b3I6IFN0cmluZyxcclxuICAgICAgICBjc3JmVG9rZW5Db250YWN0OiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgZGlyZWN0aXZlczoge1xyXG4gICAgICAgIENsaWNrT3V0c2lkZSxcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgVnVlUGhvbmVOdW1iZXJJbnB1dCxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvY3RvcnM6IFtdLFxyXG4gICAgICAgICAgICBkb2N0b3JTZWxlY3RlZDogbnVsbCxcclxuICAgICAgICAgICAgZmlsdGVyOiBcIlwiLFxyXG4gICAgICAgICAgICBzZWxlY3RCb3g6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RJbnB1dDogbnVsbCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvb3RlcjogbnVsbCxcclxuICAgICAgICAgICAgbW9kYWxDb250YWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgYnRuTG9hZGluZ1ZhbGlkQ29udGFjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFjdFRlbDogbnVsbCxcclxuICAgICAgICAgICAgLy8gY29udGFjdE1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGdldERvY3RvcnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFNlYXJjaCh0aGlzLmRvY3RvcnMsIHRoaXMuZmlsdGVyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yVGVsKCkge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhY3RUZWwgJiYgdGhpcy5jb250YWN0VGVsLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWN0VGVsRm9ybWF0ZWQgPSB0aGlzLmNvbnRhY3RUZWwucmVwbGFjZSgvIC9nLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZSA9IC9eMFsxLTldKFstLiBdP1swLTldezJ9KXs0fSQvO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcmUudGVzdChTdHJpbmcoY29udGFjdFRlbEZvcm1hdGVkKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB2YWxpZGVEb2N0b3JDaG9pY2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgIC5wb3N0KGAvcGF0aWVudC8ke3RoaXMucGF0aWVudC5pZH0vc2VsZWN0L2RvY3RvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuU2VsZWN0RG9jdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3RvcklkOiB0aGlzLmRvY3RvclNlbGVjdGVkLmlkLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2hvaXggZHUgcHJhdGljaWVuIGVucmVnaXN0csOpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGllbnQuYWRkUmVxdWVzdERvY3RvciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aWVudC5kb2N0b3IgPSB0aGlzLmRvY3RvclNlbGVjdGVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2dnbGVTZWxlY3RCb3goKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gIXRoaXMuc2VsZWN0Qm94O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kb2N0b3JTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEJveCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0U2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGVTZWxlY3RCb3goKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3REb2N0b3IoZG9jdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdG9yU2VsZWN0ZWQgPSBkb2N0b3I7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVNlbGVjdEJveCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXRTZWxlY3QoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdG9yU2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkb2N0b3ItY2hvaWNlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0U2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb2N1c0lucHV0U2VsZWN0KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRVc2VyTmFtZSh1c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFVzZXJOYW1lKHVzZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRDb250YWN0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZENvbnRhY3QgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgLnBvc3QoYC9jb250YWN0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogdGhpcy5jc3JmVG9rZW5Db250YWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogdGhpcy5wYXRpZW50LmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTogdGhpcy5wYXRpZW50Lmxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnBhdGllbnQuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdFRlbDogdGhpcy5jb250YWN0VGVsLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhY3RNZXNzYWdlOiB0aGlzLmNvbnRhY3RNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXCJNZXNzYWdlIGVudm95w6lcIiwgcmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY29udGFjdE1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWxDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWxDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDb250YWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvbkVtYWlsKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlID1cclxuICAgICAgICAgICAgICAgIC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHJcbiAgICAgICAgICAgIGlmICghcmUudGVzdChTdHJpbmcodGhpcy5wYXRpZW50LmVtYWlsKS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJNZXJjaSBkJ2VudHJlciB1biBlbWFpbCB2YWxpZGUuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdEJveFdpdGhUaHJvdHRsZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdEJveFRocm90dGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEJveFRocm90dGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0Qm94XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94VGhyb3R0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJcIik7XHJcbiAgICAgICAgdGhpcy5mb290ZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGF0aWVudC5maXJzdG5hbWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRpZW50LmZpcnN0bmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXRpZW50Lmxhc3RuYW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aWVudC5sYXN0bmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYC9wYXRpZW50LyR7dGhpcy4kcGFyZW50LnBhdGllbnQuaWR9L2dldC9kb2N0b3JzYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3RvcnMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvY3Rvci1jaG9pY2Utc2VsZWN0XCIpO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4jZG9jdG9yLWNob2ljZSB7XHJcbiAgICBtYXgtd2lkdGg6IDUzcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLnNlbGVjdC1maWx0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuMXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUuOXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgJi5iLXItYi16ZXJvIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbSAwLjhyZW0gMCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMS45cmVtIDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQuNXJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtIDAuOHJlbSAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5wbGFjZWhvbGRlci1ncmF5IHtcclxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3ctdG9nZ2xlLWJveCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxLjNyZW07XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAzLjhyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMy40cmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTAuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LWJveCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1LjVyZW07XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEuMnJlbSAxLjJyZW07XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggLTVweCByZ2JhKDQ0LCAxMSwgMTEsIDAuMTUpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xOSwgMS4wMywgMC43OSwgMS4wMik7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI2cmVtO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvY3Rvci1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMi4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQuNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wLjRyZW0pO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kb2N0b3Ige1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMi4ycmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUVudGVyIDAuNXM7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGdyYXktbWlkZGxlLCAwLjE1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMy41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm90LWZvdW5kIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMuM3JlbSAycmVtO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0IHtcclxuICAgICAgICBjb2xvcjogJGdyYXktZGFyaztcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4uY29udGFjdC1mb3JtIHtcclxuICAgIC52cy1pbnB1dC1wYXJlbnQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZS1ibG9jayxcclxuICAgIC52dWUtcGhvbmUtbnVtYmVyLWlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIHRleHRhcmVhLFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNnJlbSAxLjdyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2U3ZGZjZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgJjpmb2N1cy12aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICNjMWI3OWQ7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMi41cmVtIC0wLjRyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyB+IGxhYmVsLFxyXG4gICAgICAgICAgICAmLmZpbGxlZCB+IGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIHRvcDogMS42cmVtO1xyXG4gICAgICAgICAgICBsZWZ0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2MxYjc5ZDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4wNXJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZ1ZS1waG9uZS1udW1iZXItaW5wdXQge1xyXG4gICAgICAgICYuZmlsbGVkIHtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjhyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjYXJldC1jb2xvcjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmZvY3VzIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNjMWI3OWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmVycm9yIHtcclxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgODYsIDc1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uXHJcbiAgICAgICAgaWQ9XCJkYXNoYm9hcmQtbm90aWZpY2F0aW9uc1wiXHJcbiAgICAgICAgY2xhc3M9XCJraXYtYmxvY2tcIlxyXG4gICAgICAgIDpjbGFzcz1cInsgcmVkdWNlZDogISRwYXJlbnQubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50IH1cIlxyXG4gICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgZ2V0RGFzaGJvYXJkTm90aWZpY2F0aW9ucy5sZW5ndGggfHxcclxuICAgICAgICAgICAgIXBhdGllbnQuYmlydGhkYXRlIHx8XHJcbiAgICAgICAgICAgICFwYXRpZW50LmdlbmRlciB8fFxyXG4gICAgICAgICAgICAhcGF0aWVudC5maXJzdG5hbWUgfHxcclxuICAgICAgICAgICAgIXBhdGllbnQubGFzdG5hbWUgfHxcclxuICAgICAgICAgICAgIXBhdGllbnQuaXNWZXJpZmllZFxyXG4gICAgICAgIFwiXHJcbiAgICA+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1jb250ZW50XCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAkcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgISRwYXJlbnQubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50XHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMj5Ob3RpZmljYXRpb25zPC9oMj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHYtaWY9XCIkcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbnMtbGlzdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIobm90aWYsIGkpIGluIGdldERhc2hib2FyZE5vdGlmaWNhdGlvbnNcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgJ2FkZC1wYXRpZW50JyA9PT0gbm90aWYuY29udGVudFswXS50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90aWZpY2F0aW9ucy1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm90aWZpY2F0aW9uLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWZvcj1cIihlLCBpKSBpbiBub3RpZi5jb250ZW50XCIgOmtleT1cImlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiJ3RleHQnID09PSBlLnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZS5jb250ZW50IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIndXNlcicgPT09IGUudHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlLmNvbnRlbnQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3RpZmljYXRpb24tYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGRpc2FibGVkOiBhY3Rpb25JblByb2dyZXNzIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uLWxpbmsgZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImFjY2VwdERvY3Rvcihub3RpZi5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWFjY2VwdCBpY29uLTIyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFjY2VwdGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFjdGlvbi1saW5rIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVjbGluZURvY3Rvcihub3RpZi5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWRlY2xpbmUgaWNvbi02XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlZnVzZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFsb2FkaW5nICYmICFwYXRpZW50LmlzVmVyaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90aWZpY2F0aW9ucy1pdGVtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vdGlmaWNhdGlvbi1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWw6lyaWZpZXIgdm90cmUgYWRyZXNzZSBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90aWZpY2F0aW9uLWFjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGRpc2FibGVkOiBhY3Rpb25JblByb2dyZXNzIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uLWxpbmsgdmVyaWYtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNlbmRWZXJpZkVtYWlsKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlbnZveWVyIGxpZW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCFwYXRpZW50LmJpcnRoZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXBhdGllbnQuZ2VuZGVyIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcGF0aWVudC5maXJzdG5hbWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwYXRpZW50Lmxhc3RuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3RpZmljYXRpb25zLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibm90aWZpY2F0aW9uLWxhYmVsXCI+Q29tcGzDqXRlciB2b3RyZSBwcm9maWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmtcIiA6aHJlZj1cImAvcGFyYW1ldHJlc2BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LXBlbiBpY29uLTRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21wbMOpdGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ibG9jayBub3RpZmljYXRpb25zLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsb2FkaW5nIHctNjAgbm90aWZpY2F0aW9uLWxhYmVsXCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyB3LTI1IG5vdGlmaWNhdGlvbi1hY3Rpb25zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctYmxvY2sgbm90aWZpY2F0aW9ucy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibG9hZGluZyB3LTMwIG5vdGlmaWNhdGlvbi1sYWJlbFwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgdy0zMCBub3RpZmljYXRpb24tYWN0aW9uc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXNoYm9hcmROb3RpZmljYXRpb25zOiBbXSxcclxuICAgICAgICAgICAgYWN0aW9uSW5Qcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwYXRpZW50OiBPYmplY3QsXHJcbiAgICAgICAgY3NyZlRva2VuQWNjZXB0RG9jdG9yOiBTdHJpbmcsXHJcbiAgICAgICAgY3NyZlRva2VuRGVjbGluZURvY3RvcjogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0RGFzaGJvYXJkTm90aWZpY2F0aW9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGFzaGJvYXJkTm90aWZpY2F0aW9ucztcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXREQk5vdGlmaWNhdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIGAvcGF0aWVudC8ke3RoaXMucGF0aWVudC5pZH0vZ2V0L3BhdGllbnQtZGFzaGJvYXJkLW5vdGlmaWNhdGlvbnNgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhc2hib2FyZE5vdGlmaWNhdGlvbnMgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY2NlcHREb2N0b3Iobm90aWZpY2F0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25JblByb2dyZXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgIC5wb3N0KGAvcGF0aWVudC8ke3RoaXMucGF0aWVudC5pZH0vYWNjZXB0L2RvY3RvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuQWNjZXB0RG9jdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbklkOiBub3RpZmljYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICBkb2N0b3JJZDogdGhpcy5wYXRpZW50LmRvY3Rvci5pZCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRlbWFuZGUgZCdham91dCBhY2NlcHTDqWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmROb3RpZmljYXRpb25zLnNwbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmROb3RpZmljYXRpb25zLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhc2hib2FyZE5vdGlmaWNhdGlvbnMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobikgPT4gbi5pZCA9PT0gbm90aWZpY2F0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVjbGluZURvY3Rvcihub3RpZmljYXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbkluUHJvZ3Jlc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgLnBvc3QoYC9wYXRpZW50LyR7dGhpcy5wYXRpZW50LmlkfS9kZWNsaW5lL2RvY3RvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuRGVjbGluZURvY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25JZDogbm90aWZpY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdG9ySWQ6IHRoaXMucGF0aWVudC5kb2N0b3IuaWQsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEZW1hbmRlIGQnYWpvdXQgcmVmdXPDqWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkTm90aWZpY2F0aW9ucy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkTm90aWZpY2F0aW9ucy5pbmRleE9mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmROb3RpZmljYXRpb25zLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG4pID0+IG4uaWQgPT09IG5vdGlmaWNhdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2VuZFZlcmlmRW1haWwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uSW5Qcm9ncmVzcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KGAvcGF0aWVudC8ke3RoaXMucGF0aWVudC5pZH0vcmVzZW5kL3ZlcmlmeS1lbWFpbGApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkUtbWFpbCBkZSB2w6lyaWZpY2F0aW9uIGVudm95w6lcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmdldERCTm90aWZpY2F0aW9ucygpO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuI2Rhc2hib2FyZC1ub3RpZmljYXRpb25zIHtcclxuICAgIGdyaWQtYXJlYTogbXlkYXNoYm9hcmRub3RpZjtcclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgaWQ9XCJteS1leGVyY2lzZS1zdGF0c1wiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwia2l2LWJsb2NrXCIgaWQ9XCJzZW5zaXRpdml0eVwiPlxyXG4gICAgICAgICAgICA8aDI+PHNwYW4+U2Vuc2liaWxpdMOpPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFwiIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlPVwic2Vuc2l0aXZpdHlVbml0T2ZUaW1lID09PSAnZGF5J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VTZW5zaXRpdml0eVVuaXRPZlRpbWUoJ2RheScpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSm91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cInNlbnNpdGl2aXR5VW5pdE9mVGltZSA9PT0gJ3dlZWsnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVNlbnNpdGl2aXR5VW5pdE9mVGltZSgnd2VlaycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VtYWluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cInNlbnNpdGl2aXR5VW5pdE9mVGltZSA9PT0gJ21vbnRoJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VTZW5zaXRpdml0eVVuaXRPZlRpbWUoJ21vbnRoJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2lzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlPVwic2Vuc2l0aXZpdHlVbml0T2ZUaW1lID09PSAneWVhcidcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlU2Vuc2l0aXZpdHlVbml0T2ZUaW1lKCd5ZWFyJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbm7DqWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJraXYtc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLXNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZW5zaXRpdml0eVVuaXRPZlRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwicmVzZXREaXNhYmxlV29ya3NoZWV0cygnc2Vuc2l0aXZpdHknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiSm91clwiIHZhbHVlPVwiZGF5XCI+IEpvdXIgPC92cy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1vcHRpb24gbGFiZWw9XCJTZW1haW5lXCIgdmFsdWU9XCJ3ZWVrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiTW9pc1wiIHZhbHVlPVwibW9udGhcIj4gTW9pcyA8L3ZzLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLW9wdGlvbiBsYWJlbD1cIkFubsOpZVwiIHZhbHVlPVwieWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Y2hhcnRpc3RcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGlkZS1jb250ZW50JzogIXNlbnNpdGl2aXR5RXhlcmNpc2VTdGF0cy5zZXJpZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNsOiBzZW5zaXRpdml0eUV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA+PSAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzbTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbnNpdGl2aXR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDEyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5zaXRpdml0eUV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA8IDI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAxMixcclxuICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICByYXRpbz1cImN0LW1ham9yLXNlY29uZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkYXRhPVwic2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzXCJcclxuICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNlbnNpdGl2aXR5Q2hhcnRPcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZXZlbnQtaGFuZGxlcnM9XCJldmVudEhhbmRsZXJzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXhpc1ktbGFiZWxzIHNlbnNpdGl2aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNDYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTbWlsZXkgcXVpIHZhIHRyw6hzIG1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNDcuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTbWlsZXkgcXVpIHZhIG1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNDguc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTbWlsZXkgcXVpIHZhIHBhcyBiaWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS80OS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNtaWxleSBxdWkgdmEgYm9mXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS81MC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNtaWxleSBwZXJwbGV4ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNTEuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTbWlsZXkgcXVpIHZhIGJpZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzUyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiU21pbGV5IHF1aSB2YSB0csOocyBiaWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS81My5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNtaWxleSB0csOocyBjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS81NC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNtaWxleSBhdXggYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9jaGFydGlzdD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG5zLXdvcmtzaGVldHMtc3RhdHMgc2Vuc2l0aXZpdHlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIod29ya3NoZWV0LCBpKSBpbiBnZXRQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tdG9nZ2xlLXdvcmtzaGVldC1zdGF0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSGlkZGVuV29ya3NoZWV0TGluZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2Vuc2l0aXZpdHknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FjdGl2ZTogZGlzYWJsZVdvcmtzaGVldHNbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbnNpdGl2aXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5pbmNsdWRlcyh3b3Jrc2hlZXQuaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluZS1jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgNXB4IHNvbGlkICR7Y29sb3JzW2ldfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5IDp3b3Jrc2hlZXQ9XCJ3b3Jrc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdC1mb3VuZFwiXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJiAhZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXItbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlZvdXMgbidhdmV6IHBhcyBlbmNvcmUgZGUgc3RhdGlzdGlxdWU8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+TGUgcGF0aWVudCBuJ2EgcGFzIGVuY29yZSBkZSBzdGF0aXN0aXF1ZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiIGNsYXNzPVwibG9hZGluZ1wiPjwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImtpdi1ibG9ja1wiIGlkPVwidGVjaG5pY2FsXCI+XHJcbiAgICAgICAgICAgIDxoMj48c3Bhbj5UZWNobmlxdWU8L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXCIgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphY3RpdmU9XCJ0ZWNobmljYWxVbml0T2ZUaW1lID09PSAnZGF5J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VUZWNobmljYWxVbml0T2ZUaW1lKCdkYXknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphY3RpdmU9XCJ0ZWNobmljYWxVbml0T2ZUaW1lID09PSAnd2VlaydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGVjaG5pY2FsVW5pdE9mVGltZSgnd2VlaycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VtYWluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cInRlY2huaWNhbFVuaXRPZlRpbWUgPT09ICdtb250aCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGVjaG5pY2FsVW5pdE9mVGltZSgnbW9udGgnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphY3RpdmU9XCJ0ZWNobmljYWxVbml0T2ZUaW1lID09PSAneWVhcidcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVGVjaG5pY2FsVW5pdE9mVGltZSgneWVhcicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2l2LXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidGVjaG5pY2FsVW5pdE9mVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJyZXNldERpc2FibGVXb3Jrc2hlZXRzKCd0ZWNobmljYWwnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiSm91clwiIHZhbHVlPVwiZGF5XCI+IEpvdXIgPC92cy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1vcHRpb24gbGFiZWw9XCJTZW1haW5lXCIgdmFsdWU9XCJ3ZWVrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiTW9pc1wiIHZhbHVlPVwibW9udGhcIj4gTW9pcyA8L3ZzLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLW9wdGlvbiBsYWJlbD1cIkFubsOpZVwiIHZhbHVlPVwieWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Y2hhcnRpc3RcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGlkZS1jb250ZW50JzogIXRlY2huaWNhbEV4ZXJjaXNlU3RhdHMuc2VyaWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzbDogdGVjaG5pY2FsRXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNtOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjaG5pY2FsRXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDEyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWNobmljYWxFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlY2huaWNhbEV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA+PSA1ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWNobmljYWxFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAxMixcclxuICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICByYXRpbz1cImN0LW1ham9yLXNlY29uZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGE9XCJ0ZWNobmljYWxFeGVyY2lzZVN0YXRzXCJcclxuICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInRlY2huaWNhbENoYXJ0T3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmV2ZW50LWhhbmRsZXJzPVwiZXZlbnRIYW5kbGVyc1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF4aXNZLWxhYmVscyB0ZWNobmljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48cD5FeGNlbGxlbnRlPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPk3DqWRpb2NyZTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvY2hhcnRpc3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRucy13b3Jrc2hlZXRzLXN0YXRzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHdvcmtzaGVldCwgaSkgaW4gZ2V0UGF0aWVudFdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLXRvZ2dsZS13b3Jrc2hlZXQtc3RhdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUhpZGRlbldvcmtzaGVldExpbmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RlY2huaWNhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWN0aXZlOiBkaXNhYmxlV29ya3NoZWV0c1sndGVjaG5pY2FsJ10uaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluZS1jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBgNXB4IHNvbGlkICR7Y29sb3JzW2ldfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5IDp3b3Jrc2hlZXQ9XCJ3b3Jrc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdC1mb3VuZFwiXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJiAhZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXItbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlZvdXMgbidhdmV6IHBhcyBlbmNvcmUgZGUgc3RhdGlzdGlxdWU8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+TGUgcGF0aWVudCBuJ2EgcGFzIGVuY29yZSBkZSBzdGF0aXN0aXF1ZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiIGNsYXNzPVwibG9hZGluZ1wiPjwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImtpdi1ibG9ja1wiIGlkPVwiZGlmZmljdWx0eVwiPlxyXG4gICAgICAgICAgICA8aDI+PHNwYW4+RGlmZmljdWx0w6llcyBwZXLDp3Vlczwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJnZXRQYXRpZW50V29ya3NoZWV0cy5sZW5ndGhcIiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvbi1ncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImRpZmZpY3VsdHlVbml0T2ZUaW1lID09PSAnZGF5J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VEaWZmaWN1bHR5VW5pdE9mVGltZSgnZGF5JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKb3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlPVwiZGlmZmljdWx0eVVuaXRPZlRpbWUgPT09ICd3ZWVrJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VEaWZmaWN1bHR5VW5pdE9mVGltZSgnd2VlaycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VtYWluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImRpZmZpY3VsdHlVbml0T2ZUaW1lID09PSAnbW9udGgnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZURpZmZpY3VsdHlVbml0T2ZUaW1lKCdtb250aCcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9pc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImRpZmZpY3VsdHlVbml0T2ZUaW1lID09PSAneWVhcidcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlRGlmZmljdWx0eVVuaXRPZlRpbWUoJ3llYXInKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFubsOpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbi1ncm91cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtpdi1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dnMtc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRpZmZpY3VsdHlVbml0T2ZUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInJlc2V0RGlzYWJsZVdvcmtzaGVldHMoJ2RpZmZpY3VsdHknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiSm91clwiIHZhbHVlPVwiZGF5XCI+IEpvdXIgPC92cy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1vcHRpb24gbGFiZWw9XCJTZW1haW5lXCIgdmFsdWU9XCJ3ZWVrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uIGxhYmVsPVwiTW9pc1wiIHZhbHVlPVwibW9udGhcIj4gTW9pcyA8L3ZzLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLW9wdGlvbiBsYWJlbD1cIkFubsOpZVwiIHZhbHVlPVwieWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Y2hhcnRpc3RcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGlkZS1jb250ZW50JzogIWRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLnNlcmllcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc2w6IGRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc206XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmaWN1bHR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZmljdWx0eUV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA8IDksXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW89XCJjdC1tYWpvci1zZWNvbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJMaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YT1cImRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzXCJcclxuICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImRpZmZpY3VsdHlDaGFydE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpldmVudC1oYW5kbGVycz1cImV2ZW50SGFuZGxlcnNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJheGlzWS1sYWJlbHMgZGlmZmljdWx0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPlZyYWltZW50IHRyb3AgZGlmZmljaWxlPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPlRyb3AgZGlmZmljaWxlPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPk9rPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPlRyb3AgZmFjaWxlPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwPkJlYXVjb3VwIHRyb3AgZmFjaWxlPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9jaGFydGlzdD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG5zLXdvcmtzaGVldHMtc3RhdHNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIod29ya3NoZWV0LCBpKSBpbiBnZXRQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tdG9nZ2xlLXdvcmtzaGVldC1zdGF0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSGlkZGVuV29ya3NoZWV0TGluZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlmZmljdWx0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWN0aXZlOiBkaXNhYmxlV29ya3NoZWV0c1snZGlmZmljdWx0eSddLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmUtY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDVweCBzb2xpZCAke2NvbG9yc1tpXX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ0bkNoYXJ0V29ya3NoZWV0UGFydE9mQm9keSA6d29ya3NoZWV0PVwid29ya3NoZWV0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3QtZm91bmRcIlxyXG4gICAgICAgICAgICAgICAgdi1pZj1cIiFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgJiYgIWdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNhbGVuZGFyLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5Wb3VzIG4nYXZleiBwYXMgZW5jb3JlIGRlIHN0YXRpc3RpcXVlPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPkxlIHBhdGllbnQgbidhIHBhcyBlbmNvcmUgZGUgc3RhdGlzdGlxdWU8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIiBjbGFzcz1cImxvYWRpbmdcIj48L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBCdG5DaGFydFdvcmtzaGVldFBhcnRPZkJvZHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5LnZ1ZVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcGF0aWVudDogT2JqZWN0LFxyXG4gICAgICAgIHBhdGllbnRXb3Jrc2hlZXRzOiBBcnJheSxcclxuICAgICAgICBsb2FkaW5nUGF0aWVudFdvcmtzaGVldHM6IEJvb2xlYW4sXHJcbiAgICAgICAgZG9jdG9yVmlldzogQm9vbGVhbixcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgQnRuQ2hhcnRXb3Jrc2hlZXRQYXJ0T2ZCb2R5LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2Vuc2l0aXZpdHlVbml0T2ZUaW1lOiBcImRheVwiLFxyXG4gICAgICAgICAgICB0ZWNobmljYWxVbml0T2ZUaW1lOiBcImRheVwiLFxyXG4gICAgICAgICAgICBkaWZmaWN1bHR5VW5pdE9mVGltZTogXCJkYXlcIixcclxuICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFydFBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBoaWdoOiAxMCxcclxuICAgICAgICAgICAgICAgIGxvdzogMCxcclxuICAgICAgICAgICAgICAgIGF4aXNZOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDc4LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGFydGlzdC5wbHVnaW5zLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JUb1BvaW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUb0JvZHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBGbmM6IGZ1bmN0aW9uIChtZXRhLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ldGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXJzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IFwiZHJhd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZuOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBcInBvaW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyB0aGlzLiRjaGFydGlzdC5TdmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4OiBbZGF0YS54XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k6IFtkYXRhLnldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiBbOF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3Q6bWV0YVwiOiBkYXRhLm1ldGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN0LXBvaW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQucmVwbGFjZShjaXJjbGUpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmF4aXNYLnN0ZXBMZW5ndGggLyAyICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBcImxpbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmF4aXNYLnN0ZXBMZW5ndGggLyAyICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBcImdyaWRcIiAmJiBkYXRhLmluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hdHRyKFwiIGNsYXNzXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYm9yZGVyLWdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW1xyXG4gICAgICAgICAgICAgICAgXCIjZmY2ODM4XCIsXHJcbiAgICAgICAgICAgICAgICBcIiNmZmExMjZcIixcclxuICAgICAgICAgICAgICAgIFwiIzVjOTFlMVwiLFxyXG4gICAgICAgICAgICAgICAgXCIjOGY2N2QxXCIsXHJcbiAgICAgICAgICAgICAgICBcIiM1N2NkYmZcIixcclxuICAgICAgICAgICAgICAgIFwiI2YxN2NkN1wiLFxyXG4gICAgICAgICAgICAgICAgXCIjOTNkMmE1XCIsXHJcbiAgICAgICAgICAgICAgICBcIiNiMjQ3ODhcIixcclxuICAgICAgICAgICAgICAgIFwiI2MxYjc5ZFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZmY1NjRiXCIsXHJcbiAgICAgICAgICAgICAgICBcIiNmYjhiNjhcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZmY2I0NlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjM2RjODYzXCIsXHJcbiAgICAgICAgICAgICAgICBcIiNmZjY4MzhcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZmYTEyNlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjNWM5MWUxXCIsXHJcbiAgICAgICAgICAgICAgICBcIiM4ZjY3ZDFcIixcclxuICAgICAgICAgICAgICAgIFwiIzU3Y2RiZlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZjE3Y2Q3XCIsXHJcbiAgICAgICAgICAgICAgICBcIiM5M2QyYTVcIixcclxuICAgICAgICAgICAgICAgIFwiI2IyNDc4OFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjYzFiNzlkXCIsXHJcbiAgICAgICAgICAgICAgICBcIiNmZjU2NGJcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZiOGI2OFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjZmZjYjQ2XCIsXHJcbiAgICAgICAgICAgICAgICBcIiMzZGM4NjNcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgaUNvcmVzc3BMaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAwOiBcImFcIixcclxuICAgICAgICAgICAgICAgIDE6IFwiYlwiLFxyXG4gICAgICAgICAgICAgICAgMjogXCJjXCIsXHJcbiAgICAgICAgICAgICAgICAzOiBcImRcIixcclxuICAgICAgICAgICAgICAgIDQ6IFwiZVwiLFxyXG4gICAgICAgICAgICAgICAgNTogXCJmXCIsXHJcbiAgICAgICAgICAgICAgICA2OiBcImdcIixcclxuICAgICAgICAgICAgICAgIDc6IFwiaFwiLFxyXG4gICAgICAgICAgICAgICAgODogXCJpXCIsXHJcbiAgICAgICAgICAgICAgICA5OiBcImpcIixcclxuICAgICAgICAgICAgICAgIDEwOiBcImtcIixcclxuICAgICAgICAgICAgICAgIDExOiBcImxcIixcclxuICAgICAgICAgICAgICAgIDEyOiBcIm1cIixcclxuICAgICAgICAgICAgICAgIDEzOiBcIm5cIixcclxuICAgICAgICAgICAgICAgIDE0OiBcIm9cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzYWJsZVdvcmtzaGVldHM6IHtcclxuICAgICAgICAgICAgICAgIHNlbnNpdGl2aXR5OiBbXSxcclxuICAgICAgICAgICAgICAgIHRlY2huaWNhbDogW10sXHJcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHR5OiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0UGF0aWVudFdvcmtzaGVldHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRCeUNyZWF0ZWRBdChcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aWVudFdvcmtzaGVldHMuZmlsdGVyKCh3KSA9PiB3LmV4ZXJjaXNlU3RhdHMubGVuZ3RoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUV4ZXJjaXNlU3RhdHNCeUNyaXRlcmlvbihcInNlbnNpdGl2aXR5XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vuc2l0aXZpdHlDaGFydE9wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmNoYXJ0T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGF4aXNZOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDQ1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlY2huaWNhbEV4ZXJjaXNlU3RhdHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlRXhlcmNpc2VTdGF0c0J5Q3JpdGVyaW9uKFwidGVjaG5pY2FsXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVjaG5pY2FsQ2hhcnRPcHRpb25zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5jaGFydE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBzZXJpZXNCYXJEaXN0YW5jZTogMTMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaWZmaWN1bHR5RXhlcmNpc2VTdGF0cygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVFeGVyY2lzZVN0YXRzQnlDcml0ZXJpb24oXCJkaWZmaWN1bHR5XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlmZmljdWx0eUNoYXJ0T3B0aW9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuY2hhcnRPcHRpb25zLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNvcnRCeUNyZWF0ZWRBdChhcnJheSkge1xyXG4gICAgICAgICAgICBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5jcmVhdGVkQXQpIC0gbmV3IERhdGUoYi5jcmVhdGVkQXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2VuZXJhdGVFeGVyY2lzZVN0YXRzQnlDcml0ZXJpb24oY3JpdGVyaW9uKSB7XHJcbiAgICAgICAgICAgIGxldCB1bml0T2ZUaW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKFwiZGlmZmljdWx0eVwiID09PSBjcml0ZXJpb24pIHtcclxuICAgICAgICAgICAgICAgIHVuaXRPZlRpbWUgPSB0aGlzLmRpZmZpY3VsdHlVbml0T2ZUaW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJzZW5zaXRpdml0eVwiID09PSBjcml0ZXJpb24pIHtcclxuICAgICAgICAgICAgICAgIHVuaXRPZlRpbWUgPSB0aGlzLnNlbnNpdGl2aXR5VW5pdE9mVGltZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwidGVjaG5pY2FsXCIgPT09IGNyaXRlcmlvbikge1xyXG4gICAgICAgICAgICAgICAgdW5pdE9mVGltZSA9IHRoaXMudGVjaG5pY2FsVW5pdE9mVGltZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhlcmNpc2VTdGF0c0J5VW5pdE9mVGltZSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckV4ZXJjaXNlU3RhdHNCeVVuaXRPZlRpbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYXRpZW50V29ya3NoZWV0cyxcclxuICAgICAgICAgICAgICAgICAgICB1bml0T2ZUaW1lXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZW5lcmF0ZUxhYmVscyhleGVyY2lzZVN0YXRzQnlVbml0T2ZUaW1lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsc0Zvcm1hdGVkQnlVbml0T2ZUaW1lID0gdGhpcy5mb3JtYXRMYWJlbHNCeVVuaXRPZlRpbWUoXHJcbiAgICAgICAgICAgICAgICBsYWJlbHMsXHJcbiAgICAgICAgICAgICAgICB1bml0T2ZUaW1lXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhU2xpY2UgPSB0aGlzLmdldERhdGFTbGljZShsYWJlbHMubGVuZ3RoLCB1bml0T2ZUaW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IGxhYmVsc0Zvcm1hdGVkQnlVbml0T2ZUaW1lLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAocywgaSkgPT4gaSA+PSBkYXRhU2xpY2VcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBzZXJpZXM6IGV4ZXJjaXNlU3RhdHNCeVVuaXRPZlRpbWUubWFwKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhlcmNpc2VTdGF0c0Zvcm1hdGVkID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNoYXJ0QXZlcmFnZURhdGFQb2ludHNCeUNyaXRlcmlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyaXRlcmlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcuZXhlcmNpc2VTdGF0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRPZlRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJ1bmNhdGVUaXRsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHcudGl0bGUubGVuZ3RoID4gMjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdy50aXRsZS5zdWJzdHJpbmcoMCwgMjApICsgXCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB3LnRpdGxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGAke3RydW5jYXRlVGl0bGV9IC0gJHt3LnBhcnRPZkJvZHkubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBleGVyY2lzZVN0YXRzRm9ybWF0ZWQuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHMsIGkpID0+IGkgPj0gZGF0YVNsaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1hdExhYmVsc0J5VW5pdE9mVGltZShsYWJlbHMsIHVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgaWYgKFwiZGF5XCIgPT09IHVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbHMubWFwKChsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2wuc3BsaXQoXCItXCIpWzJdfS8ke2wuc3BsaXQoXCItXCIpWzFdfS8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLnNwbGl0KFwiLVwiKVswXVxyXG4gICAgICAgICAgICAgICAgICAgIH1gO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcIndlZWtcIiA9PT0gdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVscy5tYXAoKGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHNlbS4gJHtsLnNwbGl0KFwiLVwiKVsyXX0vJHtsLnNwbGl0KFwiLVwiKVsxXX0vJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbC5zcGxpdChcIi1cIilbMF1cclxuICAgICAgICAgICAgICAgICAgICB9YDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb250aHMgPSB7XHJcbiAgICAgICAgICAgICAgICBcIjAxXCI6IFwiamFudi5cIixcclxuICAgICAgICAgICAgICAgIFwiMDJcIjogXCJmw6l2ci5cIixcclxuICAgICAgICAgICAgICAgIFwiMDNcIjogXCJtYXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcIjA0XCI6IFwiYXZyaWxcIixcclxuICAgICAgICAgICAgICAgIFwiMDVcIjogXCJtYWlcIixcclxuICAgICAgICAgICAgICAgIFwiMDZcIjogXCJqdWluXCIsXHJcbiAgICAgICAgICAgICAgICBcIjA3XCI6IFwianVpbGwuXCIsXHJcbiAgICAgICAgICAgICAgICBcIjA4XCI6IFwiYW/Du3RcIixcclxuICAgICAgICAgICAgICAgIFwiMDlcIjogXCJzZXB0LlwiLFxyXG4gICAgICAgICAgICAgICAgMTA6IFwib2N0LlwiLFxyXG4gICAgICAgICAgICAgICAgMTE6IFwibm92LlwiLFxyXG4gICAgICAgICAgICAgICAgMTI6IFwiZMOpYy5cIixcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChcIm1vbnRoXCIgPT09IHVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbHMubWFwKChsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke21vbnRoc1tsLnNwbGl0KFwiLVwiKVsxXV19ICR7bC5zcGxpdChcIi1cIilbMF19YDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2VuZXJhdGVMYWJlbHMoZXhlcmNpc2VTdGF0c0J5VW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbHMgPSBbXTtcclxuICAgICAgICAgICAgZXhlcmNpc2VTdGF0c0J5VW5pdE9mVGltZS5mb3JFYWNoKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3LmV4ZXJjaXNlU3RhdHMpLmZvckVhY2goKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxhYmVscy5pbmNsdWRlcyhkYXRlLnNwbGl0KFwifFwiKVswXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzLnB1c2goZGF0ZS5zcGxpdChcInxcIilbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGxhYmVscy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYSkgLSBuZXcgRGF0ZShiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2dnbGVIaWRkZW5Xb3Jrc2hlZXRMaW5lKGNyaXRlcmlvbiwgaSwgd29ya3NoZWV0SWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICBgIyR7Y3JpdGVyaW9ufSAuY3Qtc2VyaWVzLSR7dGhpcy5pQ29yZXNzcExpbmVbaV19YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbGluZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZVdvcmtzaGVldHNbY3JpdGVyaW9uXS5pbmNsdWRlcyh3b3Jrc2hlZXRJZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZVdvcmtzaGVldHNbY3JpdGVyaW9uXS5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlV29ya3NoZWV0c1tjcml0ZXJpb25dLmluZGV4T2Yod29ya3NoZWV0SWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVXb3Jrc2hlZXRzW2NyaXRlcmlvbl0ucHVzaCh3b3Jrc2hlZXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZVNlbnNpdGl2aXR5VW5pdE9mVGltZShVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vuc2l0aXZpdHlVbml0T2ZUaW1lID0gVW5pdE9mVGltZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldERpc2FibGVXb3Jrc2hlZXRzKFwic2Vuc2l0aXZpdHlcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2VUZWNobmljYWxVbml0T2ZUaW1lKFVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy50ZWNobmljYWxVbml0T2ZUaW1lID0gVW5pdE9mVGltZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldERpc2FibGVXb3Jrc2hlZXRzKFwidGVjaG5pY2FsXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlRGlmZmljdWx0eVVuaXRPZlRpbWUoVW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpZmZpY3VsdHlVbml0T2ZUaW1lID0gVW5pdE9mVGltZTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldERpc2FibGVXb3Jrc2hlZXRzKFwiZGlmZmljdWx0eVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0RGlzYWJsZVdvcmtzaGVldHMoY3JpdGVyaW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZVdvcmtzaGVldHNbY3JpdGVyaW9uXSA9IFtdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2VuZXJhdGVDaGFydEF2ZXJhZ2VEYXRhUG9pbnRzQnlDcml0ZXJpb24oXHJcbiAgICAgICAgICAgIGNyaXRlcmlvbixcclxuICAgICAgICAgICAgc3RhdHMsXHJcbiAgICAgICAgICAgIGxhYmVscyxcclxuICAgICAgICAgICAgdW5pdE9mVGltZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBsZXQgY2hhcnREYXRhUG9pbnRzID0gW107XHJcblxyXG4gICAgICAgICAgICBsYWJlbHMuZm9yRWFjaCgobCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhcnREYXRhUG9pbnRzLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBkYXRlIGluIHN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0c0ZpbHRlcmVkID0gc3RhdHNbZGF0ZV0uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChzKSA9PiBjcml0ZXJpb24gPT09IHMuY3JpdGVyaW9uXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzQXZlcmFnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRzRmlsdGVyZWQucmVkdWNlKChyLCBzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gcGFyc2VJbnQociArIHMucmF0aW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzRmlsdGVyZWQubGVuZ3RoKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICAgICAgICkgLyAxMDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3BsaXQgPSBkYXRlLnNwbGl0KFwifFwiKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmQgPSBsYWJlbHMuaW5kZXhPZihkYXRlU3BsaXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50RGF0ZSA9IG5ldyBEYXRlKGRhdGVTcGxpdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRleHRUb29sdGlwID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXCJtb250aFwiID09PSB1bml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFRvb2x0aXAgPSBtb21lbnQocG9pbnREYXRlKS5mb3JtYXQoXCJNTU0gWVlZWVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXCJ5ZWFyXCIgPT09IHVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VG9vbHRpcCA9IG1vbWVudChwb2ludERhdGUpLmZvcm1hdChcIllZWVlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFwiZGF5XCIgPT09IHVuaXRPZlRpbWUgfHwgXCJ3ZWVrXCIgPT09IHVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VG9vbHRpcCA9IG1vbWVudChwb2ludERhdGUpLmZvcm1hdChcIkREL01NL1lZWVlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcIndlZWtcIiA9PT0gdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VG9vbHRpcCA9IGBzZW0uICR7dGV4dFRvb2x0aXB9YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnREYXRhUG9pbnRzW2luZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogcG9pbnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHN0YXRzQXZlcmFnZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB0ZXh0VG9vbHRpcCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjaGFydERhdGFQb2ludHM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncm91cFN0YXRzQnlEYXkod29ya3NoZWV0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gd29ya3NoZWV0cy5tYXAoKHcpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi53LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlU3RhdHM6IHcuZXhlcmNpc2VTdGF0cy5yZWR1Y2UoKHIsIHN0YXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyW3N0YXQuZG9uZUF0LnN1YnN0cigwLCAxMCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByW3N0YXQuZG9uZUF0LnN1YnN0cigwLCAxMCldID0gW3N0YXRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcltzdGF0LmRvbmVBdC5zdWJzdHIoMCwgMTApXS5wdXNoKHN0YXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHt9KSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyb3VwU3RhdHNCeVdlZWsod29ya3NoZWV0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gd29ya3NoZWV0cy5tYXAoKHcpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi53LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlU3RhdHM6IHcuZXhlcmNpc2VTdGF0cy5yZWR1Y2UoKHIsIHN0YXQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9uZURhdGUgPSBuZXcgRGF0ZShzdGF0LmRvbmVBdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRheUluZGljZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lRGF0ZS5nZXREYXkoKSA9PT0gMCA/IDcgOiBkb25lRGF0ZS5nZXREYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFPYmplY3Qua2V5cyhyKS5maW5kKChnKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuaW5jbHVkZXMoc3RhdC5kb25lQXQuc3Vic3RyKDAsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdERheU9mTW9udGhEYXRlID0gbmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZURhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lRGF0ZS5nZXRNb250aCgpICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0RGF5T2ZQcmV2TW9udGhEYXRlID0gbmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZURhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lRGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwV2Vla05hbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFydFdlZWtEYXkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmVEYXRlLmdldERhdGUoKSAtIChkYXlJbmRpY2UgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFydFdlZWtNb250aCA9IGRvbmVEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0V2Vla1llYXIgPSBkb25lRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFdlZWtEYXkgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRXZWVrRGF5ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdERheU9mUHJldk1vbnRoRGF0ZS5nZXREYXRlKCkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhzdGFydFdlZWtEYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFdlZWtNb250aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRXZWVrTW9udGggLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFdlZWtNb250aCA9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFdlZWtZZWFyIC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3REYXlPZk1vbnRoRGF0ZSA9IGxhc3REYXlPZlByZXZNb250aERhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF5ID0gc3RhcnRXZWVrRGF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb250aCA9IHN0YXJ0V2Vla01vbnRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ZWFyID0gc3RhcnRXZWVrWWVhcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5ICs9IGk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXkgPiBsYXN0RGF5T2ZNb250aERhdGUuZ2V0RGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheSAtPSBsYXN0RGF5T2ZNb250aERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9udGggPCAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXIgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRheSA+IDAgJiYgZGF5IDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5ID0gYDAke2RheX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheSA9IGAke2RheX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbnRoID4gMCAmJiBtb250aCA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gYDAke21vbnRofWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBgJHttb250aH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBXZWVrTmFtZSArPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNiAhPSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwV2Vla05hbWUgKz0gXCJ8XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcltncm91cFdlZWtOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJbZ3JvdXBXZWVrTmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHIpLmZpbmQoKGcpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5pbmNsdWRlcyhzdGF0LmRvbmVBdC5zdWJzdHIoMCwgMTApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLnB1c2goc3RhdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICB9LCB7fSksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncm91cFN0YXRzQnlNb250aCh3b3Jrc2hlZXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3Jrc2hlZXRzLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh3ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLncsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VTdGF0czogdy5leGVyY2lzZVN0YXRzLnJlZHVjZSgociwgc3RhdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJbc3RhdC5kb25lQXQuc3Vic3RyKDAsIDcpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcltzdGF0LmRvbmVBdC5zdWJzdHIoMCwgNyldID0gW3N0YXRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcltzdGF0LmRvbmVBdC5zdWJzdHIoMCwgNyldLnB1c2goc3RhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwge30pLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JvdXBTdGF0c0J5WWVhcih3b3Jrc2hlZXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3Jrc2hlZXRzLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh3ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLncsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VTdGF0czogdy5leGVyY2lzZVN0YXRzLnJlZHVjZSgociwgc3RhdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJbc3RhdC5kb25lQXQuc3Vic3RyKDAsIDQpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcltzdGF0LmRvbmVBdC5zdWJzdHIoMCwgNCldID0gW3N0YXRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcltzdGF0LmRvbmVBdC5zdWJzdHIoMCwgNCldLnB1c2goc3RhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwge30pLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc29ydEJ5RG9uZURhdGUoc3RhdHMpIHtcclxuICAgICAgICAgICAgc3RhdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZG9uZUF0KSAtIG5ldyBEYXRlKGIuZG9uZUF0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0cztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldERhdGFTbGljZSh0b3RhbCwgdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YVNsaWNlID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChcImRheVwiID09PSB1bml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhU2xpY2UgPSB0b3RhbCAtIDMxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJ3ZWVrXCIgPT09IHVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFTbGljZSA9IHRvdGFsIC0gMTI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhU2xpY2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWx0ZXJFeGVyY2lzZVN0YXRzQnlVbml0T2ZUaW1lKHdvcmtzaGVldHMsIHVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgbGV0IGV4ZXJjaXNlU3RhdHNCeVVuaXRPZlRpbWUgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChcImRheVwiID09PSB1bml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBleGVyY2lzZVN0YXRzQnlVbml0T2ZUaW1lID0gdGhpcy5ncm91cFN0YXRzQnlEYXkod29ya3NoZWV0cyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcIndlZWtcIiA9PT0gdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2VTdGF0c0J5VW5pdE9mVGltZSA9IHRoaXMuZ3JvdXBTdGF0c0J5V2Vlayh3b3Jrc2hlZXRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwibW9udGhcIiA9PT0gdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2VTdGF0c0J5VW5pdE9mVGltZSA9IHRoaXMuZ3JvdXBTdGF0c0J5TW9udGgod29ya3NoZWV0cyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcInllYXJcIiA9PT0gdW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2VTdGF0c0J5VW5pdE9mVGltZSA9IHRoaXMuZ3JvdXBTdGF0c0J5WWVhcih3b3Jrc2hlZXRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4ZXJjaXNlU3RhdHNCeVVuaXRPZlRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZW5zaXRpdml0eUZvcm1hdERhdGVCeVVuaXRPZlRpbWUodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKFwiZGF5XCIgPT09IHRoaXMuc2Vuc2l0aXZpdHlVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJ3ZWVrXCIgPT09IHRoaXMuc2Vuc2l0aXZpdHlVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJtb250aFwiID09PSB0aGlzLnNlbnNpdGl2aXR5VW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KFwiTU1NIFlZWVlcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcInllYXJcIiA9PT0gdGhpcy5zZW5zaXRpdml0eVVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChcIllZWVlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlY2huaWNhbEZvcm1hdERhdGVCeVVuaXRPZlRpbWUodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKFwiZGF5XCIgPT09IHRoaXMudGVjaG5pY2FsVW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwid2Vla1wiID09PSB0aGlzLnRlY2huaWNhbFVuaXRPZlRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdChcIkREL01NL1lZWVlcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcIm1vbnRoXCIgPT09IHRoaXMudGVjaG5pY2FsVW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KFwiTU1NIFlZWVlcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcInllYXJcIiA9PT0gdGhpcy50ZWNobmljYWxVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoXCJZWVlZXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaWZmaWN1bHR5Rm9ybWF0RGF0ZUJ5VW5pdE9mVGltZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoXCJkYXlcIiA9PT0gdGhpcy5kaWZmaWN1bHR5VW5pdE9mVGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwid2Vla1wiID09PSB0aGlzLmRpZmZpY3VsdHlVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXCJtb250aFwiID09PSB0aGlzLmRpZmZpY3VsdHlVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoXCJNTU0gWVlZWVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwieWVhclwiID09PSB0aGlzLmRpZmZpY3VsdHlVbml0T2ZUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoXCJZWVlZXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbiNteS1leGVyY2lzZS1zdGF0cyB7XHJcbiAgICBncmlkLWFyZWE6IG15ZXhlcmNpc2VzdGF0cztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE3cmVtO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9hZGluZyB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzByZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBhbmltYXRpb246IDAuNXMgZWFzZSAwcyBmb3J3YXJkcyBmYWRlRW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAjc2Vuc2l0aXZpdHksXHJcbiAgICAjdGVjaG5pY2FsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zLFxyXG4gICAgLmtpdi1zZWxlY3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEuN3JlbTtcclxuICAgICAgICByaWdodDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5raXYtc2VsZWN0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDEuMXJlbTtcclxuICAgICAgICByaWdodDogMS40cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM3MHB4KSB7XHJcbiAgICAgICAgICAgIHRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICByaWdodDogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY3QtbWFqb3Itc2Vjb25kIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcmVtO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZW1wdHkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXhpc1ktbGFiZWxzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTQuNHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBkaXYsXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LW1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogLTE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogLTcuNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnNlbnNpdGl2aXR5IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjk1LjJweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1LjVyZW07XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnRlY2huaWNhbCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3OC44cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZGlmZmljdWx0eSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTg1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bnMtd29ya3NoZWV0cy1zdGF0cyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjhyZW07XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4LjVyZW07XHJcblxyXG4gICAgICAgICYuc2Vuc2l0aXZpdHkge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNC40cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0bi10b2dnbGUtd29ya3NoZWV0LXN0YXRzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgLmxpbmUtY29sb3Ige1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5kaXNhY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgLmxpbmUtY29sb3Ige1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2YyZTkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZjdmMmU5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uXHJcbiAgICAgICAgaWQ9XCJteS1zY29yZXNcIlxyXG4gICAgICAgIGNsYXNzPVwia2l2LWJsb2NrXCJcclxuICAgICAgICA6Y2xhc3M9XCJ7IHJlZHVjZWQ6ICEkcGFyZW50Lm15U2NvcmVzQ29udGVudCB9XCJcclxuICAgID5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCIkcGFyZW50Lm15U2NvcmVzQ29udGVudCA9ICEkcGFyZW50Lm15U2NvcmVzQ29udGVudFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMj5cclxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCI+TWVzPC9zcGFuXHJcbiAgICAgICAgICAgID48c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiPlNlczwvc3Bhbj4gaW5kaWNlc1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImhlaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIkcGFyZW50Lm15U2NvcmVzQ29udGVudFwiIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjb3JlLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2dWUtZWxsaXBzZS1wcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cHJvZ3Jlc3M9XCJnZXRTY29yZVBlcmNlbnRhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92dWUtZWxsaXBzZS1wcm9ncmVzcz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmUtY2lyY2xlLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzY29yZVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXROdW1iVGhvdXNhbmQoZ2V0U2NvcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInVuaXRcIj5Qb2ludHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmUtbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9ncmVzc2Jhci1iYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnbG9hZGluZy1ncmF5LWRhcmsnOiBsb2FkaW5nIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9ncmVzc2Jhci10aHVtYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IG1heDogc2NvcmUgPj0gc2NvcmVNYXggfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtnZXRTY29yZVBlcmNlbnRhZ2V9JWAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzYmFyLXN0ZXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjEwIDAwMCBwdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MjAgMDAwIHB0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4zMCAwMDAgcHRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjQwIDAwMCBwdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhbG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzYmFyLWN1cnJlbnQtc2NvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBnZXRTY29yZVBlcmNlbnRhZ2UgPCAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGdldFNjb3JlUGVyY2VudGFnZSA+IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2NvcmVQZXJjZW50YWdlIDw9IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtnZXRTY29yZVBlcmNlbnRhZ2V9JWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiPlZvdHJlPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtaWY9XCJkb2N0b3JWaWV3XCI+U29uPC9zcGFuPiBzY29yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2NvcmVcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgKCR7Zm9ybWF0TnVtYlRob3VzYW5kKGdldFNjb3JlKX0gcHRzKWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj48L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2Jhci1iYXNlLWVuZC1kZWNvcmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhlcmNpc2UtYmxvY2sgc2NvcmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWV4ZXJjaXNlIGljb24tN1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzdGF0LWxhYmVsXCI+Tm9tYnJlIGTigJlleGVyY2ljZXMgZmFpdHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgdi1pZj1cIiFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldFRvdGFsRXhlcmNpc2VDb21wbGV0ZWQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmctZ3JheSBsb2FkaW5nLWJsb2NrLWgzIHctMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5zaXRpdml0eS1ibG9jayBzY29yZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtc2Vuc2l0aXZpdHkgaWNvbi04XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInN0YXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCI+Vm90cmU8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtaWY9XCJkb2N0b3JWaWV3XCI+U2E8L3NwYW4+IHNlbnNpYmlsaXTDqVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtcmVzdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyB2LWlmPVwiIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNlbnNpdGl2aXR5VmFyaWF0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1cCcgPT09IGdldFNlbnNpdGl2aXR5VmFyaWF0aW9uLnZhcmlhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW4gYW3DqWxpb3JhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNlbnNpdGl2aXR5VmFyaWF0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkb3duJyA9PT0gZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24udmFyaWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBiYWlzc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTZW5zaXRpdml0eVZhcmlhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXF1YWwnID09PSBnZXRUZWNobmljYWxWYXJpYXRpb24udmFyaWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWVudMO0dCAhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTZW5zaXRpdml0eVZhcmlhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXAnID09PSBnZXRTZW5zaXRpdml0eVZhcmlhdGlvbi52YXJpYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXQtdmFyaWF0aW9uIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpIGNsYXNzPVwia2l2LXZhcmlhdGlvbi11cCBpY29uLTI3XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+K3t7IGdldFNlbnNpdGl2aXR5VmFyaWF0aW9uLnJlc3VsdCB9fSU8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rvd24nID09PSBnZXRTZW5zaXRpdml0eVZhcmlhdGlvbi52YXJpYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXQtdmFyaWF0aW9uIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aSBjbGFzcz1cImtpdi12YXJpYXRpb24tZG93biBpY29uLTI4XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+e3sgZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24ucmVzdWx0IH19JTwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmctZ3JheSBsb2FkaW5nLWJsb2NrLWgzIHctNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWNobmljYWwtYmxvY2sgc2NvcmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LXRlY2huaWNhbCBpY29uLTlcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwic3RhdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIWRvY3RvclZpZXdcIj5Wb3RyZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gdi1pZj1cImRvY3RvclZpZXdcIj5TYTwvc3Bhbj4gdGVjaG5pcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1yZXN1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHYtaWY9XCIhbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGVjaG5pY2FsVmFyaWF0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1cCcgPT09IGdldFRlY2huaWNhbFZhcmlhdGlvbi52YXJpYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGFtw6lsaW9yYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRUZWNobmljYWxWYXJpYXRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rvd24nID09PSBnZXRUZWNobmljYWxWYXJpYXRpb24udmFyaWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBiYWlzc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRUZWNobmljYWxWYXJpYXRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VxdWFsJyA9PT0gZ2V0VGVjaG5pY2FsVmFyaWF0aW9uLnZhcmlhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIWdldFRlY2huaWNhbFZhcmlhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZW50w7R0ICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFRlY2huaWNhbFZhcmlhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXAnID09PSBnZXRUZWNobmljYWxWYXJpYXRpb24udmFyaWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0LXZhcmlhdGlvbiBncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aSBjbGFzcz1cImtpdi12YXJpYXRpb24tdXAgaWNvbi0yN1wiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuPit7eyBnZXRUZWNobmljYWxWYXJpYXRpb24ucmVzdWx0IH19JTwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGVjaG5pY2FsVmFyaWF0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkb3duJyA9PT0gZ2V0VGVjaG5pY2FsVmFyaWF0aW9uLnZhcmlhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdC12YXJpYXRpb24gcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpIGNsYXNzPVwia2l2LXZhcmlhdGlvbi1kb3duIGljb24tMjhcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3Bhbj57eyBnZXRUZWNobmljYWxWYXJpYXRpb24ucmVzdWx0IH19JTwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwibG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9hZGluZy1ncmF5IGxvYWRpbmctYmxvY2staDMgdy03NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNjb3JlUmFua0Jsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgOnJhbms9XCJnZXRSYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkb2N0b3JWaWV3PVwiZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgZiBmcm9tIFwiLi4vLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IFNjb3JlUmFua0Jsb2NrIGZyb20gXCIuL015U2NvcmVzL1Njb3JlUmFua0Jsb2NrLnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwYXRpZW50OiBPYmplY3QsXHJcbiAgICAgICAgcGF0aWVudFdvcmtzaGVldHM6IEFycmF5LFxyXG4gICAgICAgIGxvYWRpbmdQYXRpZW50V29ya3NoZWV0czogQm9vbGVhbixcclxuICAgICAgICBkb2N0b3JWaWV3OiBCb29sZWFuLFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBTY29yZVJhbmtCbG9jayxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY29yZTogMCxcclxuICAgICAgICAgICAgc2NvcmVNYXg6IDUwMDAwLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjRkY2MzMyXCIsXHJcbiAgICAgICAgICAgICAgICBcImVtcHR5LWNvbG9yXCI6IFwiI2ZmYzZiNVwiLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMTMwLFxyXG4gICAgICAgICAgICAgICAgdGhpY2tuZXNzOiA1LFxyXG4gICAgICAgICAgICAgICAgXCJlbXB0eS10aGlja25lc3NcIjogMyxcclxuICAgICAgICAgICAgICAgIFwibGluZS1tb2RlXCI6IFwib3V0IDVcIixcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogXCJycyA3MDAgMTAwMFwiLFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0U2NvcmUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U2NvcmVQZXJjZW50YWdlKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBzY29yZVBlcmNlbnRhZ2UgPSAodGhpcy5zY29yZSAqIDEwMCkgLyB0aGlzLnNjb3JlTWF4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzY29yZVBlcmNlbnRhZ2UgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZVBlcmNlbnRhZ2UgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3JlUGVyY2VudGFnZSA+IDEgPyBzY29yZVBlcmNlbnRhZ2UgOiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmFuaygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPj0gMCAmJiB0aGlzLnNjb3JlIDwgMTAwMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdXZlYXVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPj0gMTAwMDAgJiYgdGhpcy5zY29yZSA8IDIwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJkZWJ1dGFudFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+PSAyMDAwMCAmJiB0aGlzLnNjb3JlIDwgMzAwMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImFtYXRldXJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPj0gMzAwMDAgJiYgdGhpcy5zY29yZSA8IDQwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJpbnRlcm1lZGlhaXJlXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlID49IDQwMDAwICYmIHRoaXMuc2NvcmUgPCA1MDAwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29uZmlybWVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPj0gNTAwMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImV4cGVydFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRUb3RhbEV4ZXJjaXNlQ29tcGxldGVkKCkge1xyXG4gICAgICAgICAgICBsZXQgY291bnRTdGF0cyA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhdGllbnRXb3Jrc2hlZXRzLmZvckVhY2goKHcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50U3RhdHMgKz0gdy5leGVyY2lzZVN0YXRzLmxlbmd0aDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXROdW1iVGhvdXNhbmQoTWF0aC5mbG9vcihjb3VudFN0YXRzIC8gMykpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGN1bFZhcmlhdGlvbihcInNlbnNpdGl2aXR5XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGVjaG5pY2FsVmFyaWF0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWxWYXJpYXRpb24oXCJ0ZWNobmljYWxcIik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2FsY3VsVmFyaWF0aW9uKGNyaXRlcmlvbikge1xyXG4gICAgICAgICAgICBsZXQgc3RhdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF0aWVudFdvcmtzaGVldHMuZm9yRWFjaCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udy5leGVyY2lzZVN0YXRzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVzKSA9PiBlcy5jcml0ZXJpb24gPT09IGNyaXRlcmlvblxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvblNsaWNlID0gMTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRzLmxlbmd0aCA+IHZhcmlhdGlvblNsaWNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0U3RhdHMgPSBzdGF0c1xyXG4gICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmRvbmVBdCkgLSBuZXcgRGF0ZShiLmRvbmVBdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlcywgaSkgPT4gaSA+IHN0YXRzLmxlbmd0aCAtIDEgLSB2YXJpYXRpb25TbGljZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFN0YXRzQXZlcmFnZSA9IHRoaXMuc3RhdHNBdmVyYWdlKGxhc3RTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFsYXN0U3RhdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkU3RhdHMgPSBzdGF0c1xyXG4gICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmRvbmVBdCkgLSBuZXcgRGF0ZShiLmRvbmVBdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlcywgaSkgPT4gaSA8PSBzdGF0cy5sZW5ndGggLSAxIC0gdmFyaWF0aW9uU2xpY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFN0YXRzQXZlcmFnZSA9IHRoaXMuc3RhdHNBdmVyYWdlKG9sZFN0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPVxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoKGxhc3RTdGF0c0F2ZXJhZ2UgLSBvbGRTdGF0c0F2ZXJhZ2UpICogMTAgKiAxMCkgL1xyXG4gICAgICAgICAgICAgICAgICAgIDEwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YXJpYXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJlcXVhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5zaWduKHJlc3VsdCkgPT09IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImRvd25cIixcclxuICAgICAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1hdE51bWJUaG91c2FuZChzY29yZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcmUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIiBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGF0c0F2ZXJhZ2Uoc3RhdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRzLnJlZHVjZSgociwgcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByID0gcGFyc2VJbnQociArIHMucmF0aW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFtdKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmxlbmd0aCkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICAgKSAvIDEwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgLmdldChgL3BhdGllbnQvJHt0aGlzLnBhdGllbnQuaWR9L2dldC9zY29yZWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSA9IHJlc3BvbnNlLmRhdGEuc2NvcmUgPyByZXNwb25zZS5kYXRhLnNjb3JlIDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5ub3RpZlNjb3JlUmFuaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJOb3RpZkxpc3QgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItbm90aWYtbGlzdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3RpZkJlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGlmLWJlbGxcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmQmVsbC5jbGFzc0xpc3QuYWRkKFwiaGFzLW5vdGlmaWNhdGlvbnNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwicHJpb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibW91c2VvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkljb24uY2xhc3NMaXN0LmFkZChcIm5vdGlmLWljb25cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBcIi9pbWcvaWNvbnMvY29sb3JlZC9jb25mZXR0aXMuc3ZnXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmFsdCA9IFwiSWNvbmUgZGUgY29uZmV0dGlzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJpY29uLWNvbmZldHRpc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gYFZvdXMgYXZleiBhdHRlaW50IGxlIG5pdmVhdSAke3Jlc3BvbnNlLmRhdGEubm90aWZTY29yZVJhbmt9ICEgRsOpbGljaXRhdGlvbnMgIWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdkljb24uYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2SWNvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1c2VyTm90aWZMaXN0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuI215LXNjb3JlcyB7XHJcbiAgICBncmlkLWFyZWE6IG15c2NvcmVzO1xyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAxcmVtO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDYlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgIFwic2NvcmVjaXJjbGUgICAgICAgc2NvcmVyYW5nYmxvY2tcIlxyXG4gICAgICAgICAgICBcImV4ZXJjaXNlYmxvY2sgICAgIGV4ZXJjaXNlYmxvY2tcIlxyXG4gICAgICAgICAgICBcInNlbnNpdGl2aXR5YmxvY2sgIHNlbnNpdGl2aXR5YmxvY2tcIlxyXG4gICAgICAgICAgICBcInRlY2huaWNhbGJsb2NrICAgIHRlY2huaWNhbGJsb2NrXCI7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMnJlbTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NiU7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICBcInNjb3JlbGluZSAgICAgIHNjb3JlbGluZVwiXHJcbiAgICAgICAgICAgICAgICBcImV4ZXJjaXNlYmxvY2sgIHNlbnNpdGl2aXR5YmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgXCJ0ZWNobmljYWxibG9jayAgc2NvcmVyYW5nYmxvY2tcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMS41cmVtO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgXCJzY29yZWxpbmUgICAgICBzY29yZWxpbmUgICAgICAgICBzY29yZWxpbmUgICAgICAgc2NvcmVsaW5lXCJcclxuICAgICAgICAgICAgICAgIFwiZXhlcmNpc2VibG9jayAgc2Vuc2l0aXZpdHlibG9jayAgdGVjaG5pY2FsYmxvY2sgIHNjb3JlcmFuZ2Jsb2NrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDJyZW07XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDYlO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgXCJzY29yZWxpbmUgICAgICBzY29yZWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgXCJleGVyY2lzZWJsb2NrICBzZW5zaXRpdml0eWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIFwidGVjaG5pY2FsYmxvY2sgIHNjb3JlcmFuZ2Jsb2NrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAycmVtO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgXCJzY29yZWxpbmUgICAgICBzY29yZWxpbmUgICAgICAgICBzY29yZWxpbmUgICAgICAgc2NvcmVsaW5lXCJcclxuICAgICAgICAgICAgICAgIFwiZXhlcmNpc2VibG9jayAgc2Vuc2l0aXZpdHlibG9jayAgdGVjaG5pY2FsYmxvY2sgIHNjb3JlcmFuZ2Jsb2NrXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2NvcmUtY2lyY2xlIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBzY29yZWNpcmNsZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlZWVlODtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogJHNhbmd1aW5lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2NvcmUtY2lyY2xlLXRleHQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MSU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgLnNjb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC51bml0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTAuM3JlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNjb3JlLWxpbmUge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IHNjb3JlbGluZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlZWVlODtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvZ3Jlc3NiYXItYmFzZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LW1pZGRsZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmxvYWRpbmctZ3JheS1kYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHBsYWNlSG9sZGVyU2hpbW1lcjtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0byByaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2U3ZGZjZCA4JSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2QzYzliNiAzOCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNlN2RmY2QgNTQlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCA2NDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2dyZXNzYmFyLWJhc2UtZW5kLWRlY29yYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlZWVlODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2dyZXNzYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDI3MGRlZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2ZiOGI2OCA5LjI5JSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2ZmNjgzOSAxMDAlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAuOHJlbSAwLjhyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDFzIGVhc2UsIGJvcmRlci1yYWRpdXMgMXMgZWFzZSAwLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5tYXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucHJvZ3Jlc3NiYXItc3RlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMS4ycmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wb2ludCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2dyZXNzYmFyLWN1cnJlbnQtc2NvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDFzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMC41cyBlYXNlIDBzIGZvcndhcmRzIGZhZGVFbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC42cmVtIHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOm5vdCguc3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuc3RhcnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMC43cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmVuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMC43cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5zY29yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zY29yZS1ibG9jayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmF5LWxpZ2h0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE5cmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAubG9hZGluZy1ibG9jay1oMyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuMXJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RhdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RhdC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdGF0LXJlc3VsdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgIGgzLFxyXG4gICAgICAgICAgICAgICAgLmxvYWRpbmctYmxvY2staDMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMi42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc3RhdC12YXJpYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5ncmVlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLnJlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5leGVyY2lzZS1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGV4ZXJjaXNlYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgLnN0YXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkc2FuZ3VpbmUsIDAuMjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2FuZ3VpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgzOjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAubG9hZGluZy1ibG9jay1oMzo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2FuZ3VpbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2Vuc2l0aXZpdHktYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBzZW5zaXRpdml0eWJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zdGF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHllbGxvdywgMC4yNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR5ZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgzOjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAubG9hZGluZy1ibG9jay1oMzo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkeWVsbG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnRlY2huaWNhbC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRlY2huaWNhbGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zdGF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHRvdXJuZXNvbCwgMC4yNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdG91cm5lc29sO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMzo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgLmxvYWRpbmctYmxvY2staDM6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvdXJuZXNvbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJzY29yZS1yYW5rLWJsb2NrIHNjb3JlLWJsb2NrXCJcclxuICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgIG5vdXZlYXU6ICdub3V2ZWF1JyA9PT0gcmFuayxcclxuICAgICAgICAgICAgZGVidXRhbnQ6ICdkZWJ1dGFudCcgPT09IHJhbmssXHJcbiAgICAgICAgICAgIGFtYXRldXI6ICdhbWF0ZXVyJyA9PT0gcmFuayxcclxuICAgICAgICAgICAgaW50ZXJtZWRpYWlyZTogJ2ludGVybWVkaWFpcmUnID09PSByYW5rLFxyXG4gICAgICAgICAgICBjb25maXJtZTogJ2NvbmZpcm1lJyA9PT0gcmFuayxcclxuICAgICAgICAgICAgZXhwZXJ0OiAnZXhwZXJ0JyA9PT0gcmFuayxcclxuICAgICAgICB9XCJcclxuICAgID5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiIG1vZGU9XCJvdXQtaW5cIj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRpbmcgJiYgJ25vdXZlYXUnID09PSByYW5rXCIga2V5PVwibm91dmVhdVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiPlZvdHJlPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtaWY9XCJkb2N0b3JWaWV3XCI+U29uPC9zcGFuPiBuaXZlYXVcclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJhbmstaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi8uLi8uLi9pbWcvaWNvbnMvY29sb3JlZC9oYW5kLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIGR1IHJhbmcgbm91dmVhdSBwYXRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyYW5rLWxhYmVsXCI+Tm91dmVhdSBQYXRpZW50PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyYW5rLXJlc3VsdFwiPkPigJllc3QgcGFydGkgcG91ciBhbGxlciBtaWV1eCZuYnNwOyE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGluZyAmJiAnZGVidXRhbnQnID09PSByYW5rXCIga2V5PVwiZGVidXRhbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoND5Wb3RyZSBuaXZlYXU8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyYW5rLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvYnJhcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBkdSByYW5nIGTDqWJ1dGFudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1sYWJlbFwiPlBhdGllbnQgRMOpYnV0YW50PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyYW5rLXJlc3VsdFwiPk11c2NsZSB0b24gamV1IFwiUm9iZXJ0XCImbmJzcDshPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRpbmcgJiYgJ2FtYXRldXInID09PSByYW5rXCIga2V5PVwiYW1hdGV1clwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlZvdHJlIG5pdmVhdTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJhbmstaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIGR1IHJhbmcgYW1hdGV1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1sYWJlbFwiPlBhdGllbnQgQW1hdGV1cjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1yZXN1bHRcIj5MYSB0w6p0ZSBkYW5zIGxlIGd1aWRvbiZuYnNwOyE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmcgJiYgJ2ludGVybWVkaWFpcmUnID09PSByYW5rXCJcclxuICAgICAgICAgICAgICAgIGtleT1cImludGVybWVkaWFpcmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDQ+Vm90cmUgbml2ZWF1PC9oND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmFuay1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBkdSByYW5nIGludGVybcOpZGlhaXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyYW5rLWxhYmVsXCI+UGF0aWVudCBJbnRlcm3DqWRpYWlyZTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1yZXN1bHRcIj5CaWVuIGRhbnMgdGVzIEJhc2tldHMmbmJzcDshPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRpbmcgJiYgJ2NvbmZpcm1lJyA9PT0gcmFua1wiIGtleT1cImNvbmZpcm1lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+Vm90cmUgbml2ZWF1PC9oND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmFuay1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSAxIGR1IHJhbmcgY29uZmlybcOpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIDIgZHUgcmFuZyBjb25maXJtw6lcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJhbmstbGFiZWxcIj5QYXRpZW50IENvbmZpcm3DqTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1yZXN1bHRcIj5QYXMgbGUgdGVtcHMgZGUgbmlhaXNlciZuYnNwOyE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhbG9hZGluZyAmJiAnZXhwZXJ0JyA9PT0gcmFua1wiIGtleT1cImV4cGVydFwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlZvdHJlIG5pdmVhdTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJhbmstaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi8uLi8uLi9pbWcvaWNvbnMvY29sb3JlZC9yZXdhcmQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgMSBkdSByYW5nIGV4cGVydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSAyIGR1IHJhbmcgZXhwZXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIDMgZHUgcmFuZyBleHBlcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJhbmstbGFiZWxcIj5QYXRpZW50IEV4cGVydDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuay1yZXN1bHRcIj5QcsOqdCBwb3VyIGxlIHByb2NoYWluIElyb24gTWFuJm5ic3A7ITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIiBjbGFzcz1cImxvYWRpbmctYmxvY2tcIiBrZXk9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGg0IHctNjVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgaVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyByYW5rLWxhYmVsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHJhbmstcmVzdWx0IHctODVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICByYW5rOiBTdHJpbmcsXHJcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcclxuICAgICAgICBkb2N0b3JWaWV3OiBCb29sZWFuLFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+PHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbiNteS1zY29yZXMgLmNvbnRlbnQgLnNjb3JlLWJsb2NrLnNjb3JlLXJhbmstYmxvY2sge1xyXG4gICAgZ3JpZC1hcmVhOiBzY29yZXJhbmdibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAyMXJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgID4gKiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9pbWcvYmFsbC00LnN2ZykgdG9wIC04LjFyZW0gcmlnaHQgLTcuM3JlbVxyXG4gICAgICAgICAgICAgICAgbm8tcmVwZWF0LFxyXG4gICAgICAgICAgICB1cmwoLi4vLi4vLi4vLi4vaW1nL2JhbGwtNC5zdmcpIGJvdHRvbSAtMTUuNHJlbSBsZWZ0IC05LjRyZW1cclxuICAgICAgICAgICAgICAgIG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE3LjdyZW0sIDI2LjdyZW07XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgICAgICAgb3BhY2l0eTogMC44OTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5ub3V2ZWF1IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvaGFuZC5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCAwcmVtIGxlZnQgLTRyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAgICAgaS5yYW5rLWltZyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjclO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmRlYnV0YW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvYnJhcy5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCAwcmVtIGxlZnQgLTRyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAgICAgaS5yYW5rLWltZyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjclO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmFtYXRldXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzYxLnN2Zyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIDByZW0gbGVmdCAtNHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgICAgICBpLnJhbmstaW1nIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuaW50ZXJtZWRpYWlyZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2ltZy9pY29ucy9jb2xvcmVkL3Jld2FyZC5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCAwcmVtIGxlZnQgLTRyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAgICAgaS5yYW5rLWltZyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjclO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmNvbmZpcm1lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Zyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIDByZW0gbGVmdCAtNHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgICAgICBpLnJhbmstaW1nIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZXhwZXJ0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Zyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIDByZW0gbGVmdCAtNHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgICAgICBpLnJhbmstaW1nIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2FkaW5nLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuMnM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKSA4JSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjQwLCAxMDEsIDY1LCAwLjQpIDM4JSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSkgNTQlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDY0MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+ICoge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaDQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJhbmstbGFiZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIuNTVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmFuay1yZXN1bHQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBpLnJhbmstaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxOHJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjMlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmFuay1sYWJlbCB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJhbmstcmVzdWx0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uXHJcbiAgICAgICAgaWQ9XCJteS13b3Jrc2hlZXRzXCJcclxuICAgICAgICBjbGFzcz1cImtpdi1ibG9ja1wiXHJcbiAgICAgICAgOmNsYXNzPVwieyByZWR1Y2VkOiAhJHBhcmVudC5teVdvcmtzaGVldHNDb250ZW50IH1cIlxyXG4gICAgPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtY29udGVudFwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cIiRwYXJlbnQubXlXb3Jrc2hlZXRzQ29udGVudCA9ICEkcGFyZW50Lm15V29ya3NoZWV0c0NvbnRlbnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtY2hldnJvbi1kb3duIGljb24tM1wiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiPk1lczwvc3BhblxyXG4gICAgICAgICAgICA+PHNwYW4gdi1pZj1cImRvY3RvclZpZXdcIj5TZXM8L3NwYW4+IGZpY2hlc1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImhlaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIkcGFyZW50Lm15V29ya3NoZWV0c0NvbnRlbnRcIiBjbGFzcz1cIndvcmtzaGVldC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmIGdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3bC1wYXRpZW50XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHdvcmtzaGVldCwgaSkgaW4gZ2V0UGF0aWVudFdvcmtzaGVldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwid29ya3NoZWV0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgd29ya3NoZWV0LnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ1BhcnRPZkJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFydE9mQm9keT1cIndvcmtzaGVldC5wYXJ0T2ZCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlzQ29tcGxldGVkKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VTdGF0cy5sZW5ndGggPiAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIndvcmtzaGVldC1wcm9ncmVzcy1saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pc0NvbXBsZXRlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbi5pc0luUHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2Jhci1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzYmFyLXRodW1iXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3dvcmtzaGVldC53b3Jrc2hlZXRQcm9ncmVzc2lvbn0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2Jhci1zdGVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIWRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5Wb3VzIGF2ZXogZmluaSBsYSBmaWNoZSAhPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yVmlldyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5FbiBjb3Vyczwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvclZpZXcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VTdGF0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPk5vbiBkw6ltYXJyw6llPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIndvcmtzaGVldC1wcm9ncmVzcy1saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pc0NvbXBsZXRlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXNJblByb2dyZXNzKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5leGVyY2lzZVN0YXRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2Jhci1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzYmFyLXRodW1iXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NiYXItc3RlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Vm91cyBhdmV6IGZpbmkgbGEgZmljaGUgITwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvclZpZXcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+RW4gY291cnM8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JWaWV3ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlU3RhdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5Ob24gZMOpbWFycsOpZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXNDb21wbGV0ZWQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlU3RhdHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIndvcmtzaGVldC1jb250ZW50IHNlc3Npb24tY29tcGxldGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudG90YWxXb3Jrc2hlZXRTZXNzaW9ucyAhPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4ZWNPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyYXZvLCB2b3MgZXhlcmNpY2VzIGRlIGNldHRlIHNlc3Npb24gb250XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOpdMOpIGZhaXRzIGF2ZWMgc3VjY8OocyAhIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50aW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW5kZXotdm91cyBkYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudGltZUxlZnRCZWZvcmVOZXh0U2Vzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG91ciB1bmUgbm91dmVsbGUgc2Vzc2lvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGVyY2ljZXMgdGVybWluw6lzIHBvdXIgY2V0dGUgc2Vzc2lvbi48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudGltZUxlZnRCZWZvcmVOZXh0U2Vzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2hhaW5lIHNlc3Npb24gZGFuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRpbWVMZWZ0QmVmb3JlTmV4dFNlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlU3RhdHMubGVuZ3RoID4gMCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRvdGFsV29ya3NoZWV0U2Vzc2lvbnMgPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leGVjT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5Gw6lsaWNpdGF0aW9ucywgdm90cmUgdHJhaXRlbWVudCBlc3QgdGVybWluw6lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5UcmFpdGVtZW50IHRlcm1pbsOpLjwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWRvY3RvclZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInJlZGlyZWN0SW5Qcm9ncmVzcyA9PT0gd29ya3NoZWV0LmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWRpcmVjdFRvV29ya3NoZWV0UGFnZSh3b3Jrc2hlZXQuaWQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1jb25zdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJkb2N0b3JWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJyZWRpcmVjdEluUHJvZ3Jlc3MgPT09IHdvcmtzaGVldC5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVkaXJlY3RUb0RvY3RvclZpZXcod29ya3NoZWV0LmlkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tY29uc3VsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9pclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIndvcmtzaGVldC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1leGVyY2lzZSBpY29uLTdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYlwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpY2U8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIndvcmtzaGVldC5leGVyY2lzZXMubGVuZ3RoID4gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+czwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC10aW1pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB3b3Jrc2hlZXQucGVyRGF5IH19eDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhciBqb3VyIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB3b3Jrc2hlZXQucGVyV2VlayB9fXg8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXIgc2VtYWluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtcGVyaW9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWNsb2NrIGljb24tMTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFDDqXJpb2RlIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB3b3Jrc2hlZXQuZHVyYXRpb24gfX0gc2VtYWluZTxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIndvcmtzaGVldC5kdXJhdGlvbiA+IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5zPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RJblByb2dyZXNzID09PSB3b3Jrc2hlZXQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvV29ya3NoZWV0UGFnZSh3b3Jrc2hlZXQuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWdvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyAhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RJblByb2dyZXNzID09PSB3b3Jrc2hlZXQuaWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlU3RhdHMubGVuZ3RoID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWRpcmVjdFRvRG9jdG9yVmlldyh3b3Jrc2hlZXQuaWQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvaXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90LWZvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZvbGRlci1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFkb2N0b3JWaWV3XCI+Vm91cyBuJ2F2ZXogcGFzIGRlIGZpY2hlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZG9jdG9yVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+TGUgcGF0aWVudCBuJ2EgcGFzIGVuY29yZSBkZSBmaWNoZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyB3b3Jrc2hlZXQtdGl0bGUgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgcGFydC1vZi1ib2R5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZyB3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1leGVyY2lzZXMtY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHctMzVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpbWluZyB3LTI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXBlcmlvZCB3LTM1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgYnRuLWdvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgbG9hZGluZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctNDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTE1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nIHdvcmtzaGVldC10aW1pbmcgdy0zNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2FkaW5nIHdvcmtzaGVldC1wZXJpb2Qgdy0yNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIGJ0bi1nb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgVGFnUGFydE9mQm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwYXRpZW50OiBPYmplY3QsXHJcbiAgICAgICAgcGF0aWVudFdvcmtzaGVldHM6IEFycmF5LFxyXG4gICAgICAgIGxvYWRpbmdQYXRpZW50V29ya3NoZWV0czogQm9vbGVhbixcclxuICAgICAgICBkb2N0b3JWaWV3OiBCb29sZWFuLFxyXG4gICAgICAgIGRvY3RvcjogT2JqZWN0LFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBUYWdQYXJ0T2ZCb2R5LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkaXJlY3RJblByb2dyZXNzOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRQYXRpZW50V29ya3NoZWV0cygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5Q3JlYXRlZEF0KHRoaXMucGF0aWVudFdvcmtzaGVldHMpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNvcnRCeUNyZWF0ZWRBdChhcnJheSkge1xyXG4gICAgICAgICAgICBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5jcmVhdGVkQXQpIC0gbmV3IERhdGUoYS5jcmVhdGVkQXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3RUb1dvcmtzaGVldFBhZ2Uod29ya3NoZWV0SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdEluUHJvZ3Jlc3MgPSB3b3Jrc2hlZXRJZDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL3BhdGllbnQvJHt0aGlzLnBhdGllbnQuaWR9L2ZpY2hlLyR7d29ya3NoZWV0SWR9YDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGlyZWN0VG9Eb2N0b3JWaWV3KHdvcmtzaGVldElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3RJblByb2dyZXNzID0gd29ya3NoZWV0SWQ7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vdm9pci8ke3dvcmtzaGVldElkfS8ke3RoaXMucGF0aWVudC5pZH0vP3JlZj1kYXNocGA7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Rhc2hib2FyZFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiYzhlMDVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rhc2hib2FyZFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9EYXNoYm9hcmRQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiYzhlMDVjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmJjOGUwNWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYmM4ZTA1YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYmM4ZTA1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYmM4ZTA1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGFzaGJvYXJkUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJjOGUwNWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmJjOGUwNWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRG9jdG9yQ2hvaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjhhMjE4ZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Eb2N0b3JDaG9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Eb2N0b3JDaG9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0RvY3RvckNob2ljZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc2OGEyMThkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc2OGEyMThkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc2OGEyMThkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Eb2N0b3JDaG9pY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2OGEyMThkJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc2OGEyMThkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9Eb2N0b3JDaG9pY2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5ZjUyZGVkJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTlmNTJkZWQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTlmNTJkZWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTlmNTJkZWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTlmNTJkZWQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTlmNTJkZWQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015RGFzaGJvYXJkTm90aWZpY2F0aW9ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL015RXhlcmNpc2VTdGF0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODBjMjY2MDQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXlFeGVyY2lzZVN0YXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXlFeGVyY2lzZVN0YXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9NeUV4ZXJjaXNlU3RhdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODBjMjY2MDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4MGMyNjYwNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzgwYzI2NjA0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzgwYzI2NjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzgwYzI2NjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NeUV4ZXJjaXNlU3RhdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwYzI2NjA0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzgwYzI2NjA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeUV4ZXJjaXNlU3RhdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NeVNjb3Jlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmE5MGZhZGEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXlTY29yZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NeVNjb3Jlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTXlTY29yZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmE5MGZhZGEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYTkwZmFkYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJhOTBmYWRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJhOTBmYWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJhOTBmYWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NeVNjb3Jlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmE5MGZhZGEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmE5MGZhZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015U2NvcmVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2NvcmVSYW5rQmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlYTI3Njc0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Njb3JlUmFua0Jsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2NvcmVSYW5rQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Njb3JlUmFua0Jsb2NrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlYTI3Njc0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmVhMjc2NzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZWEyNzY3NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZWEyNzY3NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZWEyNzY3NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2NvcmVSYW5rQmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlYTI3Njc0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJlYTI3Njc0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL3BhdGllbnQvRGFzaGJvYXJkUGFnZS9NeVNjb3Jlcy9TY29yZVJhbmtCbG9jay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL015V29ya3NoZWV0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTM3NjdkMDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXlXb3Jrc2hlZXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXlXb3Jrc2hlZXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTM3NjdkMDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTM3NjdkMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTM3NjdkMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL015V29ya3NoZWV0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTM3NjdkMDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTM3NjdkMDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvcGF0aWVudC9EYXNoYm9hcmRQYWdlL015V29ya3NoZWV0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXNoYm9hcmRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Eb2N0b3JDaG9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRG9jdG9yQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeUV4ZXJjaXNlU3RhdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlFeGVyY2lzZVN0YXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeVNjb3Jlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeVNjb3Jlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NvcmVSYW5rQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NvcmVSYW5rQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015V29ya3NoZWV0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeVdvcmtzaGVldHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rhc2hib2FyZFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmJjOGUwNWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RvY3RvckNob2ljZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzRdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlEYXNoYm9hcmROb3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbNF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeUV4ZXJjaXNlU3RhdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODBjMjY2MDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015U2NvcmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJhOTBmYWRhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbNF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY29yZVJhbmtCbG9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZWEyNzY3NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJjOGUwNWMmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRG9jdG9yQ2hvaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjhhMjE4ZCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeURhc2hib2FyZE5vdGlmaWNhdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5ZjUyZGVkJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL015RXhlcmNpc2VTdGF0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODBjMjY2MDQmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXlTY29yZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhOTBmYWRhJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Njb3JlUmFua0Jsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZWEyNzY3NCZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NeVdvcmtzaGVldHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkzNzY3ZDA0JlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICAhX3ZtLnBhdGllbnQuZG9jdG9yICYmICFfdm0uZG9jdG9yVmlld1xuICAgICAgICA/IF9jKFwiRG9jdG9yQ2hvaWNlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHBhdGllbnQ6IF92bS5wYXRpZW50LFxuICAgICAgICAgICAgICBjc3JmVG9rZW5TZWxlY3REb2N0b3I6IF92bS5jc3JmVG9rZW5TZWxlY3REb2N0b3IsXG4gICAgICAgICAgICAgIGNzcmZUb2tlbkNvbnRhY3Q6IF92bS5jc3JmVG9rZW5Db250YWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfYyhcbiAgICAgICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYi1wYXRpZW50XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IFwiZG9jdG9yLXZpZXdcIjogX3ZtLmRvY3RvclZpZXcgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZGFzaGJvYXJkXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWFycm93LWxlZnQgaWNvbi0zMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkZXJpY3RUb0Rhc2hib2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW1xuICAgICAgICAgICAgICAgICAgIV92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIEJpZW52ZW51ZSBzdXIgdm90cmUgZGFzaGJvYXJkICFcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvY29sb3JlZC9oYW5kLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBkJ3VuZSBtYWluIHF1aSBmYWl0ICdjb3Vjb3UnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkIGRlXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmZpcnN0bmFtZSB8fCBfdm0ucGF0aWVudC5sYXN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGF0aWVudC5maXJzdG5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBhdGllbnQubGFzdG5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGF0aWVudC5lbWFpbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1haW5cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1ibG9jayBtb2JpbGUtdmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYXRpZW50XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiTGUgcGF0aWVudFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubXlEb2N0b3JDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhdGllbnQtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhdGllbnQtYXZhdGFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgc2l6ZTogXCIxMTZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5wYXRpZW50LmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBhdGllbnQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuZmlyc3RuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGF0aWVudC1pbmZvc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VXNlck5hbWUoX3ZtLnBhdGllbnQpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5iaXJ0aGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJiaXJ0aGRhdGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuYmlydGhkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYW5zXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJNeVNjb3Jlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aWVudDogX3ZtLnBhdGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdG9yVmlldzogX3ZtLmRvY3RvclZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aWVudFdvcmtzaGVldHM6IF92bS5wYXRpZW50V29ya3NoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nUGF0aWVudFdvcmtzaGVldHM6IF92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJNeVdvcmtzaGVldHNcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQ6IF92bS5wYXRpZW50LFxuICAgICAgICAgICAgICAgICAgICAgIGRvY3RvclZpZXc6IF92bS5kb2N0b3JWaWV3LFxuICAgICAgICAgICAgICAgICAgICAgIGRvY3RvcjogX3ZtLmN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnRXb3Jrc2hlZXRzOiBfdm0ucGF0aWVudFdvcmtzaGVldHMsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzOiBfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFzaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJNeURhc2hib2FyZE5vdGlmaWNhdGlvbnNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50OiBfdm0ucGF0aWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcmZUb2tlbkFjY2VwdERvY3RvcjogX3ZtLmNzcmZUb2tlbkFjY2VwdERvY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcmZUb2tlbkRlY2xpbmVEb2N0b3I6IF92bS5jc3JmVG9rZW5EZWNsaW5lRG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IHJlZHVjZWQ6ICFfdm0ubXlEb2N0b3JDb250ZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJteS1kb2N0b3JcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvZ2dsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm15RG9jdG9yQ29udGVudCA9ICFfdm0ubXlEb2N0b3JDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIk1vbiBwcmF0aWNpZW5cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImhlaWdodDJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm15RG9jdG9yQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZG9jdG9yLWRldGFpbHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkb2N0b3ItYXZhdGFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdEb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0RvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIxMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnBhdGllbnQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBhdGllbnQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLi4vLi4vaW1nL2F2YXRhci1kZWZhdWx0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdmF0YXIgZGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmFkZFJlcXVlc3REb2N0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nRG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXIgd2FpdGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjExNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3NtaWxleS82MC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgTW9ub2NsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZG9jdG9yLWluZm9zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdEb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGluZyBuYW1lIHctNTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGluZyBjaXR5IHctNDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5hZGRSZXF1ZXN0RG9jdG9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ0RvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRVc2VyTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW50aXR5LWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbnRpdHlOYW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnBhdGllbnQuZG9jdG9yLmNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5wYXRpZW50LmRvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW50aXR5TmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuZG9jdG9yLmNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kb2N0b3IuY2l0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5kb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eU5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmRvY3Rvci5jaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbnRpdHlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvY3Rvci5jaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmFkZFJlcXVlc3REb2N0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nRG9jdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbiBhdHRlbnRlIGRlIHZhbGlkYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtYmxvY2sgZGVza3RvcC12aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYXRpZW50XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiTGUgcGF0aWVudFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5teURvY3RvckNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhdGllbnQtZGV0YWlsc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYXRpZW50LWF2YXRhclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjaXJjbGU6IFwiXCIsIHNpemU6IFwiMTE2XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0ucGF0aWVudC5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5wYXRpZW50LmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIvaW1nL2F2YXRhci1kZWZhdWx0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdmF0YXIgZGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50Lmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGF0aWVudC1pbmZvc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFVzZXJOYW1lKF92bS5wYXRpZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQuYmlydGhkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmlydGhkYXRlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iaXJ0aGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBhbnNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcIk15RXhlcmNpc2VTdGF0c1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aWVudDogX3ZtLnBhdGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdG9yVmlldzogX3ZtLmRvY3RvclZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aWVudFdvcmtzaGVldHM6IF92bS5wYXRpZW50V29ya3NoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nUGF0aWVudFdvcmtzaGVldHM6IF92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJkb2N0b3ItY2hvaWNlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkJpZW52ZW51ZSBzdXIgS2l2aWQgIVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJjbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1jbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGlkZVNlbGVjdEJveCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJoaWRlU2VsZWN0Qm94XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdC1maWx0ZXJcIixcbiAgICAgICAgICBjbGFzczogeyBsb2FkaW5nOiBfdm0ubG9hZGluZyB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICAhX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRvY3Rvci1zZWxlY3RlZCBkb2N0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5yZXNldFNlbGVjdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBzaXplOiBcIjM1XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmRvY3RvclNlbGVjdGVkLmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uZG9jdG9yU2VsZWN0ZWQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2ltZy9hdmF0YXItZGVmYXVsdC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yU2VsZWN0ZWQuZmlyc3RuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JTZWxlY3RlZC5sYXN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VXNlck5hbWUoX3ZtLmRvY3RvclNlbGVjdGVkKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yLWItemVyb1wiOiBfdm0uc2VsZWN0Qm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyLWdyYXlcIjogX3ZtLnNlbGVjdEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRvY3Rvci1jaG9pY2Utc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAhX3ZtLnNlbGVjdEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJTw6lsZWN0aW9ubmV6IHVuIHByYXRpY2llblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlJlY2hlcmNoZXogdW4gcHJhdGljaWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmlsdGVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdEJveCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IF92bS5zZWxlY3RCb3hXaXRoVGhyb3R0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsdGVyID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhcnJvdy10b2dnbGUtYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uc2VsZWN0Qm94IH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVTZWxlY3RCb3ggfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNoZXZyb24tZG93biBpY29uLTNcIiB9KV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJoZWlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdEJveFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QtYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5mb2N1c0lucHV0U2VsZWN0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXREb2N0b3JzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nZXREb2N0b3JzLCBmdW5jdGlvbihkb2N0b3IsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkb2N0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdERvY3Rvcihkb2N0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBzaXplOiBcIjM1XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBkb2N0b3IuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb2N0b3IuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5sYXN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRVc2VyTmFtZShkb2N0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXVzZXJzLXNsYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW4gcHJhdGljaWVuIG4nYSDDqXTDqSB0cm91dsOpIGF2ZWMgXFxcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5maWx0ZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KCdcIicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGFjdFwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5tb2RhbENvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiVm91cyBuJ2F2ZXogcGFzIGRlIHByYXRpY2llbiA/XCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tY29udGFpbmVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0uZG9jdG9yU2VsZWN0ZWQgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZGVEb2N0b3JDaG9pY2UgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJWYWxpZGVyIGV0IGFjY8OpZGVyIMOgIG1vbiBkYXNoYm9hcmRcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZzLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiNDUwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsQ29udGFjdCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLm1vZGFsQ29udGFjdCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxDb250YWN0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJKZSBuJ2FpIHBhcyBkZSBwcmF0aWNpZW5cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFjdC1mb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIlByw6lub21cIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXRpZW50LmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhdGllbnQsIFwiZmlyc3RuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhdGllbnQuZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiTm9tXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGF0aWVudC5sYXN0bmFtZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnBhdGllbnQsIFwibGFzdG5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGF0aWVudC5sYXN0bmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiYgX3ZtLnBhdGllbnQuZW1haWxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkYW5nZXI6IF92bS52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAhPSBudWxsLFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgIFwiaWNvbi1hZnRlclwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBrZXl1cDogX3ZtLnZhbGlkYXRpb25FbWFpbCB9LFxuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJiBfdm0ucGF0aWVudC5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1lcnJvciBlcnJvciBpY29uLTI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICYmIF92bS5wYXRpZW50LmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJtZXNzYWdlLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhdGllbnQuZW1haWwsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wYXRpZW50LCBcImVtYWlsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhdGllbnQuZW1haWxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiVnVlUGhvbmVOdW1iZXJJbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGxlZDogX3ZtLmNvbnRhY3RUZWwgIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JUZWxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHQtY291bnRyeS1jb2RlXCI6IFwiRlJcIixcbiAgICAgICAgICAgICAgICAgIFwib25seS1jb3VudHJpZXNcIjogW1wiRlJcIl0sXG4gICAgICAgICAgICAgICAgICBcIm5vLWV4YW1wbGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwibm8tY291bnRyeS1zZWxlY3RvclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlTZWxlY3RvckxhYmVsOiBcIkNvZGUgcGF5c1wiLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5U2VsZWN0b3JFcnJvcjogXCJDaG9pc2lyIHVuIHBheXNcIixcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXJMYWJlbDogXCJOdW3DqXJvIGRlIHTDqWzDqXBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgIGV4YW1wbGU6IFwiRXhlbXBsZSA6XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYzFiNzlkXCIsXG4gICAgICAgICAgICAgICAgICBcInZhbGlkLWNvbG9yXCI6IFwiI2MxYjc5ZFwiLFxuICAgICAgICAgICAgICAgICAgXCJlcnJvci1jb2xvclwiOiBcIiNmZjU2NGJcIixcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3JUZWxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbnRhY3RUZWwsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5jb250YWN0VGVsID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb250YWN0VGVsXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZWQ6IF92bS5idG5Mb2FkaW5nVmFsaWRDb250YWN0IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0ucGF0aWVudC5lbWFpbCB8fFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5idG5Mb2FkaW5nVmFsaWRDb250YWN0LFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZ1ZhbGlkQ29udGFjdFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRDb250YWN0IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNZSBjb250YWN0ZXJcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaDRcIiwgW1xuICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBWb3VzIG7igJlhdmV6IHBhcyBlbmNvcmUgZGUgcHJhdGljaWVuIGF0dHJpdHLDqS4gXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIlxcbiAgICAgICAgUmVjaGVyY2hlei1lbiBkYW5zIGxhIGxpc3RlIGNpLWRlc3NvdXMuXFxuICAgIFwiKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uZ2V0RGFzaGJvYXJkTm90aWZpY2F0aW9ucy5sZW5ndGggfHxcbiAgICAhX3ZtLnBhdGllbnQuYmlydGhkYXRlIHx8XG4gICAgIV92bS5wYXRpZW50LmdlbmRlciB8fFxuICAgICFfdm0ucGF0aWVudC5maXJzdG5hbWUgfHxcbiAgICAhX3ZtLnBhdGllbnQubGFzdG5hbWUgfHxcbiAgICAhX3ZtLnBhdGllbnQuaXNWZXJpZmllZFxuICAgID8gX2MoXG4gICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWJsb2NrXCIsXG4gICAgICAgICAgY2xhc3M6IHsgcmVkdWNlZDogIV92bS4kcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudCB9LFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImRhc2hib2FyZC1ub3RpZmljYXRpb25zXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b2dnbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kcGFyZW50Lm15REJOb3RpZmljYXRpb25zQ29udGVudCA9ICFfdm0uJHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAubXlEQk5vdGlmaWNhdGlvbnNDb250ZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1jaGV2cm9uLWRvd24gaWNvbi0zXCIgfSldXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIk5vdGlmaWNhdGlvbnNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiaGVpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uJHBhcmVudC5teURCTm90aWZpY2F0aW9uc0NvbnRlbnRcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbnMtbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0RGFzaGJvYXJkTm90aWZpY2F0aW9ucywgZnVuY3Rpb24obm90aWYsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGkgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nICYmIFwiYWRkLXBhdGllbnRcIiA9PT0gbm90aWYuY29udGVudFswXS50eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb25zLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLWxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKG5vdGlmLmNvbnRlbnQsIGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiID09PSBlLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhlLmNvbnRlbnQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyXCIgPT09IGUudHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGUuY29udGVudCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBkaXNhYmxlZDogX3ZtLmFjdGlvbkluUHJvZ3Jlc3MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWxpbmsgZ3JlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFjY2VwdERvY3Rvcihub3RpZi5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWFjY2VwdCBpY29uLTIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQWNjZXB0ZXJcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tbGluayByZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlY2xpbmVEb2N0b3Iobm90aWYuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1kZWNsaW5lIGljb24tNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlJlZnVzZXJcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nICYmICFfdm0ucGF0aWVudC5pc1ZlcmlmaWVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbnMtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBWw6lyaWZpZXIgdm90cmUgYWRyZXNzZSBlbWFpbFxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGRpc2FibGVkOiBfdm0uYWN0aW9uSW5Qcm9ncmVzcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tbGluayB2ZXJpZi1tYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNlbmRWZXJpZkVtYWlsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZW52ZWxvcGVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUmVudm95ZXIgbGllblwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgICghX3ZtLnBhdGllbnQuYmlydGhkYXRlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5wYXRpZW50LmdlbmRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0ucGF0aWVudC5maXJzdG5hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnBhdGllbnQubGFzdG5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbnMtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsw6l0ZXIgdm90cmUgcHJvZmlsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbi1hY3Rpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL3BhcmFtZXRyZXNcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtcGVuIGljb24tNFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkNvbXBsw6l0ZXJcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctYmxvY2sgbm90aWZpY2F0aW9ucy1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHctNjAgbm90aWZpY2F0aW9uLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3LTI1IG5vdGlmaWNhdGlvbi1hY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ibG9jayBub3RpZmljYXRpb25zLWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgdy0zMCBub3RpZmljYXRpb24tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHctMzAgbm90aWZpY2F0aW9uLWFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJteS1leGVyY2lzZS1zdGF0c1wiIH0gfSwgW1xuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1ibG9ja1wiLCBhdHRyczogeyBpZDogXCJzZW5zaXRpdml0eVwiIH0gfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5nZXRQYXRpZW50V29ya3NoZWV0cy5sZW5ndGhcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uc2Vuc2l0aXZpdHlVbml0T2ZUaW1lID09PSBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVNlbnNpdGl2aXR5VW5pdE9mVGltZShcImRheVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgSm91clxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uc2Vuc2l0aXZpdHlVbml0T2ZUaW1lID09PSBcIndlZWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VTZW5zaXRpdml0eVVuaXRPZlRpbWUoXCJ3ZWVrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5zZW5zaXRpdml0eVVuaXRPZlRpbWUgPT09IFwibW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VTZW5zaXRpdml0eVVuaXRPZlRpbWUoXCJtb250aFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgTW9pc1xcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uc2Vuc2l0aXZpdHlVbml0T2ZUaW1lID09PSBcInllYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VTZW5zaXRpdml0eVVuaXRPZlRpbWUoXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBbm7DqWVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImtpdi1zZWxlY3RcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZzLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiU2VsZWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldERpc2FibGVXb3Jrc2hlZXRzKFwic2Vuc2l0aXZpdHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbnNpdGl2aXR5VW5pdE9mVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbnNpdGl2aXR5VW5pdE9mVGltZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2Vuc2l0aXZpdHlVbml0T2ZUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIkpvdXJcIiwgdmFsdWU6IFwiZGF5XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBKb3VyIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJTZW1haW5lXCIsIHZhbHVlOiBcIndlZWtcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbWFpbmVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJNb2lzXCIsIHZhbHVlOiBcIm1vbnRoXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBNb2lzIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJBbm7DqWVcIiwgdmFsdWU6IFwieWVhclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjaGFydGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGlkZS1jb250ZW50XCI6ICFfdm0uc2Vuc2l0aXZpdHlFeGVyY2lzZVN0YXRzLnNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbnNpdGl2aXR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzbTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbnNpdGl2aXR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDEyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZW5zaXRpdml0eUV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA8IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbnNpdGl2aXR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoID49IDUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbnNpdGl2aXR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoIDwgMTJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogXCJjdC1tYWpvci1zZWNvbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLnNlbnNpdGl2aXR5RXhlcmNpc2VTdGF0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZW5zaXRpdml0eUNoYXJ0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnQtaGFuZGxlcnNcIjogX3ZtLmV2ZW50SGFuZGxlcnNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF4aXNZLWxhYmVscyBzZW5zaXRpdml0eVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS80Ni5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiU21pbGV5IHF1aSB2YSB0csOocyBtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS80Ny5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiU21pbGV5IHF1aSB2YSBtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS80OC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiU21pbGV5IHF1aSB2YSBwYXMgYmllblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzQ5LnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgcXVpIHZhIGJvZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzUwLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgcGVycGxleGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vaW1nL2ljb25zL3NtaWxleS81MS5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiU21pbGV5IHF1aSB2YSBiaWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uL2ltZy9pY29ucy9zbWlsZXkvNTIuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlNtaWxleSBxdWkgdmEgdHLDqHMgYmllblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzUzLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgdHLDqHMgY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzU0LnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJTbWlsZXkgYXV4IGFuZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1xuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRucy13b3Jrc2hlZXRzLXN0YXRzIHNlbnNpdGl2aXR5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nZXRQYXRpZW50V29ya3NoZWV0cywgZnVuY3Rpb24od29ya3NoZWV0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tdG9nZ2xlLXdvcmtzaGVldC1zdGF0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FjdGl2ZTogX3ZtLmRpc2FibGVXb3Jrc2hlZXRzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZW5zaXRpdml0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5pbmNsdWRlcyh3b3Jrc2hlZXQuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVIaWRkZW5Xb3Jrc2hlZXRMaW5lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbnNpdGl2aXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmUtY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBfdm0uY29sb3JzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjVweCBzb2xpZCBcIiArIF92bS5jb2xvcnNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ0bkNoYXJ0V29ya3NoZWV0UGFydE9mQm9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgd29ya3NoZWV0OiB3b3Jrc2hlZXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgJiYgIV92bS5nZXRQYXRpZW50V29ya3NoZWV0cy5sZW5ndGhcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1jYWxlbmRhci1taW51c1wiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVm91cyBuJ2F2ZXogcGFzIGVuY29yZSBkZSBzdGF0aXN0aXF1ZVwiKV0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxlIHBhdGllbnQgbidhIHBhcyBlbmNvcmUgZGUgc3RhdGlzdGlxdWVcIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmdcIiB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIiwgYXR0cnM6IHsgaWQ6IFwidGVjaG5pY2FsXCIgfSB9LCBbXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b24tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS50ZWNobmljYWxVbml0T2ZUaW1lID09PSBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRlY2huaWNhbFVuaXRPZlRpbWUoXCJkYXlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEpvdXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLnRlY2huaWNhbFVuaXRPZlRpbWUgPT09IFwid2Vla1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRlY2huaWNhbFVuaXRPZlRpbWUoXCJ3ZWVrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS50ZWNobmljYWxVbml0T2ZUaW1lID09PSBcIm1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGVjaG5pY2FsVW5pdE9mVGltZShcIm1vbnRoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBNb2lzXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS50ZWNobmljYWxVbml0T2ZUaW1lID09PSBcInllYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUZWNobmljYWxVbml0T2ZUaW1lKFwieWVhclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQW5uw6llXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJraXYtc2VsZWN0XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2cy1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIlNlbGVjdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzZXREaXNhYmxlV29ya3NoZWV0cyhcInRlY2huaWNhbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGVjaG5pY2FsVW5pdE9mVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlY2huaWNhbFVuaXRPZlRpbWUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRlY2huaWNhbFVuaXRPZlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiSm91clwiLCB2YWx1ZTogXCJkYXlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIEpvdXIgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIlNlbWFpbmVcIiwgdmFsdWU6IFwid2Vla1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU2VtYWluZVxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIk1vaXNcIiwgdmFsdWU6IFwibW9udGhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIE1vaXMgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBcIkFubsOpZVwiLCB2YWx1ZTogXCJ5ZWFyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBbm7DqWVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNoYXJ0aXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWNvbnRlbnRcIjogIV92bS50ZWNobmljYWxFeGVyY2lzZVN0YXRzLnNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzbDogX3ZtLnRlY2huaWNhbEV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA+PSAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc206XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZWNobmljYWxFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gMTIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlY2huaWNhbEV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA8IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlY2huaWNhbEV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA+PSA1ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZWNobmljYWxFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPCAxMlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGlvOiBcImN0LW1ham9yLXNlY29uZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJCYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS50ZWNobmljYWxFeGVyY2lzZVN0YXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRlY2huaWNhbENoYXJ0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnQtaGFuZGxlcnNcIjogX3ZtLmV2ZW50SGFuZGxlcnNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF4aXNZLWxhYmVscyB0ZWNobmljYWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX2MoXCJwXCIsIFtfdm0uX3YoXCJFeGNlbGxlbnRlXCIpXSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX2MoXCJwXCIsIFtfdm0uX3YoXCJNw6lkaW9jcmVcIildKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG5zLXdvcmtzaGVldHMtc3RhdHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdldFBhdGllbnRXb3Jrc2hlZXRzLCBmdW5jdGlvbih3b3Jrc2hlZXQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi10b2dnbGUtd29ya3NoZWV0LXN0YXRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWN0aXZlOiBfdm0uZGlzYWJsZVdvcmtzaGVldHNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlY2huaWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5pbmNsdWRlcyh3b3Jrc2hlZXQuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVIaWRkZW5Xb3Jrc2hlZXRMaW5lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlY2huaWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5lLWNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLmNvbG9yc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCI1cHggc29saWQgXCIgKyBfdm0uY29sb3JzW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdG5DaGFydFdvcmtzaGVldFBhcnRPZkJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHdvcmtzaGVldDogd29ya3NoZWV0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmICFfdm0uZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtY2FsZW5kYXItbWludXNcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlZvdXMgbidhdmV6IHBhcyBlbmNvcmUgZGUgc3RhdGlzdGlxdWVcIildKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMZSBwYXRpZW50IG4nYSBwYXMgZW5jb3JlIGRlIHN0YXRpc3RpcXVlXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nXCIgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWJsb2NrXCIsIGF0dHJzOiB7IGlkOiBcImRpZmZpY3VsdHlcIiB9IH0sIFtcbiAgICAgIF92bS5fbSgyKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvbi1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmRpZmZpY3VsdHlVbml0T2ZUaW1lID09PSBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZURpZmZpY3VsdHlVbml0T2ZUaW1lKFwiZGF5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBKb3VyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5kaWZmaWN1bHR5VW5pdE9mVGltZSA9PT0gXCJ3ZWVrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlRGlmZmljdWx0eVVuaXRPZlRpbWUoXCJ3ZWVrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5kaWZmaWN1bHR5VW5pdE9mVGltZSA9PT0gXCJtb250aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZURpZmZpY3VsdHlVbml0T2ZUaW1lKFwibW9udGhcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1vaXNcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmRpZmZpY3VsdHlVbml0T2ZUaW1lID09PSBcInllYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VEaWZmaWN1bHR5VW5pdE9mVGltZShcInllYXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFubsOpZVxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwia2l2LXNlbGVjdFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidnMtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJTZWxlY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0RGlzYWJsZVdvcmtzaGVldHMoXCJkaWZmaWN1bHR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaWZmaWN1bHR5VW5pdE9mVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpZmZpY3VsdHlVbml0T2ZUaW1lID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWZmaWN1bHR5VW5pdE9mVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsYWJlbDogXCJKb3VyXCIsIHZhbHVlOiBcImRheVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgSm91ciBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiU2VtYWluZVwiLCB2YWx1ZTogXCJ3ZWVrXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBTZW1haW5lXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiTW9pc1wiLCB2YWx1ZTogXCJtb250aFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgTW9pcyBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IFwiQW5uw6llXCIsIHZhbHVlOiBcInllYXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFubsOpZVxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1xuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY2hhcnRpc3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtY29udGVudFwiOiAhX3ZtLmRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLnNlcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpZmZpY3VsdHlFeGVyY2lzZVN0YXRzLmxhYmVscy5sZW5ndGggPj0gMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNtOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlmZmljdWx0eUV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA+PSA5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWZmaWN1bHR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoIDwgMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlmZmljdWx0eUV4ZXJjaXNlU3RhdHMubGFiZWxzLmxlbmd0aCA+PSA1ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWZmaWN1bHR5RXhlcmNpc2VTdGF0cy5sYWJlbHMubGVuZ3RoIDwgOVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGlvOiBcImN0LW1ham9yLXNlY29uZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGlmZmljdWx0eUV4ZXJjaXNlU3RhdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZGlmZmljdWx0eUNoYXJ0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnQtaGFuZGxlcnNcIjogX3ZtLmV2ZW50SGFuZGxlcnNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF4aXNZLWxhYmVscyBkaWZmaWN1bHR5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlZyYWltZW50IHRyb3AgZGlmZmljaWxlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfYyhcInBcIiwgW192bS5fdihcIlRyb3AgZGlmZmljaWxlXCIpXSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX2MoXCJwXCIsIFtfdm0uX3YoXCJPa1wiKV0pXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW19jKFwicFwiLCBbX3ZtLl92KFwiVHJvcCBmYWNpbGVcIildKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfYyhcInBcIiwgW192bS5fdihcIkJlYXVjb3VwIHRyb3AgZmFjaWxlXCIpXSldKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1xuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRucy13b3Jrc2hlZXRzLXN0YXRzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nZXRQYXRpZW50V29ya3NoZWV0cywgZnVuY3Rpb24od29ya3NoZWV0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tdG9nZ2xlLXdvcmtzaGVldC1zdGF0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FjdGl2ZTogX3ZtLmRpc2FibGVXb3Jrc2hlZXRzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaWZmaWN1bHR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKHdvcmtzaGVldC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZUhpZGRlbldvcmtzaGVldExpbmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlmZmljdWx0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5lLWNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLmNvbG9yc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCI1cHggc29saWQgXCIgKyBfdm0uY29sb3JzW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdG5DaGFydFdvcmtzaGVldFBhcnRPZkJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHdvcmtzaGVldDogd29ya3NoZWV0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmICFfdm0uZ2V0UGF0aWVudFdvcmtzaGVldHMubGVuZ3RoXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtY2FsZW5kYXItbWludXNcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlZvdXMgbidhdmV6IHBhcyBlbmNvcmUgZGUgc3RhdGlzdGlxdWVcIildKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMZSBwYXRpZW50IG4nYSBwYXMgZW5jb3JlIGRlIHN0YXRpc3RpcXVlXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nXCIgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImgyXCIsIFtfYyhcInNwYW5cIiwgW192bS5fdihcIlNlbnNpYmlsaXTDqVwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJoMlwiLCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJUZWNobmlxdWVcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaDJcIiwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiRGlmZmljdWx0w6llcyBwZXLDp3Vlc1wiKV0pXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2VjdGlvblwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1ibG9ja1wiLFxuICAgICAgY2xhc3M6IHsgcmVkdWNlZDogIV92bS4kcGFyZW50Lm15U2NvcmVzQ29udGVudCB9LFxuICAgICAgYXR0cnM6IHsgaWQ6IFwibXktc2NvcmVzXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b2dnbGUtY29udGVudFwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS4kcGFyZW50Lm15U2NvcmVzQ29udGVudCA9ICFfdm0uJHBhcmVudC5teVNjb3Jlc0NvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY2hldnJvbi1kb3duIGljb24tM1wiIH0pXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgIV92bS5kb2N0b3JWaWV3ID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJNZXNcIildKSA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uZG9jdG9yVmlldyA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiU2VzXCIpXSkgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIGluZGljZXNcXG4gICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImhlaWdodFwiIH0gfSwgW1xuICAgICAgICBfdm0uJHBhcmVudC5teVNjb3Jlc0NvbnRlbnRcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzY29yZS1jaXJjbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZ1ZS1lbGxpcHNlLXByb2dyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBwcm9ncmVzczogX3ZtLmdldFNjb3JlUGVyY2VudGFnZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZS1lbGxpcHNlLXByb2dyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNjb3JlLWNpcmNsZS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNjb3JlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybWF0TnVtYlRob3VzYW5kKF92bS5nZXRTY29yZSkpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidW5pdFwiIH0sIFtfdm0uX3YoXCJQb2ludHNcIildKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzY29yZS1saW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci1iYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJsb2FkaW5nLWdyYXktZGFya1wiOiBfdm0ubG9hZGluZyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci10aHVtYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgbWF4OiBfdm0uc2NvcmUgPj0gX3ZtLnNjb3JlTWF4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3ZtLmdldFNjb3JlUGVyY2VudGFnZSArIFwiJVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NiYXItc3RlcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIxMCAwMDAgcHRzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb2ludFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIjIwIDAwMCBwdHNcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiMzAgMDAwIHB0c1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCI0MCAwMDAgcHRzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci1jdXJyZW50LXNjb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogX3ZtLmdldFNjb3JlUGVyY2VudGFnZSA8IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IF92bS5nZXRTY29yZVBlcmNlbnRhZ2UgPiA4MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFNjb3JlUGVyY2VudGFnZSA8PSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmdldFNjb3JlUGVyY2VudGFnZSArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVm90cmVcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlNvblwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIHNjb3JlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2NvcmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIihcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdE51bWJUaG91c2FuZChfdm0uZ2V0U2NvcmUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBwdHMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NiYXItYmFzZS1lbmQtZGVjb3JhdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2UtYmxvY2sgc2NvcmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWV4ZXJjaXNlIGljb24tN1wiIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm9tYnJlIGTigJlleGVyY2ljZXMgZmFpdHNcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC1yZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRUb3RhbEV4ZXJjaXNlQ29tcGxldGVkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBsb2FkaW5nLWJsb2NrLWgzIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZW5zaXRpdml0eS1ibG9jayBzY29yZS1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtc2Vuc2l0aXZpdHkgaWNvbi04XCIgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXcgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlZvdHJlXCIpXSkgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRvY3RvclZpZXcgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlNhXCIpXSkgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIHNlbnNpYmlsaXTDqVxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC1yZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFNlbnNpdGl2aXR5VmFyaWF0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBcIiA9PT0gX3ZtLmdldFNlbnNpdGl2aXR5VmFyaWF0aW9uLnZhcmlhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGFtw6lsaW9yYXRpb25cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRTZW5zaXRpdml0eVZhcmlhdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRvd25cIiA9PT0gX3ZtLmdldFNlbnNpdGl2aXR5VmFyaWF0aW9uLnZhcmlhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGJhaXNzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFNlbnNpdGl2aXR5VmFyaWF0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXF1YWxcIiA9PT0gX3ZtLmdldFRlY2huaWNhbFZhcmlhdGlvbi52YXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFibGVcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWVudMO0dCAhXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5nZXRTZW5zaXRpdml0eVZhcmlhdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJlxuICAgICAgICAgICAgICAgICAgICBcInVwXCIgPT09IF92bS5nZXRTZW5zaXRpdml0eVZhcmlhdGlvbi52YXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC12YXJpYXRpb24gZ3JlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIChcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi12YXJpYXRpb24tdXAgaWNvbi0yN1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiK1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRTZW5zaXRpdml0eVZhcmlhdGlvbi5yZXN1bHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIpXFxuICAgICAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFNlbnNpdGl2aXR5VmFyaWF0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmXG4gICAgICAgICAgICAgICAgICAgIFwiZG93blwiID09PSBfdm0uZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24udmFyaWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtdmFyaWF0aW9uIHJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgKFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtdmFyaWF0aW9uLWRvd24gaWNvbi0yOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0U2Vuc2l0aXZpdHlWYXJpYXRpb24ucmVzdWx0KSArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHNcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGxvYWRpbmctYmxvY2staDMgdy03NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRlY2huaWNhbC1ibG9jayBzY29yZS1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtdGVjaG5pY2FsIGljb24tOVwiIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5kb2N0b3JWaWV3ID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJWb3RyZVwiKV0pIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3ID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTYVwiKV0pIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiB0ZWNobmlxdWVcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtcmVzdWx0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRUZWNobmljYWxWYXJpYXRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cFwiID09PSBfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uLnZhcmlhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuIGFtw6lsaW9yYXRpb25cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRUZWNobmljYWxWYXJpYXRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3duXCIgPT09IF92bS5nZXRUZWNobmljYWxWYXJpYXRpb24udmFyaWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW4gYmFpc3NlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXF1YWxcIiA9PT0gX3ZtLmdldFRlY2huaWNhbFZhcmlhdGlvbi52YXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFibGVcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmllbnTDtHQgIVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmXG4gICAgICAgICAgICAgICAgICAgIFwidXBcIiA9PT0gX3ZtLmdldFRlY2huaWNhbFZhcmlhdGlvbi52YXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC12YXJpYXRpb24gZ3JlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIChcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi12YXJpYXRpb24tdXAgaWNvbi0yN1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiK1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRUZWNobmljYWxWYXJpYXRpb24ucmVzdWx0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5nZXRUZWNobmljYWxWYXJpYXRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgIV92bS5sb2FkaW5nUGF0aWVudFdvcmtzaGVldHMgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJkb3duXCIgPT09IF92bS5nZXRUZWNobmljYWxWYXJpYXRpb24udmFyaWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtdmFyaWF0aW9uIHJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgKFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtdmFyaWF0aW9uLWRvd24gaWNvbi0yOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VGVjaG5pY2FsVmFyaWF0aW9uLnJlc3VsdCkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIilcXG4gICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBsb2FkaW5nLWJsb2NrLWgzIHctNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJTY29yZVJhbmtCbG9ja1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByYW5rOiBfdm0uZ2V0UmFuayxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIGRvY3RvclZpZXc6IF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwic2NvcmUtcmFuay1ibG9jayBzY29yZS1ibG9ja1wiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgbm91dmVhdTogXCJub3V2ZWF1XCIgPT09IF92bS5yYW5rLFxuICAgICAgICBkZWJ1dGFudDogXCJkZWJ1dGFudFwiID09PSBfdm0ucmFuayxcbiAgICAgICAgYW1hdGV1cjogXCJhbWF0ZXVyXCIgPT09IF92bS5yYW5rLFxuICAgICAgICBpbnRlcm1lZGlhaXJlOiBcImludGVybWVkaWFpcmVcIiA9PT0gX3ZtLnJhbmssXG4gICAgICAgIGNvbmZpcm1lOiBcImNvbmZpcm1lXCIgPT09IF92bS5yYW5rLFxuICAgICAgICBleHBlcnQ6IFwiZXhwZXJ0XCIgPT09IF92bS5yYW5rXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiwgbW9kZTogXCJvdXQtaW5cIiB9IH0sIFtcbiAgICAgICAgIV92bS5sb2FkaW5nICYmIFwibm91dmVhdVwiID09PSBfdm0ucmFua1xuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBrZXk6IFwibm91dmVhdVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgICAgICAgIV92bS5kb2N0b3JWaWV3ID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJWb3RyZVwiKV0pIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLmRvY3RvclZpZXcgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIlNvblwiKV0pIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIG5pdmVhdVxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1pbWdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvaGFuZC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBkdSByYW5nIG5vdXZlYXUgcGF0aWVudFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiTm91dmVhdSBQYXRpZW50XCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLXJlc3VsdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJD4oCZZXN0IHBhcnRpIHBvdXIgYWxsZXIgbWlldXjCoCFcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgIV92bS5sb2FkaW5nICYmIFwiZGVidXRhbnRcIiA9PT0gX3ZtLnJhbmtcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBcImRlYnV0YW50XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJWb3RyZSBuaXZlYXVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1pbWdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvYnJhcy5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBkdSByYW5nIGTDqWJ1dGFudFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiUGF0aWVudCBEw6lidXRhbnRcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstcmVzdWx0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdignTXVzY2xlIHRvbiBqZXUgXCJSb2JlcnRcIsKgIScpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICFfdm0ubG9hZGluZyAmJiBcImFtYXRldXJcIiA9PT0gX3ZtLnJhbmtcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBcImFtYXRldXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIlZvdHJlIG5pdmVhdVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLWltZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWcvaWNvbnMvc21pbGV5LzYxLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIGR1IHJhbmcgYW1hdGV1clwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiUGF0aWVudCBBbWF0ZXVyXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLXJlc3VsdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJMYSB0w6p0ZSBkYW5zIGxlIGd1aWRvbsKgIVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAhX3ZtLmxvYWRpbmcgJiYgXCJpbnRlcm1lZGlhaXJlXCIgPT09IF92bS5yYW5rXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IGtleTogXCJpbnRlcm1lZGlhaXJlXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJWb3RyZSBuaXZlYXVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1pbWdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIGR1IHJhbmcgaW50ZXJtw6lkaWFpcmVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlBhdGllbnQgSW50ZXJtw6lkaWFpcmVcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstcmVzdWx0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkJpZW4gZGFucyB0ZXMgQmFza2V0c8KgIVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAhX3ZtLmxvYWRpbmcgJiYgXCJjb25maXJtZVwiID09PSBfdm0ucmFua1xuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBrZXk6IFwiY29uZmlybWVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIlZvdHJlIG5pdmVhdVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLWltZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWcvaWNvbnMvY29sb3JlZC9yZXdhcmQuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgMSBkdSByYW5nIGNvbmZpcm3DqVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9pbWcvaWNvbnMvY29sb3JlZC9yZXdhcmQuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgMiBkdSByYW5nIGNvbmZpcm3DqVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiUGF0aWVudCBDb25maXJtw6lcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInJhbmstcmVzdWx0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlBhcyBsZSB0ZW1wcyBkZSBuaWFpc2VywqAhXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICFfdm0ubG9hZGluZyAmJiBcImV4cGVydFwiID09PSBfdm0ucmFua1xuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBrZXk6IFwiZXhwZXJ0XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJWb3RyZSBuaXZlYXVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicmFuay1pbWdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIDEgZHUgcmFuZyBleHBlcnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIDIgZHUgcmFuZyBleHBlcnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vLi4vaW1nL2ljb25zL2NvbG9yZWQvcmV3YXJkLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIDMgZHUgcmFuZyBleHBlcnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlBhdGllbnQgRXhwZXJ0XCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJyYW5rLXJlc3VsdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcsOqdCBwb3VyIGxlIHByb2NoYWluIElyb24gTWFuwqAhXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBrZXk6IFwibG9hZGluZ1wiLCBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGg0IHctNjVcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgaVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyByYW5rLWxhYmVsXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHJhbmstcmVzdWx0IHctODVcIiB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWJsb2NrXCIsXG4gICAgICBjbGFzczogeyByZWR1Y2VkOiAhX3ZtLiRwYXJlbnQubXlXb3Jrc2hlZXRzQ29udGVudCB9LFxuICAgICAgYXR0cnM6IHsgaWQ6IFwibXktd29ya3NoZWV0c1wiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9nZ2xlLWNvbnRlbnRcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uJHBhcmVudC5teVdvcmtzaGVldHNDb250ZW50ID0gIV92bS4kcGFyZW50Lm15V29ya3NoZWV0c0NvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY2hldnJvbi1kb3duIGljb24tM1wiIH0pXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgIV92bS5kb2N0b3JWaWV3ID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJNZXNcIildKSA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uZG9jdG9yVmlldyA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiU2VzXCIpXSkgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIGZpY2hlc1xcbiAgICBcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiaGVpZ2h0XCIgfSB9LCBbXG4gICAgICAgIF92bS4kcGFyZW50Lm15V29ya3NoZWV0c0NvbnRlbnRcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWxpc3RcIiB9LCBbXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1BhdGllbnRXb3Jrc2hlZXRzICYmIF92bS5nZXRQYXRpZW50V29ya3NoZWV0cy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndsLXBhdGllbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdldFBhdGllbnRXb3Jrc2hlZXRzLCBmdW5jdGlvbih3b3Jrc2hlZXQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGkgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWhlYWRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHdvcmtzaGVldC50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGFnUGFydE9mQm9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pc0NvbXBsZXRlZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmV4ZXJjaXNlU3RhdHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwYXJ0T2ZCb2R5OiB3b3Jrc2hlZXQucGFydE9mQm9keSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24uaXNDb21wbGV0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbi5pc0luUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1wcm9ncmVzcy1saW5lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci1iYXNlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzYmFyLXRodW1iXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQud29ya3NoZWV0UHJvZ3Jlc3Npb24gKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci1zdGVwc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZvdXMgYXZleiBmaW5pIGxhIGZpY2hlICFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlldyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkVuIGNvdXJzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlldyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VTdGF0cy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJOb24gZMOpbWFycsOpZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAod29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24uaXNDb21wbGV0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbi5pc0luUHJvZ3Jlc3MpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoIXdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VTdGF0cy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtcHJvZ3Jlc3MtbGluZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NiYXItYmFzZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci10aHVtYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzc2Jhci1zdGVwc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZvdXMgYXZleiBmaW5pIGxhIGZpY2hlICFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlldyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkVuIGNvdXJzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlldyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VTdGF0cy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJOb24gZMOpbWFycsOpZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAod29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbi5pc0NvbXBsZXRlZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICghd29ya3NoZWV0LmN1cnJlbnRXb3Jrc2hlZXRTZXNzaW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5leGVyY2lzZVN0YXRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndvcmtzaGVldC1jb250ZW50IHNlc3Npb24tY29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudG90YWxXb3Jrc2hlZXRTZXNzaW9ucyAhPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbi5leGVjT3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyYXZvLCB2b3MgZXhlcmNpY2VzIGRlIGNldHRlIHNlc3Npb24gb250XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDDqXTDqSBmYWl0cyBhdmVjIHN1Y2PDqHMgISBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRpbWVMZWZ0QmVmb3JlTmV4dFNlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW5kZXotdm91cyBkYW5zXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50aW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvdXIgdW5lIG5vdXZlbGxlIHNlc3Npb24uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGVyY2ljZXMgdGVybWluw6lzIHBvdXIgY2V0dGUgc2Vzc2lvbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnRpbWVMZWZ0QmVmb3JlTmV4dFNlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9jaGFpbmUgc2Vzc2lvbiBkYW5zXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC50aW1lTGVmdEJlZm9yZU5leHRTZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZXhlcmNpc2VTdGF0cy5sZW5ndGggPiAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQudG90YWxXb3Jrc2hlZXRTZXNzaW9ucyA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5jdXJyZW50V29ya3NoZWV0U2Vzc2lvbi5leGVjT3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRsOpbGljaXRhdGlvbnMsIHZvdHJlIHRyYWl0ZW1lbnQgZXN0IHRlcm1pbsOpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVHJhaXRlbWVudCB0ZXJtaW7DqS5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWNvbnN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWRpcmVjdEluUHJvZ3Jlc3MgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRpcmVjdFRvV29ya3NoZWV0UGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnN1bHRlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRvY3RvclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWNvbnN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWRpcmVjdEluUHJvZ3Jlc3MgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRpcmVjdFRvRG9jdG9yVmlldyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvaXJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWV4ZXJjaXNlcy1jb3VudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWV4ZXJjaXNlIGljb24tN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHdvcmtzaGVldC5leGVyY2lzZXMubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5leGVyY2lzZXMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwic1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LXRpbWluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWNhbGVuZGFyIGljb24tMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Mod29ya3NoZWV0LnBlckRheSkgKyBcInhcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyIGpvdXIgLVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHdvcmtzaGVldC5wZXJXZWVrKSArIFwieFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXIgc2VtYWluZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LXBlcmlvZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY2xvY2sgaWNvbi0xMVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQw6lyaW9kZSA6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHdvcmtzaGVldC5kdXJhdGlvbikgKyBcIiBzZW1haW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuZHVyYXRpb24gPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1nb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZGlyZWN0SW5Qcm9ncmVzcyA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmc6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRpcmVjdFRvV29ya3NoZWV0UGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gIVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWdvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVkaXJlY3RJblByb2dyZXNzID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmlkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF3b3Jrc2hlZXQuY3VycmVudFdvcmtzaGVldFNlc3Npb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5leGVyY2lzZVN0YXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGggPT09IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkaXJlY3RUb0RvY3RvclZpZXcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvaXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0cyAmJiAhX3ZtLmdldFBhdGllbnRXb3Jrc2hlZXRzLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZvbGRlci1taW51c1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5kb2N0b3JWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVm91cyBuJ2F2ZXogcGFzIGRlIGZpY2hlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxlIHBhdGllbnQgbidhIHBhcyBlbmNvcmUgZGUgZmljaGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdQYXRpZW50V29ya3NoZWV0c1xuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbG9hZGluZy1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpdGxlIHctMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHBhcnQtb2YtYm9keVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHdvcmtzaGVldC1wcm9ncmVzcy1saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQtZXhlcmNpc2VzLWNvdW50XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy0zNVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHdvcmtzaGVldC10aW1pbmcgdy0yNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtcGVyaW9kIHctMzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgYnRuLWdvXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBsb2FkaW5nLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZyB3b3Jrc2hlZXQtdGl0bGUgdy00NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgcGFydC1vZi1ib2R5XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXByb2dyZXNzLWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC1leGVyY2lzZXMtY291bnRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LTE1XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgd29ya3NoZWV0LXRpbWluZyB3LTM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHdvcmtzaGVldC1wZXJpb2Qgdy0yNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBidG4tZ29cIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiVnVlIiwiRGFzaGJvYXJkUGFnZSIsImF4aW9zIiwiVnVlQXhpb3MiLCJ1c2UiLCJWdWVzYXgiLCJWdWVFbGxpcHNlUHJvZ3Jlc3MiLCJDaGFydGlzdFRvb2x0aXBzIiwicmVxdWlyZSIsIm1lc3NhZ2VOb0RhdGEiLCJjbGFzc05vRGF0YSIsInJlbmRlciIsImgiLCIkbW91bnQiXSwic291cmNlUm9vdCI6IiJ9