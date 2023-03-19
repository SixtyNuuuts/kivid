"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["reset-pass"],{

/***/ "./assets/vue/fullpage/resetpassword/reset-pass.js":
/*!*********************************************************!*\
  !*** ./assets/vue/fullpage/resetpassword/reset-pass.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _ResetPass_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPass.vue */ "./assets/vue/fullpage/resetpassword/ResetPass.vue");
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
    return h(_ResetPass_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}).$mount('#vue');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");








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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      plainPassword: "",
      passwordConfirm: "",
      hasVisiblePassword: false,
      hasVisiblePasswordConfirm: false,
      csrfTokenResetPass: null,
      btnLoadingResetPass: false,
      validationMessage: {
        password: null
      }
    };
  },
  methods: {
    validResetPass: function validResetPass() {
      var _this = this;

      this.btnLoadingResetPass = true;
      this.axios.post("/reset-password/reset", {
        _token: this.csrfTokenResetPass,
        plainPassword: this.plainPassword
      }).then(function (response) {
        _services_function__WEBPACK_IMPORTED_MODULE_7__["default"].openSuccessNotificationStay("Mot de passe réinitialisé", response.data);
        _this.btnLoadingResetPass = false;
        setTimeout(function () {
          document.location.href = "/connexion";
        }, 2000);
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        _services_function__WEBPACK_IMPORTED_MODULE_7__["default"].openErrorNotificationStay("Erreur", errorMess);
        _this.btnLoadingResetPass = false;
      });
    },
    validationPassword: function validationPassword() {
      this.validationMessage.password = null;

      if (this.plainPassword !== this.passwordConfirm) {
        this.validationMessage.password = "Les mots de passe ne correspondent pas.";
      }
    }
  },
  computed: {
    getSecurePassProgress: function getSecurePassProgress() {
      var progress = 0; // at least one number

      if (/\d/.test(this.plainPassword)) {
        progress += 20;
      } // at least one capital letter


      if (/(.*[A-Z].*)/.test(this.plainPassword)) {
        progress += 20;
      } // at menons a lowercase


      if (/(.*[a-z].*)/.test(this.plainPassword)) {
        progress += 20;
      } // more than 9 digits


      if (this.plainPassword.length >= 9) {
        progress += 20;
      } // at least one special character


      if (/[^A-Za-z0-9]/.test(this.plainPassword)) {
        progress += 20;
      }

      return progress;
    }
  },
  created: function created() {
    vue__WEBPACK_IMPORTED_MODULE_8__["default"].prototype.$vs = this.$vs;
    document.body.classList.add("fuzzy-balls");
    document.body.classList.add("animated");
    var data = JSON.parse(document.getElementById("vueData").innerHTML);
    this.csrfTokenResetPass = data.csrfTokenResetPass;
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=style&index=0&id=6f6aa461&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=style&index=0&id=6f6aa461&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/vue/fullpage/resetpassword/ResetPass.vue":
/*!*********************************************************!*\
  !*** ./assets/vue/fullpage/resetpassword/ResetPass.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPass_vue_vue_type_template_id_6f6aa461_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPass.vue?vue&type=template&id=6f6aa461&scoped=true& */ "./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=template&id=6f6aa461&scoped=true&");
