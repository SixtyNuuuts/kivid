"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["login"],{

/***/ "./assets/vue/fullpage/login.js":
/*!**************************************!*\
  !*** ./assets/vue/fullpage/login.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _Login_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue */ "./assets/vue/fullpage/Login.vue");
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
    return h(_Login_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}).$mount('#vue');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      error: null,
      getLastUsername: null,
      csrfTokenLogin: null,
      userType: null,
      password: "",
      email: "",
      hasVisiblePassword: false
    };
  },
  methods: {
    checkForm: function checkForm(e) {
      if (this.email && this.password) {
        return true;
      }

      e.preventDefault();
    },
    loginOauth: function loginOauth(social) {
      document.location.href = "/oauth/connect/".concat(this.userType, "/").concat(social);
    },
    register: function register() {
      if ("doctor" === this.userType) {
        document.location.href = "/inscription/praticien";
      } else {
        document.location.href = "/inscription";
      }
    },
    forgotPassword: function forgotPassword() {
      document.location.href = "/reset-password";
    }
  },
  created: function created() {
    vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.$vs = this.$vs;
    document.body.classList.add("fuzzy-balls");
    document.body.classList.add("animated");
    var data = JSON.parse(document.getElementById("vueData").innerHTML);
    this.error = data.error;
    this.getLastUsername = data.getLastUsername;
    this.userType = data.userType;
    this.csrfTokenLogin = data.csrfTokenLogin;

    if (this.error) {
      _services_function__WEBPACK_IMPORTED_MODULE_1__["default"].openErrorNotificationStay("Erreur", this.error);
    }

    if (this.getLastUsername) {
      this.email = this.getLastUsername;
    }
  }
});

/***/ }),

/***/ "./assets/vue/fullpage/Login.vue":
/*!***************************************!*\
  !*** ./assets/vue/fullpage/Login.vue ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_0aea65a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=0aea65a2& */ "./assets/vue/fullpage/Login.vue?vue&type=template&id=0aea65a2&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./assets/vue/fullpage/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_0aea65a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_0aea65a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/fullpage/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/fullpage/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./assets/vue/fullpage/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/fullpage/Login.vue?vue&type=template&id=0aea65a2&":
