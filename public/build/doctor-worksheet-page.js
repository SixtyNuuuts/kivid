"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["doctor-worksheet-page"],{

/***/ "./assets/vue/doctor/worksheet-page.js":
/*!*********************************************!*\
  !*** ./assets/vue/doctor/worksheet-page.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _WorkSheetPage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkSheetPage.vue */ "./assets/vue/doctor/WorkSheetPage.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.esm.min.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuesax */ "./node_modules/vuesax/dist/vuesax.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuesax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_youtube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-youtube */ "./node_modules/vue-youtube/dist/vue-youtube.js");
/* harmony import */ var vue_youtube__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_youtube__WEBPACK_IMPORTED_MODULE_5__);

 // Axios



vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_axios__WEBPACK_IMPORTED_MODULE_2__["default"], (axios__WEBPACK_IMPORTED_MODULE_1___default())); // Vuesax (UX lib)


vue__WEBPACK_IMPORTED_MODULE_3__["default"].use((vuesax__WEBPACK_IMPORTED_MODULE_4___default())); // Youtube player


vue__WEBPACK_IMPORTED_MODULE_3__["default"].use((vue_youtube__WEBPACK_IMPORTED_MODULE_5___default()));
new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
  render: function render(h) {
    return h(_WorkSheetPage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
}).$mount('#vue');

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/SelectPartOfBody.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/SelectPartOfBody.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_14__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    partOfBody: Object
  },
  directives: {
    ClickOutside: (vue_click_outside__WEBPACK_IMPORTED_MODULE_14___default())
  },
  data: function data() {
    return {
      partsOfBody: [],
      filter: "",
      selectBox: false,
      selectInput: null,
      loadingPartsOfBody: false,
      selectBoxThrottle: false
    };
  },
  computed: {
    getPartOfBodySelected: function getPartOfBodySelected() {
      if (!this.partOfBody) {
        return "";
      }

      return this.partOfBody;
    },
    partsOfBodyFiltered: function partsOfBodyFiltered() {
      var _this = this;

      return this.sortedPoBNameByAlphabet(this.partsOfBody.filter(function (p) {
        return p.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(_this.filter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());
      }));
    }
  },
  methods: {
    toggleSelectBox: function toggleSelectBox() {
      this.selectBox = !this.selectBox;

      if (this.partOfBody != null) {
        this.resetSelect();
      }

      if (this.selectBox) {
        this.focusInputSelect();
      }
    },
    hideSelectBox: function hideSelectBox() {
      this.selectBox = false;
    },
    selectPartOfBody: function selectPartOfBody(partofbody) {
      this.$emit("partOfBodySelected", partofbody);
      this.hideSelectBox();
    },
    resetSelect: function resetSelect() {
      var _this2 = this;

      this.$emit("partOfBodyReset", true);
      setTimeout(function () {
        _this2.selectInput = document.getElementById("partofbody-choice-select");
        _this2.selectBox = true;

        _this2.focusInputSelect();
      }, 100);
    },
    focusInputSelect: function focusInputSelect() {
      this.selectInput.focus();
    },
    selectBoxWithThrottle: function selectBoxWithThrottle() {
      var _this3 = this;

      if (!this.selectBoxThrottle) {
        this.selectBoxThrottle = true;
        this.selectBox = true;
        console.log("selectBox");
        setTimeout(function () {
          _this3.selectBoxThrottle = false;
        }, 1000);
      }
    },
    sortedPoBNameByAlphabet: function sortedPoBNameByAlphabet(array) {
      array.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      return array;
    }
  },
  created: function created() {
    var _this4 = this;

    this.loadingPartsOfBody = true;
    this.axios.get("/get/parts-of-body").then(function (response) {
      _this4.partsOfBody = response.data;
      _this4.loadingPartsOfBody = false;
    }).catch(function (error) {
      var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
      console.error(errorMess);
    });
  },
  mounted: function mounted() {
    this.selectInput = document.getElementById("partofbody-choice-select");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/TagPartOfBody.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/TagPartOfBody.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    partOfBody: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/WorkSheetPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/WorkSheetPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var _Worksheet_ExercisesPlaylist_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Worksheet/ExercisesPlaylist.vue */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue");
/* harmony import */ var _components_TagPartOfBody_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/TagPartOfBody.vue */ "./assets/vue/components/TagPartOfBody.vue");
/* harmony import */ var _components_SelectPartOfBody_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/SelectPartOfBody.vue */ "./assets/vue/components/SelectPartOfBody.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ExercisesPlaylist: _Worksheet_ExercisesPlaylist_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    SelectPartOfBody: _components_SelectPartOfBody_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    TagPartOfBody: _components_TagPartOfBody_vue__WEBPACK_IMPORTED_MODULE_16__["default"]
  },
  data: function data() {
    return {
      doctor: null,
      action: null,
      worksheetId: null,
      worksheet: {
        partOfBody: null,
        duration: 1,
        perDay: 1,
        perWeek: 1,
        title: ""
      },
      exercises: [],
      patient: null,
      loadingVideos: false,
      videos: [],
      csrfTokenCreateWorksheet: null,
      csrfTokenEditWorksheet: null,
      csrfTokenRemoveExercise: null,
      loading: false,
      maxDuration: {
        duration: 52,
        perDay: 3,
        perWeek: 7
      },
      btnLoadingValidEditWorksheet: false,
      btnLoadingValidCreateWorksheet: false,
      checkIfWorksheetSessionsExist: null,
      titleIsEmptyMessage: null,
      partOfBodyIsEmptyMessage: null
    };
  },
  computed: {
    getWorksheet: function getWorksheet() {
      return this.worksheet;
    },
    getExercises: function getExercises() {
      return this.exercises;
    }
  },
  methods: {
    setPartOfBody: function setPartOfBody(partOfBody) {
      this.worksheet.partOfBody = partOfBody;
      this.partOfBodyIsEmptyMessage = "";
    },
    resetPoB: function resetPoB() {
      this.worksheet.partOfBody = null;
    },
    rederictToDashboard: function rederictToDashboard() {
      document.location.href = "/doctor/".concat(this.doctor.id, "/dashboard");
    },
    checkIfDurationValueIsEmptyOrNull: function checkIfDurationValueIsEmptyOrNull(durationValue, event) {
      var durationType = event.target.id;

      if ("vs-input--duration" === durationType) {
        if ("" === durationValue || null === durationValue) {
          this.worksheet.duration = 1;
        }

        if (durationValue < 1) {
          this.worksheet.duration = 1;
        }

        if (durationValue > this.maxDuration.duration) {
          this.worksheet.duration = this.maxDuration.duration;
        }
      }

      if ("vs-input--perDay" === durationType) {
        if ("" === durationValue || null === durationValue) {
          this.worksheet.perDay = 1;
        }

        if (durationValue < 1) {
          this.worksheet.perDay = 1;
        }

        if (durationValue > this.maxDuration.perDay) {
          this.worksheet.perDay = this.maxDuration.perDay;
        }
      }

      if ("vs-input--perWeek" === durationType) {
        if ("" === durationValue || null === durationValue) {
          this.worksheet.perWeek = 1;
        }

        if (durationValue < 1) {
          this.worksheet.perWeek = 1;
        }

        if (durationValue > this.maxDuration.perWeek) {
          this.worksheet.perWeek = this.maxDuration.perWeek;
        }
      }
    },
    checkIfEmpty: function checkIfEmpty() {
      var check = true;

      if (!this.worksheet.partOfBody) {
        this.partOfBodyIsEmptyMessage = "Vous devez choisir une partie du corps";
        check = false;
        _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openErrorNotification("Erreur", this.partOfBodyIsEmptyMessage + " pour la fiche.");
      }

      if (this.worksheet.title === "" || this.worksheet.title === null) {
        this.titleIsEmptyMessage = "Vous devez entrer un titre pour la fiche.";
        check = false;
        _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openErrorNotification("Erreur", this.titleIsEmptyMessage);
      }

      if (!this.exercises.length) {
        check = false;
        _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openErrorNotification("Erreur", "La fiche ne peut pas être vide, vous devez ajouter des vidéos.");
      }

      return check;
    },
    validEdit: function validEdit() {
      var _this = this;

      this.btnLoadingValidEditWorksheet = true;
      var isNotEmpty = this.checkIfEmpty();

      if (isNotEmpty) {
        this.axios.post("/doctor/".concat(this.doctor.id, "/edit/worksheet"), {
          _token: this.csrfTokenEditWorksheet,
          worksheetId: this.worksheet.id,
          title: this.worksheet.title,
          partOfBodyId: this.worksheet.partOfBody.id,
          duration: this.worksheet.duration,
          perWeek: this.worksheet.perWeek,
          perDay: this.worksheet.perDay,
          exercises: this.exercises
        }).then(function (response) {
          if (_this.patient) {
            _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openSuccessNotification("Edition de la prescription", "La prescription a bien \xE9t\xE9 modifi\xE9e");
          } else {
            _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openSuccessNotification("Edition de la fiche", response.data);
          }

          _this.btnLoadingValidEditWorksheet = false;
          setTimeout(function () {
            if (_this.patient) {
              document.location.href = "/doctor/".concat(_this.doctor.id, "/dashboard");
            } else {
              document.location.href = "/doctor/".concat(_this.doctor.id, "/dashboard/?tab=ws");
            }
          }, 2000);
        }).catch(function (error) {
          var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
          _this.btnLoadingValidEditWorksheet = false;
          _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openErrorNotification("Erreur", errorMess);
        });
      } else {
        this.btnLoadingValidEditWorksheet = false;
      }
    },
    validCreate: function validCreate() {
      var _this2 = this;

      this.btnLoadingValidCreateWorksheet = true;
      var isNotEmpty = this.checkIfEmpty();

      if (isNotEmpty) {
        this.axios.post("/doctor/".concat(this.doctor.id, "/create/worksheet"), {
          _token: this.csrfTokenCreateWorksheet,
          worksheetId: this.worksheet.id,
          patientId: this.patient ? this.patient.id : null,
          title: this.worksheet.title,
          partOfBodyId: this.worksheet.partOfBody.id,
          duration: this.worksheet.duration,
          perWeek: this.worksheet.perWeek,
          perDay: this.worksheet.perDay,
          exercises: this.exercises
        }).then(function (response) {
          if (_this2.patient) {
            if (!_this2.worksheet.id) {
              // création du modèle de fiche (identique sans le patient)
              _this2.axios.post("/doctor/".concat(_this2.doctor.id, "/create/worksheet"), {
                _token: _this2.csrfTokenCreateWorksheet,
                worksheetId: _this2.worksheet.id,
                patientId: null,
                title: _this2.worksheet.title,
                partOfBodyId: _this2.worksheet.partOfBody.id,
                duration: _this2.worksheet.duration,
                perWeek: _this2.worksheet.perWeek,
                perDay: _this2.worksheet.perDay,
                exercises: _this2.exercises
              }).then(function (response) {
                _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openSuccessNotification("Création de la prescription", "La fiche <strong> ".concat(_this2.worksheet.title, "</strong> \n                                            a \xE9t\xE9 prescrite \xE0 <strong>\n                                            ").concat(_this2.getUserName(_this2.patient), "</strong>"));
                _this2.btnLoadingValidCreateWorksheet = false;
                setTimeout(function () {
                  document.location.href = "/doctor/".concat(_this2.doctor.id, "/dashboard");
                }, 2000);
              }).catch(function (error) {
                var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
                _this2.btnLoadingValidCreateWorksheet = false;
                _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openErrorNotification("Erreur", errorMess);
              });
            } else {
              _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openSuccessNotification("Création de la prescription", "La fiche <strong> ".concat(_this2.worksheet.title, "</strong> \n                                    a \xE9t\xE9 prescrite \xE0 <strong>\n                                    ").concat(_this2.getUserName(_this2.patient), "</strong>"));
              _this2.btnLoadingValidCreateWorksheet = false;
              setTimeout(function () {
                document.location.href = "/doctor/".concat(_this2.doctor.id, "/dashboard");
              }, 2000);
            }
          } else {
            _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openSuccessNotification("Création de la fiche", response.data);
            _this2.btnLoadingValidCreateWorksheet = false;
            setTimeout(function () {
              document.location.href = "/doctor/".concat(_this2.doctor.id, "/dashboard/?tab=ws");
            }, 2000);
          }
        }).catch(function (error) {
          var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
          _this2.btnLoadingValidCreateWorksheet = false;
          _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openErrorNotification("Erreur", errorMess);
        });
      } else {
        this.btnLoadingValidCreateWorksheet = false;
      }
    },
    getUserName: function getUserName(user) {
      return _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].getUserName(user);
    }
  },
  created: function created() {
    var _this3 = this;

    vue__WEBPACK_IMPORTED_MODULE_18__["default"].prototype.$vs = this.$vs;
    var data = JSON.parse(document.getElementById("vueData").innerHTML);
    this.doctor = data.doctor;
    this.worksheetId = data.worksheetId;
    this.action = data.action;
    this.patient = data.patient;
    this.csrfTokenCreateWorksheet = data.csrfTokenCreateWorksheet;
    this.csrfTokenEditWorksheet = data.csrfTokenEditWorksheet;
    this.csrfTokenRemoveExercise = data.csrfTokenRemoveExercise;
    this.loading = true;

    if (this.worksheetId != 0) {
      this.axios.get("/doctor/".concat(this.doctor.id, "/get/worksheet/").concat(this.worksheetId)).then(function (response) {
        _this3.worksheet = response.data;

        if (_this3.action === "creation" && !_this3.patient) {
          _this3.worksheet.title = "Copie de ".concat(_this3.worksheet.title);
        }

        _this3.axios.get("/doctor/".concat(_this3.doctor.id, "/get/exercises/").concat(_this3.worksheetId)).then(function (response) {
          _this3.exercises = response.data;
          _this3.exercises = _this3.exercises.map(function (exercise) {
            return _objectSpread(_objectSpread({}, exercise), {}, {
              option: exercise.option ? exercise.option : "",
              tempo: exercise.tempo ? exercise.tempo : "",
              hold: exercise.hold ? exercise.hold : "",
              optionActive: exercise.option ? true : false,
              tempoActive: exercise.tempo ? true : false,
              holdActive: exercise.hold ? true : false
            });
          });

          if ("edition" === _this3.action) {
            _this3.axios.get("/doctor/".concat(_this3.doctor.id, "/check/worksheet-sessions-exist/").concat(_this3.worksheetId)).then(function (response) {
              _this3.checkIfWorksheetSessionsExist = response.data;
              _this3.loading = false;
            }).catch(function (error) {
              var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
              console.error(errorMess);
            });
          } else {
            _this3.loading = false;
          }
        }).catch(function (error) {
          var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
          console.error(errorMess);
        });
      }).catch(function (error) {
        var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
        console.error(errorMess);
      });
    } else {
      this.loading = false;
    }

    this.loadingVideos = true;
    this.axios.get("/doctor/".concat(this.doctor.id, "/get/videos")).then(function (response) {
      _this3.loadingVideos = false;
      _this3.videos = response.data;
    }).catch(function (error) {
      var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
      _services_function__WEBPACK_IMPORTED_MODULE_14__["default"].openErrorNotification("Erreur", errorMess);
      _this3.loadingVideos = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var _ExercisesPlaylist_VideoPlayer_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ExercisesPlaylist/VideoPlayer.vue */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue");
/* harmony import */ var _ExercisesPlaylist_VideoLibrary_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ExercisesPlaylist/VideoLibrary.vue */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue");
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/function */ "./assets/vue/services/function.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VideoPlayer: _ExercisesPlaylist_VideoPlayer_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    VideoLibrary: _ExercisesPlaylist_VideoLibrary_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  props: {
    doctor: Object,
    loading: Boolean,
    worksheet: Object,
    exercises: Array,
    action: String,
    csrfTokenRemoveExercise: String,
    loadingVideos: Boolean,
    videos: Array
  },
  data: function data() {
    return {
      videoPlayerToggle: false,
      videoLibraryToggle: false,
      activeOptions: {
        option: [],
        tempo: [],
        hold: []
      },
      exerciseForPlaying: null,
      modalConfirmRemoveExercise: false,
      removeExerciseDetails: {
        video: {}
      },
      btnLoadingValidRemoveExercise: false
    };
  },
  computed: {
    getWorksheet: function getWorksheet() {
      return this.worksheet;
    },
    getExercises: function getExercises() {
      return _services_function__WEBPACK_IMPORTED_MODULE_13__["default"].sortByPosition(this.exercises);
    },
    getTheLastExercise: function getTheLastExercise() {
      return this.getExercises[this.getExercises.length - 1];
    }
  },
  methods: {
    checkValue: function checkValue(bool, exercise, type) {
      if (false === bool) {
        exercise[type] = "";
      }
    },
    addVideosSelection: function addVideosSelection(videos) {
      var _this = this;

      var is = this.getExercises.length;
      videos.forEach(function (v, i) {
        var exercise = {
          id: null,
          position: is + i,
          numberOfRepetitions: 10,
          numberOfSeries: 3,
          option: "",
          tempo: "",
          hold: "",
          optionActive: false,
          tempoActive: false,
          holdActive: false,
          video: v
        };

        _this.exercises.push(exercise);
      });
    },
    checkIfValueIsEmptyOrNull: function checkIfValueIsEmptyOrNull(exercise) {
      if (exercise.numberOfSeries < 1) {
        exercise.numberOfSeries = 1;
      }

      if (exercise.numberOfRepetitions < 1) {
        exercise.numberOfRepetitions = 1;
      }

      if ("" === exercise.numberOfSeries || null === exercise.numberOfSeries) {
        exercise.numberOfSeries = 1;
      }

      if ("" === exercise.numberOfRepetitions || null === exercise.numberOfRepetitions) {
        exercise.numberOfRepetitions = 1;
      }
    },
    upPosition: function upPosition(exercise) {
      if (exercise.position > 0) {
        var oldPosition = exercise.position;
        var newPosition = exercise.position - 1;
        var prevExercise = this.getExercises.find(function (e) {
          return e.position === newPosition;
        });
        exercise.position = newPosition;

        if (prevExercise) {
          prevExercise.position = oldPosition;
        }
      }
    },
    downPosition: function downPosition(exercise) {
      if (exercise.position < this.getExercises.length) {
        var oldPosition = exercise.position;
        var newPosition = exercise.position + 1;
        var nextExercise = this.getExercises.find(function (e) {
          return e.position === newPosition;
        });
        exercise.position = newPosition;

        if (nextExercise) {
          nextExercise.position = oldPosition;
        }
      }
    },
    removeExercise: function removeExercise(exercise) {
      this.removeExerciseDetails = exercise;
      return this.modalConfirmRemoveExercise = !this.modalConfirmRemoveExercise;
    },
    validRemoveExercise: function validRemoveExercise() {
      var _this2 = this;

      this.btnLoadingValidRemoveExercise = true;

      if (!this.removeExerciseDetails.id || "creation" === this.action) {
        this.exercises.splice(this.exercises.indexOf(this.removeExerciseDetails), 1);
        _services_function__WEBPACK_IMPORTED_MODULE_13__["default"].sortByPosition(this.exercises).map(function (e, i) {
          return e.position = i;
        });
        this.btnLoadingValidRemoveExercise = false;
        this.modalConfirmRemoveExercise = false;
      } else {
        this.axios.post("/doctor/".concat(this.doctor.id, "/remove/exercise"), {
          _token: this.csrfTokenRemoveExercise,
          worksheetId: this.getWorksheet.id,
          exerciseId: this.removeExerciseDetails.id
        }).then(function (response) {
          console.log(response.data);

          _this2.exercises.splice(_this2.exercises.indexOf(_this2.removeExerciseDetails), 1);

          _services_function__WEBPACK_IMPORTED_MODULE_13__["default"].sortByPosition(_this2.exercises).map(function (e, i) {
            return e.position = i;
          });
          _services_function__WEBPACK_IMPORTED_MODULE_13__["default"].openSuccessNotification("Suppression de l'exercice", response.data);
          _this2.btnLoadingValidRemoveExercise = false;
          _this2.modalConfirmRemoveExercise = false;
        }).catch(function (error) {
          var errorMess = "object" === _typeof(error.response.data) ? error.response.data.detail : error.response.data;
          _services_function__WEBPACK_IMPORTED_MODULE_13__["default"].openErrorNotification("Erreur", errorMess);
          _this2.btnLoadingValidRemoveExercise = false;
          _this2.modalConfirmRemoveExercise = false;
        });
      }
    },
    openVideoPlayer: function openVideoPlayer(exercise) {
      this.exerciseForPlaying = exercise;
      this.videoPlayerToggle = true;
      document.body.classList.add("no-scrollbar");
    },
    openVideoLibrary: function openVideoLibrary() {
      this.videoLibraryToggle = true;
      document.body.classList.add("no-scrollbar");
    },
    closeVideoPlayer: function closeVideoPlayer() {
      this.videoPlayerToggle = false;
      document.body.classList.remove("no-scrollbar");
    },
    closeVideoLibrary: function closeVideoLibrary() {
      this.videoLibraryToggle = false;
      document.body.classList.remove("no-scrollbar");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_SelectPartOfBody_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/SelectPartOfBody.vue */ "./assets/vue/components/SelectPartOfBody.vue");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    loadingVideos: Boolean,
    videos: Array
  },
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.CheckIcon,
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.XIcon,
    SelectPartOfBody: _components_SelectPartOfBody_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      search: "",
      page: 1,
      max: 12,
      playerVars: {
        rel: 0,
        showinfo: 0,
        ecver: 2,
        modestbranding: 1
      },
      timeout: false,
      selectedTags: [],
      selectedPoB: null,
      selectedVideos: [],
      selectedVideoLibraries: [],
      modalAddVideo: false,
      modalViewVideo: false,
      selectedViewVideo: false,
      btnLoadingValidVideosSelection: false,
      inputChips: null,
      modalRequestFFMKRAdhesion: false,
      btnLoadingFFMKRAdhesion: false,
      videoLibraries: [{
        nom: 'Kivid',
        reference: 'kivid'
      }, {
        nom: 'FFMKR',
        reference: 'ffmkr'
      }]
    };
  },
  computed: {
    getVideos: function getVideos() {
      return this.getPage(this.getSearch(this.videos, this.search), this.page, this.max);
    },
    getLengthForPagination: function getLengthForPagination() {
      return this.getLength(this.getSearch(this.videos, this.search), this.max);
    },
    getTotalVideosFiltered: function getTotalVideosFiltered() {
      return this.getSearch(this.videos, this.search).length;
    },
    getTagsFromAllVideos: function getTagsFromAllVideos() {
      return _services_function__WEBPACK_IMPORTED_MODULE_8__["default"].getTagsFromAllVideos(this.videos);
    },
    getDoctorIsFFMKRAdherent: function getDoctorIsFFMKRAdherent() {
      return this.doctor.FFMKRAdhesion && this.doctor.FFMKRAdhesion.numcli;
    }
  },
  methods: {
    selectTag: function selectTag() {
      if (!this.inputChips) {
        this.inputChips = document.querySelector(".vs-select__chips__input");
      }

      this.inputChips.focus();
      this.inputChips.blur();
    },
    validFFMKRAdhesion: function validFFMKRAdhesion() {
      var _this = this;

      this.btnLoadingFFMKRAdhesion = true;
      window.open('//www.ffmkr.org/adhesion/vos-informations?kividtoken=eyJ1c2VyVHlwZSI6InBh', '_blank');
      setTimeout(function () {
        _this.btnLoadingFFMKRAdhesion = false;
      }, 3000);
    },
    filterByPartOfBody: function filterByPartOfBody(partOfBody) {
      this.selectedPoB = partOfBody;
      this.page = 1;
    },
    resetSelectedPoB: function resetSelectedPoB() {
      this.selectedPoB = null;
      this.page = 1;
    },
    viewVideo: function viewVideo(video) {
      this.selectedViewVideo = video;
      return this.modalViewVideo = !this.modalViewVideo;
    },
    addVideo: function addVideo(video) {
      if (video.videoLibrary.reference != 'ffmkr' || this.getDoctorIsFFMKRAdherent) this.selectedVideos.push(video);
    },
    removeVideo: function removeVideo(video) {
      this.selectedVideos.splice(this.selectedVideos.indexOf(video), 1);
    },
    requestFFMKRAdhesion: function requestFFMKRAdhesion(video) {
      if (video.videoLibrary.reference === 'ffmkr' && !this.getDoctorIsFFMKRAdherent) this.modalRequestFFMKRAdhesion = true;
    },
    validVideosSelection: function validVideosSelection() {
      var _this2 = this;

      this.btnLoadingValidVideosSelection = true;
      this.$emit("videos-selection", this.selectedVideos);
      this.closeVideoLibrary();
      setTimeout(function () {
        _this2.btnLoadingValidVideosSelection = false;
      }, 1000);
    },
    closeVideoLibrary: function closeVideoLibrary() {
      var _this3 = this;

      setTimeout(function () {
        _this3.search = "";
        _this3.selectedTags = [];
        _this3.selectedVideos = [];
        _this3.selectedPoB = null;
      }, 300);
      this.$emit("closeVideoLibrary", true);
    },
    getPage: function getPage(data, page, maxItems) {
      return _services_function__WEBPACK_IMPORTED_MODULE_8__["default"].getPage(data, page, maxItems);
    },
    getLength: function getLength(data, maxItems) {
      return _services_function__WEBPACK_IMPORTED_MODULE_8__["default"].getLength(data, maxItems);
    },
    getSearch: function getSearch(data, filter) {
      var _this4 = this;

      var videosListFiltered = _services_function__WEBPACK_IMPORTED_MODULE_8__["default"].getSearch(data, filter);

      if (this.selectedTags.length) {
        videosListFiltered = videosListFiltered.filter(function (v) {
          var results = [];

          if (v.tags) {
            _this4.selectedTags.forEach(function (tag) {
              var result = false;
              v.tags.forEach(function (vtag) {
                if (vtag.name === tag) {
                  result = true;
                }
              });
              results.push(result);
            });
          }

          return !results.includes(false);
        });
      }

      if (this.selectedVideoLibraries.length) {
        videosListFiltered = videosListFiltered.filter(function (v) {
          return _this4.selectedVideoLibraries.includes(v.videoLibrary.reference);
        });
      }

      if (this.selectedPoB) {
        videosListFiltered = videosListFiltered.filter(function (v) {
          var result = false;

          if (v.partOfBodys) {
            v.partOfBodys.forEach(function (partOfBody) {
              if (partOfBody.id === _this4.selectedPoB.id) {
                result = true;
              }
            });
          }

          return result;
        });
      }

      return videosListFiltered;
    },
    resizeWindowEventHandler: function resizeWindowEventHandler(e) {
      var _this5 = this;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        if (window.innerWidth < 449) {
          _this5.max = 1000;
          _this5.page = 1;
        }

        if (window.innerWidth >= 449 && window.innerWidth <= 649) {
          _this5.max = 8;
          _this5.page = 1;
        }

        if (window.innerWidth > 649 && window.innerWidth <= 849) {
          _this5.max = 9;
          _this5.page = 1;
        }

        if (window.innerWidth > 849 && window.innerWidth <= 1618) {
          _this5.max = 8;
          _this5.page = 1;
        }

        if (window.innerWidth > 1618 && window.innerWidth <= 1659) {
          _this5.max = 10;
          _this5.page = 1;
        }

        if (window.innerWidth > 1659) {
          _this5.max = 12;
          _this5.page = 1;
        }
      }, 250);
    }
  },
  created: function created() {
    window.addEventListener("resize", this.resizeWindowEventHandler);
    this.resizeWindowEventHandler();
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.resizeWindowEventHandler);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    exercise: Object,
    exercises: Array,
    worksheet: Object,
    lastExercise: Object
  },
  data: function data() {
    return {
      playerVars: {
        rel: 0,
        showinfo: 0,
        ecver: 2,
        modestbranding: 1
      }
    };
  },
  computed: {
    getExercise: function getExercise() {
      return this.exercise;
    },
    getExercises: function getExercises() {
      return this.exercises;
    },
    getWorksheet: function getWorksheet() {
      return this.worksheet;
    },
    getTheLastExercise: function getTheLastExercise() {
      return this.lastExercise;
    }
  },
  methods: {
    videoEnded: function videoEnded() {
      this.$refs.youtube.player.playVideo();
      this.$refs.youtube.player.stopVideo();
    },
    nextExercise: function nextExercise() {
      var _this = this;

      if (this.getExercise === this.getTheLastExercise) {
        this.closeVideoPlayer();
      } else {
        this.$parent.exerciseForPlaying = this.exercises.find(function (e) {
          return e.position === _this.exercise.position + 1;
        });
      }
    },
    closeVideoPlayer: function closeVideoPlayer() {
      this.$emit("closeVideoPlayer", true);
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/SelectPartOfBody.vue?vue&type=style&index=0&id=874fd90c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/SelectPartOfBody.vue?vue&type=style&index=0&id=874fd90c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/WorkSheetPage.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/WorkSheetPage.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=style&index=0&id=c84679c0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=style&index=0&id=c84679c0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/vue/components/SelectPartOfBody.vue":
/*!****************************************************!*\
  !*** ./assets/vue/components/SelectPartOfBody.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectPartOfBody_vue_vue_type_template_id_874fd90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectPartOfBody.vue?vue&type=template&id=874fd90c&scoped=true& */ "./assets/vue/components/SelectPartOfBody.vue?vue&type=template&id=874fd90c&scoped=true&");
/* harmony import */ var _SelectPartOfBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectPartOfBody.vue?vue&type=script&lang=js& */ "./assets/vue/components/SelectPartOfBody.vue?vue&type=script&lang=js&");
/* harmony import */ var _SelectPartOfBody_vue_vue_type_style_index_0_id_874fd90c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectPartOfBody.vue?vue&type=style&index=0&id=874fd90c&lang=scss&scoped=true& */ "./assets/vue/components/SelectPartOfBody.vue?vue&type=style&index=0&id=874fd90c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SelectPartOfBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectPartOfBody_vue_vue_type_template_id_874fd90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectPartOfBody_vue_vue_type_template_id_874fd90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "874fd90c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/components/SelectPartOfBody.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/components/TagPartOfBody.vue":
/*!*************************************************!*\
  !*** ./assets/vue/components/TagPartOfBody.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagPartOfBody_vue_vue_type_template_id_75703e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagPartOfBody.vue?vue&type=template&id=75703e24& */ "./assets/vue/components/TagPartOfBody.vue?vue&type=template&id=75703e24&");