/* harmony import */ var _ResetPass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPass.vue?vue&type=script&lang=js& */ "./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=script&lang=js&");
/* harmony import */ var _ResetPass_vue_vue_type_style_index_0_id_6f6aa461_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResetPass.vue?vue&type=style&index=0&id=6f6aa461&lang=scss&scoped=true& */ "./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=style&index=0&id=6f6aa461&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ResetPass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPass_vue_vue_type_template_id_6f6aa461_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResetPass_vue_vue_type_template_id_6f6aa461_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6f6aa461",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/fullpage/resetpassword/ResetPass.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPass.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=style&index=0&id=6f6aa461&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=style&index=0&id=6f6aa461&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPass_vue_vue_type_style_index_0_id_6f6aa461_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPass.vue?vue&type=style&index=0&id=6f6aa461&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=style&index=0&id=6f6aa461&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=template&id=6f6aa461&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=template&id=6f6aa461&scoped=true& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPass_vue_vue_type_template_id_6f6aa461_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPass_vue_vue_type_template_id_6f6aa461_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPass_vue_vue_type_template_id_6f6aa461_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPass.vue?vue&type=template&id=6f6aa461&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=template&id=6f6aa461&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=template&id=6f6aa461&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/resetpassword/ResetPass.vue?vue&type=template&id=6f6aa461&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container fullpage" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "kiv-block", attrs: { id: "reset-pass" } }, [
      _c("h2", [_vm._v("Réinitialisez votre mot de passe")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "register-form" },
        [
          _c("vs-input", {
            attrs: {
              type: "password",
              "label-placeholder": "Nouveau mot de passe",
              visiblePassword: _vm.hasVisiblePassword,
              "icon-after": "",
              required: "",
              progress: _vm.getSecurePassProgress
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
                _vm.getSecurePassProgress >= 100
                  ? {
                      key: "message-success",
                      fn: function() {
                        return [
                          _vm._v(
                            "\n                    Mot de passe sécurisé\n                "
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
              value: _vm.plainPassword,
              callback: function($$v) {
                _vm.plainPassword = $$v
              },
              expression: "plainPassword"
            }
          }),
          _vm._v(" "),
          _c("vs-input", {
            class: {
              error:
                _vm.validationMessage.password &&
                _vm.plainPassword &&
                _vm.passwordConfirm
            },
            attrs: {
              type: "password",
              "label-placeholder": "Confirmation du nouveau mdp",
              visiblePassword: _vm.hasVisiblePasswordConfirm,
              "icon-after": "",
              required: ""
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
                _vm.validationMessage.password &&
                _vm.plainPassword &&
                _vm.passwordConfirm
                  ? {
                      key: "message-danger",
                      fn: function() {
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.validationMessage.password) +
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
              class: { disabled: _vm.btnLoadingResetPass }
            },
            [
              _c(
                "vs-button",
                {
                  staticClass: "w-100",
                  attrs: {
                    disabled:
                      _vm.btnLoadingResetPass ||
                      _vm.validationMessage.password ||
                      !_vm.plainPassword ||
                      !_vm.passwordConfirm,
                    loading: _vm.btnLoadingResetPass,
                    type: "submit"
                  },
                  on: { click: _vm.validResetPass }
                },
                [_vm._v("Réinitialiser le mot de passe")]
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(/*! ../../../img/logo-kivid.svg */ "./assets/img/logo-kivid.svg"),
          alt: "Logo Kivid"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./assets/img/logo-kivid.svg":
/*!***********************************!*\
  !*** ./assets/img/logo-kivid.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo-kivid.c02b836f.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-38d47d","assets_vue_services_function_js-node_modules_moment_locale_sync_recursive_"], function() { return __webpack_exec__("./assets/vue/fullpage/resetpassword/reset-pass.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyQkFBMkI7QUFDL0Qsb0NBQW9DLGlDQUFpQztBQUNyRTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxnRUFBNkI7QUFDcEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVzZXRwYXNzd29yZC9yZXNldC1wYXNzLmpzIiwid2VicGFjazovLy9hc3NldHMvdnVlL2Z1bGxwYWdlL3Jlc2V0cGFzc3dvcmQvUmVzZXRQYXNzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL3Jlc2V0cGFzc3dvcmQvUmVzZXRQYXNzLnZ1ZT9jZmQ4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVzZXRwYXNzd29yZC9SZXNldFBhc3MudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVzZXRwYXNzd29yZC9SZXNldFBhc3MudnVlPzUyYWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9yZXNldHBhc3N3b3JkL1Jlc2V0UGFzcy52dWU/ZTBlOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL3Jlc2V0cGFzc3dvcmQvUmVzZXRQYXNzLnZ1ZT9lMTA1Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvcmVzZXRwYXNzd29yZC9SZXNldFBhc3MudnVlP2VkZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgUmVzZXRQYXNzIGZyb20gJy4vUmVzZXRQYXNzLnZ1ZSdcclxuXHJcbi8vIEF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcydcclxuVnVlLnVzZShWdWVBeGlvcywgYXhpb3MpXHJcblxyXG4vLyBWdWVzYXgoVVggbGliKVxyXG5pbXBvcnQgVnVlc2F4IGZyb20gJ3Z1ZXNheCdcclxuVnVlLnVzZShWdWVzYXgpXHJcblxyXG5uZXcgVnVlKHtcclxuICAgIHJlbmRlcjogaCA9PiBoKFJlc2V0UGFzcylcclxufSkuJG1vdW50KCcjdnVlJylcclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmdWxscGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vaW1nL2xvZ28ta2l2aWQuc3ZnXCIgYWx0PVwiTG9nbyBLaXZpZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwicmVzZXQtcGFzc1wiIGNsYXNzPVwia2l2LWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxoMj5Sw6lpbml0aWFsaXNleiB2b3RyZSBtb3QgZGUgcGFzc2U8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVnaXN0ZXItZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGxhaW5QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJOb3V2ZWF1IG1vdCBkZSBwYXNzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnZpc2libGVQYXNzd29yZD1cImhhc1Zpc2libGVQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi1hZnRlclxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInZhbGlkYXRpb25QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2staWNvbj1cImhhc1Zpc2libGVQYXNzd29yZCA9ICFoYXNWaXNpYmxlUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpwcm9ncmVzcz1cImdldFNlY3VyZVBhc3NQcm9ncmVzc1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwiIWhhc1Zpc2libGVQYXNzd29yZFwiIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1lbHNlIGNsYXNzPVwiZmFzIGZhLWV5ZS1zbGFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFNlY3VyZVBhc3NQcm9ncmVzcyA+PSAxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbWVzc2FnZS1zdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3QgZGUgcGFzc2Ugc8OpY3VyaXPDqVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJDb25maXJtYXRpb24gZHUgbm91dmVhdSBtZHBcIlxyXG4gICAgICAgICAgICAgICAgICAgIDp2aXNpYmxlUGFzc3dvcmQ9XCJoYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICBpY29uLWFmdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwPVwidmFsaWRhdGlvblBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljay1pY29uPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Zpc2libGVQYXNzd29yZENvbmZpcm0gPSAhaGFzVmlzaWJsZVBhc3N3b3JkQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFpblBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZENvbmZpcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFoYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFzIGZhLWV5ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtZWxzZSBjbGFzcz1cImZhcyBmYS1leWUtc2xhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFpblBhc3N3b3JkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgI21lc3NhZ2UtZGFuZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB2YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgZGlzYWJsZWQ6IGJ0bkxvYWRpbmdSZXNldFBhc3MgfVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkxvYWRpbmdSZXNldFBhc3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcGxhaW5QYXNzd29yZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXBhc3N3b3JkQ29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImJ0bkxvYWRpbmdSZXNldFBhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkUmVzZXRQYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlLDqWluaXRpYWxpc2VyIGxlIG1vdCBkZSBwYXNzZTwvdnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGYgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwbGFpblBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm06IFwiXCIsXHJcbiAgICAgICAgICAgIGhhc1Zpc2libGVQYXNzd29yZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc1Zpc2libGVQYXNzd29yZENvbmZpcm06IGZhbHNlLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5SZXNldFBhc3M6IG51bGwsXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdSZXNldFBhc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZToge1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdmFsaWRSZXNldFBhc3MoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1Jlc2V0UGFzcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAucG9zdChgL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIF90b2tlbjogdGhpcy5jc3JmVG9rZW5SZXNldFBhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhaW5QYXNzd29yZDogdGhpcy5wbGFpblBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb25TdGF5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1vdCBkZSBwYXNzZSByw6lpbml0aWFsaXPDqVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nUmVzZXRQYXNzID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9jb25uZXhpb25gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvblN0YXkoXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdSZXNldFBhc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvblBhc3N3b3JkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYWluUGFzc3dvcmQgIT09IHRoaXMucGFzc3dvcmRDb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkID1cclxuICAgICAgICAgICAgICAgICAgICBcIkxlcyBtb3RzIGRlIHBhc3NlIG5lIGNvcnJlc3BvbmRlbnQgcGFzLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGdldFNlY3VyZVBhc3NQcm9ncmVzcygpIHtcclxuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIGF0IGxlYXN0IG9uZSBudW1iZXJcclxuICAgICAgICAgICAgaWYgKC9cXGQvLnRlc3QodGhpcy5wbGFpblBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gMjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGF0IGxlYXN0IG9uZSBjYXBpdGFsIGxldHRlclxyXG4gICAgICAgICAgICBpZiAoLyguKltBLVpdLiopLy50ZXN0KHRoaXMucGxhaW5QYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IDIwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhdCBtZW5vbnMgYSBsb3dlcmNhc2VcclxuICAgICAgICAgICAgaWYgKC8oLipbYS16XS4qKS8udGVzdCh0aGlzLnBsYWluUGFzc3dvcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSAyMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbW9yZSB0aGFuIDkgZGlnaXRzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYWluUGFzc3dvcmQubGVuZ3RoID49IDkpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IDIwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhdCBsZWFzdCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgaWYgKC9bXkEtWmEtejAtOV0vLnRlc3QodGhpcy5wbGFpblBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gMjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgVnVlLnByb3RvdHlwZS4kdnMgPSB0aGlzLiR2cztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmdXp6eS1iYWxsc1wiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2dWVEYXRhXCIpLmlubmVySFRNTCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuUmVzZXRQYXNzID0gZGF0YS5jc3JmVG9rZW5SZXNldFBhc3M7XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuI3Jlc2V0LXBhc3Mua2l2LWJsb2NrIHtcclxuICAgIG1heC13aWR0aDogNDNyZW07XHJcblxyXG4gICAgLnZzLWlucHV0LXBhcmVudCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVzZXRQYXNzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZjZhYTQ2MSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZXNldFBhc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXNldFBhc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Jlc2V0UGFzcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZjZhYTQ2MSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZmNmFhNDYxXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmY2YWE0NjEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmY2YWE0NjEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmY2YWE0NjEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Jlc2V0UGFzcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmY2YWE0NjEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmY2YWE0NjEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvZnVsbHBhZ2UvcmVzZXRwYXNzd29yZC9SZXNldFBhc3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc2V0UGFzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXNldFBhc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc2V0UGFzcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZjZhYTQ2MSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVzZXRQYXNzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZjZhYTQ2MSZzY29wZWQ9dHJ1ZSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgZnVsbHBhZ2VcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWJsb2NrXCIsIGF0dHJzOiB7IGlkOiBcInJlc2V0LXBhc3NcIiB9IH0sIFtcbiAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIlLDqWluaXRpYWxpc2V6IHZvdHJlIG1vdCBkZSBwYXNzZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJlZ2lzdGVyLWZvcm1cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJOb3V2ZWF1IG1vdCBkZSBwYXNzZVwiLFxuICAgICAgICAgICAgICB2aXNpYmxlUGFzc3dvcmQ6IF92bS5oYXNWaXNpYmxlUGFzc3dvcmQsXG4gICAgICAgICAgICAgIFwiaWNvbi1hZnRlclwiOiBcIlwiLFxuICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M6IF92bS5nZXRTZWN1cmVQYXNzUHJvZ3Jlc3NcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBrZXl1cDogX3ZtLnZhbGlkYXRpb25QYXNzd29yZCxcbiAgICAgICAgICAgICAgXCJjbGljay1pY29uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5oYXNWaXNpYmxlUGFzc3dvcmQgPSAhX3ZtLmhhc1Zpc2libGVQYXNzd29yZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNWaXNpYmxlUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV5ZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWUtc2xhc2hcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5nZXRTZWN1cmVQYXNzUHJvZ3Jlc3MgPj0gMTAwXG4gICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBNb3QgZGUgcGFzc2Ugc8OpY3VyaXPDqVxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGxhaW5QYXNzd29yZCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5wbGFpblBhc3N3b3JkID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGxhaW5QYXNzd29yZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgIF92bS5wbGFpblBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkQ29uZmlybVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIkNvbmZpcm1hdGlvbiBkdSBub3V2ZWF1IG1kcFwiLFxuICAgICAgICAgICAgICB2aXNpYmxlUGFzc3dvcmQ6IF92bS5oYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtLFxuICAgICAgICAgICAgICBcImljb24tYWZ0ZXJcIjogXCJcIixcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBrZXl1cDogX3ZtLnZhbGlkYXRpb25QYXNzd29yZCxcbiAgICAgICAgICAgICAgXCJjbGljay1pY29uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5oYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtID0gIV92bS5oYXNWaXNpYmxlUGFzc3dvcmRDb25maXJtXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc1Zpc2libGVQYXNzd29yZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV5ZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWUtc2xhc2hcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uTWVzc2FnZS5wYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgIF92bS5wbGFpblBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkQ29uZmlybVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1lc3NhZ2UtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc3dvcmRDb25maXJtLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkQ29uZmlybSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkQ29uZmlybVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZWQ6IF92bS5idG5Mb2FkaW5nUmVzZXRQYXNzIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS5idG5Mb2FkaW5nUmVzZXRQYXNzIHx8XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb25NZXNzYWdlLnBhc3N3b3JkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5wbGFpblBhc3N3b3JkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5wYXNzd29yZENvbmZpcm0sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nUmVzZXRQYXNzLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZFJlc2V0UGFzcyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUsOpaW5pdGlhbGlzZXIgbGUgbW90IGRlIHBhc3NlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ29cIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vaW1nL2xvZ28ta2l2aWQuc3ZnXCIpLFxuICAgICAgICAgIGFsdDogXCJMb2dvIEtpdmlkXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6WyJWdWUiLCJSZXNldFBhc3MiLCJheGlvcyIsIlZ1ZUF4aW9zIiwidXNlIiwiVnVlc2F4IiwicmVuZGVyIiwiaCIsIiRtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=