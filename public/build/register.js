"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["register"],{

/***/ "./assets/vue/fullpage/register.js":
/*!*****************************************!*\
  !*** ./assets/vue/fullpage/register.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _Register_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue */ "./assets/vue/fullpage/Register.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.esm.min.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuesax */ "./node_modules/vuesax/dist/vuesax.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuesax__WEBPACK_IMPORTED_MODULE_4__);

 // Axios



vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_axios__WEBPACK_IMPORTED_MODULE_2__["default"], (axios__WEBPACK_IMPORTED_MODULE_1___default())); // Vuesax(UX lib)


vue__WEBPACK_IMPORTED_MODULE_3__["default"].use((vuesax__WEBPACK_IMPORTED_MODULE_4___default()));
new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
  render: function render(h) {
    return h(_Register_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}).$mount('#vue');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _register_UserTypeChoice_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/UserTypeChoice.vue */ "./assets/vue/fullpage/register/UserTypeChoice.vue");
/* harmony import */ var _register_UserHasDoctorChoice_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/UserHasDoctorChoice.vue */ "./assets/vue/fullpage/register/UserHasDoctorChoice.vue");
/* harmony import */ var _register_RegisterForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/RegisterForm.vue */ "./assets/vue/fullpage/register/RegisterForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      csrfTokenRegister: null,
      csrfTokenContact: null,
      activeStep: 1,
      previousStep: 1,
      userType: null,
      userHasDoctor: null
    };
  },
  components: {
    UserTypeChoice: _register_UserTypeChoice_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserHasDoctorChoice: _register_UserHasDoctorChoice_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    RegisterForm: _register_RegisterForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    setUserTypeChoice: function setUserTypeChoice(userType) {
      this.userType = userType;
      this.previousStep = this.activeStep;
      this.activeStep = userType == "patient" ? 2 : 3;
    },
    setUserHasDoctorChoice: function setUserHasDoctorChoice(userHasDoctor) {
      this.userHasDoctor = userHasDoctor;
      this.previousStep = this.activeStep;
      this.activeStep = 3;
    },
    setActiveStep: function setActiveStep(num) {
      if (num == 2 && !this.userType) {
        return false;
      }

      if (num == 3 && this.userHasDoctor === null) {
        return false;
      }

      this.activeStep = num;
    }
  },
  created: function created() {
    vue__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.$vs = this.$vs;
    document.body.classList.add("fuzzy-balls");
    document.body.classList.add("animated");
    document.body.classList.add("disable-scrollbar");
    var data = JSON.parse(document.getElementById("vueData").innerHTML);
    this.csrfTokenRegister = data.csrfTokenRegister;
    this.csrfTokenContact = data.csrfTokenContact;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/RegisterForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/RegisterForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _ConditionGenerale_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ConditionGenerale.vue */ "./assets/vue/fullpage/register/ConditionGenerale.vue");
/* harmony import */ var _components_DoctorSelectBox_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/DoctorSelectBox.vue */ "./assets/vue/components/DoctorSelectBox.vue");
/* harmony import */ var vue_phone_number_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-phone-number-input */ "./node_modules/vue-phone-number-input/dist/vue-phone-number-input.common.js");
/* harmony import */ var vue_phone_number_input__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_phone_number_input__WEBPACK_IMPORTED_MODULE_13__);











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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CG: _ConditionGenerale_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    DoctorSelectBox: _components_DoctorSelectBox_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    VuePhoneNumberInput: (vue_phone_number_input__WEBPACK_IMPORTED_MODULE_13___default())
  },
  props: {
    userType: String,
    userHasDoctor: Boolean,
    csrfTokenRegister: String,
    csrfTokenContact: String
  },
  data: function data() {
    return {
      registerDetails: {
        doctorSelect: null,
        lastname: "",
        firstname: "",
        email: "",
        plainPassword: "",
        numRppsAmeli: ""
      },
      validationMessage: {
        email: null,
        password: null
      },
      emptyMessage: {
        doctorSelect: null,
        lastname: null,
        firstname: null,
        email: null,
        plainPassword: null,
        passwordConfirm: null,
        numRppsAmeli: null,
        acceptCG: null
      },
      contactTel: null,
      contactChoice: null,
      passwordConfirm: "",
      hasVisiblePassword: false,
      hasVisiblePasswordConfirm: false,
      btnLoadingRegister: false,
      formLoadingRegister: false,
      modalCG: false,
      acceptCG: false
    };
  },
  methods: {
    validAcceptCG: function validAcceptCG() {
      this.acceptCG = true;
      this.modalCG = false;
    },
    validRegistration: function validRegistration() {
      var _this = this;

      if (this.checkIfFieldsAreNotEmpty() && !this.validationMessage.password && !this.validationMessage.email) {
        this.btnLoadingRegister = true;
        this.formLoadingRegister = true;
        this.axios.post("/inscription", {
          _token: this.csrfTokenRegister,
          doctorSelectId: this.registerDetails.doctorSelect ? this.registerDetails.doctorSelect.id : null,
          lastname: this.registerDetails.lastname,
          firstname: this.registerDetails.firstname,
          email: this.registerDetails.email.toLowerCase(),
          plainPassword: this.registerDetails.plainPassword,
          numRppsAmeli: this.registerDetails.numRppsAmeli ? this.registerDetails.numRppsAmeli : null,
          userType: this.userType
        }).then(function (response) {
          _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].openSuccessNotificationStay("Inscription validée", response.data);

          if (_this.contactChoice && (_this.contactTel || _this.registerDetails.email) && _this.userType === "patient" && !_this.userHasDoctor) {
            _this.axios.post("/contact", {
              _token: _this.csrfTokenContact,
              lastname: _this.registerDetails.lastname,
              firstname: _this.registerDetails.firstname,
              email: _this.registerDetails.email.toLowerCase(),
              contactTel: _this.contactTel,
              contactChoice: _this.contactChoice == 1 ? "email" : _this.contactChoice == 2 ? "téléphone" : ""
            }).then(function (response) {
              _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].openSuccessNotification("Prise de contact", response.data);

              _this.resetData();

              setTimeout(function () {
                document.location.href = "/connexion";
              }, 2000);
            }).catch(function (error) {
              var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
              _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].openErrorNotification("Erreur", errorMess);
            });
          } else {
            _this.resetData();

            setTimeout(function () {
              document.location.href = "/connexion";
            }, 2000);
          }
        }).catch(function (error) {
          var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
          _services_function__WEBPACK_IMPORTED_MODULE_10__["default"].openErrorNotificationStay("Erreur", errorMess);
          _this.btnLoadingRegister = false;
          _this.formLoadingRegister = false;
        });
      }
    },
    validationEmail: function validationEmail() {
      this.validationMessage.email = null;
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(String(this.registerDetails.email).toLowerCase())) {
        this.contactChoice = this.contactTel ? 2 : null;
        this.validationMessage.email = "Merci d'entrer un email valide.";
      } else {
        this.contactChoice = 1;
      }
    },
    validationPassword: function validationPassword() {
      this.validationMessage.password = null;

      if (this.registerDetails.plainPassword !== this.passwordConfirm) {
        this.validationMessage.password = "Les mots de passe ne correspondent pas.";
      }
    },
    resetData: function resetData() {
      this.registerDetails = {
        doctorSelect: null,
        lastname: "",
        firstname: "",
        email: "",
        plainPassword: "",
        numRppsAmeli: ""
      };
      this.validationMessage = {
        email: null,
        password: null
      };
      this.emptyMessage = {
        doctorSelect: null,
        lastname: null,
        firstname: null,
        email: null,
        plainPassword: null,
        passwordConfirm: null,
        numRppsAmeli: null,
        acceptCG: null
      };
      this.passwordConfirm = "";
      this.acceptCG = false;
      this.contactTel = null;
      this.contactChoice = null;
    },
    registerOauth: function registerOauth(social) {
      if (this.checkIfFieldsAreNotEmpty(true) && !this.validationMessage.password && !this.validationMessage.email) {
        var doctorId = this.registerDetails.doctorSelect && this.userHasDoctor ? this.registerDetails.doctorSelect.id : 0;
        var doctorNumRppsAmeli = this.registerDetails.numRppsAmeli ? this.registerDetails.numRppsAmeli : "nc";
        document.location.href = "/oauth/connect/".concat(this.userType, "/").concat(social, "/").concat(doctorId, "/").concat(doctorNumRppsAmeli);
      }
    },
    setDoctorSelected: function setDoctorSelected(doctorSelected) {
      this.registerDetails.doctorSelect = doctorSelected;
    },
    checkIfFieldsAreNotEmpty: function checkIfFieldsAreNotEmpty() {
      var oauth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!oauth && !this.registerDetails.lastname || !oauth && !this.registerDetails.firstname || !oauth && !this.registerDetails.email || !oauth && (!this.registerDetails.plainPassword || !this.passwordConfirm) || this.userType === "patient" && this.userHasDoctor && !this.registerDetails.doctorSelect || this.userType === "doctor" && !this.registerDetails.numRppsAmeli || !this.acceptCG) {
        if (!oauth && !this.registerDetails.lastname) {
          this.emptyMessage.lastname = "Vous devez renseigner votre nom";
        }

        if (!oauth && !this.registerDetails.firstname) {
          this.emptyMessage.firstname = "Vous devez renseigner votre prénom";
        }

        if (!oauth && !this.registerDetails.email) {
          this.emptyMessage.email = "Vous devez renseigner un email";
        }

        if (!oauth && !this.registerDetails.plainPassword) {
          this.emptyMessage.plainPassword = "Vous devez renseigner un mot de passe";
        }

        if (!oauth && !this.passwordConfirm) {
          this.emptyMessage.passwordConfirm = "Vous devez confirmer votre mot de passe";
        }

        if (this.userType === "patient" && this.userHasDoctor && !this.registerDetails.doctorSelect) {
          this.emptyMessage.doctorSelect = "Vous devez sélectionner votre praticien";
        }

        if (this.userType === "doctor" && !this.registerDetails.numRppsAmeli) {
          this.emptyMessage.numRppsAmeli = "Vous devez renseigner votre numéro RPPS ou ADELI";
        }

        if (!this.acceptCG) {
          this.emptyMessage.acceptCG = "Vous devez accepter les conditions générales";
        }

        return false;
      }

      return true;
    }
  },
  computed: {
    getSecurePassProgress: function getSecurePassProgress() {
      var progress = 0; // at least one number

      if (/\d/.test(this.registerDetails.plainPassword)) {
        progress += 20;
      } // at least one capital letter


      if (/(.*[A-Z].*)/.test(this.registerDetails.plainPassword)) {
        progress += 20;
      } // at menons a lowercase


      if (/(.*[a-z].*)/.test(this.registerDetails.plainPassword)) {
        progress += 20;
      } // more than 9 digits


      if (this.registerDetails.plainPassword.length >= 9) {
        progress += 20;
      } // at least one special character


      if (/[^A-Za-z0-9]/.test(this.registerDetails.plainPassword)) {
        progress += 20;
      }

      return progress;
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

      if (this.contactTel && this.contactTel.length == 14) {
        if (this.contactTel.replace(/ /g, "").length == 10) {
          this.contactChoice = 2;
        } else {
          this.contactChoice = this.registerDetails.email ? 1 : null;
        }
      } else {
        this.contactChoice = this.registerDetails.email ? 1 : null;
      }

      return error;
    },
    getEmptyDoctorSelectErrorMessage: function getEmptyDoctorSelectErrorMessage() {
      return this.emptyMessage.doctorSelect;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    validUserHasDoctorChoice: function validUserHasDoctorChoice(userHasDoctor) {
      this.$emit("userHasDoctorChoice", userHasDoctor);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    validUserTypeChoice: function validUserTypeChoice(userType) {
      this.$emit("userTypeChoice", userType);
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Register.vue?vue&type=style&index=0&id=c666ed66&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Register.vue?vue&type=style&index=0&id=c666ed66&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=style&index=0&id=30e8abb6&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=style&index=0&id=30e8abb6&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/RegisterForm.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/RegisterForm.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/vue/fullpage/Register.vue":
/*!******************************************!*\
  !*** ./assets/vue/fullpage/Register.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_c666ed66_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=c666ed66&scoped=true& */ "./assets/vue/fullpage/Register.vue?vue&type=template&id=c666ed66&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./assets/vue/fullpage/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_c666ed66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=c666ed66&lang=scss&scoped=true& */ "./assets/vue/fullpage/Register.vue?vue&type=style&index=0&id=c666ed66&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_c666ed66_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_c666ed66_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c666ed66",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/fullpage/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/fullpage/register/ConditionGenerale.vue":
/*!************************************************************!*\
  !*** ./assets/vue/fullpage/register/ConditionGenerale.vue ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConditionGenerale_vue_vue_type_template_id_30e8abb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionGenerale.vue?vue&type=template&id=30e8abb6&scoped=true& */ "./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=template&id=30e8abb6&scoped=true&");
/* harmony import */ var _ConditionGenerale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConditionGenerale.vue?vue&type=script&lang=js& */ "./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=script&lang=js&");
/* harmony import */ var _ConditionGenerale_vue_vue_type_style_index_0_id_30e8abb6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConditionGenerale.vue?vue&type=style&index=0&id=30e8abb6&lang=scss&scoped=true& */ "./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=style&index=0&id=30e8abb6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConditionGenerale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConditionGenerale_vue_vue_type_template_id_30e8abb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ConditionGenerale_vue_vue_type_template_id_30e8abb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "30e8abb6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/fullpage/register/ConditionGenerale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/fullpage/register/RegisterForm.vue":
/*!*******************************************************!*\
  !*** ./assets/vue/fullpage/register/RegisterForm.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterForm_vue_vue_type_template_id_89adca0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=template&id=89adca0e& */ "./assets/vue/fullpage/register/RegisterForm.vue?vue&type=template&id=89adca0e&");
/* harmony import */ var _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=script&lang=js& */ "./assets/vue/fullpage/register/RegisterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _RegisterForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/fullpage/register/RegisterForm.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterForm_vue_vue_type_template_id_89adca0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegisterForm_vue_vue_type_template_id_89adca0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/fullpage/register/RegisterForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/fullpage/register/UserHasDoctorChoice.vue":
/*!**************************************************************!*\
  !*** ./assets/vue/fullpage/register/UserHasDoctorChoice.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserHasDoctorChoice_vue_vue_type_template_id_f427ffe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserHasDoctorChoice.vue?vue&type=template&id=f427ffe6& */ "./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=template&id=f427ffe6&");
/* harmony import */ var _UserHasDoctorChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserHasDoctorChoice.vue?vue&type=script&lang=js& */ "./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _UserHasDoctorChoice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserHasDoctorChoice.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserHasDoctorChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserHasDoctorChoice_vue_vue_type_template_id_f427ffe6___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserHasDoctorChoice_vue_vue_type_template_id_f427ffe6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/fullpage/register/UserHasDoctorChoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/fullpage/register/UserTypeChoice.vue":
/*!*********************************************************!*\
  !*** ./assets/vue/fullpage/register/UserTypeChoice.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserTypeChoice_vue_vue_type_template_id_29034a98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserTypeChoice.vue?vue&type=template&id=29034a98& */ "./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=template&id=29034a98&");
/* harmony import */ var _UserTypeChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserTypeChoice.vue?vue&type=script&lang=js& */ "./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _UserTypeChoice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserTypeChoice.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserTypeChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserTypeChoice_vue_vue_type_template_id_29034a98___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserTypeChoice_vue_vue_type_template_id_29034a98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/fullpage/register/UserTypeChoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/fullpage/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./assets/vue/fullpage/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConditionGenerale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConditionGenerale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConditionGenerale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/fullpage/register/RegisterForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./assets/vue/fullpage/register/RegisterForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/RegisterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHasDoctorChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserHasDoctorChoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHasDoctorChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypeChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserTypeChoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypeChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/fullpage/Register.vue?vue&type=style&index=0&id=c666ed66&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./assets/vue/fullpage/Register.vue?vue&type=style&index=0&id=c666ed66&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_c666ed66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=c666ed66&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Register.vue?vue&type=style&index=0&id=c666ed66&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=style&index=0&id=30e8abb6&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=style&index=0&id=30e8abb6&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ConditionGenerale_vue_vue_type_style_index_0_id_30e8abb6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConditionGenerale.vue?vue&type=style&index=0&id=30e8abb6&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=style&index=0&id=30e8abb6&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/vue/fullpage/register/RegisterForm.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./assets/vue/fullpage/register/RegisterForm.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterForm.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/RegisterForm.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHasDoctorChoice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserHasDoctorChoice.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypeChoice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserTypeChoice.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/fullpage/Register.vue?vue&type=template&id=c666ed66&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./assets/vue/fullpage/Register.vue?vue&type=template&id=c666ed66&scoped=true& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_c666ed66_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_c666ed66_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_c666ed66_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=c666ed66&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Register.vue?vue&type=template&id=c666ed66&scoped=true&");


/***/ }),

/***/ "./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=template&id=30e8abb6&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=template&id=30e8abb6&scoped=true& ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConditionGenerale_vue_vue_type_template_id_30e8abb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConditionGenerale_vue_vue_type_template_id_30e8abb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConditionGenerale_vue_vue_type_template_id_30e8abb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConditionGenerale.vue?vue&type=template&id=30e8abb6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=template&id=30e8abb6&scoped=true&");


/***/ }),

/***/ "./assets/vue/fullpage/register/RegisterForm.vue?vue&type=template&id=89adca0e&":
/*!**************************************************************************************!*\
  !*** ./assets/vue/fullpage/register/RegisterForm.vue?vue&type=template&id=89adca0e& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_89adca0e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_89adca0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_89adca0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterForm.vue?vue&type=template&id=89adca0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/RegisterForm.vue?vue&type=template&id=89adca0e&");


/***/ }),

/***/ "./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=template&id=f427ffe6&":
/*!*********************************************************************************************!*\
  !*** ./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=template&id=f427ffe6& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHasDoctorChoice_vue_vue_type_template_id_f427ffe6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHasDoctorChoice_vue_vue_type_template_id_f427ffe6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHasDoctorChoice_vue_vue_type_template_id_f427ffe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserHasDoctorChoice.vue?vue&type=template&id=f427ffe6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=template&id=f427ffe6&");


/***/ }),

/***/ "./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=template&id=29034a98&":
/*!****************************************************************************************!*\
  !*** ./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=template&id=29034a98& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypeChoice_vue_vue_type_template_id_29034a98___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypeChoice_vue_vue_type_template_id_29034a98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypeChoice_vue_vue_type_template_id_29034a98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserTypeChoice.vue?vue&type=template&id=29034a98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=template&id=29034a98&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Register.vue?vue&type=template&id=c666ed66&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Register.vue?vue&type=template&id=c666ed66&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container fullpage" },
    [
      _vm.activeStep != 1
        ? _c(
            "vs-button",
            {
              staticClass: "btn-prev",
              attrs: { circle: "", floating: "" },
              on: {
                click: function($event) {
                  _vm.activeStep != _vm.previousStep
                    ? (_vm.activeStep = _vm.previousStep)
                    : _vm.activeStep == 3
                    ? (_vm.activeStep = 2)
                    : (_vm.activeStep = 1)
                }
              }
            },
            [_c("i", { staticClass: "kiv-arrow-left icon-31" })]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { attrs: { id: "register-steps" } }, [
        _c(
          "div",
          {
            staticClass: "step",
            class: { active: _vm.activeStep == 1 },
            on: {
              click: function($event) {
                return _vm.setActiveStep(1)
              }
            }
          },
          [_vm._v("\n            1\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "step",
            class: {
              active: _vm.activeStep == 2,
              desactive: _vm.activeStep == 3 && _vm.userType == "doctor"
            },
            attrs: { disabled: !_vm.userType },
            on: {
              click: function($event) {
                return _vm.setActiveStep(2)
              }
            }
          },
          [_vm._v("\n            2\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "step",
            class: { active: _vm.activeStep == 3 },
            attrs: { disabled: _vm.userHasDoctor === null },
            on: {
              click: function($event) {
                return _vm.setActiveStep(3)
              }
            }
          },
          [_vm._v("\n            3\n        ")]
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _vm.activeStep == 1
            ? _c("UserTypeChoice", {
                on: { userTypeChoice: _vm.setUserTypeChoice }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.activeStep == 2
            ? _c("UserHasDoctorChoice", {
                on: { userHasDoctorChoice: _vm.setUserHasDoctorChoice }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.activeStep == 3
            ? _c("RegisterForm", {
                attrs: {
                  userType: _vm.userType,
                  userHasDoctor: _vm.userHasDoctor,
                  csrfTokenRegister: _vm.csrfTokenRegister,
                  csrfTokenContact: _vm.csrfTokenContact
                }
              })
            : _vm._e()
        ],
        1
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
    return _c("div", { attrs: { id: "logo" } }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! ../../img/logo-kivid-gradient.svg */ "./assets/img/logo-kivid-gradient.svg"),
          alt: "Logo Kivid"
        }
      }),
      _vm._v(" "),
      _c("h1", [_vm._v("Kivid")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=template&id=30e8abb6&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/ConditionGenerale.vue?vue&type=template&id=30e8abb6&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-cg" }, [
      _c("div", { staticClass: "ckivid" }, [
        _c("h1", [
          _c("strong", [_vm._v("Conditions générales d'utilisation")])
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark1" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("1. Modalités d’accès à la Plateforme")])
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark2" } }),
          _vm._v(" "),
          _c("u", [
            _c("strong", [_vm._v("1.1 Utilisateurs Praticiens professionnels")])
          ])
        ]),
        _vm._v(" "),
        _c("h3", { attrs: { align: "JUSTIFY" } }, [
          _c("a", { attrs: { name: "Bookmark3" } }),
          _vm._v(" "),
          _c("u", [_c("strong", [_vm._v("a. Authentification")])])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Lors de la première utilisation de la plateforme, le praticien\n            complète un formulaire d’inscription en ligne en saisissant un\n            email et un mot de passe ou se connecte via son compte Facebook\n            ou Google. Une fois le formulaire envoyé, un email de validation\n            est envoyé à l’adresse e-mail saisie par le praticien l’invitant\n            à valider son compte en cliquant sur un lien de confirmation.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark4" } }),
          _vm._v(" "),
          _c("u", [
            _c("strong", [_vm._v("1.2 Utilisateurs non-professionnels")])
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Dans le cadre des prestations qu’il fournit à ses clients, le\n            praticien professionnel de la rééducation et/ou du sport, leur\n            entreprise, leur mutuelle ou leur service de santé au travail\n            (ci-après « le Prescripteur ») valide la mise en relation avec\n            l’utilisateur et garantie un accès à la Plateforme. Les\n            Utilisateurs sont invités à se connecter sur la Plateforme soit\n            par le Prescripteur, qui aura communiqué au préalable à KIVID,\n            l’adresse e-mail de l’utilisateur soit par le formulaire\n            inscription utilisateur, qui leur permettront ensuite d'établir\n            une connexion avec le praticien professionnel, qui validera\n            cette mise en contact.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            À la suite de l’inscription, un e-mail de confirmation est\n            envoyé à l’Utilisateur. L’Utilisateur devra alors cliquer sur un\n            lien de cet e-mail pour définir son mot de passe personnel,\n            compléter et confirmer son compte.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Les Utilisateurs sont des personnes physiques. Chaque\n            Utilisateur dispose de son propre accès. Il lui est interdit de\n            permettre à un tiers d’utiliser son compte ou d’échanger son\n            accès avec celui d’un autre utilisateur.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", { attrs: { align: "JUSTIFY" } }, [
          _c("a", { attrs: { name: "Bookmark5" } }),
          _vm._v(" "),
          _c("u", [
            _c("strong", [
              _vm._v(
                "\n                    1.3 Inscription avec Google et Facebook (utilisateurs et\n                    professionnels)\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Nous vous offrons la possibilité de créer votre compte KIVID via\n            votre compte Facebook ou Google, ou de relier votre compte KIVID\n            à votre compte Facebook ou Google. Vous serez ensuite réacheminé\n            vers Facebook ou Google (où vous devez être connecté ou\n            enregistrer un compte) et vous pourrez alors consulter la liste\n            des données Facebook ou Google vous concernant dont nous avons\n            besoin, à savoir les informations de votre profil public telles\n            que votre prénom, votre nom, votre sexe et l’adresse e-mail\n            associée à ce compte. Ces informations sont nécessaires pour des\n            raisons d'identification afin de créer pour vous un compte KIVID\n            sécurisé. Votre compte Facebook ou Google et votre compte KIVID\n            seront liés de façon permanente par l’intermédiaire de votre\n            adresse e-mail. Celle-ci sera conservée sur nos serveurs et nous\n            l’utiliserons, le cas échéant, pour vous envoyer des\n            informations. Nous pouvons également déterminer si vous vous\n            êtes connecté par l’intermédiaire de Facebook ou Google. Dès que\n            vous vous connectez à Facebook ou Google, vous pouvez aussi vous\n            connecter à KIVID. Nous ne communiquerons aucune information\n            vous concernant à Facebook ou à Google sans votre consentement.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Important : Nous n’enregistrons en aucune manière vos données de\n            connexion à Facebook ou Google, et n'avons pas la possibilité de\n            publier quoi que ce soit sur votre profil Facebook ou Google\n            sans avoir obtenu votre consentement exprès.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Vous pouvez vous informer sur la façon dont Facebook gère les\n            paramètres de confidentialité en consultant la\n            "
          ),
          _c("a", { attrs: { href: "https://www.facebook.com/policy.php" } }),
          _vm._v(" "),
          _c("a", { attrs: { href: "https://www.facebook.com/policy.php" } }, [
            _c("u", [_vm._v("politique de confidentialité")])
          ]),
          _vm._v("\n            et les"),
          _c("a", { attrs: { href: "https://www.facebook.com/legal/terms" } }),
          _vm._v(" "),
          _c("a", { attrs: { href: "https://www.facebook.com/legal/terms" } }, [
            _c("u", [_vm._v("conditions d'utilisation")])
          ]),
          _vm._v(
            "\n            de Facebook ; vous y trouverez également les conditions qui\n            s'appliquent à la possibilité mentionnée précédemment de se\n            connecter et de s'inscrire à KIVID. Vous pouvez vous informer\n            sur la façon dont Google gère les paramètres de confidentialité\n            en consultant la\n            "
          ),
          _c("a", { attrs: { href: "https://policies.google.com/privacy" } }),
          _vm._v(" "),
          _c("a", { attrs: { href: "https://policies.google.com/privacy" } }, [
            _c("u", [_vm._v("politique de confidentialité")])
          ]),
          _vm._v("\n            et les"),
          _c("a", { attrs: { href: "https://policies.google.com/terms" } }),
          _vm._v(" "),
          _c("a", { attrs: { href: "https://policies.google.com/terms" } }, [
            _c("u", [_vm._v("conditions d'utilisation")])
          ]),
          _vm._v(
            "\n            de Google ; vous y trouverez également les conditions qui\n            s’appliquent à la possibilité mentionnée précédemment de se\n            connecter et de s'inscrire à KIVID\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark6" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("2. Droits de propriété intellectuelle")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            La plateforme est exploitée par la société KIVID (ci-après «\n            KIVID »). KIVID est le titulaire et dispose des droits relatifs\n            aux composants et contenus de la Plateforme protégés par des\n            droits de propriété intellectuelle. Toute base de données, tout\n            contenu, tout composant, toute présentation et tout autre\n            élément (textes, sons, graphisme, visuels, photographies,\n            vidéos, bases de données, etc.), marque, logo et nom de domaine,\n            apparaissant sur la Plateforme, sont la propriété de KIVID et le\n            cas échéant de ses partenaires, et est protégé par les lois en\n            vigueur sur la propriété intellectuelle.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Toute reproduction et toute diffusion de ces éléments, sans\n            autorisation écrite préalable de KIVID, exposent les\n            contrevenants à des poursuites judiciaires.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark7" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("3. Liens hypertextes")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            KIVID n’exerce aucun contrôle quant au contenu des sites tiers.\n            L’existence d’un lien hypertexte entre la Plateforme et un site\n            tiers ne signifie pas que KIVID assume une quelconque garantie\n            ou responsabilité quant à son contenu ou l’usage qui peut en\n            être fait. KIVID ne saurait être responsable ou solidairement\n            tenu du contenu édité et/ou hébergé sur un site tiers vers\n            lequel la Plateforme redirige du fait d’un lien hypertexte ou\n            contenu édité et/ou hébergé sur un site tiers établissant un\n            lien vers la Plateforme.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark8" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("4. Protection des Données Personnelles")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Pour toute information relative à la protection des données\n            personnelles, aux cookies utilisés par la Plateforme et aux\n            droits de l’Utilisateur quant à l’usage de ses données\n            personnelles, l’Utilisateur est invité à se référer à la\n            «"
          ),
          _c("strong", [
            _vm._v(
              " Politique de Confidentialité des Données\n                Personnelles"
            )
          ]),
          _vm._v(" ».\n        ")
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark9" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("5. Responsabilité")])
        ]),
        _vm._v(" "),
        _c("h3", { attrs: { align: "JUSTIFY" } }, [
          _c("a", { attrs: { name: "Bookmark10" } }),
          _vm._v(" "),
          _c("u", [_c("strong", [_vm._v("a. Responsabilité KIVID")])])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            La Plateforme et tout document ou contenu accessible sur la\n            Plateforme sont fournis « en l’état », « tels quels », « si\n            disponibles ». Outre les garanties légales auxquelles il ne peut\n            être dérogé, KIVID ne met en œuvre aucune garantie, expresse ou\n            implicite d’aucune sorte notamment en termes d’adéquation de la\n            Plateforme à un usage particulier, de disponibilité de la\n            Plateforme, de continuité de l’accessibilité à la Plateforme\n            (cette dernière pouvant connaître des interruptions de quelque\n            forme et de quelque durée), de sécurité de la Plateforme, du\n            fait que ces derniers soient exempts d’erreurs, d’anomalies,\n            d’imprécisions, de pannes, de bugs ni que ceux-ci pourront être\n            corrigés. Les présentes exonérations pouvant être complétées par\n            des dispositions plus spécifiques au sein des présentes\n            Conditions d’utilisation.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Sauf disposition légale contraire et impérative, la\n            responsabilité KIVID pour tout dommage directement ou\n            indirectement lié à l’utilisation de la Plateforme ne saurait\n            être engagée en raison de dommages directs ou indirects,\n            matériels ou immatériels, notamment perte de profit, perte de\n            chance, perte de clientèle, perte de données, perte d’image\n            et/ou dommages immatériels que vous subissez. KIVID ne pourra\n            notamment, en aucun cas, voir sa responsabilité engagée dans le\n            cas où un Utilisateur se verrait attribuer par le Prescripteur\n            praticien des exercices non adaptés à ses capacités physiques.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark11" } }),
          _vm._v(" "),
          _c("u", [
            _c("strong", [
              _vm._v(
                "\n                    b. Responsabilité des utilisateurs praticiens\n                    professionnels\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            En tant que professionnel de la rééducation et/ou du sport,\n            l’Utilisateur professionnel est entièrement responsable de toute\n            création, transmission ou publication de Contenu au moyen de la\n            Plateforme et en particulier de la définition des exercices de\n            rééducation proposés aux Utilisateurs non-professionnel sur la\n            Plateforme, en fonction de leurs besoins et de leurs capacités.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            L’Utilisateur professionnel assume l’entière responsabilité ́\n            quant aux conséquences directes et/ou indirectes de\n            l’utilisation de Plateforme et notamment de la création de\n            Contenus. Les exemples de Contenus et éventuels conseils de\n            KIVID ou générés automatiquement par la Plateforme doivent être\n            considérés uniquement comme des opinions, l’Utilisateur\n            professionnel restant seul responsable de la création des\n            Contenus à destination des Utilisateurs non-professionnels.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            L’Utilisateur professionnel est tenu de prendre toutes les\n            mesures afin de s’assurer que les Contenus créés sur la\n            Plateforme pour les Utilisateurs non-professionnels sont\n            conformes à l’état des connaissances en matière de rééducation\n            physique.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark12" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("6. Disponibilité de la Plateforme")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Alors même que KIVID a effectué toutes les démarches nécessaires\n            pour s’assurer de la fiabilité des informations, services,\n            logiciels ou produits contenus sur la Plateforme, il ne saurait\n            être tenu pour responsable d’erreurs, d’omissions, de virus ou\n            des résultats qui pourraient être obtenus par un mauvais usage\n            de ceux-ci. KIVID n’est en effet tenu que d’une simple\n            obligation de moyens.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            L’Utilisateur déclare et garantit qu’il connaît les\n            caractéristiques et les contraintes d’Internet et notamment que\n            les transmissions de données et d’informations sur Internet ne\n            bénéficient que d’une fiabilité technique relative, celles-ci\n            circulant sur des réseaux hétérogènes aux caractéristiques et\n            capacités techniques diverses, qui perturbent l’accès ou le\n            rendent impossible à certaines périodes.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            KIVID s’efforce de maintenir accessible la Plateforme 7 jours\n            sur 7 et 24 heures sur 24, mais n’est tenu à aucune obligation\n            d’y parvenir et ne fournit par conséquent aucune garantie de\n            disponibilité ou d’accessibilité permanente ou de performance.\n            KIVID et/ou ses fournisseurs peut/peuvent également en\n            interrompre l’accès notamment pour des raisons de maintenance et\n            de mise à niveau de la Plateforme ou de son infrastructure\n            d’hébergement ou toute autre raison légitime de KIVID. KIVID\n            n’est en aucun cas responsable de ces interruptions et des\n            conséquences qui peuvent en découler pour l’Utilisateur ou tous\n            tiers. Il est rappelé par ailleurs que KIVID peut mettre fin ou\n            modifier les caractéristiques de la Plateforme à tout moment et\n            cela sans préavis.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark13" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("7. Sécurité")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            KIVID s’efforce d’assurer la sécurité de la Plateforme\n            conformément aux règles de l’art. L’Utilisateur est toutefois\n            informé des risques inhérents aux réseaux de communications\n            électroniques et notamment des risques liés à l’acheminement de\n            données sur internet. Plus généralement, il incombe à\n            l’Utilisateur de déployer toutes les protections usuelles\n            (pare-feu, antivirus, etc.) liées à la navigation internet. En\n            conséquence, KIVID ne fournit aucune garantie en la matière.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            En toute hypothèse, l’Utilisateur s’abstient strictement de\n            toute tentative d’ingénierie inverse ou de décompilation de tout\n            ou partie de la Plateforme, de toute intrusion ou tentative\n            d’intrusion frauduleuse au sein du système d’informations\n            hébergeant la Plateforme ainsi qu’aux logiciels permettant son\n            fonctionnement, de tout abus de confiance, soustraction,\n            suppression, détournement ou modification non autorisée des\n            données techniques de la Plateforme, sous peine de poursuites.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark14" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("8. Manquements de l’Utilisateur")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Tout manquement de l’Utilisateur aux présentes Conditions\n            d’utilisation est susceptible d’entrainer une suspension ou une\n            suppression de ses accès à la Plateforme, et d’exposer le(s)\n            contrevenant(s) à des poursuites judiciaires.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark15" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("9. Modification des Conditions d’utilisation")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Tout changement que nous apporterons à l’avenir aux présentes\n            Conditions d’utilisation sera publié sur cette page.\n            L'utilisateur reconnaît et accepte approuver tacitement tout\n            changement des présentes Conditions. KIVID informera\n            l’Utilisateur par email du changement des présentes Conditions.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark16" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("10. Loi applicable")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Sauf disposition légale contraire et impérative, toute\n            difficulté, réclamation ou litige provenant ou lié(e) aux\n            présentes Conditions d’utilisation sera régi(e) selon la loi\n            française. En cas de litige, les tribunaux français seront seuls\n            compétents.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ckivid" }, [
        _c("h1", [_c("strong", [_vm._v("Conditions générales de vente")])]),
        _vm._v(" "),
        _c("h2", [_c("strong", [_vm._v("1. Objet")])]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Les présentes conditions générales de vente (ci-après « CGV »)\n            ont pour objet de définir les modalités selon lesquelles Kivid\n            fournit au Client un accès à sa Plateforme de prévention et de\n            rééducation des blessures physiques. En cliquant sur « J’accepte\n            les présentes conditions générales de vente », le Client\n            reconnaît avoir pris connaissance des CGV et les accepte sans\n            réserve.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark1" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("2. Définitions")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Kivid »")]),
              _vm._v(
                " signifie Kivid, SAS au\n                    capital de 1.000€, immatriculée au RCS de Lyon Métropole\n                    sous le numéro domiciliée 84 Rue Chevreul, 69007 LYON ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", { attrs: { align: "JUSTIFY" } }, [
            _c("p", [
              _c("strong", [_vm._v("« Le client »")]),
              _vm._v(
                " désigne les\n                    professionnels de la rééducation ou/et du sport ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Contenu(s) »")]),
              _vm._v(
                " désigne l’ensemble des\n                    éléments sous quelque forme que ce soit, disponibles sur\n                    le Site et notamment les séries d’exercices de\n                    rééducation réalisées par le Client à partir de la\n                    bibliothèque de vidéos proposées par Kivid sur la\n                    Plateforme. Le Contenu peut être défini par le Client\n                    pour chacun des Utilisateurs en fonction de ses besoins\n                    et de ses capacités ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Contrat »")]),
              _vm._v(
                " désigne l’ensemble des\n                    stipulations énoncées dans les présentes Conditions\n                    Générales de vente (ou « CGV »), étant précisé que le\n                    préambule et les annexes en font partie intégrante. Les\n                    Parties reconnaissent que le Contrat est\n                    synallagmatique, à titre onéreux, à exécution successive\n                    ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Données »")]),
              _vm._v(
                " désigne (i) les\n                    informations personnelles des Clients et Utilisateurs\n                    permettant leur identification ainsi que (ii) les\n                    informations relatives à la navigation sur le Site et\n                    l’application mobile Kivid® susceptibles d’être\n                    enregistrées dans des fichiers dits « cookies » ou\n                    outils similaires, notamment lors de la souscription\n                    d’un abonnement, de la navigation ou de la création d’un\n                    compte ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Identifiants »")]),
              _vm._v(
                " désigne tant\n                    l’identifiant propre du Client et/ou de l’Utilisateur\n                    (“login”) que le mot de passe de connexion (“password”),\n                    communiqués au moment de l’inscription sur la Plateforme\n                    ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Logiciel »")]),
              _vm._v(
                " désigne tout logiciel\n                    fourni par Kivid au Client et/ou aux Utilisateurs et en\n                    particulier les Solutions associées ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Plateforme »")]),
              _vm._v(
                " désigne le service\n                    proposé par Kivid, permettant l’utilisation des\n                    Solutions par le Client ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Service(s) »")]),
              _vm._v(
                " désigne la souscription\n                    à la Plateforme et ses fonctionnalités tel que défini\n                    dans les présentes CGV. Les prestations comprises dans\n                    le Service forment un tout indivisible. La liste des\n                    prestations composant le Service, avec les niveaux de\n                    service et la liste des fonctionnalités de la\n                    Plateforme, décrivent les qualités essentielles du\n                    Service rendu par Kivid ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Site »")]),
              _vm._v(" désigne le site internet\n                    "),
              _c("a", { attrs: { href: "/" } }, [_vm._v("www.kivid.fr")]),
              _vm._v(" ;\n                ")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Solutions »")]),
              _vm._v(
                " désigne les fonctions\n                    opérationnelles des services proposées en mode « hébergé\n                    » et adaptées spécifiquement à ce mode de fonctionnement\n                    ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _c("strong", [_vm._v("« Utilisateur »")]),
              _vm._v(
                " désigne le client du\n                    Client bénéficiant d’un accès aux Services applicatifs\n                    sur son ordinateur, tablette ou smartphone en vertu du\n                    Contrat conclu par le Client ;\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark2" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("3. Conditions l’utilisation de la Plateforme")])
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark3" } }),
          _vm._v(" "),
          _c("u", [_c("strong", [_vm._v("a. Informations préalables")])])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            i. Kivid a mis en place des mesures de sécurisation de l’accès à\n            la Plateforme, selon une obligation de moyens. Cependant, Kivid\n            rappelle au Client que :\n        "
          )
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    L’utilisation d’Internet peut faire l’objet de\n                    détournements d’intrusion frauduleuse, malveillante ou\n                    non autorisée dans le système d’information du Client,\n                    de piratage, d’altération ou d’extraction non autorisée\n                    de données, de modifications, altérations malveillantes\n                    de programmes ou fichiers ou de contamination par des\n                    virus informatiques\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    La communication de mots de passe, codes confidentiels,\n                    et plus généralement, de toute information à caractère\n                    sensible est effectuée par le Client à ses risques et\n                    périls.\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Par conséquent, il incombe au Client de prendre toutes les\n            mesures appropriées de façon à protéger ses propres données\n            et/ou logiciels stockés sur ses serveurs de la contamination par\n            des virus comme de tentatives d’intrusion dans son système\n            informatique par des tiers.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            ii. Le Client renonce dès lors à engager la responsabilité de\n            Kivid concernant un ou plusieurs des faits ou évènements\n            mentionnés à l’article 3.1.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            iii. L’accès aux Solutions ne peut s’effectuer qu’au travers du\n            réseau Internet et d’un navigateur web : Google Chrome sur\n            environnement PC ou Android et Safari sur environnement MAC ou\n            iOS sont préconisés par Kivid pour une expérience optimale de la\n            Plateforme.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark4" } }),
          _vm._v(" "),
          _c("u", [
            _c("strong", [
              _vm._v("b. Restrictions d’utilisation de la Plateforme")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            i. Kivid concède au Client un droit personnel et non\n            transférable d’utiliser la Plateforme, dans le monde entier\n            pendant toute la durée du Contrat, de manière non exclusive. Ce\n            droit d’utilisation ne peut faire l’objet d’une sous-licence,\n            d’une cession, d’un transfert ou d’une mise à disposition d’un\n            tiers, y compris au sein d’un même établissement.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [_vm._v("ii. La Plateforme peut être utilisée :")]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            (i) en accès distant grâce à Internet, dans le respect des\n            règles d’identification et d’affectation des Identifiants du\n            Client qui seul décide des Utilisateurs qu'il autorise à\n            utiliser le Service ;\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            (ii) pour le traitement des données des Utilisateurs par le\n            Client dans les conditions limitativement définies dans le\n            Contrat.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            iii. La Plateforme est la propriété de Kivid, le Client\n            s’interdit :\n        "
          )
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    De copier ou de reproduire, de représenter, modifier,\n                    transmettre, publier, adapter tout ou partie de la\n                    Plateforme par n’importe quel moyen et sous n’importe\n                    quelle forme ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    D’utiliser la Plateforme non conformément aux règles\n                    d’utilisation de la Plateforme ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    De traduire ou de transcrire dans tout autre langage ou\n                    langue, ou de l’adapter ou de lui adjoindre tout objet\n                    non conforme à sa spécification.\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            '\n            iv. Tout manquement aux dispositions du présent article entraîne\n            le droit pour Kivid de suspendre l’accès à la Plateforme dans\n            les conditions de l\'article "RÉSILIATION".\n        '
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark5" } }),
          _vm._v(" "),
          _c("u", [
            _c("strong", [
              _vm._v(
                "c. Conditions d’accès à la Plateforme par le\n                    Client"
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            i. Lors de la première utilisation de la plateforme, le\n            praticien complète un formulaire en ligne d’inscription en\n            saisissant un email et un mot de passe. Une fois le formulaire\n            soumis, un email de validation est envoyé à l’adresse e-mail\n            saisie par le praticien l’invitant à valider son compte en\n            cliquant sur un lien.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark6" } }),
          _vm._v(" "),
          _c("u", [
            _c("strong", [
              _vm._v(
                "\n                    d. Conditions d’ouverture de droits d’accès aux\n                    Utilisateurs\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            i. Le Client est responsable de la désignation des Utilisateurs\n            parmi ses propres clients. Après leur avoir présenté la\n            Plateforme et ses conditions d’utilisations, le Client renseigne\n            les informations des nouveaux Utilisateurs afin que Kivid puisse\n            inviter les utilisateurs à créer leurs identifiants de connexion\n            et comptes.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            ii. Les Utilisateurs sont des personnes physiques. Chaque\n            Utilisateur dispose de son propre accès. Il lui est interdit de\n            permettre à un tiers d’utiliser son compte ou d’échanger son\n            accès avec celui d’un autre utilisateur.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            iii. Pour bénéficier des Services, l’utilisateur devra s’être\n            préalablement acquitté de la Redevance définie de l’abonnement à\n            KIVID.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark7" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("4. Responsabilité")])
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark8" } }),
          _vm._v(" "),
          _c("u", [_c("strong", [_vm._v("a. Dispositions générales")])])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Chacune des Parties assume la responsabilité des conséquences\n            résultant de ses fautes, erreurs ou omissions, ainsi que des\n            fautes, erreurs ou omissions de ses sous-traitants éventuels et\n            causant un dommage direct à l'autre Partie.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark9" } }),
          _vm._v(" "),
          _c("u", [_c("strong", [_vm._v("b. Responsabilité d’Kivid")])])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            i. Kivid ne pourra, en aucun cas, voir sa responsabilité engagée\n            du fait de l’utilisation de la Plateforme par un Utilisateur et\n            notamment dans le cas où un Utilisateur se verrait attribuer par\n            le Client des exercices non adaptés à ses capacités physiques.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            ii. En cas de faute prouvée par le Client, Kivid ne sera tenue\n            que de la réparation des conséquences pécuniaires des dommages\n            directs et prévisibles du fait de l’utilisation de la\n            Plateforme. En conséquence, Kivid ne pourra en aucune\n            circonstance encourir de responsabilité au titre des pertes ou\n            dommages indirects ou imprévisibles du Client ou des tiers, ce\n            qui inclut notamment tout gain manqué, perte, inexactitude ou\n            corruption de fichiers ou de données, préjudice commercial,\n            perte de chiffre d'affaires ou de bénéfice, perte de clientèle,\n            perte d'une chance, coût de l’obtention d’un produit, d’un\n            service ou de technologie de substitution, en relation ou\n            provenant de l’inexécution ou de l’exécution fautive des\n            prestations.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            iii. Dans tous les cas, le montant de la responsabilité de Kivid\n            est strictement limité au remboursement du montant des sommes\n            effectivement payées par le Client à la date de survenance du\n            fait générateur de responsabilité. Kivid ne saurait, en outre,\n            être tenu responsable de la destruction accidentelle des données\n            par le Client ou un tiers ayant accédé aux Services applicatifs\n            au moyen des Identifiants remis au Client.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark9" } }),
          _vm._v(" "),
          _c("u", [_c("strong", [_vm._v("c. Responsabilité du Client")])])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            i. En tant que professionnel de la rééducation et/ou du sport,\n            le Client est entièrement responsable de toute création,\n            transmission ou publication de Contenu au moyen de la Plateforme\n            et en particulier de la définition des exercices de rééducation\n            proposés aux Utilisateurs sur la Plateforme, en fonction de\n            leurs besoins et de leurs capacités.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            ii. Le Client assume l’entière responsabilité quant aux\n            conséquences directes et/ou indirectes de l’utilisation de\n            Plateforme et notamment de la création de Contenus. Les exemples\n            de Contenus et éventuels conseils de Kivid doivent être\n            considérés uniquement comme des opinions, le Client restant seul\n            responsable de la création des Contenus à destination des\n            Utilisateurs.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            iv. Le Client est tenu de prendre toutes les mesures afin de\n            s’assurer que les Contenus créés sur la Plateforme pour les\n            Utilisateurs sont conformes à l’état des connaissances en\n            matière de rééducation physique.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark10" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("5. Disponibilité du Service")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            a. Kivid fera tout son possible pour que la Plateforme soit\n            accessible selon une obligation de moyens.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            b. Le Client reconnaît que Kivid ne pourra en aucun cas être\n            responsable des éventuelles interruptions de fonctionnement\n            d’Internet. Kivid se réserve également le droit d’interrompre\n            l’accès à la Plateforme en raison d’opérations de maintenance.\n            Dans ce cas, Kivid en informera le Client par courriel au moins\n            vingt-quatre (24) heures avant.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark11" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("6. Maintenance")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            a. Toutes les interventions s’effectuent à distance, sans\n            intervention sur site, aux jours et heures suivants :\n            Lundi-Vendredi de 8h à 12h et de 14h à 17h (GMT+1), excepté les\n            jours fériés.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            b. Le Client peut formuler ses questions et demandes\n            d’interventions par email à l’adresse\n            "
          ),
          _c("a", { attrs: { href: "mailto:contact@kivid.fr" } }, [
            _vm._v("contact@kivid.fr")
          ])
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark11" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("7. Abonnement - Facturation - Règlement")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Les présentes conditions générales s’appliquent à l’ensemble des\n            formules d’abonnements proposées par Kivid.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Une confirmation d’abonnement sera adressée à l’utilisateur par\n            retour à l’adresse e-mail renseignée, reprenant les informations\n            contractuelles, notamment le montant exact facturé et les\n            modalités de l’offre.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            l’utilisateur reconnaît que les données enregistrées sur le Site\n            constituent la preuve de la transaction (type d’abonnement et\n            date de souscription), et les données enregistrées par le\n            système de paiement constituent la preuve de la transaction\n            financière.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            L’acceptation des cookies est indispensable pour tout achat ou\n            abonnement sur le Site.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", { attrs: { align: "JUSTIFY" } }, [
          _c("a", { attrs: { name: "Bookmark12" } }),
          _vm._v(" "),
          _c("u", [_c("strong", [_vm._v("a. Offres d’abonnement")])])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Les principales offres sont les suivantes, étant précisé que\n            Kivid se réserve la faculté, à tout moment, d’aménager ces\n            offres, ainsi que de proposer des offres promotionnelles\n            ponctuelles sur le Site :\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [_c("u", [_vm._v("i. Abonnement mensuel")])]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Un abonnement sans engagement d’une durée d’un mois à compter du\n            paiement du prix et reconductible mensuellement. Une facture\n            sera adressée à l’utilisateur à l’occasion de la souscription de\n            l’abonnement mensuel à la Plateforme puis tous les mois avec\n            reconduction automatique.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", { attrs: { align: "JUSTIFY" } }, [
          _c("a", { attrs: { name: "Bookmark13" } }),
          _vm._v(" "),
          _c("u", [_c("strong", [_vm._v("b. Conditions de paiement")])])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            La TVA et tous autres impôts et taxes applicables au moment de\n            la facturation sont à la charge de l’utilisateur. Les factures\n            sont payables auprès de Kivid à réception ou conformément au\n            délai indiqué au devis.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Les paiements s’effectuent par carte bancaire selon les\n            modalités suivantes :\n        "
          )
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Paiement par carte bancaire par serveur de paiement\n                    sécurisé (Carte bleue du GIE bancaire Carte bleue, Visa,\n                    MasterCard, American Express, Eurocard et Visa\n                    internationales). Le paiement en ligne par carte\n                    bancaire est assuré par une solution sécurisée et\n                    cryptée (STRIPE) ;\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            En cas de retard de paiement, Kivid pourra refuser, suspendre ou\n            annuler l’accès à la Plateforme, sans préjudice de toute autre\n            action. Toute somme non payée à l’échéance prévue donnera lieu,\n            sans mise en demeure, au paiement d’intérêts de retard s’élevant\n            à trois (3) fois le taux de l’intérêt légal en vigueur au jour\n            de la facturation et à une indemnité forfaitaire pour frais de\n            recouvrement de quarante (40) euros par facture impayée. Dans le\n            cas où les frais de recouvrement dépasseraient ce montant, Kivid\n            se réserve le droit d’en demander, sur justificatif, le\n            remboursement intégral au Client. Les intérêts courent du jour\n            de l’échéance jusqu’au paiement effectif.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v("Kivid ne pratique pas l’escompte.")
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark14" } }),
          _vm._v(" "),
          _c("u", [_c("strong", [_vm._v("c. Révision des prix")])])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Kivid se réserve la possibilité de modifier les tarifs en cours\n            d’année selon les modalités suivantes :\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            a. Quinze (15) jours avant l’application des nouveaux tarifs,\n            l’utilisateur sera informé de ces modifications;\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            b. Pour continuer à avoir accès à la Plateforme, l’utilisateur\n            devra spécifiquement accepter l’application de ces nouveaux\n            tarifs à la date anniversaire de son abonnement mensuel ou\n            annuel le cas échéant ;\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            c. A défaut d’acceptation expresse des nouveaux tarifs,\n            l’utilisateur ne pourra plus avoir accès à la Plateforme à\n            l’issue de sa période d’engagement, que celle-ci soit mensuelle\n            ou annuelle.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark15" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("8. Résiliation")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Dans le cadre d’un abonnement à durée libre avec paiement\n            mensuel, la reconduction de l’abonnement pour une durée égale\n            est tacite et automatique. L’utilisateur peut toutefois à tout\n            moment demander la résiliation de son abonnement à partir de son\n            compte-client. Un courriel de confirmation sera envoyé au Client\n            et la résiliation prendra effet à la fin de la période de\n            souscription en cours.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Dans le cadre d’un abonnement annuel, la reconduction de\n            l’abonnement pour une durée égale est tacite et automatique.\n            L’utilisateur peut demander la résiliation de son abonnement à\n            partir de son compte-client à tout moment.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark16" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("9. Propriété")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            a. Kivid est et demeure titulaire des droits de propriété\n            relatifs à tout élément de la Plateforme et des Contenus mis à\n            disposition du Client et de l’utilisateur²²², ainsi plus\n            généralement que de l’infrastructure informatique (logicielle et\n            matérielle) mise en œuvre ou développée dans le cadre du\n            Contrat.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            b. Le Contrat ne confère au Client aucun droit de propriété sur\n            la Plateforme. La mise à disposition temporaire de la Plateforme\n            dans les conditions prévues au Contrat ne saurait être analysée\n            comme la cession d’un quelconque droit de propriété\n            intellectuelle au bénéfice du Client, au sens du Code français\n            de la propriété intellectuelle.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            c. Le Client s’interdit de reproduire tout élément de la\n            Plateforme, ou toute documentation la concernant, par quelque\n            moyen que ce soit, sous quelque forme que ce soit et sur quelque\n            support que ce soit.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            d. Le Client et utilisateur ne pourront céder tout ou partie des\n            droits et obligations résultant du Contrat, que ce soit dans le\n            cadre d'une cession temporaire, d'une sous-licence et de tout\n            autre contrat prévoyant le transfert desdits droits et\n            obligations.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            e. Kivid déclare et garantit être titulaire de tous les droits\n            de propriété intellectuelle qui lui permettent de conclure le\n            Contrat. Kivid déclare et garantit que les Solutions ne sont pas\n            susceptibles de porter atteinte aux droits des tiers.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark17" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("10. Traitement des données personnelles")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Les Parties s’engagent à respecter la réglementation applicable,\n            notamment le Règlement Européen sur la Protection des Données,\n            dit « RGPD » (n°2016-679 relatif à la protection des personnes\n            physiques à l’égard du traitement des données à caractère\n            personnel et à la libre circulation de ces données) et la loi «\n            Informatique et libertés » (loi n°78-17 du 6 janvier 1978\n            relative à l’informatique, aux fichiers et aux libertés\n            modifiée) dans le cadre du Contrat.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            a. Traitements mis en œuvre par le Client agissant en\n            responsable de traitement\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Le Client est responsable du traitement des données de ses\n            clients utilisateurs de la Plateforme, lorsque les traitements\n            sont mis en œuvre dans le cadre de sa relation avec les\n            Utilisateurs. Dans le cadre de ces traitements, le Client\n            transmettra à Kivid ses instructions documentées, qui\n            indiqueront l’objet et la durée du traitement, sa nature et ses\n            finalités, le type de Données personnelles et la catégorie des\n            personnes concernées, ainsi que ses droits et obligations en\n            tant que responsable du traitement.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            b. Traitements mis en œuvre par Kivid agissant en responsable de\n            traitement\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Kivid est responsable du traitement des données personnelles\n            réalisé pour vous permettre d’utiliser les Services sur le Site.\n            Dans le cadre des traitements dont Kivid est responsable de\n            traitement, le Client et l’Utilisateur peuvent exercer leur\n            droit d’accès, rectification, effacement, limitation du\n            traitement et objection au traitement depuis leur compte sur le\n            Site ou en s’adressant directement à\n            "
          ),
          _c("a", { attrs: { href: "mailto:contact@kivid.fr" } }, [
            _vm._v("contact@kivid.fr")
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _c("u", [_vm._v("i. Typologie des Données collectées par Kivid")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Les Données collectées par Kivid pour les besoins de la\n            Plateforme sont notamment les suivantes :\n        "
          )
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("p", [_vm._v("Noms, prénoms, civilité, date de naissance ;")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Adresse postale, adresse e-mail, numéro de téléphone ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Identifiant et mot de passe crypté utilisés pour vous\n                    s’identifier sur la Plateforme ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Informations cryptées relatives à vos moyens de paiement\n                    (notamment numéro de carte bancaire) ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Choix en matière de prospection commerciale ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Toute autre information que vous souhaitez porter à\n                    notre connaissance.\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Par l’intermédiaire des cookies, Kivid collecte également des\n            informations relatives à la connexion et à la navigation.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Kivid ne collecte lui-même aucune donnée considérée «\n            particulière » par le RGPD concernant le Client ou l’Utilisateur\n            pour les besoins du fonctionnement de la Plateforme.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _c("u", [_vm._v("ii. Finalité des traitements de Données d’Kivid")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Kivid utilise les Données recueillies pour les finalités\n            suivantes :\n        "
          )
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Validation de la souscription à un contrat d’abonnement\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Gestion des abonnements à nos newsletters et/ou alertes\n                    e-mails\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v("Facturation et paiements")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Connexion automatique aux espaces réservés ou personnels\n                    de la Plateforme, au moyen des Identifiants ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Création d’outils de partage sur les réseaux sociaux\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Relation client : prise en compte de questions,\n                    réclamation, réalisation d’enquêtes de satisfaction, …\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Mise en place d’opérations commerciales y compris\n                    fidélisation et prospection commerciale ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v("Statistiques commerciales")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", [_c("u", [_vm._v("iii. Durée de conservation")])]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Pour la mise en œuvre de ses activités, Kivid s’engage à\n            conserver les Données pour une durée de trois (3) ans à compter\n            de la collecte des données ou du dernier contact émanant du\n            prospect. Toutefois, Kivid s’engage à supprimer les informations\n            dont la conservation ne serait plus nécessaire au regard des\n            exigences législatives et réglementaires.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [_c("u", [_vm._v("iv. Destinataires des Données")])]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            L’accès aux Données est limité à la réalisation des finalités\n            des traitements décrit ci-dessus et aux seules personnes\n            habilitées soumises à une obligation de confidentialité.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _c("u", [_vm._v("v. Sécurité et confidentialité des Données")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Kivid s’engage à assurer la sécurité et la protection des\n            Données du Client et de l’Utilisateur afin notamment d'empêcher\n            qu'elles ne soient déformées, endommagées ou communiquées à des\n            tiers non autorisés.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Kivid s’engage à assurer, et à faire respecter l’hébergeur des\n            Données agissant en sous-traitance, la plus stricte\n            confidentialité ́et la plus stricte sécurité dans le processus de\n            traitement et de stockage des Données.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Toutefois, de manière exceptionnelle, il peut arriver que\n            certaines Données soient transférées à des sous-traitants ou\n            partenaires commerciaux ayant une implantation située en dehors\n            de l’Union européenne. En cas de transfert de ce type, Kivid\n            s’engage à ce que le traitement soit effectué conformément aux\n            clauses contractuelles types de la Commission européenne qui\n            permettent de garantir un niveau de protection suffisant de la\n            vie privée et des droits fondamentaux des personnes.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h2", [
          _c("a", { attrs: { name: "Bookmark18" } }),
          _vm._v(" "),
          _c("strong", [
            _vm._v("11. Loi Applicable – Compétence de juridiction")
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            La loi applicable au présent contrat est la loi française. Les\n            Parties s’engagent à procéder à une tentative de conciliation\n            avant tout recours au juge.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ckivid" }, [
        _c("h1", [_c("strong", [_vm._v("Politique de Confidentialité")])]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Cette Politique de Confidentialité est la base pour traiter\n            toutes Données Personnelles que nous rassemblons ou que vous\n            nous fournissez au travers du site web disponible à l’adresse\n            "
          ),
          _c("a", { attrs: { href: "/" } }, [_vm._v("www.kivid.fr")]),
          _vm._v(
            " (ci-après dénommé « la Plateforme\n            »), ainsi qu’à toute recherche effectuée sur ladite Plateforme,\n            et/ou toute utilisation de ladite Plateforme par l’internaute\n            qui s’y connecte (« l’Utilisateur »).\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark1" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("1. Identité des responsables de traitement")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Chaque professionnel praticien est considéré comme responsable\n            de traitement des données personnelles de santé de ses\n            Utilisateurs, tandis que KIVID agit comme sous-traitant agissant\n            sur instruction particulière de chaque praticien.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            KIVID est considéré comme responsable de traitement des données\n            relatives à la création du compte personnel de l'utilisateur, de\n            sa navigation sur la Plateforme, à la création de statistiques\n            relatives à l'utilisation de l'outil.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark1" } }),
          _vm._v(" "),
          _c("strong", [
            _vm._v(
              "2. Données que nous pouvons collecter vous\n                concernant"
            )
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Nous pouvons être amenés à rassembler et traiter les Données\n            Personnelles suivantes :\n        "
          )
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Informations que vous nous fournissez en remplissant des\n                    champs libres ou formulaires sur notre Plateforme. Les\n                    mentions sous ces formulaires rappellent les droits dont\n                    vous disposez sur vos informations, comme stipulé\n                    ci-après ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Si vous nous contactez, nous pouvons garder un rapport\n                    de cette correspondance et nous pouvons enregistrer vos\n                    communications avec nous pour des contrôles de qualité\n                    et à des fins de formation ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Des détails de vos visites sur notre Plateforme –\n                    notamment, à des données relatives au trafic, votre\n                    parcours, votre langue de navigateur, des données de\n                    localisation, des carnets web et d’autres informations\n                    de communication – et les ressources auxquelles vous\n                    accédez.\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark2" } }),
          _vm._v(" "),
          _c("strong", [
            _vm._v(
              "3. Durée de conservation des informations que nous pouvons\n                acquérir vous concernant"
            )
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            La période de rétention pour des données et/ou des informations\n            de notre Plateforme est de 13 mois à l’exception des données\n            ayant fait l’objet d’un processus d’anonymisation conformément à\n            la législation applicable.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Toutefois, certaines données peuvent être conservées pour une\n            plus longue durée et notamment (i) pendant toute la durée de vie\n            de votre compte en ligne et jusqu’à sa suppression, le cas\n            échéant, (ii) pendant la durée stipulée dans tout contrat qui\n            serait conclu avec KIVID.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark3" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("6. Politique en matière de cookies")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Nous pouvons obtenir des informations sur votre utilisation\n            d’Internet en général en utilisant des dispositifs d’accès\n            notamment de type cookie (un cookie est un petit fichier texte\n            qui est gardé sur le disque dur de votre ordinateur). Les\n            cookies nous aident à améliorer notre Plateforme et à fournir un\n            service de meilleure qualité. Nous utilisons des cookies étant\n            strictement nécessaires à votre utilisation de notre Plateforme.\n            Vous pouvez refuser d’accepter ces cookies en activant le\n            paramètre qui vous permet de refuser l’installation de cookies\n            sur votre ordinateur. Cependant, si vous choisissez ce\n            paramètre, il est possible que vous soyez incapable d’accéder à\n            certaines parties de notre Plateforme.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark4" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("7. Partage avec des tiers")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Afin de vous apporter le meilleur service, nous pouvons dans\n            certains cas partager vos données avec des tiers, notamment des\n            partenaires techniques ou commerciaux. Nous ne partagerons vos\n            données qu’avec des partenaires qui présentent des garanties\n            suffisantes quant à la mise en œuvre de mesures techniques et\n            organisationnelles appropriées de manière à garantir la\n            protection de vos droits et de vos données.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Nous pouvons divulguer vos données à des tiers :\n        "
          )
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    En cas de vente ou d’achat d’une de nos entreprises ou\n                    biens, nous pouvons divulguer vos coordonnées au vendeur\n                    ou acheteur prospectif de ces entreprises ou biens ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Si nous ou tous nos biens sont acquis par un tiers,\n                    toutes coordonnées gardées par nous sur nos clients\n                    seraient ainsi transférés ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Si nous avons l’obligation de divulguer ou de partager\n                    vos coordonnées afin de se conformer à toute obligation\n                    légale ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    Afin de protéger nos droits, propriété ou sécurité, nos\n                    clients ou autres ;\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("p", { attrs: { align: "JUSTIFY" } }, [
              _vm._v(
                "\n                    En cas d’échange d’informations avec d’autres sociétés\n                    et organisations à des fins de protection contre la\n                    fraude et la réduction du risque de crédit.\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark5" } }),
          _vm._v(" "),
          _c("strong", [
            _vm._v(
              "\n                9. Changements liés à notre politique de confidentialité de\n                votre vie privée relative à la Plateforme KIVID\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Tout changement que nous faisons à notre Politique de\n            Confidentialité dans le futur sera posté sur cette page.\n        "
          )
        ]),
        _vm._v(" "),
        _c("h3", [
          _c("a", { attrs: { name: "Bookmark6" } }),
          _vm._v(" "),
          _c("strong", [_vm._v("10. Contact")])
        ]),
        _vm._v(" "),
        _c("p", { attrs: { align: "JUSTIFY" } }, [
          _vm._v(
            "\n            Si vous avez la moindre question concernant cette Politique de\n            Confidentialité et la façon dont nous utilisons vos Données\n            Personnelles, celle-ci est bienvenue et devra être adressée à\n            "
          ),
          _c("a", { attrs: { href: "mailto:contact@kivid.fr" } }, [
            _vm._v("contact@kivid.fr")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/RegisterForm.vue?vue&type=template&id=89adca0e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/RegisterForm.vue?vue&type=template&id=89adca0e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "kiv-block", attrs: { id: "register-form" } },
    [
      _c("div", [
        _vm.userType === "patient" && _vm.userHasDoctor
          ? _c("h2", [_vm._v("Inscription")])
          : _vm._e(),
        _vm._v(" "),
        _vm.userType === "doctor"
          ? _c("h2", [_vm._v("Inscription praticien")])
          : _vm._e(),
        _vm._v(" "),
        _vm.userType === "patient" && !_vm.userHasDoctor
          ? _c("h2", [
              _vm._v("\n            Inscription + Prise de contact\n        ")
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.formLoadingRegister
          ? _c("div", [
              _c(
                "div",
                { staticClass: "register-form" },
                [
                  _c("vs-input", {
                    class: {
                      error:
                        _vm.emptyMessage.lastname &&
                        !_vm.registerDetails.lastname
                    },
                    attrs: {
                      "label-placeholder": "Nom",
                      autocomplete: "family-name",
                      "icon-after": ""
                    },
                    scopedSlots: _vm._u(
                      [
                        _vm.emptyMessage.lastname &&
                        !_vm.registerDetails.lastname
                          ? {
                              key: "message-danger",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.emptyMessage.lastname) +
                                      "\n                    "
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
                      value: _vm.registerDetails.lastname,
                      callback: function($$v) {
                        _vm.$set(_vm.registerDetails, "lastname", $$v)
                      },
                      expression: "registerDetails.lastname"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    class: {
                      error:
                        _vm.emptyMessage.firstname &&
                        !_vm.registerDetails.firstname
                    },
                    attrs: {
                      "label-placeholder": "Prénom",
                      autocomplete: "given-name",
                      "icon-after": ""
                    },
                    scopedSlots: _vm._u(
                      [
                        _vm.emptyMessage.firstname &&
                        !_vm.registerDetails.firstname
                          ? {
                              key: "message-danger",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.emptyMessage.firstname) +
                                      "\n                    "
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
                      value: _vm.registerDetails.firstname,
                      callback: function($$v) {
                        _vm.$set(_vm.registerDetails, "firstname", $$v)
                      },
                      expression: "registerDetails.firstname"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    class: {
                      error:
                        (_vm.validationMessage.email &&
                          _vm.registerDetails.email) ||
                        (_vm.emptyMessage.email && !_vm.registerDetails.email)
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
                        _vm.validationMessage.email && _vm.registerDetails.email
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
                        (_vm.validationMessage.email &&
                          _vm.registerDetails.email) ||
                        (_vm.emptyMessage.email && !_vm.registerDetails.email)
                          ? {
                              key: "message-danger",
                              fn: function() {
                                return [
                                  _vm.validationMessage.email &&
                                  _vm.registerDetails.email
                                    ? _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.validationMessage.email)
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.emptyMessage.email &&
                                  !_vm.registerDetails.email
                                    ? _c("span", [
                                        _vm._v(_vm._s(_vm.emptyMessage.email))
                                      ])
                                    : _vm._e()
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
                      value: _vm.registerDetails.email,
                      callback: function($$v) {
                        _vm.$set(_vm.registerDetails, "email", $$v)
                      },
                      expression: "registerDetails.email"
                    }
                  }),
                  _vm._v(" "),
                  _vm.userType === "patient" && _vm.userHasDoctor
                    ? _c("DoctorSelectBox", {
                        class: {
                          error:
                            _vm.emptyMessage.doctorSelect &&
                            !_vm.registerDetails.doctorSelect
                        },
                        attrs: {
                          doctorSelected: _vm.registerDetails.doctorSelect,
                          errorMessage: _vm.getEmptyDoctorSelectErrorMessage
                        },
                        on: { setDoctorSelected: _vm.setDoctorSelected }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.userType === "patient" && !_vm.userHasDoctor
                    ? _c("VuePhoneNumberInput", {
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
                    : _vm._e(),
                  _vm._v(" "),
                  _c("vs-input", {
                    class: {
                      empty: !_vm.registerDetails.plainPassword,
                      error:
                        _vm.emptyMessage.plainPassword &&
                        !_vm.registerDetails.plainPassword
                    },
                    attrs: {
                      type: "password",
                      "label-placeholder": "Mot de passe",
                      visiblePassword: _vm.hasVisiblePassword,
                      "icon-after": "",
                      required: "",
                      progress: _vm.getSecurePassProgress,
                      autocomplete: "new-password"
                    },
                    on: {
                      keyup: _vm.validationPassword,
                      "click-icon": function($event) {
                        _vm.hasVisiblePassword = !_vm.hasVisiblePassword
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "icon",
                          fn: function() {
                            return [
                              !_vm.hasVisiblePassword
                                ? _c("i", { staticClass: "fas fa-eye" })
                                : _c("i", { staticClass: "fas fa-eye-slash" })
                            ]
                          },
                          proxy: true
                        },
                        _vm.emptyMessage.plainPassword &&
                        !_vm.registerDetails.plainPassword
                          ? {
                              key: "message-danger",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.emptyMessage.plainPassword) +
                                      "\n                    "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          : null,
                        _vm.getSecurePassProgress >= 100
                          ? {
                              key: "message-success",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                        Mot de passe sécurisé\n                    "
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
                      value: _vm.registerDetails.plainPassword,
                      callback: function($$v) {
                        _vm.$set(_vm.registerDetails, "plainPassword", $$v)
                      },
                      expression: "registerDetails.plainPassword"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    class: {
                      error:
                        (_vm.validationMessage.password &&
                          _vm.registerDetails.plainPassword &&
                          _vm.passwordConfirm) ||
                        (_vm.emptyMessage.passwordConfirm &&
                          !_vm.passwordConfirm),
                      empty: !_vm.passwordConfirm
                    },
                    attrs: {
                      type: "password",
                      "label-placeholder": "Confirmation du mot de passe",
                      visiblePassword: _vm.hasVisiblePasswordConfirm,
                      "icon-after": "",
                      required: "",
                      autocomplete: "new-password"
                    },
                    on: {
                      keyup: _vm.validationPassword,
                      "click-icon": function($event) {
                        _vm.hasVisiblePasswordConfirm = !_vm.hasVisiblePasswordConfirm
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "icon",
                          fn: function() {
                            return [
                              !_vm.hasVisiblePasswordConfirm
                                ? _c("i", { staticClass: "fas fa-eye" })
                                : _c("i", { staticClass: "fas fa-eye-slash" })
                            ]
                          },
                          proxy: true
                        },
                        (_vm.validationMessage.password &&
                          _vm.registerDetails.plainPassword &&
                          _vm.passwordConfirm) ||
                        (_vm.emptyMessage.passwordConfirm &&
                          !_vm.passwordConfirm)
                          ? {
                              key: "message-danger",
                              fn: function() {
                                return [
                                  _vm.validationMessage.password &&
                                  _vm.registerDetails.plainPassword &&
                                  _vm.passwordConfirm
                                    ? _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.validationMessage.password)
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.emptyMessage.passwordConfirm &&
                                  !_vm.passwordConfirm
                                    ? _c("span", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.emptyMessage.passwordConfirm
                                          )
                                        )
                                      ])
                                    : _vm._e()
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
                      value: _vm.passwordConfirm,
                      callback: function($$v) {
                        _vm.passwordConfirm = $$v
                      },
                      expression: "passwordConfirm"
                    }
                  }),
                  _vm._v(" "),
                  _vm.userType === "doctor"
                    ? _c("vs-input", {
                        class: {
                          error:
                            _vm.emptyMessage.numRppsAmeli &&
                            !_vm.registerDetails.numRppsAmeli
                        },
                        attrs: {
                          "label-placeholder": "Numéro RPPS ou ADELI",
                          "icon-after": ""
                        },
                        scopedSlots: _vm._u(
                          [
                            _vm.emptyMessage.numRppsAmeli &&
                            !_vm.registerDetails.numRppsAmeli
                              ? {
                                  key: "message-danger",
                                  fn: function() {
                                    return [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(
                                            _vm.emptyMessage.numRppsAmeli
                                          ) +
                                          "\n                    "
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
                          value: _vm.registerDetails.numRppsAmeli,
                          callback: function($$v) {
                            _vm.$set(_vm.registerDetails, "numRppsAmeli", $$v)
                          },
                          expression: "registerDetails.numRppsAmeli"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.userType === "patient" && !_vm.userHasDoctor
                    ? _c("div", { attrs: { id: "contact-choice" } }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "contact-par",
                            class: {
                              desactive:
                                (!_vm.registerDetails.email ||
                                  _vm.validationMessage.email != null) &&
                                (!_vm.contactTel ||
                                  (_vm.contactTel &&
                                    _vm.contactTel.length < 5) ||
                                  _vm.errorTel)
                            }
                          },
                          [
                            _vm._v(
                              "\n                        Je souhaite que l'on me contacte par\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "vs-radio",
                              {
                                staticStyle: { "margin-bottom": "5px" },
                                attrs: {
                                  disabled:
                                    !_vm.registerDetails.email ||
                                    _vm.validationMessage.email != null,
                                  val: "1"
                                },
                                model: {
                                  value: _vm.contactChoice,
                                  callback: function($$v) {
                                    _vm.contactChoice = $$v
                                  },
                                  expression: "contactChoice"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            e-mail\n                            "
                                ),
                                _c("span", { staticClass: "contact-help" }, [
                                  _vm._v("("),
                                  _vm.registerDetails.email
                                    ? _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.registerDetails.email)
                                        )
                                      ])
                                    : _c("span", [
                                        _vm._v(
                                          "Veuillez entrer une adresse email"
                                        )
                                      ]),
                                  _vm._v(")\n                            ")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  disabled:
                                    !_vm.contactTel ||
                                    (_vm.contactTel &&
                                      _vm.contactTel.length < 5) ||
                                    _vm.errorTel,
                                  val: "2"
                                },
                                model: {
                                  value: _vm.contactChoice,
                                  callback: function($$v) {
                                    _vm.contactChoice = $$v
                                  },
                                  expression: "contactChoice"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            téléphone\n                            "
                                ),
                                _c("span", { staticClass: "contact-help" }, [
                                  _vm._v("("),
                                  _vm.contactTel
                                    ? _c("span", [
                                        _vm._v(_vm._s(_vm.contactTel))
                                      ])
                                    : _c(
                                        "span",
                                        { staticClass: "contact-help" },
                                        [
                                          _vm._v(
                                            "Veuillez entrer un num. de tél."
                                          )
                                        ]
                                      ),
                                  _vm._v(")")
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      class: {
                        error: _vm.emptyMessage.acceptCG && !_vm.acceptCG
                      },
                      attrs: { id: "accept-CG-block" }
                    },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          class: { active: _vm.acceptCG },
                          model: {
                            value: _vm.acceptCG,
                            callback: function($$v) {
                              _vm.acceptCG = $$v
                            },
                            expression: "acceptCG"
                          }
                        },
                        [
                          _c("span", [
                            _vm._v(
                              "j'ai lu et j'accepte les\n                            "
                            ),
                            _c(
                              "a",
                              {
                                on: {
                                  click: function($event) {
                                    _vm.modalCG = true
                                  }
                                }
                              },
                              [_vm._v("conditions générales")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm.emptyMessage.acceptCG && !_vm.acceptCG
                        ? _c("div", { staticClass: "empty-error-mess pt-0" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.emptyMessage.acceptCG) +
                                "\n                    "
                            )
                          ])
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "btn-container",
                      class: { disabled: _vm.btnLoadingRegister }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-100",
                          attrs: {
                            loading: _vm.btnLoadingRegister,
                            type: "submit"
                          },
                          on: { click: _vm.validRegistration }
                        },
                        [
                          (_vm.userType === "patient" && _vm.userHasDoctor) ||
                          _vm.userType === "doctor"
                            ? _c("span", [_vm._v("S'inscrire")])
                            : _vm._e(),
                          _vm.userType === "patient" && !_vm.userHasDoctor
                            ? _c("span", [_vm._v("C'est parti !")])
                            : _vm._e()
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              (_vm.userType === "patient" && _vm.userHasDoctor) ||
              _vm.userType === "doctor"
                ? _c("div", { staticClass: "divider" }, [
                    _c("div", { staticClass: "divider-text" }, [_vm._v("ou")])
                  ])
                : _vm._e(),
              _vm._v(" "),
              (_vm.userType === "patient" && _vm.userHasDoctor) ||
              _vm.userType === "doctor"
                ? _c(
                    "div",
                    { staticClass: "btn-container social-register" },
                    [
                      _c("transition", { attrs: { name: "fade" } }, [
                        _c(
                          "div",
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "w-100",
                                on: {
                                  click: function($event) {
                                    return _vm.registerOauth("facebook")
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            S'inscrire avec "
                                ),
                                _c("i", { staticClass: "fab fa-facebook-f" })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                staticClass: "w-100",
                                on: {
                                  click: function($event) {
                                    return _vm.registerOauth("google")
                                  }
                                }
                              },
                              [
                                _vm._v("S'inscrire avec "),
                                _c("i", { staticClass: "fab fa-google" })
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ])
          : _c(
              "div",
              { staticClass: "loading-form-block" },
              _vm._l(9, function(loading, i) {
                return _c("div", {
                  key: i,
                  staticClass: "loading loading-block"
                })
              }),
              0
            )
      ]),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          attrs: { width: "450px" },
          model: {
            value: _vm.modalCG,
            callback: function($$v) {
              _vm.modalCG = $$v
            },
            expression: "modalCG"
          }
        },
        [
          _c("h2", [_vm._v("Conditions Générales")]),
          _vm._v(" "),
          _c("CG"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-container" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "w-100",
                  on: {
                    click: function($event) {
                      return _vm.validAcceptCG()
                    }
                  }
                },
                [_vm._v("J'ai lu et j'accepte")]
              )
            ],
            1
          )
        ],
        1
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
    return _c("p", { staticClass: "contact-info" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! ../../../img/icons/information.svg */ "./assets/img/icons/information.svg"),
          alt: "icon information"
        }
      }),
      _vm._v(
        "\n                        Un de nos praticiens va prendre contact avec vous\n                        pour élaborer le traitement approprié\n                    "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=template&id=f427ffe6&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserHasDoctorChoice.vue?vue&type=template&id=f427ffe6& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { attrs: { id: "user-has-doctor-choice" } }, [
    _c("h1", [_vm._v("Avez-vous un praticien ?")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "btn-container" },
      [
        _c(
          "vs-button",
          {
            staticClass: "w-100",
            class: { secondary: _vm.$parent.userHasDoctor == true },
            on: {
              click: function($event) {
                return _vm.validUserHasDoctorChoice(false)
              }
            }
          },
          [_vm._v("\n            Non, je n'en ai pas\n        ")]
        ),
        _vm._v(" "),
        _c(
          "vs-button",
          {
            staticClass: "w-100",
            class: { secondary: _vm.$parent.userHasDoctor == false },
            on: {
              click: function($event) {
                return _vm.validUserHasDoctorChoice(true)
              }
            }
          },
          [_vm._v("\n            Oui, j'ai un praticien\n        ")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=template&id=29034a98&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/register/UserTypeChoice.vue?vue&type=template&id=29034a98& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { attrs: { id: "user-type-choice" } }, [
    _c("h1", [_vm._v("Dites-nous en plus à propos de vous")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "btn-container" },
      [
        _c(
          "vs-button",
          {
            staticClass: "w-100",
            class: { secondary: _vm.$parent.userType == "doctor" },
            on: {
              click: function($event) {
                return _vm.validUserTypeChoice("patient")
              }
            }
          },
          [_vm._v("\n            Je suis un particulier\n        ")]
        ),
        _vm._v(" "),
        _c(
          "vs-button",
          {
            staticClass: "w-100",
            class: { secondary: _vm.$parent.userType == "patient" },
            on: {
              click: function($event) {
                return _vm.validUserTypeChoice("doctor")
              }
            }
          },
          [_vm._v("\n            Je suis un professionnel\n        ")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./assets/img/icons/information.svg":
/*!******************************************!*\
  !*** ./assets/img/icons/information.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/information.5685c7ce.svg";

/***/ }),

/***/ "./assets/img/logo-kivid-gradient.svg":
/*!********************************************!*\
  !*** ./assets/img/logo-kivid-gradient.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo-kivid-gradient.14688d66.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-38d47d","vendors-node_modules_vue-click-outside_index_js-node_modules_vue-phone-number-input_dist_vue--694fde","assets_vue_services_function_js-node_modules_moment_locale_sync_recursive_","assets_vue_components_DoctorSelectBox_vue"], function() { return __webpack_exec__("./assets/vue/fullpage/register.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7QUFDQUEsK0NBQUEsQ0FBUUcsaURBQVIsRUFBa0JELDhDQUFsQixHQUVBOztBQUNBO0FBQ0FGLCtDQUFBLENBQVFLLCtDQUFSO0FBRUEsSUFBSUwsMkNBQUosQ0FBUTtBQUNKTSxFQUFBQSxNQUFNLEVBQUUsZ0JBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNOLHFEQUFELENBQUw7QUFBQTtBQURMLENBQVIsRUFFR08sTUFGSCxDQUVVLE1BRlY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzBEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSw0QkFGQTtBQUdBLG1CQUhBO0FBSUEscUJBSkE7QUFLQSxvQkFMQTtBQU1BO0FBTkE7QUFRQSxHQVZBO0FBV0E7QUFDQSx3RkFEQTtBQUVBLGtHQUZBO0FBR0E7QUFIQSxHQVhBO0FBZ0JBO0FBQ0EscUJBREEsNkJBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLDBCQU5BLGtDQU1BLGFBTkEsRUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVkE7QUFXQSxpQkFYQSx5QkFXQSxHQVhBLEVBV0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFuQkEsR0FoQkE7QUFxQ0EsU0FyQ0EscUJBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQS9DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxxQkFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxxQkFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsc0JBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JB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QUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDhFQUFvQztBQUMzRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3J3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUyxnQ0FBZ0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhCQUE4QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhDQUE4QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUErQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUywwQkFBMEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhCQUE4QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUE2QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhDQUE4QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZnVsbHBhZ2UvUmVnaXN0ZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL0NvbmRpdGlvbkdlbmVyYWxlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9SZWdpc3RlckZvcm0udnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL1VzZXJIYXNEb2N0b3JDaG9pY2UudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL1VzZXJUeXBlQ2hvaWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL1JlZ2lzdGVyLnZ1ZT81OTNlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvQ29uZGl0aW9uR2VuZXJhbGUudnVlP2ExMDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9SZWdpc3RlckZvcm0udnVlP2RmN2YiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Vc2VySGFzRG9jdG9yQ2hvaWNlLnZ1ZT9iMTFhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvVXNlclR5cGVDaG9pY2UudnVlPzczY2UiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9SZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Db25kaXRpb25HZW5lcmFsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9SZWdpc3RlckZvcm0udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvVXNlckhhc0RvY3RvckNob2ljZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Vc2VyVHlwZUNob2ljZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9SZWdpc3Rlci52dWU/MjY1YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL0NvbmRpdGlvbkdlbmVyYWxlLnZ1ZT8xMmM1Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvUmVnaXN0ZXJGb3JtLnZ1ZT82Y2MzIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvVXNlckhhc0RvY3RvckNob2ljZS52dWU/ZTY3MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL1VzZXJUeXBlQ2hvaWNlLnZ1ZT9hNDE0Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvUmVnaXN0ZXIudnVlPzgzMzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Db25kaXRpb25HZW5lcmFsZS52dWU/ZTI4YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL1JlZ2lzdGVyRm9ybS52dWU/NmQ4MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL1VzZXJIYXNEb2N0b3JDaG9pY2UudnVlP2JkNWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Vc2VyVHlwZUNob2ljZS52dWU/NjgzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL1JlZ2lzdGVyLnZ1ZSdcclxuXHJcbi8vIEF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcydcclxuVnVlLnVzZShWdWVBeGlvcywgYXhpb3MpXHJcblxyXG4vLyBWdWVzYXgoVVggbGliKVxyXG5pbXBvcnQgVnVlc2F4IGZyb20gJ3Z1ZXNheCdcclxuVnVlLnVzZShWdWVzYXgpXHJcblxyXG5uZXcgVnVlKHtcclxuICAgIHJlbmRlcjogaCA9PiBoKFJlZ2lzdGVyKVxyXG59KS4kbW91bnQoJyN2dWUnKVxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZ1bGxwYWdlXCI+XHJcbiAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICB2LWlmPVwiYWN0aXZlU3RlcCAhPSAxXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTdGVwICE9IHByZXZpb3VzU3RlcFxyXG4gICAgICAgICAgICAgICAgICAgID8gKGFjdGl2ZVN0ZXAgPSBwcmV2aW91c1N0ZXApXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhY3RpdmVTdGVwID09IDNcclxuICAgICAgICAgICAgICAgICAgICA/IChhY3RpdmVTdGVwID0gMilcclxuICAgICAgICAgICAgICAgICAgICA6IChhY3RpdmVTdGVwID0gMSlcclxuICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4tcHJldlwiXHJcbiAgICAgICAgICAgIGNpcmNsZVxyXG4gICAgICAgICAgICBmbG9hdGluZ1xyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCI+PC9pPlxyXG4gICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJyZWdpc3Rlci1zdGVwc1wiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInN0ZXBcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IGFjdGl2ZVN0ZXAgPT0gMSB9XCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInNldEFjdGl2ZVN0ZXAoMSlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInN0ZXBcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogYWN0aXZlU3RlcCA9PSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2FjdGl2ZTogYWN0aXZlU3RlcCA9PSAzICYmIHVzZXJUeXBlID09ICdkb2N0b3InLFxyXG4gICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZXRBY3RpdmVTdGVwKDIpXCJcclxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiF1c2VyVHlwZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwic3RlcFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogYWN0aXZlU3RlcCA9PSAzIH1cIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic2V0QWN0aXZlU3RlcCgzKVwiXHJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJ1c2VySGFzRG9jdG9yID09PSBudWxsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwibG9nb1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltZy9sb2dvLWtpdmlkLWdyYWRpZW50LnN2Z1wiIGFsdD1cIkxvZ28gS2l2aWRcIiAvPlxyXG4gICAgICAgICAgICA8aDE+S2l2aWQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCIgbW9kZT1cIm91dC1pblwiPlxyXG4gICAgICAgICAgICA8VXNlclR5cGVDaG9pY2VcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJhY3RpdmVTdGVwID09IDFcIlxyXG4gICAgICAgICAgICAgICAgQHVzZXJUeXBlQ2hvaWNlPVwic2V0VXNlclR5cGVDaG9pY2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VXNlckhhc0RvY3RvckNob2ljZVxyXG4gICAgICAgICAgICAgICAgdi1pZj1cImFjdGl2ZVN0ZXAgPT0gMlwiXHJcbiAgICAgICAgICAgICAgICBAdXNlckhhc0RvY3RvckNob2ljZT1cInNldFVzZXJIYXNEb2N0b3JDaG9pY2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmVnaXN0ZXJGb3JtXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiYWN0aXZlU3RlcCA9PSAzXCJcclxuICAgICAgICAgICAgICAgIDp1c2VyVHlwZT1cInVzZXJUeXBlXCJcclxuICAgICAgICAgICAgICAgIDp1c2VySGFzRG9jdG9yPVwidXNlckhhc0RvY3RvclwiXHJcbiAgICAgICAgICAgICAgICA6Y3NyZlRva2VuUmVnaXN0ZXI9XCJjc3JmVG9rZW5SZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICA6Y3NyZlRva2VuQ29udGFjdD1cImNzcmZUb2tlbkNvbnRhY3RcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCBVc2VyVHlwZUNob2ljZSBmcm9tIFwiLi9yZWdpc3Rlci9Vc2VyVHlwZUNob2ljZS52dWVcIjtcclxuaW1wb3J0IFVzZXJIYXNEb2N0b3JDaG9pY2UgZnJvbSBcIi4vcmVnaXN0ZXIvVXNlckhhc0RvY3RvckNob2ljZS52dWVcIjtcclxuaW1wb3J0IFJlZ2lzdGVyRm9ybSBmcm9tIFwiLi9yZWdpc3Rlci9SZWdpc3RlckZvcm0udnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNzcmZUb2tlblJlZ2lzdGVyOiBudWxsLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5Db250YWN0OiBudWxsLFxyXG4gICAgICAgICAgICBhY3RpdmVTdGVwOiAxLFxyXG4gICAgICAgICAgICBwcmV2aW91c1N0ZXA6IDEsXHJcbiAgICAgICAgICAgIHVzZXJUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICB1c2VySGFzRG9jdG9yOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFVzZXJUeXBlQ2hvaWNlLFxyXG4gICAgICAgIFVzZXJIYXNEb2N0b3JDaG9pY2UsXHJcbiAgICAgICAgUmVnaXN0ZXJGb3JtLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzZXRVc2VyVHlwZUNob2ljZSh1c2VyVHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJUeXBlID0gdXNlclR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGVwID0gdGhpcy5hY3RpdmVTdGVwO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSB1c2VyVHlwZSA9PSBcInBhdGllbnRcIiA/IDIgOiAzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VXNlckhhc0RvY3RvckNob2ljZSh1c2VySGFzRG9jdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckhhc0RvY3RvciA9IHVzZXJIYXNEb2N0b3I7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGVwID0gdGhpcy5hY3RpdmVTdGVwO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSAzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0QWN0aXZlU3RlcChudW0pIHtcclxuICAgICAgICAgICAgaWYgKG51bSA9PSAyICYmICF0aGlzLnVzZXJUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG51bSA9PSAzICYmIHRoaXMudXNlckhhc0RvY3RvciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IG51bTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgVnVlLnByb3RvdHlwZS4kdnMgPSB0aGlzLiR2cztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmdXp6eS1iYWxsc1wiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZFwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlLXNjcm9sbGJhclwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2dWVEYXRhXCIpLmlubmVySFRNTCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuUmVnaXN0ZXIgPSBkYXRhLmNzcmZUb2tlblJlZ2lzdGVyO1xyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuQ29udGFjdCA9IGRhdGEuY3NyZlRva2VuQ29udGFjdDtcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0IFwiLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5jb250YWluZXIuZnVsbHBhZ2Uge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC52cy1idXR0b24uYnRuLXByZXYge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgYW5pbWF0aW9uOiAwLjVzIGVhc2UgMC4ycyBmb3J3YXJkcyBmYWRlRW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHJlbSAwLjRyZW0gMS40cmVtIDByZW0gcmdiYSgyNTEsIDEzOSwgMTA0LCAwLjMpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZkZmMwMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDByZW0gMC40cmVtIDEuNHJlbSAwcmVtIHJnYmEoMjUxLCAxMzksIDEwNCwgMC44KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3JlZ2lzdGVyLXN0ZXBzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTdyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNC41cmVtO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0ZXAge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRvcmFuZ2U7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjhmNDtcclxuICAgICAgICAgICAgd2lkdGg6IDMuMnJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmFmOGY0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5kZXNhY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDEwNCwgNTYsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxMDQsIDU2LCAwLjI1KTtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmW2Rpc2FibGVkXSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2xvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMTkuOHJlbTtcclxuICAgICAgICB3aWR0aDogMTRyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1LjRyZW07XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuOXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQuM3JlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItY2dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2tpdmlkXCI+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29uZGl0aW9ucyBnw6luw6lyYWxlcyBkJ3V0aWxpc2F0aW9uPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazFcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjEuIE1vZGFsaXTDqXMgZOKAmWFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazJcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dVxyXG4gICAgICAgICAgICAgICAgICAgID48c3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4xLjEgVXRpbGlzYXRldXJzIFByYXRpY2llbnMgcHJvZmVzc2lvbm5lbHM8L3N0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgID48L3VcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPGgzIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrM1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1PjxzdHJvbmc+YS4gQXV0aGVudGlmaWNhdGlvbjwvc3Ryb25nPjwvdT5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBMb3JzIGRlIGxhIHByZW1pw6hyZSB1dGlsaXNhdGlvbiBkZSBsYSBwbGF0ZWZvcm1lLCBsZSBwcmF0aWNpZW5cclxuICAgICAgICAgICAgICAgIGNvbXBsw6h0ZSB1biBmb3JtdWxhaXJlIGTigJlpbnNjcmlwdGlvbiBlbiBsaWduZSBlbiBzYWlzaXNzYW50IHVuXHJcbiAgICAgICAgICAgICAgICBlbWFpbCBldCB1biBtb3QgZGUgcGFzc2Ugb3Ugc2UgY29ubmVjdGUgdmlhIHNvbiBjb21wdGUgRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgIG91IEdvb2dsZS4gVW5lIGZvaXMgbGUgZm9ybXVsYWlyZSBlbnZvecOpLCB1biBlbWFpbCBkZSB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICBlc3QgZW52b3nDqSDDoCBs4oCZYWRyZXNzZSBlLW1haWwgc2Fpc2llIHBhciBsZSBwcmF0aWNpZW4gbOKAmWludml0YW50XHJcbiAgICAgICAgICAgICAgICDDoCB2YWxpZGVyIHNvbiBjb21wdGUgZW4gY2xpcXVhbnQgc3VyIHVuIGxpZW4gZGUgY29uZmlybWF0aW9uLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazRcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dT48c3Ryb25nPjEuMiBVdGlsaXNhdGV1cnMgbm9uLXByb2Zlc3Npb25uZWxzPC9zdHJvbmc+PC91PlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZGVzIHByZXN0YXRpb25zIHF14oCZaWwgZm91cm5pdCDDoCBzZXMgY2xpZW50cywgbGVcclxuICAgICAgICAgICAgICAgIHByYXRpY2llbiBwcm9mZXNzaW9ubmVsIGRlIGxhIHLDqcOpZHVjYXRpb24gZXQvb3UgZHUgc3BvcnQsIGxldXJcclxuICAgICAgICAgICAgICAgIGVudHJlcHJpc2UsIGxldXIgbXV0dWVsbGUgb3UgbGV1ciBzZXJ2aWNlIGRlIHNhbnTDqSBhdSB0cmF2YWlsXHJcbiAgICAgICAgICAgICAgICAoY2ktYXByw6hzIMKrIGxlIFByZXNjcmlwdGV1ciDCuykgdmFsaWRlIGxhIG1pc2UgZW4gcmVsYXRpb24gYXZlY1xyXG4gICAgICAgICAgICAgICAgbOKAmXV0aWxpc2F0ZXVyIGV0IGdhcmFudGllIHVuIGFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lLiBMZXNcclxuICAgICAgICAgICAgICAgIFV0aWxpc2F0ZXVycyBzb250IGludml0w6lzIMOgIHNlIGNvbm5lY3RlciBzdXIgbGEgUGxhdGVmb3JtZSBzb2l0XHJcbiAgICAgICAgICAgICAgICBwYXIgbGUgUHJlc2NyaXB0ZXVyLCBxdWkgYXVyYSBjb21tdW5pcXXDqSBhdSBwcsOpYWxhYmxlIMOgIEtJVklELFxyXG4gICAgICAgICAgICAgICAgbOKAmWFkcmVzc2UgZS1tYWlsIGRlIGzigJl1dGlsaXNhdGV1ciBzb2l0IHBhciBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgICAgICAgICBpbnNjcmlwdGlvbiB1dGlsaXNhdGV1ciwgcXVpIGxldXIgcGVybWV0dHJvbnQgZW5zdWl0ZSBkJ8OpdGFibGlyXHJcbiAgICAgICAgICAgICAgICB1bmUgY29ubmV4aW9uIGF2ZWMgbGUgcHJhdGljaWVuIHByb2Zlc3Npb25uZWwsIHF1aSB2YWxpZGVyYVxyXG4gICAgICAgICAgICAgICAgY2V0dGUgbWlzZSBlbiBjb250YWN0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgw4AgbGEgc3VpdGUgZGUgbOKAmWluc2NyaXB0aW9uLCB1biBlLW1haWwgZGUgY29uZmlybWF0aW9uIGVzdFxyXG4gICAgICAgICAgICAgICAgZW52b3nDqSDDoCBs4oCZVXRpbGlzYXRldXIuIEzigJlVdGlsaXNhdGV1ciBkZXZyYSBhbG9ycyBjbGlxdWVyIHN1ciB1blxyXG4gICAgICAgICAgICAgICAgbGllbiBkZSBjZXQgZS1tYWlsIHBvdXIgZMOpZmluaXIgc29uIG1vdCBkZSBwYXNzZSBwZXJzb25uZWwsXHJcbiAgICAgICAgICAgICAgICBjb21wbMOpdGVyIGV0IGNvbmZpcm1lciBzb24gY29tcHRlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGVzIFV0aWxpc2F0ZXVycyBzb250IGRlcyBwZXJzb25uZXMgcGh5c2lxdWVzLiBDaGFxdWVcclxuICAgICAgICAgICAgICAgIFV0aWxpc2F0ZXVyIGRpc3Bvc2UgZGUgc29uIHByb3ByZSBhY2PDqHMuIElsIGx1aSBlc3QgaW50ZXJkaXQgZGVcclxuICAgICAgICAgICAgICAgIHBlcm1ldHRyZSBhzIAgdW4gdGllcnMgZOKAmXV0aWxpc2VyIHNvbiBjb21wdGUgb3UgZOKAmcOpY2hhbmdlciBzb25cclxuICAgICAgICAgICAgICAgIGFjY8OocyBhdmVjIGNlbHVpIGTigJl1biBhdXRyZSB1dGlsaXNhdGV1ci5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDMgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms1XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMS4zIEluc2NyaXB0aW9uIGF2ZWMgR29vZ2xlIGV0IEZhY2Vib29rICh1dGlsaXNhdGV1cnMgZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmVzc2lvbm5lbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTm91cyB2b3VzIG9mZnJvbnMgbGEgcG9zc2liaWxpdMOpIGRlIGNyw6llciB2b3RyZSBjb21wdGUgS0lWSUQgdmlhXHJcbiAgICAgICAgICAgICAgICB2b3RyZSBjb21wdGUgRmFjZWJvb2sgb3UgR29vZ2xlLCBvdSBkZSByZWxpZXIgdm90cmUgY29tcHRlIEtJVklEXHJcbiAgICAgICAgICAgICAgICDDoCB2b3RyZSBjb21wdGUgRmFjZWJvb2sgb3UgR29vZ2xlLiBWb3VzIHNlcmV6IGVuc3VpdGUgcsOpYWNoZW1pbsOpXHJcbiAgICAgICAgICAgICAgICB2ZXJzIEZhY2Vib29rIG91IEdvb2dsZSAob8O5IHZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpIG91XHJcbiAgICAgICAgICAgICAgICBlbnJlZ2lzdHJlciB1biBjb21wdGUpIGV0IHZvdXMgcG91cnJleiBhbG9ycyBjb25zdWx0ZXIgbGEgbGlzdGVcclxuICAgICAgICAgICAgICAgIGRlcyBkb25uw6llcyBGYWNlYm9vayBvdSBHb29nbGUgdm91cyBjb25jZXJuYW50IGRvbnQgbm91cyBhdm9uc1xyXG4gICAgICAgICAgICAgICAgYmVzb2luLCDDoCBzYXZvaXIgbGVzIGluZm9ybWF0aW9ucyBkZSB2b3RyZSBwcm9maWwgcHVibGljIHRlbGxlc1xyXG4gICAgICAgICAgICAgICAgcXVlIHZvdHJlIHByw6lub20sIHZvdHJlIG5vbSwgdm90cmUgc2V4ZSBldCBs4oCZYWRyZXNzZSBlLW1haWxcclxuICAgICAgICAgICAgICAgIGFzc29jacOpZSDDoCBjZSBjb21wdGUuIENlcyBpbmZvcm1hdGlvbnMgc29udCBuw6ljZXNzYWlyZXMgcG91ciBkZXNcclxuICAgICAgICAgICAgICAgIHJhaXNvbnMgZCdpZGVudGlmaWNhdGlvbiBhZmluIGRlIGNyw6llciBwb3VyIHZvdXMgdW4gY29tcHRlIEtJVklEXHJcbiAgICAgICAgICAgICAgICBzw6ljdXJpc8OpLiBWb3RyZSBjb21wdGUgRmFjZWJvb2sgb3UgR29vZ2xlIGV0IHZvdHJlIGNvbXB0ZSBLSVZJRFxyXG4gICAgICAgICAgICAgICAgc2Vyb250IGxpw6lzIGRlIGZhw6dvbiBwZXJtYW5lbnRlIHBhciBs4oCZaW50ZXJtw6lkaWFpcmUgZGUgdm90cmVcclxuICAgICAgICAgICAgICAgIGFkcmVzc2UgZS1tYWlsLiBDZWxsZS1jaSBzZXJhIGNvbnNlcnbDqWUgc3VyIG5vcyBzZXJ2ZXVycyBldCBub3VzXHJcbiAgICAgICAgICAgICAgICBs4oCZdXRpbGlzZXJvbnMsIGxlIGNhcyDDqWNow6lhbnQsIHBvdXIgdm91cyBlbnZveWVyIGRlc1xyXG4gICAgICAgICAgICAgICAgaW5mb3JtYXRpb25zLiBOb3VzIHBvdXZvbnMgw6lnYWxlbWVudCBkw6l0ZXJtaW5lciBzaSB2b3VzIHZvdXNcclxuICAgICAgICAgICAgICAgIMOqdGVzIGNvbm5lY3TDqSBwYXIgbOKAmWludGVybcOpZGlhaXJlIGRlIEZhY2Vib29rIG91IEdvb2dsZS4gRMOocyBxdWVcclxuICAgICAgICAgICAgICAgIHZvdXMgdm91cyBjb25uZWN0ZXogw6AgRmFjZWJvb2sgb3UgR29vZ2xlLCB2b3VzIHBvdXZleiBhdXNzaSB2b3VzXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0ZXIgw6AgS0lWSUQuIE5vdXMgbmUgY29tbXVuaXF1ZXJvbnMgYXVjdW5lIGluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICB2b3VzIGNvbmNlcm5hbnQgw6AgRmFjZWJvb2sgb3Ugw6AgR29vZ2xlIHNhbnMgdm90cmUgY29uc2VudGVtZW50LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgSW1wb3J0YW50IDogTm91cyBu4oCZZW5yZWdpc3Ryb25zIGVuIGF1Y3VuZSBtYW5pw6hyZSB2b3MgZG9ubsOpZXMgZGVcclxuICAgICAgICAgICAgICAgIGNvbm5leGlvbiDDoCBGYWNlYm9vayBvdSBHb29nbGUsIGV0IG4nYXZvbnMgcGFzIGxhIHBvc3NpYmlsaXTDqSBkZVxyXG4gICAgICAgICAgICAgICAgcHVibGllciBxdW9pIHF1ZSBjZSBzb2l0IHN1ciB2b3RyZSBwcm9maWwgRmFjZWJvb2sgb3UgR29vZ2xlXHJcbiAgICAgICAgICAgICAgICBzYW5zIGF2b2lyIG9idGVudSB2b3RyZSBjb25zZW50ZW1lbnQgZXhwcsOocy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFZvdXMgcG91dmV6IHZvdXMgaW5mb3JtZXIgc3VyIGxhIGZhw6dvbiBkb250IEZhY2Vib29rIGfDqHJlIGxlc1xyXG4gICAgICAgICAgICAgICAgcGFyYW3DqHRyZXMgZGUgY29uZmlkZW50aWFsaXTDqSBlbiBjb25zdWx0YW50IGxhXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BvbGljeS5waHBcIj4gPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wb2xpY3kucGhwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHU+cG9saXRpcXVlIGRlIGNvbmZpZGVudGlhbGl0w6k8L3U+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICBldCBsZXM8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2xlZ2FsL3Rlcm1zXCI+IDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbGVnYWwvdGVybXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dT5jb25kaXRpb25zIGQndXRpbGlzYXRpb248L3U+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICBkZSBGYWNlYm9vayA7IHZvdXMgeSB0cm91dmVyZXogw6lnYWxlbWVudCBsZXMgY29uZGl0aW9ucyBxdWlcclxuICAgICAgICAgICAgICAgIHMnYXBwbGlxdWVudCDDoCBsYSBwb3NzaWJpbGl0w6kgbWVudGlvbm7DqWUgcHLDqWPDqWRlbW1lbnQgZGUgc2VcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RlciBldCBkZSBzJ2luc2NyaXJlIMOgIEtJVklELiBWb3VzIHBvdXZleiB2b3VzIGluZm9ybWVyXHJcbiAgICAgICAgICAgICAgICBzdXIgbGEgZmHDp29uIGRvbnQgR29vZ2xlIGfDqHJlIGxlcyBwYXJhbcOodHJlcyBkZSBjb25maWRlbnRpYWxpdMOpXHJcbiAgICAgICAgICAgICAgICBlbiBjb25zdWx0YW50IGxhXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wb2xpY2llcy5nb29nbGUuY29tL3ByaXZhY3lcIj4gPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS9wcml2YWN5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHU+cG9saXRpcXVlIGRlIGNvbmZpZGVudGlhbGl0w6k8L3U+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICBldCBsZXM8YSBocmVmPVwiaHR0cHM6Ly9wb2xpY2llcy5nb29nbGUuY29tL3Rlcm1zXCI+IDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vdGVybXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dT5jb25kaXRpb25zIGQndXRpbGlzYXRpb248L3U+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICBkZSBHb29nbGUgOyB2b3VzIHkgdHJvdXZlcmV6IMOpZ2FsZW1lbnQgbGVzIGNvbmRpdGlvbnMgcXVpXHJcbiAgICAgICAgICAgICAgICBz4oCZYXBwbGlxdWVudCDDoCBsYSBwb3NzaWJpbGl0w6kgbWVudGlvbm7DqWUgcHLDqWPDqWRlbW1lbnQgZGUgc2VcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RlciBldCBkZSBzJ2luc2NyaXJlIMOgIEtJVklEXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrNlwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Mi4gRHJvaXRzIGRlIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGEgcGxhdGVmb3JtZSBlc3QgZXhwbG9pdMOpZSBwYXIgbGEgc29jacOpdMOpIEtJVklEIChjaS1hcHLDqHMgwqtcclxuICAgICAgICAgICAgICAgIEtJVklEIMK7KS4gS0lWSUQgZXN0IGxlIHRpdHVsYWlyZSBldCBkaXNwb3NlIGRlcyBkcm9pdHMgcmVsYXRpZnNcclxuICAgICAgICAgICAgICAgIGF1eCBjb21wb3NhbnRzIGV0IGNvbnRlbnVzIGRlIGxhIFBsYXRlZm9ybWUgcHJvdMOpZ8OpcyBwYXIgZGVzXHJcbiAgICAgICAgICAgICAgICBkcm9pdHMgZGUgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUuIFRvdXRlIGJhc2UgZGUgZG9ubsOpZXMsIHRvdXRcclxuICAgICAgICAgICAgICAgIGNvbnRlbnUsIHRvdXQgY29tcG9zYW50LCB0b3V0ZSBwcsOpc2VudGF0aW9uIGV0IHRvdXQgYXV0cmVcclxuICAgICAgICAgICAgICAgIMOpbMOpbWVudCAodGV4dGVzLCBzb25zLCBncmFwaGlzbWUsIHZpc3VlbHMsIHBob3RvZ3JhcGhpZXMsXHJcbiAgICAgICAgICAgICAgICB2aWTDqW9zLCBiYXNlcyBkZSBkb25uw6llcywgZXRjLiksIG1hcnF1ZSwgbG9nbyBldCBub20gZGUgZG9tYWluZSxcclxuICAgICAgICAgICAgICAgIGFwcGFyYWlzc2FudCBzdXIgbGEgUGxhdGVmb3JtZSwgc29udCBsYSBwcm9wcmnDqXTDqSBkZSBLSVZJRCBldCBsZVxyXG4gICAgICAgICAgICAgICAgY2FzIMOpY2jDqWFudCBkZSBzZXMgcGFydGVuYWlyZXMsIGV0IGVzdCBwcm90w6lnw6kgcGFyIGxlcyBsb2lzIGVuXHJcbiAgICAgICAgICAgICAgICB2aWd1ZXVyIHN1ciBsYSBwcm9wcmnDqXTDqSBpbnRlbGxlY3R1ZWxsZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFRvdXRlIHJlcHJvZHVjdGlvbiBldCB0b3V0ZSBkaWZmdXNpb24gZGUgY2VzIMOpbMOpbWVudHMsIHNhbnNcclxuICAgICAgICAgICAgICAgIGF1dG9yaXNhdGlvbiDDqWNyaXRlIHByw6lhbGFibGUgZGUgS0lWSUQsIGV4cG9zZW50IGxlc1xyXG4gICAgICAgICAgICAgICAgY29udHJldmVuYW50cyDDoCBkZXMgcG91cnN1aXRlcyBqdWRpY2lhaXJlcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms3XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz4zLiBMaWVucyBoeXBlcnRleHRlczwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEtJVklEIG7igJlleGVyY2UgYXVjdW4gY29udHLDtGxlIHF1YW50IGF1IGNvbnRlbnUgZGVzIHNpdGVzIHRpZXJzLlxyXG4gICAgICAgICAgICAgICAgTOKAmWV4aXN0ZW5jZSBk4oCZdW4gbGllbiBoeXBlcnRleHRlIGVudHJlIGxhIFBsYXRlZm9ybWUgZXQgdW4gc2l0ZVxyXG4gICAgICAgICAgICAgICAgdGllcnMgbmUgc2lnbmlmaWUgcGFzIHF1ZSBLSVZJRCBhc3N1bWUgdW5lIHF1ZWxjb25xdWUgZ2FyYW50aWVcclxuICAgICAgICAgICAgICAgIG91IHJlc3BvbnNhYmlsaXTDqSBxdWFudCDDoCBzb24gY29udGVudSBvdSBs4oCZdXNhZ2UgcXVpIHBldXQgZW5cclxuICAgICAgICAgICAgICAgIMOqdHJlIGZhaXQuIEtJVklEIG5lIHNhdXJhaXQgw6p0cmUgcmVzcG9uc2FibGUgb3Ugc29saWRhaXJlbWVudFxyXG4gICAgICAgICAgICAgICAgdGVudSBkdSBjb250ZW51IMOpZGl0w6kgZXQvb3UgaMOpYmVyZ8OpIHN1ciB1biBzaXRlIHRpZXJzIHZlcnNcclxuICAgICAgICAgICAgICAgIGxlcXVlbCBsYSBQbGF0ZWZvcm1lIHJlZGlyaWdlIGR1IGZhaXQgZOKAmXVuIGxpZW4gaHlwZXJ0ZXh0ZSBvdVxyXG4gICAgICAgICAgICAgICAgY29udGVudSDDqWRpdMOpIGV0L291IGjDqWJlcmfDqSBzdXIgdW4gc2l0ZSB0aWVycyDDqXRhYmxpc3NhbnQgdW5cclxuICAgICAgICAgICAgICAgIGxpZW4gdmVycyBsYSBQbGF0ZWZvcm1lLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazhcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjQuIFByb3RlY3Rpb24gZGVzIERvbm7DqWVzIFBlcnNvbm5lbGxlczwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFBvdXIgdG91dGUgaW5mb3JtYXRpb24gcmVsYXRpdmUgw6AgbGEgcHJvdGVjdGlvbiBkZXMgZG9ubsOpZXNcclxuICAgICAgICAgICAgICAgIHBlcnNvbm5lbGxlcywgYXV4IGNvb2tpZXMgdXRpbGlzw6lzIHBhciBsYSBQbGF0ZWZvcm1lIGV0IGF1eFxyXG4gICAgICAgICAgICAgICAgZHJvaXRzIGRlIGzigJlVdGlsaXNhdGV1ciBxdWFudCDDoCBs4oCZdXNhZ2UgZGUgc2VzIGRvbm7DqWVzXHJcbiAgICAgICAgICAgICAgICBwZXJzb25uZWxsZXMsIGzigJlVdGlsaXNhdGV1ciBlc3QgaW52aXTDqSDDoCBzZSByw6lmw6lyZXIgw6AgbGFcclxuICAgICAgICAgICAgICAgIMKrPHN0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgID4mbmJzcDtQb2xpdGlxdWUgZGUgQ29uZmlkZW50aWFsaXTDqSBkZXMgRG9ubsOpZXNcclxuICAgICAgICAgICAgICAgICAgICBQZXJzb25uZWxsZXM8L3N0cm9uZ1xyXG4gICAgICAgICAgICAgICAgPiZuYnNwO8K7LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazlcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjUuIFJlc3BvbnNhYmlsaXTDqTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aDMgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmsxMFwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1PjxzdHJvbmc+YS4gUmVzcG9uc2FiaWxpdMOpIEtJVklEPC9zdHJvbmc+PC91PlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIExhIFBsYXRlZm9ybWUgZXQgdG91dCBkb2N1bWVudCBvdSBjb250ZW51IGFjY2Vzc2libGUgc3VyIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lIHNvbnQgZm91cm5pcyDCqyBlbiBs4oCZw6l0YXQgwrssIMKrIHRlbHMgcXVlbHMgwrssIMKrIHNpXHJcbiAgICAgICAgICAgICAgICBkaXNwb25pYmxlcyDCuy4gT3V0cmUgbGVzIGdhcmFudGllcyBsw6lnYWxlcyBhdXhxdWVsbGVzIGlsIG5lIHBldXRcclxuICAgICAgICAgICAgICAgIMOqdHJlIGTDqXJvZ8OpLCBLSVZJRCBuZSBtZXQgZW4gxZN1dnJlIGF1Y3VuZSBnYXJhbnRpZSwgZXhwcmVzc2Ugb3VcclxuICAgICAgICAgICAgICAgIGltcGxpY2l0ZSBk4oCZYXVjdW5lIHNvcnRlIG5vdGFtbWVudCBlbiB0ZXJtZXMgZOKAmWFkw6lxdWF0aW9uIGRlIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lIMOgIHVuIHVzYWdlIHBhcnRpY3VsaWVyLCBkZSBkaXNwb25pYmlsaXTDqSBkZSBsYVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZSwgZGUgY29udGludWl0w6kgZGUgbOKAmWFjY2Vzc2liaWxpdMOpIMOgIGxhIFBsYXRlZm9ybWVcclxuICAgICAgICAgICAgICAgIChjZXR0ZSBkZXJuacOocmUgcG91dmFudCBjb25uYcOudHJlIGRlcyBpbnRlcnJ1cHRpb25zIGRlIHF1ZWxxdWVcclxuICAgICAgICAgICAgICAgIGZvcm1lIGV0IGRlIHF1ZWxxdWUgZHVyw6llKSwgZGUgc8OpY3VyaXTDqSBkZSBsYSBQbGF0ZWZvcm1lLCBkdVxyXG4gICAgICAgICAgICAgICAgZmFpdCBxdWUgY2VzIGRlcm5pZXJzIHNvaWVudCBleGVtcHRzIGTigJllcnJldXJzLCBk4oCZYW5vbWFsaWVzLFxyXG4gICAgICAgICAgICAgICAgZOKAmWltcHLDqWNpc2lvbnMsIGRlIHBhbm5lcywgZGUgYnVncyBuaSBxdWUgY2V1eC1jaSBwb3Vycm9udCDDqnRyZVxyXG4gICAgICAgICAgICAgICAgY29ycmlnw6lzLiBMZXMgcHLDqXNlbnRlcyBleG9uw6lyYXRpb25zIHBvdXZhbnQgw6p0cmUgY29tcGzDqXTDqWVzIHBhclxyXG4gICAgICAgICAgICAgICAgZGVzIGRpc3Bvc2l0aW9ucyBwbHVzIHNww6ljaWZpcXVlcyBhdSBzZWluIGRlcyBwcsOpc2VudGVzXHJcbiAgICAgICAgICAgICAgICBDb25kaXRpb25zIGTigJl1dGlsaXNhdGlvbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFNhdWYgZGlzcG9zaXRpb24gbMOpZ2FsZSBjb250cmFpcmUgZXQgaW1ww6lyYXRpdmUsIGxhXHJcbiAgICAgICAgICAgICAgICByZXNwb25zYWJpbGl0w6kgS0lWSUQgcG91ciB0b3V0IGRvbW1hZ2UgZGlyZWN0ZW1lbnQgb3VcclxuICAgICAgICAgICAgICAgIGluZGlyZWN0ZW1lbnQgbGnDqSDDoCBs4oCZdXRpbGlzYXRpb24gZGUgbGEgUGxhdGVmb3JtZSBuZSBzYXVyYWl0XHJcbiAgICAgICAgICAgICAgICDDqnRyZSBlbmdhZ8OpZSBlbiByYWlzb24gZGUgZG9tbWFnZXMgZGlyZWN0cyBvdSBpbmRpcmVjdHMsXHJcbiAgICAgICAgICAgICAgICBtYXTDqXJpZWxzIG91IGltbWF0w6lyaWVscywgbm90YW1tZW50IHBlcnRlIGRlIHByb2ZpdCwgcGVydGUgZGVcclxuICAgICAgICAgICAgICAgIGNoYW5jZSwgcGVydGUgZGUgY2xpZW50w6hsZSwgcGVydGUgZGUgZG9ubsOpZXMsIHBlcnRlIGTigJlpbWFnZVxyXG4gICAgICAgICAgICAgICAgZXQvb3UgZG9tbWFnZXMgaW1tYXTDqXJpZWxzIHF1ZSB2b3VzIHN1Ymlzc2V6LiBLSVZJRCBuZSBwb3VycmFcclxuICAgICAgICAgICAgICAgIG5vdGFtbWVudCwgZW4gYXVjdW4gY2FzLCB2b2lyIHNhIHJlc3BvbnNhYmlsaXTDqSBlbmdhZ8OpZSBkYW5zIGxlXHJcbiAgICAgICAgICAgICAgICBjYXMgb8O5IHVuIFV0aWxpc2F0ZXVyIHNlIHZlcnJhaXQgYXR0cmlidWVyIHBhciBsZSBQcmVzY3JpcHRldXJcclxuICAgICAgICAgICAgICAgIHByYXRpY2llbiBkZXMgZXhlcmNpY2VzIG5vbiBhZGFwdMOpcyDDoCBzZXMgY2FwYWNpdMOpcyBwaHlzaXF1ZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTFcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLiBSZXNwb25zYWJpbGl0w6kgZGVzIHV0aWxpc2F0ZXVycyBwcmF0aWNpZW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Zlc3Npb25uZWxzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgRW4gdGFudCBxdWUgcHJvZmVzc2lvbm5lbCBkZSBsYSByw6nDqWR1Y2F0aW9uIGV0L291IGR1IHNwb3J0LFxyXG4gICAgICAgICAgICAgICAgbOKAmVV0aWxpc2F0ZXVyIHByb2Zlc3Npb25uZWwgZXN0IGVudGnDqHJlbWVudCByZXNwb25zYWJsZSBkZSB0b3V0ZVxyXG4gICAgICAgICAgICAgICAgY3LDqWF0aW9uLCB0cmFuc21pc3Npb24gb3UgcHVibGljYXRpb24gZGUgQ29udGVudSBhdSBtb3llbiBkZSBsYVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZSBldCBlbiBwYXJ0aWN1bGllciBkZSBsYSBkw6lmaW5pdGlvbiBkZXMgZXhlcmNpY2VzIGRlXHJcbiAgICAgICAgICAgICAgICByw6nDqWR1Y2F0aW9uIHByb3Bvc8OpcyBhdXggVXRpbGlzYXRldXJzIG5vbi1wcm9mZXNzaW9ubmVsIHN1ciBsYVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZSwgZW4gZm9uY3Rpb24gZGUgbGV1cnMgYmVzb2lucyBldCBkZSBsZXVycyBjYXBhY2l0w6lzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTOKAmVV0aWxpc2F0ZXVyIHByb2Zlc3Npb25uZWwgYXNzdW1lIGzigJllbnRpw6hyZSByZXNwb25zYWJpbGl0w6kgzIFcclxuICAgICAgICAgICAgICAgIHF1YW50IGF1eCBjb25zw6lxdWVuY2VzIGRpcmVjdGVzIGV0L291IGluZGlyZWN0ZXMgZGVcclxuICAgICAgICAgICAgICAgIGzigJl1dGlsaXNhdGlvbiBkZSBQbGF0ZWZvcm1lIGV0IG5vdGFtbWVudCBkZSBsYSBjcsOpYXRpb24gZGVcclxuICAgICAgICAgICAgICAgIENvbnRlbnVzLiBMZXMgZXhlbXBsZXMgZGUgQ29udGVudXMgZXQgw6l2ZW50dWVscyBjb25zZWlscyBkZVxyXG4gICAgICAgICAgICAgICAgS0lWSUQgb3UgZ8OpbsOpcsOpcyBhdXRvbWF0aXF1ZW1lbnQgcGFyIGxhIFBsYXRlZm9ybWUgZG9pdmVudCDDqnRyZVxyXG4gICAgICAgICAgICAgICAgY29uc2lkw6lyw6lzIHVuaXF1ZW1lbnQgY29tbWUgZGVzIG9waW5pb25zLCBs4oCZVXRpbGlzYXRldXJcclxuICAgICAgICAgICAgICAgIHByb2Zlc3Npb25uZWwgcmVzdGFudCBzZXVsIHJlc3BvbnNhYmxlIGRlIGxhIGNyw6lhdGlvbiBkZXNcclxuICAgICAgICAgICAgICAgIENvbnRlbnVzIMOgIGRlc3RpbmF0aW9uIGRlcyBVdGlsaXNhdGV1cnMgbm9uLXByb2Zlc3Npb25uZWxzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTOKAmVV0aWxpc2F0ZXVyIHByb2Zlc3Npb25uZWwgZXN0IHRlbnUgZGUgcHJlbmRyZSB0b3V0ZXMgbGVzXHJcbiAgICAgICAgICAgICAgICBtZXN1cmVzIGFmaW4gZGUgc+KAmWFzc3VyZXIgcXVlIGxlcyBDb250ZW51cyBjcsOpw6lzIHN1ciBsYVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZSBwb3VyIGxlcyBVdGlsaXNhdGV1cnMgbm9uLXByb2Zlc3Npb25uZWxzIHNvbnRcclxuICAgICAgICAgICAgICAgIGNvbmZvcm1lcyDDoCBs4oCZw6l0YXQgZGVzIGNvbm5haXNzYW5jZXMgZW4gbWF0acOocmUgZGUgcsOpw6lkdWNhdGlvblxyXG4gICAgICAgICAgICAgICAgcGh5c2lxdWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTJcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjYuIERpc3BvbmliaWxpdMOpIGRlIGxhIFBsYXRlZm9ybWU8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBBbG9ycyBtw6ptZSBxdWUgS0lWSUQgYSBlZmZlY3R1w6kgdG91dGVzIGxlcyBkw6ltYXJjaGVzIG7DqWNlc3NhaXJlc1xyXG4gICAgICAgICAgICAgICAgcG91ciBz4oCZYXNzdXJlciBkZSBsYSBmaWFiaWxpdMOpIGRlcyBpbmZvcm1hdGlvbnMsIHNlcnZpY2VzLFxyXG4gICAgICAgICAgICAgICAgbG9naWNpZWxzIG91IHByb2R1aXRzIGNvbnRlbnVzIHN1ciBsYSBQbGF0ZWZvcm1lLCBpbCBuZSBzYXVyYWl0XHJcbiAgICAgICAgICAgICAgICDDqnRyZSB0ZW51IHBvdXIgcmVzcG9uc2FibGUgZOKAmWVycmV1cnMsIGTigJlvbWlzc2lvbnMsIGRlIHZpcnVzIG91XHJcbiAgICAgICAgICAgICAgICBkZXMgcsOpc3VsdGF0cyBxdWkgcG91cnJhaWVudCDDqnRyZSBvYnRlbnVzIHBhciB1biBtYXV2YWlzIHVzYWdlXHJcbiAgICAgICAgICAgICAgICBkZSBjZXV4LWNpLiBLSVZJRCBu4oCZZXN0IGVuIGVmZmV0IHRlbnUgcXVlIGTigJl1bmUgc2ltcGxlXHJcbiAgICAgICAgICAgICAgICBvYmxpZ2F0aW9uIGRlIG1veWVucy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEzigJlVdGlsaXNhdGV1ciBkw6ljbGFyZSBldCBnYXJhbnRpdCBxdeKAmWlsIGNvbm5hw650IGxlc1xyXG4gICAgICAgICAgICAgICAgY2FyYWN0w6lyaXN0aXF1ZXMgZXQgbGVzIGNvbnRyYWludGVzIGTigJlJbnRlcm5ldCBldCBub3RhbW1lbnQgcXVlXHJcbiAgICAgICAgICAgICAgICBsZXMgdHJhbnNtaXNzaW9ucyBkZSBkb25uw6llcyBldCBk4oCZaW5mb3JtYXRpb25zIHN1ciBJbnRlcm5ldCBuZVxyXG4gICAgICAgICAgICAgICAgYsOpbsOpZmljaWVudCBxdWUgZOKAmXVuZSBmaWFiaWxpdMOpIHRlY2huaXF1ZSByZWxhdGl2ZSwgY2VsbGVzLWNpXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhbnQgc3VyIGRlcyByw6lzZWF1eCBow6l0w6lyb2fDqG5lcyBhdXggY2FyYWN0w6lyaXN0aXF1ZXMgZXRcclxuICAgICAgICAgICAgICAgIGNhcGFjaXTDqXMgdGVjaG5pcXVlcyBkaXZlcnNlcywgcXVpIHBlcnR1cmJlbnQgbOKAmWFjY8OocyBvdSBsZVxyXG4gICAgICAgICAgICAgICAgcmVuZGVudCBpbXBvc3NpYmxlIMOgIGNlcnRhaW5lcyBww6lyaW9kZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBLSVZJRCBz4oCZZWZmb3JjZSBkZSBtYWludGVuaXIgYWNjZXNzaWJsZSBsYSBQbGF0ZWZvcm1lIDcgam91cnNcclxuICAgICAgICAgICAgICAgIHN1ciA3IGV0IDI0IGhldXJlcyBzdXIgMjQsIG1haXMgbuKAmWVzdCB0ZW51IMOgIGF1Y3VuZSBvYmxpZ2F0aW9uXHJcbiAgICAgICAgICAgICAgICBk4oCZeSBwYXJ2ZW5pciBldCBuZSBmb3Vybml0IHBhciBjb25zw6lxdWVudCBhdWN1bmUgZ2FyYW50aWUgZGVcclxuICAgICAgICAgICAgICAgIGRpc3BvbmliaWxpdMOpIG91IGTigJlhY2Nlc3NpYmlsaXTDqSBwZXJtYW5lbnRlIG91IGRlIHBlcmZvcm1hbmNlLlxyXG4gICAgICAgICAgICAgICAgS0lWSUQgZXQvb3Ugc2VzIGZvdXJuaXNzZXVycyBwZXV0L3BldXZlbnQgw6lnYWxlbWVudCBlblxyXG4gICAgICAgICAgICAgICAgaW50ZXJyb21wcmUgbOKAmWFjY8OocyBub3RhbW1lbnQgcG91ciBkZXMgcmFpc29ucyBkZSBtYWludGVuYW5jZSBldFxyXG4gICAgICAgICAgICAgICAgZGUgbWlzZSDDoCBuaXZlYXUgZGUgbGEgUGxhdGVmb3JtZSBvdSBkZSBzb24gaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgICAgIGTigJlow6liZXJnZW1lbnQgb3UgdG91dGUgYXV0cmUgcmFpc29uIGzDqWdpdGltZSBkZSBLSVZJRC4gS0lWSURcclxuICAgICAgICAgICAgICAgIG7igJllc3QgZW4gYXVjdW4gY2FzIHJlc3BvbnNhYmxlIGRlIGNlcyBpbnRlcnJ1cHRpb25zIGV0IGRlc1xyXG4gICAgICAgICAgICAgICAgY29uc8OpcXVlbmNlcyBxdWkgcGV1dmVudCBlbiBkw6ljb3VsZXIgcG91ciBs4oCZVXRpbGlzYXRldXIgb3UgdG91c1xyXG4gICAgICAgICAgICAgICAgdGllcnMuIElsIGVzdCByYXBwZWzDqSBwYXIgYWlsbGV1cnMgcXVlIEtJVklEIHBldXQgbWV0dHJlIGZpbiBvdVxyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXIgbGVzIGNhcmFjdMOpcmlzdGlxdWVzIGRlIGxhIFBsYXRlZm9ybWUgw6AgdG91dCBtb21lbnQgZXRcclxuICAgICAgICAgICAgICAgIGNlbGEgc2FucyBwcsOpYXZpcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmsxM1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Ny4gU8OpY3VyaXTDqTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEtJVklEIHPigJllZmZvcmNlIGTigJlhc3N1cmVyIGxhIHPDqWN1cml0w6kgZGUgbGEgUGxhdGVmb3JtZVxyXG4gICAgICAgICAgICAgICAgY29uZm9ybcOpbWVudCBhdXggcsOoZ2xlcyBkZSBs4oCZYXJ0LiBM4oCZVXRpbGlzYXRldXIgZXN0IHRvdXRlZm9pc1xyXG4gICAgICAgICAgICAgICAgaW5mb3Jtw6kgZGVzIHJpc3F1ZXMgaW5ow6lyZW50cyBhdXggcsOpc2VhdXggZGUgY29tbXVuaWNhdGlvbnNcclxuICAgICAgICAgICAgICAgIMOpbGVjdHJvbmlxdWVzIGV0IG5vdGFtbWVudCBkZXMgcmlzcXVlcyBsacOpcyDDoCBs4oCZYWNoZW1pbmVtZW50IGRlXHJcbiAgICAgICAgICAgICAgICBkb25uw6llcyBzdXIgaW50ZXJuZXQuIFBsdXMgZ8OpbsOpcmFsZW1lbnQsIGlsIGluY29tYmUgw6BcclxuICAgICAgICAgICAgICAgIGzigJlVdGlsaXNhdGV1ciBkZSBkw6lwbG95ZXIgdG91dGVzIGxlcyBwcm90ZWN0aW9ucyB1c3VlbGxlc1xyXG4gICAgICAgICAgICAgICAgKHBhcmUtZmV1LCBhbnRpdmlydXMsIGV0Yy4pIGxpw6llcyDDoCBsYSBuYXZpZ2F0aW9uIGludGVybmV0LiBFblxyXG4gICAgICAgICAgICAgICAgY29uc8OpcXVlbmNlLCBLSVZJRCBuZSBmb3Vybml0IGF1Y3VuZSBnYXJhbnRpZSBlbiBsYSBtYXRpw6hyZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEVuIHRvdXRlIGh5cG90aMOoc2UsIGzigJlVdGlsaXNhdGV1ciBz4oCZYWJzdGllbnQgc3RyaWN0ZW1lbnQgZGVcclxuICAgICAgICAgICAgICAgIHRvdXRlIHRlbnRhdGl2ZSBk4oCZaW5nw6luaWVyaWUgaW52ZXJzZSBvdSBkZSBkw6ljb21waWxhdGlvbiBkZSB0b3V0XHJcbiAgICAgICAgICAgICAgICBvdSBwYXJ0aWUgZGUgbGEgUGxhdGVmb3JtZSwgZGUgdG91dGUgaW50cnVzaW9uIG91IHRlbnRhdGl2ZVxyXG4gICAgICAgICAgICAgICAgZOKAmWludHJ1c2lvbiBmcmF1ZHVsZXVzZSBhdSBzZWluIGR1IHN5c3TDqG1lIGTigJlpbmZvcm1hdGlvbnNcclxuICAgICAgICAgICAgICAgIGjDqWJlcmdlYW50IGxhIFBsYXRlZm9ybWUgYWluc2kgcXXigJlhdXggbG9naWNpZWxzIHBlcm1ldHRhbnQgc29uXHJcbiAgICAgICAgICAgICAgICBmb25jdGlvbm5lbWVudCwgZGUgdG91dCBhYnVzIGRlIGNvbmZpYW5jZSwgc291c3RyYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgc3VwcHJlc3Npb24sIGTDqXRvdXJuZW1lbnQgb3UgbW9kaWZpY2F0aW9uIG5vbiBhdXRvcmlzw6llIGRlc1xyXG4gICAgICAgICAgICAgICAgZG9ubsOpZXMgdGVjaG5pcXVlcyBkZSBsYSBQbGF0ZWZvcm1lLCBzb3VzIHBlaW5lIGRlIHBvdXJzdWl0ZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTRcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjguIE1hbnF1ZW1lbnRzIGRlIGzigJlVdGlsaXNhdGV1cjwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFRvdXQgbWFucXVlbWVudCBkZSBs4oCZVXRpbGlzYXRldXIgYXV4IHByw6lzZW50ZXMgQ29uZGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgZOKAmXV0aWxpc2F0aW9uIGVzdCBzdXNjZXB0aWJsZSBk4oCZZW50cmFpbmVyIHVuZSBzdXNwZW5zaW9uIG91IHVuZVxyXG4gICAgICAgICAgICAgICAgc3VwcHJlc3Npb24gZGUgc2VzIGFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lLCBldCBk4oCZZXhwb3NlciBsZShzKVxyXG4gICAgICAgICAgICAgICAgY29udHJldmVuYW50KHMpIMOgIGRlcyBwb3Vyc3VpdGVzIGp1ZGljaWFpcmVzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazE1XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz45LiBNb2RpZmljYXRpb24gZGVzIENvbmRpdGlvbnMgZOKAmXV0aWxpc2F0aW9uPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgVG91dCBjaGFuZ2VtZW50IHF1ZSBub3VzIGFwcG9ydGVyb25zIMOgIGzigJlhdmVuaXIgYXV4IHByw6lzZW50ZXNcclxuICAgICAgICAgICAgICAgIENvbmRpdGlvbnMgZOKAmXV0aWxpc2F0aW9uIHNlcmEgcHVibGnDqSBzdXIgY2V0dGUgcGFnZS5cclxuICAgICAgICAgICAgICAgIEwndXRpbGlzYXRldXIgcmVjb25uYcOudCBldCBhY2NlcHRlIGFwcHJvdXZlciB0YWNpdGVtZW50IHRvdXRcclxuICAgICAgICAgICAgICAgIGNoYW5nZW1lbnQgZGVzIHByw6lzZW50ZXMgQ29uZGl0aW9ucy4gS0lWSUQgaW5mb3JtZXJhXHJcbiAgICAgICAgICAgICAgICBs4oCZVXRpbGlzYXRldXIgcGFyIGVtYWlsIGR1IGNoYW5nZW1lbnQgZGVzIHByw6lzZW50ZXMgQ29uZGl0aW9ucy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmsxNlwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+MTAuIExvaSBhcHBsaWNhYmxlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgU2F1ZiBkaXNwb3NpdGlvbiBsw6lnYWxlIGNvbnRyYWlyZSBldCBpbXDDqXJhdGl2ZSwgdG91dGVcclxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdMOpLCByw6ljbGFtYXRpb24gb3UgbGl0aWdlIHByb3ZlbmFudCBvdSBsacOpKGUpIGF1eFxyXG4gICAgICAgICAgICAgICAgcHLDqXNlbnRlcyBDb25kaXRpb25zIGTigJl1dGlsaXNhdGlvbiBzZXJhIHLDqWdpKGUpIHNlbG9uIGxhIGxvaVxyXG4gICAgICAgICAgICAgICAgZnJhbsOnYWlzZS4gRW4gY2FzIGRlIGxpdGlnZSwgbGVzIHRyaWJ1bmF1eCBmcmFuw6dhaXMgc2Vyb250IHNldWxzXHJcbiAgICAgICAgICAgICAgICBjb21ww6l0ZW50cy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJja2l2aWRcIj5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Db25kaXRpb25zIGfDqW7DqXJhbGVzIGRlIHZlbnRlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+MS4gT2JqZXQ8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBMZXMgcHLDqXNlbnRlcyBjb25kaXRpb25zIGfDqW7DqXJhbGVzIGRlIHZlbnRlIChjaS1hcHLDqHMgwqsgQ0dWIMK7KVxyXG4gICAgICAgICAgICAgICAgb250IHBvdXIgb2JqZXQgZGUgZMOpZmluaXIgbGVzIG1vZGFsaXTDqXMgc2Vsb24gbGVzcXVlbGxlcyBLaXZpZFxyXG4gICAgICAgICAgICAgICAgZm91cm5pdCBhdSBDbGllbnQgdW4gYWNjw6hzIMOgIHNhIFBsYXRlZm9ybWUgZGUgcHLDqXZlbnRpb24gZXQgZGVcclxuICAgICAgICAgICAgICAgIHLDqcOpZHVjYXRpb24gZGVzIGJsZXNzdXJlcyBwaHlzaXF1ZXMuIEVuIGNsaXF1YW50IHN1ciDCqyBK4oCZYWNjZXB0ZVxyXG4gICAgICAgICAgICAgICAgbGVzIHByw6lzZW50ZXMgY29uZGl0aW9ucyBnw6luw6lyYWxlcyBkZSB2ZW50ZSDCuywgbGUgQ2xpZW50XHJcbiAgICAgICAgICAgICAgICByZWNvbm5hw650IGF2b2lyIHByaXMgY29ubmFpc3NhbmNlIGRlcyBDR1YgZXQgbGVzIGFjY2VwdGUgc2Fuc1xyXG4gICAgICAgICAgICAgICAgcsOpc2VydmUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMVwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Mi4gRMOpZmluaXRpb25zPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7CqyBLaXZpZCDCuzwvc3Ryb25nPiBzaWduaWZpZSBLaXZpZCwgU0FTIGF1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcGl0YWwgZGUgMS4wMDDigqwsIGltbWF0cmljdWzDqWUgYXUgUkNTIGRlIEx5b24gTcOpdHJvcG9sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VzIGxlIG51bcOpcm8gZG9taWNpbGnDqWUgODQgUnVlIENoZXZyZXVsLCA2OTAwNyBMWU9OIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsKrIExlIGNsaWVudCDCuzwvc3Ryb25nPiBkw6lzaWduZSBsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmVzc2lvbm5lbHMgZGUgbGEgcsOpw6lkdWNhdGlvbiBvdS9ldCBkdSBzcG9ydCA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7CqyBDb250ZW51KHMpIMK7PC9zdHJvbmc+IGTDqXNpZ25lIGzigJllbnNlbWJsZSBkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgw6lsw6ltZW50cyBzb3VzIHF1ZWxxdWUgZm9ybWUgcXVlIGNlIHNvaXQsIGRpc3BvbmlibGVzIHN1clxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZSBTaXRlIGV0IG5vdGFtbWVudCBsZXMgc8OpcmllcyBk4oCZZXhlcmNpY2VzIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHLDqcOpZHVjYXRpb24gcsOpYWxpc8OpZXMgcGFyIGxlIENsaWVudCDDoCBwYXJ0aXIgZGUgbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlibGlvdGjDqHF1ZSBkZSB2aWTDqW9zIHByb3Bvc8OpZXMgcGFyIEtpdmlkIHN1ciBsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lLiBMZSBDb250ZW51IHBldXQgw6p0cmUgZMOpZmluaSBwYXIgbGUgQ2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvdXIgY2hhY3VuIGRlcyBVdGlsaXNhdGV1cnMgZW4gZm9uY3Rpb24gZGUgc2VzIGJlc29pbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXQgZGUgc2VzIGNhcGFjaXTDqXMgO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wqsgQ29udHJhdCDCuzwvc3Ryb25nPiBkw6lzaWduZSBs4oCZZW5zZW1ibGUgZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0aXB1bGF0aW9ucyDDqW5vbmPDqWVzIGRhbnMgbGVzIHByw6lzZW50ZXMgQ29uZGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHw6luw6lyYWxlcyBkZSB2ZW50ZSAob3UgwqsgQ0dWIMK7KSwgw6l0YW50IHByw6ljaXPDqSBxdWUgbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHLDqWFtYnVsZSBldCBsZXMgYW5uZXhlcyBlbiBmb250IHBhcnRpZSBpbnTDqWdyYW50ZS4gTGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhcnRpZXMgcmVjb25uYWlzc2VudCBxdWUgbGUgQ29udHJhdCBlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3luYWxsYWdtYXRpcXVlLCBhzIAgdGl0cmUgb27DqXJldXgsIGHMgCBleMOpY3V0aW9uIHN1Y2Nlc3NpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wqsgRG9ubsOpZXMgwrs8L3N0cm9uZz4gZMOpc2lnbmUgKGkpIGxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbnMgcGVyc29ubmVsbGVzIGRlcyBDbGllbnRzIGV0IFV0aWxpc2F0ZXVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtZXR0YW50IGxldXIgaWRlbnRpZmljYXRpb24gYWluc2kgcXVlIChpaSkgbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9ucyByZWxhdGl2ZXMgw6AgbGEgbmF2aWdhdGlvbiBzdXIgbGUgU2l0ZSBldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBs4oCZYXBwbGljYXRpb24gbW9iaWxlIEtpdmlkwq4gc3VzY2VwdGlibGVzIGTigJnDqnRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnJlZ2lzdHLDqWVzIGRhbnMgZGVzIGZpY2hpZXJzIGRpdHMgwqsgY29va2llcyDCuyBvdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRpbHMgc2ltaWxhaXJlcywgbm90YW1tZW50IGxvcnMgZGUgbGEgc291c2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGTigJl1biBhYm9ubmVtZW50LCBkZSBsYSBuYXZpZ2F0aW9uIG91IGRlIGxhIGNyw6lhdGlvbiBk4oCZdW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHRlIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsKrIElkZW50aWZpYW50cyDCuzwvc3Ryb25nPiBkw6lzaWduZSB0YW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGzigJlpZGVudGlmaWFudCBwcm9wcmUgZHUgQ2xpZW50IGV0L291IGRlIGzigJlVdGlsaXNhdGV1clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAo4oCcbG9naW7igJ0pIHF1ZSBsZSBtb3QgZGUgcGFzc2UgZGUgY29ubmV4aW9uICjigJxwYXNzd29yZOKAnSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW11bmlxdcOpcyBhdSBtb21lbnQgZGUgbOKAmWluc2NyaXB0aW9uIHN1ciBsYSBQbGF0ZWZvcm1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsKrIExvZ2ljaWVsIMK7PC9zdHJvbmc+IGTDqXNpZ25lIHRvdXQgbG9naWNpZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91cm5pIHBhciBLaXZpZCBhdSBDbGllbnQgZXQvb3UgYXV4IFV0aWxpc2F0ZXVycyBldCBlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWN1bGllciBsZXMgU29sdXRpb25zIGFzc29jacOpZXMgO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wqsgUGxhdGVmb3JtZSDCuzwvc3Ryb25nPiBkw6lzaWduZSBsZSBzZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2XMgSBwYXIgS2l2aWQsIHBlcm1ldHRhbnQgbOKAmXV0aWxpc2F0aW9uIGRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTb2x1dGlvbnMgcGFyIGxlIENsaWVudCA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7CqyBTZXJ2aWNlKHMpIMK7PC9zdHJvbmc+IGTDqXNpZ25lIGxhIHNvdXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDDoCBsYSBQbGF0ZWZvcm1lIGV0IHNlcyBmb25jdGlvbm5hbGl0w6lzIHRlbCBxdWUgZMOpZmluaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5zIGxlcyBwcsOpc2VudGVzIENHVi4gTGVzIHByZXN0YXRpb25zIGNvbXByaXNlcyBkYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlIFNlcnZpY2UgZm9ybWVudCB1biB0b3V0IGluZGl2aXNpYmxlLiBMYSBsaXN0ZSBkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc3RhdGlvbnMgY29tcG9zYW50IGxlIFNlcnZpY2UsIGF2ZWMgbGVzIG5pdmVhdXggZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZSBldCBsYSBsaXN0ZSBkZXMgZm9uY3Rpb25uYWxpdMOpcyBkZSBsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lLCBkw6ljcml2ZW50IGxlcyBxdWFsaXTDqXMgZXNzZW50aWVsbGVzIGR1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2UgcmVuZHUgcGFyIEtpdmlkIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsKrIFNpdGUgwrs8L3N0cm9uZz4gZMOpc2lnbmUgbGUgc2l0ZSBpbnRlcm5ldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPnd3dy5raXZpZC5mcjwvYT4gO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wqsgU29sdXRpb25zIMK7PC9zdHJvbmc+IGTDqXNpZ25lIGxlcyBmb25jdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3DDqXJhdGlvbm5lbGxlcyBkZXMgc2VydmljZXMgcHJvcG9zw6llcyBlbiBtb2RlIMKrIGjDqWJlcmfDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDCuyBldCBhZGFwdMOpZXMgc3DDqWNpZmlxdWVtZW50IGHMgCBjZSBtb2RlIGRlIGZvbmN0aW9ubmVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsKrIFV0aWxpc2F0ZXVyIMK7PC9zdHJvbmc+IGTDqXNpZ25lIGxlIGNsaWVudCBkdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQgYsOpbsOpZmljaWFudCBk4oCZdW4gYWNjw6hzIGF1eCBTZXJ2aWNlcyBhcHBsaWNhdGlmc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXIgc29uIG9yZGluYXRldXIsIHRhYmxldHRlIG91IHNtYXJ0cGhvbmUgZW4gdmVydHUgZHVcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udHJhdCBjb25jbHUgcGFyIGxlIENsaWVudCA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMlwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+My4gQ29uZGl0aW9ucyBs4oCZdXRpbGlzYXRpb24gZGUgbGEgUGxhdGVmb3JtZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmszXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+PHN0cm9uZz5hLiBJbmZvcm1hdGlvbnMgcHLDqWFsYWJsZXM8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaS4gS2l2aWQgYSBtaXMgZW4gcGxhY2UgZGVzIG1lc3VyZXMgZGUgc8OpY3VyaXNhdGlvbiBkZSBs4oCZYWNjw6hzIGHMgFxyXG4gICAgICAgICAgICAgICAgbGEgUGxhdGVmb3JtZSwgc2Vsb24gdW5lIG9ibGlnYXRpb24gZGUgbW95ZW5zLiBDZXBlbmRhbnQsIEtpdmlkXHJcbiAgICAgICAgICAgICAgICByYXBwZWxsZSBhdSBDbGllbnQgcXVlIDpcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEzigJl1dGlsaXNhdGlvbiBk4oCZSW50ZXJuZXQgcGV1dCBmYWlyZSBs4oCZb2JqZXQgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZMOpdG91cm5lbWVudHMgZOKAmWludHJ1c2lvbiBmcmF1ZHVsZXVzZSwgbWFsdmVpbGxhbnRlIG91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbiBhdXRvcmlzw6llIGRhbnMgbGUgc3lzdMOobWUgZOKAmWluZm9ybWF0aW9uIGR1IENsaWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGUgcGlyYXRhZ2UsIGTigJlhbHTDqXJhdGlvbiBvdSBk4oCZZXh0cmFjdGlvbiBub24gYXV0b3Jpc8OpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZSBkb25uw6llcywgZGUgbW9kaWZpY2F0aW9ucywgYWx0w6lyYXRpb25zIG1hbHZlaWxsYW50ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGUgcHJvZ3JhbW1lcyBvdSBmaWNoaWVycyBvdSBkZSBjb250YW1pbmF0aW9uIHBhciBkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlydXMgaW5mb3JtYXRpcXVlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhIGNvbW11bmljYXRpb24gZGUgbW90cyBkZSBwYXNzZSwgY29kZXMgY29uZmlkZW50aWVscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXQgcGx1cyBnw6luw6lyYWxlbWVudCwgZGUgdG91dGUgaW5mb3JtYXRpb24gYcyAIGNhcmFjdMOocmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vuc2libGUgZXN0IGVmZmVjdHXDqWUgcGFyIGxlIENsaWVudCBhzIAgc2VzIHJpc3F1ZXMgZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcMOpcmlscy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFBhciBjb25zw6lxdWVudCwgaWwgaW5jb21iZSBhdSBDbGllbnQgZGUgcHJlbmRyZSB0b3V0ZXMgbGVzXHJcbiAgICAgICAgICAgICAgICBtZXN1cmVzIGFwcHJvcHJpw6llcyBkZSBmYcOnb24gYcyAIHByb3TDqWdlciBzZXMgcHJvcHJlcyBkb25uw6llc1xyXG4gICAgICAgICAgICAgICAgZXQvb3UgbG9naWNpZWxzIHN0b2Nrw6lzIHN1ciBzZXMgc2VydmV1cnMgZGUgbGEgY29udGFtaW5hdGlvbiBwYXJcclxuICAgICAgICAgICAgICAgIGRlcyB2aXJ1cyBjb21tZSBkZSB0ZW50YXRpdmVzIGTigJlpbnRydXNpb24gZGFucyBzb24gc3lzdMOobWVcclxuICAgICAgICAgICAgICAgIGluZm9ybWF0aXF1ZSBwYXIgZGVzIHRpZXJzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaWkuIExlIENsaWVudCByZW5vbmNlIGTDqHMgbG9ycyBhzIAgZW5nYWdlciBsYSByZXNwb25zYWJpbGl0w6kgZGVcclxuICAgICAgICAgICAgICAgIEtpdmlkIGNvbmNlcm5hbnQgdW4gb3UgcGx1c2lldXJzIGRlcyBmYWl0cyBvdSDDqXbDqG5lbWVudHNcclxuICAgICAgICAgICAgICAgIG1lbnRpb25uw6lzIMOgIGzigJlhcnRpY2xlIDMuMS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGlpaS4gTOKAmWFjY8OocyBhdXggU29sdXRpb25zIG5lIHBldXQgc+KAmWVmZmVjdHVlciBxdeKAmWF1IHRyYXZlcnMgZHVcclxuICAgICAgICAgICAgICAgIHLDqXNlYXUgSW50ZXJuZXQgZXQgZOKAmXVuIG5hdmlnYXRldXIgd2ViIDogR29vZ2xlIENocm9tZSBzdXJcclxuICAgICAgICAgICAgICAgIGVudmlyb25uZW1lbnQgUEMgb3UgQW5kcm9pZCBldCBTYWZhcmkgc3VyIGVudmlyb25uZW1lbnQgTUFDIG91XHJcbiAgICAgICAgICAgICAgICBpT1Mgc29udCBwcsOpY29uaXPDqXMgcGFyIEtpdmlkIHBvdXIgdW5lIGV4cMOpcmllbmNlIG9wdGltYWxlIGRlIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazRcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dVxyXG4gICAgICAgICAgICAgICAgICAgID48c3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5iLiBSZXN0cmljdGlvbnMgZOKAmXV0aWxpc2F0aW9uIGRlIGxhIFBsYXRlZm9ybWU8L3N0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgID48L3VcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBpLiBLaXZpZCBjb25jw6hkZSBhdSBDbGllbnQgdW4gZHJvaXQgcGVyc29ubmVsIGV0IG5vblxyXG4gICAgICAgICAgICAgICAgdHJhbnNmw6lyYWJsZSBk4oCZdXRpbGlzZXIgbGEgUGxhdGVmb3JtZSwgZGFucyBsZSBtb25kZSBlbnRpZXJcclxuICAgICAgICAgICAgICAgIHBlbmRhbnQgdG91dGUgbGEgZHVyw6llIGR1IENvbnRyYXQsIGRlIG1hbmnDqHJlIG5vbiBleGNsdXNpdmUuIENlXHJcbiAgICAgICAgICAgICAgICBkcm9pdCBk4oCZdXRpbGlzYXRpb24gbmUgcGV1dCBmYWlyZSBs4oCZb2JqZXQgZOKAmXVuZSBzb3VzLWxpY2VuY2UsXHJcbiAgICAgICAgICAgICAgICBk4oCZdW5lIGNlc3Npb24sIGTigJl1biB0cmFuc2ZlcnQgb3UgZOKAmXVuZSBtaXNlIGHMgCBkaXNwb3NpdGlvbiBk4oCZdW5cclxuICAgICAgICAgICAgICAgIHRpZXJzLCB5IGNvbXByaXMgYXUgc2VpbiBk4oCZdW4gbcOqbWUgw6l0YWJsaXNzZW1lbnQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+aWkuIExhIFBsYXRlZm9ybWUgcGV1dCDDqnRyZSB1dGlsaXPDqWUgOjwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAoaSkgZW4gYWNjw6hzIGRpc3RhbnQgZ3LDomNlIGHMgCBJbnRlcm5ldCwgZGFucyBsZSByZXNwZWN0IGRlc1xyXG4gICAgICAgICAgICAgICAgcsOoZ2xlcyBk4oCZaWRlbnRpZmljYXRpb24gZXQgZOKAmWFmZmVjdGF0aW9uIGRlcyBJZGVudGlmaWFudHMgZHVcclxuICAgICAgICAgICAgICAgIENsaWVudCBxdWkgc2V1bCBkw6ljaWRlIGRlcyBVdGlsaXNhdGV1cnMgcXUnaWwgYXV0b3Jpc2UgYcyAXHJcbiAgICAgICAgICAgICAgICB1dGlsaXNlciBsZSBTZXJ2aWNlIDtcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIChpaSkgcG91ciBsZSB0cmFpdGVtZW50IGRlcyBkb25uw6llcyBkZXMgVXRpbGlzYXRldXJzIHBhciBsZVxyXG4gICAgICAgICAgICAgICAgQ2xpZW50IGRhbnMgbGVzIGNvbmRpdGlvbnMgbGltaXRhdGl2ZW1lbnQgZMOpZmluaWVzIGRhbnMgbGVcclxuICAgICAgICAgICAgICAgIENvbnRyYXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBpaWkuIExhIFBsYXRlZm9ybWUgZXN0IGxhIHByb3ByacOpdMOpIGRlIEtpdmlkLCBsZSBDbGllbnRcclxuICAgICAgICAgICAgICAgIHPigJlpbnRlcmRpdCA6XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZSBjb3BpZXIgb3UgZGUgcmVwcm9kdWlyZSwgZGUgcmVwcsOpc2VudGVyLCBtb2RpZmllcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNtZXR0cmUsIHB1YmxpZXIsIGFkYXB0ZXIgdG91dCBvdSBwYXJ0aWUgZGUgbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVmb3JtZSBwYXIgbuKAmWltcG9ydGUgcXVlbCBtb3llbiBldCBzb3VzIG7igJlpbXBvcnRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZWxsZSBmb3JtZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgROKAmXV0aWxpc2VyIGxhIFBsYXRlZm9ybWUgbm9uIGNvbmZvcm3DqW1lbnQgYXV4IHLDqGdsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZOKAmXV0aWxpc2F0aW9uIGRlIGxhIFBsYXRlZm9ybWUgO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlIHRyYWR1aXJlIG91IGRlIHRyYW5zY3JpcmUgZGFucyB0b3V0IGF1dHJlIGxhbmdhZ2Ugb3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VlLCBvdSBkZSBs4oCZYWRhcHRlciBvdSBkZSBsdWkgYWRqb2luZHJlIHRvdXQgb2JqZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uIGNvbmZvcm1lIGHMgCBzYSBzcMOpY2lmaWNhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGl2LiBUb3V0IG1hbnF1ZW1lbnQgYXV4IGRpc3Bvc2l0aW9ucyBkdSBwcsOpc2VudCBhcnRpY2xlIGVudHJhw65uZVxyXG4gICAgICAgICAgICAgICAgbGUgZHJvaXQgcG91ciBLaXZpZCBkZSBzdXNwZW5kcmUgbOKAmWFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lIGRhbnNcclxuICAgICAgICAgICAgICAgIGxlcyBjb25kaXRpb25zIGRlIGwnYXJ0aWNsZSBcIlLDiVNJTElBVElPTlwiLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazVcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dVxyXG4gICAgICAgICAgICAgICAgICAgID48c3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5jLiBDb25kaXRpb25zIGTigJlhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSBwYXIgbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgICAgICA+PC91XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaS4gTG9ycyBkZSBsYSBwcmVtacOocmUgdXRpbGlzYXRpb24gZGUgbGEgcGxhdGVmb3JtZSwgbGVcclxuICAgICAgICAgICAgICAgIHByYXRpY2llbiBjb21wbMOodGUgdW4gZm9ybXVsYWlyZSBlbiBsaWduZSBk4oCZaW5zY3JpcHRpb24gZW5cclxuICAgICAgICAgICAgICAgIHNhaXNpc3NhbnQgdW4gZW1haWwgZXQgdW4gbW90IGRlIHBhc3NlLiBVbmUgZm9pcyBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgICAgICAgICBzb3VtaXMsIHVuIGVtYWlsIGRlIHZhbGlkYXRpb24gZXN0IGVudm95w6kgw6AgbOKAmWFkcmVzc2UgZS1tYWlsXHJcbiAgICAgICAgICAgICAgICBzYWlzaWUgcGFyIGxlIHByYXRpY2llbiBs4oCZaW52aXRhbnQgw6AgdmFsaWRlciBzb24gY29tcHRlIGVuXHJcbiAgICAgICAgICAgICAgICBjbGlxdWFudCBzdXIgdW4gbGllbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms2XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZC4gQ29uZGl0aW9ucyBk4oCZb3V2ZXJ0dXJlIGRlIGRyb2l0cyBk4oCZYWNjw6hzIGF1eFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlsaXNhdGV1cnNcclxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvdT5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBpLiBMZSBDbGllbnQgZXN0IHJlc3BvbnNhYmxlIGRlIGxhIGTDqXNpZ25hdGlvbiBkZXMgVXRpbGlzYXRldXJzXHJcbiAgICAgICAgICAgICAgICBwYXJtaSBzZXMgcHJvcHJlcyBjbGllbnRzLiBBcHLDqHMgbGV1ciBhdm9pciBwcsOpc2VudMOpIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lIGV0IHNlcyBjb25kaXRpb25zIGTigJl1dGlsaXNhdGlvbnMsIGxlIENsaWVudCByZW5zZWlnbmVcclxuICAgICAgICAgICAgICAgIGxlcyBpbmZvcm1hdGlvbnMgZGVzIG5vdXZlYXV4IFV0aWxpc2F0ZXVycyBhZmluIHF1ZSBLaXZpZCBwdWlzc2VcclxuICAgICAgICAgICAgICAgIGludml0ZXIgbGVzIHV0aWxpc2F0ZXVycyDDoCBjcsOpZXIgbGV1cnMgaWRlbnRpZmlhbnRzIGRlIGNvbm5leGlvblxyXG4gICAgICAgICAgICAgICAgZXQgY29tcHRlcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGlpLiBMZXMgVXRpbGlzYXRldXJzIHNvbnQgZGVzIHBlcnNvbm5lcyBwaHlzaXF1ZXMuIENoYXF1ZVxyXG4gICAgICAgICAgICAgICAgVXRpbGlzYXRldXIgZGlzcG9zZSBkZSBzb24gcHJvcHJlIGFjY8Oocy4gSWwgbHVpIGVzdCBpbnRlcmRpdCBkZVxyXG4gICAgICAgICAgICAgICAgcGVybWV0dHJlIGHMgCB1biB0aWVycyBk4oCZdXRpbGlzZXIgc29uIGNvbXB0ZSBvdSBk4oCZw6ljaGFuZ2VyIHNvblxyXG4gICAgICAgICAgICAgICAgYWNjw6hzIGF2ZWMgY2VsdWkgZOKAmXVuIGF1dHJlIHV0aWxpc2F0ZXVyLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaWlpLiBQb3VyIGLDqW7DqWZpY2llciBkZXMgU2VydmljZXMsIGzigJl1dGlsaXNhdGV1ciBkZXZyYSBz4oCZw6p0cmVcclxuICAgICAgICAgICAgICAgIHByw6lhbGFibGVtZW50IGFjcXVpdHTDqSBkZSBsYSBSZWRldmFuY2UgZMOpZmluaWUgZGUgbOKAmWFib25uZW1lbnQgw6BcclxuICAgICAgICAgICAgICAgIEtJVklELlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazdcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjQuIFJlc3BvbnNhYmlsaXTDqTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms4XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+PHN0cm9uZz5hLiBEaXNwb3NpdGlvbnMgZ8OpbsOpcmFsZXM8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgQ2hhY3VuZSBkZXMgUGFydGllcyBhc3N1bWUgbGEgcmVzcG9uc2FiaWxpdMOpIGRlcyBjb25zw6lxdWVuY2VzXHJcbiAgICAgICAgICAgICAgICByw6lzdWx0YW50IGRlIHNlcyBmYXV0ZXMsIGVycmV1cnMgb3Ugb21pc3Npb25zLCBhaW5zaSBxdWUgZGVzXHJcbiAgICAgICAgICAgICAgICBmYXV0ZXMsIGVycmV1cnMgb3Ugb21pc3Npb25zIGRlIHNlcyBzb3VzLXRyYWl0YW50cyDDqXZlbnR1ZWxzIGV0XHJcbiAgICAgICAgICAgICAgICBjYXVzYW50IHVuIGRvbW1hZ2UgZGlyZWN0IMOgIGwnYXV0cmUgUGFydGllLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazlcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dT48c3Ryb25nPmIuIFJlc3BvbnNhYmlsaXTDqSBk4oCZS2l2aWQ8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaS4gS2l2aWQgbmUgcG91cnJhLCBlbiBhdWN1biBjYXMsIHZvaXIgc2EgcmVzcG9uc2FiaWxpdMOpIGVuZ2Fnw6llXHJcbiAgICAgICAgICAgICAgICBkdSBmYWl0IGRlIGzigJl1dGlsaXNhdGlvbiBkZSBsYSBQbGF0ZWZvcm1lIHBhciB1biBVdGlsaXNhdGV1ciBldFxyXG4gICAgICAgICAgICAgICAgbm90YW1tZW50IGRhbnMgbGUgY2FzIG/DuSB1biBVdGlsaXNhdGV1ciBzZSB2ZXJyYWl0IGF0dHJpYnVlciBwYXJcclxuICAgICAgICAgICAgICAgIGxlIENsaWVudCBkZXMgZXhlcmNpY2VzIG5vbiBhZGFwdMOpcyDDoCBzZXMgY2FwYWNpdMOpcyBwaHlzaXF1ZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBpaS4gRW4gY2FzIGRlIGZhdXRlIHByb3V2w6llIHBhciBsZSBDbGllbnQsIEtpdmlkIG5lIHNlcmEgdGVudWVcclxuICAgICAgICAgICAgICAgIHF1ZSBkZSBsYSByw6lwYXJhdGlvbiBkZXMgY29uc8OpcXVlbmNlcyBww6ljdW5pYWlyZXMgZGVzIGRvbW1hZ2VzXHJcbiAgICAgICAgICAgICAgICBkaXJlY3RzIGV0IHByw6l2aXNpYmxlcyBkdSBmYWl0IGRlIGzigJl1dGlsaXNhdGlvbiBkZSBsYVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZS4gRW4gY29uc8OpcXVlbmNlLCBLaXZpZCBuZSBwb3VycmEgZW4gYXVjdW5lXHJcbiAgICAgICAgICAgICAgICBjaXJjb25zdGFuY2UgZW5jb3VyaXIgZGUgcmVzcG9uc2FiaWxpdMOpIGF1IHRpdHJlIGRlcyBwZXJ0ZXMgb3VcclxuICAgICAgICAgICAgICAgIGRvbW1hZ2VzIGluZGlyZWN0cyBvdSBpbXByw6l2aXNpYmxlcyBkdSBDbGllbnQgb3UgZGVzIHRpZXJzLCBjZVxyXG4gICAgICAgICAgICAgICAgcXVpIGluY2x1dCBub3RhbW1lbnQgdG91dCBnYWluIG1hbnF1w6ksIHBlcnRlLCBpbmV4YWN0aXR1ZGUgb3VcclxuICAgICAgICAgICAgICAgIGNvcnJ1cHRpb24gZGUgZmljaGllcnMgb3UgZGUgZG9ubsOpZXMsIHByw6lqdWRpY2UgY29tbWVyY2lhbCxcclxuICAgICAgICAgICAgICAgIHBlcnRlIGRlIGNoaWZmcmUgZCdhZmZhaXJlcyBvdSBkZSBiw6luw6lmaWNlLCBwZXJ0ZSBkZSBjbGllbnTDqGxlLFxyXG4gICAgICAgICAgICAgICAgcGVydGUgZCd1bmUgY2hhbmNlLCBjb8O7dCBkZSBs4oCZb2J0ZW50aW9uIGTigJl1biBwcm9kdWl0LCBk4oCZdW5cclxuICAgICAgICAgICAgICAgIHNlcnZpY2Ugb3UgZGUgdGVjaG5vbG9naWUgZGUgc3Vic3RpdHV0aW9uLCBlbiByZWxhdGlvbiBvdVxyXG4gICAgICAgICAgICAgICAgcHJvdmVuYW50IGRlIGzigJlpbmV4w6ljdXRpb24gb3UgZGUgbOKAmWV4w6ljdXRpb24gZmF1dGl2ZSBkZXNcclxuICAgICAgICAgICAgICAgIHByZXN0YXRpb25zLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaWlpLiBEYW5zIHRvdXMgbGVzIGNhcywgbGUgbW9udGFudCBkZSBsYSByZXNwb25zYWJpbGl0w6kgZGUgS2l2aWRcclxuICAgICAgICAgICAgICAgIGVzdCBzdHJpY3RlbWVudCBsaW1pdMOpIGF1IHJlbWJvdXJzZW1lbnQgZHUgbW9udGFudCBkZXMgc29tbWVzXHJcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVtZW50IHBhecOpZXMgcGFyIGxlIENsaWVudCDDoCBsYSBkYXRlIGRlIHN1cnZlbmFuY2UgZHVcclxuICAgICAgICAgICAgICAgIGZhaXQgZ8OpbsOpcmF0ZXVyIGRlIHJlc3BvbnNhYmlsaXTDqS4gS2l2aWQgbmUgc2F1cmFpdCwgZW4gb3V0cmUsXHJcbiAgICAgICAgICAgICAgICDDqnRyZSB0ZW51IHJlc3BvbnNhYmxlIGRlIGxhIGRlc3RydWN0aW9uIGFjY2lkZW50ZWxsZSBkZXMgZG9ubsOpZXNcclxuICAgICAgICAgICAgICAgIHBhciBsZSBDbGllbnQgb3UgdW4gdGllcnMgYXlhbnQgYWNjw6lkw6kgYXV4IFNlcnZpY2VzIGFwcGxpY2F0aWZzXHJcbiAgICAgICAgICAgICAgICBhdSBtb3llbiBkZXMgSWRlbnRpZmlhbnRzIHJlbWlzIGF1IENsaWVudC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms5XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+PHN0cm9uZz5jLiBSZXNwb25zYWJpbGl0w6kgZHUgQ2xpZW50PC9zdHJvbmc+PC91PlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGkuIEVuIHRhbnQgcXVlIHByb2Zlc3Npb25uZWwgZGUgbGEgcsOpw6lkdWNhdGlvbiBldC9vdSBkdSBzcG9ydCxcclxuICAgICAgICAgICAgICAgIGxlIENsaWVudCBlc3QgZW50acOocmVtZW50IHJlc3BvbnNhYmxlIGRlIHRvdXRlIGNyw6lhdGlvbixcclxuICAgICAgICAgICAgICAgIHRyYW5zbWlzc2lvbiBvdSBwdWJsaWNhdGlvbiBkZSBDb250ZW51IGF1IG1veWVuIGRlIGxhIFBsYXRlZm9ybWVcclxuICAgICAgICAgICAgICAgIGV0IGVuIHBhcnRpY3VsaWVyIGRlIGxhIGTDqWZpbml0aW9uIGRlcyBleGVyY2ljZXMgZGUgcsOpw6lkdWNhdGlvblxyXG4gICAgICAgICAgICAgICAgcHJvcG9zw6lzIGF1eCBVdGlsaXNhdGV1cnMgc3VyIGxhIFBsYXRlZm9ybWUsIGVuIGZvbmN0aW9uIGRlXHJcbiAgICAgICAgICAgICAgICBsZXVycyBiZXNvaW5zIGV0IGRlIGxldXJzIGNhcGFjaXTDqXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBpaS4gTGUgQ2xpZW50IGFzc3VtZSBs4oCZZW50acOocmUgcmVzcG9uc2FiaWxpdMOpIHF1YW50IGF1eFxyXG4gICAgICAgICAgICAgICAgY29uc8OpcXVlbmNlcyBkaXJlY3RlcyBldC9vdSBpbmRpcmVjdGVzIGRlIGzigJl1dGlsaXNhdGlvbiBkZVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZSBldCBub3RhbW1lbnQgZGUgbGEgY3LDqWF0aW9uIGRlIENvbnRlbnVzLiBMZXMgZXhlbXBsZXNcclxuICAgICAgICAgICAgICAgIGRlIENvbnRlbnVzIGV0IMOpdmVudHVlbHMgY29uc2VpbHMgZGUgS2l2aWQgZG9pdmVudCDDqnRyZVxyXG4gICAgICAgICAgICAgICAgY29uc2lkw6lyw6lzIHVuaXF1ZW1lbnQgY29tbWUgZGVzIG9waW5pb25zLCBsZSBDbGllbnQgcmVzdGFudCBzZXVsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zYWJsZSBkZSBsYSBjcsOpYXRpb24gZGVzIENvbnRlbnVzIMOgIGRlc3RpbmF0aW9uIGRlc1xyXG4gICAgICAgICAgICAgICAgVXRpbGlzYXRldXJzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaXYuIExlIENsaWVudCBlc3QgdGVudSBkZSBwcmVuZHJlIHRvdXRlcyBsZXMgbWVzdXJlcyBhZmluIGRlXHJcbiAgICAgICAgICAgICAgICBz4oCZYXNzdXJlciBxdWUgbGVzIENvbnRlbnVzIGNyw6nDqXMgc3VyIGxhIFBsYXRlZm9ybWUgcG91ciBsZXNcclxuICAgICAgICAgICAgICAgIFV0aWxpc2F0ZXVycyBzb250IGNvbmZvcm1lcyDDoCBs4oCZw6l0YXQgZGVzIGNvbm5haXNzYW5jZXMgZW5cclxuICAgICAgICAgICAgICAgIG1hdGnDqHJlIGRlIHLDqcOpZHVjYXRpb24gcGh5c2lxdWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTBcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjUuIERpc3BvbmliaWxpdMOpIGR1IFNlcnZpY2U8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBhLiBLaXZpZCBmZXJhIHRvdXQgc29uIHBvc3NpYmxlIHBvdXIgcXVlIGxhIFBsYXRlZm9ybWUgc29pdFxyXG4gICAgICAgICAgICAgICAgYWNjZXNzaWJsZSBzZWxvbiB1bmUgb2JsaWdhdGlvbiBkZSBtb3llbnMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBiLiBMZSBDbGllbnQgcmVjb25uYcOudCBxdWUgS2l2aWQgbmUgcG91cnJhIGVuIGF1Y3VuIGNhcyDDqnRyZVxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2FibGUgZGVzIMOpdmVudHVlbGxlcyBpbnRlcnJ1cHRpb25zIGRlIGZvbmN0aW9ubmVtZW50XHJcbiAgICAgICAgICAgICAgICBk4oCZSW50ZXJuZXQuIEtpdmlkIHNlIHLDqXNlcnZlIMOpZ2FsZW1lbnQgbGUgZHJvaXQgZOKAmWludGVycm9tcHJlXHJcbiAgICAgICAgICAgICAgICBs4oCZYWNjw6hzIMOgIGxhIFBsYXRlZm9ybWUgZW4gcmFpc29uIGTigJlvcMOpcmF0aW9ucyBkZSBtYWludGVuYW5jZS5cclxuICAgICAgICAgICAgICAgIERhbnMgY2UgY2FzLCBLaXZpZCBlbiBpbmZvcm1lcmEgbGUgQ2xpZW50IHBhciBjb3VycmllbCBhdSBtb2luc1xyXG4gICAgICAgICAgICAgICAgdmluZ3QtcXVhdHJlICgyNCkgaGV1cmVzIGF2YW50LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazExXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz42LiBNYWludGVuYW5jZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGEuIFRvdXRlcyBsZXMgaW50ZXJ2ZW50aW9ucyBz4oCZZWZmZWN0dWVudCBhzIAgZGlzdGFuY2UsIHNhbnNcclxuICAgICAgICAgICAgICAgIGludGVydmVudGlvbiBzdXIgc2l0ZSwgYXV4IGpvdXJzIGV0IGhldXJlcyBzdWl2YW50cyA6XHJcbiAgICAgICAgICAgICAgICBMdW5kaS1WZW5kcmVkaSBkZSA4aCDDoCAxMmggZXQgZGUgMTRoIMOgIDE3aCAoR01UKzEpLCBleGNlcHRlzIEgbGVzXHJcbiAgICAgICAgICAgICAgICBqb3VycyBmw6lyacOpcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGIuIExlIENsaWVudCBwZXV0IGZvcm11bGVyIHNlcyBxdWVzdGlvbnMgZXQgZGVtYW5kZXNcclxuICAgICAgICAgICAgICAgIGTigJlpbnRlcnZlbnRpb25zIHBhciBlbWFpbCDDoCBs4oCZYWRyZXNzZVxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGtpdmlkLmZyXCI+Y29udGFjdEBraXZpZC5mcjwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmsxMVwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Ny4gQWJvbm5lbWVudCAtIEZhY3R1cmF0aW9uIC0gUsOoZ2xlbWVudDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIExlcyBwcsOpc2VudGVzIGNvbmRpdGlvbnMgZ8OpbsOpcmFsZXMgc+KAmWFwcGxpcXVlbnQgw6AgbOKAmWVuc2VtYmxlIGRlc1xyXG4gICAgICAgICAgICAgICAgZm9ybXVsZXMgZOKAmWFib25uZW1lbnRzIHByb3Bvc8OpZXMgcGFyIEtpdmlkLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgVW5lIGNvbmZpcm1hdGlvbiBk4oCZYWJvbm5lbWVudCBzZXJhIGFkcmVzc8OpZSDDoCBs4oCZdXRpbGlzYXRldXIgcGFyXHJcbiAgICAgICAgICAgICAgICByZXRvdXIgw6AgbOKAmWFkcmVzc2UgZS1tYWlsIHJlbnNlaWduw6llLCByZXByZW5hbnQgbGVzIGluZm9ybWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgY29udHJhY3R1ZWxsZXMsIG5vdGFtbWVudCBsZSBtb250YW50IGV4YWN0IGZhY3R1csOpIGV0IGxlc1xyXG4gICAgICAgICAgICAgICAgbW9kYWxpdMOpcyBkZSBs4oCZb2ZmcmUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBs4oCZdXRpbGlzYXRldXIgcmVjb25uYcOudCBxdWUgbGVzIGRvbm7DqWVzIGVucmVnaXN0csOpZXMgc3VyIGxlIFNpdGVcclxuICAgICAgICAgICAgICAgIGNvbnN0aXR1ZW50IGxhIHByZXV2ZSBkZSBsYSB0cmFuc2FjdGlvbiAodHlwZSBk4oCZYWJvbm5lbWVudCBldFxyXG4gICAgICAgICAgICAgICAgZGF0ZSBkZSBzb3VzY3JpcHRpb24pLCBldCBsZXMgZG9ubsOpZXMgZW5yZWdpc3Ryw6llcyBwYXIgbGVcclxuICAgICAgICAgICAgICAgIHN5c3TDqG1lIGRlIHBhaWVtZW50IGNvbnN0aXR1ZW50IGxhIHByZXV2ZSBkZSBsYSB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgZmluYW5jacOocmUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBM4oCZYWNjZXB0YXRpb24gZGVzIGNvb2tpZXMgZXN0IGluZGlzcGVuc2FibGUgcG91ciB0b3V0IGFjaGF0IG91XHJcbiAgICAgICAgICAgICAgICBhYm9ubmVtZW50IHN1ciBsZSBTaXRlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMyBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazEyXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+PHN0cm9uZz5hLiBPZmZyZXMgZOKAmWFib25uZW1lbnQ8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGVzIHByaW5jaXBhbGVzIG9mZnJlcyBzb250IGxlcyBzdWl2YW50ZXMsIMOpdGFudCBwcsOpY2lzw6kgcXVlXHJcbiAgICAgICAgICAgICAgICBLaXZpZCBzZSByw6lzZXJ2ZSBsYSBmYWN1bHTDqSwgw6AgdG91dCBtb21lbnQsIGTigJlhbcOpbmFnZXIgY2VzXHJcbiAgICAgICAgICAgICAgICBvZmZyZXMsIGFpbnNpIHF1ZSBkZSBwcm9wb3NlciBkZXMgb2ZmcmVzIHByb21vdGlvbm5lbGxlc1xyXG4gICAgICAgICAgICAgICAgcG9uY3R1ZWxsZXMgc3VyIGxlIFNpdGUgOlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHU+aS4gQWJvbm5lbWVudCBtZW5zdWVsPC91PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgVW4gYWJvbm5lbWVudCBzYW5zIGVuZ2FnZW1lbnQgZOKAmXVuZSBkdXLDqWUgZOKAmXVuIG1vaXMgw6AgY29tcHRlciBkdVxyXG4gICAgICAgICAgICAgICAgcGFpZW1lbnQgZHUgcHJpeCBldCByZWNvbmR1Y3RpYmxlIG1lbnN1ZWxsZW1lbnQuIFVuZSBmYWN0dXJlXHJcbiAgICAgICAgICAgICAgICBzZXJhIGFkcmVzc8OpZSDDoCBs4oCZdXRpbGlzYXRldXIgw6AgbOKAmW9jY2FzaW9uIGRlIGxhIHNvdXNjcmlwdGlvbiBkZVxyXG4gICAgICAgICAgICAgICAgbOKAmWFib25uZW1lbnQgbWVuc3VlbCDDoCBsYSBQbGF0ZWZvcm1lIHB1aXMgdG91cyBsZXMgbW9pcyBhdmVjXHJcbiAgICAgICAgICAgICAgICByZWNvbmR1Y3Rpb24gYXV0b21hdGlxdWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgzIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTNcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dT48c3Ryb25nPmIuIENvbmRpdGlvbnMgZGUgcGFpZW1lbnQ8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGEgVFZBIGV0IHRvdXMgYXV0cmVzIGltcMO0dHMgZXQgdGF4ZXMgYXBwbGljYWJsZXMgYXUgbW9tZW50IGRlXHJcbiAgICAgICAgICAgICAgICBsYSBmYWN0dXJhdGlvbiBzb250IMOgIGxhIGNoYXJnZSBkZSBs4oCZdXRpbGlzYXRldXIuIExlcyBmYWN0dXJlc1xyXG4gICAgICAgICAgICAgICAgc29udCBwYXlhYmxlcyBhdXByw6hzIGRlIEtpdmlkIMOgIHLDqWNlcHRpb24gb3UgY29uZm9ybcOpbWVudCBhdVxyXG4gICAgICAgICAgICAgICAgZMOpbGFpIGluZGlxdcOpIGF1IGRldmlzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGVzIHBhaWVtZW50cyBz4oCZZWZmZWN0dWVudCBwYXIgY2FydGUgYmFuY2FpcmUgc2Vsb24gbGVzXHJcbiAgICAgICAgICAgICAgICBtb2RhbGl0w6lzIHN1aXZhbnRlcyA6XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYWllbWVudCBwYXIgY2FydGUgYmFuY2FpcmUgcGFyIHNlcnZldXIgZGUgcGFpZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc8OpY3VyaXPDqSAoQ2FydGUgYmxldWUgZHUgR0lFIGJhbmNhaXJlIENhcnRlIGJsZXVlLCBWaXNhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXN0ZXJDYXJkLCBBbWVyaWNhbiBFeHByZXNzLCBFdXJvY2FyZCBldCBWaXNhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVybmF0aW9uYWxlcykuIExlIHBhaWVtZW50IGVuIGxpZ25lIHBhciBjYXJ0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5jYWlyZSBlc3QgYXNzdXLDqSBwYXIgdW5lIHNvbHV0aW9uIHPDqWN1cmlzw6llIGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyeXB0w6llIChTVFJJUEUpIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEVuIGNhcyBkZSByZXRhcmQgZGUgcGFpZW1lbnQsIEtpdmlkIHBvdXJyYSByZWZ1c2VyLCBzdXNwZW5kcmUgb3VcclxuICAgICAgICAgICAgICAgIGFubnVsZXIgbOKAmWFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lLCBzYW5zIHByw6lqdWRpY2UgZGUgdG91dGUgYXV0cmVcclxuICAgICAgICAgICAgICAgIGFjdGlvbi4gVG91dGUgc29tbWUgbm9uIHBhecOpZSDDoCBs4oCZw6ljaMOpYW5jZSBwcsOpdnVlIGRvbm5lcmEgbGlldSxcclxuICAgICAgICAgICAgICAgIHNhbnMgbWlzZSBlbiBkZW1ldXJlLCBhdSBwYWllbWVudCBk4oCZaW50w6lyw6p0cyBkZSByZXRhcmQgc+KAmcOpbGV2YW50XHJcbiAgICAgICAgICAgICAgICDDoCB0cm9pcyAoMykgZm9pcyBsZSB0YXV4IGRlIGzigJlpbnTDqXLDqnQgbMOpZ2FsIGVuIHZpZ3VldXIgYXUgam91clxyXG4gICAgICAgICAgICAgICAgZGUgbGEgZmFjdHVyYXRpb24gZXQgw6AgdW5lIGluZGVtbml0w6kgZm9yZmFpdGFpcmUgcG91ciBmcmFpcyBkZVxyXG4gICAgICAgICAgICAgICAgcmVjb3V2cmVtZW50IGRlIHF1YXJhbnRlICg0MCkgZXVyb3MgcGFyIGZhY3R1cmUgaW1wYXnDqWUuIERhbnMgbGVcclxuICAgICAgICAgICAgICAgIGNhcyBvw7kgbGVzIGZyYWlzIGRlIHJlY291dnJlbWVudCBkw6lwYXNzZXJhaWVudCBjZSBtb250YW50LCBLaXZpZFxyXG4gICAgICAgICAgICAgICAgc2UgcsOpc2VydmUgbGUgZHJvaXQgZOKAmWVuIGRlbWFuZGVyLCBzdXIganVzdGlmaWNhdGlmLCBsZVxyXG4gICAgICAgICAgICAgICAgcmVtYm91cnNlbWVudCBpbnTDqWdyYWwgYXUgQ2xpZW50LiBMZXMgaW50w6lyw6p0cyBjb3VyZW50IGR1IGpvdXJcclxuICAgICAgICAgICAgICAgIGRlIGzigJnDqWNow6lhbmNlIGp1c3F14oCZYXUgcGFpZW1lbnQgZWZmZWN0aWYuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+S2l2aWQgbmUgcHJhdGlxdWUgcGFzIGzigJllc2NvbXB0ZS48L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazE0XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+PHN0cm9uZz5jLiBSw6l2aXNpb24gZGVzIHByaXg8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgS2l2aWQgc2UgcsOpc2VydmUgbGEgcG9zc2liaWxpdMOpIGRlIG1vZGlmaWVyIGxlcyB0YXJpZnMgZW4gY291cnNcclxuICAgICAgICAgICAgICAgIGTigJlhbm7DqWUgc2Vsb24gbGVzIG1vZGFsaXTDqXMgc3VpdmFudGVzIDpcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGEuIFF1aW56ZSAoMTUpIGpvdXJzIGF2YW50IGzigJlhcHBsaWNhdGlvbiBkZXMgbm91dmVhdXggdGFyaWZzLFxyXG4gICAgICAgICAgICAgICAgbOKAmXV0aWxpc2F0ZXVyIHNlcmEgaW5mb3Jtw6kgZGUgY2VzIG1vZGlmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBiLiBQb3VyIGNvbnRpbnVlciDDoCBhdm9pciBhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSwgbOKAmXV0aWxpc2F0ZXVyXHJcbiAgICAgICAgICAgICAgICBkZXZyYSBzcMOpY2lmaXF1ZW1lbnQgYWNjZXB0ZXIgbOKAmWFwcGxpY2F0aW9uIGRlIGNlcyBub3V2ZWF1eFxyXG4gICAgICAgICAgICAgICAgdGFyaWZzIMOgIGxhIGRhdGUgYW5uaXZlcnNhaXJlIGRlIHNvbiBhYm9ubmVtZW50IG1lbnN1ZWwgb3VcclxuICAgICAgICAgICAgICAgIGFubnVlbCBsZSBjYXMgw6ljaMOpYW50IDtcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGMuIEEgZMOpZmF1dCBk4oCZYWNjZXB0YXRpb24gZXhwcmVzc2UgZGVzIG5vdXZlYXV4IHRhcmlmcyxcclxuICAgICAgICAgICAgICAgIGzigJl1dGlsaXNhdGV1ciBuZSBwb3VycmEgcGx1cyBhdm9pciBhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSDDoFxyXG4gICAgICAgICAgICAgICAgbOKAmWlzc3VlIGRlIHNhIHDDqXJpb2RlIGTigJllbmdhZ2VtZW50LCBxdWUgY2VsbGUtY2kgc29pdCBtZW5zdWVsbGVcclxuICAgICAgICAgICAgICAgIG91IGFubnVlbGxlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazE1XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz44LiBSw6lzaWxpYXRpb248L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBEYW5zIGxlIGNhZHJlIGTigJl1biBhYm9ubmVtZW50IMOgIGR1csOpZSBsaWJyZSBhdmVjIHBhaWVtZW50XHJcbiAgICAgICAgICAgICAgICBtZW5zdWVsLCBsYSByZWNvbmR1Y3Rpb24gZGUgbOKAmWFib25uZW1lbnQgcG91ciB1bmUgZHVyw6llIMOpZ2FsZVxyXG4gICAgICAgICAgICAgICAgZXN0IHRhY2l0ZSBldCBhdXRvbWF0aXF1ZS4gTOKAmXV0aWxpc2F0ZXVyIHBldXQgdG91dGVmb2lzIMOgIHRvdXRcclxuICAgICAgICAgICAgICAgIG1vbWVudCBkZW1hbmRlciBsYSByw6lzaWxpYXRpb24gZGUgc29uIGFib25uZW1lbnQgw6AgcGFydGlyIGRlIHNvblxyXG4gICAgICAgICAgICAgICAgY29tcHRlLWNsaWVudC4gVW4gY291cnJpZWwgZGUgY29uZmlybWF0aW9uIHNlcmEgZW52b3nDqSBhdSBDbGllbnRcclxuICAgICAgICAgICAgICAgIGV0IGxhIHLDqXNpbGlhdGlvbiBwcmVuZHJhIGVmZmV0IMOgIGxhIGZpbiBkZSBsYSBww6lyaW9kZSBkZVxyXG4gICAgICAgICAgICAgICAgc291c2NyaXB0aW9uIGVuIGNvdXJzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBk4oCZdW4gYWJvbm5lbWVudCBhbm51ZWwsIGxhIHJlY29uZHVjdGlvbiBkZVxyXG4gICAgICAgICAgICAgICAgbOKAmWFib25uZW1lbnQgcG91ciB1bmUgZHVyw6llIMOpZ2FsZSBlc3QgdGFjaXRlIGV0IGF1dG9tYXRpcXVlLlxyXG4gICAgICAgICAgICAgICAgTOKAmXV0aWxpc2F0ZXVyIHBldXQgZGVtYW5kZXIgbGEgcsOpc2lsaWF0aW9uIGRlIHNvbiBhYm9ubmVtZW50IMOgXHJcbiAgICAgICAgICAgICAgICBwYXJ0aXIgZGUgc29uIGNvbXB0ZS1jbGllbnQgw6AgdG91dCBtb21lbnQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTZcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjkuIFByb3ByacOpdMOpPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgYS4gS2l2aWQgZXN0IGV0IGRlbWV1cmUgdGl0dWxhaXJlIGRlcyBkcm9pdHMgZGUgcHJvcHJpw6l0w6lcclxuICAgICAgICAgICAgICAgIHJlbGF0aWZzIMOgIHRvdXQgw6lsw6ltZW50IGRlIGxhIFBsYXRlZm9ybWUgZXQgZGVzIENvbnRlbnVzIG1pcyDDoFxyXG4gICAgICAgICAgICAgICAgZGlzcG9zaXRpb24gZHUgQ2xpZW50IGV0IGRlIGzigJl1dGlsaXNhdGV1csKywrLCsiwgYWluc2kgcGx1c1xyXG4gICAgICAgICAgICAgICAgZ8OpbsOpcmFsZW1lbnQgcXVlIGRlIGzigJlpbmZyYXN0cnVjdHVyZSBpbmZvcm1hdGlxdWUgKGxvZ2ljaWVsbGUgZXRcclxuICAgICAgICAgICAgICAgIG1hdMOpcmllbGxlKSBtaXNlIGVuIMWTdXZyZSBvdSBkw6l2ZWxvcHDDqWUgZGFucyBsZSBjYWRyZSBkdVxyXG4gICAgICAgICAgICAgICAgQ29udHJhdC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGIuIExlIENvbnRyYXQgbmUgY29uZsOocmUgYXUgQ2xpZW50IGF1Y3VuIGRyb2l0IGRlIHByb3ByacOpdMOpIHN1clxyXG4gICAgICAgICAgICAgICAgbGEgUGxhdGVmb3JtZS4gTGEgbWlzZSDDoCBkaXNwb3NpdGlvbiB0ZW1wb3JhaXJlIGRlIGxhIFBsYXRlZm9ybWVcclxuICAgICAgICAgICAgICAgIGRhbnMgbGVzIGNvbmRpdGlvbnMgcHLDqXZ1ZXMgYXUgQ29udHJhdCBuZSBzYXVyYWl0IMOqdHJlIGFuYWx5c8OpZVxyXG4gICAgICAgICAgICAgICAgY29tbWUgbGEgY2Vzc2lvbiBk4oCZdW4gcXVlbGNvbnF1ZSBkcm9pdCBkZSBwcm9wcmnDqXTDqVxyXG4gICAgICAgICAgICAgICAgaW50ZWxsZWN0dWVsbGUgYXUgYsOpbsOpZmljZSBkdSBDbGllbnQsIGF1IHNlbnMgZHUgQ29kZSBmcmFuw6dhaXNcclxuICAgICAgICAgICAgICAgIGRlIGxhIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgYy4gTGUgQ2xpZW50IHPigJlpbnRlcmRpdCBkZSByZXByb2R1aXJlIHRvdXQgw6lsw6ltZW50IGRlIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lLCBvdSB0b3V0ZSBkb2N1bWVudGF0aW9uIGxhIGNvbmNlcm5hbnQsIHBhciBxdWVscXVlXHJcbiAgICAgICAgICAgICAgICBtb3llbiBxdWUgY2Ugc29pdCwgc291cyBxdWVscXVlIGZvcm1lIHF1ZSBjZSBzb2l0IGV0IHN1ciBxdWVscXVlXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0IHF1ZSBjZSBzb2l0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgZC4gTGUgQ2xpZW50IGV0IHV0aWxpc2F0ZXVyIG5lIHBvdXJyb250IGPDqWRlciB0b3V0IG91IHBhcnRpZSBkZXNcclxuICAgICAgICAgICAgICAgIGRyb2l0cyBldCBvYmxpZ2F0aW9ucyByw6lzdWx0YW50IGR1IENvbnRyYXQsIHF1ZSBjZSBzb2l0IGRhbnMgbGVcclxuICAgICAgICAgICAgICAgIGNhZHJlIGQndW5lIGNlc3Npb24gdGVtcG9yYWlyZSwgZCd1bmUgc291cy1saWNlbmNlIGV0IGRlIHRvdXRcclxuICAgICAgICAgICAgICAgIGF1dHJlIGNvbnRyYXQgcHLDqXZveWFudCBsZSB0cmFuc2ZlcnQgZGVzZGl0cyBkcm9pdHMgZXRcclxuICAgICAgICAgICAgICAgIG9ibGlnYXRpb25zLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgZS4gS2l2aWQgZMOpY2xhcmUgZXQgZ2FyYW50aXQgw6p0cmUgdGl0dWxhaXJlIGRlIHRvdXMgbGVzIGRyb2l0c1xyXG4gICAgICAgICAgICAgICAgZGUgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUgcXVpIGx1aSBwZXJtZXR0ZW50IGRlIGNvbmNsdXJlIGxlXHJcbiAgICAgICAgICAgICAgICBDb250cmF0LiBLaXZpZCBkw6ljbGFyZSBldCBnYXJhbnRpdCBxdWUgbGVzIFNvbHV0aW9ucyBuZSBzb250IHBhc1xyXG4gICAgICAgICAgICAgICAgc3VzY2VwdGlibGVzIGRlIHBvcnRlciBhdHRlaW50ZSBhdXggZHJvaXRzIGRlcyB0aWVycy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmsxN1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+MTAuIFRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIHBlcnNvbm5lbGxlczwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIExlcyBQYXJ0aWVzIHPigJllbmdhZ2VudCDDoCByZXNwZWN0ZXIgbGEgcsOpZ2xlbWVudGF0aW9uIGFwcGxpY2FibGUsXHJcbiAgICAgICAgICAgICAgICBub3RhbW1lbnQgbGUgUsOoZ2xlbWVudCBFdXJvcMOpZW4gc3VyIGxhIFByb3RlY3Rpb24gZGVzIERvbm7DqWVzLFxyXG4gICAgICAgICAgICAgICAgZGl0IMKrIFJHUEQgwrsgKG7CsDIwMTYtNjc5IHJlbGF0aWYgw6AgbGEgcHJvdGVjdGlvbiBkZXMgcGVyc29ubmVzXHJcbiAgICAgICAgICAgICAgICBwaHlzaXF1ZXMgw6AgbOKAmcOpZ2FyZCBkdSB0cmFpdGVtZW50IGRlcyBkb25uw6llcyDDoCBjYXJhY3TDqHJlXHJcbiAgICAgICAgICAgICAgICBwZXJzb25uZWwgZXQgw6AgbGEgbGlicmUgY2lyY3VsYXRpb24gZGUgY2VzIGRvbm7DqWVzKSBldCBsYSBsb2kgwqtcclxuICAgICAgICAgICAgICAgIEluZm9ybWF0aXF1ZSBldCBsaWJlcnTDqXMgwrsgKGxvaSBuwrA3OC0xNyBkdSA2IGphbnZpZXIgMTk3OFxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmUgw6AgbOKAmWluZm9ybWF0aXF1ZSwgYXV4IGZpY2hpZXJzIGV0IGF1eCBsaWJlcnTDqXNcclxuICAgICAgICAgICAgICAgIG1vZGlmacOpZSkgZGFucyBsZSBjYWRyZSBkdSBDb250cmF0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgYS4gVHJhaXRlbWVudHMgbWlzIGVuIMWTdXZyZSBwYXIgbGUgQ2xpZW50IGFnaXNzYW50IGVuXHJcbiAgICAgICAgICAgICAgICByZXNwb25zYWJsZSBkZSB0cmFpdGVtZW50XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBMZSBDbGllbnQgZXN0IHJlc3BvbnNhYmxlIGR1IHRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIGRlIHNlc1xyXG4gICAgICAgICAgICAgICAgY2xpZW50cyB1dGlsaXNhdGV1cnMgZGUgbGEgUGxhdGVmb3JtZSwgbG9yc3F1ZSBsZXMgdHJhaXRlbWVudHNcclxuICAgICAgICAgICAgICAgIHNvbnQgbWlzIGVuIMWTdXZyZSBkYW5zIGxlIGNhZHJlIGRlIHNhIHJlbGF0aW9uIGF2ZWMgbGVzXHJcbiAgICAgICAgICAgICAgICBVdGlsaXNhdGV1cnMuIERhbnMgbGUgY2FkcmUgZGUgY2VzIHRyYWl0ZW1lbnRzLCBsZSBDbGllbnRcclxuICAgICAgICAgICAgICAgIHRyYW5zbWV0dHJhIMOgIEtpdmlkIHNlcyBpbnN0cnVjdGlvbnMgZG9jdW1lbnTDqWVzLCBxdWlcclxuICAgICAgICAgICAgICAgIGluZGlxdWVyb250IGzigJlvYmpldCBldCBsYSBkdXLDqWUgZHUgdHJhaXRlbWVudCwgc2EgbmF0dXJlIGV0IHNlc1xyXG4gICAgICAgICAgICAgICAgZmluYWxpdMOpcywgbGUgdHlwZSBkZSBEb25uw6llcyBwZXJzb25uZWxsZXMgZXQgbGEgY2F0w6lnb3JpZSBkZXNcclxuICAgICAgICAgICAgICAgIHBlcnNvbm5lcyBjb25jZXJuw6llcywgYWluc2kgcXVlIHNlcyBkcm9pdHMgZXQgb2JsaWdhdGlvbnMgZW5cclxuICAgICAgICAgICAgICAgIHRhbnQgcXVlIHJlc3BvbnNhYmxlIGR1IHRyYWl0ZW1lbnQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBiLiBUcmFpdGVtZW50cyBtaXMgZW4gxZN1dnJlIHBhciBLaXZpZCBhZ2lzc2FudCBlbiByZXNwb25zYWJsZSBkZVxyXG4gICAgICAgICAgICAgICAgdHJhaXRlbWVudFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgS2l2aWQgZXN0IHJlc3BvbnNhYmxlIGR1IHRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIHBlcnNvbm5lbGxlc1xyXG4gICAgICAgICAgICAgICAgcsOpYWxpc8OpIHBvdXIgdm91cyBwZXJtZXR0cmUgZOKAmXV0aWxpc2VyIGxlcyBTZXJ2aWNlcyBzdXIgbGUgU2l0ZS5cclxuICAgICAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZGVzIHRyYWl0ZW1lbnRzIGRvbnQgS2l2aWQgZXN0IHJlc3BvbnNhYmxlIGRlXHJcbiAgICAgICAgICAgICAgICB0cmFpdGVtZW50LCBsZSBDbGllbnQgZXQgbOKAmVV0aWxpc2F0ZXVyIHBldXZlbnQgZXhlcmNlciBsZXVyXHJcbiAgICAgICAgICAgICAgICBkcm9pdCBk4oCZYWNjw6hzLCByZWN0aWZpY2F0aW9uLCBlZmZhY2VtZW50LCBsaW1pdGF0aW9uIGR1XHJcbiAgICAgICAgICAgICAgICB0cmFpdGVtZW50IGV0IG9iamVjdGlvbiBhdSB0cmFpdGVtZW50IGRlcHVpcyBsZXVyIGNvbXB0ZSBzdXIgbGVcclxuICAgICAgICAgICAgICAgIFNpdGUgb3UgZW4gc+KAmWFkcmVzc2FudCBkaXJlY3RlbWVudCDDoFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGtpdmlkLmZyXCI+Y29udGFjdEBraXZpZC5mcjwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDx1PmkuIFR5cG9sb2dpZSBkZXMgRG9ubsOpZXMgY29sbGVjdMOpZXMgcGFyIEtpdmlkPC91PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGVzIERvbm7DqWVzIGNvbGxlY3TDqWVzIHBhciBLaXZpZCBwb3VyIGxlcyBiZXNvaW5zIGRlIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lIHNvbnQgbm90YW1tZW50IGxlcyBzdWl2YW50ZXMgOlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Ob21zLCBwcsOpbm9tcywgY2l2aWxpdMOpLCBkYXRlIGRlIG5haXNzYW5jZSA7PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRyZXNzZSBwb3N0YWxlLCBhZHJlc3NlIGUtbWFpbCwgbnVtw6lybyBkZSB0w6lsw6lwaG9uZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSWRlbnRpZmlhbnQgZXQgbW90IGRlIHBhc3NlIGNyeXB0w6kgdXRpbGlzw6lzIHBvdXIgdm91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBz4oCZaWRlbnRpZmllciBzdXIgbGEgUGxhdGVmb3JtZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXRpb25zIGNyeXB0w6llcyByZWxhdGl2ZXMgw6Agdm9zIG1veWVucyBkZSBwYWllbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobm90YW1tZW50IG51bcOpcm8gZGUgY2FydGUgYmFuY2FpcmUpIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaG9peCBlbiBtYXRpw6hyZSBkZSBwcm9zcGVjdGlvbiBjb21tZXJjaWFsZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG91dGUgYXV0cmUgaW5mb3JtYXRpb24gcXVlIHZvdXMgc291aGFpdGV6IHBvcnRlciDDoFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RyZSBjb25uYWlzc2FuY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBQYXIgbOKAmWludGVybcOpZGlhaXJlIGRlcyBjb29raWVzLCBLaXZpZCBjb2xsZWN0ZSDDqWdhbGVtZW50IGRlc1xyXG4gICAgICAgICAgICAgICAgaW5mb3JtYXRpb25zIHJlbGF0aXZlcyDDoCBsYSBjb25uZXhpb24gZXQgw6AgbGEgbmF2aWdhdGlvbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEtpdmlkIG5lIGNvbGxlY3RlIGx1aS1tw6ptZSBhdWN1bmUgZG9ubsOpZSBjb25zaWTDqXLDqWUgwqtcclxuICAgICAgICAgICAgICAgIHBhcnRpY3VsacOocmUgwrsgcGFyIGxlIFJHUEQgY29uY2VybmFudCBsZSBDbGllbnQgb3UgbOKAmVV0aWxpc2F0ZXVyXHJcbiAgICAgICAgICAgICAgICBwb3VyIGxlcyBiZXNvaW5zIGR1IGZvbmN0aW9ubmVtZW50IGRlIGxhIFBsYXRlZm9ybWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICA8dT5paS4gRmluYWxpdMOpIGRlcyB0cmFpdGVtZW50cyBkZSBEb25uw6llcyBk4oCZS2l2aWQ8L3U+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBLaXZpZCB1dGlsaXNlIGxlcyBEb25uw6llcyByZWN1ZWlsbGllcyBwb3VyIGxlcyBmaW5hbGl0w6lzXHJcbiAgICAgICAgICAgICAgICBzdWl2YW50ZXMgOlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdGlvbiBkZSBsYSBzb3VzY3JpcHRpb24gw6AgdW4gY29udHJhdCBk4oCZYWJvbm5lbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGFib25uZW1lbnRzIMOgIG5vcyBuZXdzbGV0dGVycyBldC9vdSBhbGVydGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUtbWFpbHNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPkZhY3R1cmF0aW9uIGV0IHBhaWVtZW50czwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbm5leGlvbiBhdXRvbWF0aXF1ZSBhdXggZXNwYWNlcyByw6lzZXJ2w6lzIG91IHBlcnNvbm5lbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGUgbGEgUGxhdGVmb3JtZSwgYXUgbW95ZW4gZGVzIElkZW50aWZpYW50cyA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3LDqWF0aW9uIGTigJlvdXRpbHMgZGUgcGFydGFnZSBzdXIgbGVzIHLDqXNlYXV4IHNvY2lhdXhcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWxhdGlvbiBjbGllbnQgOiBwcmlzZSBlbiBjb21wdGUgZGUgcXVlc3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByw6ljbGFtYXRpb24sIHLDqWFsaXNhdGlvbiBk4oCZZW5xdcOqdGVzIGRlIHNhdGlzZmFjdGlvbiwg4oCmXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWlzZSBlbiBwbGFjZSBk4oCZb3DDqXJhdGlvbnMgY29tbWVyY2lhbGVzIHkgY29tcHJpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWTDqWxpc2F0aW9uIGV0IHByb3NwZWN0aW9uIGNvbW1lcmNpYWxlIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlN0YXRpc3RpcXVlcyBjb21tZXJjaWFsZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDx1PmlpaS4gRHVyw6llIGRlIGNvbnNlcnZhdGlvbjwvdT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFBvdXIgbGEgbWlzZSBlbiDFk3V2cmUgZGUgc2VzIGFjdGl2aXTDqXMsIEtpdmlkIHPigJllbmdhZ2Ugw6BcclxuICAgICAgICAgICAgICAgIGNvbnNlcnZlciBsZXMgRG9ubsOpZXMgcG91ciB1bmUgZHVyw6llIGRlIHRyb2lzICgzKSBhbnMgw6AgY29tcHRlclxyXG4gICAgICAgICAgICAgICAgZGUgbGEgY29sbGVjdGUgZGVzIGRvbm7DqWVzIG91IGR1IGRlcm5pZXIgY29udGFjdCDDqW1hbmFudCBkdVxyXG4gICAgICAgICAgICAgICAgcHJvc3BlY3QuIFRvdXRlZm9pcywgS2l2aWQgc+KAmWVuZ2FnZSDDoCBzdXBwcmltZXIgbGVzIGluZm9ybWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgZG9udCBsYSBjb25zZXJ2YXRpb24gbmUgc2VyYWl0IHBsdXMgbsOpY2Vzc2FpcmUgYXUgcmVnYXJkIGRlc1xyXG4gICAgICAgICAgICAgICAgZXhpZ2VuY2VzIGzDqWdpc2xhdGl2ZXMgZXQgcsOpZ2xlbWVudGFpcmVzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHU+aXYuIERlc3RpbmF0YWlyZXMgZGVzIERvbm7DqWVzPC91PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTOKAmWFjY8OocyBhdXggRG9ubsOpZXMgZXN0IGxpbWl0w6kgw6AgbGEgcsOpYWxpc2F0aW9uIGRlcyBmaW5hbGl0w6lzXHJcbiAgICAgICAgICAgICAgICBkZXMgdHJhaXRlbWVudHMgZMOpY3JpdCBjaS1kZXNzdXMgZXQgYXV4IHNldWxlcyBwZXJzb25uZXNcclxuICAgICAgICAgICAgICAgIGhhYmlsaXTDqWVzIHNvdW1pc2VzIMOgIHVuZSBvYmxpZ2F0aW9uIGRlIGNvbmZpZGVudGlhbGl0w6kuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8dT52LiBTw6ljdXJpdMOpIGV0IGNvbmZpZGVudGlhbGl0w6kgZGVzIERvbm7DqWVzPC91PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgS2l2aWQgc+KAmWVuZ2FnZSBhzIAgYXNzdXJlciBsYSBzw6ljdXJpdMOpIGV0IGxhIHByb3RlY3Rpb24gZGVzXHJcbiAgICAgICAgICAgICAgICBEb25uw6llcyBkdSBDbGllbnQgZXQgZGUgbOKAmVV0aWxpc2F0ZXVyIGFmaW4gbm90YW1tZW50IGQnZW1ww6pjaGVyXHJcbiAgICAgICAgICAgICAgICBxdSdlbGxlcyBuZSBzb2llbnQgZMOpZm9ybcOpZXMsIGVuZG9tbWFnw6llcyBvdSBjb21tdW5pcXXDqWVzIGHMgCBkZXNcclxuICAgICAgICAgICAgICAgIHRpZXJzIG5vbiBhdXRvcmlzw6lzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgS2l2aWQgc+KAmWVuZ2FnZSBhzIAgYXNzdXJlciwgZXQgYcyAIGZhaXJlIHJlc3BlY3RlciBs4oCZaMOpYmVyZ2V1ciBkZXNcclxuICAgICAgICAgICAgICAgIERvbm7DqWVzIGFnaXNzYW50IGVuIHNvdXMtdHJhaXRhbmNlLCBsYSBwbHVzIHN0cmljdGVcclxuICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbGl0w6kgzIFldCBsYSBwbHVzIHN0cmljdGUgc8OpY3VyaXTDqSBkYW5zIGxlIHByb2Nlc3N1cyBkZVxyXG4gICAgICAgICAgICAgICAgdHJhaXRlbWVudCBldCBkZSBzdG9ja2FnZSBkZXMgRG9ubsOpZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBUb3V0ZWZvaXMsIGRlIG1hbmnDqHJlIGV4Y2VwdGlvbm5lbGxlLCBpbCBwZXV0IGFycml2ZXIgcXVlXHJcbiAgICAgICAgICAgICAgICBjZXJ0YWluZXMgRG9ubsOpZXMgc29pZW50IHRyYW5zZsOpcsOpZXMgw6AgZGVzIHNvdXMtdHJhaXRhbnRzIG91XHJcbiAgICAgICAgICAgICAgICBwYXJ0ZW5haXJlcyBjb21tZXJjaWF1eCBheWFudCB1bmUgaW1wbGFudGF0aW9uIHNpdHXDqWUgZW4gZGVob3JzXHJcbiAgICAgICAgICAgICAgICBkZSBs4oCZVW5pb24gZXVyb3DDqWVubmUuIEVuIGNhcyBkZSB0cmFuc2ZlcnQgZGUgY2UgdHlwZSwgS2l2aWRcclxuICAgICAgICAgICAgICAgIHPigJllbmdhZ2Ugw6AgY2UgcXVlIGxlIHRyYWl0ZW1lbnQgc29pdCBlZmZlY3R1w6kgY29uZm9ybcOpbWVudCBhdXhcclxuICAgICAgICAgICAgICAgIGNsYXVzZXMgY29udHJhY3R1ZWxsZXMgdHlwZXMgZGUgbGEgQ29tbWlzc2lvbiBldXJvcMOpZW5uZSBxdWlcclxuICAgICAgICAgICAgICAgIHBlcm1ldHRlbnQgZGUgZ2FyYW50aXIgdW4gbml2ZWF1IGRlIHByb3RlY3Rpb24gc3VmZmlzYW50IGRlIGxhXHJcbiAgICAgICAgICAgICAgICB2aWUgcHJpdsOpZSBldCBkZXMgZHJvaXRzIGZvbmRhbWVudGF1eCBkZXMgcGVyc29ubmVzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazE4XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz4xMS4gTG9pIEFwcGxpY2FibGUg4oCTIENvbXDDqXRlbmNlIGRlIGp1cmlkaWN0aW9uPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGEgbG9pIGFwcGxpY2FibGUgYXUgcHLDqXNlbnQgY29udHJhdCBlc3QgbGEgbG9pIGZyYW7Dp2Fpc2UuIExlc1xyXG4gICAgICAgICAgICAgICAgUGFydGllcyBz4oCZZW5nYWdlbnQgYcyAIHByb2PDqWRlciBhzIAgdW5lIHRlbnRhdGl2ZSBkZSBjb25jaWxpYXRpb25cclxuICAgICAgICAgICAgICAgIGF2YW50IHRvdXQgcmVjb3VycyBhdSBqdWdlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNraXZpZFwiPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlBvbGl0aXF1ZSBkZSBDb25maWRlbnRpYWxpdMOpPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgQ2V0dGUgUG9saXRpcXVlIGRlIENvbmZpZGVudGlhbGl0w6kgZXN0IGxhIGJhc2UgcG91ciB0cmFpdGVyXHJcbiAgICAgICAgICAgICAgICB0b3V0ZXMgRG9ubsOpZXMgUGVyc29ubmVsbGVzIHF1ZSBub3VzIHJhc3NlbWJsb25zIG91IHF1ZSB2b3VzXHJcbiAgICAgICAgICAgICAgICBub3VzIGZvdXJuaXNzZXogYXUgdHJhdmVycyBkdSBzaXRlIHdlYiBkaXNwb25pYmxlIMOgIGzigJlhZHJlc3NlXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPnd3dy5raXZpZC5mcjwvYT4gKGNpLWFwcsOocyBkw6lub21tw6kgwqsgbGEgUGxhdGVmb3JtZVxyXG4gICAgICAgICAgICAgICAgwrspLCBhaW5zaSBxdeKAmcOgIHRvdXRlIHJlY2hlcmNoZSBlZmZlY3R1w6llIHN1ciBsYWRpdGUgUGxhdGVmb3JtZSxcclxuICAgICAgICAgICAgICAgIGV0L291IHRvdXRlIHV0aWxpc2F0aW9uIGRlIGxhZGl0ZSBQbGF0ZWZvcm1lIHBhciBs4oCZaW50ZXJuYXV0ZVxyXG4gICAgICAgICAgICAgICAgcXVpIHPigJl5IGNvbm5lY3RlICjCqyBs4oCZVXRpbGlzYXRldXIgwrspLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazFcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjEuIElkZW50aXTDqSBkZXMgcmVzcG9uc2FibGVzIGRlIHRyYWl0ZW1lbnQ8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBDaGFxdWUgcHJvZmVzc2lvbm5lbCBwcmF0aWNpZW4gZXN0IGNvbnNpZMOpcsOpIGNvbW1lIHJlc3BvbnNhYmxlXHJcbiAgICAgICAgICAgICAgICBkZSB0cmFpdGVtZW50IGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXMgZGUgc2FudMOpIGRlIHNlc1xyXG4gICAgICAgICAgICAgICAgVXRpbGlzYXRldXJzLCB0YW5kaXMgcXVlIEtJVklEIGFnaXQgY29tbWUgc291cy10cmFpdGFudCBhZ2lzc2FudFxyXG4gICAgICAgICAgICAgICAgc3VyIGluc3RydWN0aW9uIHBhcnRpY3VsacOocmUgZGUgY2hhcXVlIHByYXRpY2llbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEtJVklEIGVzdCBjb25zaWTDqXLDqSBjb21tZSByZXNwb25zYWJsZSBkZSB0cmFpdGVtZW50IGRlcyBkb25uw6llc1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVzIMOgIGxhIGNyw6lhdGlvbiBkdSBjb21wdGUgcGVyc29ubmVsIGRlIGwndXRpbGlzYXRldXIsIGRlXHJcbiAgICAgICAgICAgICAgICBzYSBuYXZpZ2F0aW9uIHN1ciBsYSBQbGF0ZWZvcm1lLCDDoCBsYSBjcsOpYXRpb24gZGUgc3RhdGlzdGlxdWVzXHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZXMgw6AgbCd1dGlsaXNhdGlvbiBkZSBsJ291dGlsLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazFcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgPjIuIERvbm7DqWVzIHF1ZSBub3VzIHBvdXZvbnMgY29sbGVjdGVyIHZvdXNcclxuICAgICAgICAgICAgICAgICAgICBjb25jZXJuYW50PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBOb3VzIHBvdXZvbnMgw6p0cmUgYW1lbsOpcyDDoCByYXNzZW1ibGVyIGV0IHRyYWl0ZXIgbGVzIERvbm7DqWVzXHJcbiAgICAgICAgICAgICAgICBQZXJzb25uZWxsZXMgc3VpdmFudGVzIDpcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluZm9ybWF0aW9ucyBxdWUgdm91cyBub3VzIGZvdXJuaXNzZXogZW4gcmVtcGxpc3NhbnQgZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wcyBsaWJyZXMgb3UgZm9ybXVsYWlyZXMgc3VyIG5vdHJlIFBsYXRlZm9ybWUuIExlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW50aW9ucyBzb3VzIGNlcyBmb3JtdWxhaXJlcyByYXBwZWxsZW50IGxlcyBkcm9pdHMgZG9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b3VzIGRpc3Bvc2V6IHN1ciB2b3MgaW5mb3JtYXRpb25zLCBjb21tZSBzdGlwdWzDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaS1hcHLDqHMgO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpIHZvdXMgbm91cyBjb250YWN0ZXosIG5vdXMgcG91dm9ucyBnYXJkZXIgdW4gcmFwcG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZSBjZXR0ZSBjb3JyZXNwb25kYW5jZSBldCBub3VzIHBvdXZvbnMgZW5yZWdpc3RyZXIgdm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW11bmljYXRpb25zIGF2ZWMgbm91cyBwb3VyIGRlcyBjb250csO0bGVzIGRlIHF1YWxpdMOpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV0IMOgIGRlcyBmaW5zIGRlIGZvcm1hdGlvbiA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVzIGTDqXRhaWxzIGRlIHZvcyB2aXNpdGVzIHN1ciBub3RyZSBQbGF0ZWZvcm1lIOKAk1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RhbW1lbnQsIMOgIGRlcyBkb25uw6llcyByZWxhdGl2ZXMgYXUgdHJhZmljLCB2b3RyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJjb3Vycywgdm90cmUgbGFuZ3VlIGRlIG5hdmlnYXRldXIsIGRlcyBkb25uw6llcyBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlzYXRpb24sIGRlcyBjYXJuZXRzIHdlYiBldCBk4oCZYXV0cmVzIGluZm9ybWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZSBjb21tdW5pY2F0aW9uIOKAkyBldCBsZXMgcmVzc291cmNlcyBhdXhxdWVsbGVzIHZvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjw6lkZXouXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMlwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmdcclxuICAgICAgICAgICAgICAgICAgICA+My4gRHVyw6llIGRlIGNvbnNlcnZhdGlvbiBkZXMgaW5mb3JtYXRpb25zIHF1ZSBub3VzIHBvdXZvbnNcclxuICAgICAgICAgICAgICAgICAgICBhY3F1w6lyaXIgdm91cyBjb25jZXJuYW50PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBMYSBww6lyaW9kZSBkZSByw6l0ZW50aW9uIHBvdXIgZGVzIGRvbm7DqWVzIGV0L291IGRlcyBpbmZvcm1hdGlvbnNcclxuICAgICAgICAgICAgICAgIGRlIG5vdHJlIFBsYXRlZm9ybWUgZXN0IGRlIDEzIG1vaXMgw6AgbOKAmWV4Y2VwdGlvbiBkZXMgZG9ubsOpZXNcclxuICAgICAgICAgICAgICAgIGF5YW50IGZhaXQgbOKAmW9iamV0IGTigJl1biBwcm9jZXNzdXMgZOKAmWFub255bWlzYXRpb24gY29uZm9ybcOpbWVudCDDoFxyXG4gICAgICAgICAgICAgICAgbGEgbMOpZ2lzbGF0aW9uIGFwcGxpY2FibGUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBUb3V0ZWZvaXMsIGNlcnRhaW5lcyBkb25uw6llcyBwZXV2ZW50IMOqdHJlIGNvbnNlcnbDqWVzIHBvdXIgdW5lXHJcbiAgICAgICAgICAgICAgICBwbHVzIGxvbmd1ZSBkdXLDqWUgZXQgbm90YW1tZW50IChpKSBwZW5kYW50IHRvdXRlIGxhIGR1csOpZSBkZSB2aWVcclxuICAgICAgICAgICAgICAgIGRlIHZvdHJlIGNvbXB0ZSBlbiBsaWduZSBldCBqdXNxdeKAmcOgIHNhIHN1cHByZXNzaW9uLCBsZSBjYXNcclxuICAgICAgICAgICAgICAgIMOpY2jDqWFudCwgKGlpKSBwZW5kYW50IGxhIGR1csOpZSBzdGlwdWzDqWUgZGFucyB0b3V0IGNvbnRyYXQgcXVpXHJcbiAgICAgICAgICAgICAgICBzZXJhaXQgY29uY2x1IGF2ZWMgS0lWSUQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrM1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Ni4gUG9saXRpcXVlIGVuIG1hdGnDqHJlIGRlIGNvb2tpZXM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBOb3VzIHBvdXZvbnMgb2J0ZW5pciBkZXMgaW5mb3JtYXRpb25zIHN1ciB2b3RyZSB1dGlsaXNhdGlvblxyXG4gICAgICAgICAgICAgICAgZOKAmUludGVybmV0IGVuIGfDqW7DqXJhbCBlbiB1dGlsaXNhbnQgZGVzIGRpc3Bvc2l0aWZzIGTigJlhY2PDqHNcclxuICAgICAgICAgICAgICAgIG5vdGFtbWVudCBkZSB0eXBlIGNvb2tpZSAodW4gY29va2llIGVzdCB1biBwZXRpdCBmaWNoaWVyIHRleHRlXHJcbiAgICAgICAgICAgICAgICBxdWkgZXN0IGdhcmTDqSBzdXIgbGUgZGlzcXVlIGR1ciBkZSB2b3RyZSBvcmRpbmF0ZXVyKS4gTGVzXHJcbiAgICAgICAgICAgICAgICBjb29raWVzIG5vdXMgYWlkZW50IMOgIGFtw6lsaW9yZXIgbm90cmUgUGxhdGVmb3JtZSBldCDDoCBmb3VybmlyIHVuXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIGRlIG1laWxsZXVyZSBxdWFsaXTDqS4gTm91cyB1dGlsaXNvbnMgZGVzIGNvb2tpZXMgw6l0YW50XHJcbiAgICAgICAgICAgICAgICBzdHJpY3RlbWVudCBuw6ljZXNzYWlyZXMgw6Agdm90cmUgdXRpbGlzYXRpb24gZGUgbm90cmUgUGxhdGVmb3JtZS5cclxuICAgICAgICAgICAgICAgIFZvdXMgcG91dmV6IHJlZnVzZXIgZOKAmWFjY2VwdGVyIGNlcyBjb29raWVzIGVuIGFjdGl2YW50IGxlXHJcbiAgICAgICAgICAgICAgICBwYXJhbcOodHJlIHF1aSB2b3VzIHBlcm1ldCBkZSByZWZ1c2VyIGzigJlpbnN0YWxsYXRpb24gZGUgY29va2llc1xyXG4gICAgICAgICAgICAgICAgc3VyIHZvdHJlIG9yZGluYXRldXIuIENlcGVuZGFudCwgc2kgdm91cyBjaG9pc2lzc2V6IGNlXHJcbiAgICAgICAgICAgICAgICBwYXJhbcOodHJlLCBpbCBlc3QgcG9zc2libGUgcXVlIHZvdXMgc295ZXogaW5jYXBhYmxlIGTigJlhY2PDqWRlciDDoFxyXG4gICAgICAgICAgICAgICAgY2VydGFpbmVzIHBhcnRpZXMgZGUgbm90cmUgUGxhdGVmb3JtZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms0XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz43LiBQYXJ0YWdlIGF2ZWMgZGVzIHRpZXJzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgQWZpbiBkZSB2b3VzIGFwcG9ydGVyIGxlIG1laWxsZXVyIHNlcnZpY2UsIG5vdXMgcG91dm9ucyBkYW5zXHJcbiAgICAgICAgICAgICAgICBjZXJ0YWlucyBjYXMgcGFydGFnZXIgdm9zIGRvbm7DqWVzIGF2ZWMgZGVzIHRpZXJzLCBub3RhbW1lbnQgZGVzXHJcbiAgICAgICAgICAgICAgICBwYXJ0ZW5haXJlcyB0ZWNobmlxdWVzIG91IGNvbW1lcmNpYXV4LiBOb3VzIG5lIHBhcnRhZ2Vyb25zIHZvc1xyXG4gICAgICAgICAgICAgICAgZG9ubsOpZXMgcXXigJlhdmVjIGRlcyBwYXJ0ZW5haXJlcyBxdWkgcHLDqXNlbnRlbnQgZGVzIGdhcmFudGllc1xyXG4gICAgICAgICAgICAgICAgc3VmZmlzYW50ZXMgcXVhbnQgw6AgbGEgbWlzZSBlbiDFk3V2cmUgZGUgbWVzdXJlcyB0ZWNobmlxdWVzIGV0XHJcbiAgICAgICAgICAgICAgICBvcmdhbmlzYXRpb25uZWxsZXMgYXBwcm9wcmnDqWVzIGRlIG1hbmnDqHJlIMOgIGdhcmFudGlyIGxhXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0aW9uIGRlIHZvcyBkcm9pdHMgZXQgZGUgdm9zIGRvbm7DqWVzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTm91cyBwb3V2b25zIGRpdnVsZ3VlciB2b3MgZG9ubsOpZXMgw6AgZGVzIHRpZXJzIDpcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVuIGNhcyBkZSB2ZW50ZSBvdSBk4oCZYWNoYXQgZOKAmXVuZSBkZSBub3MgZW50cmVwcmlzZXMgb3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmllbnMsIG5vdXMgcG91dm9ucyBkaXZ1bGd1ZXIgdm9zIGNvb3Jkb25uw6llcyBhdSB2ZW5kZXVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91IGFjaGV0ZXVyIHByb3NwZWN0aWYgZGUgY2VzIGVudHJlcHJpc2VzIG91IGJpZW5zIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaSBub3VzIG91IHRvdXMgbm9zIGJpZW5zIHNvbnQgYWNxdWlzIHBhciB1biB0aWVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91dGVzIGNvb3Jkb25uw6llcyBnYXJkw6llcyBwYXIgbm91cyBzdXIgbm9zIGNsaWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyYWllbnQgYWluc2kgdHJhbnNmw6lyw6lzIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaSBub3VzIGF2b25zIGzigJlvYmxpZ2F0aW9uIGRlIGRpdnVsZ3VlciBvdSBkZSBwYXJ0YWdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b3MgY29vcmRvbm7DqWVzIGFmaW4gZGUgc2UgY29uZm9ybWVyIMOgIHRvdXRlIG9ibGlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbMOpZ2FsZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWZpbiBkZSBwcm90w6lnZXIgbm9zIGRyb2l0cywgcHJvcHJpw6l0w6kgb3Ugc8OpY3VyaXTDqSwgbm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudHMgb3UgYXV0cmVzIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbiBjYXMgZOKAmcOpY2hhbmdlIGTigJlpbmZvcm1hdGlvbnMgYXZlYyBk4oCZYXV0cmVzIHNvY2nDqXTDqXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXQgb3JnYW5pc2F0aW9ucyDDoCBkZXMgZmlucyBkZSBwcm90ZWN0aW9uIGNvbnRyZSBsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmF1ZGUgZXQgbGEgcsOpZHVjdGlvbiBkdSByaXNxdWUgZGUgY3LDqWRpdC5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms1XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA5LiBDaGFuZ2VtZW50cyBsacOpcyDDoCBub3RyZSBwb2xpdGlxdWUgZGUgY29uZmlkZW50aWFsaXTDqSBkZVxyXG4gICAgICAgICAgICAgICAgICAgIHZvdHJlIHZpZSBwcml2w6llIHJlbGF0aXZlIMOgIGxhIFBsYXRlZm9ybWUgS0lWSURcclxuICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFRvdXQgY2hhbmdlbWVudCBxdWUgbm91cyBmYWlzb25zIMOgIG5vdHJlIFBvbGl0aXF1ZSBkZVxyXG4gICAgICAgICAgICAgICAgQ29uZmlkZW50aWFsaXTDqSBkYW5zIGxlIGZ1dHVyIHNlcmEgcG9zdMOpIHN1ciBjZXR0ZSBwYWdlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazZcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjEwLiBDb250YWN0PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgU2kgdm91cyBhdmV6IGxhIG1vaW5kcmUgcXVlc3Rpb24gY29uY2VybmFudCBjZXR0ZSBQb2xpdGlxdWUgZGVcclxuICAgICAgICAgICAgICAgIENvbmZpZGVudGlhbGl0w6kgZXQgbGEgZmHDp29uIGRvbnQgbm91cyB1dGlsaXNvbnMgdm9zIERvbm7DqWVzXHJcbiAgICAgICAgICAgICAgICBQZXJzb25uZWxsZXMsIGNlbGxlLWNpIGVzdCBiaWVudmVudWUgZXQgZGV2cmEgw6p0cmUgYWRyZXNzw6llIMOgXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3RAa2l2aWQuZnJcIj5jb250YWN0QGtpdmlkLmZyPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHt9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmNvbnRhaW5lci1jZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1My44dmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDByZW0gMHJlbSAxcmVtICNiN2JkYzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxLjJyZW07XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RkZTNlOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiN2JkYzI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjdyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2I3YjliZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXY6Zmlyc3QtY2hpbGQgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uIGlkPVwicmVnaXN0ZXItZm9ybVwiIGNsYXNzPVwia2l2LWJsb2NrXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIHYtaWY9XCJ1c2VyVHlwZSA9PT0gJ3BhdGllbnQnICYmIHVzZXJIYXNEb2N0b3JcIj5JbnNjcmlwdGlvbjwvaDI+XHJcbiAgICAgICAgICAgIDxoMiB2LWlmPVwidXNlclR5cGUgPT09ICdkb2N0b3InXCI+SW5zY3JpcHRpb24gcHJhdGljaWVuPC9oMj5cclxuICAgICAgICAgICAgPGgyIHYtaWY9XCJ1c2VyVHlwZSA9PT0gJ3BhdGllbnQnICYmICF1c2VySGFzRG9jdG9yXCI+XHJcbiAgICAgICAgICAgICAgICBJbnNjcmlwdGlvbiArJm5ic3A7UHJpc2UmbmJzcDtkZSZuYnNwO2NvbnRhY3RcclxuICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFmb3JtTG9hZGluZ1JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVnaXN0ZXItZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicmVnaXN0ZXJEZXRhaWxzLmxhc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJOb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYW1pbHktbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24tYWZ0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLmxhc3RuYW1lICYmICFyZWdpc3RlckRldGFpbHMubGFzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLmxhc3RuYW1lICYmICFyZWdpc3RlckRldGFpbHMubGFzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbWVzc2FnZS1kYW5nZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW1wdHlNZXNzYWdlLmxhc3RuYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyZWdpc3RlckRldGFpbHMuZmlyc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJQcsOpbm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZ2l2ZW4tbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24tYWZ0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLmZpcnN0bmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZWdpc3RlckRldGFpbHMuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5maXJzdG5hbWUgJiYgIXJlZ2lzdGVyRGV0YWlscy5maXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbWVzc2FnZS1kYW5nZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW1wdHlNZXNzYWdlLmZpcnN0bmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZGFuZ2VyPVwidmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgIT0gbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyZWdpc3RlckRldGFpbHMuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJ2YWxpZGF0aW9uRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLWFmdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRldGFpbHMuZW1haWwpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVtcHR5TWVzc2FnZS5lbWFpbCAmJiAhcmVnaXN0ZXJEZXRhaWxzLmVtYWlsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJiByZWdpc3RlckRldGFpbHMuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtZXJyb3IgZXJyb3IgaWNvbi0yNFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRldGFpbHMuZW1haWwpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVtcHR5TWVzc2FnZS5lbWFpbCAmJiAhcmVnaXN0ZXJEZXRhaWxzLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtZXNzYWdlLWRhbmdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiYgcmVnaXN0ZXJEZXRhaWxzLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgdmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgfX08L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVtcHR5TWVzc2FnZS5lbWFpbCAmJiAhcmVnaXN0ZXJEZXRhaWxzLmVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgZW1wdHlNZXNzYWdlLmVtYWlsIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPERvY3RvclNlbGVjdEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidXNlclR5cGUgPT09ICdwYXRpZW50JyAmJiB1c2VySGFzRG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmRvY3RvclNlbGVjdGVkPVwicmVnaXN0ZXJEZXRhaWxzLmRvY3RvclNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvck1lc3NhZ2U9XCJnZXRFbXB0eURvY3RvclNlbGVjdEVycm9yTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBzZXREb2N0b3JTZWxlY3RlZD1cInNldERvY3RvclNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLmRvY3RvclNlbGVjdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZWdpc3RlckRldGFpbHMuZG9jdG9yU2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VnVlUGhvbmVOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidXNlclR5cGUgPT09ICdwYXRpZW50JyAmJiAhdXNlckhhc0RvY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQtY291bnRyeS1jb2RlPVwiRlJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6b25seS1jb3VudHJpZXM9XCJbJ0ZSJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6bm8tZXhhbXBsZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6bm8tY291bnRyeS1zZWxlY3Rvcj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHJhbnNsYXRpb25zPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeVNlbGVjdG9yTGFiZWw6ICdDb2RlIHBheXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeVNlbGVjdG9yRXJyb3I6ICdDaG9pc2lyIHVuIHBheXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXJMYWJlbDogJ051bcOpcm8gZGUgdMOpbMOpcGhvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhbXBsZTogJ0V4ZW1wbGUgOicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY29udGFjdFRlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxlZDogY29udGFjdFRlbCAhPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yVGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjYzFiNzlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQtY29sb3I9XCIjYzFiNzlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3ItY29sb3I9XCIjZmY1NjRiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yPVwiZXJyb3JUZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIk1vdCBkZSBwYXNzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2aXNpYmxlUGFzc3dvcmQ9XCJoYXNWaXNpYmxlUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLWFmdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInZhbGlkYXRpb25QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay1pY29uPVwiaGFzVmlzaWJsZVBhc3N3b3JkID0gIWhhc1Zpc2libGVQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwcm9ncmVzcz1cImdldFNlY3VyZVBhc3NQcm9ncmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5OiAhcmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXB0eU1lc3NhZ2UucGxhaW5QYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwiIWhhc1Zpc2libGVQYXNzd29yZFwiIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtZWxzZSBjbGFzcz1cImZhcyBmYS1leWUtc2xhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXB0eU1lc3NhZ2UucGxhaW5QYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtZXNzYWdlLWRhbmdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbXB0eU1lc3NhZ2UucGxhaW5QYXNzd29yZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0U2VjdXJlUGFzc1Byb2dyZXNzID49IDEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbWVzc2FnZS1zdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdCBkZSBwYXNzZSBzw6ljdXJpc8OpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIkNvbmZpcm1hdGlvbiBkdSBtb3QgZGUgcGFzc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmlzaWJsZVBhc3N3b3JkPVwiaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24tYWZ0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwPVwidmFsaWRhdGlvblBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLWljb249XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Zpc2libGVQYXNzd29yZENvbmZpcm0gPSAhaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UucGFzc3dvcmQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlbXB0eU1lc3NhZ2UucGFzc3dvcmRDb25maXJtICYmICFwYXNzd29yZENvbmZpcm0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHk6ICFwYXNzd29yZENvbmZpcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWhhc1Zpc2libGVQYXNzd29yZENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFzIGZhLWV5ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1lbHNlIGNsYXNzPVwiZmFzIGZhLWV5ZS1zbGFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZENvbmZpcm0pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVtcHR5TWVzc2FnZS5wYXNzd29yZENvbmZpcm0gJiYgIXBhc3N3b3JkQ29uZmlybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbWVzc2FnZS1kYW5nZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IHZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLnBhc3N3b3JkQ29uZmlybSAmJiAhcGFzc3dvcmRDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgZW1wdHlNZXNzYWdlLnBhc3N3b3JkQ29uZmlybSB9fTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidXNlclR5cGUgPT09ICdkb2N0b3InXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInJlZ2lzdGVyRGV0YWlscy5udW1ScHBzQW1lbGlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIk51bcOpcm8gUlBQUyBvdSBBREVMSVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24tYWZ0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLm51bVJwcHNBbWVsaSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZWdpc3RlckRldGFpbHMubnVtUnBwc0FtZWxpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5udW1ScHBzQW1lbGkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVnaXN0ZXJEZXRhaWxzLm51bVJwcHNBbWVsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtZXNzYWdlLWRhbmdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbXB0eU1lc3NhZ2UubnVtUnBwc0FtZWxpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3QtY2hvaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInVzZXJUeXBlID09PSAncGF0aWVudCcgJiYgIXVzZXJIYXNEb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi8uLi9pbWcvaWNvbnMvaW5mb3JtYXRpb24uc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpY29uIGluZm9ybWF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbiBkZSBub3MgcHJhdGljaWVucyB2YSBwcmVuZHJlIGNvbnRhY3QgYXZlYyB2b3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3VyJm5ic3A7w6lsYWJvcmVyIGxlIHRyYWl0ZW1lbnQgYXBwcm9wcmnDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbnRhY3QtcGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNhY3RpdmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghcmVnaXN0ZXJEZXRhaWxzLmVtYWlsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAhPSBudWxsKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIWNvbnRhY3RUZWwgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb250YWN0VGVsICYmIGNvbnRhY3RUZWwubGVuZ3RoIDwgNSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yVGVsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKZSBzb3VoYWl0ZSBxdWUgbCdvbiBtZSBjb250YWN0ZSBwYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLXJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZWdpc3RlckRldGFpbHMuZW1haWwgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgIT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbnRhY3RDaG9pY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRhY3QtaGVscFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4oPHNwYW4gdi1pZj1cInJlZ2lzdGVyRGV0YWlscy5lbWFpbFwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRldGFpbHMuZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlZldWlsbGV6IGVudHJlciB1bmUgYWRyZXNzZSBlbWFpbDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtcmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNvbnRhY3RUZWwgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRhY3RUZWwgJiYgY29udGFjdFRlbC5sZW5ndGggPCA1KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclRlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbnRhY3RDaG9pY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHTDqWzDqXBob25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250YWN0LWhlbHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+KDxzcGFuIHYtaWY9XCJjb250YWN0VGVsXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3RUZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGFjdC1oZWxwXCIgdi1lbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+VmV1aWxsZXogZW50cmVyIHVuIG51bS4gZGUgdMOpbC48L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPik8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLXJhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjY2VwdC1DRy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlbXB0eU1lc3NhZ2UuYWNjZXB0Q0cgJiYgIWFjY2VwdENHLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1jaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY2VwdENHXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBhY2NlcHRDRyB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+aidhaSBsdSBldCBqJ2FjY2VwdGUgbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwibW9kYWxDRyA9IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Y29uZGl0aW9ucyBnw6luw6lyYWxlczwvYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbXB0eS1lcnJvci1tZXNzIHB0LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVtcHR5TWVzc2FnZS5hY2NlcHRDRyAmJiAhYWNjZXB0Q0dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbXB0eU1lc3NhZ2UuYWNjZXB0Q0cgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZDogYnRuTG9hZGluZ1JlZ2lzdGVyIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nUmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkUmVnaXN0cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHVzZXJUeXBlID09PSAncGF0aWVudCcgJiYgdXNlckhhc0RvY3RvcikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclR5cGUgPT09ICdkb2N0b3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UydpbnNjcmlyZTwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtaWY9XCJ1c2VyVHlwZSA9PT0gJ3BhdGllbnQnICYmICF1c2VySGFzRG9jdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Qydlc3QgcGFydGkgITwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRpdmlkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHVzZXJUeXBlID09PSAncGF0aWVudCcgJiYgdXNlckhhc0RvY3RvcikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclR5cGUgPT09ICdkb2N0b3InXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci10ZXh0XCI+b3U8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1jb250YWluZXIgc29jaWFsLXJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh1c2VyVHlwZSA9PT0gJ3BhdGllbnQnICYmIHVzZXJIYXNEb2N0b3IpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJUeXBlID09PSAnZG9jdG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWdpc3Rlck9hdXRoKCdmYWNlYm9vaycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTJ2luc2NyaXJlIGF2ZWMgPGkgY2xhc3M9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdnMtYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWdpc3Rlck9hdXRoKCdnb29nbGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlMnaW5zY3JpcmUgYXZlYyA8aSBjbGFzcz1cImZhYiBmYS1nb29nbGVcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImxvYWRpbmctZm9ybS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGxvYWRpbmcsIGkpIGluIDlcIlxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgbG9hZGluZy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx2cy1kaWFsb2cgd2lkdGg9XCI0NTBweFwiIHYtbW9kZWw9XCJtb2RhbENHXCI+XHJcbiAgICAgICAgICAgIDxoMj5Db25kaXRpb25zIEfDqW7DqXJhbGVzPC9oMj5cclxuICAgICAgICAgICAgPENHIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dnMtYnV0dG9uIGNsYXNzPVwidy0xMDBcIiBAY2xpY2s9XCJ2YWxpZEFjY2VwdENHKClcIlxyXG4gICAgICAgICAgICAgICAgICAgID5KJ2FpIGx1IGV0IGonYWNjZXB0ZTwvdnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdnMtZGlhbG9nPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGYgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgQ0cgZnJvbSBcIi4vQ29uZGl0aW9uR2VuZXJhbGUudnVlXCI7XHJcbmltcG9ydCBEb2N0b3JTZWxlY3RCb3ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRG9jdG9yU2VsZWN0Qm94LnZ1ZVwiO1xyXG5pbXBvcnQgVnVlUGhvbmVOdW1iZXJJbnB1dCBmcm9tIFwidnVlLXBob25lLW51bWJlci1pbnB1dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIENHLFxyXG4gICAgICAgIERvY3RvclNlbGVjdEJveCxcclxuICAgICAgICBWdWVQaG9uZU51bWJlcklucHV0LFxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlclR5cGU6IFN0cmluZyxcclxuICAgICAgICB1c2VySGFzRG9jdG9yOiBCb29sZWFuLFxyXG4gICAgICAgIGNzcmZUb2tlblJlZ2lzdGVyOiBTdHJpbmcsXHJcbiAgICAgICAgY3NyZlRva2VuQ29udGFjdDogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJEZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgICBkb2N0b3JTZWxlY3Q6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGxhaW5QYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgICAgIG51bVJwcHNBbWVsaTogXCJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVtcHR5TWVzc2FnZToge1xyXG4gICAgICAgICAgICAgICAgZG9jdG9yU2VsZWN0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBsYWluUGFzc3dvcmQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZENvbmZpcm06IG51bGwsXHJcbiAgICAgICAgICAgICAgICBudW1ScHBzQW1lbGk6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRDRzogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFjdFRlbDogbnVsbCxcclxuICAgICAgICAgICAgY29udGFjdENob2ljZTogbnVsbCxcclxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtOiBcIlwiLFxyXG4gICAgICAgICAgICBoYXNWaXNpYmxlUGFzc3dvcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBoYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtOiBmYWxzZSxcclxuICAgICAgICAgICAgYnRuTG9hZGluZ1JlZ2lzdGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9ybUxvYWRpbmdSZWdpc3RlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vZGFsQ0c6IGZhbHNlLFxyXG4gICAgICAgICAgICBhY2NlcHRDRzogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdmFsaWRBY2NlcHRDRygpIHtcclxuICAgICAgICAgICAgdGhpcy5hY2NlcHRDRyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxDRyA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRSZWdpc3RyYXRpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJZkZpZWxkc0FyZU5vdEVtcHR5KCkgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1JlZ2lzdGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUxvYWRpbmdSZWdpc3RlciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KGAvaW5zY3JpcHRpb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90b2tlbjogdGhpcy5jc3JmVG9rZW5SZWdpc3RlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yU2VsZWN0SWQ6IHRoaXMucmVnaXN0ZXJEZXRhaWxzLmRvY3RvclNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlZ2lzdGVyRGV0YWlscy5kb2N0b3JTZWxlY3QuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6IHRoaXMucmVnaXN0ZXJEZXRhaWxzLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IHRoaXMucmVnaXN0ZXJEZXRhaWxzLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMucmVnaXN0ZXJEZXRhaWxzLmVtYWlsLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWluUGFzc3dvcmQ6IHRoaXMucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVJwcHNBbWVsaTogdGhpcy5yZWdpc3RlckRldGFpbHMubnVtUnBwc0FtZWxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucmVnaXN0ZXJEZXRhaWxzLm51bVJwcHNBbWVsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyVHlwZTogdGhpcy51c2VyVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uU3RheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5zY3JpcHRpb24gdmFsaWTDqWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFjdENob2ljZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY29udGFjdFRlbCB8fCB0aGlzLnJlZ2lzdGVyRGV0YWlscy5lbWFpbCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclR5cGUgPT09IFwicGF0aWVudFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy51c2VySGFzRG9jdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0KGAvY29udGFjdGAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0aGlzLmNzcmZUb2tlbkNvbnRhY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RuYW1lOiB0aGlzLnJlZ2lzdGVyRGV0YWlscy5sYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiB0aGlzLnJlZ2lzdGVyRGV0YWlscy5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnJlZ2lzdGVyRGV0YWlscy5lbWFpbC50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0VGVsOiB0aGlzLmNvbnRhY3RUZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3RDaG9pY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3RDaG9pY2UgPT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmNvbnRhY3RDaG9pY2UgPT0gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0w6lsw6lwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByaXNlIGRlIGNvbnRhY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXREYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2Nvbm5leGlvbmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVycmV1clwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldERhdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9jb25uZXhpb25gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb25TdGF5KFwiRXJyZXVyXCIsIGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1JlZ2lzdGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUxvYWRpbmdSZWdpc3RlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uRW1haWwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmUgPVxyXG4gICAgICAgICAgICAgICAgL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZS50ZXN0KFN0cmluZyh0aGlzLnJlZ2lzdGVyRGV0YWlscy5lbWFpbCkudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFjdENob2ljZSA9IHRoaXMuY29udGFjdFRlbCA/IDIgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWVyY2kgZCdlbnRyZXIgdW4gZW1haWwgdmFsaWRlLlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWN0Q2hvaWNlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvblBhc3N3b3JkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkICE9PSB0aGlzLnBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJMZXMgbW90cyBkZSBwYXNzZSBuZSBjb3JyZXNwb25kZW50IHBhcy5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXREYXRhKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGV0YWlscyA9IHtcclxuICAgICAgICAgICAgICAgIGRvY3RvclNlbGVjdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFpblBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbnVtUnBwc0FtZWxpOiBcIlwiLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgIGRvY3RvclNlbGVjdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwbGFpblBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbnVtUnBwc0FtZWxpOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0Q0c6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkQ29uZmlybSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0Q0cgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWN0VGVsID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jb250YWN0Q2hvaWNlID0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZ2lzdGVyT2F1dGgoc29jaWFsKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJZkZpZWxkc0FyZU5vdEVtcHR5KHRydWUpICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuZW1haWxcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb2N0b3JJZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRldGFpbHMuZG9jdG9yU2VsZWN0ICYmIHRoaXMudXNlckhhc0RvY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucmVnaXN0ZXJEZXRhaWxzLmRvY3RvclNlbGVjdC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jdG9yTnVtUnBwc0FtZWxpID0gdGhpcy5yZWdpc3RlckRldGFpbHMubnVtUnBwc0FtZWxpXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlZ2lzdGVyRGV0YWlscy5udW1ScHBzQW1lbGlcclxuICAgICAgICAgICAgICAgICAgICA6IFwibmNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9vYXV0aC9jb25uZWN0LyR7dGhpcy51c2VyVHlwZX0vJHtzb2NpYWx9LyR7ZG9jdG9ySWR9LyR7ZG9jdG9yTnVtUnBwc0FtZWxpfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldERvY3RvclNlbGVjdGVkKGRvY3RvclNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZXRhaWxzLmRvY3RvclNlbGVjdCA9IGRvY3RvclNlbGVjdGVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tJZkZpZWxkc0FyZU5vdEVtcHR5KG9hdXRoID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKCFvYXV0aCAmJiAhdGhpcy5yZWdpc3RlckRldGFpbHMubGFzdG5hbWUpIHx8XHJcbiAgICAgICAgICAgICAgICAoIW9hdXRoICYmICF0aGlzLnJlZ2lzdGVyRGV0YWlscy5maXJzdG5hbWUpIHx8XHJcbiAgICAgICAgICAgICAgICAoIW9hdXRoICYmICF0aGlzLnJlZ2lzdGVyRGV0YWlscy5lbWFpbCkgfHxcclxuICAgICAgICAgICAgICAgICghb2F1dGggJiZcclxuICAgICAgICAgICAgICAgICAgICAoIXRoaXMucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucGFzc3dvcmRDb25maXJtKSkgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLnVzZXJUeXBlID09PSBcInBhdGllbnRcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckhhc0RvY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnJlZ2lzdGVyRGV0YWlscy5kb2N0b3JTZWxlY3QpIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy51c2VyVHlwZSA9PT0gXCJkb2N0b3JcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnJlZ2lzdGVyRGV0YWlscy5udW1ScHBzQW1lbGkpIHx8XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5hY2NlcHRDR1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGlmICghb2F1dGggJiYgIXRoaXMucmVnaXN0ZXJEZXRhaWxzLmxhc3RuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eU1lc3NhZ2UubGFzdG5hbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZvdXMgZGV2ZXogcmVuc2VpZ25lciB2b3RyZSBub21cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW9hdXRoICYmICF0aGlzLnJlZ2lzdGVyRGV0YWlscy5maXJzdG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZS5maXJzdG5hbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZvdXMgZGV2ZXogcmVuc2VpZ25lciB2b3RyZSBwcsOpbm9tXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFvYXV0aCAmJiAhdGhpcy5yZWdpc3RlckRldGFpbHMuZW1haWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZS5lbWFpbCA9IFwiVm91cyBkZXZleiByZW5zZWlnbmVyIHVuIGVtYWlsXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFvYXV0aCAmJiAhdGhpcy5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlNZXNzYWdlLnBsYWluUGFzc3dvcmQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZvdXMgZGV2ZXogcmVuc2VpZ25lciB1biBtb3QgZGUgcGFzc2VcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW9hdXRoICYmICF0aGlzLnBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlNZXNzYWdlLnBhc3N3b3JkQ29uZmlybSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVm91cyBkZXZleiBjb25maXJtZXIgdm90cmUgbW90IGRlIHBhc3NlXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclR5cGUgPT09IFwicGF0aWVudFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySGFzRG9jdG9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMucmVnaXN0ZXJEZXRhaWxzLmRvY3RvclNlbGVjdFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eU1lc3NhZ2UuZG9jdG9yU2VsZWN0ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJWb3VzIGRldmV6IHPDqWxlY3Rpb25uZXIgdm90cmUgcHJhdGljaWVuXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclR5cGUgPT09IFwiZG9jdG9yXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5yZWdpc3RlckRldGFpbHMubnVtUnBwc0FtZWxpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZS5udW1ScHBzQW1lbGkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZvdXMgZGV2ZXogcmVuc2VpZ25lciB2b3RyZSBudW3DqXJvIFJQUFMgb3UgQURFTElcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWNjZXB0Q0cpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZS5hY2NlcHRDRyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVm91cyBkZXZleiBhY2NlcHRlciBsZXMgY29uZGl0aW9ucyBnw6luw6lyYWxlc1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGdldFNlY3VyZVBhc3NQcm9ncmVzcygpIHtcclxuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIGF0IGxlYXN0IG9uZSBudW1iZXJcclxuICAgICAgICAgICAgaWYgKC9cXGQvLnRlc3QodGhpcy5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IDIwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhdCBsZWFzdCBvbmUgY2FwaXRhbCBsZXR0ZXJcclxuICAgICAgICAgICAgaWYgKC8oLipbQS1aXS4qKS8udGVzdCh0aGlzLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gMjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGF0IG1lbm9ucyBhIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICBpZiAoLyguKlthLXpdLiopLy50ZXN0KHRoaXMucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSAyMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbW9yZSB0aGFuIDkgZGlnaXRzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkLmxlbmd0aCA+PSA5KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSAyMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYXQgbGVhc3Qgb25lIHNwZWNpYWwgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgIGlmICgvW15BLVphLXowLTldLy50ZXN0KHRoaXMucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSAyMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JUZWwoKSB7XHJcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGFjdFRlbCAmJiB0aGlzLmNvbnRhY3RUZWwubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRhY3RUZWxGb3JtYXRlZCA9IHRoaXMuY29udGFjdFRlbC5yZXBsYWNlKC8gL2csIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlID0gL14wWzEtOV0oWy0uIF0/WzAtOV17Mn0pezR9JC87XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFyZS50ZXN0KFN0cmluZyhjb250YWN0VGVsRm9ybWF0ZWQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGFjdFRlbCAmJiB0aGlzLmNvbnRhY3RUZWwubGVuZ3RoID09IDE0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250YWN0VGVsLnJlcGxhY2UoLyAvZywgXCJcIikubGVuZ3RoID09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWN0Q2hvaWNlID0gMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWN0Q2hvaWNlID0gdGhpcy5yZWdpc3RlckRldGFpbHMuZW1haWwgPyAxIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFjdENob2ljZSA9IHRoaXMucmVnaXN0ZXJEZXRhaWxzLmVtYWlsID8gMSA6IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEVtcHR5RG9jdG9yU2VsZWN0RXJyb3JNZXNzYWdlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbXB0eU1lc3NhZ2UuZG9jdG9yU2VsZWN0O1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi52cy1kaWFsb2cgLnZzLWRpYWxvZ19fY29udGVudCBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4jcmVnaXN0ZXItZm9ybSB7XHJcbiAgICAubG9hZGluZy1mb3JtLWJsb2NrIHtcclxuICAgICAgICA+IC5sb2FkaW5nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1LjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0LWZpbHRlciB7XHJcbiAgICAgICAgJi5lcnJvciB7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICNmZjU2NGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZW1wdHktZXJyb3ItbWVzcyB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBjb2xvcjogI2ZmNTY0YjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XHJcbiAgICAgICAgYW5pbWF0aW9uOiAwLjI1cyBlYXNlIDBzIGZvcndhcmRzIGhlaWdodEVudGVyO1xyXG5cclxuICAgICAgICAmLnB0LTAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZzLWNoZWNrYm94LWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBjb2xvcjogI2I1YWM5NDtcclxuICAgICAgICBmb250LXNpemU6IDEuMzFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnZzLWNoZWNrYm94LWNvbnRlbnQuYWN0aXZlIHtcclxuICAgICAgICAudnMtY2hlY2tib3gtbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogIzIyMmU1NDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZzLWNoZWNrYm94LWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgIGhlaWdodDogMTlweDtcclxuICAgIH1cclxuXHJcbiAgICAudnMtaWNvbi1jaGVjayBzcGFuIC5saW5lMiB7XHJcbiAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZzLWljb24tY2hlY2sgc3BhbiAubGluZTEge1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJvdHRvbTogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC52dWUtcGhvbmUtbnVtYmVyLWlucHV0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIHRleHRhcmVhLFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNnJlbSAxLjdyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2U3ZGZjZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgJjpmb2N1cy12aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICNjMWI3OWQ7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMi41cmVtIC0wLjRyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyB+IGxhYmVsLFxyXG4gICAgICAgICAgICAmLmZpbGxlZCB+IGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIHRvcDogMS42cmVtO1xyXG4gICAgICAgICAgICBsZWZ0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2MxYjc5ZDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4wNXJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZ1ZS1waG9uZS1udW1iZXItaW5wdXQge1xyXG4gICAgICAgICYuZmlsbGVkIHtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjhyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjYXJldC1jb2xvcjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmZvY3VzIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNjMWI3OWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmVycm9yIHtcclxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgODYsIDc1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0LWNob2ljZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjhyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNi41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdkZmNkO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmNWYwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2JiYjRhMTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0wLjAxcmVtO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDByZW0gMHJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMC4zJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLjFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICAgICAgICAgICYuZGVzYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjZhZGExO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmNvbnRhY3QtcGFyIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjd2dztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcblxyXG4gICAgICAgICAgICAuY29udGFjdC1oZWxwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwdnc7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0M3Z3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzNDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDV2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ3dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZzLXJhZGlvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudnMtcmFkaW8tY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAudnMtcmFkaW9fX2VmZmVjdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSAudnMtcmFkaW9fX2VmZmVjdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDRjYmI4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudnMtcmFkaW8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNhY2NlcHQtQ0ctYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAmLmVycm9yIHtcclxuICAgICAgICAgICAgLnZzLWNoZWNrYm94LWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY1NjRiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC52cy1jaGVja2JveC1tYXNrOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY1NjRiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ1c2VyLWhhcy1kb2N0b3ItY2hvaWNlXCI+XHJcbiAgICAgICAgPGgxPkF2ZXotdm91cyZuYnNwO3VuJm5ic3A7cHJhdGljaWVuID88L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwidmFsaWRVc2VySGFzRG9jdG9yQ2hvaWNlKGZhbHNlKVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IHNlY29uZGFyeTogJHBhcmVudC51c2VySGFzRG9jdG9yID09IHRydWUgfVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE5vbiwgamUgbidlbiBhaSBwYXNcclxuICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwidmFsaWRVc2VySGFzRG9jdG9yQ2hvaWNlKHRydWUpXCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgc2Vjb25kYXJ5OiAkcGFyZW50LnVzZXJIYXNEb2N0b3IgPT0gZmFsc2UgfVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE91aSwgaidhaSB1biBwcmF0aWNpZW5cclxuICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdmFsaWRVc2VySGFzRG9jdG9yQ2hvaWNlKHVzZXJIYXNEb2N0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcInVzZXJIYXNEb2N0b3JDaG9pY2VcIiwgdXNlckhhc0RvY3Rvcik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbi8vIEBpbXBvcnQgXCIuLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuI3VzZXItaGFzLWRvY3Rvci1jaG9pY2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWF4LWhlaWdodDogMjVyZW07XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNHJlbTtcclxuXHJcbiAgICAgICAgLnZzLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ1c2VyLXR5cGUtY2hvaWNlXCI+XHJcbiAgICAgICAgPGgxPkRpdGVzLW5vdXMgZW4gcGx1cyDDoCZuYnNwO3Byb3BvcyZuYnNwO2RlJm5ic3A7dm91czwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZFVzZXJUeXBlQ2hvaWNlKCdwYXRpZW50JylcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBzZWNvbmRhcnk6ICRwYXJlbnQudXNlclR5cGUgPT0gJ2RvY3RvcicgfVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEplIHN1aXMgdW4gcGFydGljdWxpZXJcclxuICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwidmFsaWRVc2VyVHlwZUNob2ljZSgnZG9jdG9yJylcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBzZWNvbmRhcnk6ICRwYXJlbnQudXNlclR5cGUgPT0gJ3BhdGllbnQnIH1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBKZSBzdWlzIHVuIHByb2Zlc3Npb25uZWxcclxuICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdmFsaWRVc2VyVHlwZUNob2ljZSh1c2VyVHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwidXNlclR5cGVDaG9pY2VcIiwgdXNlclR5cGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4vLyBAaW1wb3J0IFwiLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbiN1c2VyLXR5cGUtY2hvaWNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleDogMTtcclxuICAgIG1heC1oZWlnaHQ6IDI1cmVtO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDI0cmVtO1xyXG5cclxuICAgICAgICAudnMtYnV0dG9uIHtcclxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNjY2ZWQ2NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jNjY2ZWQ2NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImM2NjZlZDY2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzY2NmVkNjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzY2NmVkNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzY2NmVkNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNjY2ZWQ2NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjNjY2ZWQ2NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9mdWxscGFnZS9SZWdpc3Rlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbmRpdGlvbkdlbmVyYWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMGU4YWJiNiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db25kaXRpb25HZW5lcmFsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbmRpdGlvbkdlbmVyYWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Db25kaXRpb25HZW5lcmFsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMGU4YWJiNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjMwZThhYmI2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzBlOGFiYjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzBlOGFiYjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzBlOGFiYjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbmRpdGlvbkdlbmVyYWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMGU4YWJiNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMGU4YWJiNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Db25kaXRpb25HZW5lcmFsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlZ2lzdGVyRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODlhZGNhMGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVnaXN0ZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVnaXN0ZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9SZWdpc3RlckZvcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4OWFkY2EwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4OWFkY2EwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4OWFkY2EwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVnaXN0ZXJGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04OWFkY2EwZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4OWFkY2EwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9SZWdpc3RlckZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VySGFzRG9jdG9yQ2hvaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNDI3ZmZlNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VySGFzRG9jdG9yQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlckhhc0RvY3RvckNob2ljZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVXNlckhhc0RvY3RvckNob2ljZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y0MjdmZmU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y0MjdmZmU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y0MjdmZmU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VySGFzRG9jdG9yQ2hvaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNDI3ZmZlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmNDI3ZmZlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Vc2VySGFzRG9jdG9yQ2hvaWNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlclR5cGVDaG9pY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5MDM0YTk4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJUeXBlQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlclR5cGVDaG9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1VzZXJUeXBlQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjkwMzRhOTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjkwMzRhOTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjkwMzRhOTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJUeXBlQ2hvaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOTAzNGE5OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyOTAzNGE5OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Vc2VyVHlwZUNob2ljZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmRpdGlvbkdlbmVyYWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmRpdGlvbkdlbmVyYWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3RlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0ZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySGFzRG9jdG9yQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJIYXNEb2N0b3JDaG9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJUeXBlQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJUeXBlQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBmdWxscGFnZVwiIH0sXG4gICAgW1xuICAgICAgX3ZtLmFjdGl2ZVN0ZXAgIT0gMVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLXByZXZcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBmbG9hdGluZzogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmVTdGVwICE9IF92bS5wcmV2aW91c1N0ZXBcbiAgICAgICAgICAgICAgICAgICAgPyAoX3ZtLmFjdGl2ZVN0ZXAgPSBfdm0ucHJldmlvdXNTdGVwKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5hY3RpdmVTdGVwID09IDNcbiAgICAgICAgICAgICAgICAgICAgPyAoX3ZtLmFjdGl2ZVN0ZXAgPSAyKVxuICAgICAgICAgICAgICAgICAgICA6IChfdm0uYWN0aXZlU3RlcCA9IDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIiB9KV1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJyZWdpc3Rlci1zdGVwc1wiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0ZXBcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmFjdGl2ZVN0ZXAgPT0gMSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0QWN0aXZlU3RlcCgxKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgMVxcbiAgICAgICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0ZXBcIixcbiAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmFjdGl2ZVN0ZXAgPT0gMixcbiAgICAgICAgICAgICAgZGVzYWN0aXZlOiBfdm0uYWN0aXZlU3RlcCA9PSAzICYmIF92bS51c2VyVHlwZSA9PSBcImRvY3RvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0udXNlclR5cGUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldEFjdGl2ZVN0ZXAoMilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIDJcXG4gICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGVwXCIsXG4gICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5hY3RpdmVTdGVwID09IDMgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0udXNlckhhc0RvY3RvciA9PT0gbnVsbCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0QWN0aXZlU3RlcCgzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgM1xcbiAgICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiLCBtb2RlOiBcIm91dC1pblwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5hY3RpdmVTdGVwID09IDFcbiAgICAgICAgICAgID8gX2MoXCJVc2VyVHlwZUNob2ljZVwiLCB7XG4gICAgICAgICAgICAgICAgb246IHsgdXNlclR5cGVDaG9pY2U6IF92bS5zZXRVc2VyVHlwZUNob2ljZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmFjdGl2ZVN0ZXAgPT0gMlxuICAgICAgICAgICAgPyBfYyhcIlVzZXJIYXNEb2N0b3JDaG9pY2VcIiwge1xuICAgICAgICAgICAgICAgIG9uOiB7IHVzZXJIYXNEb2N0b3JDaG9pY2U6IF92bS5zZXRVc2VySGFzRG9jdG9yQ2hvaWNlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uYWN0aXZlU3RlcCA9PSAzXG4gICAgICAgICAgICA/IF9jKFwiUmVnaXN0ZXJGb3JtXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdXNlclR5cGU6IF92bS51c2VyVHlwZSxcbiAgICAgICAgICAgICAgICAgIHVzZXJIYXNEb2N0b3I6IF92bS51c2VySGFzRG9jdG9yLFxuICAgICAgICAgICAgICAgICAgY3NyZlRva2VuUmVnaXN0ZXI6IF92bS5jc3JmVG9rZW5SZWdpc3RlcixcbiAgICAgICAgICAgICAgICAgIGNzcmZUb2tlbkNvbnRhY3Q6IF92bS5jc3JmVG9rZW5Db250YWN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwibG9nb1wiIH0gfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9sb2dvLWtpdmlkLWdyYWRpZW50LnN2Z1wiKSxcbiAgICAgICAgICBhbHQ6IFwiTG9nbyBLaXZpZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIktpdmlkXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1jZ1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2tpdmlkXCIgfSwgW1xuICAgICAgICBfYyhcImgxXCIsIFtcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiQ29uZGl0aW9ucyBnw6luw6lyYWxlcyBkJ3V0aWxpc2F0aW9uXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIxLiBNb2RhbGl0w6lzIGTigJlhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMlwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjEuMSBVdGlsaXNhdGV1cnMgUHJhdGljaWVucyBwcm9mZXNzaW9ubmVsc1wiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazNcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1XCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiYS4gQXV0aGVudGlmaWNhdGlvblwiKV0pXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExvcnMgZGUgbGEgcHJlbWnDqHJlIHV0aWxpc2F0aW9uIGRlIGxhIHBsYXRlZm9ybWUsIGxlIHByYXRpY2llblxcbiAgICAgICAgICAgIGNvbXBsw6h0ZSB1biBmb3JtdWxhaXJlIGTigJlpbnNjcmlwdGlvbiBlbiBsaWduZSBlbiBzYWlzaXNzYW50IHVuXFxuICAgICAgICAgICAgZW1haWwgZXQgdW4gbW90IGRlIHBhc3NlIG91IHNlIGNvbm5lY3RlIHZpYSBzb24gY29tcHRlIEZhY2Vib29rXFxuICAgICAgICAgICAgb3UgR29vZ2xlLiBVbmUgZm9pcyBsZSBmb3JtdWxhaXJlIGVudm95w6ksIHVuIGVtYWlsIGRlIHZhbGlkYXRpb25cXG4gICAgICAgICAgICBlc3QgZW52b3nDqSDDoCBs4oCZYWRyZXNzZSBlLW1haWwgc2Fpc2llIHBhciBsZSBwcmF0aWNpZW4gbOKAmWludml0YW50XFxuICAgICAgICAgICAgw6AgdmFsaWRlciBzb24gY29tcHRlIGVuIGNsaXF1YW50IHN1ciB1biBsaWVuIGRlIGNvbmZpcm1hdGlvbi5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazRcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1XCIsIFtcbiAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIxLjIgVXRpbGlzYXRldXJzIG5vbi1wcm9mZXNzaW9ubmVsc1wiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZGVzIHByZXN0YXRpb25zIHF14oCZaWwgZm91cm5pdCDDoCBzZXMgY2xpZW50cywgbGVcXG4gICAgICAgICAgICBwcmF0aWNpZW4gcHJvZmVzc2lvbm5lbCBkZSBsYSByw6nDqWR1Y2F0aW9uIGV0L291IGR1IHNwb3J0LCBsZXVyXFxuICAgICAgICAgICAgZW50cmVwcmlzZSwgbGV1ciBtdXR1ZWxsZSBvdSBsZXVyIHNlcnZpY2UgZGUgc2FudMOpIGF1IHRyYXZhaWxcXG4gICAgICAgICAgICAoY2ktYXByw6hzIMKrIGxlIFByZXNjcmlwdGV1ciDCuykgdmFsaWRlIGxhIG1pc2UgZW4gcmVsYXRpb24gYXZlY1xcbiAgICAgICAgICAgIGzigJl1dGlsaXNhdGV1ciBldCBnYXJhbnRpZSB1biBhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZS4gTGVzXFxuICAgICAgICAgICAgVXRpbGlzYXRldXJzIHNvbnQgaW52aXTDqXMgw6Agc2UgY29ubmVjdGVyIHN1ciBsYSBQbGF0ZWZvcm1lIHNvaXRcXG4gICAgICAgICAgICBwYXIgbGUgUHJlc2NyaXB0ZXVyLCBxdWkgYXVyYSBjb21tdW5pcXXDqSBhdSBwcsOpYWxhYmxlIMOgIEtJVklELFxcbiAgICAgICAgICAgIGzigJlhZHJlc3NlIGUtbWFpbCBkZSBs4oCZdXRpbGlzYXRldXIgc29pdCBwYXIgbGUgZm9ybXVsYWlyZVxcbiAgICAgICAgICAgIGluc2NyaXB0aW9uIHV0aWxpc2F0ZXVyLCBxdWkgbGV1ciBwZXJtZXR0cm9udCBlbnN1aXRlIGQnw6l0YWJsaXJcXG4gICAgICAgICAgICB1bmUgY29ubmV4aW9uIGF2ZWMgbGUgcHJhdGljaWVuIHByb2Zlc3Npb25uZWwsIHF1aSB2YWxpZGVyYVxcbiAgICAgICAgICAgIGNldHRlIG1pc2UgZW4gY29udGFjdC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgw4AgbGEgc3VpdGUgZGUgbOKAmWluc2NyaXB0aW9uLCB1biBlLW1haWwgZGUgY29uZmlybWF0aW9uIGVzdFxcbiAgICAgICAgICAgIGVudm95w6kgw6AgbOKAmVV0aWxpc2F0ZXVyLiBM4oCZVXRpbGlzYXRldXIgZGV2cmEgYWxvcnMgY2xpcXVlciBzdXIgdW5cXG4gICAgICAgICAgICBsaWVuIGRlIGNldCBlLW1haWwgcG91ciBkw6lmaW5pciBzb24gbW90IGRlIHBhc3NlIHBlcnNvbm5lbCxcXG4gICAgICAgICAgICBjb21wbMOpdGVyIGV0IGNvbmZpcm1lciBzb24gY29tcHRlLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBMZXMgVXRpbGlzYXRldXJzIHNvbnQgZGVzIHBlcnNvbm5lcyBwaHlzaXF1ZXMuIENoYXF1ZVxcbiAgICAgICAgICAgIFV0aWxpc2F0ZXVyIGRpc3Bvc2UgZGUgc29uIHByb3ByZSBhY2PDqHMuIElsIGx1aSBlc3QgaW50ZXJkaXQgZGVcXG4gICAgICAgICAgICBwZXJtZXR0cmUgYcyAIHVuIHRpZXJzIGTigJl1dGlsaXNlciBzb24gY29tcHRlIG91IGTigJnDqWNoYW5nZXIgc29uXFxuICAgICAgICAgICAgYWNjw6hzIGF2ZWMgY2VsdWkgZOKAmXVuIGF1dHJlIHV0aWxpc2F0ZXVyLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcms1XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbXG4gICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgMS4zIEluc2NyaXB0aW9uIGF2ZWMgR29vZ2xlIGV0IEZhY2Vib29rICh1dGlsaXNhdGV1cnMgZXRcXG4gICAgICAgICAgICAgICAgICAgIHByb2Zlc3Npb25uZWxzKVxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBOb3VzIHZvdXMgb2Zmcm9ucyBsYSBwb3NzaWJpbGl0w6kgZGUgY3LDqWVyIHZvdHJlIGNvbXB0ZSBLSVZJRCB2aWFcXG4gICAgICAgICAgICB2b3RyZSBjb21wdGUgRmFjZWJvb2sgb3UgR29vZ2xlLCBvdSBkZSByZWxpZXIgdm90cmUgY29tcHRlIEtJVklEXFxuICAgICAgICAgICAgw6Agdm90cmUgY29tcHRlIEZhY2Vib29rIG91IEdvb2dsZS4gVm91cyBzZXJleiBlbnN1aXRlIHLDqWFjaGVtaW7DqVxcbiAgICAgICAgICAgIHZlcnMgRmFjZWJvb2sgb3UgR29vZ2xlIChvw7kgdm91cyBkZXZleiDDqnRyZSBjb25uZWN0w6kgb3VcXG4gICAgICAgICAgICBlbnJlZ2lzdHJlciB1biBjb21wdGUpIGV0IHZvdXMgcG91cnJleiBhbG9ycyBjb25zdWx0ZXIgbGEgbGlzdGVcXG4gICAgICAgICAgICBkZXMgZG9ubsOpZXMgRmFjZWJvb2sgb3UgR29vZ2xlIHZvdXMgY29uY2VybmFudCBkb250IG5vdXMgYXZvbnNcXG4gICAgICAgICAgICBiZXNvaW4sIMOgIHNhdm9pciBsZXMgaW5mb3JtYXRpb25zIGRlIHZvdHJlIHByb2ZpbCBwdWJsaWMgdGVsbGVzXFxuICAgICAgICAgICAgcXVlIHZvdHJlIHByw6lub20sIHZvdHJlIG5vbSwgdm90cmUgc2V4ZSBldCBs4oCZYWRyZXNzZSBlLW1haWxcXG4gICAgICAgICAgICBhc3NvY2nDqWUgw6AgY2UgY29tcHRlLiBDZXMgaW5mb3JtYXRpb25zIHNvbnQgbsOpY2Vzc2FpcmVzIHBvdXIgZGVzXFxuICAgICAgICAgICAgcmFpc29ucyBkJ2lkZW50aWZpY2F0aW9uIGFmaW4gZGUgY3LDqWVyIHBvdXIgdm91cyB1biBjb21wdGUgS0lWSURcXG4gICAgICAgICAgICBzw6ljdXJpc8OpLiBWb3RyZSBjb21wdGUgRmFjZWJvb2sgb3UgR29vZ2xlIGV0IHZvdHJlIGNvbXB0ZSBLSVZJRFxcbiAgICAgICAgICAgIHNlcm9udCBsacOpcyBkZSBmYcOnb24gcGVybWFuZW50ZSBwYXIgbOKAmWludGVybcOpZGlhaXJlIGRlIHZvdHJlXFxuICAgICAgICAgICAgYWRyZXNzZSBlLW1haWwuIENlbGxlLWNpIHNlcmEgY29uc2VydsOpZSBzdXIgbm9zIHNlcnZldXJzIGV0IG5vdXNcXG4gICAgICAgICAgICBs4oCZdXRpbGlzZXJvbnMsIGxlIGNhcyDDqWNow6lhbnQsIHBvdXIgdm91cyBlbnZveWVyIGRlc1xcbiAgICAgICAgICAgIGluZm9ybWF0aW9ucy4gTm91cyBwb3V2b25zIMOpZ2FsZW1lbnQgZMOpdGVybWluZXIgc2kgdm91cyB2b3VzXFxuICAgICAgICAgICAgw6p0ZXMgY29ubmVjdMOpIHBhciBs4oCZaW50ZXJtw6lkaWFpcmUgZGUgRmFjZWJvb2sgb3UgR29vZ2xlLiBEw6hzIHF1ZVxcbiAgICAgICAgICAgIHZvdXMgdm91cyBjb25uZWN0ZXogw6AgRmFjZWJvb2sgb3UgR29vZ2xlLCB2b3VzIHBvdXZleiBhdXNzaSB2b3VzXFxuICAgICAgICAgICAgY29ubmVjdGVyIMOgIEtJVklELiBOb3VzIG5lIGNvbW11bmlxdWVyb25zIGF1Y3VuZSBpbmZvcm1hdGlvblxcbiAgICAgICAgICAgIHZvdXMgY29uY2VybmFudCDDoCBGYWNlYm9vayBvdSDDoCBHb29nbGUgc2FucyB2b3RyZSBjb25zZW50ZW1lbnQuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEltcG9ydGFudCA6IE5vdXMgbuKAmWVucmVnaXN0cm9ucyBlbiBhdWN1bmUgbWFuacOocmUgdm9zIGRvbm7DqWVzIGRlXFxuICAgICAgICAgICAgY29ubmV4aW9uIMOgIEZhY2Vib29rIG91IEdvb2dsZSwgZXQgbidhdm9ucyBwYXMgbGEgcG9zc2liaWxpdMOpIGRlXFxuICAgICAgICAgICAgcHVibGllciBxdW9pIHF1ZSBjZSBzb2l0IHN1ciB2b3RyZSBwcm9maWwgRmFjZWJvb2sgb3UgR29vZ2xlXFxuICAgICAgICAgICAgc2FucyBhdm9pciBvYnRlbnUgdm90cmUgY29uc2VudGVtZW50IGV4cHLDqHMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFZvdXMgcG91dmV6IHZvdXMgaW5mb3JtZXIgc3VyIGxhIGZhw6dvbiBkb250IEZhY2Vib29rIGfDqHJlIGxlc1xcbiAgICAgICAgICAgIHBhcmFtw6h0cmVzIGRlIGNvbmZpZGVudGlhbGl0w6kgZW4gY29uc3VsdGFudCBsYVxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wb2xpY3kucGhwXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BvbGljeS5waHBcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwidVwiLCBbX3ZtLl92KFwicG9saXRpcXVlIGRlIGNvbmZpZGVudGlhbGl0w6lcIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIGV0IGxlc1wiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9sZWdhbC90ZXJtc1wiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9sZWdhbC90ZXJtc1wiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ1XCIsIFtfdm0uX3YoXCJjb25kaXRpb25zIGQndXRpbGlzYXRpb25cIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgZGUgRmFjZWJvb2sgOyB2b3VzIHkgdHJvdXZlcmV6IMOpZ2FsZW1lbnQgbGVzIGNvbmRpdGlvbnMgcXVpXFxuICAgICAgICAgICAgcydhcHBsaXF1ZW50IMOgIGxhIHBvc3NpYmlsaXTDqSBtZW50aW9ubsOpZSBwcsOpY8OpZGVtbWVudCBkZSBzZVxcbiAgICAgICAgICAgIGNvbm5lY3RlciBldCBkZSBzJ2luc2NyaXJlIMOgIEtJVklELiBWb3VzIHBvdXZleiB2b3VzIGluZm9ybWVyXFxuICAgICAgICAgICAgc3VyIGxhIGZhw6dvbiBkb250IEdvb2dsZSBnw6hyZSBsZXMgcGFyYW3DqHRyZXMgZGUgY29uZmlkZW50aWFsaXTDqVxcbiAgICAgICAgICAgIGVuIGNvbnN1bHRhbnQgbGFcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vcHJpdmFjeVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS9wcml2YWN5XCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcInVcIiwgW192bS5fdihcInBvbGl0aXF1ZSBkZSBjb25maWRlbnRpYWxpdMOpXCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBldCBsZXNcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vdGVybXNcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vdGVybXNcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwidVwiLCBbX3ZtLl92KFwiY29uZGl0aW9ucyBkJ3V0aWxpc2F0aW9uXCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGRlIEdvb2dsZSA7IHZvdXMgeSB0cm91dmVyZXogw6lnYWxlbWVudCBsZXMgY29uZGl0aW9ucyBxdWlcXG4gICAgICAgICAgICBz4oCZYXBwbGlxdWVudCDDoCBsYSBwb3NzaWJpbGl0w6kgbWVudGlvbm7DqWUgcHLDqWPDqWRlbW1lbnQgZGUgc2VcXG4gICAgICAgICAgICBjb25uZWN0ZXIgZXQgZGUgcydpbnNjcmlyZSDDoCBLSVZJRFxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrNlwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiMi4gRHJvaXRzIGRlIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExhIHBsYXRlZm9ybWUgZXN0IGV4cGxvaXTDqWUgcGFyIGxhIHNvY2nDqXTDqSBLSVZJRCAoY2ktYXByw6hzIMKrXFxuICAgICAgICAgICAgS0lWSUQgwrspLiBLSVZJRCBlc3QgbGUgdGl0dWxhaXJlIGV0IGRpc3Bvc2UgZGVzIGRyb2l0cyByZWxhdGlmc1xcbiAgICAgICAgICAgIGF1eCBjb21wb3NhbnRzIGV0IGNvbnRlbnVzIGRlIGxhIFBsYXRlZm9ybWUgcHJvdMOpZ8OpcyBwYXIgZGVzXFxuICAgICAgICAgICAgZHJvaXRzIGRlIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlLiBUb3V0ZSBiYXNlIGRlIGRvbm7DqWVzLCB0b3V0XFxuICAgICAgICAgICAgY29udGVudSwgdG91dCBjb21wb3NhbnQsIHRvdXRlIHByw6lzZW50YXRpb24gZXQgdG91dCBhdXRyZVxcbiAgICAgICAgICAgIMOpbMOpbWVudCAodGV4dGVzLCBzb25zLCBncmFwaGlzbWUsIHZpc3VlbHMsIHBob3RvZ3JhcGhpZXMsXFxuICAgICAgICAgICAgdmlkw6lvcywgYmFzZXMgZGUgZG9ubsOpZXMsIGV0Yy4pLCBtYXJxdWUsIGxvZ28gZXQgbm9tIGRlIGRvbWFpbmUsXFxuICAgICAgICAgICAgYXBwYXJhaXNzYW50IHN1ciBsYSBQbGF0ZWZvcm1lLCBzb250IGxhIHByb3ByacOpdMOpIGRlIEtJVklEIGV0IGxlXFxuICAgICAgICAgICAgY2FzIMOpY2jDqWFudCBkZSBzZXMgcGFydGVuYWlyZXMsIGV0IGVzdCBwcm90w6lnw6kgcGFyIGxlcyBsb2lzIGVuXFxuICAgICAgICAgICAgdmlndWV1ciBzdXIgbGEgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFRvdXRlIHJlcHJvZHVjdGlvbiBldCB0b3V0ZSBkaWZmdXNpb24gZGUgY2VzIMOpbMOpbWVudHMsIHNhbnNcXG4gICAgICAgICAgICBhdXRvcmlzYXRpb24gw6ljcml0ZSBwcsOpYWxhYmxlIGRlIEtJVklELCBleHBvc2VudCBsZXNcXG4gICAgICAgICAgICBjb250cmV2ZW5hbnRzIMOgIGRlcyBwb3Vyc3VpdGVzIGp1ZGljaWFpcmVzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrN1wiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiMy4gTGllbnMgaHlwZXJ0ZXh0ZXNcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgS0lWSUQgbuKAmWV4ZXJjZSBhdWN1biBjb250csO0bGUgcXVhbnQgYXUgY29udGVudSBkZXMgc2l0ZXMgdGllcnMuXFxuICAgICAgICAgICAgTOKAmWV4aXN0ZW5jZSBk4oCZdW4gbGllbiBoeXBlcnRleHRlIGVudHJlIGxhIFBsYXRlZm9ybWUgZXQgdW4gc2l0ZVxcbiAgICAgICAgICAgIHRpZXJzIG5lIHNpZ25pZmllIHBhcyBxdWUgS0lWSUQgYXNzdW1lIHVuZSBxdWVsY29ucXVlIGdhcmFudGllXFxuICAgICAgICAgICAgb3UgcmVzcG9uc2FiaWxpdMOpIHF1YW50IMOgIHNvbiBjb250ZW51IG91IGzigJl1c2FnZSBxdWkgcGV1dCBlblxcbiAgICAgICAgICAgIMOqdHJlIGZhaXQuIEtJVklEIG5lIHNhdXJhaXQgw6p0cmUgcmVzcG9uc2FibGUgb3Ugc29saWRhaXJlbWVudFxcbiAgICAgICAgICAgIHRlbnUgZHUgY29udGVudSDDqWRpdMOpIGV0L291IGjDqWJlcmfDqSBzdXIgdW4gc2l0ZSB0aWVycyB2ZXJzXFxuICAgICAgICAgICAgbGVxdWVsIGxhIFBsYXRlZm9ybWUgcmVkaXJpZ2UgZHUgZmFpdCBk4oCZdW4gbGllbiBoeXBlcnRleHRlIG91XFxuICAgICAgICAgICAgY29udGVudSDDqWRpdMOpIGV0L291IGjDqWJlcmfDqSBzdXIgdW4gc2l0ZSB0aWVycyDDqXRhYmxpc3NhbnQgdW5cXG4gICAgICAgICAgICBsaWVuIHZlcnMgbGEgUGxhdGVmb3JtZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazhcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjQuIFByb3RlY3Rpb24gZGVzIERvbm7DqWVzIFBlcnNvbm5lbGxlc1wiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBQb3VyIHRvdXRlIGluZm9ybWF0aW9uIHJlbGF0aXZlIMOgIGxhIHByb3RlY3Rpb24gZGVzIGRvbm7DqWVzXFxuICAgICAgICAgICAgcGVyc29ubmVsbGVzLCBhdXggY29va2llcyB1dGlsaXPDqXMgcGFyIGxhIFBsYXRlZm9ybWUgZXQgYXV4XFxuICAgICAgICAgICAgZHJvaXRzIGRlIGzigJlVdGlsaXNhdGV1ciBxdWFudCDDoCBs4oCZdXNhZ2UgZGUgc2VzIGRvbm7DqWVzXFxuICAgICAgICAgICAgcGVyc29ubmVsbGVzLCBs4oCZVXRpbGlzYXRldXIgZXN0IGludml0w6kgw6Agc2UgcsOpZsOpcmVyIMOgIGxhXFxuICAgICAgICAgICAgwqtcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIsKgUG9saXRpcXVlIGRlIENvbmZpZGVudGlhbGl0w6kgZGVzIERvbm7DqWVzXFxuICAgICAgICAgICAgICAgIFBlcnNvbm5lbGxlc1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiwqDCuy5cXG4gICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazlcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjUuIFJlc3BvbnNhYmlsaXTDqVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxMFwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJhLiBSZXNwb25zYWJpbGl0w6kgS0lWSURcIildKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBMYSBQbGF0ZWZvcm1lIGV0IHRvdXQgZG9jdW1lbnQgb3UgY29udGVudSBhY2Nlc3NpYmxlIHN1ciBsYVxcbiAgICAgICAgICAgIFBsYXRlZm9ybWUgc29udCBmb3VybmlzIMKrIGVuIGzigJnDqXRhdCDCuywgwqsgdGVscyBxdWVscyDCuywgwqsgc2lcXG4gICAgICAgICAgICBkaXNwb25pYmxlcyDCuy4gT3V0cmUgbGVzIGdhcmFudGllcyBsw6lnYWxlcyBhdXhxdWVsbGVzIGlsIG5lIHBldXRcXG4gICAgICAgICAgICDDqnRyZSBkw6lyb2fDqSwgS0lWSUQgbmUgbWV0IGVuIMWTdXZyZSBhdWN1bmUgZ2FyYW50aWUsIGV4cHJlc3NlIG91XFxuICAgICAgICAgICAgaW1wbGljaXRlIGTigJlhdWN1bmUgc29ydGUgbm90YW1tZW50IGVuIHRlcm1lcyBk4oCZYWTDqXF1YXRpb24gZGUgbGFcXG4gICAgICAgICAgICBQbGF0ZWZvcm1lIMOgIHVuIHVzYWdlIHBhcnRpY3VsaWVyLCBkZSBkaXNwb25pYmlsaXTDqSBkZSBsYVxcbiAgICAgICAgICAgIFBsYXRlZm9ybWUsIGRlIGNvbnRpbnVpdMOpIGRlIGzigJlhY2Nlc3NpYmlsaXTDqSDDoCBsYSBQbGF0ZWZvcm1lXFxuICAgICAgICAgICAgKGNldHRlIGRlcm5pw6hyZSBwb3V2YW50IGNvbm5hw650cmUgZGVzIGludGVycnVwdGlvbnMgZGUgcXVlbHF1ZVxcbiAgICAgICAgICAgIGZvcm1lIGV0IGRlIHF1ZWxxdWUgZHVyw6llKSwgZGUgc8OpY3VyaXTDqSBkZSBsYSBQbGF0ZWZvcm1lLCBkdVxcbiAgICAgICAgICAgIGZhaXQgcXVlIGNlcyBkZXJuaWVycyBzb2llbnQgZXhlbXB0cyBk4oCZZXJyZXVycywgZOKAmWFub21hbGllcyxcXG4gICAgICAgICAgICBk4oCZaW1wcsOpY2lzaW9ucywgZGUgcGFubmVzLCBkZSBidWdzIG5pIHF1ZSBjZXV4LWNpIHBvdXJyb250IMOqdHJlXFxuICAgICAgICAgICAgY29ycmlnw6lzLiBMZXMgcHLDqXNlbnRlcyBleG9uw6lyYXRpb25zIHBvdXZhbnQgw6p0cmUgY29tcGzDqXTDqWVzIHBhclxcbiAgICAgICAgICAgIGRlcyBkaXNwb3NpdGlvbnMgcGx1cyBzcMOpY2lmaXF1ZXMgYXUgc2VpbiBkZXMgcHLDqXNlbnRlc1xcbiAgICAgICAgICAgIENvbmRpdGlvbnMgZOKAmXV0aWxpc2F0aW9uLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBTYXVmIGRpc3Bvc2l0aW9uIGzDqWdhbGUgY29udHJhaXJlIGV0IGltcMOpcmF0aXZlLCBsYVxcbiAgICAgICAgICAgIHJlc3BvbnNhYmlsaXTDqSBLSVZJRCBwb3VyIHRvdXQgZG9tbWFnZSBkaXJlY3RlbWVudCBvdVxcbiAgICAgICAgICAgIGluZGlyZWN0ZW1lbnQgbGnDqSDDoCBs4oCZdXRpbGlzYXRpb24gZGUgbGEgUGxhdGVmb3JtZSBuZSBzYXVyYWl0XFxuICAgICAgICAgICAgw6p0cmUgZW5nYWfDqWUgZW4gcmFpc29uIGRlIGRvbW1hZ2VzIGRpcmVjdHMgb3UgaW5kaXJlY3RzLFxcbiAgICAgICAgICAgIG1hdMOpcmllbHMgb3UgaW1tYXTDqXJpZWxzLCBub3RhbW1lbnQgcGVydGUgZGUgcHJvZml0LCBwZXJ0ZSBkZVxcbiAgICAgICAgICAgIGNoYW5jZSwgcGVydGUgZGUgY2xpZW50w6hsZSwgcGVydGUgZGUgZG9ubsOpZXMsIHBlcnRlIGTigJlpbWFnZVxcbiAgICAgICAgICAgIGV0L291IGRvbW1hZ2VzIGltbWF0w6lyaWVscyBxdWUgdm91cyBzdWJpc3Nlei4gS0lWSUQgbmUgcG91cnJhXFxuICAgICAgICAgICAgbm90YW1tZW50LCBlbiBhdWN1biBjYXMsIHZvaXIgc2EgcmVzcG9uc2FiaWxpdMOpIGVuZ2Fnw6llIGRhbnMgbGVcXG4gICAgICAgICAgICBjYXMgb8O5IHVuIFV0aWxpc2F0ZXVyIHNlIHZlcnJhaXQgYXR0cmlidWVyIHBhciBsZSBQcmVzY3JpcHRldXJcXG4gICAgICAgICAgICBwcmF0aWNpZW4gZGVzIGV4ZXJjaWNlcyBub24gYWRhcHTDqXMgw6Agc2VzIGNhcGFjaXTDqXMgcGh5c2lxdWVzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMTFcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1XCIsIFtcbiAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBiLiBSZXNwb25zYWJpbGl0w6kgZGVzIHV0aWxpc2F0ZXVycyBwcmF0aWNpZW5zXFxuICAgICAgICAgICAgICAgICAgICBwcm9mZXNzaW9ubmVsc1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBFbiB0YW50IHF1ZSBwcm9mZXNzaW9ubmVsIGRlIGxhIHLDqcOpZHVjYXRpb24gZXQvb3UgZHUgc3BvcnQsXFxuICAgICAgICAgICAgbOKAmVV0aWxpc2F0ZXVyIHByb2Zlc3Npb25uZWwgZXN0IGVudGnDqHJlbWVudCByZXNwb25zYWJsZSBkZSB0b3V0ZVxcbiAgICAgICAgICAgIGNyw6lhdGlvbiwgdHJhbnNtaXNzaW9uIG91IHB1YmxpY2F0aW9uIGRlIENvbnRlbnUgYXUgbW95ZW4gZGUgbGFcXG4gICAgICAgICAgICBQbGF0ZWZvcm1lIGV0IGVuIHBhcnRpY3VsaWVyIGRlIGxhIGTDqWZpbml0aW9uIGRlcyBleGVyY2ljZXMgZGVcXG4gICAgICAgICAgICByw6nDqWR1Y2F0aW9uIHByb3Bvc8OpcyBhdXggVXRpbGlzYXRldXJzIG5vbi1wcm9mZXNzaW9ubmVsIHN1ciBsYVxcbiAgICAgICAgICAgIFBsYXRlZm9ybWUsIGVuIGZvbmN0aW9uIGRlIGxldXJzIGJlc29pbnMgZXQgZGUgbGV1cnMgY2FwYWNpdMOpcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTOKAmVV0aWxpc2F0ZXVyIHByb2Zlc3Npb25uZWwgYXNzdW1lIGzigJllbnRpw6hyZSByZXNwb25zYWJpbGl0w6kgzIFcXG4gICAgICAgICAgICBxdWFudCBhdXggY29uc8OpcXVlbmNlcyBkaXJlY3RlcyBldC9vdSBpbmRpcmVjdGVzIGRlXFxuICAgICAgICAgICAgbOKAmXV0aWxpc2F0aW9uIGRlIFBsYXRlZm9ybWUgZXQgbm90YW1tZW50IGRlIGxhIGNyw6lhdGlvbiBkZVxcbiAgICAgICAgICAgIENvbnRlbnVzLiBMZXMgZXhlbXBsZXMgZGUgQ29udGVudXMgZXQgw6l2ZW50dWVscyBjb25zZWlscyBkZVxcbiAgICAgICAgICAgIEtJVklEIG91IGfDqW7DqXLDqXMgYXV0b21hdGlxdWVtZW50IHBhciBsYSBQbGF0ZWZvcm1lIGRvaXZlbnQgw6p0cmVcXG4gICAgICAgICAgICBjb25zaWTDqXLDqXMgdW5pcXVlbWVudCBjb21tZSBkZXMgb3BpbmlvbnMsIGzigJlVdGlsaXNhdGV1clxcbiAgICAgICAgICAgIHByb2Zlc3Npb25uZWwgcmVzdGFudCBzZXVsIHJlc3BvbnNhYmxlIGRlIGxhIGNyw6lhdGlvbiBkZXNcXG4gICAgICAgICAgICBDb250ZW51cyDDoCBkZXN0aW5hdGlvbiBkZXMgVXRpbGlzYXRldXJzIG5vbi1wcm9mZXNzaW9ubmVscy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTOKAmVV0aWxpc2F0ZXVyIHByb2Zlc3Npb25uZWwgZXN0IHRlbnUgZGUgcHJlbmRyZSB0b3V0ZXMgbGVzXFxuICAgICAgICAgICAgbWVzdXJlcyBhZmluIGRlIHPigJlhc3N1cmVyIHF1ZSBsZXMgQ29udGVudXMgY3LDqcOpcyBzdXIgbGFcXG4gICAgICAgICAgICBQbGF0ZWZvcm1lIHBvdXIgbGVzIFV0aWxpc2F0ZXVycyBub24tcHJvZmVzc2lvbm5lbHMgc29udFxcbiAgICAgICAgICAgIGNvbmZvcm1lcyDDoCBs4oCZw6l0YXQgZGVzIGNvbm5haXNzYW5jZXMgZW4gbWF0acOocmUgZGUgcsOpw6lkdWNhdGlvblxcbiAgICAgICAgICAgIHBoeXNpcXVlLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMTJcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjYuIERpc3BvbmliaWxpdMOpIGRlIGxhIFBsYXRlZm9ybWVcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgQWxvcnMgbcOqbWUgcXVlIEtJVklEIGEgZWZmZWN0dcOpIHRvdXRlcyBsZXMgZMOpbWFyY2hlcyBuw6ljZXNzYWlyZXNcXG4gICAgICAgICAgICBwb3VyIHPigJlhc3N1cmVyIGRlIGxhIGZpYWJpbGl0w6kgZGVzIGluZm9ybWF0aW9ucywgc2VydmljZXMsXFxuICAgICAgICAgICAgbG9naWNpZWxzIG91IHByb2R1aXRzIGNvbnRlbnVzIHN1ciBsYSBQbGF0ZWZvcm1lLCBpbCBuZSBzYXVyYWl0XFxuICAgICAgICAgICAgw6p0cmUgdGVudSBwb3VyIHJlc3BvbnNhYmxlIGTigJllcnJldXJzLCBk4oCZb21pc3Npb25zLCBkZSB2aXJ1cyBvdVxcbiAgICAgICAgICAgIGRlcyByw6lzdWx0YXRzIHF1aSBwb3VycmFpZW50IMOqdHJlIG9idGVudXMgcGFyIHVuIG1hdXZhaXMgdXNhZ2VcXG4gICAgICAgICAgICBkZSBjZXV4LWNpLiBLSVZJRCBu4oCZZXN0IGVuIGVmZmV0IHRlbnUgcXVlIGTigJl1bmUgc2ltcGxlXFxuICAgICAgICAgICAgb2JsaWdhdGlvbiBkZSBtb3llbnMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEzigJlVdGlsaXNhdGV1ciBkw6ljbGFyZSBldCBnYXJhbnRpdCBxdeKAmWlsIGNvbm5hw650IGxlc1xcbiAgICAgICAgICAgIGNhcmFjdMOpcmlzdGlxdWVzIGV0IGxlcyBjb250cmFpbnRlcyBk4oCZSW50ZXJuZXQgZXQgbm90YW1tZW50IHF1ZVxcbiAgICAgICAgICAgIGxlcyB0cmFuc21pc3Npb25zIGRlIGRvbm7DqWVzIGV0IGTigJlpbmZvcm1hdGlvbnMgc3VyIEludGVybmV0IG5lXFxuICAgICAgICAgICAgYsOpbsOpZmljaWVudCBxdWUgZOKAmXVuZSBmaWFiaWxpdMOpIHRlY2huaXF1ZSByZWxhdGl2ZSwgY2VsbGVzLWNpXFxuICAgICAgICAgICAgY2lyY3VsYW50IHN1ciBkZXMgcsOpc2VhdXggaMOpdMOpcm9nw6huZXMgYXV4IGNhcmFjdMOpcmlzdGlxdWVzIGV0XFxuICAgICAgICAgICAgY2FwYWNpdMOpcyB0ZWNobmlxdWVzIGRpdmVyc2VzLCBxdWkgcGVydHVyYmVudCBs4oCZYWNjw6hzIG91IGxlXFxuICAgICAgICAgICAgcmVuZGVudCBpbXBvc3NpYmxlIMOgIGNlcnRhaW5lcyBww6lyaW9kZXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEtJVklEIHPigJllZmZvcmNlIGRlIG1haW50ZW5pciBhY2Nlc3NpYmxlIGxhIFBsYXRlZm9ybWUgNyBqb3Vyc1xcbiAgICAgICAgICAgIHN1ciA3IGV0IDI0IGhldXJlcyBzdXIgMjQsIG1haXMgbuKAmWVzdCB0ZW51IMOgIGF1Y3VuZSBvYmxpZ2F0aW9uXFxuICAgICAgICAgICAgZOKAmXkgcGFydmVuaXIgZXQgbmUgZm91cm5pdCBwYXIgY29uc8OpcXVlbnQgYXVjdW5lIGdhcmFudGllIGRlXFxuICAgICAgICAgICAgZGlzcG9uaWJpbGl0w6kgb3UgZOKAmWFjY2Vzc2liaWxpdMOpIHBlcm1hbmVudGUgb3UgZGUgcGVyZm9ybWFuY2UuXFxuICAgICAgICAgICAgS0lWSUQgZXQvb3Ugc2VzIGZvdXJuaXNzZXVycyBwZXV0L3BldXZlbnQgw6lnYWxlbWVudCBlblxcbiAgICAgICAgICAgIGludGVycm9tcHJlIGzigJlhY2PDqHMgbm90YW1tZW50IHBvdXIgZGVzIHJhaXNvbnMgZGUgbWFpbnRlbmFuY2UgZXRcXG4gICAgICAgICAgICBkZSBtaXNlIMOgIG5pdmVhdSBkZSBsYSBQbGF0ZWZvcm1lIG91IGRlIHNvbiBpbmZyYXN0cnVjdHVyZVxcbiAgICAgICAgICAgIGTigJlow6liZXJnZW1lbnQgb3UgdG91dGUgYXV0cmUgcmFpc29uIGzDqWdpdGltZSBkZSBLSVZJRC4gS0lWSURcXG4gICAgICAgICAgICBu4oCZZXN0IGVuIGF1Y3VuIGNhcyByZXNwb25zYWJsZSBkZSBjZXMgaW50ZXJydXB0aW9ucyBldCBkZXNcXG4gICAgICAgICAgICBjb25zw6lxdWVuY2VzIHF1aSBwZXV2ZW50IGVuIGTDqWNvdWxlciBwb3VyIGzigJlVdGlsaXNhdGV1ciBvdSB0b3VzXFxuICAgICAgICAgICAgdGllcnMuIElsIGVzdCByYXBwZWzDqSBwYXIgYWlsbGV1cnMgcXVlIEtJVklEIHBldXQgbWV0dHJlIGZpbiBvdVxcbiAgICAgICAgICAgIG1vZGlmaWVyIGxlcyBjYXJhY3TDqXJpc3RpcXVlcyBkZSBsYSBQbGF0ZWZvcm1lIMOgIHRvdXQgbW9tZW50IGV0XFxuICAgICAgICAgICAgY2VsYSBzYW5zIHByw6lhdmlzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMTNcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjcuIFPDqWN1cml0w6lcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgS0lWSUQgc+KAmWVmZm9yY2UgZOKAmWFzc3VyZXIgbGEgc8OpY3VyaXTDqSBkZSBsYSBQbGF0ZWZvcm1lXFxuICAgICAgICAgICAgY29uZm9ybcOpbWVudCBhdXggcsOoZ2xlcyBkZSBs4oCZYXJ0LiBM4oCZVXRpbGlzYXRldXIgZXN0IHRvdXRlZm9pc1xcbiAgICAgICAgICAgIGluZm9ybcOpIGRlcyByaXNxdWVzIGluaMOpcmVudHMgYXV4IHLDqXNlYXV4IGRlIGNvbW11bmljYXRpb25zXFxuICAgICAgICAgICAgw6lsZWN0cm9uaXF1ZXMgZXQgbm90YW1tZW50IGRlcyByaXNxdWVzIGxpw6lzIMOgIGzigJlhY2hlbWluZW1lbnQgZGVcXG4gICAgICAgICAgICBkb25uw6llcyBzdXIgaW50ZXJuZXQuIFBsdXMgZ8OpbsOpcmFsZW1lbnQsIGlsIGluY29tYmUgw6BcXG4gICAgICAgICAgICBs4oCZVXRpbGlzYXRldXIgZGUgZMOpcGxveWVyIHRvdXRlcyBsZXMgcHJvdGVjdGlvbnMgdXN1ZWxsZXNcXG4gICAgICAgICAgICAocGFyZS1mZXUsIGFudGl2aXJ1cywgZXRjLikgbGnDqWVzIMOgIGxhIG5hdmlnYXRpb24gaW50ZXJuZXQuIEVuXFxuICAgICAgICAgICAgY29uc8OpcXVlbmNlLCBLSVZJRCBuZSBmb3Vybml0IGF1Y3VuZSBnYXJhbnRpZSBlbiBsYSBtYXRpw6hyZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgRW4gdG91dGUgaHlwb3Row6hzZSwgbOKAmVV0aWxpc2F0ZXVyIHPigJlhYnN0aWVudCBzdHJpY3RlbWVudCBkZVxcbiAgICAgICAgICAgIHRvdXRlIHRlbnRhdGl2ZSBk4oCZaW5nw6luaWVyaWUgaW52ZXJzZSBvdSBkZSBkw6ljb21waWxhdGlvbiBkZSB0b3V0XFxuICAgICAgICAgICAgb3UgcGFydGllIGRlIGxhIFBsYXRlZm9ybWUsIGRlIHRvdXRlIGludHJ1c2lvbiBvdSB0ZW50YXRpdmVcXG4gICAgICAgICAgICBk4oCZaW50cnVzaW9uIGZyYXVkdWxldXNlIGF1IHNlaW4gZHUgc3lzdMOobWUgZOKAmWluZm9ybWF0aW9uc1xcbiAgICAgICAgICAgIGjDqWJlcmdlYW50IGxhIFBsYXRlZm9ybWUgYWluc2kgcXXigJlhdXggbG9naWNpZWxzIHBlcm1ldHRhbnQgc29uXFxuICAgICAgICAgICAgZm9uY3Rpb25uZW1lbnQsIGRlIHRvdXQgYWJ1cyBkZSBjb25maWFuY2UsIHNvdXN0cmFjdGlvbixcXG4gICAgICAgICAgICBzdXBwcmVzc2lvbiwgZMOpdG91cm5lbWVudCBvdSBtb2RpZmljYXRpb24gbm9uIGF1dG9yaXPDqWUgZGVzXFxuICAgICAgICAgICAgZG9ubsOpZXMgdGVjaG5pcXVlcyBkZSBsYSBQbGF0ZWZvcm1lLCBzb3VzIHBlaW5lIGRlIHBvdXJzdWl0ZXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxNFwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiOC4gTWFucXVlbWVudHMgZGUgbOKAmVV0aWxpc2F0ZXVyXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFRvdXQgbWFucXVlbWVudCBkZSBs4oCZVXRpbGlzYXRldXIgYXV4IHByw6lzZW50ZXMgQ29uZGl0aW9uc1xcbiAgICAgICAgICAgIGTigJl1dGlsaXNhdGlvbiBlc3Qgc3VzY2VwdGlibGUgZOKAmWVudHJhaW5lciB1bmUgc3VzcGVuc2lvbiBvdSB1bmVcXG4gICAgICAgICAgICBzdXBwcmVzc2lvbiBkZSBzZXMgYWNjw6hzIMOgIGxhIFBsYXRlZm9ybWUsIGV0IGTigJlleHBvc2VyIGxlKHMpXFxuICAgICAgICAgICAgY29udHJldmVuYW50KHMpIMOgIGRlcyBwb3Vyc3VpdGVzIGp1ZGljaWFpcmVzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMTVcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjkuIE1vZGlmaWNhdGlvbiBkZXMgQ29uZGl0aW9ucyBk4oCZdXRpbGlzYXRpb25cIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgVG91dCBjaGFuZ2VtZW50IHF1ZSBub3VzIGFwcG9ydGVyb25zIMOgIGzigJlhdmVuaXIgYXV4IHByw6lzZW50ZXNcXG4gICAgICAgICAgICBDb25kaXRpb25zIGTigJl1dGlsaXNhdGlvbiBzZXJhIHB1Ymxpw6kgc3VyIGNldHRlIHBhZ2UuXFxuICAgICAgICAgICAgTCd1dGlsaXNhdGV1ciByZWNvbm5hw650IGV0IGFjY2VwdGUgYXBwcm91dmVyIHRhY2l0ZW1lbnQgdG91dFxcbiAgICAgICAgICAgIGNoYW5nZW1lbnQgZGVzIHByw6lzZW50ZXMgQ29uZGl0aW9ucy4gS0lWSUQgaW5mb3JtZXJhXFxuICAgICAgICAgICAgbOKAmVV0aWxpc2F0ZXVyIHBhciBlbWFpbCBkdSBjaGFuZ2VtZW50IGRlcyBwcsOpc2VudGVzIENvbmRpdGlvbnMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxNlwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiMTAuIExvaSBhcHBsaWNhYmxlXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFNhdWYgZGlzcG9zaXRpb24gbMOpZ2FsZSBjb250cmFpcmUgZXQgaW1ww6lyYXRpdmUsIHRvdXRlXFxuICAgICAgICAgICAgZGlmZmljdWx0w6ksIHLDqWNsYW1hdGlvbiBvdSBsaXRpZ2UgcHJvdmVuYW50IG91IGxpw6koZSkgYXV4XFxuICAgICAgICAgICAgcHLDqXNlbnRlcyBDb25kaXRpb25zIGTigJl1dGlsaXNhdGlvbiBzZXJhIHLDqWdpKGUpIHNlbG9uIGxhIGxvaVxcbiAgICAgICAgICAgIGZyYW7Dp2Fpc2UuIEVuIGNhcyBkZSBsaXRpZ2UsIGxlcyB0cmlidW5hdXggZnJhbsOnYWlzIHNlcm9udCBzZXVsc1xcbiAgICAgICAgICAgIGNvbXDDqXRlbnRzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNraXZpZFwiIH0sIFtcbiAgICAgICAgX2MoXCJoMVwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkNvbmRpdGlvbnMgZ8OpbsOpcmFsZXMgZGUgdmVudGVcIildKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiMS4gT2JqZXRcIildKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBMZXMgcHLDqXNlbnRlcyBjb25kaXRpb25zIGfDqW7DqXJhbGVzIGRlIHZlbnRlIChjaS1hcHLDqHMgwqsgQ0dWIMK7KVxcbiAgICAgICAgICAgIG9udCBwb3VyIG9iamV0IGRlIGTDqWZpbmlyIGxlcyBtb2RhbGl0w6lzIHNlbG9uIGxlc3F1ZWxsZXMgS2l2aWRcXG4gICAgICAgICAgICBmb3Vybml0IGF1IENsaWVudCB1biBhY2PDqHMgw6Agc2EgUGxhdGVmb3JtZSBkZSBwcsOpdmVudGlvbiBldCBkZVxcbiAgICAgICAgICAgIHLDqcOpZHVjYXRpb24gZGVzIGJsZXNzdXJlcyBwaHlzaXF1ZXMuIEVuIGNsaXF1YW50IHN1ciDCqyBK4oCZYWNjZXB0ZVxcbiAgICAgICAgICAgIGxlcyBwcsOpc2VudGVzIGNvbmRpdGlvbnMgZ8OpbsOpcmFsZXMgZGUgdmVudGUgwrssIGxlIENsaWVudFxcbiAgICAgICAgICAgIHJlY29ubmHDrnQgYXZvaXIgcHJpcyBjb25uYWlzc2FuY2UgZGVzIENHViBldCBsZXMgYWNjZXB0ZSBzYW5zXFxuICAgICAgICAgICAgcsOpc2VydmUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIyLiBEw6lmaW5pdGlvbnNcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCLCqyBLaXZpZCDCu1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCIgc2lnbmlmaWUgS2l2aWQsIFNBUyBhdVxcbiAgICAgICAgICAgICAgICAgICAgY2FwaXRhbCBkZSAxLjAwMOKCrCwgaW1tYXRyaWN1bMOpZSBhdSBSQ1MgZGUgTHlvbiBNw6l0cm9wb2xlXFxuICAgICAgICAgICAgICAgICAgICBzb3VzIGxlIG51bcOpcm8gZG9taWNpbGnDqWUgODQgUnVlIENoZXZyZXVsLCA2OTAwNyBMWU9OIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiwqsgTGUgY2xpZW50IMK7XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiBkw6lzaWduZSBsZXNcXG4gICAgICAgICAgICAgICAgICAgIHByb2Zlc3Npb25uZWxzIGRlIGxhIHLDqcOpZHVjYXRpb24gb3UvZXQgZHUgc3BvcnQgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCLCqyBDb250ZW51KHMpIMK7XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiBkw6lzaWduZSBs4oCZZW5zZW1ibGUgZGVzXFxuICAgICAgICAgICAgICAgICAgICDDqWzDqW1lbnRzIHNvdXMgcXVlbHF1ZSBmb3JtZSBxdWUgY2Ugc29pdCwgZGlzcG9uaWJsZXMgc3VyXFxuICAgICAgICAgICAgICAgICAgICBsZSBTaXRlIGV0IG5vdGFtbWVudCBsZXMgc8OpcmllcyBk4oCZZXhlcmNpY2VzIGRlXFxuICAgICAgICAgICAgICAgICAgICByw6nDqWR1Y2F0aW9uIHLDqWFsaXPDqWVzIHBhciBsZSBDbGllbnQgw6AgcGFydGlyIGRlIGxhXFxuICAgICAgICAgICAgICAgICAgICBiaWJsaW90aMOocXVlIGRlIHZpZMOpb3MgcHJvcG9zw6llcyBwYXIgS2l2aWQgc3VyIGxhXFxuICAgICAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lLiBMZSBDb250ZW51IHBldXQgw6p0cmUgZMOpZmluaSBwYXIgbGUgQ2xpZW50XFxuICAgICAgICAgICAgICAgICAgICBwb3VyIGNoYWN1biBkZXMgVXRpbGlzYXRldXJzIGVuIGZvbmN0aW9uIGRlIHNlcyBiZXNvaW5zXFxuICAgICAgICAgICAgICAgICAgICBldCBkZSBzZXMgY2FwYWNpdMOpcyA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIsKrIENvbnRyYXQgwrtcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiIGTDqXNpZ25lIGzigJllbnNlbWJsZSBkZXNcXG4gICAgICAgICAgICAgICAgICAgIHN0aXB1bGF0aW9ucyDDqW5vbmPDqWVzIGRhbnMgbGVzIHByw6lzZW50ZXMgQ29uZGl0aW9uc1xcbiAgICAgICAgICAgICAgICAgICAgR8OpbsOpcmFsZXMgZGUgdmVudGUgKG91IMKrIENHViDCuyksIMOpdGFudCBwcsOpY2lzw6kgcXVlIGxlXFxuICAgICAgICAgICAgICAgICAgICBwcsOpYW1idWxlIGV0IGxlcyBhbm5leGVzIGVuIGZvbnQgcGFydGllIGludMOpZ3JhbnRlLiBMZXNcXG4gICAgICAgICAgICAgICAgICAgIFBhcnRpZXMgcmVjb25uYWlzc2VudCBxdWUgbGUgQ29udHJhdCBlc3RcXG4gICAgICAgICAgICAgICAgICAgIHN5bmFsbGFnbWF0aXF1ZSwgYcyAIHRpdHJlIG9uw6lyZXV4LCBhzIAgZXjDqWN1dGlvbiBzdWNjZXNzaXZlXFxuICAgICAgICAgICAgICAgICAgICA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIsKrIERvbm7DqWVzIMK7XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiBkw6lzaWduZSAoaSkgbGVzXFxuICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbnMgcGVyc29ubmVsbGVzIGRlcyBDbGllbnRzIGV0IFV0aWxpc2F0ZXVyc1xcbiAgICAgICAgICAgICAgICAgICAgcGVybWV0dGFudCBsZXVyIGlkZW50aWZpY2F0aW9uIGFpbnNpIHF1ZSAoaWkpIGxlc1xcbiAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb25zIHJlbGF0aXZlcyDDoCBsYSBuYXZpZ2F0aW9uIHN1ciBsZSBTaXRlIGV0XFxuICAgICAgICAgICAgICAgICAgICBs4oCZYXBwbGljYXRpb24gbW9iaWxlIEtpdmlkwq4gc3VzY2VwdGlibGVzIGTigJnDqnRyZVxcbiAgICAgICAgICAgICAgICAgICAgZW5yZWdpc3Ryw6llcyBkYW5zIGRlcyBmaWNoaWVycyBkaXRzIMKrIGNvb2tpZXMgwrsgb3VcXG4gICAgICAgICAgICAgICAgICAgIG91dGlscyBzaW1pbGFpcmVzLCBub3RhbW1lbnQgbG9ycyBkZSBsYSBzb3VzY3JpcHRpb25cXG4gICAgICAgICAgICAgICAgICAgIGTigJl1biBhYm9ubmVtZW50LCBkZSBsYSBuYXZpZ2F0aW9uIG91IGRlIGxhIGNyw6lhdGlvbiBk4oCZdW5cXG4gICAgICAgICAgICAgICAgICAgIGNvbXB0ZSA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIsKrIElkZW50aWZpYW50cyDCu1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCIgZMOpc2lnbmUgdGFudFxcbiAgICAgICAgICAgICAgICAgICAgbOKAmWlkZW50aWZpYW50IHByb3ByZSBkdSBDbGllbnQgZXQvb3UgZGUgbOKAmVV0aWxpc2F0ZXVyXFxuICAgICAgICAgICAgICAgICAgICAo4oCcbG9naW7igJ0pIHF1ZSBsZSBtb3QgZGUgcGFzc2UgZGUgY29ubmV4aW9uICjigJxwYXNzd29yZOKAnSksXFxuICAgICAgICAgICAgICAgICAgICBjb21tdW5pcXXDqXMgYXUgbW9tZW50IGRlIGzigJlpbnNjcmlwdGlvbiBzdXIgbGEgUGxhdGVmb3JtZVxcbiAgICAgICAgICAgICAgICAgICAgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCLCqyBMb2dpY2llbCDCu1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCIgZMOpc2lnbmUgdG91dCBsb2dpY2llbFxcbiAgICAgICAgICAgICAgICAgICAgZm91cm5pIHBhciBLaXZpZCBhdSBDbGllbnQgZXQvb3UgYXV4IFV0aWxpc2F0ZXVycyBldCBlblxcbiAgICAgICAgICAgICAgICAgICAgcGFydGljdWxpZXIgbGVzIFNvbHV0aW9ucyBhc3NvY2nDqWVzIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiwqsgUGxhdGVmb3JtZSDCu1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCIgZMOpc2lnbmUgbGUgc2VydmljZVxcbiAgICAgICAgICAgICAgICAgICAgcHJvcG9zZcyBIHBhciBLaXZpZCwgcGVybWV0dGFudCBs4oCZdXRpbGlzYXRpb24gZGVzXFxuICAgICAgICAgICAgICAgICAgICBTb2x1dGlvbnMgcGFyIGxlIENsaWVudCA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIsKrIFNlcnZpY2UocykgwrtcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiIGTDqXNpZ25lIGxhIHNvdXNjcmlwdGlvblxcbiAgICAgICAgICAgICAgICAgICAgw6AgbGEgUGxhdGVmb3JtZSBldCBzZXMgZm9uY3Rpb25uYWxpdMOpcyB0ZWwgcXVlIGTDqWZpbmlcXG4gICAgICAgICAgICAgICAgICAgIGRhbnMgbGVzIHByw6lzZW50ZXMgQ0dWLiBMZXMgcHJlc3RhdGlvbnMgY29tcHJpc2VzIGRhbnNcXG4gICAgICAgICAgICAgICAgICAgIGxlIFNlcnZpY2UgZm9ybWVudCB1biB0b3V0IGluZGl2aXNpYmxlLiBMYSBsaXN0ZSBkZXNcXG4gICAgICAgICAgICAgICAgICAgIHByZXN0YXRpb25zIGNvbXBvc2FudCBsZSBTZXJ2aWNlLCBhdmVjIGxlcyBuaXZlYXV4IGRlXFxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlIGV0IGxhIGxpc3RlIGRlcyBmb25jdGlvbm5hbGl0w6lzIGRlIGxhXFxuICAgICAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lLCBkw6ljcml2ZW50IGxlcyBxdWFsaXTDqXMgZXNzZW50aWVsbGVzIGR1XFxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlIHJlbmR1IHBhciBLaXZpZCA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIsKrIFNpdGUgwrtcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIGTDqXNpZ25lIGxlIHNpdGUgaW50ZXJuZXRcXG4gICAgICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvXCIgfSB9LCBbX3ZtLl92KFwid3d3LmtpdmlkLmZyXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiA7XFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiwqsgU29sdXRpb25zIMK7XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiBkw6lzaWduZSBsZXMgZm9uY3Rpb25zXFxuICAgICAgICAgICAgICAgICAgICBvcMOpcmF0aW9ubmVsbGVzIGRlcyBzZXJ2aWNlcyBwcm9wb3PDqWVzIGVuIG1vZGUgwqsgaMOpYmVyZ8OpXFxuICAgICAgICAgICAgICAgICAgICDCuyBldCBhZGFwdMOpZXMgc3DDqWNpZmlxdWVtZW50IGHMgCBjZSBtb2RlIGRlIGZvbmN0aW9ubmVtZW50XFxuICAgICAgICAgICAgICAgICAgICA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIsKrIFV0aWxpc2F0ZXVyIMK7XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiBkw6lzaWduZSBsZSBjbGllbnQgZHVcXG4gICAgICAgICAgICAgICAgICAgIENsaWVudCBiw6luw6lmaWNpYW50IGTigJl1biBhY2PDqHMgYXV4IFNlcnZpY2VzIGFwcGxpY2F0aWZzXFxuICAgICAgICAgICAgICAgICAgICBzdXIgc29uIG9yZGluYXRldXIsIHRhYmxldHRlIG91IHNtYXJ0cGhvbmUgZW4gdmVydHUgZHVcXG4gICAgICAgICAgICAgICAgICAgIENvbnRyYXQgY29uY2x1IHBhciBsZSBDbGllbnQgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMlwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiMy4gQ29uZGl0aW9ucyBs4oCZdXRpbGlzYXRpb24gZGUgbGEgUGxhdGVmb3JtZVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrM1wiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJhLiBJbmZvcm1hdGlvbnMgcHLDqWFsYWJsZXNcIildKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBpLiBLaXZpZCBhIG1pcyBlbiBwbGFjZSBkZXMgbWVzdXJlcyBkZSBzw6ljdXJpc2F0aW9uIGRlIGzigJlhY2PDqHMgYcyAXFxuICAgICAgICAgICAgbGEgUGxhdGVmb3JtZSwgc2Vsb24gdW5lIG9ibGlnYXRpb24gZGUgbW95ZW5zLiBDZXBlbmRhbnQsIEtpdmlkXFxuICAgICAgICAgICAgcmFwcGVsbGUgYXUgQ2xpZW50IHF1ZSA6XFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIEzigJl1dGlsaXNhdGlvbiBk4oCZSW50ZXJuZXQgcGV1dCBmYWlyZSBs4oCZb2JqZXQgZGVcXG4gICAgICAgICAgICAgICAgICAgIGTDqXRvdXJuZW1lbnRzIGTigJlpbnRydXNpb24gZnJhdWR1bGV1c2UsIG1hbHZlaWxsYW50ZSBvdVxcbiAgICAgICAgICAgICAgICAgICAgbm9uIGF1dG9yaXPDqWUgZGFucyBsZSBzeXN0w6htZSBk4oCZaW5mb3JtYXRpb24gZHUgQ2xpZW50LFxcbiAgICAgICAgICAgICAgICAgICAgZGUgcGlyYXRhZ2UsIGTigJlhbHTDqXJhdGlvbiBvdSBk4oCZZXh0cmFjdGlvbiBub24gYXV0b3Jpc8OpZVxcbiAgICAgICAgICAgICAgICAgICAgZGUgZG9ubsOpZXMsIGRlIG1vZGlmaWNhdGlvbnMsIGFsdMOpcmF0aW9ucyBtYWx2ZWlsbGFudGVzXFxuICAgICAgICAgICAgICAgICAgICBkZSBwcm9ncmFtbWVzIG91IGZpY2hpZXJzIG91IGRlIGNvbnRhbWluYXRpb24gcGFyIGRlc1xcbiAgICAgICAgICAgICAgICAgICAgdmlydXMgaW5mb3JtYXRpcXVlc1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgTGEgY29tbXVuaWNhdGlvbiBkZSBtb3RzIGRlIHBhc3NlLCBjb2RlcyBjb25maWRlbnRpZWxzLFxcbiAgICAgICAgICAgICAgICAgICAgZXQgcGx1cyBnw6luw6lyYWxlbWVudCwgZGUgdG91dGUgaW5mb3JtYXRpb24gYcyAIGNhcmFjdMOocmVcXG4gICAgICAgICAgICAgICAgICAgIHNlbnNpYmxlIGVzdCBlZmZlY3R1w6llIHBhciBsZSBDbGllbnQgYcyAIHNlcyByaXNxdWVzIGV0XFxuICAgICAgICAgICAgICAgICAgICBww6lyaWxzLlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBQYXIgY29uc8OpcXVlbnQsIGlsIGluY29tYmUgYXUgQ2xpZW50IGRlIHByZW5kcmUgdG91dGVzIGxlc1xcbiAgICAgICAgICAgIG1lc3VyZXMgYXBwcm9wcmnDqWVzIGRlIGZhw6dvbiBhzIAgcHJvdMOpZ2VyIHNlcyBwcm9wcmVzIGRvbm7DqWVzXFxuICAgICAgICAgICAgZXQvb3UgbG9naWNpZWxzIHN0b2Nrw6lzIHN1ciBzZXMgc2VydmV1cnMgZGUgbGEgY29udGFtaW5hdGlvbiBwYXJcXG4gICAgICAgICAgICBkZXMgdmlydXMgY29tbWUgZGUgdGVudGF0aXZlcyBk4oCZaW50cnVzaW9uIGRhbnMgc29uIHN5c3TDqG1lXFxuICAgICAgICAgICAgaW5mb3JtYXRpcXVlIHBhciBkZXMgdGllcnMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGlpLiBMZSBDbGllbnQgcmVub25jZSBkw6hzIGxvcnMgYcyAIGVuZ2FnZXIgbGEgcmVzcG9uc2FiaWxpdMOpIGRlXFxuICAgICAgICAgICAgS2l2aWQgY29uY2VybmFudCB1biBvdSBwbHVzaWV1cnMgZGVzIGZhaXRzIG91IMOpdsOobmVtZW50c1xcbiAgICAgICAgICAgIG1lbnRpb25uw6lzIMOgIGzigJlhcnRpY2xlIDMuMS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaWlpLiBM4oCZYWNjw6hzIGF1eCBTb2x1dGlvbnMgbmUgcGV1dCBz4oCZZWZmZWN0dWVyIHF14oCZYXUgdHJhdmVycyBkdVxcbiAgICAgICAgICAgIHLDqXNlYXUgSW50ZXJuZXQgZXQgZOKAmXVuIG5hdmlnYXRldXIgd2ViIDogR29vZ2xlIENocm9tZSBzdXJcXG4gICAgICAgICAgICBlbnZpcm9ubmVtZW50IFBDIG91IEFuZHJvaWQgZXQgU2FmYXJpIHN1ciBlbnZpcm9ubmVtZW50IE1BQyBvdVxcbiAgICAgICAgICAgIGlPUyBzb250IHByw6ljb25pc8OpcyBwYXIgS2l2aWQgcG91ciB1bmUgZXhww6lyaWVuY2Ugb3B0aW1hbGUgZGUgbGFcXG4gICAgICAgICAgICBQbGF0ZWZvcm1lLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrNFwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJiLiBSZXN0cmljdGlvbnMgZOKAmXV0aWxpc2F0aW9uIGRlIGxhIFBsYXRlZm9ybWVcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGkuIEtpdmlkIGNvbmPDqGRlIGF1IENsaWVudCB1biBkcm9pdCBwZXJzb25uZWwgZXQgbm9uXFxuICAgICAgICAgICAgdHJhbnNmw6lyYWJsZSBk4oCZdXRpbGlzZXIgbGEgUGxhdGVmb3JtZSwgZGFucyBsZSBtb25kZSBlbnRpZXJcXG4gICAgICAgICAgICBwZW5kYW50IHRvdXRlIGxhIGR1csOpZSBkdSBDb250cmF0LCBkZSBtYW5pw6hyZSBub24gZXhjbHVzaXZlLiBDZVxcbiAgICAgICAgICAgIGRyb2l0IGTigJl1dGlsaXNhdGlvbiBuZSBwZXV0IGZhaXJlIGzigJlvYmpldCBk4oCZdW5lIHNvdXMtbGljZW5jZSxcXG4gICAgICAgICAgICBk4oCZdW5lIGNlc3Npb24sIGTigJl1biB0cmFuc2ZlcnQgb3UgZOKAmXVuZSBtaXNlIGHMgCBkaXNwb3NpdGlvbiBk4oCZdW5cXG4gICAgICAgICAgICB0aWVycywgeSBjb21wcmlzIGF1IHNlaW4gZOKAmXVuIG3Dqm1lIMOpdGFibGlzc2VtZW50LlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcImlpLiBMYSBQbGF0ZWZvcm1lIHBldXQgw6p0cmUgdXRpbGlzw6llIDpcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgKGkpIGVuIGFjY8OocyBkaXN0YW50IGdyw6JjZSBhzIAgSW50ZXJuZXQsIGRhbnMgbGUgcmVzcGVjdCBkZXNcXG4gICAgICAgICAgICByw6hnbGVzIGTigJlpZGVudGlmaWNhdGlvbiBldCBk4oCZYWZmZWN0YXRpb24gZGVzIElkZW50aWZpYW50cyBkdVxcbiAgICAgICAgICAgIENsaWVudCBxdWkgc2V1bCBkw6ljaWRlIGRlcyBVdGlsaXNhdGV1cnMgcXUnaWwgYXV0b3Jpc2UgYcyAXFxuICAgICAgICAgICAgdXRpbGlzZXIgbGUgU2VydmljZSA7XFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIChpaSkgcG91ciBsZSB0cmFpdGVtZW50IGRlcyBkb25uw6llcyBkZXMgVXRpbGlzYXRldXJzIHBhciBsZVxcbiAgICAgICAgICAgIENsaWVudCBkYW5zIGxlcyBjb25kaXRpb25zIGxpbWl0YXRpdmVtZW50IGTDqWZpbmllcyBkYW5zIGxlXFxuICAgICAgICAgICAgQ29udHJhdC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGlpaS4gTGEgUGxhdGVmb3JtZSBlc3QgbGEgcHJvcHJpw6l0w6kgZGUgS2l2aWQsIGxlIENsaWVudFxcbiAgICAgICAgICAgIHPigJlpbnRlcmRpdCA6XFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIERlIGNvcGllciBvdSBkZSByZXByb2R1aXJlLCBkZSByZXByw6lzZW50ZXIsIG1vZGlmaWVyLFxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNtZXR0cmUsIHB1YmxpZXIsIGFkYXB0ZXIgdG91dCBvdSBwYXJ0aWUgZGUgbGFcXG4gICAgICAgICAgICAgICAgICAgIFBsYXRlZm9ybWUgcGFyIG7igJlpbXBvcnRlIHF1ZWwgbW95ZW4gZXQgc291cyBu4oCZaW1wb3J0ZVxcbiAgICAgICAgICAgICAgICAgICAgcXVlbGxlIGZvcm1lIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIETigJl1dGlsaXNlciBsYSBQbGF0ZWZvcm1lIG5vbiBjb25mb3Jtw6ltZW50IGF1eCByw6hnbGVzXFxuICAgICAgICAgICAgICAgICAgICBk4oCZdXRpbGlzYXRpb24gZGUgbGEgUGxhdGVmb3JtZSA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBEZSB0cmFkdWlyZSBvdSBkZSB0cmFuc2NyaXJlIGRhbnMgdG91dCBhdXRyZSBsYW5nYWdlIG91XFxuICAgICAgICAgICAgICAgICAgICBsYW5ndWUsIG91IGRlIGzigJlhZGFwdGVyIG91IGRlIGx1aSBhZGpvaW5kcmUgdG91dCBvYmpldFxcbiAgICAgICAgICAgICAgICAgICAgbm9uIGNvbmZvcm1lIGHMgCBzYSBzcMOpY2lmaWNhdGlvbi5cXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICdcXG4gICAgICAgICAgICBpdi4gVG91dCBtYW5xdWVtZW50IGF1eCBkaXNwb3NpdGlvbnMgZHUgcHLDqXNlbnQgYXJ0aWNsZSBlbnRyYcOubmVcXG4gICAgICAgICAgICBsZSBkcm9pdCBwb3VyIEtpdmlkIGRlIHN1c3BlbmRyZSBs4oCZYWNjw6hzIMOgIGxhIFBsYXRlZm9ybWUgZGFuc1xcbiAgICAgICAgICAgIGxlcyBjb25kaXRpb25zIGRlIGxcXCdhcnRpY2xlIFwiUsOJU0lMSUFUSU9OXCIuXFxuICAgICAgICAnXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazVcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1XCIsIFtcbiAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiYy4gQ29uZGl0aW9ucyBk4oCZYWNjw6hzIMOgIGxhIFBsYXRlZm9ybWUgcGFyIGxlXFxuICAgICAgICAgICAgICAgICAgICBDbGllbnRcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBpLiBMb3JzIGRlIGxhIHByZW1pw6hyZSB1dGlsaXNhdGlvbiBkZSBsYSBwbGF0ZWZvcm1lLCBsZVxcbiAgICAgICAgICAgIHByYXRpY2llbiBjb21wbMOodGUgdW4gZm9ybXVsYWlyZSBlbiBsaWduZSBk4oCZaW5zY3JpcHRpb24gZW5cXG4gICAgICAgICAgICBzYWlzaXNzYW50IHVuIGVtYWlsIGV0IHVuIG1vdCBkZSBwYXNzZS4gVW5lIGZvaXMgbGUgZm9ybXVsYWlyZVxcbiAgICAgICAgICAgIHNvdW1pcywgdW4gZW1haWwgZGUgdmFsaWRhdGlvbiBlc3QgZW52b3nDqSDDoCBs4oCZYWRyZXNzZSBlLW1haWxcXG4gICAgICAgICAgICBzYWlzaWUgcGFyIGxlIHByYXRpY2llbiBs4oCZaW52aXRhbnQgw6AgdmFsaWRlciBzb24gY29tcHRlIGVuXFxuICAgICAgICAgICAgY2xpcXVhbnQgc3VyIHVuIGxpZW4uXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcms2XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbXG4gICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgZC4gQ29uZGl0aW9ucyBk4oCZb3V2ZXJ0dXJlIGRlIGRyb2l0cyBk4oCZYWNjw6hzIGF1eFxcbiAgICAgICAgICAgICAgICAgICAgVXRpbGlzYXRldXJzXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGkuIExlIENsaWVudCBlc3QgcmVzcG9uc2FibGUgZGUgbGEgZMOpc2lnbmF0aW9uIGRlcyBVdGlsaXNhdGV1cnNcXG4gICAgICAgICAgICBwYXJtaSBzZXMgcHJvcHJlcyBjbGllbnRzLiBBcHLDqHMgbGV1ciBhdm9pciBwcsOpc2VudMOpIGxhXFxuICAgICAgICAgICAgUGxhdGVmb3JtZSBldCBzZXMgY29uZGl0aW9ucyBk4oCZdXRpbGlzYXRpb25zLCBsZSBDbGllbnQgcmVuc2VpZ25lXFxuICAgICAgICAgICAgbGVzIGluZm9ybWF0aW9ucyBkZXMgbm91dmVhdXggVXRpbGlzYXRldXJzIGFmaW4gcXVlIEtpdmlkIHB1aXNzZVxcbiAgICAgICAgICAgIGludml0ZXIgbGVzIHV0aWxpc2F0ZXVycyDDoCBjcsOpZXIgbGV1cnMgaWRlbnRpZmlhbnRzIGRlIGNvbm5leGlvblxcbiAgICAgICAgICAgIGV0IGNvbXB0ZXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGlpLiBMZXMgVXRpbGlzYXRldXJzIHNvbnQgZGVzIHBlcnNvbm5lcyBwaHlzaXF1ZXMuIENoYXF1ZVxcbiAgICAgICAgICAgIFV0aWxpc2F0ZXVyIGRpc3Bvc2UgZGUgc29uIHByb3ByZSBhY2PDqHMuIElsIGx1aSBlc3QgaW50ZXJkaXQgZGVcXG4gICAgICAgICAgICBwZXJtZXR0cmUgYcyAIHVuIHRpZXJzIGTigJl1dGlsaXNlciBzb24gY29tcHRlIG91IGTigJnDqWNoYW5nZXIgc29uXFxuICAgICAgICAgICAgYWNjw6hzIGF2ZWMgY2VsdWkgZOKAmXVuIGF1dHJlIHV0aWxpc2F0ZXVyLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBpaWkuIFBvdXIgYsOpbsOpZmljaWVyIGRlcyBTZXJ2aWNlcywgbOKAmXV0aWxpc2F0ZXVyIGRldnJhIHPigJnDqnRyZVxcbiAgICAgICAgICAgIHByw6lhbGFibGVtZW50IGFjcXVpdHTDqSBkZSBsYSBSZWRldmFuY2UgZMOpZmluaWUgZGUgbOKAmWFib25uZW1lbnQgw6BcXG4gICAgICAgICAgICBLSVZJRC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazdcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjQuIFJlc3BvbnNhYmlsaXTDqVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrOFwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJhLiBEaXNwb3NpdGlvbnMgZ8OpbsOpcmFsZXNcIildKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBDaGFjdW5lIGRlcyBQYXJ0aWVzIGFzc3VtZSBsYSByZXNwb25zYWJpbGl0w6kgZGVzIGNvbnPDqXF1ZW5jZXNcXG4gICAgICAgICAgICByw6lzdWx0YW50IGRlIHNlcyBmYXV0ZXMsIGVycmV1cnMgb3Ugb21pc3Npb25zLCBhaW5zaSBxdWUgZGVzXFxuICAgICAgICAgICAgZmF1dGVzLCBlcnJldXJzIG91IG9taXNzaW9ucyBkZSBzZXMgc291cy10cmFpdGFudHMgw6l2ZW50dWVscyBldFxcbiAgICAgICAgICAgIGNhdXNhbnQgdW4gZG9tbWFnZSBkaXJlY3Qgw6AgbCdhdXRyZSBQYXJ0aWUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcms5XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcImIuIFJlc3BvbnNhYmlsaXTDqSBk4oCZS2l2aWRcIildKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBpLiBLaXZpZCBuZSBwb3VycmEsIGVuIGF1Y3VuIGNhcywgdm9pciBzYSByZXNwb25zYWJpbGl0w6kgZW5nYWfDqWVcXG4gICAgICAgICAgICBkdSBmYWl0IGRlIGzigJl1dGlsaXNhdGlvbiBkZSBsYSBQbGF0ZWZvcm1lIHBhciB1biBVdGlsaXNhdGV1ciBldFxcbiAgICAgICAgICAgIG5vdGFtbWVudCBkYW5zIGxlIGNhcyBvw7kgdW4gVXRpbGlzYXRldXIgc2UgdmVycmFpdCBhdHRyaWJ1ZXIgcGFyXFxuICAgICAgICAgICAgbGUgQ2xpZW50IGRlcyBleGVyY2ljZXMgbm9uIGFkYXB0w6lzIMOgIHNlcyBjYXBhY2l0w6lzIHBoeXNpcXVlcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaWkuIEVuIGNhcyBkZSBmYXV0ZSBwcm91dsOpZSBwYXIgbGUgQ2xpZW50LCBLaXZpZCBuZSBzZXJhIHRlbnVlXFxuICAgICAgICAgICAgcXVlIGRlIGxhIHLDqXBhcmF0aW9uIGRlcyBjb25zw6lxdWVuY2VzIHDDqWN1bmlhaXJlcyBkZXMgZG9tbWFnZXNcXG4gICAgICAgICAgICBkaXJlY3RzIGV0IHByw6l2aXNpYmxlcyBkdSBmYWl0IGRlIGzigJl1dGlsaXNhdGlvbiBkZSBsYVxcbiAgICAgICAgICAgIFBsYXRlZm9ybWUuIEVuIGNvbnPDqXF1ZW5jZSwgS2l2aWQgbmUgcG91cnJhIGVuIGF1Y3VuZVxcbiAgICAgICAgICAgIGNpcmNvbnN0YW5jZSBlbmNvdXJpciBkZSByZXNwb25zYWJpbGl0w6kgYXUgdGl0cmUgZGVzIHBlcnRlcyBvdVxcbiAgICAgICAgICAgIGRvbW1hZ2VzIGluZGlyZWN0cyBvdSBpbXByw6l2aXNpYmxlcyBkdSBDbGllbnQgb3UgZGVzIHRpZXJzLCBjZVxcbiAgICAgICAgICAgIHF1aSBpbmNsdXQgbm90YW1tZW50IHRvdXQgZ2FpbiBtYW5xdcOpLCBwZXJ0ZSwgaW5leGFjdGl0dWRlIG91XFxuICAgICAgICAgICAgY29ycnVwdGlvbiBkZSBmaWNoaWVycyBvdSBkZSBkb25uw6llcywgcHLDqWp1ZGljZSBjb21tZXJjaWFsLFxcbiAgICAgICAgICAgIHBlcnRlIGRlIGNoaWZmcmUgZCdhZmZhaXJlcyBvdSBkZSBiw6luw6lmaWNlLCBwZXJ0ZSBkZSBjbGllbnTDqGxlLFxcbiAgICAgICAgICAgIHBlcnRlIGQndW5lIGNoYW5jZSwgY2/Du3QgZGUgbOKAmW9idGVudGlvbiBk4oCZdW4gcHJvZHVpdCwgZOKAmXVuXFxuICAgICAgICAgICAgc2VydmljZSBvdSBkZSB0ZWNobm9sb2dpZSBkZSBzdWJzdGl0dXRpb24sIGVuIHJlbGF0aW9uIG91XFxuICAgICAgICAgICAgcHJvdmVuYW50IGRlIGzigJlpbmV4w6ljdXRpb24gb3UgZGUgbOKAmWV4w6ljdXRpb24gZmF1dGl2ZSBkZXNcXG4gICAgICAgICAgICBwcmVzdGF0aW9ucy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaWlpLiBEYW5zIHRvdXMgbGVzIGNhcywgbGUgbW9udGFudCBkZSBsYSByZXNwb25zYWJpbGl0w6kgZGUgS2l2aWRcXG4gICAgICAgICAgICBlc3Qgc3RyaWN0ZW1lbnQgbGltaXTDqSBhdSByZW1ib3Vyc2VtZW50IGR1IG1vbnRhbnQgZGVzIHNvbW1lc1xcbiAgICAgICAgICAgIGVmZmVjdGl2ZW1lbnQgcGF5w6llcyBwYXIgbGUgQ2xpZW50IMOgIGxhIGRhdGUgZGUgc3VydmVuYW5jZSBkdVxcbiAgICAgICAgICAgIGZhaXQgZ8OpbsOpcmF0ZXVyIGRlIHJlc3BvbnNhYmlsaXTDqS4gS2l2aWQgbmUgc2F1cmFpdCwgZW4gb3V0cmUsXFxuICAgICAgICAgICAgw6p0cmUgdGVudSByZXNwb25zYWJsZSBkZSBsYSBkZXN0cnVjdGlvbiBhY2NpZGVudGVsbGUgZGVzIGRvbm7DqWVzXFxuICAgICAgICAgICAgcGFyIGxlIENsaWVudCBvdSB1biB0aWVycyBheWFudCBhY2PDqWTDqSBhdXggU2VydmljZXMgYXBwbGljYXRpZnNcXG4gICAgICAgICAgICBhdSBtb3llbiBkZXMgSWRlbnRpZmlhbnRzIHJlbWlzIGF1IENsaWVudC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazlcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1XCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiYy4gUmVzcG9uc2FiaWxpdMOpIGR1IENsaWVudFwiKV0pXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGkuIEVuIHRhbnQgcXVlIHByb2Zlc3Npb25uZWwgZGUgbGEgcsOpw6lkdWNhdGlvbiBldC9vdSBkdSBzcG9ydCxcXG4gICAgICAgICAgICBsZSBDbGllbnQgZXN0IGVudGnDqHJlbWVudCByZXNwb25zYWJsZSBkZSB0b3V0ZSBjcsOpYXRpb24sXFxuICAgICAgICAgICAgdHJhbnNtaXNzaW9uIG91IHB1YmxpY2F0aW9uIGRlIENvbnRlbnUgYXUgbW95ZW4gZGUgbGEgUGxhdGVmb3JtZVxcbiAgICAgICAgICAgIGV0IGVuIHBhcnRpY3VsaWVyIGRlIGxhIGTDqWZpbml0aW9uIGRlcyBleGVyY2ljZXMgZGUgcsOpw6lkdWNhdGlvblxcbiAgICAgICAgICAgIHByb3Bvc8OpcyBhdXggVXRpbGlzYXRldXJzIHN1ciBsYSBQbGF0ZWZvcm1lLCBlbiBmb25jdGlvbiBkZVxcbiAgICAgICAgICAgIGxldXJzIGJlc29pbnMgZXQgZGUgbGV1cnMgY2FwYWNpdMOpcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaWkuIExlIENsaWVudCBhc3N1bWUgbOKAmWVudGnDqHJlIHJlc3BvbnNhYmlsaXTDqSBxdWFudCBhdXhcXG4gICAgICAgICAgICBjb25zw6lxdWVuY2VzIGRpcmVjdGVzIGV0L291IGluZGlyZWN0ZXMgZGUgbOKAmXV0aWxpc2F0aW9uIGRlXFxuICAgICAgICAgICAgUGxhdGVmb3JtZSBldCBub3RhbW1lbnQgZGUgbGEgY3LDqWF0aW9uIGRlIENvbnRlbnVzLiBMZXMgZXhlbXBsZXNcXG4gICAgICAgICAgICBkZSBDb250ZW51cyBldCDDqXZlbnR1ZWxzIGNvbnNlaWxzIGRlIEtpdmlkIGRvaXZlbnQgw6p0cmVcXG4gICAgICAgICAgICBjb25zaWTDqXLDqXMgdW5pcXVlbWVudCBjb21tZSBkZXMgb3BpbmlvbnMsIGxlIENsaWVudCByZXN0YW50IHNldWxcXG4gICAgICAgICAgICByZXNwb25zYWJsZSBkZSBsYSBjcsOpYXRpb24gZGVzIENvbnRlbnVzIMOgIGRlc3RpbmF0aW9uIGRlc1xcbiAgICAgICAgICAgIFV0aWxpc2F0ZXVycy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaXYuIExlIENsaWVudCBlc3QgdGVudSBkZSBwcmVuZHJlIHRvdXRlcyBsZXMgbWVzdXJlcyBhZmluIGRlXFxuICAgICAgICAgICAgc+KAmWFzc3VyZXIgcXVlIGxlcyBDb250ZW51cyBjcsOpw6lzIHN1ciBsYSBQbGF0ZWZvcm1lIHBvdXIgbGVzXFxuICAgICAgICAgICAgVXRpbGlzYXRldXJzIHNvbnQgY29uZm9ybWVzIMOgIGzigJnDqXRhdCBkZXMgY29ubmFpc3NhbmNlcyBlblxcbiAgICAgICAgICAgIG1hdGnDqHJlIGRlIHLDqcOpZHVjYXRpb24gcGh5c2lxdWUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxMFwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiNS4gRGlzcG9uaWJpbGl0w6kgZHUgU2VydmljZVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBhLiBLaXZpZCBmZXJhIHRvdXQgc29uIHBvc3NpYmxlIHBvdXIgcXVlIGxhIFBsYXRlZm9ybWUgc29pdFxcbiAgICAgICAgICAgIGFjY2Vzc2libGUgc2Vsb24gdW5lIG9ibGlnYXRpb24gZGUgbW95ZW5zLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBiLiBMZSBDbGllbnQgcmVjb25uYcOudCBxdWUgS2l2aWQgbmUgcG91cnJhIGVuIGF1Y3VuIGNhcyDDqnRyZVxcbiAgICAgICAgICAgIHJlc3BvbnNhYmxlIGRlcyDDqXZlbnR1ZWxsZXMgaW50ZXJydXB0aW9ucyBkZSBmb25jdGlvbm5lbWVudFxcbiAgICAgICAgICAgIGTigJlJbnRlcm5ldC4gS2l2aWQgc2UgcsOpc2VydmUgw6lnYWxlbWVudCBsZSBkcm9pdCBk4oCZaW50ZXJyb21wcmVcXG4gICAgICAgICAgICBs4oCZYWNjw6hzIMOgIGxhIFBsYXRlZm9ybWUgZW4gcmFpc29uIGTigJlvcMOpcmF0aW9ucyBkZSBtYWludGVuYW5jZS5cXG4gICAgICAgICAgICBEYW5zIGNlIGNhcywgS2l2aWQgZW4gaW5mb3JtZXJhIGxlIENsaWVudCBwYXIgY291cnJpZWwgYXUgbW9pbnNcXG4gICAgICAgICAgICB2aW5ndC1xdWF0cmUgKDI0KSBoZXVyZXMgYXZhbnQuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxMVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiNi4gTWFpbnRlbmFuY2VcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgYS4gVG91dGVzIGxlcyBpbnRlcnZlbnRpb25zIHPigJllZmZlY3R1ZW50IGHMgCBkaXN0YW5jZSwgc2Fuc1xcbiAgICAgICAgICAgIGludGVydmVudGlvbiBzdXIgc2l0ZSwgYXV4IGpvdXJzIGV0IGhldXJlcyBzdWl2YW50cyA6XFxuICAgICAgICAgICAgTHVuZGktVmVuZHJlZGkgZGUgOGggw6AgMTJoIGV0IGRlIDE0aCDDoCAxN2ggKEdNVCsxKSwgZXhjZXB0ZcyBIGxlc1xcbiAgICAgICAgICAgIGpvdXJzIGbDqXJpw6lzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBiLiBMZSBDbGllbnQgcGV1dCBmb3JtdWxlciBzZXMgcXVlc3Rpb25zIGV0IGRlbWFuZGVzXFxuICAgICAgICAgICAgZOKAmWludGVydmVudGlvbnMgcGFyIGVtYWlsIMOgIGzigJlhZHJlc3NlXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwibWFpbHRvOmNvbnRhY3RAa2l2aWQuZnJcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcImNvbnRhY3RAa2l2aWQuZnJcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazExXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCI3LiBBYm9ubmVtZW50IC0gRmFjdHVyYXRpb24gLSBSw6hnbGVtZW50XCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExlcyBwcsOpc2VudGVzIGNvbmRpdGlvbnMgZ8OpbsOpcmFsZXMgc+KAmWFwcGxpcXVlbnQgw6AgbOKAmWVuc2VtYmxlIGRlc1xcbiAgICAgICAgICAgIGZvcm11bGVzIGTigJlhYm9ubmVtZW50cyBwcm9wb3PDqWVzIHBhciBLaXZpZC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgVW5lIGNvbmZpcm1hdGlvbiBk4oCZYWJvbm5lbWVudCBzZXJhIGFkcmVzc8OpZSDDoCBs4oCZdXRpbGlzYXRldXIgcGFyXFxuICAgICAgICAgICAgcmV0b3VyIMOgIGzigJlhZHJlc3NlIGUtbWFpbCByZW5zZWlnbsOpZSwgcmVwcmVuYW50IGxlcyBpbmZvcm1hdGlvbnNcXG4gICAgICAgICAgICBjb250cmFjdHVlbGxlcywgbm90YW1tZW50IGxlIG1vbnRhbnQgZXhhY3QgZmFjdHVyw6kgZXQgbGVzXFxuICAgICAgICAgICAgbW9kYWxpdMOpcyBkZSBs4oCZb2ZmcmUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGzigJl1dGlsaXNhdGV1ciByZWNvbm5hw650IHF1ZSBsZXMgZG9ubsOpZXMgZW5yZWdpc3Ryw6llcyBzdXIgbGUgU2l0ZVxcbiAgICAgICAgICAgIGNvbnN0aXR1ZW50IGxhIHByZXV2ZSBkZSBsYSB0cmFuc2FjdGlvbiAodHlwZSBk4oCZYWJvbm5lbWVudCBldFxcbiAgICAgICAgICAgIGRhdGUgZGUgc291c2NyaXB0aW9uKSwgZXQgbGVzIGRvbm7DqWVzIGVucmVnaXN0csOpZXMgcGFyIGxlXFxuICAgICAgICAgICAgc3lzdMOobWUgZGUgcGFpZW1lbnQgY29uc3RpdHVlbnQgbGEgcHJldXZlIGRlIGxhIHRyYW5zYWN0aW9uXFxuICAgICAgICAgICAgZmluYW5jacOocmUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEzigJlhY2NlcHRhdGlvbiBkZXMgY29va2llcyBlc3QgaW5kaXNwZW5zYWJsZSBwb3VyIHRvdXQgYWNoYXQgb3VcXG4gICAgICAgICAgICBhYm9ubmVtZW50IHN1ciBsZSBTaXRlLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxMlwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJhLiBPZmZyZXMgZOKAmWFib25uZW1lbnRcIildKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBMZXMgcHJpbmNpcGFsZXMgb2ZmcmVzIHNvbnQgbGVzIHN1aXZhbnRlcywgw6l0YW50IHByw6ljaXPDqSBxdWVcXG4gICAgICAgICAgICBLaXZpZCBzZSByw6lzZXJ2ZSBsYSBmYWN1bHTDqSwgw6AgdG91dCBtb21lbnQsIGTigJlhbcOpbmFnZXIgY2VzXFxuICAgICAgICAgICAgb2ZmcmVzLCBhaW5zaSBxdWUgZGUgcHJvcG9zZXIgZGVzIG9mZnJlcyBwcm9tb3Rpb25uZWxsZXNcXG4gICAgICAgICAgICBwb25jdHVlbGxlcyBzdXIgbGUgU2l0ZSA6XFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX2MoXCJ1XCIsIFtfdm0uX3YoXCJpLiBBYm9ubmVtZW50IG1lbnN1ZWxcIildKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBVbiBhYm9ubmVtZW50IHNhbnMgZW5nYWdlbWVudCBk4oCZdW5lIGR1csOpZSBk4oCZdW4gbW9pcyDDoCBjb21wdGVyIGR1XFxuICAgICAgICAgICAgcGFpZW1lbnQgZHUgcHJpeCBldCByZWNvbmR1Y3RpYmxlIG1lbnN1ZWxsZW1lbnQuIFVuZSBmYWN0dXJlXFxuICAgICAgICAgICAgc2VyYSBhZHJlc3PDqWUgw6AgbOKAmXV0aWxpc2F0ZXVyIMOgIGzigJlvY2Nhc2lvbiBkZSBsYSBzb3VzY3JpcHRpb24gZGVcXG4gICAgICAgICAgICBs4oCZYWJvbm5lbWVudCBtZW5zdWVsIMOgIGxhIFBsYXRlZm9ybWUgcHVpcyB0b3VzIGxlcyBtb2lzIGF2ZWNcXG4gICAgICAgICAgICByZWNvbmR1Y3Rpb24gYXV0b21hdGlxdWUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazEzXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcImIuIENvbmRpdGlvbnMgZGUgcGFpZW1lbnRcIildKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBMYSBUVkEgZXQgdG91cyBhdXRyZXMgaW1ww7R0cyBldCB0YXhlcyBhcHBsaWNhYmxlcyBhdSBtb21lbnQgZGVcXG4gICAgICAgICAgICBsYSBmYWN0dXJhdGlvbiBzb250IMOgIGxhIGNoYXJnZSBkZSBs4oCZdXRpbGlzYXRldXIuIExlcyBmYWN0dXJlc1xcbiAgICAgICAgICAgIHNvbnQgcGF5YWJsZXMgYXVwcsOocyBkZSBLaXZpZCDDoCByw6ljZXB0aW9uIG91IGNvbmZvcm3DqW1lbnQgYXVcXG4gICAgICAgICAgICBkw6lsYWkgaW5kaXF1w6kgYXUgZGV2aXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExlcyBwYWllbWVudHMgc+KAmWVmZmVjdHVlbnQgcGFyIGNhcnRlIGJhbmNhaXJlIHNlbG9uIGxlc1xcbiAgICAgICAgICAgIG1vZGFsaXTDqXMgc3VpdmFudGVzIDpcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgUGFpZW1lbnQgcGFyIGNhcnRlIGJhbmNhaXJlIHBhciBzZXJ2ZXVyIGRlIHBhaWVtZW50XFxuICAgICAgICAgICAgICAgICAgICBzw6ljdXJpc8OpIChDYXJ0ZSBibGV1ZSBkdSBHSUUgYmFuY2FpcmUgQ2FydGUgYmxldWUsIFZpc2EsXFxuICAgICAgICAgICAgICAgICAgICBNYXN0ZXJDYXJkLCBBbWVyaWNhbiBFeHByZXNzLCBFdXJvY2FyZCBldCBWaXNhXFxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hdGlvbmFsZXMpLiBMZSBwYWllbWVudCBlbiBsaWduZSBwYXIgY2FydGVcXG4gICAgICAgICAgICAgICAgICAgIGJhbmNhaXJlIGVzdCBhc3N1csOpIHBhciB1bmUgc29sdXRpb24gc8OpY3VyaXPDqWUgZXRcXG4gICAgICAgICAgICAgICAgICAgIGNyeXB0w6llIChTVFJJUEUpIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgRW4gY2FzIGRlIHJldGFyZCBkZSBwYWllbWVudCwgS2l2aWQgcG91cnJhIHJlZnVzZXIsIHN1c3BlbmRyZSBvdVxcbiAgICAgICAgICAgIGFubnVsZXIgbOKAmWFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lLCBzYW5zIHByw6lqdWRpY2UgZGUgdG91dGUgYXV0cmVcXG4gICAgICAgICAgICBhY3Rpb24uIFRvdXRlIHNvbW1lIG5vbiBwYXnDqWUgw6AgbOKAmcOpY2jDqWFuY2UgcHLDqXZ1ZSBkb25uZXJhIGxpZXUsXFxuICAgICAgICAgICAgc2FucyBtaXNlIGVuIGRlbWV1cmUsIGF1IHBhaWVtZW50IGTigJlpbnTDqXLDqnRzIGRlIHJldGFyZCBz4oCZw6lsZXZhbnRcXG4gICAgICAgICAgICDDoCB0cm9pcyAoMykgZm9pcyBsZSB0YXV4IGRlIGzigJlpbnTDqXLDqnQgbMOpZ2FsIGVuIHZpZ3VldXIgYXUgam91clxcbiAgICAgICAgICAgIGRlIGxhIGZhY3R1cmF0aW9uIGV0IMOgIHVuZSBpbmRlbW5pdMOpIGZvcmZhaXRhaXJlIHBvdXIgZnJhaXMgZGVcXG4gICAgICAgICAgICByZWNvdXZyZW1lbnQgZGUgcXVhcmFudGUgKDQwKSBldXJvcyBwYXIgZmFjdHVyZSBpbXBhecOpZS4gRGFucyBsZVxcbiAgICAgICAgICAgIGNhcyBvw7kgbGVzIGZyYWlzIGRlIHJlY291dnJlbWVudCBkw6lwYXNzZXJhaWVudCBjZSBtb250YW50LCBLaXZpZFxcbiAgICAgICAgICAgIHNlIHLDqXNlcnZlIGxlIGRyb2l0IGTigJllbiBkZW1hbmRlciwgc3VyIGp1c3RpZmljYXRpZiwgbGVcXG4gICAgICAgICAgICByZW1ib3Vyc2VtZW50IGludMOpZ3JhbCBhdSBDbGllbnQuIExlcyBpbnTDqXLDqnRzIGNvdXJlbnQgZHUgam91clxcbiAgICAgICAgICAgIGRlIGzigJnDqWNow6lhbmNlIGp1c3F14oCZYXUgcGFpZW1lbnQgZWZmZWN0aWYuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJLaXZpZCBuZSBwcmF0aXF1ZSBwYXMgbOKAmWVzY29tcHRlLlwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazE0XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcImMuIFLDqXZpc2lvbiBkZXMgcHJpeFwiKV0pXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEtpdmlkIHNlIHLDqXNlcnZlIGxhIHBvc3NpYmlsaXTDqSBkZSBtb2RpZmllciBsZXMgdGFyaWZzIGVuIGNvdXJzXFxuICAgICAgICAgICAgZOKAmWFubsOpZSBzZWxvbiBsZXMgbW9kYWxpdMOpcyBzdWl2YW50ZXMgOlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBhLiBRdWluemUgKDE1KSBqb3VycyBhdmFudCBs4oCZYXBwbGljYXRpb24gZGVzIG5vdXZlYXV4IHRhcmlmcyxcXG4gICAgICAgICAgICBs4oCZdXRpbGlzYXRldXIgc2VyYSBpbmZvcm3DqSBkZSBjZXMgbW9kaWZpY2F0aW9ucztcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgYi4gUG91ciBjb250aW51ZXIgw6AgYXZvaXIgYWNjw6hzIMOgIGxhIFBsYXRlZm9ybWUsIGzigJl1dGlsaXNhdGV1clxcbiAgICAgICAgICAgIGRldnJhIHNww6ljaWZpcXVlbWVudCBhY2NlcHRlciBs4oCZYXBwbGljYXRpb24gZGUgY2VzIG5vdXZlYXV4XFxuICAgICAgICAgICAgdGFyaWZzIMOgIGxhIGRhdGUgYW5uaXZlcnNhaXJlIGRlIHNvbiBhYm9ubmVtZW50IG1lbnN1ZWwgb3VcXG4gICAgICAgICAgICBhbm51ZWwgbGUgY2FzIMOpY2jDqWFudCA7XFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGMuIEEgZMOpZmF1dCBk4oCZYWNjZXB0YXRpb24gZXhwcmVzc2UgZGVzIG5vdXZlYXV4IHRhcmlmcyxcXG4gICAgICAgICAgICBs4oCZdXRpbGlzYXRldXIgbmUgcG91cnJhIHBsdXMgYXZvaXIgYWNjw6hzIMOgIGxhIFBsYXRlZm9ybWUgw6BcXG4gICAgICAgICAgICBs4oCZaXNzdWUgZGUgc2EgcMOpcmlvZGUgZOKAmWVuZ2FnZW1lbnQsIHF1ZSBjZWxsZS1jaSBzb2l0IG1lbnN1ZWxsZVxcbiAgICAgICAgICAgIG91IGFubnVlbGxlLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMTVcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjguIFLDqXNpbGlhdGlvblwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBEYW5zIGxlIGNhZHJlIGTigJl1biBhYm9ubmVtZW50IMOgIGR1csOpZSBsaWJyZSBhdmVjIHBhaWVtZW50XFxuICAgICAgICAgICAgbWVuc3VlbCwgbGEgcmVjb25kdWN0aW9uIGRlIGzigJlhYm9ubmVtZW50IHBvdXIgdW5lIGR1csOpZSDDqWdhbGVcXG4gICAgICAgICAgICBlc3QgdGFjaXRlIGV0IGF1dG9tYXRpcXVlLiBM4oCZdXRpbGlzYXRldXIgcGV1dCB0b3V0ZWZvaXMgw6AgdG91dFxcbiAgICAgICAgICAgIG1vbWVudCBkZW1hbmRlciBsYSByw6lzaWxpYXRpb24gZGUgc29uIGFib25uZW1lbnQgw6AgcGFydGlyIGRlIHNvblxcbiAgICAgICAgICAgIGNvbXB0ZS1jbGllbnQuIFVuIGNvdXJyaWVsIGRlIGNvbmZpcm1hdGlvbiBzZXJhIGVudm95w6kgYXUgQ2xpZW50XFxuICAgICAgICAgICAgZXQgbGEgcsOpc2lsaWF0aW9uIHByZW5kcmEgZWZmZXQgw6AgbGEgZmluIGRlIGxhIHDDqXJpb2RlIGRlXFxuICAgICAgICAgICAgc291c2NyaXB0aW9uIGVuIGNvdXJzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBEYW5zIGxlIGNhZHJlIGTigJl1biBhYm9ubmVtZW50IGFubnVlbCwgbGEgcmVjb25kdWN0aW9uIGRlXFxuICAgICAgICAgICAgbOKAmWFib25uZW1lbnQgcG91ciB1bmUgZHVyw6llIMOpZ2FsZSBlc3QgdGFjaXRlIGV0IGF1dG9tYXRpcXVlLlxcbiAgICAgICAgICAgIEzigJl1dGlsaXNhdGV1ciBwZXV0IGRlbWFuZGVyIGxhIHLDqXNpbGlhdGlvbiBkZSBzb24gYWJvbm5lbWVudCDDoFxcbiAgICAgICAgICAgIHBhcnRpciBkZSBzb24gY29tcHRlLWNsaWVudCDDoCB0b3V0IG1vbWVudC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazE2XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCI5LiBQcm9wcmnDqXTDqVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBhLiBLaXZpZCBlc3QgZXQgZGVtZXVyZSB0aXR1bGFpcmUgZGVzIGRyb2l0cyBkZSBwcm9wcmnDqXTDqVxcbiAgICAgICAgICAgIHJlbGF0aWZzIMOgIHRvdXQgw6lsw6ltZW50IGRlIGxhIFBsYXRlZm9ybWUgZXQgZGVzIENvbnRlbnVzIG1pcyDDoFxcbiAgICAgICAgICAgIGRpc3Bvc2l0aW9uIGR1IENsaWVudCBldCBkZSBs4oCZdXRpbGlzYXRldXLCssKywrIsIGFpbnNpIHBsdXNcXG4gICAgICAgICAgICBnw6luw6lyYWxlbWVudCBxdWUgZGUgbOKAmWluZnJhc3RydWN0dXJlIGluZm9ybWF0aXF1ZSAobG9naWNpZWxsZSBldFxcbiAgICAgICAgICAgIG1hdMOpcmllbGxlKSBtaXNlIGVuIMWTdXZyZSBvdSBkw6l2ZWxvcHDDqWUgZGFucyBsZSBjYWRyZSBkdVxcbiAgICAgICAgICAgIENvbnRyYXQuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGIuIExlIENvbnRyYXQgbmUgY29uZsOocmUgYXUgQ2xpZW50IGF1Y3VuIGRyb2l0IGRlIHByb3ByacOpdMOpIHN1clxcbiAgICAgICAgICAgIGxhIFBsYXRlZm9ybWUuIExhIG1pc2Ugw6AgZGlzcG9zaXRpb24gdGVtcG9yYWlyZSBkZSBsYSBQbGF0ZWZvcm1lXFxuICAgICAgICAgICAgZGFucyBsZXMgY29uZGl0aW9ucyBwcsOpdnVlcyBhdSBDb250cmF0IG5lIHNhdXJhaXQgw6p0cmUgYW5hbHlzw6llXFxuICAgICAgICAgICAgY29tbWUgbGEgY2Vzc2lvbiBk4oCZdW4gcXVlbGNvbnF1ZSBkcm9pdCBkZSBwcm9wcmnDqXTDqVxcbiAgICAgICAgICAgIGludGVsbGVjdHVlbGxlIGF1IGLDqW7DqWZpY2UgZHUgQ2xpZW50LCBhdSBzZW5zIGR1IENvZGUgZnJhbsOnYWlzXFxuICAgICAgICAgICAgZGUgbGEgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGMuIExlIENsaWVudCBz4oCZaW50ZXJkaXQgZGUgcmVwcm9kdWlyZSB0b3V0IMOpbMOpbWVudCBkZSBsYVxcbiAgICAgICAgICAgIFBsYXRlZm9ybWUsIG91IHRvdXRlIGRvY3VtZW50YXRpb24gbGEgY29uY2VybmFudCwgcGFyIHF1ZWxxdWVcXG4gICAgICAgICAgICBtb3llbiBxdWUgY2Ugc29pdCwgc291cyBxdWVscXVlIGZvcm1lIHF1ZSBjZSBzb2l0IGV0IHN1ciBxdWVscXVlXFxuICAgICAgICAgICAgc3VwcG9ydCBxdWUgY2Ugc29pdC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgZC4gTGUgQ2xpZW50IGV0IHV0aWxpc2F0ZXVyIG5lIHBvdXJyb250IGPDqWRlciB0b3V0IG91IHBhcnRpZSBkZXNcXG4gICAgICAgICAgICBkcm9pdHMgZXQgb2JsaWdhdGlvbnMgcsOpc3VsdGFudCBkdSBDb250cmF0LCBxdWUgY2Ugc29pdCBkYW5zIGxlXFxuICAgICAgICAgICAgY2FkcmUgZCd1bmUgY2Vzc2lvbiB0ZW1wb3JhaXJlLCBkJ3VuZSBzb3VzLWxpY2VuY2UgZXQgZGUgdG91dFxcbiAgICAgICAgICAgIGF1dHJlIGNvbnRyYXQgcHLDqXZveWFudCBsZSB0cmFuc2ZlcnQgZGVzZGl0cyBkcm9pdHMgZXRcXG4gICAgICAgICAgICBvYmxpZ2F0aW9ucy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgZS4gS2l2aWQgZMOpY2xhcmUgZXQgZ2FyYW50aXQgw6p0cmUgdGl0dWxhaXJlIGRlIHRvdXMgbGVzIGRyb2l0c1xcbiAgICAgICAgICAgIGRlIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlIHF1aSBsdWkgcGVybWV0dGVudCBkZSBjb25jbHVyZSBsZVxcbiAgICAgICAgICAgIENvbnRyYXQuIEtpdmlkIGTDqWNsYXJlIGV0IGdhcmFudGl0IHF1ZSBsZXMgU29sdXRpb25zIG5lIHNvbnQgcGFzXFxuICAgICAgICAgICAgc3VzY2VwdGlibGVzIGRlIHBvcnRlciBhdHRlaW50ZSBhdXggZHJvaXRzIGRlcyB0aWVycy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazE3XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIxMC4gVHJhaXRlbWVudCBkZXMgZG9ubsOpZXMgcGVyc29ubmVsbGVzXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExlcyBQYXJ0aWVzIHPigJllbmdhZ2VudCDDoCByZXNwZWN0ZXIgbGEgcsOpZ2xlbWVudGF0aW9uIGFwcGxpY2FibGUsXFxuICAgICAgICAgICAgbm90YW1tZW50IGxlIFLDqGdsZW1lbnQgRXVyb3DDqWVuIHN1ciBsYSBQcm90ZWN0aW9uIGRlcyBEb25uw6llcyxcXG4gICAgICAgICAgICBkaXQgwqsgUkdQRCDCuyAobsKwMjAxNi02NzkgcmVsYXRpZiDDoCBsYSBwcm90ZWN0aW9uIGRlcyBwZXJzb25uZXNcXG4gICAgICAgICAgICBwaHlzaXF1ZXMgw6AgbOKAmcOpZ2FyZCBkdSB0cmFpdGVtZW50IGRlcyBkb25uw6llcyDDoCBjYXJhY3TDqHJlXFxuICAgICAgICAgICAgcGVyc29ubmVsIGV0IMOgIGxhIGxpYnJlIGNpcmN1bGF0aW9uIGRlIGNlcyBkb25uw6llcykgZXQgbGEgbG9pIMKrXFxuICAgICAgICAgICAgSW5mb3JtYXRpcXVlIGV0IGxpYmVydMOpcyDCuyAobG9pIG7CsDc4LTE3IGR1IDYgamFudmllciAxOTc4XFxuICAgICAgICAgICAgcmVsYXRpdmUgw6AgbOKAmWluZm9ybWF0aXF1ZSwgYXV4IGZpY2hpZXJzIGV0IGF1eCBsaWJlcnTDqXNcXG4gICAgICAgICAgICBtb2RpZmnDqWUpIGRhbnMgbGUgY2FkcmUgZHUgQ29udHJhdC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgYS4gVHJhaXRlbWVudHMgbWlzIGVuIMWTdXZyZSBwYXIgbGUgQ2xpZW50IGFnaXNzYW50IGVuXFxuICAgICAgICAgICAgcmVzcG9uc2FibGUgZGUgdHJhaXRlbWVudFxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBMZSBDbGllbnQgZXN0IHJlc3BvbnNhYmxlIGR1IHRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIGRlIHNlc1xcbiAgICAgICAgICAgIGNsaWVudHMgdXRpbGlzYXRldXJzIGRlIGxhIFBsYXRlZm9ybWUsIGxvcnNxdWUgbGVzIHRyYWl0ZW1lbnRzXFxuICAgICAgICAgICAgc29udCBtaXMgZW4gxZN1dnJlIGRhbnMgbGUgY2FkcmUgZGUgc2EgcmVsYXRpb24gYXZlYyBsZXNcXG4gICAgICAgICAgICBVdGlsaXNhdGV1cnMuIERhbnMgbGUgY2FkcmUgZGUgY2VzIHRyYWl0ZW1lbnRzLCBsZSBDbGllbnRcXG4gICAgICAgICAgICB0cmFuc21ldHRyYSDDoCBLaXZpZCBzZXMgaW5zdHJ1Y3Rpb25zIGRvY3VtZW50w6llcywgcXVpXFxuICAgICAgICAgICAgaW5kaXF1ZXJvbnQgbOKAmW9iamV0IGV0IGxhIGR1csOpZSBkdSB0cmFpdGVtZW50LCBzYSBuYXR1cmUgZXQgc2VzXFxuICAgICAgICAgICAgZmluYWxpdMOpcywgbGUgdHlwZSBkZSBEb25uw6llcyBwZXJzb25uZWxsZXMgZXQgbGEgY2F0w6lnb3JpZSBkZXNcXG4gICAgICAgICAgICBwZXJzb25uZXMgY29uY2VybsOpZXMsIGFpbnNpIHF1ZSBzZXMgZHJvaXRzIGV0IG9ibGlnYXRpb25zIGVuXFxuICAgICAgICAgICAgdGFudCBxdWUgcmVzcG9uc2FibGUgZHUgdHJhaXRlbWVudC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgYi4gVHJhaXRlbWVudHMgbWlzIGVuIMWTdXZyZSBwYXIgS2l2aWQgYWdpc3NhbnQgZW4gcmVzcG9uc2FibGUgZGVcXG4gICAgICAgICAgICB0cmFpdGVtZW50XFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEtpdmlkIGVzdCByZXNwb25zYWJsZSBkdSB0cmFpdGVtZW50IGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXNcXG4gICAgICAgICAgICByw6lhbGlzw6kgcG91ciB2b3VzIHBlcm1ldHRyZSBk4oCZdXRpbGlzZXIgbGVzIFNlcnZpY2VzIHN1ciBsZSBTaXRlLlxcbiAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZGVzIHRyYWl0ZW1lbnRzIGRvbnQgS2l2aWQgZXN0IHJlc3BvbnNhYmxlIGRlXFxuICAgICAgICAgICAgdHJhaXRlbWVudCwgbGUgQ2xpZW50IGV0IGzigJlVdGlsaXNhdGV1ciBwZXV2ZW50IGV4ZXJjZXIgbGV1clxcbiAgICAgICAgICAgIGRyb2l0IGTigJlhY2PDqHMsIHJlY3RpZmljYXRpb24sIGVmZmFjZW1lbnQsIGxpbWl0YXRpb24gZHVcXG4gICAgICAgICAgICB0cmFpdGVtZW50IGV0IG9iamVjdGlvbiBhdSB0cmFpdGVtZW50IGRlcHVpcyBsZXVyIGNvbXB0ZSBzdXIgbGVcXG4gICAgICAgICAgICBTaXRlIG91IGVuIHPigJlhZHJlc3NhbnQgZGlyZWN0ZW1lbnQgw6BcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJtYWlsdG86Y29udGFjdEBraXZpZC5mclwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiY29udGFjdEBraXZpZC5mclwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFwidVwiLCBbX3ZtLl92KFwiaS4gVHlwb2xvZ2llIGRlcyBEb25uw6llcyBjb2xsZWN0w6llcyBwYXIgS2l2aWRcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTGVzIERvbm7DqWVzIGNvbGxlY3TDqWVzIHBhciBLaXZpZCBwb3VyIGxlcyBiZXNvaW5zIGRlIGxhXFxuICAgICAgICAgICAgUGxhdGVmb3JtZSBzb250IG5vdGFtbWVudCBsZXMgc3VpdmFudGVzIDpcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIk5vbXMsIHByw6lub21zLCBjaXZpbGl0w6ksIGRhdGUgZGUgbmFpc3NhbmNlIDtcIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgQWRyZXNzZSBwb3N0YWxlLCBhZHJlc3NlIGUtbWFpbCwgbnVtw6lybyBkZSB0w6lsw6lwaG9uZSA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBJZGVudGlmaWFudCBldCBtb3QgZGUgcGFzc2UgY3J5cHTDqSB1dGlsaXPDqXMgcG91ciB2b3VzXFxuICAgICAgICAgICAgICAgICAgICBz4oCZaWRlbnRpZmllciBzdXIgbGEgUGxhdGVmb3JtZSA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBJbmZvcm1hdGlvbnMgY3J5cHTDqWVzIHJlbGF0aXZlcyDDoCB2b3MgbW95ZW5zIGRlIHBhaWVtZW50XFxuICAgICAgICAgICAgICAgICAgICAobm90YW1tZW50IG51bcOpcm8gZGUgY2FydGUgYmFuY2FpcmUpIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIENob2l4IGVuIG1hdGnDqHJlIGRlIHByb3NwZWN0aW9uIGNvbW1lcmNpYWxlIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFRvdXRlIGF1dHJlIGluZm9ybWF0aW9uIHF1ZSB2b3VzIHNvdWhhaXRleiBwb3J0ZXIgw6BcXG4gICAgICAgICAgICAgICAgICAgIG5vdHJlIGNvbm5haXNzYW5jZS5cXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgUGFyIGzigJlpbnRlcm3DqWRpYWlyZSBkZXMgY29va2llcywgS2l2aWQgY29sbGVjdGUgw6lnYWxlbWVudCBkZXNcXG4gICAgICAgICAgICBpbmZvcm1hdGlvbnMgcmVsYXRpdmVzIMOgIGxhIGNvbm5leGlvbiBldCDDoCBsYSBuYXZpZ2F0aW9uLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBLaXZpZCBuZSBjb2xsZWN0ZSBsdWktbcOqbWUgYXVjdW5lIGRvbm7DqWUgY29uc2lkw6lyw6llIMKrXFxuICAgICAgICAgICAgcGFydGljdWxpw6hyZSDCuyBwYXIgbGUgUkdQRCBjb25jZXJuYW50IGxlIENsaWVudCBvdSBs4oCZVXRpbGlzYXRldXJcXG4gICAgICAgICAgICBwb3VyIGxlcyBiZXNvaW5zIGR1IGZvbmN0aW9ubmVtZW50IGRlIGxhIFBsYXRlZm9ybWUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcInVcIiwgW192bS5fdihcImlpLiBGaW5hbGl0w6kgZGVzIHRyYWl0ZW1lbnRzIGRlIERvbm7DqWVzIGTigJlLaXZpZFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBLaXZpZCB1dGlsaXNlIGxlcyBEb25uw6llcyByZWN1ZWlsbGllcyBwb3VyIGxlcyBmaW5hbGl0w6lzXFxuICAgICAgICAgICAgc3VpdmFudGVzIDpcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdGlvbiBkZSBsYSBzb3VzY3JpcHRpb24gw6AgdW4gY29udHJhdCBk4oCZYWJvbm5lbWVudFxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgR2VzdGlvbiBkZXMgYWJvbm5lbWVudHMgw6Agbm9zIG5ld3NsZXR0ZXJzIGV0L291IGFsZXJ0ZXNcXG4gICAgICAgICAgICAgICAgICAgIGUtbWFpbHNcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJGYWN0dXJhdGlvbiBldCBwYWllbWVudHNcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBDb25uZXhpb24gYXV0b21hdGlxdWUgYXV4IGVzcGFjZXMgcsOpc2VydsOpcyBvdSBwZXJzb25uZWxzXFxuICAgICAgICAgICAgICAgICAgICBkZSBsYSBQbGF0ZWZvcm1lLCBhdSBtb3llbiBkZXMgSWRlbnRpZmlhbnRzIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIENyw6lhdGlvbiBk4oCZb3V0aWxzIGRlIHBhcnRhZ2Ugc3VyIGxlcyByw6lzZWF1eCBzb2NpYXV4XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBSZWxhdGlvbiBjbGllbnQgOiBwcmlzZSBlbiBjb21wdGUgZGUgcXVlc3Rpb25zLFxcbiAgICAgICAgICAgICAgICAgICAgcsOpY2xhbWF0aW9uLCByw6lhbGlzYXRpb24gZOKAmWVucXXDqnRlcyBkZSBzYXRpc2ZhY3Rpb24sIOKAplxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgTWlzZSBlbiBwbGFjZSBk4oCZb3DDqXJhdGlvbnMgY29tbWVyY2lhbGVzIHkgY29tcHJpc1xcbiAgICAgICAgICAgICAgICAgICAgZmlkw6lsaXNhdGlvbiBldCBwcm9zcGVjdGlvbiBjb21tZXJjaWFsZSA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiU3RhdGlzdGlxdWVzIGNvbW1lcmNpYWxlc1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfYyhcInVcIiwgW192bS5fdihcImlpaS4gRHVyw6llIGRlIGNvbnNlcnZhdGlvblwiKV0pXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFBvdXIgbGEgbWlzZSBlbiDFk3V2cmUgZGUgc2VzIGFjdGl2aXTDqXMsIEtpdmlkIHPigJllbmdhZ2Ugw6BcXG4gICAgICAgICAgICBjb25zZXJ2ZXIgbGVzIERvbm7DqWVzIHBvdXIgdW5lIGR1csOpZSBkZSB0cm9pcyAoMykgYW5zIMOgIGNvbXB0ZXJcXG4gICAgICAgICAgICBkZSBsYSBjb2xsZWN0ZSBkZXMgZG9ubsOpZXMgb3UgZHUgZGVybmllciBjb250YWN0IMOpbWFuYW50IGR1XFxuICAgICAgICAgICAgcHJvc3BlY3QuIFRvdXRlZm9pcywgS2l2aWQgc+KAmWVuZ2FnZSDDoCBzdXBwcmltZXIgbGVzIGluZm9ybWF0aW9uc1xcbiAgICAgICAgICAgIGRvbnQgbGEgY29uc2VydmF0aW9uIG5lIHNlcmFpdCBwbHVzIG7DqWNlc3NhaXJlIGF1IHJlZ2FyZCBkZXNcXG4gICAgICAgICAgICBleGlnZW5jZXMgbMOpZ2lzbGF0aXZlcyBldCByw6lnbGVtZW50YWlyZXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX2MoXCJ1XCIsIFtfdm0uX3YoXCJpdi4gRGVzdGluYXRhaXJlcyBkZXMgRG9ubsOpZXNcIildKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBM4oCZYWNjw6hzIGF1eCBEb25uw6llcyBlc3QgbGltaXTDqSDDoCBsYSByw6lhbGlzYXRpb24gZGVzIGZpbmFsaXTDqXNcXG4gICAgICAgICAgICBkZXMgdHJhaXRlbWVudHMgZMOpY3JpdCBjaS1kZXNzdXMgZXQgYXV4IHNldWxlcyBwZXJzb25uZXNcXG4gICAgICAgICAgICBoYWJpbGl0w6llcyBzb3VtaXNlcyDDoCB1bmUgb2JsaWdhdGlvbiBkZSBjb25maWRlbnRpYWxpdMOpLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFwidVwiLCBbX3ZtLl92KFwidi4gU8OpY3VyaXTDqSBldCBjb25maWRlbnRpYWxpdMOpIGRlcyBEb25uw6llc1wiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBLaXZpZCBz4oCZZW5nYWdlIGHMgCBhc3N1cmVyIGxhIHPDqWN1cml0w6kgZXQgbGEgcHJvdGVjdGlvbiBkZXNcXG4gICAgICAgICAgICBEb25uw6llcyBkdSBDbGllbnQgZXQgZGUgbOKAmVV0aWxpc2F0ZXVyIGFmaW4gbm90YW1tZW50IGQnZW1ww6pjaGVyXFxuICAgICAgICAgICAgcXUnZWxsZXMgbmUgc29pZW50IGTDqWZvcm3DqWVzLCBlbmRvbW1hZ8OpZXMgb3UgY29tbXVuaXF1w6llcyBhzIAgZGVzXFxuICAgICAgICAgICAgdGllcnMgbm9uIGF1dG9yaXPDqXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEtpdmlkIHPigJllbmdhZ2UgYcyAIGFzc3VyZXIsIGV0IGHMgCBmYWlyZSByZXNwZWN0ZXIgbOKAmWjDqWJlcmdldXIgZGVzXFxuICAgICAgICAgICAgRG9ubsOpZXMgYWdpc3NhbnQgZW4gc291cy10cmFpdGFuY2UsIGxhIHBsdXMgc3RyaWN0ZVxcbiAgICAgICAgICAgIGNvbmZpZGVudGlhbGl0w6kgzIFldCBsYSBwbHVzIHN0cmljdGUgc8OpY3VyaXTDqSBkYW5zIGxlIHByb2Nlc3N1cyBkZVxcbiAgICAgICAgICAgIHRyYWl0ZW1lbnQgZXQgZGUgc3RvY2thZ2UgZGVzIERvbm7DqWVzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBUb3V0ZWZvaXMsIGRlIG1hbmnDqHJlIGV4Y2VwdGlvbm5lbGxlLCBpbCBwZXV0IGFycml2ZXIgcXVlXFxuICAgICAgICAgICAgY2VydGFpbmVzIERvbm7DqWVzIHNvaWVudCB0cmFuc2bDqXLDqWVzIMOgIGRlcyBzb3VzLXRyYWl0YW50cyBvdVxcbiAgICAgICAgICAgIHBhcnRlbmFpcmVzIGNvbW1lcmNpYXV4IGF5YW50IHVuZSBpbXBsYW50YXRpb24gc2l0dcOpZSBlbiBkZWhvcnNcXG4gICAgICAgICAgICBkZSBs4oCZVW5pb24gZXVyb3DDqWVubmUuIEVuIGNhcyBkZSB0cmFuc2ZlcnQgZGUgY2UgdHlwZSwgS2l2aWRcXG4gICAgICAgICAgICBz4oCZZW5nYWdlIMOgIGNlIHF1ZSBsZSB0cmFpdGVtZW50IHNvaXQgZWZmZWN0dcOpIGNvbmZvcm3DqW1lbnQgYXV4XFxuICAgICAgICAgICAgY2xhdXNlcyBjb250cmFjdHVlbGxlcyB0eXBlcyBkZSBsYSBDb21taXNzaW9uIGV1cm9ww6llbm5lIHF1aVxcbiAgICAgICAgICAgIHBlcm1ldHRlbnQgZGUgZ2FyYW50aXIgdW4gbml2ZWF1IGRlIHByb3RlY3Rpb24gc3VmZmlzYW50IGRlIGxhXFxuICAgICAgICAgICAgdmllIHByaXbDqWUgZXQgZGVzIGRyb2l0cyBmb25kYW1lbnRhdXggZGVzIHBlcnNvbm5lcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazE4XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIjExLiBMb2kgQXBwbGljYWJsZSDigJMgQ29tcMOpdGVuY2UgZGUganVyaWRpY3Rpb25cIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTGEgbG9pIGFwcGxpY2FibGUgYXUgcHLDqXNlbnQgY29udHJhdCBlc3QgbGEgbG9pIGZyYW7Dp2Fpc2UuIExlc1xcbiAgICAgICAgICAgIFBhcnRpZXMgc+KAmWVuZ2FnZW50IGHMgCBwcm9jw6lkZXIgYcyAIHVuZSB0ZW50YXRpdmUgZGUgY29uY2lsaWF0aW9uXFxuICAgICAgICAgICAgYXZhbnQgdG91dCByZWNvdXJzIGF1IGp1Z2UuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2tpdmlkXCIgfSwgW1xuICAgICAgICBfYyhcImgxXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiUG9saXRpcXVlIGRlIENvbmZpZGVudGlhbGl0w6lcIildKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBDZXR0ZSBQb2xpdGlxdWUgZGUgQ29uZmlkZW50aWFsaXTDqSBlc3QgbGEgYmFzZSBwb3VyIHRyYWl0ZXJcXG4gICAgICAgICAgICB0b3V0ZXMgRG9ubsOpZXMgUGVyc29ubmVsbGVzIHF1ZSBub3VzIHJhc3NlbWJsb25zIG91IHF1ZSB2b3VzXFxuICAgICAgICAgICAgbm91cyBmb3Vybmlzc2V6IGF1IHRyYXZlcnMgZHUgc2l0ZSB3ZWIgZGlzcG9uaWJsZSDDoCBs4oCZYWRyZXNzZVxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9cIiB9IH0sIFtfdm0uX3YoXCJ3d3cua2l2aWQuZnJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIiAoY2ktYXByw6hzIGTDqW5vbW3DqSDCqyBsYSBQbGF0ZWZvcm1lXFxuICAgICAgICAgICAgwrspLCBhaW5zaSBxdeKAmcOgIHRvdXRlIHJlY2hlcmNoZSBlZmZlY3R1w6llIHN1ciBsYWRpdGUgUGxhdGVmb3JtZSxcXG4gICAgICAgICAgICBldC9vdSB0b3V0ZSB1dGlsaXNhdGlvbiBkZSBsYWRpdGUgUGxhdGVmb3JtZSBwYXIgbOKAmWludGVybmF1dGVcXG4gICAgICAgICAgICBxdWkgc+KAmXkgY29ubmVjdGUgKMKrIGzigJlVdGlsaXNhdGV1ciDCuykuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIxLiBJZGVudGl0w6kgZGVzIHJlc3BvbnNhYmxlcyBkZSB0cmFpdGVtZW50XCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIENoYXF1ZSBwcm9mZXNzaW9ubmVsIHByYXRpY2llbiBlc3QgY29uc2lkw6lyw6kgY29tbWUgcmVzcG9uc2FibGVcXG4gICAgICAgICAgICBkZSB0cmFpdGVtZW50IGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXMgZGUgc2FudMOpIGRlIHNlc1xcbiAgICAgICAgICAgIFV0aWxpc2F0ZXVycywgdGFuZGlzIHF1ZSBLSVZJRCBhZ2l0IGNvbW1lIHNvdXMtdHJhaXRhbnQgYWdpc3NhbnRcXG4gICAgICAgICAgICBzdXIgaW5zdHJ1Y3Rpb24gcGFydGljdWxpw6hyZSBkZSBjaGFxdWUgcHJhdGljaWVuLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBLSVZJRCBlc3QgY29uc2lkw6lyw6kgY29tbWUgcmVzcG9uc2FibGUgZGUgdHJhaXRlbWVudCBkZXMgZG9ubsOpZXNcXG4gICAgICAgICAgICByZWxhdGl2ZXMgw6AgbGEgY3LDqWF0aW9uIGR1IGNvbXB0ZSBwZXJzb25uZWwgZGUgbCd1dGlsaXNhdGV1ciwgZGVcXG4gICAgICAgICAgICBzYSBuYXZpZ2F0aW9uIHN1ciBsYSBQbGF0ZWZvcm1lLCDDoCBsYSBjcsOpYXRpb24gZGUgc3RhdGlzdGlxdWVzXFxuICAgICAgICAgICAgcmVsYXRpdmVzIMOgIGwndXRpbGlzYXRpb24gZGUgbCdvdXRpbC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazFcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIjIuIERvbm7DqWVzIHF1ZSBub3VzIHBvdXZvbnMgY29sbGVjdGVyIHZvdXNcXG4gICAgICAgICAgICAgICAgY29uY2VybmFudFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBOb3VzIHBvdXZvbnMgw6p0cmUgYW1lbsOpcyDDoCByYXNzZW1ibGVyIGV0IHRyYWl0ZXIgbGVzIERvbm7DqWVzXFxuICAgICAgICAgICAgUGVyc29ubmVsbGVzIHN1aXZhbnRlcyA6XFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIEluZm9ybWF0aW9ucyBxdWUgdm91cyBub3VzIGZvdXJuaXNzZXogZW4gcmVtcGxpc3NhbnQgZGVzXFxuICAgICAgICAgICAgICAgICAgICBjaGFtcHMgbGlicmVzIG91IGZvcm11bGFpcmVzIHN1ciBub3RyZSBQbGF0ZWZvcm1lLiBMZXNcXG4gICAgICAgICAgICAgICAgICAgIG1lbnRpb25zIHNvdXMgY2VzIGZvcm11bGFpcmVzIHJhcHBlbGxlbnQgbGVzIGRyb2l0cyBkb250XFxuICAgICAgICAgICAgICAgICAgICB2b3VzIGRpc3Bvc2V6IHN1ciB2b3MgaW5mb3JtYXRpb25zLCBjb21tZSBzdGlwdWzDqVxcbiAgICAgICAgICAgICAgICAgICAgY2ktYXByw6hzIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFNpIHZvdXMgbm91cyBjb250YWN0ZXosIG5vdXMgcG91dm9ucyBnYXJkZXIgdW4gcmFwcG9ydFxcbiAgICAgICAgICAgICAgICAgICAgZGUgY2V0dGUgY29ycmVzcG9uZGFuY2UgZXQgbm91cyBwb3V2b25zIGVucmVnaXN0cmVyIHZvc1xcbiAgICAgICAgICAgICAgICAgICAgY29tbXVuaWNhdGlvbnMgYXZlYyBub3VzIHBvdXIgZGVzIGNvbnRyw7RsZXMgZGUgcXVhbGl0w6lcXG4gICAgICAgICAgICAgICAgICAgIGV0IMOgIGRlcyBmaW5zIGRlIGZvcm1hdGlvbiA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBEZXMgZMOpdGFpbHMgZGUgdm9zIHZpc2l0ZXMgc3VyIG5vdHJlIFBsYXRlZm9ybWUg4oCTXFxuICAgICAgICAgICAgICAgICAgICBub3RhbW1lbnQsIMOgIGRlcyBkb25uw6llcyByZWxhdGl2ZXMgYXUgdHJhZmljLCB2b3RyZVxcbiAgICAgICAgICAgICAgICAgICAgcGFyY291cnMsIHZvdHJlIGxhbmd1ZSBkZSBuYXZpZ2F0ZXVyLCBkZXMgZG9ubsOpZXMgZGVcXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXNhdGlvbiwgZGVzIGNhcm5ldHMgd2ViIGV0IGTigJlhdXRyZXMgaW5mb3JtYXRpb25zXFxuICAgICAgICAgICAgICAgICAgICBkZSBjb21tdW5pY2F0aW9uIOKAkyBldCBsZXMgcmVzc291cmNlcyBhdXhxdWVsbGVzIHZvdXNcXG4gICAgICAgICAgICAgICAgICAgIGFjY8OpZGV6LlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMlwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiMy4gRHVyw6llIGRlIGNvbnNlcnZhdGlvbiBkZXMgaW5mb3JtYXRpb25zIHF1ZSBub3VzIHBvdXZvbnNcXG4gICAgICAgICAgICAgICAgYWNxdcOpcmlyIHZvdXMgY29uY2VybmFudFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExhIHDDqXJpb2RlIGRlIHLDqXRlbnRpb24gcG91ciBkZXMgZG9ubsOpZXMgZXQvb3UgZGVzIGluZm9ybWF0aW9uc1xcbiAgICAgICAgICAgIGRlIG5vdHJlIFBsYXRlZm9ybWUgZXN0IGRlIDEzIG1vaXMgw6AgbOKAmWV4Y2VwdGlvbiBkZXMgZG9ubsOpZXNcXG4gICAgICAgICAgICBheWFudCBmYWl0IGzigJlvYmpldCBk4oCZdW4gcHJvY2Vzc3VzIGTigJlhbm9ueW1pc2F0aW9uIGNvbmZvcm3DqW1lbnQgw6BcXG4gICAgICAgICAgICBsYSBsw6lnaXNsYXRpb24gYXBwbGljYWJsZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgVG91dGVmb2lzLCBjZXJ0YWluZXMgZG9ubsOpZXMgcGV1dmVudCDDqnRyZSBjb25zZXJ2w6llcyBwb3VyIHVuZVxcbiAgICAgICAgICAgIHBsdXMgbG9uZ3VlIGR1csOpZSBldCBub3RhbW1lbnQgKGkpIHBlbmRhbnQgdG91dGUgbGEgZHVyw6llIGRlIHZpZVxcbiAgICAgICAgICAgIGRlIHZvdHJlIGNvbXB0ZSBlbiBsaWduZSBldCBqdXNxdeKAmcOgIHNhIHN1cHByZXNzaW9uLCBsZSBjYXNcXG4gICAgICAgICAgICDDqWNow6lhbnQsIChpaSkgcGVuZGFudCBsYSBkdXLDqWUgc3RpcHVsw6llIGRhbnMgdG91dCBjb250cmF0IHF1aVxcbiAgICAgICAgICAgIHNlcmFpdCBjb25jbHUgYXZlYyBLSVZJRC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazNcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjYuIFBvbGl0aXF1ZSBlbiBtYXRpw6hyZSBkZSBjb29raWVzXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIE5vdXMgcG91dm9ucyBvYnRlbmlyIGRlcyBpbmZvcm1hdGlvbnMgc3VyIHZvdHJlIHV0aWxpc2F0aW9uXFxuICAgICAgICAgICAgZOKAmUludGVybmV0IGVuIGfDqW7DqXJhbCBlbiB1dGlsaXNhbnQgZGVzIGRpc3Bvc2l0aWZzIGTigJlhY2PDqHNcXG4gICAgICAgICAgICBub3RhbW1lbnQgZGUgdHlwZSBjb29raWUgKHVuIGNvb2tpZSBlc3QgdW4gcGV0aXQgZmljaGllciB0ZXh0ZVxcbiAgICAgICAgICAgIHF1aSBlc3QgZ2FyZMOpIHN1ciBsZSBkaXNxdWUgZHVyIGRlIHZvdHJlIG9yZGluYXRldXIpLiBMZXNcXG4gICAgICAgICAgICBjb29raWVzIG5vdXMgYWlkZW50IMOgIGFtw6lsaW9yZXIgbm90cmUgUGxhdGVmb3JtZSBldCDDoCBmb3VybmlyIHVuXFxuICAgICAgICAgICAgc2VydmljZSBkZSBtZWlsbGV1cmUgcXVhbGl0w6kuIE5vdXMgdXRpbGlzb25zIGRlcyBjb29raWVzIMOpdGFudFxcbiAgICAgICAgICAgIHN0cmljdGVtZW50IG7DqWNlc3NhaXJlcyDDoCB2b3RyZSB1dGlsaXNhdGlvbiBkZSBub3RyZSBQbGF0ZWZvcm1lLlxcbiAgICAgICAgICAgIFZvdXMgcG91dmV6IHJlZnVzZXIgZOKAmWFjY2VwdGVyIGNlcyBjb29raWVzIGVuIGFjdGl2YW50IGxlXFxuICAgICAgICAgICAgcGFyYW3DqHRyZSBxdWkgdm91cyBwZXJtZXQgZGUgcmVmdXNlciBs4oCZaW5zdGFsbGF0aW9uIGRlIGNvb2tpZXNcXG4gICAgICAgICAgICBzdXIgdm90cmUgb3JkaW5hdGV1ci4gQ2VwZW5kYW50LCBzaSB2b3VzIGNob2lzaXNzZXogY2VcXG4gICAgICAgICAgICBwYXJhbcOodHJlLCBpbCBlc3QgcG9zc2libGUgcXVlIHZvdXMgc295ZXogaW5jYXBhYmxlIGTigJlhY2PDqWRlciDDoFxcbiAgICAgICAgICAgIGNlcnRhaW5lcyBwYXJ0aWVzIGRlIG5vdHJlIFBsYXRlZm9ybWUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcms0XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCI3LiBQYXJ0YWdlIGF2ZWMgZGVzIHRpZXJzXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEFmaW4gZGUgdm91cyBhcHBvcnRlciBsZSBtZWlsbGV1ciBzZXJ2aWNlLCBub3VzIHBvdXZvbnMgZGFuc1xcbiAgICAgICAgICAgIGNlcnRhaW5zIGNhcyBwYXJ0YWdlciB2b3MgZG9ubsOpZXMgYXZlYyBkZXMgdGllcnMsIG5vdGFtbWVudCBkZXNcXG4gICAgICAgICAgICBwYXJ0ZW5haXJlcyB0ZWNobmlxdWVzIG91IGNvbW1lcmNpYXV4LiBOb3VzIG5lIHBhcnRhZ2Vyb25zIHZvc1xcbiAgICAgICAgICAgIGRvbm7DqWVzIHF14oCZYXZlYyBkZXMgcGFydGVuYWlyZXMgcXVpIHByw6lzZW50ZW50IGRlcyBnYXJhbnRpZXNcXG4gICAgICAgICAgICBzdWZmaXNhbnRlcyBxdWFudCDDoCBsYSBtaXNlIGVuIMWTdXZyZSBkZSBtZXN1cmVzIHRlY2huaXF1ZXMgZXRcXG4gICAgICAgICAgICBvcmdhbmlzYXRpb25uZWxsZXMgYXBwcm9wcmnDqWVzIGRlIG1hbmnDqHJlIMOgIGdhcmFudGlyIGxhXFxuICAgICAgICAgICAgcHJvdGVjdGlvbiBkZSB2b3MgZHJvaXRzIGV0IGRlIHZvcyBkb25uw6llcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTm91cyBwb3V2b25zIGRpdnVsZ3VlciB2b3MgZG9ubsOpZXMgw6AgZGVzIHRpZXJzIDpcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgRW4gY2FzIGRlIHZlbnRlIG91IGTigJlhY2hhdCBk4oCZdW5lIGRlIG5vcyBlbnRyZXByaXNlcyBvdVxcbiAgICAgICAgICAgICAgICAgICAgYmllbnMsIG5vdXMgcG91dm9ucyBkaXZ1bGd1ZXIgdm9zIGNvb3Jkb25uw6llcyBhdSB2ZW5kZXVyXFxuICAgICAgICAgICAgICAgICAgICBvdSBhY2hldGV1ciBwcm9zcGVjdGlmIGRlIGNlcyBlbnRyZXByaXNlcyBvdSBiaWVucyA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBTaSBub3VzIG91IHRvdXMgbm9zIGJpZW5zIHNvbnQgYWNxdWlzIHBhciB1biB0aWVycyxcXG4gICAgICAgICAgICAgICAgICAgIHRvdXRlcyBjb29yZG9ubsOpZXMgZ2FyZMOpZXMgcGFyIG5vdXMgc3VyIG5vcyBjbGllbnRzXFxuICAgICAgICAgICAgICAgICAgICBzZXJhaWVudCBhaW5zaSB0cmFuc2bDqXLDqXMgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgU2kgbm91cyBhdm9ucyBs4oCZb2JsaWdhdGlvbiBkZSBkaXZ1bGd1ZXIgb3UgZGUgcGFydGFnZXJcXG4gICAgICAgICAgICAgICAgICAgIHZvcyBjb29yZG9ubsOpZXMgYWZpbiBkZSBzZSBjb25mb3JtZXIgw6AgdG91dGUgb2JsaWdhdGlvblxcbiAgICAgICAgICAgICAgICAgICAgbMOpZ2FsZSA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBBZmluIGRlIHByb3TDqWdlciBub3MgZHJvaXRzLCBwcm9wcmnDqXTDqSBvdSBzw6ljdXJpdMOpLCBub3NcXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudHMgb3UgYXV0cmVzIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIEVuIGNhcyBk4oCZw6ljaGFuZ2UgZOKAmWluZm9ybWF0aW9ucyBhdmVjIGTigJlhdXRyZXMgc29jacOpdMOpc1xcbiAgICAgICAgICAgICAgICAgICAgZXQgb3JnYW5pc2F0aW9ucyDDoCBkZXMgZmlucyBkZSBwcm90ZWN0aW9uIGNvbnRyZSBsYVxcbiAgICAgICAgICAgICAgICAgICAgZnJhdWRlIGV0IGxhIHLDqWR1Y3Rpb24gZHUgcmlzcXVlIGRlIGNyw6lkaXQuXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcms1XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgOS4gQ2hhbmdlbWVudHMgbGnDqXMgw6Agbm90cmUgcG9saXRpcXVlIGRlIGNvbmZpZGVudGlhbGl0w6kgZGVcXG4gICAgICAgICAgICAgICAgdm90cmUgdmllIHByaXbDqWUgcmVsYXRpdmUgw6AgbGEgUGxhdGVmb3JtZSBLSVZJRFxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFRvdXQgY2hhbmdlbWVudCBxdWUgbm91cyBmYWlzb25zIMOgIG5vdHJlIFBvbGl0aXF1ZSBkZVxcbiAgICAgICAgICAgIENvbmZpZGVudGlhbGl0w6kgZGFucyBsZSBmdXR1ciBzZXJhIHBvc3TDqSBzdXIgY2V0dGUgcGFnZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazZcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjEwLiBDb250YWN0XCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFNpIHZvdXMgYXZleiBsYSBtb2luZHJlIHF1ZXN0aW9uIGNvbmNlcm5hbnQgY2V0dGUgUG9saXRpcXVlIGRlXFxuICAgICAgICAgICAgQ29uZmlkZW50aWFsaXTDqSBldCBsYSBmYcOnb24gZG9udCBub3VzIHV0aWxpc29ucyB2b3MgRG9ubsOpZXNcXG4gICAgICAgICAgICBQZXJzb25uZWxsZXMsIGNlbGxlLWNpIGVzdCBiaWVudmVudWUgZXQgZGV2cmEgw6p0cmUgYWRyZXNzw6llIMOgXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwibWFpbHRvOmNvbnRhY3RAa2l2aWQuZnJcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcImNvbnRhY3RAa2l2aWQuZnJcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIiwgYXR0cnM6IHsgaWQ6IFwicmVnaXN0ZXItZm9ybVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF92bS51c2VyVHlwZSA9PT0gXCJwYXRpZW50XCIgJiYgX3ZtLnVzZXJIYXNEb2N0b3JcbiAgICAgICAgICA/IF9jKFwiaDJcIiwgW192bS5fdihcIkluc2NyaXB0aW9uXCIpXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0udXNlclR5cGUgPT09IFwiZG9jdG9yXCJcbiAgICAgICAgICA/IF9jKFwiaDJcIiwgW192bS5fdihcIkluc2NyaXB0aW9uIHByYXRpY2llblwiKV0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnVzZXJUeXBlID09PSBcInBhdGllbnRcIiAmJiAhX3ZtLnVzZXJIYXNEb2N0b3JcbiAgICAgICAgICA/IF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBJbnNjcmlwdGlvbiArwqBQcmlzZcKgZGXCoGNvbnRhY3RcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAhX3ZtLmZvcm1Mb2FkaW5nUmVnaXN0ZXJcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJlZ2lzdGVyLWZvcm1cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5sYXN0bmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWdpc3RlckRldGFpbHMubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiTm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcImZhbWlseS1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWFmdGVyXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHlNZXNzYWdlLmxhc3RuYW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnJlZ2lzdGVyRGV0YWlscy5sYXN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJtZXNzYWdlLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVtcHR5TWVzc2FnZS5sYXN0bmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlZ2lzdGVyRGV0YWlscy5sYXN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucmVnaXN0ZXJEZXRhaWxzLCBcImxhc3RuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXJEZXRhaWxzLmxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHlNZXNzYWdlLmZpcnN0bmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWdpc3RlckRldGFpbHMuZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIlByw6lub21cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwiZ2l2ZW4tbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1hZnRlclwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5maXJzdG5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVnaXN0ZXJEZXRhaWxzLmZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJtZXNzYWdlLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVtcHR5TWVzc2FnZS5maXJzdG5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZWdpc3RlckRldGFpbHMuZmlyc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5yZWdpc3RlckRldGFpbHMsIFwiZmlyc3RuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXJEZXRhaWxzLmZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVnaXN0ZXJEZXRhaWxzLmVtYWlsKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5lbXB0eU1lc3NhZ2UuZW1haWwgJiYgIV92bS5yZWdpc3RlckRldGFpbHMuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGFuZ2VyOiBfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWFmdGVyXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsga2V5dXA6IF92bS52YWxpZGF0aW9uRW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiYgX3ZtLnJlZ2lzdGVyRGV0YWlscy5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1lcnJvciBlcnJvciBpY29uLTI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZ2lzdGVyRGV0YWlscy5lbWFpbCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uZW1wdHlNZXNzYWdlLmVtYWlsICYmICFfdm0ucmVnaXN0ZXJEZXRhaWxzLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJtZXNzYWdlLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWdpc3RlckRldGFpbHMuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHlNZXNzYWdlLmVtYWlsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWdpc3RlckRldGFpbHMuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lbXB0eU1lc3NhZ2UuZW1haWwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZWdpc3RlckRldGFpbHMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnJlZ2lzdGVyRGV0YWlscywgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyRGV0YWlscy5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyVHlwZSA9PT0gXCJwYXRpZW50XCIgJiYgX3ZtLnVzZXJIYXNEb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcIkRvY3RvclNlbGVjdEJveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHlNZXNzYWdlLmRvY3RvclNlbGVjdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVnaXN0ZXJEZXRhaWxzLmRvY3RvclNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvclNlbGVjdGVkOiBfdm0ucmVnaXN0ZXJEZXRhaWxzLmRvY3RvclNlbGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBfdm0uZ2V0RW1wdHlEb2N0b3JTZWxlY3RFcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBzZXREb2N0b3JTZWxlY3RlZDogX3ZtLnNldERvY3RvclNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyVHlwZSA9PT0gXCJwYXRpZW50XCIgJiYgIV92bS51c2VySGFzRG9jdG9yXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJWdWVQaG9uZU51bWJlcklucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxlZDogX3ZtLmNvbnRhY3RUZWwgIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvclRlbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdC1jb3VudHJ5LWNvZGVcIjogXCJGUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9ubHktY291bnRyaWVzXCI6IFtcIkZSXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLWV4YW1wbGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1jb3VudHJ5LXNlbGVjdG9yXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnlTZWxlY3RvckxhYmVsOiBcIkNvZGUgcGF5c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnlTZWxlY3RvckVycm9yOiBcIkNob2lzaXIgdW4gcGF5c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyTGFiZWw6IFwiTnVtw6lybyBkZSB0w6lsw6lwaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YW1wbGU6IFwiRXhlbXBsZSA6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2MxYjc5ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbGlkLWNvbG9yXCI6IFwiI2MxYjc5ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLWNvbG9yXCI6IFwiI2ZmNTY0YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVycm9yVGVsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb250YWN0VGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnRhY3RUZWwgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb250YWN0VGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGVtcHR5OiAhX3ZtLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5wbGFpblBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJNb3QgZGUgcGFzc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlUGFzc3dvcmQ6IF92bS5oYXNWaXNpYmxlUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWFmdGVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IF92bS5nZXRTZWN1cmVQYXNzUHJvZ3Jlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5dXA6IF92bS52YWxpZGF0aW9uUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGljay1pY29uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmhhc1Zpc2libGVQYXNzd29yZCA9ICFfdm0uaGFzVmlzaWJsZVBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc1Zpc2libGVQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWVcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWUtc2xhc2hcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHlNZXNzYWdlLnBsYWluUGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5lbXB0eU1lc3NhZ2UucGxhaW5QYXNzd29yZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFNlY3VyZVBhc3NQcm9ncmVzcyA+PSAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3QgZGUgcGFzc2Ugc8OpY3VyaXPDqVxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5yZWdpc3RlckRldGFpbHMsIFwicGxhaW5QYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmRDb25maXJtKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5lbXB0eU1lc3NhZ2UucGFzc3dvcmRDb25maXJtICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucGFzc3dvcmRDb25maXJtKSxcbiAgICAgICAgICAgICAgICAgICAgICBlbXB0eTogIV92bS5wYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIkNvbmZpcm1hdGlvbiBkdSBtb3QgZGUgcGFzc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlUGFzc3dvcmQ6IF92bS5oYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1hZnRlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJuZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBfdm0udmFsaWRhdGlvblBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2staWNvblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5oYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtID0gIV92bS5oYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc1Zpc2libGVQYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZXllXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZXllLXNsYXNoXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS52YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkQ29uZmlybSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uZW1wdHlNZXNzYWdlLnBhc3N3b3JkQ29uZmlybSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnBhc3N3b3JkQ29uZmlybSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbk1lc3NhZ2UucGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmRDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5wYXNzd29yZENvbmZpcm0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnBhc3N3b3JkQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5wYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkQ29uZmlybSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmRDb25maXJtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyVHlwZSA9PT0gXCJkb2N0b3JcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5udW1ScHBzQW1lbGkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnJlZ2lzdGVyRGV0YWlscy5udW1ScHBzQW1lbGlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiTnVtw6lybyBSUFBTIG91IEFERUxJXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1hZnRlclwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbXB0eU1lc3NhZ2UubnVtUnBwc0FtZWxpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWdpc3RlckRldGFpbHMubnVtUnBwc0FtZWxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbXB0eU1lc3NhZ2UubnVtUnBwc0FtZWxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVnaXN0ZXJEZXRhaWxzLm51bVJwcHNBbWVsaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5yZWdpc3RlckRldGFpbHMsIFwibnVtUnBwc0FtZWxpXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3RlckRldGFpbHMubnVtUnBwc0FtZWxpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyVHlwZSA9PT0gXCJwYXRpZW50XCIgJiYgIV92bS51c2VySGFzRG9jdG9yXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJjb250YWN0LWNob2ljZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhY3QtcGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2FjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFfdm0ucmVnaXN0ZXJEZXRhaWxzLmVtYWlsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICE9IG51bGwpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghX3ZtLmNvbnRhY3RUZWwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmNvbnRhY3RUZWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb250YWN0VGVsLmxlbmd0aCA8IDUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9yVGVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgSmUgc291aGFpdGUgcXVlIGwnb24gbWUgY29udGFjdGUgcGFyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1yYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCI1cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWdpc3RlckRldGFpbHMuZW1haWwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAhPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbnRhY3RDaG9pY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnRhY3RDaG9pY2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29udGFjdENob2ljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLW1haWxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFjdC1oZWxwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIihcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZ2lzdGVyRGV0YWlscy5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVnaXN0ZXJEZXRhaWxzLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZldWlsbGV6IGVudHJlciB1bmUgYWRyZXNzZSBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtcmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uY29udGFjdFRlbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5jb250YWN0VGVsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb250YWN0VGVsLmxlbmd0aCA8IDUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JUZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiBcIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29udGFjdENob2ljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29udGFjdENob2ljZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb250YWN0Q2hvaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHTDqWzDqXBob25lXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhY3QtaGVscFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIoXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb250YWN0VGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29udGFjdFRlbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFjdC1oZWxwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmV1aWxsZXogZW50cmVyIHVuIG51bS4gZGUgdMOpbC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIpXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogX3ZtLmVtcHR5TWVzc2FnZS5hY2NlcHRDRyAmJiAhX3ZtLmFjY2VwdENHXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJhY2NlcHQtQ0ctYmxvY2tcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWNjZXB0Q0cgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjY2VwdENHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY2NlcHRDRyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY2NlcHRDR1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqJ2FpIGx1IGV0IGonYWNjZXB0ZSBsZXNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZGFsQ0cgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImNvbmRpdGlvbnMgZ8OpbsOpcmFsZXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHlNZXNzYWdlLmFjY2VwdENHICYmICFfdm0uYWNjZXB0Q0dcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXB0eS1lcnJvci1tZXNzIHB0LTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZW1wdHlNZXNzYWdlLmFjY2VwdENHKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBkaXNhYmxlZDogX3ZtLmJ0bkxvYWRpbmdSZWdpc3RlciB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmJ0bkxvYWRpbmdSZWdpc3RlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRSZWdpc3RyYXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS51c2VyVHlwZSA9PT0gXCJwYXRpZW50XCIgJiYgX3ZtLnVzZXJIYXNEb2N0b3IpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyVHlwZSA9PT0gXCJkb2N0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTJ2luc2NyaXJlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlclR5cGUgPT09IFwicGF0aWVudFwiICYmICFfdm0udXNlckhhc0RvY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJDJ2VzdCBwYXJ0aSAhXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIChfdm0udXNlclR5cGUgPT09IFwicGF0aWVudFwiICYmIF92bS51c2VySGFzRG9jdG9yKSB8fFxuICAgICAgICAgICAgICBfdm0udXNlclR5cGUgPT09IFwiZG9jdG9yXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGl2aWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyLXRleHRcIiB9LCBbX3ZtLl92KFwib3VcIildKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAoX3ZtLnVzZXJUeXBlID09PSBcInBhdGllbnRcIiAmJiBfdm0udXNlckhhc0RvY3RvcikgfHxcbiAgICAgICAgICAgICAgX3ZtLnVzZXJUeXBlID09PSBcImRvY3RvclwiXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tY29udGFpbmVyIHNvY2lhbC1yZWdpc3RlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVnaXN0ZXJPYXV0aChcImZhY2Vib29rXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUydpbnNjcmlyZSBhdmVjIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhYiBmYS1mYWNlYm9vay1mXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVnaXN0ZXJPYXV0aChcImdvb2dsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUydpbnNjcmlyZSBhdmVjIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFiIGZhLWdvb2dsZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWZvcm0tYmxvY2tcIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woOSwgZnVuY3Rpb24obG9hZGluZywgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2FkaW5nIGxvYWRpbmctYmxvY2tcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2cy1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjQ1MHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RhbENHLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubW9kYWxDRyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxDR1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiQ29uZGl0aW9ucyBHw6luw6lyYWxlc1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJDR1wiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkQWNjZXB0Q0coKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSidhaSBsdSBldCBqJ2FjY2VwdGVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhY3QtaW5mb1wiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9pbWcvaWNvbnMvaW5mb3JtYXRpb24uc3ZnXCIpLFxuICAgICAgICAgIGFsdDogXCJpY29uIGluZm9ybWF0aW9uXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgVW4gZGUgbm9zIHByYXRpY2llbnMgdmEgcHJlbmRyZSBjb250YWN0IGF2ZWMgdm91c1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvdXLCoMOpbGFib3JlciBsZSB0cmFpdGVtZW50IGFwcHJvcHJpw6lcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICApXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IGF0dHJzOiB7IGlkOiBcInVzZXItaGFzLWRvY3Rvci1jaG9pY2VcIiB9IH0sIFtcbiAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJBdmV6LXZvdXPCoHVuwqBwcmF0aWNpZW4gP1wiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tY29udGFpbmVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgc2Vjb25kYXJ5OiBfdm0uJHBhcmVudC51c2VySGFzRG9jdG9yID09IHRydWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkVXNlckhhc0RvY3RvckNob2ljZShmYWxzZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIE5vbiwgamUgbidlbiBhaSBwYXNcXG4gICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgc2Vjb25kYXJ5OiBfdm0uJHBhcmVudC51c2VySGFzRG9jdG9yID09IGZhbHNlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS52YWxpZFVzZXJIYXNEb2N0b3JDaG9pY2UodHJ1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIE91aSwgaidhaSB1biBwcmF0aWNpZW5cXG4gICAgICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBhdHRyczogeyBpZDogXCJ1c2VyLXR5cGUtY2hvaWNlXCIgfSB9LCBbXG4gICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiRGl0ZXMtbm91cyBlbiBwbHVzIMOgwqBwcm9wb3PCoGRlwqB2b3VzXCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi1jb250YWluZXJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICBjbGFzczogeyBzZWNvbmRhcnk6IF92bS4kcGFyZW50LnVzZXJUeXBlID09IFwiZG9jdG9yXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkVXNlclR5cGVDaG9pY2UoXCJwYXRpZW50XCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBKZSBzdWlzIHVuIHBhcnRpY3VsaWVyXFxuICAgICAgICBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IHNlY29uZGFyeTogX3ZtLiRwYXJlbnQudXNlclR5cGUgPT0gXCJwYXRpZW50XCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkVXNlclR5cGVDaG9pY2UoXCJkb2N0b3JcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIEplIHN1aXMgdW4gcHJvZmVzc2lvbm5lbFxcbiAgICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiVnVlIiwiUmVnaXN0ZXIiLCJheGlvcyIsIlZ1ZUF4aW9zIiwidXNlIiwiVnVlc2F4IiwicmVuZGVyIiwiaCIsIiRtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=