/* harmony import */ var _TagPartOfBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagPartOfBody.vue?vue&type=script&lang=js& */ "./assets/vue/components/TagPartOfBody.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TagPartOfBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagPartOfBody_vue_vue_type_template_id_75703e24___WEBPACK_IMPORTED_MODULE_0__.render,
  _TagPartOfBody_vue_vue_type_template_id_75703e24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/components/TagPartOfBody.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/doctor/WorkSheetPage.vue":
/*!*********************************************!*\
  !*** ./assets/vue/doctor/WorkSheetPage.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkSheetPage_vue_vue_type_template_id_4a412f44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkSheetPage.vue?vue&type=template&id=4a412f44& */ "./assets/vue/doctor/WorkSheetPage.vue?vue&type=template&id=4a412f44&");
/* harmony import */ var _WorkSheetPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkSheetPage.vue?vue&type=script&lang=js& */ "./assets/vue/doctor/WorkSheetPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _WorkSheetPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkSheetPage.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/doctor/WorkSheetPage.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WorkSheetPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkSheetPage_vue_vue_type_template_id_4a412f44___WEBPACK_IMPORTED_MODULE_0__.render,
  _WorkSheetPage_vue_vue_type_template_id_4a412f44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/doctor/WorkSheetPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue":
/*!***********************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExercisesPlaylist_vue_vue_type_template_id_83a34ada___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExercisesPlaylist.vue?vue&type=template&id=83a34ada& */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=template&id=83a34ada&");
/* harmony import */ var _ExercisesPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExercisesPlaylist.vue?vue&type=script&lang=js& */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=script&lang=js&");
/* harmony import */ var _ExercisesPlaylist_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExercisesPlaylist.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExercisesPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExercisesPlaylist_vue_vue_type_template_id_83a34ada___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExercisesPlaylist_vue_vue_type_template_id_83a34ada___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/doctor/Worksheet/ExercisesPlaylist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue":
/*!************************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoLibrary_vue_vue_type_template_id_c6600ee8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoLibrary.vue?vue&type=template&id=c6600ee8& */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=template&id=c6600ee8&");
/* harmony import */ var _VideoLibrary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoLibrary.vue?vue&type=script&lang=js& */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=script&lang=js&");
/* harmony import */ var _VideoLibrary_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoLibrary.vue?vue&type=style&index=0&lang=scss& */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VideoLibrary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoLibrary_vue_vue_type_template_id_c6600ee8___WEBPACK_IMPORTED_MODULE_0__.render,
  _VideoLibrary_vue_vue_type_template_id_c6600ee8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue":
/*!***********************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPlayer_vue_vue_type_template_id_c84679c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=template&id=c84679c0&scoped=true& */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=template&id=c84679c0&scoped=true&");
/* harmony import */ var _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=script&lang=js& */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=script&lang=js&");
/* harmony import */ var _VideoPlayer_vue_vue_type_style_index_0_id_c84679c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=style&index=0&id=c84679c0&lang=scss&scoped=true& */ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=style&index=0&id=c84679c0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoPlayer_vue_vue_type_template_id_c84679c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _VideoPlayer_vue_vue_type_template_id_c84679c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c84679c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/vue/components/SelectPartOfBody.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./assets/vue/components/SelectPartOfBody.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPartOfBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectPartOfBody.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/SelectPartOfBody.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPartOfBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/components/TagPartOfBody.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./assets/vue/components/TagPartOfBody.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPartOfBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TagPartOfBody.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/TagPartOfBody.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPartOfBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/doctor/WorkSheetPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./assets/vue/doctor/WorkSheetPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkSheetPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkSheetPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/WorkSheetPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkSheetPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExercisesPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExercisesPlaylist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExercisesPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoLibrary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoLibrary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoLibrary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/vue/components/SelectPartOfBody.vue?vue&type=style&index=0&id=874fd90c&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./assets/vue/components/SelectPartOfBody.vue?vue&type=style&index=0&id=874fd90c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPartOfBody_vue_vue_type_style_index_0_id_874fd90c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectPartOfBody.vue?vue&type=style&index=0&id=874fd90c&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/SelectPartOfBody.vue?vue&type=style&index=0&id=874fd90c&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/vue/doctor/WorkSheetPage.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************!*\
  !*** ./assets/vue/doctor/WorkSheetPage.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkSheetPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkSheetPage.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/WorkSheetPage.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ExercisesPlaylist_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExercisesPlaylist.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoLibrary_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoLibrary.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=style&index=0&id=c84679c0&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=style&index=0&id=c84679c0&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_c84679c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoPlayer.vue?vue&type=style&index=0&id=c84679c0&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=style&index=0&id=c84679c0&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/vue/components/SelectPartOfBody.vue?vue&type=template&id=874fd90c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./assets/vue/components/SelectPartOfBody.vue?vue&type=template&id=874fd90c&scoped=true& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPartOfBody_vue_vue_type_template_id_874fd90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPartOfBody_vue_vue_type_template_id_874fd90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPartOfBody_vue_vue_type_template_id_874fd90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectPartOfBody.vue?vue&type=template&id=874fd90c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/SelectPartOfBody.vue?vue&type=template&id=874fd90c&scoped=true&");


/***/ }),

/***/ "./assets/vue/components/TagPartOfBody.vue?vue&type=template&id=75703e24&":
/*!********************************************************************************!*\
  !*** ./assets/vue/components/TagPartOfBody.vue?vue&type=template&id=75703e24& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPartOfBody_vue_vue_type_template_id_75703e24___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPartOfBody_vue_vue_type_template_id_75703e24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagPartOfBody_vue_vue_type_template_id_75703e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TagPartOfBody.vue?vue&type=template&id=75703e24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/TagPartOfBody.vue?vue&type=template&id=75703e24&");


/***/ }),

/***/ "./assets/vue/doctor/WorkSheetPage.vue?vue&type=template&id=4a412f44&":
/*!****************************************************************************!*\
  !*** ./assets/vue/doctor/WorkSheetPage.vue?vue&type=template&id=4a412f44& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkSheetPage_vue_vue_type_template_id_4a412f44___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkSheetPage_vue_vue_type_template_id_4a412f44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkSheetPage_vue_vue_type_template_id_4a412f44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkSheetPage.vue?vue&type=template&id=4a412f44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/WorkSheetPage.vue?vue&type=template&id=4a412f44&");


/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=template&id=83a34ada&":
/*!******************************************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=template&id=83a34ada& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExercisesPlaylist_vue_vue_type_template_id_83a34ada___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExercisesPlaylist_vue_vue_type_template_id_83a34ada___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExercisesPlaylist_vue_vue_type_template_id_83a34ada___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExercisesPlaylist.vue?vue&type=template&id=83a34ada& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=template&id=83a34ada&");


/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=template&id=c6600ee8&":
/*!*******************************************************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=template&id=c6600ee8& ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoLibrary_vue_vue_type_template_id_c6600ee8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoLibrary_vue_vue_type_template_id_c6600ee8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoLibrary_vue_vue_type_template_id_c6600ee8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoLibrary.vue?vue&type=template&id=c6600ee8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=template&id=c6600ee8&");


/***/ }),

