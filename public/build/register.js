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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _register_UserTypeChoice_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/UserTypeChoice.vue */ "./assets/vue/fullpage/register/UserTypeChoice.vue");
/* harmony import */ var _register_RegisterForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/RegisterForm.vue */ "./assets/vue/fullpage/register/RegisterForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      registerType: null,
      firstStepName: 'userType',
      lastStepName: 'userIsRegistered',
      activeStep: 1,
      previousStep: 1,
      userChoice: {
        userType: {
          step: 1,
          value: null
        },
        userIsRegistered: {
          step: 2,
          value: null
        }
      }
    };
  },
  components: {
    UserTypeChoice: _register_UserTypeChoice_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    RegisterForm: _register_RegisterForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    setUserChoice: function setUserChoice(choice) {
      this.userChoice[choice.type].value = choice.value;
      this.previousStep = this.activeStep;
      if (this.activeStep == this.userChoice[this.lastStepName].step && this.userChoice[this.lastStepName].value) document.location.href = "/connexion";else this.activeStep = this.activeStep + 1;
    },
    setActiveStep: function setActiveStep(num) {
      this.activeStep = num;
    }
  },
  created: function created() {
    vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.$vs = this.$vs;
    document.body.classList.add("fuzzy-balls");
    document.body.classList.add("animated");
    document.body.classList.add("disable-scrollbar");
    var data = JSON.parse(document.getElementById("vueData").innerHTML);
    this.csrfTokenRegister = data.csrfTokenRegister;
    this.registerType = data.registerType;

    if (this.registerType === 'ffmkr') {
      this.setUserChoice({
        type: 'userType',
        value: 'doctor'
      });
    }
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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CG: _ConditionGenerale_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  props: {
    userType: String,
    csrfTokenRegister: String,
    registerType: String
  },
  data: function data() {
    return {
      registerDetails: {
        lastname: "",
        firstname: "",
        email: "",
        plainPassword: ""
      },
      validationMessage: {
        email: null,
        password: null
      },
      emptyMessage: {
        lastname: null,
        firstname: null,
        email: null,
        plainPassword: null,
        passwordConfirm: null,
        acceptCG: null
      },
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

      if (!this.validationMessage.password && !this.validationMessage.email && (!this.registerType && this.checkIfFieldsAreNotEmpty() || this.registerType === 'ffmkr' && this.checkIfFFMKRFieldsAreNotEmpty())) {
        this.btnLoadingRegister = true;
        this.formLoadingRegister = true;
        this.axios.post("/inscription", {
          _token: this.csrfTokenRegister,
          lastname: this.registerDetails.lastname,
          firstname: this.registerDetails.firstname,
          email: this.registerDetails.email.toLowerCase(),
          plainPassword: this.registerDetails.plainPassword,
          userType: this.userType,
          registerType: this.registerType
        }).then(function (response) {
          if (response.data === 'ffmkr-adhesion-not-found') {
            _this.btnLoadingRegister = false;
            _this.formLoadingRegister = false;
            _this.registerType = null;
          } else {
            _this.validUserIsRegisteredChoice(true);
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
    ucwords: function ucwords(str) {
      return str.toLowerCase().replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function (s) {
        return s.toUpperCase();
      });
    },
    registerOauth: function registerOauth(social) {
      document.location.href = "/oauth/connect/".concat(this.userType, "/").concat(social);
    },
    checkIfFieldsAreNotEmpty: function checkIfFieldsAreNotEmpty() {
      if (!this.registerDetails.lastname || !this.registerDetails.firstname || !this.registerDetails.email || !this.registerDetails.plainPassword || !this.passwordConfirm || !this.acceptCG) {
        if (!this.registerDetails.lastname) {
          this.emptyMessage.lastname = "Vous devez renseigner votre nom";
        }

        if (!this.registerDetails.firstname) {
          this.emptyMessage.firstname = "Vous devez renseigner votre prénom";
        }

        if (!this.registerDetails.email) {
          this.emptyMessage.email = "Vous devez renseigner un email";
        }

        if (!this.registerDetails.plainPassword) {
          this.emptyMessage.plainPassword = "Vous devez renseigner un mot de passe";
        }

        if (!this.passwordConfirm) {
          this.emptyMessage.passwordConfirm = "Vous devez confirmer votre mot de passe";
        }

        if (!this.acceptCG) {
          this.emptyMessage.acceptCG = "Vous devez accepter les conditions générales";
        }

        return false;
      }

      return true;
    },
    checkIfFFMKRFieldsAreNotEmpty: function checkIfFFMKRFieldsAreNotEmpty() {
      if (!this.registerDetails.plainPassword || !this.passwordConfirm) {
        if (!this.registerDetails.email) {
          this.emptyMessage.email = "Vous devez renseigner un email";
        }

        if (!this.registerDetails.plainPassword) {
          this.emptyMessage.plainPassword = "Vous devez renseigner un mot de passe";
        }

        if (!this.passwordConfirm) {
          this.emptyMessage.passwordConfirm = "Vous devez confirmer votre mot de passe";
        }

        return false;
      }

      return true;
    },
    validUserIsRegisteredChoice: function validUserIsRegisteredChoice(userIsRegistered) {
      this.$emit("userIsRegisteredChoice", {
        type: 'userIsRegistered',
        value: userIsRegistered
      });
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
      this.$emit("userTypeChoice", {
        type: 'userType',
        value: userType
      });
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
      _vm.activeStep != _vm.userChoice[_vm.firstStepName].step &&
      !this.registerType
        ? _c(
            "vs-button",
            {
              staticClass: "btn-prev",
              attrs: { circle: "", floating: "" },
              on: {
                click: function($event) {
                  _vm.previousStep != _vm.activeStep
                    ? (_vm.activeStep = _vm.previousStep)
                    : _vm.userChoice[_vm.firstStepName].step
                }
              }
            },
            [_c("i", { staticClass: "kiv-arrow-left icon-31" })]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _vm.activeStep == _vm.userChoice.userType.step
            ? _c("UserTypeChoice", {
                on: { userTypeChoice: _vm.setUserChoice }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.activeStep == _vm.userChoice.userIsRegistered.step
            ? _c("RegisterForm", {
                attrs: {
                  userType: _vm.userChoice.userType.value,
                  csrfTokenRegister: _vm.csrfTokenRegister,
                  registerType: _vm.registerType
                },
                on: { userIsRegisteredChoice: _vm.setUserChoice }
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
        _vm.userType === "patient"
          ? _c("h2", [_vm._v("Inscription")])
          : _vm._e(),
        _vm._v(" "),
        _vm.userType === "doctor"
          ? _c("h2", [
              _vm._v("Inscription praticien "),
              _vm.registerType === "ffmkr"
                ? _c("span", [_vm._v("FFMKR")])
                : _vm._e()
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.formLoadingRegister
          ? _c("div", [
              _vm.registerType === "ffmkr"
                ? _c(
                    "div",
                    { staticClass: "ffmkr-check-register-form" },
                    [
                      _c("p", [
                        _vm._v(
                          "Veuillez entrer l'email utilisé sur votre compte FFMKR"
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-input", {
                        class: {
                          error:
                            (_vm.validationMessage.email &&
                              _vm.registerDetails.email) ||
                            (_vm.emptyMessage.email &&
                              !_vm.registerDetails.email)
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
                            _vm.validationMessage.email &&
                            _vm.registerDetails.email
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
                            (_vm.emptyMessage.email &&
                              !_vm.registerDetails.email)
                              ? {
                                  key: "message-danger",
                                  fn: function() {
                                    return [
                                      _vm.validationMessage.email &&
                                      _vm.registerDetails.email
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.validationMessage.email
                                              )
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.emptyMessage.email &&
                                      !_vm.registerDetails.email
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(_vm.emptyMessage.email)
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
                          value: _vm.registerDetails.email,
                          callback: function($$v) {
                            _vm.$set(_vm.registerDetails, "email", $$v)
                          },
                          expression: "registerDetails.email"
                        }
                      }),
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
                                    : _c("i", {
                                        staticClass: "fas fa-eye-slash"
                                      })
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
                                          _vm._s(
                                            _vm.emptyMessage.plainPassword
                                          ) +
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
                                    : _c("i", {
                                        staticClass: "fas fa-eye-slash"
                                      })
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
                                              _vm._s(
                                                _vm.validationMessage.password
                                              )
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
                              _c("span", [
                                _vm._v("S'inscrire avec "),
                                _c("img", {
                                  staticClass: "logo-ffmkr",
                                  attrs: {
                                    src: "/img/logo-kivid-FFMKR-white.svg",
                                    alt: "Logo FFMKR"
                                  }
                                })
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _c(
                    "div",
                    { staticClass: "register-form" },
                    [
                      _c(
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
                                      "\n                                S'inscrire avec "
                                    ),
                                    _c("i", {
                                      staticClass: "fab fa-facebook-f"
                                    })
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
                      ),
                      _vm._v(" "),
                      _vm._m(0),
                      _vm._v(" "),
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
                            (_vm.emptyMessage.email &&
                              !_vm.registerDetails.email)
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
                            _vm.validationMessage.email &&
                            _vm.registerDetails.email
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
                            (_vm.emptyMessage.email &&
                              !_vm.registerDetails.email)
                              ? {
                                  key: "message-danger",
                                  fn: function() {
                                    return [
                                      _vm.validationMessage.email &&
                                      _vm.registerDetails.email
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.validationMessage.email
                                              )
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.emptyMessage.email &&
                                      !_vm.registerDetails.email
                                        ? _c("span", [
                                            _vm._v(
                                              _vm._s(_vm.emptyMessage.email)
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
                          value: _vm.registerDetails.email,
                          callback: function($$v) {
                            _vm.$set(_vm.registerDetails, "email", $$v)
                          },
                          expression: "registerDetails.email"
                        }
                      }),
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
                                    : _c("i", {
                                        staticClass: "fas fa-eye-slash"
                                      })
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
                                          _vm._s(
                                            _vm.emptyMessage.plainPassword
                                          ) +
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
                                    : _c("i", {
                                        staticClass: "fas fa-eye-slash"
                                      })
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
                                              _vm._s(
                                                _vm.validationMessage.password
                                              )
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
                            ? _c(
                                "div",
                                { staticClass: "empty-error-mess pt-0" },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.emptyMessage.acceptCG) +
                                      "\n                    "
                                  )
                                ]
                              )
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
                            [_c("span", [_vm._v("S'inscrire")])]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
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
    return _c("div", { staticClass: "divider" }, [
      _c("div", { staticClass: "divider-text" }, [_vm._v("ou")])
    ])
  }
]
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
            class: {
              secondary: _vm.$parent.userChoice.userType.value == "doctor"
            },
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
            class: {
              secondary: _vm.$parent.userChoice.userType.value == "patient"
            },
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-38d47d","assets_vue_services_function_js-node_modules_moment_locale_sync_recursive_"], function() { return __webpack_exec__("./assets/vue/fullpage/register.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7QUFDQUEsK0NBQUEsQ0FBUUcsaURBQVIsRUFBa0JELDhDQUFsQixHQUVBOztBQUNBO0FBQ0FGLCtDQUFBLENBQVFLLCtDQUFSO0FBRUEsSUFBSUwsMkNBQUosQ0FBUTtBQUNKTSxFQUFBQSxNQUFNLEVBQUUsZ0JBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNOLHFEQUFELENBQUw7QUFBQTtBQURMLENBQVIsRUFFR08sTUFGSCxDQUVVLE1BRlY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29CQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsd0JBRkE7QUFHQSwrQkFIQTtBQUlBLHNDQUpBO0FBS0EsbUJBTEE7QUFNQSxxQkFOQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUEsU0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFQQTtBQVlBLEdBZEE7QUFlQTtBQUNBLHdGQURBO0FBRUE7QUFGQSxHQWZBO0FBbUJBO0FBQ0EsaUJBREEseUJBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLGtIQUNBLHNDQURBLEtBR0E7QUFDQSxLQVJBO0FBU0EsaUJBVEEseUJBU0EsR0FUQSxFQVNBO0FBQ0E7QUFDQTtBQVhBLEdBbkJBO0FBZ0NBLFNBaENBLHFCQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBOUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3d0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy8wQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQTtBQUNBLG9CQURBO0FBRUEsNkJBRkE7QUFHQTtBQUhBLEdBSkE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEscUJBRkE7QUFHQSxpQkFIQTtBQUlBO0FBSkEsT0FEQTtBQU9BO0FBQ0EsbUJBREE7QUFFQTtBQUZBLE9B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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxzQkFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBb0M7QUFDcEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUNBQW1DO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdDFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTLDBCQUEwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOEJBQThCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9mdWxscGFnZS9SZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvQ29uZGl0aW9uR2VuZXJhbGUudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL1JlZ2lzdGVyRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvVXNlclR5cGVDaG9pY2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvUmVnaXN0ZXIudnVlPzU5M2UiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Db25kaXRpb25HZW5lcmFsZS52dWU/YTEwNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL1JlZ2lzdGVyRm9ybS52dWU/ZGY3ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL1VzZXJUeXBlQ2hvaWNlLnZ1ZT83M2NlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvUmVnaXN0ZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvQ29uZGl0aW9uR2VuZXJhbGUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvUmVnaXN0ZXJGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL3JlZ2lzdGVyL1VzZXJUeXBlQ2hvaWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL1JlZ2lzdGVyLnZ1ZT8yNjVhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvQ29uZGl0aW9uR2VuZXJhbGUudnVlPzEyYzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9SZWdpc3RlckZvcm0udnVlPzZjYzMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Vc2VyVHlwZUNob2ljZS52dWU/YTQxNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL1JlZ2lzdGVyLnZ1ZT82NjYyIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvQ29uZGl0aW9uR2VuZXJhbGUudnVlP2ZlNjQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9SZWdpc3RlckZvcm0udnVlPzQzODkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Vc2VyVHlwZUNob2ljZS52dWU/MjEzZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL1JlZ2lzdGVyLnZ1ZT9jMzI0Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvQ29uZGl0aW9uR2VuZXJhbGUudnVlPzEzOGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9SZWdpc3RlckZvcm0udnVlP2IzMWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Vc2VyVHlwZUNob2ljZS52dWU/ZDk3MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL1JlZ2lzdGVyLnZ1ZT84MzM1Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvQ29uZGl0aW9uR2VuZXJhbGUudnVlP2UyOGIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9SZWdpc3RlckZvcm0udnVlPzZkODAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Vc2VyVHlwZUNob2ljZS52dWU/NjgzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL1JlZ2lzdGVyLnZ1ZSdcclxuXHJcbi8vIEF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcydcclxuVnVlLnVzZShWdWVBeGlvcywgYXhpb3MpXHJcblxyXG4vLyBWdWVzYXgoVVggbGliKVxyXG5pbXBvcnQgVnVlc2F4IGZyb20gJ3Z1ZXNheCdcclxuVnVlLnVzZShWdWVzYXgpXHJcblxyXG5uZXcgVnVlKHtcclxuICAgIHJlbmRlcjogaCA9PiBoKFJlZ2lzdGVyKVxyXG59KS4kbW91bnQoJyN2dWUnKVxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZ1bGxwYWdlXCI+XHJcbiAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICB2LWlmPVwiYWN0aXZlU3RlcCAhPSB1c2VyQ2hvaWNlW2ZpcnN0U3RlcE5hbWVdLnN0ZXAgJiYgIXRoaXMucmVnaXN0ZXJUeXBlXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwicHJldmlvdXNTdGVwICE9IGFjdGl2ZVN0ZXAgPyBhY3RpdmVTdGVwID0gcHJldmlvdXNTdGVwIDogdXNlckNob2ljZVtmaXJzdFN0ZXBOYW1lXS5zdGVwXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4tcHJldlwiXHJcbiAgICAgICAgICAgIGNpcmNsZVxyXG4gICAgICAgICAgICBmbG9hdGluZ1xyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCI+PC9pPlxyXG4gICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1nL2xvZ28ta2l2aWQtZ3JhZGllbnQuc3ZnXCIgYWx0PVwiTG9nbyBLaXZpZFwiIC8+XHJcbiAgICAgICAgICAgIDxoMT5LaXZpZDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIiBtb2RlPVwib3V0LWluXCI+XHJcbiAgICAgICAgICAgIDxVc2VyVHlwZUNob2ljZVxyXG4gICAgICAgICAgICAgICAgdi1pZj1cImFjdGl2ZVN0ZXAgPT0gdXNlckNob2ljZS51c2VyVHlwZS5zdGVwXCJcclxuICAgICAgICAgICAgICAgIEB1c2VyVHlwZUNob2ljZT1cInNldFVzZXJDaG9pY2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmVnaXN0ZXJGb3JtXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiYWN0aXZlU3RlcCA9PSB1c2VyQ2hvaWNlLnVzZXJJc1JlZ2lzdGVyZWQuc3RlcFwiXHJcbiAgICAgICAgICAgICAgICA6dXNlclR5cGU9XCJ1c2VyQ2hvaWNlLnVzZXJUeXBlLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIDpjc3JmVG9rZW5SZWdpc3Rlcj1cImNzcmZUb2tlblJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgIDpyZWdpc3RlclR5cGU9XCJyZWdpc3RlclR5cGVcIlxyXG4gICAgICAgICAgICAgICAgQHVzZXJJc1JlZ2lzdGVyZWRDaG9pY2U9XCJzZXRVc2VyQ2hvaWNlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgVXNlclR5cGVDaG9pY2UgZnJvbSBcIi4vcmVnaXN0ZXIvVXNlclR5cGVDaG9pY2UudnVlXCI7XHJcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSBcIi4vcmVnaXN0ZXIvUmVnaXN0ZXJGb3JtLnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjc3JmVG9rZW5SZWdpc3RlcjogbnVsbCxcclxuICAgICAgICAgICAgcmVnaXN0ZXJUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICBmaXJzdFN0ZXBOYW1lOiAndXNlclR5cGUnLFxyXG4gICAgICAgICAgICBsYXN0U3RlcE5hbWU6ICd1c2VySXNSZWdpc3RlcmVkJyxcclxuICAgICAgICAgICAgYWN0aXZlU3RlcDogMSxcclxuICAgICAgICAgICAgcHJldmlvdXNTdGVwOiAxLFxyXG4gICAgICAgICAgICB1c2VyQ2hvaWNlOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyVHlwZSA6IHsgc3RlcDogMSwgdmFsdWU6IG51bGwgfSxcclxuICAgICAgICAgICAgICAgIHVzZXJJc1JlZ2lzdGVyZWQgOiB7IHN0ZXA6IDIsIHZhbHVlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgVXNlclR5cGVDaG9pY2UsXHJcbiAgICAgICAgUmVnaXN0ZXJGb3JtLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzZXRVc2VyQ2hvaWNlKGNob2ljZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJDaG9pY2VbY2hvaWNlLnR5cGVdLnZhbHVlID0gY2hvaWNlLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RlcCA9IHRoaXMuYWN0aXZlU3RlcDtcclxuICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVTdGVwID09IHRoaXMudXNlckNob2ljZVt0aGlzLmxhc3RTdGVwTmFtZV0uc3RlcCAmJiB0aGlzLnVzZXJDaG9pY2VbdGhpcy5sYXN0U3RlcE5hbWVdLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvY29ubmV4aW9uYDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTdGVwID0gdGhpcy5hY3RpdmVTdGVwKzE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRBY3RpdmVTdGVwKG51bSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSBudW07XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuJHZzID0gdGhpcy4kdnM7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZnV6enktYmFsbHNcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZWRcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZS1zY3JvbGxiYXJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidnVlRGF0YVwiKS5pbm5lckhUTUwpO1xyXG5cclxuICAgICAgICB0aGlzLmNzcmZUb2tlblJlZ2lzdGVyID0gZGF0YS5jc3JmVG9rZW5SZWdpc3RlcjtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyVHlwZSA9IGRhdGEucmVnaXN0ZXJUeXBlO1xyXG5cclxuICAgICAgICBpZih0aGlzLnJlZ2lzdGVyVHlwZSA9PT0gJ2ZmbWtyJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJDaG9pY2Uoe3R5cGU6ICd1c2VyVHlwZScsIHZhbHVlOiAnZG9jdG9yJ30pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0IFwiLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5jb250YWluZXIuZnVsbHBhZ2Uge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLnZzLWJ1dHRvbi5idG4tcHJldiB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb246IDAuNXMgZWFzZSAwLjJzIGZvcndhcmRzIGZhZGVFbnRlcjtcclxuICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcmVtIDAuNHJlbSAxLjRyZW0gMHJlbSByZ2JhKDI1MSwgMTM5LCAxMDQsIDAuMyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmRmYzAwO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHJlbSAwLjRyZW0gMS40cmVtIDByZW0gcmdiYSgyNTEsIDEzOSwgMTA0LCAwLjgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjbG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxOS44cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxNHJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQuM3JlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuOXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQuM3JlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItY2dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2tpdmlkXCI+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29uZGl0aW9ucyBnw6luw6lyYWxlcyBkJ3V0aWxpc2F0aW9uPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazFcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjEuIE1vZGFsaXTDqXMgZOKAmWFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazJcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dVxyXG4gICAgICAgICAgICAgICAgICAgID48c3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4xLjEgVXRpbGlzYXRldXJzIFByYXRpY2llbnMgcHJvZmVzc2lvbm5lbHM8L3N0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgID48L3VcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPGgzIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrM1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1PjxzdHJvbmc+YS4gQXV0aGVudGlmaWNhdGlvbjwvc3Ryb25nPjwvdT5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBMb3JzIGRlIGxhIHByZW1pw6hyZSB1dGlsaXNhdGlvbiBkZSBsYSBwbGF0ZWZvcm1lLCBsZSBwcmF0aWNpZW5cclxuICAgICAgICAgICAgICAgIGNvbXBsw6h0ZSB1biBmb3JtdWxhaXJlIGTigJlpbnNjcmlwdGlvbiBlbiBsaWduZSBlbiBzYWlzaXNzYW50IHVuXHJcbiAgICAgICAgICAgICAgICBlbWFpbCBldCB1biBtb3QgZGUgcGFzc2Ugb3Ugc2UgY29ubmVjdGUgdmlhIHNvbiBjb21wdGUgRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgIG91IEdvb2dsZS4gVW5lIGZvaXMgbGUgZm9ybXVsYWlyZSBlbnZvecOpLCB1biBlbWFpbCBkZSB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgICAgICBlc3QgZW52b3nDqSDDoCBs4oCZYWRyZXNzZSBlLW1haWwgc2Fpc2llIHBhciBsZSBwcmF0aWNpZW4gbOKAmWludml0YW50XHJcbiAgICAgICAgICAgICAgICDDoCB2YWxpZGVyIHNvbiBjb21wdGUgZW4gY2xpcXVhbnQgc3VyIHVuIGxpZW4gZGUgY29uZmlybWF0aW9uLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazRcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dT48c3Ryb25nPjEuMiBVdGlsaXNhdGV1cnMgbm9uLXByb2Zlc3Npb25uZWxzPC9zdHJvbmc+PC91PlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZGVzIHByZXN0YXRpb25zIHF14oCZaWwgZm91cm5pdCDDoCBzZXMgY2xpZW50cywgbGVcclxuICAgICAgICAgICAgICAgIHByYXRpY2llbiBwcm9mZXNzaW9ubmVsIGRlIGxhIHLDqcOpZHVjYXRpb24gZXQvb3UgZHUgc3BvcnQsIGxldXJcclxuICAgICAgICAgICAgICAgIGVudHJlcHJpc2UsIGxldXIgbXV0dWVsbGUgb3UgbGV1ciBzZXJ2aWNlIGRlIHNhbnTDqSBhdSB0cmF2YWlsXHJcbiAgICAgICAgICAgICAgICAoY2ktYXByw6hzIMKrIGxlIFByZXNjcmlwdGV1ciDCuykgdmFsaWRlIGxhIG1pc2UgZW4gcmVsYXRpb24gYXZlY1xyXG4gICAgICAgICAgICAgICAgbOKAmXV0aWxpc2F0ZXVyIGV0IGdhcmFudGllIHVuIGFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lLiBMZXNcclxuICAgICAgICAgICAgICAgIFV0aWxpc2F0ZXVycyBzb250IGludml0w6lzIMOgIHNlIGNvbm5lY3RlciBzdXIgbGEgUGxhdGVmb3JtZSBzb2l0XHJcbiAgICAgICAgICAgICAgICBwYXIgbGUgUHJlc2NyaXB0ZXVyLCBxdWkgYXVyYSBjb21tdW5pcXXDqSBhdSBwcsOpYWxhYmxlIMOgIEtJVklELFxyXG4gICAgICAgICAgICAgICAgbOKAmWFkcmVzc2UgZS1tYWlsIGRlIGzigJl1dGlsaXNhdGV1ciBzb2l0IHBhciBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgICAgICAgICBpbnNjcmlwdGlvbiB1dGlsaXNhdGV1ciwgcXVpIGxldXIgcGVybWV0dHJvbnQgZW5zdWl0ZSBkJ8OpdGFibGlyXHJcbiAgICAgICAgICAgICAgICB1bmUgY29ubmV4aW9uIGF2ZWMgbGUgcHJhdGljaWVuIHByb2Zlc3Npb25uZWwsIHF1aSB2YWxpZGVyYVxyXG4gICAgICAgICAgICAgICAgY2V0dGUgbWlzZSBlbiBjb250YWN0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgw4AgbGEgc3VpdGUgZGUgbOKAmWluc2NyaXB0aW9uLCB1biBlLW1haWwgZGUgY29uZmlybWF0aW9uIGVzdFxyXG4gICAgICAgICAgICAgICAgZW52b3nDqSDDoCBs4oCZVXRpbGlzYXRldXIuIEzigJlVdGlsaXNhdGV1ciBkZXZyYSBhbG9ycyBjbGlxdWVyIHN1ciB1blxyXG4gICAgICAgICAgICAgICAgbGllbiBkZSBjZXQgZS1tYWlsIHBvdXIgZMOpZmluaXIgc29uIG1vdCBkZSBwYXNzZSBwZXJzb25uZWwsXHJcbiAgICAgICAgICAgICAgICBjb21wbMOpdGVyIGV0IGNvbmZpcm1lciBzb24gY29tcHRlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGVzIFV0aWxpc2F0ZXVycyBzb250IGRlcyBwZXJzb25uZXMgcGh5c2lxdWVzLiBDaGFxdWVcclxuICAgICAgICAgICAgICAgIFV0aWxpc2F0ZXVyIGRpc3Bvc2UgZGUgc29uIHByb3ByZSBhY2PDqHMuIElsIGx1aSBlc3QgaW50ZXJkaXQgZGVcclxuICAgICAgICAgICAgICAgIHBlcm1ldHRyZSBhzIAgdW4gdGllcnMgZOKAmXV0aWxpc2VyIHNvbiBjb21wdGUgb3UgZOKAmcOpY2hhbmdlciBzb25cclxuICAgICAgICAgICAgICAgIGFjY8OocyBhdmVjIGNlbHVpIGTigJl1biBhdXRyZSB1dGlsaXNhdGV1ci5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDMgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms1XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMS4zIEluc2NyaXB0aW9uIGF2ZWMgR29vZ2xlIGV0IEZhY2Vib29rICh1dGlsaXNhdGV1cnMgZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmVzc2lvbm5lbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTm91cyB2b3VzIG9mZnJvbnMgbGEgcG9zc2liaWxpdMOpIGRlIGNyw6llciB2b3RyZSBjb21wdGUgS0lWSUQgdmlhXHJcbiAgICAgICAgICAgICAgICB2b3RyZSBjb21wdGUgRmFjZWJvb2sgb3UgR29vZ2xlLCBvdSBkZSByZWxpZXIgdm90cmUgY29tcHRlIEtJVklEXHJcbiAgICAgICAgICAgICAgICDDoCB2b3RyZSBjb21wdGUgRmFjZWJvb2sgb3UgR29vZ2xlLiBWb3VzIHNlcmV6IGVuc3VpdGUgcsOpYWNoZW1pbsOpXHJcbiAgICAgICAgICAgICAgICB2ZXJzIEZhY2Vib29rIG91IEdvb2dsZSAob8O5IHZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpIG91XHJcbiAgICAgICAgICAgICAgICBlbnJlZ2lzdHJlciB1biBjb21wdGUpIGV0IHZvdXMgcG91cnJleiBhbG9ycyBjb25zdWx0ZXIgbGEgbGlzdGVcclxuICAgICAgICAgICAgICAgIGRlcyBkb25uw6llcyBGYWNlYm9vayBvdSBHb29nbGUgdm91cyBjb25jZXJuYW50IGRvbnQgbm91cyBhdm9uc1xyXG4gICAgICAgICAgICAgICAgYmVzb2luLCDDoCBzYXZvaXIgbGVzIGluZm9ybWF0aW9ucyBkZSB2b3RyZSBwcm9maWwgcHVibGljIHRlbGxlc1xyXG4gICAgICAgICAgICAgICAgcXVlIHZvdHJlIHByw6lub20sIHZvdHJlIG5vbSwgdm90cmUgc2V4ZSBldCBs4oCZYWRyZXNzZSBlLW1haWxcclxuICAgICAgICAgICAgICAgIGFzc29jacOpZSDDoCBjZSBjb21wdGUuIENlcyBpbmZvcm1hdGlvbnMgc29udCBuw6ljZXNzYWlyZXMgcG91ciBkZXNcclxuICAgICAgICAgICAgICAgIHJhaXNvbnMgZCdpZGVudGlmaWNhdGlvbiBhZmluIGRlIGNyw6llciBwb3VyIHZvdXMgdW4gY29tcHRlIEtJVklEXHJcbiAgICAgICAgICAgICAgICBzw6ljdXJpc8OpLiBWb3RyZSBjb21wdGUgRmFjZWJvb2sgb3UgR29vZ2xlIGV0IHZvdHJlIGNvbXB0ZSBLSVZJRFxyXG4gICAgICAgICAgICAgICAgc2Vyb250IGxpw6lzIGRlIGZhw6dvbiBwZXJtYW5lbnRlIHBhciBs4oCZaW50ZXJtw6lkaWFpcmUgZGUgdm90cmVcclxuICAgICAgICAgICAgICAgIGFkcmVzc2UgZS1tYWlsLiBDZWxsZS1jaSBzZXJhIGNvbnNlcnbDqWUgc3VyIG5vcyBzZXJ2ZXVycyBldCBub3VzXHJcbiAgICAgICAgICAgICAgICBs4oCZdXRpbGlzZXJvbnMsIGxlIGNhcyDDqWNow6lhbnQsIHBvdXIgdm91cyBlbnZveWVyIGRlc1xyXG4gICAgICAgICAgICAgICAgaW5mb3JtYXRpb25zLiBOb3VzIHBvdXZvbnMgw6lnYWxlbWVudCBkw6l0ZXJtaW5lciBzaSB2b3VzIHZvdXNcclxuICAgICAgICAgICAgICAgIMOqdGVzIGNvbm5lY3TDqSBwYXIgbOKAmWludGVybcOpZGlhaXJlIGRlIEZhY2Vib29rIG91IEdvb2dsZS4gRMOocyBxdWVcclxuICAgICAgICAgICAgICAgIHZvdXMgdm91cyBjb25uZWN0ZXogw6AgRmFjZWJvb2sgb3UgR29vZ2xlLCB2b3VzIHBvdXZleiBhdXNzaSB2b3VzXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0ZXIgw6AgS0lWSUQuIE5vdXMgbmUgY29tbXVuaXF1ZXJvbnMgYXVjdW5lIGluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICB2b3VzIGNvbmNlcm5hbnQgw6AgRmFjZWJvb2sgb3Ugw6AgR29vZ2xlIHNhbnMgdm90cmUgY29uc2VudGVtZW50LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgSW1wb3J0YW50IDogTm91cyBu4oCZZW5yZWdpc3Ryb25zIGVuIGF1Y3VuZSBtYW5pw6hyZSB2b3MgZG9ubsOpZXMgZGVcclxuICAgICAgICAgICAgICAgIGNvbm5leGlvbiDDoCBGYWNlYm9vayBvdSBHb29nbGUsIGV0IG4nYXZvbnMgcGFzIGxhIHBvc3NpYmlsaXTDqSBkZVxyXG4gICAgICAgICAgICAgICAgcHVibGllciBxdW9pIHF1ZSBjZSBzb2l0IHN1ciB2b3RyZSBwcm9maWwgRmFjZWJvb2sgb3UgR29vZ2xlXHJcbiAgICAgICAgICAgICAgICBzYW5zIGF2b2lyIG9idGVudSB2b3RyZSBjb25zZW50ZW1lbnQgZXhwcsOocy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFZvdXMgcG91dmV6IHZvdXMgaW5mb3JtZXIgc3VyIGxhIGZhw6dvbiBkb250IEZhY2Vib29rIGfDqHJlIGxlc1xyXG4gICAgICAgICAgICAgICAgcGFyYW3DqHRyZXMgZGUgY29uZmlkZW50aWFsaXTDqSBlbiBjb25zdWx0YW50IGxhXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BvbGljeS5waHBcIj4gPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wb2xpY3kucGhwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHU+cG9saXRpcXVlIGRlIGNvbmZpZGVudGlhbGl0w6k8L3U+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICBldCBsZXM8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2xlZ2FsL3Rlcm1zXCI+IDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbGVnYWwvdGVybXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dT5jb25kaXRpb25zIGQndXRpbGlzYXRpb248L3U+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICBkZSBGYWNlYm9vayA7IHZvdXMgeSB0cm91dmVyZXogw6lnYWxlbWVudCBsZXMgY29uZGl0aW9ucyBxdWlcclxuICAgICAgICAgICAgICAgIHMnYXBwbGlxdWVudCDDoCBsYSBwb3NzaWJpbGl0w6kgbWVudGlvbm7DqWUgcHLDqWPDqWRlbW1lbnQgZGUgc2VcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RlciBldCBkZSBzJ2luc2NyaXJlIMOgIEtJVklELiBWb3VzIHBvdXZleiB2b3VzIGluZm9ybWVyXHJcbiAgICAgICAgICAgICAgICBzdXIgbGEgZmHDp29uIGRvbnQgR29vZ2xlIGfDqHJlIGxlcyBwYXJhbcOodHJlcyBkZSBjb25maWRlbnRpYWxpdMOpXHJcbiAgICAgICAgICAgICAgICBlbiBjb25zdWx0YW50IGxhXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wb2xpY2llcy5nb29nbGUuY29tL3ByaXZhY3lcIj4gPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS9wcml2YWN5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHU+cG9saXRpcXVlIGRlIGNvbmZpZGVudGlhbGl0w6k8L3U+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICBldCBsZXM8YSBocmVmPVwiaHR0cHM6Ly9wb2xpY2llcy5nb29nbGUuY29tL3Rlcm1zXCI+IDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vdGVybXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dT5jb25kaXRpb25zIGQndXRpbGlzYXRpb248L3U+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICBkZSBHb29nbGUgOyB2b3VzIHkgdHJvdXZlcmV6IMOpZ2FsZW1lbnQgbGVzIGNvbmRpdGlvbnMgcXVpXHJcbiAgICAgICAgICAgICAgICBz4oCZYXBwbGlxdWVudCDDoCBsYSBwb3NzaWJpbGl0w6kgbWVudGlvbm7DqWUgcHLDqWPDqWRlbW1lbnQgZGUgc2VcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RlciBldCBkZSBzJ2luc2NyaXJlIMOgIEtJVklEXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrNlwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Mi4gRHJvaXRzIGRlIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGEgcGxhdGVmb3JtZSBlc3QgZXhwbG9pdMOpZSBwYXIgbGEgc29jacOpdMOpIEtJVklEIChjaS1hcHLDqHMgwqtcclxuICAgICAgICAgICAgICAgIEtJVklEIMK7KS4gS0lWSUQgZXN0IGxlIHRpdHVsYWlyZSBldCBkaXNwb3NlIGRlcyBkcm9pdHMgcmVsYXRpZnNcclxuICAgICAgICAgICAgICAgIGF1eCBjb21wb3NhbnRzIGV0IGNvbnRlbnVzIGRlIGxhIFBsYXRlZm9ybWUgcHJvdMOpZ8OpcyBwYXIgZGVzXHJcbiAgICAgICAgICAgICAgICBkcm9pdHMgZGUgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUuIFRvdXRlIGJhc2UgZGUgZG9ubsOpZXMsIHRvdXRcclxuICAgICAgICAgICAgICAgIGNvbnRlbnUsIHRvdXQgY29tcG9zYW50LCB0b3V0ZSBwcsOpc2VudGF0aW9uIGV0IHRvdXQgYXV0cmVcclxuICAgICAgICAgICAgICAgIMOpbMOpbWVudCAodGV4dGVzLCBzb25zLCBncmFwaGlzbWUsIHZpc3VlbHMsIHBob3RvZ3JhcGhpZXMsXHJcbiAgICAgICAgICAgICAgICB2aWTDqW9zLCBiYXNlcyBkZSBkb25uw6llcywgZXRjLiksIG1hcnF1ZSwgbG9nbyBldCBub20gZGUgZG9tYWluZSxcclxuICAgICAgICAgICAgICAgIGFwcGFyYWlzc2FudCBzdXIgbGEgUGxhdGVmb3JtZSwgc29udCBsYSBwcm9wcmnDqXTDqSBkZSBLSVZJRCBldCBsZVxyXG4gICAgICAgICAgICAgICAgY2FzIMOpY2jDqWFudCBkZSBzZXMgcGFydGVuYWlyZXMsIGV0IGVzdCBwcm90w6lnw6kgcGFyIGxlcyBsb2lzIGVuXHJcbiAgICAgICAgICAgICAgICB2aWd1ZXVyIHN1ciBsYSBwcm9wcmnDqXTDqSBpbnRlbGxlY3R1ZWxsZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFRvdXRlIHJlcHJvZHVjdGlvbiBldCB0b3V0ZSBkaWZmdXNpb24gZGUgY2VzIMOpbMOpbWVudHMsIHNhbnNcclxuICAgICAgICAgICAgICAgIGF1dG9yaXNhdGlvbiDDqWNyaXRlIHByw6lhbGFibGUgZGUgS0lWSUQsIGV4cG9zZW50IGxlc1xyXG4gICAgICAgICAgICAgICAgY29udHJldmVuYW50cyDDoCBkZXMgcG91cnN1aXRlcyBqdWRpY2lhaXJlcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms3XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz4zLiBMaWVucyBoeXBlcnRleHRlczwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEtJVklEIG7igJlleGVyY2UgYXVjdW4gY29udHLDtGxlIHF1YW50IGF1IGNvbnRlbnUgZGVzIHNpdGVzIHRpZXJzLlxyXG4gICAgICAgICAgICAgICAgTOKAmWV4aXN0ZW5jZSBk4oCZdW4gbGllbiBoeXBlcnRleHRlIGVudHJlIGxhIFBsYXRlZm9ybWUgZXQgdW4gc2l0ZVxyXG4gICAgICAgICAgICAgICAgdGllcnMgbmUgc2lnbmlmaWUgcGFzIHF1ZSBLSVZJRCBhc3N1bWUgdW5lIHF1ZWxjb25xdWUgZ2FyYW50aWVcclxuICAgICAgICAgICAgICAgIG91IHJlc3BvbnNhYmlsaXTDqSBxdWFudCDDoCBzb24gY29udGVudSBvdSBs4oCZdXNhZ2UgcXVpIHBldXQgZW5cclxuICAgICAgICAgICAgICAgIMOqdHJlIGZhaXQuIEtJVklEIG5lIHNhdXJhaXQgw6p0cmUgcmVzcG9uc2FibGUgb3Ugc29saWRhaXJlbWVudFxyXG4gICAgICAgICAgICAgICAgdGVudSBkdSBjb250ZW51IMOpZGl0w6kgZXQvb3UgaMOpYmVyZ8OpIHN1ciB1biBzaXRlIHRpZXJzIHZlcnNcclxuICAgICAgICAgICAgICAgIGxlcXVlbCBsYSBQbGF0ZWZvcm1lIHJlZGlyaWdlIGR1IGZhaXQgZOKAmXVuIGxpZW4gaHlwZXJ0ZXh0ZSBvdVxyXG4gICAgICAgICAgICAgICAgY29udGVudSDDqWRpdMOpIGV0L291IGjDqWJlcmfDqSBzdXIgdW4gc2l0ZSB0aWVycyDDqXRhYmxpc3NhbnQgdW5cclxuICAgICAgICAgICAgICAgIGxpZW4gdmVycyBsYSBQbGF0ZWZvcm1lLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazhcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjQuIFByb3RlY3Rpb24gZGVzIERvbm7DqWVzIFBlcnNvbm5lbGxlczwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFBvdXIgdG91dGUgaW5mb3JtYXRpb24gcmVsYXRpdmUgw6AgbGEgcHJvdGVjdGlvbiBkZXMgZG9ubsOpZXNcclxuICAgICAgICAgICAgICAgIHBlcnNvbm5lbGxlcywgYXV4IGNvb2tpZXMgdXRpbGlzw6lzIHBhciBsYSBQbGF0ZWZvcm1lIGV0IGF1eFxyXG4gICAgICAgICAgICAgICAgZHJvaXRzIGRlIGzigJlVdGlsaXNhdGV1ciBxdWFudCDDoCBs4oCZdXNhZ2UgZGUgc2VzIGRvbm7DqWVzXHJcbiAgICAgICAgICAgICAgICBwZXJzb25uZWxsZXMsIGzigJlVdGlsaXNhdGV1ciBlc3QgaW52aXTDqSDDoCBzZSByw6lmw6lyZXIgw6AgbGFcclxuICAgICAgICAgICAgICAgIMKrPHN0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgID4mbmJzcDtQb2xpdGlxdWUgZGUgQ29uZmlkZW50aWFsaXTDqSBkZXMgRG9ubsOpZXNcclxuICAgICAgICAgICAgICAgICAgICBQZXJzb25uZWxsZXM8L3N0cm9uZ1xyXG4gICAgICAgICAgICAgICAgPiZuYnNwO8K7LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazlcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjUuIFJlc3BvbnNhYmlsaXTDqTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aDMgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmsxMFwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1PjxzdHJvbmc+YS4gUmVzcG9uc2FiaWxpdMOpIEtJVklEPC9zdHJvbmc+PC91PlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIExhIFBsYXRlZm9ybWUgZXQgdG91dCBkb2N1bWVudCBvdSBjb250ZW51IGFjY2Vzc2libGUgc3VyIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lIHNvbnQgZm91cm5pcyDCqyBlbiBs4oCZw6l0YXQgwrssIMKrIHRlbHMgcXVlbHMgwrssIMKrIHNpXHJcbiAgICAgICAgICAgICAgICBkaXNwb25pYmxlcyDCuy4gT3V0cmUgbGVzIGdhcmFudGllcyBsw6lnYWxlcyBhdXhxdWVsbGVzIGlsIG5lIHBldXRcclxuICAgICAgICAgICAgICAgIMOqdHJlIGTDqXJvZ8OpLCBLSVZJRCBuZSBtZXQgZW4gxZN1dnJlIGF1Y3VuZSBnYXJhbnRpZSwgZXhwcmVzc2Ugb3VcclxuICAgICAgICAgICAgICAgIGltcGxpY2l0ZSBk4oCZYXVjdW5lIHNvcnRlIG5vdGFtbWVudCBlbiB0ZXJtZXMgZOKAmWFkw6lxdWF0aW9uIGRlIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lIMOgIHVuIHVzYWdlIHBhcnRpY3VsaWVyLCBkZSBkaXNwb25pYmlsaXTDqSBkZSBsYVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZSwgZGUgY29udGludWl0w6kgZGUgbOKAmWFjY2Vzc2liaWxpdMOpIMOgIGxhIFBsYXRlZm9ybWVcclxuICAgICAgICAgICAgICAgIChjZXR0ZSBkZXJuacOocmUgcG91dmFudCBjb25uYcOudHJlIGRlcyBpbnRlcnJ1cHRpb25zIGRlIHF1ZWxxdWVcclxuICAgICAgICAgICAgICAgIGZvcm1lIGV0IGRlIHF1ZWxxdWUgZHVyw6llKSwgZGUgc8OpY3VyaXTDqSBkZSBsYSBQbGF0ZWZvcm1lLCBkdVxyXG4gICAgICAgICAgICAgICAgZmFpdCBxdWUgY2VzIGRlcm5pZXJzIHNvaWVudCBleGVtcHRzIGTigJllcnJldXJzLCBk4oCZYW5vbWFsaWVzLFxyXG4gICAgICAgICAgICAgICAgZOKAmWltcHLDqWNpc2lvbnMsIGRlIHBhbm5lcywgZGUgYnVncyBuaSBxdWUgY2V1eC1jaSBwb3Vycm9udCDDqnRyZVxyXG4gICAgICAgICAgICAgICAgY29ycmlnw6lzLiBMZXMgcHLDqXNlbnRlcyBleG9uw6lyYXRpb25zIHBvdXZhbnQgw6p0cmUgY29tcGzDqXTDqWVzIHBhclxyXG4gICAgICAgICAgICAgICAgZGVzIGRpc3Bvc2l0aW9ucyBwbHVzIHNww6ljaWZpcXVlcyBhdSBzZWluIGRlcyBwcsOpc2VudGVzXHJcbiAgICAgICAgICAgICAgICBDb25kaXRpb25zIGTigJl1dGlsaXNhdGlvbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFNhdWYgZGlzcG9zaXRpb24gbMOpZ2FsZSBjb250cmFpcmUgZXQgaW1ww6lyYXRpdmUsIGxhXHJcbiAgICAgICAgICAgICAgICByZXNwb25zYWJpbGl0w6kgS0lWSUQgcG91ciB0b3V0IGRvbW1hZ2UgZGlyZWN0ZW1lbnQgb3VcclxuICAgICAgICAgICAgICAgIGluZGlyZWN0ZW1lbnQgbGnDqSDDoCBs4oCZdXRpbGlzYXRpb24gZGUgbGEgUGxhdGVmb3JtZSBuZSBzYXVyYWl0XHJcbiAgICAgICAgICAgICAgICDDqnRyZSBlbmdhZ8OpZSBlbiByYWlzb24gZGUgZG9tbWFnZXMgZGlyZWN0cyBvdSBpbmRpcmVjdHMsXHJcbiAgICAgICAgICAgICAgICBtYXTDqXJpZWxzIG91IGltbWF0w6lyaWVscywgbm90YW1tZW50IHBlcnRlIGRlIHByb2ZpdCwgcGVydGUgZGVcclxuICAgICAgICAgICAgICAgIGNoYW5jZSwgcGVydGUgZGUgY2xpZW50w6hsZSwgcGVydGUgZGUgZG9ubsOpZXMsIHBlcnRlIGTigJlpbWFnZVxyXG4gICAgICAgICAgICAgICAgZXQvb3UgZG9tbWFnZXMgaW1tYXTDqXJpZWxzIHF1ZSB2b3VzIHN1Ymlzc2V6LiBLSVZJRCBuZSBwb3VycmFcclxuICAgICAgICAgICAgICAgIG5vdGFtbWVudCwgZW4gYXVjdW4gY2FzLCB2b2lyIHNhIHJlc3BvbnNhYmlsaXTDqSBlbmdhZ8OpZSBkYW5zIGxlXHJcbiAgICAgICAgICAgICAgICBjYXMgb8O5IHVuIFV0aWxpc2F0ZXVyIHNlIHZlcnJhaXQgYXR0cmlidWVyIHBhciBsZSBQcmVzY3JpcHRldXJcclxuICAgICAgICAgICAgICAgIHByYXRpY2llbiBkZXMgZXhlcmNpY2VzIG5vbiBhZGFwdMOpcyDDoCBzZXMgY2FwYWNpdMOpcyBwaHlzaXF1ZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTFcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLiBSZXNwb25zYWJpbGl0w6kgZGVzIHV0aWxpc2F0ZXVycyBwcmF0aWNpZW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Zlc3Npb25uZWxzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgRW4gdGFudCBxdWUgcHJvZmVzc2lvbm5lbCBkZSBsYSByw6nDqWR1Y2F0aW9uIGV0L291IGR1IHNwb3J0LFxyXG4gICAgICAgICAgICAgICAgbOKAmVV0aWxpc2F0ZXVyIHByb2Zlc3Npb25uZWwgZXN0IGVudGnDqHJlbWVudCByZXNwb25zYWJsZSBkZSB0b3V0ZVxyXG4gICAgICAgICAgICAgICAgY3LDqWF0aW9uLCB0cmFuc21pc3Npb24gb3UgcHVibGljYXRpb24gZGUgQ29udGVudSBhdSBtb3llbiBkZSBsYVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZSBldCBlbiBwYXJ0aWN1bGllciBkZSBsYSBkw6lmaW5pdGlvbiBkZXMgZXhlcmNpY2VzIGRlXHJcbiAgICAgICAgICAgICAgICByw6nDqWR1Y2F0aW9uIHByb3Bvc8OpcyBhdXggVXRpbGlzYXRldXJzIG5vbi1wcm9mZXNzaW9ubmVsIHN1ciBsYVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZSwgZW4gZm9uY3Rpb24gZGUgbGV1cnMgYmVzb2lucyBldCBkZSBsZXVycyBjYXBhY2l0w6lzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTOKAmVV0aWxpc2F0ZXVyIHByb2Zlc3Npb25uZWwgYXNzdW1lIGzigJllbnRpw6hyZSByZXNwb25zYWJpbGl0w6kgzIFcclxuICAgICAgICAgICAgICAgIHF1YW50IGF1eCBjb25zw6lxdWVuY2VzIGRpcmVjdGVzIGV0L291IGluZGlyZWN0ZXMgZGVcclxuICAgICAgICAgICAgICAgIGzigJl1dGlsaXNhdGlvbiBkZSBQbGF0ZWZvcm1lIGV0IG5vdGFtbWVudCBkZSBsYSBjcsOpYXRpb24gZGVcclxuICAgICAgICAgICAgICAgIENvbnRlbnVzLiBMZXMgZXhlbXBsZXMgZGUgQ29udGVudXMgZXQgw6l2ZW50dWVscyBjb25zZWlscyBkZVxyXG4gICAgICAgICAgICAgICAgS0lWSUQgb3UgZ8OpbsOpcsOpcyBhdXRvbWF0aXF1ZW1lbnQgcGFyIGxhIFBsYXRlZm9ybWUgZG9pdmVudCDDqnRyZVxyXG4gICAgICAgICAgICAgICAgY29uc2lkw6lyw6lzIHVuaXF1ZW1lbnQgY29tbWUgZGVzIG9waW5pb25zLCBs4oCZVXRpbGlzYXRldXJcclxuICAgICAgICAgICAgICAgIHByb2Zlc3Npb25uZWwgcmVzdGFudCBzZXVsIHJlc3BvbnNhYmxlIGRlIGxhIGNyw6lhdGlvbiBkZXNcclxuICAgICAgICAgICAgICAgIENvbnRlbnVzIMOgIGRlc3RpbmF0aW9uIGRlcyBVdGlsaXNhdGV1cnMgbm9uLXByb2Zlc3Npb25uZWxzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTOKAmVV0aWxpc2F0ZXVyIHByb2Zlc3Npb25uZWwgZXN0IHRlbnUgZGUgcHJlbmRyZSB0b3V0ZXMgbGVzXHJcbiAgICAgICAgICAgICAgICBtZXN1cmVzIGFmaW4gZGUgc+KAmWFzc3VyZXIgcXVlIGxlcyBDb250ZW51cyBjcsOpw6lzIHN1ciBsYVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZSBwb3VyIGxlcyBVdGlsaXNhdGV1cnMgbm9uLXByb2Zlc3Npb25uZWxzIHNvbnRcclxuICAgICAgICAgICAgICAgIGNvbmZvcm1lcyDDoCBs4oCZw6l0YXQgZGVzIGNvbm5haXNzYW5jZXMgZW4gbWF0acOocmUgZGUgcsOpw6lkdWNhdGlvblxyXG4gICAgICAgICAgICAgICAgcGh5c2lxdWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTJcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjYuIERpc3BvbmliaWxpdMOpIGRlIGxhIFBsYXRlZm9ybWU8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBBbG9ycyBtw6ptZSBxdWUgS0lWSUQgYSBlZmZlY3R1w6kgdG91dGVzIGxlcyBkw6ltYXJjaGVzIG7DqWNlc3NhaXJlc1xyXG4gICAgICAgICAgICAgICAgcG91ciBz4oCZYXNzdXJlciBkZSBsYSBmaWFiaWxpdMOpIGRlcyBpbmZvcm1hdGlvbnMsIHNlcnZpY2VzLFxyXG4gICAgICAgICAgICAgICAgbG9naWNpZWxzIG91IHByb2R1aXRzIGNvbnRlbnVzIHN1ciBsYSBQbGF0ZWZvcm1lLCBpbCBuZSBzYXVyYWl0XHJcbiAgICAgICAgICAgICAgICDDqnRyZSB0ZW51IHBvdXIgcmVzcG9uc2FibGUgZOKAmWVycmV1cnMsIGTigJlvbWlzc2lvbnMsIGRlIHZpcnVzIG91XHJcbiAgICAgICAgICAgICAgICBkZXMgcsOpc3VsdGF0cyBxdWkgcG91cnJhaWVudCDDqnRyZSBvYnRlbnVzIHBhciB1biBtYXV2YWlzIHVzYWdlXHJcbiAgICAgICAgICAgICAgICBkZSBjZXV4LWNpLiBLSVZJRCBu4oCZZXN0IGVuIGVmZmV0IHRlbnUgcXVlIGTigJl1bmUgc2ltcGxlXHJcbiAgICAgICAgICAgICAgICBvYmxpZ2F0aW9uIGRlIG1veWVucy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEzigJlVdGlsaXNhdGV1ciBkw6ljbGFyZSBldCBnYXJhbnRpdCBxdeKAmWlsIGNvbm5hw650IGxlc1xyXG4gICAgICAgICAgICAgICAgY2FyYWN0w6lyaXN0aXF1ZXMgZXQgbGVzIGNvbnRyYWludGVzIGTigJlJbnRlcm5ldCBldCBub3RhbW1lbnQgcXVlXHJcbiAgICAgICAgICAgICAgICBsZXMgdHJhbnNtaXNzaW9ucyBkZSBkb25uw6llcyBldCBk4oCZaW5mb3JtYXRpb25zIHN1ciBJbnRlcm5ldCBuZVxyXG4gICAgICAgICAgICAgICAgYsOpbsOpZmljaWVudCBxdWUgZOKAmXVuZSBmaWFiaWxpdMOpIHRlY2huaXF1ZSByZWxhdGl2ZSwgY2VsbGVzLWNpXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhbnQgc3VyIGRlcyByw6lzZWF1eCBow6l0w6lyb2fDqG5lcyBhdXggY2FyYWN0w6lyaXN0aXF1ZXMgZXRcclxuICAgICAgICAgICAgICAgIGNhcGFjaXTDqXMgdGVjaG5pcXVlcyBkaXZlcnNlcywgcXVpIHBlcnR1cmJlbnQgbOKAmWFjY8OocyBvdSBsZVxyXG4gICAgICAgICAgICAgICAgcmVuZGVudCBpbXBvc3NpYmxlIMOgIGNlcnRhaW5lcyBww6lyaW9kZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBLSVZJRCBz4oCZZWZmb3JjZSBkZSBtYWludGVuaXIgYWNjZXNzaWJsZSBsYSBQbGF0ZWZvcm1lIDcgam91cnNcclxuICAgICAgICAgICAgICAgIHN1ciA3IGV0IDI0IGhldXJlcyBzdXIgMjQsIG1haXMgbuKAmWVzdCB0ZW51IMOgIGF1Y3VuZSBvYmxpZ2F0aW9uXHJcbiAgICAgICAgICAgICAgICBk4oCZeSBwYXJ2ZW5pciBldCBuZSBmb3Vybml0IHBhciBjb25zw6lxdWVudCBhdWN1bmUgZ2FyYW50aWUgZGVcclxuICAgICAgICAgICAgICAgIGRpc3BvbmliaWxpdMOpIG91IGTigJlhY2Nlc3NpYmlsaXTDqSBwZXJtYW5lbnRlIG91IGRlIHBlcmZvcm1hbmNlLlxyXG4gICAgICAgICAgICAgICAgS0lWSUQgZXQvb3Ugc2VzIGZvdXJuaXNzZXVycyBwZXV0L3BldXZlbnQgw6lnYWxlbWVudCBlblxyXG4gICAgICAgICAgICAgICAgaW50ZXJyb21wcmUgbOKAmWFjY8OocyBub3RhbW1lbnQgcG91ciBkZXMgcmFpc29ucyBkZSBtYWludGVuYW5jZSBldFxyXG4gICAgICAgICAgICAgICAgZGUgbWlzZSDDoCBuaXZlYXUgZGUgbGEgUGxhdGVmb3JtZSBvdSBkZSBzb24gaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgICAgIGTigJlow6liZXJnZW1lbnQgb3UgdG91dGUgYXV0cmUgcmFpc29uIGzDqWdpdGltZSBkZSBLSVZJRC4gS0lWSURcclxuICAgICAgICAgICAgICAgIG7igJllc3QgZW4gYXVjdW4gY2FzIHJlc3BvbnNhYmxlIGRlIGNlcyBpbnRlcnJ1cHRpb25zIGV0IGRlc1xyXG4gICAgICAgICAgICAgICAgY29uc8OpcXVlbmNlcyBxdWkgcGV1dmVudCBlbiBkw6ljb3VsZXIgcG91ciBs4oCZVXRpbGlzYXRldXIgb3UgdG91c1xyXG4gICAgICAgICAgICAgICAgdGllcnMuIElsIGVzdCByYXBwZWzDqSBwYXIgYWlsbGV1cnMgcXVlIEtJVklEIHBldXQgbWV0dHJlIGZpbiBvdVxyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXIgbGVzIGNhcmFjdMOpcmlzdGlxdWVzIGRlIGxhIFBsYXRlZm9ybWUgw6AgdG91dCBtb21lbnQgZXRcclxuICAgICAgICAgICAgICAgIGNlbGEgc2FucyBwcsOpYXZpcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmsxM1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Ny4gU8OpY3VyaXTDqTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEtJVklEIHPigJllZmZvcmNlIGTigJlhc3N1cmVyIGxhIHPDqWN1cml0w6kgZGUgbGEgUGxhdGVmb3JtZVxyXG4gICAgICAgICAgICAgICAgY29uZm9ybcOpbWVudCBhdXggcsOoZ2xlcyBkZSBs4oCZYXJ0LiBM4oCZVXRpbGlzYXRldXIgZXN0IHRvdXRlZm9pc1xyXG4gICAgICAgICAgICAgICAgaW5mb3Jtw6kgZGVzIHJpc3F1ZXMgaW5ow6lyZW50cyBhdXggcsOpc2VhdXggZGUgY29tbXVuaWNhdGlvbnNcclxuICAgICAgICAgICAgICAgIMOpbGVjdHJvbmlxdWVzIGV0IG5vdGFtbWVudCBkZXMgcmlzcXVlcyBsacOpcyDDoCBs4oCZYWNoZW1pbmVtZW50IGRlXHJcbiAgICAgICAgICAgICAgICBkb25uw6llcyBzdXIgaW50ZXJuZXQuIFBsdXMgZ8OpbsOpcmFsZW1lbnQsIGlsIGluY29tYmUgw6BcclxuICAgICAgICAgICAgICAgIGzigJlVdGlsaXNhdGV1ciBkZSBkw6lwbG95ZXIgdG91dGVzIGxlcyBwcm90ZWN0aW9ucyB1c3VlbGxlc1xyXG4gICAgICAgICAgICAgICAgKHBhcmUtZmV1LCBhbnRpdmlydXMsIGV0Yy4pIGxpw6llcyDDoCBsYSBuYXZpZ2F0aW9uIGludGVybmV0LiBFblxyXG4gICAgICAgICAgICAgICAgY29uc8OpcXVlbmNlLCBLSVZJRCBuZSBmb3Vybml0IGF1Y3VuZSBnYXJhbnRpZSBlbiBsYSBtYXRpw6hyZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEVuIHRvdXRlIGh5cG90aMOoc2UsIGzigJlVdGlsaXNhdGV1ciBz4oCZYWJzdGllbnQgc3RyaWN0ZW1lbnQgZGVcclxuICAgICAgICAgICAgICAgIHRvdXRlIHRlbnRhdGl2ZSBk4oCZaW5nw6luaWVyaWUgaW52ZXJzZSBvdSBkZSBkw6ljb21waWxhdGlvbiBkZSB0b3V0XHJcbiAgICAgICAgICAgICAgICBvdSBwYXJ0aWUgZGUgbGEgUGxhdGVmb3JtZSwgZGUgdG91dGUgaW50cnVzaW9uIG91IHRlbnRhdGl2ZVxyXG4gICAgICAgICAgICAgICAgZOKAmWludHJ1c2lvbiBmcmF1ZHVsZXVzZSBhdSBzZWluIGR1IHN5c3TDqG1lIGTigJlpbmZvcm1hdGlvbnNcclxuICAgICAgICAgICAgICAgIGjDqWJlcmdlYW50IGxhIFBsYXRlZm9ybWUgYWluc2kgcXXigJlhdXggbG9naWNpZWxzIHBlcm1ldHRhbnQgc29uXHJcbiAgICAgICAgICAgICAgICBmb25jdGlvbm5lbWVudCwgZGUgdG91dCBhYnVzIGRlIGNvbmZpYW5jZSwgc291c3RyYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgc3VwcHJlc3Npb24sIGTDqXRvdXJuZW1lbnQgb3UgbW9kaWZpY2F0aW9uIG5vbiBhdXRvcmlzw6llIGRlc1xyXG4gICAgICAgICAgICAgICAgZG9ubsOpZXMgdGVjaG5pcXVlcyBkZSBsYSBQbGF0ZWZvcm1lLCBzb3VzIHBlaW5lIGRlIHBvdXJzdWl0ZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTRcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjguIE1hbnF1ZW1lbnRzIGRlIGzigJlVdGlsaXNhdGV1cjwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFRvdXQgbWFucXVlbWVudCBkZSBs4oCZVXRpbGlzYXRldXIgYXV4IHByw6lzZW50ZXMgQ29uZGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgZOKAmXV0aWxpc2F0aW9uIGVzdCBzdXNjZXB0aWJsZSBk4oCZZW50cmFpbmVyIHVuZSBzdXNwZW5zaW9uIG91IHVuZVxyXG4gICAgICAgICAgICAgICAgc3VwcHJlc3Npb24gZGUgc2VzIGFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lLCBldCBk4oCZZXhwb3NlciBsZShzKVxyXG4gICAgICAgICAgICAgICAgY29udHJldmVuYW50KHMpIMOgIGRlcyBwb3Vyc3VpdGVzIGp1ZGljaWFpcmVzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazE1XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz45LiBNb2RpZmljYXRpb24gZGVzIENvbmRpdGlvbnMgZOKAmXV0aWxpc2F0aW9uPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgVG91dCBjaGFuZ2VtZW50IHF1ZSBub3VzIGFwcG9ydGVyb25zIMOgIGzigJlhdmVuaXIgYXV4IHByw6lzZW50ZXNcclxuICAgICAgICAgICAgICAgIENvbmRpdGlvbnMgZOKAmXV0aWxpc2F0aW9uIHNlcmEgcHVibGnDqSBzdXIgY2V0dGUgcGFnZS5cclxuICAgICAgICAgICAgICAgIEwndXRpbGlzYXRldXIgcmVjb25uYcOudCBldCBhY2NlcHRlIGFwcHJvdXZlciB0YWNpdGVtZW50IHRvdXRcclxuICAgICAgICAgICAgICAgIGNoYW5nZW1lbnQgZGVzIHByw6lzZW50ZXMgQ29uZGl0aW9ucy4gS0lWSUQgaW5mb3JtZXJhXHJcbiAgICAgICAgICAgICAgICBs4oCZVXRpbGlzYXRldXIgcGFyIGVtYWlsIGR1IGNoYW5nZW1lbnQgZGVzIHByw6lzZW50ZXMgQ29uZGl0aW9ucy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmsxNlwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+MTAuIExvaSBhcHBsaWNhYmxlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgU2F1ZiBkaXNwb3NpdGlvbiBsw6lnYWxlIGNvbnRyYWlyZSBldCBpbXDDqXJhdGl2ZSwgdG91dGVcclxuICAgICAgICAgICAgICAgIGRpZmZpY3VsdMOpLCByw6ljbGFtYXRpb24gb3UgbGl0aWdlIHByb3ZlbmFudCBvdSBsacOpKGUpIGF1eFxyXG4gICAgICAgICAgICAgICAgcHLDqXNlbnRlcyBDb25kaXRpb25zIGTigJl1dGlsaXNhdGlvbiBzZXJhIHLDqWdpKGUpIHNlbG9uIGxhIGxvaVxyXG4gICAgICAgICAgICAgICAgZnJhbsOnYWlzZS4gRW4gY2FzIGRlIGxpdGlnZSwgbGVzIHRyaWJ1bmF1eCBmcmFuw6dhaXMgc2Vyb250IHNldWxzXHJcbiAgICAgICAgICAgICAgICBjb21ww6l0ZW50cy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJja2l2aWRcIj5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Db25kaXRpb25zIGfDqW7DqXJhbGVzIGRlIHZlbnRlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+MS4gT2JqZXQ8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBMZXMgcHLDqXNlbnRlcyBjb25kaXRpb25zIGfDqW7DqXJhbGVzIGRlIHZlbnRlIChjaS1hcHLDqHMgwqsgQ0dWIMK7KVxyXG4gICAgICAgICAgICAgICAgb250IHBvdXIgb2JqZXQgZGUgZMOpZmluaXIgbGVzIG1vZGFsaXTDqXMgc2Vsb24gbGVzcXVlbGxlcyBLaXZpZFxyXG4gICAgICAgICAgICAgICAgZm91cm5pdCBhdSBDbGllbnQgdW4gYWNjw6hzIMOgIHNhIFBsYXRlZm9ybWUgZGUgcHLDqXZlbnRpb24gZXQgZGVcclxuICAgICAgICAgICAgICAgIHLDqcOpZHVjYXRpb24gZGVzIGJsZXNzdXJlcyBwaHlzaXF1ZXMuIEVuIGNsaXF1YW50IHN1ciDCqyBK4oCZYWNjZXB0ZVxyXG4gICAgICAgICAgICAgICAgbGVzIHByw6lzZW50ZXMgY29uZGl0aW9ucyBnw6luw6lyYWxlcyBkZSB2ZW50ZSDCuywgbGUgQ2xpZW50XHJcbiAgICAgICAgICAgICAgICByZWNvbm5hw650IGF2b2lyIHByaXMgY29ubmFpc3NhbmNlIGRlcyBDR1YgZXQgbGVzIGFjY2VwdGUgc2Fuc1xyXG4gICAgICAgICAgICAgICAgcsOpc2VydmUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMVwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Mi4gRMOpZmluaXRpb25zPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7CqyBLaXZpZCDCuzwvc3Ryb25nPiBzaWduaWZpZSBLaXZpZCwgU0FTIGF1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcGl0YWwgZGUgMS4wMDDigqwsIGltbWF0cmljdWzDqWUgYXUgUkNTIGRlIEx5b24gTcOpdHJvcG9sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VzIGxlIG51bcOpcm8gZG9taWNpbGnDqWUgODQgUnVlIENoZXZyZXVsLCA2OTAwNyBMWU9OIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsKrIExlIGNsaWVudCDCuzwvc3Ryb25nPiBkw6lzaWduZSBsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmVzc2lvbm5lbHMgZGUgbGEgcsOpw6lkdWNhdGlvbiBvdS9ldCBkdSBzcG9ydCA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7CqyBDb250ZW51KHMpIMK7PC9zdHJvbmc+IGTDqXNpZ25lIGzigJllbnNlbWJsZSBkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgw6lsw6ltZW50cyBzb3VzIHF1ZWxxdWUgZm9ybWUgcXVlIGNlIHNvaXQsIGRpc3BvbmlibGVzIHN1clxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZSBTaXRlIGV0IG5vdGFtbWVudCBsZXMgc8OpcmllcyBk4oCZZXhlcmNpY2VzIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHLDqcOpZHVjYXRpb24gcsOpYWxpc8OpZXMgcGFyIGxlIENsaWVudCDDoCBwYXJ0aXIgZGUgbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmlibGlvdGjDqHF1ZSBkZSB2aWTDqW9zIHByb3Bvc8OpZXMgcGFyIEtpdmlkIHN1ciBsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lLiBMZSBDb250ZW51IHBldXQgw6p0cmUgZMOpZmluaSBwYXIgbGUgQ2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvdXIgY2hhY3VuIGRlcyBVdGlsaXNhdGV1cnMgZW4gZm9uY3Rpb24gZGUgc2VzIGJlc29pbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXQgZGUgc2VzIGNhcGFjaXTDqXMgO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wqsgQ29udHJhdCDCuzwvc3Ryb25nPiBkw6lzaWduZSBs4oCZZW5zZW1ibGUgZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0aXB1bGF0aW9ucyDDqW5vbmPDqWVzIGRhbnMgbGVzIHByw6lzZW50ZXMgQ29uZGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHw6luw6lyYWxlcyBkZSB2ZW50ZSAob3UgwqsgQ0dWIMK7KSwgw6l0YW50IHByw6ljaXPDqSBxdWUgbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHLDqWFtYnVsZSBldCBsZXMgYW5uZXhlcyBlbiBmb250IHBhcnRpZSBpbnTDqWdyYW50ZS4gTGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhcnRpZXMgcmVjb25uYWlzc2VudCBxdWUgbGUgQ29udHJhdCBlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3luYWxsYWdtYXRpcXVlLCBhzIAgdGl0cmUgb27DqXJldXgsIGHMgCBleMOpY3V0aW9uIHN1Y2Nlc3NpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wqsgRG9ubsOpZXMgwrs8L3N0cm9uZz4gZMOpc2lnbmUgKGkpIGxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbnMgcGVyc29ubmVsbGVzIGRlcyBDbGllbnRzIGV0IFV0aWxpc2F0ZXVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtZXR0YW50IGxldXIgaWRlbnRpZmljYXRpb24gYWluc2kgcXVlIChpaSkgbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9ucyByZWxhdGl2ZXMgw6AgbGEgbmF2aWdhdGlvbiBzdXIgbGUgU2l0ZSBldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBs4oCZYXBwbGljYXRpb24gbW9iaWxlIEtpdmlkwq4gc3VzY2VwdGlibGVzIGTigJnDqnRyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnJlZ2lzdHLDqWVzIGRhbnMgZGVzIGZpY2hpZXJzIGRpdHMgwqsgY29va2llcyDCuyBvdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRpbHMgc2ltaWxhaXJlcywgbm90YW1tZW50IGxvcnMgZGUgbGEgc291c2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGTigJl1biBhYm9ubmVtZW50LCBkZSBsYSBuYXZpZ2F0aW9uIG91IGRlIGxhIGNyw6lhdGlvbiBk4oCZdW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHRlIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsKrIElkZW50aWZpYW50cyDCuzwvc3Ryb25nPiBkw6lzaWduZSB0YW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGzigJlpZGVudGlmaWFudCBwcm9wcmUgZHUgQ2xpZW50IGV0L291IGRlIGzigJlVdGlsaXNhdGV1clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAo4oCcbG9naW7igJ0pIHF1ZSBsZSBtb3QgZGUgcGFzc2UgZGUgY29ubmV4aW9uICjigJxwYXNzd29yZOKAnSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW11bmlxdcOpcyBhdSBtb21lbnQgZGUgbOKAmWluc2NyaXB0aW9uIHN1ciBsYSBQbGF0ZWZvcm1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsKrIExvZ2ljaWVsIMK7PC9zdHJvbmc+IGTDqXNpZ25lIHRvdXQgbG9naWNpZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91cm5pIHBhciBLaXZpZCBhdSBDbGllbnQgZXQvb3UgYXV4IFV0aWxpc2F0ZXVycyBldCBlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWN1bGllciBsZXMgU29sdXRpb25zIGFzc29jacOpZXMgO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wqsgUGxhdGVmb3JtZSDCuzwvc3Ryb25nPiBkw6lzaWduZSBsZSBzZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2XMgSBwYXIgS2l2aWQsIHBlcm1ldHRhbnQgbOKAmXV0aWxpc2F0aW9uIGRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTb2x1dGlvbnMgcGFyIGxlIENsaWVudCA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7CqyBTZXJ2aWNlKHMpIMK7PC9zdHJvbmc+IGTDqXNpZ25lIGxhIHNvdXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDDoCBsYSBQbGF0ZWZvcm1lIGV0IHNlcyBmb25jdGlvbm5hbGl0w6lzIHRlbCBxdWUgZMOpZmluaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5zIGxlcyBwcsOpc2VudGVzIENHVi4gTGVzIHByZXN0YXRpb25zIGNvbXByaXNlcyBkYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlIFNlcnZpY2UgZm9ybWVudCB1biB0b3V0IGluZGl2aXNpYmxlLiBMYSBsaXN0ZSBkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc3RhdGlvbnMgY29tcG9zYW50IGxlIFNlcnZpY2UsIGF2ZWMgbGVzIG5pdmVhdXggZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZSBldCBsYSBsaXN0ZSBkZXMgZm9uY3Rpb25uYWxpdMOpcyBkZSBsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lLCBkw6ljcml2ZW50IGxlcyBxdWFsaXTDqXMgZXNzZW50aWVsbGVzIGR1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2UgcmVuZHUgcGFyIEtpdmlkIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsKrIFNpdGUgwrs8L3N0cm9uZz4gZMOpc2lnbmUgbGUgc2l0ZSBpbnRlcm5ldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPnd3dy5raXZpZC5mcjwvYT4gO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+wqsgU29sdXRpb25zIMK7PC9zdHJvbmc+IGTDqXNpZ25lIGxlcyBmb25jdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3DDqXJhdGlvbm5lbGxlcyBkZXMgc2VydmljZXMgcHJvcG9zw6llcyBlbiBtb2RlIMKrIGjDqWJlcmfDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDCuyBldCBhZGFwdMOpZXMgc3DDqWNpZmlxdWVtZW50IGHMgCBjZSBtb2RlIGRlIGZvbmN0aW9ubmVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPsKrIFV0aWxpc2F0ZXVyIMK7PC9zdHJvbmc+IGTDqXNpZ25lIGxlIGNsaWVudCBkdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGllbnQgYsOpbsOpZmljaWFudCBk4oCZdW4gYWNjw6hzIGF1eCBTZXJ2aWNlcyBhcHBsaWNhdGlmc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXIgc29uIG9yZGluYXRldXIsIHRhYmxldHRlIG91IHNtYXJ0cGhvbmUgZW4gdmVydHUgZHVcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udHJhdCBjb25jbHUgcGFyIGxlIENsaWVudCA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMlwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+My4gQ29uZGl0aW9ucyBs4oCZdXRpbGlzYXRpb24gZGUgbGEgUGxhdGVmb3JtZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmszXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+PHN0cm9uZz5hLiBJbmZvcm1hdGlvbnMgcHLDqWFsYWJsZXM8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaS4gS2l2aWQgYSBtaXMgZW4gcGxhY2UgZGVzIG1lc3VyZXMgZGUgc8OpY3VyaXNhdGlvbiBkZSBs4oCZYWNjw6hzIGHMgFxyXG4gICAgICAgICAgICAgICAgbGEgUGxhdGVmb3JtZSwgc2Vsb24gdW5lIG9ibGlnYXRpb24gZGUgbW95ZW5zLiBDZXBlbmRhbnQsIEtpdmlkXHJcbiAgICAgICAgICAgICAgICByYXBwZWxsZSBhdSBDbGllbnQgcXVlIDpcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEzigJl1dGlsaXNhdGlvbiBk4oCZSW50ZXJuZXQgcGV1dCBmYWlyZSBs4oCZb2JqZXQgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZMOpdG91cm5lbWVudHMgZOKAmWludHJ1c2lvbiBmcmF1ZHVsZXVzZSwgbWFsdmVpbGxhbnRlIG91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbiBhdXRvcmlzw6llIGRhbnMgbGUgc3lzdMOobWUgZOKAmWluZm9ybWF0aW9uIGR1IENsaWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGUgcGlyYXRhZ2UsIGTigJlhbHTDqXJhdGlvbiBvdSBk4oCZZXh0cmFjdGlvbiBub24gYXV0b3Jpc8OpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZSBkb25uw6llcywgZGUgbW9kaWZpY2F0aW9ucywgYWx0w6lyYXRpb25zIG1hbHZlaWxsYW50ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGUgcHJvZ3JhbW1lcyBvdSBmaWNoaWVycyBvdSBkZSBjb250YW1pbmF0aW9uIHBhciBkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlydXMgaW5mb3JtYXRpcXVlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhIGNvbW11bmljYXRpb24gZGUgbW90cyBkZSBwYXNzZSwgY29kZXMgY29uZmlkZW50aWVscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXQgcGx1cyBnw6luw6lyYWxlbWVudCwgZGUgdG91dGUgaW5mb3JtYXRpb24gYcyAIGNhcmFjdMOocmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vuc2libGUgZXN0IGVmZmVjdHXDqWUgcGFyIGxlIENsaWVudCBhzIAgc2VzIHJpc3F1ZXMgZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcMOpcmlscy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFBhciBjb25zw6lxdWVudCwgaWwgaW5jb21iZSBhdSBDbGllbnQgZGUgcHJlbmRyZSB0b3V0ZXMgbGVzXHJcbiAgICAgICAgICAgICAgICBtZXN1cmVzIGFwcHJvcHJpw6llcyBkZSBmYcOnb24gYcyAIHByb3TDqWdlciBzZXMgcHJvcHJlcyBkb25uw6llc1xyXG4gICAgICAgICAgICAgICAgZXQvb3UgbG9naWNpZWxzIHN0b2Nrw6lzIHN1ciBzZXMgc2VydmV1cnMgZGUgbGEgY29udGFtaW5hdGlvbiBwYXJcclxuICAgICAgICAgICAgICAgIGRlcyB2aXJ1cyBjb21tZSBkZSB0ZW50YXRpdmVzIGTigJlpbnRydXNpb24gZGFucyBzb24gc3lzdMOobWVcclxuICAgICAgICAgICAgICAgIGluZm9ybWF0aXF1ZSBwYXIgZGVzIHRpZXJzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaWkuIExlIENsaWVudCByZW5vbmNlIGTDqHMgbG9ycyBhzIAgZW5nYWdlciBsYSByZXNwb25zYWJpbGl0w6kgZGVcclxuICAgICAgICAgICAgICAgIEtpdmlkIGNvbmNlcm5hbnQgdW4gb3UgcGx1c2lldXJzIGRlcyBmYWl0cyBvdSDDqXbDqG5lbWVudHNcclxuICAgICAgICAgICAgICAgIG1lbnRpb25uw6lzIMOgIGzigJlhcnRpY2xlIDMuMS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGlpaS4gTOKAmWFjY8OocyBhdXggU29sdXRpb25zIG5lIHBldXQgc+KAmWVmZmVjdHVlciBxdeKAmWF1IHRyYXZlcnMgZHVcclxuICAgICAgICAgICAgICAgIHLDqXNlYXUgSW50ZXJuZXQgZXQgZOKAmXVuIG5hdmlnYXRldXIgd2ViIDogR29vZ2xlIENocm9tZSBzdXJcclxuICAgICAgICAgICAgICAgIGVudmlyb25uZW1lbnQgUEMgb3UgQW5kcm9pZCBldCBTYWZhcmkgc3VyIGVudmlyb25uZW1lbnQgTUFDIG91XHJcbiAgICAgICAgICAgICAgICBpT1Mgc29udCBwcsOpY29uaXPDqXMgcGFyIEtpdmlkIHBvdXIgdW5lIGV4cMOpcmllbmNlIG9wdGltYWxlIGRlIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazRcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dVxyXG4gICAgICAgICAgICAgICAgICAgID48c3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5iLiBSZXN0cmljdGlvbnMgZOKAmXV0aWxpc2F0aW9uIGRlIGxhIFBsYXRlZm9ybWU8L3N0cm9uZ1xyXG4gICAgICAgICAgICAgICAgICAgID48L3VcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBpLiBLaXZpZCBjb25jw6hkZSBhdSBDbGllbnQgdW4gZHJvaXQgcGVyc29ubmVsIGV0IG5vblxyXG4gICAgICAgICAgICAgICAgdHJhbnNmw6lyYWJsZSBk4oCZdXRpbGlzZXIgbGEgUGxhdGVmb3JtZSwgZGFucyBsZSBtb25kZSBlbnRpZXJcclxuICAgICAgICAgICAgICAgIHBlbmRhbnQgdG91dGUgbGEgZHVyw6llIGR1IENvbnRyYXQsIGRlIG1hbmnDqHJlIG5vbiBleGNsdXNpdmUuIENlXHJcbiAgICAgICAgICAgICAgICBkcm9pdCBk4oCZdXRpbGlzYXRpb24gbmUgcGV1dCBmYWlyZSBs4oCZb2JqZXQgZOKAmXVuZSBzb3VzLWxpY2VuY2UsXHJcbiAgICAgICAgICAgICAgICBk4oCZdW5lIGNlc3Npb24sIGTigJl1biB0cmFuc2ZlcnQgb3UgZOKAmXVuZSBtaXNlIGHMgCBkaXNwb3NpdGlvbiBk4oCZdW5cclxuICAgICAgICAgICAgICAgIHRpZXJzLCB5IGNvbXByaXMgYXUgc2VpbiBk4oCZdW4gbcOqbWUgw6l0YWJsaXNzZW1lbnQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+aWkuIExhIFBsYXRlZm9ybWUgcGV1dCDDqnRyZSB1dGlsaXPDqWUgOjwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAoaSkgZW4gYWNjw6hzIGRpc3RhbnQgZ3LDomNlIGHMgCBJbnRlcm5ldCwgZGFucyBsZSByZXNwZWN0IGRlc1xyXG4gICAgICAgICAgICAgICAgcsOoZ2xlcyBk4oCZaWRlbnRpZmljYXRpb24gZXQgZOKAmWFmZmVjdGF0aW9uIGRlcyBJZGVudGlmaWFudHMgZHVcclxuICAgICAgICAgICAgICAgIENsaWVudCBxdWkgc2V1bCBkw6ljaWRlIGRlcyBVdGlsaXNhdGV1cnMgcXUnaWwgYXV0b3Jpc2UgYcyAXHJcbiAgICAgICAgICAgICAgICB1dGlsaXNlciBsZSBTZXJ2aWNlIDtcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIChpaSkgcG91ciBsZSB0cmFpdGVtZW50IGRlcyBkb25uw6llcyBkZXMgVXRpbGlzYXRldXJzIHBhciBsZVxyXG4gICAgICAgICAgICAgICAgQ2xpZW50IGRhbnMgbGVzIGNvbmRpdGlvbnMgbGltaXRhdGl2ZW1lbnQgZMOpZmluaWVzIGRhbnMgbGVcclxuICAgICAgICAgICAgICAgIENvbnRyYXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBpaWkuIExhIFBsYXRlZm9ybWUgZXN0IGxhIHByb3ByacOpdMOpIGRlIEtpdmlkLCBsZSBDbGllbnRcclxuICAgICAgICAgICAgICAgIHPigJlpbnRlcmRpdCA6XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZSBjb3BpZXIgb3UgZGUgcmVwcm9kdWlyZSwgZGUgcmVwcsOpc2VudGVyLCBtb2RpZmllcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNtZXR0cmUsIHB1YmxpZXIsIGFkYXB0ZXIgdG91dCBvdSBwYXJ0aWUgZGUgbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGVmb3JtZSBwYXIgbuKAmWltcG9ydGUgcXVlbCBtb3llbiBldCBzb3VzIG7igJlpbXBvcnRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZWxsZSBmb3JtZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgROKAmXV0aWxpc2VyIGxhIFBsYXRlZm9ybWUgbm9uIGNvbmZvcm3DqW1lbnQgYXV4IHLDqGdsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZOKAmXV0aWxpc2F0aW9uIGRlIGxhIFBsYXRlZm9ybWUgO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlIHRyYWR1aXJlIG91IGRlIHRyYW5zY3JpcmUgZGFucyB0b3V0IGF1dHJlIGxhbmdhZ2Ugb3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VlLCBvdSBkZSBs4oCZYWRhcHRlciBvdSBkZSBsdWkgYWRqb2luZHJlIHRvdXQgb2JqZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uIGNvbmZvcm1lIGHMgCBzYSBzcMOpY2lmaWNhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGl2LiBUb3V0IG1hbnF1ZW1lbnQgYXV4IGRpc3Bvc2l0aW9ucyBkdSBwcsOpc2VudCBhcnRpY2xlIGVudHJhw65uZVxyXG4gICAgICAgICAgICAgICAgbGUgZHJvaXQgcG91ciBLaXZpZCBkZSBzdXNwZW5kcmUgbOKAmWFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lIGRhbnNcclxuICAgICAgICAgICAgICAgIGxlcyBjb25kaXRpb25zIGRlIGwnYXJ0aWNsZSBcIlLDiVNJTElBVElPTlwiLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazVcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dVxyXG4gICAgICAgICAgICAgICAgICAgID48c3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5jLiBDb25kaXRpb25zIGTigJlhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSBwYXIgbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgICAgICA+PC91XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaS4gTG9ycyBkZSBsYSBwcmVtacOocmUgdXRpbGlzYXRpb24gZGUgbGEgcGxhdGVmb3JtZSwgbGVcclxuICAgICAgICAgICAgICAgIHByYXRpY2llbiBjb21wbMOodGUgdW4gZm9ybXVsYWlyZSBlbiBsaWduZSBk4oCZaW5zY3JpcHRpb24gZW5cclxuICAgICAgICAgICAgICAgIHNhaXNpc3NhbnQgdW4gZW1haWwgZXQgdW4gbW90IGRlIHBhc3NlLiBVbmUgZm9pcyBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgICAgICAgICBzb3VtaXMsIHVuIGVtYWlsIGRlIHZhbGlkYXRpb24gZXN0IGVudm95w6kgw6AgbOKAmWFkcmVzc2UgZS1tYWlsXHJcbiAgICAgICAgICAgICAgICBzYWlzaWUgcGFyIGxlIHByYXRpY2llbiBs4oCZaW52aXRhbnQgw6AgdmFsaWRlciBzb24gY29tcHRlIGVuXHJcbiAgICAgICAgICAgICAgICBjbGlxdWFudCBzdXIgdW4gbGllbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms2XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZC4gQ29uZGl0aW9ucyBk4oCZb3V2ZXJ0dXJlIGRlIGRyb2l0cyBk4oCZYWNjw6hzIGF1eFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlsaXNhdGV1cnNcclxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvdT5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBpLiBMZSBDbGllbnQgZXN0IHJlc3BvbnNhYmxlIGRlIGxhIGTDqXNpZ25hdGlvbiBkZXMgVXRpbGlzYXRldXJzXHJcbiAgICAgICAgICAgICAgICBwYXJtaSBzZXMgcHJvcHJlcyBjbGllbnRzLiBBcHLDqHMgbGV1ciBhdm9pciBwcsOpc2VudMOpIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lIGV0IHNlcyBjb25kaXRpb25zIGTigJl1dGlsaXNhdGlvbnMsIGxlIENsaWVudCByZW5zZWlnbmVcclxuICAgICAgICAgICAgICAgIGxlcyBpbmZvcm1hdGlvbnMgZGVzIG5vdXZlYXV4IFV0aWxpc2F0ZXVycyBhZmluIHF1ZSBLaXZpZCBwdWlzc2VcclxuICAgICAgICAgICAgICAgIGludml0ZXIgbGVzIHV0aWxpc2F0ZXVycyDDoCBjcsOpZXIgbGV1cnMgaWRlbnRpZmlhbnRzIGRlIGNvbm5leGlvblxyXG4gICAgICAgICAgICAgICAgZXQgY29tcHRlcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGlpLiBMZXMgVXRpbGlzYXRldXJzIHNvbnQgZGVzIHBlcnNvbm5lcyBwaHlzaXF1ZXMuIENoYXF1ZVxyXG4gICAgICAgICAgICAgICAgVXRpbGlzYXRldXIgZGlzcG9zZSBkZSBzb24gcHJvcHJlIGFjY8Oocy4gSWwgbHVpIGVzdCBpbnRlcmRpdCBkZVxyXG4gICAgICAgICAgICAgICAgcGVybWV0dHJlIGHMgCB1biB0aWVycyBk4oCZdXRpbGlzZXIgc29uIGNvbXB0ZSBvdSBk4oCZw6ljaGFuZ2VyIHNvblxyXG4gICAgICAgICAgICAgICAgYWNjw6hzIGF2ZWMgY2VsdWkgZOKAmXVuIGF1dHJlIHV0aWxpc2F0ZXVyLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaWlpLiBQb3VyIGLDqW7DqWZpY2llciBkZXMgU2VydmljZXMsIGzigJl1dGlsaXNhdGV1ciBkZXZyYSBz4oCZw6p0cmVcclxuICAgICAgICAgICAgICAgIHByw6lhbGFibGVtZW50IGFjcXVpdHTDqSBkZSBsYSBSZWRldmFuY2UgZMOpZmluaWUgZGUgbOKAmWFib25uZW1lbnQgw6BcclxuICAgICAgICAgICAgICAgIEtJVklELlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazdcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjQuIFJlc3BvbnNhYmlsaXTDqTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms4XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+PHN0cm9uZz5hLiBEaXNwb3NpdGlvbnMgZ8OpbsOpcmFsZXM8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgQ2hhY3VuZSBkZXMgUGFydGllcyBhc3N1bWUgbGEgcmVzcG9uc2FiaWxpdMOpIGRlcyBjb25zw6lxdWVuY2VzXHJcbiAgICAgICAgICAgICAgICByw6lzdWx0YW50IGRlIHNlcyBmYXV0ZXMsIGVycmV1cnMgb3Ugb21pc3Npb25zLCBhaW5zaSBxdWUgZGVzXHJcbiAgICAgICAgICAgICAgICBmYXV0ZXMsIGVycmV1cnMgb3Ugb21pc3Npb25zIGRlIHNlcyBzb3VzLXRyYWl0YW50cyDDqXZlbnR1ZWxzIGV0XHJcbiAgICAgICAgICAgICAgICBjYXVzYW50IHVuIGRvbW1hZ2UgZGlyZWN0IMOgIGwnYXV0cmUgUGFydGllLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazlcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dT48c3Ryb25nPmIuIFJlc3BvbnNhYmlsaXTDqSBk4oCZS2l2aWQ8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaS4gS2l2aWQgbmUgcG91cnJhLCBlbiBhdWN1biBjYXMsIHZvaXIgc2EgcmVzcG9uc2FiaWxpdMOpIGVuZ2Fnw6llXHJcbiAgICAgICAgICAgICAgICBkdSBmYWl0IGRlIGzigJl1dGlsaXNhdGlvbiBkZSBsYSBQbGF0ZWZvcm1lIHBhciB1biBVdGlsaXNhdGV1ciBldFxyXG4gICAgICAgICAgICAgICAgbm90YW1tZW50IGRhbnMgbGUgY2FzIG/DuSB1biBVdGlsaXNhdGV1ciBzZSB2ZXJyYWl0IGF0dHJpYnVlciBwYXJcclxuICAgICAgICAgICAgICAgIGxlIENsaWVudCBkZXMgZXhlcmNpY2VzIG5vbiBhZGFwdMOpcyDDoCBzZXMgY2FwYWNpdMOpcyBwaHlzaXF1ZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBpaS4gRW4gY2FzIGRlIGZhdXRlIHByb3V2w6llIHBhciBsZSBDbGllbnQsIEtpdmlkIG5lIHNlcmEgdGVudWVcclxuICAgICAgICAgICAgICAgIHF1ZSBkZSBsYSByw6lwYXJhdGlvbiBkZXMgY29uc8OpcXVlbmNlcyBww6ljdW5pYWlyZXMgZGVzIGRvbW1hZ2VzXHJcbiAgICAgICAgICAgICAgICBkaXJlY3RzIGV0IHByw6l2aXNpYmxlcyBkdSBmYWl0IGRlIGzigJl1dGlsaXNhdGlvbiBkZSBsYVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZS4gRW4gY29uc8OpcXVlbmNlLCBLaXZpZCBuZSBwb3VycmEgZW4gYXVjdW5lXHJcbiAgICAgICAgICAgICAgICBjaXJjb25zdGFuY2UgZW5jb3VyaXIgZGUgcmVzcG9uc2FiaWxpdMOpIGF1IHRpdHJlIGRlcyBwZXJ0ZXMgb3VcclxuICAgICAgICAgICAgICAgIGRvbW1hZ2VzIGluZGlyZWN0cyBvdSBpbXByw6l2aXNpYmxlcyBkdSBDbGllbnQgb3UgZGVzIHRpZXJzLCBjZVxyXG4gICAgICAgICAgICAgICAgcXVpIGluY2x1dCBub3RhbW1lbnQgdG91dCBnYWluIG1hbnF1w6ksIHBlcnRlLCBpbmV4YWN0aXR1ZGUgb3VcclxuICAgICAgICAgICAgICAgIGNvcnJ1cHRpb24gZGUgZmljaGllcnMgb3UgZGUgZG9ubsOpZXMsIHByw6lqdWRpY2UgY29tbWVyY2lhbCxcclxuICAgICAgICAgICAgICAgIHBlcnRlIGRlIGNoaWZmcmUgZCdhZmZhaXJlcyBvdSBkZSBiw6luw6lmaWNlLCBwZXJ0ZSBkZSBjbGllbnTDqGxlLFxyXG4gICAgICAgICAgICAgICAgcGVydGUgZCd1bmUgY2hhbmNlLCBjb8O7dCBkZSBs4oCZb2J0ZW50aW9uIGTigJl1biBwcm9kdWl0LCBk4oCZdW5cclxuICAgICAgICAgICAgICAgIHNlcnZpY2Ugb3UgZGUgdGVjaG5vbG9naWUgZGUgc3Vic3RpdHV0aW9uLCBlbiByZWxhdGlvbiBvdVxyXG4gICAgICAgICAgICAgICAgcHJvdmVuYW50IGRlIGzigJlpbmV4w6ljdXRpb24gb3UgZGUgbOKAmWV4w6ljdXRpb24gZmF1dGl2ZSBkZXNcclxuICAgICAgICAgICAgICAgIHByZXN0YXRpb25zLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaWlpLiBEYW5zIHRvdXMgbGVzIGNhcywgbGUgbW9udGFudCBkZSBsYSByZXNwb25zYWJpbGl0w6kgZGUgS2l2aWRcclxuICAgICAgICAgICAgICAgIGVzdCBzdHJpY3RlbWVudCBsaW1pdMOpIGF1IHJlbWJvdXJzZW1lbnQgZHUgbW9udGFudCBkZXMgc29tbWVzXHJcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVtZW50IHBhecOpZXMgcGFyIGxlIENsaWVudCDDoCBsYSBkYXRlIGRlIHN1cnZlbmFuY2UgZHVcclxuICAgICAgICAgICAgICAgIGZhaXQgZ8OpbsOpcmF0ZXVyIGRlIHJlc3BvbnNhYmlsaXTDqS4gS2l2aWQgbmUgc2F1cmFpdCwgZW4gb3V0cmUsXHJcbiAgICAgICAgICAgICAgICDDqnRyZSB0ZW51IHJlc3BvbnNhYmxlIGRlIGxhIGRlc3RydWN0aW9uIGFjY2lkZW50ZWxsZSBkZXMgZG9ubsOpZXNcclxuICAgICAgICAgICAgICAgIHBhciBsZSBDbGllbnQgb3UgdW4gdGllcnMgYXlhbnQgYWNjw6lkw6kgYXV4IFNlcnZpY2VzIGFwcGxpY2F0aWZzXHJcbiAgICAgICAgICAgICAgICBhdSBtb3llbiBkZXMgSWRlbnRpZmlhbnRzIHJlbWlzIGF1IENsaWVudC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms5XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+PHN0cm9uZz5jLiBSZXNwb25zYWJpbGl0w6kgZHUgQ2xpZW50PC9zdHJvbmc+PC91PlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGkuIEVuIHRhbnQgcXVlIHByb2Zlc3Npb25uZWwgZGUgbGEgcsOpw6lkdWNhdGlvbiBldC9vdSBkdSBzcG9ydCxcclxuICAgICAgICAgICAgICAgIGxlIENsaWVudCBlc3QgZW50acOocmVtZW50IHJlc3BvbnNhYmxlIGRlIHRvdXRlIGNyw6lhdGlvbixcclxuICAgICAgICAgICAgICAgIHRyYW5zbWlzc2lvbiBvdSBwdWJsaWNhdGlvbiBkZSBDb250ZW51IGF1IG1veWVuIGRlIGxhIFBsYXRlZm9ybWVcclxuICAgICAgICAgICAgICAgIGV0IGVuIHBhcnRpY3VsaWVyIGRlIGxhIGTDqWZpbml0aW9uIGRlcyBleGVyY2ljZXMgZGUgcsOpw6lkdWNhdGlvblxyXG4gICAgICAgICAgICAgICAgcHJvcG9zw6lzIGF1eCBVdGlsaXNhdGV1cnMgc3VyIGxhIFBsYXRlZm9ybWUsIGVuIGZvbmN0aW9uIGRlXHJcbiAgICAgICAgICAgICAgICBsZXVycyBiZXNvaW5zIGV0IGRlIGxldXJzIGNhcGFjaXTDqXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBpaS4gTGUgQ2xpZW50IGFzc3VtZSBs4oCZZW50acOocmUgcmVzcG9uc2FiaWxpdMOpIHF1YW50IGF1eFxyXG4gICAgICAgICAgICAgICAgY29uc8OpcXVlbmNlcyBkaXJlY3RlcyBldC9vdSBpbmRpcmVjdGVzIGRlIGzigJl1dGlsaXNhdGlvbiBkZVxyXG4gICAgICAgICAgICAgICAgUGxhdGVmb3JtZSBldCBub3RhbW1lbnQgZGUgbGEgY3LDqWF0aW9uIGRlIENvbnRlbnVzLiBMZXMgZXhlbXBsZXNcclxuICAgICAgICAgICAgICAgIGRlIENvbnRlbnVzIGV0IMOpdmVudHVlbHMgY29uc2VpbHMgZGUgS2l2aWQgZG9pdmVudCDDqnRyZVxyXG4gICAgICAgICAgICAgICAgY29uc2lkw6lyw6lzIHVuaXF1ZW1lbnQgY29tbWUgZGVzIG9waW5pb25zLCBsZSBDbGllbnQgcmVzdGFudCBzZXVsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zYWJsZSBkZSBsYSBjcsOpYXRpb24gZGVzIENvbnRlbnVzIMOgIGRlc3RpbmF0aW9uIGRlc1xyXG4gICAgICAgICAgICAgICAgVXRpbGlzYXRldXJzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgaXYuIExlIENsaWVudCBlc3QgdGVudSBkZSBwcmVuZHJlIHRvdXRlcyBsZXMgbWVzdXJlcyBhZmluIGRlXHJcbiAgICAgICAgICAgICAgICBz4oCZYXNzdXJlciBxdWUgbGVzIENvbnRlbnVzIGNyw6nDqXMgc3VyIGxhIFBsYXRlZm9ybWUgcG91ciBsZXNcclxuICAgICAgICAgICAgICAgIFV0aWxpc2F0ZXVycyBzb250IGNvbmZvcm1lcyDDoCBs4oCZw6l0YXQgZGVzIGNvbm5haXNzYW5jZXMgZW5cclxuICAgICAgICAgICAgICAgIG1hdGnDqHJlIGRlIHLDqcOpZHVjYXRpb24gcGh5c2lxdWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTBcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjUuIERpc3BvbmliaWxpdMOpIGR1IFNlcnZpY2U8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBhLiBLaXZpZCBmZXJhIHRvdXQgc29uIHBvc3NpYmxlIHBvdXIgcXVlIGxhIFBsYXRlZm9ybWUgc29pdFxyXG4gICAgICAgICAgICAgICAgYWNjZXNzaWJsZSBzZWxvbiB1bmUgb2JsaWdhdGlvbiBkZSBtb3llbnMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBiLiBMZSBDbGllbnQgcmVjb25uYcOudCBxdWUgS2l2aWQgbmUgcG91cnJhIGVuIGF1Y3VuIGNhcyDDqnRyZVxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2FibGUgZGVzIMOpdmVudHVlbGxlcyBpbnRlcnJ1cHRpb25zIGRlIGZvbmN0aW9ubmVtZW50XHJcbiAgICAgICAgICAgICAgICBk4oCZSW50ZXJuZXQuIEtpdmlkIHNlIHLDqXNlcnZlIMOpZ2FsZW1lbnQgbGUgZHJvaXQgZOKAmWludGVycm9tcHJlXHJcbiAgICAgICAgICAgICAgICBs4oCZYWNjw6hzIMOgIGxhIFBsYXRlZm9ybWUgZW4gcmFpc29uIGTigJlvcMOpcmF0aW9ucyBkZSBtYWludGVuYW5jZS5cclxuICAgICAgICAgICAgICAgIERhbnMgY2UgY2FzLCBLaXZpZCBlbiBpbmZvcm1lcmEgbGUgQ2xpZW50IHBhciBjb3VycmllbCBhdSBtb2luc1xyXG4gICAgICAgICAgICAgICAgdmluZ3QtcXVhdHJlICgyNCkgaGV1cmVzIGF2YW50LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazExXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz42LiBNYWludGVuYW5jZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGEuIFRvdXRlcyBsZXMgaW50ZXJ2ZW50aW9ucyBz4oCZZWZmZWN0dWVudCBhzIAgZGlzdGFuY2UsIHNhbnNcclxuICAgICAgICAgICAgICAgIGludGVydmVudGlvbiBzdXIgc2l0ZSwgYXV4IGpvdXJzIGV0IGhldXJlcyBzdWl2YW50cyA6XHJcbiAgICAgICAgICAgICAgICBMdW5kaS1WZW5kcmVkaSBkZSA4aCDDoCAxMmggZXQgZGUgMTRoIMOgIDE3aCAoR01UKzEpLCBleGNlcHRlzIEgbGVzXHJcbiAgICAgICAgICAgICAgICBqb3VycyBmw6lyacOpcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGIuIExlIENsaWVudCBwZXV0IGZvcm11bGVyIHNlcyBxdWVzdGlvbnMgZXQgZGVtYW5kZXNcclxuICAgICAgICAgICAgICAgIGTigJlpbnRlcnZlbnRpb25zIHBhciBlbWFpbCDDoCBs4oCZYWRyZXNzZVxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGtpdmlkLmZyXCI+Y29udGFjdEBraXZpZC5mcjwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmsxMVwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Ny4gQWJvbm5lbWVudCAtIEZhY3R1cmF0aW9uIC0gUsOoZ2xlbWVudDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIExlcyBwcsOpc2VudGVzIGNvbmRpdGlvbnMgZ8OpbsOpcmFsZXMgc+KAmWFwcGxpcXVlbnQgw6AgbOKAmWVuc2VtYmxlIGRlc1xyXG4gICAgICAgICAgICAgICAgZm9ybXVsZXMgZOKAmWFib25uZW1lbnRzIHByb3Bvc8OpZXMgcGFyIEtpdmlkLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgVW5lIGNvbmZpcm1hdGlvbiBk4oCZYWJvbm5lbWVudCBzZXJhIGFkcmVzc8OpZSDDoCBs4oCZdXRpbGlzYXRldXIgcGFyXHJcbiAgICAgICAgICAgICAgICByZXRvdXIgw6AgbOKAmWFkcmVzc2UgZS1tYWlsIHJlbnNlaWduw6llLCByZXByZW5hbnQgbGVzIGluZm9ybWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgY29udHJhY3R1ZWxsZXMsIG5vdGFtbWVudCBsZSBtb250YW50IGV4YWN0IGZhY3R1csOpIGV0IGxlc1xyXG4gICAgICAgICAgICAgICAgbW9kYWxpdMOpcyBkZSBs4oCZb2ZmcmUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBs4oCZdXRpbGlzYXRldXIgcmVjb25uYcOudCBxdWUgbGVzIGRvbm7DqWVzIGVucmVnaXN0csOpZXMgc3VyIGxlIFNpdGVcclxuICAgICAgICAgICAgICAgIGNvbnN0aXR1ZW50IGxhIHByZXV2ZSBkZSBsYSB0cmFuc2FjdGlvbiAodHlwZSBk4oCZYWJvbm5lbWVudCBldFxyXG4gICAgICAgICAgICAgICAgZGF0ZSBkZSBzb3VzY3JpcHRpb24pLCBldCBsZXMgZG9ubsOpZXMgZW5yZWdpc3Ryw6llcyBwYXIgbGVcclxuICAgICAgICAgICAgICAgIHN5c3TDqG1lIGRlIHBhaWVtZW50IGNvbnN0aXR1ZW50IGxhIHByZXV2ZSBkZSBsYSB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgZmluYW5jacOocmUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBM4oCZYWNjZXB0YXRpb24gZGVzIGNvb2tpZXMgZXN0IGluZGlzcGVuc2FibGUgcG91ciB0b3V0IGFjaGF0IG91XHJcbiAgICAgICAgICAgICAgICBhYm9ubmVtZW50IHN1ciBsZSBTaXRlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMyBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazEyXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+PHN0cm9uZz5hLiBPZmZyZXMgZOKAmWFib25uZW1lbnQ8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGVzIHByaW5jaXBhbGVzIG9mZnJlcyBzb250IGxlcyBzdWl2YW50ZXMsIMOpdGFudCBwcsOpY2lzw6kgcXVlXHJcbiAgICAgICAgICAgICAgICBLaXZpZCBzZSByw6lzZXJ2ZSBsYSBmYWN1bHTDqSwgw6AgdG91dCBtb21lbnQsIGTigJlhbcOpbmFnZXIgY2VzXHJcbiAgICAgICAgICAgICAgICBvZmZyZXMsIGFpbnNpIHF1ZSBkZSBwcm9wb3NlciBkZXMgb2ZmcmVzIHByb21vdGlvbm5lbGxlc1xyXG4gICAgICAgICAgICAgICAgcG9uY3R1ZWxsZXMgc3VyIGxlIFNpdGUgOlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHU+aS4gQWJvbm5lbWVudCBtZW5zdWVsPC91PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgVW4gYWJvbm5lbWVudCBzYW5zIGVuZ2FnZW1lbnQgZOKAmXVuZSBkdXLDqWUgZOKAmXVuIG1vaXMgw6AgY29tcHRlciBkdVxyXG4gICAgICAgICAgICAgICAgcGFpZW1lbnQgZHUgcHJpeCBldCByZWNvbmR1Y3RpYmxlIG1lbnN1ZWxsZW1lbnQuIFVuZSBmYWN0dXJlXHJcbiAgICAgICAgICAgICAgICBzZXJhIGFkcmVzc8OpZSDDoCBs4oCZdXRpbGlzYXRldXIgw6AgbOKAmW9jY2FzaW9uIGRlIGxhIHNvdXNjcmlwdGlvbiBkZVxyXG4gICAgICAgICAgICAgICAgbOKAmWFib25uZW1lbnQgbWVuc3VlbCDDoCBsYSBQbGF0ZWZvcm1lIHB1aXMgdG91cyBsZXMgbW9pcyBhdmVjXHJcbiAgICAgICAgICAgICAgICByZWNvbmR1Y3Rpb24gYXV0b21hdGlxdWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgzIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTNcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dT48c3Ryb25nPmIuIENvbmRpdGlvbnMgZGUgcGFpZW1lbnQ8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGEgVFZBIGV0IHRvdXMgYXV0cmVzIGltcMO0dHMgZXQgdGF4ZXMgYXBwbGljYWJsZXMgYXUgbW9tZW50IGRlXHJcbiAgICAgICAgICAgICAgICBsYSBmYWN0dXJhdGlvbiBzb250IMOgIGxhIGNoYXJnZSBkZSBs4oCZdXRpbGlzYXRldXIuIExlcyBmYWN0dXJlc1xyXG4gICAgICAgICAgICAgICAgc29udCBwYXlhYmxlcyBhdXByw6hzIGRlIEtpdmlkIMOgIHLDqWNlcHRpb24gb3UgY29uZm9ybcOpbWVudCBhdVxyXG4gICAgICAgICAgICAgICAgZMOpbGFpIGluZGlxdcOpIGF1IGRldmlzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGVzIHBhaWVtZW50cyBz4oCZZWZmZWN0dWVudCBwYXIgY2FydGUgYmFuY2FpcmUgc2Vsb24gbGVzXHJcbiAgICAgICAgICAgICAgICBtb2RhbGl0w6lzIHN1aXZhbnRlcyA6XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYWllbWVudCBwYXIgY2FydGUgYmFuY2FpcmUgcGFyIHNlcnZldXIgZGUgcGFpZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc8OpY3VyaXPDqSAoQ2FydGUgYmxldWUgZHUgR0lFIGJhbmNhaXJlIENhcnRlIGJsZXVlLCBWaXNhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXN0ZXJDYXJkLCBBbWVyaWNhbiBFeHByZXNzLCBFdXJvY2FyZCBldCBWaXNhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVybmF0aW9uYWxlcykuIExlIHBhaWVtZW50IGVuIGxpZ25lIHBhciBjYXJ0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5jYWlyZSBlc3QgYXNzdXLDqSBwYXIgdW5lIHNvbHV0aW9uIHPDqWN1cmlzw6llIGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyeXB0w6llIChTVFJJUEUpIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEVuIGNhcyBkZSByZXRhcmQgZGUgcGFpZW1lbnQsIEtpdmlkIHBvdXJyYSByZWZ1c2VyLCBzdXNwZW5kcmUgb3VcclxuICAgICAgICAgICAgICAgIGFubnVsZXIgbOKAmWFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lLCBzYW5zIHByw6lqdWRpY2UgZGUgdG91dGUgYXV0cmVcclxuICAgICAgICAgICAgICAgIGFjdGlvbi4gVG91dGUgc29tbWUgbm9uIHBhecOpZSDDoCBs4oCZw6ljaMOpYW5jZSBwcsOpdnVlIGRvbm5lcmEgbGlldSxcclxuICAgICAgICAgICAgICAgIHNhbnMgbWlzZSBlbiBkZW1ldXJlLCBhdSBwYWllbWVudCBk4oCZaW50w6lyw6p0cyBkZSByZXRhcmQgc+KAmcOpbGV2YW50XHJcbiAgICAgICAgICAgICAgICDDoCB0cm9pcyAoMykgZm9pcyBsZSB0YXV4IGRlIGzigJlpbnTDqXLDqnQgbMOpZ2FsIGVuIHZpZ3VldXIgYXUgam91clxyXG4gICAgICAgICAgICAgICAgZGUgbGEgZmFjdHVyYXRpb24gZXQgw6AgdW5lIGluZGVtbml0w6kgZm9yZmFpdGFpcmUgcG91ciBmcmFpcyBkZVxyXG4gICAgICAgICAgICAgICAgcmVjb3V2cmVtZW50IGRlIHF1YXJhbnRlICg0MCkgZXVyb3MgcGFyIGZhY3R1cmUgaW1wYXnDqWUuIERhbnMgbGVcclxuICAgICAgICAgICAgICAgIGNhcyBvw7kgbGVzIGZyYWlzIGRlIHJlY291dnJlbWVudCBkw6lwYXNzZXJhaWVudCBjZSBtb250YW50LCBLaXZpZFxyXG4gICAgICAgICAgICAgICAgc2UgcsOpc2VydmUgbGUgZHJvaXQgZOKAmWVuIGRlbWFuZGVyLCBzdXIganVzdGlmaWNhdGlmLCBsZVxyXG4gICAgICAgICAgICAgICAgcmVtYm91cnNlbWVudCBpbnTDqWdyYWwgYXUgQ2xpZW50LiBMZXMgaW50w6lyw6p0cyBjb3VyZW50IGR1IGpvdXJcclxuICAgICAgICAgICAgICAgIGRlIGzigJnDqWNow6lhbmNlIGp1c3F14oCZYXUgcGFpZW1lbnQgZWZmZWN0aWYuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+S2l2aWQgbmUgcHJhdGlxdWUgcGFzIGzigJllc2NvbXB0ZS48L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazE0XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHU+PHN0cm9uZz5jLiBSw6l2aXNpb24gZGVzIHByaXg8L3N0cm9uZz48L3U+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgS2l2aWQgc2UgcsOpc2VydmUgbGEgcG9zc2liaWxpdMOpIGRlIG1vZGlmaWVyIGxlcyB0YXJpZnMgZW4gY291cnNcclxuICAgICAgICAgICAgICAgIGTigJlhbm7DqWUgc2Vsb24gbGVzIG1vZGFsaXTDqXMgc3VpdmFudGVzIDpcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGEuIFF1aW56ZSAoMTUpIGpvdXJzIGF2YW50IGzigJlhcHBsaWNhdGlvbiBkZXMgbm91dmVhdXggdGFyaWZzLFxyXG4gICAgICAgICAgICAgICAgbOKAmXV0aWxpc2F0ZXVyIHNlcmEgaW5mb3Jtw6kgZGUgY2VzIG1vZGlmaWNhdGlvbnM7XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBiLiBQb3VyIGNvbnRpbnVlciDDoCBhdm9pciBhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSwgbOKAmXV0aWxpc2F0ZXVyXHJcbiAgICAgICAgICAgICAgICBkZXZyYSBzcMOpY2lmaXF1ZW1lbnQgYWNjZXB0ZXIgbOKAmWFwcGxpY2F0aW9uIGRlIGNlcyBub3V2ZWF1eFxyXG4gICAgICAgICAgICAgICAgdGFyaWZzIMOgIGxhIGRhdGUgYW5uaXZlcnNhaXJlIGRlIHNvbiBhYm9ubmVtZW50IG1lbnN1ZWwgb3VcclxuICAgICAgICAgICAgICAgIGFubnVlbCBsZSBjYXMgw6ljaMOpYW50IDtcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGMuIEEgZMOpZmF1dCBk4oCZYWNjZXB0YXRpb24gZXhwcmVzc2UgZGVzIG5vdXZlYXV4IHRhcmlmcyxcclxuICAgICAgICAgICAgICAgIGzigJl1dGlsaXNhdGV1ciBuZSBwb3VycmEgcGx1cyBhdm9pciBhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSDDoFxyXG4gICAgICAgICAgICAgICAgbOKAmWlzc3VlIGRlIHNhIHDDqXJpb2RlIGTigJllbmdhZ2VtZW50LCBxdWUgY2VsbGUtY2kgc29pdCBtZW5zdWVsbGVcclxuICAgICAgICAgICAgICAgIG91IGFubnVlbGxlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazE1XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz44LiBSw6lzaWxpYXRpb248L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBEYW5zIGxlIGNhZHJlIGTigJl1biBhYm9ubmVtZW50IMOgIGR1csOpZSBsaWJyZSBhdmVjIHBhaWVtZW50XHJcbiAgICAgICAgICAgICAgICBtZW5zdWVsLCBsYSByZWNvbmR1Y3Rpb24gZGUgbOKAmWFib25uZW1lbnQgcG91ciB1bmUgZHVyw6llIMOpZ2FsZVxyXG4gICAgICAgICAgICAgICAgZXN0IHRhY2l0ZSBldCBhdXRvbWF0aXF1ZS4gTOKAmXV0aWxpc2F0ZXVyIHBldXQgdG91dGVmb2lzIMOgIHRvdXRcclxuICAgICAgICAgICAgICAgIG1vbWVudCBkZW1hbmRlciBsYSByw6lzaWxpYXRpb24gZGUgc29uIGFib25uZW1lbnQgw6AgcGFydGlyIGRlIHNvblxyXG4gICAgICAgICAgICAgICAgY29tcHRlLWNsaWVudC4gVW4gY291cnJpZWwgZGUgY29uZmlybWF0aW9uIHNlcmEgZW52b3nDqSBhdSBDbGllbnRcclxuICAgICAgICAgICAgICAgIGV0IGxhIHLDqXNpbGlhdGlvbiBwcmVuZHJhIGVmZmV0IMOgIGxhIGZpbiBkZSBsYSBww6lyaW9kZSBkZVxyXG4gICAgICAgICAgICAgICAgc291c2NyaXB0aW9uIGVuIGNvdXJzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBk4oCZdW4gYWJvbm5lbWVudCBhbm51ZWwsIGxhIHJlY29uZHVjdGlvbiBkZVxyXG4gICAgICAgICAgICAgICAgbOKAmWFib25uZW1lbnQgcG91ciB1bmUgZHVyw6llIMOpZ2FsZSBlc3QgdGFjaXRlIGV0IGF1dG9tYXRpcXVlLlxyXG4gICAgICAgICAgICAgICAgTOKAmXV0aWxpc2F0ZXVyIHBldXQgZGVtYW5kZXIgbGEgcsOpc2lsaWF0aW9uIGRlIHNvbiBhYm9ubmVtZW50IMOgXHJcbiAgICAgICAgICAgICAgICBwYXJ0aXIgZGUgc29uIGNvbXB0ZS1jbGllbnQgw6AgdG91dCBtb21lbnQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMTZcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjkuIFByb3ByacOpdMOpPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgYS4gS2l2aWQgZXN0IGV0IGRlbWV1cmUgdGl0dWxhaXJlIGRlcyBkcm9pdHMgZGUgcHJvcHJpw6l0w6lcclxuICAgICAgICAgICAgICAgIHJlbGF0aWZzIMOgIHRvdXQgw6lsw6ltZW50IGRlIGxhIFBsYXRlZm9ybWUgZXQgZGVzIENvbnRlbnVzIG1pcyDDoFxyXG4gICAgICAgICAgICAgICAgZGlzcG9zaXRpb24gZHUgQ2xpZW50IGV0IGRlIGzigJl1dGlsaXNhdGV1csKywrLCsiwgYWluc2kgcGx1c1xyXG4gICAgICAgICAgICAgICAgZ8OpbsOpcmFsZW1lbnQgcXVlIGRlIGzigJlpbmZyYXN0cnVjdHVyZSBpbmZvcm1hdGlxdWUgKGxvZ2ljaWVsbGUgZXRcclxuICAgICAgICAgICAgICAgIG1hdMOpcmllbGxlKSBtaXNlIGVuIMWTdXZyZSBvdSBkw6l2ZWxvcHDDqWUgZGFucyBsZSBjYWRyZSBkdVxyXG4gICAgICAgICAgICAgICAgQ29udHJhdC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIGIuIExlIENvbnRyYXQgbmUgY29uZsOocmUgYXUgQ2xpZW50IGF1Y3VuIGRyb2l0IGRlIHByb3ByacOpdMOpIHN1clxyXG4gICAgICAgICAgICAgICAgbGEgUGxhdGVmb3JtZS4gTGEgbWlzZSDDoCBkaXNwb3NpdGlvbiB0ZW1wb3JhaXJlIGRlIGxhIFBsYXRlZm9ybWVcclxuICAgICAgICAgICAgICAgIGRhbnMgbGVzIGNvbmRpdGlvbnMgcHLDqXZ1ZXMgYXUgQ29udHJhdCBuZSBzYXVyYWl0IMOqdHJlIGFuYWx5c8OpZVxyXG4gICAgICAgICAgICAgICAgY29tbWUgbGEgY2Vzc2lvbiBk4oCZdW4gcXVlbGNvbnF1ZSBkcm9pdCBkZSBwcm9wcmnDqXTDqVxyXG4gICAgICAgICAgICAgICAgaW50ZWxsZWN0dWVsbGUgYXUgYsOpbsOpZmljZSBkdSBDbGllbnQsIGF1IHNlbnMgZHUgQ29kZSBmcmFuw6dhaXNcclxuICAgICAgICAgICAgICAgIGRlIGxhIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgYy4gTGUgQ2xpZW50IHPigJlpbnRlcmRpdCBkZSByZXByb2R1aXJlIHRvdXQgw6lsw6ltZW50IGRlIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lLCBvdSB0b3V0ZSBkb2N1bWVudGF0aW9uIGxhIGNvbmNlcm5hbnQsIHBhciBxdWVscXVlXHJcbiAgICAgICAgICAgICAgICBtb3llbiBxdWUgY2Ugc29pdCwgc291cyBxdWVscXVlIGZvcm1lIHF1ZSBjZSBzb2l0IGV0IHN1ciBxdWVscXVlXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0IHF1ZSBjZSBzb2l0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgZC4gTGUgQ2xpZW50IGV0IHV0aWxpc2F0ZXVyIG5lIHBvdXJyb250IGPDqWRlciB0b3V0IG91IHBhcnRpZSBkZXNcclxuICAgICAgICAgICAgICAgIGRyb2l0cyBldCBvYmxpZ2F0aW9ucyByw6lzdWx0YW50IGR1IENvbnRyYXQsIHF1ZSBjZSBzb2l0IGRhbnMgbGVcclxuICAgICAgICAgICAgICAgIGNhZHJlIGQndW5lIGNlc3Npb24gdGVtcG9yYWlyZSwgZCd1bmUgc291cy1saWNlbmNlIGV0IGRlIHRvdXRcclxuICAgICAgICAgICAgICAgIGF1dHJlIGNvbnRyYXQgcHLDqXZveWFudCBsZSB0cmFuc2ZlcnQgZGVzZGl0cyBkcm9pdHMgZXRcclxuICAgICAgICAgICAgICAgIG9ibGlnYXRpb25zLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgZS4gS2l2aWQgZMOpY2xhcmUgZXQgZ2FyYW50aXQgw6p0cmUgdGl0dWxhaXJlIGRlIHRvdXMgbGVzIGRyb2l0c1xyXG4gICAgICAgICAgICAgICAgZGUgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUgcXVpIGx1aSBwZXJtZXR0ZW50IGRlIGNvbmNsdXJlIGxlXHJcbiAgICAgICAgICAgICAgICBDb250cmF0LiBLaXZpZCBkw6ljbGFyZSBldCBnYXJhbnRpdCBxdWUgbGVzIFNvbHV0aW9ucyBuZSBzb250IHBhc1xyXG4gICAgICAgICAgICAgICAgc3VzY2VwdGlibGVzIGRlIHBvcnRlciBhdHRlaW50ZSBhdXggZHJvaXRzIGRlcyB0aWVycy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcmsxN1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+MTAuIFRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIHBlcnNvbm5lbGxlczwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIExlcyBQYXJ0aWVzIHPigJllbmdhZ2VudCDDoCByZXNwZWN0ZXIgbGEgcsOpZ2xlbWVudGF0aW9uIGFwcGxpY2FibGUsXHJcbiAgICAgICAgICAgICAgICBub3RhbW1lbnQgbGUgUsOoZ2xlbWVudCBFdXJvcMOpZW4gc3VyIGxhIFByb3RlY3Rpb24gZGVzIERvbm7DqWVzLFxyXG4gICAgICAgICAgICAgICAgZGl0IMKrIFJHUEQgwrsgKG7CsDIwMTYtNjc5IHJlbGF0aWYgw6AgbGEgcHJvdGVjdGlvbiBkZXMgcGVyc29ubmVzXHJcbiAgICAgICAgICAgICAgICBwaHlzaXF1ZXMgw6AgbOKAmcOpZ2FyZCBkdSB0cmFpdGVtZW50IGRlcyBkb25uw6llcyDDoCBjYXJhY3TDqHJlXHJcbiAgICAgICAgICAgICAgICBwZXJzb25uZWwgZXQgw6AgbGEgbGlicmUgY2lyY3VsYXRpb24gZGUgY2VzIGRvbm7DqWVzKSBldCBsYSBsb2kgwqtcclxuICAgICAgICAgICAgICAgIEluZm9ybWF0aXF1ZSBldCBsaWJlcnTDqXMgwrsgKGxvaSBuwrA3OC0xNyBkdSA2IGphbnZpZXIgMTk3OFxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmUgw6AgbOKAmWluZm9ybWF0aXF1ZSwgYXV4IGZpY2hpZXJzIGV0IGF1eCBsaWJlcnTDqXNcclxuICAgICAgICAgICAgICAgIG1vZGlmacOpZSkgZGFucyBsZSBjYWRyZSBkdSBDb250cmF0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgYS4gVHJhaXRlbWVudHMgbWlzIGVuIMWTdXZyZSBwYXIgbGUgQ2xpZW50IGFnaXNzYW50IGVuXHJcbiAgICAgICAgICAgICAgICByZXNwb25zYWJsZSBkZSB0cmFpdGVtZW50XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBMZSBDbGllbnQgZXN0IHJlc3BvbnNhYmxlIGR1IHRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIGRlIHNlc1xyXG4gICAgICAgICAgICAgICAgY2xpZW50cyB1dGlsaXNhdGV1cnMgZGUgbGEgUGxhdGVmb3JtZSwgbG9yc3F1ZSBsZXMgdHJhaXRlbWVudHNcclxuICAgICAgICAgICAgICAgIHNvbnQgbWlzIGVuIMWTdXZyZSBkYW5zIGxlIGNhZHJlIGRlIHNhIHJlbGF0aW9uIGF2ZWMgbGVzXHJcbiAgICAgICAgICAgICAgICBVdGlsaXNhdGV1cnMuIERhbnMgbGUgY2FkcmUgZGUgY2VzIHRyYWl0ZW1lbnRzLCBsZSBDbGllbnRcclxuICAgICAgICAgICAgICAgIHRyYW5zbWV0dHJhIMOgIEtpdmlkIHNlcyBpbnN0cnVjdGlvbnMgZG9jdW1lbnTDqWVzLCBxdWlcclxuICAgICAgICAgICAgICAgIGluZGlxdWVyb250IGzigJlvYmpldCBldCBsYSBkdXLDqWUgZHUgdHJhaXRlbWVudCwgc2EgbmF0dXJlIGV0IHNlc1xyXG4gICAgICAgICAgICAgICAgZmluYWxpdMOpcywgbGUgdHlwZSBkZSBEb25uw6llcyBwZXJzb25uZWxsZXMgZXQgbGEgY2F0w6lnb3JpZSBkZXNcclxuICAgICAgICAgICAgICAgIHBlcnNvbm5lcyBjb25jZXJuw6llcywgYWluc2kgcXVlIHNlcyBkcm9pdHMgZXQgb2JsaWdhdGlvbnMgZW5cclxuICAgICAgICAgICAgICAgIHRhbnQgcXVlIHJlc3BvbnNhYmxlIGR1IHRyYWl0ZW1lbnQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBiLiBUcmFpdGVtZW50cyBtaXMgZW4gxZN1dnJlIHBhciBLaXZpZCBhZ2lzc2FudCBlbiByZXNwb25zYWJsZSBkZVxyXG4gICAgICAgICAgICAgICAgdHJhaXRlbWVudFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgS2l2aWQgZXN0IHJlc3BvbnNhYmxlIGR1IHRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIHBlcnNvbm5lbGxlc1xyXG4gICAgICAgICAgICAgICAgcsOpYWxpc8OpIHBvdXIgdm91cyBwZXJtZXR0cmUgZOKAmXV0aWxpc2VyIGxlcyBTZXJ2aWNlcyBzdXIgbGUgU2l0ZS5cclxuICAgICAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZGVzIHRyYWl0ZW1lbnRzIGRvbnQgS2l2aWQgZXN0IHJlc3BvbnNhYmxlIGRlXHJcbiAgICAgICAgICAgICAgICB0cmFpdGVtZW50LCBsZSBDbGllbnQgZXQgbOKAmVV0aWxpc2F0ZXVyIHBldXZlbnQgZXhlcmNlciBsZXVyXHJcbiAgICAgICAgICAgICAgICBkcm9pdCBk4oCZYWNjw6hzLCByZWN0aWZpY2F0aW9uLCBlZmZhY2VtZW50LCBsaW1pdGF0aW9uIGR1XHJcbiAgICAgICAgICAgICAgICB0cmFpdGVtZW50IGV0IG9iamVjdGlvbiBhdSB0cmFpdGVtZW50IGRlcHVpcyBsZXVyIGNvbXB0ZSBzdXIgbGVcclxuICAgICAgICAgICAgICAgIFNpdGUgb3UgZW4gc+KAmWFkcmVzc2FudCBkaXJlY3RlbWVudCDDoFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGtpdmlkLmZyXCI+Y29udGFjdEBraXZpZC5mcjwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDx1PmkuIFR5cG9sb2dpZSBkZXMgRG9ubsOpZXMgY29sbGVjdMOpZXMgcGFyIEtpdmlkPC91PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGVzIERvbm7DqWVzIGNvbGxlY3TDqWVzIHBhciBLaXZpZCBwb3VyIGxlcyBiZXNvaW5zIGRlIGxhXHJcbiAgICAgICAgICAgICAgICBQbGF0ZWZvcm1lIHNvbnQgbm90YW1tZW50IGxlcyBzdWl2YW50ZXMgOlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Ob21zLCBwcsOpbm9tcywgY2l2aWxpdMOpLCBkYXRlIGRlIG5haXNzYW5jZSA7PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRyZXNzZSBwb3N0YWxlLCBhZHJlc3NlIGUtbWFpbCwgbnVtw6lybyBkZSB0w6lsw6lwaG9uZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSWRlbnRpZmlhbnQgZXQgbW90IGRlIHBhc3NlIGNyeXB0w6kgdXRpbGlzw6lzIHBvdXIgdm91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBz4oCZaWRlbnRpZmllciBzdXIgbGEgUGxhdGVmb3JtZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXRpb25zIGNyeXB0w6llcyByZWxhdGl2ZXMgw6Agdm9zIG1veWVucyBkZSBwYWllbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobm90YW1tZW50IG51bcOpcm8gZGUgY2FydGUgYmFuY2FpcmUpIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaG9peCBlbiBtYXRpw6hyZSBkZSBwcm9zcGVjdGlvbiBjb21tZXJjaWFsZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG91dGUgYXV0cmUgaW5mb3JtYXRpb24gcXVlIHZvdXMgc291aGFpdGV6IHBvcnRlciDDoFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RyZSBjb25uYWlzc2FuY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBQYXIgbOKAmWludGVybcOpZGlhaXJlIGRlcyBjb29raWVzLCBLaXZpZCBjb2xsZWN0ZSDDqWdhbGVtZW50IGRlc1xyXG4gICAgICAgICAgICAgICAgaW5mb3JtYXRpb25zIHJlbGF0aXZlcyDDoCBsYSBjb25uZXhpb24gZXQgw6AgbGEgbmF2aWdhdGlvbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEtpdmlkIG5lIGNvbGxlY3RlIGx1aS1tw6ptZSBhdWN1bmUgZG9ubsOpZSBjb25zaWTDqXLDqWUgwqtcclxuICAgICAgICAgICAgICAgIHBhcnRpY3VsacOocmUgwrsgcGFyIGxlIFJHUEQgY29uY2VybmFudCBsZSBDbGllbnQgb3UgbOKAmVV0aWxpc2F0ZXVyXHJcbiAgICAgICAgICAgICAgICBwb3VyIGxlcyBiZXNvaW5zIGR1IGZvbmN0aW9ubmVtZW50IGRlIGxhIFBsYXRlZm9ybWUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICA8dT5paS4gRmluYWxpdMOpIGRlcyB0cmFpdGVtZW50cyBkZSBEb25uw6llcyBk4oCZS2l2aWQ8L3U+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBLaXZpZCB1dGlsaXNlIGxlcyBEb25uw6llcyByZWN1ZWlsbGllcyBwb3VyIGxlcyBmaW5hbGl0w6lzXHJcbiAgICAgICAgICAgICAgICBzdWl2YW50ZXMgOlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdGlvbiBkZSBsYSBzb3VzY3JpcHRpb24gw6AgdW4gY29udHJhdCBk4oCZYWJvbm5lbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdlc3Rpb24gZGVzIGFib25uZW1lbnRzIMOgIG5vcyBuZXdzbGV0dGVycyBldC9vdSBhbGVydGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUtbWFpbHNcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPkZhY3R1cmF0aW9uIGV0IHBhaWVtZW50czwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbm5leGlvbiBhdXRvbWF0aXF1ZSBhdXggZXNwYWNlcyByw6lzZXJ2w6lzIG91IHBlcnNvbm5lbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGUgbGEgUGxhdGVmb3JtZSwgYXUgbW95ZW4gZGVzIElkZW50aWZpYW50cyA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3LDqWF0aW9uIGTigJlvdXRpbHMgZGUgcGFydGFnZSBzdXIgbGVzIHLDqXNlYXV4IHNvY2lhdXhcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWxhdGlvbiBjbGllbnQgOiBwcmlzZSBlbiBjb21wdGUgZGUgcXVlc3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByw6ljbGFtYXRpb24sIHLDqWFsaXNhdGlvbiBk4oCZZW5xdcOqdGVzIGRlIHNhdGlzZmFjdGlvbiwg4oCmXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWlzZSBlbiBwbGFjZSBk4oCZb3DDqXJhdGlvbnMgY29tbWVyY2lhbGVzIHkgY29tcHJpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWTDqWxpc2F0aW9uIGV0IHByb3NwZWN0aW9uIGNvbW1lcmNpYWxlIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlN0YXRpc3RpcXVlcyBjb21tZXJjaWFsZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDx1PmlpaS4gRHVyw6llIGRlIGNvbnNlcnZhdGlvbjwvdT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFBvdXIgbGEgbWlzZSBlbiDFk3V2cmUgZGUgc2VzIGFjdGl2aXTDqXMsIEtpdmlkIHPigJllbmdhZ2Ugw6BcclxuICAgICAgICAgICAgICAgIGNvbnNlcnZlciBsZXMgRG9ubsOpZXMgcG91ciB1bmUgZHVyw6llIGRlIHRyb2lzICgzKSBhbnMgw6AgY29tcHRlclxyXG4gICAgICAgICAgICAgICAgZGUgbGEgY29sbGVjdGUgZGVzIGRvbm7DqWVzIG91IGR1IGRlcm5pZXIgY29udGFjdCDDqW1hbmFudCBkdVxyXG4gICAgICAgICAgICAgICAgcHJvc3BlY3QuIFRvdXRlZm9pcywgS2l2aWQgc+KAmWVuZ2FnZSDDoCBzdXBwcmltZXIgbGVzIGluZm9ybWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgZG9udCBsYSBjb25zZXJ2YXRpb24gbmUgc2VyYWl0IHBsdXMgbsOpY2Vzc2FpcmUgYXUgcmVnYXJkIGRlc1xyXG4gICAgICAgICAgICAgICAgZXhpZ2VuY2VzIGzDqWdpc2xhdGl2ZXMgZXQgcsOpZ2xlbWVudGFpcmVzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHU+aXYuIERlc3RpbmF0YWlyZXMgZGVzIERvbm7DqWVzPC91PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTOKAmWFjY8OocyBhdXggRG9ubsOpZXMgZXN0IGxpbWl0w6kgw6AgbGEgcsOpYWxpc2F0aW9uIGRlcyBmaW5hbGl0w6lzXHJcbiAgICAgICAgICAgICAgICBkZXMgdHJhaXRlbWVudHMgZMOpY3JpdCBjaS1kZXNzdXMgZXQgYXV4IHNldWxlcyBwZXJzb25uZXNcclxuICAgICAgICAgICAgICAgIGhhYmlsaXTDqWVzIHNvdW1pc2VzIMOgIHVuZSBvYmxpZ2F0aW9uIGRlIGNvbmZpZGVudGlhbGl0w6kuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8dT52LiBTw6ljdXJpdMOpIGV0IGNvbmZpZGVudGlhbGl0w6kgZGVzIERvbm7DqWVzPC91PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgS2l2aWQgc+KAmWVuZ2FnZSBhzIAgYXNzdXJlciBsYSBzw6ljdXJpdMOpIGV0IGxhIHByb3RlY3Rpb24gZGVzXHJcbiAgICAgICAgICAgICAgICBEb25uw6llcyBkdSBDbGllbnQgZXQgZGUgbOKAmVV0aWxpc2F0ZXVyIGFmaW4gbm90YW1tZW50IGQnZW1ww6pjaGVyXHJcbiAgICAgICAgICAgICAgICBxdSdlbGxlcyBuZSBzb2llbnQgZMOpZm9ybcOpZXMsIGVuZG9tbWFnw6llcyBvdSBjb21tdW5pcXXDqWVzIGHMgCBkZXNcclxuICAgICAgICAgICAgICAgIHRpZXJzIG5vbiBhdXRvcmlzw6lzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgS2l2aWQgc+KAmWVuZ2FnZSBhzIAgYXNzdXJlciwgZXQgYcyAIGZhaXJlIHJlc3BlY3RlciBs4oCZaMOpYmVyZ2V1ciBkZXNcclxuICAgICAgICAgICAgICAgIERvbm7DqWVzIGFnaXNzYW50IGVuIHNvdXMtdHJhaXRhbmNlLCBsYSBwbHVzIHN0cmljdGVcclxuICAgICAgICAgICAgICAgIGNvbmZpZGVudGlhbGl0w6kgzIFldCBsYSBwbHVzIHN0cmljdGUgc8OpY3VyaXTDqSBkYW5zIGxlIHByb2Nlc3N1cyBkZVxyXG4gICAgICAgICAgICAgICAgdHJhaXRlbWVudCBldCBkZSBzdG9ja2FnZSBkZXMgRG9ubsOpZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBUb3V0ZWZvaXMsIGRlIG1hbmnDqHJlIGV4Y2VwdGlvbm5lbGxlLCBpbCBwZXV0IGFycml2ZXIgcXVlXHJcbiAgICAgICAgICAgICAgICBjZXJ0YWluZXMgRG9ubsOpZXMgc29pZW50IHRyYW5zZsOpcsOpZXMgw6AgZGVzIHNvdXMtdHJhaXRhbnRzIG91XHJcbiAgICAgICAgICAgICAgICBwYXJ0ZW5haXJlcyBjb21tZXJjaWF1eCBheWFudCB1bmUgaW1wbGFudGF0aW9uIHNpdHXDqWUgZW4gZGVob3JzXHJcbiAgICAgICAgICAgICAgICBkZSBs4oCZVW5pb24gZXVyb3DDqWVubmUuIEVuIGNhcyBkZSB0cmFuc2ZlcnQgZGUgY2UgdHlwZSwgS2l2aWRcclxuICAgICAgICAgICAgICAgIHPigJllbmdhZ2Ugw6AgY2UgcXVlIGxlIHRyYWl0ZW1lbnQgc29pdCBlZmZlY3R1w6kgY29uZm9ybcOpbWVudCBhdXhcclxuICAgICAgICAgICAgICAgIGNsYXVzZXMgY29udHJhY3R1ZWxsZXMgdHlwZXMgZGUgbGEgQ29tbWlzc2lvbiBldXJvcMOpZW5uZSBxdWlcclxuICAgICAgICAgICAgICAgIHBlcm1ldHRlbnQgZGUgZ2FyYW50aXIgdW4gbml2ZWF1IGRlIHByb3RlY3Rpb24gc3VmZmlzYW50IGRlIGxhXHJcbiAgICAgICAgICAgICAgICB2aWUgcHJpdsOpZSBldCBkZXMgZHJvaXRzIGZvbmRhbWVudGF1eCBkZXMgcGVyc29ubmVzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazE4XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz4xMS4gTG9pIEFwcGxpY2FibGUg4oCTIENvbXDDqXRlbmNlIGRlIGp1cmlkaWN0aW9uPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTGEgbG9pIGFwcGxpY2FibGUgYXUgcHLDqXNlbnQgY29udHJhdCBlc3QgbGEgbG9pIGZyYW7Dp2Fpc2UuIExlc1xyXG4gICAgICAgICAgICAgICAgUGFydGllcyBz4oCZZW5nYWdlbnQgYcyAIHByb2PDqWRlciBhzIAgdW5lIHRlbnRhdGl2ZSBkZSBjb25jaWxpYXRpb25cclxuICAgICAgICAgICAgICAgIGF2YW50IHRvdXQgcmVjb3VycyBhdSBqdWdlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNraXZpZFwiPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlBvbGl0aXF1ZSBkZSBDb25maWRlbnRpYWxpdMOpPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgQ2V0dGUgUG9saXRpcXVlIGRlIENvbmZpZGVudGlhbGl0w6kgZXN0IGxhIGJhc2UgcG91ciB0cmFpdGVyXHJcbiAgICAgICAgICAgICAgICB0b3V0ZXMgRG9ubsOpZXMgUGVyc29ubmVsbGVzIHF1ZSBub3VzIHJhc3NlbWJsb25zIG91IHF1ZSB2b3VzXHJcbiAgICAgICAgICAgICAgICBub3VzIGZvdXJuaXNzZXogYXUgdHJhdmVycyBkdSBzaXRlIHdlYiBkaXNwb25pYmxlIMOgIGzigJlhZHJlc3NlXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPnd3dy5raXZpZC5mcjwvYT4gKGNpLWFwcsOocyBkw6lub21tw6kgwqsgbGEgUGxhdGVmb3JtZVxyXG4gICAgICAgICAgICAgICAgwrspLCBhaW5zaSBxdeKAmcOgIHRvdXRlIHJlY2hlcmNoZSBlZmZlY3R1w6llIHN1ciBsYWRpdGUgUGxhdGVmb3JtZSxcclxuICAgICAgICAgICAgICAgIGV0L291IHRvdXRlIHV0aWxpc2F0aW9uIGRlIGxhZGl0ZSBQbGF0ZWZvcm1lIHBhciBs4oCZaW50ZXJuYXV0ZVxyXG4gICAgICAgICAgICAgICAgcXVpIHPigJl5IGNvbm5lY3RlICjCqyBs4oCZVXRpbGlzYXRldXIgwrspLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazFcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjEuIElkZW50aXTDqSBkZXMgcmVzcG9uc2FibGVzIGRlIHRyYWl0ZW1lbnQ8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBDaGFxdWUgcHJvZmVzc2lvbm5lbCBwcmF0aWNpZW4gZXN0IGNvbnNpZMOpcsOpIGNvbW1lIHJlc3BvbnNhYmxlXHJcbiAgICAgICAgICAgICAgICBkZSB0cmFpdGVtZW50IGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXMgZGUgc2FudMOpIGRlIHNlc1xyXG4gICAgICAgICAgICAgICAgVXRpbGlzYXRldXJzLCB0YW5kaXMgcXVlIEtJVklEIGFnaXQgY29tbWUgc291cy10cmFpdGFudCBhZ2lzc2FudFxyXG4gICAgICAgICAgICAgICAgc3VyIGluc3RydWN0aW9uIHBhcnRpY3VsacOocmUgZGUgY2hhcXVlIHByYXRpY2llbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIEtJVklEIGVzdCBjb25zaWTDqXLDqSBjb21tZSByZXNwb25zYWJsZSBkZSB0cmFpdGVtZW50IGRlcyBkb25uw6llc1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVzIMOgIGxhIGNyw6lhdGlvbiBkdSBjb21wdGUgcGVyc29ubmVsIGRlIGwndXRpbGlzYXRldXIsIGRlXHJcbiAgICAgICAgICAgICAgICBzYSBuYXZpZ2F0aW9uIHN1ciBsYSBQbGF0ZWZvcm1lLCDDoCBsYSBjcsOpYXRpb24gZGUgc3RhdGlzdGlxdWVzXHJcbiAgICAgICAgICAgICAgICByZWxhdGl2ZXMgw6AgbCd1dGlsaXNhdGlvbiBkZSBsJ291dGlsLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazFcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgPjIuIERvbm7DqWVzIHF1ZSBub3VzIHBvdXZvbnMgY29sbGVjdGVyIHZvdXNcclxuICAgICAgICAgICAgICAgICAgICBjb25jZXJuYW50PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBOb3VzIHBvdXZvbnMgw6p0cmUgYW1lbsOpcyDDoCByYXNzZW1ibGVyIGV0IHRyYWl0ZXIgbGVzIERvbm7DqWVzXHJcbiAgICAgICAgICAgICAgICBQZXJzb25uZWxsZXMgc3VpdmFudGVzIDpcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluZm9ybWF0aW9ucyBxdWUgdm91cyBub3VzIGZvdXJuaXNzZXogZW4gcmVtcGxpc3NhbnQgZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wcyBsaWJyZXMgb3UgZm9ybXVsYWlyZXMgc3VyIG5vdHJlIFBsYXRlZm9ybWUuIExlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW50aW9ucyBzb3VzIGNlcyBmb3JtdWxhaXJlcyByYXBwZWxsZW50IGxlcyBkcm9pdHMgZG9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b3VzIGRpc3Bvc2V6IHN1ciB2b3MgaW5mb3JtYXRpb25zLCBjb21tZSBzdGlwdWzDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaS1hcHLDqHMgO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpIHZvdXMgbm91cyBjb250YWN0ZXosIG5vdXMgcG91dm9ucyBnYXJkZXIgdW4gcmFwcG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZSBjZXR0ZSBjb3JyZXNwb25kYW5jZSBldCBub3VzIHBvdXZvbnMgZW5yZWdpc3RyZXIgdm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW11bmljYXRpb25zIGF2ZWMgbm91cyBwb3VyIGRlcyBjb250csO0bGVzIGRlIHF1YWxpdMOpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV0IMOgIGRlcyBmaW5zIGRlIGZvcm1hdGlvbiA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVzIGTDqXRhaWxzIGRlIHZvcyB2aXNpdGVzIHN1ciBub3RyZSBQbGF0ZWZvcm1lIOKAk1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RhbW1lbnQsIMOgIGRlcyBkb25uw6llcyByZWxhdGl2ZXMgYXUgdHJhZmljLCB2b3RyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJjb3Vycywgdm90cmUgbGFuZ3VlIGRlIG5hdmlnYXRldXIsIGRlcyBkb25uw6llcyBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlzYXRpb24sIGRlcyBjYXJuZXRzIHdlYiBldCBk4oCZYXV0cmVzIGluZm9ybWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZSBjb21tdW5pY2F0aW9uIOKAkyBldCBsZXMgcmVzc291cmNlcyBhdXhxdWVsbGVzIHZvdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjw6lkZXouXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrMlwiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmdcclxuICAgICAgICAgICAgICAgICAgICA+My4gRHVyw6llIGRlIGNvbnNlcnZhdGlvbiBkZXMgaW5mb3JtYXRpb25zIHF1ZSBub3VzIHBvdXZvbnNcclxuICAgICAgICAgICAgICAgICAgICBhY3F1w6lyaXIgdm91cyBjb25jZXJuYW50PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBMYSBww6lyaW9kZSBkZSByw6l0ZW50aW9uIHBvdXIgZGVzIGRvbm7DqWVzIGV0L291IGRlcyBpbmZvcm1hdGlvbnNcclxuICAgICAgICAgICAgICAgIGRlIG5vdHJlIFBsYXRlZm9ybWUgZXN0IGRlIDEzIG1vaXMgw6AgbOKAmWV4Y2VwdGlvbiBkZXMgZG9ubsOpZXNcclxuICAgICAgICAgICAgICAgIGF5YW50IGZhaXQgbOKAmW9iamV0IGTigJl1biBwcm9jZXNzdXMgZOKAmWFub255bWlzYXRpb24gY29uZm9ybcOpbWVudCDDoFxyXG4gICAgICAgICAgICAgICAgbGEgbMOpZ2lzbGF0aW9uIGFwcGxpY2FibGUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBUb3V0ZWZvaXMsIGNlcnRhaW5lcyBkb25uw6llcyBwZXV2ZW50IMOqdHJlIGNvbnNlcnbDqWVzIHBvdXIgdW5lXHJcbiAgICAgICAgICAgICAgICBwbHVzIGxvbmd1ZSBkdXLDqWUgZXQgbm90YW1tZW50IChpKSBwZW5kYW50IHRvdXRlIGxhIGR1csOpZSBkZSB2aWVcclxuICAgICAgICAgICAgICAgIGRlIHZvdHJlIGNvbXB0ZSBlbiBsaWduZSBldCBqdXNxdeKAmcOgIHNhIHN1cHByZXNzaW9uLCBsZSBjYXNcclxuICAgICAgICAgICAgICAgIMOpY2jDqWFudCwgKGlpKSBwZW5kYW50IGxhIGR1csOpZSBzdGlwdWzDqWUgZGFucyB0b3V0IGNvbnRyYXQgcXVpXHJcbiAgICAgICAgICAgICAgICBzZXJhaXQgY29uY2x1IGF2ZWMgS0lWSUQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgPGEgbmFtZT1cIkJvb2ttYXJrM1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Ni4gUG9saXRpcXVlIGVuIG1hdGnDqHJlIGRlIGNvb2tpZXM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICBOb3VzIHBvdXZvbnMgb2J0ZW5pciBkZXMgaW5mb3JtYXRpb25zIHN1ciB2b3RyZSB1dGlsaXNhdGlvblxyXG4gICAgICAgICAgICAgICAgZOKAmUludGVybmV0IGVuIGfDqW7DqXJhbCBlbiB1dGlsaXNhbnQgZGVzIGRpc3Bvc2l0aWZzIGTigJlhY2PDqHNcclxuICAgICAgICAgICAgICAgIG5vdGFtbWVudCBkZSB0eXBlIGNvb2tpZSAodW4gY29va2llIGVzdCB1biBwZXRpdCBmaWNoaWVyIHRleHRlXHJcbiAgICAgICAgICAgICAgICBxdWkgZXN0IGdhcmTDqSBzdXIgbGUgZGlzcXVlIGR1ciBkZSB2b3RyZSBvcmRpbmF0ZXVyKS4gTGVzXHJcbiAgICAgICAgICAgICAgICBjb29raWVzIG5vdXMgYWlkZW50IMOgIGFtw6lsaW9yZXIgbm90cmUgUGxhdGVmb3JtZSBldCDDoCBmb3VybmlyIHVuXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIGRlIG1laWxsZXVyZSBxdWFsaXTDqS4gTm91cyB1dGlsaXNvbnMgZGVzIGNvb2tpZXMgw6l0YW50XHJcbiAgICAgICAgICAgICAgICBzdHJpY3RlbWVudCBuw6ljZXNzYWlyZXMgw6Agdm90cmUgdXRpbGlzYXRpb24gZGUgbm90cmUgUGxhdGVmb3JtZS5cclxuICAgICAgICAgICAgICAgIFZvdXMgcG91dmV6IHJlZnVzZXIgZOKAmWFjY2VwdGVyIGNlcyBjb29raWVzIGVuIGFjdGl2YW50IGxlXHJcbiAgICAgICAgICAgICAgICBwYXJhbcOodHJlIHF1aSB2b3VzIHBlcm1ldCBkZSByZWZ1c2VyIGzigJlpbnN0YWxsYXRpb24gZGUgY29va2llc1xyXG4gICAgICAgICAgICAgICAgc3VyIHZvdHJlIG9yZGluYXRldXIuIENlcGVuZGFudCwgc2kgdm91cyBjaG9pc2lzc2V6IGNlXHJcbiAgICAgICAgICAgICAgICBwYXJhbcOodHJlLCBpbCBlc3QgcG9zc2libGUgcXVlIHZvdXMgc295ZXogaW5jYXBhYmxlIGTigJlhY2PDqWRlciDDoFxyXG4gICAgICAgICAgICAgICAgY2VydGFpbmVzIHBhcnRpZXMgZGUgbm90cmUgUGxhdGVmb3JtZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms0XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz43LiBQYXJ0YWdlIGF2ZWMgZGVzIHRpZXJzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgQWZpbiBkZSB2b3VzIGFwcG9ydGVyIGxlIG1laWxsZXVyIHNlcnZpY2UsIG5vdXMgcG91dm9ucyBkYW5zXHJcbiAgICAgICAgICAgICAgICBjZXJ0YWlucyBjYXMgcGFydGFnZXIgdm9zIGRvbm7DqWVzIGF2ZWMgZGVzIHRpZXJzLCBub3RhbW1lbnQgZGVzXHJcbiAgICAgICAgICAgICAgICBwYXJ0ZW5haXJlcyB0ZWNobmlxdWVzIG91IGNvbW1lcmNpYXV4LiBOb3VzIG5lIHBhcnRhZ2Vyb25zIHZvc1xyXG4gICAgICAgICAgICAgICAgZG9ubsOpZXMgcXXigJlhdmVjIGRlcyBwYXJ0ZW5haXJlcyBxdWkgcHLDqXNlbnRlbnQgZGVzIGdhcmFudGllc1xyXG4gICAgICAgICAgICAgICAgc3VmZmlzYW50ZXMgcXVhbnQgw6AgbGEgbWlzZSBlbiDFk3V2cmUgZGUgbWVzdXJlcyB0ZWNobmlxdWVzIGV0XHJcbiAgICAgICAgICAgICAgICBvcmdhbmlzYXRpb25uZWxsZXMgYXBwcm9wcmnDqWVzIGRlIG1hbmnDqHJlIMOgIGdhcmFudGlyIGxhXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0aW9uIGRlIHZvcyBkcm9pdHMgZXQgZGUgdm9zIGRvbm7DqWVzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgTm91cyBwb3V2b25zIGRpdnVsZ3VlciB2b3MgZG9ubsOpZXMgw6AgZGVzIHRpZXJzIDpcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJKVVNUSUZZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVuIGNhcyBkZSB2ZW50ZSBvdSBk4oCZYWNoYXQgZOKAmXVuZSBkZSBub3MgZW50cmVwcmlzZXMgb3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmllbnMsIG5vdXMgcG91dm9ucyBkaXZ1bGd1ZXIgdm9zIGNvb3Jkb25uw6llcyBhdSB2ZW5kZXVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91IGFjaGV0ZXVyIHByb3NwZWN0aWYgZGUgY2VzIGVudHJlcHJpc2VzIG91IGJpZW5zIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaSBub3VzIG91IHRvdXMgbm9zIGJpZW5zIHNvbnQgYWNxdWlzIHBhciB1biB0aWVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91dGVzIGNvb3Jkb25uw6llcyBnYXJkw6llcyBwYXIgbm91cyBzdXIgbm9zIGNsaWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyYWllbnQgYWluc2kgdHJhbnNmw6lyw6lzIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaSBub3VzIGF2b25zIGzigJlvYmxpZ2F0aW9uIGRlIGRpdnVsZ3VlciBvdSBkZSBwYXJ0YWdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2b3MgY29vcmRvbm7DqWVzIGFmaW4gZGUgc2UgY29uZm9ybWVyIMOgIHRvdXRlIG9ibGlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbMOpZ2FsZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWZpbiBkZSBwcm90w6lnZXIgbm9zIGRyb2l0cywgcHJvcHJpw6l0w6kgb3Ugc8OpY3VyaXTDqSwgbm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudHMgb3UgYXV0cmVzIDtcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbiBjYXMgZOKAmcOpY2hhbmdlIGTigJlpbmZvcm1hdGlvbnMgYXZlYyBk4oCZYXV0cmVzIHNvY2nDqXTDqXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXQgb3JnYW5pc2F0aW9ucyDDoCBkZXMgZmlucyBkZSBwcm90ZWN0aW9uIGNvbnRyZSBsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmF1ZGUgZXQgbGEgcsOpZHVjdGlvbiBkdSByaXNxdWUgZGUgY3LDqWRpdC5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwiQm9va21hcms1XCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA5LiBDaGFuZ2VtZW50cyBsacOpcyDDoCBub3RyZSBwb2xpdGlxdWUgZGUgY29uZmlkZW50aWFsaXTDqSBkZVxyXG4gICAgICAgICAgICAgICAgICAgIHZvdHJlIHZpZSBwcml2w6llIHJlbGF0aXZlIMOgIGxhIFBsYXRlZm9ybWUgS0lWSURcclxuICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBhbGlnbj1cIkpVU1RJRllcIj5cclxuICAgICAgICAgICAgICAgIFRvdXQgY2hhbmdlbWVudCBxdWUgbm91cyBmYWlzb25zIMOgIG5vdHJlIFBvbGl0aXF1ZSBkZVxyXG4gICAgICAgICAgICAgICAgQ29uZmlkZW50aWFsaXTDqSBkYW5zIGxlIGZ1dHVyIHNlcmEgcG9zdMOpIHN1ciBjZXR0ZSBwYWdlLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJCb29rbWFyazZcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjEwLiBDb250YWN0PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGFsaWduPVwiSlVTVElGWVwiPlxyXG4gICAgICAgICAgICAgICAgU2kgdm91cyBhdmV6IGxhIG1vaW5kcmUgcXVlc3Rpb24gY29uY2VybmFudCBjZXR0ZSBQb2xpdGlxdWUgZGVcclxuICAgICAgICAgICAgICAgIENvbmZpZGVudGlhbGl0w6kgZXQgbGEgZmHDp29uIGRvbnQgbm91cyB1dGlsaXNvbnMgdm9zIERvbm7DqWVzXHJcbiAgICAgICAgICAgICAgICBQZXJzb25uZWxsZXMsIGNlbGxlLWNpIGVzdCBiaWVudmVudWUgZXQgZGV2cmEgw6p0cmUgYWRyZXNzw6llIMOgXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3RAa2l2aWQuZnJcIj5jb250YWN0QGtpdmlkLmZyPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHt9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmNvbnRhaW5lci1jZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1My44dmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDByZW0gMHJlbSAxcmVtICNiN2JkYzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxLjJyZW07XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RkZTNlOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiN2JkYzI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjdyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2I3YjliZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXY6Zmlyc3QtY2hpbGQgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uIGlkPVwicmVnaXN0ZXItZm9ybVwiIGNsYXNzPVwia2l2LWJsb2NrXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIHYtaWY9XCJ1c2VyVHlwZSA9PT0gJ3BhdGllbnQnXCI+SW5zY3JpcHRpb248L2gyPlxyXG4gICAgICAgICAgICA8aDIgdi1pZj1cInVzZXJUeXBlID09PSAnZG9jdG9yJ1wiPkluc2NyaXB0aW9uIHByYXRpY2llbiA8c3BhbiB2LWlmPVwicmVnaXN0ZXJUeXBlID09PSAnZmZta3InXCI+RkZNS1I8L3NwYW4+PC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFmb3JtTG9hZGluZ1JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJyZWdpc3RlclR5cGUgPT09ICdmZm1rcidcIiBjbGFzcz1cImZmbWtyLWNoZWNrLXJlZ2lzdGVyLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5WZXVpbGxleiBlbnRyZXIgbCdlbWFpbCB1dGlsaXPDqSBzdXIgdm90cmUgY29tcHRlIEZGTUtSPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZGFuZ2VyPVwidmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgIT0gbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyZWdpc3RlckRldGFpbHMuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJ2YWxpZGF0aW9uRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLWFmdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRldGFpbHMuZW1haWwpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVtcHR5TWVzc2FnZS5lbWFpbCAmJiAhcmVnaXN0ZXJEZXRhaWxzLmVtYWlsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJiByZWdpc3RlckRldGFpbHMuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtZXJyb3IgZXJyb3IgaWNvbi0yNFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRldGFpbHMuZW1haWwpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVtcHR5TWVzc2FnZS5lbWFpbCAmJiAhcmVnaXN0ZXJEZXRhaWxzLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtZXNzYWdlLWRhbmdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiYgcmVnaXN0ZXJEZXRhaWxzLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgdmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgfX08L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVtcHR5TWVzc2FnZS5lbWFpbCAmJiAhcmVnaXN0ZXJEZXRhaWxzLmVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgZW1wdHlNZXNzYWdlLmVtYWlsIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiTW90IGRlIHBhc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnZpc2libGVQYXNzd29yZD1cImhhc1Zpc2libGVQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24tYWZ0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwPVwidmFsaWRhdGlvblBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLWljb249XCJoYXNWaXNpYmxlUGFzc3dvcmQgPSAhaGFzVmlzaWJsZVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnByb2dyZXNzPVwiZ2V0U2VjdXJlUGFzc1Byb2dyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHk6ICFyZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5wbGFpblBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtaWY9XCIhaGFzVmlzaWJsZVBhc3N3b3JkXCIgY2xhc3M9XCJmYXMgZmEtZXllXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1lbHNlIGNsYXNzPVwiZmFzIGZhLWV5ZS1zbGFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5wbGFpblBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI21lc3NhZ2UtZGFuZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVtcHR5TWVzc2FnZS5wbGFpblBhc3N3b3JkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRTZWN1cmVQYXNzUHJvZ3Jlc3MgPj0gMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtZXNzYWdlLXN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW90IGRlIHBhc3NlIHPDqWN1cmlzw6lcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dnMtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiQ29uZmlybWF0aW9uIGR1IG1vdCBkZSBwYXNzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2aXNpYmxlUGFzc3dvcmQ9XCJoYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi1hZnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJ2YWxpZGF0aW9uUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2staWNvbj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybSA9ICFoYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZENvbmZpcm0pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVtcHR5TWVzc2FnZS5wYXNzd29yZENvbmZpcm0gJiYgIXBhc3N3b3JkQ29uZmlybSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXB0eTogIXBhc3N3b3JkQ29uZmlybSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYXMgZmEtZXllXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWVsc2UgY2xhc3M9XCJmYXMgZmEtZXllLXNsYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW1wdHlNZXNzYWdlLnBhc3N3b3JkQ29uZmlybSAmJiAhcGFzc3dvcmRDb25maXJtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtZXNzYWdlLWRhbmdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UucGFzc3dvcmQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgdmFsaWRhdGlvbk1lc3NhZ2UucGFzc3dvcmQgfX08L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXB0eU1lc3NhZ2UucGFzc3dvcmRDb25maXJtICYmICFwYXNzd29yZENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBlbXB0eU1lc3NhZ2UucGFzc3dvcmRDb25maXJtIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGRpc2FibGVkOiBidG5Mb2FkaW5nUmVnaXN0ZXIgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImJ0bkxvYWRpbmdSZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidmFsaWRSZWdpc3RyYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TJ2luc2NyaXJlIGF2ZWMgPGltZyBjbGFzcz1cImxvZ28tZmZta3JcIiBzcmM9XCIvaW1nL2xvZ28ta2l2aWQtRkZNS1Itd2hpdGUuc3ZnXCIgYWx0PVwiTG9nbyBGRk1LUlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwicmVnaXN0ZXItZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyIHNvY2lhbC1yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWdpc3Rlck9hdXRoKCdmYWNlYm9vaycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMnaW5zY3JpcmUgYXZlYyA8aSBjbGFzcz1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdnMtYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWdpc3Rlck9hdXRoKCdnb29nbGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TJ2luc2NyaXJlIGF2ZWMgPGkgY2xhc3M9XCJmYWIgZmEtZ29vZ2xlXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItdGV4dFwiPm91PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicmVnaXN0ZXJEZXRhaWxzLmxhc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJOb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYW1pbHktbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24tYWZ0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLmxhc3RuYW1lICYmICFyZWdpc3RlckRldGFpbHMubGFzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLmxhc3RuYW1lICYmICFyZWdpc3RlckRldGFpbHMubGFzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbWVzc2FnZS1kYW5nZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW1wdHlNZXNzYWdlLmxhc3RuYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyZWdpc3RlckRldGFpbHMuZmlyc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJQcsOpbm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZ2l2ZW4tbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24tYWZ0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLmZpcnN0bmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZWdpc3RlckRldGFpbHMuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5maXJzdG5hbWUgJiYgIXJlZ2lzdGVyRGV0YWlscy5maXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbWVzc2FnZS1kYW5nZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW1wdHlNZXNzYWdlLmZpcnN0bmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZGFuZ2VyPVwidmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgIT0gbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyZWdpc3RlckRldGFpbHMuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJ2YWxpZGF0aW9uRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLWFmdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRldGFpbHMuZW1haWwpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVtcHR5TWVzc2FnZS5lbWFpbCAmJiAhcmVnaXN0ZXJEZXRhaWxzLmVtYWlsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJiByZWdpc3RlckRldGFpbHMuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtZXJyb3IgZXJyb3IgaWNvbi0yNFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRldGFpbHMuZW1haWwpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVtcHR5TWVzc2FnZS5lbWFpbCAmJiAhcmVnaXN0ZXJEZXRhaWxzLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtZXNzYWdlLWRhbmdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiYgcmVnaXN0ZXJEZXRhaWxzLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgdmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgfX08L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVtcHR5TWVzc2FnZS5lbWFpbCAmJiAhcmVnaXN0ZXJEZXRhaWxzLmVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgZW1wdHlNZXNzYWdlLmVtYWlsIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiTW90IGRlIHBhc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnZpc2libGVQYXNzd29yZD1cImhhc1Zpc2libGVQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24tYWZ0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwPVwidmFsaWRhdGlvblBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLWljb249XCJoYXNWaXNpYmxlUGFzc3dvcmQgPSAhaGFzVmlzaWJsZVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnByb2dyZXNzPVwiZ2V0U2VjdXJlUGFzc1Byb2dyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHk6ICFyZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5wbGFpblBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtaWY9XCIhaGFzVmlzaWJsZVBhc3N3b3JkXCIgY2xhc3M9XCJmYXMgZmEtZXllXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1lbHNlIGNsYXNzPVwiZmFzIGZhLWV5ZS1zbGFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5wbGFpblBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI21lc3NhZ2UtZGFuZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVtcHR5TWVzc2FnZS5wbGFpblBhc3N3b3JkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRTZWN1cmVQYXNzUHJvZ3Jlc3MgPj0gMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtZXNzYWdlLXN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW90IGRlIHBhc3NlIHPDqWN1cmlzw6lcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dnMtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiQ29uZmlybWF0aW9uIGR1IG1vdCBkZSBwYXNzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2aXNpYmxlUGFzc3dvcmQ9XCJoYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi1hZnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJ2YWxpZGF0aW9uUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2staWNvbj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybSA9ICFoYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZENvbmZpcm0pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVtcHR5TWVzc2FnZS5wYXNzd29yZENvbmZpcm0gJiYgIXBhc3N3b3JkQ29uZmlybSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXB0eTogIXBhc3N3b3JkQ29uZmlybSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYXMgZmEtZXllXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWVsc2UgY2xhc3M9XCJmYXMgZmEtZXllLXNsYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW1wdHlNZXNzYWdlLnBhc3N3b3JkQ29uZmlybSAmJiAhcGFzc3dvcmRDb25maXJtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtZXNzYWdlLWRhbmdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UucGFzc3dvcmQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgdmFsaWRhdGlvbk1lc3NhZ2UucGFzc3dvcmQgfX08L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXB0eU1lc3NhZ2UucGFzc3dvcmRDb25maXJtICYmICFwYXNzd29yZENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBlbXB0eU1lc3NhZ2UucGFzc3dvcmRDb25maXJtIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjY2VwdC1DRy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlbXB0eU1lc3NhZ2UuYWNjZXB0Q0cgJiYgIWFjY2VwdENHLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1jaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFjY2VwdENHXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBhY2NlcHRDRyB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+aidhaSBsdSBldCBqJ2FjY2VwdGUgbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwibW9kYWxDRyA9IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Y29uZGl0aW9ucyBnw6luw6lyYWxlczwvYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbXB0eS1lcnJvci1tZXNzIHB0LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVtcHR5TWVzc2FnZS5hY2NlcHRDRyAmJiAhYWNjZXB0Q0dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbXB0eU1lc3NhZ2UuYWNjZXB0Q0cgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZDogYnRuTG9hZGluZ1JlZ2lzdGVyIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nUmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkUmVnaXN0cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlMnaW5zY3JpcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImxvYWRpbmctZm9ybS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGxvYWRpbmcsIGkpIGluIDlcIlxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvYWRpbmcgbG9hZGluZy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx2cy1kaWFsb2cgd2lkdGg9XCI0NTBweFwiIHYtbW9kZWw9XCJtb2RhbENHXCI+XHJcbiAgICAgICAgICAgIDxoMj5Db25kaXRpb25zIEfDqW7DqXJhbGVzPC9oMj5cclxuICAgICAgICAgICAgPENHIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dnMtYnV0dG9uIGNsYXNzPVwidy0xMDBcIiBAY2xpY2s9XCJ2YWxpZEFjY2VwdENHKClcIlxyXG4gICAgICAgICAgICAgICAgICAgID5KJ2FpIGx1IGV0IGonYWNjZXB0ZTwvdnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdnMtZGlhbG9nPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGYgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCBDRyBmcm9tIFwiLi9Db25kaXRpb25HZW5lcmFsZS52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBDRyxcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXJUeXBlOiBTdHJpbmcsXHJcbiAgICAgICAgY3NyZlRva2VuUmVnaXN0ZXI6IFN0cmluZyxcclxuICAgICAgICByZWdpc3RlclR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyRGV0YWlsczoge1xyXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBsYWluUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbXB0eU1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwbGFpblBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0Q0c6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybTogXCJcIixcclxuICAgICAgICAgICAgaGFzVmlzaWJsZVBhc3N3b3JkOiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybTogZmFsc2UsXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdSZWdpc3RlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcm1Mb2FkaW5nUmVnaXN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2RhbENHOiBmYWxzZSxcclxuICAgICAgICAgICAgYWNjZXB0Q0c6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHZhbGlkQWNjZXB0Q0coKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0Q0cgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsQ0cgPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkUmVnaXN0cmF0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMudmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiZcclxuICAgICAgICAgICAgICAgICgoIXRoaXMucmVnaXN0ZXJUeXBlICYmIHRoaXMuY2hlY2tJZkZpZWxkc0FyZU5vdEVtcHR5KCkpIFxyXG4gICAgICAgICAgICAgICAgfHwgKHRoaXMucmVnaXN0ZXJUeXBlID09PSAnZmZta3InICYmIHRoaXMuY2hlY2tJZkZGTUtSRmllbGRzQXJlTm90RW1wdHkoKSkpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nUmVnaXN0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtTG9hZGluZ1JlZ2lzdGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QoYC9pbnNjcmlwdGlvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0aGlzLmNzcmZUb2tlblJlZ2lzdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTogdGhpcy5yZWdpc3RlckRldGFpbHMubGFzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogdGhpcy5yZWdpc3RlckRldGFpbHMuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5yZWdpc3RlckRldGFpbHMuZW1haWwudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhaW5QYXNzd29yZDogdGhpcy5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclR5cGU6IHRoaXMudXNlclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyVHlwZTogdGhpcy5yZWdpc3RlclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSA9PT0gJ2ZmbWtyLWFkaGVzaW9uLW5vdC1mb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1JlZ2lzdGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Mb2FkaW5nUmVnaXN0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkVXNlcklzUmVnaXN0ZXJlZENob2ljZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvblN0YXkoXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nUmVnaXN0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtTG9hZGluZ1JlZ2lzdGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25FbWFpbCgpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZSA9XHJcbiAgICAgICAgICAgICAgICAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlLnRlc3QoU3RyaW5nKHRoaXMucmVnaXN0ZXJEZXRhaWxzLmVtYWlsKS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWN0Q2hvaWNlID0gdGhpcy5jb250YWN0VGVsID8gMiA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJNZXJjaSBkJ2VudHJlciB1biBlbWFpbCB2YWxpZGUuXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3RDaG9pY2UgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2UucGFzc3dvcmQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQgIT09IHRoaXMucGFzc3dvcmRDb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkID1cclxuICAgICAgICAgICAgICAgICAgICBcIkxlcyBtb3RzIGRlIHBhc3NlIG5lIGNvcnJlc3BvbmRlbnQgcGFzLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1Y3dvcmRzKHN0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKF4oW2EtekEtWlxccHtNfV0pKXwoWyAtXVthLXpBLVpcXHB7TX1dKS9nLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24ocyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVnaXN0ZXJPYXV0aChzb2NpYWwpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvb2F1dGgvY29ubmVjdC8ke3RoaXMudXNlclR5cGV9LyR7c29jaWFsfWA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja0lmRmllbGRzQXJlTm90RW1wdHkoKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICF0aGlzLnJlZ2lzdGVyRGV0YWlscy5sYXN0bmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgIXRoaXMucmVnaXN0ZXJEZXRhaWxzLmZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgfHwgIXRoaXMucmVnaXN0ZXJEZXRhaWxzLmVtYWlsIFxyXG4gICAgICAgICAgICAgICAgfHwgIXRoaXMucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQgXHJcbiAgICAgICAgICAgICAgICB8fCAhdGhpcy5wYXNzd29yZENvbmZpcm1cclxuICAgICAgICAgICAgICAgIHx8ICF0aGlzLmFjY2VwdENHXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZ2lzdGVyRGV0YWlscy5sYXN0bmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlNZXNzYWdlLmxhc3RuYW1lID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJWb3VzIGRldmV6IHJlbnNlaWduZXIgdm90cmUgbm9tXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZ2lzdGVyRGV0YWlscy5maXJzdG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZS5maXJzdG5hbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZvdXMgZGV2ZXogcmVuc2VpZ25lciB2b3RyZSBwcsOpbm9tXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZ2lzdGVyRGV0YWlscy5lbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlNZXNzYWdlLmVtYWlsID0gXCJWb3VzIGRldmV6IHJlbnNlaWduZXIgdW4gZW1haWxcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZS5wbGFpblBhc3N3b3JkID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJWb3VzIGRldmV6IHJlbnNlaWduZXIgdW4gbW90IGRlIHBhc3NlXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlNZXNzYWdlLnBhc3N3b3JkQ29uZmlybSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVm91cyBkZXZleiBjb25maXJtZXIgdm90cmUgbW90IGRlIHBhc3NlXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFjY2VwdENHKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eU1lc3NhZ2UuYWNjZXB0Q0cgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZvdXMgZGV2ZXogYWNjZXB0ZXIgbGVzIGNvbmRpdGlvbnMgZ8OpbsOpcmFsZXNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tJZkZGTUtSRmllbGRzQXJlTm90RW1wdHkoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCB8fCAhdGhpcy5wYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZWdpc3RlckRldGFpbHMuZW1haWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZS5lbWFpbCA9IFwiVm91cyBkZXZleiByZW5zZWlnbmVyIHVuIGVtYWlsXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eU1lc3NhZ2UucGxhaW5QYXNzd29yZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVm91cyBkZXZleiByZW5zZWlnbmVyIHVuIG1vdCBkZSBwYXNzZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5TWVzc2FnZS5wYXNzd29yZENvbmZpcm0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZvdXMgZGV2ZXogY29uZmlybWVyIHZvdHJlIG1vdCBkZSBwYXNzZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZFVzZXJJc1JlZ2lzdGVyZWRDaG9pY2UodXNlcklzUmVnaXN0ZXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwidXNlcklzUmVnaXN0ZXJlZENob2ljZVwiLCB7dHlwZTogJ3VzZXJJc1JlZ2lzdGVyZWQnLCB2YWx1ZTogdXNlcklzUmVnaXN0ZXJlZH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRTZWN1cmVQYXNzUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLyBhdCBsZWFzdCBvbmUgbnVtYmVyXHJcbiAgICAgICAgICAgIGlmICgvXFxkLy50ZXN0KHRoaXMucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSAyMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYXQgbGVhc3Qgb25lIGNhcGl0YWwgbGV0dGVyXHJcbiAgICAgICAgICAgIGlmICgvKC4qW0EtWl0uKikvLnRlc3QodGhpcy5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IDIwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhdCBtZW5vbnMgYSBsb3dlcmNhc2VcclxuICAgICAgICAgICAgaWYgKC8oLipbYS16XS4qKS8udGVzdCh0aGlzLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gMjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG1vcmUgdGhhbiA5IGRpZ2l0c1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZC5sZW5ndGggPj0gOSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gMjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGF0IGxlYXN0IG9uZSBzcGVjaWFsIGNoYXJhY3RlclxyXG4gICAgICAgICAgICBpZiAoL1teQS1aYS16MC05XS8udGVzdCh0aGlzLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gMjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4udnMtZGlhbG9nIC52cy1kaWFsb2dfX2NvbnRlbnQgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuI3JlZ2lzdGVyLWZvcm0ge1xyXG4gICAgLmZmbWtyLWNoZWNrLXJlZ2lzdGVyLWZvcm0ge1xyXG4gICAgICAgID4gcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgICAgY29sb3I6ICNjMmI5YTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nby1mZm1rciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1LjdyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwLjFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudnMtaW5wdXQtcGFyZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0bi1jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2FkaW5nLWZvcm0tYmxvY2sge1xyXG4gICAgICAgID4gLmxvYWRpbmcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUuMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QtZmlsdGVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC45cmVtO1xyXG5cclxuICAgICAgICAmLmVycm9yIHtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2ZmNTY0YjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5lbXB0eS1lcnJvci1tZXNzIHtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGNvbG9yOiAjZmY1NjRiO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjdyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcclxuICAgICAgICBhbmltYXRpb246IDAuMjVzIGVhc2UgMHMgZm9yd2FyZHMgaGVpZ2h0RW50ZXI7XHJcblxyXG4gICAgICAgICYucHQtMCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudnMtY2hlY2tib3gtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjYjVhYzk0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudnMtY2hlY2tib3gtY29udGVudC5hY3RpdmUge1xyXG4gICAgICAgIC52cy1jaGVja2JveC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyZTU0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudnMtY2hlY2tib3gtY29uIHtcclxuICAgICAgICB3aWR0aDogMTlweDtcclxuICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC52cy1pY29uLWNoZWNrIHNwYW4gLmxpbmUyIHtcclxuICAgICAgICBoZWlnaHQ6IDlweDtcclxuICAgICAgICBib3R0b206IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAudnMtaWNvbi1jaGVjayBzcGFuIC5saW5lMSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgYm90dG9tOiAxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnZ1ZS1waG9uZS1udW1iZXItaW5wdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgdGV4dGFyZWEsXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMS42cmVtIDEuN3JlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjZTdkZmNkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgICAmOmZvY3VzLXZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2MxYjc5ZDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAyLjVyZW0gLTAuNHJlbSByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmZvY3VzIH4gbGFiZWwsXHJcbiAgICAgICAgICAgICYuZmlsbGVkIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjhyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgdG9wOiAxLjZyZW07XHJcbiAgICAgICAgICAgIGxlZnQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYzFiNzlkO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjA1cmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudnVlLXBob25lLW51bWJlci1pbnB1dCB7XHJcbiAgICAgICAgJi5maWxsZWQge1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTAuOHJlbTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNhcmV0LWNvbG9yOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMgfiBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2MxYjc5ZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuMDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZXJyb3Ige1xyXG4gICAgICAgICAgICBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCA4NiwgNzUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2FjY2VwdC1DRy1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICYuZXJyb3Ige1xyXG4gICAgICAgICAgICAudnMtY2hlY2tib3gtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjU2NGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnZzLWNoZWNrYm94LW1hc2s6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZjU2NGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBpZD1cInVzZXItdHlwZS1jaG9pY2VcIj5cclxuICAgICAgICA8aDE+RGl0ZXMtbm91cyBlbiBwbHVzIMOgJm5ic3A7cHJvcG9zJm5ic3A7ZGUmbmJzcDt2b3VzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkVXNlclR5cGVDaG9pY2UoJ3BhdGllbnQnKVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IHNlY29uZGFyeTogJHBhcmVudC51c2VyQ2hvaWNlLnVzZXJUeXBlLnZhbHVlID09ICdkb2N0b3InIH1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBKZSBzdWlzIHVuIHBhcnRpY3VsaWVyXHJcbiAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkVXNlclR5cGVDaG9pY2UoJ2RvY3RvcicpXCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgc2Vjb25kYXJ5OiAkcGFyZW50LnVzZXJDaG9pY2UudXNlclR5cGUudmFsdWUgPT0gJ3BhdGllbnQnIH1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBKZSBzdWlzIHVuIHByb2Zlc3Npb25uZWxcclxuICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdmFsaWRVc2VyVHlwZUNob2ljZSh1c2VyVHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwidXNlclR5cGVDaG9pY2VcIiwge3R5cGU6ICd1c2VyVHlwZScsIHZhbHVlOiB1c2VyVHlwZSB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLy8gQGltcG9ydCBcIi4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4jdXNlci10eXBlLWNob2ljZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNXJlbTtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNHJlbTtcclxuXHJcbiAgICAgICAgLnZzLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzY2NmVkNjYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzY2NmVkNjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjNjY2ZWQ2NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2M2NjZlZDY2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2M2NjZlZDY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2M2NjZlZDY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzY2NmVkNjYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzY2NmVkNjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvZnVsbHBhZ2UvUmVnaXN0ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db25kaXRpb25HZW5lcmFsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzBlOGFiYjYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29uZGl0aW9uR2VuZXJhbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db25kaXRpb25HZW5lcmFsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ29uZGl0aW9uR2VuZXJhbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzBlOGFiYjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzMGU4YWJiNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMwZThhYmI2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMwZThhYmI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMwZThhYmI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db25kaXRpb25HZW5lcmFsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzBlOGFiYjYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzBlOGFiYjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvQ29uZGl0aW9uR2VuZXJhbGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZWdpc3RlckZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg5YWRjYTBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JlZ2lzdGVyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JlZ2lzdGVyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUmVnaXN0ZXJGb3JtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODlhZGNhMGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODlhZGNhMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODlhZGNhMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlZ2lzdGVyRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODlhZGNhMGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODlhZGNhMGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvZnVsbHBhZ2UvcmVnaXN0ZXIvUmVnaXN0ZXJGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlclR5cGVDaG9pY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5MDM0YTk4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJUeXBlQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlclR5cGVDaG9pY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1VzZXJUeXBlQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjkwMzRhOTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjkwMzRhOTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjkwMzRhOTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJUeXBlQ2hvaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOTAzNGE5OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyOTAzNGE5OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZWdpc3Rlci9Vc2VyVHlwZUNob2ljZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmRpdGlvbkdlbmVyYWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmRpdGlvbkdlbmVyYWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3RlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0ZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyVHlwZUNob2ljZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyVHlwZUNob2ljZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzRdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzY2NmVkNjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmRpdGlvbkdlbmVyYWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMwZThhYmI2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzNdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbNF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3RlckZvcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJUeXBlQ2hvaWNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzY2NmVkNjYmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZGl0aW9uR2VuZXJhbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwZThhYmI2JnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZ2lzdGVyRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODlhZGNhMGUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclR5cGVDaG9pY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5MDM0YTk4JlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIGZ1bGxwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfdm0uYWN0aXZlU3RlcCAhPSBfdm0udXNlckNob2ljZVtfdm0uZmlyc3RTdGVwTmFtZV0uc3RlcCAmJlxuICAgICAgIXRoaXMucmVnaXN0ZXJUeXBlXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tcHJldlwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBjaXJjbGU6IFwiXCIsIGZsb2F0aW5nOiBcIlwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnByZXZpb3VzU3RlcCAhPSBfdm0uYWN0aXZlU3RlcFxuICAgICAgICAgICAgICAgICAgICA/IChfdm0uYWN0aXZlU3RlcCA9IF92bS5wcmV2aW91c1N0ZXApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLnVzZXJDaG9pY2VbX3ZtLmZpcnN0U3RlcE5hbWVdLnN0ZXBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWFycm93LWxlZnQgaWNvbi0zMVwiIH0pXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiLCBtb2RlOiBcIm91dC1pblwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5hY3RpdmVTdGVwID09IF92bS51c2VyQ2hvaWNlLnVzZXJUeXBlLnN0ZXBcbiAgICAgICAgICAgID8gX2MoXCJVc2VyVHlwZUNob2ljZVwiLCB7XG4gICAgICAgICAgICAgICAgb246IHsgdXNlclR5cGVDaG9pY2U6IF92bS5zZXRVc2VyQ2hvaWNlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uYWN0aXZlU3RlcCA9PSBfdm0udXNlckNob2ljZS51c2VySXNSZWdpc3RlcmVkLnN0ZXBcbiAgICAgICAgICAgID8gX2MoXCJSZWdpc3RlckZvcm1cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB1c2VyVHlwZTogX3ZtLnVzZXJDaG9pY2UudXNlclR5cGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICBjc3JmVG9rZW5SZWdpc3RlcjogX3ZtLmNzcmZUb2tlblJlZ2lzdGVyLFxuICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJUeXBlOiBfdm0ucmVnaXN0ZXJUeXBlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB1c2VySXNSZWdpc3RlcmVkQ2hvaWNlOiBfdm0uc2V0VXNlckNob2ljZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJsb2dvXCIgfSB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2xvZ28ta2l2aWQtZ3JhZGllbnQuc3ZnXCIpLFxuICAgICAgICAgIGFsdDogXCJMb2dvIEtpdmlkXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiS2l2aWRcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWNnXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJja2l2aWRcIiB9LCBbXG4gICAgICAgIF9jKFwiaDFcIiwgW1xuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJDb25kaXRpb25zIGfDqW7DqXJhbGVzIGQndXRpbGlzYXRpb25cIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazFcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjEuIE1vZGFsaXTDqXMgZOKAmWFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsyXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbXG4gICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiMS4xIFV0aWxpc2F0ZXVycyBQcmF0aWNpZW5zIHByb2Zlc3Npb25uZWxzXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrM1wiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJhLiBBdXRoZW50aWZpY2F0aW9uXCIpXSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTG9ycyBkZSBsYSBwcmVtacOocmUgdXRpbGlzYXRpb24gZGUgbGEgcGxhdGVmb3JtZSwgbGUgcHJhdGljaWVuXFxuICAgICAgICAgICAgY29tcGzDqHRlIHVuIGZvcm11bGFpcmUgZOKAmWluc2NyaXB0aW9uIGVuIGxpZ25lIGVuIHNhaXNpc3NhbnQgdW5cXG4gICAgICAgICAgICBlbWFpbCBldCB1biBtb3QgZGUgcGFzc2Ugb3Ugc2UgY29ubmVjdGUgdmlhIHNvbiBjb21wdGUgRmFjZWJvb2tcXG4gICAgICAgICAgICBvdSBHb29nbGUuIFVuZSBmb2lzIGxlIGZvcm11bGFpcmUgZW52b3nDqSwgdW4gZW1haWwgZGUgdmFsaWRhdGlvblxcbiAgICAgICAgICAgIGVzdCBlbnZvecOpIMOgIGzigJlhZHJlc3NlIGUtbWFpbCBzYWlzaWUgcGFyIGxlIHByYXRpY2llbiBs4oCZaW52aXRhbnRcXG4gICAgICAgICAgICDDoCB2YWxpZGVyIHNvbiBjb21wdGUgZW4gY2xpcXVhbnQgc3VyIHVuIGxpZW4gZGUgY29uZmlybWF0aW9uLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrNFwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjEuMiBVdGlsaXNhdGV1cnMgbm9uLXByb2Zlc3Npb25uZWxzXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBkZXMgcHJlc3RhdGlvbnMgcXXigJlpbCBmb3Vybml0IMOgIHNlcyBjbGllbnRzLCBsZVxcbiAgICAgICAgICAgIHByYXRpY2llbiBwcm9mZXNzaW9ubmVsIGRlIGxhIHLDqcOpZHVjYXRpb24gZXQvb3UgZHUgc3BvcnQsIGxldXJcXG4gICAgICAgICAgICBlbnRyZXByaXNlLCBsZXVyIG11dHVlbGxlIG91IGxldXIgc2VydmljZSBkZSBzYW50w6kgYXUgdHJhdmFpbFxcbiAgICAgICAgICAgIChjaS1hcHLDqHMgwqsgbGUgUHJlc2NyaXB0ZXVyIMK7KSB2YWxpZGUgbGEgbWlzZSBlbiByZWxhdGlvbiBhdmVjXFxuICAgICAgICAgICAgbOKAmXV0aWxpc2F0ZXVyIGV0IGdhcmFudGllIHVuIGFjY8OocyDDoCBsYSBQbGF0ZWZvcm1lLiBMZXNcXG4gICAgICAgICAgICBVdGlsaXNhdGV1cnMgc29udCBpbnZpdMOpcyDDoCBzZSBjb25uZWN0ZXIgc3VyIGxhIFBsYXRlZm9ybWUgc29pdFxcbiAgICAgICAgICAgIHBhciBsZSBQcmVzY3JpcHRldXIsIHF1aSBhdXJhIGNvbW11bmlxdcOpIGF1IHByw6lhbGFibGUgw6AgS0lWSUQsXFxuICAgICAgICAgICAgbOKAmWFkcmVzc2UgZS1tYWlsIGRlIGzigJl1dGlsaXNhdGV1ciBzb2l0IHBhciBsZSBmb3JtdWxhaXJlXFxuICAgICAgICAgICAgaW5zY3JpcHRpb24gdXRpbGlzYXRldXIsIHF1aSBsZXVyIHBlcm1ldHRyb250IGVuc3VpdGUgZCfDqXRhYmxpclxcbiAgICAgICAgICAgIHVuZSBjb25uZXhpb24gYXZlYyBsZSBwcmF0aWNpZW4gcHJvZmVzc2lvbm5lbCwgcXVpIHZhbGlkZXJhXFxuICAgICAgICAgICAgY2V0dGUgbWlzZSBlbiBjb250YWN0LlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICDDgCBsYSBzdWl0ZSBkZSBs4oCZaW5zY3JpcHRpb24sIHVuIGUtbWFpbCBkZSBjb25maXJtYXRpb24gZXN0XFxuICAgICAgICAgICAgZW52b3nDqSDDoCBs4oCZVXRpbGlzYXRldXIuIEzigJlVdGlsaXNhdGV1ciBkZXZyYSBhbG9ycyBjbGlxdWVyIHN1ciB1blxcbiAgICAgICAgICAgIGxpZW4gZGUgY2V0IGUtbWFpbCBwb3VyIGTDqWZpbmlyIHNvbiBtb3QgZGUgcGFzc2UgcGVyc29ubmVsLFxcbiAgICAgICAgICAgIGNvbXBsw6l0ZXIgZXQgY29uZmlybWVyIHNvbiBjb21wdGUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExlcyBVdGlsaXNhdGV1cnMgc29udCBkZXMgcGVyc29ubmVzIHBoeXNpcXVlcy4gQ2hhcXVlXFxuICAgICAgICAgICAgVXRpbGlzYXRldXIgZGlzcG9zZSBkZSBzb24gcHJvcHJlIGFjY8Oocy4gSWwgbHVpIGVzdCBpbnRlcmRpdCBkZVxcbiAgICAgICAgICAgIHBlcm1ldHRyZSBhzIAgdW4gdGllcnMgZOKAmXV0aWxpc2VyIHNvbiBjb21wdGUgb3UgZOKAmcOpY2hhbmdlciBzb25cXG4gICAgICAgICAgICBhY2PDqHMgYXZlYyBjZWx1aSBk4oCZdW4gYXV0cmUgdXRpbGlzYXRldXIuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazVcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1XCIsIFtcbiAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAxLjMgSW5zY3JpcHRpb24gYXZlYyBHb29nbGUgZXQgRmFjZWJvb2sgKHV0aWxpc2F0ZXVycyBldFxcbiAgICAgICAgICAgICAgICAgICAgcHJvZmVzc2lvbm5lbHMpXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIE5vdXMgdm91cyBvZmZyb25zIGxhIHBvc3NpYmlsaXTDqSBkZSBjcsOpZXIgdm90cmUgY29tcHRlIEtJVklEIHZpYVxcbiAgICAgICAgICAgIHZvdHJlIGNvbXB0ZSBGYWNlYm9vayBvdSBHb29nbGUsIG91IGRlIHJlbGllciB2b3RyZSBjb21wdGUgS0lWSURcXG4gICAgICAgICAgICDDoCB2b3RyZSBjb21wdGUgRmFjZWJvb2sgb3UgR29vZ2xlLiBWb3VzIHNlcmV6IGVuc3VpdGUgcsOpYWNoZW1pbsOpXFxuICAgICAgICAgICAgdmVycyBGYWNlYm9vayBvdSBHb29nbGUgKG/DuSB2b3VzIGRldmV6IMOqdHJlIGNvbm5lY3TDqSBvdVxcbiAgICAgICAgICAgIGVucmVnaXN0cmVyIHVuIGNvbXB0ZSkgZXQgdm91cyBwb3VycmV6IGFsb3JzIGNvbnN1bHRlciBsYSBsaXN0ZVxcbiAgICAgICAgICAgIGRlcyBkb25uw6llcyBGYWNlYm9vayBvdSBHb29nbGUgdm91cyBjb25jZXJuYW50IGRvbnQgbm91cyBhdm9uc1xcbiAgICAgICAgICAgIGJlc29pbiwgw6Agc2F2b2lyIGxlcyBpbmZvcm1hdGlvbnMgZGUgdm90cmUgcHJvZmlsIHB1YmxpYyB0ZWxsZXNcXG4gICAgICAgICAgICBxdWUgdm90cmUgcHLDqW5vbSwgdm90cmUgbm9tLCB2b3RyZSBzZXhlIGV0IGzigJlhZHJlc3NlIGUtbWFpbFxcbiAgICAgICAgICAgIGFzc29jacOpZSDDoCBjZSBjb21wdGUuIENlcyBpbmZvcm1hdGlvbnMgc29udCBuw6ljZXNzYWlyZXMgcG91ciBkZXNcXG4gICAgICAgICAgICByYWlzb25zIGQnaWRlbnRpZmljYXRpb24gYWZpbiBkZSBjcsOpZXIgcG91ciB2b3VzIHVuIGNvbXB0ZSBLSVZJRFxcbiAgICAgICAgICAgIHPDqWN1cmlzw6kuIFZvdHJlIGNvbXB0ZSBGYWNlYm9vayBvdSBHb29nbGUgZXQgdm90cmUgY29tcHRlIEtJVklEXFxuICAgICAgICAgICAgc2Vyb250IGxpw6lzIGRlIGZhw6dvbiBwZXJtYW5lbnRlIHBhciBs4oCZaW50ZXJtw6lkaWFpcmUgZGUgdm90cmVcXG4gICAgICAgICAgICBhZHJlc3NlIGUtbWFpbC4gQ2VsbGUtY2kgc2VyYSBjb25zZXJ2w6llIHN1ciBub3Mgc2VydmV1cnMgZXQgbm91c1xcbiAgICAgICAgICAgIGzigJl1dGlsaXNlcm9ucywgbGUgY2FzIMOpY2jDqWFudCwgcG91ciB2b3VzIGVudm95ZXIgZGVzXFxuICAgICAgICAgICAgaW5mb3JtYXRpb25zLiBOb3VzIHBvdXZvbnMgw6lnYWxlbWVudCBkw6l0ZXJtaW5lciBzaSB2b3VzIHZvdXNcXG4gICAgICAgICAgICDDqnRlcyBjb25uZWN0w6kgcGFyIGzigJlpbnRlcm3DqWRpYWlyZSBkZSBGYWNlYm9vayBvdSBHb29nbGUuIETDqHMgcXVlXFxuICAgICAgICAgICAgdm91cyB2b3VzIGNvbm5lY3RleiDDoCBGYWNlYm9vayBvdSBHb29nbGUsIHZvdXMgcG91dmV6IGF1c3NpIHZvdXNcXG4gICAgICAgICAgICBjb25uZWN0ZXIgw6AgS0lWSUQuIE5vdXMgbmUgY29tbXVuaXF1ZXJvbnMgYXVjdW5lIGluZm9ybWF0aW9uXFxuICAgICAgICAgICAgdm91cyBjb25jZXJuYW50IMOgIEZhY2Vib29rIG91IMOgIEdvb2dsZSBzYW5zIHZvdHJlIGNvbnNlbnRlbWVudC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgSW1wb3J0YW50IDogTm91cyBu4oCZZW5yZWdpc3Ryb25zIGVuIGF1Y3VuZSBtYW5pw6hyZSB2b3MgZG9ubsOpZXMgZGVcXG4gICAgICAgICAgICBjb25uZXhpb24gw6AgRmFjZWJvb2sgb3UgR29vZ2xlLCBldCBuJ2F2b25zIHBhcyBsYSBwb3NzaWJpbGl0w6kgZGVcXG4gICAgICAgICAgICBwdWJsaWVyIHF1b2kgcXVlIGNlIHNvaXQgc3VyIHZvdHJlIHByb2ZpbCBGYWNlYm9vayBvdSBHb29nbGVcXG4gICAgICAgICAgICBzYW5zIGF2b2lyIG9idGVudSB2b3RyZSBjb25zZW50ZW1lbnQgZXhwcsOocy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgVm91cyBwb3V2ZXogdm91cyBpbmZvcm1lciBzdXIgbGEgZmHDp29uIGRvbnQgRmFjZWJvb2sgZ8OocmUgbGVzXFxuICAgICAgICAgICAgcGFyYW3DqHRyZXMgZGUgY29uZmlkZW50aWFsaXTDqSBlbiBjb25zdWx0YW50IGxhXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BvbGljeS5waHBcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcG9saWN5LnBocFwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ1XCIsIFtfdm0uX3YoXCJwb2xpdGlxdWUgZGUgY29uZmlkZW50aWFsaXTDqVwiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgZXQgbGVzXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2xlZ2FsL3Rlcm1zXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2xlZ2FsL3Rlcm1zXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcInVcIiwgW192bS5fdihcImNvbmRpdGlvbnMgZCd1dGlsaXNhdGlvblwiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBkZSBGYWNlYm9vayA7IHZvdXMgeSB0cm91dmVyZXogw6lnYWxlbWVudCBsZXMgY29uZGl0aW9ucyBxdWlcXG4gICAgICAgICAgICBzJ2FwcGxpcXVlbnQgw6AgbGEgcG9zc2liaWxpdMOpIG1lbnRpb25uw6llIHByw6ljw6lkZW1tZW50IGRlIHNlXFxuICAgICAgICAgICAgY29ubmVjdGVyIGV0IGRlIHMnaW5zY3JpcmUgw6AgS0lWSUQuIFZvdXMgcG91dmV6IHZvdXMgaW5mb3JtZXJcXG4gICAgICAgICAgICBzdXIgbGEgZmHDp29uIGRvbnQgR29vZ2xlIGfDqHJlIGxlcyBwYXJhbcOodHJlcyBkZSBjb25maWRlbnRpYWxpdMOpXFxuICAgICAgICAgICAgZW4gY29uc3VsdGFudCBsYVxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS9wcml2YWN5XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9wb2xpY2llcy5nb29nbGUuY29tL3ByaXZhY3lcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwidVwiLCBbX3ZtLl92KFwicG9saXRpcXVlIGRlIGNvbmZpZGVudGlhbGl0w6lcIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIGV0IGxlc1wiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS90ZXJtc1wiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS90ZXJtc1wiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ1XCIsIFtfdm0uX3YoXCJjb25kaXRpb25zIGQndXRpbGlzYXRpb25cIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgZGUgR29vZ2xlIDsgdm91cyB5IHRyb3V2ZXJleiDDqWdhbGVtZW50IGxlcyBjb25kaXRpb25zIHF1aVxcbiAgICAgICAgICAgIHPigJlhcHBsaXF1ZW50IMOgIGxhIHBvc3NpYmlsaXTDqSBtZW50aW9ubsOpZSBwcsOpY8OpZGVtbWVudCBkZSBzZVxcbiAgICAgICAgICAgIGNvbm5lY3RlciBldCBkZSBzJ2luc2NyaXJlIMOgIEtJVklEXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcms2XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIyLiBEcm9pdHMgZGUgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGVcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTGEgcGxhdGVmb3JtZSBlc3QgZXhwbG9pdMOpZSBwYXIgbGEgc29jacOpdMOpIEtJVklEIChjaS1hcHLDqHMgwqtcXG4gICAgICAgICAgICBLSVZJRCDCuykuIEtJVklEIGVzdCBsZSB0aXR1bGFpcmUgZXQgZGlzcG9zZSBkZXMgZHJvaXRzIHJlbGF0aWZzXFxuICAgICAgICAgICAgYXV4IGNvbXBvc2FudHMgZXQgY29udGVudXMgZGUgbGEgUGxhdGVmb3JtZSBwcm90w6lnw6lzIHBhciBkZXNcXG4gICAgICAgICAgICBkcm9pdHMgZGUgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUuIFRvdXRlIGJhc2UgZGUgZG9ubsOpZXMsIHRvdXRcXG4gICAgICAgICAgICBjb250ZW51LCB0b3V0IGNvbXBvc2FudCwgdG91dGUgcHLDqXNlbnRhdGlvbiBldCB0b3V0IGF1dHJlXFxuICAgICAgICAgICAgw6lsw6ltZW50ICh0ZXh0ZXMsIHNvbnMsIGdyYXBoaXNtZSwgdmlzdWVscywgcGhvdG9ncmFwaGllcyxcXG4gICAgICAgICAgICB2aWTDqW9zLCBiYXNlcyBkZSBkb25uw6llcywgZXRjLiksIG1hcnF1ZSwgbG9nbyBldCBub20gZGUgZG9tYWluZSxcXG4gICAgICAgICAgICBhcHBhcmFpc3NhbnQgc3VyIGxhIFBsYXRlZm9ybWUsIHNvbnQgbGEgcHJvcHJpw6l0w6kgZGUgS0lWSUQgZXQgbGVcXG4gICAgICAgICAgICBjYXMgw6ljaMOpYW50IGRlIHNlcyBwYXJ0ZW5haXJlcywgZXQgZXN0IHByb3TDqWfDqSBwYXIgbGVzIGxvaXMgZW5cXG4gICAgICAgICAgICB2aWd1ZXVyIHN1ciBsYSBwcm9wcmnDqXTDqSBpbnRlbGxlY3R1ZWxsZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgVG91dGUgcmVwcm9kdWN0aW9uIGV0IHRvdXRlIGRpZmZ1c2lvbiBkZSBjZXMgw6lsw6ltZW50cywgc2Fuc1xcbiAgICAgICAgICAgIGF1dG9yaXNhdGlvbiDDqWNyaXRlIHByw6lhbGFibGUgZGUgS0lWSUQsIGV4cG9zZW50IGxlc1xcbiAgICAgICAgICAgIGNvbnRyZXZlbmFudHMgw6AgZGVzIHBvdXJzdWl0ZXMganVkaWNpYWlyZXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcms3XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIzLiBMaWVucyBoeXBlcnRleHRlc1wiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBLSVZJRCBu4oCZZXhlcmNlIGF1Y3VuIGNvbnRyw7RsZSBxdWFudCBhdSBjb250ZW51IGRlcyBzaXRlcyB0aWVycy5cXG4gICAgICAgICAgICBM4oCZZXhpc3RlbmNlIGTigJl1biBsaWVuIGh5cGVydGV4dGUgZW50cmUgbGEgUGxhdGVmb3JtZSBldCB1biBzaXRlXFxuICAgICAgICAgICAgdGllcnMgbmUgc2lnbmlmaWUgcGFzIHF1ZSBLSVZJRCBhc3N1bWUgdW5lIHF1ZWxjb25xdWUgZ2FyYW50aWVcXG4gICAgICAgICAgICBvdSByZXNwb25zYWJpbGl0w6kgcXVhbnQgw6Agc29uIGNvbnRlbnUgb3UgbOKAmXVzYWdlIHF1aSBwZXV0IGVuXFxuICAgICAgICAgICAgw6p0cmUgZmFpdC4gS0lWSUQgbmUgc2F1cmFpdCDDqnRyZSByZXNwb25zYWJsZSBvdSBzb2xpZGFpcmVtZW50XFxuICAgICAgICAgICAgdGVudSBkdSBjb250ZW51IMOpZGl0w6kgZXQvb3UgaMOpYmVyZ8OpIHN1ciB1biBzaXRlIHRpZXJzIHZlcnNcXG4gICAgICAgICAgICBsZXF1ZWwgbGEgUGxhdGVmb3JtZSByZWRpcmlnZSBkdSBmYWl0IGTigJl1biBsaWVuIGh5cGVydGV4dGUgb3VcXG4gICAgICAgICAgICBjb250ZW51IMOpZGl0w6kgZXQvb3UgaMOpYmVyZ8OpIHN1ciB1biBzaXRlIHRpZXJzIMOpdGFibGlzc2FudCB1blxcbiAgICAgICAgICAgIGxpZW4gdmVycyBsYSBQbGF0ZWZvcm1lLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrOFwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiNC4gUHJvdGVjdGlvbiBkZXMgRG9ubsOpZXMgUGVyc29ubmVsbGVzXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFBvdXIgdG91dGUgaW5mb3JtYXRpb24gcmVsYXRpdmUgw6AgbGEgcHJvdGVjdGlvbiBkZXMgZG9ubsOpZXNcXG4gICAgICAgICAgICBwZXJzb25uZWxsZXMsIGF1eCBjb29raWVzIHV0aWxpc8OpcyBwYXIgbGEgUGxhdGVmb3JtZSBldCBhdXhcXG4gICAgICAgICAgICBkcm9pdHMgZGUgbOKAmVV0aWxpc2F0ZXVyIHF1YW50IMOgIGzigJl1c2FnZSBkZSBzZXMgZG9ubsOpZXNcXG4gICAgICAgICAgICBwZXJzb25uZWxsZXMsIGzigJlVdGlsaXNhdGV1ciBlc3QgaW52aXTDqSDDoCBzZSByw6lmw6lyZXIgw6AgbGFcXG4gICAgICAgICAgICDCq1wiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiwqBQb2xpdGlxdWUgZGUgQ29uZmlkZW50aWFsaXTDqSBkZXMgRG9ubsOpZXNcXG4gICAgICAgICAgICAgICAgUGVyc29ubmVsbGVzXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCLCoMK7LlxcbiAgICAgICAgXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrOVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiNS4gUmVzcG9uc2FiaWxpdMOpXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazEwXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcImEuIFJlc3BvbnNhYmlsaXTDqSBLSVZJRFwiKV0pXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExhIFBsYXRlZm9ybWUgZXQgdG91dCBkb2N1bWVudCBvdSBjb250ZW51IGFjY2Vzc2libGUgc3VyIGxhXFxuICAgICAgICAgICAgUGxhdGVmb3JtZSBzb250IGZvdXJuaXMgwqsgZW4gbOKAmcOpdGF0IMK7LCDCqyB0ZWxzIHF1ZWxzIMK7LCDCqyBzaVxcbiAgICAgICAgICAgIGRpc3BvbmlibGVzIMK7LiBPdXRyZSBsZXMgZ2FyYW50aWVzIGzDqWdhbGVzIGF1eHF1ZWxsZXMgaWwgbmUgcGV1dFxcbiAgICAgICAgICAgIMOqdHJlIGTDqXJvZ8OpLCBLSVZJRCBuZSBtZXQgZW4gxZN1dnJlIGF1Y3VuZSBnYXJhbnRpZSwgZXhwcmVzc2Ugb3VcXG4gICAgICAgICAgICBpbXBsaWNpdGUgZOKAmWF1Y3VuZSBzb3J0ZSBub3RhbW1lbnQgZW4gdGVybWVzIGTigJlhZMOpcXVhdGlvbiBkZSBsYVxcbiAgICAgICAgICAgIFBsYXRlZm9ybWUgw6AgdW4gdXNhZ2UgcGFydGljdWxpZXIsIGRlIGRpc3BvbmliaWxpdMOpIGRlIGxhXFxuICAgICAgICAgICAgUGxhdGVmb3JtZSwgZGUgY29udGludWl0w6kgZGUgbOKAmWFjY2Vzc2liaWxpdMOpIMOgIGxhIFBsYXRlZm9ybWVcXG4gICAgICAgICAgICAoY2V0dGUgZGVybmnDqHJlIHBvdXZhbnQgY29ubmHDrnRyZSBkZXMgaW50ZXJydXB0aW9ucyBkZSBxdWVscXVlXFxuICAgICAgICAgICAgZm9ybWUgZXQgZGUgcXVlbHF1ZSBkdXLDqWUpLCBkZSBzw6ljdXJpdMOpIGRlIGxhIFBsYXRlZm9ybWUsIGR1XFxuICAgICAgICAgICAgZmFpdCBxdWUgY2VzIGRlcm5pZXJzIHNvaWVudCBleGVtcHRzIGTigJllcnJldXJzLCBk4oCZYW5vbWFsaWVzLFxcbiAgICAgICAgICAgIGTigJlpbXByw6ljaXNpb25zLCBkZSBwYW5uZXMsIGRlIGJ1Z3MgbmkgcXVlIGNldXgtY2kgcG91cnJvbnQgw6p0cmVcXG4gICAgICAgICAgICBjb3JyaWfDqXMuIExlcyBwcsOpc2VudGVzIGV4b27DqXJhdGlvbnMgcG91dmFudCDDqnRyZSBjb21wbMOpdMOpZXMgcGFyXFxuICAgICAgICAgICAgZGVzIGRpc3Bvc2l0aW9ucyBwbHVzIHNww6ljaWZpcXVlcyBhdSBzZWluIGRlcyBwcsOpc2VudGVzXFxuICAgICAgICAgICAgQ29uZGl0aW9ucyBk4oCZdXRpbGlzYXRpb24uXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFNhdWYgZGlzcG9zaXRpb24gbMOpZ2FsZSBjb250cmFpcmUgZXQgaW1ww6lyYXRpdmUsIGxhXFxuICAgICAgICAgICAgcmVzcG9uc2FiaWxpdMOpIEtJVklEIHBvdXIgdG91dCBkb21tYWdlIGRpcmVjdGVtZW50IG91XFxuICAgICAgICAgICAgaW5kaXJlY3RlbWVudCBsacOpIMOgIGzigJl1dGlsaXNhdGlvbiBkZSBsYSBQbGF0ZWZvcm1lIG5lIHNhdXJhaXRcXG4gICAgICAgICAgICDDqnRyZSBlbmdhZ8OpZSBlbiByYWlzb24gZGUgZG9tbWFnZXMgZGlyZWN0cyBvdSBpbmRpcmVjdHMsXFxuICAgICAgICAgICAgbWF0w6lyaWVscyBvdSBpbW1hdMOpcmllbHMsIG5vdGFtbWVudCBwZXJ0ZSBkZSBwcm9maXQsIHBlcnRlIGRlXFxuICAgICAgICAgICAgY2hhbmNlLCBwZXJ0ZSBkZSBjbGllbnTDqGxlLCBwZXJ0ZSBkZSBkb25uw6llcywgcGVydGUgZOKAmWltYWdlXFxuICAgICAgICAgICAgZXQvb3UgZG9tbWFnZXMgaW1tYXTDqXJpZWxzIHF1ZSB2b3VzIHN1Ymlzc2V6LiBLSVZJRCBuZSBwb3VycmFcXG4gICAgICAgICAgICBub3RhbW1lbnQsIGVuIGF1Y3VuIGNhcywgdm9pciBzYSByZXNwb25zYWJpbGl0w6kgZW5nYWfDqWUgZGFucyBsZVxcbiAgICAgICAgICAgIGNhcyBvw7kgdW4gVXRpbGlzYXRldXIgc2UgdmVycmFpdCBhdHRyaWJ1ZXIgcGFyIGxlIFByZXNjcmlwdGV1clxcbiAgICAgICAgICAgIHByYXRpY2llbiBkZXMgZXhlcmNpY2VzIG5vbiBhZGFwdMOpcyDDoCBzZXMgY2FwYWNpdMOpcyBwaHlzaXF1ZXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxMVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIGIuIFJlc3BvbnNhYmlsaXTDqSBkZXMgdXRpbGlzYXRldXJzIHByYXRpY2llbnNcXG4gICAgICAgICAgICAgICAgICAgIHByb2Zlc3Npb25uZWxzXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEVuIHRhbnQgcXVlIHByb2Zlc3Npb25uZWwgZGUgbGEgcsOpw6lkdWNhdGlvbiBldC9vdSBkdSBzcG9ydCxcXG4gICAgICAgICAgICBs4oCZVXRpbGlzYXRldXIgcHJvZmVzc2lvbm5lbCBlc3QgZW50acOocmVtZW50IHJlc3BvbnNhYmxlIGRlIHRvdXRlXFxuICAgICAgICAgICAgY3LDqWF0aW9uLCB0cmFuc21pc3Npb24gb3UgcHVibGljYXRpb24gZGUgQ29udGVudSBhdSBtb3llbiBkZSBsYVxcbiAgICAgICAgICAgIFBsYXRlZm9ybWUgZXQgZW4gcGFydGljdWxpZXIgZGUgbGEgZMOpZmluaXRpb24gZGVzIGV4ZXJjaWNlcyBkZVxcbiAgICAgICAgICAgIHLDqcOpZHVjYXRpb24gcHJvcG9zw6lzIGF1eCBVdGlsaXNhdGV1cnMgbm9uLXByb2Zlc3Npb25uZWwgc3VyIGxhXFxuICAgICAgICAgICAgUGxhdGVmb3JtZSwgZW4gZm9uY3Rpb24gZGUgbGV1cnMgYmVzb2lucyBldCBkZSBsZXVycyBjYXBhY2l0w6lzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBM4oCZVXRpbGlzYXRldXIgcHJvZmVzc2lvbm5lbCBhc3N1bWUgbOKAmWVudGnDqHJlIHJlc3BvbnNhYmlsaXTDqSDMgVxcbiAgICAgICAgICAgIHF1YW50IGF1eCBjb25zw6lxdWVuY2VzIGRpcmVjdGVzIGV0L291IGluZGlyZWN0ZXMgZGVcXG4gICAgICAgICAgICBs4oCZdXRpbGlzYXRpb24gZGUgUGxhdGVmb3JtZSBldCBub3RhbW1lbnQgZGUgbGEgY3LDqWF0aW9uIGRlXFxuICAgICAgICAgICAgQ29udGVudXMuIExlcyBleGVtcGxlcyBkZSBDb250ZW51cyBldCDDqXZlbnR1ZWxzIGNvbnNlaWxzIGRlXFxuICAgICAgICAgICAgS0lWSUQgb3UgZ8OpbsOpcsOpcyBhdXRvbWF0aXF1ZW1lbnQgcGFyIGxhIFBsYXRlZm9ybWUgZG9pdmVudCDDqnRyZVxcbiAgICAgICAgICAgIGNvbnNpZMOpcsOpcyB1bmlxdWVtZW50IGNvbW1lIGRlcyBvcGluaW9ucywgbOKAmVV0aWxpc2F0ZXVyXFxuICAgICAgICAgICAgcHJvZmVzc2lvbm5lbCByZXN0YW50IHNldWwgcmVzcG9uc2FibGUgZGUgbGEgY3LDqWF0aW9uIGRlc1xcbiAgICAgICAgICAgIENvbnRlbnVzIMOgIGRlc3RpbmF0aW9uIGRlcyBVdGlsaXNhdGV1cnMgbm9uLXByb2Zlc3Npb25uZWxzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBM4oCZVXRpbGlzYXRldXIgcHJvZmVzc2lvbm5lbCBlc3QgdGVudSBkZSBwcmVuZHJlIHRvdXRlcyBsZXNcXG4gICAgICAgICAgICBtZXN1cmVzIGFmaW4gZGUgc+KAmWFzc3VyZXIgcXVlIGxlcyBDb250ZW51cyBjcsOpw6lzIHN1ciBsYVxcbiAgICAgICAgICAgIFBsYXRlZm9ybWUgcG91ciBsZXMgVXRpbGlzYXRldXJzIG5vbi1wcm9mZXNzaW9ubmVscyBzb250XFxuICAgICAgICAgICAgY29uZm9ybWVzIMOgIGzigJnDqXRhdCBkZXMgY29ubmFpc3NhbmNlcyBlbiBtYXRpw6hyZSBkZSByw6nDqWR1Y2F0aW9uXFxuICAgICAgICAgICAgcGh5c2lxdWUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxMlwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiNi4gRGlzcG9uaWJpbGl0w6kgZGUgbGEgUGxhdGVmb3JtZVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBBbG9ycyBtw6ptZSBxdWUgS0lWSUQgYSBlZmZlY3R1w6kgdG91dGVzIGxlcyBkw6ltYXJjaGVzIG7DqWNlc3NhaXJlc1xcbiAgICAgICAgICAgIHBvdXIgc+KAmWFzc3VyZXIgZGUgbGEgZmlhYmlsaXTDqSBkZXMgaW5mb3JtYXRpb25zLCBzZXJ2aWNlcyxcXG4gICAgICAgICAgICBsb2dpY2llbHMgb3UgcHJvZHVpdHMgY29udGVudXMgc3VyIGxhIFBsYXRlZm9ybWUsIGlsIG5lIHNhdXJhaXRcXG4gICAgICAgICAgICDDqnRyZSB0ZW51IHBvdXIgcmVzcG9uc2FibGUgZOKAmWVycmV1cnMsIGTigJlvbWlzc2lvbnMsIGRlIHZpcnVzIG91XFxuICAgICAgICAgICAgZGVzIHLDqXN1bHRhdHMgcXVpIHBvdXJyYWllbnQgw6p0cmUgb2J0ZW51cyBwYXIgdW4gbWF1dmFpcyB1c2FnZVxcbiAgICAgICAgICAgIGRlIGNldXgtY2kuIEtJVklEIG7igJllc3QgZW4gZWZmZXQgdGVudSBxdWUgZOKAmXVuZSBzaW1wbGVcXG4gICAgICAgICAgICBvYmxpZ2F0aW9uIGRlIG1veWVucy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTOKAmVV0aWxpc2F0ZXVyIGTDqWNsYXJlIGV0IGdhcmFudGl0IHF14oCZaWwgY29ubmHDrnQgbGVzXFxuICAgICAgICAgICAgY2FyYWN0w6lyaXN0aXF1ZXMgZXQgbGVzIGNvbnRyYWludGVzIGTigJlJbnRlcm5ldCBldCBub3RhbW1lbnQgcXVlXFxuICAgICAgICAgICAgbGVzIHRyYW5zbWlzc2lvbnMgZGUgZG9ubsOpZXMgZXQgZOKAmWluZm9ybWF0aW9ucyBzdXIgSW50ZXJuZXQgbmVcXG4gICAgICAgICAgICBiw6luw6lmaWNpZW50IHF1ZSBk4oCZdW5lIGZpYWJpbGl0w6kgdGVjaG5pcXVlIHJlbGF0aXZlLCBjZWxsZXMtY2lcXG4gICAgICAgICAgICBjaXJjdWxhbnQgc3VyIGRlcyByw6lzZWF1eCBow6l0w6lyb2fDqG5lcyBhdXggY2FyYWN0w6lyaXN0aXF1ZXMgZXRcXG4gICAgICAgICAgICBjYXBhY2l0w6lzIHRlY2huaXF1ZXMgZGl2ZXJzZXMsIHF1aSBwZXJ0dXJiZW50IGzigJlhY2PDqHMgb3UgbGVcXG4gICAgICAgICAgICByZW5kZW50IGltcG9zc2libGUgw6AgY2VydGFpbmVzIHDDqXJpb2Rlcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgS0lWSUQgc+KAmWVmZm9yY2UgZGUgbWFpbnRlbmlyIGFjY2Vzc2libGUgbGEgUGxhdGVmb3JtZSA3IGpvdXJzXFxuICAgICAgICAgICAgc3VyIDcgZXQgMjQgaGV1cmVzIHN1ciAyNCwgbWFpcyBu4oCZZXN0IHRlbnUgw6AgYXVjdW5lIG9ibGlnYXRpb25cXG4gICAgICAgICAgICBk4oCZeSBwYXJ2ZW5pciBldCBuZSBmb3Vybml0IHBhciBjb25zw6lxdWVudCBhdWN1bmUgZ2FyYW50aWUgZGVcXG4gICAgICAgICAgICBkaXNwb25pYmlsaXTDqSBvdSBk4oCZYWNjZXNzaWJpbGl0w6kgcGVybWFuZW50ZSBvdSBkZSBwZXJmb3JtYW5jZS5cXG4gICAgICAgICAgICBLSVZJRCBldC9vdSBzZXMgZm91cm5pc3NldXJzIHBldXQvcGV1dmVudCDDqWdhbGVtZW50IGVuXFxuICAgICAgICAgICAgaW50ZXJyb21wcmUgbOKAmWFjY8OocyBub3RhbW1lbnQgcG91ciBkZXMgcmFpc29ucyBkZSBtYWludGVuYW5jZSBldFxcbiAgICAgICAgICAgIGRlIG1pc2Ugw6Agbml2ZWF1IGRlIGxhIFBsYXRlZm9ybWUgb3UgZGUgc29uIGluZnJhc3RydWN0dXJlXFxuICAgICAgICAgICAgZOKAmWjDqWJlcmdlbWVudCBvdSB0b3V0ZSBhdXRyZSByYWlzb24gbMOpZ2l0aW1lIGRlIEtJVklELiBLSVZJRFxcbiAgICAgICAgICAgIG7igJllc3QgZW4gYXVjdW4gY2FzIHJlc3BvbnNhYmxlIGRlIGNlcyBpbnRlcnJ1cHRpb25zIGV0IGRlc1xcbiAgICAgICAgICAgIGNvbnPDqXF1ZW5jZXMgcXVpIHBldXZlbnQgZW4gZMOpY291bGVyIHBvdXIgbOKAmVV0aWxpc2F0ZXVyIG91IHRvdXNcXG4gICAgICAgICAgICB0aWVycy4gSWwgZXN0IHJhcHBlbMOpIHBhciBhaWxsZXVycyBxdWUgS0lWSUQgcGV1dCBtZXR0cmUgZmluIG91XFxuICAgICAgICAgICAgbW9kaWZpZXIgbGVzIGNhcmFjdMOpcmlzdGlxdWVzIGRlIGxhIFBsYXRlZm9ybWUgw6AgdG91dCBtb21lbnQgZXRcXG4gICAgICAgICAgICBjZWxhIHNhbnMgcHLDqWF2aXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxM1wiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiNy4gU8OpY3VyaXTDqVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBLSVZJRCBz4oCZZWZmb3JjZSBk4oCZYXNzdXJlciBsYSBzw6ljdXJpdMOpIGRlIGxhIFBsYXRlZm9ybWVcXG4gICAgICAgICAgICBjb25mb3Jtw6ltZW50IGF1eCByw6hnbGVzIGRlIGzigJlhcnQuIEzigJlVdGlsaXNhdGV1ciBlc3QgdG91dGVmb2lzXFxuICAgICAgICAgICAgaW5mb3Jtw6kgZGVzIHJpc3F1ZXMgaW5ow6lyZW50cyBhdXggcsOpc2VhdXggZGUgY29tbXVuaWNhdGlvbnNcXG4gICAgICAgICAgICDDqWxlY3Ryb25pcXVlcyBldCBub3RhbW1lbnQgZGVzIHJpc3F1ZXMgbGnDqXMgw6AgbOKAmWFjaGVtaW5lbWVudCBkZVxcbiAgICAgICAgICAgIGRvbm7DqWVzIHN1ciBpbnRlcm5ldC4gUGx1cyBnw6luw6lyYWxlbWVudCwgaWwgaW5jb21iZSDDoFxcbiAgICAgICAgICAgIGzigJlVdGlsaXNhdGV1ciBkZSBkw6lwbG95ZXIgdG91dGVzIGxlcyBwcm90ZWN0aW9ucyB1c3VlbGxlc1xcbiAgICAgICAgICAgIChwYXJlLWZldSwgYW50aXZpcnVzLCBldGMuKSBsacOpZXMgw6AgbGEgbmF2aWdhdGlvbiBpbnRlcm5ldC4gRW5cXG4gICAgICAgICAgICBjb25zw6lxdWVuY2UsIEtJVklEIG5lIGZvdXJuaXQgYXVjdW5lIGdhcmFudGllIGVuIGxhIG1hdGnDqHJlLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBFbiB0b3V0ZSBoeXBvdGjDqHNlLCBs4oCZVXRpbGlzYXRldXIgc+KAmWFic3RpZW50IHN0cmljdGVtZW50IGRlXFxuICAgICAgICAgICAgdG91dGUgdGVudGF0aXZlIGTigJlpbmfDqW5pZXJpZSBpbnZlcnNlIG91IGRlIGTDqWNvbXBpbGF0aW9uIGRlIHRvdXRcXG4gICAgICAgICAgICBvdSBwYXJ0aWUgZGUgbGEgUGxhdGVmb3JtZSwgZGUgdG91dGUgaW50cnVzaW9uIG91IHRlbnRhdGl2ZVxcbiAgICAgICAgICAgIGTigJlpbnRydXNpb24gZnJhdWR1bGV1c2UgYXUgc2VpbiBkdSBzeXN0w6htZSBk4oCZaW5mb3JtYXRpb25zXFxuICAgICAgICAgICAgaMOpYmVyZ2VhbnQgbGEgUGxhdGVmb3JtZSBhaW5zaSBxdeKAmWF1eCBsb2dpY2llbHMgcGVybWV0dGFudCBzb25cXG4gICAgICAgICAgICBmb25jdGlvbm5lbWVudCwgZGUgdG91dCBhYnVzIGRlIGNvbmZpYW5jZSwgc291c3RyYWN0aW9uLFxcbiAgICAgICAgICAgIHN1cHByZXNzaW9uLCBkw6l0b3VybmVtZW50IG91IG1vZGlmaWNhdGlvbiBub24gYXV0b3Jpc8OpZSBkZXNcXG4gICAgICAgICAgICBkb25uw6llcyB0ZWNobmlxdWVzIGRlIGxhIFBsYXRlZm9ybWUsIHNvdXMgcGVpbmUgZGUgcG91cnN1aXRlcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazE0XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCI4LiBNYW5xdWVtZW50cyBkZSBs4oCZVXRpbGlzYXRldXJcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgVG91dCBtYW5xdWVtZW50IGRlIGzigJlVdGlsaXNhdGV1ciBhdXggcHLDqXNlbnRlcyBDb25kaXRpb25zXFxuICAgICAgICAgICAgZOKAmXV0aWxpc2F0aW9uIGVzdCBzdXNjZXB0aWJsZSBk4oCZZW50cmFpbmVyIHVuZSBzdXNwZW5zaW9uIG91IHVuZVxcbiAgICAgICAgICAgIHN1cHByZXNzaW9uIGRlIHNlcyBhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSwgZXQgZOKAmWV4cG9zZXIgbGUocylcXG4gICAgICAgICAgICBjb250cmV2ZW5hbnQocykgw6AgZGVzIHBvdXJzdWl0ZXMganVkaWNpYWlyZXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxNVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiOS4gTW9kaWZpY2F0aW9uIGRlcyBDb25kaXRpb25zIGTigJl1dGlsaXNhdGlvblwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBUb3V0IGNoYW5nZW1lbnQgcXVlIG5vdXMgYXBwb3J0ZXJvbnMgw6AgbOKAmWF2ZW5pciBhdXggcHLDqXNlbnRlc1xcbiAgICAgICAgICAgIENvbmRpdGlvbnMgZOKAmXV0aWxpc2F0aW9uIHNlcmEgcHVibGnDqSBzdXIgY2V0dGUgcGFnZS5cXG4gICAgICAgICAgICBMJ3V0aWxpc2F0ZXVyIHJlY29ubmHDrnQgZXQgYWNjZXB0ZSBhcHByb3V2ZXIgdGFjaXRlbWVudCB0b3V0XFxuICAgICAgICAgICAgY2hhbmdlbWVudCBkZXMgcHLDqXNlbnRlcyBDb25kaXRpb25zLiBLSVZJRCBpbmZvcm1lcmFcXG4gICAgICAgICAgICBs4oCZVXRpbGlzYXRldXIgcGFyIGVtYWlsIGR1IGNoYW5nZW1lbnQgZGVzIHByw6lzZW50ZXMgQ29uZGl0aW9ucy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazE2XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIxMC4gTG9pIGFwcGxpY2FibGVcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgU2F1ZiBkaXNwb3NpdGlvbiBsw6lnYWxlIGNvbnRyYWlyZSBldCBpbXDDqXJhdGl2ZSwgdG91dGVcXG4gICAgICAgICAgICBkaWZmaWN1bHTDqSwgcsOpY2xhbWF0aW9uIG91IGxpdGlnZSBwcm92ZW5hbnQgb3UgbGnDqShlKSBhdXhcXG4gICAgICAgICAgICBwcsOpc2VudGVzIENvbmRpdGlvbnMgZOKAmXV0aWxpc2F0aW9uIHNlcmEgcsOpZ2koZSkgc2Vsb24gbGEgbG9pXFxuICAgICAgICAgICAgZnJhbsOnYWlzZS4gRW4gY2FzIGRlIGxpdGlnZSwgbGVzIHRyaWJ1bmF1eCBmcmFuw6dhaXMgc2Vyb250IHNldWxzXFxuICAgICAgICAgICAgY29tcMOpdGVudHMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2tpdmlkXCIgfSwgW1xuICAgICAgICBfYyhcImgxXCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiQ29uZGl0aW9ucyBnw6luw6lyYWxlcyBkZSB2ZW50ZVwiKV0pXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIxLiBPYmpldFwiKV0pXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExlcyBwcsOpc2VudGVzIGNvbmRpdGlvbnMgZ8OpbsOpcmFsZXMgZGUgdmVudGUgKGNpLWFwcsOocyDCqyBDR1YgwrspXFxuICAgICAgICAgICAgb250IHBvdXIgb2JqZXQgZGUgZMOpZmluaXIgbGVzIG1vZGFsaXTDqXMgc2Vsb24gbGVzcXVlbGxlcyBLaXZpZFxcbiAgICAgICAgICAgIGZvdXJuaXQgYXUgQ2xpZW50IHVuIGFjY8OocyDDoCBzYSBQbGF0ZWZvcm1lIGRlIHByw6l2ZW50aW9uIGV0IGRlXFxuICAgICAgICAgICAgcsOpw6lkdWNhdGlvbiBkZXMgYmxlc3N1cmVzIHBoeXNpcXVlcy4gRW4gY2xpcXVhbnQgc3VyIMKrIErigJlhY2NlcHRlXFxuICAgICAgICAgICAgbGVzIHByw6lzZW50ZXMgY29uZGl0aW9ucyBnw6luw6lyYWxlcyBkZSB2ZW50ZSDCuywgbGUgQ2xpZW50XFxuICAgICAgICAgICAgcmVjb25uYcOudCBhdm9pciBwcmlzIGNvbm5haXNzYW5jZSBkZXMgQ0dWIGV0IGxlcyBhY2NlcHRlIHNhbnNcXG4gICAgICAgICAgICByw6lzZXJ2ZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazFcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjIuIETDqWZpbml0aW9uc1wiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIsKrIEtpdmlkIMK7XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiBzaWduaWZpZSBLaXZpZCwgU0FTIGF1XFxuICAgICAgICAgICAgICAgICAgICBjYXBpdGFsIGRlIDEuMDAw4oKsLCBpbW1hdHJpY3Vsw6llIGF1IFJDUyBkZSBMeW9uIE3DqXRyb3BvbGVcXG4gICAgICAgICAgICAgICAgICAgIHNvdXMgbGUgbnVtw6lybyBkb21pY2lsacOpZSA4NCBSdWUgQ2hldnJldWwsIDY5MDA3IExZT04gO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCLCqyBMZSBjbGllbnQgwrtcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiIGTDqXNpZ25lIGxlc1xcbiAgICAgICAgICAgICAgICAgICAgcHJvZmVzc2lvbm5lbHMgZGUgbGEgcsOpw6lkdWNhdGlvbiBvdS9ldCBkdSBzcG9ydCA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIsKrIENvbnRlbnUocykgwrtcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiIGTDqXNpZ25lIGzigJllbnNlbWJsZSBkZXNcXG4gICAgICAgICAgICAgICAgICAgIMOpbMOpbWVudHMgc291cyBxdWVscXVlIGZvcm1lIHF1ZSBjZSBzb2l0LCBkaXNwb25pYmxlcyBzdXJcXG4gICAgICAgICAgICAgICAgICAgIGxlIFNpdGUgZXQgbm90YW1tZW50IGxlcyBzw6lyaWVzIGTigJlleGVyY2ljZXMgZGVcXG4gICAgICAgICAgICAgICAgICAgIHLDqcOpZHVjYXRpb24gcsOpYWxpc8OpZXMgcGFyIGxlIENsaWVudCDDoCBwYXJ0aXIgZGUgbGFcXG4gICAgICAgICAgICAgICAgICAgIGJpYmxpb3Row6hxdWUgZGUgdmlkw6lvcyBwcm9wb3PDqWVzIHBhciBLaXZpZCBzdXIgbGFcXG4gICAgICAgICAgICAgICAgICAgIFBsYXRlZm9ybWUuIExlIENvbnRlbnUgcGV1dCDDqnRyZSBkw6lmaW5pIHBhciBsZSBDbGllbnRcXG4gICAgICAgICAgICAgICAgICAgIHBvdXIgY2hhY3VuIGRlcyBVdGlsaXNhdGV1cnMgZW4gZm9uY3Rpb24gZGUgc2VzIGJlc29pbnNcXG4gICAgICAgICAgICAgICAgICAgIGV0IGRlIHNlcyBjYXBhY2l0w6lzIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiwqsgQ29udHJhdCDCu1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCIgZMOpc2lnbmUgbOKAmWVuc2VtYmxlIGRlc1xcbiAgICAgICAgICAgICAgICAgICAgc3RpcHVsYXRpb25zIMOpbm9uY8OpZXMgZGFucyBsZXMgcHLDqXNlbnRlcyBDb25kaXRpb25zXFxuICAgICAgICAgICAgICAgICAgICBHw6luw6lyYWxlcyBkZSB2ZW50ZSAob3UgwqsgQ0dWIMK7KSwgw6l0YW50IHByw6ljaXPDqSBxdWUgbGVcXG4gICAgICAgICAgICAgICAgICAgIHByw6lhbWJ1bGUgZXQgbGVzIGFubmV4ZXMgZW4gZm9udCBwYXJ0aWUgaW50w6lncmFudGUuIExlc1xcbiAgICAgICAgICAgICAgICAgICAgUGFydGllcyByZWNvbm5haXNzZW50IHF1ZSBsZSBDb250cmF0IGVzdFxcbiAgICAgICAgICAgICAgICAgICAgc3luYWxsYWdtYXRpcXVlLCBhzIAgdGl0cmUgb27DqXJldXgsIGHMgCBleMOpY3V0aW9uIHN1Y2Nlc3NpdmVcXG4gICAgICAgICAgICAgICAgICAgIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiwqsgRG9ubsOpZXMgwrtcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiIGTDqXNpZ25lIChpKSBsZXNcXG4gICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9ucyBwZXJzb25uZWxsZXMgZGVzIENsaWVudHMgZXQgVXRpbGlzYXRldXJzXFxuICAgICAgICAgICAgICAgICAgICBwZXJtZXR0YW50IGxldXIgaWRlbnRpZmljYXRpb24gYWluc2kgcXVlIChpaSkgbGVzXFxuICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbnMgcmVsYXRpdmVzIMOgIGxhIG5hdmlnYXRpb24gc3VyIGxlIFNpdGUgZXRcXG4gICAgICAgICAgICAgICAgICAgIGzigJlhcHBsaWNhdGlvbiBtb2JpbGUgS2l2aWTCriBzdXNjZXB0aWJsZXMgZOKAmcOqdHJlXFxuICAgICAgICAgICAgICAgICAgICBlbnJlZ2lzdHLDqWVzIGRhbnMgZGVzIGZpY2hpZXJzIGRpdHMgwqsgY29va2llcyDCuyBvdVxcbiAgICAgICAgICAgICAgICAgICAgb3V0aWxzIHNpbWlsYWlyZXMsIG5vdGFtbWVudCBsb3JzIGRlIGxhIHNvdXNjcmlwdGlvblxcbiAgICAgICAgICAgICAgICAgICAgZOKAmXVuIGFib25uZW1lbnQsIGRlIGxhIG5hdmlnYXRpb24gb3UgZGUgbGEgY3LDqWF0aW9uIGTigJl1blxcbiAgICAgICAgICAgICAgICAgICAgY29tcHRlIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiwqsgSWRlbnRpZmlhbnRzIMK7XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiBkw6lzaWduZSB0YW50XFxuICAgICAgICAgICAgICAgICAgICBs4oCZaWRlbnRpZmlhbnQgcHJvcHJlIGR1IENsaWVudCBldC9vdSBkZSBs4oCZVXRpbGlzYXRldXJcXG4gICAgICAgICAgICAgICAgICAgICjigJxsb2dpbuKAnSkgcXVlIGxlIG1vdCBkZSBwYXNzZSBkZSBjb25uZXhpb24gKOKAnHBhc3N3b3Jk4oCdKSxcXG4gICAgICAgICAgICAgICAgICAgIGNvbW11bmlxdcOpcyBhdSBtb21lbnQgZGUgbOKAmWluc2NyaXB0aW9uIHN1ciBsYSBQbGF0ZWZvcm1lXFxuICAgICAgICAgICAgICAgICAgICA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIsKrIExvZ2ljaWVsIMK7XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiBkw6lzaWduZSB0b3V0IGxvZ2ljaWVsXFxuICAgICAgICAgICAgICAgICAgICBmb3VybmkgcGFyIEtpdmlkIGF1IENsaWVudCBldC9vdSBhdXggVXRpbGlzYXRldXJzIGV0IGVuXFxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWN1bGllciBsZXMgU29sdXRpb25zIGFzc29jacOpZXMgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCLCqyBQbGF0ZWZvcm1lIMK7XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiBkw6lzaWduZSBsZSBzZXJ2aWNlXFxuICAgICAgICAgICAgICAgICAgICBwcm9wb3NlzIEgcGFyIEtpdmlkLCBwZXJtZXR0YW50IGzigJl1dGlsaXNhdGlvbiBkZXNcXG4gICAgICAgICAgICAgICAgICAgIFNvbHV0aW9ucyBwYXIgbGUgQ2xpZW50IDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiwqsgU2VydmljZShzKSDCu1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCIgZMOpc2lnbmUgbGEgc291c2NyaXB0aW9uXFxuICAgICAgICAgICAgICAgICAgICDDoCBsYSBQbGF0ZWZvcm1lIGV0IHNlcyBmb25jdGlvbm5hbGl0w6lzIHRlbCBxdWUgZMOpZmluaVxcbiAgICAgICAgICAgICAgICAgICAgZGFucyBsZXMgcHLDqXNlbnRlcyBDR1YuIExlcyBwcmVzdGF0aW9ucyBjb21wcmlzZXMgZGFuc1xcbiAgICAgICAgICAgICAgICAgICAgbGUgU2VydmljZSBmb3JtZW50IHVuIHRvdXQgaW5kaXZpc2libGUuIExhIGxpc3RlIGRlc1xcbiAgICAgICAgICAgICAgICAgICAgcHJlc3RhdGlvbnMgY29tcG9zYW50IGxlIFNlcnZpY2UsIGF2ZWMgbGVzIG5pdmVhdXggZGVcXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UgZXQgbGEgbGlzdGUgZGVzIGZvbmN0aW9ubmFsaXTDqXMgZGUgbGFcXG4gICAgICAgICAgICAgICAgICAgIFBsYXRlZm9ybWUsIGTDqWNyaXZlbnQgbGVzIHF1YWxpdMOpcyBlc3NlbnRpZWxsZXMgZHVcXG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2UgcmVuZHUgcGFyIEtpdmlkIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiwqsgU2l0ZSDCu1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgZMOpc2lnbmUgbGUgc2l0ZSBpbnRlcm5ldFxcbiAgICAgICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9cIiB9IH0sIFtfdm0uX3YoXCJ3d3cua2l2aWQuZnJcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIDtcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCLCqyBTb2x1dGlvbnMgwrtcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiIGTDqXNpZ25lIGxlcyBmb25jdGlvbnNcXG4gICAgICAgICAgICAgICAgICAgIG9ww6lyYXRpb25uZWxsZXMgZGVzIHNlcnZpY2VzIHByb3Bvc8OpZXMgZW4gbW9kZSDCqyBow6liZXJnw6lcXG4gICAgICAgICAgICAgICAgICAgIMK7IGV0IGFkYXB0w6llcyBzcMOpY2lmaXF1ZW1lbnQgYcyAIGNlIG1vZGUgZGUgZm9uY3Rpb25uZW1lbnRcXG4gICAgICAgICAgICAgICAgICAgIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiwqsgVXRpbGlzYXRldXIgwrtcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiIGTDqXNpZ25lIGxlIGNsaWVudCBkdVxcbiAgICAgICAgICAgICAgICAgICAgQ2xpZW50IGLDqW7DqWZpY2lhbnQgZOKAmXVuIGFjY8OocyBhdXggU2VydmljZXMgYXBwbGljYXRpZnNcXG4gICAgICAgICAgICAgICAgICAgIHN1ciBzb24gb3JkaW5hdGV1ciwgdGFibGV0dGUgb3Ugc21hcnRwaG9uZSBlbiB2ZXJ0dSBkdVxcbiAgICAgICAgICAgICAgICAgICAgQ29udHJhdCBjb25jbHUgcGFyIGxlIENsaWVudCA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsyXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCIzLiBDb25kaXRpb25zIGzigJl1dGlsaXNhdGlvbiBkZSBsYSBQbGF0ZWZvcm1lXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmszXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcImEuIEluZm9ybWF0aW9ucyBwcsOpYWxhYmxlc1wiKV0pXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGkuIEtpdmlkIGEgbWlzIGVuIHBsYWNlIGRlcyBtZXN1cmVzIGRlIHPDqWN1cmlzYXRpb24gZGUgbOKAmWFjY8OocyBhzIBcXG4gICAgICAgICAgICBsYSBQbGF0ZWZvcm1lLCBzZWxvbiB1bmUgb2JsaWdhdGlvbiBkZSBtb3llbnMuIENlcGVuZGFudCwgS2l2aWRcXG4gICAgICAgICAgICByYXBwZWxsZSBhdSBDbGllbnQgcXVlIDpcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgTOKAmXV0aWxpc2F0aW9uIGTigJlJbnRlcm5ldCBwZXV0IGZhaXJlIGzigJlvYmpldCBkZVxcbiAgICAgICAgICAgICAgICAgICAgZMOpdG91cm5lbWVudHMgZOKAmWludHJ1c2lvbiBmcmF1ZHVsZXVzZSwgbWFsdmVpbGxhbnRlIG91XFxuICAgICAgICAgICAgICAgICAgICBub24gYXV0b3Jpc8OpZSBkYW5zIGxlIHN5c3TDqG1lIGTigJlpbmZvcm1hdGlvbiBkdSBDbGllbnQsXFxuICAgICAgICAgICAgICAgICAgICBkZSBwaXJhdGFnZSwgZOKAmWFsdMOpcmF0aW9uIG91IGTigJlleHRyYWN0aW9uIG5vbiBhdXRvcmlzw6llXFxuICAgICAgICAgICAgICAgICAgICBkZSBkb25uw6llcywgZGUgbW9kaWZpY2F0aW9ucywgYWx0w6lyYXRpb25zIG1hbHZlaWxsYW50ZXNcXG4gICAgICAgICAgICAgICAgICAgIGRlIHByb2dyYW1tZXMgb3UgZmljaGllcnMgb3UgZGUgY29udGFtaW5hdGlvbiBwYXIgZGVzXFxuICAgICAgICAgICAgICAgICAgICB2aXJ1cyBpbmZvcm1hdGlxdWVzXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBMYSBjb21tdW5pY2F0aW9uIGRlIG1vdHMgZGUgcGFzc2UsIGNvZGVzIGNvbmZpZGVudGllbHMsXFxuICAgICAgICAgICAgICAgICAgICBldCBwbHVzIGfDqW7DqXJhbGVtZW50LCBkZSB0b3V0ZSBpbmZvcm1hdGlvbiBhzIAgY2FyYWN0w6hyZVxcbiAgICAgICAgICAgICAgICAgICAgc2Vuc2libGUgZXN0IGVmZmVjdHXDqWUgcGFyIGxlIENsaWVudCBhzIAgc2VzIHJpc3F1ZXMgZXRcXG4gICAgICAgICAgICAgICAgICAgIHDDqXJpbHMuXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFBhciBjb25zw6lxdWVudCwgaWwgaW5jb21iZSBhdSBDbGllbnQgZGUgcHJlbmRyZSB0b3V0ZXMgbGVzXFxuICAgICAgICAgICAgbWVzdXJlcyBhcHByb3ByacOpZXMgZGUgZmHDp29uIGHMgCBwcm90w6lnZXIgc2VzIHByb3ByZXMgZG9ubsOpZXNcXG4gICAgICAgICAgICBldC9vdSBsb2dpY2llbHMgc3RvY2vDqXMgc3VyIHNlcyBzZXJ2ZXVycyBkZSBsYSBjb250YW1pbmF0aW9uIHBhclxcbiAgICAgICAgICAgIGRlcyB2aXJ1cyBjb21tZSBkZSB0ZW50YXRpdmVzIGTigJlpbnRydXNpb24gZGFucyBzb24gc3lzdMOobWVcXG4gICAgICAgICAgICBpbmZvcm1hdGlxdWUgcGFyIGRlcyB0aWVycy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaWkuIExlIENsaWVudCByZW5vbmNlIGTDqHMgbG9ycyBhzIAgZW5nYWdlciBsYSByZXNwb25zYWJpbGl0w6kgZGVcXG4gICAgICAgICAgICBLaXZpZCBjb25jZXJuYW50IHVuIG91IHBsdXNpZXVycyBkZXMgZmFpdHMgb3Ugw6l2w6huZW1lbnRzXFxuICAgICAgICAgICAgbWVudGlvbm7DqXMgw6AgbOKAmWFydGljbGUgMy4xLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBpaWkuIEzigJlhY2PDqHMgYXV4IFNvbHV0aW9ucyBuZSBwZXV0IHPigJllZmZlY3R1ZXIgcXXigJlhdSB0cmF2ZXJzIGR1XFxuICAgICAgICAgICAgcsOpc2VhdSBJbnRlcm5ldCBldCBk4oCZdW4gbmF2aWdhdGV1ciB3ZWIgOiBHb29nbGUgQ2hyb21lIHN1clxcbiAgICAgICAgICAgIGVudmlyb25uZW1lbnQgUEMgb3UgQW5kcm9pZCBldCBTYWZhcmkgc3VyIGVudmlyb25uZW1lbnQgTUFDIG91XFxuICAgICAgICAgICAgaU9TIHNvbnQgcHLDqWNvbmlzw6lzIHBhciBLaXZpZCBwb3VyIHVuZSBleHDDqXJpZW5jZSBvcHRpbWFsZSBkZSBsYVxcbiAgICAgICAgICAgIFBsYXRlZm9ybWUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcms0XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbXG4gICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcImIuIFJlc3RyaWN0aW9ucyBk4oCZdXRpbGlzYXRpb24gZGUgbGEgUGxhdGVmb3JtZVwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaS4gS2l2aWQgY29uY8OoZGUgYXUgQ2xpZW50IHVuIGRyb2l0IHBlcnNvbm5lbCBldCBub25cXG4gICAgICAgICAgICB0cmFuc2bDqXJhYmxlIGTigJl1dGlsaXNlciBsYSBQbGF0ZWZvcm1lLCBkYW5zIGxlIG1vbmRlIGVudGllclxcbiAgICAgICAgICAgIHBlbmRhbnQgdG91dGUgbGEgZHVyw6llIGR1IENvbnRyYXQsIGRlIG1hbmnDqHJlIG5vbiBleGNsdXNpdmUuIENlXFxuICAgICAgICAgICAgZHJvaXQgZOKAmXV0aWxpc2F0aW9uIG5lIHBldXQgZmFpcmUgbOKAmW9iamV0IGTigJl1bmUgc291cy1saWNlbmNlLFxcbiAgICAgICAgICAgIGTigJl1bmUgY2Vzc2lvbiwgZOKAmXVuIHRyYW5zZmVydCBvdSBk4oCZdW5lIG1pc2UgYcyAIGRpc3Bvc2l0aW9uIGTigJl1blxcbiAgICAgICAgICAgIHRpZXJzLCB5IGNvbXByaXMgYXUgc2VpbiBk4oCZdW4gbcOqbWUgw6l0YWJsaXNzZW1lbnQuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiaWkuIExhIFBsYXRlZm9ybWUgcGV1dCDDqnRyZSB1dGlsaXPDqWUgOlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAoaSkgZW4gYWNjw6hzIGRpc3RhbnQgZ3LDomNlIGHMgCBJbnRlcm5ldCwgZGFucyBsZSByZXNwZWN0IGRlc1xcbiAgICAgICAgICAgIHLDqGdsZXMgZOKAmWlkZW50aWZpY2F0aW9uIGV0IGTigJlhZmZlY3RhdGlvbiBkZXMgSWRlbnRpZmlhbnRzIGR1XFxuICAgICAgICAgICAgQ2xpZW50IHF1aSBzZXVsIGTDqWNpZGUgZGVzIFV0aWxpc2F0ZXVycyBxdSdpbCBhdXRvcmlzZSBhzIBcXG4gICAgICAgICAgICB1dGlsaXNlciBsZSBTZXJ2aWNlIDtcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgKGlpKSBwb3VyIGxlIHRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIGRlcyBVdGlsaXNhdGV1cnMgcGFyIGxlXFxuICAgICAgICAgICAgQ2xpZW50IGRhbnMgbGVzIGNvbmRpdGlvbnMgbGltaXRhdGl2ZW1lbnQgZMOpZmluaWVzIGRhbnMgbGVcXG4gICAgICAgICAgICBDb250cmF0LlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaWlpLiBMYSBQbGF0ZWZvcm1lIGVzdCBsYSBwcm9wcmnDqXTDqSBkZSBLaXZpZCwgbGUgQ2xpZW50XFxuICAgICAgICAgICAgc+KAmWludGVyZGl0IDpcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgRGUgY29waWVyIG91IGRlIHJlcHJvZHVpcmUsIGRlIHJlcHLDqXNlbnRlciwgbW9kaWZpZXIsXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc21ldHRyZSwgcHVibGllciwgYWRhcHRlciB0b3V0IG91IHBhcnRpZSBkZSBsYVxcbiAgICAgICAgICAgICAgICAgICAgUGxhdGVmb3JtZSBwYXIgbuKAmWltcG9ydGUgcXVlbCBtb3llbiBldCBzb3VzIG7igJlpbXBvcnRlXFxuICAgICAgICAgICAgICAgICAgICBxdWVsbGUgZm9ybWUgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgROKAmXV0aWxpc2VyIGxhIFBsYXRlZm9ybWUgbm9uIGNvbmZvcm3DqW1lbnQgYXV4IHLDqGdsZXNcXG4gICAgICAgICAgICAgICAgICAgIGTigJl1dGlsaXNhdGlvbiBkZSBsYSBQbGF0ZWZvcm1lIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIERlIHRyYWR1aXJlIG91IGRlIHRyYW5zY3JpcmUgZGFucyB0b3V0IGF1dHJlIGxhbmdhZ2Ugb3VcXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1ZSwgb3UgZGUgbOKAmWFkYXB0ZXIgb3UgZGUgbHVpIGFkam9pbmRyZSB0b3V0IG9iamV0XFxuICAgICAgICAgICAgICAgICAgICBub24gY29uZm9ybWUgYcyAIHNhIHNww6ljaWZpY2F0aW9uLlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgIGl2LiBUb3V0IG1hbnF1ZW1lbnQgYXV4IGRpc3Bvc2l0aW9ucyBkdSBwcsOpc2VudCBhcnRpY2xlIGVudHJhw65uZVxcbiAgICAgICAgICAgIGxlIGRyb2l0IHBvdXIgS2l2aWQgZGUgc3VzcGVuZHJlIGzigJlhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSBkYW5zXFxuICAgICAgICAgICAgbGVzIGNvbmRpdGlvbnMgZGUgbFxcJ2FydGljbGUgXCJSw4lTSUxJQVRJT05cIi5cXG4gICAgICAgICdcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrNVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJjLiBDb25kaXRpb25zIGTigJlhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSBwYXIgbGVcXG4gICAgICAgICAgICAgICAgICAgIENsaWVudFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGkuIExvcnMgZGUgbGEgcHJlbWnDqHJlIHV0aWxpc2F0aW9uIGRlIGxhIHBsYXRlZm9ybWUsIGxlXFxuICAgICAgICAgICAgcHJhdGljaWVuIGNvbXBsw6h0ZSB1biBmb3JtdWxhaXJlIGVuIGxpZ25lIGTigJlpbnNjcmlwdGlvbiBlblxcbiAgICAgICAgICAgIHNhaXNpc3NhbnQgdW4gZW1haWwgZXQgdW4gbW90IGRlIHBhc3NlLiBVbmUgZm9pcyBsZSBmb3JtdWxhaXJlXFxuICAgICAgICAgICAgc291bWlzLCB1biBlbWFpbCBkZSB2YWxpZGF0aW9uIGVzdCBlbnZvecOpIMOgIGzigJlhZHJlc3NlIGUtbWFpbFxcbiAgICAgICAgICAgIHNhaXNpZSBwYXIgbGUgcHJhdGljaWVuIGzigJlpbnZpdGFudCDDoCB2YWxpZGVyIHNvbiBjb21wdGUgZW5cXG4gICAgICAgICAgICBjbGlxdWFudCBzdXIgdW4gbGllbi5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazZcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1XCIsIFtcbiAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBkLiBDb25kaXRpb25zIGTigJlvdXZlcnR1cmUgZGUgZHJvaXRzIGTigJlhY2PDqHMgYXV4XFxuICAgICAgICAgICAgICAgICAgICBVdGlsaXNhdGV1cnNcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaS4gTGUgQ2xpZW50IGVzdCByZXNwb25zYWJsZSBkZSBsYSBkw6lzaWduYXRpb24gZGVzIFV0aWxpc2F0ZXVyc1xcbiAgICAgICAgICAgIHBhcm1pIHNlcyBwcm9wcmVzIGNsaWVudHMuIEFwcsOocyBsZXVyIGF2b2lyIHByw6lzZW50w6kgbGFcXG4gICAgICAgICAgICBQbGF0ZWZvcm1lIGV0IHNlcyBjb25kaXRpb25zIGTigJl1dGlsaXNhdGlvbnMsIGxlIENsaWVudCByZW5zZWlnbmVcXG4gICAgICAgICAgICBsZXMgaW5mb3JtYXRpb25zIGRlcyBub3V2ZWF1eCBVdGlsaXNhdGV1cnMgYWZpbiBxdWUgS2l2aWQgcHVpc3NlXFxuICAgICAgICAgICAgaW52aXRlciBsZXMgdXRpbGlzYXRldXJzIMOgIGNyw6llciBsZXVycyBpZGVudGlmaWFudHMgZGUgY29ubmV4aW9uXFxuICAgICAgICAgICAgZXQgY29tcHRlcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaWkuIExlcyBVdGlsaXNhdGV1cnMgc29udCBkZXMgcGVyc29ubmVzIHBoeXNpcXVlcy4gQ2hhcXVlXFxuICAgICAgICAgICAgVXRpbGlzYXRldXIgZGlzcG9zZSBkZSBzb24gcHJvcHJlIGFjY8Oocy4gSWwgbHVpIGVzdCBpbnRlcmRpdCBkZVxcbiAgICAgICAgICAgIHBlcm1ldHRyZSBhzIAgdW4gdGllcnMgZOKAmXV0aWxpc2VyIHNvbiBjb21wdGUgb3UgZOKAmcOpY2hhbmdlciBzb25cXG4gICAgICAgICAgICBhY2PDqHMgYXZlYyBjZWx1aSBk4oCZdW4gYXV0cmUgdXRpbGlzYXRldXIuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGlpaS4gUG91ciBiw6luw6lmaWNpZXIgZGVzIFNlcnZpY2VzLCBs4oCZdXRpbGlzYXRldXIgZGV2cmEgc+KAmcOqdHJlXFxuICAgICAgICAgICAgcHLDqWFsYWJsZW1lbnQgYWNxdWl0dMOpIGRlIGxhIFJlZGV2YW5jZSBkw6lmaW5pZSBkZSBs4oCZYWJvbm5lbWVudCDDoFxcbiAgICAgICAgICAgIEtJVklELlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrN1wiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiNC4gUmVzcG9uc2FiaWxpdMOpXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcms4XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcImEuIERpc3Bvc2l0aW9ucyBnw6luw6lyYWxlc1wiKV0pXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIENoYWN1bmUgZGVzIFBhcnRpZXMgYXNzdW1lIGxhIHJlc3BvbnNhYmlsaXTDqSBkZXMgY29uc8OpcXVlbmNlc1xcbiAgICAgICAgICAgIHLDqXN1bHRhbnQgZGUgc2VzIGZhdXRlcywgZXJyZXVycyBvdSBvbWlzc2lvbnMsIGFpbnNpIHF1ZSBkZXNcXG4gICAgICAgICAgICBmYXV0ZXMsIGVycmV1cnMgb3Ugb21pc3Npb25zIGRlIHNlcyBzb3VzLXRyYWl0YW50cyDDqXZlbnR1ZWxzIGV0XFxuICAgICAgICAgICAgY2F1c2FudCB1biBkb21tYWdlIGRpcmVjdCDDoCBsJ2F1dHJlIFBhcnRpZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazlcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1XCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiYi4gUmVzcG9uc2FiaWxpdMOpIGTigJlLaXZpZFwiKV0pXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGkuIEtpdmlkIG5lIHBvdXJyYSwgZW4gYXVjdW4gY2FzLCB2b2lyIHNhIHJlc3BvbnNhYmlsaXTDqSBlbmdhZ8OpZVxcbiAgICAgICAgICAgIGR1IGZhaXQgZGUgbOKAmXV0aWxpc2F0aW9uIGRlIGxhIFBsYXRlZm9ybWUgcGFyIHVuIFV0aWxpc2F0ZXVyIGV0XFxuICAgICAgICAgICAgbm90YW1tZW50IGRhbnMgbGUgY2FzIG/DuSB1biBVdGlsaXNhdGV1ciBzZSB2ZXJyYWl0IGF0dHJpYnVlciBwYXJcXG4gICAgICAgICAgICBsZSBDbGllbnQgZGVzIGV4ZXJjaWNlcyBub24gYWRhcHTDqXMgw6Agc2VzIGNhcGFjaXTDqXMgcGh5c2lxdWVzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBpaS4gRW4gY2FzIGRlIGZhdXRlIHByb3V2w6llIHBhciBsZSBDbGllbnQsIEtpdmlkIG5lIHNlcmEgdGVudWVcXG4gICAgICAgICAgICBxdWUgZGUgbGEgcsOpcGFyYXRpb24gZGVzIGNvbnPDqXF1ZW5jZXMgcMOpY3VuaWFpcmVzIGRlcyBkb21tYWdlc1xcbiAgICAgICAgICAgIGRpcmVjdHMgZXQgcHLDqXZpc2libGVzIGR1IGZhaXQgZGUgbOKAmXV0aWxpc2F0aW9uIGRlIGxhXFxuICAgICAgICAgICAgUGxhdGVmb3JtZS4gRW4gY29uc8OpcXVlbmNlLCBLaXZpZCBuZSBwb3VycmEgZW4gYXVjdW5lXFxuICAgICAgICAgICAgY2lyY29uc3RhbmNlIGVuY291cmlyIGRlIHJlc3BvbnNhYmlsaXTDqSBhdSB0aXRyZSBkZXMgcGVydGVzIG91XFxuICAgICAgICAgICAgZG9tbWFnZXMgaW5kaXJlY3RzIG91IGltcHLDqXZpc2libGVzIGR1IENsaWVudCBvdSBkZXMgdGllcnMsIGNlXFxuICAgICAgICAgICAgcXVpIGluY2x1dCBub3RhbW1lbnQgdG91dCBnYWluIG1hbnF1w6ksIHBlcnRlLCBpbmV4YWN0aXR1ZGUgb3VcXG4gICAgICAgICAgICBjb3JydXB0aW9uIGRlIGZpY2hpZXJzIG91IGRlIGRvbm7DqWVzLCBwcsOpanVkaWNlIGNvbW1lcmNpYWwsXFxuICAgICAgICAgICAgcGVydGUgZGUgY2hpZmZyZSBkJ2FmZmFpcmVzIG91IGRlIGLDqW7DqWZpY2UsIHBlcnRlIGRlIGNsaWVudMOobGUsXFxuICAgICAgICAgICAgcGVydGUgZCd1bmUgY2hhbmNlLCBjb8O7dCBkZSBs4oCZb2J0ZW50aW9uIGTigJl1biBwcm9kdWl0LCBk4oCZdW5cXG4gICAgICAgICAgICBzZXJ2aWNlIG91IGRlIHRlY2hub2xvZ2llIGRlIHN1YnN0aXR1dGlvbiwgZW4gcmVsYXRpb24gb3VcXG4gICAgICAgICAgICBwcm92ZW5hbnQgZGUgbOKAmWluZXjDqWN1dGlvbiBvdSBkZSBs4oCZZXjDqWN1dGlvbiBmYXV0aXZlIGRlc1xcbiAgICAgICAgICAgIHByZXN0YXRpb25zLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBpaWkuIERhbnMgdG91cyBsZXMgY2FzLCBsZSBtb250YW50IGRlIGxhIHJlc3BvbnNhYmlsaXTDqSBkZSBLaXZpZFxcbiAgICAgICAgICAgIGVzdCBzdHJpY3RlbWVudCBsaW1pdMOpIGF1IHJlbWJvdXJzZW1lbnQgZHUgbW9udGFudCBkZXMgc29tbWVzXFxuICAgICAgICAgICAgZWZmZWN0aXZlbWVudCBwYXnDqWVzIHBhciBsZSBDbGllbnQgw6AgbGEgZGF0ZSBkZSBzdXJ2ZW5hbmNlIGR1XFxuICAgICAgICAgICAgZmFpdCBnw6luw6lyYXRldXIgZGUgcmVzcG9uc2FiaWxpdMOpLiBLaXZpZCBuZSBzYXVyYWl0LCBlbiBvdXRyZSxcXG4gICAgICAgICAgICDDqnRyZSB0ZW51IHJlc3BvbnNhYmxlIGRlIGxhIGRlc3RydWN0aW9uIGFjY2lkZW50ZWxsZSBkZXMgZG9ubsOpZXNcXG4gICAgICAgICAgICBwYXIgbGUgQ2xpZW50IG91IHVuIHRpZXJzIGF5YW50IGFjY8OpZMOpIGF1eCBTZXJ2aWNlcyBhcHBsaWNhdGlmc1xcbiAgICAgICAgICAgIGF1IG1veWVuIGRlcyBJZGVudGlmaWFudHMgcmVtaXMgYXUgQ2xpZW50LlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrOVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJjLiBSZXNwb25zYWJpbGl0w6kgZHUgQ2xpZW50XCIpXSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgaS4gRW4gdGFudCBxdWUgcHJvZmVzc2lvbm5lbCBkZSBsYSByw6nDqWR1Y2F0aW9uIGV0L291IGR1IHNwb3J0LFxcbiAgICAgICAgICAgIGxlIENsaWVudCBlc3QgZW50acOocmVtZW50IHJlc3BvbnNhYmxlIGRlIHRvdXRlIGNyw6lhdGlvbixcXG4gICAgICAgICAgICB0cmFuc21pc3Npb24gb3UgcHVibGljYXRpb24gZGUgQ29udGVudSBhdSBtb3llbiBkZSBsYSBQbGF0ZWZvcm1lXFxuICAgICAgICAgICAgZXQgZW4gcGFydGljdWxpZXIgZGUgbGEgZMOpZmluaXRpb24gZGVzIGV4ZXJjaWNlcyBkZSByw6nDqWR1Y2F0aW9uXFxuICAgICAgICAgICAgcHJvcG9zw6lzIGF1eCBVdGlsaXNhdGV1cnMgc3VyIGxhIFBsYXRlZm9ybWUsIGVuIGZvbmN0aW9uIGRlXFxuICAgICAgICAgICAgbGV1cnMgYmVzb2lucyBldCBkZSBsZXVycyBjYXBhY2l0w6lzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBpaS4gTGUgQ2xpZW50IGFzc3VtZSBs4oCZZW50acOocmUgcmVzcG9uc2FiaWxpdMOpIHF1YW50IGF1eFxcbiAgICAgICAgICAgIGNvbnPDqXF1ZW5jZXMgZGlyZWN0ZXMgZXQvb3UgaW5kaXJlY3RlcyBkZSBs4oCZdXRpbGlzYXRpb24gZGVcXG4gICAgICAgICAgICBQbGF0ZWZvcm1lIGV0IG5vdGFtbWVudCBkZSBsYSBjcsOpYXRpb24gZGUgQ29udGVudXMuIExlcyBleGVtcGxlc1xcbiAgICAgICAgICAgIGRlIENvbnRlbnVzIGV0IMOpdmVudHVlbHMgY29uc2VpbHMgZGUgS2l2aWQgZG9pdmVudCDDqnRyZVxcbiAgICAgICAgICAgIGNvbnNpZMOpcsOpcyB1bmlxdWVtZW50IGNvbW1lIGRlcyBvcGluaW9ucywgbGUgQ2xpZW50IHJlc3RhbnQgc2V1bFxcbiAgICAgICAgICAgIHJlc3BvbnNhYmxlIGRlIGxhIGNyw6lhdGlvbiBkZXMgQ29udGVudXMgw6AgZGVzdGluYXRpb24gZGVzXFxuICAgICAgICAgICAgVXRpbGlzYXRldXJzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBpdi4gTGUgQ2xpZW50IGVzdCB0ZW51IGRlIHByZW5kcmUgdG91dGVzIGxlcyBtZXN1cmVzIGFmaW4gZGVcXG4gICAgICAgICAgICBz4oCZYXNzdXJlciBxdWUgbGVzIENvbnRlbnVzIGNyw6nDqXMgc3VyIGxhIFBsYXRlZm9ybWUgcG91ciBsZXNcXG4gICAgICAgICAgICBVdGlsaXNhdGV1cnMgc29udCBjb25mb3JtZXMgw6AgbOKAmcOpdGF0IGRlcyBjb25uYWlzc2FuY2VzIGVuXFxuICAgICAgICAgICAgbWF0acOocmUgZGUgcsOpw6lkdWNhdGlvbiBwaHlzaXF1ZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazEwXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCI1LiBEaXNwb25pYmlsaXTDqSBkdSBTZXJ2aWNlXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGEuIEtpdmlkIGZlcmEgdG91dCBzb24gcG9zc2libGUgcG91ciBxdWUgbGEgUGxhdGVmb3JtZSBzb2l0XFxuICAgICAgICAgICAgYWNjZXNzaWJsZSBzZWxvbiB1bmUgb2JsaWdhdGlvbiBkZSBtb3llbnMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGIuIExlIENsaWVudCByZWNvbm5hw650IHF1ZSBLaXZpZCBuZSBwb3VycmEgZW4gYXVjdW4gY2FzIMOqdHJlXFxuICAgICAgICAgICAgcmVzcG9uc2FibGUgZGVzIMOpdmVudHVlbGxlcyBpbnRlcnJ1cHRpb25zIGRlIGZvbmN0aW9ubmVtZW50XFxuICAgICAgICAgICAgZOKAmUludGVybmV0LiBLaXZpZCBzZSByw6lzZXJ2ZSDDqWdhbGVtZW50IGxlIGRyb2l0IGTigJlpbnRlcnJvbXByZVxcbiAgICAgICAgICAgIGzigJlhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSBlbiByYWlzb24gZOKAmW9ww6lyYXRpb25zIGRlIG1haW50ZW5hbmNlLlxcbiAgICAgICAgICAgIERhbnMgY2UgY2FzLCBLaXZpZCBlbiBpbmZvcm1lcmEgbGUgQ2xpZW50IHBhciBjb3VycmllbCBhdSBtb2luc1xcbiAgICAgICAgICAgIHZpbmd0LXF1YXRyZSAoMjQpIGhldXJlcyBhdmFudC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazExXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCI2LiBNYWludGVuYW5jZVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBhLiBUb3V0ZXMgbGVzIGludGVydmVudGlvbnMgc+KAmWVmZmVjdHVlbnQgYcyAIGRpc3RhbmNlLCBzYW5zXFxuICAgICAgICAgICAgaW50ZXJ2ZW50aW9uIHN1ciBzaXRlLCBhdXggam91cnMgZXQgaGV1cmVzIHN1aXZhbnRzIDpcXG4gICAgICAgICAgICBMdW5kaS1WZW5kcmVkaSBkZSA4aCDDoCAxMmggZXQgZGUgMTRoIMOgIDE3aCAoR01UKzEpLCBleGNlcHRlzIEgbGVzXFxuICAgICAgICAgICAgam91cnMgZsOpcmnDqXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGIuIExlIENsaWVudCBwZXV0IGZvcm11bGVyIHNlcyBxdWVzdGlvbnMgZXQgZGVtYW5kZXNcXG4gICAgICAgICAgICBk4oCZaW50ZXJ2ZW50aW9ucyBwYXIgZW1haWwgw6AgbOKAmWFkcmVzc2VcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJtYWlsdG86Y29udGFjdEBraXZpZC5mclwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiY29udGFjdEBraXZpZC5mclwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMTFcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjcuIEFib25uZW1lbnQgLSBGYWN0dXJhdGlvbiAtIFLDqGdsZW1lbnRcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTGVzIHByw6lzZW50ZXMgY29uZGl0aW9ucyBnw6luw6lyYWxlcyBz4oCZYXBwbGlxdWVudCDDoCBs4oCZZW5zZW1ibGUgZGVzXFxuICAgICAgICAgICAgZm9ybXVsZXMgZOKAmWFib25uZW1lbnRzIHByb3Bvc8OpZXMgcGFyIEtpdmlkLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBVbmUgY29uZmlybWF0aW9uIGTigJlhYm9ubmVtZW50IHNlcmEgYWRyZXNzw6llIMOgIGzigJl1dGlsaXNhdGV1ciBwYXJcXG4gICAgICAgICAgICByZXRvdXIgw6AgbOKAmWFkcmVzc2UgZS1tYWlsIHJlbnNlaWduw6llLCByZXByZW5hbnQgbGVzIGluZm9ybWF0aW9uc1xcbiAgICAgICAgICAgIGNvbnRyYWN0dWVsbGVzLCBub3RhbW1lbnQgbGUgbW9udGFudCBleGFjdCBmYWN0dXLDqSBldCBsZXNcXG4gICAgICAgICAgICBtb2RhbGl0w6lzIGRlIGzigJlvZmZyZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgbOKAmXV0aWxpc2F0ZXVyIHJlY29ubmHDrnQgcXVlIGxlcyBkb25uw6llcyBlbnJlZ2lzdHLDqWVzIHN1ciBsZSBTaXRlXFxuICAgICAgICAgICAgY29uc3RpdHVlbnQgbGEgcHJldXZlIGRlIGxhIHRyYW5zYWN0aW9uICh0eXBlIGTigJlhYm9ubmVtZW50IGV0XFxuICAgICAgICAgICAgZGF0ZSBkZSBzb3VzY3JpcHRpb24pLCBldCBsZXMgZG9ubsOpZXMgZW5yZWdpc3Ryw6llcyBwYXIgbGVcXG4gICAgICAgICAgICBzeXN0w6htZSBkZSBwYWllbWVudCBjb25zdGl0dWVudCBsYSBwcmV1dmUgZGUgbGEgdHJhbnNhY3Rpb25cXG4gICAgICAgICAgICBmaW5hbmNpw6hyZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTOKAmWFjY2VwdGF0aW9uIGRlcyBjb29raWVzIGVzdCBpbmRpc3BlbnNhYmxlIHBvdXIgdG91dCBhY2hhdCBvdVxcbiAgICAgICAgICAgIGFib25uZW1lbnQgc3VyIGxlIFNpdGUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazEyXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidVwiLCBbX2MoXCJzdHJvbmdcIiwgW192bS5fdihcImEuIE9mZnJlcyBk4oCZYWJvbm5lbWVudFwiKV0pXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExlcyBwcmluY2lwYWxlcyBvZmZyZXMgc29udCBsZXMgc3VpdmFudGVzLCDDqXRhbnQgcHLDqWNpc8OpIHF1ZVxcbiAgICAgICAgICAgIEtpdmlkIHNlIHLDqXNlcnZlIGxhIGZhY3VsdMOpLCDDoCB0b3V0IG1vbWVudCwgZOKAmWFtw6luYWdlciBjZXNcXG4gICAgICAgICAgICBvZmZyZXMsIGFpbnNpIHF1ZSBkZSBwcm9wb3NlciBkZXMgb2ZmcmVzIHByb21vdGlvbm5lbGxlc1xcbiAgICAgICAgICAgIHBvbmN0dWVsbGVzIHN1ciBsZSBTaXRlIDpcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfYyhcInVcIiwgW192bS5fdihcImkuIEFib25uZW1lbnQgbWVuc3VlbFwiKV0pXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFVuIGFib25uZW1lbnQgc2FucyBlbmdhZ2VtZW50IGTigJl1bmUgZHVyw6llIGTigJl1biBtb2lzIMOgIGNvbXB0ZXIgZHVcXG4gICAgICAgICAgICBwYWllbWVudCBkdSBwcml4IGV0IHJlY29uZHVjdGlibGUgbWVuc3VlbGxlbWVudC4gVW5lIGZhY3R1cmVcXG4gICAgICAgICAgICBzZXJhIGFkcmVzc8OpZSDDoCBs4oCZdXRpbGlzYXRldXIgw6AgbOKAmW9jY2FzaW9uIGRlIGxhIHNvdXNjcmlwdGlvbiBkZVxcbiAgICAgICAgICAgIGzigJlhYm9ubmVtZW50IG1lbnN1ZWwgw6AgbGEgUGxhdGVmb3JtZSBwdWlzIHRvdXMgbGVzIG1vaXMgYXZlY1xcbiAgICAgICAgICAgIHJlY29uZHVjdGlvbiBhdXRvbWF0aXF1ZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMTNcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1XCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiYi4gQ29uZGl0aW9ucyBkZSBwYWllbWVudFwiKV0pXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExhIFRWQSBldCB0b3VzIGF1dHJlcyBpbXDDtHRzIGV0IHRheGVzIGFwcGxpY2FibGVzIGF1IG1vbWVudCBkZVxcbiAgICAgICAgICAgIGxhIGZhY3R1cmF0aW9uIHNvbnQgw6AgbGEgY2hhcmdlIGRlIGzigJl1dGlsaXNhdGV1ci4gTGVzIGZhY3R1cmVzXFxuICAgICAgICAgICAgc29udCBwYXlhYmxlcyBhdXByw6hzIGRlIEtpdmlkIMOgIHLDqWNlcHRpb24gb3UgY29uZm9ybcOpbWVudCBhdVxcbiAgICAgICAgICAgIGTDqWxhaSBpbmRpcXXDqSBhdSBkZXZpcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTGVzIHBhaWVtZW50cyBz4oCZZWZmZWN0dWVudCBwYXIgY2FydGUgYmFuY2FpcmUgc2Vsb24gbGVzXFxuICAgICAgICAgICAgbW9kYWxpdMOpcyBzdWl2YW50ZXMgOlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBQYWllbWVudCBwYXIgY2FydGUgYmFuY2FpcmUgcGFyIHNlcnZldXIgZGUgcGFpZW1lbnRcXG4gICAgICAgICAgICAgICAgICAgIHPDqWN1cmlzw6kgKENhcnRlIGJsZXVlIGR1IEdJRSBiYW5jYWlyZSBDYXJ0ZSBibGV1ZSwgVmlzYSxcXG4gICAgICAgICAgICAgICAgICAgIE1hc3RlckNhcmQsIEFtZXJpY2FuIEV4cHJlc3MsIEV1cm9jYXJkIGV0IFZpc2FcXG4gICAgICAgICAgICAgICAgICAgIGludGVybmF0aW9uYWxlcykuIExlIHBhaWVtZW50IGVuIGxpZ25lIHBhciBjYXJ0ZVxcbiAgICAgICAgICAgICAgICAgICAgYmFuY2FpcmUgZXN0IGFzc3Vyw6kgcGFyIHVuZSBzb2x1dGlvbiBzw6ljdXJpc8OpZSBldFxcbiAgICAgICAgICAgICAgICAgICAgY3J5cHTDqWUgKFNUUklQRSkgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBFbiBjYXMgZGUgcmV0YXJkIGRlIHBhaWVtZW50LCBLaXZpZCBwb3VycmEgcmVmdXNlciwgc3VzcGVuZHJlIG91XFxuICAgICAgICAgICAgYW5udWxlciBs4oCZYWNjw6hzIMOgIGxhIFBsYXRlZm9ybWUsIHNhbnMgcHLDqWp1ZGljZSBkZSB0b3V0ZSBhdXRyZVxcbiAgICAgICAgICAgIGFjdGlvbi4gVG91dGUgc29tbWUgbm9uIHBhecOpZSDDoCBs4oCZw6ljaMOpYW5jZSBwcsOpdnVlIGRvbm5lcmEgbGlldSxcXG4gICAgICAgICAgICBzYW5zIG1pc2UgZW4gZGVtZXVyZSwgYXUgcGFpZW1lbnQgZOKAmWludMOpcsOqdHMgZGUgcmV0YXJkIHPigJnDqWxldmFudFxcbiAgICAgICAgICAgIMOgIHRyb2lzICgzKSBmb2lzIGxlIHRhdXggZGUgbOKAmWludMOpcsOqdCBsw6lnYWwgZW4gdmlndWV1ciBhdSBqb3VyXFxuICAgICAgICAgICAgZGUgbGEgZmFjdHVyYXRpb24gZXQgw6AgdW5lIGluZGVtbml0w6kgZm9yZmFpdGFpcmUgcG91ciBmcmFpcyBkZVxcbiAgICAgICAgICAgIHJlY291dnJlbWVudCBkZSBxdWFyYW50ZSAoNDApIGV1cm9zIHBhciBmYWN0dXJlIGltcGF5w6llLiBEYW5zIGxlXFxuICAgICAgICAgICAgY2FzIG/DuSBsZXMgZnJhaXMgZGUgcmVjb3V2cmVtZW50IGTDqXBhc3NlcmFpZW50IGNlIG1vbnRhbnQsIEtpdmlkXFxuICAgICAgICAgICAgc2UgcsOpc2VydmUgbGUgZHJvaXQgZOKAmWVuIGRlbWFuZGVyLCBzdXIganVzdGlmaWNhdGlmLCBsZVxcbiAgICAgICAgICAgIHJlbWJvdXJzZW1lbnQgaW50w6lncmFsIGF1IENsaWVudC4gTGVzIGludMOpcsOqdHMgY291cmVudCBkdSBqb3VyXFxuICAgICAgICAgICAgZGUgbOKAmcOpY2jDqWFuY2UganVzcXXigJlhdSBwYWllbWVudCBlZmZlY3RpZi5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIktpdmlkIG5lIHByYXRpcXVlIHBhcyBs4oCZZXNjb21wdGUuXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMTRcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1XCIsIFtfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiYy4gUsOpdmlzaW9uIGRlcyBwcml4XCIpXSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgS2l2aWQgc2UgcsOpc2VydmUgbGEgcG9zc2liaWxpdMOpIGRlIG1vZGlmaWVyIGxlcyB0YXJpZnMgZW4gY291cnNcXG4gICAgICAgICAgICBk4oCZYW5uw6llIHNlbG9uIGxlcyBtb2RhbGl0w6lzIHN1aXZhbnRlcyA6XFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGEuIFF1aW56ZSAoMTUpIGpvdXJzIGF2YW50IGzigJlhcHBsaWNhdGlvbiBkZXMgbm91dmVhdXggdGFyaWZzLFxcbiAgICAgICAgICAgIGzigJl1dGlsaXNhdGV1ciBzZXJhIGluZm9ybcOpIGRlIGNlcyBtb2RpZmljYXRpb25zO1xcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBiLiBQb3VyIGNvbnRpbnVlciDDoCBhdm9pciBhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSwgbOKAmXV0aWxpc2F0ZXVyXFxuICAgICAgICAgICAgZGV2cmEgc3DDqWNpZmlxdWVtZW50IGFjY2VwdGVyIGzigJlhcHBsaWNhdGlvbiBkZSBjZXMgbm91dmVhdXhcXG4gICAgICAgICAgICB0YXJpZnMgw6AgbGEgZGF0ZSBhbm5pdmVyc2FpcmUgZGUgc29uIGFib25uZW1lbnQgbWVuc3VlbCBvdVxcbiAgICAgICAgICAgIGFubnVlbCBsZSBjYXMgw6ljaMOpYW50IDtcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgYy4gQSBkw6lmYXV0IGTigJlhY2NlcHRhdGlvbiBleHByZXNzZSBkZXMgbm91dmVhdXggdGFyaWZzLFxcbiAgICAgICAgICAgIGzigJl1dGlsaXNhdGV1ciBuZSBwb3VycmEgcGx1cyBhdm9pciBhY2PDqHMgw6AgbGEgUGxhdGVmb3JtZSDDoFxcbiAgICAgICAgICAgIGzigJlpc3N1ZSBkZSBzYSBww6lyaW9kZSBk4oCZZW5nYWdlbWVudCwgcXVlIGNlbGxlLWNpIHNvaXQgbWVuc3VlbGxlXFxuICAgICAgICAgICAgb3UgYW5udWVsbGUuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsxNVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiOC4gUsOpc2lsaWF0aW9uXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZOKAmXVuIGFib25uZW1lbnQgw6AgZHVyw6llIGxpYnJlIGF2ZWMgcGFpZW1lbnRcXG4gICAgICAgICAgICBtZW5zdWVsLCBsYSByZWNvbmR1Y3Rpb24gZGUgbOKAmWFib25uZW1lbnQgcG91ciB1bmUgZHVyw6llIMOpZ2FsZVxcbiAgICAgICAgICAgIGVzdCB0YWNpdGUgZXQgYXV0b21hdGlxdWUuIEzigJl1dGlsaXNhdGV1ciBwZXV0IHRvdXRlZm9pcyDDoCB0b3V0XFxuICAgICAgICAgICAgbW9tZW50IGRlbWFuZGVyIGxhIHLDqXNpbGlhdGlvbiBkZSBzb24gYWJvbm5lbWVudCDDoCBwYXJ0aXIgZGUgc29uXFxuICAgICAgICAgICAgY29tcHRlLWNsaWVudC4gVW4gY291cnJpZWwgZGUgY29uZmlybWF0aW9uIHNlcmEgZW52b3nDqSBhdSBDbGllbnRcXG4gICAgICAgICAgICBldCBsYSByw6lzaWxpYXRpb24gcHJlbmRyYSBlZmZldCDDoCBsYSBmaW4gZGUgbGEgcMOpcmlvZGUgZGVcXG4gICAgICAgICAgICBzb3VzY3JpcHRpb24gZW4gY291cnMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIERhbnMgbGUgY2FkcmUgZOKAmXVuIGFib25uZW1lbnQgYW5udWVsLCBsYSByZWNvbmR1Y3Rpb24gZGVcXG4gICAgICAgICAgICBs4oCZYWJvbm5lbWVudCBwb3VyIHVuZSBkdXLDqWUgw6lnYWxlIGVzdCB0YWNpdGUgZXQgYXV0b21hdGlxdWUuXFxuICAgICAgICAgICAgTOKAmXV0aWxpc2F0ZXVyIHBldXQgZGVtYW5kZXIgbGEgcsOpc2lsaWF0aW9uIGRlIHNvbiBhYm9ubmVtZW50IMOgXFxuICAgICAgICAgICAgcGFydGlyIGRlIHNvbiBjb21wdGUtY2xpZW50IMOgIHRvdXQgbW9tZW50LlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMTZcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjkuIFByb3ByacOpdMOpXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIGEuIEtpdmlkIGVzdCBldCBkZW1ldXJlIHRpdHVsYWlyZSBkZXMgZHJvaXRzIGRlIHByb3ByacOpdMOpXFxuICAgICAgICAgICAgcmVsYXRpZnMgw6AgdG91dCDDqWzDqW1lbnQgZGUgbGEgUGxhdGVmb3JtZSBldCBkZXMgQ29udGVudXMgbWlzIMOgXFxuICAgICAgICAgICAgZGlzcG9zaXRpb24gZHUgQ2xpZW50IGV0IGRlIGzigJl1dGlsaXNhdGV1csKywrLCsiwgYWluc2kgcGx1c1xcbiAgICAgICAgICAgIGfDqW7DqXJhbGVtZW50IHF1ZSBkZSBs4oCZaW5mcmFzdHJ1Y3R1cmUgaW5mb3JtYXRpcXVlIChsb2dpY2llbGxlIGV0XFxuICAgICAgICAgICAgbWF0w6lyaWVsbGUpIG1pc2UgZW4gxZN1dnJlIG91IGTDqXZlbG9wcMOpZSBkYW5zIGxlIGNhZHJlIGR1XFxuICAgICAgICAgICAgQ29udHJhdC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgYi4gTGUgQ29udHJhdCBuZSBjb25mw6hyZSBhdSBDbGllbnQgYXVjdW4gZHJvaXQgZGUgcHJvcHJpw6l0w6kgc3VyXFxuICAgICAgICAgICAgbGEgUGxhdGVmb3JtZS4gTGEgbWlzZSDDoCBkaXNwb3NpdGlvbiB0ZW1wb3JhaXJlIGRlIGxhIFBsYXRlZm9ybWVcXG4gICAgICAgICAgICBkYW5zIGxlcyBjb25kaXRpb25zIHByw6l2dWVzIGF1IENvbnRyYXQgbmUgc2F1cmFpdCDDqnRyZSBhbmFseXPDqWVcXG4gICAgICAgICAgICBjb21tZSBsYSBjZXNzaW9uIGTigJl1biBxdWVsY29ucXVlIGRyb2l0IGRlIHByb3ByacOpdMOpXFxuICAgICAgICAgICAgaW50ZWxsZWN0dWVsbGUgYXUgYsOpbsOpZmljZSBkdSBDbGllbnQsIGF1IHNlbnMgZHUgQ29kZSBmcmFuw6dhaXNcXG4gICAgICAgICAgICBkZSBsYSBwcm9wcmnDqXTDqSBpbnRlbGxlY3R1ZWxsZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgYy4gTGUgQ2xpZW50IHPigJlpbnRlcmRpdCBkZSByZXByb2R1aXJlIHRvdXQgw6lsw6ltZW50IGRlIGxhXFxuICAgICAgICAgICAgUGxhdGVmb3JtZSwgb3UgdG91dGUgZG9jdW1lbnRhdGlvbiBsYSBjb25jZXJuYW50LCBwYXIgcXVlbHF1ZVxcbiAgICAgICAgICAgIG1veWVuIHF1ZSBjZSBzb2l0LCBzb3VzIHF1ZWxxdWUgZm9ybWUgcXVlIGNlIHNvaXQgZXQgc3VyIHF1ZWxxdWVcXG4gICAgICAgICAgICBzdXBwb3J0IHF1ZSBjZSBzb2l0LlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBkLiBMZSBDbGllbnQgZXQgdXRpbGlzYXRldXIgbmUgcG91cnJvbnQgY8OpZGVyIHRvdXQgb3UgcGFydGllIGRlc1xcbiAgICAgICAgICAgIGRyb2l0cyBldCBvYmxpZ2F0aW9ucyByw6lzdWx0YW50IGR1IENvbnRyYXQsIHF1ZSBjZSBzb2l0IGRhbnMgbGVcXG4gICAgICAgICAgICBjYWRyZSBkJ3VuZSBjZXNzaW9uIHRlbXBvcmFpcmUsIGQndW5lIHNvdXMtbGljZW5jZSBldCBkZSB0b3V0XFxuICAgICAgICAgICAgYXV0cmUgY29udHJhdCBwcsOpdm95YW50IGxlIHRyYW5zZmVydCBkZXNkaXRzIGRyb2l0cyBldFxcbiAgICAgICAgICAgIG9ibGlnYXRpb25zLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBlLiBLaXZpZCBkw6ljbGFyZSBldCBnYXJhbnRpdCDDqnRyZSB0aXR1bGFpcmUgZGUgdG91cyBsZXMgZHJvaXRzXFxuICAgICAgICAgICAgZGUgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUgcXVpIGx1aSBwZXJtZXR0ZW50IGRlIGNvbmNsdXJlIGxlXFxuICAgICAgICAgICAgQ29udHJhdC4gS2l2aWQgZMOpY2xhcmUgZXQgZ2FyYW50aXQgcXVlIGxlcyBTb2x1dGlvbnMgbmUgc29udCBwYXNcXG4gICAgICAgICAgICBzdXNjZXB0aWJsZXMgZGUgcG9ydGVyIGF0dGVpbnRlIGF1eCBkcm9pdHMgZGVzIHRpZXJzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMTdcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjEwLiBUcmFpdGVtZW50IGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXNcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTGVzIFBhcnRpZXMgc+KAmWVuZ2FnZW50IMOgIHJlc3BlY3RlciBsYSByw6lnbGVtZW50YXRpb24gYXBwbGljYWJsZSxcXG4gICAgICAgICAgICBub3RhbW1lbnQgbGUgUsOoZ2xlbWVudCBFdXJvcMOpZW4gc3VyIGxhIFByb3RlY3Rpb24gZGVzIERvbm7DqWVzLFxcbiAgICAgICAgICAgIGRpdCDCqyBSR1BEIMK7IChuwrAyMDE2LTY3OSByZWxhdGlmIMOgIGxhIHByb3RlY3Rpb24gZGVzIHBlcnNvbm5lc1xcbiAgICAgICAgICAgIHBoeXNpcXVlcyDDoCBs4oCZw6lnYXJkIGR1IHRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIMOgIGNhcmFjdMOocmVcXG4gICAgICAgICAgICBwZXJzb25uZWwgZXQgw6AgbGEgbGlicmUgY2lyY3VsYXRpb24gZGUgY2VzIGRvbm7DqWVzKSBldCBsYSBsb2kgwqtcXG4gICAgICAgICAgICBJbmZvcm1hdGlxdWUgZXQgbGliZXJ0w6lzIMK7IChsb2kgbsKwNzgtMTcgZHUgNiBqYW52aWVyIDE5NzhcXG4gICAgICAgICAgICByZWxhdGl2ZSDDoCBs4oCZaW5mb3JtYXRpcXVlLCBhdXggZmljaGllcnMgZXQgYXV4IGxpYmVydMOpc1xcbiAgICAgICAgICAgIG1vZGlmacOpZSkgZGFucyBsZSBjYWRyZSBkdSBDb250cmF0LlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBhLiBUcmFpdGVtZW50cyBtaXMgZW4gxZN1dnJlIHBhciBsZSBDbGllbnQgYWdpc3NhbnQgZW5cXG4gICAgICAgICAgICByZXNwb25zYWJsZSBkZSB0cmFpdGVtZW50XFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExlIENsaWVudCBlc3QgcmVzcG9uc2FibGUgZHUgdHJhaXRlbWVudCBkZXMgZG9ubsOpZXMgZGUgc2VzXFxuICAgICAgICAgICAgY2xpZW50cyB1dGlsaXNhdGV1cnMgZGUgbGEgUGxhdGVmb3JtZSwgbG9yc3F1ZSBsZXMgdHJhaXRlbWVudHNcXG4gICAgICAgICAgICBzb250IG1pcyBlbiDFk3V2cmUgZGFucyBsZSBjYWRyZSBkZSBzYSByZWxhdGlvbiBhdmVjIGxlc1xcbiAgICAgICAgICAgIFV0aWxpc2F0ZXVycy4gRGFucyBsZSBjYWRyZSBkZSBjZXMgdHJhaXRlbWVudHMsIGxlIENsaWVudFxcbiAgICAgICAgICAgIHRyYW5zbWV0dHJhIMOgIEtpdmlkIHNlcyBpbnN0cnVjdGlvbnMgZG9jdW1lbnTDqWVzLCBxdWlcXG4gICAgICAgICAgICBpbmRpcXVlcm9udCBs4oCZb2JqZXQgZXQgbGEgZHVyw6llIGR1IHRyYWl0ZW1lbnQsIHNhIG5hdHVyZSBldCBzZXNcXG4gICAgICAgICAgICBmaW5hbGl0w6lzLCBsZSB0eXBlIGRlIERvbm7DqWVzIHBlcnNvbm5lbGxlcyBldCBsYSBjYXTDqWdvcmllIGRlc1xcbiAgICAgICAgICAgIHBlcnNvbm5lcyBjb25jZXJuw6llcywgYWluc2kgcXVlIHNlcyBkcm9pdHMgZXQgb2JsaWdhdGlvbnMgZW5cXG4gICAgICAgICAgICB0YW50IHF1ZSByZXNwb25zYWJsZSBkdSB0cmFpdGVtZW50LlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBiLiBUcmFpdGVtZW50cyBtaXMgZW4gxZN1dnJlIHBhciBLaXZpZCBhZ2lzc2FudCBlbiByZXNwb25zYWJsZSBkZVxcbiAgICAgICAgICAgIHRyYWl0ZW1lbnRcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgS2l2aWQgZXN0IHJlc3BvbnNhYmxlIGR1IHRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIHBlcnNvbm5lbGxlc1xcbiAgICAgICAgICAgIHLDqWFsaXPDqSBwb3VyIHZvdXMgcGVybWV0dHJlIGTigJl1dGlsaXNlciBsZXMgU2VydmljZXMgc3VyIGxlIFNpdGUuXFxuICAgICAgICAgICAgRGFucyBsZSBjYWRyZSBkZXMgdHJhaXRlbWVudHMgZG9udCBLaXZpZCBlc3QgcmVzcG9uc2FibGUgZGVcXG4gICAgICAgICAgICB0cmFpdGVtZW50LCBsZSBDbGllbnQgZXQgbOKAmVV0aWxpc2F0ZXVyIHBldXZlbnQgZXhlcmNlciBsZXVyXFxuICAgICAgICAgICAgZHJvaXQgZOKAmWFjY8OocywgcmVjdGlmaWNhdGlvbiwgZWZmYWNlbWVudCwgbGltaXRhdGlvbiBkdVxcbiAgICAgICAgICAgIHRyYWl0ZW1lbnQgZXQgb2JqZWN0aW9uIGF1IHRyYWl0ZW1lbnQgZGVwdWlzIGxldXIgY29tcHRlIHN1ciBsZVxcbiAgICAgICAgICAgIFNpdGUgb3UgZW4gc+KAmWFkcmVzc2FudCBkaXJlY3RlbWVudCDDoFxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIm1haWx0bzpjb250YWN0QGtpdmlkLmZyXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJjb250YWN0QGtpdmlkLmZyXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX2MoXCJ1XCIsIFtfdm0uX3YoXCJpLiBUeXBvbG9naWUgZGVzIERvbm7DqWVzIGNvbGxlY3TDqWVzIHBhciBLaXZpZFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBMZXMgRG9ubsOpZXMgY29sbGVjdMOpZXMgcGFyIEtpdmlkIHBvdXIgbGVzIGJlc29pbnMgZGUgbGFcXG4gICAgICAgICAgICBQbGF0ZWZvcm1lIHNvbnQgbm90YW1tZW50IGxlcyBzdWl2YW50ZXMgOlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiTm9tcywgcHLDqW5vbXMsIGNpdmlsaXTDqSwgZGF0ZSBkZSBuYWlzc2FuY2UgO1wiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBBZHJlc3NlIHBvc3RhbGUsIGFkcmVzc2UgZS1tYWlsLCBudW3DqXJvIGRlIHTDqWzDqXBob25lIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIElkZW50aWZpYW50IGV0IG1vdCBkZSBwYXNzZSBjcnlwdMOpIHV0aWxpc8OpcyBwb3VyIHZvdXNcXG4gICAgICAgICAgICAgICAgICAgIHPigJlpZGVudGlmaWVyIHN1ciBsYSBQbGF0ZWZvcm1lIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIEluZm9ybWF0aW9ucyBjcnlwdMOpZXMgcmVsYXRpdmVzIMOgIHZvcyBtb3llbnMgZGUgcGFpZW1lbnRcXG4gICAgICAgICAgICAgICAgICAgIChub3RhbW1lbnQgbnVtw6lybyBkZSBjYXJ0ZSBiYW5jYWlyZSkgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgQ2hvaXggZW4gbWF0acOocmUgZGUgcHJvc3BlY3Rpb24gY29tbWVyY2lhbGUgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgVG91dGUgYXV0cmUgaW5mb3JtYXRpb24gcXVlIHZvdXMgc291aGFpdGV6IHBvcnRlciDDoFxcbiAgICAgICAgICAgICAgICAgICAgbm90cmUgY29ubmFpc3NhbmNlLlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBQYXIgbOKAmWludGVybcOpZGlhaXJlIGRlcyBjb29raWVzLCBLaXZpZCBjb2xsZWN0ZSDDqWdhbGVtZW50IGRlc1xcbiAgICAgICAgICAgIGluZm9ybWF0aW9ucyByZWxhdGl2ZXMgw6AgbGEgY29ubmV4aW9uIGV0IMOgIGxhIG5hdmlnYXRpb24uXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEtpdmlkIG5lIGNvbGxlY3RlIGx1aS1tw6ptZSBhdWN1bmUgZG9ubsOpZSBjb25zaWTDqXLDqWUgwqtcXG4gICAgICAgICAgICBwYXJ0aWN1bGnDqHJlIMK7IHBhciBsZSBSR1BEIGNvbmNlcm5hbnQgbGUgQ2xpZW50IG91IGzigJlVdGlsaXNhdGV1clxcbiAgICAgICAgICAgIHBvdXIgbGVzIGJlc29pbnMgZHUgZm9uY3Rpb25uZW1lbnQgZGUgbGEgUGxhdGVmb3JtZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwidVwiLCBbX3ZtLl92KFwiaWkuIEZpbmFsaXTDqSBkZXMgdHJhaXRlbWVudHMgZGUgRG9ubsOpZXMgZOKAmUtpdmlkXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEtpdmlkIHV0aWxpc2UgbGVzIERvbm7DqWVzIHJlY3VlaWxsaWVzIHBvdXIgbGVzIGZpbmFsaXTDqXNcXG4gICAgICAgICAgICBzdWl2YW50ZXMgOlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0aW9uIGRlIGxhIHNvdXNjcmlwdGlvbiDDoCB1biBjb250cmF0IGTigJlhYm9ubmVtZW50XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBHZXN0aW9uIGRlcyBhYm9ubmVtZW50cyDDoCBub3MgbmV3c2xldHRlcnMgZXQvb3UgYWxlcnRlc1xcbiAgICAgICAgICAgICAgICAgICAgZS1tYWlsc1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkZhY3R1cmF0aW9uIGV0IHBhaWVtZW50c1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIENvbm5leGlvbiBhdXRvbWF0aXF1ZSBhdXggZXNwYWNlcyByw6lzZXJ2w6lzIG91IHBlcnNvbm5lbHNcXG4gICAgICAgICAgICAgICAgICAgIGRlIGxhIFBsYXRlZm9ybWUsIGF1IG1veWVuIGRlcyBJZGVudGlmaWFudHMgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgQ3LDqWF0aW9uIGTigJlvdXRpbHMgZGUgcGFydGFnZSBzdXIgbGVzIHLDqXNlYXV4IHNvY2lhdXhcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFJlbGF0aW9uIGNsaWVudCA6IHByaXNlIGVuIGNvbXB0ZSBkZSBxdWVzdGlvbnMsXFxuICAgICAgICAgICAgICAgICAgICByw6ljbGFtYXRpb24sIHLDqWFsaXNhdGlvbiBk4oCZZW5xdcOqdGVzIGRlIHNhdGlzZmFjdGlvbiwg4oCmXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBNaXNlIGVuIHBsYWNlIGTigJlvcMOpcmF0aW9ucyBjb21tZXJjaWFsZXMgeSBjb21wcmlzXFxuICAgICAgICAgICAgICAgICAgICBmaWTDqWxpc2F0aW9uIGV0IHByb3NwZWN0aW9uIGNvbW1lcmNpYWxlIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJTdGF0aXN0aXF1ZXMgY29tbWVyY2lhbGVzXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW19jKFwidVwiLCBbX3ZtLl92KFwiaWlpLiBEdXLDqWUgZGUgY29uc2VydmF0aW9uXCIpXSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgUG91ciBsYSBtaXNlIGVuIMWTdXZyZSBkZSBzZXMgYWN0aXZpdMOpcywgS2l2aWQgc+KAmWVuZ2FnZSDDoFxcbiAgICAgICAgICAgIGNvbnNlcnZlciBsZXMgRG9ubsOpZXMgcG91ciB1bmUgZHVyw6llIGRlIHRyb2lzICgzKSBhbnMgw6AgY29tcHRlclxcbiAgICAgICAgICAgIGRlIGxhIGNvbGxlY3RlIGRlcyBkb25uw6llcyBvdSBkdSBkZXJuaWVyIGNvbnRhY3Qgw6ltYW5hbnQgZHVcXG4gICAgICAgICAgICBwcm9zcGVjdC4gVG91dGVmb2lzLCBLaXZpZCBz4oCZZW5nYWdlIMOgIHN1cHByaW1lciBsZXMgaW5mb3JtYXRpb25zXFxuICAgICAgICAgICAgZG9udCBsYSBjb25zZXJ2YXRpb24gbmUgc2VyYWl0IHBsdXMgbsOpY2Vzc2FpcmUgYXUgcmVnYXJkIGRlc1xcbiAgICAgICAgICAgIGV4aWdlbmNlcyBsw6lnaXNsYXRpdmVzIGV0IHLDqWdsZW1lbnRhaXJlcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfYyhcInVcIiwgW192bS5fdihcIml2LiBEZXN0aW5hdGFpcmVzIGRlcyBEb25uw6llc1wiKV0pXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEzigJlhY2PDqHMgYXV4IERvbm7DqWVzIGVzdCBsaW1pdMOpIMOgIGxhIHLDqWFsaXNhdGlvbiBkZXMgZmluYWxpdMOpc1xcbiAgICAgICAgICAgIGRlcyB0cmFpdGVtZW50cyBkw6ljcml0IGNpLWRlc3N1cyBldCBhdXggc2V1bGVzIHBlcnNvbm5lc1xcbiAgICAgICAgICAgIGhhYmlsaXTDqWVzIHNvdW1pc2VzIMOgIHVuZSBvYmxpZ2F0aW9uIGRlIGNvbmZpZGVudGlhbGl0w6kuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX2MoXCJ1XCIsIFtfdm0uX3YoXCJ2LiBTw6ljdXJpdMOpIGV0IGNvbmZpZGVudGlhbGl0w6kgZGVzIERvbm7DqWVzXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEtpdmlkIHPigJllbmdhZ2UgYcyAIGFzc3VyZXIgbGEgc8OpY3VyaXTDqSBldCBsYSBwcm90ZWN0aW9uIGRlc1xcbiAgICAgICAgICAgIERvbm7DqWVzIGR1IENsaWVudCBldCBkZSBs4oCZVXRpbGlzYXRldXIgYWZpbiBub3RhbW1lbnQgZCdlbXDDqmNoZXJcXG4gICAgICAgICAgICBxdSdlbGxlcyBuZSBzb2llbnQgZMOpZm9ybcOpZXMsIGVuZG9tbWFnw6llcyBvdSBjb21tdW5pcXXDqWVzIGHMgCBkZXNcXG4gICAgICAgICAgICB0aWVycyBub24gYXV0b3Jpc8Opcy5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgS2l2aWQgc+KAmWVuZ2FnZSBhzIAgYXNzdXJlciwgZXQgYcyAIGZhaXJlIHJlc3BlY3RlciBs4oCZaMOpYmVyZ2V1ciBkZXNcXG4gICAgICAgICAgICBEb25uw6llcyBhZ2lzc2FudCBlbiBzb3VzLXRyYWl0YW5jZSwgbGEgcGx1cyBzdHJpY3RlXFxuICAgICAgICAgICAgY29uZmlkZW50aWFsaXTDqSDMgWV0IGxhIHBsdXMgc3RyaWN0ZSBzw6ljdXJpdMOpIGRhbnMgbGUgcHJvY2Vzc3VzIGRlXFxuICAgICAgICAgICAgdHJhaXRlbWVudCBldCBkZSBzdG9ja2FnZSBkZXMgRG9ubsOpZXMuXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFRvdXRlZm9pcywgZGUgbWFuacOocmUgZXhjZXB0aW9ubmVsbGUsIGlsIHBldXQgYXJyaXZlciBxdWVcXG4gICAgICAgICAgICBjZXJ0YWluZXMgRG9ubsOpZXMgc29pZW50IHRyYW5zZsOpcsOpZXMgw6AgZGVzIHNvdXMtdHJhaXRhbnRzIG91XFxuICAgICAgICAgICAgcGFydGVuYWlyZXMgY29tbWVyY2lhdXggYXlhbnQgdW5lIGltcGxhbnRhdGlvbiBzaXR1w6llIGVuIGRlaG9yc1xcbiAgICAgICAgICAgIGRlIGzigJlVbmlvbiBldXJvcMOpZW5uZS4gRW4gY2FzIGRlIHRyYW5zZmVydCBkZSBjZSB0eXBlLCBLaXZpZFxcbiAgICAgICAgICAgIHPigJllbmdhZ2Ugw6AgY2UgcXVlIGxlIHRyYWl0ZW1lbnQgc29pdCBlZmZlY3R1w6kgY29uZm9ybcOpbWVudCBhdXhcXG4gICAgICAgICAgICBjbGF1c2VzIGNvbnRyYWN0dWVsbGVzIHR5cGVzIGRlIGxhIENvbW1pc3Npb24gZXVyb3DDqWVubmUgcXVpXFxuICAgICAgICAgICAgcGVybWV0dGVudCBkZSBnYXJhbnRpciB1biBuaXZlYXUgZGUgcHJvdGVjdGlvbiBzdWZmaXNhbnQgZGUgbGFcXG4gICAgICAgICAgICB2aWUgcHJpdsOpZSBldCBkZXMgZHJvaXRzIGZvbmRhbWVudGF1eCBkZXMgcGVyc29ubmVzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMThcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiMTEuIExvaSBBcHBsaWNhYmxlIOKAkyBDb21ww6l0ZW5jZSBkZSBqdXJpZGljdGlvblwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBMYSBsb2kgYXBwbGljYWJsZSBhdSBwcsOpc2VudCBjb250cmF0IGVzdCBsYSBsb2kgZnJhbsOnYWlzZS4gTGVzXFxuICAgICAgICAgICAgUGFydGllcyBz4oCZZW5nYWdlbnQgYcyAIHByb2PDqWRlciBhzIAgdW5lIHRlbnRhdGl2ZSBkZSBjb25jaWxpYXRpb25cXG4gICAgICAgICAgICBhdmFudCB0b3V0IHJlY291cnMgYXUganVnZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJja2l2aWRcIiB9LCBbXG4gICAgICAgIF9jKFwiaDFcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJQb2xpdGlxdWUgZGUgQ29uZmlkZW50aWFsaXTDqVwiKV0pXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIENldHRlIFBvbGl0aXF1ZSBkZSBDb25maWRlbnRpYWxpdMOpIGVzdCBsYSBiYXNlIHBvdXIgdHJhaXRlclxcbiAgICAgICAgICAgIHRvdXRlcyBEb25uw6llcyBQZXJzb25uZWxsZXMgcXVlIG5vdXMgcmFzc2VtYmxvbnMgb3UgcXVlIHZvdXNcXG4gICAgICAgICAgICBub3VzIGZvdXJuaXNzZXogYXUgdHJhdmVycyBkdSBzaXRlIHdlYiBkaXNwb25pYmxlIMOgIGzigJlhZHJlc3NlXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiL1wiIH0gfSwgW192bS5fdihcInd3dy5raXZpZC5mclwiKV0pLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiIChjaS1hcHLDqHMgZMOpbm9tbcOpIMKrIGxhIFBsYXRlZm9ybWVcXG4gICAgICAgICAgICDCuyksIGFpbnNpIHF14oCZw6AgdG91dGUgcmVjaGVyY2hlIGVmZmVjdHXDqWUgc3VyIGxhZGl0ZSBQbGF0ZWZvcm1lLFxcbiAgICAgICAgICAgIGV0L291IHRvdXRlIHV0aWxpc2F0aW9uIGRlIGxhZGl0ZSBQbGF0ZWZvcm1lIHBhciBs4oCZaW50ZXJuYXV0ZVxcbiAgICAgICAgICAgIHF1aSBz4oCZeSBjb25uZWN0ZSAowqsgbOKAmVV0aWxpc2F0ZXVyIMK7KS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazFcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjEuIElkZW50aXTDqSBkZXMgcmVzcG9uc2FibGVzIGRlIHRyYWl0ZW1lbnRcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgQ2hhcXVlIHByb2Zlc3Npb25uZWwgcHJhdGljaWVuIGVzdCBjb25zaWTDqXLDqSBjb21tZSByZXNwb25zYWJsZVxcbiAgICAgICAgICAgIGRlIHRyYWl0ZW1lbnQgZGVzIGRvbm7DqWVzIHBlcnNvbm5lbGxlcyBkZSBzYW50w6kgZGUgc2VzXFxuICAgICAgICAgICAgVXRpbGlzYXRldXJzLCB0YW5kaXMgcXVlIEtJVklEIGFnaXQgY29tbWUgc291cy10cmFpdGFudCBhZ2lzc2FudFxcbiAgICAgICAgICAgIHN1ciBpbnN0cnVjdGlvbiBwYXJ0aWN1bGnDqHJlIGRlIGNoYXF1ZSBwcmF0aWNpZW4uXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIEtJVklEIGVzdCBjb25zaWTDqXLDqSBjb21tZSByZXNwb25zYWJsZSBkZSB0cmFpdGVtZW50IGRlcyBkb25uw6llc1xcbiAgICAgICAgICAgIHJlbGF0aXZlcyDDoCBsYSBjcsOpYXRpb24gZHUgY29tcHRlIHBlcnNvbm5lbCBkZSBsJ3V0aWxpc2F0ZXVyLCBkZVxcbiAgICAgICAgICAgIHNhIG5hdmlnYXRpb24gc3VyIGxhIFBsYXRlZm9ybWUsIMOgIGxhIGNyw6lhdGlvbiBkZSBzdGF0aXN0aXF1ZXNcXG4gICAgICAgICAgICByZWxhdGl2ZXMgw6AgbCd1dGlsaXNhdGlvbiBkZSBsJ291dGlsLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrMVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiMi4gRG9ubsOpZXMgcXVlIG5vdXMgcG91dm9ucyBjb2xsZWN0ZXIgdm91c1xcbiAgICAgICAgICAgICAgICBjb25jZXJuYW50XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIE5vdXMgcG91dm9ucyDDqnRyZSBhbWVuw6lzIMOgIHJhc3NlbWJsZXIgZXQgdHJhaXRlciBsZXMgRG9ubsOpZXNcXG4gICAgICAgICAgICBQZXJzb25uZWxsZXMgc3VpdmFudGVzIDpcXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXRpb25zIHF1ZSB2b3VzIG5vdXMgZm91cm5pc3NleiBlbiByZW1wbGlzc2FudCBkZXNcXG4gICAgICAgICAgICAgICAgICAgIGNoYW1wcyBsaWJyZXMgb3UgZm9ybXVsYWlyZXMgc3VyIG5vdHJlIFBsYXRlZm9ybWUuIExlc1xcbiAgICAgICAgICAgICAgICAgICAgbWVudGlvbnMgc291cyBjZXMgZm9ybXVsYWlyZXMgcmFwcGVsbGVudCBsZXMgZHJvaXRzIGRvbnRcXG4gICAgICAgICAgICAgICAgICAgIHZvdXMgZGlzcG9zZXogc3VyIHZvcyBpbmZvcm1hdGlvbnMsIGNvbW1lIHN0aXB1bMOpXFxuICAgICAgICAgICAgICAgICAgICBjaS1hcHLDqHMgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgU2kgdm91cyBub3VzIGNvbnRhY3Rleiwgbm91cyBwb3V2b25zIGdhcmRlciB1biByYXBwb3J0XFxuICAgICAgICAgICAgICAgICAgICBkZSBjZXR0ZSBjb3JyZXNwb25kYW5jZSBldCBub3VzIHBvdXZvbnMgZW5yZWdpc3RyZXIgdm9zXFxuICAgICAgICAgICAgICAgICAgICBjb21tdW5pY2F0aW9ucyBhdmVjIG5vdXMgcG91ciBkZXMgY29udHLDtGxlcyBkZSBxdWFsaXTDqVxcbiAgICAgICAgICAgICAgICAgICAgZXQgw6AgZGVzIGZpbnMgZGUgZm9ybWF0aW9uIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIERlcyBkw6l0YWlscyBkZSB2b3MgdmlzaXRlcyBzdXIgbm90cmUgUGxhdGVmb3JtZSDigJNcXG4gICAgICAgICAgICAgICAgICAgIG5vdGFtbWVudCwgw6AgZGVzIGRvbm7DqWVzIHJlbGF0aXZlcyBhdSB0cmFmaWMsIHZvdHJlXFxuICAgICAgICAgICAgICAgICAgICBwYXJjb3Vycywgdm90cmUgbGFuZ3VlIGRlIG5hdmlnYXRldXIsIGRlcyBkb25uw6llcyBkZVxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxpc2F0aW9uLCBkZXMgY2FybmV0cyB3ZWIgZXQgZOKAmWF1dHJlcyBpbmZvcm1hdGlvbnNcXG4gICAgICAgICAgICAgICAgICAgIGRlIGNvbW11bmljYXRpb24g4oCTIGV0IGxlcyByZXNzb3VyY2VzIGF1eHF1ZWxsZXMgdm91c1xcbiAgICAgICAgICAgICAgICAgICAgYWNjw6lkZXouXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiQm9va21hcmsyXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCIzLiBEdXLDqWUgZGUgY29uc2VydmF0aW9uIGRlcyBpbmZvcm1hdGlvbnMgcXVlIG5vdXMgcG91dm9uc1xcbiAgICAgICAgICAgICAgICBhY3F1w6lyaXIgdm91cyBjb25jZXJuYW50XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTGEgcMOpcmlvZGUgZGUgcsOpdGVudGlvbiBwb3VyIGRlcyBkb25uw6llcyBldC9vdSBkZXMgaW5mb3JtYXRpb25zXFxuICAgICAgICAgICAgZGUgbm90cmUgUGxhdGVmb3JtZSBlc3QgZGUgMTMgbW9pcyDDoCBs4oCZZXhjZXB0aW9uIGRlcyBkb25uw6llc1xcbiAgICAgICAgICAgIGF5YW50IGZhaXQgbOKAmW9iamV0IGTigJl1biBwcm9jZXNzdXMgZOKAmWFub255bWlzYXRpb24gY29uZm9ybcOpbWVudCDDoFxcbiAgICAgICAgICAgIGxhIGzDqWdpc2xhdGlvbiBhcHBsaWNhYmxlLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBUb3V0ZWZvaXMsIGNlcnRhaW5lcyBkb25uw6llcyBwZXV2ZW50IMOqdHJlIGNvbnNlcnbDqWVzIHBvdXIgdW5lXFxuICAgICAgICAgICAgcGx1cyBsb25ndWUgZHVyw6llIGV0IG5vdGFtbWVudCAoaSkgcGVuZGFudCB0b3V0ZSBsYSBkdXLDqWUgZGUgdmllXFxuICAgICAgICAgICAgZGUgdm90cmUgY29tcHRlIGVuIGxpZ25lIGV0IGp1c3F14oCZw6Agc2Egc3VwcHJlc3Npb24sIGxlIGNhc1xcbiAgICAgICAgICAgIMOpY2jDqWFudCwgKGlpKSBwZW5kYW50IGxhIGR1csOpZSBzdGlwdWzDqWUgZGFucyB0b3V0IGNvbnRyYXQgcXVpXFxuICAgICAgICAgICAgc2VyYWl0IGNvbmNsdSBhdmVjIEtJVklELlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrM1wiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiNi4gUG9saXRpcXVlIGVuIG1hdGnDqHJlIGRlIGNvb2tpZXNcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgTm91cyBwb3V2b25zIG9idGVuaXIgZGVzIGluZm9ybWF0aW9ucyBzdXIgdm90cmUgdXRpbGlzYXRpb25cXG4gICAgICAgICAgICBk4oCZSW50ZXJuZXQgZW4gZ8OpbsOpcmFsIGVuIHV0aWxpc2FudCBkZXMgZGlzcG9zaXRpZnMgZOKAmWFjY8Ooc1xcbiAgICAgICAgICAgIG5vdGFtbWVudCBkZSB0eXBlIGNvb2tpZSAodW4gY29va2llIGVzdCB1biBwZXRpdCBmaWNoaWVyIHRleHRlXFxuICAgICAgICAgICAgcXVpIGVzdCBnYXJkw6kgc3VyIGxlIGRpc3F1ZSBkdXIgZGUgdm90cmUgb3JkaW5hdGV1cikuIExlc1xcbiAgICAgICAgICAgIGNvb2tpZXMgbm91cyBhaWRlbnQgw6AgYW3DqWxpb3JlciBub3RyZSBQbGF0ZWZvcm1lIGV0IMOgIGZvdXJuaXIgdW5cXG4gICAgICAgICAgICBzZXJ2aWNlIGRlIG1laWxsZXVyZSBxdWFsaXTDqS4gTm91cyB1dGlsaXNvbnMgZGVzIGNvb2tpZXMgw6l0YW50XFxuICAgICAgICAgICAgc3RyaWN0ZW1lbnQgbsOpY2Vzc2FpcmVzIMOgIHZvdHJlIHV0aWxpc2F0aW9uIGRlIG5vdHJlIFBsYXRlZm9ybWUuXFxuICAgICAgICAgICAgVm91cyBwb3V2ZXogcmVmdXNlciBk4oCZYWNjZXB0ZXIgY2VzIGNvb2tpZXMgZW4gYWN0aXZhbnQgbGVcXG4gICAgICAgICAgICBwYXJhbcOodHJlIHF1aSB2b3VzIHBlcm1ldCBkZSByZWZ1c2VyIGzigJlpbnN0YWxsYXRpb24gZGUgY29va2llc1xcbiAgICAgICAgICAgIHN1ciB2b3RyZSBvcmRpbmF0ZXVyLiBDZXBlbmRhbnQsIHNpIHZvdXMgY2hvaXNpc3NleiBjZVxcbiAgICAgICAgICAgIHBhcmFtw6h0cmUsIGlsIGVzdCBwb3NzaWJsZSBxdWUgdm91cyBzb3lleiBpbmNhcGFibGUgZOKAmWFjY8OpZGVyIMOgXFxuICAgICAgICAgICAgY2VydGFpbmVzIHBhcnRpZXMgZGUgbm90cmUgUGxhdGVmb3JtZS5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazRcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIjcuIFBhcnRhZ2UgYXZlYyBkZXMgdGllcnNcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgQWZpbiBkZSB2b3VzIGFwcG9ydGVyIGxlIG1laWxsZXVyIHNlcnZpY2UsIG5vdXMgcG91dm9ucyBkYW5zXFxuICAgICAgICAgICAgY2VydGFpbnMgY2FzIHBhcnRhZ2VyIHZvcyBkb25uw6llcyBhdmVjIGRlcyB0aWVycywgbm90YW1tZW50IGRlc1xcbiAgICAgICAgICAgIHBhcnRlbmFpcmVzIHRlY2huaXF1ZXMgb3UgY29tbWVyY2lhdXguIE5vdXMgbmUgcGFydGFnZXJvbnMgdm9zXFxuICAgICAgICAgICAgZG9ubsOpZXMgcXXigJlhdmVjIGRlcyBwYXJ0ZW5haXJlcyBxdWkgcHLDqXNlbnRlbnQgZGVzIGdhcmFudGllc1xcbiAgICAgICAgICAgIHN1ZmZpc2FudGVzIHF1YW50IMOgIGxhIG1pc2UgZW4gxZN1dnJlIGRlIG1lc3VyZXMgdGVjaG5pcXVlcyBldFxcbiAgICAgICAgICAgIG9yZ2FuaXNhdGlvbm5lbGxlcyBhcHByb3ByacOpZXMgZGUgbWFuacOocmUgw6AgZ2FyYW50aXIgbGFcXG4gICAgICAgICAgICBwcm90ZWN0aW9uIGRlIHZvcyBkcm9pdHMgZXQgZGUgdm9zIGRvbm7DqWVzLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBOb3VzIHBvdXZvbnMgZGl2dWxndWVyIHZvcyBkb25uw6llcyDDoCBkZXMgdGllcnMgOlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBFbiBjYXMgZGUgdmVudGUgb3UgZOKAmWFjaGF0IGTigJl1bmUgZGUgbm9zIGVudHJlcHJpc2VzIG91XFxuICAgICAgICAgICAgICAgICAgICBiaWVucywgbm91cyBwb3V2b25zIGRpdnVsZ3VlciB2b3MgY29vcmRvbm7DqWVzIGF1IHZlbmRldXJcXG4gICAgICAgICAgICAgICAgICAgIG91IGFjaGV0ZXVyIHByb3NwZWN0aWYgZGUgY2VzIGVudHJlcHJpc2VzIG91IGJpZW5zIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFNpIG5vdXMgb3UgdG91cyBub3MgYmllbnMgc29udCBhY3F1aXMgcGFyIHVuIHRpZXJzLFxcbiAgICAgICAgICAgICAgICAgICAgdG91dGVzIGNvb3Jkb25uw6llcyBnYXJkw6llcyBwYXIgbm91cyBzdXIgbm9zIGNsaWVudHNcXG4gICAgICAgICAgICAgICAgICAgIHNlcmFpZW50IGFpbnNpIHRyYW5zZsOpcsOpcyA7XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IGF0dHJzOiB7IGFsaWduOiBcIkpVU1RJRllcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBTaSBub3VzIGF2b25zIGzigJlvYmxpZ2F0aW9uIGRlIGRpdnVsZ3VlciBvdSBkZSBwYXJ0YWdlclxcbiAgICAgICAgICAgICAgICAgICAgdm9zIGNvb3Jkb25uw6llcyBhZmluIGRlIHNlIGNvbmZvcm1lciDDoCB0b3V0ZSBvYmxpZ2F0aW9uXFxuICAgICAgICAgICAgICAgICAgICBsw6lnYWxlIDtcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIEFmaW4gZGUgcHJvdMOpZ2VyIG5vcyBkcm9pdHMsIHByb3ByacOpdMOpIG91IHPDqWN1cml0w6ksIG5vc1xcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50cyBvdSBhdXRyZXMgO1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBhdHRyczogeyBhbGlnbjogXCJKVVNUSUZZXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgRW4gY2FzIGTigJnDqWNoYW5nZSBk4oCZaW5mb3JtYXRpb25zIGF2ZWMgZOKAmWF1dHJlcyBzb2Npw6l0w6lzXFxuICAgICAgICAgICAgICAgICAgICBldCBvcmdhbmlzYXRpb25zIMOgIGRlcyBmaW5zIGRlIHByb3RlY3Rpb24gY29udHJlIGxhXFxuICAgICAgICAgICAgICAgICAgICBmcmF1ZGUgZXQgbGEgcsOpZHVjdGlvbiBkdSByaXNxdWUgZGUgY3LDqWRpdC5cXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJCb29rbWFyazVcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICA5LiBDaGFuZ2VtZW50cyBsacOpcyDDoCBub3RyZSBwb2xpdGlxdWUgZGUgY29uZmlkZW50aWFsaXTDqSBkZVxcbiAgICAgICAgICAgICAgICB2b3RyZSB2aWUgcHJpdsOpZSByZWxhdGl2ZSDDoCBsYSBQbGF0ZWZvcm1lIEtJVklEXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgVG91dCBjaGFuZ2VtZW50IHF1ZSBub3VzIGZhaXNvbnMgw6Agbm90cmUgUG9saXRpcXVlIGRlXFxuICAgICAgICAgICAgQ29uZmlkZW50aWFsaXTDqSBkYW5zIGxlIGZ1dHVyIHNlcmEgcG9zdMOpIHN1ciBjZXR0ZSBwYWdlLlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBuYW1lOiBcIkJvb2ttYXJrNlwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiMTAuIENvbnRhY3RcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgYXR0cnM6IHsgYWxpZ246IFwiSlVTVElGWVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgU2kgdm91cyBhdmV6IGxhIG1vaW5kcmUgcXVlc3Rpb24gY29uY2VybmFudCBjZXR0ZSBQb2xpdGlxdWUgZGVcXG4gICAgICAgICAgICBDb25maWRlbnRpYWxpdMOpIGV0IGxhIGZhw6dvbiBkb250IG5vdXMgdXRpbGlzb25zIHZvcyBEb25uw6llc1xcbiAgICAgICAgICAgIFBlcnNvbm5lbGxlcywgY2VsbGUtY2kgZXN0IGJpZW52ZW51ZSBldCBkZXZyYSDDqnRyZSBhZHJlc3PDqWUgw6BcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJtYWlsdG86Y29udGFjdEBraXZpZC5mclwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiY29udGFjdEBraXZpZC5mclwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImtpdi1ibG9ja1wiLCBhdHRyczogeyBpZDogXCJyZWdpc3Rlci1mb3JtXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX3ZtLnVzZXJUeXBlID09PSBcInBhdGllbnRcIlxuICAgICAgICAgID8gX2MoXCJoMlwiLCBbX3ZtLl92KFwiSW5zY3JpcHRpb25cIildKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS51c2VyVHlwZSA9PT0gXCJkb2N0b3JcIlxuICAgICAgICAgID8gX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkluc2NyaXB0aW9uIHByYXRpY2llbiBcIiksXG4gICAgICAgICAgICAgIF92bS5yZWdpc3RlclR5cGUgPT09IFwiZmZta3JcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJGRk1LUlwiKV0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAhX3ZtLmZvcm1Mb2FkaW5nUmVnaXN0ZXJcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX3ZtLnJlZ2lzdGVyVHlwZSA9PT0gXCJmZm1rclwiXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmZm1rci1jaGVjay1yZWdpc3Rlci1mb3JtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmV1aWxsZXogZW50cmVyIGwnZW1haWwgdXRpbGlzw6kgc3VyIHZvdHJlIGNvbXB0ZSBGRk1LUlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWdpc3RlckRldGFpbHMuZW1haWwpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5lbXB0eU1lc3NhZ2UuZW1haWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVnaXN0ZXJEZXRhaWxzLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcjogX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICE9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tYWZ0ZXJcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGtleXVwOiBfdm0udmFsaWRhdGlvbkVtYWlsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZ2lzdGVyRGV0YWlscy5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1lcnJvciBlcnJvciBpY29uLTI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVnaXN0ZXJEZXRhaWxzLmVtYWlsKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uZW1wdHlNZXNzYWdlLmVtYWlsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnJlZ2lzdGVyRGV0YWlscy5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJtZXNzYWdlLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVnaXN0ZXJEZXRhaWxzLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbXB0eU1lc3NhZ2UuZW1haWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWdpc3RlckRldGFpbHMuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVtcHR5TWVzc2FnZS5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVnaXN0ZXJEZXRhaWxzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnJlZ2lzdGVyRGV0YWlscywgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXJEZXRhaWxzLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHk6ICFfdm0ucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbXB0eU1lc3NhZ2UucGxhaW5QYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJNb3QgZGUgcGFzc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVBhc3N3b3JkOiBfdm0uaGFzVmlzaWJsZVBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24tYWZ0ZXJcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiBfdm0uZ2V0U2VjdXJlUGFzc1Byb2dyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogX3ZtLnZhbGlkYXRpb25QYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGljay1pY29uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5oYXNWaXNpYmxlUGFzc3dvcmQgPSAhX3ZtLmhhc1Zpc2libGVQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNWaXNpYmxlUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV5ZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV5ZS1zbGFzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5wbGFpblBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1lc3NhZ2UtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHlNZXNzYWdlLnBsYWluUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0U2VjdXJlUGFzc1Byb2dyZXNzID49IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1lc3NhZ2Utc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1vdCBkZSBwYXNzZSBzw6ljdXJpc8OpXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucmVnaXN0ZXJEZXRhaWxzLCBcInBsYWluUGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS52YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmRDb25maXJtKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uZW1wdHlNZXNzYWdlLnBhc3N3b3JkQ29uZmlybSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5wYXNzd29yZENvbmZpcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbXB0eTogIV92bS5wYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJDb25maXJtYXRpb24gZHUgbW90IGRlIHBhc3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGVQYXNzd29yZDogX3ZtLmhhc1Zpc2libGVQYXNzd29yZENvbmZpcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1hZnRlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IF92bS52YWxpZGF0aW9uUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2staWNvblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybSA9ICFfdm0uaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWVcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWUtc2xhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0udmFsaWRhdGlvbk1lc3NhZ2UucGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkQ29uZmlybSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmVtcHR5TWVzc2FnZS5wYXNzd29yZENvbmZpcm0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucGFzc3dvcmRDb25maXJtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1lc3NhZ2UtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmRDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbXB0eU1lc3NhZ2UucGFzc3dvcmRDb25maXJtICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucGFzc3dvcmRDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5wYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkQ29uZmlybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZENvbmZpcm0gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZENvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGRpc2FibGVkOiBfdm0uYnRuTG9hZGluZ1JlZ2lzdGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nUmVnaXN0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnZhbGlkUmVnaXN0cmF0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlMnaW5zY3JpcmUgYXZlYyBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvLWZmbWtyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL2xvZ28ta2l2aWQtRkZNS1Itd2hpdGUuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiTG9nbyBGRk1LUlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyZWdpc3Rlci1mb3JtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuLWNvbnRhaW5lciBzb2NpYWwtcmVnaXN0ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZ2lzdGVyT2F1dGgoXCJmYWNlYm9va1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTJ2luc2NyaXJlIGF2ZWMgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYWIgZmEtZmFjZWJvb2stZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVnaXN0ZXJPYXV0aChcImdvb2dsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTJ2luc2NyaXJlIGF2ZWMgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFiIGZhLWdvb2dsZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5sYXN0bmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVnaXN0ZXJEZXRhaWxzLmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIk5vbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwiZmFtaWx5LW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWFmdGVyXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5sYXN0bmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVnaXN0ZXJEZXRhaWxzLmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVtcHR5TWVzc2FnZS5sYXN0bmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZWdpc3RlckRldGFpbHMubGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucmVnaXN0ZXJEZXRhaWxzLCBcImxhc3RuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3RlckRldGFpbHMubGFzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHlNZXNzYWdlLmZpcnN0bmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVnaXN0ZXJEZXRhaWxzLmZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJQcsOpbm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJnaXZlbi1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1hZnRlclwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbXB0eU1lc3NhZ2UuZmlyc3RuYW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWdpc3RlckRldGFpbHMuZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVtcHR5TWVzc2FnZS5maXJzdG5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVnaXN0ZXJEZXRhaWxzLmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5yZWdpc3RlckRldGFpbHMsIFwiZmlyc3RuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3RlckRldGFpbHMuZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS52YWxpZGF0aW9uTWVzc2FnZS5lbWFpbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZ2lzdGVyRGV0YWlscy5lbWFpbCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmVtcHR5TWVzc2FnZS5lbWFpbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWdpc3RlckRldGFpbHMuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2VyOiBfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1hZnRlclwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsga2V5dXA6IF92bS52YWxpZGF0aW9uRW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVnaXN0ZXJEZXRhaWxzLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWVycm9yIGVycm9yIGljb24tMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWdpc3RlckRldGFpbHMuZW1haWwpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5lbXB0eU1lc3NhZ2UuZW1haWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ucmVnaXN0ZXJEZXRhaWxzLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1lc3NhZ2UtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25NZXNzYWdlLmVtYWlsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWdpc3RlckRldGFpbHMuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbk1lc3NhZ2UuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5lbWFpbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnJlZ2lzdGVyRGV0YWlscy5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZW1wdHlNZXNzYWdlLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZWdpc3RlckRldGFpbHMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucmVnaXN0ZXJEZXRhaWxzLCBcImVtYWlsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3RlckRldGFpbHMuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbXB0eTogIV92bS5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5wbGFpblBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIk1vdCBkZSBwYXNzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlUGFzc3dvcmQ6IF92bS5oYXNWaXNpYmxlUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbi1hZnRlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IF92bS5nZXRTZWN1cmVQYXNzUHJvZ3Jlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJuZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBfdm0udmFsaWRhdGlvblBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrLWljb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmhhc1Zpc2libGVQYXNzd29yZCA9ICFfdm0uaGFzVmlzaWJsZVBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc1Zpc2libGVQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZXllXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtZXllLXNsYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHlNZXNzYWdlLnBsYWluUGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbXB0eU1lc3NhZ2UucGxhaW5QYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRTZWN1cmVQYXNzUHJvZ3Jlc3MgPj0gMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgTW90IGRlIHBhc3NlIHPDqWN1cmlzw6lcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZWdpc3RlckRldGFpbHMucGxhaW5QYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5yZWdpc3RlckRldGFpbHMsIFwicGxhaW5QYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVnaXN0ZXJEZXRhaWxzLnBsYWluUGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZENvbmZpcm0pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5lbXB0eU1lc3NhZ2UucGFzc3dvcmRDb25maXJtICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnBhc3N3b3JkQ29uZmlybSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5OiAhX3ZtLnBhc3N3b3JkQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIkNvbmZpcm1hdGlvbiBkdSBtb3QgZGUgcGFzc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVBhc3N3b3JkOiBfdm0uaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uLWFmdGVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogX3ZtLnZhbGlkYXRpb25QYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGljay1pY29uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5oYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtID0gIV92bS5oYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc1Zpc2libGVQYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV5ZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV5ZS1zbGFzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS52YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmRDb25maXJtKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uZW1wdHlNZXNzYWdlLnBhc3N3b3JkQ29uZmlybSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5wYXNzd29yZENvbmZpcm0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbk1lc3NhZ2UucGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZ2lzdGVyRGV0YWlscy5wbGFpblBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbk1lc3NhZ2UucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVtcHR5TWVzc2FnZS5wYXNzd29yZENvbmZpcm0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5wYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHlNZXNzYWdlLnBhc3N3b3JkQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc3dvcmRDb25maXJtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkQ29uZmlybSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lbXB0eU1lc3NhZ2UuYWNjZXB0Q0cgJiYgIV92bS5hY2NlcHRDR1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJhY2NlcHQtQ0ctYmxvY2tcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWNjZXB0Q0cgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWNjZXB0Q0csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWNjZXB0Q0cgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY2NlcHRDR1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqJ2FpIGx1IGV0IGonYWNjZXB0ZSBsZXNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb2RhbENHID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29uZGl0aW9ucyBnw6luw6lyYWxlc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbXB0eU1lc3NhZ2UuYWNjZXB0Q0cgJiYgIV92bS5hY2NlcHRDR1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1wdHktZXJyb3ItbWVzcyBwdC0wXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVtcHR5TWVzc2FnZS5hY2NlcHRDRykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZWQ6IF92bS5idG5Mb2FkaW5nUmVnaXN0ZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmJ0bkxvYWRpbmdSZWdpc3RlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRSZWdpc3RyYXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiUydpbnNjcmlyZVwiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZm9ybS1ibG9ja1wiIH0sXG4gICAgICAgICAgICAgIF92bS5fbCg5LCBmdW5jdGlvbihsb2FkaW5nLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgbG9hZGluZy1ibG9ja1wiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZzLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiNDUwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsQ0csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5tb2RhbENHID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RhbENHXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJDb25kaXRpb25zIEfDqW7DqXJhbGVzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIkNHXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmFsaWRBY2NlcHRDRygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJKJ2FpIGx1IGV0IGonYWNjZXB0ZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyLXRleHRcIiB9LCBbX3ZtLl92KFwib3VcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBhdHRyczogeyBpZDogXCJ1c2VyLXR5cGUtY2hvaWNlXCIgfSB9LCBbXG4gICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiRGl0ZXMtbm91cyBlbiBwbHVzIMOgwqBwcm9wb3PCoGRlwqB2b3VzXCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi1jb250YWluZXJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICBzZWNvbmRhcnk6IF92bS4kcGFyZW50LnVzZXJDaG9pY2UudXNlclR5cGUudmFsdWUgPT0gXCJkb2N0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkVXNlclR5cGVDaG9pY2UoXCJwYXRpZW50XCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBKZSBzdWlzIHVuIHBhcnRpY3VsaWVyXFxuICAgICAgICBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgIHNlY29uZGFyeTogX3ZtLiRwYXJlbnQudXNlckNob2ljZS51c2VyVHlwZS52YWx1ZSA9PSBcInBhdGllbnRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkVXNlclR5cGVDaG9pY2UoXCJkb2N0b3JcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIEplIHN1aXMgdW4gcHJvZmVzc2lvbm5lbFxcbiAgICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiVnVlIiwiUmVnaXN0ZXIiLCJheGlvcyIsIlZ1ZUF4aW9zIiwidXNlIiwiVnVlc2F4IiwicmVuZGVyIiwiaCIsIiRtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=