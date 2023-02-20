"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_vue_components_DoctorSelectBox_vue"],{

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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./assets/vue/components/DoctorSelectBox.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./assets/vue/components/DoctorSelectBox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorSelectBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoctorSelectBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorSelectBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DoctorSelectBox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoctorSelectBox.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/DoctorSelectBox.vue?vue&type=style&index=0&lang=scss&");


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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX3Z1ZV9jb21wb25lbnRzX0RvY3RvclNlbGVjdEJveF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9HQTtBQUNBO0FBRUE7QUFDQTtBQUNBLGtDQURBO0FBRUE7QUFGQSxHQURBO0FBS0E7QUFDQTtBQURBLEdBTEE7QUFRQSxNQVJBLGtCQVFBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGdCQUZBO0FBR0Esc0JBSEE7QUFJQSx1QkFKQTtBQUtBO0FBTEE7QUFPQSxHQWhCQTtBQWlCQTtBQUNBLGNBREEsd0JBQ0E7QUFDQTtBQUNBO0FBSEEsR0FqQkE7QUFzQkE7QUFDQSxtQkFEQSw2QkFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBO0FBVUEsaUJBVkEsMkJBVUE7QUFDQTtBQUNBLEtBWkE7QUFhQSxnQkFiQSx3QkFhQSxNQWJBLEVBYUE7QUFDQTtBQUNBO0FBQ0EsS0FoQkE7QUFpQkEsZUFqQkEseUJBaUJBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBLG9EQUNBLHNCQURBO0FBR0E7O0FBQ0E7QUFDQSxPQU5BLEVBTUEsR0FOQTtBQU9BLEtBM0JBO0FBNEJBLG9CQTVCQSw4QkE0QkE7QUFDQTtBQUNBLEtBOUJBO0FBK0JBLGVBL0JBLHVCQStCQSxJQS9CQSxFQStCQTtBQUNBO0FBQ0EsS0FqQ0E7QUFrQ0EseUJBbENBLG1DQWtDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBRkEsRUFFQSxJQUZBO0FBR0E7QUFDQTtBQTVDQSxHQXRCQTtBQW9FQSxTQXBFQSxxQkFvRUE7QUFBQTs7QUFDQTtBQUVBLGVBQ0EsR0FEQSxpQkFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0Esb0JBQ0EsNkJBQ0EsMEJBREEsR0FFQSxtQkFIQTtBQUtBO0FBQ0EsS0FkQTtBQWdCQTtBQUNBO0FBeEZBOzs7Ozs7Ozs7OztBQ3ZHQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4RjtBQUMzQjtBQUNMO0FBQzlELENBQTRFOzs7QUFHNUU7QUFDNkY7QUFDN0YsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUscUZBQU07QUFDUixFQUFFLHVGQUFNO0FBQ1IsRUFBRSxnR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsK0RBQWU7Ozs7Ozs7Ozs7OztBQ3ZDME0sQ0FBQywrREFBZSxvTkFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHQTdPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixnQ0FBZ0MsbUJBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xELHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakIsMkJBQTJCLDhCQUE4QjtBQUN6RDtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsa0JBQWtCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsUUFBUTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxxQkFBcUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDBCQUEwQjtBQUNsRSwwQ0FBMEMsbUNBQW1DO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlDQUFpQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZCQUE2QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvY29tcG9uZW50cy9Eb2N0b3JTZWxlY3RCb3gudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9Eb2N0b3JTZWxlY3RCb3gudnVlPzAzNjkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb21wb25lbnRzL0RvY3RvclNlbGVjdEJveC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb21wb25lbnRzL0RvY3RvclNlbGVjdEJveC52dWU/OGM2NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvRG9jdG9yU2VsZWN0Qm94LnZ1ZT9jZmI1Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9Eb2N0b3JTZWxlY3RCb3gudnVlPzg5Y2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb21wb25lbnRzL0RvY3RvclNlbGVjdEJveC52dWU/NGM3YSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgdi1jbGljay1vdXRzaWRlPVwiaGlkZVNlbGVjdEJveFwiXHJcbiAgICAgICAgY2xhc3M9XCJzZWxlY3QtZmlsdGVyXCJcclxuICAgICAgICA6Y2xhc3M9XCJ7IGxvYWRpbmc6IGxvYWRpbmcgfVwiXHJcbiAgICA+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiIWxvYWRpbmdcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgdi1pZj1cImRvY3RvclNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZG9jdG9yLXNlbGVjdGVkIGRvY3RvclwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldFNlbGVjdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx2cy1hdmF0YXIgY2xhc3M9XCJhdmF0YXJcIiBjaXJjbGUgc2l6ZT1cIjMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JTZWxlY3RlZC5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvY3RvclNlbGVjdGVkLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiYEF2YXRhciBkZSAke2RvY3RvclNlbGVjdGVkLmZpcnN0bmFtZX0gJHtkb2N0b3JTZWxlY3RlZC5sYXN0bmFtZX1gXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC92cy1hdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGdldFVzZXJOYW1lKGRvY3RvclNlbGVjdGVkKSB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHYtZWxzZVxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RCb3ggPSB0cnVlXCJcclxuICAgICAgICAgICAgICAgIEBrZXl1cD1cInNlbGVjdEJveFdpdGhUaHJvdHRsZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRvY3Rvci1jaG9pY2Utc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAnYi1yLWItemVybyc6IHNlbGVjdEJveCxcclxuICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXItZ3JheSc6IHNlbGVjdEJveCxcclxuICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIXNlbGVjdEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdTw6lsZWN0aW9ubmV6IHZvdHJlIHByYXRpY2llbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnUmVjaGVyY2hleiB2b3RyZSBwcmF0aWNpZW4nXHJcbiAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhcnJvdy10b2dnbGUtYm94XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBzZWxlY3RCb3ggfVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVTZWxlY3RCb3hcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInZzLWljb24tYXJyb3dcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlbGVjdEJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJmb2N1c0lucHV0U2VsZWN0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgdi1pZj1cImdldERvY3RvcnMubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihkb2N0b3IsIGkpIGluIGdldERvY3RvcnNcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRvY3RvclwiIEBjbGljaz1cInNlbGVjdERvY3Rvcihkb2N0b3IpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWF2YXRhciBjbGFzcz1cImF2YXRhclwiIGNpcmNsZSBzaXplPVwiMzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb2N0b3IuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJgQXZhdGFyIGRlICR7ZG9jdG9yLmZpcnN0bmFtZX0gJHtkb2N0b3IubGFzdG5hbWV9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1hdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZ2V0VXNlck5hbWUoZG9jdG9yKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJub3QtZm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXJzLXNsYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW4gcHJhdGljaWVuIG4nYSDDqXTDqSB0cm91dsOpIGF2ZWMgXCI8c3Ryb25nPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XCI8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlbXB0eS1lcnJvci1tZXNzXCJcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJlcnJvck1lc3NhZ2UgJiYgIWRvY3RvclNlbGVjdGVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3sgZXJyb3JNZXNzYWdlIH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwibG9hZGluZy10ZXh0XCI+Q2hhcmdlbWVudC4uLjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgZiBmcm9tIFwiLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tIFwidnVlLWNsaWNrLW91dHNpZGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZG9jdG9yU2VsZWN0ZWQ6IFtPYmplY3QsIG51bGxdLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogW1N0cmluZywgbnVsbF0sXHJcbiAgICB9LFxyXG4gICAgZGlyZWN0aXZlczoge1xyXG4gICAgICAgIENsaWNrT3V0c2lkZSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvY3RvcnM6IFtdLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdEJveDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdElucHV0OiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0RG9jdG9ycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGYuZ2V0U2VhcmNoKHRoaXMuZG9jdG9ycywgdGhpcy5maWx0ZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvZ2dsZVNlbGVjdEJveCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSAhdGhpcy5zZWxlY3RCb3g7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvY3RvclNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0Qm94KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSW5wdXRTZWxlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZVNlbGVjdEJveCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdERvY3Rvcihkb2N0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcInNldERvY3RvclNlbGVjdGVkXCIsIGRvY3Rvcik7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVNlbGVjdEJveCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXRTZWxlY3QoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJzZXREb2N0b3JTZWxlY3RlZFwiLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZG9jdG9yLWNob2ljZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dFNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9jdXNJbnB1dFNlbGVjdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VXNlck5hbWUodXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRVc2VyTmFtZSh1c2VyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdEJveFdpdGhUaHJvdHRsZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdEJveFRocm90dGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEJveFRocm90dGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0Qm94XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94VGhyb3R0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgLmdldChgL2dldC9kb2N0b3JzYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3RvcnMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvY3Rvci1jaG9pY2Utc2VsZWN0XCIpO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIi4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uc2VsZWN0LWZpbHRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgIG1pbi1oZWlnaHQ6IDUuOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgJi5iLXItYi16ZXJvIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUuMDA2cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNHJlbSAxLjdyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNC41cmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMC4wNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYucGxhY2Vob2xkZXItZ3JheSB7XHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjRhZDlhO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3ctdG9nZ2xlLWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMC43cmVtO1xyXG4gICAgICAgIHJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgd2lkdGg6IDMuOHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDMuNHJlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgJi52cy1pY29uLWFycm93IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjJlNTQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDYwMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tdnMtdGV4dCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXZzLXRleHQpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEuOXJlbTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0LWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNS4xcmVtO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogNzc3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMC41cmVtIDAuNXJlbTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggLTVweCByZ2JhKDQ0LCAxMSwgMTEsIDAuMTUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE5LCAxLjAzLCAwLjc5LCAxLjAyKTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyNi4zcmVtO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgbWluLWhlaWdodDogNi43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2N0b3Itc2VsZWN0ZWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQuNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG5cclxuICAgICAgICAmLmRvY3RvciAuYXZhdGFyIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wLjRyZW0pO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZG9jdG9yIHtcclxuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMS44cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlRW50ZXIgMC41cztcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuXHJcbiAgICAgICAgJjpub3QoLmRvY3Rvci1zZWxlY3RlZCk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS42NXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bm90KC5kb2N0b3Itc2VsZWN0ZWQpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS42NXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRncmF5LW1pZGRsZSwgMC4xNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjRyZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgLmJpcnRoZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjhlZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y1Yjg1ZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjJlbSAwLjRlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmVtYWlsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5MWEzYmQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5iaWcge1xyXG4gICAgICAgIC5kb2N0b3Ige1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xyXG5cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBhbmltYXRpb246IGZhZGVFbnRlciAwLjVzO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAzLjhyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMy44cmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvYWRpbmctdGV4dCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1LjdyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS42cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4cmVtO1xyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRG9jdG9yU2VsZWN0Qm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lY2MzYTE2NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Eb2N0b3JTZWxlY3RCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Eb2N0b3JTZWxlY3RCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0RvY3RvclNlbGVjdEJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2VjYzNhMTY0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2VjYzNhMTY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2VjYzNhMTY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Eb2N0b3JTZWxlY3RCb3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVjYzNhMTY0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2VjYzNhMTY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL2NvbXBvbmVudHMvRG9jdG9yU2VsZWN0Qm94LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Eb2N0b3JTZWxlY3RCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRG9jdG9yU2VsZWN0Qm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbNF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Eb2N0b3JTZWxlY3RCb3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RvY3RvclNlbGVjdEJveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWNjM2ExNjQmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJjbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LWNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmhpZGVTZWxlY3RCb3gsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJoaWRlU2VsZWN0Qm94XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdC1maWx0ZXJcIixcbiAgICAgIGNsYXNzOiB7IGxvYWRpbmc6IF92bS5sb2FkaW5nIH1cbiAgICB9LFxuICAgIFtcbiAgICAgICFfdm0ubG9hZGluZ1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLmRvY3RvclNlbGVjdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRvY3Rvci1zZWxlY3RlZCBkb2N0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnJlc2V0U2VsZWN0IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgc2l6ZTogXCIzMFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZG9jdG9yU2VsZWN0ZWQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmRvY3RvclNlbGVjdGVkLmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2ltZy9hdmF0YXItZGVmYXVsdC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdmF0YXIgZGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yU2VsZWN0ZWQuZmlyc3RuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZG9jdG9yU2VsZWN0ZWQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VXNlck5hbWUoX3ZtLmRvY3RvclNlbGVjdGVkKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYi1yLWItemVyb1wiOiBfdm0uc2VsZWN0Qm94LFxuICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2Vob2xkZXItZ3JheVwiOiBfdm0uc2VsZWN0Qm94XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZG9jdG9yLWNob2ljZS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogIV92bS5zZWxlY3RCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJTw6lsZWN0aW9ubmV6IHZvdHJlIHByYXRpY2llblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiUmVjaGVyY2hleiB2b3RyZSBwcmF0aWNpZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWx0ZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0Qm94ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAga2V5dXA6IF92bS5zZWxlY3RCb3hXaXRoVGhyb3R0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbHRlciA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFycm93LXRvZ2dsZS1ib3hcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnNlbGVjdEJveCB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVTZWxlY3RCb3ggfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZzLWljb24tYXJyb3dcIiB9KV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJoZWlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0Qm94XG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0LWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5mb2N1c0lucHV0U2VsZWN0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXREb2N0b3JzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nZXREb2N0b3JzLCBmdW5jdGlvbihkb2N0b3IsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGkgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZG9jdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3REb2N0b3IoZG9jdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgc2l6ZTogXCIzNVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGRvY3Rvci5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZG9jdG9yLmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9pbWcvYXZhdGFyLWRlZmF1bHQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdmF0YXIgZGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldFVzZXJOYW1lKGRvY3RvcikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS11c2Vycy1zbGFzaFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuIHByYXRpY2llbiBuJ2Egw6l0w6kgdHJvdXbDqSBhdmVjIFxcXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihfdm0uX3MoX3ZtLmZpbHRlcikpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KCdcIicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZXJyb3JNZXNzYWdlICYmICFfdm0uZG9jdG9yU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wdHktZXJyb3ItbWVzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmVycm9yTWVzc2FnZSkgKyBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctdGV4dFwiIH0sIFtfdm0uX3YoXCJDaGFyZ2VtZW50Li4uXCIpXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=