/*!**********************************************************************!*\
  !*** ./assets/vue/fullpage/Login.vue?vue&type=template&id=0aea65a2& ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0aea65a2___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0aea65a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0aea65a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=0aea65a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Login.vue?vue&type=template&id=0aea65a2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Login.vue?vue&type=template&id=0aea65a2&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/fullpage/Login.vue?vue&type=template&id=0aea65a2& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    _c("section", { staticClass: "kiv-block", attrs: { id: "login" } }, [
      _vm.userType === "patient" ? _c("h2", [_vm._v("Connexion")]) : _vm._e(),
      _vm._v(" "),
      _vm.userType === "doctor"
        ? _c("h2", [_vm._v("Connexion praticien")])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "login-form",
          attrs: { action: "/connexion", method: "post" },
          on: { submit: _vm.checkForm }
        },
        [
          _c("vs-input", {
            attrs: {
              "label-placeholder": "Email",
              autocomplete: "email",
              type: "email",
              required: "",
              name: "login_form[email]"
            },
            model: {
              value: _vm.email,
              callback: function($$v) {
                _vm.email = $$v
              },
              expression: "email"
            }
          }),
          _vm._v(" "),
          _c("vs-input", {
            attrs: {
              type: "password",
              name: "login_form[password]",
              autocomplete: "current-password",
              "label-placeholder": "Mot de passe",
              visiblePassword: _vm.hasVisiblePassword,
              "icon-after": "",
              required: ""
            },
            on: {
              "click-icon": function($event) {
                _vm.hasVisiblePassword = !_vm.hasVisiblePassword
              }
            },
            scopedSlots: _vm._u([
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
              }
            ]),
            model: {
              value: _vm.password,
              callback: function($$v) {
                _vm.password = $$v
              },
              expression: "password"
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.csrfTokenLogin,
                expression: "csrfTokenLogin"
              }
            ],
            attrs: { type: "hidden", name: "login_form[_token]" },
            domProps: { value: _vm.csrfTokenLogin },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.csrfTokenLogin = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "forget-password",
              on: { click: _vm.forgotPassword }
            },
            [_vm._v("Mot de passe oublié ?")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-container" },
            [
              _c(
                "vs-button",
                { staticClass: "w-100", attrs: { type: "submit" } },
                [_vm._v("Se connecter")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "sign-up" }, [
            _vm._v(
              "\n                Vous n'avez pas encore de compte ?\n                "
            ),
            _c("a", { on: { click: _vm.register } }, [_vm._v("S'inscrire")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "btn-container social-login" },
        [
          _c(
            "vs-button",
            {
              staticClass: "w-100",
              on: {
                click: function($event) {
                  return _vm.loginOauth("facebook")
                }
              }
            },
            [
              _vm._v("\n                Se connecter avec "),
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
                  return _vm.loginOauth("google")
                }
              }
            },
            [
              _vm._v("Se connecter avec "),
              _c("i", { staticClass: "fab fa-google" })
            ]
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
        attrs: { src: __webpack_require__(/*! ../../img/logo-kivid.svg */ "./assets/img/logo-kivid.svg"), alt: "Logo Kivid" }
      })
    ])
  },
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-38d47d","assets_vue_services_function_js-node_modules_moment_locale_sync_recursive_"], function() { return __webpack_exec__("./assets/vue/fullpage/login.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsOEJBQThCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQkFBK0Isa0JBQWtCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU0sdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkNBQTJDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQSxpQkFBaUIsS0FBSyxtQkFBTyxDQUFDLDZEQUEwQjtBQUN4RCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL2xvZ2luLmpzIiwid2VicGFjazovLy9hc3NldHMvdnVlL2Z1bGxwYWdlL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL0xvZ2luLnZ1ZT80NzdiIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvTG9naW4udnVlPzk5OWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9Mb2dpbi52dWU/NTI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLnZ1ZSdcclxuXHJcbi8vIEF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcydcclxuVnVlLnVzZShWdWVBeGlvcywgYXhpb3MpXHJcblxyXG4vLyBWdWVzYXgoVVggbGliKVxyXG5pbXBvcnQgVnVlc2F4IGZyb20gJ3Z1ZXNheCdcclxuVnVlLnVzZShWdWVzYXgpXHJcblxyXG5uZXcgVnVlKHtcclxuICAgIHJlbmRlcjogaCA9PiBoKExvZ2luKVxyXG59KS4kbW91bnQoJyN2dWUnKVxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZ1bGxwYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWcvbG9nby1raXZpZC5zdmdcIiBhbHQ9XCJMb2dvIEtpdmlkXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJsb2dpblwiIGNsYXNzPVwia2l2LWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxoMiB2LWlmPVwidXNlclR5cGUgPT09ICdwYXRpZW50J1wiPkNvbm5leGlvbjwvaDI+XHJcbiAgICAgICAgICAgIDxoMiB2LWlmPVwidXNlclR5cGUgPT09ICdkb2N0b3InXCI+Q29ubmV4aW9uIHByYXRpY2llbjwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImxvZ2luLWZvcm1cIlxyXG4gICAgICAgICAgICAgICAgQHN1Ym1pdD1cImNoZWNrRm9ybVwiXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249XCIvY29ubmV4aW9uXCJcclxuICAgICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dnMtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvZ2luX2Zvcm1bZW1haWxdXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9naW5fZm9ybVtwYXNzd29yZF1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJNb3QgZGUgcGFzc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIDp2aXNpYmxlUGFzc3dvcmQ9XCJoYXNWaXNpYmxlUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGljb24tYWZ0ZXJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljay1pY29uPVwiaGFzVmlzaWJsZVBhc3N3b3JkID0gIWhhc1Zpc2libGVQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNpY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwiIWhhc1Zpc2libGVQYXNzd29yZFwiIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1lbHNlIGNsYXNzPVwiZmFzIGZhLWV5ZS1zbGFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9naW5fZm9ybVtfdG9rZW5dXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY3NyZlRva2VuTG9naW5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZvcmdldC1wYXNzd29yZFwiIEBjbGljaz1cImZvcmdvdFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICA+TW90IGRlIHBhc3NlIG91Ymxpw6kgPzwvYVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvbiBjbGFzcz1cInctMTAwXCIgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5TZSBjb25uZWN0ZXI8L3ZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZ24tdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICBWb3VzIG4nYXZleiBwYXMgZW5jb3JlIGRlIGNvbXB0ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwicmVnaXN0ZXJcIj5TJ2luc2NyaXJlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci10ZXh0XCI+b3U8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWNvbnRhaW5lciBzb2NpYWwtbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDx2cy1idXR0b24gY2xhc3M9XCJ3LTEwMFwiIEBjbGljaz1cImxvZ2luT2F1dGgoJ2ZhY2Vib29rJylcIj5cclxuICAgICAgICAgICAgICAgICAgICBTZSBjb25uZWN0ZXIgYXZlYyA8aSBjbGFzcz1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pXHJcbiAgICAgICAgICAgICAgICA+PC92cy1idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHZzLWJ1dHRvbiBjbGFzcz1cInctMTAwXCIgQGNsaWNrPVwibG9naW5PYXV0aCgnZ29vZ2xlJylcIlxyXG4gICAgICAgICAgICAgICAgICAgID5TZSBjb25uZWN0ZXIgYXZlYyA8aSBjbGFzcz1cImZhYiBmYS1nb29nbGVcIj48L2lcclxuICAgICAgICAgICAgICAgID48L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgZiBmcm9tIFwiLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICBnZXRMYXN0VXNlcm5hbWU6IG51bGwsXHJcbiAgICAgICAgICAgIGNzcmZUb2tlbkxvZ2luOiBudWxsLFxyXG4gICAgICAgICAgICB1c2VyVHlwZTogbnVsbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBoYXNWaXNpYmxlUGFzc3dvcmQ6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNoZWNrRm9ybShlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVtYWlsICYmIHRoaXMucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luT2F1dGgoc29jaWFsKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL29hdXRoL2Nvbm5lY3QvJHt0aGlzLnVzZXJUeXBlfS8ke3NvY2lhbH1gO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgICAgIGlmIChcImRvY3RvclwiID09PSB0aGlzLnVzZXJUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9pbnNjcmlwdGlvbi9wcmF0aWNpZW5gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvaW5zY3JpcHRpb25gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvcmVzZXQtcGFzc3dvcmRgO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICBWdWUucHJvdG90eXBlLiR2cyA9IHRoaXMuJHZzO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZ1enp5LWJhbGxzXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZ1ZURhdGFcIikuaW5uZXJIVE1MKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvciA9IGRhdGEuZXJyb3I7XHJcbiAgICAgICAgdGhpcy5nZXRMYXN0VXNlcm5hbWUgPSBkYXRhLmdldExhc3RVc2VybmFtZTtcclxuICAgICAgICB0aGlzLnVzZXJUeXBlID0gZGF0YS51c2VyVHlwZTtcclxuICAgICAgICB0aGlzLmNzcmZUb2tlbkxvZ2luID0gZGF0YS5jc3JmVG9rZW5Mb2dpbjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXJyb3IpIHtcclxuICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb25TdGF5KFwiRXJyZXVyXCIsIHRoaXMuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TGFzdFVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwgPSB0aGlzLmdldExhc3RVc2VybmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFlYTY1YTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBhZWE2NWEyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBhZWE2NWEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBhZWE2NWEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFlYTY1YTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGFlYTY1YTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvZnVsbHBhZ2UvTG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFlYTY1YTImXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIGZ1bGxwYWdlXCIgfSwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1ibG9ja1wiLCBhdHRyczogeyBpZDogXCJsb2dpblwiIH0gfSwgW1xuICAgICAgX3ZtLnVzZXJUeXBlID09PSBcInBhdGllbnRcIiA/IF9jKFwiaDJcIiwgW192bS5fdihcIkNvbm5leGlvblwiKV0pIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnVzZXJUeXBlID09PSBcImRvY3RvclwiXG4gICAgICAgID8gX2MoXCJoMlwiLCBbX3ZtLl92KFwiQ29ubmV4aW9uIHByYXRpY2llblwiKV0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW4tZm9ybVwiLFxuICAgICAgICAgIGF0dHJzOiB7IGFjdGlvbjogXCIvY29ubmV4aW9uXCIsIG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICBvbjogeyBzdWJtaXQ6IF92bS5jaGVja0Zvcm0gfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwibG9naW5fZm9ybVtlbWFpbF1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW1haWwsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbWFpbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJsb2dpbl9mb3JtW3Bhc3N3b3JkXVwiLFxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwiY3VycmVudC1wYXNzd29yZFwiLFxuICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiTW90IGRlIHBhc3NlXCIsXG4gICAgICAgICAgICAgIHZpc2libGVQYXNzd29yZDogX3ZtLmhhc1Zpc2libGVQYXNzd29yZCxcbiAgICAgICAgICAgICAgXCJpY29uLWFmdGVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJjbGljay1pY29uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5oYXNWaXNpYmxlUGFzc3dvcmQgPSAhX3ZtLmhhc1Zpc2libGVQYXNzd29yZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0uaGFzVmlzaWJsZVBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZXllXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWUtc2xhc2hcIiB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jc3JmVG9rZW5Mb2dpbixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNzcmZUb2tlbkxvZ2luXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwibG9naW5fZm9ybVtfdG9rZW5dXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY3NyZlRva2VuTG9naW4gfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uY3NyZlRva2VuTG9naW4gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcmdldC1wYXNzd29yZFwiLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmZvcmdvdFBhc3N3b3JkIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiTW90IGRlIHBhc3NlIG91Ymxpw6kgP1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMTAwXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZSBjb25uZWN0ZXJcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2lnbi11cFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgVm91cyBuJ2F2ZXogcGFzIGVuY29yZSBkZSBjb21wdGUgP1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IG9uOiB7IGNsaWNrOiBfdm0ucmVnaXN0ZXIgfSB9LCBbX3ZtLl92KFwiUydpbnNjcmlyZVwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuLWNvbnRhaW5lciBzb2NpYWwtbG9naW5cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9naW5PYXV0aChcImZhY2Vib29rXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgU2UgY29ubmVjdGVyIGF2ZWMgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEtZmFjZWJvb2stZlwiIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvZ2luT2F1dGgoXCJnb29nbGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlNlIGNvbm5lY3RlciBhdmVjIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFiIGZhLWdvb2dsZVwiIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb1wiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2xvZ28ta2l2aWQuc3ZnXCIpLCBhbHQ6IFwiTG9nbyBLaXZpZFwiIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyLXRleHRcIiB9LCBbX3ZtLl92KFwib3VcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbIlZ1ZSIsIkxvZ2luIiwiYXhpb3MiLCJWdWVBeGlvcyIsInVzZSIsIlZ1ZXNheCIsInJlbmRlciIsImgiLCIkbW91bnQiXSwic291cmNlUm9vdCI6IiJ9