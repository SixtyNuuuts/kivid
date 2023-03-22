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
      document.location.href = "/inscription";
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
            class: { empty: !_vm.password },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0JBQStCLGtCQUFrQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0JBQXdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJDQUEyQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0EsaUJBQWlCLEtBQUssbUJBQU8sQ0FBQyw2REFBMEI7QUFDeEQsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQyxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9mdWxscGFnZS9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9mdWxscGFnZS9Mb2dpbi52dWU/NDc3YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2Z1bGxwYWdlL0xvZ2luLnZ1ZT85OTljIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZnVsbHBhZ2UvTG9naW4udnVlPzUyOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbi52dWUnXHJcblxyXG4vLyBBeGlvc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBWdWVBeGlvcyBmcm9tICd2dWUtYXhpb3MnXHJcblZ1ZS51c2UoVnVlQXhpb3MsIGF4aW9zKVxyXG5cclxuLy8gVnVlc2F4KFVYIGxpYilcclxuaW1wb3J0IFZ1ZXNheCBmcm9tICd2dWVzYXgnXHJcblZ1ZS51c2UoVnVlc2F4KVxyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICByZW5kZXI6IGggPT4gaChMb2dpbilcclxufSkuJG1vdW50KCcjdnVlJylcclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmdWxscGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1nL2xvZ28ta2l2aWQuc3ZnXCIgYWx0PVwiTG9nbyBLaXZpZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwibG9naW5cIiBjbGFzcz1cImtpdi1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8aDIgdi1pZj1cInVzZXJUeXBlID09PSAncGF0aWVudCdcIj5Db25uZXhpb248L2gyPlxyXG4gICAgICAgICAgICA8aDIgdi1pZj1cInVzZXJUeXBlID09PSAnZG9jdG9yJ1wiPkNvbm5leGlvbiBwcmF0aWNpZW48L2gyPlxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJsb2dpbi1mb3JtXCJcclxuICAgICAgICAgICAgICAgIEBzdWJtaXQ9XCJjaGVja0Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiL2Nvbm5leGlvblwiXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2dpbl9mb3JtW2VtYWlsXVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvZ2luX2Zvcm1bcGFzc3dvcmRdXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiTW90IGRlIHBhc3NlXCJcclxuICAgICAgICAgICAgICAgICAgICA6dmlzaWJsZVBhc3N3b3JkPVwiaGFzVmlzaWJsZVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBpY29uLWFmdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2staWNvbj1cImhhc1Zpc2libGVQYXNzd29yZCA9ICFoYXNWaXNpYmxlUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgZW1wdHk6ICFwYXNzd29yZCB9XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtaWY9XCIhaGFzVmlzaWJsZVBhc3N3b3JkXCIgY2xhc3M9XCJmYXMgZmEtZXllXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWVsc2UgY2xhc3M9XCJmYXMgZmEtZXllLXNsYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2dpbl9mb3JtW190b2tlbl1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjc3JmVG9rZW5Mb2dpblwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZm9yZ2V0LXBhc3N3b3JkXCIgQGNsaWNrPVwiZm9yZ290UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5Nb3QgZGUgcGFzc2Ugb3VibGnDqSA/PC9hXHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uIGNsYXNzPVwidy0xMDBcIiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlNlIGNvbm5lY3RlcjwvdnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lnbi11cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZvdXMgbidhdmV6IHBhcyBlbmNvcmUgZGUgY29tcHRlID9cclxuICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJyZWdpc3RlclwiPlMnaW5zY3JpcmU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyLXRleHRcIj5vdTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyIHNvY2lhbC1sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPHZzLWJ1dHRvbiBjbGFzcz1cInctMTAwXCIgQGNsaWNrPVwibG9naW5PYXV0aCgnZmFjZWJvb2snKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlIGNvbm5lY3RlciBhdmVjIDxpIGNsYXNzPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2lcclxuICAgICAgICAgICAgICAgID48L3ZzLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dnMtYnV0dG9uIGNsYXNzPVwidy0xMDBcIiBAY2xpY2s9XCJsb2dpbk9hdXRoKCdnb29nbGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlNlIGNvbm5lY3RlciBhdmVjIDxpIGNsYXNzPVwiZmFiIGZhLWdvb2dsZVwiPjwvaVxyXG4gICAgICAgICAgICAgICAgPjwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmIGZyb20gXCIuLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGdldExhc3RVc2VybmFtZTogbnVsbCxcclxuICAgICAgICAgICAgY3NyZlRva2VuTG9naW46IG51bGwsXHJcbiAgICAgICAgICAgIHVzZXJUeXBlOiBudWxsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIGhhc1Zpc2libGVQYXNzd29yZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hlY2tGb3JtKGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZW1haWwgJiYgdGhpcy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5PYXV0aChzb2NpYWwpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvb2F1dGgvY29ubmVjdC8ke3RoaXMudXNlclR5cGV9LyR7c29jaWFsfWA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWdpc3RlcigpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvaW5zY3JpcHRpb25gO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL3Jlc2V0LXBhc3N3b3JkYDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgVnVlLnByb3RvdHlwZS4kdnMgPSB0aGlzLiR2cztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmdXp6eS1iYWxsc1wiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2dWVEYXRhXCIpLmlubmVySFRNTCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBkYXRhLmVycm9yO1xyXG4gICAgICAgIHRoaXMuZ2V0TGFzdFVzZXJuYW1lID0gZGF0YS5nZXRMYXN0VXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy51c2VyVHlwZSA9IGRhdGEudXNlclR5cGU7XHJcbiAgICAgICAgdGhpcy5jc3JmVG9rZW5Mb2dpbiA9IGRhdGEuY3NyZlRva2VuTG9naW47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uU3RheShcIkVycmV1clwiLCB0aGlzLmVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldExhc3RVc2VybmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtYWlsID0gdGhpcy5nZXRMYXN0VXNlcm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhZWE2NWEyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYWVhNjVhMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYWVhNjVhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYWVhNjVhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhZWE2NWEyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBhZWE2NWEyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL2Z1bGxwYWdlL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhZWE2NWEyJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBmdWxscGFnZVwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIiwgYXR0cnM6IHsgaWQ6IFwibG9naW5cIiB9IH0sIFtcbiAgICAgIF92bS51c2VyVHlwZSA9PT0gXCJwYXRpZW50XCIgPyBfYyhcImgyXCIsIFtfdm0uX3YoXCJDb25uZXhpb25cIildKSA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS51c2VyVHlwZSA9PT0gXCJkb2N0b3JcIlxuICAgICAgICA/IF9jKFwiaDJcIiwgW192bS5fdihcIkNvbm5leGlvbiBwcmF0aWNpZW5cIildKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZvcm1cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWZvcm1cIixcbiAgICAgICAgICBhdHRyczogeyBhY3Rpb246IFwiL2Nvbm5leGlvblwiLCBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgICAgb246IHsgc3VibWl0OiBfdm0uY2hlY2tGb3JtIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICBuYW1lOiBcImxvZ2luX2Zvcm1bZW1haWxdXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVtYWlsLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmVtYWlsID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW1haWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICBjbGFzczogeyBlbXB0eTogIV92bS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICBuYW1lOiBcImxvZ2luX2Zvcm1bcGFzc3dvcmRdXCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJjdXJyZW50LXBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJNb3QgZGUgcGFzc2VcIixcbiAgICAgICAgICAgICAgdmlzaWJsZVBhc3N3b3JkOiBfdm0uaGFzVmlzaWJsZVBhc3N3b3JkLFxuICAgICAgICAgICAgICBcImljb24tYWZ0ZXJcIjogXCJcIixcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcImNsaWNrLWljb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmhhc1Zpc2libGVQYXNzd29yZCA9ICFfdm0uaGFzVmlzaWJsZVBhc3N3b3JkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNWaXNpYmxlUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWVcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV5ZS1zbGFzaFwiIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNzcmZUb2tlbkxvZ2luLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3NyZlRva2VuTG9naW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJsb2dpbl9mb3JtW190b2tlbl1cIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jc3JmVG9rZW5Mb2dpbiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5jc3JmVG9rZW5Mb2dpbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9yZ2V0LXBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZm9yZ290UGFzc3dvcmQgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJNb3QgZGUgcGFzc2Ugb3VibGnDqSA/XCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xMDBcIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlNlIGNvbm5lY3RlclwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaWduLXVwXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBWb3VzIG4nYXZleiBwYXMgZW5jb3JlIGRlIGNvbXB0ZSA/XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXCJhXCIsIHsgb246IHsgY2xpY2s6IF92bS5yZWdpc3RlciB9IH0sIFtfdm0uX3YoXCJTJ2luc2NyaXJlXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tY29udGFpbmVyIHNvY2lhbC1sb2dpblwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2dpbk9hdXRoKFwiZmFjZWJvb2tcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBTZSBjb25uZWN0ZXIgYXZlYyBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhYiBmYS1mYWNlYm9vay1mXCIgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9naW5PYXV0aChcImdvb2dsZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiU2UgY29ubmVjdGVyIGF2ZWMgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEtZ29vZ2xlXCIgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvbG9nby1raXZpZC5zdmdcIiksIGFsdDogXCJMb2dvIEtpdmlkXCIgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXItdGV4dFwiIH0sIFtfdm0uX3YoXCJvdVwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiVnVlIiwiTG9naW4iLCJheGlvcyIsIlZ1ZUF4aW9zIiwidXNlIiwiVnVlc2F4IiwicmVuZGVyIiwiaCIsIiRtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=