/***/ "./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=template&id=c84679c0&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=template&id=c84679c0&scoped=true& ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_c84679c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_c84679c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_c84679c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoPlayer.vue?vue&type=template&id=c84679c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=template&id=c84679c0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/SelectPartOfBody.vue?vue&type=template&id=874fd90c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/SelectPartOfBody.vue?vue&type=template&id=874fd90c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "select-filter"
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.loadingPartsOfBody,
              expression: "!loadingPartsOfBody"
            }
          ]
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.getPartOfBodySelected,
                  expression: "getPartOfBodySelected"
                }
              ],
              staticClass: "partofbody-selected part-of-body",
              on: { click: _vm.resetSelect }
            },
            [
              _vm.getPartOfBodySelected.icon === "pied"
                ? _c("img", {
                    staticClass: "icon-pied",
                    attrs: {
                      src: __webpack_require__(/*! ../../img/icons/part-of-body/pied.svg */ "./assets/img/icons/part-of-body/pied.svg"),
                      alt: "Icone Pied"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.getPartOfBodySelected.icon === "jambe"
                ? _c("img", {
                    staticClass: "icon-jambe",
                    attrs: {
                      src: __webpack_require__(/*! ../../img/icons/part-of-body/jambe.svg */ "./assets/img/icons/part-of-body/jambe.svg"),
                      alt: "Icone Jambe"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.getPartOfBodySelected.icon === "bras"
                ? _c("img", {
                    staticClass: "icon-bras",
                    attrs: {
                      src: __webpack_require__(/*! ../../img/icons/part-of-body/bras.svg */ "./assets/img/icons/part-of-body/bras.svg"),
                      alt: "Icone Bras"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.getPartOfBodySelected.icon === "main"
                ? _c("img", {
                    staticClass: "icon-main",
                    attrs: {
                      src: __webpack_require__(/*! ../../img/icons/part-of-body/main.svg */ "./assets/img/icons/part-of-body/main.svg"),
                      alt: "Icone Main"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.getPartOfBodySelected.icon === "epaule"
                ? _c("img", {
                    staticClass: "icon-epaule",
                    attrs: {
                      src: __webpack_require__(/*! ../../img/icons/part-of-body/epaule.svg */ "./assets/img/icons/part-of-body/epaule.svg"),
                      alt: "Icone Épaule"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.getPartOfBodySelected.icon === "dos"
                ? _c("img", {
                    staticClass: "icon-dos",
                    attrs: {
                      src: __webpack_require__(/*! ../../img/icons/part-of-body/dos.svg */ "./assets/img/icons/part-of-body/dos.svg"),
                      alt: "Icone Dos"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.getPartOfBodySelected.icon === "cervicales"
                ? _c("img", {
                    staticClass: "icon-cervicales",
                    attrs: {
                      src: __webpack_require__(/*! ../../img/icons/part-of-body/cervicales.svg */ "./assets/img/icons/part-of-body/cervicales.svg"),
                      alt: "Icone Cervicales"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.getPartOfBodySelected.icon === "lombaires"
                ? _c("img", {
                    staticClass: "icon-lombaires",
                    attrs: {
                      src: __webpack_require__(/*! ../../img/icons/part-of-body/lombaires.svg */ "./assets/img/icons/part-of-body/lombaires.svg"),
                      alt: "Icone Lombaires"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.getPartOfBodySelected.icon === "thoracique"
                ? _c("img", {
                    staticClass: "icon-thoracique",
                    attrs: {
                      src: __webpack_require__(/*! ../../img/icons/part-of-body/thoracique.svg */ "./assets/img/icons/part-of-body/thoracique.svg"),
                      alt: "Icone Thoracique"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("span", { staticClass: "text wsnw" }, [
                _vm._v(_vm._s(_vm.getPartOfBodySelected.name))
              ])
            ]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.getPartOfBodySelected,
                expression: "!getPartOfBodySelected"
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filter,
                expression: "filter"
              }
            ],
            class: { "b-r-b-zero": _vm.selectBox },
            attrs: {
              id: "partofbody-choice-select",
              autocomplete: "off",
              placeholder: !_vm.selectBox ? "Partie du corps" : "Recherchez"
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
                _vm.partsOfBodyFiltered.length
                  ? _c(
                      "ul",
                      _vm._l(_vm.partsOfBodyFiltered, function(part, i) {
                        return _c("li", { key: i }, [
                          _c(
                            "div",
                            {
                              staticClass: "part-of-body",
                              on: {
                                click: function($event) {
                                  return _vm.selectPartOfBody(part)
                                }
                              }
                            },
                            [
                              part.icon === "pied"
                                ? _c("img", {
                                    staticClass: "icon-pied",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/icons/part-of-body/pied.svg */ "./assets/img/icons/part-of-body/pied.svg"),
                                      alt: "Icone Pied"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              part.icon === "jambe"
                                ? _c("img", {
                                    staticClass: "icon-jambe",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/icons/part-of-body/jambe.svg */ "./assets/img/icons/part-of-body/jambe.svg"),
                                      alt: "Icone Jambe"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              part.icon === "bras"
                                ? _c("img", {
                                    staticClass: "icon-bras",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/icons/part-of-body/bras.svg */ "./assets/img/icons/part-of-body/bras.svg"),
                                      alt: "Icone Bras"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              part.icon === "main"
                                ? _c("img", {
                                    staticClass: "icon-main",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/icons/part-of-body/main.svg */ "./assets/img/icons/part-of-body/main.svg"),
                                      alt: "Icone Main"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              part.icon === "epaule"
                                ? _c("img", {
                                    staticClass: "icon-epaule",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/icons/part-of-body/epaule.svg */ "./assets/img/icons/part-of-body/epaule.svg"),
                                      alt: "Icone Épaule"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              part.icon === "dos"
                                ? _c("img", {
                                    staticClass: "icon-dos",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/icons/part-of-body/dos.svg */ "./assets/img/icons/part-of-body/dos.svg"),
                                      alt: "Icone Dos"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              part.icon === "cervicales"
                                ? _c("img", {
                                    staticClass: "icon-cervicales",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/icons/part-of-body/cervicales.svg */ "./assets/img/icons/part-of-body/cervicales.svg"),
                                      alt: "Icone Cervicales"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              part.icon === "lombaires"
                                ? _c("img", {
                                    staticClass: "icon-lombaires",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/icons/part-of-body/lombaires.svg */ "./assets/img/icons/part-of-body/lombaires.svg"),
                                      alt: "Icone Lombaires"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              part.icon === "thoracique"
                                ? _c("img", {
                                    staticClass: "icon-thoracique",
                                    attrs: {
                                      src: __webpack_require__(/*! ../../img/icons/part-of-body/thoracique.svg */ "./assets/img/icons/part-of-body/thoracique.svg"),
                                      alt: "Icone Thoracique"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { staticClass: "text wsnw" }, [
                                _vm._v(_vm._s(part.name))
                              ])
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  : _c("div", [
                      _c("p", { staticClass: "not-found-pob" }, [
                        _vm._v(
                          "\n                        Aucune partie du corps ne correspond.\n                    "
                        )
                      ])
                    ])
              ]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.loadingPartsOfBody,
            expression: "loadingPartsOfBody"
          }
        ],
        staticClass: "loading-gray loading-pob"
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/TagPartOfBody.vue?vue&type=template&id=75703e24&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/components/TagPartOfBody.vue?vue&type=template&id=75703e24& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "vs-button",
    { staticClass: "tag part-of-body", attrs: { size: "mini" } },
    [
      _vm.partOfBody.icon === "pied"
        ? _c("img", {
            staticClass: "icon-pied",
            attrs: {
              src: __webpack_require__(/*! ../../img/icons/part-of-body/pied.svg */ "./assets/img/icons/part-of-body/pied.svg"),
              alt: "Icone Pied"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.partOfBody.icon === "jambe"
        ? _c("img", {
            staticClass: "icon-jambe",
            attrs: {
              src: __webpack_require__(/*! ../../img/icons/part-of-body/jambe.svg */ "./assets/img/icons/part-of-body/jambe.svg"),
              alt: "Icone Jambe"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.partOfBody.icon === "bras"
        ? _c("img", {
            staticClass: "icon-bras",
            attrs: {
              src: __webpack_require__(/*! ../../img/icons/part-of-body/bras.svg */ "./assets/img/icons/part-of-body/bras.svg"),
              alt: "Icone Bras"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.partOfBody.icon === "main"
        ? _c("img", {
            staticClass: "icon-main",
            attrs: {
              src: __webpack_require__(/*! ../../img/icons/part-of-body/main.svg */ "./assets/img/icons/part-of-body/main.svg"),
              alt: "Icone Main"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.partOfBody.icon === "epaule"
        ? _c("img", {
            staticClass: "icon-epaule",
            attrs: {
              src: __webpack_require__(/*! ../../img/icons/part-of-body/epaule.svg */ "./assets/img/icons/part-of-body/epaule.svg"),
              alt: "Icone Épaule"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.partOfBody.icon === "dos"
        ? _c("img", {
            staticClass: "icon-dos",
            attrs: {
              src: __webpack_require__(/*! ../../img/icons/part-of-body/dos.svg */ "./assets/img/icons/part-of-body/dos.svg"),
              alt: "Icone Dos"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.partOfBody.icon === "cervicales"
        ? _c("img", {
            staticClass: "icon-cervicales",
            attrs: {
              src: __webpack_require__(/*! ../../img/icons/part-of-body/cervicales.svg */ "./assets/img/icons/part-of-body/cervicales.svg"),
              alt: "Icone Cervicales"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.partOfBody.icon === "lombaires"
        ? _c("img", {
            staticClass: "icon-lombaires",
            attrs: {
              src: __webpack_require__(/*! ../../img/icons/part-of-body/lombaires.svg */ "./assets/img/icons/part-of-body/lombaires.svg"),
              alt: "Icone Lombaires"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.partOfBody.icon === "thoracique"
        ? _c("img", {
            staticClass: "icon-thoracique",
            attrs: {
              src: __webpack_require__(/*! ../../img/icons/part-of-body/thoracique.svg */ "./assets/img/icons/part-of-body/thoracique.svg"),
              alt: "Icone Thoracique"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("span", { staticClass: "text wsnw" }, [
        _vm._v(_vm._s(_vm.partOfBody.name))
      ]),
      _vm._v(" "),
      _c("i", { staticClass: "kiv-completed icon-22" })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/WorkSheetPage.vue?vue&type=template&id=4a412f44&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/WorkSheetPage.vue?vue&type=template&id=4a412f44& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container", attrs: { id: "worksheet" } }, [
    _c("header", [
      _vm.loading
        ? _c("div", { staticClass: "loading-block" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "loading-gray part-of-body" })
          ])
        : _c("div", [
            _vm.patient
              ? _c("div", { staticClass: "prescri-for-patient-content" }, [
                  _c("i", {
                    staticClass: "kiv-arrow-left icon-31",
                    on: {
                      click: function($event) {
                        return _vm.rederictToDashboard()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "prescri-for-patient" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "vs-avatar",
                        {
                          staticClass: "user-avatar",
                          attrs: { size: "26", circle: "" }
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
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-name" }, [
                        _c("div", [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.getUserName(_vm.patient)) +
                              "\n                        "
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            "voir" === _vm.action
              ? _c(
                  "div",
                  { staticClass: "title-view" },
                  [
                    _c("div", { staticClass: "title" }, [
                      _c("i", {
                        staticClass: "kiv-arrow-left icon-31",
                        class: { hidden: _vm.patient },
                        on: {
                          click: function($event) {
                            return _vm.rederictToDashboard()
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("h1", [_vm._v(_vm._s(_vm.getWorksheet.title))])
                    ]),
                    _vm._v(" "),
                    _vm.getWorksheet.partOfBody
                      ? _c("TagPartOfBody", {
                          attrs: { partOfBody: _vm.getWorksheet.partOfBody }
                        })
                      : _vm._e()
                  ],
                  1
                )
              : _c(
                  "div",
                  { staticClass: "title" },
                  [
                    _c("i", {
                      staticClass: "kiv-arrow-left icon-31",
                      class: { hidden: _vm.patient },
                      on: {
                        click: function($event) {
                          return _vm.rederictToDashboard()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-input", {
                      attrs: {
                        "label-placeholder": "Titre de la fiche",
                        type: "text"
                      },
                      on: {
                        keyup: function($event) {
                          _vm.titleIsEmptyMessage = null
                        }
                      },
                      scopedSlots: _vm._u(
                        [
                          _vm.titleIsEmptyMessage
                            ? {
                                key: "message-danger",
                                fn: function() {
                                  return [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.titleIsEmptyMessage) +
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
                        value: _vm.worksheet.title,
                        callback: function($$v) {
                          _vm.$set(_vm.worksheet, "title", $$v)
                        },
                        expression: "worksheet.title"
                      }
                    })
                  ],
                  1
                ),
            _vm._v(" "),
            "voir" !== _vm.action
              ? _c("div", { staticClass: "worksheet-params" }, [
                  _c(
                    "div",
                    {
                      staticClass: "worksheet-details",
                      class: {
                        disabled:
                          "edition" === _vm.action &&
                          _vm.checkIfWorksheetSessionsExist
                      }
                    },
                    [
                      "edition" === _vm.action &&
                      _vm.checkIfWorksheetSessionsExist
                        ? _c("div", { staticClass: "avert-sessions-start" }, [
                            _c("i", { staticClass: "kiv-info icon-17" }),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                            Vous ne pouvez plus modifier la durée de la\n                            prescription car le patient a déjà démarré ses\n                            sessions.\n                        "
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "worksheet-timing-perweek" },
                        [
                          _c("i", { staticClass: "kiv-calendar icon-10" }),
                          _vm._v(" "),
                          _c("vs-input", {
                            attrs: {
                              id: "perWeek",
                              "label-placeholder": "X par sem. (max: 7)",
                              type: "number",
                              min: "1",
                              max: "7"
                            },
                            on: {
                              blur: function($event) {
                                return _vm.checkIfDurationValueIsEmptyOrNull(
                                  _vm.worksheet.perWeek,
                                  $event
                                )
                              }
                            },
                            model: {
                              value: _vm.worksheet.perWeek,
                              callback: function($$v) {
                                _vm.$set(_vm.worksheet, "perWeek", $$v)
                              },
                              expression: "worksheet.perWeek"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "worksheet-timing-perday" },
                        [
                          _c("i", { staticClass: "kiv-calendar icon-10" }),
                          _vm._v(" "),
                          _c("vs-input", {
                            attrs: {
                              id: "perDay",
                              "label-placeholder": "X par jour (max: 3)",
                              type: "number",
                              min: "1",
                              max: "3"
                            },
                            on: {
                              blur: function($event) {
                                return _vm.checkIfDurationValueIsEmptyOrNull(
                                  _vm.worksheet.perDay,
                                  $event
                                )
                              }
                            },
                            model: {
                              value: _vm.worksheet.perDay,
                              callback: function($$v) {
                                _vm.$set(_vm.worksheet, "perDay", $$v)
                              },
                              expression: "worksheet.perDay"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "worksheet-period" },
                        [
                          _c("i", { staticClass: "kiv-clock icon-11" }),
                          _vm._v(" "),
                          _c("vs-input", {
                            attrs: {
                              id: "duration",
                              "label-placeholder": "Durée en sem. (max: 52)",
                              type: "number",
                              min: "1",
                              max: "52"
                            },
                            on: {
                              blur: function($event) {
                                return _vm.checkIfDurationValueIsEmptyOrNull(
                                  _vm.worksheet.duration,
                                  $event
                                )
                              }
                            },
                            model: {
                              value: _vm.worksheet.duration,
                              callback: function($$v) {
                                _vm.$set(_vm.worksheet, "duration", $$v)
                              },
                              expression: "worksheet.duration"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "select-filter-block" },
                    [
                      _c("SelectPartOfBody", {
                        attrs: { partOfBody: _vm.worksheet.partOfBody },
                        on: {
                          partOfBodySelected: _vm.setPartOfBody,
                          partOfBodyReset: _vm.resetPoB
                        }
                      }),
                      _vm._v(" "),
                      _vm.partOfBodyIsEmptyMessage
                        ? _c("div", { staticClass: "error-mess" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.partOfBodyIsEmptyMessage) +
                                "\n                    "
                            )
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                ])
              : _vm._e()
          ])
    ]),
    _vm._v(" "),
    _c("main", [
      _c(
        "section",
        {
          class: { "no-mt": "voir" === _vm.action },
          attrs: { id: "exercises-playlist" }
        },
        [
          _c("ExercisesPlaylist", {
            attrs: {
              doctor: _vm.doctor,
              loading: _vm.loading,
              action: _vm.action,
              worksheet: _vm.getWorksheet,
              exercises: _vm.getExercises,
              loadingVideos: _vm.loadingVideos,
              videos: _vm.videos,
              csrfTokenRemoveExercise: _vm.csrfTokenRemoveExercise
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "btn-valid",
        class: {
          disabled:
            _vm.btnLoadingValidEditWorksheet ||
            _vm.btnLoadingValidCreateWorksheet ||
            _vm.loading
        }
      },
      [
        "edition" === _vm.action
          ? _c(
              "vs-button",
              {
                attrs: { loading: _vm.btnLoadingValidEditWorksheet },
                on: { click: _vm.validEdit }
              },
              [
                _c("i", { staticClass: "fas fa-check-circle" }),
                _vm._v("\n            Valider les modifications\n        ")
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        "creation" === _vm.action && !_vm.patient
          ? _c(
              "vs-button",
              {
                attrs: { loading: _vm.btnLoadingValidCreateWorksheet },
                on: { click: _vm.validCreate }
              },
              [
                _c("i", { staticClass: "fas fa-check-circle" }),
                _vm._v("\n            Créer la fiche\n        ")
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        "creation" === _vm.action && _vm.patient
          ? _c(
              "vs-button",
              {
                attrs: { loading: _vm.btnLoadingValidCreateWorksheet },
                on: { click: _vm.validCreate }
              },
              [
                _c("i", { staticClass: "fas fa-check-circle" }),
                _vm._v("\n            Créer la prescription\n        ")
              ]
            )
          : _vm._e()
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
    return _c("div", { staticClass: "title" }, [
      _c("i", { staticClass: "kiv-arrow-left icon-31" }),
      _vm._v(" "),
      _c("div", { staticClass: "loading-gray h1" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "label" }, [
      _vm._v("prescription "),
      _c("span", [_vm._v("pour")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=template&id=83a34ada&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist.vue?vue&type=template&id=83a34ada& ***!
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
    "div",
    [
      _c("div", { staticClass: "exercises-list" }, [
        _vm.loading
          ? _c("div", [
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2)
            ])
          : _c(
              "div",
              _vm._l(_vm.getExercises, function(exercise, i) {
                return _c("div", { key: i, staticClass: "exercise" }, [
                  _c("div", { staticClass: "thumbnail-wrapper" }, [
                    "voir" !== _vm.action
                      ? _c(
                          "div",
                          { staticClass: "btns-arrow" },
                          [
                            exercise.position != 0
                              ? _c(
                                  "vs-button",
                                  {
                                    attrs: { circle: "", icon: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.upPosition(exercise)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-sort-up" })]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            exercise.position != _vm.getExercises.length - 1
                              ? _c(
                                  "vs-button",
                                  {
                                    attrs: { circle: "", icon: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.downPosition(exercise)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-sort-down" })]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "btn-playlist" },
                      [
                        _c(
                          "vs-button",
                          {
                            on: {
                              click: function($event) {
                                return _vm.openVideoPlayer(exercise)
                              }
                            }
                          },
                          [_c("span", [_vm._v(" Voir")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "thumbnail",
                      style: {
                        backgroundImage:
                          "url('" + exercise.video.thumbnailUrl + "')"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "content" }, [
                    _c("div", { staticClass: "input-h2" }, [
                      _c("h2", [
                        _c("span", [_vm._v(_vm._s(exercise.video.name))])
                      ]),
                      _vm._v(" "),
                      "voir" !== _vm.action
                        ? _c(
                            "button",
                            {
                              staticClass: "remove-exercise",
                              on: {
                                click: function($event) {
                                  return _vm.removeExercise(exercise)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    "voir" !== _vm.action
                      ? _c("div", { staticClass: "details" }, [
                          _c("div", { staticClass: "series-reps" }, [
                            _c(
                              "div",
                              { staticClass: "series" },
                              [
                                _c("i", { staticClass: "kiv-series icon-18" }),
                                _vm._v(" "),
                                _c("vs-input", {
                                  attrs: {
                                    "label-placeholder": "Nb de séries",
                                    type: "number",
                                    min: "1"
                                  },
                                  on: {
                                    blur: function($event) {
                                      return _vm.checkIfValueIsEmptyOrNull(
                                        exercise
                                      )
                                    }
                                  },
                                  model: {
                                    value: exercise.numberOfSeries,
                                    callback: function($$v) {
                                      _vm.$set(exercise, "numberOfSeries", $$v)
                                    },
                                    expression: "exercise.numberOfSeries"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "reps" },
                              [
                                _c("i", { staticClass: "kiv-reps icon-19" }),
                                _vm._v(" "),
                                _c("vs-input", {
                                  attrs: {
                                    "label-placeholder": "Nb de répétitions",
                                    type: "number",
                                    min: "1"
                                  },
                                  on: {
                                    blur: function($event) {
                                      return _vm.checkIfValueIsEmptyOrNull(
                                        exercise
                                      )
                                    }
                                  },
                                  model: {
                                    value: exercise.numberOfRepetitions,
                                    callback: function($$v) {
                                      _vm.$set(
                                        exercise,
                                        "numberOfRepetitions",
                                        $$v
                                      )
                                    },
                                    expression: "exercise.numberOfRepetitions"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    "voir" !== _vm.action
                      ? _c("div", { staticClass: "options" }, [
                          _c(
                            "div",
                            {
                              staticClass: "option",
                              class: {
                                active: exercise.optionActive,
                                hidden: !exercise.video.options.length
                              }
                            },
                            [
                              _c("span", [_vm._v("Option")]),
                              _vm._v(" "),
                              _c("vs-switch", {
                                on: {
                                  change: function($event) {
                                    return _vm.checkValue(
                                      exercise.optionActive,
                                      exercise,
                                      "option"
                                    )
                                  }
                                },
                                model: {
                                  value: exercise.optionActive,
                                  callback: function($$v) {
                                    _vm.$set(exercise, "optionActive", $$v)
                                  },
                                  expression: "exercise.optionActive"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "kiv-select",
                                  class: {
                                    disabled: !exercise.optionActive
                                  }
                                },
                                [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: exercise.option,
                                          expression: "exercise.option"
                                        }
                                      ],
                                      staticClass: "select-options",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            exercise,
                                            "option",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }),
                                      _vm._v(" "),
                                      _vm._l(exercise.video.options, function(
                                        option,
                                        i
                                      ) {
                                        return _c(
                                          "option",
                                          {
                                            key: i,
                                            attrs: { label: option.name },
                                            domProps: { value: option.name }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(option.name) +
                                                "\n                                    "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "placeholder",
                                      class: { hidden: exercise.option }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Sélectionner\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "white-background" })
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "hold",
                              class: { active: exercise.holdActive }
                            },
                            [
                              _c("span", [_vm._v("Tenir")]),
                              _vm._v(" "),
                              _c("vs-switch", {
                                on: {
                                  change: function($event) {
                                    return _vm.checkValue(
                                      exercise.holdActive,
                                      exercise,
                                      "hold"
                                    )
                                  }
                                },
                                model: {
                                  value: exercise.holdActive,
                                  callback: function($$v) {
                                    _vm.$set(exercise, "holdActive", $$v)
                                  },
                                  expression: "exercise.holdActive"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-input", {
                                class: { disabled: !exercise.holdActive },
                                attrs: {
                                  "label-placeholder": "Secondes",
                                  type: "number"
                                },
                                model: {
                                  value: exercise.hold,
                                  callback: function($$v) {
                                    _vm.$set(exercise, "hold", $$v)
                                  },
                                  expression: "exercise.hold"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "tempo",
                              class: { active: exercise.tempoActive }
                            },
                            [
                              _c("span", [_vm._v("Tempo")]),
                              _vm._v(" "),
                              _c("vs-switch", {
                                on: {
                                  change: function($event) {
                                    return _vm.checkValue(
                                      exercise.tempoActive,
                                      exercise,
                                      "tempo"
                                    )
                                  }
                                },
                                model: {
                                  value: exercise.tempoActive,
                                  callback: function($$v) {
                                    _vm.$set(exercise, "tempoActive", $$v)
                                  },
                                  expression: "exercise.tempoActive"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-input", {
                                class: { disabled: !exercise.tempoActive },
                                attrs: {
                                  "label-placeholder": "(ex: 2 - 0 - 1 - 0)",
                                  type: "text"
                                },
                                model: {
                                  value: exercise.tempo,
                                  callback: function($$v) {
                                    _vm.$set(exercise, "tempo", $$v)
                                  },
                                  expression: "exercise.tempo"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "vs-tooltip",
                                {
                                  staticClass: "kiv-help",
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "tooltip",
                                        fn: function() {
                                          return [
                                            _vm._v(
                                              "\n                                    Le tempo, c'est tout simplement le\n                                    rythme de la répétition, indiquant que\n                                    le mouvement doit être lent, explosif ou\n                                    contrôlé.\n                                "
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "icon-help",
                                      class: {
                                        active: exercise.tempoActive
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-question"
                                      })
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    "voir" === _vm.action
                      ? _c("div", { staticClass: "details" }, [
                          _c("div", { staticClass: "series-reps" }, [
                            _c("div", { staticClass: "series" }, [
                              _c("i", { staticClass: "kiv-series icon-18" }),
                              _c("span", [
                                _vm._v(_vm._s(exercise.numberOfSeries))
                              ]),
                              _vm._v(
                                "\n                                séries\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            exercise.numberOfRepetitions
                              ? _c("div", { staticClass: "reps" }, [
                                  _c("i", { staticClass: "kiv-reps icon-19" }),
                                  _c("span", [
                                    _vm._v(_vm._s(exercise.numberOfRepetitions))
                                  ]),
                                  _vm._v(
                                    "\n                                répétitions\n                            "
                                  )
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          exercise.option
                            ? _c("div", { staticClass: "option" }, [
                                _vm._v(
                                  "\n                            Options : "
                                ),
                                _c("span", [_vm._v(_vm._s(exercise.option))])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          exercise.hold
                            ? _c("div", { staticClass: "hold" }, [
                                _vm._v(
                                  "\n                            Tenir : "
                                ),
                                _c("span", [
                                  _vm._v(_vm._s(exercise.hold) + "s")
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          exercise.tempo
                            ? _c(
                                "div",
                                { staticClass: "tempo" },
                                [
                                  _vm._v(
                                    "\n                            Tempo : "
                                  ),
                                  _c("span", [_vm._v(_vm._s(exercise.tempo))]),
                                  _vm._v(" "),
                                  _c(
                                    "vs-tooltip",
                                    {
                                      staticClass: "kiv-help",
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "tooltip",
                                            fn: function() {
                                              return [
                                                _vm._v(
                                                  "\n                                    Le tempo, c'est tout simplement le\n                                    rythme de la répétition, indiquant que\n                                    le mouvement doit être lent, explosif ou\n                                    contrôlé.\n                                "
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    },
                                    [
                                      _c("div", { staticClass: "icon-help" }, [
                                        _c("i", {
                                          staticClass: "fas fa-question"
                                        })
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ])
                      : _vm._e()
                  ])
                ])
              }),
              0
            ),
        _vm._v(" "),
        "voir" !== _vm.action
          ? _c("div", { staticClass: "add-videos" }, [
              _c(
                "div",
                { staticClass: "btn-add-videos" },
                [
                  _c(
                    "vs-button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.openVideoLibrary()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fab fa-youtube" }),
                      _vm._v(" Ajouter des vidéos\n                ")
                    ]
                  )
                ],
                1
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _vm.videoPlayerToggle
            ? _c("VideoPlayer", {
                attrs: {
                  doctor: _vm.doctor,
                  worksheet: _vm.getWorksheet,
                  exercise: _vm.exerciseForPlaying,
                  exercises: _vm.getExercises,
                  lastExercise: _vm.getTheLastExercise
                },
                on: { closeVideoPlayer: _vm.closeVideoPlayer }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _vm.videoLibraryToggle
            ? _c("VideoLibrary", {
                attrs: {
                  doctor: _vm.doctor,
                  loadingVideos: _vm.loadingVideos,
                  videos: _vm.videos
                },
                on: {
                  closeVideoLibrary: _vm.closeVideoLibrary,
                  "videos-selection": _vm.addVideosSelection
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          model: {
            value: _vm.modalConfirmRemoveExercise,
            callback: function($$v) {
              _vm.modalConfirmRemoveExercise = $$v
            },
            expression: "modalConfirmRemoveExercise"
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
                    _vm._s(_vm.removeExerciseDetails.video.name) +
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
                      _vm.modalConfirmRemoveExercise = false
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
                    disabled: _vm.btnLoadingValidRemoveExercise
                  },
                  attrs: { loading: _vm.btnLoadingValidRemoveExercise },
                  on: { click: _vm.validRemoveExercise }
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
    return _c("div", { staticClass: "exercise loading-block" }, [
      _c("div", { staticClass: "loading-gray thumbnail-wrapper" }),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "loading-gray h2 w-45" }),
        _vm._v(" "),
        _c("div", { staticClass: "details" }, [
          _c("div", { staticClass: "series-reps" }, [
            _c("div", { staticClass: "loading-gray series w-25" }),
            _vm._v(" "),
            _c("div", { staticClass: "loading-gray reps w-15" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray option w-25" }),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray tempo w-15" }),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray hold w-25" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "commentary" }, [
          _c("div", { staticClass: "loading-gray title w-25" }),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray input" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "exercise loading-block" }, [
      _c("div", { staticClass: "loading-gray thumbnail-wrapper" }),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "loading-gray h2 w-35" }),
        _vm._v(" "),
        _c("div", { staticClass: "details" }, [
          _c("div", { staticClass: "series-reps" }, [
            _c("div", { staticClass: "loading-gray series w-15" }),
            _vm._v(" "),
            _c("div", { staticClass: "loading-gray reps w-25" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray option w-25" }),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray tempo w-15" }),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray hold w-25" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "commentary" }, [
          _c("div", { staticClass: "loading-gray title w-25" }),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray input" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "exercise loading-block" }, [
      _c("div", { staticClass: "loading-gray thumbnail-wrapper" }),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "loading-gray h2 w-45" }),
        _vm._v(" "),
        _c("div", { staticClass: "details" }, [
          _c("div", { staticClass: "series-reps" }, [
            _c("div", { staticClass: "loading-gray series w-15" }),
            _vm._v(" "),
            _c("div", { staticClass: "loading-gray reps w-15" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray option w-25" }),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray tempo w-15" }),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray hold w-25" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "commentary" }, [
          _c("div", { staticClass: "loading-gray title w-25" }),
          _vm._v(" "),
          _c("div", { staticClass: "loading-gray input" })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=template&id=c6600ee8&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoLibrary.vue?vue&type=template&id=c6600ee8& ***!
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
  return _c(
    "div",
    { staticClass: "video-library" },
    [
      _c("div", { staticClass: "content" }, [
        _c(
          "section",
          { staticClass: "kiv-block", attrs: { id: "video-library" } },
          [
            _c(
              "button",
              {
                staticClass: "vs-dialog__close btn-close-library-sm",
                on: { click: _vm.closeVideoLibrary }
              },
              [_c("i", { staticClass: "vs-icon-close vs-icon-hover-x" })]
            ),
            _vm._v(" "),
            _c("h2", [
              _vm._v("\n                Vidéothèque\n                "),
              !_vm.loadingVideos
                ? _c(
                    "span",
                    { staticClass: "count-videos" },
                    [
                      _c("transition", { attrs: { name: "fade" } }, [
                        _vm.search || _vm.selectedTags.length || _vm.selectedPoB
                          ? _c("i", { staticClass: "fas fa-filter" })
                          : _vm._e()
                      ]),
                      _vm._v(_vm._s(_vm.getTotalVideosFiltered) + " vidéo"),
                      _vm.getTotalVideosFiltered > 1
                        ? _c("span", [_vm._v("s")])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.search || _vm.selectedTags.length || _vm.selectedPoB
                        ? _c("span", [
                            _vm._v("\n                        filtrée"),
                            _vm.getTotalVideosFiltered > 1
                              ? _c("span", [_vm._v("s")])
                              : _vm._e()
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "primary-actions" },
              [
                _c(
                  "div",
                  { staticClass: "search" },
                  [
                    _c("vs-input", {
                      attrs: {
                        "label-placeholder": "Filtrer par nom de video"
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
                  { staticClass: "kiv-select tags" },
                  [
                    _vm.getTagsFromAllVideos.length
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
                              },
                              input: function($event) {
                                return _vm.selectTag()
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
                            _vm._l(_vm.getTagsFromAllVideos, function(tag, i) {
                              return _c(
                                "vs-option",
                                { key: i, attrs: { label: tag, value: tag } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(tag) +
                                      "\n                        "
                                  )
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _c("template", { slot: "notData" }, [
                              _vm._v(
                                "\n                            Aucun mot-clé ne correspond."
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
                  { staticClass: "kiv-select tags" },
                  [
                    _c(
                      "vs-select",
                      {
                        attrs: {
                          filter: "",
                          multiple: "",
                          placeholder: "Bibliothèque"
                        },
                        on: {
                          change: function($event) {
                            _vm.page = 1
                          },
                          input: function($event) {
                            return _vm.selectTag()
                          }
                        },
                        model: {
                          value: _vm.selectedVideoLibraries,
                          callback: function($$v) {
                            _vm.selectedVideoLibraries = $$v
                          },
                          expression: "selectedVideoLibraries"
                        }
                      },
                      [
                        _vm._l(_vm.videoLibraries, function(library, i) {
                          return _c(
                            "vs-option",
                            {
                              key: i,
                              attrs: {
                                label: library.nom,
                                value: library.reference
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(library.nom) +
                                  "\n                        "
                              )
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _c("template", { slot: "notData" }, [
                          _vm._v(
                            "\n                            Aucune bibliothèque ne correspond."
                          )
                        ])
                      ],
                      2
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("SelectPartOfBody", {
                  attrs: { partOfBody: _vm.selectedPoB },
                  on: {
                    partOfBodySelected: _vm.filterByPartOfBody,
                    partOfBodyReset: _vm.resetSelectedPoB
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "video-library-content" }, [
              !_vm.loadingVideos && _vm.getVideos.length
                ? _c(
                    "div",
                    { staticClass: "videos-list" },
                    _vm._l(_vm.getVideos, function(video, i) {
                      return _c(
                        "div",
                        {
                          key: i,
                          class: {
                            "selected-video": _vm.selectedVideos.includes(
                              video
                            ),
                            "disabled-video":
                              video.videoLibrary.reference === "ffmkr" &&
                              !_vm.getDoctorIsFFMKRAdherent,
                            "video-ffmkr":
                              video.videoLibrary.reference === "ffmkr"
                          },
                          on: {
                            click: function($event) {
                              return _vm.requestFFMKRAdhesion(video)
                            }
                          }
                        },
                        [
                          video.videoLibrary.reference === "ffmkr"
                            ? _c("div", { staticClass: "video-ffmkr-blason" }, [
                                _c("img", {
                                  staticClass: "logo-ffmkr",
                                  attrs: {
                                    src:
                                      video.videoLibrary.reference ===
                                        "ffmkr" && !_vm.getDoctorIsFFMKRAdherent
                                        ? "/img/logo-kivid-FFMKR-grey.svg"
                                        : "/img/logo-kivid-FFMKR-white.svg",
                                    alt: "Logo FFMKR"
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "video-thumbnail" }, [
                            _c(
                              "a",
                              {
                                staticClass: "video-link",
                                on: {
                                  click: function($event) {
                                    return _vm.viewVideo(video)
                                  }
                                }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    src: video.thumbnailUrl,
                                    alt: "vignette de la vidéo"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "svg",
                                  {
                                    attrs: {
                                      height: "512pt",
                                      viewBox: "0 -77 512.00213 512",
                                      width: "512pt",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        id: "test",
                                        d:
                                          "m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0",
                                        fill: "#f00"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        id: "test2",
                                        d:
                                          "m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0",
                                        fill: "#fff"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "video-details" },
                            [
                              _c("div", { staticClass: "video-name" }, [
                                video.name.length < 45
                                  ? _c("div", [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(video.name) +
                                          "\n                                "
                                      )
                                    ])
                                  : _c("div", [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            video.name.substring(0, 45) + "..."
                                          ) +
                                          "\n                                "
                                      )
                                    ])
                              ]),
                              _vm._v(" "),
                              !_vm.selectedVideos.includes(video)
                                ? _c(
                                    "vs-button",
                                    {
                                      staticClass: "btn-add-vid",
                                      attrs: { circle: "", size: "small" },
                                      on: {
                                        click: function($event) {
                                          return _vm.addVideo(video)
                                        }
                                      }
                                    },
                                    [
                                      _c("plus-icon", { attrs: { size: "2x" } })
                                    ],
                                    1
                                  )
                                : _c(
                                    "vs-button",
                                    {
                                      staticClass: "btn-remove-vid",
                                      attrs: { circle: "", size: "small" },
                                      on: {
                                        click: function($event) {
                                          return _vm.removeVideo(video)
                                        }
                                      }
                                    },
                                    [
                                      _c("check-icon", {
                                        attrs: { size: "2x" }
                                      })
                                    ],
                                    1
                                  )
                            ],
                            1
                          )
                        ]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loadingVideos &&
              !_vm.getVideos.length &&
              !_vm.search &&
              !_vm.selectedTags.length &&
              !_vm.selectedPoB
                ? _c("div", { staticClass: "not-found" }, [_vm._m(0)])
                : _vm._e(),
              _vm._v(" "),
              !_vm.loadingVideos &&
              !_vm.getVideos.length &&
              (_vm.search || _vm.selectedTags.length || _vm.selectedPoB)
                ? _c("div", { staticClass: "not-found" }, [
                    _c("p", [
                      _c("i", { staticClass: "fab fa-youtube" }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          "Aucune vidéo n'a été trouvée avec\n                            "
                        ),
                        _vm.search
                          ? _c("span", [
                              _vm._v('"'),
                              _c("strong", [_vm._v(_vm._s(_vm.search))]),
                              _vm._v('"')
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        (_vm.search && _vm.selectedTags.length) ||
                        (_vm.search && _vm.selectedPoB)
                          ? _c("span", { staticClass: "et" }, [
                              _vm._v(
                                "\n                                et\n                            "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.selectedTags.length
                          ? _c(
                              "span",
                              _vm._l(_vm.selectedTags, function(tag, i) {
                                return _c(
                                  "span",
                                  { key: i, staticClass: "nf-tag tag" },
                                  [
                                    _c("span", { staticClass: "text wsnw" }, [
                                      _vm._v(_vm._s(tag))
                                    ])
                                  ]
                                )
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.selectedPoB
                          ? _c("span", { staticClass: "nf-tag part-of-body" }, [
                              _c("span", { staticClass: "text wsnw" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(_vm.selectedPoB.name) +
                                    "\n                                "
                                )
                              ])
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.loadingVideos
                ? _c("div", { staticClass: "loading videos-list" })
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.videos.length > _vm.max
              ? _c(
                  "div",
                  { staticClass: "pagination" },
                  [
                    _c(
                      "vs-pagination",
                      {
                        attrs: {
                          length: _vm.getLength(
                            _vm.getSearch(_vm.videos, _vm.search),
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
                      },
                      [
                        _c(
                          "vs-select",
                          {
                            model: {
                              value: _vm.page,
                              callback: function($$v) {
                                _vm.page = $$v
                              },
                              expression: "page"
                            }
                          },
                          _vm._l(
                            _vm.getLength(
                              _vm.getSearch(_vm.videos, _vm.search),
                              _vm.max
                            ),
                            function(numberPage) {
                              return _c(
                                "vs-option",
                                {
                                  key: numberPage,
                                  attrs: {
                                    label: numberPage,
                                    value: numberPage
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(numberPage) +
                                      "\n                        "
                                  )
                                ]
                              )
                            }
                          ),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "btn-valid-selection" },
              [
                _c(
                  "vs-button",
                  {
                    class: {
                      disabled: _vm.btnLoadingValidVideosSelection
                    },
                    attrs: { loading: _vm.btnLoadingValidVideosSelection },
                    on: {
                      click: function($event) {
                        return _vm.validVideosSelection()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-check-circle" }),
                    _vm._v("Valider la selection\n                ")
                  ]
                )
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          staticClass: "view-video",
          model: {
            value: _vm.modalViewVideo,
            callback: function($$v) {
              _vm.modalViewVideo = $$v
            },
            expression: "modalViewVideo"
          }
        },
        [
          _c("youtube", {
            attrs: {
              "player-vars": _vm.playerVars,
              "video-id": _vm.selectedViewVideo.youtubeId
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          staticClass: "modal-ffmkr-adhesion",
          model: {
            value: _vm.modalRequestFFMKRAdhesion,
            callback: function($$v) {
              _vm.modalRequestFFMKRAdhesion = $$v
            },
            expression: "modalRequestFFMKRAdhesion"
          }
        },
        [
          _c("h2", [_vm._v("Vidéo FFMKR")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("Pour utiliser les vidéos de la FFMKR vous devez y adhérer")
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "btn-container",
              class: { disabled: _vm.btnLoadingFFMKRAdhesion }
            },
            [
              _c(
                "vs-button",
                {
                  staticClass: "w-100",
                  attrs: {
                    loading: _vm.btnLoadingFFMKRAdhesion,
                    type: "submit"
                  },
                  on: { click: _vm.validFFMKRAdhesion }
                },
                [
                  _c("span", [
                    _vm._v("Adhérer à la "),
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
    return _c("p", [
      _c("i", { staticClass: "fab fa-youtube" }),
      _vm._v(" "),
      _c("span", [_vm._v("Il n'y a aucune vidéo")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=template&id=c84679c0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/doctor/Worksheet/ExercisesPlaylist/VideoPlayer.vue?vue&type=template&id=c84679c0&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "video-player" },
    [
      _c(
        "button",
        {
          staticClass: "btn-close-player",
          on: { click: _vm.closeVideoPlayer }
        },
        [_c("i", { staticClass: "kiv-x icon-21" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", [
          _c(
            "div",
            { key: "video", staticClass: "video-frame" },
            [
              _c("youtube", {
                ref: "youtube",
                attrs: {
                  "player-vars": _vm.playerVars,
                  "video-id": _vm.getExercise.video.youtubeId
                },
                on: { ended: _vm.videoEnded }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c("div", { staticClass: "bottom-bar" }, [
          _c("div", { staticClass: "bottom-bar-content" }, [
            _c("div", { staticClass: "exercise-details" }, [
              _c("div", { staticClass: "exercise-count" }, [
                _vm._v(
                  "\n                        Exercice " +
                    _vm._s(_vm.getExercise.position + 1) +
                    "/" +
                    _vm._s(_vm.getExercises ? _vm.getExercises.length : 0) +
                    "\n                    "
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "tiret" }, [_vm._v("-")]),
              _vm._v(" "),
              _c("div", { staticClass: "exercise-name" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.getExercise.video.name) +
                    "\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "exercise-series-reps-options" }, [
              _c("div", { staticClass: "series-reps" }, [
                _c("div", { staticClass: "series" }, [
                  _c("i", { staticClass: "kiv-series icon-18" }),
                  _c("span", [_vm._v(_vm._s(_vm.getExercise.numberOfSeries))]),
                  _vm._v(
                    "\n                            séries\n                        "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "reps" }, [
                  _c("i", { staticClass: "kiv-reps icon-19" }),
                  _c("span", [
                    _vm._v(_vm._s(_vm.getExercise.numberOfRepetitions))
                  ]),
                  _vm._v(
                    "\n                            répétitions\n                        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "second-details" }, [
                _vm.getExercise.option
                  ? _c("div", { staticClass: "option" }, [
                      _vm._v("\n                            Options : "),
                      _c("span", [_vm._v(_vm._s(_vm.getExercise.option))])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.getExercise.hold
                  ? _c("div", { staticClass: "hold" }, [
                      _vm._v("\n                            Tenir : "),
                      _c("span", [_vm._v(_vm._s(_vm.getExercise.hold) + "s")])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.getExercise.tempo
                  ? _c(
                      "div",
                      { staticClass: "tempo" },
                      [
                        _vm._v("\n                            Tempo : "),
                        _c("span", [_vm._v(_vm._s(_vm.getExercise.tempo))]),
                        _vm._v(" "),
                        _c(
                          "vs-tooltip",
                          {
                            staticClass: "kiv-help",
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "tooltip",
                                  fn: function() {
                                    return [
                                      _vm._v(
                                        "\n                                    Le tempo, c'est tout simplement le\n                                    rythme de la répétition, indiquant que\n                                    le mouvement doit être lent, explosif ou\n                                    contrôlé.\n                                "
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ],
                              null,
                              false,
                              2695518001
                            )
                          },
                          [
                            _c("div", { staticClass: "icon-help" }, [
                              _c("i", { staticClass: "fas fa-question" })
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "btn-next" },
              [
                _c("vs-button", { on: { click: _vm.nextExercise } }, [
                  _vm.getExercise === _vm.getTheLastExercise
                    ? _c("span", [_vm._v("Fermer")])
                    : _c("span", [_vm._v("Suivant")])
                ])
              ],
              1
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./assets/img/icons/part-of-body/bras.svg":
/*!************************************************!*\
  !*** ./assets/img/icons/part-of-body/bras.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bras.0ec10e9f.svg";

/***/ }),

/***/ "./assets/img/icons/part-of-body/cervicales.svg":
/*!******************************************************!*\
  !*** ./assets/img/icons/part-of-body/cervicales.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/cervicales.3807c4cb.svg";

/***/ }),

/***/ "./assets/img/icons/part-of-body/dos.svg":
/*!***********************************************!*\
  !*** ./assets/img/icons/part-of-body/dos.svg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/dos.2ff55e67.svg";

/***/ }),

/***/ "./assets/img/icons/part-of-body/epaule.svg":
/*!**************************************************!*\
  !*** ./assets/img/icons/part-of-body/epaule.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/epaule.2d0fdb16.svg";

/***/ }),

/***/ "./assets/img/icons/part-of-body/jambe.svg":
/*!*************************************************!*\
  !*** ./assets/img/icons/part-of-body/jambe.svg ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/jambe.27f0f2a4.svg";

/***/ }),

/***/ "./assets/img/icons/part-of-body/lombaires.svg":
/*!*****************************************************!*\
  !*** ./assets/img/icons/part-of-body/lombaires.svg ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/lombaires.6c2b23f9.svg";

/***/ }),

/***/ "./assets/img/icons/part-of-body/main.svg":
/*!************************************************!*\
  !*** ./assets/img/icons/part-of-body/main.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/main.9628705f.svg";

/***/ }),

/***/ "./assets/img/icons/part-of-body/pied.svg":
/*!************************************************!*\
  !*** ./assets/img/icons/part-of-body/pied.svg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/pied.0c8ed858.svg";

/***/ }),

/***/ "./assets/img/icons/part-of-body/thoracique.svg":
/*!******************************************************!*\
  !*** ./assets/img/icons/part-of-body/thoracique.svg ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/thoracique.b97689fc.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-38d47d","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_s-f64eb6","vendors-node_modules_vue-youtube_dist_vue-youtube_js","assets_vue_services_function_js-node_modules_moment_locale_sync_recursive_"], function() { return __webpack_exec__("./assets/vue/doctor/worksheet-page.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdG9yLXdvcmtzaGVldC1wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7QUFDQUEsK0NBQUEsQ0FBUUcsaURBQVIsRUFBa0JELDhDQUFsQixHQUVBOztBQUNBO0FBQ0FGLCtDQUFBLENBQVFLLCtDQUFSLEdBRUE7O0FBQ0E7QUFDQUwsK0NBQUEsQ0FBUU0sb0RBQVI7QUFFQSxJQUFJTiwyQ0FBSixDQUFRO0FBQ0pPLEVBQUFBLE1BQU0sRUFBRSxnQkFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1AsMERBQUQsQ0FBTDtBQUFBO0FBREwsQ0FBUixFQUVHUSxNQUZILENBRVUsTUFGVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29KQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQTtBQUNBO0FBREEsR0FKQTtBQU9BLE1BUEEsa0JBT0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsZ0JBRkE7QUFHQSxzQkFIQTtBQUlBLHVCQUpBO0FBS0EsK0JBTEE7QUFNQTtBQU5BO0FBUUEsR0FoQkE7QUFpQkE7QUFDQSx5QkFEQSxtQ0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBTkE7QUFPQSx1QkFQQSxpQ0FPQTtBQUFBOztBQUNBLDBDQUNBO0FBQUEsZUFDQSxPQUNBLFNBREEsQ0FDQSxLQURBLEVBRUEsT0FGQSxDQUVBLGtCQUZBLEVBRUEsRUFGQSxFQUdBLFdBSEEsR0FJQSxRQUpBLENBS0EsYUFDQSxTQURBLENBQ0EsS0FEQSxFQUVBLE9BRkEsQ0FFQSxrQkFGQSxFQUVBLEVBRkEsRUFHQSxXQUhBLEVBTEEsQ0FEQTtBQUFBLFFBREE7QUFjQTtBQXRCQSxHQWpCQTtBQXlDQTtBQUNBLG1CQURBLDZCQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVEE7QUFVQSxpQkFWQSwyQkFVQTtBQUNBO0FBQ0EsS0FaQTtBQWFBLG9CQWJBLDRCQWFBLFVBYkEsRUFhQTtBQUNBO0FBQ0E7QUFDQSxLQWhCQTtBQWlCQSxlQWpCQSx5QkFpQkE7QUFBQTs7QUFDQTtBQUVBO0FBQ0EscURBQ0EsMEJBREE7QUFHQTs7QUFDQTtBQUNBLE9BTkEsRUFNQSxHQU5BO0FBT0EsS0EzQkE7QUE0QkEsb0JBNUJBLDhCQTRCQTtBQUNBO0FBQ0EsS0E5QkE7QUErQkEseUJBL0JBLG1DQStCQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBRkEsRUFFQSxJQUZBO0FBR0E7QUFDQSxLQXpDQTtBQTBDQSwyQkExQ0EsbUNBMENBLEtBMUNBLEVBMENBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBL0NBLEdBekNBO0FBMEZBLFNBMUZBLHFCQTBGQTtBQUFBOztBQUNBO0FBRUEsZUFDQSxHQURBLHVCQUVBLElBRkEsQ0FFQTtBQUNBO0FBRUE7QUFDQSxLQU5BLEVBT0EsS0FQQSxDQU9BO0FBQ0Esc0JBQ0EsNENBQ0EsMEJBREEsR0FFQSxtQkFIQTtBQUtBO0FBQ0EsS0FkQTtBQWVBLEdBNUdBO0FBNkdBLFNBN0dBLHFCQTZHQTtBQUNBO0FBQ0E7QUEvR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFEQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsZ0dBREE7QUFFQSwrRkFGQTtBQUdBO0FBSEEsR0FEQTtBQU1BLE1BTkEsa0JBTUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkE7QUFHQSx1QkFIQTtBQUlBO0FBQ0Esd0JBREE7QUFFQSxtQkFGQTtBQUdBLGlCQUhBO0FBSUEsa0JBSkE7QUFLQTtBQUxBLE9BSkE7QUFXQSxtQkFYQTtBQVlBLG1CQVpBO0FBYUEsMEJBYkE7QUFjQSxnQkFkQTtBQWVBLG9DQWZBO0FBZ0JBLGtDQWhCQTtBQWlCQSxtQ0FqQkE7QUFrQkEsb0JBbEJBO0FBbUJBO0FBQ0Esb0JBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEEsT0FuQkE7QUF3QkEseUNBeEJBO0FBeUJBLDJDQXpCQTtBQTBCQSx5Q0ExQkE7QUEyQkEsK0JBM0JBO0FBNEJBO0FBNUJBO0FBOEJBLEdBckNBO0FBc0NBO0FBQ0EsZ0JBREEsMEJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxnQkFKQSwwQkFJQTtBQUNBO0FBQ0E7QUFOQSxHQXRDQTtBQThDQTtBQUNBLGlCQURBLHlCQUNBLFVBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBS0EsWUFMQSxzQkFLQTtBQUNBO0FBQ0EsS0FQQTtBQVFBLHVCQVJBLGlDQVFBO0FBQ0E7QUFDQSxLQVZBO0FBV0EscUNBWEEsNkNBV0EsYUFYQSxFQVdBLEtBWEEsRUFXQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqREE7QUFrREEsZ0JBbERBLDBCQWtEQTtBQUNBOztBQUVBO0FBQ0Esd0NBQ0Esd0NBREE7QUFFQTtBQUNBLDBGQUNBLFFBREEsRUFFQSxpREFGQTtBQUlBOztBQUVBO0FBQ0EsbUNBQ0EsMkNBREE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBGQUNBLFFBREEsRUFFQSxnRUFGQTtBQUlBOztBQUVBO0FBQ0EsS0EvRUE7QUFnRkEsYUFoRkEsdUJBZ0ZBO0FBQUE7O0FBQ0E7QUFFQTs7QUFFQTtBQUNBLG1CQUNBLElBREEsbUJBQ0EsY0FEQSxzQkFDQTtBQUNBLDZDQURBO0FBRUEsd0NBRkE7QUFHQSxxQ0FIQTtBQUlBLG9EQUpBO0FBS0EsMkNBTEE7QUFNQSx5Q0FOQTtBQU9BLHVDQVBBO0FBUUE7QUFSQSxTQURBLEVBV0EsSUFYQSxDQVdBO0FBQ0E7QUFDQSxnR0FDQSw0QkFEQTtBQUlBLFdBTEEsTUFLQTtBQUNBLGdHQUNBLHFCQURBLEVBRUEsYUFGQTtBQUlBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFdBTkEsRUFNQSxJQU5BO0FBT0EsU0FqQ0EsRUFrQ0EsS0FsQ0EsQ0FrQ0E7QUFDQSwwQkFDQSw0Q0FDQSwwQkFEQSxHQUVBLG1CQUhBO0FBS0E7QUFFQTtBQUNBLFNBM0NBO0FBNENBLE9BN0NBLE1BNkNBO0FBQ0E7QUFDQTtBQUNBLEtBcklBO0FBc0lBLGVBdElBLHlCQXNJQTtBQUFBOztBQUNBO0FBRUE7O0FBRUE7QUFDQSxtQkFDQSxJQURBLG1CQUNBLGNBREEsd0JBQ0E7QUFDQSwrQ0FEQTtBQUVBLHdDQUZBO0FBR0EsMERBSEE7QUFJQSxxQ0FKQTtBQUtBLG9EQUxBO0FBTUEsMkNBTkE7QUFPQSx5Q0FQQTtBQVFBLHVDQVJBO0FBU0E7QUFUQSxTQURBLEVBWUEsSUFaQSxDQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQ0EsSUFEQSxtQkFFQSxnQkFGQSx3QkFHQTtBQUNBLCtCQUNBLHdCQUZBO0FBR0EsZ0RBSEE7QUFJQSwrQkFKQTtBQUtBLDZDQUxBO0FBTUEsOEJBQ0EsOEJBUEE7QUFRQSxtREFSQTtBQVNBLGlEQVRBO0FBVUEsK0NBVkE7QUFXQTtBQVhBLGVBSEEsRUFpQkEsSUFqQkEsQ0FpQkE7QUFDQSxvR0FDQSw2QkFEQSw4QkFHQSxzQkFIQSxzSkFNQSxtQkFDQSxjQURBLENBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxFQUVBLElBRkE7QUFHQSxlQWhDQSxFQWlDQSxLQWpDQSxDQWlDQTtBQUNBLGdDQUNBLHFCQUNBLG1CQURBLElBRUEsMEJBRkEsR0FHQSxtQkFKQTtBQUtBO0FBQ0Esa0dBQ0EsUUFEQSxFQUVBLFNBRkE7QUFJQSxlQTVDQTtBQTZDQSxhQS9DQSxNQStDQTtBQUNBLGtHQUNBLDZCQURBLDhCQUdBLHNCQUhBLHNJQU1BLGtDQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0EsZUFGQSxFQUVBLElBRkE7QUFHQTtBQUNBLFdBOURBLE1BOERBO0FBQ0EsZ0dBQ0Esc0JBREEsRUFFQSxhQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsYUFGQSxFQUVBLElBRkE7QUFHQTtBQUNBLFNBckZBLEVBc0ZBLEtBdEZBLENBc0ZBO0FBQ0EsMEJBQ0EsNENBQ0EsMEJBREEsR0FFQSxtQkFIQTtBQUlBO0FBQ0E7QUFDQSxTQTdGQTtBQThGQSxPQS9GQSxNQStGQTtBQUNBO0FBQ0E7QUFDQSxLQTdPQTtBQThPQSxlQTlPQSx1QkE4T0EsSUE5T0EsRUE4T0E7QUFDQTtBQUNBO0FBaFBBLEdBOUNBO0FBZ1NBLFNBaFNBLHFCQWdTQTtBQUFBOztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0EsaUJBQ0EsR0FEQSxtQkFFQSxjQUZBLDRCQUVBLGdCQUZBLEdBSUEsSUFKQSxDQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUNBLEdBREEsbUJBRUEsZ0JBRkEsNEJBRUEsa0JBRkEsR0FJQSxJQUpBLENBSUE7QUFDQTtBQUVBO0FBQ0EsbURBQ0EsUUFEQTtBQUVBLHdDQUNBLGVBREEsR0FFQSxFQUpBO0FBS0EseURBTEE7QUFNQSxzREFOQTtBQU9BLDhDQUNBLElBREEsR0FFQSxLQVRBO0FBVUEsd0RBVkE7QUFXQTtBQVhBO0FBYUEsV0FkQTs7QUFlQTtBQUNBLHlCQUNBLEdBREEsbUJBRUEsZ0JBRkEsNkNBRUEsa0JBRkEsR0FJQSxJQUpBLENBSUE7QUFDQSxxREFDQSxhQURBO0FBR0E7QUFDQSxhQVRBLEVBVUEsS0FWQSxDQVVBO0FBQ0EsOEJBQ0EscUJBQ0EsbUJBREEsSUFFQSwwQkFGQSxHQUdBLG1CQUpBO0FBTUE7QUFDQSxhQWxCQTtBQW1CQSxXQXBCQSxNQW9CQTtBQUNBO0FBQ0E7QUFDQSxTQTdDQSxFQThDQSxLQTlDQSxDQThDQTtBQUNBLDBCQUNBLDRDQUNBLDBCQURBLEdBRUEsbUJBSEE7QUFLQTtBQUNBLFNBckRBO0FBc0RBLE9BakVBLEVBa0VBLEtBbEVBLENBa0VBO0FBQ0Esd0JBQ0EsNENBQ0EsMEJBREEsR0FFQSxtQkFIQTtBQUtBO0FBQ0EsT0F6RUE7QUEwRUEsS0EzRUEsTUEyRUE7QUFDQTtBQUNBOztBQUVBO0FBRUEsZUFDQSxHQURBLG1CQUNBLGNBREEsa0JBRUEsSUFGQSxDQUVBO0FBQ0E7QUFFQTtBQUNBLEtBTkEsRUFPQSxLQVBBLENBT0E7QUFDQSxzQkFDQSw0Q0FDQSwwQkFEQSxHQUVBLG1CQUhBO0FBS0E7QUFFQTtBQUNBLEtBaEJBO0FBaUJBO0FBalpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLDRGQURBO0FBRUE7QUFGQSxHQURBO0FBS0E7QUFDQSxrQkFEQTtBQUVBLG9CQUZBO0FBR0EscUJBSEE7QUFJQSxvQkFKQTtBQUtBLGtCQUxBO0FBTUEsbUNBTkE7QUFPQSwwQkFQQTtBQVFBO0FBUkEsR0FMQTtBQWVBLE1BZkEsa0JBZUE7QUFDQTtBQUNBLDhCQURBO0FBRUEsK0JBRkE7QUFHQTtBQUNBLGtCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBLE9BSEE7QUFRQSw4QkFSQTtBQVNBLHVDQVRBO0FBVUE7QUFBQTtBQUFBLE9BVkE7QUFXQTtBQVhBO0FBYUEsR0E3QkE7QUE4QkE7QUFDQSxnQkFEQSwwQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGdCQUpBLDBCQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0Esc0JBUEEsZ0NBT0E7QUFDQTtBQUNBO0FBVEEsR0E5QkE7QUF5Q0E7QUFDQSxjQURBLHNCQUNBLElBREEsRUFDQSxRQURBLEVBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLHNCQU5BLDhCQU1BLE1BTkEsRUFNQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsMEJBRkE7QUFHQSxpQ0FIQTtBQUlBLDJCQUpBO0FBS0Esb0JBTEE7QUFNQSxtQkFOQTtBQU9BLGtCQVBBO0FBUUEsNkJBUkE7QUFTQSw0QkFUQTtBQVVBLDJCQVZBO0FBV0E7QUFYQTs7QUFjQTtBQUNBLE9BaEJBO0FBaUJBLEtBekJBO0FBMEJBLDZCQTFCQSxxQ0EwQkEsUUExQkEsRUEwQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQ0Esa0NBQ0EsZ0NBRkEsRUFHQTtBQUNBO0FBQ0E7O0FBQ0EsVUFDQSx1Q0FDQSxxQ0FGQSxFQUdBO0FBQ0E7QUFDQTtBQUNBLEtBL0NBO0FBZ0RBLGNBaERBLHNCQWdEQSxRQWhEQSxFQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUNBO0FBQUE7QUFBQSxTQURBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlEQTtBQStEQSxnQkEvREEsd0JBK0RBLFFBL0RBLEVBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQ0E7QUFBQTtBQUFBLFNBREE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBN0VBO0FBOEVBLGtCQTlFQSwwQkE4RUEsUUE5RUEsRUE4RUE7QUFDQTtBQUVBLCtDQUNBLGdDQURBO0FBRUEsS0FuRkE7QUFvRkEsdUJBcEZBLGlDQW9GQTtBQUFBOztBQUNBOztBQUVBO0FBQ0EsOEJBQ0Esa0RBREEsRUFFQSxDQUZBO0FBS0EsdUdBQ0E7QUFBQTtBQUFBLFNBREE7QUFJQTtBQUNBO0FBQ0EsT0FaQSxNQVlBO0FBQ0EsbUJBQ0EsSUFEQSxtQkFDQSxjQURBLHVCQUNBO0FBQ0EsOENBREE7QUFFQSwyQ0FGQTtBQUdBO0FBSEEsU0FEQSxFQU1BLElBTkEsQ0FNQTtBQUNBOztBQUVBLGtDQUNBLHNEQURBLEVBRUEsQ0FGQTs7QUFLQSwyR0FDQTtBQUFBO0FBQUEsV0FEQTtBQUlBLDhGQUNBLDJCQURBLEVBRUEsYUFGQTtBQUtBO0FBQ0E7QUFDQSxTQXpCQSxFQTBCQSxLQTFCQSxDQTBCQTtBQUNBLDBCQUNBLDRDQUNBLDBCQURBLEdBRUEsbUJBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQSxTQXBDQTtBQXFDQTtBQUNBLEtBMUlBO0FBMklBLG1CQTNJQSwyQkEySUEsUUEzSUEsRUEySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9JQTtBQWdKQSxvQkFoSkEsOEJBZ0pBO0FBQ0E7QUFDQTtBQUNBLEtBbkpBO0FBb0pBLG9CQXBKQSw4QkFvSkE7QUFDQTtBQUNBO0FBQ0EsS0F2SkE7QUF3SkEscUJBeEpBLCtCQXdKQTtBQUNBO0FBQ0E7QUFDQTtBQTNKQTtBQXpDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBLEdBREE7QUFNQTtBQUNBLHNFQURBO0FBRUEsd0VBRkE7QUFHQSxnRUFIQTtBQUlBO0FBSkEsR0FOQTtBQVlBLE1BWkEsa0JBWUE7QUFDQTtBQUNBLGdCQURBO0FBRUEsYUFGQTtBQUdBLGFBSEE7QUFJQTtBQUNBLGNBREE7QUFFQSxtQkFGQTtBQUdBLGdCQUhBO0FBSUE7QUFKQSxPQUpBO0FBVUEsb0JBVkE7QUFXQSxzQkFYQTtBQVlBLHVCQVpBO0FBYUEsd0JBYkE7QUFjQSxnQ0FkQTtBQWVBLDBCQWZBO0FBZ0JBLDJCQWhCQTtBQWlCQSw4QkFqQkE7QUFrQkEsMkNBbEJBO0FBbUJBLHNCQW5CQTtBQW9CQSxzQ0FwQkE7QUFxQkEsb0NBckJBO0FBc0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdEJBO0FBd0JBLEdBckNBO0FBc0NBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBLDBCQUNBLHdDQURBLEVBRUEsU0FGQSxFQUdBLFFBSEE7QUFLQSxLQVBBO0FBUUEsMEJBUkEsb0NBUUE7QUFDQSw0QkFDQSx3Q0FEQSxFQUVBLFFBRkE7QUFJQSxLQWJBO0FBY0EsMEJBZEEsb0NBY0E7QUFDQTtBQUNBLEtBaEJBO0FBaUJBLHdCQWpCQSxrQ0FpQkE7QUFDQTtBQUNBLEtBbkJBO0FBb0JBLDRCQXBCQSxzQ0FvQkE7QUFDQTtBQUNBO0FBdEJBLEdBdENBO0FBOERBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBO0FBQ0EsaURBQ0EsMEJBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsS0FWQTtBQVdBLHNCQVhBLGdDQVdBO0FBQUE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsSUFGQTtBQUdBLEtBbEJBO0FBbUJBLHNCQW5CQSw4QkFtQkEsVUFuQkEsRUFtQkE7QUFDQTtBQUNBO0FBQ0EsS0F0QkE7QUF1QkEsb0JBdkJBLDhCQXVCQTtBQUNBO0FBQ0E7QUFDQSxLQTFCQTtBQTJCQSxhQTNCQSxxQkEyQkEsS0EzQkEsRUEyQkE7QUFDQTtBQUVBO0FBQ0EsS0EvQkE7QUFnQ0EsWUFoQ0Esb0JBZ0NBLEtBaENBLEVBZ0NBO0FBQ0Esb0ZBQ0E7QUFDQSxLQW5DQTtBQW9DQSxlQXBDQSx1QkFvQ0EsS0FwQ0EsRUFvQ0E7QUFDQTtBQUNBLEtBdENBO0FBdUNBLHdCQXZDQSxnQ0F1Q0EsS0F2Q0EsRUF1Q0E7QUFDQSxzRkFDQTtBQUNBLEtBMUNBO0FBMkNBLHdCQTNDQSxrQ0EyQ0E7QUFBQTs7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLElBRkE7QUFHQSxLQXBEQTtBQXFEQSxxQkFyREEsK0JBcURBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEEsRUFLQSxHQUxBO0FBT0E7QUFDQSxLQTlEQTtBQStEQSxXQS9EQSxtQkErREEsSUEvREEsRUErREEsSUEvREEsRUErREEsUUEvREEsRUErREE7QUFDQTtBQUNBLEtBakVBO0FBa0VBLGFBbEVBLHFCQWtFQSxJQWxFQSxFQWtFQSxRQWxFQSxFQWtFQTtBQUNBO0FBQ0EsS0FwRUE7QUFxRUEsYUFyRUEscUJBcUVBLElBckVBLEVBcUVBLE1BckVBLEVBcUVBO0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFKQTtBQUtBO0FBQ0EsYUFSQTtBQVNBOztBQUVBO0FBQ0EsU0FoQkE7QUFpQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFKQTtBQUtBOztBQUVBO0FBQ0EsU0FaQTtBQWFBOztBQUVBO0FBQ0EsS0FuSEE7QUFvSEEsNEJBcEhBLG9DQW9IQSxDQXBIQSxFQW9IQTtBQUFBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BOUJBLEVBOEJBLEdBOUJBO0FBK0JBO0FBdEpBLEdBOURBO0FBc05BLFNBdE5BLHFCQXNOQTtBQUNBO0FBRUE7QUFDQSxHQTFOQTtBQTJOQSxXQTNOQSx1QkEyTkE7QUFDQTtBQUNBO0FBN05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDak5BO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG9CQUZBO0FBR0Esb0JBSEE7QUFJQSxxQkFKQTtBQUtBO0FBTEEsR0FEQTtBQVFBLE1BUkEsa0JBUUE7QUFDQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLG1CQUZBO0FBR0EsZ0JBSEE7QUFJQTtBQUpBO0FBREE7QUFRQSxHQWpCQTtBQWtCQTtBQUNBLGVBREEseUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxnQkFKQSwwQkFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLGdCQVBBLDBCQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUEsc0JBVkEsZ0NBVUE7QUFDQTtBQUNBO0FBWkEsR0FsQkE7QUFnQ0E7QUFDQSxjQURBLHdCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQSxnQkFMQSwwQkFLQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQSw4REFDQTtBQUFBO0FBQUEsU0FEQTtBQUdBO0FBQ0EsS0FiQTtBQWNBLG9CQWRBLDhCQWNBO0FBQ0E7QUFDQTtBQWhCQTtBQWhDQTs7Ozs7Ozs7Ozs7QUNwRkE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTJHO0FBQ3ZDO0FBQ0w7QUFDL0QsQ0FBcUc7OztBQUdyRztBQUM2RjtBQUM3RixnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxzRkFBTTtBQUNSLEVBQUUsb0dBQU07QUFDUixFQUFFLDZHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSwrREFBZTs7Ozs7Ozs7Ozs7Ozs7QUN2QzZFO0FBQzNCO0FBQ0w7OztBQUc1RDtBQUNBLENBQTZGO0FBQzdGLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLCtEQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN0QzZFO0FBQzNCO0FBQ0w7QUFDNUQsQ0FBMEU7OztBQUcxRTtBQUM2RjtBQUM3RixnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSwrREFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNpRjtBQUMzQjtBQUNMO0FBQ2hFLENBQThFOzs7QUFHOUU7QUFDZ0c7QUFDaEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsdUZBQU07QUFDUixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsK0RBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDNEU7QUFDM0I7QUFDTDtBQUMzRCxDQUF5RTs7O0FBR3pFO0FBQ21HO0FBQ25HLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLCtEQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q3VGO0FBQ3ZDO0FBQ0w7QUFDMUQsQ0FBZ0c7OztBQUdoRztBQUNtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSwrREFBZTs7Ozs7Ozs7Ozs7O0FDdkMyTSxDQUFDLCtEQUFlLHFOQUFHLEVBQUM7Ozs7Ozs7Ozs7OztBQ0F2QixDQUFDLCtEQUFlLGtOQUFHLEVBQUM7Ozs7Ozs7Ozs7OztBQ0FwQixDQUFDLCtEQUFlLGtOQUFHLEVBQUM7Ozs7Ozs7Ozs7OztBQ0FWLENBQUMsK0RBQWUsc05BQUcsRUFBQzs7Ozs7Ozs7Ozs7O0FDQW5CLENBQUMsK0RBQWUsaU5BQUcsRUFBQzs7Ozs7Ozs7Ozs7O0FDQXJCLENBQUMsK0RBQWUsZ05BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLHVGQUF1QztBQUMxRTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLHlGQUF3QztBQUMzRTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLHVGQUF1QztBQUMxRTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLHVGQUF1QztBQUMxRTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLDJGQUF5QztBQUM1RTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLHFGQUFzQztBQUN6RTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUE2QztBQUNoRjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLGlHQUE0QztBQUMvRTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUE2QztBQUNoRjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QyxvQkFBb0I7QUFDcEIsYUFBYTtBQUNiLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBLDZCQUE2QixTQUFTLGtCQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBTyxDQUFDLHVGQUF1QztBQUMxRjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBTyxDQUFDLHlGQUF3QztBQUMzRjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBTyxDQUFDLHVGQUF1QztBQUMxRjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBTyxDQUFDLHVGQUF1QztBQUMxRjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBTyxDQUFDLDJGQUF5QztBQUM1RjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBTyxDQUFDLHFGQUFzQztBQUN6RjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBTyxDQUFDLG1HQUE2QztBQUNoRztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBTyxDQUFDLGlHQUE0QztBQUMvRjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBTyxDQUFDLG1HQUE2QztBQUNoRztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwyQ0FBMkMsMEJBQTBCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDhCQUE4QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBDQUEwQyxnQkFBZ0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVGQUF1QztBQUNsRTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHlGQUF3QztBQUNuRTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVGQUF1QztBQUNsRTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVGQUF1QztBQUNsRTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLDJGQUF5QztBQUNwRTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHFGQUFzQztBQUNqRTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLG1HQUE2QztBQUN4RTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLGlHQUE0QztBQUN2RTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLG1HQUE2QztBQUN4RTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQ0FBc0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DLG1CQUFtQjtBQUMzRTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0Esd0JBQXdCLDBDQUEwQztBQUNsRTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNENBQTRDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQ0FBb0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMEJBQTBCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUJBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxQ0FBcUM7QUFDM0Usc0NBQXNDLGlDQUFpQztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlDQUF5QztBQUNuRTtBQUNBLG9DQUFvQyxxQ0FBcUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3Q0FBd0M7QUFDbEU7QUFDQSxvQ0FBb0MscUNBQXFDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUNBQWlDO0FBQzNEO0FBQ0Esb0NBQW9DLGtDQUFrQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQ0FBb0M7QUFDMUQ7QUFDQTtBQUNBLGlDQUFpQyxzQ0FBc0M7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHNDQUFzQywyQkFBMkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25ELG1CQUFtQjtBQUNuQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJDQUEyQztBQUNwRSxzQkFBc0I7QUFDdEIsZUFBZTtBQUNmO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7QUFDQSwwQkFBMEIsb0NBQW9DO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBNkM7QUFDdEUsc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZjtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0MsZ0JBQWdCLHVDQUF1QztBQUN2RDtBQUNBLGtCQUFrQixnQ0FBZ0M7QUFDbEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5WkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUNBQWlDO0FBQ3BFLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNCQUFzQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLDZDQUE2QywrQkFBK0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsc0JBQXNCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsNkNBQTZDLGlDQUFpQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHVDQUF1Qyw2QkFBNkI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3QkFBd0I7QUFDNUQsc0NBQXNDLDRCQUE0QjtBQUNsRTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDtBQUNBLDBDQUEwQyxtQ0FBbUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQSwwQ0FBMEMsaUNBQWlDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0JBQXdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxxREFBcUQsU0FBUyxhQUFhO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxvQkFBb0I7QUFDekUsd0RBQXdEO0FBQ3hELDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGlDQUFpQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLHlDQUF5QyxnQ0FBZ0M7QUFDekU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLHlDQUF5QyxpQ0FBaUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdCQUF3QjtBQUM1RCxzQ0FBc0MsNEJBQTRCO0FBQ2xFLHdDQUF3Qyx1QkFBdUI7QUFDL0Qsd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFLDRDQUE0QyxpQ0FBaUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyx1QkFBdUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNCQUFzQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLGtEQUFrRCwwQkFBMEI7QUFDNUU7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsU0FBUyxnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFNBQVMsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQWlEO0FBQ3ZFLHdCQUF3QiwrQ0FBK0M7QUFDdkUsd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNDQUFzQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLDJCQUEyQiw0Q0FBNEM7QUFDdkUsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUM7QUFDOUQsa0JBQWtCLCtDQUErQztBQUNqRTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUMsb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUMsc0JBQXNCLDRCQUE0QjtBQUNsRCx3QkFBd0IseUNBQXlDO0FBQ2pFO0FBQ0Esd0JBQXdCLHVDQUF1QztBQUMvRDtBQUNBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDtBQUNBLHNCQUFzQix3Q0FBd0M7QUFDOUQ7QUFDQSxzQkFBc0IsdUNBQXVDO0FBQzdEO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DLHNCQUFzQix3Q0FBd0M7QUFDOUQ7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUM7QUFDOUQsa0JBQWtCLCtDQUErQztBQUNqRTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUMsb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUMsc0JBQXNCLDRCQUE0QjtBQUNsRCx3QkFBd0IseUNBQXlDO0FBQ2pFO0FBQ0Esd0JBQXdCLHVDQUF1QztBQUMvRDtBQUNBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDtBQUNBLHNCQUFzQix3Q0FBd0M7QUFDOUQ7QUFDQSxzQkFBc0IsdUNBQXVDO0FBQzdEO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DLHNCQUFzQix3Q0FBd0M7QUFDOUQ7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUM7QUFDOUQsa0JBQWtCLCtDQUErQztBQUNqRTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUMsb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUMsc0JBQXNCLDRCQUE0QjtBQUNsRCx3QkFBd0IseUNBQXlDO0FBQ2pFO0FBQ0Esd0JBQXdCLHVDQUF1QztBQUMvRDtBQUNBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDtBQUNBLHNCQUFzQix3Q0FBd0M7QUFDOUQ7QUFDQSxzQkFBc0IsdUNBQXVDO0FBQzdEO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DLHNCQUFzQix3Q0FBd0M7QUFDOUQ7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4d0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOEJBQThCO0FBQ3BDO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0EsWUFBWSxtQ0FBbUMsdUJBQXVCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLHlCQUF5Qiw4Q0FBOEM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0EseUNBQXlDLFNBQVMsZ0JBQWdCO0FBQ2xFO0FBQ0Esc0NBQXNDLDhCQUE4QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdDQUFnQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQiwwQkFBMEI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLDZDQUE2QyxpQkFBaUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0NBQW9DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHlDQUF5QyxpQkFBaUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQ0FBc0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDBDQUEwQyxtQ0FBbUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdDQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBLDBDQUEwQywyQkFBMkI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDJCQUEyQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0Esd0RBQXdELFNBQVMsY0FBYztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywyQkFBMkI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsaURBQWlEO0FBQ2pELHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtQkFBbUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1DQUFtQztBQUN2RTtBQUNBLGlEQUFpRCwwQkFBMEI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxvQ0FBb0M7QUFDN0UsMkNBQTJDLDBCQUEwQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9DQUFvQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9DQUFvQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsNkJBQTZCLDZDQUE2QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsOEJBQThCLG9DQUFvQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0JBQStCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkJBQTZCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsU0FBUztBQUNULG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsY0FBYywwQ0FBMEM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsZ0JBQWdCO0FBQ2xELG9CQUFvQiwyQkFBMkI7QUFDL0Msc0JBQXNCLG1DQUFtQztBQUN6RCx3QkFBd0IsaUNBQWlDO0FBQ3pELDBCQUEwQiwrQkFBK0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2Q0FBNkM7QUFDckUsMEJBQTBCLDRCQUE0QjtBQUN0RCw0QkFBNEIsdUJBQXVCO0FBQ25ELDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRCw0QkFBNEIsaUNBQWlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQkFBK0I7QUFDekQ7QUFDQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0Esd0NBQXdDLDBCQUEwQjtBQUNsRSx3Q0FBd0MsZ0NBQWdDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekM7QUFDQSxrQ0FBa0MsTUFBTSwyQkFBMkI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci93b3Jrc2hlZXQtcGFnZS5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9jb21wb25lbnRzL1NlbGVjdFBhcnRPZkJvZHkudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2NvbXBvbmVudHMvVGFnUGFydE9mQm9keS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9MaWJyYXJ5LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvU2VsZWN0UGFydE9mQm9keS52dWU/NTQzYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9Xb3JrU2hlZXRQYWdlLnZ1ZT9iNzhkIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC52dWU/YzBlYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9MaWJyYXJ5LnZ1ZT82YzM0Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb1BsYXllci52dWU/OGU1NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvU2VsZWN0UGFydE9mQm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb21wb25lbnRzL1RhZ1BhcnRPZkJvZHkudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvTGlicmFyeS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvU2VsZWN0UGFydE9mQm9keS52dWU/NWZhMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvVGFnUGFydE9mQm9keS52dWU/OTk0ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9Xb3JrU2hlZXRQYWdlLnZ1ZT82MDZmIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC52dWU/MGVkNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9MaWJyYXJ5LnZ1ZT9iNjY0Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb1BsYXllci52dWU/MGIyNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvU2VsZWN0UGFydE9mQm9keS52dWU/ODYwZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvVGFnUGFydE9mQm9keS52dWU/MjAwOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9Xb3JrU2hlZXRQYWdlLnZ1ZT8wYTFmIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC52dWU/NGQ3OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9MaWJyYXJ5LnZ1ZT8yMjdhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb1BsYXllci52dWU/MDhmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBXb3JrU2hlZXRQYWdlIGZyb20gJy4vV29ya1NoZWV0UGFnZS52dWUnXHJcblxyXG4vLyBBeGlvc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBWdWVBeGlvcyBmcm9tICd2dWUtYXhpb3MnXHJcblZ1ZS51c2UoVnVlQXhpb3MsIGF4aW9zKVxyXG5cclxuLy8gVnVlc2F4IChVWCBsaWIpXHJcbmltcG9ydCBWdWVzYXggZnJvbSAndnVlc2F4J1xyXG5WdWUudXNlKFZ1ZXNheClcclxuXHJcbi8vIFlvdXR1YmUgcGxheWVyXHJcbmltcG9ydCBWdWVZb3V0dWJlIGZyb20gJ3Z1ZS15b3V0dWJlJ1xyXG5WdWUudXNlKFZ1ZVlvdXR1YmUpXHJcblxyXG5uZXcgVnVlKHtcclxuICAgIHJlbmRlcjogaCA9PiBoKFdvcmtTaGVldFBhZ2UpXHJcbn0pLiRtb3VudCgnI3Z1ZScpXHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgdi1jbGljay1vdXRzaWRlPVwiaGlkZVNlbGVjdEJveFwiIGNsYXNzPVwic2VsZWN0LWZpbHRlclwiPlxyXG4gICAgICAgIDxkaXYgdi1zaG93PVwiIWxvYWRpbmdQYXJ0c09mQm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICB2LXNob3c9XCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwYXJ0b2Zib2R5LXNlbGVjdGVkIHBhcnQtb2YtYm9keVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNldFNlbGVjdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdwaWVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9waWVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgUGllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLXBpZWRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdqYW1iZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvamFtYmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBKYW1iZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWphbWJlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSAnYnJhcydcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvYnJhcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIEJyYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1icmFzXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSAnbWFpbidcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbWFpbi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIE1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1tYWluXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSAnZXBhdWxlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9lcGF1bGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSDDiXBhdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tZXBhdWxlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSAnZG9zJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9kb3Muc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBEb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1kb3NcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdjZXJ2aWNhbGVzJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9jZXJ2aWNhbGVzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgQ2VydmljYWxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWNlcnZpY2FsZXNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdsb21iYWlyZXMnXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2xvbWJhaXJlcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIExvbWJhaXJlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWxvbWJhaXJlc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gJ3Rob3JhY2lxdWUnXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3Rob3JhY2lxdWUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBUaG9yYWNpcXVlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tdGhvcmFjaXF1ZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IHdzbndcIj57eyBnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiIWdldFBhcnRPZkJvZHlTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVyXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInNlbGVjdEJveCA9IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgQGtleXVwPVwic2VsZWN0Qm94V2l0aFRocm90dGxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicGFydG9mYm9keS1jaG9pY2Utc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Itci1iLXplcm8nOiBzZWxlY3RCb3ggfVwiXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiIXNlbGVjdEJveCA/ICdQYXJ0aWUgZHUgY29ycHMnIDogJ1JlY2hlcmNoZXonXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhcnJvdy10b2dnbGUtYm94XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBzZWxlY3RCb3ggfVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVTZWxlY3RCb3hcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInZzLWljb24tYXJyb3dcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwic2VsZWN0Qm94XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1ib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImZvY3VzSW5wdXRTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCB2LWlmPVwicGFydHNPZkJvZHlGaWx0ZXJlZC5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKHBhcnQsIGkpIGluIHBhcnRzT2ZCb2R5RmlsdGVyZWRcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGFydC1vZi1ib2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RQYXJ0T2ZCb2R5KHBhcnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICdwaWVkJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvcGllZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBQaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLXBpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGFydC5pY29uID09PSAnamFtYmUnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9qYW1iZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBKYW1iZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1qYW1iZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICdicmFzJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvYnJhcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBCcmFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWJyYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGFydC5pY29uID09PSAnbWFpbidcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L21haW4uc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgTWFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1tYWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhcnQuaWNvbiA9PT0gJ2VwYXVsZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2VwYXVsZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSDDiXBhdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWVwYXVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICdkb3MnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9kb3Muc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgRG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICdjZXJ2aWNhbGVzJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvY2VydmljYWxlcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBDZXJ2aWNhbGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWNlcnZpY2FsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGFydC5pY29uID09PSAnbG9tYmFpcmVzJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbG9tYmFpcmVzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIExvbWJhaXJlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1sb21iYWlyZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGFydC5pY29uID09PSAndGhvcmFjaXF1ZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3Rob3JhY2lxdWUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgVGhvcmFjaXF1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi10aG9yYWNpcXVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dCB3c253XCI+e3sgcGFydC5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJub3QtZm91bmQtcG9iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWN1bmUgcGFydGllIGR1IGNvcnBzIG5lIGNvcnJlc3BvbmQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LXNob3c9XCJsb2FkaW5nUGFydHNPZkJvZHlcIiBjbGFzcz1cImxvYWRpbmctZ3JheSBsb2FkaW5nLXBvYlwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgQ2xpY2tPdXRzaWRlIGZyb20gXCJ2dWUtY2xpY2stb3V0c2lkZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwYXJ0T2ZCb2R5OiBPYmplY3QsXHJcbiAgICB9LFxyXG4gICAgZGlyZWN0aXZlczoge1xyXG4gICAgICAgIENsaWNrT3V0c2lkZSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcnRzT2ZCb2R5OiBbXSxcclxuICAgICAgICAgICAgZmlsdGVyOiBcIlwiLFxyXG4gICAgICAgICAgICBzZWxlY3RCb3g6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RJbnB1dDogbnVsbCxcclxuICAgICAgICAgICAgbG9hZGluZ1BhcnRzT2ZCb2R5OiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0Qm94VGhyb3R0bGU6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJ0T2ZCb2R5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0T2ZCb2R5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFydHNPZkJvZHlGaWx0ZXJlZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydGVkUG9CTmFtZUJ5QWxwaGFiZXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRzT2ZCb2R5LmZpbHRlcigocCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBwLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5vcm1hbGl6ZShcIk5GRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubm9ybWFsaXplKFwiTkZEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvZ2dsZVNlbGVjdEJveCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSAhdGhpcy5zZWxlY3RCb3g7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcnRPZkJvZHkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEJveCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0U2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGVTZWxlY3RCb3goKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RQYXJ0T2ZCb2R5KHBhcnRvZmJvZHkpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcInBhcnRPZkJvZHlTZWxlY3RlZFwiLCBwYXJ0b2Zib2R5KTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlU2VsZWN0Qm94KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNldFNlbGVjdCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcInBhcnRPZkJvZHlSZXNldFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGFydG9mYm9keS1jaG9pY2Utc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEJveCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSW5wdXRTZWxlY3QoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvY3VzSW5wdXRTZWxlY3QoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdEJveFdpdGhUaHJvdHRsZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdEJveFRocm90dGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEJveFRocm90dGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0Qm94XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94VGhyb3R0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzb3J0ZWRQb0JOYW1lQnlBbHBoYWJldChhcnJheSkge1xyXG4gICAgICAgICAgICBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUGFydHNPZkJvZHkgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYC9nZXQvcGFydHMtb2YtYm9keWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0c09mQm9keSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nUGFydHNPZkJvZHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFydG9mYm9keS1jaG9pY2Utc2VsZWN0XCIpO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbkBpbXBvcnQgXCIuLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnNlbGVjdC1maWx0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblxyXG4gICAgLmxvYWRpbmctcG9iIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA0LjhyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgICYuYi1yLWItemVybyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAwLjVyZW0gMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtaW4taGVpZ2h0OiA0LjlyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS40cmVtIDEuN3JlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0LjNyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAwLjVyZW0gMCAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93LXRvZ2dsZS1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDAuNnJlbTtcclxuICAgICAgICByaWdodDogMC43cmVtO1xyXG4gICAgICAgIHdpZHRoOiAzLjhyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzLjRyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICYudnMtaWNvbi1hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZTU0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTAuNXJlbTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXZzLXRleHQpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS12cy10ZXh0KSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxLjlyZW07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdC1ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQuOXJlbTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDc3NztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAuNXJlbSAwLjVyZW07XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IC01cHggcmdiYSg0NCwgMTEsIDExLCAwLjE1KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xOSwgMS4wMywgMC43OSwgMS4wMik7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjZyZW07XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OiAxLjdyZW07XHJcblxyXG4gICAgICAgIC5ub3QtZm91bmQtcG9iIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUVudGVyIDAuNXM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFydG9mYm9keS1zZWxlY3RlZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNC42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEuNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuNHJlbSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYXJ0LW9mLWJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZWVlZTg7XHJcbiAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMnJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGY2ZjQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xyXG5cclxuICAgICAgICAgICAgJi5pY29uLXBpZWQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuaWNvbi1qYW1iZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDByZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuaWNvbi1icmFzIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmljb24tbWFpbiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLWVwYXVsZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLWRvcyB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLWNlcnZpY2FsZXMge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuaWNvbi1sb21iYWlyZXMge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjdyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuaWNvbi10aG9yYWNpcXVlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwLjFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0LWJveCB7XHJcbiAgICAgICAgLnBhcnQtb2YtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMXJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPHZzLWJ1dHRvbiBzaXplPVwibWluaVwiIGNsYXNzPVwidGFnIHBhcnQtb2YtYm9keVwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ3BpZWQnXCJcclxuICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9waWVkLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIFBpZWRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tcGllZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHYtaWY9XCJwYXJ0T2ZCb2R5Lmljb24gPT09ICdqYW1iZSdcIlxyXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2phbWJlLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIEphbWJlXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLWphbWJlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ2JyYXMnXCJcclxuICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9icmFzLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIEJyYXNcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tYnJhc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHYtaWY9XCJwYXJ0T2ZCb2R5Lmljb24gPT09ICdtYWluJ1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbWFpbi5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJJY29uZSBNYWluXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLW1haW5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICB2LWlmPVwicGFydE9mQm9keS5pY29uID09PSAnZXBhdWxlJ1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvZXBhdWxlLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIMOJcGF1bGVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tZXBhdWxlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ2RvcydcIlxyXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2Rvcy5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJJY29uZSBEb3NcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tZG9zXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ2NlcnZpY2FsZXMnXCJcclxuICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9jZXJ2aWNhbGVzLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIENlcnZpY2FsZXNcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tY2VydmljYWxlc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHYtaWY9XCJwYXJ0T2ZCb2R5Lmljb24gPT09ICdsb21iYWlyZXMnXCJcclxuICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9sb21iYWlyZXMuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgTG9tYmFpcmVzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLWxvbWJhaXJlc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHYtaWY9XCJwYXJ0T2ZCb2R5Lmljb24gPT09ICd0aG9yYWNpcXVlJ1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvdGhvcmFjaXF1ZS5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJJY29uZSBUaG9yYWNpcXVlXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLXRob3JhY2lxdWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IHdzbndcIj57eyBwYXJ0T2ZCb2R5Lm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJraXYtY29tcGxldGVkIGljb24tMjJcIj48L2k+XHJcbiAgICA8L3ZzLWJ1dHRvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcGFydE9mQm9keTogT2JqZWN0LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGlkPVwid29ya3NoZWV0XCI+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgaDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBwYXJ0LW9mLWJvZHlcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicGF0aWVudFwiIGNsYXNzPVwicHJlc2NyaS1mb3ItcGF0aWVudC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVkZXJpY3RUb0Rhc2hib2FyZCgpXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzY3JpLWZvci1wYXRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPnByZXNjcmlwdGlvbiA8c3Bhbj5wb3VyPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtYXZhdGFyIHNpemU9XCIyNlwiIGNsYXNzPVwidXNlci1hdmF0YXJcIiBjaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXRpZW50LmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnL2ltZy9hdmF0YXItZGVmYXVsdC5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiYEF2YXRhciBkZSAke3BhdGllbnQuZmlyc3RuYW1lfSAke3BhdGllbnQubGFzdG5hbWV9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRVc2VyTmFtZShwYXRpZW50KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiJ3ZvaXInID09PSBhY3Rpb25cIiBjbGFzcz1cInRpdGxlLXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2l2LWFycm93LWxlZnQgaWNvbi0zMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGhpZGRlbjogcGF0aWVudCB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlZGVyaWN0VG9EYXNoYm9hcmQoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57eyBnZXRXb3Jrc2hlZXQudGl0bGUgfX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWdQYXJ0T2ZCb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRXb3Jrc2hlZXQucGFydE9mQm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwYXJ0T2ZCb2R5PVwiZ2V0V29ya3NoZWV0LnBhcnRPZkJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGhpZGRlbjogcGF0aWVudCB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVkZXJpY3RUb0Rhc2hib2FyZCgpXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwid29ya3NoZWV0LnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJUaXRyZSBkZSBsYSBmaWNoZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwPVwidGl0bGVJc0VtcHR5TWVzc2FnZSA9IG51bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ0aXRsZUlzRW1wdHlNZXNzYWdlXCIgI21lc3NhZ2UtZGFuZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdGl0bGVJc0VtcHR5TWVzc2FnZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgIT09IGFjdGlvblwiIGNsYXNzPVwid29ya3NoZWV0LXBhcmFtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3b3Jrc2hlZXQtZGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlZGl0aW9uJyA9PT0gYWN0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJZldvcmtzaGVldFNlc3Npb25zRXhpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlZGl0aW9uJyA9PT0gYWN0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJZldvcmtzaGVldFNlc3Npb25zRXhpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImF2ZXJ0LXNlc3Npb25zLXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtaW5mbyBpY29uLTE3XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm91cyBuZSBwb3V2ZXogcGx1cyBtb2RpZmllciBsYSBkdXLDqWUgZGUgbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzY3JpcHRpb24gY2FyIGxlIHBhdGllbnQgYSBkw6lqw6AgZMOpbWFycsOpIHNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC10aW1pbmctcGVyd2Vla1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ3b3Jrc2hlZXQucGVyV2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJXZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIlggcGFyIHNlbS4gKG1heDogNylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBibHVyPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrSWZEdXJhdGlvblZhbHVlSXNFbXB0eU9yTnVsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5wZXJXZWVrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtdGltaW5nLXBlcmRheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ3b3Jrc2hlZXQucGVyRGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlckRheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJYIHBhciBqb3VyIChtYXg6IDMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAYmx1cj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lmRHVyYXRpb25WYWx1ZUlzRW1wdHlPck51bGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQucGVyRGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hlZXQtcGVyaW9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jbG9jayBpY29uLTExXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIndvcmtzaGVldC5kdXJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkdXJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJEdXLDqWUgZW4gc2VtLiAobWF4OiA1MilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBibHVyPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrSWZEdXJhdGlvblZhbHVlSXNFbXB0eU9yTnVsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCI1MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LWZpbHRlci1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0UGFydE9mQm9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBhcnRPZkJvZHk9XCJ3b3Jrc2hlZXQucGFydE9mQm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcGFydE9mQm9keVNlbGVjdGVkPVwic2V0UGFydE9mQm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcGFydE9mQm9keVJlc2V0PVwicmVzZXRQb0JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJwYXJ0T2ZCb2R5SXNFbXB0eU1lc3NhZ2VcIiBjbGFzcz1cImVycm9yLW1lc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBhcnRPZkJvZHlJc0VtcHR5TWVzc2FnZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGlkPVwiZXhlcmNpc2VzLXBsYXlsaXN0XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ25vLW10JzogJ3ZvaXInID09PSBhY3Rpb24gfVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxFeGVyY2lzZXNQbGF5bGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIDpkb2N0b3I9XCJkb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmFjdGlvbj1cImFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgOndvcmtzaGVldD1cImdldFdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmV4ZXJjaXNlcz1cImdldEV4ZXJjaXNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmdWaWRlb3M9XCJsb2FkaW5nVmlkZW9zXCJcclxuICAgICAgICAgICAgICAgICAgICA6dmlkZW9zPVwidmlkZW9zXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y3NyZlRva2VuUmVtb3ZlRXhlcmNpc2U9XCJjc3JmVG9rZW5SZW1vdmVFeGVyY2lzZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4tdmFsaWRcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDpcclxuICAgICAgICAgICAgICAgICAgICBidG5Mb2FkaW5nVmFsaWRFZGl0V29ya3NoZWV0IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZyxcclxuICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiJ2VkaXRpb24nID09PSBhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwidmFsaWRFZGl0XCJcclxuICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwiYnRuTG9hZGluZ1ZhbGlkRWRpdFdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIFZhbGlkZXIgbGVzIG1vZGlmaWNhdGlvbnNcclxuICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgIHYtaWY9XCInY3JlYXRpb24nID09PSBhY3Rpb24gJiYgIXBhdGllbnRcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwidmFsaWRDcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICBDcsOpZXIgbGEgZmljaGVcclxuICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgIHYtaWY9XCInY3JlYXRpb24nID09PSBhY3Rpb24gJiYgcGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZENyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICA6bG9hZGluZz1cImJ0bkxvYWRpbmdWYWxpZENyZWF0ZVdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIENyw6llciBsYSBwcmVzY3JpcHRpb25cclxuICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgZiBmcm9tIFwiLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IEV4ZXJjaXNlc1BsYXlsaXN0IGZyb20gXCIuL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC52dWVcIjtcclxuaW1wb3J0IFRhZ1BhcnRPZkJvZHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFnUGFydE9mQm9keS52dWVcIjtcclxuaW1wb3J0IFNlbGVjdFBhcnRPZkJvZHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0UGFydE9mQm9keS52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBFeGVyY2lzZXNQbGF5bGlzdCxcclxuICAgICAgICBTZWxlY3RQYXJ0T2ZCb2R5LFxyXG4gICAgICAgIFRhZ1BhcnRPZkJvZHksXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkb2N0b3I6IG51bGwsXHJcbiAgICAgICAgICAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgd29ya3NoZWV0SWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHdvcmtzaGVldDoge1xyXG4gICAgICAgICAgICAgICAgcGFydE9mQm9keTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgcGVyRGF5OiAxLFxyXG4gICAgICAgICAgICAgICAgcGVyV2VlazogMSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVyY2lzZXM6IFtdLFxyXG4gICAgICAgICAgICBwYXRpZW50OiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nVmlkZW9zOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgICAgY3NyZlRva2VuQ3JlYXRlV29ya3NoZWV0OiBudWxsLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5FZGl0V29ya3NoZWV0OiBudWxsLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5SZW1vdmVFeGVyY2lzZTogbnVsbCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIG1heER1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTIsXHJcbiAgICAgICAgICAgICAgICBwZXJEYXk6IDMsXHJcbiAgICAgICAgICAgICAgICBwZXJXZWVrOiA3LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBidG5Mb2FkaW5nVmFsaWRFZGl0V29ya3NoZWV0OiBmYWxzZSxcclxuICAgICAgICAgICAgYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0OiBmYWxzZSxcclxuICAgICAgICAgICAgY2hlY2tJZldvcmtzaGVldFNlc3Npb25zRXhpc3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHRpdGxlSXNFbXB0eU1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgIHBhcnRPZkJvZHlJc0VtcHR5TWVzc2FnZTogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0V29ya3NoZWV0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53b3Jrc2hlZXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRFeGVyY2lzZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4ZXJjaXNlcztcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzZXRQYXJ0T2ZCb2R5KHBhcnRPZkJvZHkpIHtcclxuICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGFydE9mQm9keSA9IHBhcnRPZkJvZHk7XHJcbiAgICAgICAgICAgIHRoaXMucGFydE9mQm9keUlzRW1wdHlNZXNzYWdlID0gXCJcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0UG9CKCkge1xyXG4gICAgICAgICAgICB0aGlzLndvcmtzaGVldC5wYXJ0T2ZCb2R5ID0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGVyaWN0VG9EYXNoYm9hcmQoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9kYXNoYm9hcmRgO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tJZkR1cmF0aW9uVmFsdWVJc0VtcHR5T3JOdWxsKGR1cmF0aW9uVmFsdWUsIGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uVHlwZSA9IGV2ZW50LnRhcmdldC5pZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChcInZzLWlucHV0LS1kdXJhdGlvblwiID09PSBkdXJhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcIlwiID09PSBkdXJhdGlvblZhbHVlIHx8IG51bGwgPT09IGR1cmF0aW9uVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzaGVldC5kdXJhdGlvbiA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb25WYWx1ZSA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzaGVldC5kdXJhdGlvbiA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb25WYWx1ZSA+IHRoaXMubWF4RHVyYXRpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzaGVldC5kdXJhdGlvbiA9IHRoaXMubWF4RHVyYXRpb24uZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcInZzLWlucHV0LS1wZXJEYXlcIiA9PT0gZHVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gZHVyYXRpb25WYWx1ZSB8fCBudWxsID09PSBkdXJhdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGVyRGF5ID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvblZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LnBlckRheSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb25WYWx1ZSA+IHRoaXMubWF4RHVyYXRpb24ucGVyRGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGVyRGF5ID0gdGhpcy5tYXhEdXJhdGlvbi5wZXJEYXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcInZzLWlucHV0LS1wZXJXZWVrXCIgPT09IGR1cmF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFwiXCIgPT09IGR1cmF0aW9uVmFsdWUgfHwgbnVsbCA9PT0gZHVyYXRpb25WYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LnBlcldlZWsgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uVmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGVyV2VlayA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb25WYWx1ZSA+IHRoaXMubWF4RHVyYXRpb24ucGVyV2Vlaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LnBlcldlZWsgPSB0aGlzLm1heER1cmF0aW9uLnBlcldlZWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrSWZFbXB0eSgpIHtcclxuICAgICAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy53b3Jrc2hlZXQucGFydE9mQm9keSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0T2ZCb2R5SXNFbXB0eU1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiVm91cyBkZXZleiBjaG9pc2lyIHVuZSBwYXJ0aWUgZHUgY29ycHNcIjtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBcIkVycmV1clwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydE9mQm9keUlzRW1wdHlNZXNzYWdlICsgXCIgcG91ciBsYSBmaWNoZS5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMud29ya3NoZWV0LnRpdGxlID09PSBcIlwiIHx8IHRoaXMud29ya3NoZWV0LnRpdGxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlSXNFbXB0eU1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiVm91cyBkZXZleiBlbnRyZXIgdW4gdGl0cmUgcG91ciBsYSBmaWNoZS5cIjtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCB0aGlzLnRpdGxlSXNFbXB0eU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhlcmNpc2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXJyZXVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMYSBmaWNoZSBuZSBwZXV0IHBhcyDDqnRyZSB2aWRlLCB2b3VzIGRldmV6IGFqb3V0ZXIgZGVzIHZpZMOpb3MuXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkRWRpdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRFZGl0V29ya3NoZWV0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzTm90RW1wdHkgPSB0aGlzLmNoZWNrSWZFbXB0eSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTm90RW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAucG9zdChgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9lZGl0L3dvcmtzaGVldGAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0aGlzLmNzcmZUb2tlbkVkaXRXb3Jrc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldElkOiB0aGlzLndvcmtzaGVldC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMud29ya3NoZWV0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5SWQ6IHRoaXMud29ya3NoZWV0LnBhcnRPZkJvZHkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLndvcmtzaGVldC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyV2VlazogdGhpcy53b3Jrc2hlZXQucGVyV2VlayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyRGF5OiB0aGlzLndvcmtzaGVldC5wZXJEYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlczogdGhpcy5leGVyY2lzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGF0aWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVkaXRpb24gZGUgbGEgcHJlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYExhIHByZXNjcmlwdGlvbiBhIGJpZW4gw6l0w6kgbW9kaWZpw6llYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFZGl0aW9uIGRlIGxhIGZpY2hlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRFZGl0V29ya3NoZWV0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhdGllbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vZGFzaGJvYXJkYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2Rhc2hib2FyZC8/dGFiPXdzYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFwiRXJyZXVyXCIsIGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRDcmVhdGUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzTm90RW1wdHkgPSB0aGlzLmNoZWNrSWZFbXB0eSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTm90RW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAucG9zdChgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9jcmVhdGUvd29ya3NoZWV0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuQ3JlYXRlV29ya3NoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXRJZDogdGhpcy53b3Jrc2hlZXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnRJZDogdGhpcy5wYXRpZW50ID8gdGhpcy5wYXRpZW50LmlkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMud29ya3NoZWV0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5SWQ6IHRoaXMud29ya3NoZWV0LnBhcnRPZkJvZHkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLndvcmtzaGVldC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyV2VlazogdGhpcy53b3Jrc2hlZXQucGVyV2VlayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyRGF5OiB0aGlzLndvcmtzaGVldC5wZXJEYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlczogdGhpcy5leGVyY2lzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGF0aWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLndvcmtzaGVldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyw6lhdGlvbiBkdSBtb2TDqGxlIGRlIGZpY2hlIChpZGVudGlxdWUgc2FucyBsZSBwYXRpZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9jcmVhdGUvd29ya3NoZWV0YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcmZUb2tlbkNyZWF0ZVdvcmtzaGVldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXRJZDogdGhpcy53b3Jrc2hlZXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudElkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLndvcmtzaGVldC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5SWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LnBhcnRPZkJvZHkuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMud29ya3NoZWV0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcldlZWs6IHRoaXMud29ya3NoZWV0LnBlcldlZWssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyRGF5OiB0aGlzLndvcmtzaGVldC5wZXJEYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VzOiB0aGlzLmV4ZXJjaXNlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDcsOpYXRpb24gZGUgbGEgcHJlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYExhIGZpY2hlIDxzdHJvbmc+ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Ryb25nPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhIMOpdMOpIHByZXNjcml0ZSDDoCA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZXRVc2VyTmFtZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX08L3N0cm9uZz5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9kYXNoYm9hcmRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVycmV1clwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3LDqWF0aW9uIGRlIGxhIHByZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGEgZmljaGUgPHN0cm9uZz4gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH08L3N0cm9uZz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgw6l0w6kgcHJlc2NyaXRlIMOgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZXRVc2VyTmFtZSh0aGlzLnBhdGllbnQpfTwvc3Ryb25nPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9kYXNoYm9hcmRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNyw6lhdGlvbiBkZSBsYSBmaWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZENyZWF0ZVdvcmtzaGVldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2Rhc2hib2FyZC8/dGFiPXdzYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFwiRXJyZXVyXCIsIGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZENyZWF0ZVdvcmtzaGVldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRVc2VyTmFtZSh1c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFVzZXJOYW1lKHVzZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICBWdWUucHJvdG90eXBlLiR2cyA9IHRoaXMuJHZzO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZ1ZURhdGFcIikuaW5uZXJIVE1MKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb2N0b3IgPSBkYXRhLmRvY3RvcjtcclxuICAgICAgICB0aGlzLndvcmtzaGVldElkID0gZGF0YS53b3Jrc2hlZXRJZDtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGRhdGEuYWN0aW9uO1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IGRhdGEucGF0aWVudDtcclxuICAgICAgICB0aGlzLmNzcmZUb2tlbkNyZWF0ZVdvcmtzaGVldCA9IGRhdGEuY3NyZlRva2VuQ3JlYXRlV29ya3NoZWV0O1xyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuRWRpdFdvcmtzaGVldCA9IGRhdGEuY3NyZlRva2VuRWRpdFdvcmtzaGVldDtcclxuICAgICAgICB0aGlzLmNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlID0gZGF0YS5jc3JmVG9rZW5SZW1vdmVFeGVyY2lzZTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMud29ya3NoZWV0SWQgIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2dldC93b3Jrc2hlZXQvJHt0aGlzLndvcmtzaGVldElkfWBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSBcImNyZWF0aW9uXCIgJiYgIXRoaXMucGF0aWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzaGVldC50aXRsZSA9IGBDb3BpZSBkZSAke3RoaXMud29ya3NoZWV0LnRpdGxlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9nZXQvZXhlcmNpc2VzLyR7dGhpcy53b3Jrc2hlZXRJZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4ZXJjaXNlcyA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXMgPSB0aGlzLmV4ZXJjaXNlcy5tYXAoKGV4ZXJjaXNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXhlcmNpc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogZXhlcmNpc2Uub3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGV4ZXJjaXNlLm9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbzogZXhlcmNpc2UudGVtcG8gPyBleGVyY2lzZS50ZW1wbyA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGQ6IGV4ZXJjaXNlLmhvbGQgPyBleGVyY2lzZS5ob2xkIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uQWN0aXZlOiBleGVyY2lzZS5vcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcG9BY3RpdmU6IGV4ZXJjaXNlLnRlbXBvID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob2xkQWN0aXZlOiBleGVyY2lzZS5ob2xkID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImVkaXRpb25cIiA9PT0gdGhpcy5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9jaGVjay93b3Jrc2hlZXQtc2Vzc2lvbnMtZXhpc3QvJHt0aGlzLndvcmtzaGVldElkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJZldvcmtzaGVldFNlc3Npb25zRXhpc3QgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGluZ1ZpZGVvcyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgLmdldChgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9nZXQvdmlkZW9zYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdWaWRlb3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdWaWRlb3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbiN3b3Jrc2hlZXQge1xyXG4gICAgLnByZXNjcmktZm9yLXBhdGllbnQtY29udGVudCB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMi41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByZXNjcmktZm9yLXBhdGllbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMS43cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS4xcmVtO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMC40cmVtIDAuN3JlbSByZ2JhKDE0OCwgOTYsIDc3LCAwLjA0KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjZyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzLjRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTguM3JlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTEuMnJlbTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDQuN3JlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWFhMWI3O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51c2VyLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlci1uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MXZ3O1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTZ2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDQwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY2dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2OTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzd2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAmLmxvYWRpbmctYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNnJlbTtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTMlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LW1pZGRsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wYXJ0LW9mLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52cy1pbnB1dC1wYXJlbnQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLnZzLWlucHV0LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXRfX2xhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dF9fbGFiZWwtLWhpZGRlbi52cy1pbnB1dF9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZS12aWV3IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMy43cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0N3Z3O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzMwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTR2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzODVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU3dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjJ2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY4dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjE1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2OXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzR2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc2dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjdyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnZzLWlucHV0LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0X19sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMS42cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC53b3Jrc2hlZXQtcGFyYW1zIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjlyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLndvcmtzaGVldC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLndvcmtzaGVldC1wZXJpb2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53b3Jrc2hlZXQtdGltaW5nLXBlcmRheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLndvcmtzaGVldC10aW1pbmctcGVyd2VlayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmF2ZXJ0LXNlc3Npb25zLXN0YXJ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTA3MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjNyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdC1maWx0ZXItYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucGFydC1vZi1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZXJyb3ItbWVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1haW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICNleGVyY2lzZXMtcGxheWxpc3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cmVtO1xyXG5cclxuICAgICAgICAgICAgJi5uby1tdCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tdmFsaWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxMTExO1xyXG4gICAgICAgIGJvdHRvbTogMi4zcmVtO1xyXG4gICAgICAgIHJpZ2h0OiAzcmVtO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudnMtYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMC44cmVtIDEuOHJlbSByZ2JhKDc1LCA2MSwgNTYsIDAuNTUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52cy1idXR0b25fX2xvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhlcmNpc2VzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlIGxvYWRpbmctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHRodW1ibmFpbC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBoMiB3LTQ1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzLXJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHNlcmllcyB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSByZXBzIHctMTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBvcHRpb24gdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSB0ZW1wbyB3LTE1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGhvbGQgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgdGl0bGUgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBpbnB1dFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlIGxvYWRpbmctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHRodW1ibmFpbC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBoMiB3LTM1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzLXJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHNlcmllcyB3LTE1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSByZXBzIHctMjVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBvcHRpb24gdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSB0ZW1wbyB3LTE1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGhvbGQgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgdGl0bGUgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBpbnB1dFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlIGxvYWRpbmctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHRodW1ibmFpbC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBoMiB3LTQ1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzLXJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHNlcmllcyB3LTE1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSByZXBzIHctMTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBvcHRpb24gdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSB0ZW1wbyB3LTE1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGhvbGQgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgdGl0bGUgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBpbnB1dFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoZXhlcmNpc2UsIGkpIGluIGdldEV4ZXJjaXNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhlcmNpc2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHVtYm5haWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgIT09IGFjdGlvblwiIGNsYXNzPVwiYnRucy1hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJleGVyY2lzZS5wb3NpdGlvbiAhPSAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidXBQb3NpdGlvbihleGVyY2lzZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNvcnQtdXBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnBvc2l0aW9uICE9IGdldEV4ZXJjaXNlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZG93blBvc2l0aW9uKGV4ZXJjaXNlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc29ydC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXBsYXlsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uIEBjbGljaz1cIm9wZW5WaWRlb1BsYXllcihleGVyY2lzZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gVm9pcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0aHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtleGVyY2lzZS52aWRlby50aHVtYm5haWxVcmx9JylgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBleGVyY2lzZS52aWRlby5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiJ3ZvaXInICE9PSBhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVtb3ZlLWV4ZXJjaXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVFeGVyY2lzZShleGVyY2lzZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgIT09IGFjdGlvblwiIGNsYXNzPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmllcy1yZXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1zZXJpZXMgaWNvbi0xOFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJOYiBkZSBzw6lyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lmVmFsdWVJc0VtcHR5T3JOdWxsKGV4ZXJjaXNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtcmVwcyBpY29uLTE5XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiTmIgZGUgcsOpcMOpdGl0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBibHVyPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJZlZhbHVlSXNFbXB0eU9yTnVsbChleGVyY2lzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgIT09IGFjdGlvblwiIGNsYXNzPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwib3B0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZXhlcmNpc2Uub3B0aW9uQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW46ICFleGVyY2lzZS52aWRlby5vcHRpb25zLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PcHRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLXN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2Uub3B0aW9uQWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5vcHRpb25BY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFleGVyY2lzZS5vcHRpb25BY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImV4ZXJjaXNlLm9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdC1vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKG9wdGlvbiwgaSkgaW4gZXhlcmNpc2UudmlkZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJvcHRpb24ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwib3B0aW9uLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyBoaWRkZW46IGV4ZXJjaXNlLm9wdGlvbiB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU8OpbGVjdGlvbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndoaXRlLWJhY2tncm91bmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaG9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IGV4ZXJjaXNlLmhvbGRBY3RpdmUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGVuaXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLXN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2UuaG9sZEFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UuaG9sZEFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9sZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2UuaG9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiU2Vjb25kZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZDogIWV4ZXJjaXNlLmhvbGRBY3RpdmUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRlbXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogZXhlcmNpc2UudGVtcG9BY3RpdmUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGVtcG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLXN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2UudGVtcG9BY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnRlbXBvQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZW1wbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2UudGVtcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIihleDogMiAtIDAgLSAxIC0gMClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgZGlzYWJsZWQ6ICFleGVyY2lzZS50ZW1wb0FjdGl2ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtdG9vbHRpcCBjbGFzcz1cImtpdi1oZWxwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1oZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGV4ZXJjaXNlLnRlbXBvQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgdGVtcG8sIGMnZXN0IHRvdXQgc2ltcGxlbWVudCBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnl0aG1lIGRlIGxhIHLDqXDDqXRpdGlvbiwgaW5kaXF1YW50IHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGUgbW91dmVtZW50IGRvaXQgw6p0cmUgbGVudCwgZXhwbG9zaWYgb3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyw7Rsw6kuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy10b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgPT09IGFjdGlvblwiIGNsYXNzPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmllcy1yZXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1zZXJpZXMgaWNvbi0xOFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+e3sgZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXMgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHPDqXJpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZXBzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LXJlcHMgaWNvbi0xOVwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHLDqXDDqXRpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhlcmNpc2Uub3B0aW9uXCIgY2xhc3M9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zIDogPHNwYW4+e3sgZXhlcmNpc2Uub3B0aW9uIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJleGVyY2lzZS5ob2xkXCIgY2xhc3M9XCJob2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVuaXIgOiA8c3Bhbj57eyBleGVyY2lzZS5ob2xkIH19czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhlcmNpc2UudGVtcG9cIiBjbGFzcz1cInRlbXBvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcG8gOiA8c3Bhbj57eyBleGVyY2lzZS50ZW1wbyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtdG9vbHRpcCBjbGFzcz1cImtpdi1oZWxwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhlbHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgdGVtcG8sIGMnZXN0IHRvdXQgc2ltcGxlbWVudCBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnl0aG1lIGRlIGxhIHLDqXDDqXRpdGlvbiwgaW5kaXF1YW50IHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGUgbW91dmVtZW50IGRvaXQgw6p0cmUgbGVudCwgZXhwbG9zaWYgb3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyw7Rsw6kuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy10b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXZpZGVvc1wiIHYtaWY9XCIndm9pcicgIT09IGFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1hZGQtdmlkZW9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvbiBAY2xpY2s9XCJvcGVuVmlkZW9MaWJyYXJ5KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEteW91dHViZVwiPjwvaT4gQWpvdXRlciBkZXMgdmlkw6lvc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgIDxWaWRlb1BsYXllclxyXG4gICAgICAgICAgICAgICAgdi1pZj1cInZpZGVvUGxheWVyVG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgIDpkb2N0b3I9XCJkb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgOndvcmtzaGVldD1cImdldFdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA6ZXhlcmNpc2U9XCJleGVyY2lzZUZvclBsYXlpbmdcIlxyXG4gICAgICAgICAgICAgICAgOmV4ZXJjaXNlcz1cImdldEV4ZXJjaXNlc1wiXHJcbiAgICAgICAgICAgICAgICA6bGFzdEV4ZXJjaXNlPVwiZ2V0VGhlTGFzdEV4ZXJjaXNlXCJcclxuICAgICAgICAgICAgICAgIEBjbG9zZVZpZGVvUGxheWVyPVwiY2xvc2VWaWRlb1BsYXllclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgIDxWaWRlb0xpYnJhcnlcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJ2aWRlb0xpYnJhcnlUb2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgOmRvY3Rvcj1cImRvY3RvclwiXHJcbiAgICAgICAgICAgICAgICA6bG9hZGluZ1ZpZGVvcz1cImxvYWRpbmdWaWRlb3NcIlxyXG4gICAgICAgICAgICAgICAgOnZpZGVvcz1cInZpZGVvc1wiXHJcbiAgICAgICAgICAgICAgICBAY2xvc2VWaWRlb0xpYnJhcnk9XCJjbG9zZVZpZGVvTGlicmFyeVwiXHJcbiAgICAgICAgICAgICAgICBAdmlkZW9zLXNlbGVjdGlvbj1cImFkZFZpZGVvc1NlbGVjdGlvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDx2cy1kaWFsb2cgdi1tb2RlbD1cIm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibW9kYWwtY29uZmlybS10ZXh0XCI+Q29uZmlybWVyIGxhIHN1cHByZXNzaW9uIGRlPC9wPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbmZpcm0tZGV0YWlsIHJlbW92ZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29uZmlybS1pY29uIHJlbW92ZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyByZW1vdmVFeGVyY2lzZURldGFpbHMudmlkZW8ubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29uZmlybS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlID0gZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFubnVsZXJcclxuICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkUmVtb3ZlRXhlcmNpc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwiYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGJ0bkxvYWRpbmdWYWxpZFJlbW92ZUV4ZXJjaXNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbmZpcm1lclxyXG4gICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdnMtZGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSBcIi4vRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9QbGF5ZXIudnVlXCI7XHJcbmltcG9ydCBWaWRlb0xpYnJhcnkgZnJvbSBcIi4vRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9MaWJyYXJ5LnZ1ZVwiO1xyXG5pbXBvcnQgZiBmcm9tIFwiLi4vLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBWaWRlb1BsYXllcixcclxuICAgICAgICBWaWRlb0xpYnJhcnksXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBkb2N0b3I6IE9iamVjdCxcclxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxyXG4gICAgICAgIHdvcmtzaGVldDogT2JqZWN0LFxyXG4gICAgICAgIGV4ZXJjaXNlczogQXJyYXksXHJcbiAgICAgICAgYWN0aW9uOiBTdHJpbmcsXHJcbiAgICAgICAgY3NyZlRva2VuUmVtb3ZlRXhlcmNpc2U6IFN0cmluZyxcclxuICAgICAgICBsb2FkaW5nVmlkZW9zOiBCb29sZWFuLFxyXG4gICAgICAgIHZpZGVvczogQXJyYXksXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2aWRlb1BsYXllclRvZ2dsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpZGVvTGlicmFyeVRvZ2dsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFjdGl2ZU9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbjogW10sXHJcbiAgICAgICAgICAgICAgICB0ZW1wbzogW10sXHJcbiAgICAgICAgICAgICAgICBob2xkOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlcmNpc2VGb3JQbGF5aW5nOiBudWxsLFxyXG4gICAgICAgICAgICBtb2RhbENvbmZpcm1SZW1vdmVFeGVyY2lzZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlbW92ZUV4ZXJjaXNlRGV0YWlsczogeyB2aWRlbzoge30gfSxcclxuICAgICAgICAgICAgYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRXb3Jrc2hlZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndvcmtzaGVldDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEV4ZXJjaXNlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGYuc29ydEJ5UG9zaXRpb24odGhpcy5leGVyY2lzZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGhlTGFzdEV4ZXJjaXNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGVyY2lzZXNbdGhpcy5nZXRFeGVyY2lzZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hlY2tWYWx1ZShib29sLCBleGVyY2lzZSwgdHlwZSkge1xyXG4gICAgICAgICAgICBpZiAoZmFsc2UgPT09IGJvb2wpIHtcclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlW3R5cGVdID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkVmlkZW9zU2VsZWN0aW9uKHZpZGVvcykge1xyXG4gICAgICAgICAgICBjb25zdCBpcyA9IHRoaXMuZ2V0RXhlcmNpc2VzLmxlbmd0aDtcclxuICAgICAgICAgICAgdmlkZW9zLmZvckVhY2goKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4ZXJjaXNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpcyArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZSZXBldGl0aW9uczogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZTZXJpZXM6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBvOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvbGQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wb0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9sZEFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW86IHYsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VzLnB1c2goZXhlcmNpc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrSWZWYWx1ZUlzRW1wdHlPck51bGwoZXhlcmNpc2UpIHtcclxuICAgICAgICAgICAgaWYgKGV4ZXJjaXNlLm51bWJlck9mU2VyaWVzIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXMgPSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9ucyA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnMgPSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiID09PSBleGVyY2lzZS5udW1iZXJPZlNlcmllcyB8fFxyXG4gICAgICAgICAgICAgICAgbnVsbCA9PT0gZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXNcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBleGVyY2lzZS5udW1iZXJPZlNlcmllcyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgXCJcIiA9PT0gZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9ucyB8fFxyXG4gICAgICAgICAgICAgICAgbnVsbCA9PT0gZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9uc1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnMgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cFBvc2l0aW9uKGV4ZXJjaXNlKSB7XHJcbiAgICAgICAgICAgIGlmIChleGVyY2lzZS5wb3NpdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBvc2l0aW9uID0gZXhlcmNpc2UucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGV4ZXJjaXNlLnBvc2l0aW9uIC0gMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZFeGVyY2lzZSA9IHRoaXMuZ2V0RXhlcmNpc2VzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IGUucG9zaXRpb24gPT09IG5ld1Bvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZFeGVyY2lzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZFeGVyY2lzZS5wb3NpdGlvbiA9IG9sZFBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkb3duUG9zaXRpb24oZXhlcmNpc2UpIHtcclxuICAgICAgICAgICAgaWYgKGV4ZXJjaXNlLnBvc2l0aW9uIDwgdGhpcy5nZXRFeGVyY2lzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRQb3NpdGlvbiA9IGV4ZXJjaXNlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBleGVyY2lzZS5wb3NpdGlvbiArIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0RXhlcmNpc2UgPSB0aGlzLmdldEV4ZXJjaXNlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIChlKSA9PiBlLnBvc2l0aW9uID09PSBuZXdQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBleGVyY2lzZS5wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChuZXh0RXhlcmNpc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0RXhlcmNpc2UucG9zaXRpb24gPSBvbGRQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlRXhlcmNpc2UoZXhlcmNpc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFeGVyY2lzZURldGFpbHMgPSBleGVyY2lzZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5tb2RhbENvbmZpcm1SZW1vdmVFeGVyY2lzZSA9XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5tb2RhbENvbmZpcm1SZW1vdmVFeGVyY2lzZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZFJlbW92ZUV4ZXJjaXNlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZFJlbW92ZUV4ZXJjaXNlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5yZW1vdmVFeGVyY2lzZURldGFpbHMuaWQgfHwgXCJjcmVhdGlvblwiID09PSB0aGlzLmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXMuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VzLmluZGV4T2YodGhpcy5yZW1vdmVFeGVyY2lzZURldGFpbHMpLFxyXG4gICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZi5zb3J0QnlQb3NpdGlvbih0aGlzLmV4ZXJjaXNlcykubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChlLCBpKSA9PiAoZS5wb3NpdGlvbiA9IGkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxDb25maXJtUmVtb3ZlRXhlcmNpc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAucG9zdChgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9yZW1vdmUvZXhlcmNpc2VgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90b2tlbjogdGhpcy5jc3JmVG9rZW5SZW1vdmVFeGVyY2lzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0SWQ6IHRoaXMuZ2V0V29ya3NoZWV0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZUlkOiB0aGlzLnJlbW92ZUV4ZXJjaXNlRGV0YWlscy5pZCxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VzLnNwbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VzLmluZGV4T2YodGhpcy5yZW1vdmVFeGVyY2lzZURldGFpbHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5zb3J0QnlQb3NpdGlvbih0aGlzLmV4ZXJjaXNlcykubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIGkpID0+IChlLnBvc2l0aW9uID0gaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYub3BlblN1Y2Nlc3NOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1cHByZXNzaW9uIGRlIGwnZXhlcmNpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbmZpcm1SZW1vdmVFeGVyY2lzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbmZpcm1SZW1vdmVFeGVyY2lzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGVuVmlkZW9QbGF5ZXIoZXhlcmNpc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVyY2lzZUZvclBsYXlpbmcgPSBleGVyY2lzZTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllclRvZ2dsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbGJhclwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wZW5WaWRlb0xpYnJhcnkoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9MaWJyYXJ5VG9nZ2xlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsYmFyXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VWaWRlb1BsYXllcigpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllclRvZ2dsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxiYXJcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZVZpZGVvTGlicmFyeSgpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0xpYnJhcnlUb2dnbGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsYmFyXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5leGVyY2lzZXMtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudnMtaW5wdXQtcGFyZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLnZzLWlucHV0LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAudnMtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudnMtaW5wdXRfX2xhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODklO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudnMtaW5wdXRfX2xhYmVsLS1oaWRkZW4udnMtaW5wdXRfX2xhYmVsLS1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTAuODVyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxLjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmV4ZXJjaXNlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5sb2FkaW5nLWJsb2NrIHtcclxuICAgICAgICAgICAgLmxvYWRpbmctZ3JheSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aHVtYm5haWwtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC5oMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlcmllcy1yZXBzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAudGVtcG8sXHJcbiAgICAgICAgICAgICAgICAgICAgLmhvbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tbWVudGFyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRodW1ibmFpbC13cmFwcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MnZ3O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktZGFyaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIC5idG5zLWFycm93IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgLnZzLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcmVtIDEuNXJlbSByZ2JhKDE3MywgMTAwLCA3NCwgMC44OCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZmEtc29ydC11cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5mYS1zb3J0LWRvd24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzV2dztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMi4zcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjdyZW07XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzOHJlbTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjdyZW07XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzOHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi1wbGF5bGlzdCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLnZzLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDByZW0gMS41cmVtIHJnYmEoMTczLCAxMDAsIDc0LCAwLjg4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIH4gLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbnB1dC1oMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxOHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwNDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjd2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzcwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQzdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlLWV4ZXJjaXNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q2Y2NiOTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Q2Y2NiOTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5LWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXktbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS44cmVtIDA7XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC44cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNlcmllcy1yZXBzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2VyaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMC4wNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjdyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYub3B0aW9uLmhpZGRlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMi4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1LjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAua2l2LXNlbGVjdC5kaXNhYmxlZCAudnMtc2VsZWN0IC52cy1pY29uLWFycm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5raXYtc2VsZWN0IC52cy1zZWxlY3QtY29udGVudCAudnMtc2VsZWN0X19pbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICAua2l2LXNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtc2VsZWN0LWNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLXNlbGVjdC5hY3RpdmVPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1zZWxlY3RfX2lucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJlNTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5raXYtc2VsZWN0IC52cy1zZWxlY3QtY29udGVudC5maWxsZWQgLnZzLXNlbGVjdF9faW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLXNlbGVjdC1jb250ZW50LmZpbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtc2VsZWN0LmFjdGl2ZU9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLXNlbGVjdF9faW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1zZWxlY3QgLnZzLXNlbGVjdC1jb250ZW50IC52cy1zZWxlY3RfX2xhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiN2FiOTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1zZWxlY3QgLnZzLXNlbGVjdF9faW5wdXQ6aG92ZXIgfiAudnMtc2VsZWN0X19sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAudnMtc2VsZWN0LmFjdGl2ZU9wdGlvbnMgLnZzLXNlbGVjdF9fbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLXNlbGVjdF9fb3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1zZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Quc2VsZWN0LW9wdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41M3JlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJlNTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjZTdkZmNkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cy12aXNpYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2U3ZGZjZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMS40cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuaGlkZGVuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAud2hpdGUtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dC1wYXJlbnQgLnZzLWlucHV0LWNvbnRlbnQgLnZzLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC45cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0LXBhcmVudCAudnMtaW5wdXQtY29udGVudCAudnMtaW5wdXRfX2xhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0LXBhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQtY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQ6Zm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfiAudnMtaW5wdXRfX2xhYmVsLS1wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQtcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dC1jb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dF9fbGFiZWwtLWhpZGRlbi52cy1pbnB1dF9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuNjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQtcGFyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIC5raXYtc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID4gOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudnMtc3dpdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RlZDVjMmRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1zd2l0Y2hfX2lucHV0OmNoZWNrZWQgfiAudnMtc3dpdGNoX19jaXJjbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gMTlweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1zd2l0Y2hfX2NpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1oZWxwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uLWhlbHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZTlkZjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDFjMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDhkMWMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VmZTlkZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIC50ZW1wbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAua2l2LWhlbHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uLWhlbHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q2Y2ZiZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkMWMwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkOGQxYzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDZjZmJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZC12aWRlb3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiA0cmVtO1xyXG5cclxuICAgICAgICAuaWNvbi1hZGQtdmlkZW9zIHtcclxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNXJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR0b3VybmVzb2wsIDAuMjUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNhbmd1aW5lO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLjFyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLjA1cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtYWRkLXZpZGVvcyB7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQuNXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDRyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tYWRkLXZpZGVvcyB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1saWJyYXJ5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ2aWRlby1saWJyYXJ5XCIgY2xhc3M9XCJraXYtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInZzLWRpYWxvZ19fY2xvc2UgYnRuLWNsb3NlLWxpYnJhcnktc21cIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsb3NlVmlkZW9MaWJyYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInZzLWljb24tY2xvc2UgdnMtaWNvbi1ob3Zlci14XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlkw6lvdGjDqHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhbG9hZGluZ1ZpZGVvc1wiIGNsYXNzPVwiY291bnQtdmlkZW9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoIHx8IHNlbGVjdGVkVGFncy5sZW5ndGggfHwgc2VsZWN0ZWRQb0JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFzIGZhLWZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPjwvdHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgZ2V0VG90YWxWaWRlb3NGaWx0ZXJlZCB9fSB2aWTDqW88c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFRvdGFsVmlkZW9zRmlsdGVyZWQgPiAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5zPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZWFyY2ggfHwgc2VsZWN0ZWRUYWdzLmxlbmd0aCB8fCBzZWxlY3RlZFBvQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRyw6llPHNwYW4gdi1pZj1cImdldFRvdGFsVmlkZW9zRmlsdGVyZWQgPiAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+czwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmltYXJ5LWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJwYWdlID0gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIkZpbHRyZXIgcGFyIG5vbSBkZSB2aWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtpdi1zZWxlY3QgdGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0VGFnc0Zyb21BbGxWaWRlb3MubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW90cy1DbMOpc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRUYWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJwYWdlID0gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJzZWxlY3RUYWcoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1vcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIih0YWcsIGkpIGluIGdldFRhZ3NGcm9tQWxsVmlkZW9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwidGFnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ0YWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRhZyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vdERhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWN1biBtb3QtY2zDqSBuZSBjb3JyZXNwb25kLjwvdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwibG9hZGluZyBzZWxlY3QtdGFnc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJraXYtc2VsZWN0IHRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLXNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCaWJsaW90aMOocXVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFZpZGVvTGlicmFyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJwYWdlID0gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJzZWxlY3RUYWcoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1vcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihsaWJyYXJ5LCBpKSBpbiB2aWRlb0xpYnJhcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cImxpYnJhcnkubm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJsaWJyYXJ5LnJlZmVyZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGlicmFyeS5ub20gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJub3REYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW5lIGJpYmxpb3Row6hxdWUgbmUgY29ycmVzcG9uZC48L3RlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RQYXJ0T2ZCb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwYXJ0T2ZCb2R5PVwic2VsZWN0ZWRQb0JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAcGFydE9mQm9keVNlbGVjdGVkPVwiZmlsdGVyQnlQYXJ0T2ZCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHBhcnRPZkJvZHlSZXNldD1cInJlc2V0U2VsZWN0ZWRQb0JcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1saWJyYXJ5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidmlkZW9zLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdWaWRlb3MgJiYgZ2V0VmlkZW9zLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIih2aWRlbywgaSkgaW4gZ2V0VmlkZW9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlcXVlc3RGRk1LUkFkaGVzaW9uKHZpZGVvKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdGVkLXZpZGVvJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWaWRlb3MuaW5jbHVkZXModmlkZW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNhYmxlZC12aWRlbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvLnZpZGVvTGlicmFyeS5yZWZlcmVuY2UgPT09ICdmZm1rcicgJiYgIWdldERvY3RvcklzRkZNS1JBZGhlcmVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmlkZW8tZmZta3InIDogdmlkZW8udmlkZW9MaWJyYXJ5LnJlZmVyZW5jZSA9PT0gJ2ZmbWtyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInZpZGVvLnZpZGVvTGlicmFyeS5yZWZlcmVuY2UgPT09ICdmZm1rcidcIiBjbGFzcz1cInZpZGVvLWZmbWtyLWJsYXNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsb2dvLWZmbWtyXCIgOnNyYz1cInZpZGVvLnZpZGVvTGlicmFyeS5yZWZlcmVuY2UgPT09ICdmZm1rcicgJiYgIWdldERvY3RvcklzRkZNS1JBZGhlcmVudCA/ICcvaW1nL2xvZ28ta2l2aWQtRkZNS1ItZ3JleS5zdmcnIDogJy9pbWcvbG9nby1raXZpZC1GRk1LUi13aGl0ZS5zdmcnXCIgYWx0PVwiTG9nbyBGRk1LUlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ2aWRlby1saW5rXCIgQGNsaWNrPVwidmlld1ZpZGVvKHZpZGVvKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwidmlkZW8udGh1bWJuYWlsVXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInZpZ25ldHRlIGRlIGxhIHZpZMOpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUxMnB0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIC03NyA1MTIuMDAyMTMgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTEycHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTUwMS40NTMxMjUgNTYuMDkzNzVjLTUuOTAyMzQ0LTIxLjkzMzU5NC0yMy4xOTUzMTMtMzkuMjIyNjU2LTQ1LjEyNS00NS4xMjg5MDYtNDAuMDY2NDA2LTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NHMtMTYwLjI2MTcxOSAwLTIwMC4zMjgxMjUgMTAuNTQ2ODc1Yy0yMS41MDc4MTMgNS45MDIzNDQtMzkuMjIyNjU3IDIzLjYxNzE4Ny00NS4xMjUgNDUuNTQ2ODc1LTEwLjU0Mjk2OSA0MC4wNjI1LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4czAgODMuNTAzOTA2IDEwLjU0Mjk2OSAxMjMuMTQ4NDM3YzUuOTA2MjUgMjEuOTI5Njg3IDIzLjE5NTMxMiAzOS4yMjI2NTYgNDUuMTI4OTA2IDQ1LjEyODkwNiA0MC40ODQzNzUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0czE2MC4yNjE3MTkgMCAyMDAuMzI4MTI1LTEwLjU0Njg3NWMyMS45MzM1OTQtNS45MDIzNDQgMzkuMjIyNjU2LTIzLjE5NTMxMiA0NS4xMjg5MDYtNDUuMTI1IDEwLjU0Mjk2OS00MC4wNjY0MDYgMTAuNTQyOTY5LTEyMy4xNDg0MzggMTAuNTQyOTY5LTEyMy4xNDg0MzhzLjQyMTg3NS04My41MDc4MTItMTAuNTQ2ODc1LTEyMy41NzAzMTJ6bTAgMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXN0MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0yMDQuOTY4NzUgMjU2IDEzMy4yNjk1MzEtNzYuNzU3ODEyLTEzMy4yNjk1MzEtNzYuNzU3ODEzem0wIDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2aWRlby5uYW1lLmxlbmd0aCA8IDQ1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2aWRlby5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ubmFtZS5zdWJzdHJpbmcoMCwgNDUpICsgXCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYWRkVmlkZW8odmlkZW8pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tYWRkLXZpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhc2VsZWN0ZWRWaWRlb3MuaW5jbHVkZXModmlkZW8pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwbHVzLWljb24gc2l6ZT1cIjJ4XCI+PC9wbHVzLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlVmlkZW8odmlkZW8pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tcmVtb3ZlLXZpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNoZWNrLWljb24gc2l6ZT1cIjJ4XCI+PC9jaGVjay1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3QtZm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ1ZpZGVvcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWdldFZpZGVvcy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzZWxlY3RlZFRhZ3MubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc2VsZWN0ZWRQb0JcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEteW91dHViZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPklsIG4neSBhIGF1Y3VuZSB2aWTDqW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90LWZvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmdWaWRlb3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFnZXRWaWRlb3MubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VhcmNoIHx8IHNlbGVjdGVkVGFncy5sZW5ndGggfHwgc2VsZWN0ZWRQb0IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFiIGZhLXlvdXR1YmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5BdWN1bmUgdmlkw6lvIG4nYSDDqXTDqSB0cm91dsOpZSBhdmVjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cIjxzdHJvbmc+e3sgc2VhcmNoIH19PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlwiPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWFyY2ggJiYgc2VsZWN0ZWRUYWdzLmxlbmd0aCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWFyY2ggJiYgc2VsZWN0ZWRQb0IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInNlbGVjdGVkVGFncy5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHRhZywgaSkgaW4gc2VsZWN0ZWRUYWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmYtdGFnIHRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dCB3c253XCI+e3sgdGFnIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RlZFBvQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmYtdGFnIHBhcnQtb2YtYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgd3Nud1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VsZWN0ZWRQb0IubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgdmlkZW9zLWxpc3RcIiB2LWlmPVwibG9hZGluZ1ZpZGVvc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvblwiIHYtaWY9XCJ2aWRlb3MubGVuZ3RoID4gbWF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLXBhZ2luYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExlbmd0aChnZXRTZWFyY2godmlkZW9zLCBzZWFyY2gpLCBtYXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtc2VsZWN0IHYtbW9kZWw9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJudW1iZXJQYWdlIGluIGdldExlbmd0aChnZXRTZWFyY2godmlkZW9zLCBzZWFyY2gpLCBtYXgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwibnVtYmVyUGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwibnVtYmVyUGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwibnVtYmVyUGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG51bWJlclBhZ2UgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZzLXBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tdmFsaWQtc2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZFZpZGVvc1NlbGVjdGlvbigpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nVmFsaWRWaWRlb3NTZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogYnRuTG9hZGluZ1ZhbGlkVmlkZW9zU2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5WYWxpZGVyIGxhIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dnMtZGlhbG9nIGNsYXNzPVwidmlldy12aWRlb1wiIHYtbW9kZWw9XCJtb2RhbFZpZXdWaWRlb1wiPlxyXG4gICAgICAgICAgICA8eW91dHViZVxyXG4gICAgICAgICAgICAgICAgOnBsYXllci12YXJzPVwicGxheWVyVmFyc1wiXHJcbiAgICAgICAgICAgICAgICA6dmlkZW8taWQ9XCJzZWxlY3RlZFZpZXdWaWRlby55b3V0dWJlSWRcIlxyXG4gICAgICAgICAgICA+PC95b3V0dWJlPlxyXG4gICAgICAgIDwvdnMtZGlhbG9nPlxyXG4gICAgICAgIDx2cy1kaWFsb2cgY2xhc3M9XCJtb2RhbC1mZm1rci1hZGhlc2lvblwiIHYtbW9kZWw9XCJtb2RhbFJlcXVlc3RGRk1LUkFkaGVzaW9uXCI+XHJcbiAgICAgICAgICAgIDxoMj5WaWTDqW8gRkZNS1I8L2gyPlxyXG4gICAgICAgICAgICA8cD5Qb3VyIHV0aWxpc2VyIGxlcyB2aWTDqW9zIGRlIGxhIEZGTUtSIHZvdXMgZGV2ZXogeSBhZGjDqXJlcjwvcD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgZGlzYWJsZWQ6IGJ0bkxvYWRpbmdGRk1LUkFkaGVzaW9uIH1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nRkZNS1JBZGhlc2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidmFsaWRGRk1LUkFkaGVzaW9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BZGjDqXJlciDDoCBsYSA8aW1nIGNsYXNzPVwibG9nby1mZm1rclwiIHNyYz1cIi9pbWcvbG9nby1raXZpZC1GRk1LUi13aGl0ZS5zdmdcIiBhbHQ9XCJMb2dvIEZGTUtSXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdnMtZGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgZiBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IHsgUGx1c0ljb24sIENoZWNrSWNvbiwgWEljb24gfSBmcm9tIFwidnVlLWZlYXRoZXItaWNvbnNcIjtcclxuaW1wb3J0IFNlbGVjdFBhcnRPZkJvZHkgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0UGFydE9mQm9keS52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZG9jdG9yOiBPYmplY3QsXHJcbiAgICAgICAgbG9hZGluZ1ZpZGVvczogQm9vbGVhbixcclxuICAgICAgICB2aWRlb3M6IEFycmF5LFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBQbHVzSWNvbixcclxuICAgICAgICBDaGVja0ljb24sXHJcbiAgICAgICAgWEljb24sXHJcbiAgICAgICAgU2VsZWN0UGFydE9mQm9keSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlYXJjaDogXCJcIixcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgbWF4OiAxMixcclxuICAgICAgICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgICAgICAgICAgcmVsOiAwLFxyXG4gICAgICAgICAgICAgICAgc2hvd2luZm86IDAsXHJcbiAgICAgICAgICAgICAgICBlY3ZlcjogMixcclxuICAgICAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aW1lb3V0OiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRUYWdzOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRQb0I6IG51bGwsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVmlkZW9zOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRWaWRlb0xpYnJhcmllczogW10sXHJcbiAgICAgICAgICAgIG1vZGFsQWRkVmlkZW86IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2RhbFZpZXdWaWRlbzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVmlld1ZpZGVvOiBmYWxzZSxcclxuICAgICAgICAgICAgYnRuTG9hZGluZ1ZhbGlkVmlkZW9zU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5wdXRDaGlwczogbnVsbCxcclxuICAgICAgICAgICAgbW9kYWxSZXF1ZXN0RkZNS1JBZGhlc2lvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdGRk1LUkFkaGVzaW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlkZW9MaWJyYXJpZXM6IFt7bm9tOidLaXZpZCcsIHJlZmVyZW5jZTona2l2aWQnfSwge25vbTonRkZNS1InLCByZWZlcmVuY2U6J2ZmbWtyJ31dLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRWaWRlb3MoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNlYXJjaCh0aGlzLnZpZGVvcywgdGhpcy5zZWFyY2gpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldExlbmd0aEZvclBhZ2luYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExlbmd0aChcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2VhcmNoKHRoaXMudmlkZW9zLCB0aGlzLnNlYXJjaCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VG90YWxWaWRlb3NGaWx0ZXJlZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2VhcmNoKHRoaXMudmlkZW9zLCB0aGlzLnNlYXJjaCkubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGFnc0Zyb21BbGxWaWRlb3MoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFRhZ3NGcm9tQWxsVmlkZW9zKHRoaXMudmlkZW9zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldERvY3RvcklzRkZNS1JBZGhlcmVudCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9jdG9yLkZGTUtSQWRoZXNpb24gJiYgdGhpcy5kb2N0b3IuRkZNS1JBZGhlc2lvbi5udW1jbGk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2VsZWN0VGFnKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5wdXRDaGlwcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dENoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICBcIi52cy1zZWxlY3RfX2NoaXBzX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlucHV0Q2hpcHMuZm9jdXMoKTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dENoaXBzLmJsdXIoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkRkZNS1JBZGhlc2lvbigpIHtcclxuICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ0ZGTUtSQWRoZXNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgd2luZG93Lm9wZW4oJy8vd3d3LmZmbWtyLm9yZy9hZGhlc2lvbi92b3MtaW5mb3JtYXRpb25zP2tpdmlkdG9rZW49ZXlKMWMyVnlWSGx3WlNJNkluQmgnLCAnX2JsYW5rJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ0ZGTUtSQWRoZXNpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWx0ZXJCeVBhcnRPZkJvZHkocGFydE9mQm9keSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUG9CID0gcGFydE9mQm9keTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0U2VsZWN0ZWRQb0IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQb0IgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmlld1ZpZGVvKHZpZGVvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3VmlkZW8gPSB2aWRlbztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5tb2RhbFZpZXdWaWRlbyA9ICF0aGlzLm1vZGFsVmlld1ZpZGVvKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZFZpZGVvKHZpZGVvKSB7XHJcbiAgICAgICAgICAgIGlmKHZpZGVvLnZpZGVvTGlicmFyeS5yZWZlcmVuY2UgIT0gJ2ZmbWtyJyB8fCB0aGlzLmdldERvY3RvcklzRkZNS1JBZGhlcmVudClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWaWRlb3MucHVzaCh2aWRlbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVWaWRlbyh2aWRlbykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlkZW9zLnNwbGljZSh0aGlzLnNlbGVjdGVkVmlkZW9zLmluZGV4T2YodmlkZW8pLCAxKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcXVlc3RGRk1LUkFkaGVzaW9uKHZpZGVvKSB7XHJcbiAgICAgICAgICAgIGlmKHZpZGVvLnZpZGVvTGlicmFyeS5yZWZlcmVuY2UgPT09ICdmZm1rcicgJiYgIXRoaXMuZ2V0RG9jdG9ySXNGRk1LUkFkaGVyZW50KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlcXVlc3RGRk1LUkFkaGVzaW9uID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkVmlkZW9zU2VsZWN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZFZpZGVvc1NlbGVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJ2aWRlb3Mtc2VsZWN0aW9uXCIsIHRoaXMuc2VsZWN0ZWRWaWRlb3MpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZVZpZGVvTGlicmFyeSgpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZFZpZGVvc1NlbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlVmlkZW9MaWJyYXJ5KCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYWdzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlkZW9zID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUG9CID0gbnVsbDtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbG9zZVZpZGVvTGlicmFyeVwiLCB0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFBhZ2UoZGF0YSwgcGFnZSwgbWF4SXRlbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGYuZ2V0UGFnZShkYXRhLCBwYWdlLCBtYXhJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRMZW5ndGgoZGF0YSwgbWF4SXRlbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGYuZ2V0TGVuZ3RoKGRhdGEsIG1heEl0ZW1zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFNlYXJjaChkYXRhLCBmaWx0ZXIpIHtcclxuICAgICAgICAgICAgbGV0IHZpZGVvc0xpc3RGaWx0ZXJlZCA9IGYuZ2V0U2VhcmNoKGRhdGEsIGZpbHRlcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRhZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2aWRlb3NMaXN0RmlsdGVyZWQgPSB2aWRlb3NMaXN0RmlsdGVyZWQuZmlsdGVyKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodi50YWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi50YWdzLmZvckVhY2goKHZ0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodnRhZy5uYW1lID09PSB0YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhcmVzdWx0cy5pbmNsdWRlcyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRWaWRlb0xpYnJhcmllcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvc0xpc3RGaWx0ZXJlZCA9IHZpZGVvc0xpc3RGaWx0ZXJlZC5maWx0ZXIoKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZpZGVvTGlicmFyaWVzLmluY2x1ZGVzKHYudmlkZW9MaWJyYXJ5LnJlZmVyZW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQb0IpIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvc0xpc3RGaWx0ZXJlZCA9IHZpZGVvc0xpc3RGaWx0ZXJlZC5maWx0ZXIoKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2LnBhcnRPZkJvZHlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYucGFydE9mQm9keXMuZm9yRWFjaCgocGFydE9mQm9keSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRPZkJvZHkuaWQgPT09IHRoaXMuc2VsZWN0ZWRQb0IuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZpZGVvc0xpc3RGaWx0ZXJlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2l6ZVdpbmRvd0V2ZW50SGFuZGxlcihlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA0NDkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heCA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNDQ5ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDY0OSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gODtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDY0OSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA4NDkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heCA9IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA4NDkgJiYgd2luZG93LmlubmVyV2lkdGggPD0gMTYxOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gODtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDE2MTggJiYgd2luZG93LmlubmVyV2lkdGggPD0gMTY1OSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxNjU5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXggPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZVdpbmRvd0V2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIHRoaXMucmVzaXplV2luZG93RXZlbnRIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgZGVzdHJveWVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplV2luZG93RXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG4udnMtZGlhbG9nLWNvbnRlbnQudmlldy12aWRlbyB7XHJcbiAgICAudnMtZGlhbG9nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG8gMnJlbTtcclxuICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xyXG5cclxuICAgICAgICAudnMtZGlhbG9nX19jb250ZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NHZ3O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzODJweDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NzJweCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udmlkZW8tbGlicmFyeSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMTExMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICBoMiBzcGFuLmNvdW50LXZpZGVvcyB7XHJcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuN3JlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjhiNjg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTAuMnJlbTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1jbG9zZS1saWJyYXJ5LXNtIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC41cmVtKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCA0NiwgODQsIDAuOCk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJpbWFyeS1hY3Rpb25zIHtcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAua2l2LXNlbGVjdC50YWdzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgIC5sb2FkaW5nLnNlbGVjdC10YWdzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0LjNyZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LWZpbHRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLmxvYWRpbmctcG9iIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGFydG9mYm9keS1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMS4zM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuMTVyZW0gMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZmFmNmVmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGFydC1vZi1ib2R5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS1saWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS4xNXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzLjRyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZmFmNmVmO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I3YmRjMjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dC5iLXItYi16ZXJvIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbSAwLjRyZW0gMCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYXJyb3ctdG9nZ2xlLWJveCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGkudnMtaWNvbi1hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VsZWN0LWJveCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5raXYtc2VsZWN0LnRhZ3Mge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlbGVjdC1maWx0ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogN3ZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OiA4NDBweCkge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmUzODU4YTE7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdmlkZW8tbGlicmFyeSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTlyZW07XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTYxOXB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE2NjBweCkge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzlyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50YWdzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAudGFnLWNoaXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC4ycmVtIDAuM3JlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC52aWRlby1saWJyYXJ5LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgIC52aWRlb3MtbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAuOHJlbSAjMWIzYTY5NTIgaW5zZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAzLjlyZW0gIzFiM2E2OTJiIGluc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiOWM3ZGE4NTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwLjRlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkgYW5kIChtaW4taGVpZ2h0OiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmNjNWQ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5YmE0YjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmxvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHBsYWNlSG9sZGVyU2hpbW1lcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byByaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNmYWZhZmEgOCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZjFmMWYxIDM4JSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNmYWZhZmEgNTQlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDY0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS42dncgMi41dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnZpZGVvLWZmbWtyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjJlNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAuN3JlbSAjOTc4YzcyOGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlby1mZm1rci1ibGFzb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZGZjZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNi4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDAuNHJlbSByZ2JhKDEwMiwgMTEzLCAxNDMsIDAuNCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuMXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMS4yJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC43dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC42dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTYxOXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTglO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjZ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE2NjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5zZWxlY3RlZC12aWRlbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAuN3JlbSAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMTVzIGVhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi52aWRlby1mZm1rciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMC43cmVtICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvLWZmbWtyLWJsYXNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW8tdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlby1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmRpc2FibGVkLXZpZGVvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnZpZGVvLWZmbWtyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlY2U1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjdyZW0gIzk3OGM3MjQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlby1mZm1rci1ibGFzb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTRkODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuMTVyZW0gMC40cmVtIHJnYigxNTAgMTU0IDE2NSAvIDMxJSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW8tdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW8tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW8tdGh1bWJuYWlsOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYgMjQyIDIzMCAvIDM2JSk7O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlby1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW8tbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGRkYWQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnRuLWFkZC12aWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7IC8vIGJvcmRlcjogMnB4IHNvbGlkICNmZmIzNGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMCAwLjE1cmVtIDAuNHJlbSByZ2IoMTAyIDExMyAxNDMgLyAxMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VkZTdkOTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZzLWJ1dHRvbl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjsgLy8gYm9yZGVyOiAycHggc29saWQgI2ZmYjM0YjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VkZTdkOTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlN2RmY2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTdkZmNkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZzLXRhYmxlX190ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4zZW0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM3dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM3dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOXJlbSAwLjlyZW0gMCAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxOXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTl2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDY1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzLjZ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEzLjZ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEzLjZ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkuOXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDExLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzElO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN0ZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjODA4MDgwNzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3Rlc3QyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmZmZmZmZjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3Rlc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmY1OTE3NmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjdGVzdDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjZmZmZmZmZjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW8tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40ZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMC45cmVtIDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW8tbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1hZGQtdmlkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNlN2RmY2Q7IC8vIGJvcmRlcjogMnB4IHNvbGlkICNmZmIzNGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC4xNXJlbSAwLjRyZW0gcmdiKDEwMiAxMTMgMTQzIC8gMTAlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjsgLy8gYm9yZGVyOiAycHggc29saWQgI2ZmYjM0YjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VkZTdkOTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1idXR0b25fX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBpbml0aWFsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U3ZGZjZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1yZW1vdmUtdmlkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC4zcmVtIDAuNXJlbSByZ2IoMTAyIDExMyAxNDMgLyAzMSUpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtYnV0dG9uX19jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi12YWxpZC1zZWxlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTlyZW07XHJcblxyXG4gICAgICAgIC5uZi10YWcge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMnJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHJlbSAwLjhyZW0gcmdiYSgxMzcsIDEzNywgMTM3LCAwLjIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC42cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjQ1cmVtO1xyXG4gICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcblxyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYudGFnIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnBhcnQtb2YtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwtZmZta3ItYWRoZXNpb24ge1xyXG4gICAgXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxLjdyZW0gMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvLWZmbWtyIHtcclxuICAgICAgICB3aWR0aDogNS44cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDAuMnJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1wbGF5ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWNsb3NlLXBsYXllclwiIEBjbGljaz1cImNsb3NlVmlkZW9QbGF5ZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYteCBpY29uLTIxXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tZnJhbWVcIiBrZXk9XCJ2aWRlb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx5b3V0dWJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwbGF5ZXItdmFycz1cInBsYXllclZhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmlkZW8taWQ9XCJnZXRFeGVyY2lzZS52aWRlby55b3V0dWJlSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZW5kZWQ9XCJ2aWRlb0VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwveW91dHViZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1iYXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGVyY2lzZS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGVyY2lzZS1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhlcmNpY2Uge3sgZ2V0RXhlcmNpc2UucG9zaXRpb24gKyAxIH19L3t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RXhlcmNpc2VzID8gZ2V0RXhlcmNpc2VzLmxlbmd0aCA6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpcmV0XCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldEV4ZXJjaXNlLnZpZGVvLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlLXNlcmllcy1yZXBzLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmllcy1yZXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtc2VyaWVzIGljb24tMThcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+e3sgZ2V0RXhlcmNpc2UubnVtYmVyT2ZTZXJpZXMgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc8Opcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LXJlcHMgaWNvbi0xOVwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3Bhbj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRFeGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcsOpcMOpdGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImdldEV4ZXJjaXNlLm9wdGlvblwiIGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3B0aW9ucyA6IDxzcGFuPnt7IGdldEV4ZXJjaXNlLm9wdGlvbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZ2V0RXhlcmNpc2UuaG9sZFwiIGNsYXNzPVwiaG9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbmlyIDogPHNwYW4+e3sgZ2V0RXhlcmNpc2UuaG9sZCB9fXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImdldEV4ZXJjaXNlLnRlbXBvXCIgY2xhc3M9XCJ0ZW1wb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbXBvIDogPHNwYW4+e3sgZ2V0RXhlcmNpc2UudGVtcG8gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLXRvb2x0aXAgY2xhc3M9XCJraXYtaGVscFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi1oZWxwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1xdWVzdGlvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlIHRlbXBvLCBjJ2VzdCB0b3V0IHNpbXBsZW1lbnQgbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ5dGhtZSBkZSBsYSByw6lww6l0aXRpb24sIGluZGlxdWFudCBxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlIG1vdXZlbWVudCBkb2l0IMOqdHJlIGxlbnQsIGV4cGxvc2lmIG91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250csO0bMOpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLW5leHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvbiBAY2xpY2s9XCJuZXh0RXhlcmNpc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJnZXRFeGVyY2lzZSA9PT0gZ2V0VGhlTGFzdEV4ZXJjaXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+RmVybWVyPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+U3VpdmFudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGRvY3RvcjogT2JqZWN0LFxyXG4gICAgICAgIGV4ZXJjaXNlOiBPYmplY3QsXHJcbiAgICAgICAgZXhlcmNpc2VzOiBBcnJheSxcclxuICAgICAgICB3b3Jrc2hlZXQ6IE9iamVjdCxcclxuICAgICAgICBsYXN0RXhlcmNpc2U6IE9iamVjdCxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICAgICAgICAgIHJlbDogMCxcclxuICAgICAgICAgICAgICAgIHNob3dpbmZvOiAwLFxyXG4gICAgICAgICAgICAgICAgZWN2ZXI6IDIsXHJcbiAgICAgICAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0RXhlcmNpc2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4ZXJjaXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0RXhlcmNpc2VzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leGVyY2lzZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRXb3Jrc2hlZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndvcmtzaGVldDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFRoZUxhc3RFeGVyY2lzZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdEV4ZXJjaXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHZpZGVvRW5kZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJlZnMueW91dHViZS5wbGF5ZXIucGxheVZpZGVvKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJHJlZnMueW91dHViZS5wbGF5ZXIuc3RvcFZpZGVvKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXh0RXhlcmNpc2UoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldEV4ZXJjaXNlID09PSB0aGlzLmdldFRoZUxhc3RFeGVyY2lzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZGVvUGxheWVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZXhlcmNpc2VGb3JQbGF5aW5nID0gdGhpcy5leGVyY2lzZXMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAoZSkgPT4gZS5wb3NpdGlvbiA9PT0gdGhpcy5leGVyY2lzZS5wb3NpdGlvbiArIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlVmlkZW9QbGF5ZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbG9zZVZpZGVvUGxheWVyXCIsIHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4udmlkZW8tcGxheWVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDExMTExO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNXJlbSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzNCwgNDYsIDg0LCAwLjgpO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1jbG9zZS1wbGF5ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICB0b3A6IDFyZW07XHJcbiAgICAgICAgcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjU7XHJcblxyXG4gICAgICAgICYuZGFyayB7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIHRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICByaWdodDogMnJlbTtcclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTIlIDExJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCUgMTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4LjUlIDEwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNi41JSAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52aWRlby1mcmFtZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAuNXZ3O1xyXG4gICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiA5OC40cmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogNTUuNHJlbTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTFyZW0pO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjguNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAuOXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMy45cmVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIGFuZCAobWluLWhlaWdodDogMzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0LjJ2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00LjJyZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNC43cmVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOS40dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNXZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiAyNzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjcuNnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDl2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogMzg1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzLjV2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQ2NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNi40dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2NXZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzEuNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTZ2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogNjMwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2LjR2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY1dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0My44dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5OC40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtaW4taGVpZ2h0OiAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzLjd2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI0LjJ2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWluLWhlaWdodDogMzgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5LjJ2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM0LjJ2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWluLWhlaWdodDogNDcwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LjF2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMC4xdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1My4zdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDU4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNS4ydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2M3Z3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtaW4taGVpZ2h0OiA2NjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAuMXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzF2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWluLWhlaWdodDogNzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1LjF2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk5cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMi4ydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMS45dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiAzODVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYuM3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjl2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQ2NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMS4ydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNy45dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA1ODBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjYuNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDcuMXZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNjYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMxLjF2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1LjR2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTYuN3Z3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20tYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRncmF5LWxpZ2h0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5ib3R0b20tYmFyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjhyZW07XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5leGVyY2lzZS1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZS1jb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpcmV0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2UtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idG4tbmV4dCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZXhlcmNpc2Utc2VyaWVzLXJlcHMtb3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuM3JlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuODVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VyaWVzLXJlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjE4cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjU1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2Vjb25kLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC44cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZW1wbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1oZWxwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaWNvbi1oZWxwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmNmYmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDFjMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDhkMWMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Q2Y2ZiZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VsZWN0UGFydE9mQm9keS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODc0ZmQ5MGMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VsZWN0UGFydE9mQm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODc0ZmQ5MGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4NzRmZDkwY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzg3NGZkOTBjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzg3NGZkOTBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzg3NGZkOTBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NzRmZDkwYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4NzRmZDkwYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9jb21wb25lbnRzL1NlbGVjdFBhcnRPZkJvZHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTcwM2UyNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFnUGFydE9mQm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc1NzAzZTI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc1NzAzZTI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc1NzAzZTI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTcwM2UyNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NTcwM2UyNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9jb21wb25lbnRzL1RhZ1BhcnRPZkJvZHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTQxMmY0NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vV29ya1NoZWV0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vV29ya1NoZWV0UGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhNDEyZjQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhNDEyZjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhNDEyZjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTQxMmY0NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YTQxMmY0NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya1NoZWV0UGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04M2EzNGFkYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzgzYTM0YWRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzgzYTM0YWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzgzYTM0YWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODNhMzRhZGEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODNhMzRhZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZpZGVvTGlicmFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzY2MDBlZTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9WaWRlb0xpYnJhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjNjYwMGVlOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjNjYwMGVlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjNjYwMGVlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNjYwMGVlOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjNjYwMGVlOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvTGlicmFyeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jODQ2NzljMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WaWRlb1BsYXllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9WaWRlb1BsYXllci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jODQ2NzljMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImM4NDY3OWMwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzg0Njc5YzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzg0Njc5YzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzg0Njc5YzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jODQ2NzljMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjODQ2NzljMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhZ1BhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFnUGFydE9mQm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vV29ya1NoZWV0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZGVvTGlicmFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1jbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5oaWRlU2VsZWN0Qm94LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiaGlkZVNlbGVjdEJveFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QtZmlsdGVyXCJcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6ICFfdm0ubG9hZGluZ1BhcnRzT2ZCb2R5LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFsb2FkaW5nUGFydHNPZkJvZHlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZ2V0UGFydE9mQm9keVNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFydG9mYm9keS1zZWxlY3RlZCBwYXJ0LW9mLWJvZHlcIixcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5yZXNldFNlbGVjdCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09IFwicGllZFwiXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tcGllZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvcGllZC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIFBpZWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJqYW1iZVwiXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tamFtYmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2phbWJlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgSmFtYmVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJicmFzXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1icmFzXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9icmFzLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgQnJhc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSBcIm1haW5cIlxuICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLW1haW5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L21haW4uc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBNYWluXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09IFwiZXBhdWxlXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1lcGF1bGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2VwYXVsZS5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIMOJcGF1bGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJkb3NcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWRvc1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvZG9zLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgRG9zXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09IFwiY2VydmljYWxlc1wiXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tY2VydmljYWxlc1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvY2VydmljYWxlcy5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIENlcnZpY2FsZXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJsb21iYWlyZXNcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWxvbWJhaXJlc1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbG9tYmFpcmVzLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgTG9tYmFpcmVzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09IFwidGhvcmFjaXF1ZVwiXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tdGhvcmFjaXF1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvdGhvcmFjaXF1ZS5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIFRob3JhY2lxdWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQgd3Nud1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQubmFtZSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhZ2V0UGFydE9mQm9keVNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlcixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbHRlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjbGFzczogeyBcImItci1iLXplcm9cIjogX3ZtLnNlbGVjdEJveCB9LFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwicGFydG9mYm9keS1jaG9pY2Utc2VsZWN0XCIsXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICFfdm0uc2VsZWN0Qm94ID8gXCJQYXJ0aWUgZHUgY29ycHNcIiA6IFwiUmVjaGVyY2hlelwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWx0ZXIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0Qm94ID0gdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBrZXl1cDogX3ZtLnNlbGVjdEJveFdpdGhUaHJvdHRsZSxcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5maWx0ZXIgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXJyb3ctdG9nZ2xlLWJveFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5zZWxlY3RCb3ggfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVTZWxlY3RCb3ggfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJ2cy1pY29uLWFycm93XCIgfSldXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiaGVpZ2h0XCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0Qm94LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdEJveFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QtYm94XCIsXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5mb2N1c0lucHV0U2VsZWN0IH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5wYXJ0c09mQm9keUZpbHRlcmVkLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYXJ0c09mQm9keUZpbHRlcmVkLCBmdW5jdGlvbihwYXJ0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGtleTogaSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFydC1vZi1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RQYXJ0T2ZCb2R5KHBhcnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJwaWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLXBpZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvcGllZC5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBQaWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJqYW1iZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1qYW1iZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9qYW1iZS5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBKYW1iZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0Lmljb24gPT09IFwiYnJhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1icmFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2JyYXMuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgQnJhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0Lmljb24gPT09IFwibWFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1tYWluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L21haW4uc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgTWFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0Lmljb24gPT09IFwiZXBhdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWVwYXVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9lcGF1bGUuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgw4lwYXVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0Lmljb24gPT09IFwiZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWRvc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9kb3Muc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgRG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJjZXJ2aWNhbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWNlcnZpY2FsZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvY2VydmljYWxlcy5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBDZXJ2aWNhbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJsb21iYWlyZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tbG9tYmFpcmVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2xvbWJhaXJlcy5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBMb21iYWlyZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pY29uID09PSBcInRob3JhY2lxdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tdGhvcmFjaXF1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS90aG9yYWNpcXVlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIFRob3JhY2lxdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dCB3c253XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHBhcnQubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZC1wb2JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW5lIHBhcnRpZSBkdSBjb3JwcyBuZSBjb3JyZXNwb25kLlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmxvYWRpbmdQYXJ0c09mQm9keSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9hZGluZ1BhcnRzT2ZCb2R5XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBsb2FkaW5nLXBvYlwiXG4gICAgICB9KVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2cy1idXR0b25cIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInRhZyBwYXJ0LW9mLWJvZHlcIiwgYXR0cnM6IHsgc2l6ZTogXCJtaW5pXCIgfSB9LFxuICAgIFtcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwicGllZFwiXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1waWVkXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3BpZWQuc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgUGllZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFydE9mQm9keS5pY29uID09PSBcImphbWJlXCJcbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWphbWJlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2phbWJlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgYWx0OiBcIkljb25lIEphbWJlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwiYnJhc1wiXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1icmFzXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2JyYXMuc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgQnJhc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFydE9mQm9keS5pY29uID09PSBcIm1haW5cIlxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tbWFpblwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9tYWluLnN2Z1wiKSxcbiAgICAgICAgICAgICAgYWx0OiBcIkljb25lIE1haW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBhcnRPZkJvZHkuaWNvbiA9PT0gXCJlcGF1bGVcIlxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tZXBhdWxlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2VwYXVsZS5zdmdcIiksXG4gICAgICAgICAgICAgIGFsdDogXCJJY29uZSDDiXBhdWxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwiZG9zXCJcbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWRvc1wiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9kb3Muc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgRG9zXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwiY2VydmljYWxlc1wiXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1jZXJ2aWNhbGVzXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2NlcnZpY2FsZXMuc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgQ2VydmljYWxlc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFydE9mQm9keS5pY29uID09PSBcImxvbWJhaXJlc1wiXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1sb21iYWlyZXNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbG9tYmFpcmVzLnN2Z1wiKSxcbiAgICAgICAgICAgICAgYWx0OiBcIkljb25lIExvbWJhaXJlc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFydE9mQm9keS5pY29uID09PSBcInRob3JhY2lxdWVcIlxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tdGhvcmFjaXF1ZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS90aG9yYWNpcXVlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgYWx0OiBcIkljb25lIFRob3JhY2lxdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dCB3c253XCIgfSwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYXJ0T2ZCb2R5Lm5hbWUpKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNvbXBsZXRlZCBpY29uLTIyXCIgfSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIsIGF0dHJzOiB7IGlkOiBcIndvcmtzaGVldFwiIH0gfSwgW1xuICAgIF9jKFwiaGVhZGVyXCIsIFtcbiAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHBhcnQtb2YtYm9keVwiIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfdm0ucGF0aWVudFxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJlc2NyaS1mb3ItcGF0aWVudC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWFycm93LWxlZnQgaWNvbi0zMVwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkZXJpY3RUb0Rhc2hib2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcmVzY3JpLWZvci1wYXRpZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXNlci1hdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCIyNlwiLCBjaXJjbGU6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5wYXRpZW50LmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5wYXRpZW50LmF2YXRhclVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2ltZy9hdmF0YXItZGVmYXVsdC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdmF0YXIgZGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGF0aWVudC5maXJzdG5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50Lmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVzZXItbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0VXNlck5hbWUoX3ZtLnBhdGllbnQpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgXCJ2b2lyXCIgPT09IF92bS5hY3Rpb25cbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlLXZpZXdcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBoaWRkZW46IF92bS5wYXRpZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRlcmljdFRvRGFzaGJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2V0V29ya3NoZWV0LnRpdGxlKSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFdvcmtzaGVldC5wYXJ0T2ZCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIlRhZ1BhcnRPZkJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwYXJ0T2ZCb2R5OiBfdm0uZ2V0V29ya3NoZWV0LnBhcnRPZkJvZHkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgaGlkZGVuOiBfdm0ucGF0aWVudCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVkZXJpY3RUb0Rhc2hib2FyZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJUaXRyZSBkZSBsYSBmaWNoZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50aXRsZUlzRW1wdHlNZXNzYWdlID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRpdGxlSXNFbXB0eU1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1lc3NhZ2UtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRpdGxlSXNFbXB0eU1lc3NhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLndvcmtzaGVldC50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLndvcmtzaGVldCwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ3b3Jrc2hlZXQudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBcInZvaXJcIiAhPT0gX3ZtLmFjdGlvblxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LXBhcmFtc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LWRldGFpbHNcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZWRpdGlvblwiID09PSBfdm0uYWN0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGVja0lmV29ya3NoZWV0U2Vzc2lvbnNFeGlzdFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIFwiZWRpdGlvblwiID09PSBfdm0uYWN0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrSWZXb3Jrc2hlZXRTZXNzaW9uc0V4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXZlcnQtc2Vzc2lvbnMtc3RhcnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWluZm8gaWNvbi0xN1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVm91cyBuZSBwb3V2ZXogcGx1cyBtb2RpZmllciBsYSBkdXLDqWUgZGUgbGFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2NyaXB0aW9uIGNhciBsZSBwYXRpZW50IGEgZMOpasOgIGTDqW1hcnLDqSBzZXNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbnMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LXRpbWluZy1wZXJ3ZWVrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNhbGVuZGFyIGljb24tMTBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInBlcldlZWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJYIHBhciBzZW0uIChtYXg6IDcpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogXCI3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja0lmRHVyYXRpb25WYWx1ZUlzRW1wdHlPck51bGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLndvcmtzaGVldC5wZXJXZWVrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS53b3Jrc2hlZXQucGVyV2VlayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLndvcmtzaGVldCwgXCJwZXJXZWVrXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIndvcmtzaGVldC5wZXJXZWVrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC10aW1pbmctcGVyZGF5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNhbGVuZGFyIGljb24tMTBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInBlckRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIlggcGFyIGpvdXIgKG1heDogMylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBcIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrSWZEdXJhdGlvblZhbHVlSXNFbXB0eU9yTnVsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ud29ya3NoZWV0LnBlckRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ud29ya3NoZWV0LnBlckRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLndvcmtzaGVldCwgXCJwZXJEYXlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwid29ya3NoZWV0LnBlckRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtcGVyaW9kXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWNsb2NrIGljb24tMTFcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImR1cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiRHVyw6llIGVuIHNlbS4gKG1heDogNTIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogXCI1MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1cjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2tJZkR1cmF0aW9uVmFsdWVJc0VtcHR5T3JOdWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS53b3Jrc2hlZXQuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLndvcmtzaGVldC5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLndvcmtzaGVldCwgXCJkdXJhdGlvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ3b3Jrc2hlZXQuZHVyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNlbGVjdC1maWx0ZXItYmxvY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTZWxlY3RQYXJ0T2ZCb2R5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBhcnRPZkJvZHk6IF92bS53b3Jrc2hlZXQucGFydE9mQm9keSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydE9mQm9keVNlbGVjdGVkOiBfdm0uc2V0UGFydE9mQm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydE9mQm9keVJlc2V0OiBfdm0ucmVzZXRQb0JcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXJ0T2ZCb2R5SXNFbXB0eU1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBhcnRPZkJvZHlJc0VtcHR5TWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwibWFpblwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogeyBcIm5vLW10XCI6IFwidm9pclwiID09PSBfdm0uYWN0aW9uIH0sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZXhlcmNpc2VzLXBsYXlsaXN0XCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJFeGVyY2lzZXNQbGF5bGlzdFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBkb2N0b3I6IF92bS5kb2N0b3IsXG4gICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICBhY3Rpb246IF92bS5hY3Rpb24sXG4gICAgICAgICAgICAgIHdvcmtzaGVldDogX3ZtLmdldFdvcmtzaGVldCxcbiAgICAgICAgICAgICAgZXhlcmNpc2VzOiBfdm0uZ2V0RXhlcmNpc2VzLFxuICAgICAgICAgICAgICBsb2FkaW5nVmlkZW9zOiBfdm0ubG9hZGluZ1ZpZGVvcyxcbiAgICAgICAgICAgICAgdmlkZW9zOiBfdm0udmlkZW9zLFxuICAgICAgICAgICAgICBjc3JmVG9rZW5SZW1vdmVFeGVyY2lzZTogX3ZtLmNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tdmFsaWRcIixcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgIF92bS5idG5Mb2FkaW5nVmFsaWRFZGl0V29ya3NoZWV0IHx8XG4gICAgICAgICAgICBfdm0uYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0IHx8XG4gICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBcImVkaXRpb25cIiA9PT0gX3ZtLmFjdGlvblxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZ1ZhbGlkRWRpdFdvcmtzaGVldCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRFZGl0IH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jaGVjay1jaXJjbGVcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBWYWxpZGVyIGxlcyBtb2RpZmljYXRpb25zXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIFwiY3JlYXRpb25cIiA9PT0gX3ZtLmFjdGlvbiAmJiAhX3ZtLnBhdGllbnRcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbG9hZGluZzogX3ZtLmJ0bkxvYWRpbmdWYWxpZENyZWF0ZVdvcmtzaGVldCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRDcmVhdGUgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIENyw6llciBsYSBmaWNoZVxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBcImNyZWF0aW9uXCIgPT09IF92bS5hY3Rpb24gJiYgX3ZtLnBhdGllbnRcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbG9hZGluZzogX3ZtLmJ0bkxvYWRpbmdWYWxpZENyZWF0ZVdvcmtzaGVldCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRDcmVhdGUgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIENyw6llciBsYSBwcmVzY3JpcHRpb25cXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LWFycm93LWxlZnQgaWNvbi0zMVwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGgxXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgX3ZtLl92KFwicHJlc2NyaXB0aW9uIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwicG91clwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJleGVyY2lzZXMtbGlzdFwiIH0sIFtcbiAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgyKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdldEV4ZXJjaXNlcywgZnVuY3Rpb24oZXhlcmNpc2UsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGksIHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHVtYm5haWwtd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgXCJ2b2lyXCIgIT09IF92bS5hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bnMtYXJyb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UucG9zaXRpb24gIT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBQb3NpdGlvbihleGVyY2lzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zb3J0LXVwXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5wb3NpdGlvbiAhPSBfdm0uZ2V0RXhlcmNpc2VzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjaXJjbGU6IFwiXCIsIGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRvd25Qb3NpdGlvbihleGVyY2lzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zb3J0LWRvd25cIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi1wbGF5bGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9wZW5WaWRlb1BsYXllcihleGVyY2lzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIiBWb2lyXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aHVtYm5haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVybCgnXCIgKyBleGVyY2lzZS52aWRlby50aHVtYm5haWxVcmwgKyBcIicpXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtaDJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoZXhlcmNpc2UudmlkZW8ubmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwidm9pclwiICE9PSBfdm0uYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVtb3ZlLWV4ZXJjaXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVFeGVyY2lzZShleGVyY2lzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS10cmFzaFwiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBcInZvaXJcIiAhPT0gX3ZtLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlcmllcy1yZXBzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VyaWVzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LXNlcmllcyBpY29uLTE4XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiTmIgZGUgc8Opcmllc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja0lmVmFsdWVJc0VtcHR5T3JOdWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGV4ZXJjaXNlLCBcIm51bWJlck9mU2VyaWVzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4ZXJjaXNlLm51bWJlck9mU2VyaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJlcHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtcmVwcyBpY29uLTE5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiTmIgZGUgcsOpcMOpdGl0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja0lmVmFsdWVJc0VtcHR5T3JOdWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1iZXJPZlJlcGV0aXRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBcInZvaXJcIiAhPT0gX3ZtLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBleGVyY2lzZS5vcHRpb25BY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbjogIWV4ZXJjaXNlLnZpZGVvLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIk9wdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja1ZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5vcHRpb25BY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS5vcHRpb25BY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoZXhlcmNpc2UsIFwib3B0aW9uQWN0aXZlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhlcmNpc2Uub3B0aW9uQWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhZXhlcmNpc2Uub3B0aW9uQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXhlcmNpc2Uub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJleGVyY2lzZS5vcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0LW9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8uX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZXhlcmNpc2UudmlkZW8ub3B0aW9ucywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogb3B0aW9uLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IG9wdGlvbi5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mob3B0aW9uLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgaGlkZGVuOiBleGVyY2lzZS5vcHRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU8OpbGVjdGlvbm5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndoaXRlLWJhY2tncm91bmRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBleGVyY2lzZS5ob2xkQWN0aXZlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiVGVuaXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZzLXN3aXRjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2tWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UuaG9sZEFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS5ob2xkQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGV4ZXJjaXNlLCBcImhvbGRBY3RpdmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJleGVyY2lzZS5ob2xkQWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGRpc2FibGVkOiAhZXhlcmNpc2UuaG9sZEFjdGl2ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJTZWNvbmRlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXhlcmNpc2UuaG9sZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChleGVyY2lzZSwgXCJob2xkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhlcmNpc2UuaG9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGVtcG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogZXhlcmNpc2UudGVtcG9BY3RpdmUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJUZW1wb1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja1ZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS50ZW1wb0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGVtcG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXhlcmNpc2UudGVtcG9BY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoZXhlcmNpc2UsIFwidGVtcG9BY3RpdmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJleGVyY2lzZS50ZW1wb0FjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBkaXNhYmxlZDogIWV4ZXJjaXNlLnRlbXBvQWN0aXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIihleDogMiAtIDAgLSAxIC0gMClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS50ZW1wbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChleGVyY2lzZSwgXCJ0ZW1wb1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4ZXJjaXNlLnRlbXBvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwia2l2LWhlbHBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZSB0ZW1wbywgYydlc3QgdG91dCBzaW1wbGVtZW50IGxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnl0aG1lIGRlIGxhIHLDqXDDqXRpdGlvbiwgaW5kaXF1YW50IHF1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlIG1vdXZlbWVudCBkb2l0IMOqdHJlIGxlbnQsIGV4cGxvc2lmIG91XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHLDtGzDqS5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1oZWxwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBleGVyY2lzZS50ZW1wb0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1xdWVzdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJ2b2lyXCIgPT09IF92bS5hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXJpZXMtcmVwc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlcmllc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1zZXJpZXMgaWNvbi0xOFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhleGVyY2lzZS5udW1iZXJPZlNlcmllcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHPDqXJpZXNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZXBzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1yZXBzIGljb24tMTlcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcsOpcMOpdGl0aW9uc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zIDogXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGV4ZXJjaXNlLm9wdGlvbikpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UuaG9sZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJob2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVuaXIgOiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZXhlcmNpc2UuaG9sZCkgKyBcInNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UudGVtcG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRlbXBvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbXBvIDogXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhleGVyY2lzZS50ZW1wbykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtaGVscFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgdGVtcG8sIGMnZXN0IHRvdXQgc2ltcGxlbWVudCBsZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ5dGhtZSBkZSBsYSByw6lww6l0aXRpb24sIGluZGlxdWFudCBxdWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZSBtb3V2ZW1lbnQgZG9pdCDDqnRyZSBsZW50LCBleHBsb3NpZiBvdVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyw7Rsw6kuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24taGVscFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXF1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgXCJ2b2lyXCIgIT09IF92bS5hY3Rpb25cbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWRkLXZpZGVvc1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi1hZGQtdmlkZW9zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlblZpZGVvTGlicmFyeSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFiIGZhLXlvdXR1YmVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQWpvdXRlciBkZXMgdmlkw6lvc1xcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0udmlkZW9QbGF5ZXJUb2dnbGVcbiAgICAgICAgICAgID8gX2MoXCJWaWRlb1BsYXllclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRvY3RvcjogX3ZtLmRvY3RvcixcbiAgICAgICAgICAgICAgICAgIHdvcmtzaGVldDogX3ZtLmdldFdvcmtzaGVldCxcbiAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlOiBfdm0uZXhlcmNpc2VGb3JQbGF5aW5nLFxuICAgICAgICAgICAgICAgICAgZXhlcmNpc2VzOiBfdm0uZ2V0RXhlcmNpc2VzLFxuICAgICAgICAgICAgICAgICAgbGFzdEV4ZXJjaXNlOiBfdm0uZ2V0VGhlTGFzdEV4ZXJjaXNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbG9zZVZpZGVvUGxheWVyOiBfdm0uY2xvc2VWaWRlb1BsYXllciB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS52aWRlb0xpYnJhcnlUb2dnbGVcbiAgICAgICAgICAgID8gX2MoXCJWaWRlb0xpYnJhcnlcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkb2N0b3I6IF92bS5kb2N0b3IsXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nVmlkZW9zOiBfdm0ubG9hZGluZ1ZpZGVvcyxcbiAgICAgICAgICAgICAgICAgIHZpZGVvczogX3ZtLnZpZGVvc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsb3NlVmlkZW9MaWJyYXJ5OiBfdm0uY2xvc2VWaWRlb0xpYnJhcnksXG4gICAgICAgICAgICAgICAgICBcInZpZGVvcy1zZWxlY3Rpb25cIjogX3ZtLmFkZFZpZGVvc1NlbGVjdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2cy1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubW9kYWxDb25maXJtUmVtb3ZlRXhlcmNpc2UgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb25maXJtLXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJDb25maXJtZXIgbGEgc3VwcHJlc3Npb24gZGVcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29uZmlybS1kZXRhaWwgcmVtb3ZlLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbmZpcm0taWNvbiByZW1vdmUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRyYXNoXCIgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5yZW1vdmVFeGVyY2lzZURldGFpbHMudmlkZW8ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbmZpcm0tYnV0dG9uc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBBbm51bGVyXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2VcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2UgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRSZW1vdmVFeGVyY2lzZSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIENvbmZpcm1lclxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJleGVyY2lzZSBsb2FkaW5nLWJsb2NrXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgdGh1bWJuYWlsLXdyYXBwZXJcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGgyIHctNDVcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWxzXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VyaWVzLXJlcHNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBzZXJpZXMgdy0yNVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHJlcHMgdy0xNVwiIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBvcHRpb24gdy0yNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgdGVtcG8gdy0xNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaG9sZCB3LTI1XCIgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tbWVudGFyeVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSB0aXRsZSB3LTI1XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBpbnB1dFwiIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2UgbG9hZGluZy1ibG9ja1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHRodW1ibmFpbC13cmFwcGVyXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBoMiB3LTM1XCIgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlcmllcy1yZXBzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgc2VyaWVzIHctMTVcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSByZXBzIHctMjVcIiB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgb3B0aW9uIHctMjVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHRlbXBvIHctMTVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGhvbGQgdy0yNVwiIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbW1lbnRhcnlcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgdGl0bGUgdy0yNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaW5wdXRcIiB9KVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSB0aHVtYm5haWwtd3JhcHBlclwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaDIgdy00NVwiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXJpZXMtcmVwc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHNlcmllcyB3LTE1XCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgcmVwcyB3LTE1XCIgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IG9wdGlvbiB3LTI1XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSB0ZW1wbyB3LTE1XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBob2xkIHctMjVcIiB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21tZW50YXJ5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHRpdGxlIHctMjVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGlucHV0XCIgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ2aWRlby1saWJyYXJ5XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwia2l2LWJsb2NrXCIsIGF0dHJzOiB7IGlkOiBcInZpZGVvLWxpYnJhcnlcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2cy1kaWFsb2dfX2Nsb3NlIGJ0bi1jbG9zZS1saWJyYXJ5LXNtXCIsXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZVZpZGVvTGlicmFyeSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJ2cy1pY29uLWNsb3NlIHZzLWljb24taG92ZXIteFwiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFZpZMOpb3Row6hxdWVcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdWaWRlb3NcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb3VudC12aWRlb3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoIHx8IF92bS5zZWxlY3RlZFRhZ3MubGVuZ3RoIHx8IF92bS5zZWxlY3RlZFBvQlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWx0ZXJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZ2V0VG90YWxWaWRlb3NGaWx0ZXJlZCkgKyBcIiB2aWTDqW9cIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFRvdGFsVmlkZW9zRmlsdGVyZWQgPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwic1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCB8fCBfdm0uc2VsZWN0ZWRUYWdzLmxlbmd0aCB8fCBfdm0uc2VsZWN0ZWRQb0JcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0csOpZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VG90YWxWaWRlb3NGaWx0ZXJlZCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByaW1hcnktYWN0aW9uc1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiRmlsdHJlciBwYXIgbm9tIGRlIHZpZGVvXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwia2l2LXNlbGVjdCB0YWdzXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFRhZ3NGcm9tQWxsVmlkZW9zLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJNb3RzLUNsw6lzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VsZWN0VGFnKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFncyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdldFRhZ3NGcm9tQWxsVmlkZW9zLCBmdW5jdGlvbih0YWcsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGksIGF0dHJzOiB7IGxhYmVsOiB0YWcsIHZhbHVlOiB0YWcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGFnKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcIm5vdERhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuIG1vdC1jbMOpIG5lIGNvcnJlc3BvbmQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgc2VsZWN0LXRhZ3NcIiB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJraXYtc2VsZWN0IHRhZ3NcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZzLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkJpYmxpb3Row6hxdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UgPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdFRhZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVmlkZW9MaWJyYXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRWaWRlb0xpYnJhcmllcyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVmlkZW9MaWJyYXJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS52aWRlb0xpYnJhcmllcywgZnVuY3Rpb24obGlicmFyeSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbGlicmFyeS5ub20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBsaWJyYXJ5LnJlZmVyZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGxpYnJhcnkubm9tKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwibm90RGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuZSBiaWJsaW90aMOocXVlIG5lIGNvcnJlc3BvbmQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJTZWxlY3RQYXJ0T2ZCb2R5XCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBhcnRPZkJvZHk6IF92bS5zZWxlY3RlZFBvQiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgcGFydE9mQm9keVNlbGVjdGVkOiBfdm0uZmlsdGVyQnlQYXJ0T2ZCb2R5LFxuICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5UmVzZXQ6IF92bS5yZXNldFNlbGVjdGVkUG9CXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZpZGVvLWxpYnJhcnktY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgIV92bS5sb2FkaW5nVmlkZW9zICYmIF92bS5nZXRWaWRlb3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2aWRlb3MtbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0VmlkZW9zLCBmdW5jdGlvbih2aWRlbywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkLXZpZGVvXCI6IF92bS5zZWxlY3RlZFZpZGVvcy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc2FibGVkLXZpZGVvXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlby52aWRlb0xpYnJhcnkucmVmZXJlbmNlID09PSBcImZmbWtyXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZ2V0RG9jdG9ySXNGRk1LUkFkaGVyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlkZW8tZmZta3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvLnZpZGVvTGlicmFyeS5yZWZlcmVuY2UgPT09IFwiZmZta3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVxdWVzdEZGTUtSQWRoZXNpb24odmlkZW8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlby52aWRlb0xpYnJhcnkucmVmZXJlbmNlID09PSBcImZmbWtyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmlkZW8tZmZta3ItYmxhc29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nby1mZm1rclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvLnZpZGVvTGlicmFyeS5yZWZlcmVuY2UgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmZm1rclwiICYmICFfdm0uZ2V0RG9jdG9ySXNGRk1LUkFkaGVyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIi9pbWcvbG9nby1raXZpZC1GRk1LUi1ncmV5LnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9pbWcvbG9nby1raXZpZC1GRk1LUi13aGl0ZS5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJMb2dvIEZGTUtSXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmlkZW8tdGh1bWJuYWlsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpZXdWaWRlbyh2aWRlbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB2aWRlby50aHVtYm5haWxVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwidmlnbmV0dGUgZGUgbGEgdmlkw6lvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MTJwdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgLTc3IDUxMi4wMDIxMyA1MTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTEycHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibTUwMS40NTMxMjUgNTYuMDkzNzVjLTUuOTAyMzQ0LTIxLjkzMzU5NC0yMy4xOTUzMTMtMzkuMjIyNjU2LTQ1LjEyNS00NS4xMjg5MDYtNDAuMDY2NDA2LTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NHMtMTYwLjI2MTcxOSAwLTIwMC4zMjgxMjUgMTAuNTQ2ODc1Yy0yMS41MDc4MTMgNS45MDIzNDQtMzkuMjIyNjU3IDIzLjYxNzE4Ny00NS4xMjUgNDUuNTQ2ODc1LTEwLjU0Mjk2OSA0MC4wNjI1LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4czAgODMuNTAzOTA2IDEwLjU0Mjk2OSAxMjMuMTQ4NDM3YzUuOTA2MjUgMjEuOTI5Njg3IDIzLjE5NTMxMiAzOS4yMjI2NTYgNDUuMTI4OTA2IDQ1LjEyODkwNiA0MC40ODQzNzUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0czE2MC4yNjE3MTkgMCAyMDAuMzI4MTI1LTEwLjU0Njg3NWMyMS45MzM1OTQtNS45MDIzNDQgMzkuMjIyNjU2LTIzLjE5NTMxMiA0NS4xMjg5MDYtNDUuMTI1IDEwLjU0Mjk2OS00MC4wNjY0MDYgMTAuNTQyOTY5LTEyMy4xNDg0MzggMTAuNTQyOTY5LTEyMy4xNDg0MzhzLjQyMTg3NS04My41MDc4MTItMTAuNTQ2ODc1LTEyMy41NzAzMTJ6bTAgMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI2YwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidGVzdDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtMjA0Ljk2ODc1IDI1NiAxMzMuMjY5NTMxLTc2Ljc1NzgxMi0xMzMuMjY5NTMxLTc2Ljc1NzgxM3ptMCAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidmlkZW8tZGV0YWlsc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2aWRlby1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlby5uYW1lLmxlbmd0aCA8IDQ1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh2aWRlby5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlby5uYW1lLnN1YnN0cmluZygwLCA0NSkgKyBcIi4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5zZWxlY3RlZFZpZGVvcy5pbmNsdWRlcyh2aWRlbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1hZGQtdmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgc2l6ZTogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRWaWRlbyh2aWRlbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGx1cy1pY29uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCIyeFwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLXJlbW92ZS12aWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBzaXplOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVZpZGVvKHZpZGVvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJjaGVjay1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIjJ4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5sb2FkaW5nVmlkZW9zICYmXG4gICAgICAgICAgICAgICFfdm0uZ2V0VmlkZW9zLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAhX3ZtLnNlYXJjaCAmJlxuICAgICAgICAgICAgICAhX3ZtLnNlbGVjdGVkVGFncy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgIV92bS5zZWxlY3RlZFBvQlxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3QtZm91bmRcIiB9LCBbX3ZtLl9tKDApXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdWaWRlb3MgJiZcbiAgICAgICAgICAgICAgIV92bS5nZXRWaWRlb3MubGVuZ3RoICYmXG4gICAgICAgICAgICAgIChfdm0uc2VhcmNoIHx8IF92bS5zZWxlY3RlZFRhZ3MubGVuZ3RoIHx8IF92bS5zZWxlY3RlZFBvQilcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhYiBmYS15b3V0dWJlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF1Y3VuZSB2aWTDqW8gbidhIMOpdMOpIHRyb3V2w6llIGF2ZWNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdignXCInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zZWFyY2gpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KCdcIicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnNlYXJjaCAmJiBfdm0uc2VsZWN0ZWRUYWdzLmxlbmd0aCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uc2VhcmNoICYmIF92bS5zZWxlY3RlZFBvQilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJldFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWdzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnNlbGVjdGVkVGFncywgZnVuY3Rpb24odGFnLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwibmYtdGFnIHRhZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dCB3c253XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRhZykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFBvQlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5mLXRhZyBwYXJ0LW9mLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IHdzbndcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2VsZWN0ZWRQb0IubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5sb2FkaW5nVmlkZW9zXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmcgdmlkZW9zLWxpc3RcIiB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS52aWRlb3MubGVuZ3RoID4gX3ZtLm1heFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidnMtcGFnaW5hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogX3ZtLmdldExlbmd0aChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0U2VhcmNoKF92bS52aWRlb3MsIF92bS5zZWFyY2gpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0TGVuZ3RoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFNlYXJjaChfdm0udmlkZW9zLCBfdm0uc2VhcmNoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKG51bWJlclBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbnVtYmVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG51bWJlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVtYmVyUGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG51bWJlclBhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tdmFsaWQtc2VsZWN0aW9uXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmJ0bkxvYWRpbmdWYWxpZFZpZGVvc1NlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZ1ZhbGlkVmlkZW9zU2VsZWN0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS52YWxpZFZpZGVvc1NlbGVjdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2hlY2stY2lyY2xlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlZhbGlkZXIgbGEgc2VsZWN0aW9uXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidnMtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2aWV3LXZpZGVvXCIsXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kYWxWaWV3VmlkZW8sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5tb2RhbFZpZXdWaWRlbyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxWaWV3VmlkZW9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwieW91dHViZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcInBsYXllci12YXJzXCI6IF92bS5wbGF5ZXJWYXJzLFxuICAgICAgICAgICAgICBcInZpZGVvLWlkXCI6IF92bS5zZWxlY3RlZFZpZXdWaWRlby55b3V0dWJlSWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZzLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZmZta3ItYWRoZXNpb25cIixcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RhbFJlcXVlc3RGRk1LUkFkaGVzaW9uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubW9kYWxSZXF1ZXN0RkZNS1JBZGhlc2lvbiA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxSZXF1ZXN0RkZNS1JBZGhlc2lvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiVmlkw6lvIEZGTUtSXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiUG91ciB1dGlsaXNlciBsZXMgdmlkw6lvcyBkZSBsYSBGRk1LUiB2b3VzIGRldmV6IHkgYWRow6lyZXJcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBkaXNhYmxlZDogX3ZtLmJ0bkxvYWRpbmdGRk1LUkFkaGVzaW9uIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nRkZNS1JBZGhlc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRGRk1LUkFkaGVzaW9uIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFkaMOpcmVyIMOgIGxhIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ28tZmZta3JcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvbG9nby1raXZpZC1GRk1LUi13aGl0ZS5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJMb2dvIEZGTUtSXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhYiBmYS15b3V0dWJlXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJJbCBuJ3kgYSBhdWN1bmUgdmlkw6lvXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInZpZGVvLXBsYXllclwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tY2xvc2UtcGxheWVyXCIsXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZVZpZGVvUGxheWVyIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi14IGljb24tMjFcIiB9KV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBrZXk6IFwidmlkZW9cIiwgc3RhdGljQ2xhc3M6IFwidmlkZW8tZnJhbWVcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInlvdXR1YmVcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJ5b3V0dWJlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwicGxheWVyLXZhcnNcIjogX3ZtLnBsYXllclZhcnMsXG4gICAgICAgICAgICAgICAgICBcInZpZGVvLWlkXCI6IF92bS5nZXRFeGVyY2lzZS52aWRlby55b3V0dWJlSWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGVuZGVkOiBfdm0udmlkZW9FbmRlZCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbS1iYXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b20tYmFyLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlLWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2UtY291bnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBFeGVyY2ljZSBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0RXhlcmNpc2UucG9zaXRpb24gKyAxKSArXG4gICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRFeGVyY2lzZXMgPyBfdm0uZ2V0RXhlcmNpc2VzLmxlbmd0aCA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlyZXRcIiB9LCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0RXhlcmNpc2UudmlkZW8ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlLXNlcmllcy1yZXBzLW9wdGlvbnNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VyaWVzLXJlcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXJpZXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtc2VyaWVzIGljb24tMThcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2V0RXhlcmNpc2UubnVtYmVyT2ZTZXJpZXMpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzw6lyaWVzXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVwc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1yZXBzIGljb24tMTlcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldEV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHLDqXDDqXRpdGlvbnNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlY29uZC1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5nZXRFeGVyY2lzZS5vcHRpb25cbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnMgOiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRFeGVyY2lzZS5vcHRpb24pKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmdldEV4ZXJjaXNlLmhvbGRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJob2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5pciA6IFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmdldEV4ZXJjaXNlLmhvbGQpICsgXCJzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uZ2V0RXhlcmNpc2UudGVtcG9cbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRlbXBvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcG8gOiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmdldEV4ZXJjaXNlLnRlbXBvKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtaGVscFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlIHRlbXBvLCBjJ2VzdCB0b3V0IHNpbXBsZW1lbnQgbGVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeXRobWUgZGUgbGEgcsOpcMOpdGl0aW9uLCBpbmRpcXVhbnQgcXVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGUgbW91dmVtZW50IGRvaXQgw6p0cmUgbGVudCwgZXhwbG9zaWYgb3VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250csO0bMOpLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI2OTU1MTgwMDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24taGVscFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1xdWVzdGlvblwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tbmV4dFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInZzLWJ1dHRvblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0ubmV4dEV4ZXJjaXNlIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmdldEV4ZXJjaXNlID09PSBfdm0uZ2V0VGhlTGFzdEV4ZXJjaXNlXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJGZXJtZXJcIildKVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiU3VpdmFudFwiKV0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbIlZ1ZSIsIldvcmtTaGVldFBhZ2UiLCJheGlvcyIsIlZ1ZUF4aW9zIiwidXNlIiwiVnVlc2F4IiwiVnVlWW91dHViZSIsInJlbmRlciIsImgiLCIkbW91bnQiXSwic291cmNlUm9vdCI6IiJ9