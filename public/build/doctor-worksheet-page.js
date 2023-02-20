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
/* harmony import */ var _services_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/function */ "./assets/vue/services/function.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_SelectPartOfBody_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/SelectPartOfBody.vue */ "./assets/vue/components/SelectPartOfBody.vue");







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon,
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.CheckIcon,
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.XIcon,
    SelectPartOfBody: _components_SelectPartOfBody_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
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
      modalAddVideo: false,
      modalViewVideo: false,
      selectedViewVideo: false,
      btnLoadingValidVideosSelection: false,
      inputChips: null
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
      return _services_function__WEBPACK_IMPORTED_MODULE_7__["default"].getTagsFromAllVideos(this.videos);
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
      this.selectedVideos.push(video);
    },
    removeVideo: function removeVideo(video) {
      this.selectedVideos.splice(this.selectedVideos.indexOf(video), 1);
    },
    validVideosSelection: function validVideosSelection() {
      var _this = this;

      this.btnLoadingValidVideosSelection = true;
      this.$emit("videos-selection", this.selectedVideos);
      this.closeVideoLibrary();
      setTimeout(function () {
        _this.btnLoadingValidVideosSelection = false;
      }, 1000);
    },
    closeVideoLibrary: function closeVideoLibrary() {
      var _this2 = this;

      setTimeout(function () {
        _this2.search = "";
        _this2.selectedTags = [];
        _this2.selectedVideos = [];
        _this2.selectedPoB = null;
      }, 300);
      this.$emit("closeVideoLibrary", true);
    },
    getPage: function getPage(data, page, maxItems) {
      return _services_function__WEBPACK_IMPORTED_MODULE_7__["default"].getPage(data, page, maxItems);
    },
    getLength: function getLength(data, maxItems) {
      return _services_function__WEBPACK_IMPORTED_MODULE_7__["default"].getLength(data, maxItems);
    },
    getSearch: function getSearch(data, filter) {
      var _this3 = this;

      var videosListFiltered = _services_function__WEBPACK_IMPORTED_MODULE_7__["default"].getSearch(data, filter);

      if (this.selectedTags.length) {
        videosListFiltered = videosListFiltered.filter(function (v) {
          var results = [];

          if (v.tags) {
            _this3.selectedTags.forEach(function (tag) {
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

      if (this.selectedPoB) {
        videosListFiltered = videosListFiltered.filter(function (v) {
          var result = false;

          if (v.partOfBodys) {
            v.partOfBodys.forEach(function (partOfBody) {
              if (partOfBody.id === _this3.selectedPoB.id) {
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
      var _this4 = this;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        if (window.innerWidth < 449) {
          _this4.max = 1000;
          _this4.page = 1;
        }

        if (window.innerWidth >= 449 && window.innerWidth <= 649) {
          _this4.max = 8;
          _this4.page = 1;
        }

        if (window.innerWidth > 649 && window.innerWidth <= 849) {
          _this4.max = 9;
          _this4.page = 1;
        }

        if (window.innerWidth > 849 && window.innerWidth <= 1618) {
          _this4.max = 8;
          _this4.page = 1;
        }

        if (window.innerWidth > 1618 && window.innerWidth <= 1659) {
          _this4.max = 10;
          _this4.page = 1;
        }

        if (window.innerWidth > 1659) {
          _this4.max = 12;
          _this4.page = 1;
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
                            "selected-video": _vm.selectedVideos.includes(video)
                          }
                        },
                        [
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdG9yLXdvcmtzaGVldC1wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7QUFDQUEsK0NBQUEsQ0FBUUcsaURBQVIsRUFBa0JELDhDQUFsQixHQUVBOztBQUNBO0FBQ0FGLCtDQUFBLENBQVFLLCtDQUFSLEdBRUE7O0FBQ0E7QUFDQUwsK0NBQUEsQ0FBUU0sb0RBQVI7QUFFQSxJQUFJTiwyQ0FBSixDQUFRO0FBQ0pPLEVBQUFBLE1BQU0sRUFBRSxnQkFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1AsMERBQUQsQ0FBTDtBQUFBO0FBREwsQ0FBUixFQUVHUSxNQUZILENBRVUsTUFGVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29KQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQTtBQUNBO0FBREEsR0FKQTtBQU9BLE1BUEEsa0JBT0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsZ0JBRkE7QUFHQSxzQkFIQTtBQUlBLHVCQUpBO0FBS0EsK0JBTEE7QUFNQTtBQU5BO0FBUUEsR0FoQkE7QUFpQkE7QUFDQSx5QkFEQSxtQ0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBTkE7QUFPQSx1QkFQQSxpQ0FPQTtBQUFBOztBQUNBLDBDQUNBO0FBQUEsZUFDQSxPQUNBLFNBREEsQ0FDQSxLQURBLEVBRUEsT0FGQSxDQUVBLGtCQUZBLEVBRUEsRUFGQSxFQUdBLFdBSEEsR0FJQSxRQUpBLENBS0EsYUFDQSxTQURBLENBQ0EsS0FEQSxFQUVBLE9B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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyx1RkFBdUM7QUFDMUU7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyx5RkFBd0M7QUFDM0U7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyx1RkFBdUM7QUFDMUU7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyx1RkFBdUM7QUFDMUU7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQywyRkFBeUM7QUFDNUU7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxxRkFBc0M7QUFDekU7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBNkM7QUFDaEY7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxpR0FBNEM7QUFDL0U7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBNkM7QUFDaEY7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEw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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSx3Q0FBd0MsMEJBQTBCO0FBQ2xFLHdDQUF3QyxnQ0FBZ0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBLGtDQUFrQyxNQUFNLDJCQUEyQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL3dvcmtzaGVldC1wYWdlLmpzIiwid2VicGFjazovLy9hc3NldHMvdnVlL2NvbXBvbmVudHMvU2VsZWN0UGFydE9mQm9keS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya1NoZWV0UGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT81NDNhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlP2I3OGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT9jMGViIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlPzZjMzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZT84ZTU2Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvVGFnUGFydE9mQm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya1NoZWV0UGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9MaWJyYXJ5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT81ZmExIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZT85OTRmIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlPzYwNmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT8wZWQ0Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlP2I2NjQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZT8wYjI3Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT8yYjVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlPzY3MmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT82MWI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlP2FjNGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZT8yZDlhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT9lMzg4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZT81OTk4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlPzA5YzMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT8wYjUwIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlPzA4ZGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZT8yZGM4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT84NjBmIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZT8yMDA5Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlPzBhMWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT80ZDc4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlPzIyN2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZT8wOGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFdvcmtTaGVldFBhZ2UgZnJvbSAnLi9Xb3JrU2hlZXRQYWdlLnZ1ZSdcclxuXHJcbi8vIEF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcydcclxuVnVlLnVzZShWdWVBeGlvcywgYXhpb3MpXHJcblxyXG4vLyBWdWVzYXggKFVYIGxpYilcclxuaW1wb3J0IFZ1ZXNheCBmcm9tICd2dWVzYXgnXHJcblZ1ZS51c2UoVnVlc2F4KVxyXG5cclxuLy8gWW91dHViZSBwbGF5ZXJcclxuaW1wb3J0IFZ1ZVlvdXR1YmUgZnJvbSAndnVlLXlvdXR1YmUnXHJcblZ1ZS51c2UoVnVlWW91dHViZSlcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgcmVuZGVyOiBoID0+IGgoV29ya1NoZWV0UGFnZSlcclxufSkuJG1vdW50KCcjdnVlJylcclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiB2LWNsaWNrLW91dHNpZGU9XCJoaWRlU2VsZWN0Qm94XCIgY2xhc3M9XCJzZWxlY3QtZmlsdGVyXCI+XHJcbiAgICAgICAgPGRpdiB2LXNob3c9XCIhbG9hZGluZ1BhcnRzT2ZCb2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHYtc2hvdz1cImdldFBhcnRPZkJvZHlTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBhcnRvZmJvZHktc2VsZWN0ZWQgcGFydC1vZi1ib2R5XCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInJlc2V0U2VsZWN0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gJ3BpZWQnXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3BpZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBQaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tcGllZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gJ2phbWJlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9qYW1iZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIEphbWJlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tamFtYmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdicmFzJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9icmFzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgQnJhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWJyYXNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdtYWluJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9tYWluLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgTWFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLW1haW5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdlcGF1bGUnXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2VwYXVsZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIMOJcGF1bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1lcGF1bGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdkb3MnXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2Rvcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIERvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWRvc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gJ2NlcnZpY2FsZXMnXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2NlcnZpY2FsZXMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBDZXJ2aWNhbGVzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tY2VydmljYWxlc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gJ2xvbWJhaXJlcydcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbG9tYmFpcmVzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgTG9tYmFpcmVzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tbG9tYmFpcmVzXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSAndGhvcmFjaXF1ZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvdGhvcmFjaXF1ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIFRob3JhY2lxdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi10aG9yYWNpcXVlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgd3Nud1wiPnt7IGdldFBhcnRPZkJvZHlTZWxlY3RlZC5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB2LXNob3c9XCIhZ2V0UGFydE9mQm9keVNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0Qm94ID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBAa2V5dXA9XCJzZWxlY3RCb3hXaXRoVGhyb3R0bGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXJ0b2Zib2R5LWNob2ljZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnYi1yLWItemVybyc6IHNlbGVjdEJveCB9XCJcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIhc2VsZWN0Qm94ID8gJ1BhcnRpZSBkdSBjb3JwcycgOiAnUmVjaGVyY2hleidcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFycm93LXRvZ2dsZS1ib3hcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IHNlbGVjdEJveCB9XCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZVNlbGVjdEJveFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidnMtaWNvbi1hcnJvd1wiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJoZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJzZWxlY3RCb3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZm9jdXNJbnB1dFNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHYtaWY9XCJwYXJ0c09mQm9keUZpbHRlcmVkLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIocGFydCwgaSkgaW4gcGFydHNPZkJvZHlGaWx0ZXJlZFwiIDprZXk9XCJpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwYXJ0LW9mLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNlbGVjdFBhcnRPZkJvZHkocGFydClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhcnQuaWNvbiA9PT0gJ3BpZWQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9waWVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIFBpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tcGllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICdqYW1iZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2phbWJlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIEphbWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWphbWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhcnQuaWNvbiA9PT0gJ2JyYXMnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9icmFzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIEJyYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tYnJhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICdtYWluJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbWFpbi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBNYWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLW1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGFydC5pY29uID09PSAnZXBhdWxlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvZXBhdWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIMOJcGF1bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tZXBhdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhcnQuaWNvbiA9PT0gJ2RvcydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2Rvcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBEb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhcnQuaWNvbiA9PT0gJ2NlcnZpY2FsZXMnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9jZXJ2aWNhbGVzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIENlcnZpY2FsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tY2VydmljYWxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICdsb21iYWlyZXMnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9sb21iYWlyZXMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgTG9tYmFpcmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWxvbWJhaXJlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICd0aG9yYWNpcXVlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvdGhvcmFjaXF1ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBUaG9yYWNpcXVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLXRob3JhY2lxdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IHdzbndcIj57eyBwYXJ0Lm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vdC1mb3VuZC1wb2JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuZSBwYXJ0aWUgZHUgY29ycHMgbmUgY29ycmVzcG9uZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtc2hvdz1cImxvYWRpbmdQYXJ0c09mQm9keVwiIGNsYXNzPVwibG9hZGluZy1ncmF5IGxvYWRpbmctcG9iXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSBcInZ1ZS1jbGljay1vdXRzaWRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHBhcnRPZkJvZHk6IE9iamVjdCxcclxuICAgIH0sXHJcbiAgICBkaXJlY3RpdmVzOiB7XHJcbiAgICAgICAgQ2xpY2tPdXRzaWRlLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFydHNPZkJvZHk6IFtdLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdEJveDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdElucHV0OiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nUGFydHNPZkJvZHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RCb3hUaHJvdHRsZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGdldFBhcnRPZkJvZHlTZWxlY3RlZCgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcnRPZkJvZHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnRPZkJvZHk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJ0c09mQm9keUZpbHRlcmVkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRQb0JOYW1lQnlBbHBoYWJldChcclxuICAgICAgICAgICAgICAgIHRoaXMucGFydHNPZkJvZHkuZmlsdGVyKChwKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHAubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubm9ybWFsaXplKFwiTkZEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub3JtYWxpemUoXCJORkRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9nZ2xlU2VsZWN0Qm94KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJveCA9ICF0aGlzLnNlbGVjdEJveDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFydE9mQm9keSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0Qm94KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSW5wdXRTZWxlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZVNlbGVjdEJveCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdFBhcnRPZkJvZHkocGFydG9mYm9keSkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwicGFydE9mQm9keVNlbGVjdGVkXCIsIHBhcnRvZmJvZHkpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVTZWxlY3RCb3goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0U2VsZWN0KCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwicGFydE9mQm9keVJlc2V0XCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJ0b2Zib2R5LWNob2ljZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dFNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9jdXNJbnB1dFNlbGVjdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0Qm94V2l0aFRocm90dGxlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0Qm94VGhyb3R0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94VGhyb3R0bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RCb3hcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3hUaHJvdHRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNvcnRlZFBvQk5hbWVCeUFscGhhYmV0KGFycmF5KSB7XHJcbiAgICAgICAgICAgIGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdQYXJ0c09mQm9keSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgLmdldChgL2dldC9wYXJ0cy1vZi1ib2R5YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRzT2ZCb2R5ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdQYXJ0c09mQm9keSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJ0b2Zib2R5LWNob2ljZS1zZWxlY3RcIik7XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuQGltcG9ydCBcIi4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uc2VsZWN0LWZpbHRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHJcbiAgICAubG9hZGluZy1wb2Ige1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDQuOHJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgJi5iLXItYi16ZXJvIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQuOXJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxLjRyZW0gMS43cmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQuM3JlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRncmF5LWRhcms7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3ctdG9nZ2xlLWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMC42cmVtO1xyXG4gICAgICAgIHJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgd2lkdGg6IDMuOHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDMuNHJlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgJi52cy1pY29uLWFycm93IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjJlNTQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDYwMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tdnMtdGV4dCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXZzLXRleHQpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEuOXJlbTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0LWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNC45cmVtO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogNzc3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMC41cmVtIDAuNXJlbTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggLTVweCByZ2JhKDQ0LCAxMSwgMTEsIDAuMTUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE5LCAxLjAzLCAwLjc5LCAxLjAyKTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyNnJlbTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEuN3JlbTtcclxuXHJcbiAgICAgICAgLm5vdC1mb3VuZC1wb2Ige1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlRW50ZXIgMC41cztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYXJ0b2Zib2R5LXNlbGVjdGVkIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0LjZyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMS42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC40cmVtKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQtb2YtYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlZWVlODtcclxuICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZjZmNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcblxyXG4gICAgICAgICAgICAmLmljb24tcGllZCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLWphbWJlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMHJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS43NXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLWJyYXMge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuaWNvbi1tYWluIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmljb24tZXBhdWxlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmljb24tZG9zIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmljb24tY2VydmljYWxlcyB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLWxvbWJhaXJlcyB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDByZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLXRob3JhY2lxdWUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QtYm94IHtcclxuICAgICAgICAucGFydC1vZi1ib2R5IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMS4xcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8dnMtYnV0dG9uIHNpemU9XCJtaW5pXCIgY2xhc3M9XCJ0YWcgcGFydC1vZi1ib2R5XCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICB2LWlmPVwicGFydE9mQm9keS5pY29uID09PSAncGllZCdcIlxyXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3BpZWQuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgUGllZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1waWVkXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ2phbWJlJ1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvamFtYmUuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgSmFtYmVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tamFtYmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICB2LWlmPVwicGFydE9mQm9keS5pY29uID09PSAnYnJhcydcIlxyXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2JyYXMuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgQnJhc1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1icmFzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ21haW4nXCJcclxuICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9tYWluLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIE1haW5cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tbWFpblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHYtaWY9XCJwYXJ0T2ZCb2R5Lmljb24gPT09ICdlcGF1bGUnXCJcclxuICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9lcGF1bGUuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgw4lwYXVsZVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1lcGF1bGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICB2LWlmPVwicGFydE9mQm9keS5pY29uID09PSAnZG9zJ1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvZG9zLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIERvc1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1kb3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICB2LWlmPVwicGFydE9mQm9keS5pY29uID09PSAnY2VydmljYWxlcydcIlxyXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2NlcnZpY2FsZXMuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgQ2VydmljYWxlc1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1jZXJ2aWNhbGVzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ2xvbWJhaXJlcydcIlxyXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2xvbWJhaXJlcy5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJJY29uZSBMb21iYWlyZXNcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tbG9tYmFpcmVzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ3Rob3JhY2lxdWUnXCJcclxuICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS90aG9yYWNpcXVlLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIFRob3JhY2lxdWVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tdGhvcmFjaXF1ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgd3Nud1wiPnt7IHBhcnRPZkJvZHkubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICA8aSBjbGFzcz1cImtpdi1jb21wbGV0ZWQgaWNvbi0yMlwiPjwvaT5cclxuICAgIDwvdnMtYnV0dG9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwYXJ0T2ZCb2R5OiBPYmplY3QsXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJ3b3Jrc2hlZXRcIj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBoMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHBhcnQtb2YtYm9keVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJwYXRpZW50XCIgY2xhc3M9XCJwcmVzY3JpLWZvci1wYXRpZW50LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWRlcmljdFRvRGFzaGJvYXJkKClcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXNjcmktZm9yLXBhdGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+cHJlc2NyaXB0aW9uIDxzcGFuPnBvdXI8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1hdmF0YXIgc2l6ZT1cIjI2XCIgY2xhc3M9XCJ1c2VyLWF2YXRhclwiIGNpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhdGllbnQuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcvaW1nL2F2YXRhci1kZWZhdWx0LnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJgQXZhdGFyIGRlICR7cGF0aWVudC5maXJzdG5hbWV9ICR7cGF0aWVudC5sYXN0bmFtZX1gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldFVzZXJOYW1lKHBhdGllbnQpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgPT09IGFjdGlvblwiIGNsYXNzPVwidGl0bGUtdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgaGlkZGVuOiBwYXRpZW50IH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVkZXJpY3RUb0Rhc2hib2FyZCgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt7IGdldFdvcmtzaGVldC50aXRsZSB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhZ1BhcnRPZkJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFdvcmtzaGVldC5wYXJ0T2ZCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnBhcnRPZkJvZHk9XCJnZXRXb3Jrc2hlZXQucGFydE9mQm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2l2LWFycm93LWxlZnQgaWNvbi0zMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgaGlkZGVuOiBwYXRpZW50IH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWRlcmljdFRvRGFzaGJvYXJkKClcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ3b3Jrc2hlZXQudGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIlRpdHJlIGRlIGxhIGZpY2hlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJ0aXRsZUlzRW1wdHlNZXNzYWdlID0gbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRpdGxlSXNFbXB0eU1lc3NhZ2VcIiAjbWVzc2FnZS1kYW5nZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0aXRsZUlzRW1wdHlNZXNzYWdlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIid2b2lyJyAhPT0gYWN0aW9uXCIgY2xhc3M9XCJ3b3Jrc2hlZXQtcGFyYW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIndvcmtzaGVldC1kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VkaXRpb24nID09PSBhY3Rpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lmV29ya3NoZWV0U2Vzc2lvbnNFeGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VkaXRpb24nID09PSBhY3Rpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lmV29ya3NoZWV0U2Vzc2lvbnNFeGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXZlcnQtc2Vzc2lvbnMtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1pbmZvIGljb24tMTdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3VzIG5lIHBvdXZleiBwbHVzIG1vZGlmaWVyIGxhIGR1csOpZSBkZSBsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNjcmlwdGlvbiBjYXIgbGUgcGF0aWVudCBhIGTDqWrDoCBkw6ltYXJyw6kgc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LXRpbWluZy1wZXJ3ZWVrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jYWxlbmRhciBpY29uLTEwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIndvcmtzaGVldC5wZXJXZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcldlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiWCBwYXIgc2VtLiAobWF4OiA3KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJZkR1cmF0aW9uVmFsdWVJc0VtcHR5T3JOdWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBlcldlZWssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC10aW1pbmctcGVyZGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jYWxlbmRhciBpY29uLTEwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIndvcmtzaGVldC5wZXJEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGVyRGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIlggcGFyIGpvdXIgKG1heDogMylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBibHVyPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrSWZEdXJhdGlvblZhbHVlSXNFbXB0eU9yTnVsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5wZXJEYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1wZXJpb2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWNsb2NrIGljb24tMTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwid29ya3NoZWV0LmR1cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIkR1csOpZSBlbiBzZW0uIChtYXg6IDUyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJZkR1cmF0aW9uVmFsdWVJc0VtcHR5T3JOdWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtZmlsdGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RQYXJ0T2ZCb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFydE9mQm9keT1cIndvcmtzaGVldC5wYXJ0T2ZCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYXJ0T2ZCb2R5U2VsZWN0ZWQ9XCJzZXRQYXJ0T2ZCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYXJ0T2ZCb2R5UmVzZXQ9XCJyZXNldFBvQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInBhcnRPZkJvZHlJc0VtcHR5TWVzc2FnZVwiIGNsYXNzPVwiZXJyb3ItbWVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcGFydE9mQm9keUlzRW1wdHlNZXNzYWdlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAgaWQ9XCJleGVyY2lzZXMtcGxheWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnbm8tbXQnOiAndm9pcicgPT09IGFjdGlvbiB9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEV4ZXJjaXNlc1BsYXlsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgOmRvY3Rvcj1cImRvY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA6YWN0aW9uPVwiYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA6d29ya3NoZWV0PVwiZ2V0V29ya3NoZWV0XCJcclxuICAgICAgICAgICAgICAgICAgICA6ZXhlcmNpc2VzPVwiZ2V0RXhlcmNpc2VzXCJcclxuICAgICAgICAgICAgICAgICAgICA6bG9hZGluZ1ZpZGVvcz1cImxvYWRpbmdWaWRlb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIDp2aWRlb3M9XCJ2aWRlb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjc3JmVG9rZW5SZW1vdmVFeGVyY2lzZT1cImNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0bi12YWxpZFwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOlxyXG4gICAgICAgICAgICAgICAgICAgIGJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQgfHxcclxuICAgICAgICAgICAgICAgICAgICBidG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgIHYtaWY9XCInZWRpdGlvbicgPT09IGFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZEVkaXRcIlxyXG4gICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nVmFsaWRFZGl0V29ya3NoZWV0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgVmFsaWRlciBsZXMgbW9kaWZpY2F0aW9uc1xyXG4gICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdi1pZj1cIidjcmVhdGlvbicgPT09IGFjdGlvbiAmJiAhcGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZENyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICA6bG9hZGluZz1cImJ0bkxvYWRpbmdWYWxpZENyZWF0ZVdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIENyw6llciBsYSBmaWNoZVxyXG4gICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdi1pZj1cIidjcmVhdGlvbicgPT09IGFjdGlvbiAmJiBwYXRpZW50XCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkQ3JlYXRlXCJcclxuICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwiYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgQ3LDqWVyIGxhIHByZXNjcmlwdGlvblxyXG4gICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCBmIGZyb20gXCIuLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgRXhlcmNpc2VzUGxheWxpc3QgZnJvbSBcIi4vV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZVwiO1xyXG5pbXBvcnQgVGFnUGFydE9mQm9keSBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZVwiO1xyXG5pbXBvcnQgU2VsZWN0UGFydE9mQm9keSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEV4ZXJjaXNlc1BsYXlsaXN0LFxyXG4gICAgICAgIFNlbGVjdFBhcnRPZkJvZHksXHJcbiAgICAgICAgVGFnUGFydE9mQm9keSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICB3b3Jrc2hlZXRJZDogbnVsbCxcclxuICAgICAgICAgICAgd29ya3NoZWV0OiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICBwZXJEYXk6IDEsXHJcbiAgICAgICAgICAgICAgICBwZXJXZWVrOiAxLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZXJjaXNlczogW10sXHJcbiAgICAgICAgICAgIHBhdGllbnQ6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmdWaWRlb3M6IGZhbHNlLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5DcmVhdGVXb3Jrc2hlZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGNzcmZUb2tlbkVkaXRXb3Jrc2hlZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlOiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbWF4RHVyYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MixcclxuICAgICAgICAgICAgICAgIHBlckRheTogMyxcclxuICAgICAgICAgICAgICAgIHBlcldlZWs6IDcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBidG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjaGVja0lmV29ya3NoZWV0U2Vzc2lvbnNFeGlzdDogbnVsbCxcclxuICAgICAgICAgICAgdGl0bGVJc0VtcHR5TWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgcGFydE9mQm9keUlzRW1wdHlNZXNzYWdlOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRXb3Jrc2hlZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndvcmtzaGVldDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEV4ZXJjaXNlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlcmNpc2VzO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldFBhcnRPZkJvZHkocGFydE9mQm9keSkge1xyXG4gICAgICAgICAgICB0aGlzLndvcmtzaGVldC5wYXJ0T2ZCb2R5ID0gcGFydE9mQm9keTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0T2ZCb2R5SXNFbXB0eU1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXRQb0IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LnBhcnRPZkJvZHkgPSBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkZXJpY3RUb0Rhc2hib2FyZCgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2Rhc2hib2FyZGA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja0lmRHVyYXRpb25WYWx1ZUlzRW1wdHlPck51bGwoZHVyYXRpb25WYWx1ZSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZHVyYXRpb25UeXBlID0gZXZlbnQudGFyZ2V0LmlkO1xyXG5cclxuICAgICAgICAgICAgaWYgKFwidnMtaW5wdXQtLWR1cmF0aW9uXCIgPT09IGR1cmF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFwiXCIgPT09IGR1cmF0aW9uVmFsdWUgfHwgbnVsbCA9PT0gZHVyYXRpb25WYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LmR1cmF0aW9uID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvblZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LmR1cmF0aW9uID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvblZhbHVlID4gdGhpcy5tYXhEdXJhdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LmR1cmF0aW9uID0gdGhpcy5tYXhEdXJhdGlvbi5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwidnMtaW5wdXQtLXBlckRheVwiID09PSBkdXJhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcIlwiID09PSBkdXJhdGlvblZhbHVlIHx8IG51bGwgPT09IGR1cmF0aW9uVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzaGVldC5wZXJEYXkgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uVmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGVyRGF5ID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvblZhbHVlID4gdGhpcy5tYXhEdXJhdGlvbi5wZXJEYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzaGVldC5wZXJEYXkgPSB0aGlzLm1heER1cmF0aW9uLnBlckRheTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwidnMtaW5wdXQtLXBlcldlZWtcIiA9PT0gZHVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gZHVyYXRpb25WYWx1ZSB8fCBudWxsID09PSBkdXJhdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGVyV2VlayA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb25WYWx1ZSA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzaGVldC5wZXJXZWVrID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvblZhbHVlID4gdGhpcy5tYXhEdXJhdGlvbi5wZXJXZWVrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGVyV2VlayA9IHRoaXMubWF4RHVyYXRpb24ucGVyV2VlaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tJZkVtcHR5KCkge1xyXG4gICAgICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLndvcmtzaGVldC5wYXJ0T2ZCb2R5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRPZkJvZHlJc0VtcHR5TWVzc2FnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJWb3VzIGRldmV6IGNob2lzaXIgdW5lIHBhcnRpZSBkdSBjb3Jwc1wiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXJyZXVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0T2ZCb2R5SXNFbXB0eU1lc3NhZ2UgKyBcIiBwb3VyIGxhIGZpY2hlLlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy53b3Jrc2hlZXQudGl0bGUgPT09IFwiXCIgfHwgdGhpcy53b3Jrc2hlZXQudGl0bGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVJc0VtcHR5TWVzc2FnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJWb3VzIGRldmV6IGVudHJlciB1biB0aXRyZSBwb3VyIGxhIGZpY2hlLlwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFwiRXJyZXVyXCIsIHRoaXMudGl0bGVJc0VtcHR5TWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leGVyY2lzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFcnJldXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkxhIGZpY2hlIG5lIHBldXQgcGFzIMOqdHJlIHZpZGUsIHZvdXMgZGV2ZXogYWpvdXRlciBkZXMgdmlkw6lvcy5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRFZGl0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNOb3RFbXB0eSA9IHRoaXMuY2hlY2tJZkVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOb3RFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2VkaXQvd29ya3NoZWV0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuRWRpdFdvcmtzaGVldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0SWQ6IHRoaXMud29ya3NoZWV0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy53b3Jrc2hlZXQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRPZkJvZHlJZDogdGhpcy53b3Jrc2hlZXQucGFydE9mQm9keS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMud29ya3NoZWV0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJXZWVrOiB0aGlzLndvcmtzaGVldC5wZXJXZWVrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJEYXk6IHRoaXMud29ya3NoZWV0LnBlckRheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VzOiB0aGlzLmV4ZXJjaXNlcyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRWRpdGlvbiBkZSBsYSBwcmVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGEgcHJlc2NyaXB0aW9uIGEgYmllbiDDqXTDqSBtb2RpZmnDqWVgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVkaXRpb24gZGUgbGEgZmljaGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGF0aWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9kYXNoYm9hcmRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vZGFzaGJvYXJkLz90YWI9d3NgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkRWRpdFdvcmtzaGVldCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkRWRpdFdvcmtzaGVldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZENyZWF0ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNOb3RFbXB0eSA9IHRoaXMuY2hlY2tJZkVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOb3RFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2NyZWF0ZS93b3Jrc2hlZXRgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90b2tlbjogdGhpcy5jc3JmVG9rZW5DcmVhdGVXb3Jrc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldElkOiB0aGlzLndvcmtzaGVldC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudElkOiB0aGlzLnBhdGllbnQgPyB0aGlzLnBhdGllbnQuaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy53b3Jrc2hlZXQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRPZkJvZHlJZDogdGhpcy53b3Jrc2hlZXQucGFydE9mQm9keS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMud29ya3NoZWV0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJXZWVrOiB0aGlzLndvcmtzaGVldC5wZXJXZWVrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJEYXk6IHRoaXMud29ya3NoZWV0LnBlckRheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VzOiB0aGlzLmV4ZXJjaXNlcyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMud29ya3NoZWV0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3LDqWF0aW9uIGR1IG1vZMOobGUgZGUgZmljaGUgKGlkZW50aXF1ZSBzYW5zIGxlIHBhdGllbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9zdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2NyZWF0ZS93b3Jrc2hlZXRgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90b2tlbjogdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NyZlRva2VuQ3JlYXRlV29ya3NoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldElkOiB0aGlzLndvcmtzaGVldC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMud29ya3NoZWV0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRPZkJvZHlJZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGFydE9mQm9keS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy53b3Jrc2hlZXQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyV2VlazogdGhpcy53b3Jrc2hlZXQucGVyV2VlayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJEYXk6IHRoaXMud29ya3NoZWV0LnBlckRheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZXM6IHRoaXMuZXhlcmNpc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNyw6lhdGlvbiBkZSBsYSBwcmVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGEgZmljaGUgPHN0cm9uZz4gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9zdHJvbmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgw6l0w6kgcHJlc2NyaXRlIMOgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdldFVzZXJOYW1lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfTwvc3Ryb25nPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZENyZWF0ZVdvcmtzaGVldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2Rhc2hib2FyZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRXJyZXVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDcsOpYXRpb24gZGUgbGEgcHJlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBMYSBmaWNoZSA8c3Ryb25nPiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Ryb25nPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSDDqXTDqSBwcmVzY3JpdGUgw6AgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdldFVzZXJOYW1lKHRoaXMucGF0aWVudCl9PC9zdHJvbmc+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2Rhc2hib2FyZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3LDqWF0aW9uIGRlIGxhIGZpY2hlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vZGFzaGJvYXJkLz90YWI9d3NgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFVzZXJOYW1lKHVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGYuZ2V0VXNlck5hbWUodXNlcik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuJHZzID0gdGhpcy4kdnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidnVlRGF0YVwiKS5pbm5lckhUTUwpO1xyXG5cclxuICAgICAgICB0aGlzLmRvY3RvciA9IGRhdGEuZG9jdG9yO1xyXG4gICAgICAgIHRoaXMud29ya3NoZWV0SWQgPSBkYXRhLndvcmtzaGVldElkO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZGF0YS5hY3Rpb247XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gZGF0YS5wYXRpZW50O1xyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuQ3JlYXRlV29ya3NoZWV0ID0gZGF0YS5jc3JmVG9rZW5DcmVhdGVXb3Jrc2hlZXQ7XHJcbiAgICAgICAgdGhpcy5jc3JmVG9rZW5FZGl0V29ya3NoZWV0ID0gZGF0YS5jc3JmVG9rZW5FZGl0V29ya3NoZWV0O1xyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuUmVtb3ZlRXhlcmNpc2UgPSBkYXRhLmNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy53b3Jrc2hlZXRJZCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vZ2V0L3dvcmtzaGVldC8ke3RoaXMud29ya3NoZWV0SWR9YFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09IFwiY3JlYXRpb25cIiAmJiAhdGhpcy5wYXRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LnRpdGxlID0gYENvcGllIGRlICR7dGhpcy53b3Jrc2hlZXQudGl0bGV9YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2dldC9leGVyY2lzZXMvJHt0aGlzLndvcmtzaGVldElkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VzID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4ZXJjaXNlcyA9IHRoaXMuZXhlcmNpc2VzLm1hcCgoZXhlcmNpc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5leGVyY2lzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBleGVyY2lzZS5vcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXhlcmNpc2Uub3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBvOiBleGVyY2lzZS50ZW1wbyA/IGV4ZXJjaXNlLnRlbXBvIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZDogZXhlcmNpc2UuaG9sZCA/IGV4ZXJjaXNlLmhvbGQgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25BY3RpdmU6IGV4ZXJjaXNlLm9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wb0FjdGl2ZTogZXhlcmNpc2UudGVtcG8gPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGRBY3RpdmU6IGV4ZXJjaXNlLmhvbGQgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZWRpdGlvblwiID09PSB0aGlzLmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2NoZWNrL3dvcmtzaGVldC1zZXNzaW9ucy1leGlzdC8ke3RoaXMud29ya3NoZWV0SWR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lmV29ya3NoZWV0U2Vzc2lvbnNFeGlzdCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVmlkZW9zID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAuZ2V0KGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2dldC92aWRlb3NgKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1ZpZGVvcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9zID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1ZpZGVvcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCIuLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuI3dvcmtzaGVldCB7XHJcbiAgICAucHJlc2NyaS1mb3ItcGF0aWVudC1jb250ZW50IHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAyLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJlc2NyaS1mb3ItcGF0aWVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjdyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwLjRyZW0gMC43cmVtIHJnYmEoMTQ4LCA5NiwgNzcsIDAuMDQpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMuNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTAuOHJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxOC4zcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNC43cmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNnJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YWExYjc7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXItYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51c2VyLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUxdnc7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NnZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjZ2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDY5MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3N3Z3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICYubG9hZGluZy1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMyU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnBhcnQtb2YtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZzLWlucHV0LXBhcmVudCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAudnMtaW5wdXQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dF9fbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDg5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0X19sYWJlbC0taGlkZGVuLnZzLWlucHV0X19sYWJlbC0tcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC44NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlLXZpZXcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjdyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ3dnc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM4NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTd2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDMwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjh2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MTVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY5dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzZ2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMuN3JlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudnMtaW5wdXQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXRfX2xhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMS45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxLjZyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLndvcmtzaGVldC1wYXJhbXMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuOXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAud29ya3NoZWV0LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAud29ya3NoZWV0LXBlcmlvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLndvcmtzaGVldC10aW1pbmctcGVyZGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAud29ya3NoZWV0LXRpbWluZy1wZXJ3ZWVrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYXZlcnQtc2Vzc2lvbnMtc3RhcnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE0JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuMDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDcwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuM3JlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0LWZpbHRlci1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wYXJ0LW9mLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5lcnJvci1tZXNzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgI2V4ZXJjaXNlcy1wbGF5bGlzdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0LjVyZW07XHJcblxyXG4gICAgICAgICAgICAmLm5vLW10IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi12YWxpZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDExMTE7XHJcbiAgICAgICAgYm90dG9tOiAyLjNyZW07XHJcbiAgICAgICAgcmlnaHQ6IDNyZW07XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52cy1idXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAwNXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwLjhyZW0gMS44cmVtIHJnYmEoNzUsIDYxLCA1NiwgMC41NSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAwO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZzLWJ1dHRvbl9fbG9hZGluZyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleGVyY2lzZXMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhlcmNpc2UgbG9hZGluZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgdGh1bWJuYWlsLXdyYXBwZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGgyIHctNDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJpZXMtcmVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgc2VyaWVzIHctMjVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHJlcHMgdy0xNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IG9wdGlvbiB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHRlbXBvIHctMTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgaG9sZCB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSB0aXRsZSB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGlucHV0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhlcmNpc2UgbG9hZGluZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgdGh1bWJuYWlsLXdyYXBwZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGgyIHctMzVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJpZXMtcmVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgc2VyaWVzIHctMTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHJlcHMgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IG9wdGlvbiB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHRlbXBvIHctMTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgaG9sZCB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSB0aXRsZSB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGlucHV0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhlcmNpc2UgbG9hZGluZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgdGh1bWJuYWlsLXdyYXBwZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGgyIHctNDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJpZXMtcmVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgc2VyaWVzIHctMTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHJlcHMgdy0xNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IG9wdGlvbiB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHRlbXBvIHctMTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgaG9sZCB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSB0aXRsZSB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGlucHV0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihleGVyY2lzZSwgaSkgaW4gZ2V0RXhlcmNpc2VzXCJcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGVyY2lzZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1ibmFpbC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIid2b2lyJyAhPT0gYWN0aW9uXCIgY2xhc3M9XCJidG5zLWFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImV4ZXJjaXNlLnBvc2l0aW9uICE9IDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ1cFBvc2l0aW9uKGV4ZXJjaXNlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc29ydC11cFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UucG9zaXRpb24gIT0gZ2V0RXhlcmNpc2VzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkb3duUG9zaXRpb24oZXhlcmNpc2UpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zb3J0LWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tcGxheWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b24gQGNsaWNrPVwib3BlblZpZGVvUGxheWVyKGV4ZXJjaXNlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBWb2lyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRodW1ibmFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke2V4ZXJjaXNlLnZpZGVvLnRodW1ibmFpbFVybH0nKWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1oMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGV4ZXJjaXNlLnZpZGVvLm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIndm9pcicgIT09IGFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZW1vdmUtZXhlcmNpc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlbW92ZUV4ZXJjaXNlKGV4ZXJjaXNlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIid2b2lyJyAhPT0gYWN0aW9uXCIgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzLXJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LXNlcmllcyBpY29uLTE4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleGVyY2lzZS5udW1iZXJPZlNlcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIk5iIGRlIHPDqXJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAYmx1cj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrSWZWYWx1ZUlzRW1wdHlPck51bGwoZXhlcmNpc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1yZXBzIGljb24tMTlcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJOYiBkZSByw6lww6l0aXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lmVmFsdWVJc0VtcHR5T3JOdWxsKGV4ZXJjaXNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIid2b2lyJyAhPT0gYWN0aW9uXCIgY2xhc3M9XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJvcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBleGVyY2lzZS5vcHRpb25BY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbjogIWV4ZXJjaXNlLnZpZGVvLm9wdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk9wdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtc3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleGVyY2lzZS5vcHRpb25BY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm9wdGlvbkFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3B0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImtpdi1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWV4ZXJjaXNlLm9wdGlvbkFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2Uub3B0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LW9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIob3B0aW9uLCBpKSBpbiBleGVyY2lzZS52aWRlb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIm9wdGlvbi5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJvcHRpb24ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGhpZGRlbjogZXhlcmNpc2Uub3B0aW9uIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTw6lsZWN0aW9ubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hpdGUtYmFja2dyb3VuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJob2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogZXhlcmNpc2UuaG9sZEFjdGl2ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UZW5pcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtc3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleGVyY2lzZS5ob2xkQWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5ob2xkQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob2xkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleGVyY2lzZS5ob2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJTZWNvbmRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGRpc2FibGVkOiAhZXhlcmNpc2UuaG9sZEFjdGl2ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGVtcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBleGVyY2lzZS50ZW1wb0FjdGl2ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UZW1wbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtc3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleGVyY2lzZS50ZW1wb0FjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UudGVtcG9BY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RlbXBvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleGVyY2lzZS50ZW1wb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiKGV4OiAyIC0gMCAtIDEgLSAwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZDogIWV4ZXJjaXNlLnRlbXBvQWN0aXZlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy10b29sdGlwIGNsYXNzPVwia2l2LWhlbHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWhlbHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZXhlcmNpc2UudGVtcG9BY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcXVlc3Rpb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI3Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZSB0ZW1wbywgYydlc3QgdG91dCBzaW1wbGVtZW50IGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeXRobWUgZGUgbGEgcsOpcMOpdGl0aW9uLCBpbmRpcXVhbnQgcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZSBtb3V2ZW1lbnQgZG9pdCDDqnRyZSBsZW50LCBleHBsb3NpZiBvdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHLDtGzDqS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLXRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIid2b2lyJyA9PT0gYWN0aW9uXCIgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzLXJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LXNlcmllcyBpY29uLTE4XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3Bhbj57eyBleGVyY2lzZS5udW1iZXJPZlNlcmllcyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc8Opcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtcmVwcyBpY29uLTE5XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3Bhbj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcsOpcMOpdGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJleGVyY2lzZS5vcHRpb25cIiBjbGFzcz1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnMgOiA8c3Bhbj57eyBleGVyY2lzZS5vcHRpb24gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImV4ZXJjaXNlLmhvbGRcIiBjbGFzcz1cImhvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5pciA6IDxzcGFuPnt7IGV4ZXJjaXNlLmhvbGQgfX1zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJleGVyY2lzZS50ZW1wb1wiIGNsYXNzPVwidGVtcG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW1wbyA6IDxzcGFuPnt7IGV4ZXJjaXNlLnRlbXBvIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy10b29sdGlwIGNsYXNzPVwia2l2LWhlbHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24taGVscFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcXVlc3Rpb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI3Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZSB0ZW1wbywgYydlc3QgdG91dCBzaW1wbGVtZW50IGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeXRobWUgZGUgbGEgcsOpcMOpdGl0aW9uLCBpbmRpcXVhbnQgcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZSBtb3V2ZW1lbnQgZG9pdCDDqnRyZSBsZW50LCBleHBsb3NpZiBvdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHLDtGzDqS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLXRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdmlkZW9zXCIgdi1pZj1cIid2b2lyJyAhPT0gYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWFkZC12aWRlb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uIEBjbGljaz1cIm9wZW5WaWRlb0xpYnJhcnkoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhYiBmYS15b3V0dWJlXCI+PC9pPiBBam91dGVyIGRlcyB2aWTDqW9zXHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgPFZpZGVvUGxheWVyXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwidmlkZW9QbGF5ZXJUb2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgOmRvY3Rvcj1cImRvY3RvclwiXHJcbiAgICAgICAgICAgICAgICA6d29ya3NoZWV0PVwiZ2V0V29ya3NoZWV0XCJcclxuICAgICAgICAgICAgICAgIDpleGVyY2lzZT1cImV4ZXJjaXNlRm9yUGxheWluZ1wiXHJcbiAgICAgICAgICAgICAgICA6ZXhlcmNpc2VzPVwiZ2V0RXhlcmNpc2VzXCJcclxuICAgICAgICAgICAgICAgIDpsYXN0RXhlcmNpc2U9XCJnZXRUaGVMYXN0RXhlcmNpc2VcIlxyXG4gICAgICAgICAgICAgICAgQGNsb3NlVmlkZW9QbGF5ZXI9XCJjbG9zZVZpZGVvUGxheWVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgPFZpZGVvTGlicmFyeVxyXG4gICAgICAgICAgICAgICAgdi1pZj1cInZpZGVvTGlicmFyeVRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICA6ZG9jdG9yPVwiZG9jdG9yXCJcclxuICAgICAgICAgICAgICAgIDpsb2FkaW5nVmlkZW9zPVwibG9hZGluZ1ZpZGVvc1wiXHJcbiAgICAgICAgICAgICAgICA6dmlkZW9zPVwidmlkZW9zXCJcclxuICAgICAgICAgICAgICAgIEBjbG9zZVZpZGVvTGlicmFyeT1cImNsb3NlVmlkZW9MaWJyYXJ5XCJcclxuICAgICAgICAgICAgICAgIEB2aWRlb3Mtc2VsZWN0aW9uPVwiYWRkVmlkZW9zU2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgPHZzLWRpYWxvZyB2LW1vZGVsPVwibW9kYWxDb25maXJtUmVtb3ZlRXhlcmNpc2VcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbC1jb25maXJtLXRleHRcIj5Db25maXJtZXIgbGEgc3VwcHJlc3Npb24gZGU8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29uZmlybS1kZXRhaWwgcmVtb3ZlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb25maXJtLWljb24gcmVtb3ZlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJlbW92ZUV4ZXJjaXNlRGV0YWlscy52aWRlby5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb25maXJtLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwibW9kYWxDb25maXJtUmVtb3ZlRXhlcmNpc2UgPSBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQW5udWxlclxyXG4gICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidmFsaWRSZW1vdmVFeGVyY2lzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlybWVyXHJcbiAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC92cy1kaWFsb2c+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBWaWRlb1BsYXllciBmcm9tIFwiLi9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb1BsYXllci52dWVcIjtcclxuaW1wb3J0IFZpZGVvTGlicmFyeSBmcm9tIFwiLi9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlXCI7XHJcbmltcG9ydCBmIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFZpZGVvUGxheWVyLFxyXG4gICAgICAgIFZpZGVvTGlicmFyeSxcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGRvY3RvcjogT2JqZWN0LFxyXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXHJcbiAgICAgICAgd29ya3NoZWV0OiBPYmplY3QsXHJcbiAgICAgICAgZXhlcmNpc2VzOiBBcnJheSxcclxuICAgICAgICBhY3Rpb246IFN0cmluZyxcclxuICAgICAgICBjc3JmVG9rZW5SZW1vdmVFeGVyY2lzZTogU3RyaW5nLFxyXG4gICAgICAgIGxvYWRpbmdWaWRlb3M6IEJvb2xlYW4sXHJcbiAgICAgICAgdmlkZW9zOiBBcnJheSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZpZGVvUGxheWVyVG9nZ2xlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlkZW9MaWJyYXJ5VG9nZ2xlOiBmYWxzZSxcclxuICAgICAgICAgICAgYWN0aXZlT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uOiBbXSxcclxuICAgICAgICAgICAgICAgIHRlbXBvOiBbXSxcclxuICAgICAgICAgICAgICAgIGhvbGQ6IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVyY2lzZUZvclBsYXlpbmc6IG51bGwsXHJcbiAgICAgICAgICAgIG1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVtb3ZlRXhlcmNpc2VEZXRhaWxzOiB7IHZpZGVvOiB7fSB9LFxyXG4gICAgICAgICAgICBidG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGdldFdvcmtzaGVldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud29ya3NoZWV0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0RXhlcmNpc2VzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5zb3J0QnlQb3NpdGlvbih0aGlzLmV4ZXJjaXNlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRUaGVMYXN0RXhlcmNpc2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEV4ZXJjaXNlc1t0aGlzLmdldEV4ZXJjaXNlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjaGVja1ZhbHVlKGJvb2wsIGV4ZXJjaXNlLCB0eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChmYWxzZSA9PT0gYm9vbCkge1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2VbdHlwZV0gPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRWaWRlb3NTZWxlY3Rpb24odmlkZW9zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzID0gdGhpcy5nZXRFeGVyY2lzZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB2aWRlb3MuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhlcmNpc2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGlzICsgaSxcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlJlcGV0aXRpb25zOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNlcmllczogMyxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcG86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9sZDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25BY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBvQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBob2xkQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB2aWRlbzogdixcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXMucHVzaChleGVyY2lzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tJZlZhbHVlSXNFbXB0eU9yTnVsbChleGVyY2lzZSkge1xyXG4gICAgICAgICAgICBpZiAoZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXMgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBleGVyY2lzZS5udW1iZXJPZlNlcmllcyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9ucyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIFwiXCIgPT09IGV4ZXJjaXNlLm51bWJlck9mU2VyaWVzIHx8XHJcbiAgICAgICAgICAgICAgICBudWxsID09PSBleGVyY2lzZS5udW1iZXJPZlNlcmllc1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm51bWJlck9mU2VyaWVzID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiID09PSBleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zIHx8XHJcbiAgICAgICAgICAgICAgICBudWxsID09PSBleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9ucyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwUG9zaXRpb24oZXhlcmNpc2UpIHtcclxuICAgICAgICAgICAgaWYgKGV4ZXJjaXNlLnBvc2l0aW9uID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkUG9zaXRpb24gPSBleGVyY2lzZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gZXhlcmNpc2UucG9zaXRpb24gLSAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkV4ZXJjaXNlID0gdGhpcy5nZXRFeGVyY2lzZXMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAoZSkgPT4gZS5wb3NpdGlvbiA9PT0gbmV3UG9zaXRpb25cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2UucG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJldkV4ZXJjaXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkV4ZXJjaXNlLnBvc2l0aW9uID0gb2xkUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRvd25Qb3NpdGlvbihleGVyY2lzZSkge1xyXG4gICAgICAgICAgICBpZiAoZXhlcmNpc2UucG9zaXRpb24gPCB0aGlzLmdldEV4ZXJjaXNlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBvc2l0aW9uID0gZXhlcmNpc2UucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGV4ZXJjaXNlLnBvc2l0aW9uICsgMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRFeGVyY2lzZSA9IHRoaXMuZ2V0RXhlcmNpc2VzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IGUucG9zaXRpb24gPT09IG5ld1Bvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRFeGVyY2lzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRFeGVyY2lzZS5wb3NpdGlvbiA9IG9sZFBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVFeGVyY2lzZShleGVyY2lzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV4ZXJjaXNlRGV0YWlscyA9IGV4ZXJjaXNlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlID1cclxuICAgICAgICAgICAgICAgICF0aGlzLm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkUmVtb3ZlRXhlcmNpc2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2UgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlbW92ZUV4ZXJjaXNlRGV0YWlscy5pZCB8fCBcImNyZWF0aW9uXCIgPT09IHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZXJjaXNlcy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXMuaW5kZXhPZih0aGlzLnJlbW92ZUV4ZXJjaXNlRGV0YWlscyksXHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmLnNvcnRCeVBvc2l0aW9uKHRoaXMuZXhlcmNpc2VzKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGUsIGkpID0+IChlLnBvc2l0aW9uID0gaSlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbmZpcm1SZW1vdmVFeGVyY2lzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L3JlbW92ZS9leGVyY2lzZWAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0aGlzLmNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXRJZDogdGhpcy5nZXRXb3Jrc2hlZXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlSWQ6IHRoaXMucmVtb3ZlRXhlcmNpc2VEZXRhaWxzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXMuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXMuaW5kZXhPZih0aGlzLnJlbW92ZUV4ZXJjaXNlRGV0YWlscyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLnNvcnRCeVBvc2l0aW9uKHRoaXMuZXhlcmNpc2VzKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgaSkgPT4gKGUucG9zaXRpb24gPSBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VwcHJlc3Npb24gZGUgbCdleGVyY2ljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wZW5WaWRlb1BsYXllcihleGVyY2lzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZXJjaXNlRm9yUGxheWluZyA9IGV4ZXJjaXNlO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyVG9nZ2xlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsYmFyXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3BlblZpZGVvTGlicmFyeSgpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0xpYnJhcnlUb2dnbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJuby1zY3JvbGxiYXJcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZVZpZGVvUGxheWVyKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyVG9nZ2xlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbGJhclwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlVmlkZW9MaWJyYXJ5KCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvTGlicmFyeVRvZ2dsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxiYXJcIik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmV4ZXJjaXNlcy1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC52cy1pbnB1dC1wYXJlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAudnMtaW5wdXQtY29udGVudCB7XHJcbiAgICAgICAgICAgIC52cy1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52cy1pbnB1dF9fbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4OSU7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52cy1pbnB1dF9fbGFiZWwtLWhpZGRlbi52cy1pbnB1dF9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC44NXJlbTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXhlcmNpc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmxvYWRpbmctYmxvY2sge1xyXG4gICAgICAgICAgICAubG9hZGluZy1ncmF5IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRodW1ibmFpbC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgLmgyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAuc2VyaWVzLXJlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VyaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIC50ZW1wbyxcclxuICAgICAgICAgICAgICAgICAgICAuaG9sZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb21tZW50YXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGh1bWJuYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUydnc7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgLmJ0bnMtYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAudnMtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDByZW0gMS41cmVtIHJnYmEoMTczLCAxMDAsIDc0LCAwLjg4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5mYS1zb3J0LXVwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmZhLXNvcnQtZG93biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXZ3O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjNyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2N3JlbTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM4cmVtO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2N3JlbTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM4cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLXBsYXlsaXN0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAudnMtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHJlbSAxLjVyZW0gcmdiYSgxNzMsIDEwMCwgNzQsIDAuODgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIgfiAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDNzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmlucHV0LWgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE4dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTA0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjJ2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyN3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEzNzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDN2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZW1vdmUtZXhlcmNpc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZjY2I5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDZjY2I5O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyYXktZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjhyZW0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjhyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VyaWVzLXJlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXJpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmVwcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuN3JlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktZGFyaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5vcHRpb24uaGlkZGVuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5raXYtc2VsZWN0LmRpc2FibGVkIC52cy1zZWxlY3QgLnZzLWljb24tYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1zZWxlY3QgLnZzLXNlbGVjdC1jb250ZW50IC52cy1zZWxlY3RfX2lucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgIC5raXYtc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1zZWxlY3QtY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtc2VsZWN0LmFjdGl2ZU9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLXNlbGVjdF9faW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmU1NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1zZWxlY3QgLnZzLXNlbGVjdC1jb250ZW50LmZpbGxlZCAudnMtc2VsZWN0X19pbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICAua2l2LXNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtc2VsZWN0LWNvbnRlbnQuZmlsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1zZWxlY3QuYWN0aXZlT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtc2VsZWN0X19pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAua2l2LXNlbGVjdCAudnMtc2VsZWN0LWNvbnRlbnQgLnZzLXNlbGVjdF9fbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I3YWI5NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAua2l2LXNlbGVjdCAudnMtc2VsZWN0X19pbnB1dDpob3ZlciB+IC52cy1zZWxlY3RfX2xhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIC52cy1zZWxlY3QuYWN0aXZlT3B0aW9ucyAudnMtc2VsZWN0X19sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudnMtc2VsZWN0X19vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAua2l2LXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5zZWxlY3Qtb3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjUzcmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmU1NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICNlN2RmY2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzLXZpc2libGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjZTdkZmNkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjRyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5oaWRkZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aGl0ZS1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0LXBhcmVudCAudnMtaW5wdXQtY29udGVudCAudnMtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQtcGFyZW50IC52cy1pbnB1dC1jb250ZW50IC52cy1pbnB1dF9fbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQtcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dC1jb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dDpmb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB+IC52cy1pbnB1dF9fbGFiZWwtLXBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dC1wYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0LWNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0X19sYWJlbC0taGlkZGVuLnZzLWlucHV0X19sYWJlbC0tcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC42NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dC1wYXJlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1zZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPiA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC52cy1zd2l0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkNWMyZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLXN3aXRjaF9faW5wdXQ6Y2hlY2tlZCB+IC52cy1zd2l0Y2hfX2NpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxOXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLXN3aXRjaF9fY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAua2l2LWhlbHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMS4ycmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmljb24taGVscCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlOWRmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkMWMwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkOGQxYzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWZlOWRmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgLnRlbXBvIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5raXYtaGVscCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmljb24taGVscCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZjZmJlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQxYzA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Q4ZDFjMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkNmNmYmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWRkLXZpZGVvcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW07XHJcblxyXG4gICAgICAgIC5pY29uLWFkZC12aWRlb3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHRvdXJuZXNvbCwgMC4yNSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2FuZ3VpbmU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAuMDVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1hZGQtdmlkZW9zIHtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNC41cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NHJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0bi1hZGQtdmlkZW9zIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInZpZGVvLWxpYnJhcnlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInZpZGVvLWxpYnJhcnlcIiBjbGFzcz1cImtpdi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidnMtZGlhbG9nX19jbG9zZSBidG4tY2xvc2UtbGlicmFyeS1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VWaWRlb0xpYnJhcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidnMtaWNvbi1jbG9zZSB2cy1pY29uLWhvdmVyLXhcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICBWaWTDqW90aMOocXVlXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFsb2FkaW5nVmlkZW9zXCIgY2xhc3M9XCJjb3VudC12aWRlb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2ggfHwgc2VsZWN0ZWRUYWdzLmxlbmd0aCB8fCBzZWxlY3RlZFBvQlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYXMgZmEtZmlsdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+PC90cmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID57eyBnZXRUb3RhbFZpZGVvc0ZpbHRlcmVkIH19IHZpZMOpbzxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0VG90YWxWaWRlb3NGaWx0ZXJlZCA+IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPnM8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInNlYXJjaCB8fCBzZWxlY3RlZFRhZ3MubGVuZ3RoIHx8IHNlbGVjdGVkUG9CXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdHLDqWU8c3BhbiB2LWlmPVwiZ2V0VG90YWxWaWRlb3NGaWx0ZXJlZCA+IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5zPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW1hcnktYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInBhZ2UgPSAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiRmlsdHJlciBwYXIgbm9tIGRlIHZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2l2LXNlbGVjdCB0YWdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRUYWdzRnJvbUFsbFZpZGVvcy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3RzLUNsw6lzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInBhZ2UgPSAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInNlbGVjdFRhZygpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLW9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHRhZywgaSkgaW4gZ2V0VGFnc0Zyb21BbGxWaWRlb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJ0YWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdGFnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibm90RGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuIG1vdC1jbMOpIG5lIGNvcnJlc3BvbmQuPC90ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJsb2FkaW5nIHNlbGVjdC10YWdzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFBhcnRPZkJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnBhcnRPZkJvZHk9XCJzZWxlY3RlZFBvQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBwYXJ0T2ZCb2R5U2VsZWN0ZWQ9XCJmaWx0ZXJCeVBhcnRPZkJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAcGFydE9mQm9keVJlc2V0PVwicmVzZXRTZWxlY3RlZFBvQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWxpYnJhcnktY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ2aWRlb3MtbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhbG9hZGluZ1ZpZGVvcyAmJiBnZXRWaWRlb3MubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHZpZGVvLCBpKSBpbiBnZXRWaWRlb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZWxlY3RlZC12aWRlbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmlkZW9zLmluY2x1ZGVzKHZpZGVvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ2aWRlby1saW5rXCIgQGNsaWNrPVwidmlld1ZpZGVvKHZpZGVvKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwidmlkZW8udGh1bWJuYWlsVXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInZpZ25ldHRlIGRlIGxhIHZpZMOpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUxMnB0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIC03NyA1MTIuMDAyMTMgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTEycHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTUwMS40NTMxMjUgNTYuMDkzNzVjLTUuOTAyMzQ0LTIxLjkzMzU5NC0yMy4xOTUzMTMtMzkuMjIyNjU2LTQ1LjEyNS00NS4xMjg5MDYtNDAuMDY2NDA2LTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NHMtMTYwLjI2MTcxOSAwLTIwMC4zMjgxMjUgMTAuNTQ2ODc1Yy0yMS41MDc4MTMgNS45MDIzNDQtMzkuMjIyNjU3IDIzLjYxNzE4Ny00NS4xMjUgNDUuNTQ2ODc1LTEwLjU0Mjk2OSA0MC4wNjI1LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4czAgODMuNTAzOTA2IDEwLjU0Mjk2OSAxMjMuMTQ4NDM3YzUuOTA2MjUgMjEuOTI5Njg3IDIzLjE5NTMxMiAzOS4yMjI2NTYgNDUuMTI4OTA2IDQ1LjEyODkwNiA0MC40ODQzNzUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0czE2MC4yNjE3MTkgMCAyMDAuMzI4MTI1LTEwLjU0Njg3NWMyMS45MzM1OTQtNS45MDIzNDQgMzkuMjIyNjU2LTIzLjE5NTMxMiA0NS4xMjg5MDYtNDUuMTI1IDEwLjU0Mjk2OS00MC4wNjY0MDYgMTAuNTQyOTY5LTEyMy4xNDg0MzggMTAuNTQyOTY5LTEyMy4xNDg0MzhzLjQyMTg3NS04My41MDc4MTItMTAuNTQ2ODc1LTEyMy41NzAzMTJ6bTAgMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXN0MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0yMDQuOTY4NzUgMjU2IDEzMy4yNjk1MzEtNzYuNzU3ODEyLTEzMy4yNjk1MzEtNzYuNzU3ODEzem0wIDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ2aWRlby5uYW1lLmxlbmd0aCA8IDQ1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2aWRlby5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ubmFtZS5zdWJzdHJpbmcoMCwgNDUpICsgXCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYWRkVmlkZW8odmlkZW8pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tYWRkLXZpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhc2VsZWN0ZWRWaWRlb3MuaW5jbHVkZXModmlkZW8pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwbHVzLWljb24gc2l6ZT1cIjJ4XCI+PC9wbHVzLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlVmlkZW8odmlkZW8pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tcmVtb3ZlLXZpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNoZWNrLWljb24gc2l6ZT1cIjJ4XCI+PC9jaGVjay1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3QtZm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbG9hZGluZ1ZpZGVvcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWdldFZpZGVvcy5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzZWxlY3RlZFRhZ3MubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc2VsZWN0ZWRQb0JcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEteW91dHViZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPklsIG4neSBhIGF1Y3VuZSB2aWTDqW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90LWZvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmdWaWRlb3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFnZXRWaWRlb3MubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VhcmNoIHx8IHNlbGVjdGVkVGFncy5sZW5ndGggfHwgc2VsZWN0ZWRQb0IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFiIGZhLXlvdXR1YmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5BdWN1bmUgdmlkw6lvIG4nYSDDqXTDqSB0cm91dsOpZSBhdmVjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cIjxzdHJvbmc+e3sgc2VhcmNoIH19PC9zdHJvbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlwiPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWFyY2ggJiYgc2VsZWN0ZWRUYWdzLmxlbmd0aCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWFyY2ggJiYgc2VsZWN0ZWRQb0IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInNlbGVjdGVkVGFncy5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHRhZywgaSkgaW4gc2VsZWN0ZWRUYWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmYtdGFnIHRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dCB3c253XCI+e3sgdGFnIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZWxlY3RlZFBvQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmYtdGFnIHBhcnQtb2YtYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgd3Nud1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VsZWN0ZWRQb0IubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcgdmlkZW9zLWxpc3RcIiB2LWlmPVwibG9hZGluZ1ZpZGVvc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvblwiIHYtaWY9XCJ2aWRlb3MubGVuZ3RoID4gbWF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLXBhZ2luYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExlbmd0aChnZXRTZWFyY2godmlkZW9zLCBzZWFyY2gpLCBtYXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtc2VsZWN0IHYtbW9kZWw9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJudW1iZXJQYWdlIGluIGdldExlbmd0aChnZXRTZWFyY2godmlkZW9zLCBzZWFyY2gpLCBtYXgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwibnVtYmVyUGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwibnVtYmVyUGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwibnVtYmVyUGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG51bWJlclBhZ2UgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZzLXBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tdmFsaWQtc2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZFZpZGVvc1NlbGVjdGlvbigpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nVmFsaWRWaWRlb3NTZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogYnRuTG9hZGluZ1ZhbGlkVmlkZW9zU2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5WYWxpZGVyIGxhIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dnMtZGlhbG9nIGNsYXNzPVwidmlldy12aWRlb1wiIHYtbW9kZWw9XCJtb2RhbFZpZXdWaWRlb1wiPlxyXG4gICAgICAgICAgICA8eW91dHViZVxyXG4gICAgICAgICAgICAgICAgOnBsYXllci12YXJzPVwicGxheWVyVmFyc1wiXHJcbiAgICAgICAgICAgICAgICA6dmlkZW8taWQ9XCJzZWxlY3RlZFZpZXdWaWRlby55b3V0dWJlSWRcIlxyXG4gICAgICAgICAgICA+PC95b3V0dWJlPlxyXG4gICAgICAgIDwvdnMtZGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgZiBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IHsgUGx1c0ljb24sIENoZWNrSWNvbiwgWEljb24gfSBmcm9tIFwidnVlLWZlYXRoZXItaWNvbnNcIjtcclxuaW1wb3J0IFNlbGVjdFBhcnRPZkJvZHkgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0UGFydE9mQm9keS52dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZG9jdG9yOiBPYmplY3QsXHJcbiAgICAgICAgbG9hZGluZ1ZpZGVvczogQm9vbGVhbixcclxuICAgICAgICB2aWRlb3M6IEFycmF5LFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBQbHVzSWNvbixcclxuICAgICAgICBDaGVja0ljb24sXHJcbiAgICAgICAgWEljb24sXHJcbiAgICAgICAgU2VsZWN0UGFydE9mQm9keSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlYXJjaDogXCJcIixcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgbWF4OiAxMixcclxuICAgICAgICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgICAgICAgICAgcmVsOiAwLFxyXG4gICAgICAgICAgICAgICAgc2hvd2luZm86IDAsXHJcbiAgICAgICAgICAgICAgICBlY3ZlcjogMixcclxuICAgICAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aW1lb3V0OiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRUYWdzOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRQb0I6IG51bGwsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVmlkZW9zOiBbXSxcclxuICAgICAgICAgICAgbW9kYWxBZGRWaWRlbzogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vZGFsVmlld1ZpZGVvOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRWaWV3VmlkZW86IGZhbHNlLFxyXG4gICAgICAgICAgICBidG5Mb2FkaW5nVmFsaWRWaWRlb3NTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBpbnB1dENoaXBzOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRWaWRlb3MoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNlYXJjaCh0aGlzLnZpZGVvcywgdGhpcy5zZWFyY2gpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldExlbmd0aEZvclBhZ2luYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExlbmd0aChcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2VhcmNoKHRoaXMudmlkZW9zLCB0aGlzLnNlYXJjaCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VG90YWxWaWRlb3NGaWx0ZXJlZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2VhcmNoKHRoaXMudmlkZW9zLCB0aGlzLnNlYXJjaCkubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGFnc0Zyb21BbGxWaWRlb3MoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFRhZ3NGcm9tQWxsVmlkZW9zKHRoaXMudmlkZW9zKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzZWxlY3RUYWcoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pbnB1dENoaXBzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Q2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLnZzLXNlbGVjdF9fY2hpcHNfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRDaGlwcy5mb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0Q2hpcHMuYmx1cigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlsdGVyQnlQYXJ0T2ZCb2R5KHBhcnRPZkJvZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFBvQiA9IHBhcnRPZkJvZHk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNldFNlbGVjdGVkUG9CKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUG9CID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpZXdWaWRlbyh2aWRlbykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlld1ZpZGVvID0gdmlkZW87XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMubW9kYWxWaWV3VmlkZW8gPSAhdGhpcy5tb2RhbFZpZXdWaWRlbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRWaWRlbyh2aWRlbykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlkZW9zLnB1c2godmlkZW8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlVmlkZW8odmlkZW8pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZpZGVvcy5zcGxpY2UodGhpcy5zZWxlY3RlZFZpZGVvcy5pbmRleE9mKHZpZGVvKSwgMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZFZpZGVvc1NlbGVjdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRWaWRlb3NTZWxlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwidmlkZW9zLXNlbGVjdGlvblwiLCB0aGlzLnNlbGVjdGVkVmlkZW9zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VWaWRlb0xpYnJhcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRWaWRlb3NTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZVZpZGVvTGlicmFyeSgpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZpZGVvcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFBvQiA9IG51bGw7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiY2xvc2VWaWRlb0xpYnJhcnlcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQYWdlKGRhdGEsIHBhZ2UsIG1heEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFBhZ2UoZGF0YSwgcGFnZSwgbWF4SXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TGVuZ3RoKGRhdGEsIG1heEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldExlbmd0aChkYXRhLCBtYXhJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTZWFyY2goZGF0YSwgZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGxldCB2aWRlb3NMaXN0RmlsdGVyZWQgPSBmLmdldFNlYXJjaChkYXRhLCBmaWx0ZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW9zTGlzdEZpbHRlcmVkID0gdmlkZW9zTGlzdEZpbHRlcmVkLmZpbHRlcigodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYudGFncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudGFncy5mb3JFYWNoKCh2dGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZ0YWcubmFtZSA9PT0gdGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXJlc3VsdHMuaW5jbHVkZXMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUG9CKSB7XHJcbiAgICAgICAgICAgICAgICB2aWRlb3NMaXN0RmlsdGVyZWQgPSB2aWRlb3NMaXN0RmlsdGVyZWQuZmlsdGVyKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodi5wYXJ0T2ZCb2R5cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnBhcnRPZkJvZHlzLmZvckVhY2goKHBhcnRPZkJvZHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0T2ZCb2R5LmlkID09PSB0aGlzLnNlbGVjdGVkUG9CLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2aWRlb3NMaXN0RmlsdGVyZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNpemVXaW5kb3dFdmVudEhhbmRsZXIoZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNDQ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXggPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDQ0OSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA2NDkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heCA9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA2NDkgJiYgd2luZG93LmlubmVyV2lkdGggPD0gODQ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXggPSA5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gODQ5ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDE2MTgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heCA9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxNjE4ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDE2NTkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heCA9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTY1OSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMjUwKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemVXaW5kb3dFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2l6ZVdpbmRvd0V2ZW50SGFuZGxlcigpO1xyXG4gICAgfSxcclxuICAgIGRlc3Ryb3llZCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZVdpbmRvd0V2ZW50SGFuZGxlcik7XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuLnZzLWRpYWxvZy1jb250ZW50LnZpZXctdmlkZW8ge1xyXG4gICAgLnZzLWRpYWxvZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDJyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcclxuXHJcbiAgICAgICAgLnZzLWRpYWxvZ19fY29udGVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTR2dztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzgycHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjcycHgpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTV2dztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnZpZGVvLWxpYnJhcnkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTExMTE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcblxyXG4gICAgaDIgc3Bhbi5jb3VudC12aWRlb3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjdyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI4YjY4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0wLjJyZW07XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tY2xvc2UtbGlicmFyeS1zbSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNXJlbSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzNCwgNDYsIDg0LCAwLjgpO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByaW1hcnktYWN0aW9ucyB7XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmtpdi1zZWxlY3QudGFncyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgICAubG9hZGluZy5zZWxlY3QtdGFncyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNC4zcmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdC1maWx0ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIC5sb2FkaW5nLXBvYiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQuMnJlbTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBhcnRvZmJvZHktc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuMzNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjE1cmVtIDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLjJyZW0gc29saWQgI2ZhZjZlZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBhcnQtb2YtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyYXktbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuMTVyZW0gMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMy40cmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLjJyZW0gc29saWQgI2ZhZjZlZjtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQuMnJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiN2JkYzI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQuYi1yLWItemVybyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW0gMC40cmVtIDAgMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFycm93LXRvZ2dsZS1ib3gge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICByaWdodDogMHJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBpLnZzLWljb24tYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMC44NXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlbGVjdC1ib3gge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0LjNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAua2l2LXNlbGVjdC50YWdzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjdyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWxlY3QtZmlsdGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA2JTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDd2aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLWhlaWdodDogODQwcHgpIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJlMzg1OGExO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3ZpZGVvLWxpYnJhcnkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDk5cmVtO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE2MTlweCkge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNjYwcHgpIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTM5cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRhZy1jaGlwIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAwLjNyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmlkZW8tbGlicmFyeS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAudmlkZW9zLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjhyZW0gIzFiM2E2OTUyIGluc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwIDAgMy45cmVtICMxYjNhNjkyYiBpbnNldDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjljN2RhODU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW0gMC40ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkgYW5kIChtaW4taGVpZ2h0OiAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIGFuZCAobWluLWhlaWdodDogNzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2JjYzVkNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOWJhNGIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5sb2FkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmFmYWZhIDglLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2YxZjFmMSAzOCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmFmYWZhIDU0JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCA2NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNnZ3IDIuNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4xNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS4xdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxLjIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjd2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjZ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNjE5cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTY2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnNlbGVjdGVkLXZpZGVvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjdyZW0gJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlby10aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZzLXRhYmxlX190ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4zZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM3dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM3dnc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTl2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE5dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxOXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTMuNnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTMuNnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTMuNnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOS45dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM0JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3Rlc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICM4MDgwODA3MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjdGVzdDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmZmZmZmZmMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjdGVzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmZjU5MTc2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN0ZXN0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmZmZmZmZmMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlby1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudmlkZW8tZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW8tbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1hZGQtdmlkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7IC8vIGJvcmRlcjogMnB4IHNvbGlkICNmZmIzNGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC4xNXJlbSAwLjRyZW0gcmdiKDEwMiAxMTMgMTQzIC8gNDAlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1idXR0b25fX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBpbml0aWFsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1yZW1vdmUtdmlkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC4zcmVtIDAuNXJlbSByZ2IoMTAyIDExMyAxNDMgLyAzMSUpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtYnV0dG9uX19jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi12YWxpZC1zZWxlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTlyZW07XHJcblxyXG4gICAgICAgIC5uZi10YWcge1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMnJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHJlbSAwLjhyZW0gcmdiYSgxMzcsIDEzNywgMTM3LCAwLjIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC42cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjQ1cmVtO1xyXG4gICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcblxyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYudGFnIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnBhcnQtb2YtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1wbGF5ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWNsb3NlLXBsYXllclwiIEBjbGljaz1cImNsb3NlVmlkZW9QbGF5ZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYteCBpY29uLTIxXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tZnJhbWVcIiBrZXk9XCJ2aWRlb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx5b3V0dWJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwbGF5ZXItdmFycz1cInBsYXllclZhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmlkZW8taWQ9XCJnZXRFeGVyY2lzZS52aWRlby55b3V0dWJlSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZW5kZWQ9XCJ2aWRlb0VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwveW91dHViZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1iYXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGVyY2lzZS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGVyY2lzZS1jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhlcmNpY2Uge3sgZ2V0RXhlcmNpc2UucG9zaXRpb24gKyAxIH19L3t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RXhlcmNpc2VzID8gZ2V0RXhlcmNpc2VzLmxlbmd0aCA6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpcmV0XCI+LTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldEV4ZXJjaXNlLnZpZGVvLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlLXNlcmllcy1yZXBzLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmllcy1yZXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtc2VyaWVzIGljb24tMThcIj48L2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+e3sgZ2V0RXhlcmNpc2UubnVtYmVyT2ZTZXJpZXMgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc8Opcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LXJlcHMgaWNvbi0xOVwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3Bhbj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRFeGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcsOpcMOpdGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImdldEV4ZXJjaXNlLm9wdGlvblwiIGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3B0aW9ucyA6IDxzcGFuPnt7IGdldEV4ZXJjaXNlLm9wdGlvbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZ2V0RXhlcmNpc2UuaG9sZFwiIGNsYXNzPVwiaG9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbmlyIDogPHNwYW4+e3sgZ2V0RXhlcmNpc2UuaG9sZCB9fXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImdldEV4ZXJjaXNlLnRlbXBvXCIgY2xhc3M9XCJ0ZW1wb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbXBvIDogPHNwYW4+e3sgZ2V0RXhlcmNpc2UudGVtcG8gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLXRvb2x0aXAgY2xhc3M9XCJraXYtaGVscFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi1oZWxwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1xdWVzdGlvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlIHRlbXBvLCBjJ2VzdCB0b3V0IHNpbXBsZW1lbnQgbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ5dGhtZSBkZSBsYSByw6lww6l0aXRpb24sIGluZGlxdWFudCBxdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlIG1vdXZlbWVudCBkb2l0IMOqdHJlIGxlbnQsIGV4cGxvc2lmIG91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250csO0bMOpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLW5leHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvbiBAY2xpY2s9XCJuZXh0RXhlcmNpc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJnZXRFeGVyY2lzZSA9PT0gZ2V0VGhlTGFzdEV4ZXJjaXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+RmVybWVyPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+U3VpdmFudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGRvY3RvcjogT2JqZWN0LFxyXG4gICAgICAgIGV4ZXJjaXNlOiBPYmplY3QsXHJcbiAgICAgICAgZXhlcmNpc2VzOiBBcnJheSxcclxuICAgICAgICB3b3Jrc2hlZXQ6IE9iamVjdCxcclxuICAgICAgICBsYXN0RXhlcmNpc2U6IE9iamVjdCxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICAgICAgICAgIHJlbDogMCxcclxuICAgICAgICAgICAgICAgIHNob3dpbmZvOiAwLFxyXG4gICAgICAgICAgICAgICAgZWN2ZXI6IDIsXHJcbiAgICAgICAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0RXhlcmNpc2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4ZXJjaXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0RXhlcmNpc2VzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leGVyY2lzZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRXb3Jrc2hlZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndvcmtzaGVldDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFRoZUxhc3RFeGVyY2lzZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdEV4ZXJjaXNlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHZpZGVvRW5kZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJlZnMueW91dHViZS5wbGF5ZXIucGxheVZpZGVvKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJHJlZnMueW91dHViZS5wbGF5ZXIuc3RvcFZpZGVvKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXh0RXhlcmNpc2UoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldEV4ZXJjaXNlID09PSB0aGlzLmdldFRoZUxhc3RFeGVyY2lzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZGVvUGxheWVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZXhlcmNpc2VGb3JQbGF5aW5nID0gdGhpcy5leGVyY2lzZXMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAoZSkgPT4gZS5wb3NpdGlvbiA9PT0gdGhpcy5leGVyY2lzZS5wb3NpdGlvbiArIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlVmlkZW9QbGF5ZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbG9zZVZpZGVvUGxheWVyXCIsIHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4udmlkZW8tcGxheWVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDExMTExO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNXJlbSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzNCwgNDYsIDg0LCAwLjgpO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1jbG9zZS1wbGF5ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICB0b3A6IDFyZW07XHJcbiAgICAgICAgcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjU7XHJcblxyXG4gICAgICAgICYuZGFyayB7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIHRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICByaWdodDogMnJlbTtcclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTIlIDExJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCUgMTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4LjUlIDEwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNi41JSAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52aWRlby1mcmFtZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAuNXZ3O1xyXG4gICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiA5OC40cmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogNTUuNHJlbTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTFyZW0pO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjguNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAuOXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMy45cmVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIGFuZCAobWluLWhlaWdodDogMzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0LjJ2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00LjJyZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNC43cmVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOS40dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNXZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiAyNzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjcuNnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDl2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogMzg1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzLjV2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQ2NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNi40dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2NXZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzEuNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTZ2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogNjMwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2LjR2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY1dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0My44dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5OC40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtaW4taGVpZ2h0OiAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzLjd2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI0LjJ2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWluLWhlaWdodDogMzgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5LjJ2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM0LjJ2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWluLWhlaWdodDogNDcwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LjF2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMC4xdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1My4zdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDU4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNS4ydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2M3Z3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtaW4taGVpZ2h0OiA2NjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAuMXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzF2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWluLWhlaWdodDogNzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1LjF2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk5cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMi4ydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMS45dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiAzODVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYuM3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjl2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQ2NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMS4ydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNy45dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA1ODBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjYuNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDcuMXZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNjYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMxLjF2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1LjR2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTYuN3Z3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20tYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRncmF5LWxpZ2h0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5ib3R0b20tYmFyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjhyZW07XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5leGVyY2lzZS1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZS1jb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpcmV0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2UtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idG4tbmV4dCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZXhlcmNpc2Utc2VyaWVzLXJlcHMtb3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuM3JlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuODVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VyaWVzLXJlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjE4cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjU1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2Vjb25kLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC44cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZW1wbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1oZWxwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaWNvbi1oZWxwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmNmYmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDFjMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDhkMWMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Q2Y2ZiZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VsZWN0UGFydE9mQm9keS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODc0ZmQ5MGMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VsZWN0UGFydE9mQm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODc0ZmQ5MGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4NzRmZDkwY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzg3NGZkOTBjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzg3NGZkOTBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzg3NGZkOTBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NzRmZDkwYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4NzRmZDkwYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9jb21wb25lbnRzL1NlbGVjdFBhcnRPZkJvZHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTcwM2UyNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFnUGFydE9mQm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc1NzAzZTI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc1NzAzZTI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc1NzAzZTI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTcwM2UyNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NTcwM2UyNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9jb21wb25lbnRzL1RhZ1BhcnRPZkJvZHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTQxMmY0NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vV29ya1NoZWV0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vV29ya1NoZWV0UGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhNDEyZjQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhNDEyZjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhNDEyZjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTQxMmY0NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YTQxMmY0NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya1NoZWV0UGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04M2EzNGFkYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzgzYTM0YWRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzgzYTM0YWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzgzYTM0YWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODNhMzRhZGEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODNhMzRhZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZpZGVvTGlicmFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzY2MDBlZTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9WaWRlb0xpYnJhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjNjYwMGVlOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjNjYwMGVlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjNjYwMGVlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNjYwMGVlOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjNjYwMGVlOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvTGlicmFyeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jODQ2NzljMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WaWRlb1BsYXllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9WaWRlb1BsYXllci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jODQ2NzljMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImM4NDY3OWMwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzg0Njc5YzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzg0Njc5YzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzg0Njc5YzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jODQ2NzljMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjODQ2NzljMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhZ1BhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFnUGFydE9mQm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vV29ya1NoZWV0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZGVvTGlicmFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODc0ZmQ5MGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1dvcmtTaGVldFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbNF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWRlb0xpYnJhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWM4NDY3OWMwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NzRmZDkwYyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTcwM2UyNCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTQxMmY0NCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODNhMzRhZGEmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNjYwMGVlOCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWRlb1BsYXllci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yzg0Njc5YzAmc2NvcGVkPXRydWUmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJjbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LWNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmhpZGVTZWxlY3RCb3gsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJoaWRlU2VsZWN0Qm94XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdC1maWx0ZXJcIlxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogIV92bS5sb2FkaW5nUGFydHNPZkJvZHksXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWxvYWRpbmdQYXJ0c09mQm9keVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImdldFBhcnRPZkJvZHlTZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYXJ0b2Zib2R5LXNlbGVjdGVkIHBhcnQtb2YtYm9keVwiLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnJlc2V0U2VsZWN0IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJwaWVkXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1waWVkXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9waWVkLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgUGllZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSBcImphbWJlXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1qYW1iZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvamFtYmUuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBKYW1iZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSBcImJyYXNcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWJyYXNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2JyYXMuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBCcmFzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09IFwibWFpblwiXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tbWFpblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbWFpbi5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIE1haW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJlcGF1bGVcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWVwYXVsZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvZXBhdWxlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgw4lwYXVsZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSBcImRvc1wiXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tZG9zXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9kb3Muc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBEb3NcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJjZXJ2aWNhbGVzXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1jZXJ2aWNhbGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9jZXJ2aWNhbGVzLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgQ2VydmljYWxlc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSBcImxvbWJhaXJlc1wiXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tbG9tYmFpcmVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9sb21iYWlyZXMuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBMb21iYWlyZXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJ0aG9yYWNpcXVlXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi10aG9yYWNpcXVlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS90aG9yYWNpcXVlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgVGhvcmFjaXF1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dCB3c253XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5uYW1lKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiYi1yLWItemVyb1wiOiBfdm0uc2VsZWN0Qm94IH0sXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJwYXJ0b2Zib2R5LWNob2ljZS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogIV92bS5zZWxlY3RCb3ggPyBcIlBhcnRpZSBkdSBjb3Jwc1wiIDogXCJSZWNoZXJjaGV6XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpbHRlciB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RCb3ggPSB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGtleXVwOiBfdm0uc2VsZWN0Qm94V2l0aFRocm90dGxlLFxuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLmZpbHRlciA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhcnJvdy10b2dnbGUtYm94XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnNlbGVjdEJveCB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZVNlbGVjdEJveCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZzLWljb24tYXJyb3dcIiB9KV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJoZWlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RCb3gsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0Qm94XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdC1ib3hcIixcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmZvY3VzSW5wdXRTZWxlY3QgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLnBhcnRzT2ZCb2R5RmlsdGVyZWQubGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhcnRzT2ZCb2R5RmlsdGVyZWQsIGZ1bmN0aW9uKHBhcnQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYXJ0LW9mLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdFBhcnRPZkJvZHkocGFydClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pY29uID09PSBcInBpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tcGllZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9waWVkLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIFBpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pY29uID09PSBcImphbWJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWphbWJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2phbWJlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIEphbWJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJicmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWJyYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvYnJhcy5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBCcmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJtYWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLW1haW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbWFpbi5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBNYWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJlcGF1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tZXBhdWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2VwYXVsZS5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSDDiXBhdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJkb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tZG9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2Rvcy5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBEb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pY29uID09PSBcImNlcnZpY2FsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tY2VydmljYWxlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9jZXJ2aWNhbGVzLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIENlcnZpY2FsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pY29uID09PSBcImxvbWJhaXJlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1sb21iYWlyZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbG9tYmFpcmVzLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIExvbWJhaXJlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0Lmljb24gPT09IFwidGhvcmFjaXF1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi10aG9yYWNpcXVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3Rob3JhY2lxdWUuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgVGhvcmFjaXF1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IHdzbndcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocGFydC5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kLXBvYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWN1bmUgcGFydGllIGR1IGNvcnBzIG5lIGNvcnJlc3BvbmQuXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9hZGluZ1BhcnRzT2ZCb2R5LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb2FkaW5nUGFydHNPZkJvZHlcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGxvYWRpbmctcG9iXCJcbiAgICAgIH0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZzLWJ1dHRvblwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidGFnIHBhcnQtb2YtYm9keVwiLCBhdHRyczogeyBzaXplOiBcIm1pbmlcIiB9IH0sXG4gICAgW1xuICAgICAgX3ZtLnBhcnRPZkJvZHkuaWNvbiA9PT0gXCJwaWVkXCJcbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLXBpZWRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvcGllZC5zdmdcIiksXG4gICAgICAgICAgICAgIGFsdDogXCJJY29uZSBQaWVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwiamFtYmVcIlxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tamFtYmVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvamFtYmUuc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgSmFtYmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBhcnRPZkJvZHkuaWNvbiA9PT0gXCJicmFzXCJcbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWJyYXNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvYnJhcy5zdmdcIiksXG4gICAgICAgICAgICAgIGFsdDogXCJJY29uZSBCcmFzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwibWFpblwiXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1tYWluXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L21haW4uc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgTWFpblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFydE9mQm9keS5pY29uID09PSBcImVwYXVsZVwiXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1lcGF1bGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvZXBhdWxlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgYWx0OiBcIkljb25lIMOJcGF1bGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBhcnRPZkJvZHkuaWNvbiA9PT0gXCJkb3NcIlxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tZG9zXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2Rvcy5zdmdcIiksXG4gICAgICAgICAgICAgIGFsdDogXCJJY29uZSBEb3NcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBhcnRPZkJvZHkuaWNvbiA9PT0gXCJjZXJ2aWNhbGVzXCJcbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWNlcnZpY2FsZXNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvY2VydmljYWxlcy5zdmdcIiksXG4gICAgICAgICAgICAgIGFsdDogXCJJY29uZSBDZXJ2aWNhbGVzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwibG9tYmFpcmVzXCJcbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWxvbWJhaXJlc1wiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9sb21iYWlyZXMuc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgTG9tYmFpcmVzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwidGhvcmFjaXF1ZVwiXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi10aG9yYWNpcXVlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3Rob3JhY2lxdWUuc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgVGhvcmFjaXF1ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IHdzbndcIiB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhcnRPZkJvZHkubmFtZSkpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY29tcGxldGVkIGljb24tMjJcIiB9KVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiwgYXR0cnM6IHsgaWQ6IFwid29ya3NoZWV0XCIgfSB9LCBbXG4gICAgX2MoXCJoZWFkZXJcIiwgW1xuICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgcGFydC1vZi1ib2R5XCIgfSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF92bS5wYXRpZW50XG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmVzY3JpLWZvci1wYXRpZW50LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRlcmljdFRvRGFzaGJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByZXNjcmktZm9yLXBhdGllbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1c2VyLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIjI2XCIsIGNpcmNsZTogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnBhdGllbnQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBhdGllbnQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIvaW1nL2F2YXRhci1kZWZhdWx0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlci1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRVc2VyTmFtZShfdm0ucGF0aWVudCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBcInZvaXJcIiA9PT0gX3ZtLmFjdGlvblxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUtdmlld1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGhpZGRlbjogX3ZtLnBhdGllbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZGVyaWN0VG9EYXNoYm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRXb3Jrc2hlZXQudGl0bGUpKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0V29ya3NoZWV0LnBhcnRPZkJvZHlcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiVGFnUGFydE9mQm9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBhcnRPZkJvZHk6IF92bS5nZXRXb3Jrc2hlZXQucGFydE9mQm9keSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBoaWRkZW46IF92bS5wYXRpZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRlcmljdFRvRGFzaGJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIlRpdHJlIGRlIGxhIGZpY2hlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRpdGxlSXNFbXB0eU1lc3NhZ2UgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGl0bGVJc0VtcHR5TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGl0bGVJc0VtcHR5TWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ud29ya3NoZWV0LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ud29ya3NoZWV0LCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIndvcmtzaGVldC50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIFwidm9pclwiICE9PSBfdm0uYWN0aW9uXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtcGFyYW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlZGl0aW9uXCIgPT09IF92bS5hY3Rpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrSWZXb3Jrc2hlZXRTZXNzaW9uc0V4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJlZGl0aW9uXCIgPT09IF92bS5hY3Rpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hlY2tJZldvcmtzaGVldFNlc3Npb25zRXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhdmVydC1zZXNzaW9ucy1zdGFydFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtaW5mbyBpY29uLTE3XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3VzIG5lIHBvdXZleiBwbHVzIG1vZGlmaWVyIGxhIGR1csOpZSBkZSBsYVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzY3JpcHRpb24gY2FyIGxlIHBhdGllbnQgYSBkw6lqw6AgZMOpbWFycsOpIHNlc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9ucy5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtdGltaW5nLXBlcndlZWtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGVyV2Vla1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIlggcGFyIHNlbS4gKG1heDogNylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBcIjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrSWZEdXJhdGlvblZhbHVlSXNFbXB0eU9yTnVsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ud29ya3NoZWV0LnBlcldlZWssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLndvcmtzaGVldC5wZXJXZWVrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ud29ya3NoZWV0LCBcInBlcldlZWtcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwid29ya3NoZWV0LnBlcldlZWtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LXRpbWluZy1wZXJkYXlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGVyRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiWCBwYXIgam91ciAobWF4OiAzKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IFwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1cjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2tJZkR1cmF0aW9uVmFsdWVJc0VtcHR5T3JOdWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS53b3Jrc2hlZXQucGVyRGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS53b3Jrc2hlZXQucGVyRGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ud29ya3NoZWV0LCBcInBlckRheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ3b3Jrc2hlZXQucGVyRGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1wZXJpb2RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY2xvY2sgaWNvbi0xMVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZHVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJEdXLDqWUgZW4gc2VtLiAobWF4OiA1MilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBcIjUyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja0lmRHVyYXRpb25WYWx1ZUlzRW1wdHlPck51bGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLndvcmtzaGVldC5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ud29ya3NoZWV0LmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ud29ya3NoZWV0LCBcImR1cmF0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIndvcmtzaGVldC5kdXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0LWZpbHRlci1ibG9ja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNlbGVjdFBhcnRPZkJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGFydE9mQm9keTogX3ZtLndvcmtzaGVldC5wYXJ0T2ZCb2R5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5U2VsZWN0ZWQ6IF92bS5zZXRQYXJ0T2ZCb2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5UmVzZXQ6IF92bS5yZXNldFBvQlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhcnRPZkJvZHlJc0VtcHR5TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yLW1lc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGFydE9mQm9keUlzRW1wdHlNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJtYWluXCIsIFtcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiB7IFwibm8tbXRcIjogXCJ2b2lyXCIgPT09IF92bS5hY3Rpb24gfSxcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJleGVyY2lzZXMtcGxheWxpc3RcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkV4ZXJjaXNlc1BsYXlsaXN0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGRvY3RvcjogX3ZtLmRvY3RvcixcbiAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgIGFjdGlvbjogX3ZtLmFjdGlvbixcbiAgICAgICAgICAgICAgd29ya3NoZWV0OiBfdm0uZ2V0V29ya3NoZWV0LFxuICAgICAgICAgICAgICBleGVyY2lzZXM6IF92bS5nZXRFeGVyY2lzZXMsXG4gICAgICAgICAgICAgIGxvYWRpbmdWaWRlb3M6IF92bS5sb2FkaW5nVmlkZW9zLFxuICAgICAgICAgICAgICB2aWRlb3M6IF92bS52aWRlb3MsXG4gICAgICAgICAgICAgIGNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlOiBfdm0uY3NyZlRva2VuUmVtb3ZlRXhlcmNpc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi12YWxpZFwiLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgX3ZtLmJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQgfHxcbiAgICAgICAgICAgIF92bS5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgfHxcbiAgICAgICAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIFwiZWRpdGlvblwiID09PSBfdm0uYWN0aW9uXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nVmFsaWRFZGl0V29ya3NoZWV0IH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZEVkaXQgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFZhbGlkZXIgbGVzIG1vZGlmaWNhdGlvbnNcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgXCJjcmVhdGlvblwiID09PSBfdm0uYWN0aW9uICYmICFfdm0ucGF0aWVudFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0IH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZENyZWF0ZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2hlY2stY2lyY2xlXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgQ3LDqWVyIGxhIGZpY2hlXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIFwiY3JlYXRpb25cIiA9PT0gX3ZtLmFjdGlvbiAmJiBfdm0ucGF0aWVudFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0IH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZENyZWF0ZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2hlY2stY2lyY2xlXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgQ3LDqWVyIGxhIHByZXNjcmlwdGlvblxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaDFcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJwcmVzY3JpcHRpb24gXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJwb3VyXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlcy1saXN0XCIgfSwgW1xuICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0RXhlcmNpc2VzLCBmdW5jdGlvbihleGVyY2lzZSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRodW1ibmFpbC13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBcInZvaXJcIiAhPT0gX3ZtLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRucy1hcnJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5wb3NpdGlvbiAhPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cFBvc2l0aW9uKGV4ZXJjaXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNvcnQtdXBcIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnBvc2l0aW9uICE9IF92bS5nZXRFeGVyY2lzZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZG93blBvc2l0aW9uKGV4ZXJjaXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNvcnQtZG93blwiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuLXBsYXlsaXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlblZpZGVvUGxheWVyKGV4ZXJjaXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiIFZvaXJcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRodW1ibmFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsKCdcIiArIGV4ZXJjaXNlLnZpZGVvLnRodW1ibmFpbFVybCArIFwiJylcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1oMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhleGVyY2lzZS52aWRlby5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2b2lyXCIgIT09IF92bS5hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZW1vdmUtZXhlcmNpc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZUV4ZXJjaXNlKGV4ZXJjaXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRyYXNoXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIFwidm9pclwiICE9PSBfdm0uYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VyaWVzLXJlcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXJpZXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtc2VyaWVzIGljb24tMThcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJOYiBkZSBzw6lyaWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrSWZWYWx1ZUlzRW1wdHlPck51bGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS5udW1iZXJPZlNlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoZXhlcmNpc2UsIFwibnVtYmVyT2ZTZXJpZXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmVwc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1yZXBzIGljb24tMTlcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJOYiBkZSByw6lww6l0aXRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrSWZWYWx1ZUlzRW1wdHlPck51bGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm51bWJlck9mUmVwZXRpdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIFwidm9pclwiICE9PSBfdm0uYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGV4ZXJjaXNlLm9wdGlvbkFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiAhZXhlcmNpc2UudmlkZW8ub3B0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiT3B0aW9uXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm9wdGlvbkFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4ZXJjaXNlLm9wdGlvbkFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChleGVyY2lzZSwgXCJvcHRpb25BY3RpdmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJleGVyY2lzZS5vcHRpb25BY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFleGVyY2lzZS5vcHRpb25BY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS5vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4ZXJjaXNlLm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3Qtb3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5fdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChleGVyY2lzZS52aWRlby5vcHRpb25zLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBvcHRpb24ubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogb3B0aW9uLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhvcHRpb24ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBoaWRkZW46IGV4ZXJjaXNlLm9wdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTw6lsZWN0aW9ubmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGUtYmFja2dyb3VuZFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IGV4ZXJjaXNlLmhvbGRBY3RpdmUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJUZW5pclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja1ZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5ob2xkQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4ZXJjaXNlLmhvbGRBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoZXhlcmNpc2UsIFwiaG9sZEFjdGl2ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4ZXJjaXNlLmhvbGRBY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZWQ6ICFleGVyY2lzZS5ob2xkQWN0aXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIlNlY29uZGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS5ob2xkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGV4ZXJjaXNlLCBcImhvbGRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJleGVyY2lzZS5ob2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZW1wb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBleGVyY2lzZS50ZW1wb0FjdGl2ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlRlbXBvXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnRlbXBvQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS50ZW1wb0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChleGVyY2lzZSwgXCJ0ZW1wb0FjdGl2ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4ZXJjaXNlLnRlbXBvQWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGRpc2FibGVkOiAhZXhlcmNpc2UudGVtcG9BY3RpdmUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiKGV4OiAyIC0gMCAtIDEgLSAwKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4ZXJjaXNlLnRlbXBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGV4ZXJjaXNlLCBcInRlbXBvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhlcmNpc2UudGVtcG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtaGVscFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlIHRlbXBvLCBjJ2VzdCB0b3V0IHNpbXBsZW1lbnQgbGVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeXRobWUgZGUgbGEgcsOpcMOpdGl0aW9uLCBpbmRpcXVhbnQgcXVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGUgbW91dmVtZW50IGRvaXQgw6p0cmUgbGVudCwgZXhwbG9zaWYgb3VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250csO0bMOpLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWhlbHBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGV4ZXJjaXNlLnRlbXBvQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXF1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBcInZvaXJcIiA9PT0gX3ZtLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlcmllcy1yZXBzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VyaWVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LXNlcmllcyBpY29uLTE4XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGV4ZXJjaXNlLm51bWJlck9mU2VyaWVzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc8Opcmllc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LXJlcHMgaWNvbi0xOVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByw6lww6l0aXRpb25zXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2Uub3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnMgOiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoZXhlcmNpc2Uub3B0aW9uKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5ob2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5pciA6IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhleGVyY2lzZS5ob2xkKSArIFwic1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS50ZW1wb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGVtcG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcG8gOiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGV4ZXJjaXNlLnRlbXBvKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1oZWxwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZSB0ZW1wbywgYydlc3QgdG91dCBzaW1wbGVtZW50IGxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnl0aG1lIGRlIGxhIHLDqXDDqXRpdGlvbiwgaW5kaXF1YW50IHF1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlIG1vdXZlbWVudCBkb2l0IMOqdHJlIGxlbnQsIGV4cGxvc2lmIG91XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHLDtGzDqS5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1oZWxwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtcXVlc3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBcInZvaXJcIiAhPT0gX3ZtLmFjdGlvblxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhZGQtdmlkZW9zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuLWFkZC12aWRlb3NcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuVmlkZW9MaWJyYXJ5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEteW91dHViZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBBam91dGVyIGRlcyB2aWTDqW9zXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS52aWRlb1BsYXllclRvZ2dsZVxuICAgICAgICAgICAgPyBfYyhcIlZpZGVvUGxheWVyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZG9jdG9yOiBfdm0uZG9jdG9yLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBfdm0uZ2V0V29ya3NoZWV0LFxuICAgICAgICAgICAgICAgICAgZXhlcmNpc2U6IF92bS5leGVyY2lzZUZvclBsYXlpbmcsXG4gICAgICAgICAgICAgICAgICBleGVyY2lzZXM6IF92bS5nZXRFeGVyY2lzZXMsXG4gICAgICAgICAgICAgICAgICBsYXN0RXhlcmNpc2U6IF92bS5nZXRUaGVMYXN0RXhlcmNpc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsb3NlVmlkZW9QbGF5ZXI6IF92bS5jbG9zZVZpZGVvUGxheWVyIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnZpZGVvTGlicmFyeVRvZ2dsZVxuICAgICAgICAgICAgPyBfYyhcIlZpZGVvTGlicmFyeVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRvY3RvcjogX3ZtLmRvY3RvcixcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmdWaWRlb3M6IF92bS5sb2FkaW5nVmlkZW9zLFxuICAgICAgICAgICAgICAgICAgdmlkZW9zOiBfdm0udmlkZW9zXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xvc2VWaWRlb0xpYnJhcnk6IF92bS5jbG9zZVZpZGVvTGlicmFyeSxcbiAgICAgICAgICAgICAgICAgIFwidmlkZW9zLXNlbGVjdGlvblwiOiBfdm0uYWRkVmlkZW9zU2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZzLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kYWxDb25maXJtUmVtb3ZlRXhlcmNpc2UsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5tb2RhbENvbmZpcm1SZW1vdmVFeGVyY2lzZSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxDb25maXJtUmVtb3ZlRXhlcmNpc2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbmZpcm0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiBkZVwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb25maXJtLWRldGFpbCByZW1vdmUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29uZmlybS1pY29uIHJlbW92ZS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdHJhc2hcIiB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnJlbW92ZUV4ZXJjaXNlRGV0YWlscy52aWRlby5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29uZmlybS1idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kYWxDb25maXJtUmVtb3ZlRXhlcmNpc2UgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIEFubnVsZXJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5idG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZSB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZFJlbW92ZUV4ZXJjaXNlIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgQ29uZmlybWVyXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSB0aHVtYm5haWwtd3JhcHBlclwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaDIgdy00NVwiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXJpZXMtcmVwc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHNlcmllcyB3LTI1XCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgcmVwcyB3LTE1XCIgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IG9wdGlvbiB3LTI1XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSB0ZW1wbyB3LTE1XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBob2xkIHctMjVcIiB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21tZW50YXJ5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHRpdGxlIHctMjVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGlucHV0XCIgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJleGVyY2lzZSBsb2FkaW5nLWJsb2NrXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgdGh1bWJuYWlsLXdyYXBwZXJcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGgyIHctMzVcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWxzXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VyaWVzLXJlcHNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBzZXJpZXMgdy0xNVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHJlcHMgdy0yNVwiIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBvcHRpb24gdy0yNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgdGVtcG8gdy0xNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaG9sZCB3LTI1XCIgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tbWVudGFyeVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSB0aXRsZSB3LTI1XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBpbnB1dFwiIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2UgbG9hZGluZy1ibG9ja1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHRodW1ibmFpbC13cmFwcGVyXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBoMiB3LTQ1XCIgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlcmllcy1yZXBzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgc2VyaWVzIHctMTVcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSByZXBzIHctMTVcIiB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgb3B0aW9uIHctMjVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHRlbXBvIHctMTVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGhvbGQgdy0yNVwiIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbW1lbnRhcnlcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgdGl0bGUgdy0yNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaW5wdXRcIiB9KVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInZpZGVvLWxpYnJhcnlcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIiwgYXR0cnM6IHsgaWQ6IFwidmlkZW8tbGlicmFyeVwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZzLWRpYWxvZ19fY2xvc2UgYnRuLWNsb3NlLWxpYnJhcnktc21cIixcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlVmlkZW9MaWJyYXJ5IH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZzLWljb24tY2xvc2UgdnMtaWNvbi1ob3Zlci14XCIgfSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgVmlkw6lvdGjDqHF1ZVxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1ZpZGVvc1xuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvdW50LXZpZGVvc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggfHwgX3ZtLnNlbGVjdGVkVGFncy5sZW5ndGggfHwgX3ZtLnNlbGVjdGVkUG9CXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbHRlclwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRUb3RhbFZpZGVvc0ZpbHRlcmVkKSArIFwiIHZpZMOpb1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VG90YWxWaWRlb3NGaWx0ZXJlZCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoIHx8IF92bS5zZWxlY3RlZFRhZ3MubGVuZ3RoIHx8IF92bS5zZWxlY3RlZFBvQlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRyw6llXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRUb3RhbFZpZGVvc0ZpbHRlcmVkID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcInNcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJpbWFyeS1hY3Rpb25zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJGaWx0cmVyIHBhciBub20gZGUgdmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UgPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJraXYtc2VsZWN0IHRhZ3NcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VGFnc0Zyb21BbGxWaWRlb3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk1vdHMtQ2zDqXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RUYWcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWdzID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0VGFnc0Zyb21BbGxWaWRlb3MsIGZ1bmN0aW9uKHRhZywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaSwgYXR0cnM6IHsgbGFiZWw6IHRhZywgdmFsdWU6IHRhZyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0YWcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwibm90RGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW4gbW90LWNsw6kgbmUgY29ycmVzcG9uZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBzZWxlY3QtdGFnc1wiIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIlNlbGVjdFBhcnRPZkJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGFydE9mQm9keTogX3ZtLnNlbGVjdGVkUG9CIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5U2VsZWN0ZWQ6IF92bS5maWx0ZXJCeVBhcnRPZkJvZHksXG4gICAgICAgICAgICAgICAgICAgIHBhcnRPZkJvZHlSZXNldDogX3ZtLnJlc2V0U2VsZWN0ZWRQb0JcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmlkZW8tbGlicmFyeS1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdWaWRlb3MgJiYgX3ZtLmdldFZpZGVvcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZpZGVvcy1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nZXRWaWRlb3MsIGZ1bmN0aW9uKHZpZGVvLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWQtdmlkZW9cIjogX3ZtLnNlbGVjdGVkVmlkZW9zLmluY2x1ZGVzKHZpZGVvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZpZGVvLXRodW1ibmFpbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS52aWV3VmlkZW8odmlkZW8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdmlkZW8udGh1bWJuYWlsVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInZpZ25ldHRlIGRlIGxhIHZpZMOpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTEycHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIC03NyA1MTIuMDAyMTMgNTEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUxMnB0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidGVzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm01MDEuNDUzMTI1IDU2LjA5Mzc1Yy01LjkwMjM0NC0yMS45MzM1OTQtMjMuMTk1MzEzLTM5LjIyMjY1Ni00NS4xMjUtNDUuMTI4OTA2LTQwLjA2NjQwNi0xMC45NjQ4NDQtMjAwLjMzMjAzMS0xMC45NjQ4NDQtMjAwLjMzMjAzMS0xMC45NjQ4NDRzLTE2MC4yNjE3MTkgMC0yMDAuMzI4MTI1IDEwLjU0Njg3NWMtMjEuNTA3ODEzIDUuOTAyMzQ0LTM5LjIyMjY1NyAyMy42MTcxODctNDUuMTI1IDQ1LjU0Njg3NS0xMC41NDI5NjkgNDAuMDYyNS0xMC41NDI5NjkgMTIzLjE0ODQzOC0xMC41NDI5NjkgMTIzLjE0ODQzOHMwIDgzLjUwMzkwNiAxMC41NDI5NjkgMTIzLjE0ODQzN2M1LjkwNjI1IDIxLjkyOTY4NyAyMy4xOTUzMTIgMzkuMjIyNjU2IDQ1LjEyODkwNiA0NS4xMjg5MDYgNDAuNDg0Mzc1IDEwLjk2NDg0NCAyMDAuMzI4MTI1IDEwLjk2NDg0NCAyMDAuMzI4MTI1IDEwLjk2NDg0NHMxNjAuMjYxNzE5IDAgMjAwLjMyODEyNS0xMC41NDY4NzVjMjEuOTMzNTk0LTUuOTAyMzQ0IDM5LjIyMjY1Ni0yMy4xOTUzMTIgNDUuMTI4OTA2LTQ1LjEyNSAxMC41NDI5NjktNDAuMDY2NDA2IDEwLjU0Mjk2OS0xMjMuMTQ4NDM4IDEwLjU0Mjk2OS0xMjMuMTQ4NDM4cy40MjE4NzUtODMuNTA3ODEyLTEwLjU0Njg3NS0xMjMuNTcwMzEyem0wIDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiNmMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInRlc3QyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibTIwNC45Njg3NSAyNTYgMTMzLjI2OTUzMS03Ni43NTc4MTItMTMzLjI2OTUzMS03Ni43NTc4MTN6bTAgMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZpZGVvLWRldGFpbHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmlkZW8tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ubmFtZS5sZW5ndGggPCA0NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModmlkZW8ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ubmFtZS5zdWJzdHJpbmcoMCwgNDUpICsgXCIuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uc2VsZWN0ZWRWaWRlb3MuaW5jbHVkZXModmlkZW8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tYWRkLXZpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjaXJjbGU6IFwiXCIsIHNpemU6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkVmlkZW8odmlkZW8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBsdXMtaWNvblwiLCB7IGF0dHJzOiB7IHNpemU6IFwiMnhcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1yZW1vdmUtdmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgc2l6ZTogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVWaWRlbyh2aWRlbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiY2hlY2staWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCIyeFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1ZpZGVvcyAmJlxuICAgICAgICAgICAgICAhX3ZtLmdldFZpZGVvcy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgIV92bS5zZWFyY2ggJiZcbiAgICAgICAgICAgICAgIV92bS5zZWxlY3RlZFRhZ3MubGVuZ3RoICYmXG4gICAgICAgICAgICAgICFfdm0uc2VsZWN0ZWRQb0JcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCIgfSwgW192bS5fbSgwKV0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5sb2FkaW5nVmlkZW9zICYmXG4gICAgICAgICAgICAgICFfdm0uZ2V0VmlkZW9zLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAoX3ZtLnNlYXJjaCB8fCBfdm0uc2VsZWN0ZWRUYWdzLmxlbmd0aCB8fCBfdm0uc2VsZWN0ZWRQb0IpXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEteW91dHViZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdWN1bmUgdmlkw6lvIG4nYSDDqXTDqSB0cm91dsOpZSBhdmVjXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoJ1wiJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2VhcmNoKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdignXCInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5zZWFyY2ggJiYgX3ZtLnNlbGVjdGVkVGFncy5sZW5ndGgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnNlYXJjaCAmJiBfdm0uc2VsZWN0ZWRQb0IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFncy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWxlY3RlZFRhZ3MsIGZ1bmN0aW9uKHRhZywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGksIHN0YXRpY0NsYXNzOiBcIm5mLXRhZyB0YWdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQgd3Nud1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0YWcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRQb0JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZi10YWcgcGFydC1vZi1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dCB3c253XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNlbGVjdGVkUG9CLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubG9hZGluZ1ZpZGVvc1xuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHZpZGVvcy1saXN0XCIgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udmlkZW9zLmxlbmd0aCA+IF92bS5tYXhcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZzLXBhZ2luYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IF92bS5nZXRMZW5ndGgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFNlYXJjaChfdm0udmlkZW9zLCBfdm0uc2VhcmNoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWF4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldExlbmd0aChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRTZWFyY2goX3ZtLnZpZGVvcywgX3ZtLnNlYXJjaCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWF4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihudW1iZXJQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bWJlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBudW1iZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bWJlclBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhudW1iZXJQYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuLXZhbGlkLXNlbGVjdGlvblwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5idG5Mb2FkaW5nVmFsaWRWaWRlb3NTZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbG9hZGluZzogX3ZtLmJ0bkxvYWRpbmdWYWxpZFZpZGVvc1NlbGVjdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmFsaWRWaWRlb3NTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJWYWxpZGVyIGxhIHNlbGVjdGlvblxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZzLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidmlldy12aWRlb1wiLFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsVmlld1ZpZGVvLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubW9kYWxWaWV3VmlkZW8gPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsVmlld1ZpZGVvXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInlvdXR1YmVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJwbGF5ZXItdmFyc1wiOiBfdm0ucGxheWVyVmFycyxcbiAgICAgICAgICAgICAgXCJ2aWRlby1pZFwiOiBfdm0uc2VsZWN0ZWRWaWV3VmlkZW8ueW91dHViZUlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFiIGZhLXlvdXR1YmVcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIklsIG4neSBhIGF1Y3VuZSB2aWTDqW9cIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidmlkZW8tcGxheWVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1jbG9zZS1wbGF5ZXJcIixcbiAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlVmlkZW9QbGF5ZXIgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LXggaWNvbi0yMVwiIH0pXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGtleTogXCJ2aWRlb1wiLCBzdGF0aWNDbGFzczogXCJ2aWRlby1mcmFtZVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwieW91dHViZVwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInlvdXR1YmVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJwbGF5ZXItdmFyc1wiOiBfdm0ucGxheWVyVmFycyxcbiAgICAgICAgICAgICAgICAgIFwidmlkZW8taWRcIjogX3ZtLmdldEV4ZXJjaXNlLnZpZGVvLnlvdXR1YmVJZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgZW5kZWQ6IF92bS52aWRlb0VuZGVkIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWJhclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbS1iYXItY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2UtZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJleGVyY2lzZS1jb3VudFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEV4ZXJjaWNlIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRFeGVyY2lzZS5wb3NpdGlvbiArIDEpICtcbiAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldEV4ZXJjaXNlcyA/IF92bS5nZXRFeGVyY2lzZXMubGVuZ3RoIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXJldFwiIH0sIFtfdm0uX3YoXCItXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2UtbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRFeGVyY2lzZS52aWRlby5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2Utc2VyaWVzLXJlcHMtb3B0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXJpZXMtcmVwc1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlcmllc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1zZXJpZXMgaWNvbi0xOFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRFeGVyY2lzZS5udW1iZXJPZlNlcmllcykpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHPDqXJpZXNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZXBzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LXJlcHMgaWNvbi0xOVwiIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZ2V0RXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9ucykpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcsOpcMOpdGl0aW9uc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2Vjb25kLWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLmdldEV4ZXJjaXNlLm9wdGlvblxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3B0aW9ucyA6IFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmdldEV4ZXJjaXNlLm9wdGlvbikpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uZ2V0RXhlcmNpc2UuaG9sZFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbmlyIDogXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2V0RXhlcmNpc2UuaG9sZCkgKyBcInNcIildKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5nZXRFeGVyY2lzZS50ZW1wb1xuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGVtcG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW1wbyA6IFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2V0RXhlcmNpc2UudGVtcG8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1oZWxwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgdGVtcG8sIGMnZXN0IHRvdXQgc2ltcGxlbWVudCBsZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ5dGhtZSBkZSBsYSByw6lww6l0aXRpb24sIGluZGlxdWFudCBxdWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZSBtb3V2ZW1lbnQgZG9pdCDDqnRyZSBsZW50LCBleHBsb3NpZiBvdVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyw7Rsw6kuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjY5NTUxODAwMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1oZWxwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXF1ZXN0aW9uXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi1uZXh0XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidnMtYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5uZXh0RXhlcmNpc2UgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uZ2V0RXhlcmNpc2UgPT09IF92bS5nZXRUaGVMYXN0RXhlcmNpc2VcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkZlcm1lclwiKV0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTdWl2YW50XCIpXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiVnVlIiwiV29ya1NoZWV0UGFnZSIsImF4aW9zIiwiVnVlQXhpb3MiLCJ1c2UiLCJWdWVzYXgiLCJWdWVZb3V0dWJlIiwicmVuZGVyIiwiaCIsIiRtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=